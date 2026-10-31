/**
 * System Design Learning Game - Core Game State & Controller
 * Ola Cab Booking Architecture Edition for First-Year Students
 * 
 * Strict 7-Step Learning Flow for Every Topic:
 * STEP 1: Story Introduction (Ola Cab scenario in simple English)
 * STEP 2: Think and Choose (3 balanced options: A, B, C)
 * STEP 3: Show the Result (Outcome explanation + retry on wrong choice)
 * STEP 4: Teach the Concept (Name, Simple Definition, Why Needed, Analogy)
 * STEP 5: Visual Explanation (Labeled component flow diagram)
 * STEP 6: Knowledge Check (Brand new distinct question with hints & retry)
 * STEP 7: Completion (Gated progression: unlocks next topic only after Knowledge Check is passed)
 */

class GameController {
  constructor() {
    this.currentLevelIndex = 0;
    this.xp = 0;
    this.completedLevelIds = new Set();
    this.learningProgress = {}; // Tracks: storyViewed, firstDecisionCompleted, conceptExplanationViewed, knowledgeCheckCompleted, attempts, isCompleted
    this.selectedChoice = null;
    this.isEvaluating = false;
    this.simulationEngine = null;
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

    // Pre-render current level
    this.loadLevel(this.currentLevelIndex);

    if (this.currentLevelIndex > 0 || this.completedLevelIds.size > 0) {
      const startBtn = document.getElementById('btn-start-journey');
      if (startBtn) startBtn.innerText = "CONTINUE YOUR MISSION →";
    }
  }

  loadState() {
    try {
      const saved = localStorage.getItem('ola_sysdesign_save') || localStorage.getItem('ridequest_save') || localStorage.getItem('pubg_sysdesign_save');
      if (saved) {
        const data = JSON.parse(saved);
        const maxIdx = window.GAME_LEVELS ? window.GAME_LEVELS.length - 1 : 27;
        this.currentLevelIndex = typeof data.currentLevelIndex === 'number' ? Math.min(data.currentLevelIndex, maxIdx) : 0;
        this.xp = data.xp || 0;
        this.completedLevelIds = new Set(data.completedLevelIds || []);
        this.learningProgress = data.learningProgress || {};
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
        learningProgress: this.learningProgress || {}
      };
      localStorage.setItem('ola_sysdesign_save', JSON.stringify(data));
      localStorage.setItem('pubg_sysdesign_save', JSON.stringify(data));
      localStorage.setItem('ridequest_save', JSON.stringify(data)); // backward compatibility
    } catch (e) {}
  }

  resetProgress() {
    if (confirm("Reset all learning progress back to Level 1?")) {
      localStorage.removeItem('ola_sysdesign_save');
      localStorage.removeItem('pubg_sysdesign_save');
      localStorage.removeItem('ridequest_save');
      this.currentLevelIndex = 0;
      this.xp = 0;
      this.completedLevelIds.clear();
      this.learningProgress = {};
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

    const level = window.GAME_LEVELS[this.currentLevelIndex];

    // Initialize or update learning progress for this level (Step 1: Story Viewed)
    if (!this.learningProgress) this.learningProgress = {};
    if (!this.learningProgress[level.id]) {
      this.learningProgress[level.id] = {
        storyViewed: true,
        firstDecisionCompleted: false,
        conceptExplanationViewed: false,
        knowledgeCheckCompleted: false,
        attempts: 0,
        isCompleted: false
      };
    } else {
      this.learningProgress[level.id].storyViewed = true;
    }
    this.saveState();

    // Ensure standard gameplay screen is visible only when not on landing screen
    const landing = document.getElementById('screen-landing');
    const isLanding = landing && !landing.classList.contains('hidden');
    if (!isLanding) {
      document.getElementById('screen-gameplay')?.classList.remove('hidden');
    } else {
      document.getElementById('screen-gameplay')?.classList.add('hidden');
    }

    document.getElementById('discovery-modal')?.classList.add('hidden');
    document.getElementById('screen-victory')?.classList.add('hidden');

    this.updateTopBar(level);
    this.renderLevelView(level);
    this.updateTeacherMode();
  }

  updateTopBar(level) {
    const stage = window.GAME_STAGES?.find(s => s.id === level.stage);
    this.setElementText('stage-badge-text', stage ? stage.name.toUpperCase() : 'MODULE 1: SYSTEM DESIGN FUNDAMENTALS');
    const totalLevels = window.GAME_LEVELS ? window.GAME_LEVELS.length : 23;
    this.setElementText('level-indicator-text', `Topic ${level.id} / ${totalLevels}`);
    this.setElementText('xp-count-val', `${this.xp}`);

    // Stepper dots for all 23 topics
    const stepperContainer = document.getElementById('stage-stepper-dots');
    if (stepperContainer && window.GAME_LEVELS) {
      stepperContainer.innerHTML = window.GAME_LEVELS.map((lvl, idx) => {
        const isDone = this.completedLevelIds.has(lvl.id);
        const isCurrent = lvl.id === level.id;
        const dotClass = isCurrent ? 'dot current' : (isDone ? 'dot done' : 'dot pending');
        const connector = idx < window.GAME_LEVELS.length - 1 ? `<div class="dot-connector ${isDone ? 'active' : ''}"></div>` : '';
        return `<div class="${dotClass}" title="Topic ${lvl.id}: ${lvl.topic}" onclick="window.game.jumpToLevel(${idx})"></div>${connector}`;
      }).join('');
    }

    this.setElementText('challenge-topic-text', `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f39c12" stroke-width="2" class="rq-icon btn-icon"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="2" fill="#f39c12"/></svg> Mission: ${level.topicHint || level.topic}`);

    const progressFill = document.getElementById('progress-bar-fill');
    if (progressFill) progressFill.style.width = `${((level.id) / totalLevels) * 100}%`;
  }

  jumpToLevel(idx) {
    const targetLevelId = idx + 1;
    // Allow jumping to any level up to current or any completed level (allows revisiting completed topics)
    if (idx <= this.currentLevelIndex || this.completedLevelIds.has(targetLevelId)) {
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

  // STEP 1 & STEP 2: Render Scenario and 3 Balanced Answer Options
  renderLevelView(level) {
    document.getElementById('discovery-modal')?.classList.add('hidden');
    document.getElementById('consequence-feedback-card')?.classList.add('hidden');
    document.getElementById('success-feedback-banner')?.classList.add('hidden');
    document.getElementById('what-happened-modal')?.classList.add('hidden');

    this.isEvaluating = false;

    // STEP 1: Story & Problem (Simple English, PUBG/BGMI scenario)
    this.setElementText('lvl-time', level.time);
    this.setElementText('lvl-users', level.usersCount);
    this.setElementText('lvl-title', level.title);
    this.setElementText('lvl-situation', level.situation);
    this.setElementText('lvl-problem', level.problem);

    this.updateCompanionState('thinking', `“Review the Ola cab booking situation. What decision should we make?”`);

    // STEP 2: Exactly 3 beginner-friendly choices (A, B, C)
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

    // Render 3D Simulation
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

  // STEP 3: Show the Result (Outcome explanation + retry on wrong choice)
  makeChoice(choice) {
    if (this.isEvaluating) return;
    this.isEvaluating = true;
    window.soundEngine?.click?.();
    this.selectedChoice = choice;
    const level = window.GAME_LEVELS[this.currentLevelIndex];

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

    if (this.simulationEngine) {
      this.simulationEngine.render(level, choice);
    }
    this.updateTeacherMode();

    if (!choice.isOptimal) {
      // Suboptimal choice: show outcome and allow retry
      setTimeout(() => {
        window.soundEngine?.overload?.();
        this.updateCompanionState('curious', `“Look at what happened. That created an unexpected bottleneck!”`);
        this.showConsequenceCard(level, choice);
        this.isEvaluating = false;
      }, 1100);
    } else {
      // Optimal choice: mark firstDecisionCompleted and reveal Concept Explanation
      if (this.learningProgress && this.learningProgress[level.id]) {
        this.learningProgress[level.id].firstDecisionCompleted = true;
      }
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
      this.setElementText('consequence-title', `Option ${choice.id} Result: System Bottleneck`);
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

  // STEP 4 & STEP 5: Teach the Concept & Visual Diagram
  showDiscoveryModal(level, choice) {
    const modal = document.getElementById('discovery-modal');
    if (!modal) return;
    modal.classList.remove('hidden');

    if (this.learningProgress && this.learningProgress[level.id]) {
      this.learningProgress[level.id].conceptExplanationViewed = true;
    }

    const disc = level.discovery;

    // 1. Concept Name & Tagline
    this.setElementText('disc-badge-title', disc.badge);
    this.setElementText('disc-tagline', disc.tagline);

    // 2. Simple Meaning (Plain English)
    this.setElementText('disc-simple-meaning', disc.simpleMeaning || disc.tagline);

    // 3. Everyday Analogy
    this.setElementText('disc-analogy', disc.analogy);

    // 4. How It Works (Step-by-step process)
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

    // STEP 5: Visual Explanation Diagram
    this.setElementText('disc-visual-diagram', disc.visualExplanation || `${disc.badge} Flow Demonstration`);

    // Contrast cards
    if (disc.contrast) {
      this.setElementText('disc-contrast-a-title', disc.contrast.termA);
      this.setElementText('disc-contrast-a-desc', disc.contrast.descA);
      this.setElementText('disc-contrast-b-title', disc.contrast.termB);
      this.setElementText('disc-contrast-b-desc', disc.contrast.descB);
    }

    // Advanced Notes
    this.setElementText('disc-advanced-text', disc.teacherNotes?.realWorld || disc.advancedInfo || "");
    const advPanel = document.getElementById('advanced-panel');
    if (advPanel) advPanel.classList.add('hidden');

    // STEP 6: Render Knowledge Check (Mandatory learning checkpoint)
    this.renderKnowledgeCheck(level);
  }

  // STEP 6: Interactive Knowledge Check
  renderKnowledgeCheck(level) {
    const kc = level.knowledgeCheck;
    if (!kc) return;

    this.setElementText('kc-question-text', kc.question);

    const optGrid = document.getElementById('kc-options-grid');
    const feedbackBox = document.getElementById('kc-feedback-box');

    const progress = this.learningProgress?.[level.id] || {};
    const isAlreadyPassed = progress.knowledgeCheckCompleted || false;

    if (feedbackBox) {
      feedbackBox.classList.add('hidden');
      feedbackBox.innerHTML = '';
    }

    if (optGrid) {
      optGrid.innerHTML = kc.options.map(opt => {
        let extraClass = '';
        if (isAlreadyPassed && opt.isCorrect) {
          extraClass = 'passed-correct';
        }
        return `
          <button class="kc-option-card ${extraClass}" id="kc-opt-${opt.id}" onclick="window.game.handleKnowledgeCheckAnswer('${opt.id}')">
            <div class="kc-opt-badge">${opt.id}</div>
            <div class="kc-opt-text">${opt.text}</div>
          </button>
        `;
      }).join('');
    }

    if (isAlreadyPassed) {
      this.unlockNextLevelButton(level);
      if (feedbackBox) {
        feedbackBox.classList.remove('hidden');
        feedbackBox.className = 'kc-feedback-box kc-success-feedback';
        feedbackBox.innerHTML = `
          <div class="kc-fb-title">✅ Knowledge Check Completed!</div>
          <div class="kc-fb-text">You have mastered this concept! Feel free to revisit or proceed to the next topic.</div>
        `;
      }
    } else {
      this.lockNextLevelButton();
    }
  }

  handleKnowledgeCheckAnswer(optId) {
    const level = window.GAME_LEVELS[this.currentLevelIndex];
    if (!level || !level.knowledgeCheck) return;

    const kc = level.knowledgeCheck;
    const selectedOpt = kc.options.find(o => o.id === optId);
    if (!selectedOpt) return;

    if (!this.learningProgress[level.id]) {
      this.learningProgress[level.id] = {
        storyViewed: true,
        firstDecisionCompleted: true,
        conceptExplanationViewed: true,
        knowledgeCheckCompleted: false,
        attempts: 0,
        isCompleted: false
      };
    }

    this.learningProgress[level.id].attempts += 1;

    const feedbackBox = document.getElementById('kc-feedback-box');
    const allOptButtons = document.querySelectorAll('.kc-option-card');

    if (selectedOpt.isCorrect) {
      // Step 6 Passed Correctly!
      window.soundEngine?.success?.();
      allOptButtons.forEach(btn => btn.classList.remove('kc-incorrect', 'kc-correct'));
      const chosenBtn = document.getElementById(`kc-opt-${optId}`);
      if (chosenBtn) chosenBtn.classList.add('kc-correct');

      this.learningProgress[level.id].knowledgeCheckCompleted = true;
      this.learningProgress[level.id].isCompleted = true;

      // STEP 7: Award XP and mark level completed only after Knowledge Check is passed!
      if (!this.completedLevelIds.has(level.id)) {
        this.completedLevelIds.add(level.id);
        this.xp += 150;
        this.updateTopBar(level);
        this.animateXpGain();
      }
      this.saveState();

      if (feedbackBox) {
        feedbackBox.classList.remove('hidden');
        feedbackBox.className = 'kc-feedback-box kc-success-feedback';
        feedbackBox.innerHTML = `
          <div class="kc-fb-title">🎉 Correct! Concept Mastered!</div>
          <div class="kc-fb-text">${selectedOpt.explanation}</div>
        `;
      }

      this.unlockNextLevelButton(level);

    } else {
      // Wrong choice in Step 6: provide hint and allow another attempt
      window.soundEngine?.click?.();
      const chosenBtn = document.getElementById(`kc-opt-${optId}`);
      if (chosenBtn) chosenBtn.classList.add('kc-incorrect');

      if (feedbackBox) {
        feedbackBox.classList.remove('hidden');
        feedbackBox.className = 'kc-feedback-box kc-error-feedback';
        feedbackBox.innerHTML = `
          <div class="kc-fb-title">❌ Not quite right (Attempt ${this.learningProgress[level.id].attempts})</div>
          <div class="kc-fb-text">${selectedOpt.explanation}</div>
          <div class="kc-fb-hint">${kc.hint || "Think about the main concept explained above and try again!"}</div>
        `;
      }

      this.lockNextLevelButton();
    }
  }

  lockNextLevelButton() {
    const nextBtn = document.getElementById('btn-continue-next-level');
    if (nextBtn) {
      nextBtn.disabled = true;
      nextBtn.classList.add('btn-locked');
      nextBtn.innerHTML = `Answer Step 6 to Unlock Next Topic 🔒`;
    }
  }

  unlockNextLevelButton(level) {
    const totalLevels = window.GAME_LEVELS ? window.GAME_LEVELS.length : 23;
    const nextBtn = document.getElementById('btn-continue-next-level');
    if (nextBtn) {
      nextBtn.disabled = false;
      nextBtn.classList.remove('btn-locked');
      if (level.id >= totalLevels) {
        nextBtn.innerHTML = `Complete All 23 Topics & View Certificate 🏆 →`;
      } else {
        nextBtn.innerHTML = `Unlock Next Topic (Topic ${level.id + 1}) → 🚀`;
      }
    }
  }

  animateXpGain() {
    const xpBadge = document.getElementById('xp-display');
    if (xpBadge) {
      xpBadge.classList.add('pulse-glow');
      setTimeout(() => xpBadge.classList.remove('pulse-glow'), 2000);
    }
  }

  // STEP 7: Gated Completion - Advance to Next Level Only After Knowledge Check
  nextLevelDirect() {
    const level = window.GAME_LEVELS[this.currentLevelIndex];
    const progress = this.learningProgress?.[level?.id];

    if (!progress?.knowledgeCheckCompleted) {
      alert("Please answer the Step 6 Knowledge Check correctly before continuing!");
      return;
    }

    window.soundEngine?.select?.();

    document.getElementById('discovery-modal')?.classList.add('hidden');
    this.hideConsequenceCard();
    this.hideSuccessBanner();
    this.hideWhatHappenedModal();

    const maxLevelIdx = window.GAME_LEVELS ? window.GAME_LEVELS.length - 1 : 27;
    if (this.currentLevelIndex >= maxLevelIdx) {
      // Completed all 23 topics!
      this.showVictoryScreen();
      return;
    }

    const nextIdx = this.currentLevelIndex + 1;
    this.loadLevel(nextIdx);
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) {}
  }

  continueToVideo() {
    this.nextLevelDirect();
  }

  nextLevelFromVideo() {
    this.nextLevelDirect();
  }

  showVictoryScreen() {
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

    this.setElementText('teach-level-title', `Topic ${level.id}: ${level.topic}`);
    this.setElementText('teach-concept-revealed', level.concept);
    this.setElementText('teach-experience', level.discovery.teacherNotes?.experience || "");
    this.setElementText('teach-realworld', level.discovery.teacherNotes?.realWorld || "");
    this.setElementText('teach-question', level.discovery.teacherNotes?.question || "");

    const choiceInfo = document.getElementById('teach-student-choice');
    if (this.selectedChoice) {
      choiceInfo.innerHTML = `
        <span class="${this.selectedChoice.isOptimal ? 'text-success' : 'text-warning'}">
          Student chose Option ${this.selectedChoice.id}: "${this.selectedChoice.text}"
          (${this.selectedChoice.isOptimal ? 'Optimal decision' : 'Suboptimal choice'})
        </span>
      `;
    } else {
      choiceInfo.innerHTML = `<span class="text-muted">Student is evaluating options...</span>`;
    }

    const select = document.getElementById('teach-jump-select');
    if (select && select.children.length === 0) {
      window.GAME_LEVELS.forEach((lvl, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.innerText = `Topic ${lvl.id}: ${lvl.topic}`;
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

    window.GAME_LEVELS.forEach((lvl, idx) => {
      const isUnlocked = this.completedLevelIds.has(lvl.id);
      const card = document.createElement('div');
      card.className = `codex-card ${isUnlocked ? 'unlocked' : 'locked'}`;
      card.style.cursor = isUnlocked ? 'pointer' : 'default';
      card.onclick = () => {
        if (isUnlocked || idx <= this.currentLevelIndex) {
          this.toggleCodex();
          this.loadLevel(idx);
        }
      };
      card.innerHTML = `
        <div class="codex-num">Topic ${lvl.id} • ${lvl.topic}</div>
        <div class="codex-title">${isUnlocked ? lvl.concept : '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="rq-icon btn-icon"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg> Locked Concept'}</div>
        <div class="codex-desc">${isUnlocked ? lvl.discovery.tagline : 'Complete this topic and knowledge check to unlock.'}</div>
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
          `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="rq-icon btn-icon"><path d="M6 18h12M10 21h4"/><circle cx="12" cy="7" r="3"/><path d="M12 10v4M9 14h6"/><path d="M7 18a5 5 0 0 1 10 0"/></svg> Show Real-World Engineering Insights` : 
          `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="rq-icon btn-icon"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> Hide Real-World Engineering Insights`;
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

function initGame() {
  if (!window.game) {
    try {
      window.game = new GameController();
      console.log('System Design Learning Game (Ola Cab Edition, 23 Topics) Initialized!');
    } catch (e) {
      console.error('Failed to initialize GameController:', e);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGame);
} else {
  initGame();
}
