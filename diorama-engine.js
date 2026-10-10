/**
 * RideQuest - Isometric Diorama Game Engine (AAA Visual Standard)
 * Implements 2.5D/3D character-driven, animated miniature game worlds across all 9 System Design levels.
 * 
 * Strict 3-State Simulation Pipeline:
 * State 1: Initial Problem (choice === null) — Demonstrates the real-world operational bottleneck.
 * State 2: Consequence of Decision (choice !== null) — 
 *          Optimal: Animate the architectural solution working smoothly.
 *          Incorrect: Animate the specific realistic failure caused by that exact choice.
 * State 3: Concept Demonstration — Visualizes the underlying System Design mechanics.
 */

var DioramaEngine;
(function (root, factory) {
  var instance = factory();
  DioramaEngine = instance;
  if (typeof module === 'object' && module.exports) {
    module.exports = instance;
  }
  if (root) {
    root.DioramaEngine = instance;
  }
  if (typeof window !== 'undefined') {
    window.DioramaEngine = instance;
  }
  if (typeof global !== 'undefined') {
    global.DioramaEngine = instance;
  }
})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this), function () {

  const DioramaEngine = {
    // Stage Wrapper with HUD Overlay & Contextual Footers
    wrapScene({ theme = 'day', badgeText, badgeType = 'problem', telemetryText = '', footerIcon = '', footerTitle = '', footerDesc = '', svgContent = '' }) {
      const hudBadgeClass = badgeType === 'solution' ? 'hud-solution' : (badgeType === 'warning' ? 'hud-warning' : 'hud-problem');
      const footerClass = badgeType === 'solution' ? 'footer-success' : (badgeType === 'problem' ? 'footer-danger' : 'footer-warning');
      const skyThemeClass = 'diorama-sky-' + theme;

      return '<div class="diorama-stage-container ' + skyThemeClass + '">' +
        '<div class="diorama-hud-top">' +
          '<span class="diorama-hud-badge ' + hudBadgeClass + '">' + badgeText + '</span>' +
          (telemetryText ? '<span class="diorama-hud-telemetry">' + telemetryText + '</span>' : '') +
        '</div>' +
        '<div class="diorama-viewport">' +
          '<svg class="diorama-svg-world" viewBox="0 0 640 400" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">' +
            '<defs>' +
              '<radialGradient id="sunGlow" cx="50%" cy="30%" r="60%">' +
                '<stop offset="0%" stop-color="#fff8e7" stop-opacity="0.35"/>' +
                '<stop offset="100%" stop-color="#fff8e7" stop-opacity="0"/>' +
              '</radialGradient>' +
              '<radialGradient id="stormGlow" cx="50%" cy="30%" r="70%">' +
                '<stop offset="0%" stop-color="#1e293b" stop-opacity="0.8"/>' +
                '<stop offset="100%" stop-color="#090d16" stop-opacity="0.95"/>' +
              '</radialGradient>' +
              '<linearGradient id="blueprintGrid" x1="0%" y1="0%" x2="100%" y2="100%">' +
                '<stop offset="0%" stop-color="#0284c7" stop-opacity="0.2"/>' +
                '<stop offset="100%" stop-color="#0369a1" stop-opacity="0.4"/>' +
              '</linearGradient>' +
              '<linearGradient id="goldTrim" x1="0%" y1="0%" x2="100%" y2="100%">' +
                '<stop offset="0%" stop-color="#fef08a"/>' +
                '<stop offset="50%" stop-color="#eab308"/>' +
                '<stop offset="100%" stop-color="#ca8a04"/>' +
              '</linearGradient>' +
              '<linearGradient id="steelVaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">' +
                '<stop offset="0%" stop-color="#94a3b8"/>' +
                '<stop offset="50%" stop-color="#475569"/>' +
                '<stop offset="100%" stop-color="#1e293b"/>' +
              '</linearGradient>' +
              '<filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">' +
                '<feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="rgba(0,0,0,0.3)"/>' +
              '</filter>' +
            '</defs>' +
            svgContent +
          '</svg>' +
        '</div>' +
        (footerTitle ? '<div class="diorama-debrief-card ' + footerClass + '">' +
          '<div class="debrief-icon">' + footerIcon + '</div>' +
          '<div class="debrief-body">' +
            '<div class="debrief-title">' + footerTitle + '</div>' +
            '<div class="debrief-desc">' + footerDesc + '</div>' +
          '</div>' +
        '</div>' : '') +
      '</div>';
    },

    // =========================================================================
    // 3D ISOMETRIC PROCEDURAL PRIMITIVES
    // =========================================================================

    renderGrid(cols, rows, ox = 320, oy = 110, theme = 'market') {
      const tw = 46;
      const th = 23;
      let tiles = '';

      let fill1 = '#1a2332', fill2 = '#161e2b', lineCol = '#253549', edgeFill = '#0e141d';
      if (theme === 'market') {
        fill1 = '#2d3748'; fill2 = '#232c3b'; lineCol = '#3f4f68'; edgeFill = '#171f2b';
      } else if (theme === 'blueprint') {
        fill1 = '#0f2942'; fill2 = '#0b1d30'; lineCol = '#1e4d79'; edgeFill = '#071524';
      } else if (theme === 'vault') {
        fill1 = '#1c1917'; fill2 = '#141210'; lineCol = '#292524'; edgeFill = '#0c0a09';
      } else if (theme === 'city') {
        fill1 = '#1e293b'; fill2 = '#172033'; lineCol = '#334155'; edgeFill = '#0f172a';
      }

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = ox + (c - r) * (tw / 2);
          const y = oy + (c + r) * (th / 2);
          const f = (r + c) % 2 === 0 ? fill1 : fill2;
          tiles += '<polygon points="' + x + ',' + y + ' ' + (x + tw/2) + ',' + (y + th/2) + ' ' + x + ',' + (y + th) + ' ' + (x - tw/2) + ',' + (y + th/2) + '" fill="' + f + '" stroke="' + lineCol + '" stroke-width="0.8"/>';
        }
      }

      const bTip = oy + (cols + rows) * (th / 2);
      return '<g class="iso-grid-base">' +
        '<ellipse cx="' + ox + '" cy="' + (bTip + 16) + '" rx="' + ((cols + rows) * 16) + '" ry="26" fill="rgba(0,0,0,0.35)" filter="blur(8px)"/>' +
        tiles +
        '<path d="M' + (ox - rows * (tw / 2)) + ',' + (oy + rows * (th / 2)) + ' L' + ox + ',' + bTip + ' L' + ox + ',' + (bTip + 16) + ' L' + (ox - rows * (tw / 2)) + ',' + (oy + rows * (th / 2) + 16) + ' Z" fill="' + edgeFill + '"/>' +
        '<path d="M' + ox + ',' + bTip + ' L' + (ox + cols * (tw / 2)) + ',' + (oy + cols * (th / 2)) + ' L' + (ox + cols * (tw / 2)) + ',' + (oy + cols * (th / 2) + 16) + ' L' + ox + ',' + (bTip + 16) + ' Z" fill="' + edgeFill + '" opacity="0.85"/>' +
      '</g>';
    },

    renderHuman(x, y, role = 'shopper', mood = 'normal', label = '') {
      let bodyColor = '#f59e0b';
      if (role === 'clerk') bodyColor = '#3b82f6';
      else if (role === 'architect') bodyColor = '#10b981';
      else if (role === 'security') bodyColor = '#6366f1';
      else if (role === 'worker') bodyColor = '#f97316';

      let moodIcon = '';
      if (mood === 'alert') {
        moodIcon = '<circle cx="' + (x + 10) + '" cy="' + (y - 30) + '" r="6" fill="#ef4444"/><text x="' + (x + 10) + '" y="' + (y - 26) + '" text-anchor="middle" font-size="8" fill="#fff" font-weight="900">!</text>';
      } else if (mood === 'happy') {
        moodIcon = '<circle cx="' + (x + 10) + '" cy="' + (y - 30) + '" r="6" fill="#22c55e"/><text x="' + (x + 10) + '" y="' + (y - 26) + '" text-anchor="middle" font-size="8" fill="#fff" font-weight="900">✓</text>';
      } else if (mood === 'confused') {
        moodIcon = '<circle cx="' + (x + 10) + '" cy="' + (y - 30) + '" r="6" fill="#f59e0b"/><text x="' + (x + 10) + '" y="' + (y - 26) + '" text-anchor="middle" font-size="8" fill="#fff" font-weight="900">?</text>';
      }

      return '<g class="iso-character" transform="translate(' + x + ',' + y + ')">' +
        '<ellipse cx="0" cy="2" rx="9" ry="4.5" fill="rgba(0,0,0,0.3)"/>' +
        '<line x1="-3" y1="0" x2="-3" y2="-8" stroke="#1e293b" stroke-width="2.6" stroke-linecap="round"/>' +
        '<line x1="3" y1="0" x2="3" y2="-8" stroke="#1e293b" stroke-width="2.6" stroke-linecap="round"/>' +
        '<rect x="-6" y="-20" width="12" height="13" rx="3" fill="' + bodyColor + '"/>' +
        '<circle cx="0" cy="-25" r="5.5" fill="#fde68a"/>' +
        '<path d="M-5,-27 C-5,-32 5,-32 5,-27 Z" fill="#451a03"/>' +
        moodIcon +
        (label ? '<rect x="-30" y="8" width="60" height="15" rx="4" fill="#0f172a" opacity="0.9"/><text x="0" y="19" text-anchor="middle" font-size="8" font-family="sans-serif" font-weight="800" fill="#f8fafc">' + label + '</text>' : '') +
      '</g>';
    },

    renderShoppingCart(x, y, state = 'empty') {
      return '<g class="iso-cart" transform="translate(' + x + ',' + y + ')">' +
        '<ellipse cx="0" cy="2" rx="7" ry="3.5" fill="rgba(0,0,0,0.25)"/>' +
        '<polygon points="-8,-2 0,-6 8,-2 0,2" fill="#94a3b8" stroke="#cbd5e1" stroke-width="1"/>' +
        '<polygon points="-8,-2 0,2 0,10 -8,6" fill="#64748b"/>' +
        '<polygon points="0,2 8,-2 8,6 0,10" fill="#475569"/>' +
        (state === 'full' ? '<rect x="-4" y="-8" width="8" height="6" rx="1" fill="#22c55e"/>' : '') +
      '</g>';
    },

    renderForklift(x, y, status = 'moving', label = 'Restock Forklift') {
      const isCrash = status === 'crashed';
      return '<g class="iso-forklift" transform="translate(' + x + ',' + y + ')">' +
        '<ellipse cx="0" cy="4" rx="22" ry="11" fill="rgba(0,0,0,0.4)"/>' +
        '<polygon points="-16,-4 0,-14 16,-4 0,6" fill="' + (isCrash ? '#dc2626' : '#f59e0b') + '"/>' +
        '<polygon points="-16,-4 0,6 0,14 -16,4" fill="' + (isCrash ? '#991b1b' : '#d97706') + '"/>' +
        '<polygon points="0,6 16,-4 16,4 0,14" fill="' + (isCrash ? '#7f1d1d' : '#b45309') + '"/>' +
        // Fork prongs
        '<line x1="8" y1="-2" x2="26" y2="7" stroke="#475569" stroke-width="3" stroke-linecap="round"/>' +
        '<line x1="12" y1="-4" x2="30" y2="5" stroke="#475569" stroke-width="3" stroke-linecap="round"/>' +
        // Pallet box
        '<rect x="18" y="-6" width="12" height="10" rx="1" fill="#78350f" stroke="#b45309"/>' +
        (isCrash ? '<text x="0" y="-18" text-anchor="middle" font-size="14">💥</text>' : '') +
        '<rect x="-40" y="18" width="80" height="15" rx="4" fill="#0f172a" opacity="0.9"/>' +
        '<text x="0" y="29" text-anchor="middle" font-size="8" font-family="sans-serif" font-weight="800" fill="' + (isCrash ? '#f87171' : '#fcd34d') + '">' + label + '</text>' +
      '</g>';
    },

    renderServiceDesk(x, y, status = 'open') {
      return '<g class="iso-servicedesk" transform="translate(' + x + ',' + y + ')">' +
        '<ellipse cx="0" cy="8" rx="36" ry="18" fill="rgba(0,0,0,0.3)"/>' +
        '<polygon points="-28,-8 0,-22 28,-8 0,6" fill="#3b82f6" stroke="#60a5fa" stroke-width="1.2"/>' +
        '<polygon points="-28,-8 0,6 0,20 -28,6" fill="#1d4ed8"/>' +
        '<polygon points="0,6 28,-8 28,6 0,20" fill="#2563eb"/>' +
        // Cashier terminal monitor
        '<rect x="-6" y="-30" width="12" height="9" rx="1" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>' +
        '<rect x="-4" y="-28" width="8" height="5" fill="#38bdf8" opacity="0.8"/>' +
        '<rect x="-35" y="24" width="70" height="16" rx="4" fill="#0f172a"/>' +
        '<text x="0" y="35" text-anchor="middle" font-size="8" font-family="sans-serif" font-weight="800" fill="#93c5fd">SERVICE DESK</text>' +
      '</g>';
    },

    renderStorageVault(x, y, name = 'Inventory Vault', status = 'secure') {
      const isBreach = status === 'breached';
      const wallColor = isBreach ? '#7f1d1d' : '#1e293b';
      const doorColor = isBreach ? '#ef4444' : '#38bdf8';

      return '<g class="iso-vault" transform="translate(' + x + ',' + y + ')">' +
        '<ellipse cx="0" cy="18" rx="44" ry="22" fill="rgba(0,0,0,0.38)"/>' +
        '<polygon points="-36,0 0,-18 36,0 0,18" fill="' + wallColor + '" stroke="#334155" stroke-width="1.5"/>' +
        '<polygon points="-36,0 0,18 0,44 -36,26" fill="#0f172a"/>' +
        '<polygon points="0,18 36,0 36,26 0,44" fill="#1e293b"/>' +
        // Heavy blast door circle
        '<ellipse cx="18" cy="22" rx="10" ry="14" fill="' + doorColor + '" opacity="0.9"/>' +
        '<circle cx="18" cy="22" r="3" fill="#ffffff"/>' +
        '<rect x="-45" y="50" width="90" height="18" rx="4" fill="#0f172a" stroke="' + doorColor + '" stroke-width="1"/>' +
        '<text x="0" y="62" text-anchor="middle" font-size="8" font-family="sans-serif" font-weight="900" fill="#ffffff">' + name + '</text>' +
      '</g>';
    },

    // =========================================================================
    // 9 SCENARIO-SPECIFIC SCENE RENDERERS (SNO 1 through 9)
    // =========================================================================

    // LEVEL 1: Supermarket Blueprint & 4-Tier Architecture
    renderSupermarketBlueprintScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isUnplanned = choice && choice.id === 'A';
      const isWarehouseWalk = choice && choice.id === 'C';

      let badgeText = 'INITIAL PROBLEM: EMPTY PLOT & NO PLAN';
      let badgeType = 'problem';
      let telemetryText = 'Status: Architecture Required';
      let footerTitle = 'Operational Dilemma';
      let footerDesc = 'Building without designated shopping, checkout, and inventory zones causes instant gridlock.';
      let footerIcon = '⚠️';

      if (isOptimal) {
        badgeText = 'BLUEPRINT SUCCESS: 4-TIER ARCHITECTURE';
        badgeType = 'solution';
        telemetryText = 'Flow: 100% Organized • Latency: 12ms';
        footerTitle = 'Master Architecture Deployed';
        footerDesc = 'Discrete client, storefront, checkout, and vault tiers operate with zero collision bottlenecks.';
        footerIcon = '🏛️';
      } else if (isUnplanned) {
        badgeText = 'COLLISION GRIDLOCK: RANDOM UNPLANNED WALLS';
        badgeType = 'problem';
        telemetryText = 'Status: FORKLIFT COLLISION • FROZEN';
        footerTitle = 'Operational Failure';
        footerDesc = 'Restocking forklifts ram straight into checkout queues! Entrance doors are completely blocked.';
        footerIcon = '💥';
      } else if (isWarehouseWalk) {
        badgeText = 'WAREHOUSE INVASION: UNRESTRICTED ACCESS';
        badgeType = 'problem';
        telemetryText = 'Status: RECORDS CORRUPTED';
        footerTitle = 'Storage Disaster';
        footerDesc = 'Customers wander into wholesale pallets, damaging goods and corrupting inventory records.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, isOptimal ? 'market' : 'blueprint');

      if (!choice) {
        // Initial Problem state
        content += '<text x="320" y="65" text-anchor="middle" font-size="14" font-weight="900" fill="#38bdf8" letter-spacing="1">EMPTY SUPERMARKET PLOT (PLAN REQUIRED)</text>';
        content += this.renderHuman(220, 160, 'architect', 'alert', 'Civil Architect');
        content += this.renderForklift(400, 200, 'moving', 'Unrouted Forklift');
        content += this.renderHuman(280, 240, 'shopper', 'confused', 'Customer');
        content += this.renderShoppingCart(300, 245, 'empty');
      } else if (isOptimal) {
        // Correct Choice B: Master Architectural Blueprint
        content += '<text x="320" y="55" text-anchor="middle" font-size="12" font-weight="900" fill="#22c55e">MASTER ARCHITECTURAL BLUEPRINT ACTIVE</text>';
        // 4 Tiers rendered visually
        content += this.renderHuman(180, 220, 'shopper', 'happy', 'Client: Shoppers');
        content += this.renderShoppingCart(205, 225, 'full');
        content += this.renderServiceDesk(320, 200, 'open');
        content += this.renderHuman(320, 170, 'clerk', 'happy', 'App Tier: Cashier');
        content += this.renderStorageVault(460, 180, 'DB Tier: Vault', 'secure');
        content += '<line x1="220" y1="210" x2="280" y2="195" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="4,4" class="data-stream-anim"/>';
        content += '<line x1="360" y1="190" x2="420" y2="180" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,4" class="data-stream-anim"/>';
      } else if (isUnplanned) {
        // Choice A: Collision
        content += this.renderForklift(310, 190, 'crashed', 'FORKLIFT CRASH!');
        content += this.renderHuman(290, 210, 'shopper', 'alert', 'Stranded Shopper');
        content += this.renderShoppingCart(270, 215, 'empty');
        content += this.renderServiceDesk(380, 240, 'blocked');
      } else {
        // Choice C: Warehouse invasion
        content += this.renderStorageVault(320, 170, 'Warehouse', 'breached');
        content += this.renderHuman(280, 210, 'shopper', 'alert', 'Lost Shopper');
        content += this.renderHuman(360, 200, 'shopper', 'alert', 'Tampering');
        content += '<text x="320" y="260" text-anchor="middle" font-size="11" font-weight="900" fill="#ef4444">UNRESTRICTED STORAGE COMPROMISE</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 2: Functional vs Non-Functional Requirements
    renderRequirementsStressScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isFeatureOnly = choice && choice.id === 'A';
      const isBunkerOnly = choice && choice.id === 'C';

      let badgeText = 'INITIAL PROBLEM: FESTIVAL CROWD SURGE RISK';
      let badgeType = 'problem';
      let telemetryText = 'Stress: 80x Surge Pending';
      let footerTitle = 'Requirements Scoping Dilemma';
      let footerDesc = 'Planning only daily features leaves the store vulnerable to electrical blackouts and crowd surges.';
      let footerIcon = '⚡';

      if (isOptimal) {
        badgeText = 'RESILIENT FACILITY: FR + NFR SCALED';
        badgeType = 'solution';
        telemetryText = 'Uptime: 99.99% • Capacity: 80,000 req/s';
        footerTitle = 'Dual Engineering Success';
        footerDesc = 'Wide emergency exits and redundant generators absorb the 15,000 shopper festival rush with ease.';
        footerIcon = '🛡️';
      } else if (isFeatureOnly) {
        badgeText = 'ELECTRICAL BLACKOUT & STAMPEDE FAILURE';
        badgeType = 'problem';
        telemetryText = 'Load: 15,000 Shoppers • Breaker Blown';
        footerTitle = 'Structural Collapse';
        footerDesc = 'The electrical grid crashed and narrow exits jammed under the festival crowd surge!';
        footerIcon = '🔥';
      } else if (isBunkerOnly) {
        badgeText = 'EMPTY BUNKER: NO SHOPPING FEATURES';
        badgeType = 'problem';
        telemetryText = 'Features: None • Revenue: $0';
        footerTitle = 'Functional Failure';
        footerDesc = '50 fire exits exist, but zero shelves or registers were built. The store cannot sell groceries.';
        footerIcon = '⚠️';
      }

      let content = this.renderGrid(7, 7, 320, 90, isOptimal ? 'market' : 'city');

      if (!choice) {
        content += '<text x="320" y="65" text-anchor="middle" font-size="13" font-weight="900" fill="#f59e0b">FESTIVAL PROMOTIONAL SALE: 15,000 CROWD INCOMING</text>';
        content += this.renderHuman(240, 180, 'architect', 'alert', 'Civil Architect');
        content += this.renderHuman(380, 200, 'shopper', 'alert', 'Crowd Surge');
        content += this.renderHuman(410, 220, 'shopper', 'alert', 'Surge');
      } else if (isOptimal) {
        // Redundant generators + wide doors
        content += '<text x="320" y="55" text-anchor="middle" font-size="12" font-weight="900" fill="#22c55e">NFR BENCHMARKS SATISFIED (LATENCY <80ms, 99.99% UPTIME)</text>';
        content += this.renderServiceDesk(240, 200, 'open');
        content += this.renderServiceDesk(360, 200, 'open');
        content += this.renderHuman(240, 160, 'clerk', 'happy', 'Register 1');
        content += this.renderHuman(360, 160, 'clerk', 'happy', 'Register 2');
        content += this.renderHuman(460, 210, 'architect', 'happy', 'Backup Generator');
        content += '<rect x="440" y="225" width="40" height="25" rx="3" fill="#15803d" stroke="#4ade80"/>';
        content += '<text x="460" y="240" text-anchor="middle" font-size="7" font-weight="900" fill="#fff">UPS 100%</text>';
      } else if (isFeatureOnly) {
        // Blackout spark
        content += '<rect x="180" y="120" width="280" height="160" fill="rgba(0,0,0,0.7)" rx="8"/>';
        content += '<text x="320" y="190" text-anchor="middle" font-size="28">⚡💥⚡</text>';
        content += '<text x="320" y="225" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">ELECTRICAL GRID BLOWN • JAMMED EXITS</text>';
      } else {
        // Empty bunker
        content += '<text x="320" y="190" text-anchor="middle" font-size="12" font-weight="900" fill="#f59e0b">50 EMERGENCY DOORS • ZERO GROCERIES ON DISPLAY</text>';
        content += this.renderHuman(320, 210, 'shopper', 'confused', 'Confused Shopper');
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 3: Client-Server Architecture (Request & Response)
    renderClientServerClerkScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isDirectAccess = choice && choice.id === 'A';

      let badgeText = 'INITIAL PROBLEM: UNVERIFIED INTERNAL DATA ACCESS';
      let badgeType = 'problem';
      let telemetryText = 'Status: Price Verification Needed';
      let footerTitle = 'Request Boundary Dilemma';
      let footerDesc = 'Shoppers need product prices, but allowing direct access to back-office ledgers corrupts private data.';
      let footerIcon = '❓';

      if (isOptimal) {
        badgeText = 'CLIENT-SERVER SUCCESS: STRUCTURED REQUEST-RESPONSE';
        badgeType = 'solution';
        telemetryText = 'Cycle: Request ──► Process ──► Response (200 OK)';
        footerTitle = 'Request-Response Decoupling';
        footerDesc = 'The clerk validates the request, accesses private data safely, and returns the exact verified answer.';
        footerIcon = '🔄';
      } else if (isDirectAccess) {
        badgeText = 'DIRECT LEDGER CORRUPTION & SPILL';
        badgeType = 'problem';
        telemetryText = 'Integrity: COMPROMISED • Coffee Spilled';
        footerTitle = 'Data Corruption Disaster';
        footerDesc = 'Shoppers spilled coffee on ledgers, altered price tags, and deleted supplier records!';
        footerIcon = '☕';
      } else {
        badgeText = 'LOCKED SHUTTER & RANDOM PRICE GUESSING';
        badgeType = 'problem';
        telemetryText = 'Error: 500 Unpredictable Pricing';
        footerTitle = 'Service Failure';
        footerDesc = 'The store locked all access and guessed random prices, driving customers away.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'market');

      if (!choice) {
        content += this.renderHuman(220, 210, 'shopper', 'confused', 'Shopper (Client)');
        content += this.renderStorageVault(440, 180, 'Private Ledgers', 'secure');
        content += '<text x="320" y="65" text-anchor="middle" font-size="12" font-weight="900" fill="#38bdf8">HOW DOES THE CLIENT QUERY PRIVATE SERVER RECORDS?</text>';
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="12" font-weight="900" fill="#22c55e">CLIENT (REQUEST) ──► SERVER (PROCESS) ──► CLIENT (RESPONSE: 200 OK)</text>';
        content += this.renderHuman(180, 210, 'shopper', 'happy', 'Client: Shopper');
        content += this.renderServiceDesk(320, 195, 'open');
        content += this.renderHuman(320, 160, 'clerk', 'happy', 'Server: Clerk');
        content += this.renderStorageVault(460, 175, 'Database', 'secure');
        // Visual flow tickets
        content += '<rect x="220" y="195" width="45" height="14" rx="3" fill="#3b82f6"/><text x="242" y="205" text-anchor="middle" font-size="7" font-weight="800" fill="#fff">REQUEST</text>';
        content += '<rect x="220" y="215" width="45" height="14" rx="3" fill="#22c55e"/><text x="242" y="225" text-anchor="middle" font-size="7" font-weight="800" fill="#fff">RESPONSE</text>';
      } else if (isDirectAccess) {
        content += this.renderStorageVault(320, 180, 'Ledger Room', 'breached');
        content += this.renderHuman(340, 210, 'shopper', 'alert', 'Spilling Coffee');
        content += '<text x="320" y="240" text-anchor="middle" font-size="11" font-weight="900" fill="#ef4444">PRICE TAGS ALTERED • RECORDS DELETED</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#f59e0b">SERVICE SHUTTER SHUT • PRICE: $999 GUESS</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 4: Networking Fundamentals (IP Addresses, DNS, Ports)
    renderNetworkingDnsPortsScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isRawGps = choice && choice.id === 'A';

      let badgeText = 'INITIAL PROBLEM: GPS COORDINATES & SINGLE DOOR';
      let badgeType = 'problem';
      let telemetryText = 'Address: 11.0168°N, 76.9558°E';
      let footerTitle = 'Navigation & Traffic Dilemma';
      let footerDesc = 'Raw GPS numbers confuse drivers, and single doors cause delivery truck collisions.';
      let footerIcon = '📍';

      if (isOptimal) {
        badgeText = 'DNS & PORTS SUCCESS: FRESHMART (DOOR 80 & 443)';
        badgeType = 'solution';
        telemetryText = 'DNS: freshmart.com ──► 142.250.190.46:443';
        footerTitle = 'Domain Resolution & Port Routing';
        footerDesc = 'Friendly name maps to IP address; Door 80 handles shoppers while Door 443 routes bank couriers.';
        footerIcon = '🌐';
      } else if (isRawGps) {
        badgeText = 'GPS MISTYPE DITCH & REVOLVING DOOR CRASH';
        badgeType = 'problem';
        telemetryText = 'Status: LOST IN DITCH • DOOR RAMMED';
        footerTitle = 'Navigation Disaster';
        footerDesc = 'Shoppers mistyped coordinates into navigation apps, while freight trucks rammed customer doors!';
        footerIcon = '💥';
      } else {
        badgeText = 'MOVING SUPERMARKET BANKRUPTCY';
        badgeType = 'problem';
        telemetryText = 'Status: LOCATION UNKNOWN (404)';
        footerTitle = 'Discovery Failure';
        footerDesc = 'Changing the physical building location daily made customer discovery impossible.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'city');

      if (!choice) {
        content += '<text x="320" y="65" text-anchor="middle" font-size="12" font-weight="900" fill="#38bdf8">11.0168° N, 76.9558° E (UNREGISTERED BRAND)</text>';
        content += this.renderHuman(200, 200, 'shopper', 'confused', 'Lost Driver');
        content += this.renderForklift(420, 200, 'moving', 'Truck Heading to Door');
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="12" font-weight="900" fill="#22c55e">DNS RESOLUTION: freshmart.com ──► PORT 80 (HTTP) & PORT 443 (HTTPS)</text>';
        // Neon Sign
        content += '<rect x="240" y="80" width="160" height="26" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>';
        content += '<text x="320" y="98" text-anchor="middle" font-size="12" font-weight="900" fill="#38bdf8">FreshMart.com</text>';
        // Doors
        content += '<rect x="220" y="170" width="50" height="35" rx="3" fill="#15803d" stroke="#4ade80"/>';
        content += '<text x="245" y="190" text-anchor="middle" font-size="9" font-weight="900" fill="#fff">DOOR 80</text>';
        content += '<text x="245" y="200" text-anchor="middle" font-size="7" font-weight="800" fill="#bbf7d0">Shoppers</text>';
        content += this.renderHuman(245, 230, 'shopper', 'happy', 'Shopper');

        content += '<rect x="370" y="170" width="55" height="35" rx="3" fill="#1e3a8a" stroke="#60a5fa"/>';
        content += '<text x="397" y="190" text-anchor="middle" font-size="9" font-weight="900" fill="#fff">DOOR 443</text>';
        content += '<text x="397" y="200" text-anchor="middle" font-size="7" font-weight="800" fill="#93c5fd">Bank Van (TLS)</text>';
      } else if (isRawGps) {
        content += '<text x="320" y="180" text-anchor="middle" font-size="14">💥 TRUCK RAMS REVOLVING DOOR 💥</text>';
        content += this.renderForklift(320, 210, 'crashed', 'Collision at Single Door');
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">404 DESTINATION NOT FOUND</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 5: Networking Protocols (TCP/IP, HTTP/HTTPS, HTTP/2-3)
    renderProtocolsTransportScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isPlainBikes = choice && choice.id === 'A';

      let badgeText = 'INITIAL PROBLEM: UNSECURED ROADWAY TRANSPORT';
      let badgeType = 'problem';
      let telemetryText = 'Cargo: Fragile Glass & Live Audio Stream';
      let footerTitle = 'Transport Protocol Dilemma';
      let footerDesc = 'Fragile financial receipts need receipt confirmations; live broadcasts need speed without stalling.';
      let footerIcon = '📦';

      if (isOptimal) {
        badgeText = 'PROTOCOLS SUCCESS: TCP (RECEIPTS) + UDP (STREAM) + TLS (ENCRYPTION)';
        badgeType = 'solution';
        telemetryText = 'TCP: In-Order 3-Way Handshake • HTTPS: AES Encrypted';
        footerTitle = 'Protocol Specialization Deployed';
        footerDesc = 'TCP guarantees banking receipts; UDP streams live music with zero latency; TLS encrypts credit cards.';
        footerIcon = '🔒';
      } else if (isPlainBikes) {
        badgeText = 'SHATTERED GLASS & EXPOSED CREDIT CARD POSTCARDS';
        badgeType = 'problem';
        telemetryText = 'Loss: 50% Glass Smashed • Cards Sniffed';
        footerTitle = 'Transport Failure';
        footerDesc = 'Fragile goods smashed without receipts, and roadside thieves read plain-text credit cards off postcards!';
        footerIcon = '💥';
      } else {
        badgeText = 'MANUAL FOOT TRAVEL PARALYSIS';
        badgeType = 'problem';
        telemetryText = 'Speed: 2 km/h • Orders Collapsed';
        footerTitle = 'Network Refusal';
        footerDesc = 'Walking on foot with paper cash took hours and collapsed the digital supermarket orders.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'city');

      if (!choice) {
        content += '<text x="320" y="65" text-anchor="middle" font-size="12" font-weight="900" fill="#38bdf8">TWO CARGOS: CRITICAL BANK RECEIPTS vs LIVE AUDIO STREAM</text>';
        content += this.renderHuman(240, 200, 'worker', 'alert', 'Fragile Goods');
        content += this.renderHuman(380, 200, 'clerk', 'normal', 'Live Stream');
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">TCP (SIGNED RECEIPT) • UDP (STREAM BIKE) • HTTPS (TITANIUM VAULT)</text>';
        // TCP Audited Van
        content += '<rect x="180" y="170" width="80" height="35" rx="4" fill="#0f172a" stroke="#22c55e" stroke-width="1.5"/>';
        content += '<text x="220" y="188" text-anchor="middle" font-size="8" font-weight="900" fill="#4ade80">TCP COURIER</text>';
        content += '<text x="220" y="198" text-anchor="middle" font-size="7" font-weight="800" fill="#fff">Signed Receipts</text>';

        // Titanium briefcases (TLS)
        content += '<rect x="290" y="175" width="60" height="25" rx="3" fill="#334155" stroke="#facc15" stroke-width="1.5"/>';
        content += '<text x="320" y="191" text-anchor="middle" font-size="8" font-weight="900" fill="#facc15">🔒 TLS / AES</text>';

        // UDP Bike
        content += '<rect x="380" y="170" width="80" height="35" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>';
        content += '<text x="420" y="188" text-anchor="middle" font-size="8" font-weight="900" fill="#38bdf8">UDP STREAM</text>';
        content += '<text x="420" y="198" text-anchor="middle" font-size="7" font-weight="800" fill="#fff">Ultra-Fast 0-RTT</text>';
      } else if (isPlainBikes) {
        content += '<text x="320" y="180" text-anchor="middle" font-size="14">💥 GLASS SHATTERED ON ROAD 💥</text>';
        content += '<rect x="260" y="200" width="120" height="30" rx="3" fill="#fee2e2" stroke="#ef4444"/>';
        content += '<text x="320" y="218" text-anchor="middle" font-size="8" font-weight="900" fill="#dc2626">CREDIT CARDS SNIFFED</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">FOOT TRANSPORT TIMED OUT</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 6: API Design (REST, GraphQL, gRPC, Versioning)
    renderApiContractsScannersScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isInformal = choice && choice.id === 'A';

      let badgeText = 'INITIAL PROBLEM: INCOMPATIBLE DEVICE DIALECTS';
      let badgeType = 'problem';
      let telemetryText = 'Devices: 500 Scanners, Kiosks & Suppliers';
      let footerTitle = 'Interface Agreement Dilemma';
      let footerDesc = 'Hardware devices inventing contradictory messaging formats crash the central inventory office.';
      let footerIcon = '📱';

      if (isOptimal) {
        badgeText = 'API SPECIFICATION SUCCESS: STANDARDIZED REST & VERSIONING';
        badgeType = 'solution';
        telemetryText = 'Contract: /api/v1/products ──► 200 OK (JSON)';
        footerTitle = 'Structured API Contract';
        footerDesc = 'Standard verbs (GET/POST), status codes, and URI versioning let legacy scanners and new kiosks coexist.';
        footerIcon = '📜';
      } else if (isInformal) {
        badgeText = 'SYNTAX ERROR 500: UNSTRUCTURED DIALECT CRASH';
        badgeType = 'problem';
        telemetryText = 'Status: FAILED TO PARSE INCOMING STRING';
        footerTitle = 'Contract Failure';
        footerDesc = 'Updating one product field name in the office crashed half the store barcode scanners!';
        footerIcon = '💥';
      } else {
        badgeText = 'HARDCODED TIGHT COUPLING FREEZE';
        badgeType = 'problem';
        telemetryText = 'Recall: 500 Physical Hardware Replacements';
        footerTitle = 'Coupling Catastrophe';
        footerDesc = 'Zero flexibility; simple tax rule updates required recalling all physical scanners.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'market');

      if (!choice) {
        content += '<text x="320" y="65" text-anchor="middle" font-size="12" font-weight="900" fill="#38bdf8">500 SCANNER KIOSKS SPEAKING CONTRADICTORY DIALECTS</text>';
        content += this.renderHuman(220, 190, 'worker', 'confused', 'Barcode Scanner');
        content += this.renderHuman(420, 190, 'clerk', 'alert', 'Main Office');
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">API CONTRACT: GET /api/v1/products/42 ──► 200 OK { id: 42, price: 9.99 }</text>';
        // API Contract billboard
        content += '<rect x="230" y="150" width="180" height="50" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>';
        content += '<text x="320" y="168" text-anchor="middle" font-size="9" font-weight="900" fill="#38bdf8">REST API SPECIFICATION</text>';
        content += '<text x="320" y="180" text-anchor="middle" font-size="8" font-family="monospace" fill="#a5f3fc">GET /api/v1/orders (200 OK)</text>';
        content += '<text x="320" y="192" text-anchor="middle" font-size="8" font-family="monospace" fill="#a5f3fc">POST /api/v1/checkout (201)</text>';
        content += this.renderHuman(180, 210, 'worker', 'happy', 'Scanner v1');
        content += this.renderHuman(460, 210, 'clerk', 'happy', 'Self-Checkout v2');
      } else if (isInformal) {
        content += '<rect x="220" y="170" width="200" height="40" rx="4" fill="#450a0a" stroke="#ef4444"/>';
        content += '<text x="320" y="188" text-anchor="middle" font-size="10" font-weight="900" fill="#fca5a5">PARSE ERROR 500: UNKNOWN SYNTAX</text>';
        content += '<text x="320" y="200" text-anchor="middle" font-size="8" font-weight="700" fill="#fca5a5">Barcode Scanners Crashed</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">500 SCANNERS RECALLED & BRICKED</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 7: Authentication (Identity Verification, Hashing, Sessions)
    renderAuthIdentityVerificationScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isNotepad = choice && choice.id === 'A';

      let badgeText = 'INITIAL PROBLEM: UNVERIFIED IDENTITY CLAIM';
      let badgeType = 'problem';
      let telemetryText = 'Claim: Customer "Pranesh" requesting 10,000 pts';
      let footerTitle = 'Identity Verification Dilemma';
      let footerDesc = 'Verbal claims risk fraud, while storing plaintext passwords in a notepad leaks customer secrets.';
      let footerIcon = '👤';

      if (isOptimal) {
        badgeText = 'AUTH SUCCESS: ONE-WAY HASHING (BCRYPT) & SESSION TOKEN';
        badgeType = 'solution';
        telemetryText = 'Crypto: Salt + Bcrypt Hash • Session: Temporary Token';
        footerTitle = 'Secure Identity Gate';
        footerDesc = 'Passwords are never stored in plain text; salted hashes defeat rainbow tables; session token expires safely.';
        footerIcon = '🔑';
      } else if (isNotepad) {
        badgeText = 'PLAIN PASSWORD NOTEPAD THEFT & ACCOUNT DRAIN';
        badgeType = 'problem';
        telemetryText = 'Breach: Plaintext Passwords Leaked Online';
        footerTitle = 'Credential Leak Catastrophe';
        footerDesc = 'A fraudster walked off with the spiral notepad from the counter, exposing thousands of customer accounts!';
        footerIcon = '🔓';
      } else {
        badgeText = '5 WITNESSES PER LOAF: QUEUE CHOKE';
        badgeType = 'problem';
        telemetryText = 'Queue Time: 4 Hours Per Shopper';
        footerTitle = 'Usability Paralysis';
        footerDesc = 'Burdening customers with government witnesses paralyzed everyday store operations.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'market');

      if (!choice) {
        content += '<text x="320" y="65" text-anchor="middle" font-size="12" font-weight="900" fill="#38bdf8">CUSTOMER CLAIMS: "I AM PRANESH. GIVE ME 10,000 POINTS"</text>';
        content += this.renderHuman(220, 200, 'shopper', 'alert', 'Claimant');
        content += this.renderServiceDesk(360, 195, 'open');
        content += this.renderHuman(360, 160, 'clerk', 'confused', 'Clerk');
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">ONE-WAY HASHING (BCRYPT + SALT) ──► VERIFIED IDENTITY ──► EXPIRING TOKEN</text>';
        content += this.renderHuman(180, 210, 'shopper', 'happy', 'Pranesh Verified');
        content += this.renderServiceDesk(320, 195, 'open');
        content += this.renderHuman(320, 160, 'clerk', 'happy', 'Auth Gate');
        // Glowing Token
        content += '<rect x="235" y="195" width="55" height="18" rx="4" fill="#0f172a" stroke="#22c55e" stroke-width="1.5"/>';
        content += '<text x="262" y="208" text-anchor="middle" font-size="8" font-weight="900" fill="#4ade80">TOKEN ✓</text>';
      } else if (isNotepad) {
        content += '<rect x="220" y="170" width="200" height="40" rx="4" fill="#450a0a" stroke="#ef4444"/>';
        content += '<text x="320" y="188" text-anchor="middle" font-size="10" font-weight="900" fill="#fca5a5">NOTEPAD STOLEN FROM COUNTER</text>';
        content += '<text x="320" y="200" text-anchor="middle" font-size="8" font-weight="700" fill="#fca5a5">50,000 Plaintext Passwords Leaked</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">4 HOUR QUEUE WRAPPED AROUND BLOCK</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 8: Authorization (OAuth 2.0, JWT, RBAC)
    renderAuthzRbacVaultScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isUniversal = choice && choice.id === 'A';

      let badgeText = 'INITIAL PROBLEM: VALID BADGE AT EXECUTIVE VAULT DOOR';
      let badgeType = 'problem';
      let telemetryText = 'Worker: Shelf-Stocker attempting Executive Vault';
      let footerTitle = 'Authorization Dilemma';
      let footerDesc = 'The worker is authenticated as an employee, but should that badge open the company cash safe?';
      let footerIcon = '🚪';

      if (isOptimal) {
        badgeText = 'AUTHORIZATION SUCCESS: RBAC + LEAST PRIVILEGE + JWT';
        badgeType = 'solution';
        telemetryText = 'Stocker ──► Vault: 403 FORBIDDEN • Aisle: 200 ALLOWED';
        footerTitle = 'Principle of Least Privilege Active';
        footerDesc = 'Roles dictate access: stockers restock aisles, while vault doors remain securely locked.';
        footerIcon = '🛡️';
      } else if (isUniversal) {
        badgeText = 'UNIVERSAL ACCESS: INTERNAL THEFT & PAYROLL LEAK';
        badgeType = 'problem';
        telemetryText = 'Security: COMPROMISED • Cash Vault Looted';
        footerTitle = 'Authorization Collapse';
        footerDesc = 'Valid employee badge opened the executive vault, allowing unauthorized salary alterations and theft!';
        footerIcon = '💸';
      } else {
        badgeText = 'LOCKED EMPTY STORE: SPOILED PRODUCE';
        badgeType = 'problem';
        telemetryText = 'Staff: 0 Allowed • Store Bankrupt';
        footerTitle = 'Operational Freeze';
        footerDesc = 'Firing all workers prevented theft, but groceries spoiled and the business shut down.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'vault');

      if (!choice) {
        content += '<text x="320" y="65" text-anchor="middle" font-size="12" font-weight="900" fill="#38bdf8">VALID EMPLOYEE BADGE ──► ATTEMPTING EXECUTIVE CASH VAULT</text>';
        content += this.renderHuman(240, 200, 'worker', 'alert', 'Shelf Stocker');
        content += this.renderStorageVault(420, 180, 'Executive Vault', 'secure');
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">RBAC CHECK: Role = "Stocker" ──► Vault Access = 403 FORBIDDEN (LOCKED)</text>';
        content += this.renderHuman(200, 210, 'worker', 'happy', 'Stocker at Aisles');
        content += this.renderHuman(300, 190, 'security', 'alert', 'Vault Guard');
        content += this.renderStorageVault(440, 175, 'Executive Safe', 'secure');
        // 403 badge
        content += '<rect x="360" y="195" width="60" height="20" rx="3" fill="#450a0a" stroke="#ef4444"/>';
        content += '<text x="390" y="209" text-anchor="middle" font-size="8" font-weight="900" fill="#fca5a5">403 LOCKED</text>';
      } else if (isUniversal) {
        content += this.renderStorageVault(320, 180, 'Executive Vault', 'breached');
        content += this.renderHuman(340, 210, 'worker', 'alert', 'Altering Payroll');
        content += '<text x="320" y="240" text-anchor="middle" font-size="11" font-weight="900" fill="#ef4444">CONFIDENTIAL PAYROLL LEAKED ONLINE</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">STORE PARALYZED • GOODS SPOILING</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 9: Database Design (SQL vs NoSQL & Polyglot Persistence)
    renderDatabasePolyglotScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isSingleDb = choice && choice.id === 'A';

      let badgeText = 'INITIAL PROBLEM: DUAL WORKLOAD STORAGE CONFLICT';
      let badgeType = 'problem';
      let telemetryText = 'Workloads: ACID Financial Ledger vs 5M Dynamic Products';
      let footerTitle = 'Database Architecture Dilemma';
      let footerDesc = 'Strict financial transactions require ACID guarantees; 5 million products & cart clicks require elastic speed.';
      let footerIcon = '💾';

      if (isOptimal) {
        badgeText = 'POLYGLOT PERSISTENCE SUCCESS: SQL (ACID) + NOSQL (ELASTIC)';
        badgeType = 'solution';
        telemetryText = 'SQL: Zero Double-Selling • NoSQL/Redis: 1ms Cart Speed';
        footerTitle = 'Polyglot Persistence Architecture';
        footerDesc = 'Relational PostgreSQL enforces financial ACID consistency; NoSQL MongoDB & Redis handle dynamic catalogs and carts.';
        footerIcon = '💎';
      } else if (isSingleDb) {
        badgeText = 'DATABASE I/O DEADLOCK & DOUBLE-SELLING DISASTER';
        badgeType = 'problem';
        telemetryText = 'Conflict: Disk 100% Thrashing • Ledger Corrupted';
        footerTitle = 'Single Storage Failure';
        footerDesc = 'Forcing all workloads into one engine caused database locking under cart clicks and double-selling out-of-stock formula!';
        footerIcon = '💥';
      } else {
        badgeText = 'STICKY NOTES BLOWN AWAY BY BREEZE';
        badgeType = 'problem';
        telemetryText = 'Durability: 0% • Orders Lost Forever';
        footerTitle = 'Physical Loss';
        footerDesc = 'A gust of wind blew sticky paper notes off the cork board, permanently erasing business records.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'market');

      if (!choice) {
        content += '<text x="320" y="65" text-anchor="middle" font-size="11" font-weight="900" fill="#38bdf8">FINANCIAL LEDGER (STRICT ACID) vs 5M CATALOG PRODUCTS (ELASTIC NOSQL)</text>';
        content += this.renderStorageVault(240, 180, 'Financial Ledger', 'secure');
        content += this.renderStorageVault(400, 180, '5M Product Catalog', 'secure');
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">POLYGLOT PERSISTENCE: POSTGRESQL (ACID) + MONGODB (DOCUMENTS) + REDIS (CARTS)</text>';
        // SQL Engine
        content += this.renderStorageVault(200, 175, 'PostgreSQL (ACID)', 'secure');
        content += '<rect x="160" y="240" width="80" height="20" rx="3" fill="#15803d"/><text x="200" y="253" text-anchor="middle" font-size="7" font-weight="900" fill="#fff">ACID GUARANTEES</text>';

        // NoSQL Engine
        content += this.renderStorageVault(340, 175, 'MongoDB (Catalog)', 'secure');
        content += '<rect x="300" y="240" width="80" height="20" rx="3" fill="#0369a1"/><text x="340" y="253" text-anchor="middle" font-size="7" font-weight="900" fill="#fff">DYNAMIC SCHEMA</text>';

        // Redis In-Memory Cache
        content += this.renderStorageVault(460, 175, 'Redis (Carts 1ms)', 'secure');
        content += '<rect x="420" y="240" width="80" height="20" rx="3" fill="#b91c1c"/><text x="460" y="253" text-anchor="middle" font-size="7" font-weight="900" fill="#fff">IN-MEMORY O(1)</text>';
      } else if (isSingleDb) {
        content += '<rect x="220" y="170" width="200" height="40" rx="4" fill="#450a0a" stroke="#ef4444"/>';
        content += '<text x="320" y="188" text-anchor="middle" font-size="10" font-weight="900" fill="#fca5a5">DATABASE DISK I/O 100% DEADLOCK</text>';
        content += '<text x="320" y="200" text-anchor="middle" font-size="8" font-weight="700" fill="#fca5a5">Double-Selling Out-Of-Stock Inventory</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">PAPER NOTES BLOWN AWAY • ALL ORDERS LOST</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },


    // =========================================================================
    // LEVELS 10-18 SCENARIOS (OLTP/OLAP, ACID, REPLICATION, CACHE, CDN, SCALING, LB, RATE LIMIT, SHARDING)
    // =========================================================================

    // LEVEL 10: Cash Register vs Accountant's Ledger (OLTP vs OLAP)
    renderOltpOlapRegistersScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isShared = choice && choice.id === 'A';
      const isBlind = choice && choice.id === 'C';

      let badgeText = 'INITIAL PROBLEM: DUAL WORKLOAD LOCKOUT';
      let badgeType = 'problem';
      let telemetryText = 'Workload: 100 Checkout Counters + 5-Year CFO Audit Query';
      let footerTitle = 'OLTP vs OLAP Workload Conflict';
      let footerDesc = 'Heavy analytical queries lock database rows, freezing live checkout counters on the floor.';
      let footerIcon = '⚡';

      if (isOptimal) {
        badgeText = 'DUAL ARCHITECTURE SUCCESS: OLTP (BILLING) + OLAP (DATA WAREHOUSE)';
        badgeType = 'solution';
        telemetryText = 'OLTP: Sub-50ms Scans • OLAP: 5-Year Queries in 2s (ETL Synced)';
        footerTitle = 'Separation of Transactional and Analytical Engines';
        footerDesc = 'Normalized row-based SQL handles checkout billing; nightly ETL loads columnar warehouse for the CFO.';
        footerIcon = '📊';
      } else if (isShared) {
        badgeText = 'DATABASE TABLE LOCK DEADLOCK • CHECKOUT FREEZE';
        badgeType = 'problem';
        telemetryText = 'Latency: 30s+ • 100 Cash Registers Frozen';
        footerTitle = 'Single Ledger Shared Lockout';
        footerDesc = 'CFO analytical scan locked 50,000 rows. Cashiers cannot scan groceries, queue stretches out the door!';
        footerIcon = '🔒';
      } else if (isBlind) {
        badgeText = 'BLIND MANAGEMENT • INVENTORY SPOILAGE & TAX AUDIT';
        badgeType = 'problem';
        telemetryText = 'Analytics: 0% • Spoilage: 40% • Tax Fines Pending';
        footerTitle = 'Banning Analytics Disaster';
        footerDesc = 'Store operates blind without historical sales data, leading to severe dairy spoilage and tax penalties.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'market');

      if (!choice) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#38bdf8">100 CHECKOUT LANES (OLTP) vs CFO 5-YEAR AUDIT (OLAP)</text>';
        content += this.renderServiceDesk(200, 190, 'open');
        content += this.renderHuman(160, 210, 'shopper', 'alert', 'Shopper In Line');
        content += this.renderStorageVault(320, 170, 'Shared Database', 'secure');
        content += '<rect x="420" y="160" width="80" height="40" rx="4" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>';
        content += '<text x="460" y="180" text-anchor="middle" font-size="8" font-weight="900" fill="#fcd34d">CFO DESK</text>';
        content += '<text x="460" y="192" text-anchor="middle" font-size="7" fill="#cbd5e1">5-Year Query</text>';
        content += this.renderHuman(520, 195, 'clerk', 'confused', 'CFO Analyst');
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">OLTP REGISTERS (ROW-BASED) ──► NIGHTLY ETL ──► OLAP COLUMNAR WAREHOUSE</text>';
        // Front OLTP
        content += this.renderServiceDesk(180, 190, 'open');
        content += '<rect x="140" y="240" width="80" height="20" rx="3" fill="#15803d"/><text x="180" y="253" text-anchor="middle" font-size="7" font-weight="900" fill="#fff">OLTP (SUB-50ms)</text>';
        content += this.renderHuman(130, 205, 'shopper', 'happy', 'Fast Checkout');
        // ETL Pipe
        content += '<line x1="230" y1="190" x2="390" y2="190" stroke="#38bdf8" stroke-width="3" stroke-dasharray="6,4"/>';
        content += '<rect x="280" y="178" width="60" height="18" rx="3" fill="#0369a1"/><text x="310" y="190" text-anchor="middle" font-size="7" font-weight="900" fill="#fff">ETL SYNC</text>';
        // Back OLAP
        content += this.renderStorageVault(440, 175, 'OLAP Warehouse', 'secure');
        content += '<rect x="400" y="240" width="80" height="20" rx="3" fill="#0284c7"/><text x="440" y="253" text-anchor="middle" font-size="7" font-weight="900" fill="#fff">COLUMNAR BI</text>';
        content += this.renderHuman(530, 190, 'clerk', 'happy', 'CFO Insights');
      } else if (isShared) {
        content += '<rect x="220" y="160" width="200" height="50" rx="4" fill="#450a0a" stroke="#ef4444" stroke-width="1.5"/>';
        content += '<text x="320" y="180" text-anchor="middle" font-size="10" font-weight="900" fill="#fca5a5">EXCLUSIVE TABLE LOCK HELD</text>';
        content += '<text x="320" y="195" text-anchor="middle" font-size="8" font-weight="700" fill="#fca5a5">All 100 Checkout Scanners Blocked!</text>';
        content += this.renderHuman(160, 210, 'shopper', 'alert', 'Furious Line');
      } else {
        content += '<rect x="220" y="170" width="200" height="40" rx="4" fill="#374151" stroke="#9ca3af"/>';
        content += '<text x="320" y="190" text-anchor="middle" font-size="10" font-weight="900" fill="#f3f4f6">ZERO BUSINESS REPORTING</text>';
        content += '<text x="320" y="202" text-anchor="middle" font-size="8" fill="#d1d5db">Perishables Spoiling • Tax Audit Penalty</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 11: The Multi-Step Vault Deposit (ACID Deep Dive)
    renderAcidAtomicVaultScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isBlackoutFail = choice && choice.id === 'A';
      const isFraud = choice && choice.id === 'C';

      let badgeText = 'INITIAL PROBLEM: POWER BLACKOUT MID-TRANSFER';
      let badgeType = 'problem';
      let telemetryText = 'Step 1: Wallet -Rs.1,000 [DONE] • Step 2: Store Vault +Rs.1,000 [POWER CUT]';
      let footerTitle = 'Multi-Statement Transaction Failure';
      let footerDesc = 'A sudden power failure strikes right after debiting the customer, before crediting the store ledger.';
      let footerIcon = '⚡';

      if (isOptimal) {
        badgeText = 'ATOMIC TRANSACTION ROLLBACK: ZERO MONEY LOST';
        badgeType = 'solution';
        telemetryText = 'WAL Log Replay: Step 1 Rolled Back • Rs.1,000 Restored to Wallet';
        footerTitle = 'ACID Transaction Engine';
        footerDesc = 'All-or-nothing atomicity and Write-Ahead Logging (WAL) rolled back the uncommitted debit upon reboot.';
        footerIcon = '🛡️';
      } else if (isBlackoutFail) {
        badgeText = 'FUNDS VANISHED INTO THE VOID • LEGAL LAWSUIT';
        badgeType = 'problem';
        telemetryText = 'Customer Wallet: -Rs.1,000 • Supermarket Ledger: Rs.0';
        footerTitle = 'Partial Write Disaster';
        footerDesc = 'Rs. 1,000 was deducted but never credited. Money vanished, sparking a customer fraud lawsuit!';
        footerIcon = '💥';
      } else if (isFraud) {
        badgeText = 'MANUAL REFUND FRAUD SCAM INVASION';
        badgeType = 'problem';
        telemetryText = 'Deficit: Rs.500,000 in Fake Blackout Claims';
        footerTitle = 'Honor System Exploitation';
        footerDesc = 'Dishonest customers faked phone disconnects to claim double refunds, draining store finances.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'vault');

      if (!choice) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#f87171">⚡ BLACKOUT STRIKES BETWEEN STEP 1 AND STEP 2 ⚡</text>';
        content += this.renderHuman(180, 200, 'shopper', 'alert', 'Shopper (Wallet)');
        content += '<line x1="220" y1="190" x2="380" y2="190" stroke="#ef4444" stroke-width="3" stroke-dasharray="6,4"/>';
        content += '<text x="300" y="180" text-anchor="middle" font-size="16">⚡</text>';
        content += this.renderStorageVault(440, 175, 'Store Vault', 'secure');
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">ACID RECOVERY: WRITE-AHEAD LOG (WAL) RESTORES WALLET BALANCE</text>';
        content += this.renderHuman(180, 200, 'shopper', 'happy', 'Wallet Restored (Rs.1,000)');
        content += '<rect x="250" y="170" width="140" height="40" rx="4" fill="#14532d" stroke="#22c55e" stroke-width="1.2"/>';
        content += '<text x="320" y="186" text-anchor="middle" font-size="8" font-weight="900" fill="#86efac">ATOMIC ROLLBACK</text>';
        content += '<text x="320" y="198" text-anchor="middle" font-size="7" font-weight="700" fill="#bbf7d0">All-Or-Nothing Invariant Intact</text>';
        content += this.renderStorageVault(440, 175, 'Store Vault', 'secure');
      } else if (isBlackoutFail) {
        content += '<rect x="230" y="170" width="180" height="45" rx="4" fill="#450a0a" stroke="#ef4444"/>';
        content += '<text x="320" y="188" text-anchor="middle" font-size="10" font-weight="900" fill="#fca5a5">MONEY DROPPED MID-FLIGHT</text>';
        content += '<text x="320" y="202" text-anchor="middle" font-size="8" fill="#fca5a5">-Rs.1,000 Lost In Power Outage</text>';
        content += this.renderHuman(160, 210, 'shopper', 'alert', 'Angry Customer');
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">STORE BANKRUPTED BY FAKE REFUND FRAUD</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 12: The Backup Store Ledgers (Database Replication)
    renderDbReplicationClusterScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isSingleMaster = choice && choice.id === 'A';
      const isSplitBrain = choice && choice.id === 'C';

      let badgeText = 'INITIAL PROBLEM: OVERLOADED SINGLE DATABASE SPOF';
      let badgeType = 'problem';
      let telemetryText = '100 Registers hammering 1 Database Server • Disk I/O 99% • 8s Price Scans';
      let footerTitle = 'Single Point of Failure Bottleneck';
      let footerDesc = 'Every checkout register queries the same database disk, grinding transactions to a halt.';
      let footerIcon = '🔥';

      if (isOptimal) {
        badgeText = 'PRIMARY-REPLICA REPLICATION SUCCESS: 3ms LOOKUPS';
        badgeType = 'solution';
        telemetryText = 'Primary: Dedicated to Writes • 3 Replicas: 100 Registers Read in Parallel';
        footerTitle = 'High Availability & Read Scalability';
        footerDesc = 'Sales writes route to Primary; price reads scale horizontally across synced read replicas.';
        footerIcon = '⚡';
      } else if (isSingleMaster) {
        badgeText = 'HARD DRIVE OVERHEATED • STOREWIDE CRASH';
        badgeType = 'problem';
        telemetryText = 'Hardware Failure: Disk Burnout • 100 Lanes Paralyzed';
        footerTitle = 'Single Point of Failure Disaster';
        footerDesc = 'The single database disk overheated and died at 2 PM Saturday. 1,500 shoppers turned away!';
        footerIcon = '💥';
      } else if (isSplitBrain) {
        badgeText = 'ISOLATED DESYNCHRONIZED LEDGER DISASTER';
        badgeType = 'problem';
        telemetryText = 'Price Drift: $20 vs $50 vs $0 • Inventory Double-Sold';
        footerTitle = 'Split-Brain Inventory Inconsistency';
        footerDesc = 'Registers operated isolated local ledgers without syncing, double-selling out-of-stock inventory!';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'market');

      if (!choice) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#f87171">100 CASHIERS CROWDING A SINGLE OVERHEATING HARD DRIVE</text>';
        content += this.renderStorageVault(320, 160, 'Single DB (99% CPU)', 'breached');
        content += this.renderHuman(220, 220, 'clerk', 'alert', 'Register 1');
        content += this.renderHuman(320, 230, 'clerk', 'alert', 'Register 50');
        content += this.renderHuman(420, 220, 'clerk', 'alert', 'Register 100');
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">PRIMARY (WRITES) ──► CONTINUOUS REPLICATION STREAM ──► READ REPLICAS</text>';
        // Primary Node
        content += this.renderStorageVault(320, 140, 'Primary (Writes)', 'secure');
        // Replication arrows
        content += '<line x1="280" y1="160" x2="190" y2="210" stroke="#22c55e" stroke-width="2" stroke-dasharray="4,3"/>';
        content += '<line x1="320" y1="170" x2="320" y2="210" stroke="#22c55e" stroke-width="2" stroke-dasharray="4,3"/>';
        content += '<line x1="360" y1="160" x2="450" y2="210" stroke="#22c55e" stroke-width="2" stroke-dasharray="4,3"/>';
        // 3 Replicas
        content += this.renderStorageVault(170, 210, 'Read Replica 1', 'secure');
        content += this.renderStorageVault(320, 210, 'Read Replica 2', 'secure');
        content += this.renderStorageVault(470, 210, 'Read Replica 3', 'secure');
      } else if (isSingleMaster) {
        content += '<rect x="220" y="160" width="200" height="50" rx="4" fill="#450a0a" stroke="#ef4444"/>';
        content += '<text x="320" y="182" text-anchor="middle" font-size="10" font-weight="900" fill="#fca5a5">HARD DISK SMOKE & FAILURE</text>';
        content += '<text x="320" y="196" text-anchor="middle" font-size="8" fill="#fca5a5">All 100 Lanes Shut Down • Store Closed</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">PRICE CHAOS • DOUBLE-SELLING OUT OF STOCK</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 13: The Cashier's Sticky Notepad (Caching Strategies)
    renderCachingStickyNotepadScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isDiskOnly = choice && choice.id === 'A';
      const isHumanOnly = choice && choice.id === 'C';

      let badgeText = 'INITIAL PROBLEM: DISK I/O REPETITIVE LOOKUP THRASHING';
      let badgeType = 'problem';
      let telemetryText = '80,000 Queries/Hour fetching the same 5 hot summer items from spinning disk';
      let footerTitle = 'Redundant Disk Query Overhead';
      let footerDesc = 'Cashiers repeatedly hit mechanical disk storage for the price of water and soda, creating long queues.';
      let footerIcon = '💾';

      if (isOptimal) {
        badgeText = 'IN-MEMORY CACHING SUCCESS: 0.2ms LOOKUPS (90% DISK OFF-LOAD)';
        badgeType = 'solution';
        telemetryText = 'Cache Hit: 90% (RAM 0.2ms) • Cache Miss: 10% (Loaded to Cache + LRU)';
        footerTitle = 'In-Memory Cache (Redis) Architecture';
        footerDesc = 'Frequently scanned items reside in ultra-fast RAM; LRU policy evicts stale entries automatically.';
        footerIcon = '⚡';
      } else if (isDiskOnly) {
        badgeText = 'DISK HEAD THRASHING • SLOW QUEUES';
        badgeType = 'problem';
        telemetryText = 'Disk I/O: 100% Saturated • High Energy Waste';
        footerTitle = 'Disk Thrashing Fatigue';
        footerDesc = 'Scanning disk 80,000 times an hour for the same $1 soda caused mechanical latency and hot queues.';
        footerIcon = '🐢';
      } else if (isHumanOnly) {
        badgeText = 'HUMAN MEMORY MISCHARGING DISASTER';
        badgeType = 'problem';
        telemetryText = 'Accuracy: 70% • Customer Overcharges & Discrepancies';
        footerTitle = 'Human Memory Failure';
        footerDesc = 'Cashiers guessed outdated prices, leading to customer disputes and severe revenue loss.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'market');

      if (!choice) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#38bdf8">80,000 QUERIES/HR HITTING DISK FOR SODA & WATER</text>';
        content += this.renderServiceDesk(220, 190, 'open');
        content += this.renderHuman(160, 205, 'shopper', 'alert', 'Waiting Shopper');
        content += '<line x1="260" y1="200" x2="420" y2="200" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6,4"/>';
        content += this.renderStorageVault(460, 175, 'Replica Disk', 'secure');
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">CACHE HIT IN 0.2ms (RAM) ──► 90% OF DISK QUERIES ELIMINATED</text>';
        // Service Desk with Glowing Sticky Notepad (Redis)
        content += this.renderServiceDesk(220, 190, 'open');
        // Yellow sticky note
        content += '<polygon points="255,160 285,160 285,190 255,190" fill="#fef08a" stroke="#ca8a04" stroke-width="1.2"/>';
        content += '<text x="270" y="175" text-anchor="middle" font-size="7" font-weight="900" fill="#854d0e">REDIS</text>';
        content += '<text x="270" y="185" text-anchor="middle" font-size="6" font-weight="700" fill="#854d0e">0.2ms</text>';
        content += this.renderHuman(150, 205, 'shopper', 'happy', 'Instant Scan');
        // Database Disk idle
        content += this.renderStorageVault(460, 175, 'Database Disk (Idle)', 'secure');
        content += '<text x="460" y="245" text-anchor="middle" font-size="8" font-weight="800" fill="#22c55e">✓ 90% Relieved</text>';
      } else if (isDiskOnly) {
        content += '<rect x="220" y="170" width="200" height="40" rx="4" fill="#450a0a" stroke="#ef4444"/>';
        content += '<text x="320" y="188" text-anchor="middle" font-size="10" font-weight="900" fill="#fca5a5">DISK I/O 100% SATURATED</text>';
        content += '<text x="320" y="200" text-anchor="middle" font-size="8" fill="#fca5a5">Unnecessary disk head thrashing!</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">HUMAN MISCHARGES • CUSTOMER DISPUTES</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 14: Kiosks Across the State (Content Delivery Networks - CDN)
    renderCdnEdgeKiosksScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isSlowTransit = choice && choice.id === 'A';
      const isPlainText = choice && choice.id === 'C';

      let badgeText = 'INITIAL PROBLEM: 500KM OPTICAL TRANSIT LATENCY';
      let badgeType = 'problem';
      let telemetryText = 'Coimbatore Origin ──► Chennai (500km): 6s Photo Flyer Download';
      let footerTitle = 'Geographical Network Latency Bottleneck';
      let footerDesc = 'Distant shoppers download heavy 5 MB brochures across hundreds of kilometers of optical fiber.';
      let footerIcon = '🌐';

      if (isOptimal) {
        badgeText = 'CDN EDGE POPS SUCCESS: 20ms LOCAL FLYER DELIVERY';
        badgeType = 'solution';
        telemetryText = 'Chennai PoP: 20ms • Madurai PoP: 18ms • Origin Bandwidth Saved: 85%';
        footerTitle = 'Content Delivery Network (CDN) Architecture';
        footerDesc = 'Static photos and flyers cache at local Edge PoPs; Origin server handles dynamic checkout only.';
        footerIcon = '🚀';
      } else if (isSlowTransit) {
        badgeText = 'BANDWIDTH CONGESTION • 6-SECOND LOAD TIMES';
        badgeType = 'problem';
        telemetryText = 'Coimbatore Pipe: 100% Choked • High Abandonment';
        footerTitle = 'Single Origin Saturation';
        footerDesc = 'Thousands of statewide downloads overloaded Coimbatore servers, freezing remote shoppers!';
        footerIcon = '🐢';
      } else if (isPlainText) {
        badgeText = '1985 TERMINAL DISASTER • MASS CUSTOMER CHURN';
        badgeType = 'problem';
        telemetryText = 'Design: Plaintext • Conversion: -80% • App Uninstalled';
        footerTitle = 'Aesthetic Stripping Failure';
        footerDesc = 'Stripping photos turned the app into an ugly terminal; customers uninstalled in favor of rivals.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'city');

      if (!choice) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#38bdf8">COIMBATORE ORIGIN TO CHENNAI (500 KM OPTICAL FIBER DELAY)</text>';
        content += this.renderStorageVault(180, 180, 'Coimbatore Origin', 'secure');
        content += '<line x1="220" y1="190" x2="420" y2="190" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6,4"/>';
        content += '<text x="320" y="180" text-anchor="middle" font-size="8" font-weight="900" fill="#fcd34d">500 KM FIBER (6s)</text>';
        content += this.renderHuman(460, 190, 'shopper', 'alert', 'Chennai Shopper');
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">LOCAL EDGE POPS: CHENNAI, MADURAI, SALEM SERVE ASSETS IN 20ms</text>';
        // Coimbatore Origin
        content += this.renderStorageVault(160, 180, 'Origin Server', 'secure');
        // CDN Edge Kiosks
        content += '<rect x="290" y="140" width="70" height="35" rx="4" fill="#0284c7" stroke="#38bdf8" stroke-width="1.2"/>';
        content += '<text x="325" y="155" text-anchor="middle" font-size="7" font-weight="900" fill="#fff">Salem Edge PoP</text>';
        content += '<text x="325" y="167" text-anchor="middle" font-size="6" fill="#e0f2fe">20ms Local</text>';

        content += '<rect x="440" y="120" width="80" height="35" rx="4" fill="#0284c7" stroke="#38bdf8" stroke-width="1.2"/>';
        content += '<text x="480" y="135" text-anchor="middle" font-size="7" font-weight="900" fill="#fff">Chennai Edge PoP</text>';
        content += '<text x="480" y="147" text-anchor="middle" font-size="6" fill="#e0f2fe">20ms Local</text>';

        content += '<rect x="360" y="210" width="80" height="35" rx="4" fill="#0284c7" stroke="#38bdf8" stroke-width="1.2"/>';
        content += '<text x="400" y="225" text-anchor="middle" font-size="7" font-weight="900" fill="#fff">Madurai Edge PoP</text>';
        content += '<text x="400" y="237" text-anchor="middle" font-size="6" fill="#e0f2fe">18ms Local</text>';

        content += this.renderHuman(540, 150, 'shopper', 'happy', 'Chennai User');
      } else if (isSlowTransit) {
        content += '<rect x="220" y="170" width="200" height="40" rx="4" fill="#450a0a" stroke="#ef4444"/>';
        content += '<text x="320" y="188" text-anchor="middle" font-size="10" font-weight="900" fill="#fca5a5">NETWORK PIPE 100% SATURATED</text>';
        content += '<text x="320" y="200" text-anchor="middle" font-size="8" fill="#fca5a5">Distant users experiencing 6s delays!</text>';
      } else {
        content += '<rect x="220" y="160" width="200" height="50" rx="4" fill="#052e16" stroke="#22c55e"/>';
        content += '<text x="320" y="182" text-anchor="middle" font-size="9" font-family="monospace" fill="#86efac">> 1985 TEXT TERMINAL</text>';
        content += '<text x="320" y="196" text-anchor="middle" font-size="7" font-family="monospace" fill="#86efac">> Shoppers uninstalled app</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 15: Outgrowing the Property (Horizontal vs. Vertical Scaling)
    renderScalingClusterNodesScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isVertical = choice && choice.id === 'A';
      const isMeltdown = choice && choice.id === 'C';

      let badgeText = 'INITIAL PROBLEM: 95% CPU PEGGED AT 200,000 VISITORS';
      let badgeType = 'problem';
      let telemetryText = 'Traffic: 200,000 Users • CPU: 95% Screaming Fans • Single Machine Exhaustion';
      let footerTitle = 'Hardware Resource Exhaustion';
      let footerDesc = 'Customer growth from 2,000 to 200,000 pushed the single server to near-thermal collapse.';
      let footerIcon = '🔥';

      if (isOptimal) {
        badgeText = 'HORIZONTAL SCALING (SCALE OUT) SUCCESS: 4-NODE CLUSTER';
        badgeType = 'solution';
        telemetryText = 'Nodes: 4x Commodity Servers • CPU: 24% Balanced • Zero Downtime';
        footerTitle = 'Horizontal Cluster Architecture';
        footerDesc = 'Adding commodity server nodes shares load flexibly, eliminates SPOF, and scales elastically.';
        footerIcon = '🚀';
      } else if (isVertical) {
        badgeText = 'VERTICAL UPGRADE HIT PHYSICAL MANUFACTURING CEILING';
        badgeType = 'problem';
        telemetryText = 'Cost: 10x Enterprise Premium • Ceiling Reached: No Bigger Chips On Earth';
        footerTitle = 'Vertical Scaling Physical Ceiling';
        footerDesc = 'Upgrading the single machine cost 10x, required downtime, and hit hard physical CPU limits!';
        footerIcon = '🧱';
      } else if (isMeltdown) {
        badgeText = 'THERMAL SHUTDOWN MELTDOWN • REVENUE LOST';
        badgeType = 'problem';
        telemetryText = 'Hardware Alert: 105°C Thermal Trip • Connections Dropped';
        footerTitle = 'Neglected Overload Failure';
        footerDesc = 'Ignoring 95% CPU utilization caused automatic thermal shutdown, crashing the entire weekend!';
        footerIcon = '💥';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'city');

      if (!choice) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#f87171">SINGLE SERVER GROANING UNDER 200,000 DAILY SHOPPERS</text>';
        content += this.renderStorageVault(320, 160, 'Single Server (95% CPU)', 'breached');
        content += '<text x="320" y="235" text-anchor="middle" font-size="18">🔥 ⚠️ 🔥</text>';
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">HORIZONTAL CLUSTER: 4 COMMODITY NODES SHARING LOAD AT 24% CPU</text>';
        content += this.renderStorageVault(170, 160, 'Node 1 (24%)', 'secure');
        content += this.renderStorageVault(270, 160, 'Node 2 (24%)', 'secure');
        content += this.renderStorageVault(370, 160, 'Node 3 (24%)', 'secure');
        content += this.renderStorageVault(470, 160, 'Node 4 (24%)', 'secure');
        content += '<rect x="220" y="240" width="200" height="20" rx="4" fill="#15803d"/><text x="320" y="253" text-anchor="middle" font-size="8" font-weight="900" fill="#fff">ELASTIC COMMODITY FLEET</text>';
      } else if (isVertical) {
        content += '<rect x="250" y="130" width="140" height="90" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>';
        content += '<text x="320" y="155" text-anchor="middle" font-size="9" font-weight="900" fill="#fcd34d">MONSTER 128-CORE BOX</text>';
        content += '<text x="320" y="172" text-anchor="middle" font-size="7" fill="#fca5a5">10x Cost • Downtime Required</text>';
        content += '<text x="320" y="195" text-anchor="middle" font-size="7" font-weight="700" fill="#ef4444">"No larger chips made on Earth"</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="14" font-weight="900" fill="#ef4444">💥 THERMAL MELTDOWN • REVENUE LOST 💥</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 16: The Highway Traffic Director (Load Balancing)
    renderLoadBalancerTrafficScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isRandom = choice && choice.id === 'A';
      const isRelapse = choice && choice.id === 'C';

      let badgeText = 'INITIAL PROBLEM: 95% TRAFFIC CLUMPED ON SERVER 1';
      let badgeType = 'problem';
      let telemetryText = 'Server 1: 95% CPU (Catching Fire!) • Servers 2, 3, 4: 0% CPU (Completely Idle)';
      let footerTitle = 'Traffic Imbalance Bottleneck';
      let footerDesc = 'Clients hardcoded Server 1 IP, crushing it while three healthy servers sat unused.';
      let footerIcon = '⚠️';

      if (isOptimal) {
        badgeText = 'LOAD BALANCER SUCCESS: SMART ROUND-ROBIN DISTRIBUTION';
        badgeType = 'solution';
        telemetryText = 'Even Load: 25% across all 4 nodes • Active Health Checks: Dead Nodes Detached';
        footerTitle = 'Load Balancer Architecture';
        footerDesc = 'Single Virtual IP distributes traffic evenly and isolates unhealthy servers via /healthz heartbeat.';
        footerIcon = '⚖️';
      } else if (isRandom) {
        badgeText = 'RANDOM CLIENT ROUTING • TRAFFIC SENT TO DEAD IP';
        badgeType = 'problem';
        telemetryText = 'Clumping: Uneven • Failure: Sent traffic to crashed Server 3';
        footerTitle = 'Uncontrolled Routing Failure';
        footerDesc = 'Clients randomly chose IPs, sending thousands of shoppers to crashed Server 3!';
        footerIcon = '💥';
      } else if (isRelapse) {
        badgeText = 'MONOLITHIC RELAPSE DISASTER';
        badgeType = 'problem';
        telemetryText = 'Shutting down idle servers crashed Server 1 instantly!';
        footerTitle = 'Relapse Failure';
        footerDesc = 'Forcing Server 1 to handle all load alone re-triggered the Level 15 outage immediately.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'city');

      if (!choice) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#f87171">95% TRAFFIC CLUMPING ON SERVER 1 (SERVERS 2-4 SITTING IDLE)</text>';
        content += this.renderStorageVault(170, 170, 'Server 1 (95% FIRE)', 'breached');
        content += this.renderStorageVault(270, 170, 'Server 2 (0% Idle)', 'secure');
        content += this.renderStorageVault(370, 170, 'Server 3 (0% Idle)', 'secure');
        content += this.renderStorageVault(470, 170, 'Server 4 (0% Idle)', 'secure');
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">LOAD BALANCER: EVEN 25% DISTRIBUTION WITH CONTINUOUS HEALTH CHECKS</text>';
        // Load Balancer
        content += '<rect x="270" y="110" width="100" height="35" rx="5" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>';
        content += '<text x="320" y="125" text-anchor="middle" font-size="8" font-weight="900" fill="#fff">LOAD BALANCER</text>';
        content += '<text x="320" y="137" text-anchor="middle" font-size="7" fill="#e0f2fe">Round-Robin VIP</text>';
        // 4 lines
        content += '<line x1="280" y1="145" x2="170" y2="185" stroke="#22c55e" stroke-width="2"/>';
        content += '<line x1="300" y1="145" x2="270" y2="185" stroke="#22c55e" stroke-width="2"/>';
        content += '<line x1="340" y1="145" x2="370" y2="185" stroke="#22c55e" stroke-width="2"/>';
        content += '<line x1="360" y1="145" x2="470" y2="185" stroke="#22c55e" stroke-width="2"/>';
        // 4 balanced nodes
        content += this.renderStorageVault(170, 185, 'Node 1 (25%)', 'secure');
        content += this.renderStorageVault(270, 185, 'Node 2 (25%)', 'secure');
        content += this.renderStorageVault(370, 185, 'Node 3 (25%)', 'secure');
        content += this.renderStorageVault(470, 185, 'Node 4 (25%)', 'secure');
      } else if (isRandom) {
        content += '<rect x="220" y="170" width="200" height="40" rx="4" fill="#450a0a" stroke="#ef4444"/>';
        content += '<text x="320" y="188" text-anchor="middle" font-size="10" font-weight="900" fill="#fca5a5">DEAD SERVER TRAFFIC FAILURE</text>';
        content += '<text x="320" y="200" text-anchor="middle" font-size="8" fill="#fca5a5">Clients sent traffic to dead Server 3 IP!</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">SERVER 1 CRASHED • STORE OFFLINE</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 17: The Gate Turnstile & Scalper Rush (Rate Limiting)
    renderRateLimiterTurnstileScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isStampede = choice && choice.id === 'A';
      const isShutDown = choice && choice.id === 'C';

      let badgeText = 'INITIAL PROBLEM: 50,000 BOT REQ/SEC SCALPER STORM';
      let badgeType = 'problem';
      let telemetryText = 'Sunday 9:00 AM Flash Sale: Scalper bots flooding API • Real shoppers timed out';
      let footerTitle = 'Automated Scalper Bot Stampede';
      let footerDesc = 'Bots fire 50,000 req/sec at 9:00 AM, exhausting network sockets and denying real families.';
      let footerIcon = '🤖';

      if (isOptimal) {
        badgeText = 'RATE LIMITER SUCCESS: TOKEN BUCKET SHIELD (HTTP 429)';
        badgeType = 'solution';
        telemetryText = 'Bots Throttled: HTTP 429 Too Many Requests • Humans: 5 Req/Min Flowing Fairly';
        footerTitle = 'Token Bucket Rate Limiting Architecture';
        footerDesc = 'Token Bucket algorithm permits fair human shopping while instantly shielding APIs from bot storms.';
        footerIcon = '🛡️';
      } else if (isStampede) {
        badgeText = 'DENIAL OF SERVICE CRASH • 100% SOCKETS CONSUMED';
        badgeType = 'problem';
        telemetryText = 'API Saturated: Connection Timeouts • Bots Scalped All Inventory in 3s';
        footerTitle = 'Unthrottled API Collapse';
        footerDesc = 'Unlimited request policy allowed scalpers to overwhelm servers and steal all inventory!';
        footerIcon = '💥';
      } else if (isShutDown) {
        badgeText = 'ONLINE STORE SHUT DOWN • 90% REVENUE LOSS';
        badgeType = 'problem';
        telemetryText = 'Sales: 90% Plummet • Busy Phone Tone Disaster';
        footerTitle = 'Digital Commerce Abandonment';
        footerDesc = 'Replacing online store with phone orders alienated shoppers and ruined business revenue.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'market');

      if (!choice) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#f87171">50,000 BOT REQ/SEC STORMING UNPROTECTED CHECKOUT DOORS</text>';
        content += this.renderHuman(140, 190, 'worker', 'alert', 'Scalper Bot 1');
        content += this.renderHuman(180, 220, 'worker', 'alert', 'Scalper Bot 2');
        content += '<text x="240" y="200" text-anchor="middle" font-size="14">🤖⚡🤖⚡</text>';
        content += this.renderStorageVault(420, 175, 'Checkout API', 'breached');
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">TOKEN BUCKET TURNSTILE: BOTS HIT HTTP 429 • FAMILIES PASS FAIRLY</text>';
        // Scalper bots blocked
        content += this.renderHuman(140, 190, 'worker', 'alert', 'Bot (500 req/s)');
        content += '<line x1="180" y1="190" x2="250" y2="190" stroke="#ef4444" stroke-width="3"/>';
        // Rate Limiter Shield
        content += '<rect x="260" y="150" width="100" height="55" rx="5" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.8"/>';
        content += '<text x="310" y="170" text-anchor="middle" font-size="8" font-weight="900" fill="#a5b4fc">RATE LIMITER</text>';
        content += '<text x="310" y="182" text-anchor="middle" font-size="7" font-weight="800" fill="#ef4444">HTTP 429 SHIELD</text>';
        content += '<text x="310" y="195" text-anchor="middle" font-size="6" fill="#c7d2fe">Token Bucket: 5/min</text>';
        // Human Shopper passing
        content += this.renderHuman(210, 240, 'shopper', 'happy', 'Family Shopper');
        content += '<line x1="260" y1="240" x2="410" y2="240" stroke="#22c55e" stroke-width="2" stroke-dasharray="4,2"/>';
        // Backend API Protected
        content += this.renderStorageVault(460, 175, 'Checkout API (Safe)', 'secure');
      } else if (isStampede) {
        content += '<rect x="220" y="170" width="200" height="40" rx="4" fill="#450a0a" stroke="#ef4444"/>';
        content += '<text x="320" y="188" text-anchor="middle" font-size="10" font-weight="900" fill="#fca5a5">100% NETWORK SOCKETS CHOKED</text>';
        content += '<text x="320" y="200" text-anchor="middle" font-size="8" fill="#fca5a5">Real shoppers locked out in DoS storm!</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">STORE SHUT DOWN • 90% REVENUE LOST</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 18: Splitting the Master Ledger (Database Sharding)
    renderDatabaseShardingLedgersScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isExhausted = choice && choice.id === 'A';
      const isDeleteRecords = choice && choice.id === 'C';

      let badgeText = 'INITIAL PROBLEM: 2 BILLION ROWS FILLING DISK TO 98%';
      let badgeType = 'problem';
      let telemetryText = '50 Million Accounts • 2 Billion Rows • Write backlog reaching multi-minute delays';
      let footerTitle = 'Monolithic Database Write Boundary';
      let footerDesc = 'Even read replicas cannot solve write volume on a single master table exceeding disk limits.';
      let footerIcon = '💾';

      if (isOptimal) {
        badgeText = 'DATABASE SHARDING SUCCESS: 4 INDEPENDENT PARTITIONS';
        badgeType = 'solution';
        telemetryText = 'Sharding Key: hash(UserID) % 4 • 500M Rows per Shard • Sub-15ms Writes';
        footerTitle = 'Horizontal Sharding Architecture';
        footerDesc = 'Partitioning tables horizontally across independent server nodes unlocks limitless write capacity.';
        footerIcon = '🗄️';
      } else if (isExhausted) {
        badgeText = 'DISK EXHAUSTION DISASTER • 100% INODE FULL';
        badgeType = 'problem';
        telemetryText = 'OS Alert: No Space Left On Device • Indexes Thrashing';
        footerTitle = 'Single Machine Disk Overflow';
        footerDesc = 'Single machine ran out of disk space under 2 billion rows, bringing down the nationwide store!';
        footerIcon = '💥';
      } else if (isDeleteRecords) {
        badgeText = 'LEGAL AUDIT DISASTER • PURCHASE HISTORIES DELETED';
        badgeType = 'problem';
        telemetryText = 'Warranties: Erased • Tax Compliance: Fines Imposed';
        footerTitle = 'Arbitrary Data Deletion Catastrophe';
        footerDesc = 'Erasing history broke warranties and triggered severe legal tax penalties for missing records.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'market');

      if (!choice) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#f87171">SINGLE 2-BILLION ROW LEDGER CRUSHING DISK (98% FULL)</text>';
        content += this.renderStorageVault(320, 160, 'Single Ledger (98% Disk)', 'breached');
        content += '<text x="320" y="235" text-anchor="middle" font-size="10" font-weight="900" fill="#ef4444">2,000,000,000 Rows Backlog</text>';
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">DATABASE SHARDING: HASH(USER_ID) % 4 ROUTING ACROSS 4 INDEPENDENT SHARDS</text>';
        // Router Layer
        content += '<rect x="250" y="110" width="140" height="28" rx="4" fill="#0369a1" stroke="#38bdf8" stroke-width="1.2"/>';
        content += '<text x="320" y="128" text-anchor="middle" font-size="8" font-weight="900" fill="#fff">SHARD ROUTER: HASH(USER_ID)</text>';
        // 4 Shard Vaults
        content += this.renderStorageVault(160, 185, 'Shard 1 (0-25%)', 'secure');
        content += this.renderStorageVault(270, 185, 'Shard 2 (25-50%)', 'secure');
        content += this.renderStorageVault(370, 185, 'Shard 3 (50-75%)', 'secure');
        content += this.renderStorageVault(480, 185, 'Shard 4 (75-100%)', 'secure');
        content += '<text x="320" y="255" text-anchor="middle" font-size="8" font-weight="800" fill="#22c55e">✓ Limitless Horizontal Write Scaling</text>';
      } else if (isExhausted) {
        content += '<rect x="220" y="170" width="200" height="40" rx="4" fill="#450a0a" stroke="#ef4444"/>';
        content += '<text x="320" y="188" text-anchor="middle" font-size="10" font-weight="900" fill="#fca5a5">DISK CAPACITY EXHAUSTED</text>';
        content += '<text x="320" y="200" text-anchor="middle" font-size="8" fill="#fca5a5">Single machine disk failure under 2B rows!</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">WARRANTIES ERASED • TAX AUDIT FINES</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    
    // =========================================================================
    // LEVELS 19-28 SCENARIO-SPECIFIC SCENE RENDERERS
    // =========================================================================

    // LEVEL 19: The Severed Telephone Wire (CAP Theorem)
    renderCapNetworkPartitionScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal); // Option B
      const isSellAnyway = choice && choice.id === 'A';
      const isManualMessengers = choice && choice.id === 'C';

      let badgeText = 'NETWORK PARTITION: FIBER OPTIC CABLE SEVERED';
      let badgeType = 'problem';
      let telemetryText = 'Partition: ACTIVE • North Store <---> South Store Offline';
      let footerTitle = 'CAP Theorem Tradeoff Dilemma';
      let footerDesc = 'A fallen tree severed communication between branches. You can guarantee Consistency or Availability, never both.';
      let footerIcon = '⚡';

      if (isOptimal) {
        badgeText = 'CONSISTENCY (CP) PRESERVED: ZERO OVERSOLD ITEMS';
        badgeType = 'solution';
        telemetryText = 'Consistency: 100% • 1 Espresso Machine Intact • Partition Safe';
        footerTitle = 'Consistency Over Availability Chosen';
        footerDesc = 'Pausing remote sales while the network is severed guaranteed inventory accuracy and prevented duplicate sales.';
        footerIcon = '🛡️';
      } else if (isSellAnyway) {
        badgeText = 'AVAILABILITY (AP) OVER CONSISTENCY: DOUBLE SALE DISASTER';
        badgeType = 'problem';
        telemetryText = 'Machines in Stock: 1 • Machines Sold: 2 • Conflict: FATAL';
        footerTitle = 'Split-Brain Inventory Collision';
        footerDesc = 'Both stores sold the single remaining machine simultaneously. Two furious customers arrived for one box!';
        footerIcon = '💥';
      } else if (isManualMessengers) {
        badgeText = 'MANUAL MESSENGER BACKLOG: 24-HOUR LATENCY';
        badgeType = 'problem';
        telemetryText = 'Runner Latency: 4 Hours • Customers Left in Disgust';
        footerTitle = 'Impractical Manual Sync';
        footerDesc = 'Dispatching runners on bicycles was too slow, leaving queues stalled for hours.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, isOptimal ? 'market' : 'city');

      if (!choice) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#f87171">⚡ SEVERED FIBER TRUNK BETWEEN NORTH &amp; SOUTH STORES ⚡</text>';
        content += this.renderStorageVault(180, 175, 'North Branch (1 Machine)', 'secure');
        content += this.renderStorageVault(460, 175, 'South Branch (1 Machine)', 'secure');
        content += '<line x1="240" y1="185" x2="300" y2="185" stroke="#ef4444" stroke-width="3" stroke-dasharray="4,4"/>';
        content += '<text x="320" y="190" text-anchor="middle" font-size="20">⚡🌲⚡</text>';
        content += '<line x1="340" y1="185" x2="400" y2="185" stroke="#ef4444" stroke-width="3" stroke-dasharray="4,4"/>';
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">CP MODE: CONSISTENCY OVER AVAILABILITY (SAFE LOCKING)</text>';
        content += this.renderStorageVault(180, 175, 'North: Machine Sold', 'secure');
        content += this.renderStorageVault(460, 175, 'South: Sale Paused (CP)', 'secure');
        content += '<rect x="250" y="165" width="140" height="35" rx="4" fill="#065f46" stroke="#10b981" stroke-width="1.2"/>';
        content += '<text x="320" y="180" text-anchor="middle" font-size="8" font-weight="900" fill="#a7f3d0">PARTITION GUARD ACTIVE</text>';
        content += '<text x="320" y="192" text-anchor="middle" font-size="7" font-weight="700" fill="#d1fae5">Zero Phantom Sales Allowed</text>';
      } else if (isSellAnyway) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#ef4444">AP COLLISION: BOTH BRANCHES SOLD THE SAME UNIT!</text>';
        content += this.renderStorageVault(180, 175, 'North: Sold Machine #101', 'breached');
        content += this.renderStorageVault(460, 175, 'South: Sold Machine #101', 'breached');
        content += '<rect x="240" y="165" width="160" height="40" rx="4" fill="#7f1d1d" stroke="#ef4444"/>';
        content += '<text x="320" y="182" text-anchor="middle" font-size="9" font-weight="900" fill="#fca5a5">DOUBLE-BOOKING DISASTER</text>';
        content += '<text x="320" y="196" text-anchor="middle" font-size="7" fill="#fecaca">2 Buyers Claim Same Item</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">RUNNERS STUCK IN TRAFFIC • CUSTOMERS WALKED OUT</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 20: The Relaxed Ledger (BASE Model)
    renderBaseEventualConsistencyScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal); // Option B
      const isStrictAcid = choice && choice.id === 'A';
      const isVolatileRam = choice && choice.id === 'C';

      let badgeText = 'INITIAL PROBLEM: 10,000 SHOPPERS CLICKING THUMBS-UP';
      let badgeType = 'problem';
      let telemetryText = 'Traffic: 10k clicks/sec • Database Lock Contention Warning';
      let footerTitle = 'Consistency Spectrum Tradeoff';
      let footerDesc = 'Strict ACID locking on casual social counters freezes database registers across the store.';
      let footerIcon = '👍';

      if (isOptimal) {
        badgeText = 'BASE MODEL SUCCESS: EVENTUAL CONSISTENCY (2ms RESPONSE)';
        badgeType = 'solution';
        telemetryText = 'Availability: 99.999% • Latency: 2ms • Gossip Sync: Converged';
        footerTitle = 'Basically Available, Soft State, Eventual Consistency';
        footerDesc = 'Clicks register instantly in local caches and converge asynchronously in the background with zero lock wait.';
        footerIcon = '⚡';
      } else if (isStrictAcid) {
        badgeText = 'STRICT ACID LOCKOUT: CHECKOUT BAYS FROZEN';
        badgeType = 'problem';
        telemetryText = 'Lock Wait: 14.8 seconds • 10,000 Shoppers Blocked at Registers';
        footerTitle = 'ACID Overkill Bottleneck';
        footerDesc = 'Locking the entire database row for every social like brought shopping checkouts to a dead halt.';
        footerIcon = '🔒';
      } else if (isVolatileRam) {
        badgeText = 'VOLATILE MEMORY LOSS: COUNTER RESET TO ZERO';
        badgeType = 'problem';
        telemetryText = 'Reboot Triggered • 50,000 Thumbs-Up Erased';
        footerTitle = 'Total Data Loss';
        footerDesc = 'Storing counters purely in volatile RAM wiped out all social proof upon server restart.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'market');

      if (!choice) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#38bdf8">10,000 SHOPPERS TAPPING THUMBS-UP REVIEW BUTTON</text>';
        content += '<rect x="250" y="150" width="140" height="50" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>';
        content += '<text x="320" y="175" text-anchor="middle" font-size="18">👍 8,421</text>';
        content += '<text x="320" y="192" text-anchor="middle" font-size="8" fill="#94a3b8">Incoming Click Surge: High</text>';
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">BASE ARCHITECTURE: ASYNC REPLICATION &amp; SOFT STATE CONVERGENCE</text>';
        content += '<rect x="250" y="140" width="140" height="40" rx="8" fill="#065f46" stroke="#22c55e" stroke-width="1.5"/>';
        content += '<text x="320" y="162" text-anchor="middle" font-size="14" font-weight="900" fill="#86efac">👍 10,000 LIKES</text>';
        content += '<text x="320" y="173" text-anchor="middle" font-size="7" fill="#bbf7d0">Eventual Consistency Achieved</text>';
        content += this.renderHuman(160, 200, 'shopper', 'happy', 'Instant UI (2ms)');
        content += this.renderHuman(480, 200, 'clerk', 'happy', 'Registers Free');
      } else if (isStrictAcid) {
        content += '<rect x="220" y="150" width="200" height="50" rx="6" fill="#7f1d1d" stroke="#ef4444"/>';
        content += '<text x="320" y="172" text-anchor="middle" font-size="11" font-weight="900" fill="#fca5a5">DATABASE ROW LOCK CONFLICT</text>';
        content += '<text x="320" y="188" text-anchor="middle" font-size="8" fill="#fecaca">Locked for 10,000 sequential writes!</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">SERVER REBOOTED • LIKE COUNTER RESET TO 0</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 21: The Power Outage Drill (Fault Tolerance and Resilience)
    renderFaultToleranceResilienceScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal); // Option B
      const isTotalBlackout = choice && choice.id === 'A';
      const isOverEngineered = choice && choice.id === 'C';

      let badgeText = 'MONSOON LIGHTNING DRILL: SUBSTATION GRID FAILURE';
      let badgeType = 'problem';
      let telemetryText = 'Grid Power: 0V • Substation Tripped • Storm Category 4';
      let footerTitle = 'Fault Tolerance & Resilience Required';
      let footerDesc = 'Systems must withstand sudden node failure through redundancy and graceful degradation.';
      let footerIcon = '⚡';

      if (isOptimal) {
        badgeText = 'RESILIENCE SUCCESS: UPS BATTERY + GRACEFUL DEGRADATION';
        badgeType = 'solution';
        telemetryText = 'Vital Systems: 100% ONLINE • Disco Neon: OFF • 0 Data Lost';
        footerTitle = 'Graceful Degradation Deployed';
        footerDesc = 'Non-essential neon displays switched off while checkout terminals and freezer chillers ran on backup power.';
        footerIcon = '🛡️';
      } else if (isTotalBlackout) {
        badgeText = 'TOTAL SYSTEM COLLAPSE: PITCH-BLACK STORE CHAOS';
        badgeType = 'problem';
        telemetryText = 'Status: TOTAL BLACKOUT • Doors Locked • Cashiers Paralyzed';
        footerTitle = 'Single Point of Electrical Failure';
        footerDesc = 'With zero battery backup, every scanner shut down and shoppers dropped groceries in the dark.';
        footerIcon = '💥';
      } else if (isOverEngineered) {
        badgeText = 'BUDGET EXHAUSTION: BANKRUPT FROM SATELLITE MICROGRID';
        badgeType = 'problem';
        telemetryText = 'Cost: $50,000,000 • Company Bankrupt';
        footerTitle = 'Excessive Over-Engineering';
        footerDesc = 'An orbital satellite microgrid exceeded store revenue by 100x before the store even turned a profit.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, isOptimal ? 'market' : 'city');

      if (!choice) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#f87171">⚡ SEVERE MONSOON LIGHTNING THREATENING POWER GRID ⚡</text>';
        content += '<rect x="280" y="130" width="80" height="50" rx="4" fill="#1e293b" stroke="#eab308" stroke-width="2"/>';
        content += '<text x="320" y="155" text-anchor="middle" font-size="10" font-weight="900" fill="#fde047">MAIN GRID</text>';
        content += '<text x="320" y="170" text-anchor="middle" font-size="14">⚡ 220V ⚡</text>';
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">DUAL-REDUNDANT UPS &amp; EMERGENCY GENERATOR ACTIVATED</text>';
        content += '<rect x="200" y="140" width="110" height="45" rx="4" fill="#065f46" stroke="#22c55e" stroke-width="1.5"/>';
        content += '<text x="255" y="160" text-anchor="middle" font-size="8" font-weight="900" fill="#86efac">BATTERY UPS (ONLINE)</text>';
        content += '<text x="255" y="174" text-anchor="middle" font-size="7" fill="#bbf7d0">Registers &amp; Freezers Safe</text>';
        content += '<rect x="330" y="140" width="110" height="45" rx="4" fill="#1e293b" stroke="#94a3b8"/>';
        content += '<text x="385" y="160" text-anchor="middle" font-size="8" font-weight="900" fill="#94a3b8">NON-ESSENTIAL (OFF)</text>';
        content += '<text x="385" y="174" text-anchor="middle" font-size="7" fill="#cbd5e1">Neon &amp; Music Shed Load</text>';
      } else if (isTotalBlackout) {
        content += '<rect x="180" y="120" width="280" height="150" fill="rgba(0,0,0,0.85)" rx="8"/>';
        content += '<text x="320" y="190" text-anchor="middle" font-size="28">⚡💀⚡</text>';
        content += '<text x="320" y="220" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">COMPLETE STORE BLACKOUT • REVENUE HALTED</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">SATELLITE MICROGRID BANKRUPTED THE COMPANY</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 22: The Frantic Double-Tap (Idempotency)
    renderIdempotencyDoubleClickScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal); // Option B
      const isMultiplyCharge = choice && choice.id === 'A';
      const isFrontEndLock = choice && choice.id === 'C';

      let badgeText = 'NETWORK DELAY: SHOPPER TAPPING PAY 5 TIMES IN PANIC';
      let badgeType = 'problem';
      let telemetryText = 'Shopper Action: 5x Clicks in 2s • 3G Mobile Lag';
      let footerTitle = 'Duplicate Execution Dilemma';
      let footerDesc = 'Slow networks tempt users to click repeatedly. Non-idempotent endpoints cause catastrophic multi-charging.';
      let footerIcon = '💳';

      if (isOptimal) {
        badgeText = 'IDEMPOTENCY SUCCESS: EXACTLY 1 CHARGE OF Rs. 4,500';
        badgeType = 'solution';
        telemetryText = 'Idempotency Key: UUID-7701 • Duplicate Clicks: 4 Filtered • Charged: Rs. 4,500';
        footerTitle = 'Idempotency Key Deduplication';
        footerDesc = 'The server recognized the unique transaction token, processed the debit once, and safely returned the cached receipt.';
        footerIcon = '🛡️';
      } else if (isMultiplyCharge) {
        badgeText = 'NO IDEMPOTENCY: 5 SEPARATE DEBITS (Rs. 22,500 DRAINED)';
        badgeType = 'problem';
        telemetryText = 'Customer Charged: Rs. 22,500 • Police Report Filed • Chargebacks';
        footerTitle = 'Catastrophic Multi-Debit Failure';
        footerDesc = 'Each tap was executed as a new charge, completely draining the customer bank balance!';
        footerIcon = '💥';
      } else if (isFrontEndLock) {
        badgeText = 'FRONTEND-ONLY LOCK: BYPASSED ON BROWSER REFRESH';
        badgeType = 'problem';
        telemetryText = 'Button Disabled on UI • User Refreshed Page • Double Charged';
        footerTitle = 'Inadequate Client-Only Validation';
        footerDesc = 'Disabling the button in JavaScript was easily bypassed by refreshing the page or using back buttons.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'market');

      if (!choice) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#f87171">SHOPPER REPEATEDLY TAPPING "PAY NOW" OVER LAGGING 3G</text>';
        content += this.renderHuman(200, 200, 'shopper', 'alert', 'Impatient Shopper');
        content += '<rect x="360" y="155" width="130" height="45" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>';
        content += '<text x="425" y="175" text-anchor="middle" font-size="9" font-weight="900" fill="#38bdf8">PAYMENT GATEWAY</text>';
        content += '<text x="425" y="190" text-anchor="middle" font-size="8" fill="#94a3b8">5 Incoming Requests</text>';
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">IDEMPOTENT REDIS TOKEN LOCK: EXACTLY ONE WRITE APPLIED</text>';
        content += '<rect x="240" y="145" width="160" height="45" rx="6" fill="#065f46" stroke="#22c55e" stroke-width="1.5"/>';
        content += '<text x="320" y="165" text-anchor="middle" font-size="9" font-weight="900" fill="#86efac">IDEMPOTENCY KEY CHECKED</text>';
        content += '<text x="320" y="178" text-anchor="middle" font-size="7" fill="#bbf7d0">Token UUID-7701 → Cached Receipt</text>';
        content += this.renderHuman(160, 200, 'shopper', 'happy', 'Single Rs.4,500 Debit');
      } else if (isMultiplyCharge) {
        content += '<rect x="220" y="150" width="200" height="50" rx="6" fill="#7f1d1d" stroke="#ef4444"/>';
        content += '<text x="320" y="172" text-anchor="middle" font-size="10" font-weight="900" fill="#fca5a5">5x CHARGES APPLIED!</text>';
        content += '<text x="320" y="188" text-anchor="middle" font-size="8" fill="#fecaca">Rs. 22,500 Deducted from Customer</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">BROWSER REFRESH BYPASSED BUTTON DISABLE</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 23: The Cross-Department Promise (Distributed Transactions & Saga Pattern)
    renderSagaDistributedTransactionsScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal); // Option C
      const isBrokenPartial = choice && choice.id === 'A';
      const isTwoPhaseLock = choice && choice.id === 'B';

      let badgeText = 'WAREHOUSE ACCIDENT: LAST MICROWAVE DROPPED & SHATTERED';
      let badgeType = 'problem';
      let telemetryText = 'Order: Placed • Payment: Rs. 8,000 Deducted • Inventory: 0 (DAMAGED)';
      let footerTitle = 'Multi-Service Distributed Transaction';
      let footerDesc = 'When one microservice step fails after payment is debited, the system must coordinate automatic rollback.';
      let footerIcon = '📦';

      if (isOptimal) {
        badgeText = 'SAGA PATTERN SUCCESS: AUTOMATIC COMPENSATING REFUND';
        badgeType = 'solution';
        telemetryText = 'Compensating Tx: EXECUTED • Rs. 8,000 Refunded • Customer Notified';
        footerTitle = 'Saga Compensating Rollback Succeeded';
        footerDesc = 'Upon inventory failure, the Saga Orchestrator triggered a compensating transaction to refund the payment automatically.';
        footerIcon = '🔄';
      } else if (isBrokenPartial) {
        badgeText = 'INCONSISTENT STATE: MONEY GONE & ZERO PRODUCT SHIPPED';
        badgeType = 'problem';
        telemetryText = 'Customer Paid: Rs. 8,000 • Delivered: NOTHING • Support Jammed';
        footerTitle = 'Partial Failure Nightmare';
        footerDesc = 'Without distributed coordination, money was taken while the warehouse had nothing to ship!';
        footerIcon = '💥';
      } else if (isTwoPhaseLock) {
        badgeText = 'TWO-PHASE COMMIT BOTTLENECK: CHECKOUTS FROZEN WORLDWIDE';
        badgeType = 'problem';
        telemetryText = 'Global Locks Held: 42 • Latency: 25 seconds • Cascading Timeouts';
        footerTitle = '2PC Distributed Locking Freeze';
        footerDesc = 'Holding global database locks across distributed network services created catastrophic latency bottlenecks.';
        footerIcon = '🔒';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'market');

      if (!choice) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#f87171">WAREHOUSE WORKER DROPPED LAST MICROWAVE DURING FULFILLMENT</text>';
        content += this.renderStorageVault(180, 175, 'Payment Service (Rs. 8,000 Taken)', 'secure');
        content += this.renderStorageVault(460, 175, 'Warehouse (Microwave Smashed)', 'breached');
        content += '<text x="320" y="190" text-anchor="middle" font-size="24">💥📦💥</text>';
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">SAGA ORCHESTRATOR: TRIGGERING COMPENSATING REFUND TRANSACTION</text>';
        content += '<rect x="230" y="145" width="180" height="45" rx="6" fill="#065f46" stroke="#22c55e" stroke-width="1.5"/>';
        content += '<text x="320" y="165" text-anchor="middle" font-size="9" font-weight="900" fill="#86efac">SAGA COMPENSATING ACTION</text>';
        content += '<text x="320" y="178" text-anchor="middle" font-size="7" fill="#bbf7d0">InventoryFailed → RefundPayment(Rs.8,000)</text>';
        content += this.renderHuman(160, 200, 'shopper', 'happy', 'Refund Received');
        content += this.renderStorageVault(460, 175, 'Warehouse Logged', 'secure');
      } else if (isBrokenPartial) {
        content += '<rect x="220" y="150" width="200" height="50" rx="6" fill="#7f1d1d" stroke="#ef4444"/>';
        content += '<text x="320" y="172" text-anchor="middle" font-size="10" font-weight="900" fill="#fca5a5">UNRESOLVED DESYNC</text>';
        content += '<text x="320" y="188" text-anchor="middle" font-size="8" fill="#fecaca">Money debited, no goods, no refund!</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">GLOBAL 2PC LOCKS FROZE ALL STORES WORLDWIDE</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 24: The Order Inbox Tray (Message Queues and Asynchronous Processing)
    renderMessageQueuesAsyncScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal); // Option B
      const isSyncBlock = choice && choice.id === 'A';
      const isDropOrders = choice && choice.id === 'C';

      let badgeText = 'FLASH SALE SURGE: 500 SANDWICH ORDERS FLOOD REGISTER';
      let badgeType = 'problem';
      let telemetryText = 'Incoming Orders: 500 • Kitchen Prep Time: 12 seconds/order';
      let footerTitle = 'Asynchronous Decoupling Dilemma';
      let footerDesc = 'Synchronously waiting for long kitchen tasks freezes front-desk registers and triggers web server timeouts.';
      let footerIcon = '🥪';

      if (isOptimal) {
        badgeText = 'MESSAGE QUEUE SUCCESS: 40ms REGISTER ACK &amp; WORKER POOL';
        badgeType = 'solution';
        telemetryText = 'Register Latency: 40ms • Queue Buffer: 500 • 4 Chefs Processing';
        footerTitle = 'Decoupled Asynchronous Processing';
        footerDesc = 'Cashiers dropped order tickets into a durable FIFO queue and served the next customer in 40ms while chefs worked steadily.';
        footerIcon = '⚡';
      } else if (isSyncBlock) {
        badgeText = 'SYNCHRONOUS FREEZE: 504 GATEWAY TIMEOUT CRASH';
        badgeType = 'problem';
        telemetryText = 'Queue Latency: 100 minutes • Registers: FROZEN • 504 Errors';
        footerTitle = 'Synchronous Blocking Deadlock';
        footerDesc = 'Customers stood frozen at the register for 12 seconds per sandwich until lines spilled into the parking lot.';
        footerIcon = '💥';
      } else if (isDropOrders) {
        badgeText = 'ORDER REJECTION: 490 ANGRY SHOPPERS TURNED AWAY';
        badgeType = 'problem';
        telemetryText = 'Orders Accepted: 10 • Orders Rejected: 490 (98% Revenue Lost)';
        footerTitle = 'Rejection Catastrophe';
        footerDesc = 'Refusing to queue orders caused the store to lose 98% of potential flash sale revenue.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'market');

      if (!choice) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#f87171">500 CUSTOMERS WAITING IN LINE WHILE CHEF GRILLS SLOWLY</text>';
        content += this.renderHuman(180, 200, 'shopper', 'alert', 'Surge Line (500)');
        content += this.renderServiceDesk(320, 180, 'open');
        content += this.renderHuman(460, 200, 'worker', 'alert', 'Overworked Chef');
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">FIFO MESSAGE QUEUE BUFFER: DECOUPLING FRONTEND FROM WORKERS</text>';
        content += '<rect x="250" y="145" width="140" height="40" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>';
        content += '<text x="320" y="162" text-anchor="middle" font-size="8" font-weight="900" fill="#38bdf8">RABBITMQ / SQS QUEUE</text>';
        content += '<text x="320" y="174" text-anchor="middle" font-size="7" fill="#94a3b8">Buffer: 500 msgs • 40ms Ack</text>';
        content += this.renderHuman(160, 200, 'clerk', 'happy', 'Register Free (40ms)');
        content += this.renderHuman(480, 200, 'worker', 'happy', 'Chef Pool Active');
      } else if (isSyncBlock) {
        content += '<rect x="220" y="150" width="200" height="50" rx="6" fill="#7f1d1d" stroke="#ef4444"/>';
        content += '<text x="320" y="172" text-anchor="middle" font-size="10" font-weight="900" fill="#fca5a5">504 GATEWAY TIMEOUT</text>';
        content += '<text x="320" y="188" text-anchor="middle" font-size="8" fill="#fecaca">Register locked for 12 seconds per item!</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">490 ORDERS THROWN IN THE TRASH</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 25: The Department Loudspeaker (Publish-Subscribe / Pub-Sub)
    renderPubSubLoudspeakerScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal); // Option B
      const isPointToPoint = choice && choice.id === 'A';
      const isPollingDb = choice && choice.id === 'C';

      let badgeText = 'CROSS-DEPARTMENT EVENT: NEW SALE REQUIRES 5 CONSUMERS';
      let badgeType = 'problem';
      let telemetryText = 'Sale Event: #9042 • Interested: Inventory, SMS, Loyalty, Analytics, Accounts';
      let footerTitle = '1-to-Many Event Distribution Dilemma';
      let footerDesc = 'Direct point-to-point coupling between the cashier and 5 downstream services risks total cascade failures.';
      let footerIcon = '📢';

      if (isOptimal) {
        badgeText = 'PUB-SUB TOPIC FANOUT: 1 EMIT → ALL SUBSCRIBERS RECEIVE';
        badgeType = 'solution';
        telemetryText = 'Publisher Coupling: ZERO • Subscribers: 5 Independent Listeners';
        footerTitle = 'Publish-Subscribe Decoupled Fanout';
        footerDesc = 'Cashiers broadcast a single OrderCompleted event to the topic. All departments consumed at their own pace without slowing the register.';
        footerIcon = '⚡';
      } else if (isPointToPoint) {
        badgeText = 'POINT-TO-POINT CASCADE: SMS TIMEOUT CRASHED BILLING';
        badgeType = 'problem';
        telemetryText = 'SMS Server: DOWN • Cashier Frozen • Customer Receipt Blocked';
        footerTitle = 'Tight Coupling Failure';
        footerDesc = 'A slow SMS gateway dragged down the cashier payment loop, preventing checkout receipts from printing.';
        footerIcon = '💥';
      } else if (isPollingDb) {
        badgeText = 'DATABASE POLLING OVERLOAD: 100% CPU SPIKE';
        badgeType = 'problem';
        telemetryText = '5 Services Polling SELECT * every 500ms • DB Disk Choked';
        footerTitle = 'Inefficient Polling Starvation';
        footerDesc = '5 departments constantly querying the database every second brought database performance to a crawl.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'market');

      if (!choice) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#38bdf8">CASHIER TRYING TO NOTIFY 5 DEPARTMENTS INDIVIDUALLY</text>';
        content += this.renderHuman(180, 200, 'clerk', 'alert', 'Cashier');
        content += '<text x="320" y="180" text-anchor="middle" font-size="14">📞 📞 📞 📞 📞</text>';
        content += '<text x="320" y="200" text-anchor="middle" font-size="8" fill="#94a3b8">5 Coupled Direct Calls</text>';
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">PUB-SUB TOPIC: ZERO COUPLING BROADCAST TO ALL CONSUMERS</text>';
        content += '<circle cx="320" cy="165" r="28" fill="#065f46" stroke="#22c55e" stroke-width="2"/>';
        content += '<text x="320" y="162" text-anchor="middle" font-size="8" font-weight="900" fill="#86efac">PUB-SUB</text>';
        content += '<text x="320" y="174" text-anchor="middle" font-size="7" fill="#bbf7d0">TOPIC</text>';
        content += '<line x1="320" y1="137" x2="220" y2="120" stroke="#22c55e" stroke-width="2" stroke-dasharray="3,3"/>';
        content += '<line x1="320" y1="137" x2="420" y2="120" stroke="#22c55e" stroke-width="2" stroke-dasharray="3,3"/>';
        content += '<line x1="320" y1="193" x2="220" y2="210" stroke="#22c55e" stroke-width="2" stroke-dasharray="3,3"/>';
        content += '<line x1="320" y1="193" x2="420" y2="210" stroke="#22c55e" stroke-width="2" stroke-dasharray="3,3"/>';
        content += '<text x="210" y="115" text-anchor="middle" font-size="7" fill="#86efac">Inventory</text>';
        content += '<text x="430" y="115" text-anchor="middle" font-size="7" fill="#86efac">Loyalty</text>';
        content += '<text x="210" y="225" text-anchor="middle" font-size="7" fill="#86efac">SMS Gateway</text>';
        content += '<text x="430" y="225" text-anchor="middle" font-size="7" fill="#86efac">Analytics</text>';
      } else if (isPointToPoint) {
        content += '<rect x="220" y="150" width="200" height="50" rx="6" fill="#7f1d1d" stroke="#ef4444"/>';
        content += '<text x="320" y="172" text-anchor="middle" font-size="10" font-weight="900" fill="#fca5a5">SMS DOWN → CASHIER BLOCKED</text>';
        content += '<text x="320" y="188" text-anchor="middle" font-size="8" fill="#fecaca">Synchronous chain failure!</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">100% DATABASE CPU FROM ENDLESS POLLING</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 26: Picking the Right Conveyor Belt (RabbitMQ vs. Apache Kafka)
    renderRabbitMqVsKafkaScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal); // Option B
      const isMisusedRabbit = choice && choice.id === 'A';
      const isSqlEvents = choice && choice.id === 'C';

      let badgeText = 'ARCHITECTURE SELECTION: 500,000 EVENTS/SEC STREAM';
      let badgeType = 'problem';
      let telemetryText = 'Stream Rate: 500k sensor pings/sec • Requirement: Historical Replay';
      let footerTitle = 'Message Broker vs. Distributed Commit Log';
      let footerDesc = 'Picking the wrong messaging technology for massive stream volume causes RAM exhaustion or disk failure.';
      let footerIcon = '⚡';

      if (isOptimal) {
        badgeText = 'OPTIMAL HYBRID SELECTION: KAFKA LOG + RABBITMQ TASKS';
        badgeType = 'solution';
        telemetryText = 'Kafka: 500k stream writes/sec • RabbitMQ: Smart task routing';
        footerTitle = 'Right Tool for the Right Job';
        footerDesc = 'Kafka partitioned commit log absorbed 500k/s IoT sensor telemetry with replay, while RabbitMQ routed transactional task queues.';
        footerIcon = '🎯';
      } else if (isMisusedRabbit) {
        badgeText = 'RAM EXHAUSTION: RABBITMQ CHOKED ON 500k REPLAY LOG';
        badgeType = 'problem';
        telemetryText = 'RAM Usage: 100% (64GB Exceeded) • Broker Crash';
        footerTitle = 'In-Memory Smart Broker Overload';
        footerDesc = 'Treating RabbitMQ as a massive historical event log exhausted server RAM and crashed the broker.';
        footerIcon = '💥';
      } else if (isSqlEvents) {
        badgeText = 'DISK I/O LOCK: RELATIONAL DATABASE CHOKED BY SENSORS';
        badgeType = 'problem';
        telemetryText = 'SQL Writes: 500,000/s • Disk I/O: 100% • System Dead';
        footerTitle = 'Relational Table Ingestion Failure';
        footerDesc = 'Attempting to insert 500k raw IoT events per second directly into relational tables locked the database disk completely.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'city');

      if (!choice) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#38bdf8">500,000 SENSOR EVENTS/SEC AWAITING INFRASTRUCTURE DECISION</text>';
        content += '<rect x="220" y="150" width="200" height="45" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>';
        content += '<text x="320" y="170" text-anchor="middle" font-size="10" font-weight="900" fill="#38bdf8">RABBITMQ OR APACHE KAFKA?</text>';
        content += '<text x="320" y="184" text-anchor="middle" font-size="8" fill="#94a3b8">Complex Routing vs. Append-Only Log</text>';
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">ARCHITECTURAL HARMONY: KAFKA FOR HIGH-THROUGHPUT STREAMS</text>';
        content += '<rect x="180" y="145" width="130" height="45" rx="6" fill="#065f46" stroke="#22c55e" stroke-width="1.5"/>';
        content += '<text x="245" y="165" text-anchor="middle" font-size="8" font-weight="900" fill="#86efac">APACHE KAFKA</text>';
        content += '<text x="245" y="178" text-anchor="middle" font-size="7" fill="#bbf7d0">500k/s Stream Replay Log</text>';
        content += '<rect x="330" y="145" width="130" height="45" rx="6" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>';
        content += '<text x="395" y="165" text-anchor="middle" font-size="8" font-weight="900" fill="#bae6fd">RABBITMQ</text>';
        content += '<text x="395" y="178" text-anchor="middle" font-size="7" fill="#e0f2fe">Smart Complex Task Queue</text>';
      } else if (isMisusedRabbit) {
        content += '<rect x="220" y="150" width="200" height="50" rx="6" fill="#7f1d1d" stroke="#ef4444"/>';
        content += '<text x="320" y="172" text-anchor="middle" font-size="10" font-weight="900" fill="#fca5a5">OUT OF MEMORY (OOM)</text>';
        content += '<text x="320" y="188" text-anchor="middle" font-size="8" fill="#fecaca">RabbitMQ queues filled 64GB RAM!</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">SQL DATABASE DISK LOCKED UNDER 500k WRITES/SEC</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 27: The Live Delivery Tracker (Stream Processing and WebSockets)
    renderWebSocketsDeliveryTrackerScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal); // Option B
      const isShortPolling = choice && choice.id === 'A';
      const isManualRefresh = choice && choice.id === 'C';

      let badgeText = 'REAL-TIME TRACKING: 10,000 PHONES TRACKING DELIVERY SCOOTER';
      let badgeType = 'problem';
      let telemetryText = 'Active Deliveries: 10,000 • Updates Required: Sub-second GPS pin';
      let footerTitle = 'Full-Duplex Streaming vs. HTTP Polling';
      let footerDesc = 'HTTP short-polling floods servers with massive header overhead and kills phone battery life.';
      let footerIcon = '🛵';

      if (isOptimal) {
        badgeText = 'WEBSOCKETS SUCCESS: FULL-DUPLEX 30ms STREAMING';
        badgeType = 'solution';
        telemetryText = 'TCP Connection: 1 Persistent • Packet: 32 bytes • Latency: 30ms';
        footerTitle = 'Persistent Full-Duplex WebSockets';
        footerDesc = 'A single open WebSocket connection pushed live GPS delta updates with tiny 32-byte frames and zero polling battery drain.';
        footerIcon = '⚡';
      } else if (isShortPolling) {
        badgeText = 'HTTP POLLING STORM: SERVER CRASHED &amp; BATTERIES DRAINED';
        badgeType = 'problem';
        telemetryText = 'Poll Rate: 25,000 req/sec • Header Overhead: 20MB/s • Battery: 0%';
        footerTitle = 'HTTP Short-Polling Overhead';
        footerDesc = 'Opening a brand-new HTTP connection every 400ms flooded servers with redundant headers and drained phone batteries in 20 minutes.';
        footerIcon = '💥';
      } else if (isManualRefresh) {
        badgeText = 'MANUAL REFRESH: ANGRY CUSTOMERS CALLING SUPPORT';
        badgeType = 'problem';
        telemetryText = 'User Experience: Terrible • Support Calls: +4,000';
        footerTitle = 'Static Page Reload Failure';
        footerDesc = 'Forcing users to manually refresh web pages meant they missed arrival times and complained incessantly.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'city');

      if (!choice) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#38bdf8">DELIVERY VAN MOVING ACROSS CITY • REAL-TIME UPDATES REQUIRED</text>';
        content += '<rect x="250" y="150" width="140" height="40" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>';
        content += '<text x="320" y="174" text-anchor="middle" font-size="16">🛵 ➡️ 🏠</text>';
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">PERSISTENT WEBSOCKET: BI-DIRECTIONAL REAL-TIME STREAMING</text>';
        content += '<rect x="230" y="145" width="180" height="45" rx="6" fill="#065f46" stroke="#22c55e" stroke-width="1.5"/>';
        content += '<text x="320" y="165" text-anchor="middle" font-size="9" font-weight="900" fill="#86efac">WEBSOCKET WS:// ESTABLISHED</text>';
        content += '<text x="320" y="178" text-anchor="middle" font-size="7" fill="#bbf7d0">Smooth 30ms GPS Pin Glide</text>';
        content += this.renderHuman(160, 200, 'shopper', 'happy', 'Live Tracking');
      } else if (isShortPolling) {
        content += '<rect x="220" y="150" width="200" height="50" rx="6" fill="#7f1d1d" stroke="#ef4444"/>';
        content += '<text x="320" y="172" text-anchor="middle" font-size="10" font-weight="900" fill="#fca5a5">POLLING DDoS STORM</text>';
        content += '<text x="320" y="188" text-anchor="middle" font-size="8" fill="#fecaca">25,000 HTTP Handshakes/sec killed server!</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">MANUAL REFRESH FLOODED CALL CENTER WITH COMPLAINTS</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // LEVEL 28: Finding Nearby Stores (Geospatial Search and Spatial Indexing)
    renderGeospatialSpatialIndexingScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal); // Option B
      const isFullTableScan = choice && choice.id === 'A';
      const isStaticCityBoxes = choice && choice.id === 'C';

      let badgeText = 'GEOSPATIAL QUERY: FIND STORES WITHIN 2KM OF USER';
      let badgeType = 'problem';
      let telemetryText = 'Stores in Database: 100,000 • Query: Latitude, Longitude Radius';
      let footerTitle = 'Spatial Indexing vs. Brute-Force Math';
      let footerDesc = 'Running trigonometric Haversine math across 100,000 rows on every search spikes CPU to 100%.';
      let footerIcon = '📍';

      if (isOptimal) {
        badgeText = 'SPATIAL INDEX SUCCESS: GEOHASH / QUADTREE (4ms LOOKUP)';
        badgeType = 'solution';
        telemetryText = 'Index: Geohash Bounding Box • Scanned: 14 rows • Latency: 4ms';
        footerTitle = '2D Spatial Indexing (Geohash / Quadtrees)';
        footerDesc = 'Partitioning earth coordinates into hierarchical Geohash prefixes converted expensive spherical math into an instant O(log N) prefix lookup.';
        footerIcon = '⚡';
      } else if (isFullTableScan) {
        badgeText = 'BRUTE-FORCE HAVERSINE SCAN: 100% CPU LOCK';
        badgeType = 'problem';
        telemetryText = 'Full Table Scan: 100,000 Sin/Cos Ops • Query Time: 8.2s • DB Crash';
        footerTitle = 'Trigonometric Full-Table Scan Failure';
        footerDesc = 'Calculating spherical distance on every single store row for every user search melted the database CPU.';
        footerIcon = '💥';
      } else if (isStaticCityBoxes) {
        badgeText = 'STATIC STRING MATCH: MISSED STORES 500m AWAY';
        badgeType = 'problem';
        telemetryText = 'City Filter: Bangalore • Missed Store across border at 500m';
        footerTitle = 'Boundary Edge Blindspots';
        footerDesc = 'Matching by city names produced wildly inaccurate results for users standing near municipal borders.';
        footerIcon = '❌';
      }

      let content = this.renderGrid(7, 7, 320, 90, 'city');

      if (!choice) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#38bdf8">100,000 STORES SPREAD ACROSS NATIONWIDE COORDINATE MAP</text>';
        content += '<rect x="240" y="150" width="160" height="45" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>';
        content += '<text x="320" y="170" text-anchor="middle" font-size="10" font-weight="900" fill="#38bdf8">RADIUS SEARCH: 2KM</text>';
        content += '<text x="320" y="184" text-anchor="middle" font-size="8" fill="#94a3b8">User (12.9716° N, 77.5946° E)</text>';
      } else if (isOptimal) {
        content += '<text x="320" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#22c55e">GEOHASH PREFIX INDEX: INSTANT BOUNDING BOX LOOKUP (4ms)</text>';
        content += '<rect x="230" y="145" width="180" height="45" rx="6" fill="#065f46" stroke="#22c55e" stroke-width="1.5"/>';
        content += '<text x="320" y="165" text-anchor="middle" font-size="9" font-weight="900" fill="#86efac">GEOHASH PREFIX: u4pru*</text>';
        content += '<text x="320" y="178" text-anchor="middle" font-size="7" fill="#bbf7d0">Scanned 14 stores instead of 100k</text>';
        content += this.renderHuman(160, 200, 'shopper', 'happy', 'Found 3 Stores');
      } else if (isFullTableScan) {
        content += '<rect x="220" y="150" width="200" height="50" rx="6" fill="#7f1d1d" stroke="#ef4444"/>';
        content += '<text x="320" y="172" text-anchor="middle" font-size="10" font-weight="900" fill="#fca5a5">HAVERSINE SCAN CRASH</text>';
        content += '<text x="320" y="188" text-anchor="middle" font-size="8" fill="#fecaca">100,000 trigonometry calculations per search!</text>';
      } else {
        content += '<text x="320" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="#ef4444">STATIC CITY FILTER MISSED NEAREST STORES ACROSS BORDER</text>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText, badgeType, telemetryText, footerIcon, footerTitle, footerDesc,
        svgContent: content
      });
    },

    // =========================================================================
    // MAIN SCENE DISPATCHER
    // =========================================================================
    renderScene(simType, choiceMade, level) {
      switch (simType) {
        case 'supermarket_blueprint':
          return this.renderSupermarketBlueprintScene(choiceMade);
        case 'requirements_stress':
          return this.renderRequirementsStressScene(choiceMade);
        case 'client_server_clerk':
          return this.renderClientServerClerkScene(choiceMade);
        case 'networking_dns_ports':
          return this.renderNetworkingDnsPortsScene(choiceMade);
        case 'protocols_transport':
          return this.renderProtocolsTransportScene(choiceMade);
        case 'api_contracts_scanners':
          return this.renderApiContractsScannersScene(choiceMade);
        case 'auth_identity_verification':
          return this.renderAuthIdentityVerificationScene(choiceMade);
        case 'authz_rbac_vault':
          return this.renderAuthzRbacVaultScene(choiceMade);
        case 'database_polyglot':
          return this.renderDatabasePolyglotScene(choiceMade);
        case 'oltp_olap_registers':
          return this.renderOltpOlapRegistersScene(choiceMade);
        case 'acid_atomic_vault':
          return this.renderAcidAtomicVaultScene(choiceMade);
        case 'db_replication_cluster':
          return this.renderDbReplicationClusterScene(choiceMade);
        case 'caching_sticky_notepad':
          return this.renderCachingStickyNotepadScene(choiceMade);
        case 'cdn_edge_kiosks':
          return this.renderCdnEdgeKiosksScene(choiceMade);
        case 'scaling_cluster_nodes':
          return this.renderScalingClusterNodesScene(choiceMade);
        case 'load_balancer_traffic':
          return this.renderLoadBalancerTrafficScene(choiceMade);
        case 'rate_limiter_turnstile':
          return this.renderRateLimiterTurnstileScene(choiceMade);
        case 'database_sharding_ledgers':
          return this.renderDatabaseShardingLedgersScene(choiceMade);
        case 'cap_network_partition':
          return this.renderCapNetworkPartitionScene(choiceMade);
        case 'base_eventual_consistency':
          return this.renderBaseEventualConsistencyScene(choiceMade);
        case 'fault_tolerance_resilience':
          return this.renderFaultToleranceResilienceScene(choiceMade);
        case 'idempotency_double_click':
          return this.renderIdempotencyDoubleClickScene(choiceMade);
        case 'saga_distributed_transactions':
          return this.renderSagaDistributedTransactionsScene(choiceMade);
        case 'message_queues_async':
          return this.renderMessageQueuesAsyncScene(choiceMade);
        case 'pubsub_loudspeaker':
          return this.renderPubSubLoudspeakerScene(choiceMade);
        case 'rabbitmq_vs_kafka':
          return this.renderRabbitMqVsKafkaScene(choiceMade);
        case 'websockets_delivery_tracker':
          return this.renderWebSocketsDeliveryTrackerScene(choiceMade);
        case 'geospatial_spatial_indexing':
          return this.renderGeospatialSpatialIndexingScene(choiceMade);
        default:
          return this.renderSupermarketBlueprintScene(choiceMade);
      }
    }
  };

  return DioramaEngine;
});


