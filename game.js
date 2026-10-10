/**
 * RideQuest - Core Game State & Controller
 * Story-Driven 3D System Design Learning Game for First-Year Students
 * 
 * Strict Learning Flow for Every Level:
 * Story -> Problem Question -> 2-3 Options -> Answer Feedback -> 
 * Concept Explanation Popup -> Continue -> YouTube Lesson -> Video Completed -> Next Level Unlocked
 */

class GameController {
  constructor() {
    this.currentLevelIndex = 0;
    this.xp = 0;
    this.completedLevelIds = new Set();
    this.completedVideoLevelIds = new Set();
    this.selectedChoice = null;
    this.isEvaluating = false;
    this.simulationEngine = null;
    this.ytPlayer = null;
    this.isVideoCompleted = false;
    this.isTeacherModeOpen = false;
    this.isCodexOpen = false;

    this.init();
  }

  setElementText(id, text) {
    const el = document.getElementById(id);
    if (!el) return;
    if (typeof text === 'string' && (text.includes('<') || text.includes('&'))) {
      el.innerHTML = text;
    } else {
      el.innerText = text;
    }
  }

  init() {
    this.loadState();
    this.simulationEngine = new window.SimulationEngine('sim-viewport');

    // Attach global YouTube message listener for iframe completion events
    this.setupYouTubeMessageListener();

    // Pre-render current level
    this.loadLevel(this.currentLevelIndex);

    if (this.currentLevelIndex > 0 || this.completedLevelIds.size > 0) {
      const startBtn = document.getElementById('btn-start-journey');
      if (startBtn) startBtn.innerText = "CONTINUE YOUR ADVENTURE →";
    }
  }

  setupYouTubeMessageListener() {
    window.addEventListener('message', (event) => {
      try {
        let data = event.data;
        if (typeof data === 'string') {
          data = JSON.parse(data);
        }
        // YouTube Player postMessage ended event has info === 0 or event === "onStateChange" & info === 0
        if (data && (data.info === 0 || (data.event === 'onStateChange' && data.info === 0))) {
          console.log('YouTube iframe reported video ENDED state!');
          this.handleVideoEnded();
        }
      } catch (e) {
        // Not a JSON message or unrelated iframe
      }
    });
  }

  loadState() {
    try {
      const saved = localStorage.getItem('ridequest_save');
      if (saved) {
        const data = JSON.parse(saved);
        this.currentLevelIndex = typeof data.currentLevelIndex === 'number' ? Math.min(data.currentLevelIndex, (window.GAME_LEVELS ? window.GAME_LEVELS.length - 1 : 27)) : 0;
        this.xp = data.xp || 0;
        this.completedLevelIds = new Set(data.completedLevelIds || []);
        this.completedVideoLevelIds = new Set(data.completedVideoLevelIds || []);
      }
    } catch (e) {
      console.warn('Failed to load save state:', e);
    }
  }

  saveState() {
    try {
      const data = {
        currentLevelIndex: this.currentLevelIndex,
        xp: this.xp,
        completedLevelIds: Array.from(this.completedLevelIds),
        completedVideoLevelIds: Array.from(this.completedVideoLevelIds)
      };
      localStorage.setItem('ridequest_save', JSON.stringify(data));
    } catch (e) {}
  }

  resetProgress() {
    if (confirm("Reset all learning progress back to Level 1?")) {
      localStorage.removeItem('ridequest_save');
      this.currentLevelIndex = 0;
      this.xp = 0;
      this.completedLevelIds.clear();
      this.completedVideoLevelIds.clear();
      window.location.reload();
    }
  }

  startGame() {
    try { window.soundEngine?.select?.(); } catch (e) {}
    const landing = document.getElementById('screen-landing');
    if (landing) landing.classList.add('hidden');
    if (this.currentLevelIndex > 0) {
      document.getElementById('screen-gameplay')?.classList.remove('hidden');
      this.loadLevel(this.currentLevelIndex);
    } else {
      const story = document.getElementById('screen-story-intro');
      if (story) story.classList.remove('hidden');
    }
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) {}
  }

  beginLevel1() {
    try { window.soundEngine?.select?.(); } catch (e) {}
    const story = document.getElementById('screen-story-intro');
    const gameplay = document.getElementById('screen-gameplay');
    if (story) story.classList.add('hidden');
    if (gameplay) gameplay.classList.remove('hidden');
    this.loadLevel(this.currentLevelIndex);
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) {}
  }

  loadLevel(index) {
    if (!window.GAME_LEVELS || window.GAME_LEVELS.length === 0) return;
    if (index >= window.GAME_LEVELS.length) {
      index = window.GAME_LEVELS.length - 1;
    }
    this.currentLevelIndex = index;
    this.selectedChoice = null;
    this.isVideoCompleted = false;
    this.saveState();

    const level = window.GAME_LEVELS[this.currentLevelIndex];

    // Ensure standard gameplay screen is visible only when not on landing screen
    const landing = document.getElementById('screen-landing');
    const isLanding = landing && !landing.classList.contains('hidden');
    if (!isLanding) {
      document.getElementById('screen-gameplay')?.classList.remove('hidden');
    } else {
      document.getElementById('screen-gameplay')?.classList.add('hidden');
    }
    document.getElementById('screen-video-lesson')?.classList.add('hidden');
    document.getElementById('discovery-modal')?.classList.add('hidden');
    document.getElementById('screen-victory')?.classList.add('hidden');

    this.updateTopBar(level);
    this.renderLevelView(level);
    this.updateTeacherMode();
  }

  updateTopBar(level) {
    const stage = window.GAME_STAGES?.find(s => s.id === level.stage);
    this.setElementText('stage-badge-text', stage ? stage.name.toUpperCase() : 'SYSTEM FOUNDATIONS');
    const totalLevels = window.GAME_LEVELS ? window.GAME_LEVELS.length : 28;
    this.setElementText('level-indicator-text', `Level ${level.id} / ${totalLevels}`);
    this.setElementText('xp-count-val', `${this.xp}`);

    // Stepper dots for all 9 levels
    const stepperContainer = document.getElementById('stage-stepper-dots');
    if (stepperContainer && window.GAME_LEVELS) {
      stepperContainer.innerHTML = window.GAME_LEVELS.map((lvl, idx) => {
        const isDone = this.completedLevelIds.has(lvl.id);
        const isCurrent = lvl.id === level.id;
        const dotClass = isCurrent ? 'dot current' : (isDone ? 'dot done' : 'dot pending');
        const connector = idx < window.GAME_LEVELS.length - 1 ? `<div class="dot-connector ${isDone ? 'active' : ''}"></div>` : '';
        return `<div class="${dotClass}" title="Level ${lvl.id}: ${lvl.title}" onclick="window.game.jumpToLevel(${idx})"></div>${connector}`;
      }).join('');
    }

    this.setElementText('challenge-topic-text', `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f39c12" stroke-width="2" class="rq-icon btn-icon"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="2" fill="#f39c12"/></svg> Mission: ${level.topicHint || level.title}`);

    const progressFill = document.getElementById('progress-bar-fill');
    if (progressFill) progressFill.style.width = `${((level.id) / totalLevels) * 100}%`;
  }

  jumpToLevel(idx) {
    // Only allow jumping if level is completed or adjacent
    if (idx <= this.currentLevelIndex || this.completedLevelIds.has(idx + 1)) {
      window.soundEngine?.click?.();
      this.loadLevel(idx);
    }
  }

  updateCompanionState(state, dialogue) {
    const faceEl = document.getElementById('avatar-face');
    const textEl = document.getElementById('companion-text');
    const compCard = document.getElementById('architect-companion');

    if (compCard) {
      compCard.classList.remove('state-thinking', 'state-observing', 'state-curious', 'state-celebrating');
      compCard.classList.add(`state-${state}`);
    }

    if (faceEl && window.Icons && typeof window.Icons.architectAvatar === 'function') {
      faceEl.innerHTML = window.Icons.architectAvatar({ size: 44, mood: state });
    }

    if (textEl && dialogue) {
      textEl.innerText = dialogue;
    }
  }

  renderLevelView(level) {
    // Hide all overlays & feedback cards
    document.getElementById('discovery-modal')?.classList.add('hidden');
    document.getElementById('consequence-feedback-card')?.classList.add('hidden');
    document.getElementById('success-feedback-banner')?.classList.add('hidden');
    document.getElementById('what-happened-modal')?.classList.add('hidden');

    this.isEvaluating = false;

    // Populate Story & Problem screen (everyday English, no technical jargon)
    this.setElementText('lvl-time', level.time);
    this.setElementText('lvl-users', level.usersCount);
    this.setElementText('lvl-title', level.title);
    this.setElementText('lvl-situation', level.situation);
    this.setElementText('lvl-problem', level.problem);

    this.updateCompanionState('thinking', `“Review the situation carefully. What decision should we make?”`);

    // Render 2 or 3 beginner-friendly choices
    const optionsContainer = document.getElementById('options-grid');
    if (optionsContainer) {
      optionsContainer.innerHTML = '';

      level.choices.forEach(choice => {
        const btn = document.createElement('div');
        btn.className = 'choice-card';
        btn.id = `choice-opt-${choice.id}`;
        btn.innerHTML = `
          <div class="choice-letter">Option ${choice.id}</div>
          <div class="choice-text">"${choice.text}"</div>
          <div class="choice-action">Test this solution →</div>
        `;
        btn.onclick = () => this.makeChoice(choice);
        optionsContainer.appendChild(btn);
      });
    }

    // Render State 1: Initial Problem 3D Simulation
    if (this.simulationEngine) {
      this.simulationEngine.render(level, null);
    }
  }

  setChoicesDisabled(disabled) {
    const allCards = document.querySelectorAll('.choice-card');
    allCards.forEach(c => {
      if (disabled) c.classList.add('disabled');
      else c.classList.remove('disabled');
    });
  }

  makeChoice(choice) {
    if (this.isEvaluating) return;
    this.isEvaluating = true;
    window.soundEngine?.click?.();
    this.selectedChoice = choice;
    const level = window.GAME_LEVELS[this.currentLevelIndex];

    // Lock choices and highlight
    this.setChoicesDisabled(true);

    const allCards = document.querySelectorAll('.choice-card');
    allCards.forEach(c => c.classList.remove('selected', 'optimal', 'suboptimal'));

    const selectedElem = document.getElementById(`choice-opt-${choice.id}`);
    if (selectedElem) {
      selectedElem.classList.add('selected');
      if (choice.isOptimal) {
        selectedElem.classList.add('optimal');
      } else {
        selectedElem.classList.add('suboptimal');
      }
    }

    this.updateCompanionState('observing', `“Testing Option ${choice.id}... Let's observe the result!”`);

    // Render State 2: Selected Answer Consequence in 3D Diorama
    if (this.simulationEngine) {
      this.simulationEngine.render(level, choice);
    }
    this.updateTeacherMode();

    if (!choice.isOptimal) {
      // Suboptimal choice consequence
      setTimeout(() => {
        window.soundEngine?.overload?.();
        this.updateCompanionState('curious', `“Look at what happened. That created an unexpected bottleneck!”`);
        this.showConsequenceCard(level, choice);
        this.isEvaluating = false;
      }, 1100);
    } else {
      // Correct choice success
      setTimeout(() => {
        window.soundEngine?.success?.();
        this.updateCompanionState('celebrating', `“Brilliant! The solution works! Everything flows smoothly!”`);
        this.showSuccessBanner(level, choice);

        setTimeout(() => {
          this.showDiscoveryModal(level, choice);
          this.isEvaluating = false;
        }, 1500);
      }, 1100);
    }
  }

  showConsequenceCard(level, choice) {
    const card = document.getElementById('consequence-feedback-card');
    if (card) {
      card.classList.remove('hidden');
      const wh = choice.whatHappened || {};
      this.setElementText('consequence-title', `Option ${choice.id} Result: Practical Bottleneck`);
      this.setElementText('consequence-body', choice.consequenceText || wh.bottleneck || "This choice led to an operational breakdown.");
    }
  }

  hideConsequenceCard() {
    document.getElementById('consequence-feedback-card')?.classList.add('hidden');
  }

  showSuccessBanner(level, choice) {
    const banner = document.getElementById('success-feedback-banner');
    if (banner) {
      banner.classList.remove('hidden');
      this.setElementText('success-desc-text', choice.successSummary || "Optimal decision! The system flows smoothly with zero bottlenecks!");
    }
  }

  hideSuccessBanner() {
    document.getElementById('success-feedback-banner')?.classList.add('hidden');
  }

  retryLevel() {
    window.soundEngine?.click?.();
    this.hideConsequenceCard();
    this.hideWhatHappenedModal();
    this.setChoicesDisabled(false);

    const allCards = document.querySelectorAll('.choice-card');
    allCards.forEach(c => c.classList.remove('selected', 'optimal', 'suboptimal', 'disabled'));

    this.selectedChoice = null;
    this.isEvaluating = false;

    const level = window.GAME_LEVELS[this.currentLevelIndex];
    this.updateCompanionState('thinking', `“Let's rethink our approach. Which solution should we test next?”`);

    // Reset 3D simulation to clean problem state
    if (this.simulationEngine) {
      this.simulationEngine.render(level, null);
    }
  }

  showWhatHappened() {
    window.soundEngine?.click?.();
    const modal = document.getElementById('what-happened-modal');
    const choice = this.selectedChoice;
    if (modal && choice) {
      modal.classList.remove('hidden');
      this.setElementText('wh-choice-echo', `You tested Option ${choice.id}: "${choice.text}"`);

      const wh = choice.whatHappened || {};
      this.setElementText('wh-helped-text', wh.helped || "This addressed the initial surface request.");
      this.setElementText('wh-bottleneck-text', wh.bottleneck || choice.consequenceText);
      this.setElementText('wh-reflection-prompt', `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f39c12" stroke-width="2" class="rq-icon btn-icon"><path d="M9 18h6M10 21h4"/><path d="M9 14.5A7 7 0 1 1 15 14.5c-.8.8-1.5 2-1.5 3.5h-3c0-1.5-.7-2.7-1.5-3.5z" fill="#f39c12" fill-opacity="0.15"/></svg> Architect's Reflection: ${wh.reflectionQuestion || "Did this approach solve the underlying system bottleneck?"}`);
    }
  }

  hideWhatHappenedModal() {
    document.getElementById('what-happened-modal')?.classList.add('hidden');
  }

  // =========================================================================
  // STAGE 3: CONCEPT EXPLANATION POPUP (7 Required Sections)
  // =========================================================================
  showDiscoveryModal(level, choice) {
    const modal = document.getElementById('discovery-modal');
    if (!modal) return;
    modal.classList.remove('hidden');

    const disc = level.discovery;

    // 1. Technical Concept Name from Excel
    this.setElementText('disc-badge-title', disc.badge);
    this.setElementText('disc-tagline', disc.tagline);

    // 2. Simple Meaning
    this.setElementText('disc-simple-meaning', disc.simpleMeaning || disc.tagline);

    // 3. Everyday Analogy
    this.setElementText('disc-analogy', disc.analogy);

    // 4. How It Works (3 to 5 numbered steps)
    const howItWorksContainer = document.getElementById('disc-how-it-works-list');
    if (howItWorksContainer && disc.howItWorks) {
      howItWorksContainer.innerHTML = disc.howItWorks.map(step => `
        <div class="step-card">
          <div class="step-text">${step}</div>
        </div>
      `).join('');
    }

    // 5. Why It Matters
    this.setElementText('disc-why-it-matters', disc.whyItMatters || "Ensures predictable operations, high speed, and fault resilience.");

    // 6. Visual Explanation Diagram
    this.setElementText('disc-visual-diagram', disc.visualExplanation || `${disc.badge} Flow Demonstration`);

    // Contrast cards
    if (disc.contrast) {
      this.setElementText('disc-contrast-a-title', disc.contrast.termA);
      this.setElementText('disc-contrast-a-desc', disc.contrast.descA);
      this.setElementText('disc-contrast-b-title', disc.contrast.termB);
      this.setElementText('disc-contrast-b-desc', disc.contrast.descB);
    }

    // Advanced Notes
    this.setElementText('disc-advanced-text', disc.advancedInfo || "");
    const advPanel = document.getElementById('advanced-panel');
    if (advPanel) advPanel.classList.add('hidden');

    // Award XP
    if (!this.completedLevelIds.has(level.id)) {
      this.completedLevelIds.add(level.id);
      this.xp += 150;
      this.updateTopBar(level);
      this.saveState();
      this.animateXpGain();
    }
  }

  animateXpGain() {
    const xpBadge = document.getElementById('xp-display');
    if (xpBadge) {
      xpBadge.classList.add('pulse-glow');
      setTimeout(() => xpBadge.classList.remove('pulse-glow'), 2000);
    }
  }

  // =========================================================================
  // STAGE 4: YOUTUBE VIDEO LESSON EMBEDDED INSIDE THE GAME
  // =========================================================================
  continueToVideo() {
    window.soundEngine?.select?.();

    // Close discovery popup
    document.getElementById('discovery-modal')?.classList.add('hidden');
    this.hideConsequenceCard();
    this.hideSuccessBanner();
    this.hideWhatHappenedModal();

    // Switch screen to Video Lesson
    document.getElementById('screen-gameplay')?.classList.add('hidden');
    const videoScreen = document.getElementById('screen-video-lesson');
    if (videoScreen) {
      videoScreen.classList.remove('hidden');
    }
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) {}

    const level = window.GAME_LEVELS[this.currentLevelIndex];
    this.isVideoCompleted = this.completedVideoLevelIds.has(level.id);

    // Populate Lesson Header & Info
    const totalLevels = window.GAME_LEVELS ? window.GAME_LEVELS.length : 28;
    this.setElementText('video-lesson-level-badge', `Level ${level.id} of ${totalLevels}`);
    this.setElementText('video-lesson-title', level.videoTitle || level.discovery.badge);
    this.setElementText('video-lesson-concept', level.concept);

    // Reset completion banner and next level button
    const banner = document.getElementById('video-completion-banner');
    const nextBtn = document.getElementById('btn-video-next-level');

    if (this.isVideoCompleted) {
      if (banner) banner.classList.remove('hidden');
      if (nextBtn) {
        nextBtn.removeAttribute('disabled');
        nextBtn.classList.remove('btn-locked');
        nextBtn.innerHTML = level.id === totalLevels ? `Complete Game & View Certificate 🏆 →` : `Next Level (Level ${level.id + 1}) →`;
      }
      this.setElementText('video-status-text', 'Status: ✅ Lesson previously completed!');
    } else {
      if (banner) banner.classList.add('hidden');
      if (nextBtn) {
        nextBtn.setAttribute('disabled', 'true');
        nextBtn.classList.add('btn-locked');
        nextBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="rq-icon btn-icon"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Next Level (Locked — Watch video to complete)`;
      }
      this.setElementText('video-status-text', 'Status: 🔴 Playing Lesson... (Watch through to unlock next level)');
    }

    // Embed YouTube Player with API
    this.embedYouTubeVideo(level.videoId);
  }

  embedYouTubeVideo(videoId) {
    const playerContainer = document.getElementById('youtube-player-container');
    if (!playerContainer) return;

    // Use responsive embedded iframe with enablejsapi=1
    playerContainer.innerHTML = `
      <iframe 
        id="yt-active-iframe" 
        src="https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&rel=0&modestbranding=1" 
        title="RideQuest System Design Video Lesson" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    `;

    // Try initializing YT.Player if YouTube API is loaded
    if (window.YT && window.YT.Player) {
      try {
        if (this.ytPlayer && typeof this.ytPlayer.destroy === 'function') {
          this.ytPlayer.destroy();
        }
        this.ytPlayer = new window.YT.Player('yt-active-iframe', {
          events: {
            'onStateChange': (event) => {
              // 0 = YT.PlayerState.ENDED
              if (event.data === 0) {
                this.handleVideoEnded();
              }
            }
          }
        });
      } catch (e) {
        console.warn('YT.Player wrapper fallback active:', e);
      }
    }
  }

  handleVideoEnded() {
    const level = window.GAME_LEVELS[this.currentLevelIndex];
    if (this.isVideoCompleted) return;

    this.isVideoCompleted = true;
    this.completedVideoLevelIds.add(level.id);
    this.saveState();

    window.soundEngine?.success?.();

    // Show completion celebration banner
    const banner = document.getElementById('video-completion-banner');
    if (banner) banner.classList.remove('hidden');

    this.setElementText('video-status-text', 'Status: 🎉 Video completed! Next level unlocked!');

    // Unlock Next Level button
    const nextBtn = document.getElementById('btn-video-next-level');
    if (nextBtn) {
      nextBtn.removeAttribute('disabled');
      nextBtn.classList.remove('btn-locked');
      nextBtn.classList.add('pulse-glow');
      const totalLevels = window.GAME_LEVELS ? window.GAME_LEVELS.length : 28;
        nextBtn.innerHTML = level.id === totalLevels ? `Complete Game & View Certificate 🏆 →` : `Next Level (Level ${level.id + 1}) →`;
    }
  }

  manualCompleteVideoFallback() {
    window.soundEngine?.click?.();
    if (confirm("Confirm that you have watched and completed this System Design video lesson?")) {
      this.handleVideoEnded();
    }
  }

  nextLevelFromVideo() {
    window.soundEngine?.select?.();

    const maxLevelIdx = window.GAME_LEVELS ? window.GAME_LEVELS.length - 1 : 27;
    if (this.currentLevelIndex >= maxLevelIdx) {
      // Completed All Levels — Show Graduation Victory Screen!
      this.showVictoryScreen();
      return;
    }

    // Advance to next level in exact order
    const nextIdx = this.currentLevelIndex + 1;
    this.loadLevel(nextIdx);
  }

  showVictoryScreen() {
    document.getElementById('screen-video-lesson')?.classList.add('hidden');
    document.getElementById('screen-gameplay')?.classList.add('hidden');
    document.getElementById('discovery-modal')?.classList.add('hidden');

    const vicScreen = document.getElementById('screen-victory');
    if (vicScreen) vicScreen.classList.remove('hidden');

    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) {}
    window.soundEngine?.victory?.();
  }

  restartJourney() {
    window.soundEngine?.select?.();
    this.loadLevel(0);
  }

  toggleTeacherMode() {
    window.soundEngine?.click?.();
    this.isTeacherModeOpen = !this.isTeacherModeOpen;
    const drawer = document.getElementById('teacher-drawer');
    if (this.isTeacherModeOpen) {
      drawer?.classList.remove('hidden');
      this.updateTeacherMode();
    } else {
      drawer?.classList.add('hidden');
    }
  }

  updateTeacherMode() {
    if (!this.isTeacherModeOpen) return;
    const level = window.GAME_LEVELS[this.currentLevelIndex];
    if (!level) return;

    this.setElementText('teach-level-title', `Level ${level.id}: ${level.title}`);
    this.setElementText('teach-concept-revealed', level.concept);
    this.setElementText('teach-experience', level.discovery.teacherNotes.experience);
    this.setElementText('teach-realworld', level.discovery.teacherNotes.realWorld);
    this.setElementText('teach-question', level.discovery.teacherNotes.question);

    const choiceInfo = document.getElementById('teach-student-choice');
    if (this.selectedChoice) {
      choiceInfo.innerHTML = `
        <span class="${this.selectedChoice.isOptimal ? 'text-success' : 'text-warning'}">
          Student chose Option ${this.selectedChoice.id}: "${this.selectedChoice.text}"
          (${this.selectedChoice.isOptimal ? 'Optimal decision' : 'Suboptimal choice'})
        </span>
      `;
    } else {
      choiceInfo.innerHTML = `<span class="text-muted">Student is thinking and evaluating options...</span>`;
    }

    const select = document.getElementById('teach-jump-select');
    if (select && select.children.length === 0) {
      window.GAME_LEVELS.forEach((lvl, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.innerText = `Level ${lvl.id}: ${lvl.concept}`;
        select.appendChild(opt);
      });
      select.value = this.currentLevelIndex;
      select.onchange = (e) => {
        this.loadLevel(parseInt(e.target.value));
      };
    } else if (select) {
      select.value = this.currentLevelIndex;
    }
  }

  toggleCodex() {
    window.soundEngine?.click?.();
    this.isCodexOpen = !this.isCodexOpen;
    const drawer = document.getElementById('codex-drawer');
    if (this.isCodexOpen) {
      drawer?.classList.remove('hidden');
      this.renderCodex();
    } else {
      drawer?.classList.add('hidden');
    }
  }

  renderCodex() {
    const list = document.getElementById('codex-list');
    if (!list) return;
    list.innerHTML = '';

    window.GAME_LEVELS.forEach(lvl => {
      const isUnlocked = this.completedLevelIds.has(lvl.id);
      const card = document.createElement('div');
      card.className = `codex-card ${isUnlocked ? 'unlocked' : 'locked'}`;
      card.innerHTML = `
        <div class="codex-num">Level ${lvl.id} • ${lvl.topic}</div>
        <div class="codex-title">${isUnlocked ? lvl.concept : '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="rq-icon btn-icon"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg> Mystery Concept'}</div>
        <div class="codex-desc">${isUnlocked ? lvl.discovery.tagline : 'Complete this level challenge and video lesson to unlock.'}</div>
        ${isUnlocked ? `<div class="codex-analogy"><em>"${lvl.discovery.analogy}"</em></div>` : ''}
      `;
      list.appendChild(card);
    });
  }

  toggleSound() {
    const isMuted = window.soundEngine.toggleMute();
    document.getElementById('btn-sound-toggle').innerHTML = isMuted ? 
      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="rq-icon btn-icon"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="16" y1="9" x2="22" y2="15"/><line x1="22" y1="9" x2="16" y2="15"/></svg> Sound Off` : 
      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="rq-icon btn-icon"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/></svg> Sound On`;
  }

  toggleAdvancedInfo() {
    window.soundEngine?.click?.();
    const panel = document.getElementById('advanced-panel');
    const btn = document.getElementById('btn-advanced-toggle');
    if (panel) {
      const isHidden = panel.classList.toggle('hidden');
      if (btn) {
        btn.innerHTML = isHidden ? 
          `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="rq-icon btn-icon"><path d="M6 18h12M10 21h4"/><circle cx="12" cy="7" r="3"/><path d="M12 10v4M9 14h6"/><path d="M7 18a5 5 0 0 1 10 0"/></svg> Show Deeper Technical Insights` : 
          `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="rq-icon btn-icon"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> Hide Deeper Technical Insights`;
      }
    }
  }
}

window.GameController = GameController;

window.startGame = function() {
  if (window.game) window.game.startGame();
};

window.beginLevel1 = function() {
  if (window.game) window.game.beginLevel1();
};

function initRideQuest() {
  if (!window.game) {
    try {
      window.game = new GameController();
      console.log('RideQuest System Design Game initialized with 28-Level curriculum!');
    } catch (e) {
      console.error('Failed to initialize GameController:', e);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRideQuest);
} else {
  initRideQuest();
}
