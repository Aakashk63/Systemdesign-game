/* === FILE: icons.js === */
/**
 * RideQuest - Professional SVG Icon & Illustration System
 * High-quality, consistent vector assets for System Design architectures,
 * mobile flows, mobility scenarios, and UI status states.
 */

var Icons;
(function (root, factory) {
  var instance = factory();
  Icons = instance;
  if (typeof module === 'object' && module.exports) {
    module.exports = instance;
  }
  if (root) {
    root.Icons = instance;
  }
  if (typeof window !== 'undefined') {
    window.Icons = instance;
  }
  if (typeof global !== 'undefined') {
    global.Icons = instance;
  }
})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this), function () {
  'use strict';

  function svg(content, { size = 20, viewBox = '0 0 24 24', color = 'currentColor', className = '', style = '' } = {}) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${viewBox}" fill="none" class="rq-icon ${className}" style="${style}" aria-hidden="true">${content}</svg>`;
  }

  function renderSvg(size, content, className = '') {
    return svg(content, { size, className });
  }

  const Icons = {
    // --- BRANDING & MOBILITY ---
    taxiCab({ size = 24, color = '#f39c12', className = '' } = {}) {
      return svg(`
        <path d="M5 16l1.2-5.4A3 3 0 0 1 9.1 8h5.8a3 3 0 0 1 2.9 2.6L19 16" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 16h16a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1z" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
        <circle cx="7" cy="19.5" r="1.5" fill="${color}"/>
        <circle cx="17" cy="19.5" r="1.5" fill="${color}"/>
        <rect x="9" y="5" width="6" height="3" rx="1" fill="${color}" stroke="${color}" stroke-width="1.5"/>
        <line x1="12" y1="5" x2="12" y2="8" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    car({ size = 24, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <path d="M4 14l1.5-6a2.5 2.5 0 0 1 2.4-1.9h8.2a2.5 2.5 0 0 1 2.4 1.9L20 14" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <rect x="3" y="14" width="18" height="5" rx="1.5" fill="${color}" fill-opacity="0.2" stroke="${color}" stroke-width="2"/>
        <circle cx="6.5" cy="18.5" r="1.5" fill="${color}"/>
        <circle cx="17.5" cy="18.5" r="1.5" fill="${color}"/>
        <line x1="8" y1="10" x2="16" y2="10" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    autoRickshaw({ size = 24, color = '#2e8b57', className = '' } = {}) {
      return svg(`
        <path d="M5 17h14v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2z" fill="${color}" fill-opacity="0.2" stroke="${color}" stroke-width="1.8"/>
        <path d="M6 17V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v9" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="11" y1="5" x2="11" y2="17" stroke="${color}" stroke-width="1.5"/>
        <circle cx="16" cy="18" r="2" fill="${color}"/>
        <circle cx="8" cy="18" r="2" fill="${color}"/>
        <path d="M3 13h3" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    bike({ size = 24, color = '#3498db', className = '' } = {}) {
      return svg(`
        <circle cx="6" cy="16" r="3" stroke="${color}" stroke-width="2"/>
        <circle cx="18" cy="16" r="3" stroke="${color}" stroke-width="2"/>
        <path d="M6 16l4-7h4l4 7M10 9l2 7M14 9l-2-4h-2" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="11" cy="4" r="1.2" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    driver({ size = 24, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <circle cx="12" cy="7" r="4" stroke="${color}" stroke-width="2"/>
        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <path d="M8 5.5a4 4 0 0 1 8 0" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <line x1="15" y1="5" x2="19" y2="5" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    passenger({ size = 24, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <circle cx="12" cy="8" r="4" stroke="${color}" stroke-width="2"/>
        <path d="M5 20v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    users({ size = 24, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <circle cx="9" cy="8" r="3.5" stroke="${color}" stroke-width="2"/>
        <path d="M3 19v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <path d="M15 6.5a3 3 0 0 1 0 5M18 19v-1a3.5 3.5 0 0 0-2.5-3.3" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    pinLocation({ size = 24, color = '#e74c3c', className = '' } = {}) {
      return svg(`
        <path d="M12 21s-6-5.8-6-10.5a6 6 0 1 1 12 0c0 4.7-6 10.5-6 10.5z" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="12" cy="10" r="2.5" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    routeNavigation({ size = 24, color = '#3498db', className = '' } = {}) {
      return svg(`
        <circle cx="6" cy="19" r="2.5" fill="${color}" stroke="${color}" stroke-width="1.5"/>
        <circle cx="18" cy="5" r="2.5" fill="#2ecc71" stroke="#2ecc71" stroke-width="1.5"/>
        <path d="M6 16.5V13a4 4 0 0 1 4-4h4a4 4 0 0 0 4-4V7.5" stroke="${color}" stroke-width="2.5" stroke-dasharray="3 3" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    trafficJam({ size = 24, color = '#e67e22', className = '' } = {}) {
      return svg(`
        <rect x="2" y="10" width="8" height="5" rx="1" stroke="${color}" stroke-width="1.8"/>
        <rect x="14" y="10" width="8" height="5" rx="1" stroke="${color}" stroke-width="1.8"/>
        <circle cx="4" cy="15" r="1.2" fill="${color}"/>
        <circle cx="8" cy="15" r="1.2" fill="${color}"/>
        <circle cx="16" cy="15" r="1.2" fill="${color}"/>
        <circle cx="20" cy="15" r="1.2" fill="${color}"/>
        <line x1="12" y1="3" x2="12" y2="7" stroke="#e74c3c" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="12" cy="5" r="3" stroke="#e74c3c" stroke-width="1.8"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    // --- INFRASTRUCTURE & ARCHITECTURE ---
    server({ size = 24, color = 'currentColor', status = 'ok', className = '' } = {}) {
      const ledColor = status === 'danger' ? '#e74c3c' : (status === 'warning' ? '#f39c12' : '#2ecc71');
      return svg(`
        <rect x="3" y="4" width="18" height="6" rx="2" fill="${color}" fill-opacity="0.1" stroke="${color}" stroke-width="1.8"/>
        <rect x="3" y="14" width="18" height="6" rx="2" fill="${color}" fill-opacity="0.1" stroke="${color}" stroke-width="1.8"/>
        <circle cx="6.5" cy="7" r="1.2" fill="${ledColor}"/>
        <circle cx="9.5" cy="7" r="1.2" fill="${ledColor}"/>
        <line x1="14" y1="7" x2="18" y2="7" stroke="${color}" stroke-width="1.6" stroke-linecap="round"/>
        <circle cx="6.5" cy="17" r="1.2" fill="${ledColor}"/>
        <circle cx="9.5" cy="17" r="1.2" fill="${ledColor}"/>
        <line x1="14" y1="17" x2="18" y2="17" stroke="${color}" stroke-width="1.6" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    serverCluster({ size = 24, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <rect x="2" y="3" width="9" height="5" rx="1.5" stroke="${color}" stroke-width="1.6" fill="${color}" fill-opacity="0.1"/>
        <rect x="13" y="3" width="9" height="5" rx="1.5" stroke="${color}" stroke-width="1.6" fill="${color}" fill-opacity="0.1"/>
        <rect x="2" y="10" width="9" height="5" rx="1.5" stroke="${color}" stroke-width="1.6" fill="${color}" fill-opacity="0.1"/>
        <rect x="13" y="10" width="9" height="5" rx="1.5" stroke="${color}" stroke-width="1.6" fill="${color}" fill-opacity="0.1"/>
        <circle cx="4" cy="5.5" r="0.8" fill="#2ecc71"/>
        <circle cx="15" cy="5.5" r="0.8" fill="#2ecc71"/>
        <circle cx="4" cy="12.5" r="0.8" fill="#2ecc71"/>
        <circle cx="15" cy="12.5" r="0.8" fill="#2ecc71"/>
        <path d="M6.5 15v3.5a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5V15" stroke="${color}" stroke-width="1.6"/>
        <line x1="12" y1="18" x2="12" y2="20" stroke="${color}" stroke-width="1.6"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    serverMelted({ size = 24, color = '#e74c3c', className = '' } = {}) {
      return svg(`
        <rect x="3" y="8" width="18" height="12" rx="2" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2"/>
        <circle cx="6.5" cy="12" r="1.2" fill="${color}"/>
        <circle cx="9.5" cy="12" r="1.2" fill="${color}"/>
        <line x1="13" y1="12" x2="18" y2="12" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
        <circle cx="6.5" cy="16" r="1.2" fill="${color}"/>
        <line x1="13" y1="16" x2="18" y2="16" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M7 6c1-2 2-2 3 0s2 2 3 0 2-2 3 0" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <path d="M10 2c.8-1 1.6-1 2.4 0" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    database({ size = 24, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <ellipse cx="12" cy="5" rx="8" ry="3" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="1.8"/>
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" stroke="${color}" stroke-width="1.8"/>
        <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="${color}" stroke-width="1.8"/>
        <line x1="7" y1="11" x2="7.01" y2="11" stroke="#2ecc71" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="7" y1="17" x2="7.01" y2="17" stroke="#2ecc71" stroke-width="2.5" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    databaseReplica({ size = 24, color = '#27ae60', className = '' } = {}) {
      return svg(`
        <ellipse cx="7" cy="6" rx="5" ry="2" stroke="${color}" stroke-width="1.6"/>
        <path d="M2 6v6c0 1.1 2.24 2 5 2s5-.9 5-2V6" stroke="${color}" stroke-width="1.6"/>
        <ellipse cx="17" cy="10" rx="5" ry="2" stroke="${color}" stroke-width="1.6"/>
        <path d="M12 10v6c0 1.1 2.24 2 5 2s5-.9 5-2v-6" stroke="${color}" stroke-width="1.6"/>
        <path d="M12 7h2a2 2 0 0 1 2 2v1" stroke="${color}" stroke-width="1.6" stroke-linecap="round"/>
        <polyline points="14 5 12 7 14 9" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    databaseShard({ size = 24, color = '#2980b9', className = '' } = {}) {
      return svg(`
        <rect x="2" y="5" width="6" height="14" rx="1.5" stroke="${color}" stroke-width="1.6" fill="${color}" fill-opacity="0.1"/>
        <rect x="9" y="5" width="6" height="14" rx="1.5" stroke="${color}" stroke-width="1.6" fill="${color}" fill-opacity="0.1"/>
        <rect x="16" y="5" width="6" height="14" rx="1.5" stroke="${color}" stroke-width="1.6" fill="${color}" fill-opacity="0.1"/>
        <line x1="3.5" y1="8" x2="6.5" y2="8" stroke="${color}" stroke-width="1.5"/>
        <line x1="10.5" y1="8" x2="13.5" y2="8" stroke="${color}" stroke-width="1.5"/>
        <line x1="17.5" y1="8" x2="20.5" y2="8" stroke="${color}" stroke-width="1.5"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    cache({ size = 24, color = '#e67e22', className = '' } = {}) {
      return svg(`
        <rect x="5" y="5" width="14" height="14" rx="2" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2"/>
        <path d="M9 9h6v6H9z" fill="${color}" fill-opacity="0.3"/>
        <path d="M3 9h2M3 15h2M19 9h2M19 15h2M9 3v2M15 3v2M9 19v2M15 19v2" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <path d="M12 9v6" stroke="${color}" stroke-width="1.5"/>
        <path d="M9 12h6" stroke="${color}" stroke-width="1.5"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    loadBalancer({ size = 24, color = '#8e44ad', className = '' } = {}) {
      return svg(`
        <rect x="2" y="9" width="6" height="6" rx="1.5" fill="${color}" stroke="${color}" stroke-width="1.8"/>
        <rect x="16" y="3" width="6" height="4" rx="1" stroke="${color}" stroke-width="1.6"/>
        <rect x="16" y="10" width="6" height="4" rx="1" stroke="${color}" stroke-width="1.6"/>
        <rect x="16" y="17" width="6" height="4" rx="1" stroke="${color}" stroke-width="1.6"/>
        <path d="M8 12h3a2 2 0 0 0 2-2V5h3" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M8 12h8" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M8 12h3a2 2 0 0 1 2 2v5h3" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    messageQueue({ size = 24, color = '#16a085', className = '' } = {}) {
      return svg(`
        <rect x="2" y="7" width="20" height="10" rx="3" fill="${color}" fill-opacity="0.1" stroke="${color}" stroke-width="1.8"/>
        <rect x="4" y="9.5" width="4" height="5" rx="1" fill="${color}" fill-opacity="0.4" stroke="${color}" stroke-width="1.2"/>
        <rect x="10" y="9.5" width="4" height="5" rx="1" fill="${color}" fill-opacity="0.4" stroke="${color}" stroke-width="1.2"/>
        <rect x="16" y="9.5" width="4" height="5" rx="1" fill="${color}" fill-opacity="0.4" stroke="${color}" stroke-width="1.2"/>
        <path d="M7 4l2 3-2 3" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    circuitBreaker({ size = 24, color = '#c0392b', state = 'open', className = '' } = {}) {
      return svg(`
        <circle cx="5" cy="12" r="2.5" fill="${color}" stroke="${color}" stroke-width="1.5"/>
        <circle cx="19" cy="12" r="2.5" fill="${color}" stroke="${color}" stroke-width="1.5"/>
        ${state === 'open' 
          ? `<line x1="5" y1="12" x2="14" y2="5" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
             <line x1="14" y1="12" x2="19" y2="12" stroke="${color}" stroke-width="2" stroke-dasharray="2 2"/>`
          : `<line x1="5" y1="12" x2="19" y2="12" stroke="#27ae60" stroke-width="2.5" stroke-linecap="round"/>`}
        <rect x="2" y="2" width="20" height="20" rx="3" stroke="${color}" stroke-width="1.4" stroke-opacity="0.3"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    cdnNode({ size = 24, color = '#2980b9', className = '' } = {}) {
      return svg(`
        <circle cx="12" cy="12" r="9" stroke="${color}" stroke-width="1.8"/>
        <ellipse cx="12" cy="12" rx="4" ry="9" stroke="${color}" stroke-width="1.5"/>
        <line x1="3" y1="12" x2="21" y2="12" stroke="${color}" stroke-width="1.5"/>
        <circle cx="12" cy="12" r="2" fill="#e74c3c"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    apiGateway({ size = 24, color = '#8e44ad', className = '' } = {}) {
      return svg(`
        <path d="M4 4h16v16H4z" fill="${color}" fill-opacity="0.1" stroke="${color}" stroke-width="1.8" rx="2"/>
        <path d="M4 9h16M4 15h16" stroke="${color}" stroke-width="1.5"/>
        <path d="M10 4v16M14 4v16" stroke="${color}" stroke-width="1.5"/>
        <circle cx="12" cy="12" r="2" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    networkPacket({ size = 24, color = '#3498db', className = '' } = {}) {
      return svg(`
        <polygon points="12 2 22 8 22 16 12 22 2 16 2 8 12 2" fill="${color}" fill-opacity="0.2" stroke="${color}" stroke-width="1.8" stroke-linejoin="round"/>
        <line x1="12" y1="2" x2="12" y2="12" stroke="${color}" stroke-width="1.5"/>
        <line x1="12" y1="12" x2="22" y2="8" stroke="${color}" stroke-width="1.5"/>
        <line x1="12" y1="12" x2="2" y2="8" stroke="${color}" stroke-width="1.5"/>
        <circle cx="12" cy="12" r="1.5" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    // --- MOBILE & AUTHENTICATION ---
    phone({ size = 24, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <rect x="5" y="2" width="14" height="20" rx="3" fill="${color}" fill-opacity="0.08" stroke="${color}" stroke-width="1.8"/>
        <line x1="10" y1="5" x2="14" y2="5" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="12" cy="18.5" r="1" fill="${color}"/>
        <rect x="7" y="7" width="10" height="9" rx="1" fill="${color}" fill-opacity="0.15"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    shield({ size = 24, color = '#27ae60', className = '' } = {}) {
      return svg(`
        <path d="M12 3s8 3 8 9c0 5.5-4.5 8.5-8 10-3.5-1.5-8-4.5-8-10 0-6 8-9 8-9z" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    shieldLock({ size = 24, color = '#27ae60', className = '' } = {}) {
      return svg(`
        <path d="M12 2s7 2.6 7 8c0 5-4 7.7-7 9-3-1.3-7-4-7-9 0-5.4 7-8 7-8z" fill="${color}" fill-opacity="0.12" stroke="${color}" stroke-width="1.8"/>
        <rect x="9.5" y="11" width="5" height="4" rx="1" fill="${color}"/>
        <path d="M10.5 11v-1.5a1.5 1.5 0 0 1 3 0V11" stroke="${color}" stroke-width="1.4" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    shieldCheck({ size = 24, color = '#27ae60', className = '' } = {}) {
      return svg(`
        <path d="M12 2s7 2.6 7 8c0 5-4 7.7-7 9-3-1.3-7-4-7-9 0-5.4 7-8 7-8z" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="1.8"/>
        <polyline points="9 11 11.5 13.5 15.5 8.5" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    shieldAlert({ size = 24, color = '#e74c3c', className = '' } = {}) {
      return svg(`
        <path d="M12 2s7 2.6 7 8c0 5-4 7.7-7 9-3-1.3-7-4-7-9 0-5.4 7-8 7-8z" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="1.8"/>
        <line x1="12" y1="8" x2="12" y2="12" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <circle cx="12" cy="15" r="1" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    lock({ size = 24, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <rect x="5" y="11" width="14" height="10" rx="2" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2"/>
        <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <circle cx="12" cy="16" r="1.5" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    unlock({ size = 24, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <rect x="5" y="11" width="14" height="10" rx="2" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2"/>
        <path d="M8 11V7a4 4 0 0 1 7.5-2" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <circle cx="12" cy="16" r="1.5" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    key({ size = 24, color = '#f39c12', className = '' } = {}) {
      return svg(`
        <circle cx="7.5" cy="15.5" r="4.5" stroke="${color}" stroke-width="2"/>
        <path d="M11 12l8.5-8.5a1.5 1.5 0 0 1 2.1 0l.9.9a1.5 1.5 0 0 1 0 2.1L21 8l-2 2-2-2" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="7.5" cy="15.5" r="1.5" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    otpCode({ size = 24, color = '#27ae60', className = '' } = {}) {
      return svg(`
        <rect x="3" y="5" width="18" height="14" rx="3" stroke="${color}" stroke-width="1.8" fill="${color}" fill-opacity="0.1"/>
        <circle cx="7" cy="12" r="1.5" fill="${color}"/>
        <circle cx="10.5" cy="12" r="1.5" fill="${color}"/>
        <circle cx="14" cy="12" r="1.5" fill="${color}"/>
        <circle cx="17.5" cy="12" r="1.5" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    jwtToken({ size = 24, color = '#9b59b6', className = '' } = {}) {
      return svg(`
        <path d="M12 2l8 4.5v11L12 22 4 17.5v-11L12 2z" stroke="${color}" stroke-width="1.8" fill="${color}" fill-opacity="0.12"/>
        <path d="M8 9h8M8 12h8M8 15h5" stroke="${color}" stroke-width="1.6" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    // --- STATUS, ALERTS & FEEDBACK ---
    check({ size = 20, color = '#27ae60', className = '' } = {}) {
      return svg(`
        <polyline points="4 12 9 17 20 6" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    checkCircle({ size = 20, color = '#27ae60', className = '' } = {}) {
      return svg(`
        <circle cx="12" cy="12" r="10" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2"/>
        <polyline points="7.5 12 10.5 15 16.5 9" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    alertTriangle({ size = 20, color = '#f39c12', className = '' } = {}) {
      return svg(`
        <path d="M10.3 3.6a2 2 0 0 1 3.4 0l8.1 14a2 2 0 0 1-1.7 3H3.9a2 2 0 0 1-1.7-3l8.1-14z" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
        <line x1="12" y1="9" x2="12" y2="13" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <circle cx="12" cy="16.5" r="1" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    alertCircle({ size = 20, color = '#f39c12', className = '' } = {}) {
      return svg(`
        <circle cx="12" cy="12" r="10" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2"/>
        <line x1="12" y1="7" x2="12" y2="12" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
        <circle cx="12" cy="16" r="1.2" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    errorCircle({ size = 20, color = '#e74c3c', className = '' } = {}) {
      return svg(`
        <circle cx="12" cy="12" r="10" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2"/>
        <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
        <line x1="15.5" y1="8.5" x2="8.5" y2="15.5" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    fire({ size = 20, color = '#e74c3c', className = '' } = {}) {
      return svg(`
        <path d="M12 2c.5 3 2.5 4.5 4 6 1.8 1.8 3 4.2 3 7a7 7 0 1 1-14 0c0-3.3 1.8-6.1 4.5-8.2.5 1.5 1.5 2.7 2.5 3.2 0-3 1.5-6 0-8z" fill="${color}" fill-opacity="0.25" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
        <path d="M12 14a2.5 2.5 0 0 0-2.5 2.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-1.4-1.1-2.5-2.5-2.5z" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    lightning({ size = 20, color = '#f39c12', className = '' } = {}) {
      return svg(`
        <polygon points="13 2 4 14 11 14 9 22 20 10 13 10 13 2" fill="${color}" stroke="${color}" stroke-width="1.8" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    sparkle({ size = 20, color = '#f1c40f', className = '' } = {}) {
      return svg(`
        <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" fill="${color}" stroke="${color}" stroke-width="1.5" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    lightbulb({ size = 20, color = '#f39c12', className = '' } = {}) {
      return svg(`
        <path d="M9 18h6M10 21h4" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <path d="M9 14.5A7 7 0 1 1 15 14.5c-.8.8-1.5 2-1.5 3.5h-3c0-1.5-.7-2.7-1.5-3.5z" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="1.8" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    clock({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <circle cx="12" cy="12" r="9" stroke="${color}" stroke-width="2"/>
        <polyline points="12 7 12 12 15.5 14" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    search({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <circle cx="11" cy="11" r="7" stroke="${color}" stroke-width="2"/>
        <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    refresh({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <path d="M21 12a9 9 0 1 1-2.6-6.4L21 8" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <polyline points="21 3 21 8 16 8" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    arrowRight({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <line x1="4" y1="12" x2="19" y2="12" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
        <polyline points="13 6 19 12 13 18" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    close({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <line x1="18" y1="6" x2="6" y2="18" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
        <line x1="6" y1="6" x2="18" y2="18" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    // --- CONTROLS, CODEX & MODES ---
    book({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="${color}" fill-opacity="0.1" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
        <line x1="9" y1="7" x2="15" y2="7" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="9" y1="11" x2="15" y2="11" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    academicCap({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <polygon points="12 3 1 9 12 15 23 9 12 3" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
        <path d="M5 11.5v5c0 2 3.1 3.5 7 3.5s7-1.5 7-3.5v-5" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <line x1="23" y1="9" x2="23" y2="16" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    volumeOn({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="${color}" fill-opacity="0.2" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
        <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    volumeMute({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="${color}" fill-opacity="0.2" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
        <line x1="16" y1="9" x2="22" y2="15" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
        <line x1="22" y1="9" x2="16" y2="15" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    target({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <circle cx="12" cy="12" r="9" stroke="${color}" stroke-width="2"/>
        <circle cx="12" cy="12" r="5" stroke="${color}" stroke-width="1.8"/>
        <circle cx="12" cy="12" r="2" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    citySkyline({ size = 24, color = '#2c3e50', className = '' } = {}) {
      return svg(`
        <rect x="2" y="8" width="6" height="14" rx="1" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="1.8"/>
        <rect x="9" y="3" width="7" height="19" rx="1" fill="${color}" fill-opacity="0.2" stroke="${color}" stroke-width="1.8"/>
        <rect x="17" y="11" width="5" height="11" rx="1" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="1.8"/>
        <line x1="4.5" y1="12" x2="5.5" y2="12" stroke="${color}" stroke-width="1.5"/>
        <line x1="4.5" y1="16" x2="5.5" y2="16" stroke="${color}" stroke-width="1.5"/>
        <line x1="11.5" y1="7" x2="13.5" y2="7" stroke="${color}" stroke-width="1.5"/>
        <line x1="11.5" y1="11" x2="13.5" y2="11" stroke="${color}" stroke-width="1.5"/>
        <line x1="11.5" y1="15" x2="13.5" y2="15" stroke="${color}" stroke-width="1.5"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    puzzle({ size = 24, color = '#27ae60', className = '' } = {}) {
      return svg(`
        <path d="M19 11h-2a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2h-2a2 2 0 0 1-2-2 2 2 0 0 0-4 0 2 2 0 0 1-2 2H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 0 0-4z" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="1.8" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    gamepad({ size = 24, color = '#8e44ad', className = '' } = {}) {
      return svg(`
        <rect x="2" y="6" width="20" height="12" rx="6" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="1.8"/>
        <line x1="6" y1="12" x2="10" y2="12" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <line x1="8" y1="10" x2="8" y2="14" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <circle cx="15.5" cy="10.5" r="1.2" fill="${color}"/>
        <circle cx="18" cy="13" r="1.2" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    microscope({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <path d="M6 18h12M10 21h4" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <circle cx="12" cy="7" r="3" stroke="${color}" stroke-width="1.8"/>
        <path d="M12 10v4M9 14h6" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M7 18a5 5 0 0 1 10 0" stroke="${color}" stroke-width="2"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    crown({ size = 28, color = '#f39c12', className = '' } = {}) {
      return svg(`
        <polygon points="2 7 6 18 18 18 22 7 15 12 12 4 9 12 2 7" fill="${color}" fill-opacity="0.25" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
        <circle cx="2" cy="6" r="1.5" fill="${color}"/>
        <circle cx="12" cy="3" r="1.5" fill="${color}"/>
        <circle cx="22" cy="6" r="1.5" fill="${color}"/>
        <circle cx="12" cy="14" r="1.5" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    trophy({ size = 28, color = '#f39c12', className = '' } = {}) {
      return svg(`
        <path d="M6 4h12v4a6 6 0 0 1-12 0V4z" fill="${color}" fill-opacity="0.2" stroke="${color}" stroke-width="2"/>
        <path d="M6 6H3a2 2 0 0 0-2 2v1a4 4 0 0 0 4 4h1M18 6h3a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4h-1" stroke="${color}" stroke-width="1.8"/>
        <path d="M12 14v4M8 21h8" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    // --- ARCHITECT CHARACTER AVATAR (ARIA) ---
    architectAvatar({ size = 44, mood = 'thinking', className = '' } = {}) {
      return `
        <div class="avatar-svg-wrapper ${mood}" style="width: ${size}px; height: ${size}px; display: inline-flex; align-items: center; justify-content: center;">
          <svg viewBox="0 0 48 48" width="${size}" height="${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="22" fill="#fdf6e7" stroke="#b87b49" stroke-width="2.5"/>
            <!-- Hair back -->
            <path d="M14 26c-2-7 1-16 10-16s12 9 10 16" fill="#4a2e18"/>
            <!-- Neck & Collar -->
            <path d="M21 34h6v6h-6z" fill="#f5d0a9"/>
            <path d="M13 44c1-6 5-8 11-8s10 2 11 8" fill="#2d527c"/>
            <path d="M24 37l-3 4h6l-3-4z" fill="#ffffff"/>
            <!-- Face -->
            <circle cx="24" cy="24" r="10" fill="#fcdbb5"/>
            <!-- Hair bangs -->
            <path d="M15 20c3-5 8-7 14-6 2 0 4 1 5 3-2-2-6-3-9-2s-6 3-10 5z" fill="#663e21"/>
            <!-- Glasses -->
            <rect x="17" y="21" width="5.5" height="4.5" rx="1.5" stroke="#222" stroke-width="1.5" fill="rgba(255,255,255,0.4)"/>
            <rect x="25.5" y="21" width="5.5" height="4.5" rx="1.5" stroke="#222" stroke-width="1.5" fill="rgba(255,255,255,0.4)"/>
            <line x1="22.5" y1="23" x2="25.5" y2="23" stroke="#222" stroke-width="1.5"/>
            <!-- Eyes -->
            <circle cx="19.7" cy="23.2" r="1" fill="#222"/>
            <circle cx="28.2" cy="23.2" r="1" fill="#222"/>
            <!-- Mouth based on mood -->
            ${mood === 'happy' || mood === 'celebrating' 
              ? `<path d="M21 28.5c1 1.5 5 1.5 6 0" stroke="#a04030" stroke-width="1.6" stroke-linecap="round"/>`
              : (mood === 'worried' || mood === 'danger'
              ? `<path d="M21 29c1.5-.8 4.5-.8 6 0" stroke="#a04030" stroke-width="1.6" stroke-linecap="round"/>`
              : `<line x1="21.5" y1="28.5" x2="26.5" y2="28.5" stroke="#a04030" stroke-width="1.6" stroke-linecap="round"/>`)}
          </svg>
        </div>
      `;
    },

    creditCard({ size = 20, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="${color}" stroke-width="1.8"/>
        <line x1="2" y1="10" x2="22" y2="10" stroke="${color}" stroke-width="1.8"/>
        <line x1="6" y1="15" x2="10" y2="15" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    wallet({ size = 20, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M21 7H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" stroke="${color}" stroke-width="1.8"/>
        <path d="M16 13h4v4h-4a2 2 0 0 1-2-2 2 2 0 0 1 2-2z" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    cash({ size = 20, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <rect x="2" y="6" width="20" height="12" rx="2" stroke="${color}" stroke-width="1.8"/>
        <circle cx="12" cy="12" r="2.5" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    star({ size = 16, color = '#f1c40f', filled = true, className = '' } = {}) {
      return renderSvg(size, `
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="${filled ? color : 'none'}" stroke="${color}" stroke-width="1.5"/>
      `, className);
    },

    satellite({ size = 20, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M13 7 9 3 5 7l4 4" stroke="${color}" stroke-width="1.8"/>
        <path d="M17 11l4 4-4 4-4-4" stroke="${color}" stroke-width="1.8"/>
        <path d="m8 12 4 4" stroke="${color}" stroke-width="1.8"/>
        <path d="m14 6 4 4" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    phoneCall({ size = 18, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    messageChat({ size = 18, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    download({ size = 18, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      `, className);
    },

    share({ size = 18, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <circle cx="18" cy="5" r="3" stroke="${color}" stroke-width="1.8"/>
        <circle cx="6" cy="12" r="3" stroke="${color}" stroke-width="1.8"/>
        <circle cx="18" cy="19" r="3" stroke="${color}" stroke-width="1.8"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="${color}" stroke-width="1.8"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    receipt({ size = 20, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M4 2v20l3-2 3 2 3-2 3 2 3-2 3 2V2l-3 2-3-2-3 2-3-2-3 2-3-2zM8 8h8M8 12h8M8 16h5" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    home({ size = 18, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="${color}" stroke-width="1.8"/>
        <polyline points="9 22 9 12 15 12 15 22" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    building({ size = 18, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <rect x="4" y="2" width="16" height="20" rx="2" stroke="${color}" stroke-width="1.8"/>
        <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    history({ size = 18, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M12 8v4l3 3M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    user({ size = 18, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="${color}" stroke-width="1.8"/>
        <circle cx="12" cy="7" r="4" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    signal({ size = 16, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M2 20h2M7 20v-4M12 20v-8M17 20v-12M22 20v-16" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      `, className);
    },

    battery({ size = 16, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <rect x="1" y="6" width="18" height="12" rx="2" stroke="${color}" stroke-width="1.8"/>
        <line x1="23" y1="10" x2="23" y2="14" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <rect x="4" y="9" width="11" height="6" fill="${color}" rx="1"/>
      `, className);
    },

    rocket({ size = 20, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke="${color}" stroke-width="1.8"/>
        <circle cx="15.5" cy="8.5" r="1.5" fill="${color}"/>
      `, className);
    },

    dot({ size = 14, color = '#27ae60', className = '' } = {}) {
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" class="rq-icon ${className}"><circle cx="12" cy="12" r="8"/></svg>`;
    },

    scale(opts) { return this.loadBalancer(opts); },
    zap(opts) { return this.lightning(opts); },
    grid(opts) { return this.databaseShard(opts); },
    layers(opts) { return this.databaseReplica(opts); },
    gitMerge(opts) { return this.apiGateway(opts); },
    box(opts) { return this.server(opts); },
    activity(opts) { return this.networkPacket(opts); },
    globe(opts) { return this.cdnNode(opts); }
  };

  return Icons;
});


/* === FILE: sound.js === */
/**
 * RideQuest - Web Audio API Procedural Sound Engine
 * Zero external audio files required! 100% synthesized in-browser.
 */
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem('ridequest_muted') === 'true';
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('ridequest_muted', this.muted);
    return this.muted;
  }

  playTone(freq, type, duration, gainStart = 0.15, gainEnd = 0.001) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainStart, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(gainEnd, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio playback error', e);
    }
  }

  click() {
    this.playTone(800, 'sine', 0.06, 0.1, 0.001);
  }

  hover() {
    this.playTone(450, 'triangle', 0.04, 0.03, 0.001);
  }

  select() {
    this.playTone(520, 'sine', 0.09, 0.15, 0.001);
    setTimeout(() => this.playTone(680, 'sine', 0.12, 0.12, 0.001), 60);
  }

  success() {
    if (this.muted) return;
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'sine', 0.28, 0.18, 0.001);
      }, idx * 80);
    });
  }

  levelUp() {
    if (this.muted) return;
    this.init();
    const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51]; // A major arpeggio
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'triangle', 0.35, 0.22, 0.001);
      }, idx * 75);
    });
  }

  overload() {
    if (this.muted) return;
    this.init();
    this.playTone(180, 'sawtooth', 0.3, 0.2, 0.01);
    setTimeout(() => this.playTone(140, 'sawtooth', 0.35, 0.25, 0.01), 100);
  }

  packet() {
    this.playTone(1200 + Math.random() * 400, 'sine', 0.03, 0.03, 0.001);
  }

  whoosh() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    } catch (e) {}
  }
}

window.soundEngine = new SoundEngine();


/* === FILE: levels-data.js === */
/**
 * RideQuest - System Design Learning Game: Levels Data
 * Single Source of Truth based on "System_Design_Levels_Complete (1).pdf"
 * 
 * Complete original content preserved from the supplied PDF source.
 * Strict Curriculum Flow: SNO 1 through 9.
 */

const STAGES = [
  { id: 1, name: "Stage 1: System Foundations", icon: "🏛️", levels: [1, 2] },
  { id: 2, name: "Stage 2: Networking & Connectivity", icon: "🌐", levels: [3, 4] },
  { id: 3, name: "Stage 3: Communication & Security", icon: "🛡️", levels: [5, 6, 7] },
  { id: 4, name: "Stage 4: Data Architecture", icon: "💾", levels: [8, 9] },
  { id: 5, name: "Stage 5: Caching & Storage", icon: "⚡", levels: [10, 11, 12, 13] },
  { id: 6, name: "Stage 6: Content & Delivery", icon: "🌍", levels: [14] },
  { id: 7, name: "Stage 7: Scalability & Traffic", icon: "🚀", levels: [15, 16, 17] },
  { id: 8, name: "Stage 8: Distributed Data & Sharding", icon: "🗄️", levels: [18] },
  { id: 9, name: "Stage 9: Distributed Systems Architecture", icon: "🌐", levels: [19, 20, 21, 22, 23] },
  { id: 10, name: "Stage 10: Asynchronous Messaging & Streaming", icon: "📨", levels: [24, 25, 26] },
  { id: 11, name: "Stage 11: Real-Time Telemetry & Search", icon: "📍", levels: [27, 28] }
];

const LEVELS = [
  {
    "id": 1,
    "stage": 1,
    "sno": 1,
    "topic": "Requirements Engineering",
    "concept": "Requirements Engineering: Functional vs. Non-Functional Requirements (FR & NFR)",
    "title": "Level 1: The Blueprint & Scope Framing",
    "time": "Day 1 \u2014 Construction Kickoff",
    "usersCount": "5,000 Holiday Shoppers Capacity",
    "topicHint": "Blueprint & Scope Framing",
    "situation": "You are standing in the middle of a massive, muddy, empty field in your rubber boots. The construction crew has arrived with 10 cement mixers, stacks of steel rods, and 50 eager workers with shovels. The site manager walks up to you, taps his hard hat, and asks: \"Boss, the trucks are burning diesel just standing here. Do we pour the concrete right now, or what is the game plan?\"",
    "problem": "Before touching building materials, an architect must define what the store actually does day-to-day versus how durable, safe, and fast the building operates. What is your game plan?",
    "simulationType": "supermarket_blueprint",
    "choices": [
      {
        "id": "A",
        "text": "Pour the concrete immediately! We will figure out where to place the bakery, cold storage, and cash registers while the walls are going up.",
        "isOptimal": false,
        "consequenceText": "The workers cheer and pour tons of wet concrete across the ground. Two weeks later, the walls are solid, but moving day turns into a disaster. The refrigerated delivery truck arrives with 800 tubs of premium ice cream and dairy milk. The driver asks where the high-voltage commercial freezer outlets are. You look at the walls in horror: there are no heavy electric lines installed. Within hours, the ice cream melts into sticky soup across the floor. To add insult to injury, the front entrance is so narrow that two shopping carts cannot pass each other without jamming. You are forced to hire a demolition crew to jackhammer the concrete, smashing your budget before selling a single tomato.",
        "resultState": "unplanned_gridlock",
        "statImpact": {
          "latency": "Frozen",
          "capacity": "0 Shoppers",
          "risk": "Operational Gridlock",
          "cost": "Demolition Deficit"
        },
        "whatHappened": {
          "helped": "You poured concrete quickly without spending time on paperwork.",
          "bottleneck": "Without requirements scoping, you built without high-voltage power lines or cart lanes, forcing expensive demolition!",
          "reflectionQuestion": "Can any system function if you build before scoping Functional and Non-Functional Requirements?"
        }
      },
      {
        "id": "B",
        "text": "Stop the trucks. Give me a clipboard. First, list every single department we need (groceries, billing, parking) and specify the structural rules (floors holding 5,000 shoppers, fire exits, and heavy freezer power lines).",
        "isOptimal": true,
        "consequenceText": "You sit down on an overturned crate, pull out a marker, and methodically map out the floor plan. You designate dedicated zones for vegetables, dry groceries, frozen meats, and checkout bays. You calculate that the building must withstand heavy monsoon rains, sustain 5,000 customers during holiday festivals, and house fire suppression sprinklers. The builders pour the foundation with exact conduits for plumbing, drainage, and electricity. When the doors open, foot traffic flows effortlessly, freezers run ice-cold, and the safety inspector stamps \"PASSED\" on your building license.",
        "resultState": "blueprint_success",
        "statImpact": {
          "latency": "Under 100ms",
          "capacity": "5,000 Shoppers (99.99% Uptime)",
          "risk": "Zero Downtime",
          "cost": "On Budget"
        },
        "successSummary": "By separating Functional Requirements (what the store does) from Non-Functional Requirements (how durable and fast it runs), construction succeeds without rework!"
      },
      {
        "id": "C",
        "text": "Just build one giant four-walled empty hall with a tin roof. We can throw everything inside later without dividers.",
        "isOptimal": false,
        "consequenceText": "The crew puts up a giant open tin shed in record time. It looks cheap and spacious, but daily operations become an absolute circus. You placed the fresh fish counter right next to the luxury perfume display; by afternoon, the expensive imported perfumes smell like raw sardines. Heavy electrical cables for meat cutters are stretched openly across the walkway because there are no wall dividers, causing three shoppers to trip and fall. The echo inside the giant metal shed is so deafening that cashiers cannot hear what customers are ordering. The city safety officer arrives, blows a whistle, and slaps a bright orange \"UNSAFE / BUSINESS SHUT DOWN\" sticker on the rolling shutter.",
        "resultState": "warehouse_invasion",
        "statImpact": {
          "latency": "Deafening",
          "capacity": "Shut Down",
          "risk": "Severe Safety Hazard",
          "cost": "Total Shutdown"
        },
        "whatHappened": {
          "helped": "Construction was fast and required no interior partition planning.",
          "bottleneck": "Zero architectural boundaries caused fish odors to ruin perfume, tripping hazards on walkways, and a city shutdown!",
          "reflectionQuestion": "Why do large software systems require clear module boundaries instead of throwing everything into one giant monolith?"
        }
      }
    ],
    "discovery": {
      "badge": "Requirements Engineering: Functional vs. Non-Functional Requirements",
      "tagline": "Separating what the system does from how durably and quickly it performs",
      "simpleMeaning": "Requirements Engineering divides software architecture into two mandatory pillars: Functional Requirements (FR) defining what the system DOES, and Non-Functional Requirements (NFR) defining how the system PERFORMS.",
      "analogy": "Before touching building materials, an architect separates what the store does day-to-day (selling groceries, processing bills) from how durable and safe the building operates (floor load ratings, fire exit widths, freezer power lines).",
      "howItWorks": [
        "1. Functional Requirements (FR) \u2014 What the system DOES: User registration, product search, cart management, payment processing, and inventory status tracking.",
        "2. Non-Functional Requirements (NFR) \u2014 Latency & Speed: Search queries must return product records in under 100 milliseconds.",
        "3. Non-Functional Requirements (NFR) \u2014 Availability & Scalability: 99.99% uptime (less than 52 mins downtime/year), 10x traffic surge scaling, and encrypted payment transactions."
      ],
      "whyItMatters": "Building without requirements scoping leads to catastrophic rework, melted inventory, security vulnerabilities, or complete system collapse under surge traffic.",
      "visualExplanation": "Functional Needs (Features & User Actions) + Non-Functional Limits (Speed, Scalability, 99.99% Uptime) \u2500\u2500\u25ba Solid Production Architecture",
      "contrast": {
        "termA": "Functional Requirements (FR)",
        "descA": "The direct capabilities provided to users: product search, cart management, checkout, and inventory tracking.",
        "termB": "Non-Functional Requirements (NFR)",
        "descB": "Operational qualities: sub-100ms latency, 99.99% uptime, 10x scalability, encryption, and data consistency."
      },
      "advancedInfo": "Non-Functional Requirements dictate infrastructure sizing and SLA/SLO boundaries. Neglecting NFRs like concurrency and write durability leads to fatal crashes even if all functional code works in development.",
      "teacherNotes": {
        "concept": "Requirements Engineering, FR vs NFR, SLAs & SLOs",
        "experience": "Students experienced why physical supermarkets require electrical conduits and floor ratings before pouring concrete.",
        "realWorld": "Amazon and Flipkart engineer their platforms to sustain 10x to 50x surge traffic during festive sales without dropping below 99.99% availability.",
        "question": "What happens to an e-commerce platform if all payment buttons work (FR) but pages take 8 seconds to load (NFR)?"
      }
    },
    "youtubeUrl": "https://youtu.be/ChvIjjBK8FQ?si=AfMC9-06gJz1NoQI",
    "videoId": "ChvIjjBK8FQ",
    "videoTitle": "Introduction to System Design (Tamil)"
  },
  {
    "id": 2,
    "stage": 1,
    "sno": 2,
    "topic": "System Architecture",
    "concept": "Client\u2013Server Architecture: Decoupling Requesters from Central Data Stores",
    "title": "Level 2: The Front Counter & Back-Office Vault",
    "time": "Day 14 \u2014 Official Store Opening",
    "usersCount": "Active Shoppers at Counter",
    "topicHint": "Client\u2013Server Architecture",
    "situation": "Your supermarket is officially open. The shelves are neatly stocked, the floors are sparkling, and the lights are bright. A customer walks through the front door, picks up a can of imported coffee, looks at it, and asks: \"Excuse me, how much does this coffee cost, and do you have 12 more cans in the back?\" Deep inside the back of your building is a locked underground vault containing your master financial ledgers, wholesale supplier purchase prices, employee payroll sheets, and total inventory logs.",
    "problem": "How should the customer query product prices and complete purchases without risking store records or exposing private company files?",
    "simulationType": "client_server_clerk",
    "choices": [
      {
        "id": "A",
        "text": "Tell the customer to walk into the private back-office vault, open the master filing cabinet, and search through the company ledgers himself.",
        "isOptimal": false,
        "consequenceText": "The customer happily strolls into your private vault. Soon, fifteen other shoppers wander back there too. While looking for coffee prices, one customer accidentally knocks over a cup of hot tea onto the primary accounting journal, dissolving months of financial records. Another customer spots your secret wholesale purchase prices, realizes your profit margins, and demands a 50% discount at the top of his lungs. An opportunistic thief casually pockets a confidential binder containing employee bank details. Your private business records are utterly corrupted and compromised.",
        "resultState": "vault_compromised",
        "statImpact": {
          "latency": "Chaotic",
          "capacity": "Compromised",
          "risk": "Critical Data Leak",
          "cost": "Catastrophic"
        },
        "whatHappened": {
          "helped": "Store staff did not have to stop what they were doing to answer customer questions.",
          "bottleneck": "Allowing untrusted clients direct access to internal storage destroyed ledger integrity and leaked confidential secrets!",
          "reflectionQuestion": "Why should a web browser or mobile client NEVER connect directly to a backend database?"
        }
      },
      {
        "id": "B",
        "text": "Place a store clerk behind an inquiry desk at the entrance. The customer asks the clerk, the clerk looks up the item in the terminal, and tells the customer the price and stock.",
        "isOptimal": true,
        "consequenceText": "The shopper walks up to the clean inquiry desk. He asks: \"Can I get the price and stock count for this coffee?\" The clerk remains in front of the secure partition, enters the product barcode into the terminal, reads the isolated stock number, and responds: \"That is Rs. 350, and we have 24 cans in stock.\" The customer gets the exact answer in three seconds. The private vault stays locked, safe, and untouched.",
        "resultState": "client_server_success",
        "statImpact": {
          "latency": "3 Seconds Fast",
          "capacity": "Unlimited Shoppers",
          "risk": "Protected Vault",
          "cost": "Secure & Scalable"
        },
        "successSummary": "A clean physical boundary was created: the shopper (Client) interacts exclusively with a trained intermediary (Server), keeping private records (Database) safe!"
      },
      {
        "id": "C",
        "text": "Print 5,000 photocopies of all internal company bank and ledger books, and leave stacks of them at the front door for shoppers to read.",
        "isOptimal": false,
        "consequenceText": "Leaving entire copies of your internal ledgers at the front door creates immediate chaos. Competitors from down the street walk in, scoop up the notebooks, and discover your wholesale suppliers and contract terms. Customers get overwhelmed trying to decode 300 pages of confusing ledger numbers just to find the price of a bar of soap. Within hours, your proprietary trade secrets are leaked all over town.",
        "resultState": "leak_disaster",
        "statImpact": {
          "latency": "Overwhelming",
          "capacity": "Confused",
          "risk": "Proprietary Trade Secrets Leaked",
          "cost": "Massive Business Loss"
        },
        "whatHappened": {
          "helped": "Shoppers did not have to wait in line to speak to a clerk.",
          "bottleneck": "Distributing raw database dumps to client devices leaked trade secrets to competitors and confused everyday shoppers!",
          "reflectionQuestion": "What security risks emerge when client-side applications download full internal backend datasets?"
        }
      }
    ],
    "discovery": {
      "badge": "Client\u2013Server Architecture: Request & Response Model",
      "tagline": "Creating a clean boundary between user interface clients and protected central data vaults",
      "simpleMeaning": "Client\u2013Server Architecture separates the system into Requesters (Clients) and Providers (Servers). The client renders the UI and captures user intent, while the server enforces validation, executes business logic, and mediates access to data.",
      "analogy": "The shopper never enters the private record room; they interact exclusively through a designated desk with a trained clerk who retrieves verified answers safely.",
      "howItWorks": [
        "1. Step 1 (Request): Client / Shopper sends a structured Request (\"Price of Coffee?\") to the Server / Clerk.",
        "2. Step 2 (Server Processing): Server / Clerk validates permissions, executes business logic, and checks the protected Database / Vault.",
        "3. Step 3 (Response): Server / Clerk sends a structured Response (\"Rs. 350, In Stock\") containing status codes and payload back to the Client / Shopper."
      ],
      "whyItMatters": "Decoupling clients from servers protects internal databases from direct tampering, centralizes security, and allows updating backend logic without modifying client devices.",
      "visualExplanation": "Client (App/Browser) \u2500\u2500[Request: Price?]\u2500\u2500\u25ba Server (Clerk/Validation) \u2500\u2500\u25ba Database (Vault) \u2500\u2500\u25ba Server \u2500\u2500[Response: Rs 350]\u2500\u2500\u25ba Client",
      "contrast": {
        "termA": "Client (The Requester)",
        "descA": "Web browser or mobile app. Renders UI and captures intent; holds no private business logic or direct database connections.",
        "termB": "Server (The Provider)",
        "descB": "Central machine listening for requests. Enforces business rules, validation, securely interacts with databases, and returns results."
      },
      "advancedInfo": "In multi-tier architectures, clients communicate via stateless network requests (HTTP/REST/gRPC). This ensures backend databases are shielded behind private subnets and firewalls.",
      "teacherNotes": {
        "concept": "Client\u2013Server Model, Request-Response Lifecycle, Decoupling",
        "experience": "Students saw why letting customers roam into the master vault causes catastrophic record corruption and privacy leaks.",
        "realWorld": "Every web app and mobile client (Swiggy, Uber, Netflix) communicates with backend application servers via APIs.",
        "question": "Why is it dangerous to embed raw database credentials (like PostgreSQL passwords) inside a mobile app's client code?"
      }
    },
    "youtubeUrl": "https://youtu.be/iKz9szx9wiQ?si=JqDjUO3wOo9LjxL",
    "videoId": "iKz9szx9wiQ",
    "videoTitle": "Client Server Architecture | System Design | Tamil"
  },
  {
    "id": 3,
    "stage": 2,
    "sno": 3,
    "topic": "Networking Fundamentals",
    "concept": "Networking Fundamentals: IP Addresses, DNS, and Ports",
    "title": "Level 3: Finding the Store & Entering the Right Doors",
    "time": "Day 30 \u2014 City Infrastructure Connection",
    "usersCount": "City-Wide Traffic Discovery",
    "topicHint": "IP Addresses, DNS, Ports",
    "situation": "Your physical building is completed, but it is located on a newly paved ring road. The municipal corporation issues your official survey coordinates: Latitude 11.0168\u00b0 N, Longitude 76.9558\u00b0 E. Now, people across the city need to visit your store. Furthermore, when trucks and people arrive at the building exterior, they need to know which specific door to enter: customers need the glass revolving doors, cash collection vans need the armored back-bay door, and plumbing repairmen need the maintenance hatch.",
    "problem": "How can thousands of customers easily find your location, and how should distinct types of traffic enter without blocking each other?",
    "simulationType": "networking_dns_ports",
    "choices": [
      {
        "id": "A",
        "text": "Print posters telling people to visit '11.0168, 76.9558'. Remove all door signs and let shoppers, cash vans, and supply trucks push through whichever random door they find unlocked.",
        "isOptimal": false,
        "consequenceText": "Shoppers try to type long, confusing numbers into their map apps. People mistype a single digit and end up stranded in an industrial gravel quarry 15 miles away. The few customers who actually arrive find no door signs. A family pushing a baby stroller accidentally walks into the armored security loading dock, triggering sirens and getting held at gunpoint by security guards. Meanwhile, a massive semi-truck carrying potatoes tries to drive through the glass customer revolving door, smashing the facade to pieces.",
        "resultState": "gps_collision_gridlock",
        "statImpact": {
          "latency": "Lost in Quarry",
          "capacity": "0 Visitors",
          "risk": "Armed Security Alert",
          "cost": "Smashed Glass Facade"
        },
        "whatHappened": {
          "helped": "You avoided registering a brand name or installing numbered entrance signs.",
          "bottleneck": "Humans cannot memorize numerical coordinates, and unmarked doors caused delivery trucks to smash through glass customer doors!",
          "reflectionQuestion": "Why do computers need DNS to map human names to IP addresses, and ports to route specific protocols?"
        }
      },
      {
        "id": "B",
        "text": "Register a clear, memorable brand name like 'FreshMart' in the city directory mapped to your coordinates, and place bold numbered signs over each door (Door 80 for regular entry, Door 443 for armored security guards, Door 5432 for internal vault maintenance).",
        "isOptimal": true,
        "consequenceText": "Anyone in the city can simply tell an auto driver or map app: \"Take me to FreshMart.\" The city mapping directory instantly translates \"FreshMart\" to the physical coordinates behind the scenes. When visitors arrive, shoppers walk smoothly through Door 80, cash vans deliver securely through armored Door 443, and technical technicians go through Door 5432. Traffic flows safely without collision or confusion.",
        "resultState": "dns_ports_success",
        "statImpact": {
          "latency": "Instant Lookup",
          "capacity": "Unlimited City Traffic",
          "risk": "Zero Collision",
          "cost": "Optimal Navigation"
        },
        "successSummary": "Human-friendly names mapped to numerical network coordinates plus dedicated numbered ports keep traffic organized and secure!"
      },
      {
        "id": "C",
        "text": "Do not register any name or coordinates. Hire street shouters on bicycles to guide every individual car from their homes to your building one by one.",
        "isOptimal": false,
        "consequenceText": "Your bicycle-shouter idea collapses under basic logistics. On the first morning, 400 cars want to visit your store, but you only have five bicycle guides. Traffic backs up for miles. The bicycle messengers get exhausted, confuse directions, and argue with drivers. The entire operation goes bankrupt from hiring hundreds of messengers while customers give up and go to your competitors.",
        "resultState": "bicycle_gridlock",
        "statImpact": {
          "latency": "Miles of Traffic",
          "capacity": "5 Cars Guided",
          "risk": "Operational Bankruptcy",
          "cost": "Wasted Wages"
        },
        "whatHappened": {
          "helped": "Personal guides provided high-touch concierge navigation to the first five cars.",
          "bottleneck": "Manual discovery cannot scale to hundreds of concurrent users, causing traffic jams and bankruptcy!",
          "reflectionQuestion": "Why must network discovery protocols operate automatically and deterministically at scale?"
        }
      }
    ],
    "discovery": {
      "badge": "Networking Fundamentals: IP Addresses, DNS, and Ports",
      "tagline": "Mapping human names to machine coordinates and routing services to numbered doorways",
      "simpleMeaning": "Computers locate each other across the global Internet using numerical IP addresses. DNS acts as the Internet's telephone directory mapping domain names to IP addresses, while Ports route traffic to specific applications running on that machine.",
      "analogy": "A human needs an easy name (\"FreshMart\") instead of geographic coordinates (11.0168\u00b0 N, 76.9558\u00b0 E). Once at the building, labeled doors (Door 80, 443, 5432) ensure different types of traffic reach the correct department.",
      "howItWorks": [
        "1. IP Address (GPS Coordinates): Numerical address (IPv4: 192.168.1.1, IPv6: 2001:db8::1) assigned to every network machine to route data packets.",
        "2. DNS - Domain Name System (City Directory): Translates human-friendly domain names (\"freshmart.com\") into computer-routable IP addresses (\"142.250.190.46\").",
        "3. Ports (Numbered Service Doors): An IP gets you to the server machine; a Port gets you to the right application (Port 80 = HTTP, Port 443 = HTTPS, Port 5432 = PostgreSQL)."
      ],
      "whyItMatters": "Without DNS, humans would have to memorize 12-digit numbers for every website. Without Ports, a server could not run a web store, email server, and database simultaneously.",
      "visualExplanation": "Domain (\"freshmart.com\") \u2500\u2500\u25ba DNS Resolution \u2500\u2500\u25ba IP Address (\"142.250.190.46\") \u2500\u2500\u25ba Port 443 (HTTPS Secure Web Service)",
      "contrast": {
        "termA": "IP Address (The Machine Location)",
        "descA": "Every machine connected to the Internet is assigned a numerical address used to route data packets across the global network.",
        "termB": "DNS & Ports (Names & Doorways)",
        "descB": "DNS translates human names to IP addresses; Ports route incoming packets to the exact listening service on that server."
      },
      "advancedInfo": "DNS resolution uses recursive and authoritative nameservers with hierarchical caching (Browser, OS, ISP) governed by Time-To-Live (TTL). Common standard ports: 80 (HTTP), 443 (HTTPS), 22 (SSH), 5432 (PostgreSQL), 3306 (MySQL), 6379 (Redis).",
      "teacherNotes": {
        "concept": "IP Addressing (IPv4/IPv6), DNS Resolution Hierarchy, Standard Port Numbers",
        "experience": "Students saw why numerical coordinates strand shoppers in quarries and why unnumbered doors cause semi-trucks to ram glass customer doors.",
        "realWorld": "Google Public DNS (8.8.8.8) and Cloudflare (1.1.1.1) resolve billions of DNS queries every second.",
        "question": "What happens if two different applications attempt to bind to Port 80 on the same server simultaneously?"
      }
    },
    "youtubeUrl": "https://youtu.be/mpQZVYPuDGU?si=YR2fYFxC8XBU_zqE",
    "videoId": "mpQZVYPuDGU",
    "videoTitle": "How DNS Server Works | System Design | Tamil"
  },
  {
    "id": 4,
    "stage": 2,
    "sno": 4,
    "topic": "Networking Protocols",
    "concept": "Networking Protocols: TCP vs. UDP and HTTP vs. HTTPS",
    "title": "Level 4: Road Rules & Sealed Briefcases",
    "time": "Day 45 \u2014 City Logistics Transport",
    "usersCount": "Continuous Inter-City Transport",
    "topicHint": "TCP vs. UDP & HTTP vs. HTTPS",
    "situation": "Your store has two ongoing transportation needs: 1. Every morning, expensive porcelain plates and delicate glassware must be transported from a local pottery factory. If a box is dropped, you need the driver to stop, report the broken item, and replace it immediately. 2. Store managers need to send confidential daily cash sheets and customer credit account summaries to the bank across town. The road is full of pickpockets and rival business spies standing on street corners.",
    "problem": "Different goods require different transport rules: fragile physical goods require signed verification receipts, sensitive financial documents require tamper-proof locked safes, and non-critical data needs raw speed without paperwork. How should you transport your goods and confidential papers?",
    "simulationType": "protocols_transport",
    "choices": [
      {
        "id": "A",
        "text": "Put both the glassware and the private bank sheets into open cardboard crates tied to the back of speeding motorcycles with no receipts, no tracking, and no locks.",
        "isOptimal": false,
        "consequenceText": "The speeding motorcycle hits a speed bump. Three boxes of porcelain plates tumble onto the asphalt and shatter into dust. The driver does not notice, keeps driving, and delivers empty boxes. Worse, the confidential bank papers blow away in the wind. A rival store manager picks them off the sidewalk, reads every customer's credit details, and posts them online. Your store faces massive regulatory fines, and inventory losses reach record highs.",
        "resultState": "broken_plates_leak",
        "statImpact": {
          "latency": "Fast but Broken",
          "capacity": "Lost Cargo",
          "risk": "Public Credit Leak",
          "cost": "Massive Regulatory Fines"
        },
        "whatHappened": {
          "helped": "Motorcycles were fast and did not waste time getting delivery signatures.",
          "bottleneck": "Unreliable transport broke fragile glassware without retries, and plaintext papers leaked customer banking details!",
          "reflectionQuestion": "Why can bank transactions never tolerate packet loss (requiring TCP) or unencrypted plaintext (requiring HTTPS)?"
        }
      },
      {
        "id": "B",
        "text": "Transport glassware using delivery vans that require signed handoffs for every single box before moving to the next. Put confidential banking slips into locked, steel-armored briefcases that only the bank manager has the secret key to open.",
        "isOptimal": true,
        "consequenceText": "The glassware van uses a verified check-in system: the driver hands over Box 1, gets an initial, hands over Box 2, and if Box 3 is slightly chipped, it is flagged and resent on the spot. The confidential banking slips are sealed inside an encrypted briefcase. Even if a thief knocks the courier off his bike and steals the briefcase, he cannot open it without the secret physical key. The bank receives the data fully intact and confidential.",
        "resultState": "protocols_success",
        "statImpact": {
          "latency": "Guaranteed Delivery",
          "capacity": "100% Intact Cargo",
          "risk": "Zero Data Leak",
          "cost": "Optimal Protection"
        },
        "successSummary": "TCP's guaranteed handshake ensures zero lost cargo, while HTTPS's cryptographic locks guarantee total privacy and integrity in transit!"
      },
      {
        "id": "C",
        "text": "Send all shipments via slow, heavy armored trucks, including bulk promotional paper flyers and store radio background music recordings.",
        "isOptimal": false,
        "consequenceText": "Using heavy armored transport for absolutely everything creates extreme bottlenecks. Your store radio background music stream stutters and pauses every 10 seconds because the sound files are waiting for armored truck clearances. The flyers arrive three days late because the security overhead is unnecessarily complex for non-critical items.",
        "resultState": "heavy_armored_choke",
        "statImpact": {
          "latency": "Extreme Lag",
          "capacity": "Stuttering Streams",
          "risk": "Over-Engineered Choke",
          "cost": "Excessive Fuel Waste"
        },
        "whatHappened": {
          "helped": "Even promotional flyers were guarded by bulletproof steel plates.",
          "bottleneck": "Applying heavy handshake and encryption overhead to live streaming audio caused constant stuttering and delays!",
          "reflectionQuestion": "Why do live video streams and voice calls use lightweight UDP instead of connection-oriented TCP?"
        }
      }
    ],
    "discovery": {
      "badge": "Networking Protocols: TCP vs. UDP and HTTP vs. HTTPS",
      "tagline": "Reliable vs lightweight transport, and encrypted modern web communication",
      "simpleMeaning": "Network protocols establish the rules for packaging, transmitting, and verifying data across wires. TCP guarantees delivery through connection handshakes, UDP provides ultra-low latency without confirmation receipts, and HTTPS encrypts data in transit.",
      "analogy": "Fragile physical goods require signed verification receipts (TCP), live voice/audio needs fast couriers without paperwork (UDP), and confidential papers require locked, tamper-proof briefcases (HTTPS).",
      "howItWorks": [
        "1. TCP (Transmission Control Protocol) \u2014 The Verified Van: Establishes a reliable connection using a 3-Way Handshake (SYN \u2192 SYN-ACK \u2192 ACK), guarantees in-order delivery, and retransmits lost packets.",
        "2. UDP (User Datagram Protocol) \u2014 The Fast Courier Bike: Connectionless transport with ultra-low latency; lost packets are skipped. Used for live video streaming, multiplayer games, and voice calls.",
        "3. HTTP vs. HTTPS (Plain Box vs. Locked Briefcase): HTTP transmits plaintext across the wire vulnerable to snooping. HTTPS wraps HTTP inside TLS/SSL encryption using public/private keys to guarantee Confidentiality and Integrity."
      ],
      "whyItMatters": "Without TCP, financial transactions and downloads would silently drop packets. Without HTTPS, attackers on public Wi-Fi networks could intercept passwords and credit card credentials in plaintext.",
      "visualExplanation": "TCP: Client \u2500\u2500[SYN]\u2500\u2500\u25ba Server \u2500\u2500[SYN-ACK]\u2500\u2500\u25ba Client \u2500\u2500[ACK]\u2500\u2500\u25ba Data Stream (Guaranteed Delivery)\nHTTPS: TLS Handshake (Public Key Exchange) \u2500\u2500\u25ba Symmetric Session Key \u2500\u2500\u25ba Encrypted AES Ciphertext",
      "contrast": {
        "termA": "TCP (Transmission Control Protocol)",
        "descA": "Connection-oriented, guaranteed in-order delivery, retransmissions, flow control. Used for web pages, APIs, and databases.",
        "termB": "UDP (User Datagram Protocol)",
        "descB": "Connectionless, lightweight, ultra-low latency, no retries. Used for live video calls, gaming, and streaming audio."
      },
      "advancedInfo": "HTTPS uses Transport Layer Security (TLS 1.3). It combines asymmetric cryptography (RSA / ECDHE) to negotiate shared secrets with symmetric encryption (AES-GCM / ChaCha20) for ultra-fast data transmission.",
      "teacherNotes": {
        "concept": "Transport Layer (TCP vs UDP) & Application Layer (HTTP vs HTTPS)",
        "experience": "Students connected broken plates to lost packets, pickpockets to plaintext packet sniffers, and armored briefcases to TLS encryption.",
        "realWorld": "Financial institutions and e-commerce checkout platforms mandate HTTPS with strict HTTP Strict Transport Security (HSTS).",
        "question": "Why does online multiplayer gaming prefer UDP over TCP even if an occasional player position packet is lost?"
      }
    },
    "youtubeUrl": "https://youtu.be/kq1lPrb2pt8?si=BL_--R8bZhEd0bk3",
    "videoId": "kq1lPrb2pt8",
    "videoTitle": "OSI Model & Networking Protocols | System Design | Tamil"
  },
  {
    "id": 5,
    "stage": 3,
    "sno": 5,
    "topic": "API Design",
    "concept": "API Design & RESTful Architecture: Standardized Communication Contracts",
    "title": "Level 5: The Standard Order Form",
    "time": "Day 60 \u2014 Warehouse Order Synchronization",
    "usersCount": "Hundreds of Orders Per Hour",
    "topicHint": "API Design & RESTful Architecture",
    "situation": "Your central warehouse receives hundreds of orders every hour from cashiers, department supervisors, and restocking staff. However, everyone communicates in chaotic ways: \u2022 One cashier shouts: \"Give me 5 apples!\" \u2022 Another writes a poem: \"The fruit stand is bare, send forth the red fruit.\" \u2022 Another leaves a sticky note saying: \"Apples. 10. Change.\" The warehouse workers are completely overwhelmed trying to translate different languages, handwriting styles, and vague commands. Orders are constantly mixed up.",
    "problem": "Operations scale only when communication between departments uses a standardized grammar with consistent action words and unambiguous item addresses. What communication standard should you introduce?",
    "simulationType": "api_contracts_scanners",
    "choices": [
      {
        "id": "A",
        "text": "Let everyone communicate however they feel like. Tell the warehouse workers to just guess what people mean.",
        "isOptimal": false,
        "consequenceText": "The warehouse turns into a disaster zone. A note saying \"Apples. 10. Change.\" is interpreted by one worker as \"Delete 10 apples\", while another worker interprets it as \"Add 10 apples\". The fruit department receives a truckload of green chili peppers instead of fresh fruit. Staff argue constantly, customers wait in checkout lines for over an hour, and stock counts become completely untrustworthy.",
        "resultState": "rest_confusion_zone",
        "statImpact": {
          "latency": "1+ Hour Delay",
          "capacity": "0 Accurate Orders",
          "risk": "Inventory Chaos",
          "cost": "Severe Wastage"
        },
        "whatHappened": {
          "helped": "Staff did not have to learn any formal rules or fill out structured forms.",
          "bottleneck": "Unstructured text was interpreted inconsistently, delivering chili peppers instead of fruit and stalling operations!",
          "reflectionQuestion": "Why must software systems communicate using structured protocols (like JSON schemas) rather than arbitrary text?"
        }
      },
      {
        "id": "B",
        "text": "Issue a standardized requisition form with four strict checkboxes: [VIEW], [ADD NEW], [CHANGE], and [REMOVE]. Every order must clearly state the item category and product ID number.",
        "isOptimal": true,
        "consequenceText": "Order processing runs like clockwork. A cashier needing stock simply checks [VIEW] on /warehouse/fruits/apples, and the form returns current quantities instantly. To add stock, the manager submits an [ADD NEW] form containing the item count. Any computer terminal, tablet, or handheld barcode scanner can communicate with the warehouse effortlessly because the grammar is clear, predictable, and uniform.",
        "resultState": "rest_order_success",
        "statImpact": {
          "latency": "Instant Clockwork",
          "capacity": "Unlimited Automated Orders",
          "risk": "Zero Ambiguity",
          "cost": "High Efficiency"
        },
        "successSummary": "Standardized verbs ([VIEW], [ADD NEW], [CHANGE], [REMOVE]) mapped to clean resource paths allow any device to communicate seamlessly!"
      },
      {
        "id": "C",
        "text": "Ban all order slips. Force every single cashier to walk back to the warehouse in person and verbally speak to the warehouse manager for every single transaction.",
        "isOptimal": false,
        "consequenceText": "Your physical operations grind to an absolute halt. Cashiers constantly abandon their cash registers to walk back to the warehouse. Checkout lanes are left unstaffed, lines snake around the block, and the warehouse manager suffers a nervous breakdown trying to talk to 40 cashiers at the exact same time.",
        "resultState": "physical_bottleneck_collapse",
        "statImpact": {
          "latency": "Gridlock",
          "capacity": "Lines Around Block",
          "risk": "Manager Breakdown",
          "cost": "Lost Customers"
        },
        "whatHappened": {
          "helped": "Cashiers got to communicate face-to-face with the warehouse manager.",
          "bottleneck": "Forcing tightly coupled verbal interactions abandoned checkout registers and created a single point of failure!",
          "reflectionQuestion": "Why do microservices communicate through asynchronous, decoupled APIs instead of blocking synchronous dependencies?"
        }
      }
    ],
    "discovery": {
      "badge": "API Design & RESTful Architecture",
      "tagline": "Standardized verbs, resource-based URLs, and structured data schemas",
      "simpleMeaning": "An API (Application Programming Interface) is a defined contract specifying how software systems exchange requests and responses. REST (Representational State Transfer) utilizes standard HTTP verbs where every request is stateless, containing all required context.",
      "analogy": "Instead of shouting vague poems, staff use a standardized requisition form with four strict action boxes ([VIEW], [ADD NEW], [CHANGE], [REMOVE]) and explicit resource item paths.",
      "howItWorks": [
        "1. GET (corresponds to [VIEW]): Used to read data (e.g., GET /api/v1/products/42 fetches details of product 42).",
        "2. POST (corresponds to [ADD NEW]): Used to create a new resource (e.g., POST /api/v1/products creates a product).",
        "3. PUT / PATCH ([CHANGE]) & DELETE ([REMOVE]): PUT/PATCH updates existing resources; DELETE removes a resource (e.g., DELETE /api/v1/products/42)."
      ],
      "whyItMatters": "APIs decouple frontend clients from backend databases. Web apps, mobile devices, and external suppliers can update independently without breaking each other.",
      "visualExplanation": "Barcode Scanner \u2500\u2500\u25ba GET /api/v1/products/42 \u2500\u2500\u25ba API Gateway \u2500\u2500\u25ba JSON Response { id: 42, name: 'Apples', stock: 120 } (200 OK)",
      "contrast": {
        "termA": "REST (Representational State Transfer)",
        "descA": "Standard HTTP verbs (GET, POST, PUT, DELETE) operating on resource URIs returning JSON. Stateless and cacheable.",
        "termB": "Modern API Styles (GraphQL & gRPC)",
        "descB": "GraphQL allows clients to request exact fields; gRPC uses compact binary Protocol Buffers over HTTP/2 for microservice calls."
      },
      "advancedInfo": "REST APIs adhere to standard HTTP status codes: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Server Error. URI path versioning (/api/v1/ vs /api/v2/) prevents breaking deployed clients.",
      "teacherNotes": {
        "concept": "API Design Patterns, REST Verbs, Status Codes, Versioning Strategies",
        "experience": "Students experienced why chaotic free-form notes cause warehouses to ship green chili peppers instead of fresh fruit.",
        "realWorld": "Stripe, GitHub, and Shopify provide REST APIs that process billions of requests daily with standardized JSON schemas.",
        "question": "What is the difference between idempotent methods (like GET, PUT, DELETE) and non-idempotent methods (like POST)?"
      }
    },
    "youtubeUrl": "https://youtu.be/37eRt5sl7ZE?si=khgza23wGzjlwEj_E",
    "videoId": "37eRt5sl7ZE",
    "videoTitle": "What is API | REST vs RESTful | System Design | Tamil"
  },
  {
    "id": 6,
    "stage": 3,
    "sno": 6,
    "topic": "Authentication",
    "concept": "Authentication (AuthN) & Token-Based Sessions: Cryptographic Identity Verification",
    "title": "Level 6: The Gatekeeper & The Entry Stamp",
    "time": "Day 75 \u2014 VIP Member Services",
    "usersCount": "Customer Identity Verification",
    "topicHint": "Authentication (AuthN) & JWT",
    "situation": "Your supermarket has a VIP Member Lounge and a Loyalty Points Cashback program. A man in a leather jacket walks up to the customer service counter, points to a gold account ledger, and says: \"Hello, I am Pranesh. Please deduct 5,000 loyalty points from my account and hand me Rs. 5,000 in physical cash right now.\" You have never seen this person before in your life.",
    "problem": "You must separate identity verification into two stages: a strong initial identity check (verifying credentials), followed by a lightweight, temporary physical pass for ongoing access. How should you verify the customer's identity?",
    "simulationType": "auth_identity_verification",
    "choices": [
      {
        "id": "A",
        "text": "Smile, trust his word, open the cash drawer, and hand him the Rs. 5,000 cash immediately.",
        "isOptimal": false,
        "consequenceText": "The stranger takes the cash, laughs, and walks out the door. Ten minutes later, the real Pranesh walks into the store, scans his card, and discovers his loyalty points are completely gone. When you explain what happened, he calls the police, files a lawsuit for negligence, and alerts the media. Word spreads that your store gives away customer accounts to anyone who asks, triggering a massive wave of customer boycotts.",
        "resultState": "auth_theft_boycott",
        "statImpact": {
          "latency": "Instant Theft",
          "capacity": "Zero Trust",
          "risk": "Lawsuit & Police Alert",
          "cost": "Massive Boycotts"
        },
        "whatHappened": {
          "helped": "The customer was served with zero delay or credential prompts.",
          "bottleneck": "Blindly trusting unverified claims handed money to an impostor, triggering lawsuits and customer boycotts!",
          "reflectionQuestion": "Why must every state-changing request prove authentication cryptographically?"
        }
      },
      {
        "id": "B",
        "text": "Ask for proof of identity (such as a password and a verification code sent to his registered phone). Once verified, stamp his wrist with a tamper-proof glowing ink stamp valid for the afternoon so he does not have to show his ID card at every single counter.",
        "isOptimal": true,
        "consequenceText": "The clerk asks the man for his account PIN and sends an instant verification code to the registered phone number. The man looks nervous, fumbles with his pockets, fails to produce the code, and runs out the door: he was a fraudster! When the real customer arrives, he proves his identity smoothly in five seconds. The clerk stamps his hand with a tamper-proof mark. For the rest of his shopping visit, the customer shows the stamp at the cafe, bakery, and checkout to buy items instantly without having to pull out his passport every two minutes.",
        "resultState": "auth_stamp_success",
        "statImpact": {
          "latency": "5 Seconds Verification",
          "capacity": "100% Protected Accounts",
          "risk": "Fraudster Defeated",
          "cost": "Optimal Security"
        },
        "successSummary": "Strong initial authentication verified credentials, followed by a signed, temporary token (JWT stamp) for fast ongoing authorization!"
      },
      {
        "id": "C",
        "text": "Lock him in an interview room for two hours and make him fill out a 40-page legal background check every single time he wants to buy a carton of eggs.",
        "isOptimal": false,
        "consequenceText": "Customers refuse to shop at your supermarket. People do not want to endure a grueling, two-hour legal interrogation just to purchase daily groceries. Lines outside the store stretch down the street, perishable vegetables rot on the shelves, and shoppers leave for the grocery store down the road.",
        "resultState": "interrogation_desertion",
        "statImpact": {
          "latency": "2 Hour Wait",
          "capacity": "Abandoned Aisles",
          "risk": "Extreme Friction",
          "cost": "Rotting Groceries"
        },
        "whatHappened": {
          "helped": "Nobody could ever impersonate another shopper without passing a 40-page background check.",
          "bottleneck": "Extreme authentication friction destroyed user experience and drove customers to competitors!",
          "reflectionQuestion": "How do token-based architectures balance high security at login with seamless microsecond requests afterward?"
        }
      }
    ],
    "discovery": {
      "badge": "Authentication (AuthN) & Token-Based Sessions",
      "tagline": "Verifying identity securely and issuing cryptographically signed session tokens",
      "simpleMeaning": "Authentication (AuthN) answers \"Who are you?\" by verifying credentials using knowledge (passwords/PINs), ownership (phone OTP, hardware keys), or biometrics. Once verified, servers issue a signed JSON Web Token (JWT) for stateless session management.",
      "analogy": "Separating identity check into two stages: a strong initial credential verification, followed by a lightweight, tamper-proof glowing wrist stamp (JWT) for fast subsequent access.",
      "howItWorks": [
        "1. Step 1 (Login): User logs in with credentials (username + secret password).",
        "2. Step 2 (Verification): Server verifies password against a stored one-way cryptographic hash with random salt (Bcrypt / Argon2).",
        "3. Step 3 (Token Issuance): Upon success, the server issues a cryptographically signed JSON Web Token (JWT) attached in subsequent authorization headers."
      ],
      "whyItMatters": "Passwords must never be stored in plaintext. Cryptographic hashing protects against database leaks, while signed tokens allow distributed backend servers to verify logins without querying the database on every click.",
      "visualExplanation": "Login Credentials \u2500\u2500\u25ba Server (Verify Bcrypt Hash) \u2500\u2500\u25ba Issue Signed JWT (Header.Payload.Signature) \u2500\u2500\u25ba Client Attaches JWT on Next Request",
      "contrast": {
        "termA": "Authentication (AuthN)",
        "descA": "Verifies identity (\"Who are you?\") via passwords, multi-factor OTPs, or biometrics.",
        "termB": "JSON Web Token (JWT)",
        "descB": "Digitally signed token containing Header, Payload (User ID, claims), and Signature verified with the server's secret key."
      },
      "advancedInfo": "JWTs are compact and self-contained. The signature is computed using HMAC SHA-256 or RSA/ECDSA asymmetric keys. If an attacker modifies the payload (e.g. changing userId: 5 to userId: 1), the cryptographic signature verification fails immediately.",
      "teacherNotes": {
        "concept": "Authentication (AuthN), Password Hashing & Salting, JWT Architecture",
        "experience": "Students saw why blind trust gives cash to fraudsters, while 2-hour legal interrogations make shoppers desert the store.",
        "realWorld": "Google, GitHub, and major banking applications use salted hashes (Argon2/Bcrypt) and short-lived JWTs paired with refresh tokens.",
        "question": "Why should password hashing algorithms deliberately be computationally slow (like Bcrypt with high work factors)?"
      }
    },
    "youtubeUrl": "https://youtu.be/kCnyLl1UhNM?si=HbdBqRNp9i9Z7smy",
    "videoId": "kCnyLl1UhNM",
    "videoTitle": "Authentication vs Authorization | System Design | Tamil"
  },
  {
    "id": 7,
    "stage": 3,
    "sno": 7,
    "topic": "Authorization",
    "concept": "Authorization (AuthZ) & Access Control Models: Role-Based Access Control & Principle of Least Privilege",
    "title": "Level 7: Department Security Badges",
    "time": "Day 90 \u2014 Internal Staff Access Control",
    "usersCount": "Staff Operational Permissions",
    "topicHint": "Authorization (AuthZ) & RBAC",
    "situation": "Your staff members are now properly authenticated: every employee wears an official, verified name tag. However, during the afternoon shift, an 18-year-old shelf-stocking intern with a verified name tag takes the elevator to the executive administrative suite, walks into the master accounting office, opens the manager's desk drawer, and begins reading confidential staff payroll folders. When the store manager catches him, the intern argues: \"I work here! My name tag is 100% genuine and verified at the front door. That means I can enter any room in this building!\"",
    "problem": "Proving who you are at the front entrance does not mean you have permission to touch everything inside the building. Access must be partitioned by organizational responsibility. How should you manage permissions?",
    "simulationType": "authz_rbac_vault",
    "choices": [
      {
        "id": "A",
        "text": "Agree with the intern. If an employee is verified to enter the building, they should have access to every desk, cash drawer, and server room.",
        "isOptimal": false,
        "consequenceText": "Within a week, your business collapses from internal chaos. The shelf-stocking intern accidentally presses an emergency reset lever in the central electrical room, plunging the entire supermarket into darkness. An aggrieved junior cashier enters the supplier billing computer and deletes invoices. Without internal access controls, employees rummage through private personnel files, leading to internal theft, leaks, and operational gridlock.",
        "resultState": "rbac_blackout_theft",
        "statImpact": {
          "latency": "Gridlock",
          "capacity": "Compromised Staff",
          "risk": "Power Blackout & Theft",
          "cost": "Operational Disaster"
        },
        "whatHappened": {
          "helped": "You did not have to set up keycard permissions or electronic locks.",
          "bottleneck": "Treating Authentication as Authorization allowed an intern to trip electrical breakers and delete supplier invoices!",
          "reflectionQuestion": "Why must every API endpoint verify Authorization permissions independently of Authentication?"
        }
      },
      {
        "id": "B",
        "text": "Install color-coded electronic door locks. Program the intern's badge for storage rooms and retail aisles only. Reserve the cash counting room for senior cashiers, and restrict the executive office strictly to the General Manager.",
        "isOptimal": true,
        "consequenceText": "The intern walks up to the executive accounting door and swipes his badge. The electronic lock flashes bright red, sounds a soft buzz, and denies access. He returns to the grocery aisles where his badge works properly on storage doors. The cashiers can access their billing registers, the maintenance staff can enter utility closets, and the management suite remains secure. Everyone works in their designated operational zone without cross-contamination.",
        "resultState": "rbac_door_success",
        "statImpact": {
          "latency": "Instant Access Check",
          "capacity": "Strictly Partitioned",
          "risk": "Zero Unauthorized Access",
          "cost": "Secure & Compliant"
        },
        "successSummary": "Role-Based Access Control (RBAC) and the Principle of Least Privilege ensure staff only access resources required for their specific jobs!"
      },
      {
        "id": "C",
        "text": "Fire all employees and manage the entire multi-story supermarket alone so you never have to worry about permissions.",
        "isOptimal": false,
        "consequenceText": "You collapse from physical exhaustion within 36 hours. You cannot stock 50 shelves, cut meat at the butcher counter, manage four cash registers, and clean the floors simultaneously. While you are busy ringing up a customer at Counter 1, unattended freezers overflow at the back, and the store descends into abandonment.",
        "resultState": "exhaustion_abandonment",
        "statImpact": {
          "latency": "Exhausted",
          "capacity": "1 Exhausted Person",
          "risk": "Abandonment",
          "cost": "Total Store Failure"
        },
        "whatHappened": {
          "helped": "You had zero employee security risks because you had zero employees.",
          "bottleneck": "Refusing to delegate authority collapsed operations from physical exhaustion in 36 hours!",
          "reflectionQuestion": "How does role-based access delegation allow large organizations and cloud platforms to scale safely?"
        }
      }
    ],
    "discovery": {
      "badge": "Authorization (AuthZ) & Access Control Models",
      "tagline": "Enforcing access boundaries via Role-Based Access Control and Principle of Least Privilege",
      "simpleMeaning": "While Authentication (AuthN) validates identity (\"Are you an active employee?\"), Authorization (AuthZ) enforces access limits (\"Do you have permission to modify payroll data?\"). RBAC assigns privileges based on system roles.",
      "analogy": "Proving who you are at the front entrance does not mean you have permission to open the cash vault. Badges are color-coded: interns open stockrooms, senior cashiers open cash registers, and only the General Manager opens the executive suite.",
      "howItWorks": [
        "1. Authentication vs. Authorization: AuthN validates identity; AuthZ enforces access limits on specific resources.",
        "2. Role-Based Access Control (RBAC): Assigning permissions to roles (Customer = read products/create orders; Cashier = read inventory/scan barcodes; Admin = manage stock and payroll).",
        "3. Principle of Least Privilege (PoLP): Every entity must operate using only the minimal permissions necessary to perform its designated task."
      ],
      "whyItMatters": "Without Authorization checks, any logged-in user could read other people's bank statements, delete databases, or escalate privileges to administrator level.",
      "visualExplanation": "Authenticated User (Badge Valid) \u2500\u2500\u25ba Door Check: Does role have 'VAULT_ACCESS'? \u2500\u2500\u25ba Role = Stocker \u2500\u2500\u25ba 403 Forbidden! Door Locked.",
      "contrast": {
        "termA": "Authentication (AuthN)",
        "descA": "Validates identity. \"Who are you?\" Proved via passwords, badges, or biometrics.",
        "termB": "Authorization (AuthZ)",
        "descB": "Enforces permissions. \"What are you allowed to do?\" Enforced via RBAC, OAuth 2.0 scopes, and least privilege."
      },
      "advancedInfo": "OAuth 2.0 acts as a digital valet key: it enables delegated authorization where third-party apps (e.g. Swiggy accessing Google accounts) receive scoped, temporary access tokens without ever seeing the master password.",
      "teacherNotes": {
        "concept": "Authorization (AuthZ), Role-Based Access Control (RBAC), Principle of Least Privilege (PoLP), OAuth 2.0",
        "experience": "Students understood why an authentic employee badge shouldn't unlock the executive vault or electrical breaker room.",
        "realWorld": "AWS IAM policies, Kubernetes RBAC, and Google Cloud IAM manage enterprise access through granular permission roles.",
        "question": "Why should authorization checks always execute on backend servers instead of relying on client-side button hiding?"
      }
    },
    "youtubeUrl": "https://youtu.be/AVTyu_mIehQ?si=XQxh7WW9F9wSfehd",
    "videoId": "AVTyu_mIehQ",
    "videoTitle": "JWT Explained | System Design | Tamil"
  },
  {
    "id": 8,
    "stage": 4,
    "sno": 8,
    "topic": "Relational Databases",
    "concept": "Relational Database Design (RDBMS) & ACID Guarantees: Transactional Integrity",
    "title": "Level 8: The Billing Ledger & The ACID Test",
    "time": "Day 105 \u2014 Peak Saturday Rush & Power Failure",
    "usersCount": "2,000 Concurrent Shoppers",
    "topicHint": "RDBMS & ACID Guarantees",
    "situation": "It is Saturday evening. The store is packed with 2,000 customers. There is only one single, rare carton of imported Belgian chocolates left on shelf 4. At the exact same fraction of a second, Customer Priya at Cash Register 1 and Customer Rahul at Cash Register 2 place the exact same item code on the counter. Both cashiers scan the barcode and press \"CONFIRM PAYMENT\" simultaneously. Suddenly, a severe thunderstorm hits the area: right as the cashiers hit the enter key, the main power grid cuts out, plunging the building into total darkness for five seconds before the backup generators roar to life!",
    "problem": "Critical business accounting requires strict, unambiguous guarantees: financial exchanges must happen completely or not at all, concurrent updates must never double-sell limited physical stock, and committed data must survive power failures. How should you record transactions?",
    "simulationType": "requirements_stress",
    "choices": [
      {
        "id": "A",
        "text": "Use a loose cardboard notebook to write down sales without inventory checks or power-failure safety logs. Let both transactions proceed through the registers.",
        "isOptimal": false,
        "consequenceText": "When the lights flicker back on, your computer records are in utter shambles. The system processed payments for both Priya and Rahul, charging both of their credit cards for the single box of chocolate. Priya grabs the box and walks out, leaving an enraged Rahul standing at the counter demanding his item or his money back. To make matters worse, the sudden power cut corrupted the uncommitted ledger file, erasing the sales records of the last 45 minutes. Cashiers have no idea how much money is in their drawers versus what the computer thinks they sold.",
        "resultState": "acid_double_charge_loss",
        "statImpact": {
          "latency": "Corrupted Data",
          "capacity": "Double-Charged Customers",
          "risk": "45 Mins Sales Erased",
          "cost": "Financial Chaos"
        },
        "whatHappened": {
          "helped": "Both registers confirmed transactions quickly without waiting for locking mechanisms.",
          "bottleneck": "Without ACID guarantees, concurrency caused double-selling, and power loss wiped uncommitted memory!",
          "reflectionQuestion": "Why do banking systems require strict ACID guarantees instead of eventual consistency?"
        }
      },
      {
        "id": "B",
        "text": "Use an atomic, transaction-safe relational ledger. Lock the item record during processing so only one customer can complete the purchase, and enforce durable write-ahead logging to guarantee no data is corrupted or half-saved during a power blackout.",
        "isOptimal": true,
        "consequenceText": "The database software handles the concurrency flawlessly. The moment Register 1 initiated the payment, it placed an instantaneous lock on the inventory record for that specific chocolate bar. Register 2 was immediately notified: \"Item out of stock.\" Rahul's payment card was never charged. Furthermore, because the database wrote the transaction to a persistent Write-Ahead Log (WAL) on the hard disk before confirming, not a single penny of data was lost when the power cut occurred. When the generators kicked in, all records remained perfectly balanced and accurate.",
        "resultState": "acid_lock_success",
        "statImpact": {
          "latency": "Atomic Locking",
          "capacity": "Zero Double-Selling",
          "risk": "100% Power Crash Recovery",
          "cost": "Perfect Balance"
        },
        "successSummary": "ACID guarantees ensured Atomicity (all-or-nothing), Consistency (integrity rules), Isolation (locking), and Durability (WAL logging on disk)!"
      },
      {
        "id": "C",
        "text": "Cancel every customer purchase across the entire store for the entire day whenever lightning flashes outside.",
        "isOptimal": false,
        "consequenceText": "Customers furiously abandon full grocery carts in the aisles and storm out of your supermarket. No shopper will tolerate having their shopping trip canceled every time rain clouds gather. Your inventory spoils on the floor, and your store earns a reputation for total operational incompetence.",
        "resultState": "lightning_rage_quit",
        "statImpact": {
          "latency": "Store Cancelled",
          "capacity": "Abandoned Carts",
          "risk": "Customer Boycott",
          "cost": "Spoiled Inventory"
        },
        "whatHappened": {
          "helped": "You eliminated the risk of power cuts occurring mid-transaction.",
          "bottleneck": "Canceling the entire store during rain drove customers away and spoiled inventory!",
          "reflectionQuestion": "How do resilient database recovery mechanisms ensure business continuity during hardware and power faults?"
        }
      }
    ],
    "discovery": {
      "badge": "Relational Database Design (RDBMS) & ACID Guarantees",
      "tagline": "Atomicity, Consistency, Isolation, and Durability under concurrency and system failures",
      "simpleMeaning": "Relational databases (RDBMS like PostgreSQL and MySQL) organize data into strict tables with schemas, enforcing ACID guarantees so transactions execute safely under high concurrency and power cuts.",
      "analogy": "When two shoppers reach for the last chocolate box simultaneously during a thunderstorm, the ledger locks the item for the first buyer and uses write-ahead logging so power cuts never corrupt accounts.",
      "howItWorks": [
        "1. Atomicity (\"All or Nothing\"): If payment succeeds but receipt generation fails, the entire transaction rolls back completely.",
        "2. Consistency (\"Integrity Enforced\"): All state transitions preserve defined schema constraints and valid account balances.",
        "3. Isolation (\"Independent Execution\"): Concurrent transactions run without exposing intermediate uncommitted changes to other users.",
        "4. Durability (\"Permanently Stored\"): Once confirmed, data is recorded to disk (WAL) and survives power cuts or hardware reboots."
      ],
      "whyItMatters": "Without ACID guarantees, e-commerce stores double-sell limited items, banking transfers lose money mid-flight, and database crashes wipe transaction histories.",
      "visualExplanation": "Register 1 & 2 Compete \u2500\u2500\u25ba Database Row Lock on Item \u2500\u2500\u25ba Reg 1 Buys / Reg 2 Out of Stock \u2500\u2500\u25ba Write-Ahead Log (WAL on Disk) \u2500\u2500\u25ba Crash Recovery Intact",
      "contrast": {
        "termA": "ACID Transactions (RDBMS)",
        "descA": "Strict tables, foreign keys, row-level locking, and Write-Ahead Logging ensuring mathematical precision and zero data loss.",
        "termB": "Uncontrolled Concurrency",
        "descB": "Simultaneous writes without locking cause race conditions, dirty reads, phantom updates, and corrupted ledger balances."
      },
      "advancedInfo": "Relational engines use Multi-Version Concurrency Control (MVCC) and strict transaction isolation levels (Read Committed, Repeatable Read, Serializable) alongside Write-Ahead Logging (WAL) to survive sudden server reboots.",
      "teacherNotes": {
        "concept": "Relational Database Architecture, ACID Properties, Concurrency Control & WAL",
        "experience": "Students experienced why simultaneous purchases require locking and why power cuts require write-ahead disk logging.",
        "realWorld": "Visa, Stripe, and core banking ledgers rely on ACID-compliant relational databases to process billions of dollars with zero lost pennies.",
        "question": "What is the difference between a dirty read, a non-repeatable read, and a phantom read in database concurrency?"
      }
    },
    "youtubeUrl": "https://youtu.be/AVTyu_mIehQ?si=XQxh7WW9F9wSfehd",
    "videoId": "AVTyu_mIehQ",
    "videoTitle": "JWT Explained | System Design | Tamil"
  },
  {
    "id": 9,
    "stage": 4,
    "sno": 9,
    "topic": "Database Architecture",
    "concept": "Database Architecture: Relational vs. Non-Relational (SQL vs. NoSQL Paradigm)",
    "title": "Level 9: Database Architecture \u2014 Relational vs. Non-Relational (SQL vs. NoSQL)",
    "time": "Day 120 \u2014 Hypermarket Scale & Polyglot Persistence",
    "usersCount": "250,000 Products & Millions of Cart Clicks",
    "topicHint": "SQL vs. NoSQL Paradigm",
    "situation": "Your business is expanding into a giant hypermarket. You have two massive database challenges hitting your store at the same time: 1. In addition to basic groceries, you now sell 250,000 diverse products across dozens of categories (Milk has volume and expiry date; T-Shirts have size and fabric; 4K Smart TVs have screen size, HDMI ports, and refresh rate). Your database administrator created a single table with 300 columns to force all these items into one place, leaving 95% of the cells as empty NULL values. Every time a new product type arrives, altering the table locks the database and freezes billing counters! 2. At the exact same time, you need an ultra-fast temporary storage room for thousands of shoppers who are actively dropping items into shopping baskets, changing their minds, and navigating through products in real time.",
    "problem": "You do not store diverse, unpredictable items in rigid, uniform metal ice-cube trays. Standard, uniform numbers belong in tabular ledgers; varied physical items belong in flexible, modular storage boxes; and fast temporary baskets belong in an accessible, open bin right next to the shopper. How should you architect your database tier?",
    "simulationType": "database_polyglot",
    "choices": [
      {
        "id": "A",
        "text": "Force every single item, dynamic product attribute, and temporary active shopping basket into that single rigid SQL table with hundreds of empty columns. If we reach 800 columns, so be it.",
        "isOptimal": false,
        "consequenceText": "Your database performance collapses under its own weight. The table becomes bloated with millions of empty cells. Simple searches like \"Find green shirts\" require the database engine to scan through giant rows of unused TV attributes, bogging down the servers. When a new shipment of drones arrives and the manager runs a script to add FlightRange and BatteryCapacity columns, the entire master table locks up, bringing down the billing counters on a busy Sunday afternoon. Active shopping cart writes hammer the disk, driving CPU usage to 100%.",
        "resultState": "sql_bloat_lockout",
        "statImpact": {
          "latency": "Table Locked",
          "capacity": "100% CPU Disk Hammer",
          "risk": "Billing Freeze on Sunday",
          "cost": "Server Crash"
        },
        "whatHappened": {
          "helped": "You maintained only one single database engine to manage.",
          "bottleneck": "A single 300-column table with 95% NULLs locked up the database during schema alterations and crushed billing!",
          "reflectionQuestion": "Why do modern platforms adopt Polyglot Persistence instead of forcing all workloads into a single database engine?"
        }
      },
      {
        "id": "B",
        "text": "Adopt a multi-model storage architecture: keep core structured financial ledgers and billing records in the relational SQL database (with rigid tables and ACID guarantees), while moving the diverse product catalog and high-speed temporary shopping carts into specialized NoSQL databases (flexible documents for products, fast in-memory key-value lookups for carts).",
        "isOptimal": true,
        "consequenceText": "Your entire store data layer operates at maximum efficiency. 1. The TV record stores its ports and screen dimensions, the milk record stores its expiration date, and the t-shirt stores its fabric and size inside dynamic Document stores (like MongoDB). New product categories are added instantly without downtime. 2. Active customer carts and sessions run in an in-memory Key-Value store (like Redis), serving responses in microseconds. 3. Financial ledger transactions remain safely managed inside the relational SQL database (like PostgreSQL), maintaining bulletproof ACID guarantees. Every storage engine does exactly what it is designed for.",
        "resultState": "polyglot_harmony_success",
        "statImpact": {
          "latency": "Microseconds Response",
          "capacity": "250,000 Dynamic Products",
          "risk": "Zero Downtime",
          "cost": "Highly Scalable"
        },
        "successSummary": "Polyglot Persistence: Relational SQL for ACID ledgers, Document NoSQL for dynamic product catalogs, and In-Memory Key-Value for ultra-fast carts!"
      },
      {
        "id": "C",
        "text": "Stop selling electronics, clothes, and varied items entirely. Only sell milk and bread forever so the database schema never needs to change, and ban customers from using shopping carts.",
        "isOptimal": false,
        "consequenceText": "Your business model is crippled. While competing department stores thrive by selling high-margin consumer electronics, appliances, and fashion, your revenue drops by 80% because you threw away profitable business lines simply to avoid learning how to manage flexible data structures.",
        "resultState": "milk_bread_bankruptcy",
        "statImpact": {
          "latency": "Crippled Business",
          "capacity": "Only Milk & Bread",
          "risk": "80% Revenue Drop",
          "cost": "Competitor Wipeout"
        },
        "whatHappened": {
          "helped": "The database schema never had to add a new column.",
          "bottleneck": "Crippling your business model caused an 80% revenue crash because you refused to adopt flexible data stores!",
          "reflectionQuestion": "How does adopting specialized database engines unlock massive business capability and revenue growth?"
        }
      }
    ],
    "discovery": {
      "badge": "Database Architecture: Relational vs. Non-Relational (SQL vs. NoSQL)",
      "tagline": "Multi-model storage architecture and Polyglot Persistence across the enterprise",
      "simpleMeaning": "Database architecture selects storage engines tailored to workload attributes: Relational (SQL) provides rigid schemas, ACID safety, and multi-table joins; Non-Relational (NoSQL) provides flexible schemas, horizontal cluster scaling, and sub-millisecond in-memory lookups.",
      "analogy": "Standard uniform numbers belong in tabular ledgers (SQL); varied physical items belong in flexible modular boxes (Document NoSQL); and fast temporary baskets belong in an open accessible bin (Key-Value Redis).",
      "howItWorks": [
        "1. SQL (Relational): Structured Tables, rigid schemas, scaled vertically, strict ACID safety. Ideal for billing, accounting ledgers, and relational data.",
        "2. Document Stores (MongoDB): Stores items as dynamic JSON documents. Highly suited for diverse product catalogs where attributes differ across categories.",
        "3. Key-Value Stores (Redis): In-memory lookup dictionary with sub-millisecond responses. Suited for user carts, caching, and active sessions.",
        "4. Wide-Column Stores (Cassandra): High write throughput partitioned across nodes for time-series events and telemetry.",
        "5. Polyglot Persistence: Production systems leverage multiple database engines, pairing SQL where consistency is non-negotiable with NoSQL for ultra-low latency."
      ],
      "whyItMatters": "Using the wrong database engine leads to table-locking freezes, CPU exhaustion, bloated NULL columns, or corrupted financial records.",
      "visualExplanation": "Checkout & Ledger \u2500\u2500\u25ba PostgreSQL (SQL / ACID / Strict Tables)\nProduct Catalog \u2500\u2500\u25ba MongoDB (Document NoSQL / JSON Schemas)\nActive Shopping Carts \u2500\u2500\u25ba Redis (In-Memory Key-Value / Microsecond Speed)",
      "contrast": {
        "termA": "SQL (Relational Databases)",
        "descA": "Rigid schemas, ACID transactions, powerful multi-table JOINs. Best for core banking ledgers, orders, and billing.",
        "termB": "NoSQL (Non-Relational Databases)",
        "descB": "Flexible schemas, horizontal cluster scaling, sub-millisecond in-memory caching. Best for catalogs, carts, and event streams."
      },
      "advancedInfo": "Polyglot Persistence is the enterprise standard. For example, Amazon uses DynamoDB (NoSQL) for ultra-fast shopping cart lookups and relational databases for formal invoicing and ledger audits.",
      "teacherNotes": {
        "concept": "SQL vs. NoSQL Paradigm, Document Stores, Key-Value Stores, Polyglot Persistence",
        "experience": "Students saw why 300-column tables freeze databases on Sunday afternoons and why specialized data engines operate with maximum efficiency.",
        "realWorld": "Uber uses MySQL/PostgreSQL for trip ledgers, Redis for real-time driver coordinates, and Apache Cassandra for telemetry logs.",
        "question": "What is the CAP Theorem (Consistency, Availability, Partition Tolerance), and why can distributed NoSQL databases choose only two?"
      }
    },
    "youtubeUrl": "https://youtu.be/n_6OgQQmxM8?si=jGYX5ZCM-YI0j5Wn",
    "videoId": "n_6OgQQmxM8",
    "videoTitle": "Database Concepts | System Design | Tamil"
  },
{
    "id": 10,
    "stage": 5,
    "sno": 10,
    "topic": "OLTP vs. OLAP",
    "concept": "OLTP vs. OLAP: Fast Transactional Processing vs. Deep Analytical Processing",
    "title": "Level 10: Cash Register vs. The Accountant's Giant Ledger (OLTP vs. OLAP)",
    "time": "Day 150 — Financial Audits & Live Checkout Counters",
    "usersCount": "100 Active Registers & 500,000 Invoices/Day",
    "topicHint": "OLTP vs. OLAP Architecture",
    "situation": "Your supermarket is bustling with thousands of customers scanning groceries at 100 busy checkout registers. At the exact same time, your Chief Financial Officer (CFO) arrives with a team of data analysts. They sit down at a back-office desk and run a massive analytical query: \"Calculate total revenue, profit margins, and supplier purchase trends across all 50 product categories over the past 5 years.\" Both the live checkout cashiers and the CFO are connected to the exact same database server.",
    "problem": "What is your architectural decision to handle live transaction checkout counters alongside heavy business analytics?",
    "simulationType": "oltp_olap_registers",
    "choices": [
      {
        "id": "A",
        "text": "Force cashiers and the CFO to share the exact same billing database machine simultaneously without any separation.",
        "isOptimal": false,
        "consequenceText": "Your checkout counters turn into a nightmare. A single analytical query from the CFO locks thousands of database table rows. Cashier scanners freeze mid-transaction with the spinning wheel of death. Customers waiting in 100 checkout lanes become furious as lines stretch into the parking lot. Register terminals timeout, leading to lost sales, frustrated shoppers abandoning full carts, and complete operational paralysis.",
        "resultState": "oltp_olap_deadlock",
        "statImpact": {
          "latency": "Frozen (30s+)",
          "capacity": "Deadlocked",
          "risk": "Storewide Register Lockup",
          "cost": "Massive Sales Loss"
        },
        "whatHappened": {
          "helped": "You avoided setting up a secondary reporting database.",
          "bottleneck": "Heavy multi-table analytical aggregations locked relational database rows, causing live checkout cashiers to freeze!",
          "reflectionQuestion": "Why should high-throughput row-level OLTP writes never compete with heavy columnar OLAP queries on the same machine?"
        }
      },
      {
        "id": "B",
        "text": "Separate the data systems: keep a fast, lightweight ledger at the front registers for instant billing (OLTP), and periodically copy sales data into a dedicated analytical data warehouse for the CFO (OLAP).",
        "isOptimal": true,
        "consequenceText": "Checkout lanes operate at lightning speed. Cashiers scan individual items and complete payments in under 50 milliseconds using the high-performance OLTP database. Every night, an automated ETL pipeline extracts completed receipts, transforms them, and loads them into a specialized columnar data warehouse (OLAP). The CFO runs multi-year business intelligence queries across millions of rows in seconds without ever touching live cash registers.",
        "resultState": "oltp_olap_harmony",
        "statImpact": {
          "latency": "Under 50ms",
          "capacity": "500,000 Sales/Day",
          "risk": "Zero Lockouts",
          "cost": "Optimal Sizing"
        },
        "successSummary": "Separating OLTP (row-based transactional database) from OLAP (columnar analytical warehouse via ETL) ensures sub-50ms billing and powerful business reporting!"
      },
      {
        "id": "C",
        "text": "Ban the CFO and business analysts from ever looking at historical sales data or auditing company finances.",
        "isOptimal": false,
        "consequenceText": "Your cashiers scan items quickly, but your executive team is completely blind. Without sales analytics, the supermarket overstocks perishable dairy products that spoil on shelves while high-demand items run out of stock. Management cannot track revenue leaks, calculate tax filings, or negotiate wholesale discounts, steering the entire business toward bankruptcy.",
        "resultState": "blind_management",
        "statImpact": {
          "latency": "Fast Scans",
          "capacity": "Blind Operations",
          "risk": "Inventory Spoilage & Tax Fines",
          "cost": "Business Bankruptcy"
        },
        "whatHappened": {
          "helped": "Billing database performance remained unaffected.",
          "bottleneck": "Depriving management of analytical business intelligence prevented inventory optimization and financial planning!",
          "reflectionQuestion": "How do modern organizations extract competitive business value from operational transactional data without impacting latency?"
        }
      }
    ],
    "discovery": {
      "badge": "OLTP vs. OLAP",
      "tagline": "Separating fast transactional billing from heavy analytical business intelligence",
      "simpleMeaning": "OLTP powers fast, real-time day-to-day operations (like scanning groceries and payments), while OLAP analyzes massive historical datasets to reveal long-term business trends.",
      "analogy": "You do not make checkout clerks pause customer lines while corporate headquarters audits five years of receipts on the counter terminal. Live registers stay physically separate from corporate audit archives.",
      "howItWorks": [
        "1. OLTP (Online Transaction Processing): Handles high volumes of quick, row-based read/write queries (INSERT bill, UPDATE stock) using normalized SQL databases with sub-second response times.",
        "2. ETL Pipeline (Extract, Transform, Load): Periodically extracts operational logs from OLTP, transforms and aggregates them, and loads them into an analytical repository.",
        "3. OLAP (Online Analytical Processing): Uses columnar storage (Snowflake, BigQuery, ClickHouse) to scan millions of records across specific metrics (e.g. SUM revenue by region) without impacting live users."
      ],
      "whyItMatters": "Running heavy analytical queries on live operational databases locks records, spikes CPU usage to 100%, and freezes customer-facing checkout transactions.",
      "visualExplanation": "Checkout Lanes ──► OLTP (PostgreSQL: Row-based / Fast Writes / Normalized)\n                      │\n             [Nightly ETL Pipeline]\n                      ▼\nManagement BI ──► OLAP (Snowflake/ClickHouse: Columnar / Aggregations / Read-Heavy)",
      "contrast": {
        "termA": "OLTP (Transactional Systems)",
        "descA": "Row-oriented storage, normalized schemas, high concurrency, ACID guarantees, milliseconds latency. Example: Checkout & wallet payments.",
        "termB": "OLAP (Analytical Systems)",
        "descB": "Columnar storage, denormalized star schemas, batch queries scanning billions of rows, complex aggregations. Example: 5-year revenue trends."
      },
      "advancedInfo": "Column-oriented databases in OLAP store all values of a single column contiguously on disk. When computing SUM(revenue), the engine reads only the revenue column blocks without scanning millions of unused customer names and timestamps.",
      "teacherNotes": {
        "concept": "OLTP vs. OLAP, ETL Pipelines, Row vs Columnar Storage",
        "experience": "Students experienced why running 5-year financial audits on live cashier databases locks checkout lanes and why dual architecture is essential.",
        "realWorld": "Walmart processes millions of point-of-sale transactions via OLTP databases, while loading daily sales into petabyte-scale data lakes and OLAP warehouses for supply chain planning.",
        "question": "Why is columnar storage 100x faster than row-oriented storage for calculating average monthly sales across 500 million records?"
      }
    },
    "youtubeUrl": "https://youtu.be/iw-5kFzIdgY?si=kcg0XyDWZ49jkB75",
    "videoId": "iw-5kFzIdgY",
    "videoTitle": "OLTP vs OLAP | System Design Explained"
  },
  {
    "id": 11,
    "stage": 5,
    "sno": 11,
    "topic": "ACID Properties",
    "concept": "ACID Properties: Atomicity, Consistency, Isolation, and Durability",
    "title": "Level 11: The Multi-Step Vault Deposit (ACID Deep Dive)",
    "time": "Day 180 — Automated Digital Wallet System",
    "usersCount": "10,000 Concurrent Transfers & Blackout Tests",
    "topicHint": "ACID Transaction Guarantees",
    "situation": "You are introducing an automated Customer Wallet payment system. A shopper wants to transfer Rs. 1,000 from their personal bank wallet into the supermarket vault to buy groceries. This requires two distinct database steps: Step 1: Deduct Rs. 1,000 from the customer's wallet balance. Step 2: Add Rs. 1,000 to the supermarket's central store ledger. Just as Step 1 finishes, a sudden thunderstorm causes a power blackout, plunging the server room into darkness and shutting down the machine before Step 2 executes!",
    "problem": "What is your architectural decision to ensure multi-step financial transactions never lose money or leave accounts out of sync?",
    "simulationType": "acid_atomic_vault",
    "choices": [
      {
        "id": "A",
        "text": "Run the two steps independently without safety wrappers. When power returns, hope the customer or manager notices any missing funds.",
        "isOptimal": false,
        "consequenceText": "The customer turns on their phone after the blackout: Rs. 1,000 was deducted from their personal wallet, but the supermarket system shows Rs. 0 received! The shopper has lost money, your staff has no record of the deposit, and the customer angrily files a fraud lawsuit. Your ledger is corrupted, and public trust in your digital payment system is ruined.",
        "resultState": "money_vanished",
        "statImpact": {
          "latency": "Uncertain",
          "capacity": "Corrupted",
          "risk": "Vanished Funds & Lawsuits",
          "cost": "Disastrous"
        },
        "whatHappened": {
          "helped": "You avoided transaction management overhead.",
          "bottleneck": "A partial write failure occurred mid-transfer, leaving money deducted from the sender but never credited to the recipient!",
          "reflectionQuestion": "Why must multi-statement database operations execute under atomic all-or-nothing guarantees?"
        }
      },
      {
        "id": "B",
        "text": "Wrap both ledger steps in an atomic, all-or-nothing transaction block (BEGIN TRANSACTION ... COMMIT) backed by a Write-Ahead Log (WAL) so incomplete operations roll back automatically on crashes.",
        "isOptimal": true,
        "consequenceText": "The database transaction engine handles the failure cleanly. Because both steps were wrapped in an atomic transaction, the engine detects that Step 2 was interrupted by the power cut. Upon reboot, the database consults its Write-Ahead Log (WAL) and automatically rolls back Step 1. The Rs. 1,000 is restored to the shopper's wallet with zero lost pennies. When the shopper reconnects, the transfer retries and completes cleanly.",
        "resultState": "acid_rollback_success",
        "statImpact": {
          "latency": "Under 10ms",
          "capacity": "10,000 Concurrent Tx",
          "risk": "Zero Data Loss",
          "cost": "Mathematical Precision"
        },
        "successSummary": "ACID transaction guarantees: Atomicity rolls back partial crashes, Consistency preserves balance rules, Isolation prevents race conditions, and Durability saves confirmed writes to disk!"
      },
      {
        "id": "C",
        "text": "Trust the customer's handwritten word and manually credit money whenever anyone claims a power cut interrupted their payment.",
        "isOptimal": false,
        "consequenceText": "Fraudsters quickly take advantage of your policy. Dishonest visitors intentionally disconnect their mobile network mid-payment, claim a crash occurred, and demand free store credits. Within a week, the supermarket ledger shows massive financial deficits and thousands of unbacked free credits, bankrupting the store.",
        "resultState": "fraud_exploit",
        "statImpact": {
          "latency": "Manual & Slow",
          "capacity": "Exploited",
          "risk": "Rampant Fraud & Deficits",
          "cost": "Total Bankruptcy"
        },
        "whatHappened": {
          "helped": "You resolved individual customer complaints manually.",
          "bottleneck": "Replacing automated ACID integrity with manual honor systems invited widespread fraud and drained store reserves!",
          "reflectionQuestion": "Why must database consistency be enforced mathematically by software rather than human discretion?"
        }
      }
    ],
    "discovery": {
      "badge": "ACID Properties",
      "tagline": "Atomicity, Consistency, Isolation, and Durability in relational transactions",
      "simpleMeaning": "ACID is a set of four mathematical guarantees that ensure database transactions execute reliably without lost money, dirty data, or corruption even during power failures.",
      "analogy": "When handing money through a bank window, the transaction is not complete until the teller takes the cash AND stamps your deposit slip. If an emergency occurs midway, the cash stays safely in your hand.",
      "howItWorks": [
        "1. Atomicity (\"All or Nothing\"): Entire operation executes as an indivisible unit. If any step fails or the system crashes, the entire transaction rolls back completely.",
        "2. Consistency (\"Integrity Enforced\"): Guarantees state transitions preserve all schema constraints, account balance limits (balance >= 0), and foreign keys.",
        "3. Isolation (\"Independent Execution\"): Concurrent transactions execute without seeing intermediate, uncommitted updates from other active transactions.",
        "4. Durability (\"Permanence\"): Once a transaction is committed, changes are written to non-volatile disk storage (Write-Ahead Logging / WAL) and survive sudden reboots."
      ],
      "whyItMatters": "Without ACID guarantees, financial transfers lose funds mid-flight, e-commerce stores oversell inventory, and sudden power outages corrupt master database ledgers.",
      "visualExplanation": "[BEGIN TRANSACTION]\nStep 1: Deduct Rs. 1,000 from Wallet (Pending)\n   ⚡ POWER FAILURE! ⚡\n[SYSTEM RECOVERY] ──► WAL Log Rollback ──► Step 1 Undone ──► Wallet Restored",
      "contrast": {
        "termA": "ACID Transactions",
        "descA": "Strict mathematical guarantees: atomic commit/rollback, invariant checks, MVCC isolation levels, and write-ahead disk logging.",
        "termB": "Unprotected Concurrency",
        "descB": "Dirty reads, lost updates, race conditions, and corrupted balances caused by unmanaged multi-step operations."
      },
      "advancedInfo": "Relational databases implement Isolation using Multi-Version Concurrency Control (MVCC) and Isolation Levels (Read Committed, Repeatable Read, Serializable). Serializable prevents phantom reads and write skew at the cost of concurrency throughput.",
      "teacherNotes": {
        "concept": "ACID Properties, Transactions, WAL, MVCC Isolation",
        "experience": "Students experienced what happens when a power outage strikes between wallet deduction and store credit, and saw how WAL rollbacks protect funds.",
        "realWorld": "Payment gateways like Stripe and UPI process hundreds of millions of atomic transactions daily, relying on relational ACID engines to guarantee zero dropped money.",
        "question": "What is the difference between Atomicity (all-or-nothing execution) and Durability (permanent persistence on disk)?"
      }
    },
    "youtubeUrl": "https://youtu.be/TxSoMvMDClY?si=KvUAAjH9jTPQY6w1",
    "videoId": "TxSoMvMDClY",
    "videoTitle": "ACID Transactions Explained"
  },
  {
    "id": 12,
    "stage": 5,
    "sno": 12,
    "topic": "Database Replication",
    "concept": "Database Replication: Primary-Replica (Master-Slave) Architecture",
    "title": "Level 12: The Backup Store Ledgers (Database Replication)",
    "time": "Day 210 — 100 Checkout Lanes Peak Rush",
    "usersCount": "100 Registers Querying Simultaneously",
    "topicHint": "Primary-Replica Replication",
    "situation": "Your supermarket now has 100 checkout lanes running all day. Every lane needs to read product prices, verify membership discounts, and record completed sales. All 100 cashiers are querying a single database machine in the basement. The database machine's hard drive is grinding loudly, CPU usage sits at 99%, and querying the price of a chocolate bar takes 8 seconds per scan. Cashiers are sweating, lines are out the door, and the chief engineer warns that if this single machine dies, the entire store shuts down.",
    "problem": "What is your architectural decision to scale database read capacity and prevent a Single Point of Failure?",
    "simulationType": "db_replication_cluster",
    "choices": [
      {
        "id": "A",
        "text": "Keep all 100 registers connected to that single database machine. If it burns out, close the supermarket for the day.",
        "isOptimal": false,
        "consequenceText": "At 2:00 PM on a Saturday, the overworked database hard drive overheats and burns out. The entire store freezes instantly: no cash register can scan prices, customer carts are stuck in queues, and the store manager is forced to lock the doors and turn away 1,500 shoppers. The supermarket loses millions in revenue and takes three days to recover data from tape backups.",
        "resultState": "single_spof_burnout",
        "statImpact": {
          "latency": "Dead",
          "capacity": "0 (Burned Out)",
          "risk": "Complete Single Point of Failure",
          "cost": "Storewide Shutdown"
        },
        "whatHappened": {
          "helped": "You maintained only one database machine without setting up network sync.",
          "bottleneck": "Relying on a single hardware node concentrated all read/write load onto one disk and created a fatal Single Point of Failure!",
          "reflectionQuestion": "Why is relying on a single database server unacceptable for high-availability production environments?"
        }
      },
      {
        "id": "B",
        "text": "Set up Primary-Replica Replication: designate one Primary server strictly for sales writes, and clone several Read Replicas that continuously sync data to handle all price check lookups.",
        "isOptimal": true,
        "consequenceText": "System performance improves immediately. The single Primary machine receives completed sales receipts and streams changes to four Read Replicas. The 100 cashiers distribute their price lookups across the replicas. Price scans drop from 8 seconds to 3 milliseconds! Best of all, when one replica server undergoes maintenance, the other replicas absorb the traffic with zero downtime.",
        "resultState": "replication_harmony_success",
        "statImpact": {
          "latency": "3ms Scan",
          "capacity": "100 Lanes Parallel",
          "risk": "High Availability",
          "cost": "Resilient Scaling"
        },
        "successSummary": "Primary-Replica replication offloads heavy read traffic to synced replicas, protecting the Primary for writes and eliminating Single Points of Failure!"
      },
      {
        "id": "C",
        "text": "Give every cashier their own isolated local database that never syncs with other cashiers.",
        "isOptimal": false,
        "consequenceText": "Total operational breakdown occurs within an hour. Cashier 1 sells the last bag of imported rice, but Cashier 4's isolated database still shows 10 bags in stock and sells it to someone else. Cashier 10 offers an outdated 50% discount because their local database was never updated. Inventory records diverge hopelessly, leading to double-sales, stock errors, and angry arguments.",
        "resultState": "isolated_split_brain",
        "statImpact": {
          "latency": "Fast Local",
          "capacity": "Desynchronized",
          "risk": "Severe Inventory Drift",
          "cost": "Accounting Nightmare"
        },
        "whatHappened": {
          "helped": "Cashiers did not share a bottlenecked network connection.",
          "bottleneck": "Unsynchronized isolated databases caused severe data divergence, double-selling out-of-stock items, and invalid pricing!",
          "reflectionQuestion": "How does data replication maintain consistent state across multiple nodes while scaling read performance?"
        }
      }
    ],
    "discovery": {
      "badge": "Replication",
      "tagline": "Primary-Replica architecture, read scaling, and automatic failover",
      "simpleMeaning": "Database Replication copies data across multiple servers so read traffic is spread out and the application keeps running even if one server dies.",
      "analogy": "Instead of making every clerk run down to the same master filing cabinet to read prices, you print multiple live carbon-copy price sheets for each counter. Only official sales updates are recorded into the master ledger.",
      "howItWorks": [
        "1. Primary Node (Master): Exclusively processes all write operations (INSERT, UPDATE, DELETE) and records changes to an append-only replication log.",
        "2. Replication Stream: Replicas connect over the network and continuously pull the log stream (synchronously or asynchronously).",
        "3. Read Replicas (Slaves): Process read queries (SELECT) concurrently, scaling read capacity linearly with each additional replica node.",
        "4. Automatic Failover: If the Primary crashes, a health monitoring consensus elects a replica to become the new Primary automatically."
      ],
      "whyItMatters": "Most web applications have a 95:5 read-to-write ratio. Replicas scale read throughput by orders of magnitude while ensuring high availability.",
      "visualExplanation": "Cashier Writes (Orders) ──► Primary DB (Master)\n                                   │ [Replication Log Stream]\n                                   ▼\nCashier Reads (Prices)  ──► Read Replica 1  |  Read Replica 2  |  Read Replica 3",
      "contrast": {
        "termA": "Primary Node (Write Master)",
        "descA": "Single source of truth for write modifications. Ensures strict write consistency and orders operations into the change stream.",
        "termB": "Read Replicas (Followers)",
        "descB": "Horizontally scaled read-only instances. Serve millions of concurrent queries, offloading the Primary node."
      },
      "advancedInfo": "Replication can be Synchronous (Primary waits for replicas to confirm write, ensuring zero data loss but increasing write latency) or Asynchronous (Primary acknowledges immediately, providing ultra-low latency with minor replication lag window).",
      "teacherNotes": {
        "concept": "Database Replication, Primary-Replica, Replication Lag, High Availability",
        "experience": "Students witnessed a single overworked database burn out under 100 registers, and resolved it by offloading reads to replicas.",
        "realWorld": "Platforms like Twitter, YouTube, and Netflix utilize tens of thousands of read replicas to serve billions of read queries per second worldwide.",
        "question": "What is Replication Lag, and how can it cause a user to refresh their profile page and briefly see old data?"
      }
    },
    "youtubeUrl": "https://youtu.be/bI8Ry6GhMSE?si=VSg9Nu0aAo_tRhQr",
    "videoId": "bI8Ry6GhMSE",
    "videoTitle": "Database Replication Strategies"
  },
  {
    "id": 13,
    "stage": 5,
    "sno": 13,
    "topic": "Caching Strategies",
    "concept": "Caching Strategies: In-Memory Caching & Cache Eviction (LRU/LFU)",
    "title": "Level 13: The Cashier's Sticky Notepad (Caching Strategies)",
    "time": "Day 240 — Hot Summer Rush on Soda & Water",
    "usersCount": "90% Repeated Lookups for Top 5 Items",
    "topicHint": "Cache-Aside & In-Memory Redis",
    "situation": "Even with database replicas, your registers are overwhelmed on hot summer afternoons. 90% of shoppers are buying the exact same five items: cold mineral water, soda cans, ice bags, chips, and bread. For every single customer, the cashier terminal sends a network query down to the replica database hard drive to look up the price of water, wait for the disk to spin, and return the price. Disk I/O is exhausted, and cashiers are repeating the exact same lookup thousands of times an hour.",
    "problem": "What is your architectural decision to eliminate redundant disk queries for frequently accessed data?",
    "simulationType": "caching_sticky_notepad",
    "choices": [
      {
        "id": "A",
        "text": "Continue querying the database disk for every single can of soda and bottle of water, regardless of how often it is scanned.",
        "isOptimal": false,
        "consequenceText": "Your database disks continue to run hot and slow down. Even though you added replicas in Level 12, disk read heads are thrashing constantly to fetch the identical Rs. 20 mineral water price 80,000 times an hour. Latency stays high, power consumption doubles, and checkout queues back up needlessly.",
        "resultState": "disk_thrashing_fatigue",
        "statImpact": {
          "latency": "Slow Disk I/O",
          "capacity": "Wasted Read Head",
          "risk": "Repeated Redundant Queries",
          "cost": "High Disk Wear"
        },
        "whatHappened": {
          "helped": "You did not consume memory for a cache layer.",
          "bottleneck": "Querying spinning disks for the same static data thousands of times per minute caused severe disk I/O thrashing!",
          "reflectionQuestion": "Why is accessing physical disk or database storage thousands of times slower than reading from in-memory RAM?"
        }
      },
      {
        "id": "B",
        "text": "Install an ultra-fast in-memory cache directly on the cashier counter (a quick Sticky Notepad / Redis). Store popular item prices in memory, and use an LRU eviction rule to discard rarely searched items when space fills up.",
        "isOptimal": true,
        "consequenceText": "The billing counters become blazing fast. The first time water is scanned, the price is fetched from the database and written to the cache (Cache Miss). Every subsequent scan pulls the price directly from lightning-fast RAM in 0.2 milliseconds (Cache Hit)! 90% of database queries disappear instantly. When seasonal items arrive, the Least Recently Used (LRU) policy gracefully discards stale items to keep the notepad compact.",
        "resultState": "cache_hit_bliss",
        "statImpact": {
          "latency": "0.2ms In-Memory",
          "capacity": "90% Hit Ratio",
          "risk": "Minimal Disk I/O",
          "cost": "Ultra Efficient"
        },
        "successSummary": "In-memory caching (Redis/Memcached) delivers sub-millisecond lookups for hot data, reducing database disk pressure by 90% with LRU eviction!"
      },
      {
        "id": "C",
        "text": "Store every single price in the cashier's personal memory and ban the store from ever updating prices.",
        "isOptimal": false,
        "consequenceText": "Cashiers memorize prices, but the moment a supplier changes a price or a cashier gets fatigued, they mischarge items. Furthermore, when new employees join, they do not know any prices and checkout lines halt entirely. The business loses revenue due to human error and rigid pricing.",
        "resultState": "human_memory_failure",
        "statImpact": {
          "latency": "Erratic",
          "capacity": "Human Limited",
          "risk": "Severe Pricing Errors",
          "cost": "Revenue Discrepancies"
        },
        "whatHappened": {
          "helped": "No electronic database was queried.",
          "bottleneck": "Relying on static human memory caused pricing mistakes, zero agility, and complete failure when onboarding new staff!",
          "reflectionQuestion": "How do caching strategies like Cache-Aside maintain cache freshness through Time-To-Live (TTL) and eviction policies?"
        }
      }
    ],
    "discovery": {
      "badge": "Caching Strategies",
      "tagline": "In-memory caching, Cache-Aside pattern, and LRU/LFU eviction policies",
      "simpleMeaning": "Caching stores copies of frequently accessed data in ultra-fast in-memory RAM (like Redis) so the system doesn't have to repeatedly query slow database disks.",
      "analogy": "A cashier does not walk to the underground storage room to ask the price of milk 500 times a day; they write the price on a sticky note attached to the register monitor. They glance at the note in a split second.",
      "howItWorks": [
        "1. Cache-Aside (Lazy Loading): The application queries the in-memory cache first. On a Cache Hit, it returns data in microseconds. On a Cache Miss, it reads the database, writes to cache, and returns.",
        "2. Write-Through: Data is written to both cache and database simultaneously, ensuring consistency at the expense of write latency.",
        "3. Write-Back: Data is written to cache first and asynchronously flushed to disk in batches, providing maximum write throughput.",
        "4. LRU Eviction (Least Recently Used): When the cache reaches memory limits, the least recently queried entries are evicted to make room for new hot data."
      ],
      "whyItMatters": "RAM access is 100,000x faster than disk I/O. Caching absorbs over 90% of repeat traffic, dramatically lowering database costs and latency.",
      "visualExplanation": "Register Request ──► Cache Lookup (Redis RAM) ──[HIT: 0.2ms]──► Instant Response!\n                            │\n                      [MISS: 8ms]\n                            ▼\n                     Database (Disk) ──► Write into Cache ──► Return to Register",
      "contrast": {
        "termA": "In-Memory Cache (RAM / Redis)",
        "descA": "Sub-millisecond latency, volatile high-speed key-value store, handles hundreds of thousands of operations per second.",
        "termB": "Persistent Database (Disk / SSD)",
        "descB": "Higher latency (millisecond range), ACID durable storage, disk read head/bus overhead. Relieved by cache hits."
      },
      "advancedInfo": "Cache invalidation is a classic computer science challenge. Production systems set Time-To-Live (TTL) timestamps on keys so cached entries expire automatically, avoiding stale price discrepancies.",
      "teacherNotes": {
        "concept": "Caching Strategies, Cache Hit/Miss, LRU vs LFU, Cache-Aside Pattern",
        "experience": "Students solved database disk bottlenecks during hot summer soda rushes by introducing an in-memory sticky note cache.",
        "realWorld": "Facebook, Reddit, and Netflix serve over 95% of incoming user requests directly from distributed Redis and Memcached clusters.",
        "question": "What is the difference between Least Recently Used (LRU) and Least Frequently Used (LFU) eviction policies?"
      }
    },
    "youtubeUrl": "https://youtu.be/_d3yaOg8PIQ?si=BTMDHWf-AzkkIpF7",
    "videoId": "_d3yaOg8PIQ",
    "videoTitle": "Caching Strategies & Eviction Policies"
  },
  {
    "id": 14,
    "stage": 6,
    "sno": 14,
    "topic": "CDN",
    "concept": "Content Delivery Networks (CDN): Edge Caching & Geographical PoPs",
    "title": "Level 14: Kiosks Across the State (Content Delivery Networks - CDN)",
    "time": "Day 270 — Statewide Expansion Across Tamil Nadu",
    "usersCount": "500,000 Statewide Mobile Users",
    "topicHint": "CDN & Edge Caching",
    "situation": "Your brand has become famous! Shoppers across the entire state of Tamil Nadu want to browse your daily digital catalog, view high-resolution photos of fresh bakery treats, and download the daily promotional flyer. However, your main server building is located entirely in Coimbatore. When a shopper in Chennai (500 km away) opens the app to look at the daily 5 MB photo flyer, the network data packets must travel back and forth over hundreds of kilometers of optical fiber. The photos load line-by-line over several agonizing seconds, and users in remote cities complain that your app feels sluggish and broken.",
    "problem": "What is your architectural decision to deliver heavy digital assets to geographically distant users at lightning speed?",
    "simulationType": "cdn_edge_kiosks",
    "choices": [
      {
        "id": "A",
        "text": "Force all customers across all cities to download heavy product images, videos, and brochures directly from the single server building in Coimbatore.",
        "isOptimal": false,
        "consequenceText": "Your Coimbatore servers get overwhelmed by bandwidth demands. Thousands of concurrent 5 MB downloads saturate your network connection. Shoppers in Chennai and Madurai experience buffering, image download timeouts, and 6-second page load times. Distant users get frustrated and abandon their online grocery carts.",
        "resultState": "optical_bandwidth_choke",
        "statImpact": {
          "latency": "6+ Seconds (500km)",
          "capacity": "Network Saturated",
          "risk": "Geographic High Latency",
          "cost": "Massive Transit Costs"
        },
        "whatHappened": {
          "helped": "You hosted all files on a single central server.",
          "bottleneck": "Sending heavy static media files over hundreds of kilometers for every user request saturated bandwidth and caused high network latency!",
          "reflectionQuestion": "Why does physical geographical distance introduce unavoidable latency according to the laws of physics and speed of light in optical fiber?"
        }
      },
      {
        "id": "B",
        "text": "Set up small local digital kiosks (Edge Caches / CDN) in Chennai, Madurai, Salem, and Trichy. Store static images and flyers on these edge servers close to local users so they load instantly.",
        "isOptimal": true,
        "consequenceText": "App performance becomes blazing fast across the entire map. When a shopper in Chennai opens the brochure, the 5 MB photo loads in 20 milliseconds directly from the local Chennai Edge Server (Point of Presence). The central server in Coimbatore only processes dynamic checkout payments, reducing origin bandwidth consumption by 85%!",
        "resultState": "edge_cdn_speed",
        "statImpact": {
          "latency": "20ms Local Edge",
          "capacity": "500,000 Users Everywhere",
          "risk": "Zero Origin Overload",
          "cost": "85% Bandwidth Saved"
        },
        "successSummary": "Content Delivery Networks (CDNs) cache static assets at geographically distributed Edge PoPs, reducing latency from seconds to milliseconds!"
      },
      {
        "id": "C",
        "text": "Remove all images, colors, and styling from the app, turning the catalog into pure plaintext so distant users download smaller files.",
        "isOptimal": false,
        "consequenceText": "Your app looks like a dull 1985 terminal screen. Shoppers cannot see what the cakes look like, whether the fruits look ripe, or what colors the clothes are. Engagement drops, conversion rates plummet, and shoppers uninstall the app in favor of visually appealing competitor apps.",
        "resultState": "terminal_screen_abandonment",
        "statImpact": {
          "latency": "Small Text Only",
          "capacity": "Ruined Experience",
          "risk": "Zero Visual Appeal",
          "cost": "Massive Customer Churn"
        },
        "whatHappened": {
          "helped": "Payload size was reduced to small plaintext.",
          "bottleneck": "Stripping visual assets ruined user experience and caused shoppers to uninstall the app in favor of visually rich competitors!",
          "reflectionQuestion": "How does a CDN allow web applications to serve rich multimedia experiences without melting the origin server?"
        }
      }
    ],
    "discovery": {
      "badge": "CDN",
      "tagline": "Geographically distributed Edge Caching, Points of Presence, and Origin Shielding",
      "simpleMeaning": "A Content Delivery Network (CDN) is a worldwide network of edge servers that cache static files (images, videos, styles) close to users so they load with near-zero latency.",
      "analogy": "If a company in Coimbatore prints 50,000 paper catalogs every morning, it does not make customers drive 500 km from Chennai to pick one up. It ships boxes of catalogs to small distribution kiosks in every city so customers grab one locally in seconds.",
      "howItWorks": [
        "1. Edge Servers (Points of Presence / PoPs): Caching servers placed geographically close to end users (e.g., Cloudflare, CloudFront, Akamai).",
        "2. Static Asset Offloading: Heavy, unchanging files (images, CSS styles, JavaScript bundles, video streams) are cached at edge locations.",
        "3. Origin Shielding: Only dynamic API requests (like payments or user profiles) travel all the way back to the Origin Server in Coimbatore.",
        "4. Anycast Routing: Network routing directs user DNS requests to the topologically nearest edge server automatically."
      ],
      "whyItMatters": "Light traveling through optical fiber takes ~5ms per 1,000km, plus routing hops. Moving content close to users cuts round-trip times from seconds to single-digit milliseconds.",
      "visualExplanation": "Chennai Shopper ──► Chennai Edge PoP (CDN) ──[Cached Images in 20ms]──► Instant Display!\n                              │ (Cache Miss Only)\n                              ▼\nCoimbatore Origin Server ──► Serves Dynamic APIs & Checkout Only",
      "contrast": {
        "termA": "CDN Edge Servers (PoPs)",
        "descA": "Distributed worldwide, caches static images/videos/bundles, shields origin servers from 90% of bandwidth traffic.",
        "termB": "Origin Server",
        "descB": "Central backend application server where master databases and dynamic business logic reside."
      },
      "advancedInfo": "CDNs utilize Anycast IP routing and BGP announcements so millions of users globally connect to the exact same IP address, but network routers automatically steer each user to their geographically closest edge facility.",
      "teacherNotes": {
        "concept": "Content Delivery Networks (CDNs), Edge PoPs, Anycast Routing, Origin Shielding",
        "experience": "Students solved 500km optical fiber latency between Coimbatore and Chennai by placing Edge Caches in major cities.",
        "realWorld": "Netflix offloads over 95% of all streaming video traffic through its Open Connect CDN appliances deployed directly inside local ISP networks.",
        "question": "What types of web application data belong on a CDN edge versus what must always hit the origin server?"
      }
    },
    "youtubeUrl": "https://youtu.be/8QPyXxBPYCI?si=6aNoHzdPBVTParC6",
    "videoId": "8QPyXxBPYCI",
    "videoTitle": "CDN Architecture & Edge Caching"
  },
  {
    "id": 15,
    "stage": 7,
    "sno": 15,
    "topic": "Horizontal vs. Vertical Scaling",
    "concept": "Scaling Paradigms: Horizontal (Scale Out) vs. Vertical (Scale Up)",
    "title": "Level 15: Outgrowing the Property (Horizontal vs. Vertical Scaling)",
    "time": "Day 300 — Footfall Surges to 200,000 Visitors",
    "usersCount": "200,000 Daily Shoppers (95% CPU Load)",
    "topicHint": "Scale Out vs. Scale Up",
    "situation": "Your customer footfall has grown from 2,000 visitors a day to 200,000 visitors a day. Your application server is groaning. The CPU usage is constantly pegged at 95%, and the cooling fans are screaming. Your chief infrastructure engineer comes to you with two different proposals to prevent the server from crashing under the incoming traffic.",
    "problem": "What is your architectural decision to handle massive traffic growth without hitting physical hardware limits or incurring fatal downtime?",
    "simulationType": "scaling_cluster_nodes",
    "choices": [
      {
        "id": "A",
        "text": "Vertical Scaling (Scale Up): Take down the server tonight, replace the motherboard with the most powerful 128-core enterprise CPU money can buy, and max out the RAM to 1 Terabyte on that single machine.",
        "isOptimal": false,
        "consequenceText": "Upgrading the single machine provides temporary relief, but you quickly run into harsh limitations: You must take the supermarket offline for several hours during the hardware installation, causing downtime. The specialized super-computer parts cost 10 times more than standard hardware, draining your budget. Three months later, traffic doubles again. You call the hardware vendor to upgrade the CPU, and they inform you: \"There are no larger chips manufactured on Earth.\" You have hit the physical ceiling of vertical growth, and that single machine remains a Single Point of Failure (SPOF).",
        "resultState": "vertical_hardware_ceiling",
        "statImpact": {
          "latency": "Single Node",
          "capacity": "Hard Ceiling",
          "risk": "10x Hardware Cost & SPOF",
          "cost": "Prohibitive Expense"
        },
        "whatHappened": {
          "helped": "Software architecture did not need distributed clustering.",
          "bottleneck": "Vertical scaling required hours of server downtime, cost 10x more, hit physical manufacturing limits, and remained a Single Point of Failure!",
          "reflectionQuestion": "Why does every single-machine architecture eventually hit an unbreakable physical wall in compute and memory?"
        }
      },
      {
        "id": "B",
        "text": "Horizontal Scaling (Scale Out): Keep the current server and purchase four additional identical, cost-effective servers. Run them alongside each other as a cluster to share the application load.",
        "isOptimal": true,
        "consequenceText": "Your infrastructure becomes flexible and resilient: You add new server nodes without taking the existing system offline. If one of the smaller machines suffers a power supply failure, the remaining machines continue processing traffic without a storewide outage. When traffic drops late at night, you can power down unnecessary nodes to save electricity, scaling out during the day and scaling in at night.",
        "resultState": "horizontal_cluster_power",
        "statImpact": {
          "latency": "Balanced Load",
          "capacity": "Elastic Multi-Node",
          "risk": "No SPOF",
          "cost": "Cost-Effective Commodity"
        },
        "successSummary": "Horizontal Scaling (Scale Out) clusters commodity servers for limitless elastic capacity, fault tolerance, and zero-downtime expansion!"
      },
      {
        "id": "C",
        "text": "Do nothing and hope that customers stop visiting the supermarket during peak hours.",
        "isOptimal": false,
        "consequenceText": "On the first busy weekend, the single machine overheats, triggers an automatic thermal shutdown, and drops all active connections. Your website and registers crash simultaneously, shoppers are unable to pay, and the business suffers severe revenue losses and public embarrassment.",
        "resultState": "thermal_overheat_crash",
        "statImpact": {
          "latency": "Crashed",
          "capacity": "0 (Overheated)",
          "risk": "Thermal Meltdown",
          "cost": "Catastrophic Brand Damage"
        },
        "whatHappened": {
          "helped": "You spent zero budget on hardware.",
          "bottleneck": "Ignoring 95% CPU utilization triggered an automatic thermal server shutdown that brought down the entire store on a peak weekend!",
          "reflectionQuestion": "Why must engineering teams plan infrastructure scaling before utilization reaches critical thresholds?"
        }
      }
    ],
    "discovery": {
      "badge": "Horizontal vs. Vertical Scaling",
      "tagline": "Elastic commodity server clusters vs. single-machine hardware limits",
      "simpleMeaning": "Vertical Scaling upgrades a single machine with bigger hardware (Scale Up), while Horizontal Scaling adds more servers side-by-side to distribute the load (Scale Out).",
      "analogy": "When a delivery company needs to deliver 10 times more packages, it does not spend billions inventing a monster truck the size of a stadium that cannot fit under bridges. It buys 10 standard delivery vans that drive on regular roads simultaneously.",
      "howItWorks": [
        "1. Vertical Scaling (Scale Up): Upgrades CPU, RAM, and SSD on one machine. Simple to deploy, but hits physical hardware limits, costs exponentially more, and remains a Single Point of Failure.",
        "2. Horizontal Scaling (Scale Out): Adds standard commodity servers to a cluster. Scales near-infinitely, provides fault tolerance, and enables zero-downtime rolling upgrades.",
        "3. Auto-Scaling: Cloud infrastructure automatically spins up new instances when CPU load exceeds 70%, and terminates them when traffic subsides to optimize costs.",
        "4. Stateless Architecture: App servers store no session state locally, allowing any server in the cluster to handle any incoming request."
      ],
      "whyItMatters": "No single computer on earth can handle the traffic of Google, Amazon, or Uber. Distributed horizontal scaling is the bedrock of modern internet infrastructure.",
      "visualExplanation": "Vertical:   [Tiny Server] ──► [Monster Supercomputer] (Hits Physical Wall)\nHorizontal: [Server 1] + [Server 2] + [Server 3] + [Server 4] (Limitless Elastic Cluster)",
      "contrast": {
        "termA": "Vertical Scaling (Scale Up)",
        "descA": "Bigger single box (e.g. 128 cores, 1TB RAM). Requires downtime to upgrade, exponential price tag, hard physical ceiling, single point of failure.",
        "termB": "Horizontal Scaling (Scale Out)",
        "descB": "Adding more commodity nodes. Near-limitless scaling, elastic pay-as-you-go, fault-tolerant redundancy with zero downtime."
      },
      "advancedInfo": "Horizontal scaling requires stateless application tiers. User sessions and authentication tokens are offloaded to shared distributed caches (Redis) or JWTs so any server in the cluster can handle any request interchangeably.",
      "teacherNotes": {
        "concept": "Horizontal vs. Vertical Scaling, Commodity Hardware, Auto-Scaling Groups, Statelessness",
        "experience": "Students compared upgrading a single machine against adding four delivery vans, experiencing why horizontal clustering wins.",
        "realWorld": "Google runs over 2.5 million commodity servers horizontally across global data centers instead of relying on giant mainframe supercomputers.",
        "question": "What architectural requirement must a web application satisfy to be horizontally scalable across 50 servers?"
      }
    },
    "youtubeUrl": "https://youtu.be/xpDnVSmNFX0?si=zA3ZK1TFRwUo3cA5",
    "videoId": "xpDnVSmNFX0",
    "videoTitle": "Horizontal vs Vertical Scaling Explained"
  },
  {
    "id": 16,
    "stage": 7,
    "sno": 16,
    "topic": "Load Balancing",
    "concept": "Load Balancing: Smart Traffic Routing & Node Health Checks",
    "title": "Level 16: The Highway Traffic Director (Load Balancing)",
    "time": "Day 330 — 4 Server Cluster Deployed",
    "usersCount": "Traffic Imbalance: 95% Clumped on Server 1",
    "topicHint": "Load Balancing & Routing Algorithms",
    "situation": "You successfully deployed four identical application servers side-by-side. However, when customers open the app, 95% of incoming connections are still connecting directly to Server 1 because its IP address was hardcoded into early mobile clients. Server 1 catches fire and crashes, while Server 2, Server 3, and Server 4 sit completely idle with 0% CPU utilization!",
    "problem": "What is your architectural decision to distribute incoming user traffic evenly across all backend servers?",
    "simulationType": "load_balancer_traffic",
    "choices": [
      {
        "id": "A",
        "text": "Let customer devices pick random server IP addresses on their own without a central traffic controller.",
        "isOptimal": false,
        "consequenceText": "Client connections clump together unevenly. Some servers end up completely swamped while others remain half-empty. Worse, when Server 3 suffers a hard drive crash, client apps continue blindly sending requests to its dead IP address, causing thousands of shoppers to receive connection failed errors.",
        "resultState": "random_clump_failure",
        "statImpact": {
          "latency": "Erratic Jitter",
          "capacity": "Uneven Distribution",
          "risk": "Dead IP Traffic Routing",
          "cost": "Poor Utilization"
        },
        "whatHappened": {
          "helped": "You did not set up a dedicated load balancing proxy.",
          "bottleneck": "Without centralized health checks and intelligent routing, clients clumped onto single nodes and sent traffic to dead servers!",
          "reflectionQuestion": "Why can client devices never be trusted to perform reliable, health-aware traffic distribution?"
        }
      },
      {
        "id": "B",
        "text": "Place a high-speed Load Balancer in front of the server farm. Implement smart traffic routing algorithms (Round-Robin, Least Connections) and health checks to balance the load evenly.",
        "isOptimal": true,
        "consequenceText": "Traffic flows across your infrastructure smoothly and evenly. The Load Balancer accepts all incoming client connections on a single virtual IP and distributes requests across Servers 1, 2, 3, and 4 in balanced rotation. Its automated health check monitors every node: if Server 3 becomes unresponsive, the Load Balancer instantly detaches it from the active pool in milliseconds with zero dropped customer requests!",
        "resultState": "load_balanced_harmony",
        "statImpact": {
          "latency": "Consistent 25ms",
          "capacity": "4x Balanced Throughput",
          "risk": "Zero Dropped Connections",
          "cost": "Maximum Resource Use"
        },
        "successSummary": "Load Balancers distribute traffic evenly using algorithms like Round-Robin and Least Connections while isolating unhealthy nodes via continuous health checks!"
      },
      {
        "id": "C",
        "text": "Shut down Servers 2, 3, and 4 since they are idle, and force Server 1 to do all the work alone.",
        "isOptimal": false,
        "consequenceText": "You return to the exact same failure state as Level 15. Server 1 immediately crashes under the full weight of the supermarket's user traffic, bringing down the entire digital shopping operation.",
        "resultState": "monolithic_relapse",
        "statImpact": {
          "latency": "Crashed",
          "capacity": "Zero",
          "risk": "Immediate Store Outage",
          "cost": "Self-Inflicted Downtime"
        },
        "whatHappened": {
          "helped": "You saved electricity on idle server instances.",
          "bottleneck": "Shutting down the cluster threw away horizontal scaling and caused Server 1 to immediately crash under overload!",
          "reflectionQuestion": "How does a load balancer unlock the true power of horizontally scaled server clusters?"
        }
      }
    ],
    "discovery": {
      "badge": "Load Balancing",
      "tagline": "Traffic distribution algorithms, health checks, and Layer 4 vs. Layer 7 routing",
      "simpleMeaning": "A Load Balancer acts as a reverse-proxy traffic director in front of your server farm, distributing incoming requests evenly so no single machine gets overloaded.",
      "analogy": "If a venue opens four entrance gates, it does not leave visitors to figure out which line is shortest from the parking lot. A security officer stands at the main entrance barrier, directing the next car in line to whichever specific gate has the shortest queue.",
      "howItWorks": [
        "1. Round-Robin: Requests are distributed sequentially across backend nodes (Node 1 ──► Node 2 ──► Node 3 ──► Node 4). Ideal for uniform request workloads.",
        "2. Least Connections: Directs new requests to whichever node currently has the fewest active, concurrent connections. Ideal for varied processing times.",
        "3. Consistent Hashing: Hashes client attributes (like User ID or Session Key) to consistently map a user to the same node for caching efficiency.",
        "4. Heartbeat Health Checks: Periodically pings /healthz. If a server fails to respond with HTTP 200 OK, it is automatically removed from the active routing pool."
      ],
      "whyItMatters": "Without load balancing, horizontal scaling fails because traffic clumps onto single nodes while others sit idle.",
      "visualExplanation": "Incoming Client Traffic ──► [LOAD BALANCER: Single VIP / Health Checked]\n                                    ├──► Node 1 (25% Load - Healthy)\n                                    ├──► Node 2 (25% Load - Healthy)\n                                    ├──► Node 3 (25% Load - Healthy)\n                                    └──► Node 4 (25% Load - Healthy)",
      "contrast": {
        "termA": "Layer 4 Load Balancing (Transport)",
        "descA": "Routes traffic based purely on network IP and TCP/UDP ports without inspecting application payloads. Ultra-fast and lightweight.",
        "termB": "Layer 7 Load Balancing (Application)",
        "descB": "Inspects HTTP headers, cookies, and URL paths, enabling smart routing (e.g. /checkout to high-memory nodes, /media to CDN)."
      },
      "advancedInfo": "High-availability load balancing pairs active and passive load balancer nodes using VRRP (Virtual Router Redundancy Protocol) with floating virtual IPs (VIPs) to eliminate the load balancer itself as a single point of failure.",
      "teacherNotes": {
        "concept": "Load Balancing, Round-Robin, Least Connections, Health Checks, Layer 4 vs Layer 7",
        "experience": "Students solved a 95% traffic clumping disaster on Server 1 by deploying a smart traffic director with health checking.",
        "realWorld": "AWS Elastic Load Balancer (ELB), NGINX, and HAProxy handle billions of connections per second across modern cloud applications.",
        "question": "What is the difference between Layer 4 (TCP) and Layer 7 (HTTP) load balancing, and when should you choose each?"
      }
    },
    "youtubeUrl": "https://youtu.be/V6uG2jlONuU?si=gue8xyDtCbmcXNL6",
    "videoId": "V6uG2jlONuU",
    "videoTitle": "Load Balancing Architecture & Algorithms"
  },
  {
    "id": 17,
    "stage": 7,
    "sno": 17,
    "topic": "Rate Limiting",
    "concept": "Rate Limiting: Token Bucket Algorithms & Bot Traffic Shaping",
    "title": "Level 17: The Gate Turnstile & The Scalper Rush (Rate Limiting)",
    "time": "Day 360 — 9:00 AM Sunday Flash Sale",
    "usersCount": "50,000 Bot Requests/Sec Scalper Rush",
    "topicHint": "Rate Limiting & Token Bucket",
    "situation": "Every Sunday morning at 9:00 AM, your supermarket runs a \"Flash Sale\" on high-end cooking oil and basmati rice at a 70% discount. The moment the clock strikes 9:00 AM, a group of automated scalpers runs a bot script that sends 50,000 requests per second to your checkout API. Your servers are flooded, processing pipelines jam, and regular families trying to buy weekly groceries get connection timeout errors. The bots buy up all the discounted inventory in three seconds flat to resell on the street.",
    "problem": "What is your architectural decision to protect your backend APIs from automated scalper bots and volumetric Denial-of-Service attacks?",
    "simulationType": "rate_limiter_turnstile",
    "choices": [
      {
        "id": "A",
        "text": "Allow unlimited requests from any device or IP address as fast as they can send them.",
        "isOptimal": false,
        "consequenceText": "Your infrastructure crashes every Sunday morning under Denial-of-Service (DoS) conditions. Scalper scripts consume 100% of network sockets, database connections, and server memory. Real paying customers are locked out, and genuine families leave angry reviews on social media about unfair bot hoarding.",
        "resultState": "bot_scalper_stampede",
        "statImpact": {
          "latency": "Timed Out",
          "capacity": "Flooded by Bots",
          "risk": "100% Sockets Consumed",
          "cost": "Reputational Disaster"
        },
        "whatHappened": {
          "helped": "You did not add request inspection overhead.",
          "bottleneck": "Allowing unthrottled API requests permitted automated scalper bots to flood the system with 50,000 req/sec and deny service to real families!",
          "reflectionQuestion": "Why must every public internet API have strict rate limiting boundaries to protect availability?"
        }
      },
      {
        "id": "B",
        "text": "Install a strict Rate Limiter at the front door using algorithms like Token Bucket or Sliding Window to restrict each user to a reasonable limit (e.g., maximum 5 checkout attempts per minute).",
        "isOptimal": true,
        "consequenceText": "The Rate Limiter protects your platform. When a bot tries to fire 500 requests a second, the Rate Limiter immediately throttles the excess requests, returning an HTTP 429 \"Too Many Requests\" status code with zero backend database load. Meanwhile, real families browsing at normal human speeds pass through without noticing any restriction. The flash sale inventory is purchased fairly by real shoppers!",
        "resultState": "rate_limiter_shield_success",
        "statImpact": {
          "latency": "Sub-millisecond Check",
          "capacity": "5 Req/Min per User",
          "risk": "HTTP 429 Throttle Shield",
          "cost": "Fair Human Distribution"
        },
        "successSummary": "Rate limiters enforce fair usage via algorithms like Token Bucket and Sliding Window, returning HTTP 429 to abusive traffic while protecting backend services!"
      },
      {
        "id": "C",
        "text": "Shut down the online store completely and only sell products via secret phone calls.",
        "isOptimal": false,
        "consequenceText": "Your business loses 90% of its sales volume. The convenience of digital shopping is destroyed, phone lines are constantly busy, and customers abandon your brand for competing online supermarkets.",
        "resultState": "manual_phone_collapse",
        "statImpact": {
          "latency": "Phone Busy Tone",
          "capacity": "1 Call at a Time",
          "risk": "Loss of Digital Commerce",
          "cost": "90% Sales Drop"
        },
        "whatHappened": {
          "helped": "Bots were completely blocked from the checkout API.",
          "bottleneck": "Shutting down the digital store crippled business revenue by 90% instead of engineering smart technical traffic shaping!",
          "reflectionQuestion": "How does software rate limiting preserve business availability during surge events without abandoning digital commerce?"
        }
      }
    ],
    "discovery": {
      "badge": "Rate Limiting",
      "tagline": "Token Bucket, Sliding Window algorithms, and HTTP 429 traffic shaping",
      "simpleMeaning": "Rate Limiting restricts how many requests a user or client IP can make within a given timeframe, stopping malicious bots from overwhelming backend servers.",
      "analogy": "To prevent a stampede during a massive clearance sale, a store does not leave the front doors wide open. It installs turnstiles that rotate at a controlled pace, allowing one shopper through every three seconds while keeping crowds safely organized outside.",
      "howItWorks": [
        "1. Token Bucket: A virtual bucket holds a fixed capacity of tokens, refilled at a constant rate. Each request consumes one token. If empty, the request is rejected with HTTP 429.",
        "2. Leaky Bucket: Requests queue up in a buffer and are released at a smooth, constant rate, smoothing out spiky traffic bursts.",
        "3. Sliding Window Log/Counter: Tracks requests across a rolling time window (e.g. last 60 seconds) to prevent boundary burst exploits.",
        "4. Distributed Rate Limiting: Centralizes counters in high-speed in-memory Redis clusters using atomic increments (INCRBY) so limits apply across all app servers."
      ],
      "whyItMatters": "Protects APIs against DoS attacks, brute-force password attempts, scalper bots, and accidental infinite loops from client code.",
      "visualExplanation": "Scalper Bot (500 req/s) ──► [RATE LIMITER: Token Bucket] ──► HTTP 429 (Too Many Requests - BLOCKED)\nHuman Shopper (1 req/5s) ──► [RATE LIMITER: Token Bucket] ──► Forwarded to Checkout API (ACCEPTED)",
      "contrast": {
        "termA": "Token Bucket Algorithm",
        "descA": "Allows short, controlled bursts of traffic up to bucket capacity while enforcing a steady average refill rate. Most popular in production APIs.",
        "termB": "Leaky Bucket Algorithm",
        "descB": "Smooths out bursts by releasing requests at a strictly constant, unvarying rate regardless of incoming traffic spikes."
      },
      "advancedInfo": "Production rate limiters respond to throttled clients with standardized HTTP headers: X-RateLimit-Limit (max allowed), X-RateLimit-Remaining (tokens left), and Retry-After (seconds until refill).",
      "teacherNotes": {
        "concept": "Rate Limiting, Token Bucket, Leaky Bucket, Sliding Window, HTTP 429",
        "experience": "Students defended Sunday flash sales against 50,000 req/sec scalper bots using a Token Bucket turnstile.",
        "realWorld": "APIs like GitHub, Twitter, and OpenAI enforce strict token bucket rate limits per user API key to ensure infrastructure stability.",
        "question": "What is the burst advantage of the Token Bucket algorithm compared to a strict Fixed Window counter?"
      }
    },
    "youtubeUrl": "https://youtu.be/hs6-WxrmAEs?si=UT-k0E9mgi08Gl2E",
    "videoId": "hs6-WxrmAEs",
    "videoTitle": "Rate Limiting Strategies & Algorithms"
  },
  {
    "id": 18,
    "stage": 8,
    "sno": 18,
    "topic": "Sharding",
    "concept": "Database Sharding: Horizontal Partitioning across Independent Nodes",
    "title": "Level 18: Splitting the Master Ledger (Database Sharding)",
    "time": "Day 400 — 50 Million Customer Nationwide Ledger",
    "usersCount": "50 Million Accounts & 2 Billion Rows",
    "topicHint": "Database Sharding & Sharding Keys",
    "situation": "Your supermarket has expanded across the entire country, managing 50 million registered customer accounts. Even with read replicas, your Primary Database cannot keep up with write traffic. The single relational database contains a customer orders table with 2 billion rows. A single table scan or index lookup takes seconds to complete, and the hard disk holding the database is 98% full. You cannot buy a bigger hard drive, and write queries are queueing up into multi-minute backlogs.",
    "problem": "What is your architectural decision to overcome single-database hardware boundaries and scale database write throughput indefinitely?",
    "simulationType": "database_sharding_ledgers",
    "choices": [
      {
        "id": "A",
        "text": "Keep all 50 million customers and 2 billion rows packed into that single giant database table on one machine.",
        "isOptimal": false,
        "consequenceText": "The single database machine crashes permanently from disk exhaustion. The operating system runs out of inode space, write operations fail with disk full errors, and table indexes exceed physical RAM, causing catastrophic disk thrashing. The entire national supermarket chain grinds to a halt.",
        "resultState": "disk_exhaustion_collapse",
        "statImpact": {
          "latency": "Infinite Backlog",
          "capacity": "98% Disk Full",
          "risk": "Complete Disk Exhaustion",
          "cost": "National Outage"
        },
        "whatHappened": {
          "helped": "You maintained a single monolithic database instance.",
          "bottleneck": "A single database machine hit physical disk capacity and write I/O limits under 2 billion rows, causing catastrophic crashes!",
          "reflectionQuestion": "Why do read replicas fail to solve write scalability bottlenecks on a single primary database?"
        }
      },
      {
        "id": "B",
        "text": "Implement Database Sharding: partition the single giant table horizontally across multiple independent database machines using a consistent Sharding Key (e.g., hashing the User ID).",
        "isOptimal": true,
        "consequenceText": "Your database tier gains limitless horizontal scalability. Instead of one monster machine struggling with 2 billion rows, you distribute the data across four independent shards holding 500 million rows each. When User #4,821,902 places an order, the application calculates hash(UserID) % 4 and routes the write directly to Shard 2. Write bottlenecks vanish, indexes fit comfortably in RAM, and when the store grows to 100 million users, you simply add more shards!",
        "resultState": "sharding_scalability_triumph",
        "statImpact": {
          "latency": "Under 15ms",
          "capacity": "Limitless Shards",
          "risk": "Isolated Node Failure",
          "cost": "Linearly Scalable"
        },
        "successSummary": "Database Sharding horizontally partitions massive tables across independent physical database servers using a Sharding Key, enabling near-infinite write scalability!"
      },
      {
        "id": "C",
        "text": "Delete all customer purchase histories older than two weeks so the database never gets too big.",
        "isOptimal": false,
        "consequenceText": "Deleting purchase histories creates a customer support catastrophe. Shoppers trying to return defective products or view warranty receipts find their records erased. Accountants cannot balance yearly balance sheets, and tax authorities audit the company for missing mandatory fiscal transaction logs, imposing devastating penalties.",
        "resultState": "record_erasure_audit",
        "statImpact": {
          "latency": "Small Database",
          "capacity": "Destroyed History",
          "risk": "Audit Fines & Lost Warranties",
          "cost": "Regulatory Disaster"
        },
        "whatHappened": {
          "helped": "Database disk space was kept artificially small.",
          "bottleneck": "Erasing historical records violated legal warranty requirements and caused severe government tax penalties!",
          "reflectionQuestion": "Why is data deletion never an acceptable substitute for scalable distributed storage architecture?"
        }
      }
    ],
    "discovery": {
      "badge": "Sharding",
      "tagline": "Horizontal table partitioning, sharding keys, and distributed write scaling",
      "simpleMeaning": "Database Sharding splits a massive database horizontally across multiple independent servers so no single machine runs out of disk or write capacity.",
      "analogy": "If a national organization has 50 million member files, it does not stuff them into a single cabinet in one room. It distributes them across regional offices: Cabinet A handles names beginning with A–F, Cabinet B handles G–M, and Cabinet C handles N–Z.",
      "howItWorks": [
        "1. Horizontal Partitioning: Rows of a single table are split across multiple physical database instances called Shards.",
        "2. Sharding Key: A designated column (like User ID or Customer ID) used by the routing layer to determine which shard owns that row.",
        "3. Hash-Based Sharding: Computes hash(ShardingKey) % NumberOfShards to distribute records evenly across all nodes without hotspots.",
        "4. Range-Based Sharding: Partitions data based on ranges of values (e.g., User IDs 1–1,000,000 on Shard 1, 1,000,001–2,000,000 on Shard 2).",
        "5. Routing Layer: Application middleware inspects the query's Sharding Key and routes requests directly to the target shard."
      ],
      "whyItMatters": "While Read Replicas scale read queries, Sharding is the only way to scale write operations and total storage capacity beyond single-server physical limits.",
      "visualExplanation": "User Order Query (UserID: 4821902) ──► hash(UserID) % 4 = Shard 2\n                                          ├──► Shard 1 (500M Rows - Users 0-25%)\n                                          ├──► Shard 2 (500M Rows - Users 25-50%) ◄── [TARGET NODE]\n                                          ├──► Shard 3 (500M Rows - Users 50-75%)\n                                          └──► Shard 4 (500M Rows - Users 75-100%)",
      "contrast": {
        "termA": "Database Sharding (Horizontal Partitioning)",
        "descA": "Splitting table rows across multiple distinct database servers. Scales write throughput and storage linearly.",
        "termB": "Read Replication",
        "descB": "Copying the exact same full database to multiple follower nodes. Scales read queries only; does not solve write limits or storage caps."
      },
      "advancedInfo": "Sharding introduces complexity: Cross-shard JOIN queries are notoriously slow and expensive, and schema migrations require distributed coordination across all shards.",
      "teacherNotes": {
        "concept": "Database Sharding, Sharding Keys, Hash vs Range Partitioning, Cross-Shard Joins",
        "experience": "Students solved a 2-billion-row disk exhaustion crisis by partitioning customer tables across 4 independent database shards.",
        "realWorld": "Slack and Discord shard their database clusters by Workspace ID and Guild ID to support billions of messages per day across thousands of nodes.",
        "question": "What happens if a poor Sharding Key is chosen (such as Country Code when 90% of users live in one country), and what is a 'Celebrity/Hotspot Problem'?"
      }
    },
    "youtubeUrl": "https://youtu.be/5faMjKuB9bc?si=dyr_rDLoeuTLvQBm",
    "videoId": "5faMjKuB9bc",
    "videoTitle": "Database Sharding & Partitioning"
  },
{
    "id": 19,
    "stage": 9,
    "sno": 19,
    "topic": "CAP Theorem",
    "concept": "CAP Theorem: Consistency, Availability, and Partition Tolerance",
    "title": "Level 19: The Broken Telephone Line (CAP Theorem)",
    "time": "Day 430 — Severed Regional Fiber Cable",
    "usersCount": "Coimbatore & Chennai Warehouses Isolated",
    "topicHint": "CAP Theorem (CP vs. AP)",
    "situation": "Your supermarket now has two major branch warehouses: one in Coimbatore and one in Chennai. They share a live synchronized digital catalog so inventory counts match across both cities. Suddenly, an underground fiber-optic cable is severed by road construction. The telephone and internet link between Coimbatore and Chennai is completely dead. A shopper walks into the Coimbatore branch to buy the very last high-end espresso machine in stock. At the exact same second, another customer walks into the Chennai branch trying to buy that exact same machine online. Because the communication line is broken, neither branch can verify if the other branch just sold it.",
    "problem": "When a network partition occurs between warehouses, how do you handle inventory availability versus strict data consistency?",
    "simulationType": "cap_network_partition",
    "choices": [
      {
        "id": "A",
        "text": "Pretend the network is not broken. Let both branches sell the machine and hope for good luck.",
        "isOptimal": false,
        "consequenceText": "Both branches sell the single machine simultaneously. Two customers walk away with confirmed receipts for one physical box. When the network reconnects, your system discovers the duplicate sale. One customer arrives for pickup only to find an empty shelf, leading to intense customer frustration, public complaints, and brand damage.",
        "resultState": "cap_double_selling",
        "statImpact": {
          "latency": "Deceptive",
          "capacity": "Double-Sold",
          "risk": "Inventory Divergence & Customer Outrage",
          "cost": "Brand Damage"
        },
        "whatHappened": {
          "helped": "You avoided handling the network outage.",
          "bottleneck": "Ignoring the network partition led to double-selling the last physical machine to two different buyers!",
          "reflectionQuestion": "Why is it mathematically impossible for a distributed system during a network split to be both completely available and strictly consistent?"
        }
      },
      {
        "id": "B",
        "text": "Consistency over Availability (CP): Lock the inventory and refuse new sales on that machine in both branches until the network cable is repaired, guaranteeing no double-selling happens.",
        "isOptimal": true,
        "consequenceText": "You prioritize absolute correctness (CP System). When the customer attempts checkout, the register displays a message: \"Network synchronization unavailable. Transaction paused for safety.\" The shopper is disappointed, but the business never sells an item it cannot fulfill. Financial and inventory integrity remains 100% accurate.",
        "resultState": "cap_cp_consistency",
        "statImpact": {
          "latency": "Safety Pause",
          "capacity": "Guaranteed 100% Accuracy",
          "risk": "Zero Overselling",
          "cost": "Correctness Preserved"
        },
        "successSummary": "In a CP (Consistency + Partition Tolerance) architecture, writes are safely rejected during network partitions to guarantee mathematical correctness and prevent double-selling!"
      },
      {
        "id": "C",
        "text": "Availability over Consistency (AP): Allow both branches to keep selling goods to keep customers happy right now, accepting that inventory numbers will disagree temporarily and must be reconciled later.",
        "isOptimal": false,
        "consequenceText": "You prioritize store uptime (AP System). Both customers complete their purchases smoothly. Later, when the cable is repaired, the system flags the conflict. Your customer service team contacts one buyer, offers an apology discount voucher, and ships an upgraded unit from a partner distributor. Your revenue flow never stopped during the outage, but you incurred manual compensation costs.",
        "resultState": "cap_ap_availability",
        "statImpact": {
          "latency": "Always Available",
          "capacity": "Soft Inconsistency",
          "risk": "Temporary Divergence",
          "cost": "Compensation Vouchers"
        },
        "whatHappened": {
          "helped": "Customers could continue buying without checkout freezes.",
          "bottleneck": "Allowing unsynchronized writes created inventory conflicts that required manual reconciliation and apology vouchers!",
          "reflectionQuestion": "When should modern systems choose AP (Availability) over CP (Consistency)?"
        }
      }
    ],
    "discovery": {
      "badge": "CAP Theorem",
      "tagline": "Consistency, Availability, and Partition Tolerance in distributed architectures",
      "simpleMeaning": "The CAP Theorem states that when a network partition (P) occurs, a distributed system can guarantee either strict Consistency (C) or 100% Availability (A), but never both simultaneously.",
      "analogy": "When two branch offices lose telephone contact, they cannot simultaneously guarantee that both branches stay completely open for business while also guaranteeing that their ledger records match perfectly.",
      "howItWorks": [
        "1. Consistency (C): Every read receives the most recent write or an error. All nodes see identical data simultaneously.",
        "2. Availability (A): Every non-failing node returns a successful response without error, though it may not contain the freshest write.",
        "3. Partition Tolerance (P): The system continues operating despite dropped packets or severed network connections between nodes.",
        "4. Physical Reality: Network partitions (P) are unavoidable physical facts of life. Therefore, systems must choose between CP (trade availability for safety) and AP (trade safety for uptime)."
      ],
      "whyItMatters": "Understanding CAP tradeoffs dictates whether your application behaves like a bank ledger (CP — refuse stale writes) or a social media feed (AP — show cached posts during network dips).",
      "visualExplanation": "        [PARTITION OCCURS (Link Severed)]\n                /               \\\n      Choose CP (Consistency)     Choose AP (Availability)\n       Pause write / Error       Serve request with stale state\n     Zero double-selling          100% uptime, reconcile later",
      "contrast": {
        "termA": "CP Systems (e.g., PostgreSQL / CockroachDB)",
        "descA": "Locks nodes or returns errors during network partitions to prevent split-brain state. Mandatory for banking and inventory stock.",
        "termB": "AP Systems (e.g., Cassandra / DynamoDB)",
        "descB": "Allows isolated nodes to continue accepting writes independently, reconciling conflicts asynchronously via eventual consistency."
      },
      "advancedInfo": "Brewer's CAP Theorem proves mathematically that in any asynchronous network where messages can be delayed or lost, maintaining consensus requires waiting indefinitely, which violates availability SLAs.",
      "teacherNotes": {
        "concept": "CAP Theorem, Network Partitions, CP vs. AP Tradeoffs, Pacelc Theorem",
        "experience": "Students witnessed a severed fiber cable between Coimbatore and Chennai force a choice between overselling an espresso machine or pausing sales.",
        "realWorld": "Google Spanner achieves 'effectively CA' by syncing atomic clocks with GPS receivers (TrueTime API) to keep latency bounds under 7ms globally.",
        "question": "Why does a banking ATM immediately shut down and display 'Out of Service' when its network link drops, instead of handing out cash freely?"
      }
    },
    "youtubeUrl": "https://youtu.be/-h0vQVREfXs?si=R-upj0YZZ5MsqsDg",
    "videoId": "-h0vQVREfXs",
    "videoTitle": "CAP Theorem Explained | System Design"
  },
  {
    "id": 20,
    "stage": 9,
    "sno": 20,
    "topic": "BASE Model",
    "concept": "BASE: Basically Available, Soft state, Eventual consistency",
    "title": "Level 20: The Relaxed Ledger (The BASE Model)",
    "time": "Day 460 — Viral Potato Chip Thumbs-Up Storm",
    "usersCount": "50,000 Concurrent Like Clicks on Catalog",
    "topicHint": "The BASE Model & Eventual Consistency",
    "situation": "Your online supermarket catalog features customer reviews, product view counters, and thumbs-up recommendation badges. Currently, every time a shopper clicks \"Like\" on a brand of potato chips, the platform halts all background operations, acquires global table locks across 50 database servers, and waits until every single server on the continent confirms that the counter changed from 1,420 to 1,421. Because thousands of shoppers are clicking \"Like\" simultaneously, the entire website stutters and freezes over tiny badge counts.",
    "problem": "How should you architect high-volume social counters without acquiring expensive distributed locks or freezing the store?",
    "simulationType": "base_eventual_consistency",
    "choices": [
      {
        "id": "A",
        "text": "Continue using strict ACID transactions with global distributed locks for every single comment, review, and view counter.",
        "isOptimal": false,
        "consequenceText": "Your infrastructure collapses under lock contention. Customers cannot browse products because servers are waiting for distributed consensus across dozens of nodes just to update a trivial thumbs-up icon. High latency causes shoppers to abandon carts, wasting computing resources on non-critical data.",
        "resultState": "base_acid_lock_freeze",
        "statImpact": {
          "latency": "Severe Lock Contention",
          "capacity": "Freezing Catalog",
          "risk": "Global Lock Stutters",
          "cost": "Abandoned Carts"
        },
        "whatHappened": {
          "helped": "Every single node showed the exact same thumbs-up number at every nanosecond.",
          "bottleneck": "Treating casual thumbs-up counters like core banking ledgers acquired distributed locks across 50 servers and froze the entire website!",
          "reflectionQuestion": "Why should non-critical analytics and social counters never be governed by strict ACID guarantees?"
        }
      },
      {
        "id": "B",
        "text": "Adopt the BASE model: accept that non-critical counters can be slightly out-of-sync for a few seconds across servers (Soft State), allowing the system to stay fast and available, converging on the exact count eventually (Eventual Consistency).",
        "isOptimal": true,
        "consequenceText": "The entire platform runs at blazing speed. Shoppers click \"Like\" instantly with 0ms delay. A shopper in Delhi might temporarily see 1,425 likes while a shopper in Mumbai sees 1,422, but within three seconds, background gossiping syncs the counts to 1,428 everywhere. The store remains 100% available, and servers handle massive traffic effortlessly.",
        "resultState": "base_eventual_success",
        "statImpact": {
          "latency": "Sub-millisecond",
          "capacity": "Limitless Likes/Sec",
          "risk": "Zero Downtime",
          "cost": "Highly Efficient"
        },
        "successSummary": "The BASE model (Basically Available, Soft state, Eventual consistency) provides high availability and massive throughput for non-critical telemetry and counters!"
      },
      {
        "id": "C",
        "text": "Remove all reviews, ratings, and view counts completely from the website.",
        "isOptimal": false,
        "consequenceText": "Shoppers feel blind. Without customer ratings, product popularity metrics, or review feedback, engagement drops by 60%. Visitors assume the supermarket is untrustworthy and abandon the app for competing platforms with rich social proof.",
        "resultState": "base_features_removed",
        "statImpact": {
          "latency": "No Counters",
          "capacity": "Stagnant",
          "risk": "Customer Mistrust",
          "cost": "60% Revenue Drop"
        },
        "whatHappened": {
          "helped": "You eliminated the distributed counter write workload completely.",
          "bottleneck": "Deleting social proof and rating badges destroyed customer trust and dropped platform conversions by 60%!",
          "reflectionQuestion": "How does Eventual Consistency allow modern applications to offer rich interactive features without sacrificing speed?"
        }
      }
    ],
    "discovery": {
      "badge": "BASE Model",
      "tagline": "Basically Available, Soft state, Eventual consistency for web-scale systems",
      "simpleMeaning": "The BASE model is the polar opposite of strict ACID: it prioritizes high availability and low latency by accepting that data can be temporarily out-of-sync, converging eventually.",
      "analogy": "If a friend changes their phone number, they do not pause the entire city's cell towers until all 1,000 friends update their address books. They tell friends gradually, and eventually everyone has the new number.",
      "howItWorks": [
        "1. Basically Available (BA): The system guarantees availability for all requests, even if some nodes are degraded or returning cached approximations.",
        "2. Soft State (S): The state of data may shift over time without direct user interaction, as background replication streams propagate updates.",
        "3. Eventual Consistency (E): Given a period without new writes, all distributed replicas converge to become mathematically consistent.",
        "4. Contrast with ACID: ACID demands pessimistic locking and immediate consistency (banking ledgers); BASE enables optimistic asynchronous scaling (social likes, views, carts)."
      ],
      "whyItMatters": "Web platforms with millions of users cannot acquire global locks across servers. BASE enables horizontal scaling across distributed data stores (like Cassandra and DynamoDB).",
      "visualExplanation": "User Clicks Like ──► Local Node Updates Instantly (1,421)\n                           │\n               [Asynchronous Gossip Sync]\n                           ▼\nAll 50 Nodes Converge to Exact Count (1,428) in 3 seconds",
      "contrast": {
        "termA": "ACID Model (Pessimistic Consistency)",
        "descA": "Immediate strict consistency, rigid schemas, row/table locks, high latency overhead. Mandatory for financial accounting.",
        "termB": "BASE Model (Optimistic Availability)",
        "descB": "High availability, asynchronous replication, soft state, sub-millisecond responses, converging eventually. Ideal for social feeds and telemetry."
      },
      "advancedInfo": "Eventual consistency systems often utilize Conflict-Free Replicated Data Types (CRDTs) or Last-Write-Wins (LWW) timestamps to merge concurrent updates without centralized coordination.",
      "teacherNotes": {
        "concept": "BASE Properties, ACID vs. BASE, Eventual Consistency, CRDTs",
        "experience": "Students experienced the freeze caused by acquiring global distributed locks across 50 servers for potato chip thumbs-up counters.",
        "realWorld": "YouTube view counts, Twitter retweets, and Amazon product reviews all rely on BASE models to display approximate counts that converge eventually.",
        "question": "Why is Eventual Consistency acceptable for YouTube video view counters but completely unacceptable for bank account balances?"
      }
    },
    "youtubeUrl": "https://youtu.be/YWXRUbyX_E0?si=wnW_juQ8hBm86jn2",
    "videoId": "YWXRUbyX_E0",
    "videoTitle": "BASE Properties in System Design"
  },
  {
    "id": 21,
    "stage": 9,
    "sno": 21,
    "topic": "Fault Tolerance & Resilience",
    "concept": "Fault Tolerance & Resilience: Redundancy, recovery, graceful degradation",
    "title": "Level 21: The Power Outage Drill (Fault Tolerance & Resilience)",
    "time": "Day 490 — Midnight Warehouse Lightning Storm",
    "usersCount": "Main Power Line Snapped & Server Rack Shorted",
    "topicHint": "Fault Tolerance & Graceful Degradation",
    "situation": "A major lightning storm hits your main warehouse district. The main power line snaps, one of your three server racks shorts out, and the automated package-sorting belt in the basement jams. At the same time, thousands of active shoppers are placing orders online. Your floor manager runs into the office: \"Boss, half our infrastructure is burning! What do we do?\"",
    "problem": "How do you design a system architecture that continues processing customer transactions during severe hardware failures?",
    "simulationType": "fault_tolerance_resilience",
    "choices": [
      {
        "id": "A",
        "text": "Do not plan for hardware failures. Let the entire store and website shut down completely whenever any single component breaks.",
        "isOptimal": false,
        "consequenceText": "Your business experiences frequent, costly downtime. A single blown fuse or fried network switch brings down your entire e-commerce pipeline. Customer checkouts freeze midway, orders are lost, and your reputation for reliability is ruined.",
        "resultState": "fault_complete_blackout",
        "statImpact": {
          "latency": "Infinite Downtime",
          "capacity": "0% Operating",
          "risk": "Fragile Monolith",
          "cost": "Huge Revenue Loss"
        },
        "whatHappened": {
          "helped": "You saved initial hardware setup costs by avoiding redundancy.",
          "bottleneck": "A single power line snap took down the entire platform because there was zero hardware redundancy or failover!",
          "reflectionQuestion": "Why must high-availability systems assume that hardware components will inevitably fail at runtime?"
        }
      },
      {
        "id": "B",
        "text": "Design for Fault Tolerance: utilize redundant power generators, automatic server failover, and Graceful Degradation (temporarily disable non-essential features like personalized recommendations so checkout keeps working).",
        "isOptimal": true,
        "consequenceText": "The supermarket demonstrates high operational resilience: Redundancy kicks on Uninterruptible Power Supplies (UPS) and backup diesel generators within seconds. Automatic Failover routes network traffic away from the fried server rack to the two healthy standby racks. Graceful Degradation sheds heavy machine-learning recommendation models, keeping 100% of core billing and checkout processing online without missing a single customer order!",
        "resultState": "fault_resilience_success",
        "statImpact": {
          "latency": "15ms Seamless",
          "capacity": "100% Core Checkout",
          "risk": "Zero Downtime",
          "cost": "Fault Tolerant"
        },
        "successSummary": "Fault-tolerant architecture pairs redundant hardware with automatic failover and graceful degradation, shedding non-essential load to keep core checkout online!"
      },
      {
        "id": "C",
        "text": "Send staff into the burning server room to manually hold wires together with their bare hands.",
        "isOptimal": false,
        "consequenceText": "A dangerous safety violation occurs. Staff members suffer electric shocks, emergency services evacuate the entire building, and government safety regulators shut down your company pending criminal investigations.",
        "resultState": "fault_hazard_disaster",
        "statImpact": {
          "latency": "Evacuated",
          "capacity": "Government Lockout",
          "risk": "Fatal Safety Violations",
          "cost": "Criminal Penalties"
        },
        "whatHappened": {
          "helped": "You attempted manual human heroism.",
          "bottleneck": "Substituting software automated failover with dangerous manual improvisation led to safety hazards and an emergency shutdown!",
          "reflectionQuestion": "Why should high-availability failover be completely automated rather than dependent on human intervention?"
        }
      }
    ],
    "discovery": {
      "badge": "Fault Tolerance & Resilience",
      "tagline": "Redundancy, automatic failover, and graceful degradation under hardware failures",
      "simpleMeaning": "Fault tolerance is the ability of a system to keep running smoothly even when underlying hardware, servers, or power lines suffer catastrophic failures.",
      "analogy": "A modern commercial airplane does not rely on a single jet engine or a single hydraulic line. It has multiple backup engines and emergency batteries so the plane lands safely if an engine fails.",
      "howItWorks": [
        "1. Redundancy (No Single Point of Failure): Duplicate critical components (multi-AZ servers, dual power supplies, database replicas) so standby nodes take over instantly.",
        "2. Automated Failover: Health checks and consensus protocols detect dead nodes and redirect traffic in milliseconds without human intervention.",
        "3. Graceful Degradation: Under severe stress, non-essential background tasks (like complex recommendations or animations) are temporarily disabled to protect core checkout.",
        "4. Chaos Engineering: Proactively injecting intentional failures (like Netflix Chaos Monkey) during business hours to prove the system heals automatically."
      ],
      "whyItMatters": "Hardware failure in large-scale data centers is not an anomaly; it is a mathematical daily guarantee. Resilient systems stay online regardless.",
      "visualExplanation": "[Main Rack Shorts Out] ──► [Heartbeat Failure Detected in 200ms]\n                                   │\n                [Traffic Auto-Routed to Standby Racks]\n                                   │\n[Core Checkout Remains 100% Online • Non-Essential AI Shed]",
      "contrast": {
        "termA": "Fault Tolerance",
        "descA": "System operates without any user-perceptible degradation despite component failure (zero dropped requests).",
        "termB": "Graceful Degradation",
        "descB": "System steps down to reduced service levels (e.g., plain checkout without AI recommendations) to protect core business functions."
      },
      "advancedInfo": "Site Reliability Engineering (SRE) establishes Error Budgets and SLAs/SLOs. Redundant N+1 or 2N infrastructure clusters ensure multi-datacenter survival during natural disasters.",
      "teacherNotes": {
        "concept": "Fault Tolerance, High Availability (99.999%), Failover, Graceful Degradation, Chaos Engineering",
        "experience": "Students managed a lightning storm that fried power lines and a server rack, keeping checkouts running via automated failover and graceful degradation.",
        "realWorld": "AWS and Azure data centers run redundant diesel generators with 48 hours of on-site fuel to survive statewide electrical grid blackouts.",
        "question": "What is the difference between active-active and active-passive failover in distributed systems?"
      }
    },
    "youtubeUrl": "https://youtu.be/rpBPMFk1ah0?si=BnLK5ZJ0GvKdKMkv",
    "videoId": "rpBPMFk1ah0",
    "videoTitle": "Fault Tolerance vs Resilience"
  },
  {
    "id": 22,
    "stage": 9,
    "sno": 22,
    "topic": "Idempotency",
    "concept": "Idempotency: Repeated, duplicated process",
    "title": "Level 22: The Panicked Double-Click (Idempotency)",
    "time": "Day 520 — Slow Network Checkout Panic",
    "usersCount": "5 Repeated 'PAY NOW' Clicks in 3 Seconds",
    "topicHint": "Idempotency Keys & Duplicate Safety",
    "situation": "A customer named David is standing at an automated checkout terminal. He swipes his credit card to pay Rs. 4,500 for a cart full of groceries and presses the green \"PAY NOW\" button. The screen takes 3 seconds to process because the network is slow. David gets anxious, assumes the screen didn't register his finger, and rapidly presses \"PAY NOW\" four more times in a panic.",
    "problem": "How do you guarantee that multiple identical payment requests from an impatient user charge their account exactly once?",
    "simulationType": "idempotency_double_click",
    "choices": [
      {
        "id": "A",
        "text": "Treat every single button press as a brand-new, independent payment instruction. Process all five payment requests against David's bank account.",
        "isOptimal": false,
        "consequenceText": "David's phone buzzes with five immediate SMS alerts from his bank: his card was charged Rs. 4,500 five separate times (totaling Rs. 22,500) for one cart of food. David is furious, contacts his bank to report fraudulent activity, demands an immediate chargeback, and leaves a scathing review online. Your finance department wastes hours processing manual refunds and paying bank dispute penalties.",
        "resultState": "idempotency_5x_charge",
        "statImpact": {
          "latency": "Charged 5x",
          "capacity": "Rs. 22,500 Stolen",
          "risk": "Chargebacks & Disputes",
          "cost": "Dispute Fees"
        },
        "whatHappened": {
          "helped": "The server blindly executed whatever requests arrived.",
          "bottleneck": "Without idempotency handling, five identical network requests resulted in five separate credit card deductions!",
          "reflectionQuestion": "Why must mutating HTTP POST APIs implement idempotency keys to guard against network retries?"
        }
      },
      {
        "id": "B",
        "text": "Implement Idempotency: assign a unique transaction token (Idempotency Key) to David's checkout attempt. If the server receives five identical requests carrying that same key, process the payment once and simply return the confirmed receipt for the rest.",
        "isOptimal": true,
        "consequenceText": "The system protects both the customer and the store. The first \"PAY NOW\" tap creates an Idempotency Key (e.g., `req_8f93a12`). The payment gateway charges Rs. 4,500 once and caches the result. When the four panicked duplicate taps arrive over the next two seconds, the server recognizes the identical key, ignores the duplicate charges, and immediately returns the cached success receipt. David is charged once, and checkout succeeds seamlessly!",
        "resultState": "idempotency_shield_success",
        "statImpact": {
          "latency": "Charged Exactly Once",
          "capacity": "Safe Retries",
          "risk": "Zero Duplicate Charges",
          "cost": "Seamless UX"
        },
        "successSummary": "Idempotency keys ensure that duplicate or retried requests produce the exact same outcome as a single execution, preventing accidental double-charges!"
      },
      {
        "id": "C",
        "text": "Physically lock the customer's touch screen for 24 hours after a single tap so they can never click again.",
        "isOptimal": false,
        "consequenceText": "The register locks up completely. David cannot confirm his receipt, cannot call for assistance, and other shoppers waiting in line are blocked from using the register for the rest of the day. A ridiculous customer experience failure.",
        "resultState": "idempotency_screen_lockout",
        "statImpact": {
          "latency": "24h Lockout",
          "capacity": "Dead Register",
          "risk": "Absurd UX",
          "cost": "Register Rendered Useless"
        },
        "whatHappened": {
          "helped": "The user could not tap the button a second time.",
          "bottleneck": "Locking the hardware terminal prevented legitimate interaction and rendered the kiosk useless for other customers!",
          "reflectionQuestion": "Why should idempotency be handled on the server/API layer rather than relying purely on client-side button disables?"
        }
      }
    ],
    "discovery": {
      "badge": "Idempotency",
      "tagline": "Idempotency keys, duplicate request deduplication, and safe API retries",
      "simpleMeaning": "An operation is idempotent if executing it multiple times produces the exact same outcome as executing it once (e.g. f(f(x)) = f(x)).",
      "analogy": "If a delivery driver rings your doorbell five times within ten seconds, you open the front door and take the parcel once. You do not demand five identical packages and pay five times.",
      "howItWorks": [
        "1. Idempotency Key Generation: The client creates a unique UUID (e.g., Idempotency-Key: pay_9941a) before sending the request.",
        "2. Atomic Lock / Storage Check: The backend checks an in-memory Redis store. If the key is new, it records the key with status 'PROCESSING'.",
        "3. Execution & Caching: The payment completes, and the successful response payload is saved in Redis with an expiration TTL (e.g. 24 hours).",
        "4. Duplicate Deduction Shield: Any duplicate requests bearing that same key bypass payment processing and return the cached receipt immediately."
      ],
      "whyItMatters": "On mobile networks, network timeouts cause apps or browsers to automatically retry requests. Without idempotency, users get billed multiple times for single purchases.",
      "visualExplanation": "Client Clicks 5x ──► [Idempotency Key: pay_9941a]\nRequest 1 ──► [Payment Charged: Rs. 4,500] ──► Result Cached in Redis\nRequests 2,3,4,5 ──► Key Match in Redis ──► Cached Receipt Returned (Zero Extra Charges)",
      "contrast": {
        "termA": "Idempotent Operations",
        "descA": "Can be executed repeatedly without side effects beyond initial execution (GET, PUT, DELETE, and POST with Idempotency Key).",
        "termB": "Non-Idempotent Operations",
        "descB": "Repeated executions accumulate side effects (e.g., standard HTTP POST creating multiple orders or charging bank cards multiple times)."
      },
      "advancedInfo": "Stripe, Square, and PayPal APIs mandate the `Idempotency-Key` HTTP header on all financial charge endpoints to guarantee safe automated network retry behavior.",
      "teacherNotes": {
        "concept": "Idempotency, HTTP Verbs (GET/PUT/DELETE vs POST), Idempotency Keys, Deduplication",
        "experience": "Students witnessed an anxious customer press 'PAY NOW' five times in three seconds, and implemented idempotency tokens to charge only once.",
        "realWorld": "Payment gateways like Stripe store Idempotency Keys in Redis clusters to safely replay identical responses during mobile network drops.",
        "question": "Why is HTTP PUT considered inherently idempotent while HTTP POST is not?"
      }
    },
    "youtubeUrl": "https://youtu.be/6TkTtqTu1zw?si=BG27Q77y8a4sRd_K",
    "videoId": "6TkTtqTu1zw",
    "videoTitle": "Idempotency in API & Backend System Design"
  },
  {
    "id": 23,
    "stage": 9,
    "sno": 23,
    "topic": "Distributed Transactions",
    "concept": "Distributed Transactions: Cross-service consistency, Two-Phase Commit (2PC), Saga pattern",
    "title": "Level 23: The Cross-Department Promise (Distributed Transactions & The Saga Pattern)",
    "time": "Day 550 — Microservices Multi-Database Rollout",
    "usersCount": "Order Service + Payment Service + Inventory Service",
    "topicHint": "Distributed Transactions & Saga Pattern",
    "situation": "Your supermarket has grown so large that it is split into three independent autonomous divisions running their own isolated databases: The Order Service (Creates the customer bill), The Payment Service (Charges the bank card), and The Inventory Service (Deducts stock from the warehouse). A customer orders a high-end microwave for Rs. 15,000. The Order Service creates the invoice, and the Payment Service debits Rs. 15,000 from the customer's account. But when the request hits the Inventory Service, the warehouse discovers the last microwave fell off a forklift and broke — there is zero stock left! The customer has already been charged, but the inventory step failed.",
    "problem": "In a distributed microservice architecture with independent databases, how do you handle multi-step workflow failures across services?",
    "simulationType": "saga_distributed_transactions",
    "choices": [
      {
        "id": "A",
        "text": "Keep the customer's Rs. 15,000, mark the order as broken, and do nothing.",
        "isOptimal": false,
        "consequenceText": "You are stealing from your customers. The shopper's bank account was charged Rs. 15,000, but no microwave is delivered. The customer files a fraud report, credit card companies blacklist your merchant account, and your business faces severe consumer protection lawsuits.",
        "resultState": "saga_customer_robbed",
        "statImpact": {
          "latency": "Corrupted State",
          "capacity": "Failed Order",
          "risk": "Merchant Account Blacklist",
          "cost": "Legal Lawsuits"
        },
        "whatHappened": {
          "helped": "You avoided engineering a rollback mechanism.",
          "bottleneck": "Charging the customer while leaving inventory unfulfilled created an illegal inconsistent state across microservices!",
          "reflectionQuestion": "Why cannot microservices with separate databases rely on simple local ACID transactions?"
        }
      },
      {
        "id": "B",
        "text": "Two-Phase Commit (2PC): Place a hard global lock across all three services' databases until every single department verifies they are 100% ready before finalizing.",
        "isOptimal": false,
        "consequenceText": "Two-Phase Commit (2PC) guarantees strict consistency, but creates a catastrophic performance bottleneck in microservices. Holding distributed locks across Order, Payment, and Inventory services across the network ties up database connections. When the Inventory Service slows down, all three databases lock up, paralyzing the entire company's checkout pipeline.",
        "resultState": "saga_2pc_deadlock",
        "statImpact": {
          "latency": "Severe Lock Latency",
          "capacity": "Deadlocked Services",
          "risk": "Blocking 2PC Protocol",
          "cost": "Pipeline Paralysis"
        },
        "whatHappened": {
          "helped": "2PC prevented uncoordinated writes using two-phase prepare/commit votes.",
          "bottleneck": "Holding distributed locks across network boundaries caused cascading deadlocks and paralyzed all three microservices!",
          "reflectionQuestion": "Why is Two-Phase Commit (2PC) considered an anti-pattern in modern cloud microservices architectures?"
        }
      },
      {
        "id": "C",
        "text": "The Saga Pattern (Compensating Transactions): Execute the workflow as a sequence of local transactions. When the Inventory Service fails, trigger an automatic chain of backward compensating actions (issue an immediate automatic refund and cancel the order).",
        "isOptimal": true,
        "consequenceText": "Your architecture stays fast, resilient, and consistent. Step 1 (Order Created) and Step 2 (Payment Charged) commit locally without holding global distributed locks. When Step 3 (Inventory) fails, the Saga Orchestrator catches the error and executes compensating transactions: it automatically calls the Payment Service to issue an instant full Rs. 15,000 refund, notifies the customer with an apology SMS, and marks the order canceled. System state remains consistent with zero blocking locks!",
        "resultState": "saga_orchestration_success",
        "statImpact": {
          "latency": "Fast Local Tx",
          "capacity": "Asynchronous Sagas",
          "risk": "Zero Blocking Deadlocks",
          "cost": "Automatic Compensation"
        },
        "successSummary": "The Saga Pattern manages distributed transactions as a series of local transactions with automated compensating rollbacks, ensuring eventual consistency without blocking locks!"
      }
    ],
    "discovery": {
      "badge": "Distributed Transactions & Saga Pattern",
      "tagline": "Two-Phase Commit (2PC) vs. Saga pattern with compensating transactions",
      "simpleMeaning": "When a business process spans multiple independent microservices, the Saga Pattern executes each step locally and triggers compensating rollback actions if a downstream step fails.",
      "analogy": "If an online catering order requires food preparation, floral arrangements, and transportation, you do not lock all three vendors in a room until the entire day is done. If the florist runs out of flowers, they notify the coordinator, who triggers a refund for the flower portion while the rest keeps moving.",
      "howItWorks": [
        "1. Local Transactions: Each microservice executes its step in its own database and emits an event (e.g. OrderCreated -> PaymentProcessed).",
        "2. Distributed Coordination: Sagas can be Orchestrated (a centralized coordinator tells services what to execute) or Choreographed (services react to each other's events).",
        "3. Failure Detection: If a downstream service fails (e.g., Inventory Out of Stock), the failure event is broadcast back up the chain.",
        "4. Compensating Transactions: Each preceding service executes an undo operation (e.g., Payment Service executes Refund; Order Service marks Canceled)."
      ],
      "whyItMatters": "Traditional monolithic ACID transactions cannot span multiple independent cloud microservices. Sagas preserve eventual business consistency without blocking deadlocks.",
      "visualExplanation": "[SAGA FORWARD FLOW]  Order Created ──► Payment Charged ──► Inventory Failed!\n                                                                   │\n[COMPENSATING FLOW]  Order Canceled ◄── Full Refund Issued ◄───────┘",
      "contrast": {
        "termA": "Two-Phase Commit (2PC - Synchronous)",
        "descA": "Prepare and Commit phases. Holds database locks across services, creating blocking bottlenecks, single points of failure, and high latency.",
        "termB": "Saga Pattern (Asynchronous)",
        "descB": "Decoupled local transactions with automated compensating rollbacks. Highly scalable, non-blocking, and designed for microservices."
      },
      "advancedInfo": "Compensating transactions must be designed to be idempotent and guaranteed to succeed. Retries and Dead Letter Queues (DLQs) ensure compensation actions always reach eventual consistency.",
      "teacherNotes": {
        "concept": "Distributed Transactions, Dual-Phase Commit (2PC), Saga Pattern (Orchestration vs Choreography), Compensating Transactions",
        "experience": "Students handled a microwave inventory failure after customer payment, replacing blocking 2PC locks with an automated Saga compensating refund.",
        "realWorld": "Uber, Airbnb, and Amazon use Saga orchestrators to coordinate rides, bookings, and checkouts across hundreds of decoupled microservices.",
        "question": "What is the key difference between Saga Orchestration (central controller) and Saga Choreography (event-driven peer-to-peer)?"
      }
    },
    "youtubeUrl": "https://youtu.be/Z5LqnTTH9ZM?si=gzgChRIlgBVlmq1_",
    "videoId": "Z5LqnTTH9ZM",
    "videoTitle": "Distributed Transactions Explained: 2PC & Saga Pattern"
  },
  {
    "id": 24,
    "stage": 10,
    "sno": 24,
    "topic": "Message Queues",
    "concept": "Message Queues: Producers, consumers, asynchronous processing",
    "title": "Level 24: The Order Inbox Tray (Message Queues & Asynchronous Processing)",
    "time": "Day 580 — Flash Sale Order Processing Storm",
    "usersCount": "50,000 Concurrent Checkout Invoices & PDF Receipts",
    "topicHint": "Message Queues & Asynchronous Decoupling",
    "situation": "Your supermarket launches a festive holiday sale. When a customer clicks \"Confirm Order\", the backend needs to perform four heavy tasks: 1. Deduct payment from bank, 2. Generate a complex 12-page PDF tax invoice, 3. Send SMS and email notifications, 4. Send delivery route dispatch instructions to the warehouse logistics software. Currently, your web server does all four steps sequentially in a single synchronous HTTP request. Generating the PDF invoice and waiting for third-party email APIs takes 12 seconds per click! Under surge traffic, incoming web connections fill up, and the server crashes with HTTP 504 Gateway Timeouts.",
    "problem": "How should you decouple slow, heavy background operations from fast, user-facing checkout transactions?",
    "simulationType": "message_queues_async",
    "choices": [
      {
        "id": "A",
        "text": "Force customers to stand and wait on the screen for 12 seconds while the single web server generates PDF invoices and sends emails synchronously.",
        "isOptimal": false,
        "consequenceText": "Your checkout system grinds to a halt under load. Web server thread pools are held hostage waiting for third-party email and PDF APIs. When 5,000 shoppers try to checkout during the sale, thread pools exhaust, the server crashes, and customers experience HTTP 504 Gateway Timeouts.",
        "resultState": "mq_synchronous_timeout",
        "statImpact": {
          "latency": "12s Sync Freeze",
          "capacity": "Thread Pool Exhaustion",
          "risk": "HTTP 504 Timeouts",
          "cost": "Abandoned Festive Sales"
        },
        "whatHappened": {
          "helped": "All four steps completed before responding to the user.",
          "bottleneck": "Forcing the client to wait synchronously for 12-second PDF and email tasks exhausted server worker threads and crashed checkout!",
          "reflectionQuestion": "Why should slow, third-party, or compute-heavy background tasks never block the user HTTP request thread?"
        }
      },
      {
        "id": "B",
        "text": "Implement Asynchronous Processing with a Message Queue (e.g., RabbitMQ / AWS SQS): complete the fast payment step in 50ms, drop order background tasks into a durable queue, return instant success to the customer, and let background worker servers process invoices and emails asynchronously.",
        "isOptimal": true,
        "consequenceText": "The user experience becomes instantaneous and bulletproof. The customer clicks \"Confirm Order\" and receives a confirmed order screen in just 50 milliseconds! Behind the scenes, the web server (Producer) pushes tasks into a Message Queue. Dedicated background worker servers (Consumers) pull tasks from the queue and generate PDFs and send emails at their own steady pace. When traffic spikes 10x, the queue safely buffers the backlog with zero server crashes!",
        "resultState": "mq_async_queue_success",
        "statImpact": {
          "latency": "50ms Instant Response",
          "capacity": "50,000 Orders Buffered",
          "risk": "Zero Server Crashes",
          "cost": "Elastic Worker Scaling"
        },
        "successSummary": "Message queues decouple producers from consumers, buffering traffic spikes and offloading heavy tasks to asynchronous background workers with sub-second user responses!"
      },
      {
        "id": "C",
        "text": "Permanently stop generating invoices and stop sending confirmation emails to customers forever.",
        "isOptimal": false,
        "consequenceText": "Customers become anxious and inundate your customer support hotline demanding to know if their order went through. Tax authorities issue penalties for failing to generate legally mandated GST invoice documents.",
        "resultState": "mq_features_dropped",
        "statImpact": {
          "latency": "Zero Emails",
          "capacity": "Support Overwhelmed",
          "risk": "Legal Tax Penalties",
          "cost": "Massive Support Burden"
        },
        "whatHappened": {
          "helped": "You eliminated background task processing.",
          "bottleneck": "Erasing invoices and email notifications caused massive customer anxiety and legal tax audit violations!",
          "reflectionQuestion": "How do message queues allow organizations to satisfy complex operational and legal requirements without slowing down user interactions?"
        }
      }
    ],
    "discovery": {
      "badge": "Message Queues",
      "tagline": "Producers, consumers, message buffers, and asynchronous task offloading",
      "simpleMeaning": "A Message Queue is a durable temporary waiting line that decouples fast web servers from slow background tasks (like PDF generation or email sending).",
      "analogy": "When you order food at a fast-food counter, the cashier takes payment, hands you a ticket number, and calls the next customer in line. You do not stand at the counter staring at the chef while he fries potatoes; the kitchen works from a background ticket rail.",
      "howItWorks": [
        "1. Producer (Web Server): Accepts user checkout, saves order state, pushes an order message onto the queue, and returns instant HTTP 200 OK to the shopper.",
        "2. Message Queue (Buffer): A durable, persistent buffer (RabbitMQ, SQS) that holds messages in order, smoothing out sudden traffic spikes.",
        "3. Consumer (Worker Pool): Background worker processes running on independent servers pull messages from the queue and perform heavy PDF rendering and email dispatches.",
        "4. Load Leveling: If 50,000 orders arrive in 1 minute, the queue holds them safely without crashing the front-end servers."
      ],
      "whyItMatters": "Synchronous architectures freeze and crash under traffic spikes. Message queues provide fault isolation: if the email service goes down, orders are still placed safely.",
      "visualExplanation": "User Clicks Checkout ──► Web Server (50ms) ──► Instant Confirmed Screen!\n                                │\n                     [Pushes to Message Queue]\n                                ▼\n             [Worker 1: PDF]  |  [Worker 2: Email]  |  [Worker 3: SMS]",
      "contrast": {
        "termA": "Synchronous Processing (Blocking)",
        "descA": "Client waits while server performs all steps in sequence. If any step hangs or fails, the whole user request crashes.",
        "termB": "Asynchronous Processing (Non-Blocking)",
        "descB": "Immediate response to user; heavy tasks placed on message queue for background processing at steady, reliable pace."
      },
      "advancedInfo": "Message Queues guarantee At-Least-Once Delivery. Dead Letter Queues (DLQs) capture poison pill messages that fail processing multiple times for engineer inspection.",
      "teacherNotes": {
        "concept": "Message Queues, Producers & Consumers, Decoupling, Load Leveling, Dead Letter Queues",
        "experience": "Students solved a 12-second checkout delay and HTTP 504 timeouts by offloading PDF generation and emails to background queue workers.",
        "realWorld": "Shopify and Amazon process millions of holiday checkout transactions through distributed queue pipelines without slowing user cart flows.",
        "question": "What happens to messages in a message queue if all background worker servers crash simultaneously?"
      }
    },
    "youtubeUrl": "https://youtu.be/J8kZA6ocM9Q?si=XOl6SqhoS6KFc1ba",
    "videoId": "J8kZA6ocM9Q",
    "videoTitle": "Message Queues & Asynchronous Processing"
  },
  {
    "id": 25,
    "stage": 10,
    "sno": 25,
    "topic": "Pub-Sub",
    "concept": "Pub-Sub: Message distribution patterns",
    "title": "Level 25: The Department Loudspeaker (Publish-Subscribe / Pub-Sub)",
    "time": "Day 610 — Storewide Event Notification Scaling",
    "usersCount": "10 Downstream Services Listening to Order Events",
    "topicHint": "Publish-Subscribe & One-to-Many Fanout",
    "situation": "Whenever a customer completes an order in your supermarket, multiple internal departments need to know about it: 1. Logistics needs to dispatch delivery drivers, 2. Inventory needs to deduct shelf stock, 3. Analytics needs to update revenue charts, 4. Loyalty needs to award reward points, 5. Fraud Detection needs to check transaction anomalies. Currently, your checkout service makes direct HTTP calls to all five departments one by one. Every time a new team wants order notifications, developers must modify and redeploy the checkout codebase! When the Analytics server slows down, the entire checkout pipeline freezes.",
    "problem": "How do you broadcast business events to multiple independent listener services without tightly coupling systems or modifying checkout code?",
    "simulationType": "pubsub_loudspeaker",
    "choices": [
      {
        "id": "A",
        "text": "Continue adding direct, tightly-coupled point-to-point network calls from the checkout code to every single new department service.",
        "isOptimal": false,
        "consequenceText": "Your architecture turns into an unmaintainable spiderweb. The checkout service depends on five different external endpoints. When the Analytics service slows down or crashes, checkout requests hang and fail. Deploying a minor update requires testing and redeploying the core billing service every time.",
        "resultState": "pubsub_spiderweb_coupling",
        "statImpact": {
          "latency": "Cascading Hangs",
          "capacity": "Fragile Monolith",
          "risk": "Tight Coupling Collapse",
          "cost": "Maintenance Nightmare"
        },
        "whatHappened": {
          "helped": "Services called each other directly via point-to-point HTTP.",
          "bottleneck": "Tight coupling meant that a slowdown in a non-critical analytics service brought down core checkout!",
          "reflectionQuestion": "Why is point-to-point coupling an anti-pattern when broadcasting events to multiple downstream services?"
        }
      },
      {
        "id": "B",
        "text": "Implement a Publish-Subscribe (Pub-Sub) pattern with an Event Topic: the checkout service publishes an \"OrderPlaced\" event to a central topic once, and all interested departments (Inventory, Logistics, Loyalty, Analytics) subscribe independently to consume the event at their own pace.",
        "isOptimal": true,
        "consequenceText": "Your architecture becomes clean, decoupled, and highly scalable. The checkout service publishes an \"OrderPlaced\" event to the topic in 2 milliseconds and moves on, without knowing or caring who is listening! Inventory, Logistics, Loyalty, and Analytics each receive their own copy of the event through dedicated subscription channels. If a new Marketing service wants to listen tomorrow, it simply subscribes without touching a single line of checkout code!",
        "resultState": "pubsub_fanout_success",
        "statImpact": {
          "latency": "2ms Event Broadcast",
          "capacity": "Unlimited Subscribers",
          "risk": "Zero Coupling",
          "cost": "Extensible Architecture"
        },
        "successSummary": "The Publish-Subscribe (Pub-Sub) pattern enables one-to-many fanout, completely decoupling event publishers from downstream consumer subscribers!"
      },
      {
        "id": "C",
        "text": "Refuse to build any new features or notify other departments so the checkout service stays simple.",
        "isOptimal": false,
        "consequenceText": "Your business operations stagnate. Other departments operate blind: delivery drivers don't know orders are ready, loyalty points are never awarded, and executive analytics are missing, leaving your business behind competitors.",
        "resultState": "pubsub_business_stagnation",
        "statImpact": {
          "latency": "No Events",
          "capacity": "Stagnant",
          "risk": "Blind Operations",
          "cost": "Lost Growth"
        },
        "whatHappened": {
          "helped": "The checkout service avoided broadcasting events.",
          "bottleneck": "Refusing to broadcast business events crippled logistics, analytics, and customer loyalty programs!",
          "reflectionQuestion": "How does event-driven architecture accelerate engineering velocity across multiple teams?"
        }
      }
    ],
    "discovery": {
      "badge": "Pub-Sub",
      "tagline": "Publish-Subscribe pattern, message topics, and one-to-many event fanout",
      "simpleMeaning": "Pub-Sub is an event distribution pattern where a Publisher broadcasts an event to a Topic once, and all Subscribed services automatically receive their own copy.",
      "analogy": "When an emergency occurs or a storewide announcement is made, the store manager does not run around whispering into every employee's ear one by one. She speaks into the storewide loudspeaker (Topic); every department listening acts according to its duties.",
      "howItWorks": [
        "1. Publisher: The service generating an event (Checkout) pushes an 'OrderPlaced' payload to a named Topic (e.g. orders-topic).",
        "2. Message Topic: A broker (Google Pub/Sub, SNS) manages the message and handles fanout distribution.",
        "3. Subscribers: Multiple independent services (Logistics, Inventory, Loyalty) establish subscriptions to the topic.",
        "4. Complete Decoupling: The publisher does not know who the subscribers are, how many exist, or whether they are currently online."
      ],
      "whyItMatters": "Enables microservice scalability and organizational independence. New teams can consume production events without requesting modifications to existing core services.",
      "visualExplanation": "[Checkout Service] ──► Publishes 'OrderPlaced' to Topic\n                                  │\n            ┌─────────────────────┼─────────────────────┐\n            ▼                     ▼                     ▼\n    [Inventory Queue]      [Logistics Queue]     [Analytics Queue]\n      Deduct Stock          Dispatch Driver       Update BI Dash",
      "contrast": {
        "termA": "Point-to-Point Queue",
        "descA": "One message is delivered to exactly one consumer worker (competing consumers pattern).",
        "termB": "Publish-Subscribe (Pub-Sub)",
        "descB": "One event is copied and fanned out to every subscribed consumer service simultaneously."
      },
      "advancedInfo": "Pub-Sub systems often support Message Filtering (subscribers receive only events matching specific attributes) and Dead Letter Topics for unroutable payloads.",
      "teacherNotes": {
        "concept": "Publish-Subscribe (Pub-Sub), Topics vs Queues, Fanout Pattern, Loose Coupling",
        "experience": "Students decoupled a spiderweb of five services calling each other into a clean Pub-Sub topic that fans out 'OrderPlaced' events seamlessly.",
        "realWorld": "Financial exchanges, Uber trip status feeds, and IoT device networks use Pub-Sub architectures to fan out millions of telemetry events per second.",
        "question": "What is the difference in message consumption between a standard Message Queue (SQS) and a Pub-Sub Topic (SNS)?"
      }
    },
    "youtubeUrl": "https://youtu.be/fKK3GXOPSJw?si=BJkXW26DVrms83F4",
    "videoId": "fKK3GXOPSJw",
    "videoTitle": "Pub/Sub Architectural Pattern Explained"
  },
  {
    "id": 26,
    "stage": 10,
    "sno": 26,
    "topic": "Stream Processing & WebSockets",
    "concept": "Stream Processing & WebSockets: Real-time pipelines, Persistent two-way communication",
    "title": "Level 26: Picking the Right Conveyor Belt (RabbitMQ vs. Apache Kafka)",
    "time": "Day 640 — Dual Workload Messaging Dilemma",
    "usersCount": "Workload A: 5,000 Tasks/Sec vs Workload B: 500,000 Events/Sec",
    "topicHint": "RabbitMQ (Smart Broker) vs. Apache Kafka (Distributed Log)",
    "situation": "Your supermarket engineering team needs to choose a messaging infrastructure for two completely different workloads hitting the platform at the same time: Workload A: Transactional task distribution (order confirmation receipts, payment webhooks, bank retries). Messages must be routed dynamically based on priority, acknowledged individually, and deleted immediately once completed. Workload B: Clickstream and IoT telemetry (user browsing clicks, sensor logs from 10,000 supermarket smart carts and freezers). This produces 500,000 continuous events per second that must be retained for days and replayed by machine learning pipelines for analysis.",
    "problem": "How do you select the appropriate messaging engine for individual transactional jobs versus high-throughput distributed event streaming?",
    "simulationType": "rabbitmq_vs_kafka",
    "choices": [
      {
        "id": "A",
        "text": "Force Workload B (500k events/sec clickstream telemetry) through the existing RabbitMQ queue so the team doesn't have to manage two different message systems.",
        "isOptimal": false,
        "consequenceText": "Traditional message brokers (like RabbitMQ) track acknowledgment state and queue index for every single message. Under 500,000 events/second, RabbitMQ's memory usage explodes, queue management overhead exhausts CPU, and the cluster crashes, taking down core payment webhooks alongside click telemetry.",
        "resultState": "broker_queue_overwhelmed",
        "statImpact": {
          "latency": "Memory Exploded",
          "capacity": "Queue Saturated",
          "risk": "Cluster Collapse",
          "cost": "Lost Payments & Telemetry"
        },
        "whatHappened": {
          "helped": "You maintained only one messaging cluster to manage.",
          "bottleneck": "Forcing 500k continuous stream events through a traditional message broker exploded memory tracking individual message acknowledgments!",
          "reflectionQuestion": "Why is an append-only distributed log far more efficient for high-throughput event streaming than a traditional message broker?"
        }
      },
      {
        "id": "B",
        "text": "Match the tool to the workload: use a flexible Smart Broker (RabbitMQ) with routing keys and task acknowledgments for individual transactional tasks (Workload A), and deploy an Append-Only Distributed Commit Log (Apache Kafka) with partitioned topics and consumer group offsets for high-throughput stream ingestion and replayable telemetry (Workload B).",
        "isOptimal": true,
        "consequenceText": "Both workloads operate at optimal performance. RabbitMQ handles Workload A with complex routing exchanges, task priority queues, and instant message deletion upon delivery. Apache Kafka handles Workload B with partitioned distributed commit logs, ingesting 500,000 events/sec sequentially to disk with zero memory bloating. Analytics and machine learning teams can replay days of historical clicks independently without impacting live operations!",
        "resultState": "dual_messaging_harmony",
        "statImpact": {
          "latency": "Sub-millisecond",
          "capacity": "500k Events/Sec Ingested",
          "risk": "Zero Downtime",
          "cost": "Specialized Sizing"
        },
        "successSummary": "RabbitMQ excels as a Smart Broker for complex transactional task routing, while Apache Kafka excels as a high-throughput Append-Only Distributed Commit Log for continuous streaming!"
      },
      {
        "id": "C",
        "text": "Write all 500,000 real-time clickstream events to a single USB flash drive attached to the server.",
        "isOptimal": false,
        "consequenceText": "The USB drive runs out of space in ten minutes and burns out under high write operations, destroying all analytics data.",
        "resultState": "usb_drive_burnout",
        "statImpact": {
          "latency": "Burned Out",
          "capacity": "10 Mins Lifespan",
          "risk": "Physical Drive Destruction",
          "cost": "Lost Telemetry"
        },
        "whatHappened": {
          "helped": "You avoided cloud streaming software.",
          "bottleneck": "Writing real-time 500k stream data to a consumer flash drive destroyed the hardware in minutes!",
          "reflectionQuestion": "Why do modern big-data pipelines rely on distributed, partitioned stream architectures?"
        }
      }
    ],
    "discovery": {
      "badge": "RabbitMQ vs. Apache Kafka",
      "tagline": "Smart Brokers vs. Distributed Commit Logs for messaging and streaming",
      "simpleMeaning": "RabbitMQ is a Smart Broker designed for complex task routing where messages vanish once acknowledged; Apache Kafka is an Append-Only Distributed Commit Log built for massive stream ingestion and historical replay.",
      "analogy": "You do not use an armored delivery dispatch service that tracks individual customer receipts to measure continuous raindrops falling on the supermarket roof. You use a smart post office for parcels, and a continuous water meter pipe for fluid flow.",
      "howItWorks": [
        "1. RabbitMQ (Smart Broker / Dumb Consumer): Tracks message delivery and consumer acknowledgments. Once a worker acknowledges a message, it is deleted from the queue.",
        "2. Apache Kafka (Dumb Broker / Smart Consumer): Messages are appended sequentially to immutable partition logs on disk. The broker does not track individual delivery.",
        "3. Consumer Offsets: Kafka consumers track their own position (offset) in the partition. Different teams can read at their own speed or replay data from yesterday.",
        "4. Architectural Sizing: Choose RabbitMQ for transactional job routing and task scheduling; choose Kafka for real-time telemetry, clickstreams, and big-data event ingestion."
      ],
      "whyItMatters": "Using the wrong messaging engine leads to out-of-memory crashes under high volume or extreme operational complexity for simple transactional tasks.",
      "visualExplanation": "RabbitMQ: Producer ──► [Exchange / Routing Key] ──► Queue ──► Consumer (Deleted on Ack)\nKafka:    Producer ──► [Partitioned Commit Log] ──► Consumer Offset (Retained on Disk)",
      "contrast": {
        "termA": "RabbitMQ (AMQP / Message Queue)",
        "descA": "Smart broker, complex routing rules, priority queues, individual message acknowledgments, transient data deleted on receipt.",
        "termB": "Apache Kafka (Distributed Event Stream)",
        "descB": "Append-only commit log, partitioned topics, massive throughput (millions/sec), sequential disk I/O, historical replay via offsets."
      },
      "advancedInfo": "Kafka achieves immense throughput via OS PageCache, zero-copy network transfer (sendfile syscall), and sequential disk writes which match RAM write speeds.",
      "teacherNotes": {
        "concept": "RabbitMQ vs. Kafka, AMQP Protocol, Append-Only Commit Logs, Consumer Offsets, Zero-Copy Architecture",
        "experience": "Students sized messaging infrastructure across individual payment receipts (RabbitMQ) versus 500,000 clickstream events/sec (Kafka).",
        "realWorld": "Uber uses RabbitMQ for granular dispatch tasks and Kafka for billions of GPS and trip event streams daily.",
        "question": "What is the difference between a message queue that deletes messages on acknowledgment versus a distributed log that retains them?"
      }
    },
    "youtubeUrl": "https://youtu.be/mG3xQb_-rV4?si=6xDWgd_MQBDTOd0e",
    "videoId": "mG3xQb_-rV4",
    "videoTitle": "Stream Processing System Design Architecture"
  },
  {
    "id": 27,
    "stage": 11,
    "sno": 27,
    "topic": "Geospatial Search",
    "concept": "Geospatial Search: Coordinates, proximity queries, spatial indexing",
    "title": "Level 27: The Live Delivery Tracker (Stream Processing & WebSockets)",
    "time": "Day 670 — Live Grocery Delivery Map Tracking",
    "usersCount": "50,000 Active Shoppers Tracking Live Delivery Vans",
    "topicHint": "WebSockets vs. HTTP Polling for Live Telemetry",
    "situation": "Your supermarket launches express 15-minute grocery deliveries. When a shopper orders groceries, the mobile app displays an interactive live map showing the delivery van moving along city streets in real time. Currently, your mobile app uses Short Polling: every single second, 50,000 customer phones fire an HTTP GET request to your backend asking: \"Where is the van now? Where is the van now?\" 95% of requests return the exact same coordinates because the van is stuck at a red light! Your web servers are hammered by 50,000 HTTP requests per second, HTTP header overhead chokes network bandwidth, and customer phones burn through their battery within minutes.",
    "problem": "How should you deliver continuous, real-time GPS telemetry from moving delivery vehicles to customer devices without exhausting server resources?",
    "simulationType": "websockets_delivery_tracker",
    "choices": [
      {
        "id": "A",
        "text": "Force the customer's phone to send a brand new HTTP request every second (Short Polling) to ask for coordinates.",
        "isOptimal": false,
        "consequenceText": "Short Polling creates severe server strain. Millions of HTTP requests per minute establish and tear down TCP connections, repeatedly sending bulky HTTP request headers (cookies, user-agents). Your servers suffer CPU exhaustion, and mobile users complain that the app drains their phone battery and lags continuously.",
        "resultState": "ws_short_polling_overload",
        "statImpact": {
          "latency": "High HTTP Overhead",
          "capacity": "Server CPU Exhaustion",
          "risk": "Battery Drain & Lag",
          "cost": "Wasted Bandwidth"
        },
        "whatHappened": {
          "helped": "You used familiar stateless HTTP endpoints.",
          "bottleneck": "Firing 50,000 HTTP GET requests every second established redundant TCP handshakes, burned mobile batteries, and choked servers!",
          "reflectionQuestion": "Why is HTTP Short Polling an inefficient design pattern for high-frequency real-time updates?"
        }
      },
      {
        "id": "B",
        "text": "Establish a persistent, bi-directional WebSocket connection between the customer's phone and the backend telemetry server. When the delivery driver's GPS coordinates change, push the tiny coordinate payload instantly down the open socket.",
        "isOptimal": true,
        "consequenceText": "The real-time tracking experience operates with buttery smoothness. A single TCP handshake upgrades the connection to the WebSocket protocol. The connection stays open persistently. When the delivery van turns a corner, the backend pushes tiny 2-byte coordinate frames to the client in under 5 milliseconds! Zero HTTP header overhead, zero battery drain, and the delivery van glides across the map with silky precision!",
        "resultState": "ws_connection_success",
        "statImpact": {
          "latency": "5ms Instant Push",
          "capacity": "50,000 Open Sockets",
          "risk": "Zero Polling Overhead",
          "cost": "Minimal Battery & Bandwidth"
        },
        "successSummary": "WebSockets establish a persistent, low-latency, full-duplex connection that allows the server to push real-time GPS telemetry directly to clients without HTTP polling overhead!"
      },
      {
        "id": "C",
        "text": "Disable live location tracking completely. Make shoppers stand outside on the street for two hours looking down the road to spot the delivery van.",
        "isOptimal": false,
        "consequenceText": "Customer satisfaction drops dramatically. In the modern era of instant delivery apps, customers refuse to wait blindly without tracking visibility. Shoppers cancel orders and switch to competitors that provide live GPS visibility.",
        "resultState": "ws_tracking_disabled",
        "statImpact": {
          "latency": "Blind Waiting",
          "capacity": "Customers Lost",
          "risk": "Competitor Wipeout",
          "cost": "Order Cancellations"
        },
        "whatHappened": {
          "helped": "You removed all telemetry network connections.",
          "bottleneck": "Forcing customers to wait blindly on the street caused massive order cancellations and lost market share!",
          "reflectionQuestion": "Why has persistent real-time streaming become an essential expectation in modern consumer applications?"
        }
      }
    ],
    "discovery": {
      "badge": "WebSockets & Stream Processing",
      "tagline": "Persistent bi-directional sockets, real-time telemetry streaming, and server push",
      "simpleMeaning": "WebSockets maintain an open, full-duplex communication channel over a single TCP connection, allowing servers to push live data (like moving GPS coordinates) instantly to clients.",
      "analogy": "If you want to know when your delivery has arrived, you do not walk out to the driveway every three seconds, open the front gate, look around, and walk back inside. You install a two-way intercom wire connected directly to the gate so the driver speaks to you the instant they arrive.",
      "howItWorks": [
        "1. HTTP Upgrade Handshake: The client initiates a standard HTTP request with an 'Upgrade: websocket' header; the server returns HTTP 101 Switching Protocols.",
        "2. Persistent Full-Duplex Connection: The TCP socket remains open indefinitely, allowing both client and server to send messages freely at any moment.",
        "3. Lightweight Framing: Unlike HTTP with large text headers, WebSocket messages travel inside tiny binary frames with only 2 to 6 bytes of overhead.",
        "4. Stream Processing Engine: Real-time driver telemetry streams through Apache Flink or Kafka Streams, calculating ETA updates in milliseconds before pushing down the socket."
      ],
      "whyItMatters": "Eliminates the massive CPU, network bandwidth, and battery drain caused by millions of polling HTTP requests every second.",
      "visualExplanation": "Driver GPS Moves ──► Telemetry Server ──► WebSocket Frame (2 bytes) ──► Instant Smooth Map Glide!\n                                       [Zero Polling • Zero HTTP Headers]",
      "contrast": {
        "termA": "HTTP Short Polling",
        "descA": "Client repeatedly sends new HTTP requests on a timer. Creates massive header overhead, high latency, and severe server load.",
        "termB": "WebSockets (Full Duplex)",
        "descB": "Single persistent TCP connection. Bi-directional communication with sub-millisecond server push and negligible frame overhead."
      },
      "advancedInfo": "For one-way server-to-client notifications where clients never send data back, Server-Sent Events (SSE) over HTTP/2 provides an alternative lightweight streaming option.",
      "teacherNotes": {
        "concept": "WebSockets, HTTP Polling vs Long Polling vs WebSockets, Server-Sent Events (SSE), Full-Duplex Streaming",
        "experience": "Students solved a 50,000 req/sec short-polling server meltdown by upgrading to a persistent WebSocket telemetry stream.",
        "realWorld": "Trading platforms like Robinhood and ride-hailing apps like Uber use WebSockets to stream stock ticks and vehicle coordinates in real time.",
        "question": "When should you choose WebSockets over Server-Sent Events (SSE) in system design?"
      }
    },
    "youtubeUrl": "https://youtu.be/ENbivJwB3BY?si=QfQF6Rmr5fBdodmF",
    "videoId": "ENbivJwB3BY",
    "videoTitle": "Designing Location-Based Systems | Geohashing vs Quadtrees"
  },
  {
    "id": 28,
    "stage": 11,
    "sno": 28,
    "topic": "Inverted Indexes & BM25",
    "concept": "Inverted Indexes & BM25: Search indexing, relevance ranking, ranking signals",
    "title": "Level 28: Finding Nearby Stores (Geospatial Search & Spatial Indexing)",
    "time": "Day 700 — Proximity Store Locator & Radius Queries",
    "usersCount": "100,000 Stores Nationwide & Millions of Proximity Queries",
    "topicHint": "Geospatial Indexing (Geohash & Quadtrees)",
    "situation": "Your supermarket enterprise has expanded to 100,000 partner retail stores, pickup lockers, and dark stores across the nation. When a user opens the mobile app, the home screen needs to answer: \"Find the nearest 10 stores within a 5 km radius of my current GPS location (12.9716° N, 77.5946° E).\" Currently, your database runs a raw mathematical distance formula (the Haversine formula) across all 100,000 store rows on every single app open! Every query executes square roots, sines, and cosines across the entire database table. With 50,000 users searching simultaneously, database CPU utilization hits 100% and queries take 8 seconds to return.",
    "problem": "How do you index two-dimensional geographic coordinates (Latitude and Longitude) to perform lightning-fast proximity and radius searches?",
    "simulationType": "geospatial_spatial_indexing",
    "choices": [
      {
        "id": "A",
        "text": "Whenever a user opens the app, run a raw mathematical distance calculation (Haversine formula with sines and cosines) across all 100,000 stores in the database table.",
        "isOptimal": false,
        "consequenceText": "Your database performance collapses as customer traffic grows. Calculating trigonometric distance formulas across 100,000 rows for every single search forces full table scans on every query. Standard B-Tree indexes cannot index two dimensions simultaneously. Search latency spikes to 8 seconds, database CPUs peg at 100%, and location lookups timeout.",
        "resultState": "geo_haversine_table_scan",
        "statImpact": {
          "latency": "8s Trigonometric Scans",
          "capacity": "Full Table Scans",
          "risk": "100% CPU Collapse",
          "cost": "Search Timeouts"
        },
        "whatHappened": {
          "helped": "You avoided setting up spatial indexing data structures.",
          "bottleneck": "Running raw trigonometric Haversine math across 100,000 rows on every search triggered full table scans and melted database CPUs!",
          "reflectionQuestion": "Why are standard one-dimensional B-Tree database indexes incapable of efficiently indexing two-dimensional coordinates?"
        }
      },
      {
        "id": "B",
        "text": "Implement Geospatial Indexing: map the physical world into spatial partitions using Geohashing (hierarchical grid strings) or Quadtrees / Google S2. Index the spatial grid keys so the database only searches stores located inside the user's immediate bounding box in milliseconds.",
        "isOptimal": true,
        "consequenceText": "Location queries return in milliseconds. The earth's surface is partitioned into hierarchical bounding grids (Geohashes or Quadtree cells). When a user searches near Bangalore, their GPS coordinates map to a prefix like `tdr1v`. Instead of scanning 100,000 nationwide stores, the database performs a lightning-fast B-Tree prefix lookup on `tdr1v*`, evaluating only the 15 stores in that immediate neighborhood! Search times plummet from 8 seconds to 4 milliseconds!",
        "resultState": "geo_spatial_index_success",
        "statImpact": {
          "latency": "4ms Spatial Lookup",
          "capacity": "Millions of Concurrent Queries",
          "risk": "Zero Trigonometric Overload",
          "cost": "Highly Optimized"
        },
        "successSummary": "Geospatial Indexing (Geohash / Quadtrees / Google S2) partitions 2D Earth coordinates into hierarchical grid cells, turning complex trigonometric scans into lightning-fast prefix lookups!"
      },
      {
        "id": "C",
        "text": "Group stores broadly by entire states or countries only. If a user in South Bangalore wants milk, return every store in Karnataka, even if it is 600 km away in Bidar.",
        "isOptimal": false,
        "consequenceText": "The search results are practically useless. A customer standing in Bangalore is recommended a store 500 km away in another city because both stores share the same state ID. Shoppers get frustrated by irrelevant recommendations and uninstall the app.",
        "resultState": "geo_coarse_partitioning",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "Useless Results",
          "risk": "Customer Churn",
          "cost": "Ruined Experience"
        },
        "whatHappened": {
          "helped": "You grouped stores with simple state identifiers.",
          "bottleneck": "Coarse state-level grouping recommended stores 500 km away, creating useless search results and alienating users!",
          "reflectionQuestion": "How do hierarchical spatial indexes provide granular proximity searches without evaluating every record in a country?"
        }
      }
    ],
    "discovery": {
      "badge": "Geospatial Search & Spatial Indexing",
      "tagline": "Two-dimensional spatial indexing, Geohashing, Quadtrees, and radius queries",
      "simpleMeaning": "Geospatial Indexing converts 2D coordinates (latitude and longitude) into hierarchical grid cells (like Geohash strings or Quadtrees) so proximity queries execute in single-digit milliseconds.",
      "analogy": "If you are looking for a lost child in a giant shopping mall, security does not calculate mathematical distance vectors to every person standing across the entire building. They identify the specific zone (e.g. 'Zone B, Second Floor') and search only within that section and its adjoining corridors.",
      "howItWorks": [
        "1. The 2D Indexing Challenge: Standard database B-Trees index one dimension (X > 5). Latitude and longitude represent a two-dimensional plane that cannot be sorted on a single number line.",
        "2. Geohash Encoding: Interleaves binary bits of latitude and longitude, encoding coordinates into a base32 string (e.g., `tdr1v9`).",
        "3. Prefix Proximity: Points sharing the same Geohash prefix are physically close together. Searching `tdr1v*` instantly bounds queries to an ~1.2 km x ~600 m rectangle.",
        "4. Quadtrees & Google S2: Hierarchically sub-divide physical space into 4 quadrants recursively, providing dynamic resolution that scales seamlessly from rural fields to dense urban centers."
      ],
      "whyItMatters": "Without spatial indexing, proximity searches (like Uber finding nearby drivers or Yelp finding restaurants) require full table scans with expensive trigonometric math that bring down databases.",
      "visualExplanation": "Earth Plane ──► Divided into Bounding Grids (Quadtrees / Geohashes)\nUser Location (12.97° N, 77.59° E) ──► Maps to Geohash 'tdr1v'\nDatabase Query: SELECT * FROM stores WHERE geohash LIKE 'tdr1v%' ──► 4ms Result!",
      "contrast": {
        "termA": "Geohashing",
        "descA": "Encodes 2D coordinates into alphanumeric strings using Z-order space-filling curves. Ideal for fast prefix lookups in standard B-Tree/NoSQL databases.",
        "termB": "Quadtrees",
        "descB": "Tree data structure where each internal node has exactly four children. Adapts dynamically to point density, creating smaller boxes in dense cities."
      },
      "advancedInfo": "Boundary edge cases in Geohash (where two points are right next to each other across a grid boundary) are handled by querying the target cell plus its 8 immediate neighbor cells (3x3 grid search).",
      "teacherNotes": {
        "concept": "Geospatial Indexing, Geohash, Quadtrees, Google S2 Geometry, R-Trees, Proximity Queries",
        "experience": "Students replaced a full-table Haversine formula scan across 100,000 stores with a 4ms Geohash prefix lookup.",
        "realWorld": "Uber, Google Maps, and Tinder use Google S2 and Quadtrees to match millions of riders, restaurants, and users in real time.",
        "question": "Why do points right next to each other sometimes have completely different Geohash prefixes, and how is this solved?"
      }
    },
    "youtubeUrl": "https://youtu.be/ty9DQhM32mM?si=ZCmfoXgNdPFqnhQk",
    "videoId": "ty9DQhM32mM",
    "videoTitle": "Search Indexes & Relevance Ranking"
  }
];

// Expose globally for browser usage
if (typeof window !== 'undefined') {
  window.GAME_STAGES = STAGES;
  window.GAME_LEVELS = LEVELS;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { STAGES, LEVELS };
}


/* === FILE: diorama-engine.js === */
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




/* === FILE: simulation.js === */
/**
 * RideQuest - Interactive Visual Simulation Engine
 * Renders scenario-based animated visuals across all 24 levels.
 *
 * For EVERY level and scenario:
 * 1. Initial State (choice === null): Animates the real-world problem as a story.
 *    Shows normal flow breaking down, the bottleneck/failure occurring, and its visible consequences.
 * 2. Correct Option: Animates the architectural solution, components introduced, smooth flows, and improvement.
 * 3. Incorrect Options: Animates the specific consequences of that particular choice, showing why it fails.
 */

class SimulationEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.animationTimer = null;
    this.activeSimType = null;
  }

  clear() {
    if (this.animationTimer) {
      clearInterval(this.animationTimer);
      this.animationTimer = null;
    }
    if (this.container) {
      this.container.innerHTML = '';
    }
  }

  // --- REUSABLE HELPER RENDERERS ---

  renderHeader(badgeText, counterText, badgeType = 'default') {
    const badgeClass = badgeType === 'problem' ? 'sim-badge-problem pulse-danger' 
      : (badgeType === 'solution' ? 'sim-badge-solution glow-green' 
      : (badgeType === 'warning' ? 'sim-badge-warning' : 'sim-badge'));

    return `
      <div class="sim-header">
        <span class="${badgeClass}">${badgeText}</span>
        <span class="sim-counter font-mono">${counterText}</span>
      </div>
    `;
  }

  renderNarrative(type, icon, title, description) {
    const boxClass = type === 'success' ? 'success-narrative glow-green'
      : (type === 'danger' ? 'danger-narrative pulse-shake'
      : (type === 'warning' ? 'warning-narrative' : 'problem-narrative pulse-danger'));

    return `
      <div class="sim-narrative-box ${boxClass}">
        <span class="narrative-icon">${icon}</span>
        <div class="narrative-content">
          <strong class="narrative-title">${title}</strong>
          <div class="narrative-desc text-muted">${description}</div>
        </div>
      </div>
    `;
  }

  renderTelemetry(pills) {
    return `
      <div class="sim-telemetry">
        ${pills.map(p => `
          <div class="stat-pill">
            <span>${p.label}:</span>
            <strong class="${p.class || ''}">${p.val}</strong>
          </div>
        `).join('')}
      </div>
    `;
  }

  // --- MAIN DISPATCHER ---
  render(level, choiceMade = null) {
    this.clear();
    if (!this.container) return;

    this.activeSimType = level.simulationType;
    const simType = level.simulationType;

    // Delegate to Isometric Diorama Game Engine for high-quality Unreal-inspired game scenes
    if (typeof window !== 'undefined' && window.DioramaEngine && typeof window.DioramaEngine.renderScene === 'function') {
      const sceneHtml = window.DioramaEngine.renderScene(simType, choiceMade, level);
      if (sceneHtml) {
        this.container.innerHTML = sceneHtml;
        return;
      }
    }

    switch (simType) {
      case 'servers_traffic':
        this.renderServersTraffic(level, choiceMade);
        break;
      case 'auth_simulation':
      case 'pipeline_bottleneck':
        this.renderAuthSim(level, choiceMade);
        break;
      case 'load_balancer_sim':
        this.renderLoadBalancerSim(level, choiceMade);
        break;
      case 'cap_network_partition':
        this.renderCapSim(level, choiceMade);
        break;
      case 'acid_transaction_sim':
        this.renderAcidSim(level, choiceMade);
        break;
      case 'cache_sim':
        this.renderCacheSim(level, choiceMade);
        break;
      case 'indexing_lookup':
        this.renderIndexingSim(level, choiceMade);
        break;
      case 'oltp_vs_olap':
        this.renderOltpOlapSim(level, choiceMade);
        break;
      case 'sharding_sim':
        this.renderShardingSim(level, choiceMade);
        break;
      case 'database_design_sim':
      case 'replication_failover':
        this.renderDatabaseDesignSim(level, choiceMade);
        break;
      case 'distributed_tx_sim':
        this.renderDistributedTxSim(level, choiceMade);
        break;
      case 'circuit_breaker_sim':
        this.renderCircuitBreakerSim(level, choiceMade);
        break;
      case 'microservices_sim':
      case 'vector_clock_sim':
        this.renderMicroservicesSim(level, choiceMade);
        break;
      case 'api_styles_sim':
        this.renderApiSim(level, choiceMade);
        break;
      case 'rate_limiter_sim':
        this.renderRateLimiterSim(level, choiceMade);
        break;
      case 'protocols_sim':
        this.renderProtocolsSim(level, choiceMade);
        break;
      case 'message_queue_sim':
        this.renderMessageQueueSim(level, choiceMade);
        break;
      case 'stream_processing_sim':
        this.renderStreamSim(level, choiceMade);
        break;
      case 'fulltext_search_sim':
        this.renderSearchSim(level, choiceMade);
        break;
      case 'client_server_sim':
      case 'data_warehouse_sim':
        this.renderClientServerSim(level, choiceMade);
        break;
      case 'cdn_edge_sim':
        this.renderCdnSim(level, choiceMade);
        break;
      case 'recsys_sim':
        this.renderRecSysSim(level, choiceMade);
        break;
      case 'observability_sim':
        this.renderObservabilitySim(level, choiceMade);
        break;
      case 'security_rbac_sim':
        this.renderSecuritySim(level, choiceMade);
        break;
      default:
        this.renderGenericCity(level, choiceMade);
    }
  }

  // =========================================================================
  // LEVEL 1: Servers & Traffic (Horizontal vs Vertical Scaling)
  // =========================================================================
  renderServersTraffic(level, choice) {
    const isHorizontal = choice && choice.id === 'B';
    const isVertical = choice && choice.id === 'A';
    const isDrop = choice && choice.id === 'C';

    let headerBadge, counterText, headerType, narrative, telemetry;
    let serverVisual = '';

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: 6:00 PM City Rush Hour`;
      counterText = '50,000 Active Passengers Overwhelming Server';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.fire({size:22}) + '</span>', 
        'Single Server Bottleneck: Physical Capacity Exceeded', 
        '50,000 riders are simultaneously opening the app to book evening cabs. The lone server CPU is pinned at 99%, heating to 98°C. Incoming requests are piling up, and without an architectural change, the system will crash!');
      telemetry = this.renderTelemetry([
        { label: 'Server CPU', val: '99% (Overheated)', class: 'text-danger' },
        { label: 'Latency', val: '2,400ms (Unusable)', class: 'text-danger' },
        { label: 'Dispatched', val: '8,000 / 50,000', class: 'text-warning' }
      ]);
      serverVisual = `
        <div class="sim-server overheated pulse-danger" id="server-single">
          <div class="server-rack-top"><span class="rack-light red blink"></span><span class="rack-label">Single Main Host #01</span></div>
          <div class="server-icon-large">${Icons.server({size:40, status:"danger"})}</div>
          <div class="server-title">Single Machine Architecture</div>
          <div class="server-bar"><div class="server-fill fill-danger" style="width: 99%;"></div></div>
          <div class="server-status text-danger font-mono">${Icons.alertTriangle({size:14})} CPU: 99% • TEMP: 98°C • MEM: 97%</div>
          <div class="smoke-particles-container"><span class="smoke-p s1" style="color:#aaa;">●</span><span class="smoke-p s2" style="color:#e74c3c;">●</span></div>
          <div class="bottleneck-tag text-danger">${Icons.errorCircle({size:14})} Single Point of Failure (Crash Imminent)</div>
        </div>
      `;
    } else if (isHorizontal) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Horizontal Scale-Out Deployed`;
      counterText = '50,000 req/s Distributed Across 4 Healthy Nodes';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.trophy({size:22}) + '</span>', 
        'Optimal Architecture: Horizontal Scaling Across Nodes', 
        'By distributing the crowd across 4 commodity servers, each machine handles only ~12,500 requests (25% load). If one server trips, the remaining 3 keep the city moving with zero downtime!');
      telemetry = this.renderTelemetry([
        { label: 'Avg Node CPU', val: '25% (Cool & Stable)', class: 'text-success' },
        { label: 'Latency', val: '18ms (Instant)', class: 'text-success' },
        { label: 'Dispatched', val: '50,000 / 50,000 (100%)', class: 'text-success' }
      ]);
      serverVisual = `
        <div class="horizontal-cluster-box glow-green">
          <div class="cluster-header"><span class="cluster-badge">${Icons.check({size:14})} Distributed Cluster (4 Nodes Active)</span></div>
          <div class="sim-servers-grid">
            <div class="sim-server healthy"><div class="server-rack-top"><span class="rack-light green"></span><span>Node 01</span></div><div class="server-icon">${Icons.server({size:28})}</div><div class="server-bar"><div class="server-fill fill-success" style="width: 25%;"></div></div><div class="text-success font-mono">CPU: 25% • 36°C</div></div>
            <div class="sim-server healthy"><div class="server-rack-top"><span class="rack-light green"></span><span>Node 02</span></div><div class="server-icon">${Icons.server({size:28})}</div><div class="server-bar"><div class="server-fill fill-success" style="width: 26%;"></div></div><div class="text-success font-mono">CPU: 26% • 37°C</div></div>
            <div class="sim-server healthy"><div class="server-rack-top"><span class="rack-light green"></span><span>Node 03</span></div><div class="server-icon">${Icons.server({size:28})}</div><div class="server-bar"><div class="server-fill fill-success" style="width: 24%;"></div></div><div class="text-success font-mono">CPU: 24% • 35°C</div></div>
            <div class="sim-server healthy"><div class="server-rack-top"><span class="rack-light green"></span><span>Node 04</span></div><div class="server-icon">${Icons.server({size:28})}</div><div class="server-bar"><div class="server-fill fill-success" style="width: 25%;"></div></div><div class="text-success font-mono">CPU: 25% • 36°C</div></div>
          </div>
        </div>
      `;
    } else if (isVertical) {
      headerBadge = `${Icons.alertTriangle({size:16})} SUBOPTIMAL: Vertical Scaling Hit Hardware Limits`;
      counterText = 'Titan Super-Server ($25,000/mo) Pinned at 95%';
      headerType = 'warning';
      narrative = this.renderNarrative('warning', '<span class="rq-svg-icon">' + Icons.alertTriangle({size:22}) + '</span>', 
        'Physical Hardware Ceiling: Vertical Scaling Cannot Scale Infinitely', 
        'Buying the biggest expensive super-computer helped briefly, but it still has a single motherboard, single power cord, and finite CPU cores. Under peak surge, it overheats again—and remains a disastrous single point of failure!');
      telemetry = this.renderTelemetry([
        { label: 'Titan CPU', val: '95% (Near Max)', class: 'text-warning' },
        { label: 'Monthly Cost', val: '$25,000 (10x Expensive)', class: 'text-danger' },
        { label: 'Redundancy', val: '0 Replicas (Single Point of Failure)', class: 'text-danger' }
      ]);
      serverVisual = `
        <div class="sim-server giant overheated pulse-danger">
          <div class="server-rack-top"><span class="rack-light red blink"></span><span class="rack-label">Titan Super-Server</span></div>
          <div class="server-icon-large">${Icons.server({size:40, status:"warning"})}</div>
          <div class="server-title">One Giant Super-Machine</div>
          <div class="server-bar"><div class="server-fill fill-danger" style="width: 95%;"></div></div>
          <div class="server-status text-danger font-mono">${Icons.alertTriangle({size:14})} CPU: 95% • Still Overheated Under Surge</div>
          <div class="smoke-particles-container"><span class="smoke-p s1" style="color:#aaa;">●</span><span class="smoke-p s2" style="color:#e74c3c;">●</span></div>
          <div class="bottleneck-tag text-warning">${Icons.alertTriangle({size:14, color:"#e67e22"})} Physical limit reached! Single power trip drops all rides.</div>
        </div>
      `;
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} FAILED: App Shut Down to Users`;
      counterText = '0 Cabs Dispatched • 100% User Churn';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Unacceptable Business Outcome: Abandoning Users', 
        'Putting up a notice asking riders to come back later caused passengers to uninstall RideQuest and switch to competitors. Revenue dropped to zero!');
      telemetry = this.renderTelemetry([
        { label: 'App Status', val: 'Closed (Offline)', class: 'text-danger' },
        { label: 'Customer Retention', val: '0% (Mass Churn)', class: 'text-danger' },
        { label: 'Revenue', val: '₹0 Lost', class: 'text-danger' }
      ]);
      serverVisual = `
        <div class="sim-server offline">
          <div class="server-icon-large">${Icons.errorCircle({size:40})}</div>
          <div class="server-title">"Please Try Again in 30 Min"</div>
          <div class="server-status text-danger">App Shut Down to Users</div>
          <div class="bottleneck-tag text-danger">${Icons.alertTriangle({size:14, color:"#e74c3c"})} 100% User Churn — Customers Switched to Competitor</div>
        </div>
      `;
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="sim-traffic-visual">
          <div class="sim-clients">
            <div class="clients-grid">
              <div class="client-avatar">${Icons.phone({size:22, color:"#3498db"})}<span class="user-pulse"></span></div>
              <div class="client-avatar">${Icons.phone({size:22, color:"#3498db"})}<span class="user-pulse"></span></div>
              <div class="client-avatar">${Icons.phone({size:22, color:"#3498db"})}<span class="user-pulse"></span></div>
              <div class="client-avatar">${Icons.phone({size:22, color:"#3498db"})}<span class="user-pulse"></span></div>
            </div>
            <div class="client-label">50,000 Ride Requests</div>
          </div>
          <div class="traffic-pipes ${isHorizontal ? 'pipe-split' : 'pipe-single'}">
            <div class="flow-particle p1"></div>
            <div class="flow-particle p2"></div>
            <div class="flow-particle p3"></div>
          </div>
          <div class="sim-target">${serverVisual}</div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 2: Authentication (OLA Mobile OTP & JWT Session)
  // =========================================================================
  renderAuthSim(level, choice) {
    const isOptimal = choice && choice.id === 'B';
    const isNoAuth = choice && choice.id === 'A';
    const isOfficeVisit = choice && choice.id === 'C';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Unverified Mobile Access`;
      counterText = 'Identity Ambiguity: Who is really booking this cab?';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.shieldAlert({size:22}) + '</span>', 
        'Identity Verification Challenge: Mobile App Access', 
        'A user enters a mobile number +91 98765 43210. But how does the server know the person holding the phone actually owns this SIM card? Without proof, attackers can hijack accounts or book fake rides on innocent strangers\' credit cards!');
      telemetry = this.renderTelemetry([
        { label: 'Identity Proof', val: 'Unverified (?)', class: 'text-warning' },
        { label: 'Account Security', val: 'Vulnerable', class: 'text-danger' },
        { label: 'Booking Integrity', val: 'At Risk', class: 'text-warning' }
      ]);
    } else if (isOptimal) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: 2FA SMS OTP + Signed JWT Session`;
      counterText = 'Identity Cryptographically Verified • Token Issued';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.shieldLock({size:22}) + '</span>', 
        'Authentication (AuthN): Dynamic One-Time Secret + JWT', 
        'By transmitting a 6-digit cryptographic secret (142690) via the telecom SMS gateway, the server proves physical SIM card possession. Once verified, the Auth Server issues a tamper-proof signed JWT token valid for future requests!');
      telemetry = this.renderTelemetry([
        { label: 'Security Level', val: 'High (Cryptographic)', class: 'text-success' },
        { label: 'User Friction', val: '10 Seconds (Fast)', class: 'text-success' },
        { label: 'Fraud Rate', val: '0.01% (Safe)', class: 'text-success' }
      ]);
    } else if (isNoAuth) {
      headerBadge = `${Icons.errorCircle({size:16})} CATASTROPHE: Zero Authentication Allowed`;
      counterText = '85% Fraud Rate • Account Takeovers Rampant';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.alertCircle({size:22, color:"#e74c3c"}) + '</span>', 
        'Disastrous Security Failure: Impersonation & Financial Theft', 
        'With zero verification, scammers typed random phone numbers and took free rides using other people\'s saved cards and wallets. Cabs arrived at ghost pickup points, drivers went unpaid, and customer trust collapsed!');
      telemetry = this.renderTelemetry([
        { label: 'Fraud Rate', val: '85% (Catastrophic)', class: 'text-danger' },
        { label: 'Security', val: 'Zero (Compromised)', class: 'text-danger' },
        { label: 'Driver Trust', val: 'Destroyed', class: 'text-danger' }
      ]);
    } else {
      headerBadge = `${Icons.alertTriangle({size:16})} EXTREME FRICTION: In-Person Office Verification`;
      counterText = '99.9% User Churn • Zero App Adoption';
      headerType = 'warning';
      narrative = this.renderNarrative('warning', '<span class="rq-svg-icon">' + Icons.citySkyline({size:22}) + '</span>', 
        'Unusable Customer Friction: Security Overkill', 
        'While requiring passengers to visit a physical office with passport and ID card is secure, it creates immense friction. Nobody will travel to an office just to book an auto-rickshaw. 99.9% of users uninstalled the app!');
      telemetry = this.renderTelemetry([
        { label: 'Adoption Rate', val: '0.1% (Mass Churn)', class: 'text-danger' },
        { label: 'Friction Time', val: '2 Days (Unacceptable)', class: 'text-danger' },
        { label: 'Business Viability', val: 'Failed', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage auth-sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="auth-simulation-visual">
          <!-- Step 1: Mobile App Screen -->
          <div class="auth-flow-card ${isOptimal ? 'border-success glow-green' : (isNoAuth ? 'border-danger pulse-shake' : '')}">
            <div class="flow-step-num">Step 1</div>
            <div class="flow-icon">${Icons.phone({size:18})}</div>
            <div class="flow-title">OLA Mobile App</div>
            <div class="flow-body">
              <div class="mock-input-field">
                <span class="country-code">🇮🇳 +91</span>
                <span class="phone-num">98765 43210</span>
              </div>
              <button class="mock-btn-ola ${isOptimal ? 'btn-active' : ''}">Next &rarr;</button>
            </div>
            <div class="flow-caption">${isNoAuth ? `${Icons.errorCircle({size:14})} Anyone can enter any number!` : 'User enters registered phone'}</div>
          </div>

          <!-- Network Arrow 1 -->
          <div class="auth-arrow ${isOptimal ? 'arrow-active' : ''}">
            <div class="arrow-line"></div>
            <div class="arrow-label">SMS Gateway ${Icons.phone({size:14})}</div>
          </div>

          <!-- Step 2: OTP Verification -->
          <div class="auth-flow-card ${isOptimal ? 'border-success glow-green' : (isNoAuth ? 'border-danger pulse-shake' : '')}">
            <div class="flow-step-num">Step 2</div>
            <div class="flow-icon">${isNoAuth ? Icons.errorCircle({size:14}) : (isOfficeVisit ? '<span class="rq-svg-icon">' + Icons.citySkyline({size:22}) + '</span>' : Icons.networkPacket({size:14}))}</div>
            <div class="flow-title">${isNoAuth ? 'OTP Skipped!' : (isOfficeVisit ? 'Office Line' : '6-Digit OTP')}</div>
            <div class="flow-body">
              ${isNoAuth ? `
                <div class="text-danger" style="font-size: 0.8rem; font-weight: bold;">
                  ${Icons.errorCircle({size:14})} Skipped Verification!<br>Scammers book rides on your card!
                </div>
              ` : (isOfficeVisit ? `
                <div class="text-warning" style="font-size: 0.8rem;">
                  ⏳ Waiting in line with passport & paper documents...
                </div>
              ` : `
                <div class="otp-boxes-row">
                  <span class="otp-digit">1</span><span class="otp-digit">4</span><span class="otp-digit">2</span>
                  <span class="otp-digit">6</span><span class="otp-digit">9</span><span class="otp-digit">0</span>
                </div>
                <div class="otp-timer">Expires in 60s (One-Time)</div>
              `)}
            </div>
            <div class="flow-caption">${isOptimal ? 'Dynamic cryptographic secret' : (isNoAuth ? 'Zero proof of ownership' : 'Extreme user friction')}</div>
          </div>

          <!-- Network Arrow 2 -->
          <div class="auth-arrow ${isOptimal ? 'arrow-active' : ''}">
            <div class="arrow-line"></div>
            <div class="arrow-label">Verify Hash ${Icons.lock({size:12})}</div>
          </div>

          <!-- Step 3: Auth Server & JWT Token -->
          <div class="auth-flow-card ${isOptimal ? 'border-success glow-green' : ''}">
            <div class="flow-step-num">Step 3</div>
            <div class="flow-icon">${Icons.shieldCheck({size:18})}</div>
            <div class="flow-title">Auth Server (Token)</div>
            <div class="flow-body">
              <div class="token-pill ${isOptimal ? 'token-valid' : 'token-invalid'}">
                ${Icons.key({size:14})} ${isOptimal ? 'Bearer eyJhbGciOi... (30d)' : (isNoAuth ? 'NO TOKEN (Hacked)' : 'Pending Office Stamp')}
              </div>
              <div class="auth-unlock-badge ${isOptimal ? 'text-success' : 'text-muted'}">
                ${isOptimal ? `${Icons.checkCircle({size:14})} OLA Map Unlocked!` : (isNoAuth ? `${Icons.alertCircle({size:14, color:'#e74c3c'})} Rogue Access Allowed` : `${Icons.lock({size:14})} Access Denied`)}
              </div>
            </div>
            <div class="flow-caption">Validates user on every future ride request</div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 3: Load Balancing (Traffic Distribution)
  // =========================================================================
  renderLoadBalancerSim(level, choice) {
    let mode = choice ? (choice.id === 'B' ? 'least_conn' : (choice.id === 'C' ? 'hash' : 'round_robin')) : null;

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: All Traffic Hitting Server 1`;
      counterText = 'Server 1 Melting (100% CPU) • Server 2 & 3 Idle (0%)';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.loadBalancer({size:22}) + '</span>', 
        'Traffic Imbalance: No Traffic Director in Front', 
        'We have 3 powerful servers, but without a Load Balancer, all 50,000 riders connect directly to Server 1. Server 1 is on fire, while Server 2 and Server 3 sit completely idle wasting money!');
      telemetry = this.renderTelemetry([
        { label: 'Server A Load', val: '100% (CRASHING)', class: 'text-danger' },
        { label: 'Server B Load', val: '0% (Idle ZZZ)', class: 'text-muted' },
        { label: 'Server C Load', val: '0% (Idle ZZZ)', class: 'text-muted' }
      ]);
    } else {
      headerBadge = `${Icons.sparkle({size:14})} SOLUTION: Load Balancer (${mode.toUpperCase().replace('_', ' ')})`;
      counterText = 'Traffic Evenly Distributed Across Server Fleet';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.loadBalancer({size:22}) + '</span>', 
        `Load Balancing Strategy: ${mode === 'round_robin' ? 'Round Robin (Turns)' : (mode === 'least_conn' ? 'Least Connections' : 'Consistent Hashing')}`, 
        mode === 'round_robin' 
          ? 'The Load Balancer takes turns: 1st user to Server A, 2nd to B, 3rd to C. Traffic splits evenly (33% each) with zero configuration!' 
          : (mode === 'least_conn' 
            ? 'The Load Balancer tracks active connections in real time and routes each new rider to whichever server currently has the lightest load.' 
            : 'The Load Balancer hashes the Rider ID mathematically to route requests consistently to the same server while maintaining overall cluster balance.'));
      telemetry = this.renderTelemetry([
        { label: 'Server A Load', val: mode === 'least_conn' ? '33%' : (mode === 'round_robin' ? '34%' : '35%'), class: 'text-success' },
        { label: 'Server B Load', val: mode === 'least_conn' ? '33%' : (mode === 'round_robin' ? '33%' : '32%'), class: 'text-success' },
        { label: 'Server C Load', val: mode === 'least_conn' ? '34%' : (mode === 'round_robin' ? '33%' : '33%'), class: 'text-success' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="lb-interactive">
          <div class="lb-controls">
            <button class="lb-btn ${mode === 'round_robin' ? 'active' : ''}" onclick="window.game.makeChoice(window.GAME_LEVELS[2].choices[0])">1. Take Turns (Round Robin)</button>
            <button class="lb-btn ${mode === 'least_conn' ? 'active' : ''}" onclick="window.game.makeChoice(window.GAME_LEVELS[2].choices[1])">2. Least Busy (Least Conn)</button>
            <button class="lb-btn ${mode === 'hash' ? 'active' : ''}" onclick="window.game.makeChoice(window.GAME_LEVELS[2].choices[2])">3. User Hash (Consistent)</button>
          </div>
          <div class="lb-diagram">
            <div class="lb-clients">
              <div class="client-dot c1">User #1</div>
              <div class="client-dot c2">User #2</div>
              <div class="client-dot c3">User #3</div>
              <div class="client-dot c4">User #4</div>
            </div>
            <div class="lb-router-box ${mode ? 'glow-cyan' : 'pulse-danger'}">
              <div class="router-icon">${Icons.loadBalancer({size:14})}️</div>
              <div class="router-label">${mode ? 'Load Balancer (Active)' : 'NO LOAD BALANCER!'}</div>
            </div>
            <div class="lb-backends">
              <div class="server-pod ${!mode ? 'overheated pulse-danger' : ''}" id="lb-s1">
                <div class="pod-name">Server A</div>
                <div class="pod-bar"><div class="pod-fill ${!mode ? 'fill-danger' : 'fill-success'}" style="width: ${!mode ? '100%' : '33%'};"></div></div>
                <div class="pod-stat">${!mode ? `${Icons.fire({size:14})} 100% (50k requests)` : '3,330 req/s'}</div>
              </div>
              <div class="server-pod ${!mode ? 'pod-idle' : ''}" id="lb-s2">
                <div class="pod-name">Server B</div>
                <div class="pod-bar"><div class="pod-fill fill-success" style="width: ${!mode ? '0%' : '33%'};"></div></div>
                <div class="pod-stat">${!mode ? `${Icons.clock({size:14})} 0% (Wasted)` : '3,330 req/s'}</div>
              </div>
              <div class="server-pod ${!mode ? 'pod-idle' : ''}" id="lb-s3">
                <div class="pod-name">Server C</div>
                <div class="pod-bar"><div class="pod-fill fill-success" style="width: ${!mode ? '0%' : '34%'};"></div></div>
                <div class="pod-stat">${!mode ? `${Icons.clock({size:14})} 0% (Wasted)` : '3,340 req/s'}</div>
              </div>
            </div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 4: CAP Theorem (Network Partition)
  // =========================================================================
  renderCapSim(level, choice) {
    const isConsistency = choice && choice.id === 'A';
    const isAvailability = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Lightning Severed Network Fiber!`;
      counterText = 'North DC & South DC Partitioned • Cannot Synchronize';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.lightning({size:22}) + '</span>', 
        'Network Partition: The CAP Theorem Dilemma', 
        'Lightning severed the underground cable between North City and South City data centers. Driver Arun Kumar is assigned a passenger in North DC, but South DC cannot verify it! Do we answer fast with stale data, or pause to guarantee consistency?');
      telemetry = this.renderTelemetry([
        { label: 'Network Link', val: 'SEVERED ${Icons.fire({size:14, color:"#e74c3c"})}', class: 'text-danger' },
        { label: 'Sync Status', val: 'Desynchronized', class: 'text-warning' },
        { label: 'Data Trade-Off', val: 'Choose CP or AP', class: 'text-warning' }
      ]);
    } else if (isConsistency) {
      headerBadge = `${Icons.sparkle({size:16})} CP CHOICE: Strict Consistency Prioritized`;
      counterText = 'South DC Holds Booking • Zero Double Bookings';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.shieldCheck({size:22}) + '</span>', 
        'Consistency over Availability (CP)', 
        'South DC refuses to guess. It temporarily shows: "Connecting to North... holding request." Passengers wait a few seconds, but two different passengers are NEVER assigned the same cab. Zero double-booking disaster!');
      telemetry = this.renderTelemetry([
        { label: 'Data Consistency', val: '100% Strict (Zero Conflict)', class: 'text-success' },
        { label: 'Double Bookings', val: '0 (Guaranteed)', class: 'text-success' },
        { label: 'Availability', val: 'Temporarily Paused', class: 'text-warning' }
      ]);
    } else {
      headerBadge = `${Icons.sparkle({size:16})} AP CHOICE: High Availability Prioritized`;
      counterText = 'Instant Response • Eventual Consistency';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.lightning({size:22}) + '</span>', 
        'Availability over Consistency (AP)', 
        'South DC answers immediately using last-known cached driver locations so no passenger ever sees an error screen. Once the cable heals, background sync merges the records!');
      telemetry = this.renderTelemetry([
        { label: 'Availability', val: '100% Uptime (Instant)', class: 'text-success' },
        { label: 'Passenger Latency', val: '12ms', class: 'text-success' },
        { label: 'Conflict Risk', val: 'Handled via Compensation', class: 'text-warning' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="cap-visual">
          <div class="datacenter dc-north">
            <div class="dc-title">${Icons.citySkyline({size:16})} North Data Center</div>
            <div class="dc-data">Driver Arun: <strong>Assigned (Trip #42)</strong></div>
            <div class="dc-ping green-dot">${Icons.checkCircle({size:14})} Online</div>
          </div>
          <div class="partition-wire">
            <div class="cut-line">${Icons.lightning({size:14})} ${Icons.fire({size:14, color:"#e74c3c"})} CABLE SEVERED ${Icons.fire({size:14, color:"#e74c3c"})} ${Icons.lightning({size:14})}</div>
            <div class="wire-msg">Cannot synchronize across city!</div>
          </div>
          <div class="datacenter dc-south ${isConsistency ? 'holding' : (isAvailability ? 'available' : '')}">
            <div class="dc-title">${Icons.citySkyline({size:16})} South Data Center</div>
            <div class="dc-data">Driver Arun: <strong>${isConsistency ? `${Icons.lock({size:14})} Held (Awaiting Sync)` : (isAvailability ? 'Assigned (Cached)' : 'Unknown State')}</strong></div>
            <div class="dc-ping red-dot">${isConsistency ? 'Holding' : (isAvailability ? `${Icons.checkCircle({size:14})} Responding` : `${Icons.alertTriangle({size:14, color:'#e74c3c'})} Isolated`)}</div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 5: ACID Transactions (All-or-Nothing Payment)
  // =========================================================================
  renderAcidSim(level, choice) {
    const isAtomic = choice && choice.id === 'A';
    const isLoose = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Partial Network Payment Failure`;
      counterText = '₹250 Deducted • Trip Unconfirmed • Money in Limbo!';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.alertTriangle({size:22, color:"#e74c3c"}) + '</span>', 
        'Partial Failure: Step 1 Succeeded, Step 2 Crashed', 
        'Passenger Priya tapped "Pay ₹250". The bank account debited ₹250 successfully. But right before the Ride Service marked the trip PAID, the cell tower dropped! Priya\'s money is gone, but the cab meter still says UNPAID!');
      telemetry = this.renderTelemetry([
        { label: 'Bank Wallet', val: '-₹250 (Debited)', class: 'text-warning' },
        { label: 'Trip Ledger', val: 'UNPAID (Pending)', class: 'text-danger' },
        { label: 'State Integrity', val: 'CORRUPTED', class: 'text-danger' }
      ]);
    } else if (isAtomic) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: ACID Transaction Rollback (Atomicity)`;
      counterText = 'All-or-Nothing Rule • ₹250 Refunded Automatically';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.refresh({size:22}) + '</span>', 
        'Atomicity (ACID): All Steps Succeed, or Everything Rolls Back', 
        'Because Step 2 failed to confirm the trip, the ACID database rolled back Step 1 instantly! ₹250 was restored to Priya\'s wallet within 10 milliseconds. Zero rupees lost, zero accounting discrepancies!');
      telemetry = this.renderTelemetry([
        { label: 'Atomicity Result', val: 'Rolled Back Cleanly', class: 'text-success' },
        { label: 'Money Lost', val: '₹0.00', class: 'text-success' },
        { label: 'Customer Trust', val: 'Protected (100%)', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} DISASTER: No Atomicity • Customer Stolen From`;
      counterText = 'Support Phones Ringing • Financial Dispute Escalated';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Unacceptable Accounting Failure: Lost Money', 
        'Leaving the money deducted without confirming the ride means RideQuest took money for services not delivered. Customer care lines are flooded, bank chargebacks filed, and regulatory fines issued!');
      telemetry = this.renderTelemetry([
        { label: 'Discrepancy', val: '-₹250 (Unresolved)', class: 'text-danger' },
        { label: 'Chargeback Risk', val: 'High (Visa / UPI)', class: 'text-danger' },
        { label: 'Customer Churn', val: 'Severe', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="transaction-steps">
          <div class="tx-step step-ok">
            <div class="tx-num">1</div>
            <div class="tx-info"><strong>Step 1: Bank Wallet</strong><br>Deduct ₹250 from Priya's account</div>
            <div class="tx-badge success">${Icons.check({size:14})} SUCCESS</div>
          </div>
          <div class="tx-divider">⬇️</div>
          <div class="tx-step step-fail">
            <div class="tx-num">2</div>
            <div class="tx-info"><strong>Step 2: Ride Service</strong><br>Mark Trip #9812 as PAID & Complete</div>
            <div class="tx-badge danger">${Icons.lightning({size:14})} NETWORK CRASH</div>
          </div>
          <div class="tx-divider">⬇️</div>
          <div class="tx-step ${isAtomic ? 'step-rollback glow-green' : 'step-lost pulse-danger'}">
            <div class="tx-num">3</div>
            <div class="tx-info">
              ${isAtomic ? `
                <strong>Step 3: ACID Rollback Triggered</strong><br>
                Operation aborted! ₹250 instantly restored to Priya's wallet.
              ` : `
                <strong>No Atomicity Rule Active:</strong><br>
                Priya lost ₹250, driver is unpaid, customer support chaos!
              `}
            </div>
            <div class="tx-badge ${isAtomic ? 'warning' : 'danger'}">${isAtomic ? `${Icons.refresh({size:14})} ROLLED BACK SAFELY` : `${Icons.errorCircle({size:14})} CORRUPTED STATE`}</div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 6: In-Memory Caching (Redis vs Disk)
  // =========================================================================
  renderCacheSim(level, choice) {
    const hasCache = choice && choice.id === 'A';
    const isDisks = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: 10,000 Repeated Airport Queries`;
      counterText = 'Database Disk Grinding • Mechanical Seek Latency (40ms)';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.database({size:22}) + '</span>', 
        'Redundant Calculations: The Same Query Computed 10,000x / Sec', 
        'Every single second, 10,000 riders check the Airport fare ($12.50). The database disk is repeatedly reading tables, multiplying tariffs, and calculating tolls from slow magnetic storage. The disk heads are thrashing and response time is lagging!');
      telemetry = this.renderTelemetry([
        { label: 'Disk IOPS', val: '99% Saturation', class: 'text-danger' },
        { label: 'Query Latency', val: '45ms (Slow Disk)', class: 'text-danger' },
        { label: 'Redundant Work', val: '99.9% Repeated', class: 'text-warning' }
      ]);
    } else if (hasCache) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: In-Memory Cache (Redis) Deployed`;
      counterText = '1ms Sub-Millisecond Lookup from RAM • 99.8% Cache Hit';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.lightning({size:22}) + '</span>', 
        'In-Memory RAM Caching: O(1) Instant Response', 
        'The first query computes the Airport fare and stores it in RAM (Redis). The next 9,999 requests are served directly from memory in 1 millisecond! The database disk drops to 0% load and rests peacefully.');
      telemetry = this.renderTelemetry([
        { label: 'Cache Hit Rate', val: '99.8% (Instant)', class: 'text-success' },
        { label: 'Lookup Time', val: '1ms (from RAM)', class: 'text-success' },
        { label: 'Database Load', val: 'Dropped by 98%', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.alertTriangle({size:16})} SUBOPTIMAL: Buying 100 Hard Drives Failed`;
      counterText = 'Cost: $15,000/mo • Mechanical Latency Floor Unsolved';
      headerType = 'warning';
      narrative = this.renderNarrative('warning', '<span class="rq-svg-icon">' + Icons.alertTriangle({size:22, color:"#e74c3c"}) + '</span>', 
        'Hardware Misallocation: Disk Storage Cannot Beat RAM Physics', 
        'Buying 100 more hard drives cost $15,000/mo, but mechanical disk seek times (~10-40ms) still physically lag behind in-memory silicon RAM (~1ms). Redundant queries continue to waste disk throughput!');
      telemetry = this.renderTelemetry([
        { label: 'Cost Waste', val: '$15,000 / mo', class: 'text-danger' },
        { label: 'Disk Latency', val: '38ms (Still Laggy)', class: 'text-warning' },
        { label: 'Cache Advantage', val: 'Missed O(1) RAM speed', class: 'text-warning' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="cache-visual-grid">
          <div class="cache-box ${hasCache ? 'cache-hit glow-green' : 'cache-idle'}">
            <div class="box-icon">${Icons.lightning({size:16})} RAM Cache (Redis)</div>
            <div class="cache-content">
              ${hasCache ? `
                <div class="kv-item"><span class="key">route:airport</span> -> <span class="val">₹450 [HIT 99.8%]</span></div>
                <div class="kv-item"><span class="key">surge:city_center</span> -> <span class="val">1.2x [HIT]</span></div>
              ` : `
                <div class="text-muted">(Cache Inactive — All requests bypass to disk)</div>
              `}
            </div>
            <div class="speed-tag ${hasCache ? 'text-success' : 'text-muted'}">Lookup: <strong>${hasCache ? '1 millisecond' : 'Bypassed'}</strong></div>
          </div>
          <div class="cache-arrow">${hasCache ? '◀️ Answered from RAM (Instant)' : '⏬ Reading Slow Disk (40ms)'}</div>
          <div class="disk-box ${hasCache ? 'disk-cool' : 'disk-heavy pulse-danger'}">
            <div class="box-icon">${Icons.database({size:16})} Relational Database Disk</div>
            <div class="disk-content">
              <div>Tables: rides, trips, tariffs, discounts...</div>
              <div>${hasCache ? `${Icons.checkCircle({size:14})} Idle & Protected` : `${Icons.fire({size:14})} Disk Head Thrashing on 10,000 reads/sec`}</div>
            </div>
            <div class="speed-tag text-danger">Disk Query: <strong>${hasCache ? '0 reads (Offloaded)' : '40 milliseconds'}</strong></div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 7: Database Indexing (B-Tree vs Full Table Scan)
  // =========================================================================
  renderIndexingSim(level, choice) {
    const hasIndex = choice && choice.id === 'A';
    const isBrute = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Searching Phone in 10,000,000 Rows`;
      counterText = 'Full Table Scan: Checking Row 1, 2, 3... Sequentially';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.search({size:22}) + '</span>', 
        'Sequential O(N) Table Scan: 10 Million Records', 
        'A rider searches driver phone "+91 98765 43210". Without an index, the database starts at row 1 and reads every single row on disk one by one. The mobile app spins for 8.5 seconds while 10 million rows are examined!');
      telemetry = this.renderTelemetry([
        { label: 'Rows Scanned', val: '4,129,081 / 10,000,000', class: 'text-danger' },
        { label: 'Query Time', val: '8,500ms (Unusable)', class: 'text-danger' },
        { label: 'Search Complexity', val: 'O(N) Linear Scan', class: 'text-warning' }
      ]);
    } else if (hasIndex) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: B-Tree Index Lookup Deployed`;
      counterText = 'Logarithmic O(log N) Lookup: 4 Jumps in 2ms';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.checkCircle({size:22, color:"#27ae60"}) + '</span>', 
        'B-Tree Indexing: Jump Directly to the Record', 
        'An organized B-Tree index structure sorts driver phone numbers. The database jumps Root [1000-9999] → Branch [9000-9999] → Branch [9800-9899] → Target in just 4 jumps (2ms)! Even with 100 million rows, lookup takes only milliseconds.');
      telemetry = this.renderTelemetry([
        { label: 'Rows Examined', val: '4 Hops (O(log N))', class: 'text-success' },
        { label: 'Query Latency', val: '2ms (Sub-second)', class: 'text-success' },
        { label: 'Disk IO Saved', val: '99.999%', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} FAILED: Brute Force Scan Still Freezes Phone`;
      counterText = 'CPU at 100% • Mobile App Timeout at 8 Seconds';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Algorithmic Inefficiency: Brute Force Cannot Outrun Linear Growth', 
        'Telling the CPU to scan faster doesn\'t fix the O(N) flaw. Reading 10 million rows from storage still takes 8 seconds, causing mobile clients to timeout with "Server Not Responding" errors!');
      telemetry = this.renderTelemetry([
        { label: 'CPU Usage', val: '100% (Locked)', class: 'text-danger' },
        { label: 'Query Latency', val: '8,200ms', class: 'text-danger' },
        { label: 'App Result', val: 'Timeout 504', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="indexing-visual">
          ${hasIndex ? `
            <div class="btree-tree">
              <div class="tree-node root">[Phone Range: 1000 - 9999]</div>
              <div class="tree-branches"><div class="tree-node branch">[9000 - 9999] ${Icons.target({size:14})} Jump 1</div></div>
              <div class="tree-branches"><div class="tree-node branch">[9800 - 9899] ${Icons.target({size:14})} Jump 2</div></div>
              <div class="tree-branches"><div class="tree-node leaf highlight">[9876543210 -> Row #492,810] ${Icons.target({size:14})} MATCH! (2ms)</div></div>
            </div>
          ` : `
            <div class="table-scan-list">
              <div class="scan-row check">Row 1: +91 11223 34455 (No match)</div>
              <div class="scan-row check">Row 2: +91 11223 34456 (No match)</div>
              <div class="scan-row check">Row 3: +91 11223 34457 (No match)</div>
              <div class="scan-row current pulse-shake">Row 4,129,081 ... (Scanning 10 Million Rows sequentially... 8,500ms)</div>
            </div>
          `}
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 8: OLTP vs OLAP (Workload Separation)
  // =========================================================================
  renderOltpOlapSim(level, choice) {
    const isSplit = choice && choice.id === 'A';
    const isShared = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Live Rides Blocked by Analytics Query`;
      counterText = '3-Year Report Locks Shared Database • 9,410 Bookings Frozen';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.fire({size:22, color:"#e74c3c"}) + '</span>', 
        'Resource Conflict: Heavy OLAP Reporting on Live OLTP Database', 
        'An executive ran a query across 80,000,000 historical rows ("SELECT * FROM 3_YEAR_TRIPS"). Because live rides and reports share the same database, the query placed an exclusive table lock! Passengers trying to book cabs on the street are frozen!');
      telemetry = this.renderTelemetry([
        { label: 'Table Lock', val: 'EXCLUSIVE LOCK (Held)', class: 'text-danger' },
        { label: 'Live Bookings', val: '9,410 Queued / Blocked', class: 'text-danger' },
        { label: 'Booking Latency', val: '14,000ms (Timeout)', class: 'text-danger' }
      ]);
    } else if (isSplit) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Decoupled OLTP (Live) & OLAP (Warehouse)`;
      counterText = 'Zero Table Locks • 3ms Live Rides • Fast Big-Data Analytics';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.citySkyline({size:22}) + '</span>', 
        'Workload Specialization: OLTP Row Store + Columnar OLAP', 
        'Live passenger bookings run on an optimized row-based OLTP database (3ms, zero locks). A background continuous ETL stream replicates data into a columnar Data Warehouse (Snowflake/ClickHouse), allowing heavy analytical reports to scan 80M rows without touching live riders!');
      telemetry = this.renderTelemetry([
        { label: 'Live Ride Latency', val: '3ms (Instant)', class: 'text-success' },
        { label: 'Reporting Query', val: 'Columnar Scan (Isolated)', class: 'text-success' },
        { label: 'Table Contention', val: '0% (Completely Decoupled)', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} DISASTER: Running Analytics on Live DB Crashed Service`;
      counterText = 'Production Outage • Passenger Churn Spike';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Architectural Anti-Pattern: Mixed Operational & Analytical Workloads', 
        'Running complex analytical aggregations directly on the primary production database monopolized disk IO and memory pools, triggering out-of-memory crashes for live ride-hailing services!');
      telemetry = this.renderTelemetry([
        { label: 'System Health', val: 'CRASHED (OOM)', class: 'text-danger' },
        { label: 'Lost Bookings', val: '100% Outage', class: 'text-danger' },
        { label: 'Workload Isolation', val: 'None (Shared Failure)', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="oltp-olap-layout">
          ${isSplit ? `
            <div class="system-split">
              <div class="db-card oltp-card glow-cyan">
                <div class="db-title">${Icons.car({size:16})} OLTP (Row Store)</div>
                <div>Purpose: Fast Live Bookings</div>
                <div>Latency: <strong>3ms</strong></div>
                <div class="text-success">Zero Locks! Pure Speed</div>
              </div>
              <div class="etl-pipe">${Icons.refresh({size:14})} Continuous ETL Stream ${Icons.arrowRight({size:14})}</div>
              <div class="db-card olap-card glow-purple">
                <div class="db-title">${Icons.database({size:16})} OLAP (Columnar Warehouse)</div>
                <div>Purpose: 80 Million Row Analysis</div>
                <div>Query: Aggregations & Trends</div>
                <div class="text-success">Heavy reporting without touching live rides!</div>
              </div>
            </div>
          ` : `
            <div class="monolith-blocked">
              <div class="db-card monolith-card pulse-danger">
                <div class="db-title">${Icons.fire({size:14, color:"#e74c3c"})} Single Shared Database</div>
                <div class="text-danger">Query Lock: "SELECT * FROM 3_YEAR_TRIPS"</div>
                <div class="lock-indicator">${Icons.lock({size:14})} ROW LOCK TIMEOUT</div>
                <div class="text-warning">Passenger bookings waiting: 9,410 queued!</div>
              </div>
            </div>
          `}
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 9: Database Sharding (Partitioning Huge Tables)
  // =========================================================================
  renderShardingSim(level, choice) {
    const isRange = choice && choice.id === 'A';
    const isHash = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: 500 Million Records on Single Disk`;
      counterText = 'Hard Drive 99% Full • Write Latency 8.2 Seconds';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.networkPacket({size:22}) + '</span>', 
        'Storage Saturation: Monolithic Database Hit Physical Ceilings', 
        'RideQuest has accumulated 500,000,000 ride rows on a single database server. The storage disk is 99% full, write queues are backing up, and index trees are too massive to fit into RAM. Adding another drive to the same machine no longer solves the scaling bottleneck!');
      telemetry = this.renderTelemetry([
        { label: 'Disk Storage', val: '99% Full (500M rows)', class: 'text-danger' },
        { label: 'Insert Latency', val: '8,200ms (Disk Bottleneck)', class: 'text-danger' },
        { label: 'Horizontal Split', val: '0 Shards (Monolith)', class: 'text-warning' }
      ]);
    } else {
      headerBadge = `${Icons.sparkle({size:14})} SOLUTION: Database Sharding (${isRange ? 'By Region' : 'By Hash'})`;
      counterText = '500M Rows Partitioned Across 3 Independent Database Nodes';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.networkPacket({size:22}) + '</span>', 
        `Sharding Architecture: ${isRange ? 'Range-Based by City' : 'Hash-Based by User ID'}`, 
        isRange 
          ? 'Sharding by City routes Delhi traffic to Shard 1, Bengaluru to Shard 2, and Mumbai to Shard 3. Each database handles only 166M records with 50% capacity headroom!' 
          : 'Hash-based sharding applies Math.hash(UserID) % 3 to evenly scatter rides across 3 database machines, guaranteeing uniform storage and compute distribution.');
      telemetry = this.renderTelemetry([
        { label: 'Per-Shard Load', val: '166M Records (Balanced)', class: 'text-success' },
        { label: 'Write Latency', val: '12ms (Fast Parallel Writes)', class: 'text-success' },
        { label: 'Storage Headroom', val: '50% Free Space', class: 'text-success' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="shards-row">
          <div class="shard-box s1 ${!choice ? 'pulse-danger' : 'glow-cyan'}">
            <div class="shard-header">${!choice ? `${Icons.fire({size:14, color:"#e74c3c"})} Single Giant DB` : `${Icons.networkPacket({size:14})} Shard 1`}</div>
            <div class="shard-tag">${!choice ? 'All Cities (Monolith)' : (isRange ? 'City: Delhi / North' : 'Hash: 0 - 33%')}</div>
            <div class="shard-records">${!choice ? '500 Million Records (99% Full)' : '166 Million Records'}</div>
            <div class="shard-meter"><div class="meter-bar" style="width: ${!choice ? '99%' : '50%'}; background: ${!choice ? '#ef4444' : '#10b981'};"></div></div>
          </div>
          ${choice ? `
            <div class="shard-box s2 glow-cyan">
              <div class="shard-header">${Icons.networkPacket({size:14})} Shard 2</div>
              <div class="shard-tag">${isRange ? 'City: Bengaluru / South' : 'Hash: 34 - 66%'}</div>
              <div class="shard-records">166 Million Records</div>
              <div class="shard-meter"><div class="meter-bar" style="width: 50%; background: #10b981;"></div></div>
            </div>
            <div class="shard-box s3 glow-cyan">
              <div class="shard-header">${Icons.networkPacket({size:14})} Shard 3</div>
              <div class="shard-tag">${isRange ? 'City: Mumbai / West' : 'Hash: 67 - 100%'}</div>
              <div class="shard-records">167 Million Records</div>
              <div class="shard-meter"><div class="meter-bar" style="width: 50%; background: #10b981;"></div></div>
            </div>
          ` : ''}
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 10: Database Design (SQL Relational vs NoSQL Document)
  // =========================================================================
  renderDatabaseDesignSim(level, choice) {
    const isPolyglot = choice && choice.id === 'B';
    const isPureSql = choice && choice.id === 'A';
    const isPlaintext = choice && choice.id === 'C';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Diverse Workload Conflicts`;
      counterText = 'Strict Financial Ledgers vs 100,000 GPS Writes/Sec';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.citySkyline({size:22}) + '</span>', 
        'Database Selection Challenge: Relational vs Document Model', 
        'OLA handles two completely different kinds of data: 1) Strict financial payments (never lose a rupee, immutable audits), and 2) Dynamic driver profiles with 100k live GPS pings per second and unpredictable vehicle amenities (EV, AC, Pet-friendly). Forcing both into one database causes massive bottlenecks!');
      telemetry = this.renderTelemetry([
        { label: 'Payment Safety', val: 'Needs ACID Relational', class: 'text-warning' },
        { label: 'GPS Ingestion', val: 'Needs High-Write NoSQL', class: 'text-warning' },
        { label: 'Schema Flexibility', val: 'Needs Document Model', class: 'text-warning' }
      ]);
    } else if (isPolyglot) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Polyglot Persistence Deployed`;
      counterText = 'SQL for Financial Ledger • NoSQL for Driver Profiles';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.trophy({size:22}) + '</span>', 
        'Optimal Architecture: The Right Database for the Right Job', 
        'By adopting Polyglot Persistence, OLA uses PostgreSQL for strict financial ledgers (ACID compliance, atomic rollbacks, zero double charges) AND MongoDB/Redis for dynamic driver telemetry (flexible JSON attributes, 120,000 writes/sec without locking disks)!');
      telemetry = this.renderTelemetry([
        { label: 'Financial Safety', val: '100% Strict ACID', class: 'text-success' },
        { label: 'GPS Ingestion', val: '120,000 writes/s (NoSQL)', class: 'text-success' },
        { label: 'Schema Adaptability', val: 'High (Dynamic JSON)', class: 'text-success' }
      ]);
    } else if (isPureSql) {
      headerBadge = `${Icons.alertTriangle({size:16})} SUBOPTIMAL: Rigid SQL Table Overburdened`;
      counterText = '100 Empty Columns • Disk Locks on Rapid GPS Writes';
      headerType = 'warning';
      narrative = this.renderNarrative('warning', '<span class="rq-svg-icon">' + Icons.alertTriangle({size:22}) + '</span>', 
        'Schema Rigidity & Write Bottlenecks: Forcing Everything into SQL', 
        'Forcing dynamic vehicle attributes into rigid SQL created 100 empty columns (is_pet, is_ev, has_baby_seat...). More critically, 100,000 rapid GPS coordinates per second locked relational database rows, causing payment transactions to lag!');
      telemetry = this.renderTelemetry([
        { label: 'SQL Disk Locks', val: 'Frequent Table Locks', class: 'text-danger' },
        { label: 'GPS Throughput', val: '3,200 writes/s (Capped)', class: 'text-danger' },
        { label: 'Schema Migration', val: 'Costly & Painful', class: 'text-warning' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} CATASTROPHE: Plaintext File on Shared Drive`;
      counterText = 'Race Conditions • Negative Balances • Data Corruption';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Catastrophic Data Loss: No Database Management System', 
        'Storing payments in plaintext files led to concurrent write collisions, file corruption, negative balances, and stolen funds. Banks immediately revoked payment licenses!');
      telemetry = this.renderTelemetry([
        { label: 'Data Corruption', val: '100% Corrupted', class: 'text-danger' },
        { label: 'Concurrency', val: 'Race Condition Crashes', class: 'text-danger' },
        { label: 'Financial Loss', val: 'Massive Audit Deficit', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage db-design-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="db-comparison-grid">
          <div class="db-spec-card sql-card ${isPolyglot || isPureSql ? 'db-card-active glow-cyan' : 'db-card-warning'}">
            <div class="db-card-header">
              <span class="db-icon">${Icons.database({size:16})}</span>
              <div><div class="db-card-title">SQL (Relational / PostgreSQL)</div><div class="db-card-sub">Payments & Invoices</div></div>
              <span class="db-badge badge-acid">ACID Compliant</span>
            </div>
            <div class="db-visual-preview">
              <table class="mock-sql-table">
                <thead><tr><th>ride_id</th><th>rider_id</th><th>amount</th><th>status</th></tr></thead>
                <tbody>
                  <tr class="sql-row-ok"><td>#R-9041</td><td>USR_42</td><td>₹148.00</td><td class="text-success">PAID</td></tr>
                  <tr class="sql-row-ok"><td>#R-9042</td><td>USR_89</td><td>₹210.50</td><td class="text-success">PAID</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="db-spec-card nosql-card ${isPolyglot ? 'db-card-active glow-green' : 'db-card-warning'}">
            <div class="db-card-header">
              <span class="db-icon">${Icons.checkCircle({size:14, color:"#2ecc71"})}</span>
              <div><div class="db-card-title">NoSQL (MongoDB / Redis)</div><div class="db-card-sub">Driver Telemetry & Profiles</div></div>
              <span class="db-badge badge-flex">Flexible Schema</span>
            </div>
            <div class="db-visual-preview">
              <div class="mock-json-doc">
                <span class="json-bracket">{</span><br>
                &nbsp;&nbsp;<span class="json-key">"driver_id"</span>: <span class="json-val">"DRV_809"</span>,<br>
                &nbsp;&nbsp;<span class="json-key">"live_coords"</span>: [<span class="json-num">12.9716</span>, <span class="json-num">77.5946</span>],<br>
                &nbsp;&nbsp;<span class="json-key">"vehicle"</span>: { <span class="json-key">"type"</span>: <span class="json-val">"Mini"</span>, <span class="json-key">"ac"</span>: <span class="json-bool">true</span> }<br>
                <span class="json-bracket">}</span>
              </div>
            </div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 11: Distributed Transactions (2PC vs Saga)
  // =========================================================================
  renderDistributedTxSim(level, choice) {
    const is2PC = choice && choice.id === 'A';
    const isSaga = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Coordinated State Across Services`;
      counterText = 'Ride Service & Payment Service Divided by Network';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.users({size:22}) + '</span>', 
        'Distributed Transaction Challenge: Multi-Service Consistency', 
        'Booking a ride spans two separate microservices: Ride Service (driver lock) and Payment Service (wallet debit). What happens if one succeeds but the other fails halfway through? Without distributed coordination, money can be deducted with no driver arriving!');
      telemetry = this.renderTelemetry([
        { label: 'Ride Service', val: 'Uncoordinated', class: 'text-warning' },
        { label: 'Payment Service', val: 'Uncoordinated', class: 'text-warning' },
        { label: 'Agreement Protocol', val: 'None Active', class: 'text-danger' }
      ]);
    } else if (is2PC) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Two-Phase Commit (2PC) Active`;
      counterText = 'Prepare (Vote Yes?) → Commit Atomic Lock';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.users({size:22}) + '</span>', 
        'Two-Phase Commit (2PC): Strict Atomic Consensus', 
        'The Transaction Coordinator executes Phase 1: asks both Ride Service and Payment Service "Can you commit?". Only when BOTH reply YES does Phase 2 broadcast COMMIT. Guaranteed zero state mismatch!');
      telemetry = this.renderTelemetry([
        { label: 'Consistency', val: '100% Strict Atomic', class: 'text-success' },
        { label: 'Coordinator', val: 'Consensus Achieved', class: 'text-success' },
        { label: 'State Sync', val: 'Synchronized', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Saga Workflow Pattern Active`;
      counterText = 'Choreographed Steps + Automatic Compensating Refunds';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.refresh({size:22}) + '</span>', 
        'Saga Pattern: Asynchronous Resilient Workflow', 
        'Step 1 deducts wallet. If Step 2 (driver match) fails, Saga automatically triggers a compensating transaction that immediately refunds the money. Avoids blocking database locks across services!');
      telemetry = this.renderTelemetry([
        { label: 'Resilience', val: 'High (Compensating)', class: 'text-success' },
        { label: 'Lock Contention', val: '0% Non-Blocking', class: 'text-success' },
        { label: 'Fault Recovery', val: 'Automatic Refund', class: 'text-success' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="tx-diagram">
          <div class="service-box ${choice ? 'glow-cyan' : ''}">
            <div class="svc-icon">${Icons.car({size:18})}</div>
            <div class="svc-name">Ride Service</div>
            <div class="svc-state ${choice ? 'text-success' : 'text-warning'}">${is2PC ? 'Phase 1: Vote YES → Commit' : (isSaga ? 'Step 2: Driver Assigned' : 'Awaiting Protocol')}</div>
          </div>
          <div class="coordinator-box ${choice ? 'glow-purple' : 'pulse-danger'}">
            <div class="coord-icon">${Icons.users({size:14})}</div>
            <div class="coord-name">${is2PC ? '2PC Coordinator' : (isSaga ? 'Saga Orchestrator' : 'NO COORDINATION')}</div>
          </div>
          <div class="service-box ${choice ? 'glow-cyan' : ''}">
            <div class="svc-icon">${Icons.jwtToken({size:14})}</div>
            <div class="svc-name">Payment Service</div>
            <div class="svc-state ${choice ? 'text-success' : 'text-warning'}">${is2PC ? 'Phase 1: Vote YES → Commit' : (isSaga ? 'Step 1: Wallet Deducted' : 'Awaiting Protocol')}</div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 12: Circuit Breaker Pattern (Fault Tolerance)
  // =========================================================================
  renderCircuitBreakerSim(level, choice) {
    const hasBreaker = choice && choice.id === 'A';
    const isRetries = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Third-Party Bank API Frozen (45s)`;
      counterText = '10,000 Requests Piling Up • Server Thread Pool 98% Exhausted';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.lightning({size:22}) + '</span>', 
        'Cascading Failure: Thread Starvation on Dead Dependency', 
        'An external banking payment gateway is hanging for 45 seconds. Incoming passengers booking rides are waiting, consuming server worker threads. With all threads blocked on the dead bank, RideQuest cannot even show the map screen!');
      telemetry = this.renderTelemetry([
        { label: 'Bank Response Time', val: '45,000ms (Hanging)', class: 'text-danger' },
        { label: 'Worker Thread Pool', val: '98% Starved', class: 'text-danger' },
        { label: 'Cascading Failure', val: 'Imminent Crash', class: 'text-danger' }
      ]);
    } else if (hasBreaker) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Circuit Breaker TRIPPED to OPEN State`;
      counterText = 'Fails Fast in 2ms • Thread Pool 100% Healthy • Cash Fallback Active';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.shield({size:22}) + '</span>', 
        'Circuit Breaker Pattern: Protecting the Core System', 
        'After 5 consecutive timeouts, the Circuit Breaker tripped OPEN! It immediately stops calling the dead bank API, responds in 2 milliseconds, and falls back to Cash / Wallet. Core app threads remain 100% healthy!');
      telemetry = this.renderTelemetry([
        { label: 'Circuit State', val: 'OPEN (Tripped - Safe)', class: 'text-success' },
        { label: 'Fail-Fast Time', val: '2ms (Instant Fallback)', class: 'text-success' },
        { label: 'RideQuest Threads', val: '100% Available', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} CATASTROPHE: 100 Retries DDoSed the Dead Bank`;
      counterText = '1,000,000 Retry Requests • Total RideQuest Blackout';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.fire({size:22}) + '</span>', 
        'Retry Storm: Multiplying Failure across the System', 
        'Aggressively retrying 100 times in a tight loop turned 10,000 requests into 1,000,000 calls! This DDoSed the dying bank and instantly exhausted every thread on RideQuest servers, causing total platform downtime!');
      telemetry = this.renderTelemetry([
        { label: 'Thread Exhaustion', val: '100% (Crash)', class: 'text-danger' },
        { label: 'Retry Storm', val: '1,000,000 Loops', class: 'text-danger' },
        { label: 'App Availability', val: '0% Blackout', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="cb-visual">
          <div class="cb-service">
            <div class="svc-name">RideQuest Core App</div>
            <div class="${hasBreaker ? 'text-success' : 'text-danger'}">${hasBreaker ? 'Thread Pool Healthy (100% Available)' : 'Threads Exhausted!'}</div>
          </div>
          <div class="cb-switch ${hasBreaker ? 'switch-open glow-green' : 'switch-closed pulse-danger'}">
            <div class="switch-icon">${hasBreaker ? `${Icons.lightning({size:14})} ${Icons.errorCircle({size:14, color:"#c0392b"})}` : `${Icons.circuitBreaker({size:16, state:"closed"})}`}</div>
            <div class="switch-label">${hasBreaker ? 'CIRCUIT OPEN (Fails Fast 2ms)' : 'CIRCUIT CLOSED (Hanging 45s)'}</div>
          </div>
          <div class="cb-partner ${hasBreaker ? 'bypassed' : 'choking pulse-danger'}">
            <div class="svc-name">Slow Third-Party Bank API</div>
            <div class="text-danger">${hasBreaker ? 'Blocked & Bypassed (Fallback to Cash)' : '10,000 Hanging Threads!'}</div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 13: Microservices Architecture (Decoupled Services)
  // =========================================================================
  renderMicroservicesSim(level, choice) {
    const isMicroservices = choice && choice.id === 'B';
    const isMonolith = choice && choice.id === 'A';
    const isDelete = choice && choice.id === 'C';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: SMS Gateway Telecom Outage`;
      counterText = 'Notification Service Failing • Will It Bring Down Cabs?';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.alertCircle({size:22, color:"#f39c12"}) + '</span>', 
        'Fault Isolation Challenge: Decoupled Services vs Monolith', 
        'An external telecom SMS provider went down. The Notification Service is throwing uncaught exceptions. If all app code lives in a single monolithic process, this minor SMS error will crash cab booking across the entire country!');
      telemetry = this.renderTelemetry([
        { label: 'SMS Provider', val: 'DOWN (503 Service Unavail)', class: 'text-danger' },
        { label: 'Blast Radius', val: 'Threatening Core System', class: 'text-warning' },
        { label: 'Cab Dispatch', val: 'Vulnerable to Crash', class: 'text-warning' }
      ]);
    } else if (isMicroservices) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Independent Microservices Active`;
      counterText = 'Notification Isolated to Queue • Cabs Booking 100% Normally';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.shield({size:22}) + '</span>', 
        'Fault Isolation: The Cab Still Arrives on Time!', 
        'Because OLA splits its system into independent microservices, the SMS notification failure is isolated into a retry queue. Ride Booking, Driver Matching, and Payment operate at 100% health! Driver Arun Kumar still arrives on time!');
      telemetry = this.renderTelemetry([
        { label: 'Blast Radius', val: 'Isolated to 1 Service', class: 'text-success' },
        { label: 'Ride Dispatch', val: '99.99% Operational', class: 'text-success' },
        { label: 'Core Cabs Moving', val: 'Yes (Uninterrupted)', class: 'text-success' }
      ]);
    } else if (isMonolith) {
      headerBadge = `${Icons.errorCircle({size:16})} CATASTROPHE: Monolithic Memory Space Crash`;
      counterText = '1 Unhandled SMS Exception Crashed All City Rides!';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.fire({size:22}) + '</span>', 
        'Catastrophic Monolith Blast Radius: Single Process Failure', 
        'In a monolith, all modules share the same memory space. When the SMS telecom failed, an uncaught exception crashed the entire process, stranding thousands of passengers on the street!');
      telemetry = this.renderTelemetry([
        { label: 'Blast Radius', val: '100% Platform Wide', class: 'text-danger' },
        { label: 'Cab Bookings', val: '0% (Completely Frozen)', class: 'text-danger' },
        { label: 'Server Process', val: 'CRASHED (Exit Code 1)', class: 'text-danger' }
      ]);
    } else {
      headerBadge = `${Icons.alertTriangle({size:16})} DEGRADED: Essential Services Deleted`;
      counterText = 'No Driver Matching • Empty Static Map';
      headerType = 'warning';
      narrative = this.renderNarrative('warning', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Destructive Over-Simplification: Core Functionality Removed', 
        'Deleting notifications, matching, and payments leaves a completely non-functional app. Riders can look at a static map, but nobody can book a ride!');
      telemetry = this.renderTelemetry([
        { label: 'App Functionality', val: 'Broken (Empty UI)', class: 'text-danger' },
        { label: 'Ride Revenue', val: '₹0', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage microservices-sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="ms-diagram-container">
          ${isMonolith ? `
            <div class="monolith-crash-box pulse-shake">
              <div class="monolith-header"><span class="mono-badge text-danger">${Icons.alertTriangle({size:14, color:"#e74c3c"})} Monolithic Process (Shared Memory Space)</span></div>
              <div class="monolith-internals">
                <div class="mono-module module-dead">${Icons.car({size:14})} Booking Module</div>
                <div class="mono-module module-dead">${Icons.pinLocation({size:14})} Matching Module</div>
                <div class="mono-module module-dead">${Icons.jwtToken({size:14})} Payment Module</div>
                <div class="mono-module module-crash glow-red">${Icons.fire({size:14, color:"#e74c3c"})} SMS Module (Crash!)</div>
              </div>
              <div class="monolith-error-banner text-danger">${Icons.fire({size:14})} Unhandled SMS NullPointer Exception crashed the entire server! 0 Cabs can be booked!</div>
            </div>
          ` : `
            <div class="ms-grid">
              <div class="ms-node ${isMicroservices ? 'ms-healthy glow-green' : 'ms-neutral'}">
                <div class="ms-icon">${Icons.taxiCab({size:18})}</div>
                <div class="ms-name">Ride Booking Service</div>
                <div class="ms-status ${isMicroservices ? 'text-success' : ''}">${isMicroservices ? `${Icons.checkCircle({size:14})} 100% Operational` : 'Active'}</div>
              </div>
              <div class="ms-connector ${isMicroservices ? 'pipe-active' : ''}">⇄</div>
              <div class="ms-node ${isMicroservices ? 'ms-healthy glow-green' : 'ms-neutral'}">
                <div class="ms-icon">${Icons.pinLocation({size:18})}</div>
                <div class="ms-name">Driver Matching Service</div>
                <div class="ms-status ${isMicroservices ? 'text-success' : ''}">${isMicroservices ? `${Icons.checkCircle({size:14})} Driver Assigned (Arun)` : 'Active'}</div>
              </div>
              <div class="ms-connector ${isMicroservices ? 'pipe-active' : ''}">⇄</div>
              <div class="ms-node ${isMicroservices ? 'ms-healthy glow-green' : 'ms-neutral'}">
                <div class="ms-icon">${Icons.jwtToken({size:14})}</div>
                <div class="ms-name">Payment Service</div>
                <div class="ms-status text-success">${Icons.checkCircle({size:14})} Secure & Active</div>
              </div>
              <div class="ms-break-line"></div>
              <div class="ms-node ms-failing ${isMicroservices ? 'ms-isolated glow-orange' : 'pulse-danger'}">
                <div class="ms-icon">${Icons.alertCircle({size:14, color:"#f39c12"})}</div>
                <div class="ms-name">Notification Service</div>
                <div class="ms-status text-danger">${Icons.errorCircle({size:12, color:"#e74c3c"})} SMS Gateway Down</div>
                <div class="ms-metric ${isMicroservices ? 'text-warning' : 'text-danger'}">${isMicroservices ? `${Icons.networkPacket({size:14, color:"#16a085"})} Isolated in Queue` : `${Icons.alertTriangle({size:14, color:"#e74c3c"})} Threatening Monolith!`}</div>
              </div>
            </div>
          `}
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 14: API Architecture (REST / GraphQL / gRPC)
  // =========================================================================
  renderApiSim(level, choice) {
    const isOptimal = choice && choice.id === 'A';
    const isXml = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Bloated 50KB XML Choking 3G Mobile`;
      counterText = 'Over-Fetching: Mobile Needs 3 Fields, Receives 200';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.phone({size:22}) + '</span>', 
        'Over-Fetching & Serialization Overhead: Heavy Payloads on Spotty 3G', 
        'A passenger on 3G internet needs only 3 fields: driver name, car model, and ETA. But the server sends a bloated 50KB XML document containing 200 internal fields! Bandwidth is choked and phone battery is wasted parsing verbose text!');
      telemetry = this.renderTelemetry([
        { label: 'Payload Size', val: '50,200 Bytes (Bloated)', class: 'text-danger' },
        { label: 'Useful Data', val: '0.2% (99.8% Waste)', class: 'text-danger' },
        { label: 'Parse Time', val: '38ms on Mobile', class: 'text-warning' }
      ]);
    } else if (isOptimal) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: GraphQL (Mobile) + Binary gRPC (Internal)`;
      counterText = 'Mobile Payload 140 Bytes • Microservices Latency 1.2ms';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.lightning({size:22}) + '</span>', 
        'Modern API Architecture: Right Protocol for Right Layer', 
        'Mobile clients query exact fields via GraphQL/REST (JSON: 140 bytes, instant over 3G). Internal microservices communicate over high-performance binary gRPC (Protobuf), slashing serialization overhead by 95%!');
      telemetry = this.renderTelemetry([
        { label: 'Mobile Payload', val: '140 Bytes (99.7% Smaller)', class: 'text-success' },
        { label: 'Internal RPC', val: '1.2ms (Binary Protobuf)', class: 'text-success' },
        { label: 'Battery Impact', val: 'Negligible', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} INEFFICIENT: Giant XML Text Monolith`;
      counterText = 'Heavy Bandwidth Usage • Slow Mobile Parsing';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Legacy Protocol Bottleneck: Verbose Text Serialization', 
        'Sending giant uncompressed XML text across microservices wastes gigabytes of internal network bandwidth and introduces heavy CPU DOM parsing delays on low-end smartphones!');
      telemetry = this.renderTelemetry([
        { label: 'Network Waste', val: '4,200 Bytes / Ping', class: 'text-danger' },
        { label: 'RPC Latency', val: '35ms (Slow Text Parsing)', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="api-diagram">
          <div class="api-client">${Icons.phone({size:16})} Mobile Phone</div>
          <div class="api-pipe text-cyan">${isOptimal ? 'GraphQL (JSON: 140 bytes)' : 'Bloated XML (50KB Choke)'}</div>
          <div class="api-gateway glow-cyan">API Gateway</div>
          <div class="api-pipe text-purple">${isOptimal ? 'gRPC Protobuf (Binary: 1.2ms)' : 'Raw XML Parsing (35ms)'}</div>
          <div class="api-backend">${Icons.apiGateway({size:16})} Microservices</div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 15: Rate Limiting (Token Bucket Defense)
  // =========================================================================
  renderRateLimiterSim(level, choice) {
    const hasLimiter = choice && choice.id === 'A';
    const isUnconditional = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Spammer / Bot Clicking 50 Taps / Sec`;
      counterText = 'Surge Attack: Database Flooded with Duplicate Transactions';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.shieldAlert({size:22}) + '</span>', 
        'Abusive Traffic Surge: Spammers & Runaway Scripts', 
        'A rogue bot or angry passenger is clicking "Book Ride" 50 times per second. Without rate limiting, the server attempts 50 database transactions every second for a single user, overwhelming server threads and starving legitimate riders!');
      telemetry = this.renderTelemetry([
        { label: 'Incoming Taps', val: '50 taps / sec (Abuse)', class: 'text-danger' },
        { label: 'Rate Limiter', val: 'None Active (Exposed)', class: 'text-danger' },
        { label: 'Legitimate Users', val: 'Starved & Blocked', class: 'text-warning' }
      ]);
    } else if (hasLimiter) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Token Bucket Rate Limiter Active`;
      counterText = '5 Tokens Max • 1 Refill / Sec • Excess Taps Receive 429';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.key({size:22}) + '</span>', 
        'Token Bucket Defense: Smooth Traffic & Throttling', 
        'Each passenger gets a virtual token bucket holding 5 tokens. Normal clicks consume 1 token and refill at 1/sec. Rapid abusive bursts empty the bucket, and excess clicks instantly receive HTTP 429 (Too Many Requests) without touching the database!');
      telemetry = this.renderTelemetry([
        { label: 'Server Protection', val: '100% Safe from Floods', class: 'text-success' },
        { label: 'Abuse Throttling', val: 'HTTP 429 Returned', class: 'text-success' },
        { label: 'Legitimate Riders', val: 'Zero Lag (Protected)', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} CATASTROPHE: Server Crashed from Spam Flood`;
      counterText = '50,000 Unchecked Database Writes • Service Down';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.fire({size:22}) + '</span>', 
        'Denial of Service (DoS): Server Flooded Without Rate Limiting', 
        'Accepting every click unconditionally allowed malicious bots to flood the database with 50,000 transactions, bringing the entire service down for all legitimate passengers in the city!');
      telemetry = this.renderTelemetry([
        { label: 'Database Health', val: 'CRASHED (Locked)', class: 'text-danger' },
        { label: 'Server Response', val: 'HTTP 500 / Timeout', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="rate-limiter-stage">
          <div class="bucket-container">
            <div class="bucket-box ${hasLimiter ? 'glow-green' : 'overflow pulse-danger'}">
              <div class="bucket-title">${Icons.key({size:14})} Token Bucket</div>
              <div class="tokens-row">
                <span class="token">${Icons.key({size:14})}</span><span class="token">${Icons.key({size:14})}</span><span class="token">${Icons.key({size:14})}</span>
              </div>
              <div class="bucket-status">${hasLimiter ? `${Icons.check({size:14})} Excess clicks get HTTP 429` : `${Icons.fire({size:14, color:"#e74c3c"})} Server Crashing from 50,000 spam taps!`}</div>
            </div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 16: Networking Protocols (WebSockets vs HTTP Polling)
  // =========================================================================
  renderProtocolsSim(level, choice) {
    const isWs = choice && choice.id === 'A';
    const isPolling = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Live Map Car Tracking Lag`;
      counterText = 'HTTP Polling: 120 Handshakes / Min • Stuttering Car Movement';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.cdnNode({size:22}) + '</span>', 
        'Protocol Inefficiency: Re-Establishing Connections Repeatedly', 
        'To show the moving cab on the map, the phone sends an HTTP request every second. Each ping performs a TCP handshake with 850 bytes of HTTP headers! The car icon jumps in jerky 1-second stutters and phone batteries drain rapidly!');
      telemetry = this.renderTelemetry([
        { label: 'Connection Type', val: 'Short Polling (Jerky)', class: 'text-warning' },
        { label: 'Header Overhead', val: '850 Bytes / Ping', class: 'text-danger' },
        { label: 'Smoothness', val: 'Stuttering (1 FPS)', class: 'text-danger' }
      ]);
    } else if (isWs) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: WebSocket Bi-Directional Stream Active`;
      counterText = 'Single Persistent Pipe • 2-Byte GPS Frames • 60 FPS Gliding';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.taxiCab({size:22}) + '</span>', 
        'WebSockets: Persistent Real-Time Telemetry Stream', 
        'A single persistent bi-directional WebSocket connection stays open. The server pushes GPS coordinates as tiny 2-byte frames the instant the driver moves. The cab glides smoothly on the map with zero battery drain!');
      telemetry = this.renderTelemetry([
        { label: 'Header Overhead', val: '2 Bytes per Ping (99% Less)', class: 'text-success' },
        { label: 'Map Smoothness', val: '60 FPS Smooth Gliding', class: 'text-success' },
        { label: 'Battery Impact', val: 'Low (Single TCP Pipe)', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.alertTriangle({size:16})} SUBOPTIMAL: Continued HTTP Short Polling`;
      counterText = 'Battery Draining Rapidly • Jerky Car Movements';
      headerType = 'warning';
      narrative = this.renderNarrative('warning', '<span class="rq-svg-icon">' + Icons.lightning({size:22}) + '</span>', 
        'High Overhead: 120 HTTP Handshakes per Minute', 
        'Short polling forces the radio chip to stay active continuously, burning phone battery and consuming unnecessary cellular data with redundant HTTP headers for every coordinate update.');
      telemetry = this.renderTelemetry([
        { label: 'Battery Drain', val: 'High (Radio active)', class: 'text-danger' },
        { label: 'Header Waste', val: '100 KB / Minute', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="protocol-road">
          <div class="car-sprite ${isWs ? 'car-gliding' : 'car-stuttering'}">${Icons.taxiCab({size:22})}</div>
          <div class="road-track"></div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 17: Message Queues (Kafka / Buffer)
  // =========================================================================
  renderMessageQueueSim(level, choice) {
    const hasQueue = choice && choice.id === 'A';
    const isDiscard = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: 80,000 Requests in 10s (New Year Surge)`;
      counterText = 'Workers Can Only Pair 2,000 / Sec • 60,000 Rides Being Dropped!';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.networkPacket({size:22}) + '</span>', 
        'Traffic Spike: Sudden Ingestion Exceeds Worker Processing', 
        'On New Year\'s Eve midnight, 80,000 ride requests flood in within 10 seconds! The driver-matching engine can only calculate pairings at 2,000/sec. Without a shock absorber, 60,000 requests overflow memory and are dropped forever!');
      telemetry = this.renderTelemetry([
        { label: 'Incoming Surge', val: '80,000 requests', class: 'text-danger' },
        { label: 'Worker Capacity', val: '2,000 / sec max', class: 'text-warning' },
        { label: 'Dropped Rides', val: '60,000 LOST (Overflow)', class: 'text-danger' }
      ]);
    } else if (hasQueue) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Durable Message Queue (Kafka) Deployed`;
      counterText = 'Conveyor Belt Buffers 80,000 Requests • 0 Dropped Rides';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.networkPacket({size:22}) + '</span>', 
        'Message Queues: Asynchronous Traffic Shock Absorber', 
        'Incoming requests land on a lightning-fast, durable waiting conveyor belt (Kafka/RabbitMQ). The matching workers pull requests steadily as fast as they can. The temporary traffic spike is absorbed safely with zero lost bookings!');
      telemetry = this.renderTelemetry([
        { label: 'Buffered in Queue', val: '80,000 (Safe on Disk)', class: 'text-success' },
        { label: 'Dropped Rides', val: '0 (100% Retained)', class: 'text-success' },
        { label: 'Worker Health', val: 'Steady Constant Load', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} CATASTROPHE: 60,000 Customer Rides Discarded`;
      counterText = '75% Customer Churn • Millions in Revenue Lost';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Unacceptable Policy: Dropping Paying Customers', 
        'Discarding requests that cannot be matched in 50ms dropped 60,000 paying riders on the most profitable night of the year! Passengers uninstalled RideQuest and switched to competitors.');
      telemetry = this.renderTelemetry([
        { label: 'Lost Revenue', val: '75% Revenue Dropped', class: 'text-danger' },
        { label: 'Customer Trust', val: 'Destroyed', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="queue-conveyor">
          <div class="producers">${Icons.users({size:14})} 80,000 Passengers</div>
          <div class="conveyor-belt ${hasQueue ? 'glow-purple' : 'broken pulse-danger'}">
            ${hasQueue ? `
              <div class="belt-item">${Icons.networkPacket({size:14})}️ Ride #1</div>
              <div class="belt-item">${Icons.networkPacket({size:14})}️ Ride #2</div>
              <div class="belt-item">${Icons.networkPacket({size:14})}️ Ride #3</div>
              <div class="belt-item">${Icons.networkPacket({size:14})}️ ...80k buffered</div>
            ` : `
              <div class="text-danger">${Icons.fire({size:14, color:"#e74c3c"})} Buffer Overflow! Dropping 75% of rides</div>
            `}
          </div>
          <div class="consumers">${Icons.apiGateway({size:14})} Match Worker Pool</div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 18: Stream Processing (Real-Time City Data)
  // =========================================================================
  renderStreamSim(level, choice) {
    const isStream = choice && choice.id === 'A';
    const isBatch = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: 50,000 Drivers Generating 1.5M Pings / Min`;
      counterText = 'Batch Job Scheduled in 6 Hours • Traffic Jam Undetected!';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.cdnNode({size:22}) + '</span>', 
        'Real-Time Telemetry Gap: Batch Processing is Too Slow for Traffic', 
        '50,000 drivers send GPS coordinates every 2 seconds. A massive traffic jam has formed on MG Road. Because RideQuest runs batch jobs once every 6 hours, it won\'t know about the jam until 10 PM! Thousands of cabs are routing directly into gridlock!');
      telemetry = this.renderTelemetry([
        { label: 'Incoming Events', val: '1,500,000 pings / min', class: 'text-warning' },
        { label: 'Detection Delay', val: '6 Hours (Batch Lag)', class: 'text-danger' },
        { label: 'Rerouting State', val: 'Blind to Current Jams', class: 'text-danger' }
      ]);
    } else if (isStream) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Continuous Stream Processing (Apache Flink)`;
      counterText = 'Sliding Time Window • Traffic Jam Detected in 1.4 Seconds';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.alertTriangle({size:22, color:"#3498db"}) + '</span>', 
        'Stream Processing: Real-Time Analytics on Continuous Data', 
        'Apache Flink processes telemetry as it flows through 30-second sliding windows. It detects rapid deceleration on MG Road in 1.4 seconds and automatically reroutes incoming cabs around the jam in real-time!');
      telemetry = this.renderTelemetry([
        { label: 'Jam Detection Time', val: '1.4 Seconds (Real-Time)', class: 'text-success' },
        { label: 'ETA Accuracy', val: '99.5% Dynamic', class: 'text-success' },
        { label: 'Rerouted Cabs', val: '4,200 Avoided Gridlock', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} OUTDATED: 6-Hour Batch Analysis Failed`;
      counterText = 'Traffic Jam Cleared by the Time Report Ran';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Temporal Staleness: Batch Jobs Cannot React to Live Events', 
        'Saving GPS coordinates to disk and running queries hours later creates historical reports, but cannot help live drivers on the road. Cabs wasted fuel and passengers arrived 45 minutes late!');
      telemetry = this.renderTelemetry([
        { label: 'Latency to Action', val: '6 Hours (Useless)', class: 'text-danger' },
        { label: 'Passenger Delay', val: '+45 Minutes Average', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="stream-radar">
          <div class="radar-circle ${isStream ? 'radar-scanning' : ''}">
            <div class="radar-blip b1">${Icons.pinLocation({size:14})} Car 412</div>
            <div class="radar-blip b2">${Icons.pinLocation({size:14})} Car 981</div>
            <div class="radar-blip b3 text-danger">${Icons.trafficJam({size:14, color:"#e74c3c"})} Traffic Jam Detected!</div>
          </div>
          <div class="radar-info text-cyan">${isStream ? 'Sliding Window: Instant Reroute Computed in 1.4s' : 'Batch job scheduled at 10 PM (Too Late!)'}</div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 19: Full-Text Search (Inverted Index)
  // =========================================================================
  renderSearchSim(level, choice) {
    const isEngine = choice && choice.id === 'A';
    const isSql = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Search "Indira Gandhi Airport"`;
      counterText = 'SQL LIKE %Query% Scanning 25,000,000 Text Rows';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.search({size:22}) + '</span>', 
        'Full Table Text Scan: Relational Databases Struggle with Search', 
        'A passenger types "Indira Gandhi Airport". RideQuest has 25 million landmarks. The relational database runs `SELECT * WHERE address LIKE "%Indira%"`. It must scan every character of all 25 million records, freezing the phone for 9.2 seconds!');
      telemetry = this.renderTelemetry([
        { label: 'Search Latency', val: '9,200ms (Phone Frozen)', class: 'text-danger' },
        { label: 'Rows Scanned', val: '25,000,000 Records', class: 'text-danger' },
        { label: 'Typo / Prefix Match', val: 'Unsupported', class: 'text-warning' }
      ]);
    } else if (isEngine) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Inverted Index (Elasticsearch) Deployed`;
      counterText = 'Tokens Mapped to Document IDs • Matched in 3ms';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.search({size:22}) + '</span>', 
        'Inverted Index: Instant Multi-Word Keyword Matching', 
        'Elasticsearch tokenizes addresses into unique words ("indira", "airport", "terminal") and maps each word to a postings list of IDs. Set intersection matches Location #42 in 3 milliseconds with typo-tolerance and prefix autocomplete!');
      telemetry = this.renderTelemetry([
        { label: 'Search Latency', val: '3ms (Sub-second Autocomplete)', class: 'text-success' },
        { label: 'Fuzzy / Typo Search', val: 'Supported (Levenshtein)', class: 'text-success' },
        { label: 'Database Load', val: '0% (Search Engine Isolated)', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} SUBOPTIMAL: Retaining SQL LIKE % Query`;
      counterText = 'High CPU Spikes • 9-Second Search Latency';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Index Impairment: Leading Wildcards Invalidate B-Trees', 
        'Using `LIKE "%keyword%"` prevents database B-Tree indexes from being used. Every search forces a full disk scan, causing massive CPU spikes whenever riders search for destinations!');
      telemetry = this.renderTelemetry([
        { label: 'CPU Usage', val: '100% on DB Disk', class: 'text-danger' },
        { label: 'Rider Experience', val: 'Unusable Autocomplete', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="search-sim-view">
          ${isEngine ? `
            <div class="inverted-index-card glow-cyan">
              <div class="index-row"><span>"indira"</span> →️ <span>[Location #42, #98, #104]</span></div>
              <div class="index-row"><span>"airport"</span> →️ <span>[Location #42, #55, #89]</span></div>
              <div class="index-row highlight text-success"><span>Intersection:</span> <strong>Location #42: Terminal 2 (Instant Match in 3ms!)</strong></div>
            </div>
          ` : `
            <div class="sql-like-box pulse-shake">
              <div>SELECT * FROM places WHERE address LIKE '%Indira%';</div>
              <div class="text-danger font-mono">Scanning 25,000,000 text records... Phone frozen (9,200ms)</div>
            </div>
          `}
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 20: Client-Server Architecture (Mobile vs Cloud)
  // =========================================================================
  renderClientServerSim(level, choice) {
    const isClientServer = choice && choice.id === 'B';
    const isP2P = choice && choice.id === 'A';
    const isShout = choice && choice.id === 'C';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Passenger Phone Needs to Find Drivers`;
      counterText = 'Mobile Phone Has Limited Battery & Zero Citywide Knowledge';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.phone({size:22}) + '</span>', 
        'Architecture Division: How Should Phone & Cloud Cooperate?', 
        'A passenger opens the OLA app in Indiranagar to book a ride to the airport. The phone itself has limited battery and knows nothing about the 50,000 drivers across the city. How should work be split between the mobile phone and central cloud computers?');
      telemetry = this.renderTelemetry([
        { label: 'Phone Battery', val: 'Needs Protection', class: 'text-warning' },
        { label: 'Citywide Knowledge', val: 'Centralized in Cloud', class: 'text-warning' },
        { label: 'Architecture', val: 'Needs Clean Separation', class: 'text-warning' }
      ]);
    } else if (isClientServer) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Client-Server Model Deployed`;
      counterText = 'Lightweight Mobile Client (45 bytes) • Central Cloud Brain (15ms)';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.lightning({size:22}) + '</span>', 
        'Client-Server Architecture: Clean Separation of Concerns', 
        'The mobile app (Client) handles UI taps and map rendering. It sends a lightweight Request (lat, lng) to OLA Cloud (Server). The server checks 50,000 drivers, runs pricing algorithms, and returns a 200 OK JSON response in 15ms!');
      telemetry = this.renderTelemetry([
        { label: 'Network Round Trip', val: '45ms (Sub-second)', class: 'text-success' },
        { label: 'Phone Battery Impact', val: 'Negligible (Lightweight)', class: 'text-success' },
        { label: 'Data Security', val: 'Centralized & Encrypted', class: 'text-success' }
      ]);
    } else if (isP2P) {
      headerBadge = `${Icons.errorCircle({size:16})} DISASTER: Fat Client P2P Phone Mesh Failed`;
      counterText = 'Phone Battery Drained in 15 Mins • Hackers Faked Fares';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Unworkable Architecture: Heavy Processing on Mobile Device', 
        'Downloading 50,000 drivers and running route matching locally melted the phone processor, killed the battery in 15 minutes, and allowed malicious users to hack the local code and set their fare to ₹0!');
      telemetry = this.renderTelemetry([
        { label: 'Battery Life', val: 'Dead in 15 Minutes', class: 'text-danger' },
        { label: 'Network Choke', val: '50,000 P2P Connections', class: 'text-danger' },
        { label: 'Tamper Risk', val: '100% Insecure (Fare Hacked)', class: 'text-danger' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} ABSURD: Shouting Out the Window`;
      counterText = 'Zero Range • Complete Failure';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Absurd Approach: No Technology Deployed', 
        'Shouting out the window only reaches 20 meters. No cabs arrived and the passenger was late for their flight!');
      telemetry = [
        { label: 'Range', val: '20 meters', class: 'text-danger' },
        { label: 'Cabs Found', val: '0', class: 'text-danger' }
      ];
    }

    this.container.innerHTML = `
      <div class="sim-stage client-server-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="cs-animation-stage">
          <div class="cs-entity-card cs-client ${isClientServer ? 'cs-active glow-cyan' : ''}">
            <div class="cs-badge">CLIENT (Passenger Phone)</div>
            <div class="cs-device-body">
              <div class="cs-screen-header">OLA Mini</div>
              <div class="cs-screen-content">
                <div class="cs-mini-map">${Icons.pinLocation({size:14})} Indiranagar ${Icons.arrowRight({size:14})} Airport</div>
                <button class="cs-mini-btn ${isClientServer ? 'btn-active' : ''}">${isClientServer ? `${Icons.taxiCab({size:14})} Cab Booked (ETA 3m)` : 'Tap "Book Ride"'}</button>
              </div>
            </div>
            <div class="cs-role-desc">Lightweight UI, captures user touch, displays map.</div>
          </div>
          <div class="cs-network-pipe">
            <div class="network-label">4G / 5G Internet</div>
            <div class="packet-lane req-lane">
              <div class="packet req-packet ${isClientServer ? 'packet-fly-right glow-green' : (isP2P ? 'packet-lost' : '')}">
                <span class="packet-tag">REQUEST</span><span class="packet-json">POST /api/ride {lat, lng}</span>
              </div>
              <div class="lane-direction">Client →️ Server</div>
            </div>
            <div class="packet-lane res-lane">
              <div class="packet res-packet ${isClientServer ? 'packet-fly-left glow-cyan' : (isP2P ? 'packet-lost' : '')}">
                <span class="packet-tag">RESPONSE</span><span class="packet-json">200 OK {driver: "Arun", eta: 3m}</span>
              </div>
              <div class="lane-direction">Server →️ Client</div>
            </div>
          </div>
          <div class="cs-entity-card cs-server ${isClientServer ? 'cs-active glow-purple' : (isP2P ? 'cs-offline' : '')}">
            <div class="cs-badge">SERVER (Cloud Backend)</div>
            <div class="cs-server-rack">
              <div class="server-blade"><span class="blade-led ${isClientServer ? 'led-pulse-green' : 'led-off'}"></span><span>API Gateway (Auth & Limit)</span></div>
              <div class="server-blade"><span class="blade-led ${isClientServer ? 'led-pulse-green' : 'led-off'}"></span><span>Driver Match Engine (Geo-Index)</span></div>
              <div class="server-blade"><span class="blade-led ${isClientServer ? 'led-pulse-green' : 'led-off'}"></span><span>Database (Trips & Fares)</span></div>
            </div>
            <div class="cs-role-desc">Coordinates 50,000 drivers, calculates fares securely.</div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 21: CDN & Edge Caching (Geographic Distribution)
  // =========================================================================
  renderCdnSim(level, choice) {
    const hasCdn = choice && choice.id === 'A';
    const isOrigin = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Delhi User Fetching Assets 2,200 km`;
      counterText = 'Speed-of-Light Latency: 350ms Round-Trip Across Continent';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.lightning({size:22}) + '</span>', 
        'Physical Distance Bottleneck: Network Latency Across Long Cables', 
        'RideQuest\'s servers are in Chennai. A passenger opening the app in Delhi (2,200 km away) waits 350 milliseconds just downloading static map tiles and vehicle icons. Light through glass fiber takes time, creating unavoidable latency!');
      telemetry = this.renderTelemetry([
        { label: 'Physical Distance', val: '2,200 km (Chennai)', class: 'text-warning' },
        { label: 'Network Latency', val: '350ms (Sluggish)', class: 'text-danger' },
        { label: 'Asset Delivery', val: 'Single Origin Bottleneck', class: 'text-danger' }
      ]);
    } else if (hasCdn) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Content Delivery Network (CDN) Active`;
      counterText = 'Local Delhi Edge Node Serves Assets in 8ms (97% Faster)';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.cdnNode({size:22}) + '</span>', 
        'CDN Edge Caching: Bring Static Assets Closer to Users', 
        'Edge servers deployed in Delhi, Mumbai, and Kolkata cache static images and map assets locally. The Delhi passenger fetches map assets from 5 km away in 8 milliseconds! The Chennai origin server load drops by 90%.');
      telemetry = this.renderTelemetry([
        { label: 'Edge Latency', val: '8ms (Instant Load)', class: 'text-success' },
        { label: 'Origin Load', val: 'Reduced by 90%', class: 'text-success' },
        { label: 'Bandwidth Cost', val: 'Significantly Cheaper', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} SUBOPTIMAL: Long-Distance Origin Fetches Retained`;
      counterText = '350ms Sluggish Response on Every Screen Open';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Origin Saturation: Central Servers Choked by Static Assets', 
        'Forcing all users across India to pull static images from a single Chennai datacenter overwhelmed origin bandwidth and produced sluggish screen loading for millions of riders.');
      telemetry = this.renderTelemetry([
        { label: 'Origin Bandwidth', val: '98% Saturated', class: 'text-danger' },
        { label: 'Page Load Delay', val: '350ms (Laggy)', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="cdn-map">
          <div class="city-node delhi">
            <span>${Icons.pinLocation({size:14})} Delhi User</span>
            <div class="edge-cache ${hasCdn ? 'glow-green' : 'offline'}">${hasCdn ? `${Icons.lightning({size:14})} CDN Edge (8ms)` : 'No Edge Node'}</div>
          </div>
          <div class="cdn-cable ${hasCdn ? 'local-hop glow-green' : 'long-hop pulse-shake'}"></div>
          <div class="city-node chennai">
            <span>${Icons.citySkyline({size:14})} Chennai Origin (2,200 km)</span>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 22: Recommendation System (Multi-Factor ML)
  // =========================================================================
  renderRecSysSim(level, choice) {
    const isSmart = choice && choice.id === 'A';
    const isNaive = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Naive Closest Distance Matching`;
      counterText = 'Driver A (200m away, 3.1 stars, 40% cancels) vs Driver B (600m away, 4.9 stars)';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.lightbulb({size:22, color:"#8e44ad"}) + '</span>', 
        'Matching Dilemma: Nearest Distance vs Quality Experience', 
        'An executive passenger books a ride. Driver A is 200m away but has a 3.1 rating and cancels 40% of rides. Driver B is 600m away, has 4.9 stars, and drives an immaculate EV sedan. Naive systems pick Driver A simply because of distance, leading to cancellation!');
      telemetry = this.renderTelemetry([
        { label: 'Matching Logic', val: 'Naive Shortest Distance', class: 'text-warning' },
        { label: 'Cancellation Risk', val: '40% (High Disappointment)', class: 'text-danger' },
        { label: 'Passenger Rating', val: 'At Risk of 1-Star Review', class: 'text-warning' }
      ]);
    } else if (isSmart) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Multi-Factor ML Recommendation Ranking`;
      counterText = 'Score Weighted by Rating, ETA, Acceptance Rate & Vehicle Tier';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.trophy({size:22}) + '</span>', 
        'Intelligent Dispatch Model: Optimizing for Trip Completion', 
        'The machine learning model scores candidates across multiple signals: ETA (600m is only 1 min extra), 4.9 star rating, 99% acceptance, and vehicle cleanliness. It assigns Driver B! The ride completes smoothly with a 5-star review!');
      telemetry = this.renderTelemetry([
        { label: 'Matched Driver', val: 'Driver B (Top Ranked)', class: 'text-success' },
        { label: 'Completion Rate', val: '99.5% (Successful Trip)', class: 'text-success' },
        { label: 'Passenger Review', val: '5.0 ⭐ (Delighted)', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} FAILED: Driver A Cancelled After 5 Minutes`;
      counterText = 'Passenger Stranded • Churned from Platform';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Naive Optimization Failure: Proximity Without Quality Signals', 
        'Picking Driver A just because they were 200m away backfired! Driver A cancelled after making the passenger wait 5 minutes. The passenger missed their flight and deleted the app.');
      telemetry = this.renderTelemetry([
        { label: 'Trip Status', val: 'CANCELLED by Driver', class: 'text-danger' },
        { label: 'Customer Trust', val: 'Destroyed', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="recsys-card-list">
          <div class="candidate-card ${isNaive ? 'selected-bad pulse-danger' : (!choice ? 'candidate-eval' : '')}">
            <div class="cand-name">Driver A (200m away)</div>
            <div class="cand-rating">⭐ 3.1 | 40% Cancellation Rate</div>
            <div class="cand-verdict text-danger">${isNaive ? `${Icons.errorCircle({size:14})} Matched naively -> Cancelled by driver!` : 'Rejected by ML Ranker'}</div>
          </div>
          <div class="candidate-card ${isSmart ? 'selected-good glow-green' : (!choice ? 'candidate-eval' : '')}">
            <div class="cand-name">Driver B (600m away)</div>
            <div class="cand-rating">⭐ 4.9 | 99% Completion | EV Sedan</div>
            <div class="cand-verdict text-success">${isSmart ? `${Icons.target({size:14})} Top Ranked Match! 5-Star Ride Completed!` : 'Available Quality Candidate'}</div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 23: Observability & Distributed Tracing (APM)
  // =========================================================================
  renderObservabilitySim(level, choice) {
    const hasTracing = choice && choice.id === 'A';
    const isManual = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Error 500 across 45 Microservices`;
      counterText = '100 Servers • Millions of Raw Log Lines • Flying Blind!';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.search({size:22}) + '</span>', 
        'Microservices Observability Gap: Flying Blind in a Distributed System', 
        'A passenger clicked "Book Ride" and got Error 500. The call touched Gateway → Auth → Ride → Pricing → Payment services across 100 servers. Without distributed tracing, finding which service threw the exception takes 3 days of reading text files!');
      telemetry = this.renderTelemetry([
        { label: 'Error Code', val: 'HTTP 500 (Internal Server Error)', class: 'text-danger' },
        { label: 'Trace Context', val: 'None (Blind Guessing)', class: 'text-danger' },
        { label: 'Time to Diagnose', val: '3 Days of Manual SSH', class: 'text-warning' }
      ]);
    } else if (hasTracing) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Distributed Tracing with Trace ID #9a8f2`;
      counterText = 'Exact Bug Pinpointed in 4 Seconds: Pricing Service Line 42';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.target({size:22}) + '</span>', 
        'Distributed Tracing & APM: Instant End-to-End Visibility', 
        'Every incoming request is tagged with a unique Trace ID that propagates across all 45 microservices. The waterfall chart instantly flags: Pricing Service threw NullPointerException on coupon "RAIN50"! Bug fixed in minutes.');
      telemetry = this.renderTelemetry([
        { label: 'Time to Pinpoint', val: '4 Seconds (Instant)', class: 'text-success' },
        { label: 'Root Cause', val: 'Pricing Service Line 42', class: 'text-success' },
        { label: 'System Uptime', val: 'Restored to 99.99%', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} SUBOPTIMAL: Manual SSH Grep on 100 Servers`;
      counterText = 'Developers Guessing for 3 Days • Outage Prolonged';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Operational Nightmare: Manual Log Inspection Does Not Scale', 
        'Manually SSHing into individual servers to read text log files took 3 days of guesswork while thousands of riders continued to experience booking failures!');
      telemetry = this.renderTelemetry([
        { label: 'Mean Time to Recovery', val: '72 Hours (Unacceptable)', class: 'text-danger' },
        { label: 'Engineering Cost', val: 'Days of Wasted Time', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="trace-timeline">
          ${hasTracing ? `
            <div class="trace-span ok" style="width: 20%;">Gateway (2ms)</div>
            <div class="trace-span ok" style="width: 25%;">Auth Service (4ms)</div>
            <div class="trace-span ok" style="width: 35%;">Ride Service (12ms)</div>
            <div class="trace-span error pulse-danger" style="width: 20%;">Pricing Service (CRASH: Line 42 NullPointer)</div>
            <div class="trace-diagnosis text-success">${Icons.target({size:14})} Bug pinpointed in 4 seconds! Coupon 'RAIN50' division by zero.</div>
          ` : `
            <div class="raw-logs-scroll pulse-shake">
              <div>[10:14:02] info: request received</div>
              <div>[10:14:03] debug: checking user token</div>
              <div>[10:14:04] info: 100,000 more raw log lines to read... (Hours spent guessing)</div>
            </div>
          `}
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 24: Security & Access Control (JWT & RBAC)
  // =========================================================================
  renderSecuritySim(level, choice) {
    const isSecure = choice && choice.id === 'A';
    const isObscurity = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Privilege Escalation Attempt`;
      counterText = 'Attacker Calling /api/admin/refund-wallet to Steal ₹10,000';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.shield({size:22}) + '</span>', 
        'Access Control Breach: Anyone Can Send a Raw HTTP Request', 
        'A rogue passenger inspected the app network traffic and is sending a raw HTTP request to `/api/admin/refund-wallet` trying to credit ₹10,000 to their account. If the backend doesn\'t cryptographically verify identity and roles, the thief will drain the wallet treasury!');
      telemetry = this.renderTelemetry([
        { label: 'Threat Type', val: 'Privilege Escalation', class: 'text-danger' },
        { label: 'Role Enforcement', val: 'Needs RBAC Gate', class: 'text-warning' },
        { label: 'Financial Risk', val: '₹10,000 Theft Attempt', class: 'text-danger' }
      ]);
    } else if (isSecure) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Signed JWT + Strict RBAC Authorization Active`;
      counterText = 'Role "passenger" Blocked • HTTP 403 Forbidden • IP Flagged';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.shield({size:22}) + '</span>', 
        'Authentication (AuthN) & Authorization (AuthZ): Zero Trust', 
        'The API Gateway verifies the cryptographic signature on the JWT token and checks claims: `role: "passenger"`. Because the endpoint requires `role: "admin"`, the request is immediately rejected with HTTP 403 Forbidden and the IP is banned!');
      telemetry = this.renderTelemetry([
        { label: 'Auth Check', val: '403 Forbidden (Blocked)', class: 'text-success' },
        { label: 'Token Verification', val: 'HMAC / RSA Signature Verified', class: 'text-success' },
        { label: 'Treasury Safety', val: '100% Protected (₹0 Stolen)', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} CATASTROPHE: Security by Obscurity Bypassed`;
      counterText = 'Hidden URL Found in JS Bundle • Attacker Stole ₹5,00,000!';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Security Failure: Hidden URLs Do Not Prevent Breaches', 
        'Relying on a secret URL (`/api/secret-admin-9827361`) was trivial to bypass. The attacker decompiled the client app code, found the endpoint, and drained ₹5,00,000 from company accounts!');
      telemetry = this.renderTelemetry([
        { label: 'Security Level', val: 'Breached (Zero Protection)', class: 'text-danger' },
        { label: 'Funds Stolen', val: '₹5,00,000 Lost', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="security-gate">
          <div class="sec-user">${Icons.passenger({size:14})} Attacker: Passenger Token</div>
          <div class="sec-barrier ${isSecure ? 'glow-cyan' : 'breached pulse-danger'}">
            <div class="gate-icon">${isSecure ? `${Icons.shieldCheck({size:14})} RBAC Gate (Active)` : `${Icons.unlock({size:14})} Unprotected URL`}</div>
            <div class="gate-verdict ${isSecure ? 'text-success' : 'text-danger'}">
              ${isSecure ? `${Icons.errorCircle({size:14, color:"#c0392b"})} 403 Forbidden: Required Role "Admin" - IP Flagged!` : `${Icons.alertCircle({size:14, color:"#c0392b"})} Bypassed: Attacker withdrew ₹5,00,000!`}
            </div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // Fallback for any unanticipated level
  renderGenericCity(level, choice) {
    this.container.innerHTML = `
      <div class="sim-stage">
        <div class="sim-header">
          <span class="sim-badge">RideQuest City Grid</span>
          <span class="sim-counter">${level.usersCount || 'Active Fleet'}</span>
        </div>
        <div class="city-interactive-box">
          <div class="city-car c1">${Icons.taxiCab({size:20})}</div>
          <div class="city-car c2">${Icons.car({size:20})}</div>
          <div class="city-pass p1">${Icons.passenger({size:18})}</div>
          <div class="city-pass p2">${Icons.passenger({size:18})}</div>
        </div>
        ${this.renderNarrative('warning', '<span class="rq-svg-icon">' + Icons.lightbulb({size:22}) + '</span>', level.title, level.situation || 'Simulating city flow...')}
      </div>
    `;
  }
}

window.SimulationEngine = SimulationEngine;


/* === FILE: boss-canvas.js === */
/**
 * RideQuest - Level 25 FINAL BOSS: OLA App Screen Builder & System Design Studio
 * Inspired by the 24-step OLA User Flow Reference.
 * Provides:
 * 1. Left Panel: Draggable UI Component Library
 * 2. Center Panel: Interactive OLA Mobile Screen Canvas with Drag & Drop, Reordering, and Deletion
 * 3. Right Panel: System Design Inspector with 1st-year friendly explanations & interactive action simulations
 * 4. End-to-End 24-Step Ride Simulation & Validation
 */

class BossCanvasEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    
    // 24 Steps of the OLA Reference Flow
    this.flowSteps = [
      { step: 1, name: "Open OLA App", screen: "Splash Screen", service: "Client App Bootloader", concept: "Client Initialization", req: "GET /app/config", res: "200 OK (Theme, Session Check)" },
      { step: 2, name: "Sign Up / Login", screen: "Phone Input Screen", service: "Auth Service", concept: "Authentication (AuthN)", req: "POST /auth/otp/send { phone: '+91 9876543210' }", res: "200 OK (OTP Sent via SMS)" },
      { step: 3, name: "Verify OTP", screen: "OTP Verification", service: "Auth Service", concept: "Token Security (JWT)", req: "POST /auth/otp/verify { otp: '142690' }", res: "200 OK { token: 'eyJhbGci...' }" },
      { step: 4, name: "Allow Location Access", screen: "GPS Permission Dialog", service: "Mobile OS Bridge", concept: "Device Sensors & Privacy", req: "navigator.geolocation.getCurrentPosition()", res: "Lat: 12.9716, Lng: 77.5946" },
      { step: 5, name: "Set Pickup Location", screen: "Map Pickup Screen", service: "Geocoding Service", concept: "Reverse Geocoding", req: "GET /geo/reverse?lat=12.9716&lng=77.5946", res: "Indiranagar 100ft Road" },
      { step: 6, name: "Enter Destination", screen: "Destination Search", service: "Search & Routing Service", concept: "Full-Text Search & Prefix Trie", req: "GET /search/places?q=Kempegowda+Airport", res: "200 OK [Airport Terminal 2]" },
      { step: 7, name: "View Ride Options", screen: "Vehicle Category Selector", service: "Catalog & Pricing Service", concept: "Load Balancing & Catalog Cache", req: "GET /rides/categories?pickup=...&drop=...", res: "[Bike, Auto, Mini, Prime]" },
      { step: 8, name: "Fare Estimation", screen: "Fare Breakdown Card", service: "Pricing Engine", concept: "Dynamic Pricing & Distance Calc", req: "POST /pricing/estimate { distKm: 34.2, durationMin: 52 }", res: "₹148 (Mini) Base: ₹110, Dist: ₹28, Taxes: ₹10" },
      { step: 9, name: "Select Ride", screen: "Selected Mini Highlight", service: "Ride Booking Service", concept: "Client State Management", req: "Local UI State Update", res: "Category: Mini Selected (₹148)" },
      { step: 10, name: "Select Payment Method", screen: "Payment Selector Modal", service: "Payment Gateway", concept: "PCI-DSS & Payment Gateways", req: "GET /payments/methods?userId=USR_42", res: "[UPI, Credit/Debit, Cash, OLA Money]" },
      { step: 11, name: "Confirm Booking", screen: "Booking Confirmation Action", service: "Order & Dispatch Service", concept: "Idempotency & Message Queues", req: "POST /rides/book { category: 'mini', payment: 'upi' }", res: "201 Created (Booking ID: #BK-7782)" },
      { step: 12, name: "Driver Matching", screen: "Searching Radar Screen", service: "Driver Matching Engine", concept: "Geospatial Indexing (H3 / Quadtree)", req: "K-Nearest Drivers Search (Radius 3km)", res: "12 nearby drivers pinged" },
      { step: 13, name: "Driver Assigned", screen: "Driver Profile Sheet", service: "Driver Management Service", concept: "Distributed State & Consensus", req: "Driver Arun Kumar (4.8 stars) accepted", res: "Vehicle: Maruti Swift TN 37 AB 1234" },
      { step: 14, name: "Driver Travels to Pickup", screen: "En-Route Live Map", service: "Location Streaming Service", concept: "WebSockets & Pub/Sub", req: "WS /stream/driver/DRV_809/location", res: "GPS updates streamed at 1Hz" },
      { step: 15, name: "Driver Arrives", screen: "Arrival Notification Banner", service: "Geofencing & Notification Service", concept: "Proximity Geofencing", req: "Geofence trigger (Distance < 50m)", res: "Push Notification: Driver has arrived!" },
      { step: 16, name: "Ride Verification", screen: "Start-Trip OTP Card", service: "Trip Security Service", concept: "Shared Secret Verification", req: "Passenger shares Start PIN: 7193", res: "Driver enters 7193 Match Verified!" },
      { step: 17, name: "Trip Starts", screen: "Active Trip Map", service: "Trip Lifecycle Service", concept: "ACID State Transition", req: "POST /trips/BK-7782/start", res: "Status: IN_PROGRESS (Meter Running)" },
      { step: 18, name: "Live Ride Tracking", screen: "Live Route Progress", service: "Navigation & Telemetry Service", concept: "Stream Processing (Kafka / Flink)", req: "Continuous GPS stream to Rider & Police SOS", res: "ETA updating dynamically: 18 min" },
      { step: 19, name: "Reach Destination", screen: "Destination Approaching", service: "Geofencing Service", concept: "Geofence Exit Trigger", req: "Distance to drop-off < 100m", res: "Prepare for arrival" },
      { step: 20, name: "Trip Ends", screen: "Trip Completed Banner", service: "Trip Lifecycle Service", concept: "Distributed Transaction (Saga)", req: "POST /trips/BK-7782/complete", res: "Final Distance: 5.2 km, Time: 18 min" },
      { step: 21, name: "Payment", screen: "Payment Success Modal", service: "Payment Processing Service", concept: "Two-Phase Commit & Wallet Deduct", req: "POST /payments/charge { amount: 156.00, method: 'UPI' }", res: "200 OK (Transaction #TX-99014 Approved)" },
      { step: 22, name: "Invoice / Receipt", screen: "Digital Trip Receipt", service: "Invoicing & Storage Service", concept: "Object Storage & Blob Ledger", req: "GET /invoices/BK-7782.pdf", res: "PDF Receipt Generated: ₹156 (Paid via UPI)" },
      { step: 23, name: "Rating and Feedback", screen: "5-Star Rating Component", service: "Feedback & Reputation Service", concept: "Asynchronous Event Ingestion", req: "POST /reviews { driverId: 'DRV_809', rating: 5, tags: ['Polite', 'Clean'] }", res: "Driver rating updated to 4.82 stars" },
      { step: 24, name: "Ride History", screen: "Past Trips List", service: "History & Data Warehouse", concept: "Database Partitioning & OLAP", req: "GET /rides/history?userId=USR_42&limit=10", res: "Stored in Sharded PostgreSQL / DynamoDB" }
    ];

    // Library of UI Components that map to OLA screens and System Design concepts
    this.componentCatalog = [
      // Category: Auth & Onboarding
      {
        id: 'app_header',
        name: 'App Header & Status Bar',
        category: 'auth',
        icon: Icons.phone({size: 20}),
        concept: 'Client-Server Handshake',
        purpose: 'Displays network connectivity, battery, and OLA branding.',
        interaction: 'Renders instantly upon app boot.',
        explanation: 'Ensures the mobile app knows whether the passenger is online before attempting cloud requests.',
        input: 'Device network state (4G / WiFi)',
        output: 'App ready state, active connection banner',
        olaStage: [1, 2, 4],
        renderUI: (c) => `<div class="ola-comp-header"><span class="ola-time">9:41</span><span class="ola-brand">OLA</span><span class="ola-signals">${Icons.signal({size:12})} ${Icons.battery({size:12})}</span></div>`
      },
      {
        id: 'ola_logo',
        name: 'OLA Brand Logo & Splash Art',
        category: 'auth',
        icon: Icons.dot({size: 14, color: '#27ae60'}),
        concept: 'Static CDN Asset Delivery',
        purpose: 'Welcomes the user and establishes visual brand trust.',
        interaction: 'Shown during cold start while local storage checks for cached login tokens.',
        explanation: 'Stored on Edge CDN nodes so it loads in 10ms without hitting the primary backend database.',
        input: 'App launch trigger',
        output: 'High-res SVG asset cached in client memory',
        olaStage: [1],
        renderUI: (c) => `<div class="ola-comp-logo"><div class="ola-logo-circle"></div><span class="ola-logo-text">OLA</span><div class="ola-tagline">Ride Anywhere, Anytime</div></div>`
      },
      {
        id: 'phone_input',
        name: 'Mobile Number Input Field',
        category: 'auth',
        icon: Icons.otpCode({size: 20}),
        concept: 'User Identification & Input Sanitization',
        purpose: 'Captures the rider’s primary contact number (+91).',
        interaction: 'User types 10-digit mobile number and taps Continue.',
        explanation: 'The client validates regex format before sending to server, preventing malformed requests.',
        input: 'User keystrokes (e.g. +91 98765 43210)',
        output: 'Sanitized E.164 phone string sent to Auth Service',
        olaStage: [2],
        renderUI: (c) => `
          <div class="ola-comp-phone-box">
            <div class="ola-label">Enter your mobile number</div>
            <div class="ola-input-row">
              <span class="ola-flag">🇮🇳 +91</span>
              <input type="text" class="ola-input" value="98765 43210" readonly />
            </div>
            <div class="ola-caption">We will send an SMS with a 6-digit verification code.</div>
          </div>
        `
      },
      {
        id: 'otp_input',
        name: 'OTP 6-Digit Verification Box',
        category: 'auth',
        icon: Icons.shieldLock({size: 20}),
        concept: 'Authentication (AuthN) & Cryptographic Tokens',
        purpose: 'Verifies physical possession of the SIM card.',
        interaction: 'User enters the 6-digit one-time secret sent via SMS.',
        explanation: 'Dynamic temporary secret verified on Auth Server; issues a cryptographic JWT token upon success.',
        input: '6-digit OTP code (e.g. 1 4 2 6 9 0)',
        output: 'Signed JWT Session Token with 30-day expiry',
        olaStage: [3],
        renderUI: (c) => `
          <div class="ola-comp-otp-box">
            <div class="ola-label">Enter OTP sent to +91 98765 43210</div>
            <div class="ola-otp-cells">
              <span>1</span><span>4</span><span>2</span><span>6</span><span>9</span><span>0</span>
            </div>
            <div class="ola-otp-sub">Resend OTP in 00:20</div>
          </div>
        `
      },
      {
        id: 'action_btn',
        name: 'Action Button (Continue / Verify)',
        category: 'auth',
        icon: Icons.arrowRight({size: 20}),
        concept: 'Idempotent HTTP POST Requests',
        purpose: 'Executes the primary transition for the active screen.',
        interaction: 'Tapped by rider to dispatch actions.',
        explanation: 'Employs client debounce and idempotency keys to avoid double-charging or duplicate SMS calls.',
        input: 'Click / Tap event',
        output: 'Asynchronous API call trigger with loading spinner',
        olaStage: [2, 3, 5, 11, 20],
        renderUI: (c) => `<button class="ola-btn-primary">Continue &rarr;</button>`
      },
      {
        id: 'gps_permission',
        name: 'GPS Location Permission Modal',
        category: 'auth',
        icon: Icons.pinLocation({size: 20}),
        concept: 'Device Geolocation & Privacy Sandbox',
        purpose: 'Requests access to device GPS hardware.',
        interaction: 'Rider taps "Allow while using the app".',
        explanation: 'Passes coordinates to the client app to center the map on the user’s exact street pickup spot.',
        input: 'User authorization',
        output: 'Latitude & Longitude coordinates',
        olaStage: [4],
        renderUI: (c) => `
          <div class="ola-comp-modal">
            <div class="ola-modal-icon">${Icons.pinLocation({size:24})}</div>
            <div class="ola-modal-title">Allow OLA to access your location?</div>
            <div class="ola-modal-desc">OLA needs your location to find nearby rides and provide accurate pickup.</div>
            <button class="ola-btn-primary" style="margin-top:6px;">Allow while using the app</button>
          </div>
        `
      },

      // Category: Search & Route
      {
        id: 'location_search',
        name: 'Location Search Bar (Where to?)',
        category: 'location',
        icon: Icons.search({size: 20}),
        concept: 'Full-Text Search & Inverted Indexes',
        purpose: 'Autocomplete search for pickup and drop points.',
        interaction: 'User types destination name (e.g., "Airport").',
        explanation: 'Elasticsearch prefix queries and Trie algorithms return top 5 matching places in under 5ms.',
        input: 'Search text query (e.g. "Brookefields Mall")',
        output: 'List of matching POIs with lat/long and distance',
        olaStage: [6],
        renderUI: (c) => `
          <div class="ola-comp-search">
            <div class="ola-search-bar">
              <span class="ola-search-icon">${Icons.search({size:14})}</span>
              <span class="ola-search-placeholder">Where to? (e.g. Airport)</span>
            </div>
            <div class="ola-recent-place">${Icons.home({size:14})} Home &bull; Indiranagar, 100ft Rd</div>
            <div class="ola-recent-place">${Icons.building({size:14})} Work &bull; Tech Park, Outer Ring Rd</div>
          </div>
        `
      },
      {
        id: 'map_preview',
        name: 'Interactive Map Canvas',
        category: 'location',
        icon: Icons.routeNavigation({size: 20}),
        concept: 'Vector Tile Streaming & Client-Side Rendering',
        purpose: 'Displays live map with roads, traffic colors, and vehicle pins.',
        interaction: 'Pans, zooms, and shows car markers moving smoothly.',
        explanation: 'Map tiles are cached locally; vehicle positions update in real-time via WebSocket pings.',
        input: 'Current GPS bounding box',
        output: 'Rendered vector map layer with routing polyline',
        olaStage: [5, 7, 11, 14, 18],
        renderUI: (c) => `
          <div class="ola-comp-map">
            <div class="ola-map-bg">
              <div class="ola-map-road r1"></div>
              <div class="ola-map-road r2"></div>
              <div class="ola-map-car-pin">${Icons.taxiCab({size:20})}</div>
              <div class="ola-map-user-pin">${Icons.pinLocation({size:20})}</div>
            </div>
            <div class="ola-map-badge">5 Cabs Nearby (2-4 min away)</div>
          </div>
        `
      },
      {
        id: 'pickup_dest_marker',
        name: 'Pickup & Destination Markers',
        category: 'location',
        icon: Icons.pinLocation({size: 20, color: '#e74c3c'}),
        concept: 'Graph Routing & Shortest Path (Dijkstra / A*)',
        purpose: 'Sets start and end coordinates for route calculation.',
        interaction: 'Draggable pin snaps to nearest pickup point.',
        explanation: 'Routing engines calculate turn-by-turn distance and estimate travel duration based on traffic density.',
        input: 'Pickup (Lat/Lng) + Destination (Lat/Lng)',
        output: 'Shortest driving route polyline + 5.2 km distance',
        olaStage: [5, 6, 7],
        renderUI: (c) => `
          <div class="ola-comp-route-box">
            <div class="ola-route-point">
              <span class="dot-green">${Icons.dot({size:10, color:"#27ae60"})}</span>
              <span class="route-txt">Pickup: Current location (Indiranagar)</span>
            </div>
            <div class="ola-route-line"></div>
            <div class="ola-route-point">
              <span class="dot-red">${Icons.dot({size:10, color:"#e74c3c"})}</span>
              <span class="route-txt">Drop: Brookefields Mall (5.2 km)</span>
            </div>
          </div>
        `
      },

      // Category: Rides & Fares
      {
        id: 'ride_category_card',
        name: 'Ride Category Cards (Bike / Auto / Mini)',
        category: 'rides',
        icon: Icons.car({size: 20}),
        concept: 'Catalog Microservice & In-Memory Caching',
        purpose: 'Shows available vehicle tiers with wait times and fares.',
        interaction: 'Rider taps their preferred vehicle type.',
        explanation: 'Cached vehicle metadata is enriched with live surge multipliers calculated by the pricing engine.',
        input: 'User category selection',
        output: 'Active vehicle type (Mini - 4 min away, ₹148)',
        olaStage: [7, 9],
        renderUI: (c) => `
          <div class="ola-comp-categories">
            <div class="ola-cat-item"><span class="cat-icon">${Icons.bike({size:20})}</span><div class="cat-info"><strong>Bike</strong><span>2m away</span></div><div class="cat-fare">₹62</div></div>
            <div class="ola-cat-item"><span class="cat-icon">${Icons.autoRickshaw({size:20})}</span><div class="cat-info"><strong>Auto</strong><span>3m away</span></div><div class="cat-fare">₹86</div></div>
            <div class="ola-cat-item selected"><span class="cat-icon">${Icons.car({size:20})}</span><div class="cat-info"><strong>Mini</strong><span>4m away</span></div><div class="cat-fare">₹148</div></div>
            <div class="ola-cat-item"><span class="cat-icon">${Icons.car({size:20, color:"#f39c12"})}</span><div class="cat-info"><strong>Prime Sedan</strong><span>5m away</span></div><div class="cat-fare">₹189</div></div>
          </div>
        `
      },
      {
        id: 'fare_card',
        name: 'Fare Breakdown & Estimate Card',
        category: 'rides',
        icon: Icons.cash({size: 20, color: '#27ae60'}),
        concept: 'Dynamic Pricing Algorithms & Surge Calculation',
        purpose: 'Transparently displays the total trip cost before booking.',
        interaction: 'Rider reviews base fare, distance charge, and taxes.',
        explanation: 'Calculated using Base Fare + (Distance × Rate) + Surge Multiplier without querying slow database disks.',
        input: 'Distance: 5.2 km, Est. Time: 18 min',
        output: '₹148 (Base ₹110 + Dist ₹28 + Taxes ₹10)',
        olaStage: [8],
        renderUI: (c) => `
          <div class="ola-comp-fare">
            <div class="fare-total">₹148 <span class="fare-info-icon">ⓘ</span></div>
            <div class="fare-meta">5.2 km &bull; 18 min driving time</div>
            <div class="fare-breakdown-row"><span>Base fare:</span><strong>₹110</strong></div>
            <div class="fare-breakdown-row"><span>Distance fee:</span><strong>₹28</strong></div>
            <div class="fare-breakdown-row"><span>Taxes & fees:</span><strong>₹10</strong></div>
          </div>
        `
      },
      {
        id: 'payment_selector',
        name: 'Payment Method Selector (UPI / Card / Cash)',
        category: 'rides',
        icon: Icons.creditCard({size: 20, color: '#2980b9'}),
        concept: 'Payment Gateway Integration & Fault Tolerance',
        purpose: 'Allows passenger to choose payment instrument.',
        interaction: 'Selects UPI (Google Pay / PhonePe), Card, or Cash.',
        explanation: 'Communicates with PCI-compliant payment microservices with automatic fallback if a bank gateway is down.',
        input: 'Selected payment method token',
        output: 'Pre-authorized payment intent',
        olaStage: [10],
        renderUI: (c) => `
          <div class="ola-comp-payments">
            <div class="pay-option selected"><span class="pay-icon">${Icons.phone({size:18})}</span><span>UPI (Google Pay / PhonePe)</span><span class="radio-dot">●</span></div>
            <div class="pay-option"><span class="pay-icon">${Icons.creditCard({size:18})}</span><span>Credit / Debit Card</span><span class="radio-dot">○</span></div>
            <div class="pay-option"><span class="pay-icon">${Icons.cash({size:18})}</span><span>Cash to Driver</span><span class="radio-dot">○</span></div>
            <div class="pay-option"><span class="pay-icon">${Icons.wallet({size:18})}</span><span>OLA Money (Bal: ₹200)</span><span class="radio-dot">○</span></div>
          </div>
        `
      },

      // Category: Dispatch & Tracking
      {
        id: 'booking_confirm_btn',
        name: 'Confirm Booking Button',
        category: 'dispatch',
        icon: Icons.checkCircle({size: 20, color: '#27ae60'}),
        concept: 'Message Queues (Kafka) & Distributed Matching',
        purpose: 'Submits the ride order to the OLA backend dispatch queue.',
        interaction: 'Tapped by rider after selecting ride and payment.',
        explanation: 'Pushes booking request into Kafka; driver matching engine picks it up instantly to evaluate nearby drivers.',
        input: 'Booking payload (Rider ID, Pickup, Drop, Tier)',
        output: 'Unique Booking ID #BK-7782 queued for driver matching',
        olaStage: [11],
        renderUI: (c) => `
          <div class="ola-comp-book-btn">
            <div class="book-sub">Mini &bull; ₹148 &bull; Pay via UPI</div>
            <button class="ola-btn-primary">Book Ride &rarr;</button>
          </div>
        `
      },
      {
        id: 'driver_matching_spinner',
        name: 'Driver Matching Radar Screen',
        category: 'dispatch',
        icon: Icons.satellite({size: 20}),
        concept: 'Geospatial Indexing & Matching Algorithm',
        purpose: 'Visual feedback while OLA searches for nearby cabs.',
        interaction: 'Animated pulse while dispatch engine queries drivers.',
        explanation: 'Geohash/H3 cell search identifies free drivers within 3 km and dispatches ride offers via WebSockets.',
        input: 'Ride request in matching queue',
        output: 'Accepted driver notification or next-closest ping',
        olaStage: [12],
        renderUI: (c) => `
          <div class="ola-comp-matching">
            <div class="matching-radar-ring"></div>
            <div class="matching-car-icon">${Icons.car({size:36})}</div>
            <div class="matching-title">Finding a driver near you...</div>
            <div class="matching-subtitle">Scanning available Mini cabs in Indiranagar</div>
          </div>
        `
      },
      {
        id: 'driver_profile_card',
        name: 'Driver Profile & Vehicle Card',
        category: 'dispatch',
        icon: Icons.driver({size: 20}),
        concept: 'Distributed State Synchronization',
        purpose: 'Shows assigned driver photo, rating, and car number plate.',
        interaction: 'Displays call, chat, and cancellation options.',
        explanation: 'Synced across rider and driver apps so passenger can identify vehicle and verify driver identity.',
        input: 'Driver assignment event',
        output: 'Driver Arun Kumar (4.8 stars), Maruti Swift TN 37 AB 1234',
        olaStage: [13, 14, 15],
        renderUI: (c) => `
          <div class="ola-comp-driver">
            <div class="driver-row">
              <div class="driver-avatar">${Icons.driver({size:36})}</div>
              <div class="driver-details">
                <strong>Arun Kumar</strong> <span class="driver-star">${Icons.star({size:12})} 4.8</span> (1.2K trips)<br>
                <span class="driver-car">Maruti Swift &bull; White &bull; <strong>TN 37 AB 1234</strong></span>
              </div>
            </div>
            <div class="driver-eta-badge">Arriving in 3 min</div>
            <div class="driver-actions">
              <button class="btn-action">${Icons.phoneCall({size:14})} Call</button>
              <button class="btn-action">${Icons.messageChat({size:14})} Chat</button>
              <button class="btn-action cancel">${Icons.close({size:14})} Cancel</button>
            </div>
          </div>
        `
      },
      {
        id: 'driver_tracking_map',
        name: 'Live Driver GPS Tracking Route',
        category: 'dispatch',
        icon: Icons.satellite({size: 20}),
        concept: 'Real-Time WebSockets & GPS Stream Processing',
        purpose: 'Streams driver’s moving car icon smoothly along the road.',
        interaction: 'Car icon glides towards pickup point in real time.',
        explanation: 'Driver phone transmits GPS coordinates every 1-2 seconds; WebSockets broadcast updates to rider map.',
        input: 'Driver telemetry stream (Latitude, Longitude, Heading)',
        output: '60 FPS interpolated car movement and live ETA',
        olaStage: [14, 15, 18],
        renderUI: (c) => `
          <div class="ola-comp-tracking">
            <div class="tracking-eta-pill">Driver is on the way &bull; <strong>Arriving in 3 min</strong></div>
            <div class="tracking-mini-map">
              <div class="tracking-route-path"></div>
              <div class="tracking-cab-icon">${Icons.taxiCab({size:24})}</div>
              <div class="tracking-user-pin">${Icons.pinLocation({size:24})}</div>
            </div>
          </div>
        `
      },

      // Category: Trip & Completion
      {
        id: 'ride_verification_otp',
        name: 'Start-Ride Security OTP / PIN',
        category: 'trip',
        icon: Icons.otpCode({size: 20}),
        concept: 'Shared-Secret Verification & Anti-Fraud',
        purpose: '4-digit PIN shared with driver to begin trip.',
        interaction: 'Rider tells driver "7193"; driver enters PIN in app.',
        explanation: 'Prevents riders from boarding the wrong cab and stops rogue drivers from starting phantom trips.',
        input: 'Passenger 4-digit PIN',
        output: 'Trip status changes to IN_PROGRESS upon driver match',
        olaStage: [16],
        renderUI: (c) => `
          <div class="ola-comp-otp-share">
            <div class="otp-share-title">Share this OTP with your driver</div>
            <div class="otp-pin-display">
              <span>7</span><span>1</span><span>9</span><span>3</span>
            </div>
            <div class="otp-share-note">Driver will verify this OTP before starting the trip.</div>
          </div>
        `
      },
      {
        id: 'live_trip_progress',
        name: 'Active Trip Status & Live ETA Card',
        category: 'trip',
        icon: Icons.routeNavigation({size: 20}),
        concept: 'Continuous Telemetry & SOS Emergency Telemetry',
        purpose: 'Displays distance covered, remaining time, and Share Trip.',
        interaction: 'Rider tracks progress or shares live link with family.',
        explanation: 'Stream processing calculates expected arrival time factoring in sudden traffic congestion.',
        input: 'Live trip GPS coordinates',
        output: 'On the way to drop &bull; 18 min &bull; 5.2 km remaining',
        olaStage: [17, 18, 19],
        renderUI: (c) => `
          <div class="ola-comp-trip-live">
            <div class="trip-status-header">${Icons.dot({size:10, color:"#27ae60"})} Trip Started &bull; On the way to drop</div>
            <div class="trip-eta-big">18 min <span class="trip-dist-sub">5.2 km</span></div>
            <div class="trip-safety-row">
              <button class="btn-safety">${Icons.shieldCheck({size:14})} Safety Toolkit</button>
              <button class="btn-safety">${Icons.share({size:14})} Share Trip</button>
            </div>
          </div>
        `
      },
      {
        id: 'payment_status_card',
        name: 'Trip Completed & Payment Success Card',
        category: 'trip',
        icon: Icons.checkCircle({size: 20, color: '#27ae60'}),
        concept: 'ACID Transactional Ledger & Wallet Settlement',
        purpose: 'Confirms driver ended ride and payment was deducted.',
        interaction: 'Displays animated green checkmark and amount.',
        explanation: 'PostgreSQL ledger records immutable debit and credit with zero risk of duplicate deduction.',
        input: 'Payment Gateway webhook response',
        output: 'Payment Successful: ₹156 Paid via UPI',
        olaStage: [20, 21],
        renderUI: (c) => `
          <div class="ola-comp-payment-success">
            <div class="pay-success-check">${Icons.check({size:24, color:"#27ae60"})}</div>
            <div class="pay-success-title">Payment Successful</div>
            <div class="pay-success-amount">₹156</div>
            <div class="pay-success-sub">Paid via UPI &bull; Trans ID #TX-99014</div>
          </div>
        `
      },
      {
        id: 'receipt_invoice',
        name: 'Digital Invoice / Trip Receipt Card',
        category: 'trip',
        icon: Icons.receipt({size: 20}),
        concept: 'Blob Object Storage & Asynchronous Email Delivery',
        purpose: 'Detailed itemized bill with download option.',
        interaction: 'Rider views ride details or downloads PDF invoice.',
        explanation: 'Invoices stored in S3 object storage; link served via CDN with zero strain on live database.',
        input: 'Completed ride ID #BK-7782',
        output: 'Digital invoice with GSTIN breakdown and download button',
        olaStage: [22],
        renderUI: (c) => `
          <div class="ola-comp-receipt">
            <div class="receipt-header">Trip Receipt &bull; 10 Oct 2026</div>
            <div class="receipt-fare-large">₹156 <span class="receipt-paid-tag">Paid via UPI</span></div>
            <div class="receipt-route">
              <div>${Icons.dot({size:10, color:"#27ae60"})} Indiranagar, 100ft Rd</div>
              <div>${Icons.dot({size:10, color:"#e74c3c"})} Brookefields Mall</div>
            </div>
            <div class="receipt-meta">5.2 km &bull; 18 min duration</div>
            <button class="btn-download-invoice">${Icons.download({size:14})} Download PDF Invoice</button>
          </div>
        `
      },
      {
        id: 'rating_feedback',
        name: 'Driver Rating & Feedback Component',
        category: 'trip',
        icon: '⭐',
        concept: 'Asynchronous Event Streaming (Kafka / SQS)',
        purpose: 'Collects 1 to 5 star rating and service compliments.',
        interaction: 'Rider taps 5 stars and selects tags like "Polite Driver".',
        explanation: 'Pushed to Kafka topic; driver reputation worker recalculates driver score asynchronously.',
        input: '5-star rating + feedback tags',
        output: 'Driver reputation updated from 4.80 to 4.82 stars',
        olaStage: [23],
        renderUI: (c) => `
          <div class="ola-comp-rating">
            <div class="rating-title">How was your ride with Arun?</div>
            <div class="rating-stars">${Icons.star({size:22})}${Icons.star({size:22})}${Icons.star({size:22})}${Icons.star({size:22})}${Icons.star({size:22})}</div>
            <div class="rating-tags">
              <span class="tag-pill active">Good driving</span>
              <span class="tag-pill active">Clean car</span>
              <span class="tag-pill">Polite behaviour</span>
            </div>
            <button class="ola-btn-primary" style="margin-top:8px;">Submit Rating</button>
          </div>
        `
      },
      {
        id: 'navigation_bar',
        name: 'Bottom Navigation & Ride History Bar',
        category: 'trip',
        icon: Icons.book({size: 20}),
        concept: 'Database Sharding & Historical Data Warehousing',
        purpose: 'Enables quick switching to Rides, History, and Account.',
        interaction: 'Tapped to view past trips and payment methods.',
        explanation: 'Historical trips queried from read replicas or sharded historical databases without touching live booking servers.',
        input: 'User navigation tap',
        output: 'Ride History list (Completed, Upcoming, Cancelled)',
        olaStage: [24],
        renderUI: (c) => `
          <div class="ola-comp-bottom-nav">
            <div class="nav-item active">${Icons.taxiCab({size:16})} Rides</div>
            <div class="nav-item">${Icons.history({size:16})} History</div>
            <div class="nav-item">${Icons.wallet({size:16})} Wallet</div>
            <div class="nav-item">${Icons.user({size:16})} Account</div>
          </div>
        `
      }
    ];

    // State
    this.activeScreenCategory = 'all';
    // Components currently placed on the active mobile canvas (in display order)
    this.placedComponentIds = [
      'app_header',
      'ola_logo',
      'phone_input',
      'otp_input',
      'action_btn',
      'location_search',
      'map_preview',
      'ride_category_card',
      'fare_card',
      'driver_profile_card',
      'payment_status_card',
      'rating_feedback',
      'navigation_bar'
    ];
    this.selectedComponentId = 'phone_input';
    
    // Interactive Simulation Player state
    this.simRunning = false;
    this.simCurrentStep = 1;
    this.simTimer = null;
    this.simValidationResult = null;
    this.actionFeedback = null;
  }

  init() {
    this.render();
    this.setupDragAndDrop();
  }

  setupDragAndDrop() {
    // Enable drag & drop listeners on container
    setTimeout(() => {
      const dropZone = document.getElementById('phone-screen-dropzone');
      if (dropZone && typeof dropZone.addEventListener === 'function') {
        dropZone.addEventListener('dragover', (e) => {
          e.preventDefault();
          if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
          if (dropZone.classList) dropZone.classList.add('drag-over-active');
        });
        dropZone.addEventListener('dragleave', (e) => {
          if (dropZone.classList) dropZone.classList.remove('drag-over-active');
        });
        dropZone.addEventListener('drop', (e) => {
          e.preventDefault();
          if (dropZone.classList) dropZone.classList.remove('drag-over-active');
          const compId = e.dataTransfer ? e.dataTransfer.getData('text/plain') : null;
          if (compId) {
            this.addComponentToCanvas(compId);
          }
        });
      }
    }, 50);
  }

  handleDragStart(e, compId) {
    e.dataTransfer.setData('text/plain', compId);
    e.dataTransfer.effectAllowed = 'copy';
  }

  selectComponent(compId) {
    this.selectedComponentId = compId;
    this.actionFeedback = null;
    window.soundEngine && window.soundEngine.click();
    this.render();
  }

  addComponentToCanvas(compId) {
    if (!this.placedComponentIds.includes(compId)) {
      this.placedComponentIds.push(compId);
      this.selectedComponentId = compId;
      this.simValidationResult = null;
      window.soundEngine && window.soundEngine.select();
      this.render();
      this.setupDragAndDrop();
    }
  }

  removeComponentFromCanvas(compId) {
    this.placedComponentIds = this.placedComponentIds.filter(id => id !== compId);
    if (this.selectedComponentId === compId) {
      this.selectedComponentId = this.placedComponentIds[0] || null;
    }
    this.simValidationResult = null;
    window.soundEngine && window.soundEngine.click();
    this.render();
    this.setupDragAndDrop();
  }

  moveComponent(compId, direction) {
    const idx = this.placedComponentIds.indexOf(compId);
    if (idx === -1) return;
    const targetIdx = idx + direction;
    if (targetIdx < 0 || targetIdx >= this.placedComponentIds.length) return;
    
    // Swap
    const temp = this.placedComponentIds[idx];
    this.placedComponentIds[idx] = this.placedComponentIds[targetIdx];
    this.placedComponentIds[targetIdx] = temp;
    window.soundEngine && window.soundEngine.click();
    this.render();
    this.setupDragAndDrop();
  }

  filterCategory(cat) {
    this.activeScreenCategory = cat;
    this.render();
    this.setupDragAndDrop();
  }

  // Visual simulation of student interactions in the inspector
  simulateAction(actionType) {
    window.soundEngine && window.soundEngine.whoosh();
    if (actionType === 'otp_valid') {
      this.actionFeedback = {
        type: 'success',
        title: 'OTP 142690 Verified Successfully!',
        details: 'Auth Server verified cryptographic hash in 12ms. Generated JWT session token: "Bearer eyJhbGciOi...". Rider app successfully unlocked!'
      };
    } else if (actionType === 'otp_invalid') {
      this.actionFeedback = {
        type: 'danger',
        title: 'Invalid OTP! Authentication Blocked',
        details: 'Wrong code entered. Auth Server returned HTTP 401 Unauthorized. Access denied. Rider wallet & personal account remain safe from intruders.'
      };
    } else if (actionType === 'driver_match_success') {
      this.actionFeedback = {
        type: 'success',
        title: 'Driver Assigned: Arun Kumar (4.8 stars)',
        details: 'Geospatial H3 index matched nearest driver in 38ms. Booking state updated via Kafka stream. Arun is driving Maruti Swift TN 37 AB 1234.'
      };
    } else if (actionType === 'payment_success') {
      this.actionFeedback = {
        type: 'success',
        title: '₹156 Payment Confirmed via UPI',
        details: 'Payment Gateway processed transaction TX-99014 with 2PC atomic guarantee. Ledger updated without double deduction. Digital invoice generated!'
      };
    } else if (actionType === 'gps_tracking_ping') {
      this.actionFeedback = {
        type: 'success',
        title: 'Real-Time WebSocket Ping Received',
        details: 'Driver GPS stream [12.9718, 77.5950] broadcast to rider client via persistent WebSocket. Car icon glided 5 meters forward on map.'
      };
    }
    this.render();
    this.setupDragAndDrop();
  }

  // Validation logic: checks if student has configured the key stages of the OLA app
  validateAppDesign() {
    const hasAuth = this.placedComponentIds.includes('phone_input') && this.placedComponentIds.includes('otp_input');
    const hasLocation = this.placedComponentIds.includes('location_search') || this.placedComponentIds.includes('pickup_dest_marker') || this.placedComponentIds.includes('map_preview');
    const hasRides = this.placedComponentIds.includes('ride_category_card') || this.placedComponentIds.includes('fare_card');
    const hasDispatch = this.placedComponentIds.includes('driver_profile_card') || this.placedComponentIds.includes('driver_matching_spinner') || this.placedComponentIds.includes('booking_confirm_btn');
    const hasPayment = this.placedComponentIds.includes('payment_status_card') || this.placedComponentIds.includes('payment_selector') || this.placedComponentIds.includes('receipt_invoice');
    const hasRating = this.placedComponentIds.includes('rating_feedback') || this.placedComponentIds.includes('navigation_bar');

    const totalInstalled = this.placedComponentIds.length;

    if (hasAuth && hasLocation && hasRides && hasDispatch && hasPayment && totalInstalled >= 8) {
      window.soundEngine && window.soundEngine.success();
      this.simValidationResult = {
        valid: true,
        title: "Complete OLA Architecture Validated!",
        message: `Your app includes all essential functional layers: Authentication, Route Search, Dynamic Fares, Driver Dispatch, and Payment Ledger. You are ready to run the 24-Step End-to-End Simulation!`,
        score: Math.min(100, Math.round((totalInstalled / 14) * 100))
      };
      this.simRunning = true;
      this.simCurrentStep = 1;
    } else {
      window.soundEngine && window.soundEngine.overload();
      let missingItems = [];
      if (!hasAuth) missingItems.push("Authentication (Mobile Input & OTP Verification)");
      if (!hasLocation) missingItems.push("Search & Routing (Location Search or Map Preview)");
      if (!hasRides) missingItems.push("Ride & Pricing (Ride Category Card or Fare Breakdown)");
      if (!hasDispatch) missingItems.push("Driver Dispatch (Driver Profile or Booking Confirmation)");
      if (!hasPayment) missingItems.push("Payment & Ledger (Payment Status Card or Selector)");

      this.simValidationResult = {
        valid: false,
        title: "Incomplete Ride Flow: Cannot Proceed to Simulation",
        message: `Your OLA app is missing critical system components: ${missingItems.join(', ')}. Drag or add them from the left component library to complete the user journey!`,
        score: Math.round((totalInstalled / 14) * 50)
      };
    }
    this.render();
    this.setupDragAndDrop();
  }

  jumpToSimStep(stepNum) {
    if (stepNum >= 1 && stepNum <= 24) {
      this.simCurrentStep = stepNum;
      window.soundEngine && window.soundEngine.click();
      this.render();
      this.setupDragAndDrop();
    }
  }

  nextSimStep() {
    if (this.simCurrentStep < 24) {
      this.simCurrentStep++;
      window.soundEngine && window.soundEngine.click();
    } else {
      window.soundEngine && window.soundEngine.levelUp();
    }
    this.render();
    this.setupDragAndDrop();
  }

  prevSimStep() {
    if (this.simCurrentStep > 1) {
      this.simCurrentStep--;
      window.soundEngine && window.soundEngine.click();
      this.render();
      this.setupDragAndDrop();
    }
  }

  toggleAutoSim() {
    if (this.simTimer) {
      clearInterval(this.simTimer);
      this.simTimer = null;
    } else {
      this.simTimer = setInterval(() => {
        if (this.simCurrentStep < 24) {
          this.simCurrentStep++;
          this.render();
          this.setupDragAndDrop();
        } else {
          clearInterval(this.simTimer);
          this.simTimer = null;
          this.render();
          this.setupDragAndDrop();
        }
      }, 2500);
    }
    this.render();
    this.setupDragAndDrop();
  }

  closeSimPlayer() {
    if (this.simTimer) {
      clearInterval(this.simTimer);
      this.simTimer = null;
    }
    this.simRunning = false;
    this.render();
    this.setupDragAndDrop();
  }

  finishGame() {
    window.soundEngine && window.soundEngine.levelUp();
    if (window.game) {
      window.game.showVictoryScreen();
    }
  }

  renderSimActionButtons(comp) {
    if (!comp) return '';
    if (comp.id === 'otp_input' || comp.id === 'phone_input') {
      return `
        <button class="btn-action-test btn-test-success" onclick="window.bossCanvas.simulateAction('otp_valid')">
          ${Icons.shieldCheck({size:14})} Test Valid OTP (142690)
        </button>
        <button class="btn-action-test btn-test-fail" onclick="window.bossCanvas.simulateAction('otp_invalid')">
          ${Icons.errorCircle({size:14, color:"#e74c3c"})} Test Spoofed / Invalid OTP
        </button>
      `;
    } else if (comp.id === 'driver_matching_spinner' || comp.id === 'booking_confirm_btn' || comp.id === 'driver_profile_card') {
      return `
        <button class="btn-action-test btn-test-success" onclick="window.bossCanvas.simulateAction('driver_match_success')">
          ${Icons.car({size:14})} Trigger Driver Match (38ms)
        </button>
      `;
    } else if (comp.id === 'driver_tracking_map' || comp.id === 'live_trip_progress') {
      return `
        <button class="btn-action-test btn-test-success" onclick="window.bossCanvas.simulateAction('gps_tracking_ping')">
          ${Icons.satellite({size:14})} Stream Live GPS Ping (WebSocket)
        </button>
      `;
    } else if (comp.id === 'payment_status_card' || comp.id === 'payment_selector' || comp.id === 'fare_card') {
      return `
        <button class="btn-action-test btn-test-success" onclick="window.bossCanvas.simulateAction('payment_success')">
          ${Icons.creditCard({size:14})} Process ₹156 UPI Transaction
        </button>
      `;
    } else {
      return `
        <button class="btn-action-test btn-test-neutral" onclick="window.bossCanvas.simulateAction('otp_valid')">
          ${Icons.lightning({size:14})} Execute Component Action
        </button>
      `;
    }
  }

  render() {
    if (!this.container) return;

    const selectedComp = this.componentCatalog.find(c => c.id === this.selectedComponentId) || this.componentCatalog[0];
    const filteredCatalog = this.activeScreenCategory === 'all' 
      ? this.componentCatalog 
      : this.componentCatalog.filter(c => c.category === this.activeScreenCategory);

    const currentStepInfo = this.flowSteps[this.simCurrentStep - 1];

    this.container.innerHTML = `
      <div class="ola-boss-studio">
        <!-- TOP BANNER -->
        <div class="ola-studio-header">
          <div class="studio-title-row">
            <div class="studio-badge">${Icons.crown({size:16, color:"#f1c40f"})} FINAL BOSS &bull; SYSTEM DESIGN STUDIO</div>
            <h2 class="studio-title">Build the Complete OLA Ride-Booking App</h2>
            <div class="studio-tagline">
              Drag & drop UI components onto the smartphone canvas, connect them to System Design backend services, and test the 24-step passenger journey!
            </div>
          </div>
          <div class="studio-header-actions">
            <button class="btn-test-app glow-green" onclick="window.bossCanvas.validateAppDesign()">
              ${Icons.rocket({size:16})} TEST MY APP & SIMULATE FLOW
            </button>
            ${this.simValidationResult && this.simValidationResult.valid ? `
              <button class="btn-claim-victory pulse-glow" onclick="window.bossCanvas.finishGame()">
                ${Icons.trophy({size:16})} BECOME SENIOR SYSTEM ARCHITECT
              </button>
            ` : ''}
          </div>
        </div>

        <!-- 24-STEP SIMULATION WALKTHROUGH BANNER (If Active) -->
        ${this.simRunning ? `
          <div class="ola-sim-player-bar glow-cyan">
            <div class="sim-player-top">
              <div class="sim-step-indicator">
                <span class="sim-step-badge">Step ${currentStepInfo.step} of 24</span>
                <strong class="sim-step-title">${currentStepInfo.name}</strong> &bull; <span class="text-cyan">${currentStepInfo.screen}</span>
              </div>
              <div class="sim-player-controls">
                <button class="sim-ctrl-btn" onclick="window.bossCanvas.prevSimStep()" ${this.simCurrentStep === 1 ? 'disabled' : ''}>⏮️ Prev</button>
                <button class="sim-ctrl-btn ${this.simTimer ? 'active' : ''}" onclick="window.bossCanvas.toggleAutoSim()">
                  ${this.simTimer ? '⏸️ Pause Auto' : '▶️ Auto Play'}
                </button>
                <button class="sim-ctrl-btn" onclick="window.bossCanvas.nextSimStep()" ${this.simCurrentStep === 24 ? 'disabled' : ''}>Next ⏭️</button>
                <button class="sim-ctrl-btn text-danger" onclick="window.bossCanvas.closeSimPlayer()">${Icons.close({size:14})} Close</button>
              </div>
            </div>

            <!-- SIMULATION SYSTEM TELEMETRY STRIP -->
            <div class="sim-system-telemetry-row">
              <div class="telemetry-chip"><strong>${Icons.lightbulb({size:14})} Concept:</strong> ${currentStepInfo.concept}</div>
              <div class="telemetry-chip"><strong>${Icons.apiGateway({size:14})} Backend:</strong> ${currentStepInfo.service}</div>
              <div class="telemetry-chip"><strong>${Icons.cdnNode({size:14})} Request:</strong> <code>${currentStepInfo.req}</code></div>
              <div class="telemetry-chip"><strong>${Icons.arrowRight({size:14})} Response:</strong> <code>${currentStepInfo.res}</code></div>
            </div>

            <!-- MINI PROGRESS TRACKER (24 Steps) -->
            <div class="sim-step-scrubber">
              ${this.flowSteps.map(s => `
                <div class="scrub-dot ${s.step === this.simCurrentStep ? 'active glow-cyan' : (s.step < this.simCurrentStep ? 'passed' : '')}" 
                     title="Step ${s.step}: ${s.name}" 
                     onclick="window.bossCanvas.jumpToSimStep(${s.step})">
                  ${s.step}
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- VALIDATION RESULT FEEDBACK (If Any) -->
        ${this.simValidationResult ? `
          <div class="sim-validation-alert ${this.simValidationResult.valid ? 'alert-success glow-green' : 'alert-danger pulse-shake'}">
            <span class="alert-icon">${this.simValidationResult.valid ? Icons.trophy({size:24}) : Icons.errorCircle({size:24, color:'#e74c3c'})}</span>
            <div class="alert-content">
              <strong>${this.simValidationResult.title} (Architecture Completeness: ${this.simValidationResult.score}%)</strong>
              <div>${this.simValidationResult.message}</div>
            </div>
          </div>
        ` : ''}

        <!-- THREE PANEL WORKSPACE -->
        <div class="ola-studio-workspace">
          
          <!-- LEFT PANEL: COMPONENT LIBRARY -->
          <div class="ola-panel ola-library-panel">
            <div class="panel-header">
              <div class="panel-title">${Icons.puzzle({size:18})} Component Library</div>
              <div class="library-filter-pills">
                <button class="filter-pill ${this.activeScreenCategory === 'all' ? 'active' : ''}" onclick="window.bossCanvas.filterCategory('all')">All</button>
                <button class="filter-pill ${this.activeScreenCategory === 'auth' ? 'active' : ''}" onclick="window.bossCanvas.filterCategory('auth')">Auth</button>
                <button class="filter-pill ${this.activeScreenCategory === 'location' ? 'active' : ''}" onclick="window.bossCanvas.filterCategory('location')">Search</button>
                <button class="filter-pill ${this.activeScreenCategory === 'rides' ? 'active' : ''}" onclick="window.bossCanvas.filterCategory('rides')">Fares</button>
                <button class="filter-pill ${this.activeScreenCategory === 'dispatch' ? 'active' : ''}" onclick="window.bossCanvas.filterCategory('dispatch')">Dispatch</button>
                <button class="filter-pill ${this.activeScreenCategory === 'trip' ? 'active' : ''}" onclick="window.bossCanvas.filterCategory('trip')">Trip</button>
              </div>
            </div>

            <div class="library-items-list" id="library-list">
              ${filteredCatalog.map(comp => {
                const isPlaced = this.placedComponentIds.includes(comp.id);
                return `
                  <div class="library-card ${isPlaced ? 'placed-in-canvas' : ''}" 
                       draggable="true" 
                       ondragstart="window.bossCanvas.handleDragStart(event, '${comp.id}')"
                       onclick="window.bossCanvas.selectComponent('${comp.id}')">
                    <div class="lib-icon">${comp.icon}</div>
                    <div class="lib-info">
                      <div class="lib-name">${comp.name}</div>
                      <div class="lib-concept-tag">${comp.concept}</div>
                    </div>
                    <div class="lib-action">
                      ${isPlaced ? `
                        <span class="badge-placed">${Icons.check({size:12})} Placed</span>
                      ` : `
                        <button class="btn-add-comp" onclick="event.stopPropagation(); window.bossCanvas.addComponentToCanvas('${comp.id}')">+ Add</button>
                      `}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
            <div class="library-drag-tip">
              ${Icons.lightbulb({size:14})} <em>Drag any card into the phone screen, or click <strong>+ Add</strong>!</em>
            </div>
          </div>

          <!-- CENTER PANEL: INTERACTIVE APP CANVAS -->
          <div class="ola-panel ola-canvas-panel">
            <div class="panel-header canvas-header-row">
              <div class="panel-title">${Icons.phone({size:18})} Interactive OLA Mobile Canvas</div>
              <div class="canvas-item-count">
                Installed: <strong>${this.placedComponentIds.length}</strong> UI Elements
              </div>
            </div>

            <!-- SMARTPHONE DEVICE FRAME -->
            <div class="smartphone-mockup-frame">
              <div class="smartphone-bezel">
                <div class="phone-dynamic-island">
                  <div class="camera-lens"></div>
                  <div class="speaker-grill"></div>
                </div>

                <!-- PHONE SCREEN CONTAINER (DROP ZONE) -->
                <div class="phone-screen-scroll-container" id="phone-screen-dropzone">
                  ${this.placedComponentIds.length === 0 ? `
                    <div class="empty-screen-placeholder">
                      <div class="empty-screen-icon">${Icons.phone({size:48, color:"#7f8c8d"})}</div>
                      <div class="empty-screen-title">Empty OLA Screen Canvas</div>
                      <p>Drag components here from the library on the left, or click "+ Add" to assemble the OLA app!</p>
                    </div>
                  ` : `
                    <div class="canvas-placed-elements-stack">
                      ${this.placedComponentIds.map((id, index) => {
                        const comp = this.componentCatalog.find(c => c.id === id);
                        if (!comp) return '';
                        const isSelected = this.selectedComponentId === comp.id;
                        return `
                          <div class="canvas-placed-item-wrapper ${isSelected ? 'selected-for-inspect' : ''}" 
                               onclick="window.bossCanvas.selectComponent('${comp.id}')">
                            <!-- COMPONENT CONTROLS OVERLAY -->
                            <div class="comp-control-bar">
                              <span class="comp-control-name">${comp.icon} ${comp.name}</span>
                              <div class="comp-control-buttons">
                                <button class="btn-reorder" title="Move Up" onclick="event.stopPropagation(); window.bossCanvas.moveComponent('${comp.id}', -1)" ${index === 0 ? 'disabled' : ''}>▲</button>
                                <button class="btn-reorder" title="Move Down" onclick="event.stopPropagation(); window.bossCanvas.moveComponent('${comp.id}', 1)" ${index === this.placedComponentIds.length - 1 ? 'disabled' : ''}>▼</button>
                                <button class="btn-remove" title="Remove" onclick="event.stopPropagation(); window.bossCanvas.removeComponentFromCanvas('${comp.id}')">${Icons.close({size:12})}</button>
                              </div>
                            </div>

                            <!-- REALISTIC OLA UI RENDER -->
                            <div class="ola-rendered-ui-content">
                              ${comp.renderUI(comp)}
                            </div>
                          </div>
                        `;
                      }).join('')}
                    </div>
                  `}
                </div>

                <!-- PHONE HOME INDICATOR BAR -->
                <div class="phone-home-indicator"></div>
              </div>
            </div>
          </div>

          <!-- RIGHT PANEL: SYSTEM DESIGN INSPECTOR -->
          <div class="ola-panel ola-inspector-panel">
            <div class="panel-header">
              <div class="panel-title">${Icons.microscope({size:18})} System Design Inspector</div>
              <span class="inspector-badge">Selected Component</span>
            </div>

            ${selectedComp ? `
              <div class="inspector-card-content">
                <div class="inspector-hero">
                  <div class="insp-icon">${selectedComp.icon}</div>
                  <div class="insp-titles">
                    <div class="insp-name">${selectedComp.name}</div>
                    <div class="insp-category-badge">${selectedComp.category.toUpperCase()} &bull; OLA FLOW</div>
                  </div>
                </div>

                <!-- SYSTEM DESIGN CONCEPT CARD -->
                <div class="insp-section-box concept-box glow-cyan">
                  <div class="insp-sec-title">${Icons.lightbulb({size:14})} System Design Concept</div>
                  <div class="insp-concept-highlight">${selectedComp.concept}</div>
                  <div class="insp-concept-desc">${selectedComp.explanation}</div>
                </div>

                <!-- PURPOSE IN OLA APP -->
                <div class="insp-section-box">
                  <div class="insp-sec-title">${Icons.target({size:14})} Purpose in OLA App</div>
                  <div class="insp-sec-body">${selectedComp.purpose}</div>
                </div>

                <!-- USER INTERACTION FLOW -->
                <div class="insp-section-box">
                  <div class="insp-sec-title">${Icons.users({size:14})} When Rider Interacts</div>
                  <div class="insp-sec-body">${selectedComp.interaction}</div>
                </div>

                <!-- INPUT & OUTPUT SPECIFICATION -->
                <div class="insp-section-box io-box">
                  <div class="insp-sec-title">${Icons.lightning({size:14})} Inputs & Outputs</div>
                  <div class="io-item">
                    <span class="io-label">${Icons.arrowRight({size:12})} Expected Input:</span>
                    <span class="io-val">${selectedComp.input}</span>
                  </div>
                  <div class="io-item">
                    <span class="io-label">${Icons.arrowRight({size:12})} Resulting Output:</span>
                    <span class="io-val text-success">${selectedComp.output}</span>
                  </div>
                </div>

                <!-- INTERACTIVE VISUAL SIMULATION OF STUDENT CHOICES -->
                <div class="insp-section-box action-sim-box">
                  <div class="insp-sec-title">${Icons.gamepad({size:14})} Simulate Choice Behavior</div>
                    ${this.renderSimActionButtons(selectedComp)}
                  </div>

                  <!-- SIMULATION OUTCOME FEEDBACK -->
                  ${this.actionFeedback ? `
                    <div class="action-outcome-card ${this.actionFeedback.type === 'success' ? 'glow-green' : 'pulse-danger'}">
                      <div class="outcome-title">${this.actionFeedback.title}</div>
                      <div class="outcome-details">${this.actionFeedback.details}</div>
                    </div>
                  ` : ''}
                </div>

                <!-- ADD / REMOVE TOGGLE BUTTON -->
                <div class="inspector-footer-action">
                  ${this.placedComponentIds.includes(selectedComp.id) ? `
                    <button class="btn-toggle-canvas remove" onclick="window.bossCanvas.removeComponentFromCanvas('${selectedComp.id}')">
                      ${Icons.close({size:14})} Remove from Phone Canvas
                    </button>
                  ` : `
                    <button class="btn-toggle-canvas add" onclick="window.bossCanvas.addComponentToCanvas('${selectedComp.id}')">
                      + Add to Phone Canvas
                    </button>
                  `}
                </div>

              </div>
            ` : `
              <div class="empty-inspector-prompt">
                <p>Click on any component in the phone canvas or library to inspect its system design properties.</p>
              </div>
            `}
          </div>

        </div>
      </div>
    `;
  }
}

window.BossCanvasEngine = BossCanvasEngine;


/* === FILE: game.js === */
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
