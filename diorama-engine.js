/**
 * RideQuest - Isometric Diorama Game Engine (AAA Visual Standard)
 * Implements 2.5D/3D character-driven, animated miniature game worlds across all 28 System Design levels.
 * Theme: Ola Cab Booking Architecture (Bangalore Tech Corridor, City Roads, Dispatch Towers, Datacenters).
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
    wrapScene({ theme = 'city', badgeText, badgeType = 'problem', telemetryText = '', footerIcon = '', footerTitle = '', footerDesc = '', svgContent = '' }) {
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
              '<linearGradient id="olaYellowBody" x1="0%" y1="0%" x2="100%" y2="100%">' +
                '<stop offset="0%" stop-color="#fde047"/>' +
                '<stop offset="50%" stop-color="#eab308"/>' +
                '<stop offset="100%" stop-color="#ca8a04"/>' +
              '</linearGradient>' +
              '<linearGradient id="olaYellowSide" x1="0%" y1="0%" x2="100%" y2="100%">' +
                '<stop offset="0%" stop-color="#ca8a04"/>' +
                '<stop offset="100%" stop-color="#a16207"/>' +
              '</linearGradient>' +
              '<linearGradient id="cabRoofDark" x1="0%" y1="0%" x2="100%" y2="100%">' +
                '<stop offset="0%" stop-color="#1e293b"/>' +
                '<stop offset="100%" stop-color="#0f172a"/>' +
              '</linearGradient>' +
              '<linearGradient id="windshieldGlass" x1="0%" y1="0%" x2="100%" y2="100%">' +
                '<stop offset="0%" stop-color="#7dd3fc" stop-opacity="0.85"/>' +
                '<stop offset="100%" stop-color="#0284c7" stop-opacity="0.7"/>' +
              '</linearGradient>' +
              '<radialGradient id="headlightBeam" cx="10%" cy="50%" r="90%">' +
                '<stop offset="0%" stop-color="#fef08a" stop-opacity="0.75"/>' +
                '<stop offset="60%" stop-color="#fef08a" stop-opacity="0.25"/>' +
                '<stop offset="100%" stop-color="#fef08a" stop-opacity="0"/>' +
              '</radialGradient>' +
              '<linearGradient id="serverBladeRack" x1="0%" y1="0%" x2="100%" y2="100%">' +
                '<stop offset="0%" stop-color="#334155"/>' +
                '<stop offset="50%" stop-color="#1e293b"/>' +
                '<stop offset="100%" stop-color="#0f172a"/>' +
              '</linearGradient>' +
              '<linearGradient id="asphaltRoad" x1="0%" y1="0%" x2="100%" y2="100%">' +
                '<stop offset="0%" stop-color="#2d3748"/>' +
                '<stop offset="100%" stop-color="#1a202c"/>' +
              '</linearGradient>' +
              '<filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%">' +
                '<feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#38bdf8"/>' +
              '</filter>' +
              '<filter id="glowGreen" x="-20%" y="-20%" width="140%" height="140%">' +
                '<feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#22c55e"/>' +
              '</filter>' +
              '<filter id="glowRed" x="-20%" y="-20%" width="140%" height="140%">' +
                '<feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#ef4444"/>' +
              '</filter>' +
              '<filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">' +
                '<feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="rgba(0,0,0,0.45)"/>' +
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
    // AAA PROCEDURAL 3D ISOMETRIC PRIMITIVES
    // =========================================================================

    // City Road & Sidewalk Grid
    renderCityRoadGrid(cols = 12, rows = 8, ox = 320, oy = 90, theme = 'city') {
      const tw = 48;
      const th = 24;
      let tiles = '';

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = ox + (c - r) * (tw / 2);
          const y = oy + (c + r) * (th / 2);
          const isRoad = (r === 3 || r === 4 || c === 5 || c === 6);
          const f = isRoad ? ((r + c) % 2 === 0 ? '#1e293b' : '#172033') : ((r + c) % 2 === 0 ? '#334155' : '#273549');
          const stroke = isRoad ? '#0f172a' : '#475569';
          tiles += '<polygon points="' + x + ',' + y + ' ' + (x + tw/2) + ',' + (y + th/2) + ' ' + x + ',' + (y + th) + ' ' + (x - tw/2) + ',' + (y + th/2) + '" fill="' + f + '" stroke="' + stroke + '" stroke-width="0.8"/>';

          // Road lane markings (dashed yellow & white lines)
          if (r === 3 && (c % 2 === 0)) {
            tiles += '<line x1="' + (x - 8) + '" y1="' + (y + 12) + '" x2="' + (x + 8) + '" y2="' + (y + 12) + '" stroke="#fef08a" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.85"/>';
          }
        }
      }

      const bTip = oy + (cols + rows) * (th / 2);
      return '<g class="iso-grid-base">' +
        '<ellipse cx="' + ox + '" cy="' + (bTip + 16) + '" rx="' + ((cols + rows) * 16) + '" ry="26" fill="rgba(0,0,0,0.4)" filter="blur(8px)"/>' +
        tiles +
        '<path d="M' + (ox - rows * (tw / 2)) + ',' + (oy + rows * (th / 2)) + ' L' + ox + ',' + bTip + ' L' + ox + ',' + (bTip + 18) + ' L' + (ox - rows * (tw / 2)) + ',' + (oy + rows * (th / 2) + 18) + ' Z" fill="#090d16"/>' +
        '<path d="M' + ox + ',' + bTip + ' L' + (ox + cols * (tw / 2)) + ',' + (oy + cols * (th / 2)) + ' L' + (ox + cols * (tw / 2)) + ',' + (oy + cols * (th / 2) + 18) + ' L' + ox + ',' + (bTip + 18) + ' Z" fill="#0f172a" opacity="0.9"/>' +
      '</g>';
    },

    // Ola Yellow Cab (AAA Isometric Sedan Model with Glowing Headlights & Taxi Beacon)
    renderOlaCab(x, y, heading = 'SE', status = 'available', label = 'Ola Prime') {
      const isCrash = status === 'crash';
      const isDispatched = status === 'dispatched';
      const isMoving = status === 'moving';

      // Heading orientation: SE (facing right-down), SW (facing left-down), NE, NW
      let flip = (heading === 'SW' || heading === 'NW') ? ' transform="scale(-1, 1)"' : '';
      let headlightBeamSvg = '';
      if (!isCrash) {
        headlightBeamSvg = '<polygon points="18,10 75,28 50,55 12,18" fill="url(#headlightBeam)" opacity="0.6"/>';
      }

      let auraRing = '';
      if (isDispatched) {
        auraRing = '<ellipse cx="0" cy="12" rx="34" ry="17" fill="none" stroke="#22c55e" stroke-width="2.5" filter="url(#glowGreen)"><animate attributeName="rx" values="32;38;32" dur="1.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.8s" repeatCount="indefinite"/></ellipse>';
      } else if (isCrash) {
        auraRing = '<ellipse cx="0" cy="12" rx="30" ry="15" fill="rgba(239, 68, 68, 0.25)" filter="url(#glowRed)"/>';
      }

      return '<g class="iso-ola-cab" transform="translate(' + x + ',' + y + ')">' +
        // Soft ground shadow
        '<ellipse cx="0" cy="14" rx="28" ry="12" fill="rgba(0,0,0,0.55)" filter="blur(3px)"/>' +
        auraRing +
        '<g' + flip + '>' +
          headlightBeamSvg +
          // Lower Chassis & Wheels
          '<rect x="-20" y="8" width="8" height="10" rx="3" fill="#0f172a"/>' +
          '<rect x="12" y="8" width="8" height="10" rx="3" fill="#0f172a"/>' +
          // Isometric Car Body Base
          '<polygon points="-24,4 0,-8 24,4 0,16" fill="url(#olaYellowBody)"/>' +
          '<polygon points="-24,4 0,16 0,22 -24,10" fill="url(#olaYellowSide)"/>' +
          '<polygon points="0,16 24,4 24,10 0,22" fill="#854d0e"/>' +
          // Cabin Roof & Glass
          '<polygon points="-14,-2 0,-9 14,-2 0,5" fill="url(#cabRoofDark)"/>' +
          '<polygon points="-12,-2 0,-8 12,-2 0,4" fill="url(#windshieldGlass)"/>' +
          // Taxi Beacon on Roof (Green glowing pill)
          '<ellipse cx="0" cy="-10" rx="5" ry="2.5" fill="' + (isCrash ? '#ef4444' : '#22c55e') + '" filter="' + (isCrash ? 'url(#glowRed)' : 'url(#glowGreen)') + '"/>' +
          '<text x="0" y="-9" text-anchor="middle" font-size="4" font-family="sans-serif" font-weight="900" fill="#ffffff">OLA</text>' +
          // Dual Headlights
          '<circle cx="21" cy="5" r="2.2" fill="' + (isCrash ? '#64748b' : '#fef08a') + '"/>' +
          '<circle cx="16" cy="10" r="2.2" fill="' + (isCrash ? '#64748b' : '#fef08a') + '"/>' +
          // Taillights
          '<circle cx="-22" cy="5" r="1.8" fill="#ef4444"/>' +
        '</g>' +
        (isCrash ? '<text x="0" y="-18" text-anchor="middle" font-size="16">💥</text>' : '') +
        (label ? '<rect x="-42" y="24" width="84" height="16" rx="4" fill="#0f172a" stroke="#eab308" stroke-width="0.8"/>' +
          '<text x="0" y="35" text-anchor="middle" font-size="8" font-family="sans-serif" font-weight="800" fill="#fef08a">' + label + '</text>' : '') +
      '</g>';
    },

    // Ola Passenger / Rider on Sidewalk holding Smartphone
    renderOlaRider(x, y, status = 'waiting', label = 'Rider') {
      const isMatched = status === 'matched';
      const isError = status === 'error';
      const beaconColor = isMatched ? '#22c55e' : (isError ? '#ef4444' : '#38bdf8');
      const filterId = isMatched ? 'url(#glowGreen)' : (isError ? 'url(#glowRed)' : 'url(#glowCyan)');

      return '<g class="iso-ola-rider" transform="translate(' + x + ',' + y + ')">' +
        // Ground shadow
        '<ellipse cx="0" cy="4" rx="10" ry="4.5" fill="rgba(0,0,0,0.4)"/>' +
        // Pulsating smartphone GPS radar wave
        '<ellipse cx="6" cy="-14" rx="14" ry="7" fill="none" stroke="' + beaconColor + '" stroke-width="1.5" filter="' + filterId + '">' +
          '<animate attributeName="rx" values="10;18;10" dur="1.5s" repeatCount="indefinite"/>' +
          '<animate attributeName="opacity" values="0.9;0.2;0.9" dur="1.5s" repeatCount="indefinite"/>' +
        '</ellipse>' +
        // Legs
        '<line x1="-3" y1="2" x2="-3" y2="-7" stroke="#1e293b" stroke-width="2.8" stroke-linecap="round"/>' +
        '<line x1="3" y1="2" x2="3" y2="-7" stroke="#1e293b" stroke-width="2.8" stroke-linecap="round"/>' +
        // Torso / Jacket
        '<rect x="-6" y="-19" width="12" height="13" rx="3" fill="#0284c7"/>' +
        // Head
        '<circle cx="0" cy="-24" r="5.5" fill="#fde68a"/>' +
        '<path d="M-5,-26 C-5,-31 5,-31 5,-26 Z" fill="#334155"/>' +
        // Smartphone in hand
        '<rect x="4" y="-17" width="5" height="8" rx="1" fill="#0f172a" stroke="' + beaconColor + '" stroke-width="0.8"/>' +
        '<rect x="4.8" y="-16" width="3.4" height="6" fill="' + beaconColor + '" opacity="0.9"/>' +
        (isMatched ? '<circle cx="8" cy="-28" r="6" fill="#22c55e"/><text x="8" y="-24" text-anchor="middle" font-size="8" fill="#fff" font-weight="900">✓</text>' : '') +
        (isError ? '<circle cx="8" cy="-28" r="6" fill="#ef4444"/><text x="8" y="-24" text-anchor="middle" font-size="8" fill="#fff" font-weight="900">!</text>' : '') +
        (label ? '<rect x="-32" y="8" width="64" height="15" rx="4" fill="#0f172a" opacity="0.92"/>' +
          '<text x="0" y="19" text-anchor="middle" font-size="8" font-family="sans-serif" font-weight="800" fill="#f8fafc">' + label + '</text>' : '') +
      '</g>';
    },

    // Ola Central Cloud Dispatch Datacenter / Server Tower
    renderOlaDispatchServer(x, y, name = 'Ola Cloud Dispatch', status = 'healthy', load = '25%') {
      const isCrash = status === 'crash' || status === 'overheated';
      const isHealthy = status === 'healthy' || status === 'active';
      const auraColor = isCrash ? '#ef4444' : '#38bdf8';
      const towerFill = isCrash ? '#7f1d1d' : '#1e293b';

      return '<g class="iso-ola-server" transform="translate(' + x + ',' + y + ')">' +
        '<ellipse cx="0" cy="18" rx="38" ry="18" fill="rgba(0,0,0,0.5)" filter="blur(4px)"/>' +
        // Tower base block
        '<polygon points="-28,0 0,-14 28,0 0,14" fill="' + (isCrash ? '#991b1b' : '#334155') + '"/>' +
        '<polygon points="-28,0 0,14 0,48 -28,34" fill="' + towerFill + '"/>' +
        '<polygon points="0,14 28,0 28,34 0,48" fill="' + (isCrash ? '#450a0a' : '#0f172a') + '"/>' +
        // Glowing Server Blade Slots (LED indicators)
        '<rect x="-20" y="8" width="16" height="3" rx="1" fill="' + (isCrash ? '#ef4444' : '#22c55e') + '" filter="' + (isCrash ? 'url(#glowRed)' : 'url(#glowGreen)') + '"/>' +
        '<rect x="-20" y="15" width="16" height="3" rx="1" fill="' + (isCrash ? '#ef4444' : '#38bdf8') + '"/>' +
        '<rect x="-20" y="22" width="16" height="3" rx="1" fill="' + (isCrash ? '#ef4444' : '#22c55e') + '"/>' +
        '<rect x="-20" y="29" width="16" height="3" rx="1" fill="' + (isCrash ? '#f59e0b' : '#38bdf8') + '"/>' +
        // Rooftop Antenna with Dispatch Radio Waves
        '<line x1="0" y1="-14" x2="0" y2="-38" stroke="#94a3b8" stroke-width="2.5"/>' +
        '<circle cx="0" cy="-38" r="4.5" fill="' + auraColor + '" filter="' + (isCrash ? 'url(#glowRed)' : 'url(#glowCyan)') + '"/>' +
        (isHealthy ? '<circle cx="0" cy="-38" r="10" fill="none" stroke="#38bdf8" stroke-width="1.2" opacity="0.6"><animate attributeName="r" values="6;16;6" dur="2s" repeatCount="indefinite"/></circle>' : '') +
        (isCrash ? '<text x="0" y="-45" text-anchor="middle" font-size="16">🔥</text>' : '') +
        // Server label & status badge
        '<rect x="-50" y="52" width="100" height="20" rx="4" fill="#0f172a" stroke="' + auraColor + '" stroke-width="1"/>' +
        '<text x="0" y="63" text-anchor="middle" font-size="7.5" font-family="sans-serif" font-weight="800" fill="#ffffff">' + name + '</text>' +
        '<text x="0" y="70" text-anchor="middle" font-size="6.5" font-family="sans-serif" font-weight="700" fill="' + (isCrash ? '#f87171' : '#4ade80') + '">CPU ' + load + '</text>' +
      '</g>';
    },

    // Single Bedroom Laptop (Used for Level 1 Problem comparison)
    renderBedroomLaptop(x, y, status = 'overheated') {
      const isCrash = status === 'crashed' || status === 'fire';
      return '<g class="iso-bedroom-laptop" transform="translate(' + x + ',' + y + ')">' +
        // Desk shadow
        '<ellipse cx="0" cy="12" rx="28" ry="12" fill="rgba(0,0,0,0.4)"/>' +
        // Laptop base
        '<polygon points="-22,2 0,-8 22,2 0,12" fill="#475569"/>' +
        '<polygon points="-22,2 0,12 0,16 -22,6" fill="#334155"/>' +
        '<polygon points="0,12 22,2 22,6 0,16" fill="#1e293b"/>' +
        // Screen angled up
        '<polygon points="-18,-18 0,-26 18,-18 0,-8" fill="' + (isCrash ? '#1e293b' : '#0284c7') + '"/>' +
        (isCrash ? '<text x="0" y="-30" text-anchor="middle" font-size="20">💥</text>' +
                   '<polygon points="-18,-18 0,-26 18,-18 0,-8" fill="#ef4444" opacity="0.6"/>' :
                   '<text x="0" y="-12" text-anchor="middle" font-size="6" fill="#fff" font-weight="800">CPU 99%</text>') +
        // Label
        '<rect x="-44" y="20" width="88" height="18" rx="4" fill="#0f172a" stroke="#ef4444" stroke-width="1"/>' +
        '<text x="0" y="32" text-anchor="middle" font-size="7.5" font-family="sans-serif" font-weight="800" fill="#f87171">Single Home Laptop</text>' +
      '</g>';
    },

    // Database Vault (Postgres / SQL / NoSQL)
    renderDatabaseVault(x, y, name = 'Ola SQL Database', status = 'online') {
      const isCrash = status === 'crashed';
      const colTop = isCrash ? '#991b1b' : '#0284c7';
      const colSide = isCrash ? '#7f1d1d' : '#0369a1';

      return '<g class="iso-db-vault" transform="translate(' + x + ',' + y + ')">' +
        '<ellipse cx="0" cy="22" rx="30" ry="14" fill="rgba(0,0,0,0.45)"/>' +
        // Cylinder 1 (Bottom disk)
        '<path d="M-22,6 C-22,0 22,0 22,6 L22,18 C22,24 -22,24 -22,18 Z" fill="' + colSide + '"/>' +
        '<ellipse cx="0" cy="6" rx="22" ry="7" fill="' + colTop + '"/>' +
        // Cylinder 2 (Top disk)
        '<path d="M-22,-8 C-22,-14 22,-14 22,-8 L22,4 C22,10 -22,10 -22,4 Z" fill="' + colSide + '"/>' +
        '<ellipse cx="0" cy="-8" rx="22" ry="7" fill="' + colTop + '"/>' +
        // LED indicator
        '<circle cx="0" cy="-6" r="2.5" fill="' + (isCrash ? '#ef4444' : '#22c55e') + '"/>' +
        (isCrash ? '<text x="0" y="-18" text-anchor="middle" font-size="14">⚠️</text>' : '') +
        '<rect x="-45" y="26" width="90" height="16" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="0.8"/>' +
        '<text x="0" y="37" text-anchor="middle" font-size="7.5" font-family="sans-serif" font-weight="800" fill="#93c5fd">' + name + '</text>' +
      '</g>';
    },

    // Floating Smartphone Client View
    renderPhoneClient(x, y, label = 'Ola Rider App', status = 'booking') {
      return '<g class="iso-phone-client" transform="translate(' + x + ',' + y + ')">' +
        '<ellipse cx="0" cy="28" rx="26" ry="12" fill="rgba(0,0,0,0.4)"/>' +
        // Phone body
        '<rect x="-24" y="-36" width="48" height="64" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>' +
        // Screen
        '<rect x="-20" y="-30" width="40" height="52" rx="4" fill="#1e293b"/>' +
        // Mini map UI with green pickup dot & yellow cab icon
        '<circle cx="-8" cy="-10" r="4" fill="#22c55e"/>' +
        '<line x1="-8" y1="-10" x2="8" y2="8" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,2"/>' +
        '<circle cx="8" cy="8" r="4.5" fill="#facc15"/>' +
        // Book Mini button
        '<rect x="-16" y="14" width="32" height="6" rx="2" fill="#22c55e"/>' +
        '<text x="0" y="19" text-anchor="middle" font-size="4.5" font-family="sans-serif" font-weight="900" fill="#fff">CONFIRM CAB</text>' +
        '<text x="0" y="36" text-anchor="middle" font-size="7.5" font-family="sans-serif" font-weight="800" fill="#f8fafc">' + label + '</text>' +
      '</g>';
    },

    // =========================================================================
    // LEVEL 1: 50,000 RIDERS BOOK CABS AT 6:00 PM (OLA RUSH HOUR)
    // =========================================================================
    renderOlaRushHourScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isLaptopFail = choice && choice.id === 'B';
      const isOfflineFail = choice && choice.id === 'C';

      let badgeText = '6:00 PM MONSOON RUSH: 50,000 RIDERS HIT THE APP';
      let badgeType = 'problem';
      let telemetryText = 'Traffic: 50,000 req/sec • Single Laptop at Risk';
      let footerTitle = 'Evening Rush Hour Bottleneck';
      let footerDesc = 'Bangalore tech park workers open Ola simultaneously. One computer cannot process 50,000 rides at the same second.';
      let footerIcon = '⚠️';

      if (isOptimal) {
        badgeText = 'SYSTEM DESIGN SUCCESS: DISTRIBUTED OLA CLOUD';
        badgeType = 'solution';
        telemetryText = 'Latency: 25ms • 50,000 Riders Balanced • Zero Downtime';
        footerTitle = 'Distributed Architecture Victory';
        footerDesc = 'The planned multi-server cluster dispatches Driver Ramesh in 3 minutes. Traffic is balanced smoothly with zero app lag.';
        footerIcon = '✅';
      } else if (isLaptopFail) {
        badgeText = 'CRITICAL FAILURE: LAPTOP HARDWARE OVERLOAD';
        badgeType = 'problem';
        telemetryText = 'CPU: 100% FATAL • RAM: Out of Memory • App Crashed';
        footerTitle = 'Hardware Meltdown';
        footerDesc = 'Computers cannot magically upgrade themselves. The bedroom laptop overheats and crashes, stranding 50,000 riders in the rain.';
        footerIcon = '💥';
      } else if (isOfflineFail) {
        badgeText = 'COMMUNICATION FAILURE: NO INTERNET / NO SYSTEM';
        badgeType = 'warning';
        telemetryText = 'Connection: Dropped • 0 Cabs Dispatched';
        footerTitle = 'Isolated Network Failure';
        footerDesc = 'Ride hailing requires a live central system. Without internet and servers, passengers cannot see nearby cabs or share coordinates.';
        footerIcon = '📵';
      }

      // Rain streaks
      let rainStreaks = '';
      for (let i = 0; i < 24; i++) {
        const rx = 40 + (i * 24);
        const ry = 30 + ((i * 17) % 180);
        rainStreaks += '<line x1="' + rx + '" y1="' + ry + '" x2="' + (rx - 8) + '" y2="' + (ry + 22) + '" stroke="#7dd3fc" stroke-width="1.2" opacity="0.45"/>';
      }

      // Dynamic animated data connection beam
      let connectionBeam = '';
      if (isOptimal) {
        connectionBeam = '<path d="M150,220 Q240,140 330,170 T480,210" fill="none" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" filter="url(#glowGreen)"><animate attributeName="stroke-dashoffset" values="40;0" dur="0.8s" repeatCount="indefinite"/></path>';
      } else if (isLaptopFail) {
        connectionBeam = '<path d="M150,220 Q240,160 330,220" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="4,4"/>';
      }

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        rainStreaks +
        connectionBeam +
        // Left: Waiting Rider
        this.renderOlaRider(150, 230, isOptimal ? 'matched' : (isLaptopFail || isOfflineFail ? 'error' : 'waiting'), 'Rider Rahul (Tech Park)') +
        // Center: The Computing Unit
        (isOptimal ? 
          this.renderOlaDispatchServer(330, 150, 'Ola Cloud Cluster (10 Servers)', 'healthy', '25%') : 
          this.renderBedroomLaptop(330, 210, isLaptopFail ? 'crashed' : 'overheated')) +
        // Right: Ola Yellow Cab on the Road
        this.renderOlaCab(480, 220, 'SW', isOptimal ? 'dispatched' : (isLaptopFail ? 'crash' : 'available'), isOptimal ? 'Cab KA-01 • Ramesh (3m)' : 'Ola Prime Sedan');

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText,
        badgeType,
        telemetryText,
        footerIcon,
        footerTitle,
        footerDesc,
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 2: FUNCTIONAL VS NON-FUNCTIONAL REQUIREMENTS
    // =========================================================================
    renderRequirementsStressScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isSlow = choice && choice.id === 'B';

      let badgeText = 'REQUIREMENTS EVALUATION: BOOKING SUCCESS + RESPONSE SPEED';
      let badgeType = isOptimal ? 'solution' : (isSlow ? 'problem' : 'problem');
      let telemetryText = isOptimal ? 'Latency: 1.4s (Pass) • 100% Ride Success' : 'Latency: 45.0s (Failed SLA) • Timeout Alert';

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        // Rider on left
        this.renderOlaRider(160, 220, isOptimal ? 'matched' : (isSlow ? 'error' : 'waiting'), 'Rider Aditi') +
        // Dispatch Engine
        this.renderOlaDispatchServer(320, 160, 'Ola Dispatch Engine', isOptimal ? 'healthy' : 'overheated', isOptimal ? '15%' : '94%') +
        // Cab on right
        this.renderOlaCab(470, 220, 'SW', isOptimal ? 'dispatched' : 'available', isOptimal ? 'Arriving in 2m' : 'Waiting on Dispatch') +
        // Speedometer HUD in center
        '<g transform="translate(320, 90)">' +
          '<rect x="-65" y="-18" width="130" height="36" rx="6" fill="#0f172a" stroke="' + (isOptimal ? '#22c55e' : '#ef4444') + '" stroke-width="1.5"/>' +
          '<text x="0" y="-3" text-anchor="middle" font-size="8" font-family="sans-serif" font-weight="900" fill="' + (isOptimal ? '#4ade80' : '#f87171') + '">' +
            (isOptimal ? 'SPEED: 1.4s (NON-FUNCTIONAL PASS)' : 'SPEED: 45s (TOO SLOW!)') +
          '</text>' +
          '<text x="0" y="11" text-anchor="middle" font-size="7" font-family="sans-serif" font-weight="700" fill="#94a3b8">' +
            (isOptimal ? 'Functional: Booked • Non-Functional: Fast' : 'Functional: Booked • Non-Functional: Failed') +
          '</text>' +
        '</g>';

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'storm',
        badgeText,
        badgeType,
        telemetryText,
        footerIcon: isOptimal ? '⚡' : '⏱️',
        footerTitle: isOptimal ? 'Optimal Requirements Met' : 'Non-Functional SLA Breach',
        footerDesc: isOptimal ? 'Both what the app does (booking) and how fast it performs (under 2 seconds) are satisfied!' : 'Booking worked, but 45 seconds latency causes riders to abandon the app.',
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 3 & 4: CLIENT-SERVER & 3-TIER ARCHITECTURE
    // =========================================================================
    renderClientServerClerkScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isDirectDbFail = choice && choice.id === 'B';

      let badgeText = isOptimal ? '3-TIER ARCHITECTURE: PHONE → SERVER → DATABASE' : 'TIER COUPLING PROBLEM';
      let badgeType = isOptimal ? 'solution' : 'problem';
      let telemetryText = isOptimal ? 'Flow: Encapsulated & Secure • Latency: 12ms' : 'Direct Access Risk • Database Lock';

      let dataLine = '';
      if (isOptimal) {
        dataLine = '<path d="M160,200 L320,170 L480,200" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="5,4" filter="url(#glowGreen)"><animate attributeName="stroke-dashoffset" values="20;0" dur="1s" repeatCount="indefinite"/></path>';
      }

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        dataLine +
        // Tier 1: Client (Frontend Phone)
        this.renderPhoneClient(160, 200, 'Tier 1: Rider Phone (UI)', isOptimal ? 'ready' : 'error') +
        // Tier 2: Backend Server (Logic)
        this.renderOlaDispatchServer(320, 160, 'Tier 2: Ola Backend API', isOptimal ? 'healthy' : 'crash', '22%') +
        // Tier 3: Database (Memory)
        this.renderDatabaseVault(480, 200, 'Tier 3: Driver & Trip DB', isOptimal ? 'online' : 'crashed');

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'night',
        badgeText,
        badgeType,
        telemetryText,
        footerIcon: isOptimal ? '🏗️' : '⚠️',
        footerTitle: isOptimal ? 'Clean 3-Tier Separation' : 'Direct Coupling Failure',
        footerDesc: isOptimal ? 'Screen (Frontend), Brain (Backend), and Memory (Database) work together seamlessly without interfering.' : 'Allowing mobile apps to talk directly to the database disk creates severe security and locking problems.',
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 5: CONNECTING THE FULL OLA DISPATCH SYSTEM (BLUEPRINT)
    // =========================================================================
    renderSupermarketBlueprintScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        // Central Cloud Gateway
        this.renderOlaDispatchServer(320, 150, 'Ola API Gateway & Core', isOptimal ? 'healthy' : 'crash', '35%') +
        // Rider Phone
        this.renderPhoneClient(150, 210, 'Rider App (Client)', 'ready') +
        // Driver Cab
        this.renderOlaCab(480, 210, 'SW', isOptimal ? 'dispatched' : 'available', 'Driver App (In-Cab)') +
        // Database
        this.renderDatabaseVault(320, 260, 'Central Dispatch Ledger', 'online');

      return this.wrapScene({
        theme: 'blueprint',
        badgeText: isOptimal ? 'COMPLETE OLA BLUEPRINT: FULLY CONNECTED' : 'SYSTEM ARCHITECTURE BLUEPRINT',
        badgeType: isOptimal ? 'solution' : 'problem',
        telemetryText: isOptimal ? 'All Components Linked • 25ms Response' : 'Architecture Blueprint Required',
        footerIcon: '📐',
        footerTitle: isOptimal ? 'Architectural Blueprint Verified' : 'Connecting the Full System',
        footerDesc: isOptimal ? 'Rider apps, driver apps, API gateways, and databases are organized so hundreds of thousands of rides run cleanly.' : 'Without a planned blueprint, individual components cannot coordinate during traffic spikes.',
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 6: NETWORKING FUNDAMENTALS (DNS, IP, PORTS)
    // =========================================================================
    renderNetworkingDnsPortsScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        // Left: Rider App requesting api.olacabs.com
        this.renderOlaRider(150, 220, isOptimal ? 'matched' : 'waiting', 'Query: api.olacabs.com') +
        // Center: Holographic DNS Phonebook Directory
        '<g transform="translate(320, 140)">' +
          '<rect x="-55" y="-22" width="110" height="44" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" filter="url(#glowCyan)"/>' +
          '<text x="0" y="-8" text-anchor="middle" font-size="8" font-family="sans-serif" font-weight="900" fill="#38bdf8">DNS PHONEBOOK</text>' +
          '<text x="0" y="5" text-anchor="middle" font-size="6.5" font-family="sans-serif" font-weight="700" fill="#f8fafc">api.olacabs.com</text>' +
          '<text x="0" y="16" text-anchor="middle" font-size="7" font-family="sans-serif" font-weight="900" fill="#4ade80">↓ 104.22.15.82</text>' +
        '</g>' +
        // Right: Server on Port 443
        this.renderOlaDispatchServer(480, 190, 'Ola Server IP 104.22.15.82:443', isOptimal ? 'healthy' : 'crash', '18%');

      return this.wrapScene({
        theme: 'night',
        badgeText: isOptimal ? 'DNS RESOLUTION SUCCESSFUL' : 'DNS & IP LOOKUP',
        badgeType: isOptimal ? 'solution' : 'problem',
        telemetryText: isOptimal ? 'Resolved in 8ms • Connected via Port 443' : 'Domain Lookup Required',
        footerIcon: '🌐',
        footerTitle: isOptimal ? 'DNS Translated Domain to IP' : 'Finding the Server',
        footerDesc: isOptimal ? 'Your phone asked DNS for api.olacabs.com, received the IP address, and knocked on Port 443 safely.' : 'Computers need numeric IP addresses and port numbers to deliver ride requests to the correct machine.',
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 7: PROTOCOLS (HTTP VS HTTPS FOR OLA MONEY)
    // =========================================================================
    renderProtocolsTransportScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isPlainHttp = choice && choice.id === 'B';

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        // Left: Rider paying with wallet
        this.renderPhoneClient(150, 200, 'Ola Money Wallet', 'ready') +
        // Center: Security Tunnel
        '<g transform="translate(320, 170)">' +
          '<rect x="-60" y="-20" width="120" height="40" rx="6" fill="#0f172a" stroke="' + (isOptimal ? '#22c55e' : '#ef4444') + '" stroke-width="2"/>' +
          '<text x="0" y="-5" text-anchor="middle" font-size="8" font-family="sans-serif" font-weight="900" fill="' + (isOptimal ? '#4ade80' : '#f87171') + '">' +
            (isOptimal ? '🔒 HTTPS ENCRYPTED TUNNEL' : '🔓 PLAIN HTTP (UNENCRYPTED)') +
          '</text>' +
          '<text x="0" y="10" text-anchor="middle" font-size="6.5" font-family="sans-serif" font-weight="700" fill="#94a3b8">' +
            (isOptimal ? 'Payload: *** AES-256 SCRAMBLED ***' : 'Payload: Card: 4532, CVV: 891') +
          '</text>' +
        '</g>' +
        // Right: Payments Server
        this.renderOlaDispatchServer(480, 200, 'Ola Payments Gateway', isOptimal ? 'healthy' : 'crash', '12%');

      return this.wrapScene({
        theme: 'vault',
        badgeText: isOptimal ? 'ENCRYPTED HTTPS CONNECTION ACTIVE' : 'HTTP VS HTTPS SECURITY CHECK',
        badgeType: isOptimal ? 'solution' : 'problem',
        telemetryText: isOptimal ? 'TLS 1.3 Active • Wallet Balance Safe' : 'Plaintext Vulnerability Detected',
        footerIcon: isOptimal ? '🔒' : '⚠️',
        footerTitle: isOptimal ? 'Zero Data Theft with HTTPS' : 'Insecure Data Transmission',
        footerDesc: isOptimal ? 'Payment cards and OTPs are encrypted into unreadable scrambled gibberish before flying through the air.' : 'Without encryption, anyone on public Wi-Fi can spy on credit card numbers and passwords.',
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 8 & 9: APIS AND JSON / REST ARCHITECTURE
    // =========================================================================
    renderApiContractsScannersScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        this.renderPhoneClient(150, 200, 'Rider Phone', 'ready') +
        // Center: JSON Payload Card
        '<g transform="translate(320, 160)">' +
          '<rect x="-70" y="-30" width="140" height="60" rx="6" fill="#0f172a" stroke="#eab308" stroke-width="1.2"/>' +
          '<text x="0" y="-16" text-anchor="middle" font-size="7.5" font-family="sans-serif" font-weight="900" fill="#facc15">POST /api/v1/rides (JSON)</text>' +
          '<text x="-60" y="-2" font-size="6" font-family="monospace" fill="#93c5fd">{"pickup": "Indiranagar",</text>' +
          '<text x="-60" y="8" font-size="6" font-family="monospace" fill="#93c5fd"> "drop": "Koramangala",</text>' +
          '<text x="-60" y="18" font-size="6" font-family="monospace" fill="#4ade80"> "cab": "Prime"}</text>' +
        '</g>' +
        this.renderOlaDispatchServer(480, 200, 'Ola REST API Gateway', isOptimal ? 'healthy' : 'active', '20%');

      return this.wrapScene({
        theme: 'blueprint',
        badgeText: isOptimal ? 'REST API CONTRACT VERIFIED' : 'APIS AND JSON DATA EXCHANGE',
        badgeType: isOptimal ? 'solution' : 'problem',
        telemetryText: isOptimal ? 'HTTP 201 Created • Response: 14ms' : 'Standard JSON Contract Required',
        footerIcon: '📋',
        footerTitle: isOptimal ? 'Universal JSON Communication' : 'API Data Exchange',
        footerDesc: isOptimal ? 'The phone sent structured JSON and the server responded with cab details using standard REST endpoints.' : 'APIs allow different devices and computers to understand each other using clean JSON text.',
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 10 & 11: SQL VS NOSQL & RELATIONAL DESIGN
    // =========================================================================
    renderDatabasePolyglotScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        // Left: SQL Database (Wallet Balances)
        this.renderDatabaseVault(190, 180, 'SQL: Wallet & Trips', 'online') +
        // Right: NoSQL Database (Live GPS Pings)
        this.renderDatabaseVault(450, 180, 'NoSQL: 100k GPS Pings/sec', 'online') +
        // Moving Cab streaming GPS pings
        this.renderOlaCab(320, 230, 'SE', 'moving', 'Cab GPS Pings (NoSQL)');

      return this.wrapScene({
        theme: 'vault',
        badgeText: isOptimal ? 'POLYGLOT STORAGE SUCCESS' : 'SQL VS NOSQL STORAGE STRATEGY',
        badgeType: isOptimal ? 'solution' : 'problem',
        telemetryText: isOptimal ? 'SQL: 100% Strict Ledger • NoSQL: 100k pings/sec' : 'Storage Assignment Required',
        footerIcon: '💾',
        footerTitle: isOptimal ? 'Right Database for the Right Job' : 'Matching Data to Storage',
        footerDesc: isOptimal ? 'SQL protects money with strict balance rules; NoSQL absorbs millions of fast-moving cab GPS coordinates without slowing down.' : 'Trying to store fast GPS coordinates in a strict bank database causes disk lockup.',
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 12: ACID PROPERTIES (PAYING ₹350 FOR A RIDE)
    // =========================================================================
    renderAcidAtomicVaultScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        // Left: Rider Account (-₹350)
        '<g transform="translate(180, 200)">' +
          '<rect x="-50" y="-20" width="100" height="40" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2"/>' +
          '<text x="0" y="-5" text-anchor="middle" font-size="7.5" font-family="sans-serif" font-weight="800" fill="#93c5fd">Rider Rahul Wallet</text>' +
          '<text x="0" y="10" text-anchor="middle" font-size="9" font-family="sans-serif" font-weight="900" fill="' + (isOptimal ? '#f87171' : '#f87171') + '">-₹350</text>' +
        '</g>' +
        // Center: ACID Commit Lock
        '<g transform="translate(320, 150)">' +
          '<circle cx="0" cy="0" r="24" fill="#0f172a" stroke="' + (isOptimal ? '#22c55e' : '#ef4444') + '" stroke-width="2" filter="' + (isOptimal ? 'url(#glowGreen)' : 'url(#glowRed)') + '"/>' +
          '<text x="0" y="4" text-anchor="middle" font-size="10" font-family="sans-serif" font-weight="900" fill="#fff">' + (isOptimal ? 'ACID' : 'FAIL') + '</text>' +
        '</g>' +
        // Right: Driver Account (+₹350)
        '<g transform="translate(460, 200)">' +
          '<rect x="-50" y="-20" width="100" height="40" rx="6" fill="#0f172a" stroke="#22c55e" stroke-width="1.2"/>' +
          '<text x="0" y="-5" text-anchor="middle" font-size="7.5" font-family="sans-serif" font-weight="800" fill="#86efac">Driver Ramesh Bank</text>' +
          '<text x="0" y="10" text-anchor="middle" font-size="9" font-family="sans-serif" font-weight="900" fill="#4ade80">+₹350</text>' +
        '</g>';

      return this.wrapScene({
        theme: 'vault',
        badgeText: isOptimal ? 'ACID ATOMIC TRANSACTION COMMITTED' : 'ACID FINANCIAL INTEGRITY CHECK',
        badgeType: isOptimal ? 'solution' : 'problem',
        telemetryText: isOptimal ? 'Atomic: Both Succeeded • Zero Money Lost' : 'Risk: Inconsistent Account Balances',
        footerIcon: '⚖️',
        footerTitle: isOptimal ? 'All-Or-Nothing Transaction' : 'Atomicity Guard',
        footerDesc: isOptimal ? 'Both rider deduction and driver credit succeeded at the exact same millisecond. If Wi-Fi dropped, the entire payment would roll back safely.' : 'Without ACID, money deducted from the passenger could vanish before reaching the driver.',
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 13, 15, 16: INDEXING, PARTITIONING, SHARDING
    // =========================================================================
    renderDatabaseShardingLedgersScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        this.renderDatabaseVault(150, 190, 'Delhi Shard (Cab DB)', 'online') +
        this.renderDatabaseVault(320, 160, 'Mumbai Shard (Cab DB)', 'online') +
        this.renderDatabaseVault(490, 190, 'Bangalore Shard (Cab DB)', 'online');

      return this.wrapScene({
        theme: 'day',
        badgeText: isOptimal ? 'DATABASE SHARDING & INDEXING ACTIVE' : 'DATA DISTRIBUTION STRATEGY',
        badgeType: isOptimal ? 'solution' : 'problem',
        telemetryText: isOptimal ? 'Indexed Lookup: 2ms • Queries Routed by City' : 'Scanning 50M Records (Slow)',
        footerIcon: '🗂️',
        footerTitle: isOptimal ? 'Divided Across City Shards' : 'Managing Millions of Records',
        footerDesc: isOptimal ? 'Indexing lets servers find a driver by phone number in 2ms, while sharding splits data by city so no single database gets overwhelmed.' : 'Searching through millions of unindexed records from top to bottom freezes the database.',
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 14: DATABASE REPLICATION
    // =========================================================================
    renderDbReplicationClusterScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        // Primary Leader (Mumbai)
        this.renderDatabaseVault(200, 170, 'Primary Server (Leader)', isOptimal ? 'online' : 'crashed') +
        // Secondary Replica (Bangalore)
        this.renderDatabaseVault(440, 170, 'Replica Server (Follower)', 'online') +
        // Replication sync arrow
        '<path d="M250,170 L390,170" fill="none" stroke="#22c55e" stroke-width="2" stroke-dasharray="4,3" filter="url(#glowGreen)"><animate attributeName="stroke-dashoffset" values="14;0" dur="1s" repeatCount="indefinite"/></path>';

      return this.wrapScene({
        theme: 'storm',
        badgeText: isOptimal ? 'ACTIVE REPLICATION CLUSTER' : 'SINGLE POINT OF FAILURE DETECTED',
        badgeType: isOptimal ? 'solution' : 'problem',
        telemetryText: isOptimal ? 'Replication Lag: 12ms • Automatic Failover Ready' : 'Zero Backups Available',
        footerIcon: '🔄',
        footerTitle: isOptimal ? 'Data Safe Across Server Replicas' : 'Database Replication',
        footerDesc: isOptimal ? 'If the primary database loses power, the secondary replica in Bangalore immediately takes over with zero lost ride records.' : 'Without replication, a single power outage wipes out app access for all users.',
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 17: CAP THEOREM (NETWORK PARTITION BETWEEN CITIES)
    // =========================================================================
    renderCapNetworkPartitionScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        this.renderOlaDispatchServer(180, 170, 'Delhi Server Cluster', 'healthy', '30%') +
        this.renderOlaDispatchServer(460, 170, 'Bangalore Server Cluster', 'healthy', '30%') +
        // Cut Fiber Cable with sparks
        '<line x1="240" y1="170" x2="300" y2="170" stroke="#ef4444" stroke-width="3"/>' +
        '<line x1="340" y1="170" x2="400" y2="170" stroke="#ef4444" stroke-width="3"/>' +
        '<text x="320" y="165" text-anchor="middle" font-size="14">⚡</text>' +
        '<rect x="-40" y="8" width="80" height="14" rx="3" fill="#0f172a" transform="translate(320, 170)"/>' +
        '<text x="320" y="188" text-anchor="middle" font-size="6.5" font-family="sans-serif" font-weight="900" fill="#ef4444">FIBER CABLE CUT</text>';

      return this.wrapScene({
        theme: 'storm',
        badgeText: isOptimal ? 'CAP THEOREM: AP AVAILABILITY MODE' : 'NETWORK PARTITION OCCURRED',
        badgeType: isOptimal ? 'solution' : 'problem',
        telemetryText: isOptimal ? 'Local Cabs Booking Smoothly • Sync Later' : 'System Split Across Cities',
        footerIcon: '⚡',
        footerTitle: isOptimal ? 'Available During Network Cuts' : 'CAP Trade-off Dilemma',
        footerDesc: isOptimal ? 'Choosing Availability keeps local cab booking working in Delhi and Bangalore even while the connection between them is down.' : 'During network splits, systems must choose between consistency or keeping the app running.',
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 18: OLTP VS OLAP
    // =========================================================================
    renderOltpOlapRegistersScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        // OLTP Live Dispatch
        this.renderOlaDispatchServer(190, 170, 'OLTP Live Dispatch (10ms)', 'healthy', '22%') +
        // OLAP Data Warehouse
        this.renderDatabaseVault(450, 170, 'OLAP Warehouse (10M Trips)', 'online') +
        // Live cab booking
        this.renderOlaCab(190, 240, 'SE', 'dispatched', 'Live Cab Booking');

      return this.wrapScene({
        theme: 'day',
        badgeText: isOptimal ? 'SEPARATE OLTP & OLAP ARCHITECTURE' : 'OLTP VS OLAP WORKLOADS',
        badgeType: isOptimal ? 'solution' : 'problem',
        telemetryText: isOptimal ? 'Live Booking: 10ms • Analytics Runs Separately' : 'Heavy Query Blocking Live Rides',
        footerIcon: '📊',
        footerTitle: isOptimal ? 'Fast Dispatch + Deep Analytics' : 'Workload Isolation',
        footerDesc: isOptimal ? 'Live riders book cabs in milliseconds on OLTP, while business analysts run heavy surge pricing studies on OLAP without slowing down the app.' : 'Running giant analytical reports on the live booking database freezes the app for riders.',
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 19 & 21: SCALING (HORIZONTAL VS VERTICAL & MICROSERVICES)
    // =========================================================================
    renderScalingClusterNodesScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        // Cluster of modular servers
        this.renderOlaDispatchServer(160, 160, 'Server Pod 1', 'healthy', '25%') +
        this.renderOlaDispatchServer(320, 140, 'Server Pod 2', 'healthy', '25%') +
        this.renderOlaDispatchServer(480, 160, 'Server Pod 3', 'healthy', '25%') +
        this.renderOlaCab(320, 230, 'SE', 'moving', 'Monsoon Fleet Dispatched');

      return this.wrapScene({
        theme: 'day',
        badgeText: isOptimal ? 'HORIZONTAL SCALING SUCCESS' : 'SYSTEM SCALING DECISION',
        badgeType: isOptimal ? 'solution' : 'problem',
        telemetryText: isOptimal ? '3 Nodes Active • 25% Load Per Machine' : 'Single Machine Bottleneck',
        footerIcon: '📈',
        footerTitle: isOptimal ? 'Elastic Horizontal Scaling' : 'Scaling Strategy',
        footerDesc: isOptimal ? 'Adding multiple affordable cloud servers handles monsoon rain traffic effortlessly without needing an impossible supercomputer.' : 'Upgrading one machine has strict physical limits and risks total failure.',
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 20: AUTHENTICATION AND AUTHORIZATION
    // =========================================================================
    renderAuthIdentityVerificationScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        this.renderOlaRider(160, 210, 'matched', 'Rider Rahul (OTP Verified)') +
        // Security Gate
        '<g transform="translate(320, 170)">' +
          '<rect x="-65" y="-22" width="130" height="44" rx="6" fill="#0f172a" stroke="' + (isOptimal ? '#22c55e' : '#ef4444') + '" stroke-width="1.5"/>' +
          '<text x="0" y="-8" text-anchor="middle" font-size="8" font-family="sans-serif" font-weight="900" fill="' + (isOptimal ? '#4ade80' : '#f87171') + '">' +
            (isOptimal ? 'VERIFIED: RIDER PERMISSIONS' : 'SECURITY BREACH RISK') +
          '</text>' +
          '<text x="0" y="5" text-anchor="middle" font-size="6.5" font-family="sans-serif" font-weight="700" fill="#94a3b8">AuthN: Logged In via OTP</text>' +
          '<text x="0" y="15" text-anchor="middle" font-size="6.5" font-family="sans-serif" font-weight="900" fill="' + (isOptimal ? '#22c55e' : '#ef4444') + '">' +
            (isOptimal ? 'AuthZ: Rider View Only (Admin Blocked)' : 'AuthZ: Missing! Anyone can edit prices') +
          '</text>' +
        '</g>' +
        this.renderDatabaseVault(480, 190, 'Ola Admin Financials', 'online');

      return this.wrapScene({
        theme: 'vault',
        badgeText: isOptimal ? 'AUTHN & AUTHZ VERIFIED' : 'AUTHENTICATION VS AUTHORIZATION',
        badgeType: isOptimal ? 'solution' : 'problem',
        telemetryText: isOptimal ? 'Role-Based Access Enforced • Zero Privilege Leak' : 'Unchecked Access Danger',
        footerIcon: '🛡️',
        footerTitle: isOptimal ? 'Identity & Permissions Separated' : 'Access Control Check',
        footerDesc: isOptimal ? 'Authentication proves who you are (via OTP); Authorization decides what you are allowed to do (riders cannot touch driver earnings).' : 'Without authorization, any logged-in user could alter financial settings.',
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 22: LOAD BALANCING (100,000 RIDERS EVENLY DISTRIBUTED)
    // =========================================================================
    renderLoadBalancerTrafficScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        // Load Balancer Distributor
        '<g transform="translate(180, 170)">' +
          '<circle cx="0" cy="0" r="28" fill="#0f172a" stroke="#22c55e" stroke-width="2" filter="url(#glowGreen)"/>' +
          '<text x="0" y="-4" text-anchor="middle" font-size="7.5" font-family="sans-serif" font-weight="900" fill="#4ade80">LOAD</text>' +
          '<text x="0" y="7" text-anchor="middle" font-size="7" font-family="sans-serif" font-weight="900" fill="#4ade80">BALANCER</text>' +
        '</g>' +
        // Split arrows to backend servers
        this.renderOlaDispatchServer(360, 120, 'Server 1 (25k req)', 'healthy', '25%') +
        this.renderOlaDispatchServer(480, 150, 'Server 2 (25k req)', 'healthy', '25%') +
        this.renderOlaDispatchServer(360, 220, 'Server 3 (25k req)', 'healthy', '25%') +
        this.renderOlaDispatchServer(480, 250, 'Server 4 (25k req)', 'healthy', '25%');

      return this.wrapScene({
        theme: 'night',
        badgeText: isOptimal ? 'LOAD BALANCER: TRAFFIC DISTRIBUTED EVENLY' : 'UNBALANCED TRAFFIC COLLAPSE',
        badgeType: isOptimal ? 'solution' : 'problem',
        telemetryText: isOptimal ? '100,000 Riders Split Across 4 Nodes (25k each)' : 'Server 1 Overloaded (100% CPU)',
        footerIcon: '⚖️',
        footerTitle: isOptimal ? 'Zero Overheating with Load Balancing' : 'Traffic Distribution',
        footerDesc: isOptimal ? 'The smart Load Balancer channels 25,000 requests to each server, keeping all machines relaxed at 25% CPU.' : 'Without a load balancer, all 100,000 users slam a single server and crash the app.',
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 23: CACHING (REDIS IN-MEMORY DRIVER PROFILE IN 2MS)
    // =========================================================================
    renderCachingStickyNotepadScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        this.renderOlaRider(150, 210, 'matched', 'Rider App (Fast Read)') +
        // Fast Redis RAM Cache
        '<g transform="translate(320, 140)">' +
          '<rect x="-60" y="-20" width="120" height="40" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="2" filter="url(#glowCyan)"/>' +
          '<text x="0" y="-5" text-anchor="middle" font-size="8" font-family="sans-serif" font-weight="900" fill="#38bdf8">⚡ REDIS RAM CACHE</text>' +
          '<text x="0" y="8" text-anchor="middle" font-size="7" font-family="sans-serif" font-weight="900" fill="#4ade80">Latency: 2ms (99% HIT)</text>' +
        '</g>' +
        // Slow Disk Database below
        this.renderDatabaseVault(480, 210, 'Slow Magnetic Disk (120ms)', 'online');

      return this.wrapScene({
        theme: 'day',
        badgeText: isOptimal ? 'CACHE HIT: 2MS INSTANT RESPONSE' : 'CACHING STRATEGY',
        badgeType: isOptimal ? 'solution' : 'problem',
        telemetryText: isOptimal ? 'RAM Speed: 2ms • Disk Reads Avoided' : 'Disk Bottleneck: 120ms Latency',
        footerIcon: '⚡',
        footerTitle: isOptimal ? 'Fast In-Memory RAM Caching' : 'Reducing Disk Reads',
        footerDesc: isOptimal ? 'Frequently requested driver ratings and car photos are served straight from ultra-fast RAM in 2 milliseconds.' : 'Reading from mechanical disk for every map refresh slows down the entire application.',
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 24: CDN (EDGE KIOSKS SERVING MAP TILES & CAR ICONS)
    // =========================================================================
    renderCdnEdgeKiosksScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        this.renderOlaDispatchServer(150, 170, 'Kolkata Edge CDN (15ms)', 'healthy', '10%') +
        this.renderOlaDispatchServer(320, 140, 'Bangalore Origin Datacenter', 'healthy', '20%') +
        this.renderOlaDispatchServer(490, 170, 'Delhi Edge CDN (15ms)', 'healthy', '10%') +
        this.renderOlaCab(320, 230, 'SE', 'moving', 'Downloading Car Icons & Maps');

      return this.wrapScene({
        theme: 'day',
        badgeText: isOptimal ? 'CDN EDGE CACHING ACROSS INDIA' : 'CONTENT DELIVERY NETWORK (CDN)',
        badgeType: isOptimal ? 'solution' : 'problem',
        telemetryText: isOptimal ? 'Edge Latency: 15ms • Origin Bandwidth Saved' : 'Origin Overload: 2,000km Delay',
        footerIcon: '🌍',
        footerTitle: isOptimal ? 'Assets Served from Nearby Cities' : 'Global Asset Distribution',
        footerDesc: isOptimal ? 'Riders in Delhi and Kolkata download map tiles and car icons from local edge servers in 15ms instead of contacting Bangalore.' : 'Forcing millions of users to fetch large images from one central server causes severe buffering.',
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 25: MESSAGE QUEUES & ASYNCHRONOUS PROCESSING
    // =========================================================================
    renderMessageQueuesAsyncScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        this.renderPhoneClient(150, 190, 'Rider App (Trip Ended in 0.1s)', 'ready') +
        // Conveyor queue of background jobs
        '<g transform="translate(320, 160)">' +
          '<rect x="-65" y="-18" width="130" height="36" rx="6" fill="#0f172a" stroke="#eab308" stroke-width="1.5"/>' +
          '<text x="0" y="-3" text-anchor="middle" font-size="7.5" font-family="sans-serif" font-weight="900" fill="#facc15">KAFKA MESSAGE QUEUE</text>' +
          '<text x="0" y="9" text-anchor="middle" font-size="6.5" font-family="sans-serif" font-weight="700" fill="#93c5fd">✉️ [Invoice #9021] ✉️ [SMS]</text>' +
        '</g>' +
        this.renderOlaDispatchServer(480, 190, 'Background Worker Server', 'healthy', '15%');

      return this.wrapScene({
        theme: 'night',
        badgeText: isOptimal ? 'ASYNC QUEUE DECOUPLING ACTIVE' : 'MESSAGE QUEUES & BACKGROUND PROCESSING',
        badgeType: isOptimal ? 'solution' : 'problem',
        telemetryText: isOptimal ? 'App Unlocked in 0.1s • Heavy Invoices Queued' : 'App Frozen Waiting for PDF Generator',
        footerIcon: '📨',
        footerTitle: isOptimal ? 'Instant Checkout with Background Queues' : 'Asynchronous Processing',
        footerDesc: isOptimal ? 'The rider screen unfreezes instantly, while slow PDF receipt generation and bank transfers run safely in the background queue.' : 'Making passengers wait 15 seconds for PDF invoices to generate before unlocking the app causes terrible frustration.',
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 26: FAULT TOLERANCE & FAILURE HANDLING
    // =========================================================================
    renderFaultToleranceResilienceScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        this.renderOlaDispatchServer(200, 170, 'Core Ride Dispatch Service', 'healthy', '25%') +
        // Circuit Breaker Switch
        '<g transform="translate(330, 170)">' +
          '<rect x="-35" y="-18" width="70" height="36" rx="4" fill="#0f172a" stroke="' + (isOptimal ? '#22c55e' : '#ef4444') + '" stroke-width="1.5"/>' +
          '<text x="0" y="-3" text-anchor="middle" font-size="7" font-family="sans-serif" font-weight="900" fill="' + (isOptimal ? '#4ade80' : '#f87171') + '">' +
            (isOptimal ? 'CIRCUIT OPEN' : 'CIRCUIT CLOSED') +
          '</text>' +
          '<text x="0" y="8" text-anchor="middle" font-size="6" font-family="sans-serif" font-weight="700" fill="#94a3b8">' +
            (isOptimal ? 'ISOLATED' : 'CASCADE RISK') +
          '</text>' +
        '</g>' +
        this.renderOlaDispatchServer(460, 170, 'Dead SMS Marketing API', 'crash', '0%');

      return this.wrapScene({
        theme: 'storm',
        badgeText: isOptimal ? 'CIRCUIT BREAKER ISOLATES FAILURE' : 'FAULT TOLERANCE & RESILIENCE',
        badgeType: isOptimal ? 'solution' : 'problem',
        telemetryText: isOptimal ? 'Cab Dispatch: 100% Operational • Broken SMS Quarantined' : 'Cascading App Hang',
        footerIcon: '🛡️',
        footerTitle: isOptimal ? 'Resilient Fault Isolation' : 'Preventing Cascading Failures',
        footerDesc: isOptimal ? 'When the external SMS marketing server died, the circuit breaker tripped open so riders could still book cabs smoothly.' : 'Without failure isolation, one broken secondary service freezes the entire application.',
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 27: RATE LIMITING (BLOCKING BOT SPAM)
    // =========================================================================
    renderRateLimiterTurnstileScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        // Genuine rider phone
        this.renderPhoneClient(150, 190, 'Genuine Rider (1 req/sec)', 'ready') +
        // Rate Limiting Turnstile Gate
        '<g transform="translate(320, 160)">' +
          '<rect x="-60" y="-20" width="120" height="40" rx="6" fill="#0f172a" stroke="' + (isOptimal ? '#22c55e' : '#ef4444') + '" stroke-width="1.8"/>' +
          '<text x="0" y="-6" text-anchor="middle" font-size="7.5" font-family="sans-serif" font-weight="900" fill="' + (isOptimal ? '#4ade80' : '#f87171') + '">' +
            (isOptimal ? '🛡️ TOKEN BUCKET LIMITER' : 'UNPROTECTED GATE') +
          '</text>' +
          '<text x="0" y="7" text-anchor="middle" font-size="6.5" font-family="sans-serif" font-weight="700" fill="#94a3b8">' +
            (isOptimal ? 'Bot: 429 Too Many Requests' : 'Bot Flood Allowed') +
          '</text>' +
        '</g>' +
        this.renderOlaDispatchServer(480, 190, 'Ola Dispatch Gateway', isOptimal ? 'healthy' : 'crash', '20%');

      return this.wrapScene({
        theme: 'vault',
        badgeText: isOptimal ? 'RATE LIMITER BLOCKS MALICIOUS BOTS' : 'RATE LIMITING DEFENSE',
        badgeType: isOptimal ? 'solution' : 'problem',
        telemetryText: isOptimal ? 'Genuine Riders Pass • 10,000 Bot Spams Blocked' : 'Server Crashing Under Bot Spam',
        footerIcon: '🛑',
        footerTitle: isOptimal ? 'Fair Usage Enforced with Rate Limiting' : 'Bot Protection',
        footerDesc: isOptimal ? 'The Token Bucket algorithm allows real human riders through while rejecting spam bots with HTTP 429 Too Many Requests.' : 'Without rate limiting, malicious scripts can overwhelm servers with thousands of fake bookings.',
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 28: GEOSPATIAL SEARCH AND INDEXING (2KM RADIUS MATCHING)
    // =========================================================================
    renderGeospatialSpatialIndexingScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        // Radar circle on street around rider
        '<ellipse cx="320" cy="200" rx="140" ry="65" fill="rgba(56, 189, 248, 0.12)" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6,4" filter="url(#glowCyan)">' +
          '<animate attributeName="rx" values="130;150;130" dur="2s" repeatCount="indefinite"/>' +
          '<animate attributeName="ry" values="60;70;60" dur="2s" repeatCount="indefinite"/>' +
        '</ellipse>' +
        // Rider in center
        this.renderOlaRider(320, 200, 'matched', 'Rider (Indiranagar)') +
        // 3 Nearest Cabs within 2km radius
        this.renderOlaCab(240, 170, 'SE', 'dispatched', 'Cab #1 (350m)') +
        this.renderOlaCab(410, 180, 'SW', 'dispatched', 'Cab #2 (700m)') +
        this.renderOlaCab(280, 250, 'SE', 'dispatched', 'Cab #3 (1.1km)');

      return this.wrapScene({
        theme: 'night',
        badgeText: isOptimal ? '2KM GEOSPATIAL QUAD-TREE MATCH' : 'GEOSPATIAL SPATIAL SEARCH',
        badgeType: isOptimal ? 'solution' : 'problem',
        telemetryText: isOptimal ? 'Matched in 4ms • Only 2km Radius Searched' : 'Scanning 100,000 Cabs in State (Slow)',
        footerIcon: '📍',
        footerTitle: isOptimal ? 'Fast Spatial Indexing in 4ms' : 'Geospatial Search',
        footerDesc: isOptimal ? 'Spatial indexing carves the city into a grid, searching only the 2km cell around the rider to find the nearest cab in 4 milliseconds.' : 'Calculating distance to all 100,000 cabs in the entire state one by one takes over 40 seconds.',
        svgContent
      });
    },

    // =========================================================================
    // MAIN DISPATCHER: MAPS ALL SIMULATION TYPES TO SCENES
    // =========================================================================
    renderScene(simType, choiceMade, level) {
      switch (simType) {
        case 'ola_rush_hour':
          return this.renderOlaRushHourScene(choiceMade);
        case 'requirements_stress':
          return this.renderRequirementsStressScene(choiceMade);
        case 'client_server_clerk':
          return this.renderClientServerClerkScene(choiceMade);
        case 'supermarket_blueprint':
        case 'ola_system_blueprint':
          return this.renderSupermarketBlueprintScene(choiceMade);
        case 'networking_dns_ports':
          return this.renderNetworkingDnsPortsScene(choiceMade);
        case 'protocols_transport':
          return this.renderProtocolsTransportScene(choiceMade);
        case 'api_contracts_scanners':
          return this.renderApiContractsScannersScene(choiceMade);
        case 'auth_identity_verification':
        case 'authz_rbac_vault':
          return this.renderAuthIdentityVerificationScene(choiceMade);
        case 'database_polyglot':
        case 'database_selection':
        case 'schema_design':
          return this.renderDatabasePolyglotScene(choiceMade);
        case 'acid_atomic_vault':
          return this.renderAcidAtomicVaultScene(choiceMade);
        case 'database_sharding_ledgers':
          return this.renderDatabaseShardingLedgersScene(choiceMade);
        case 'db_replication_cluster':
          return this.renderDbReplicationClusterScene(choiceMade);
        case 'cap_network_partition':
          return this.renderCapNetworkPartitionScene(choiceMade);
        case 'oltp_olap_registers':
          return this.renderOltpOlapRegistersScene(choiceMade);
        case 'scaling_cluster_nodes':
        case 'scaling_strategies':
        case 'monolith_vs_microservices':
          return this.renderScalingClusterNodesScene(choiceMade);
        case 'load_balancer_traffic':
        case 'load_balancing':
          return this.renderLoadBalancerTrafficScene(choiceMade);
        case 'caching_sticky_notepad':
        case 'caching_strategy':
          return this.renderCachingStickyNotepadScene(choiceMade);
        case 'cdn_edge_kiosks':
        case 'cdn_distribution':
          return this.renderCdnEdgeKiosksScene(choiceMade);
        case 'message_queues_async':
        case 'message_queues':
          return this.renderMessageQueuesAsyncScene(choiceMade);
        case 'fault_tolerance_resilience':
        case 'fault_tolerance':
          return this.renderFaultToleranceResilienceScene(choiceMade);
        case 'rate_limiter_turnstile':
        case 'rate_limiting':
          return this.renderRateLimiterTurnstileScene(choiceMade);
        case 'geospatial_spatial_indexing':
          return this.renderGeospatialSpatialIndexingScene(choiceMade);
        default:
          return this.renderOlaRushHourScene(choiceMade);
      }
    }
  };

  return DioramaEngine;
});
