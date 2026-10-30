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
// ============================================================
// SYSTEM DESIGN LEARNING GAME - CURRICULUM DATA
// 7 MODULES, EXACTLY 28 TOPICS (OLA MOBILITY EDITION)
// DESIGNED FOR FIRST-YEAR STUDENTS WITH ZERO CS BACKGROUND
// ============================================================

const STAGES = [
  {
    "id": 1,
    "name": "Module 1: System Design Fundamentals",
    "icon": "📐",
    "desc": "Ola Core Architecture & 50,000 Rush Hour Bookings",
    "levels": [
      1,
      2,
      3,
      4,
      5
    ]
  },
  {
    "id": 2,
    "name": "Module 2: Networking and Communication",
    "icon": "🌐",
    "desc": "DNS, HTTPS Security & REST APIs",
    "levels": [
      6,
      7,
      8,
      9
    ]
  },
  {
    "id": 3,
    "name": "Module 3: Database Fundamentals",
    "icon": "💾",
    "desc": "SQL vs NoSQL, ACID, Indexing, Replication & Sharding",
    "levels": [
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ]
  },
  {
    "id": 4,
    "name": "Module 4: Application Architecture",
    "icon": "🏗️",
    "desc": "Monolith vs Microservices & Authentication Security",
    "levels": [
      19,
      20
    ]
  },
  {
    "id": 5,
    "name": "Module 5: Scalability and Performance",
    "icon": "⚡",
    "desc": "Horizontal Scaling, Load Balancing, Redis Cache & CDN",
    "levels": [
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": 6,
    "name": "Module 6: Asynchronous Processing and Reliability",
    "icon": "🛡️",
    "desc": "Kafka Queues, Fault Tolerance & Rate Limiting",
    "levels": [
      25,
      26,
      27
    ]
  },
  {
    "id": 7,
    "name": "Module 7: Advanced System Design",
    "icon": "🎯",
    "desc": "Geospatial Search & 2km Radius Nearest Cab Matching",
    "levels": [
      28
    ]
  }
];

const LEVELS = [
  {
    "id": 1,
    "stage": 1,
    "sno": 1,
    "topic": "Introduction to System Design",
    "concept": "Introduction to System Design",
    "title": "Level 1: 50,000 People Book Cabs at 6:00 PM",
    "time": "Evening Rush Hour — Bangalore Tech Park",
    "usersCount": "50,000 Riders Opening Ola App",
    "topicHint": "Handling Rush Hour Traffic Without Crashes",
    "situation": "It is 6:00 PM on a rainy Friday evening in Bangalore. Office workers leave work, and suddenly 50,000 people open the Ola app at the exact same minute to book a cab. A junior engineer asks: \"Can we just run the entire Ola cab booking app on one single laptop under my desk?\"",
    "problem": "What happens if you try to run an app with 50,000 riders on a single home computer?",
    "simulationType": "ola_rush_hour",
    "choices": [
      {
        "id": "A",
        "text": "The laptop runs out of memory, freezes completely, and crashes the app for all 50,000 riders.",
        "isOptimal": true,
        "consequenceText": "Spot on! One regular laptop cannot process 50,000 booking requests at the same second. The processor overheats, the memory fills up, and the app crashes, stranding riders in the rain. That is why we need System Design!",
        "statImpact": {
          "latency": "25ms",
          "capacity": "50,000 Riders Smooth",
          "risk": "Zero Downtime",
          "cost": "Well-Planned"
        },
        "whatHappened": {
          "helped": "Understood that big apps need organized systems of computers.",
          "bottleneck": "A single laptop lacks the power to handle thousands of users at once.",
          "reflectionQuestion": "Why do apps with millions of users need a planned system of computers?"
        },
        "successSummary": "Great decision! You understood why single computers fail and why system planning is required."
      },
      {
        "id": "B",
        "text": "The laptop automatically turns into a supercomputer with no extra planning needed.",
        "isOptimal": false,
        "consequenceText": "Computers cannot magically make themselves faster. When thousands of ride requests hit the laptop, it freezes instantly and no cabs can be booked.",
        "statImpact": {
          "latency": "Frozen",
          "capacity": "0 Cabs Dispatched",
          "risk": "Total Crash",
          "cost": "Lost Business"
        },
        "whatHappened": {
          "helped": "Hoped computer hardware would upgrade itself.",
          "bottleneck": "Hardware has physical limits and cannot upgrade automatically.",
          "reflectionQuestion": "Can software run smoothly without planning the computer hardware behind it?"
        }
      },
      {
        "id": "C",
        "text": "Passengers do not need any servers or internet connection to book cabs on their phones.",
        "isOptimal": false,
        "consequenceText": "An online app cannot work without computers and internet. Without a central system, riders cannot see nearby drivers or share ride destinations.",
        "statImpact": {
          "latency": "Offline",
          "capacity": "0 Rides",
          "risk": "No Connection",
          "cost": "Broken App"
        },
        "whatHappened": {
          "helped": "Thought online apps work like offline games.",
          "bottleneck": "Ride hailing requires constant network communication.",
          "reflectionQuestion": "How does information travel from a rider's phone to a cab driver's phone?"
        }
      }
    ],
    "discovery": {
      "badge": "Introduction to System Design",
      "tagline": "Planning and connecting computers so big applications run smoothly without crashing",
      "simpleMeaning": "System Design is like planning a whole city before building it. Instead of hoping one computer does everything, you plan which computers handle cab locations, which computers handle payments, and how they talk to each other without slowing down.",
      "pubgExample": "When 50,000 riders tap 'Book Mini' on Ola at 6:00 PM, a well-designed system distributes the requests so every rider gets a cab in 3 minutes without the app freezing.",
      "analogy": "Building a busy highway: You cannot have just one single narrow lane for an entire city. You must plan multiple lanes, bridges, and traffic lights so thousands of vehicles move smoothly.",
      "howItWorks": [
        "1. Understand the Traffic: Know how many riders and drivers use the app every minute.",
        "2. Divide the Work: Separate ride tracking, payments, and maps across different computers.",
        "3. Stop Bottlenecks: Plan backup computers so the app stays fast during heavy rain or festival rushes.",
        "4. Keep It Fast: Make sure riders get driver details in just a few milliseconds."
      ],
      "whyItMatters": "Without System Design, popular apps like Ola would crash constantly during rush hours, leaving riders stranded and drivers without trips.",
      "visualExplanation": "[50,000 Riders with Phones] ──► [Planned Ola System] ──► Smooth Cab Dispatch in 3 Mins!",
      "contrast": {
        "termA": "Single Computer Setup",
        "descA": "One computer tries to do everything; quickly freezes and crashes under 50,000 users.",
        "termB": "Planned System",
        "descB": "Work is shared across organized computers; handles millions of ride requests smoothly."
      },
      "teacherNotes": {
        "concept": "What is System Design, Scale, Capacity, Bottlenecks",
        "experience": "Students learned why 50,000 simultaneous users cannot run on a simple home laptop.",
        "realWorld": "Ola, Uber, and Swiggy use distributed server clusters across India to handle millions of daily bookings.",
        "question": "What is the difference between writing code for one person and designing a system for 10 million users?"
      },
      "olaExample": "When 50,000 riders tap 'Book Mini' on Ola at 6:00 PM, a well-designed system distributes the requests so every rider gets a cab in 3 minutes without the app freezing."
    },
    "knowledgeCheck": {
      "question": "What is the main goal of System Design in a cab booking app like Ola?",
      "options": [
        {
          "id": "A",
          "text": "To plan and organize connected computers so thousands of riders can book cabs without the app crashing.",
          "isCorrect": true,
          "explanation": "Correct! System Design ensures that servers, databases, and networks work together to handle heavy traffic smoothly."
        },
        {
          "id": "B",
          "text": "To paint all the cabs yellow and buy new tires for drivers.",
          "isCorrect": false,
          "explanation": "Not quite. Painting cabs is physical car maintenance, not system design for software."
        },
        {
          "id": "C",
          "text": "To give everyone free unlimited cab rides without charging any money.",
          "isCorrect": false,
          "explanation": "Incorrect. System design is about building reliable computer systems, not pricing policies."
        }
      ],
      "hint": "Hint: Think about why apps need servers, networks, and databases to work together during rush hours."
    }
  },
  {
    "id": 2,
    "stage": 1,
    "sno": 2,
    "topic": "Functional and Non-Functional Requirements",
    "concept": "Functional and Non-Functional Requirements",
    "title": "Level 2: What the App Does vs. How Fast It Runs",
    "time": "Morning Commute — Delhi Airport Terminal",
    "usersCount": "10,000 Riders at Airport",
    "topicHint": "App Features vs Speed & Reliability",
    "situation": "The Ola engineering team is planning the new airport booking update. The designer says: \"We must let riders select Sedan or Prime, view the fare, and apply coupon codes.\" But the lead architect adds: \"When a rider taps Book, the cab search must finish in under 2 seconds, and the servers must stay online 99.9% of the time!\"",
    "problem": "What is the difference between what an app DOES (Features) and how well it RUNS (Performance)?",
    "simulationType": "requirements_stress",
    "choices": [
      {
        "id": "A",
        "text": "Functional is what the app does (booking a cab, applying coupons); Non-Functional is how well it runs (fast response, 99.9% uptime).",
        "isOptimal": true,
        "consequenceText": "Exactly right! Functional Requirements are the features riders click on (booking, fare estimate, cancelling). Non-Functional Requirements are the quality standards: the app must respond in under 2 seconds, never lose payments, and never crash!",
        "statImpact": {
          "latency": "Sub-2s",
          "capacity": "Reliable",
          "risk": "Zero Downtime",
          "cost": "Balanced"
        },
        "whatHappened": {
          "helped": "Separated core features from performance and reliability metrics.",
          "bottleneck": "Building features without performance targets creates slow apps that users hate.",
          "reflectionQuestion": "Why is an app with great buttons useless if every button takes 20 seconds to respond?"
        },
        "successSummary": "Perfect! You distinguished Functional Requirements (features) from Non-Functional Requirements (speed and uptime)."
      },
      {
        "id": "B",
        "text": "Functional means the cab has functional air conditioning; Non-Functional means the car radio is broken.",
        "isOptimal": false,
        "consequenceText": "Those are physical car features, not software requirements for the Ola application system.",
        "statImpact": {
          "latency": "Unclear",
          "capacity": "Confused Scope",
          "risk": "Missed Targets",
          "cost": "Wasted Effort"
        },
        "whatHappened": {
          "helped": "Thought about car parts instead of software systems.",
          "bottleneck": "System requirements define how software behaves and performs.",
          "reflectionQuestion": "What does a software engineer measure when testing an app?"
        }
      },
      {
        "id": "C",
        "text": "Only build fancy buttons and ignore whether the app takes 5 minutes to load or crashes frequently.",
        "isOptimal": false,
        "consequenceText": "If the app takes 5 minutes to confirm a cab, hurried riders at the airport will delete Ola and take a regular taxi instead.",
        "statImpact": {
          "latency": "5-Minute Delay",
          "capacity": "Angry Riders",
          "risk": "Player Churn",
          "cost": "Lost Revenue"
        },
        "whatHappened": {
          "helped": "Focused only on visuals without speed.",
          "bottleneck": "Slow response times destroy user trust completely.",
          "reflectionQuestion": "Would you keep using an app that freezes for minutes every time you book?"
        }
      }
    ],
    "discovery": {
      "badge": "Functional vs. Non-Functional Requirements",
      "tagline": "Balancing the features users click with the speed and reliability they expect",
      "simpleMeaning": "Functional Requirements (FR) describe WHAT the system does (features like booking a ride, showing fare estimate, or paying with wallet). Non-Functional Requirements (NFR) describe HOW WELL the system performs (booking completes in under 2 seconds, 99.9% uptime, and protecting passwords).",
      "pubgExample": "In Ola, picking 'Ola Auto' and entering a drop location is a Functional Requirement. Having your nearby driver assigned in under 3 seconds without app freezing is a Non-Functional Requirement.",
      "analogy": "Buying a car: Having 4 wheels, a steering wheel, and doors is Functional (what it is). Getting 20 km per liter of fuel, low maintenance, and 5-star crash safety is Non-Functional (how well and safely it works).",
      "howItWorks": [
        "1. List Features (FR): Riders can book cabs, track live driver location, and rate drivers.",
        "2. Set Speed Targets (NFR): Cab search must return within 2 seconds.",
        "3. Set Reliability Targets (NFR): The system must stay available 99.9% of the year.",
        "4. Test Both: Ensure the buttons work AND that the app feels fast and smooth."
      ],
      "whyItMatters": "An app with 50 wonderful features is completely useless if it takes 30 seconds to load or crashes when rain starts.",
      "visualExplanation": "Functional: [Book Cab] + [Apply Coupon]\nNon-Functional: [Response < 2s] + [99.9% Uptime] = Great Ola App!",
      "contrast": {
        "termA": "Functional Requirements (FR)",
        "descA": "What the app does: features and buttons riders interact with (e.g., book ride, pay fare).",
        "termB": "Non-Functional Requirements (NFR)",
        "descB": "How well it runs: speed, uptime, security, and scalability under heavy rush."
      },
      "teacherNotes": {
        "concept": "Functional Requirements (FR), Non-Functional Requirements (NFR), Latency, Availability, SLA",
        "experience": "Students learned why software must balance what it does with how fast and reliably it operates.",
        "realWorld": "Ola and Uber engineering teams define strict SLAs: 99.99% uptime and sub-200ms API response times.",
        "question": "If an app has a working payment button (FR) but processing takes 2 minutes (NFR), is it acceptable?"
      },
      "olaExample": "In Ola, picking 'Ola Auto' and entering a drop location is a Functional Requirement. Having your nearby driver assigned in under 3 seconds without app freezing is a Non-Functional Requirement."
    },
    "knowledgeCheck": {
      "question": "If a rider opens Ola to catch a train and the app freezes because the server is too slow, which requirement failed?",
      "options": [
        {
          "id": "A",
          "text": "Non-Functional Requirement (Speed and performance failed).",
          "isCorrect": true,
          "explanation": "Correct! Speed, responsiveness, and uptime are Non-Functional Requirements. Freezing means performance failed."
        },
        {
          "id": "B",
          "text": "Functional Requirement (The rider forgot their shoes).",
          "isCorrect": false,
          "explanation": "Incorrect. Personal shoes have nothing to do with software system requirements."
        },
        {
          "id": "C",
          "text": "Color Requirement (The cab was the wrong shade of white).",
          "isCorrect": false,
          "explanation": "Incorrect. Vehicle paint color is cosmetic, not a software requirement failure."
        }
      ],
      "hint": "Hint: Think about whether freezing is a missing button (feature) or a problem with speed and responsiveness (performance)."
    }
  },
  {
    "id": 3,
    "stage": 1,
    "sno": 3,
    "topic": "Client–Server Architecture",
    "concept": "Client–Server Architecture",
    "title": "Level 3: How Your Phone Talks to the Ola Cloud Server",
    "time": "Evening Booking — Connaught Place, Delhi",
    "usersCount": "Rider Phone & Nearby Cab Drivers",
    "topicHint": "Client Requests and Server Responses",
    "situation": "You open the Ola app on your smartphone (the Client) to go home. You need to know: \"Where are the 3 closest cabs right now?\" Your friend wonders: \"Does your phone connect directly to all 10,000 cab drivers' phones in Delhi through Bluetooth wires?\"",
    "problem": "How should your smartphone get accurate information about nearby available cabs?",
    "simulationType": "client_server_clerk",
    "choices": [
      {
        "id": "A",
        "text": "Your phone (Client) asks the central Ola computer (Server), and the server replies with the nearest 3 cabs.",
        "isOptimal": true,
        "consequenceText": "Perfect! Your phone is the Client (asking for nearby cabs). The central computer in the cloud is the Server (holding driver GPS data, calculating fares, and sending answers back in milliseconds).",
        "statImpact": {
          "latency": "30ms",
          "capacity": "Millions Connected",
          "risk": "Safe & Secure",
          "cost": "Standard"
        },
        "whatHappened": {
          "helped": "The central server coordinates riders and drivers safely.",
          "bottleneck": "Connecting phones directly to each other would cause massive confusion and security risks.",
          "reflectionQuestion": "Why is a central server needed when matching strangers for cab rides?"
        },
        "successSummary": "Correct! Client-Server architecture allows millions of phones to communicate through a central system."
      },
      {
        "id": "B",
        "text": "Your phone connects directly to thousands of drivers' phones using Bluetooth wires across the entire city.",
        "isOptimal": false,
        "consequenceText": "Bluetooth only works over a few meters and cannot connect across a city. Connecting thousands of phones directly causes connection chaos.",
        "statImpact": {
          "latency": "Failed",
          "capacity": "0 Drivers Found",
          "risk": "High Disconnections",
          "cost": "Unworkable"
        },
        "whatHappened": {
          "helped": "Tried to bypass the central server.",
          "bottleneck": "Direct phone-to-phone connections cannot scale across city distances.",
          "reflectionQuestion": "Can Bluetooth on your phone reach a driver 5 kilometers away?"
        }
      },
      {
        "id": "C",
        "text": "Your phone guesses where cabs are using magic without sending any messages over the internet.",
        "isOptimal": false,
        "consequenceText": "Smartphones cannot magically guess real-world locations. Without internet communication, your screen would show an empty map.",
        "statImpact": {
          "latency": "Offline",
          "capacity": "0 Cabs",
          "risk": "No Data",
          "cost": "Broken"
        },
        "whatHappened": {
          "helped": "Thought phones can know live data without internet.",
          "bottleneck": "Every live update requires network messages between client and server.",
          "reflectionQuestion": "How does live location data travel from a moving cab to your screen?"
        }
      }
    ],
    "discovery": {
      "badge": "Client–Server Architecture",
      "tagline": "Separating the user's mobile screen (Client) from the central brain (Server)",
      "simpleMeaning": "Client-Server architecture is a system where the Client (your phone or browser) makes requests, and the Server (a powerful computer in the cloud) processes the request and sends back the answer.",
      "pubgExample": "When you tap 'Confirm Booking' in Ola, your phone (Client) sends a request over 4G/5G. The Ola Server receives it, finds the nearest driver, and sends a response back with the driver's name and car number.",
      "analogy": "A restaurant: You are the Customer (Client) reading the menu and ordering food. The Kitchen is the Server cooking the food and sending it back to your table.",
      "howItWorks": [
        "1. Client (Mobile App): Shows the map, accepts your finger taps, and sends a Request.",
        "2. Internet Network: Carries the request from your phone to the cloud data center.",
        "3. Server: Checks available cabs, validates your wallet balance, and generates a Response.",
        "4. Response Delivered: Your app receives the driver's location and animates the cab on your screen."
      ],
      "whyItMatters": "It keeps heavy computing, driver verification, and billing safe in central servers rather than running everything on slow phones.",
      "visualExplanation": "[Rider Mobile: Client] ──Request: 'Find Cab'──► [Ola Cloud: Server] ──Response: 'Cab Arriving'──► [Rider Mobile]",
      "contrast": {
        "termA": "Client (Your Phone)",
        "descA": "Displays UI, captures taps, sends requests, and shows the incoming cab on the map.",
        "termB": "Server (Cloud Computer)",
        "descB": "Central brain that verifies drivers, calculates shortest routes, and manages payments."
      },
      "teacherNotes": {
        "concept": "Client, Server, Request, Response, Client-Server Architecture",
        "experience": "Students learned how mobile devices interact with remote server infrastructure.",
        "realWorld": "Ola, Uber, Zomato, and Amazon all operate on Client-Server communication over HTTPS.",
        "question": "What is your mobile phone called when it asks the Ola server for nearby cabs?"
      },
      "olaExample": "When you tap 'Confirm Booking' in Ola, your phone (Client) sends a request over 4G/5G. The Ola Server receives it, finds the nearest driver, and sends a response back with the driver's name and car number."
    },
    "knowledgeCheck": {
      "question": "In the Ola cab booking app, what is the role of the 'Server'?",
      "options": [
        {
          "id": "A",
          "text": "To receive booking requests from rider phones, check available drivers, and send back trip details.",
          "isCorrect": true,
          "explanation": "Correct! The server is the central computer that processes requests and manages game/app logic."
        },
        {
          "id": "B",
          "text": "To act as the steering wheel inside the physical cab.",
          "isCorrect": false,
          "explanation": "Incorrect. A server is a computer in a data center, not a steering wheel."
        },
        {
          "id": "C",
          "text": "To physically drive the cab to your house in place of the human driver.",
          "isCorrect": false,
          "explanation": "Incorrect. The server coordinates information; human drivers or cars do the physical driving."
        }
      ],
      "hint": "Hint: Think about which computer receives your request, finds a cab, and sends the answer back."
    }
  },
  {
    "id": 4,
    "stage": 1,
    "sno": 4,
    "topic": "Frontend, Backend, and Database",
    "concept": "Frontend, Backend, and Database",
    "title": "Level 4: The Screen, the Brain, and the Memory",
    "time": "Morning Rush — Mumbai Suburban Stations",
    "usersCount": "100,000 Morning Passengers",
    "topicHint": "3 Essential Layers of Every Software System",
    "situation": "A passenger opens Ola to book a ride from Andheri station. The app displays a beautiful map with a green 'Book Ride' button. When tapped, the system must calculate the ₹240 fare, match a driver, and permanently record the trip receipt so the driver gets paid tomorrow.",
    "problem": "Where do the visual buttons, the fare calculation logic, and the permanent trip records live?",
    "simulationType": "client_server_clerk",
    "choices": [
      {
        "id": "A",
        "text": "Frontend is the screen you touch; Backend is the brain that calculates fare; Database is the memory that saves trip records.",
        "isOptimal": true,
        "consequenceText": "Brilliant! The 3-tier structure runs all modern software. Frontend = the mobile UI; Backend = the server business logic (calculating distance and surge fare); Database = permanent disk memory saving trip receipts.",
        "statImpact": {
          "latency": "Fast & Clean",
          "capacity": "Organized 3-Tier",
          "risk": "Zero Data Loss",
          "cost": "Standard"
        },
        "whatHappened": {
          "helped": "Separated presentation, business logic, and permanent storage.",
          "bottleneck": "Mixing all three into the phone makes apps heavy, insecure, and easy to hack.",
          "reflectionQuestion": "Why should your phone not store other drivers' bank account details?"
        },
        "successSummary": "Great job! You mastered the three core layers: Frontend, Backend, and Database."
      },
      {
        "id": "B",
        "text": "Save all 100,000 passengers' bank details and passwords inside the rider's phone memory.",
        "isOptimal": false,
        "consequenceText": "Saving other people's bank details on someone's phone is a massive security disaster! Hackers could easily steal everyone's money.",
        "statImpact": {
          "latency": "Dangerous",
          "capacity": "Data Leak",
          "risk": "Total Security Breach",
          "cost": "Huge Fines"
        },
        "whatHappened": {
          "helped": "Put confidential database records onto a user device.",
          "bottleneck": "User devices cannot be trusted with central database records.",
          "reflectionQuestion": "Where should sensitive passwords and payment records be stored safely?"
        }
      },
      {
        "id": "C",
        "text": "Delete the database so the app forgets all trips, rides, and driver payments as soon as the phone closes.",
        "isOptimal": false,
        "consequenceText": "Without a database, drivers will never get paid for their hard work, and riders have no proof of past trips. Drivers will strike immediately.",
        "statImpact": {
          "latency": "Forgotten",
          "capacity": "0 Records",
          "risk": "Unpaid Drivers",
          "cost": "Company Collapse"
        },
        "whatHappened": {
          "helped": "Removed permanent storage.",
          "bottleneck": "Commercial apps must persist financial and trip data safely.",
          "reflectionQuestion": "Can a business operate if it forgets every sale the moment it closes?"
        }
      }
    ],
    "discovery": {
      "badge": "Frontend, Backend, and Database",
      "tagline": "The three essential layers of every web and mobile application",
      "simpleMeaning": "Frontend is what the user sees and touches (the mobile screen). Backend is the invisible brain running on servers (calculating fares and matching drivers). Database is the permanent digital filing cabinet that safely stores rider accounts, driver details, and trip receipts.",
      "pubgExample": "In Ola: Frontend = The map, buttons, and car icons on your phone. Backend = The server algorithms calculating traffic and assigning the driver. Database = The storage storing your phone number, trip history, and wallet balance.",
      "analogy": "A restaurant: Frontend is the dining room and menu. Backend is the chefs cooking in the kitchen. Database is the refrigerator and pantry storing the ingredients.",
      "howItWorks": [
        "1. Frontend (UI): Rider enters pickup and drop points and taps 'Confirm'.",
        "2. Backend (Server): Computes route distance, adds surge multiplier, and locates nearest driver.",
        "3. Database (Storage): Saves Trip ID #98214 with fare ₹240 and timestamps to permanent disk.",
        "4. All in Sync: The backend sends confirmation to both rider and driver frontends."
      ],
      "whyItMatters": "Keeping these three layers separate makes apps secure, fast, and easy to maintain by different engineering teams.",
      "visualExplanation": "[Frontend: Mobile App] ──Requests──► [Backend: Cloud Server] ──Saves──► [Database: Storage Vault]",
      "contrast": {
        "termA": "Frontend",
        "descA": "Visual interface on the user's phone; collects inputs and displays maps and trip status.",
        "termB": "Backend & Database",
        "descB": "Server brain that calculates business rules, and permanent database that safeguards records."
      },
      "teacherNotes": {
        "concept": "Frontend, Backend, Database, 3-Tier Architecture, Client-Side vs Server-Side",
        "experience": "Students understood the clear division between UI presentation, server logic, and persistent storage.",
        "realWorld": "Ola uses React Native / Android Native (Frontend), Java / Go microservices (Backend), and MySQL / DynamoDB (Database).",
        "question": "Which layer is responsible for permanently remembering how much money is in your Ola Money wallet?"
      },
      "olaExample": "In Ola: Frontend = The map, buttons, and car icons on your phone. Backend = The server algorithms calculating traffic and assigning the driver. Database = The storage storing your phone number, trip history, and wallet balance."
    },
    "knowledgeCheck": {
      "question": "When you book an Ola cab and receive a digital receipt for ₹250, which layer is responsible for permanently saving that receipt?",
      "options": [
        {
          "id": "A",
          "text": "The Database (the permanent digital filing cabinet).",
          "isCorrect": true,
          "explanation": "Correct! The database safely and permanently stores trip history, payments, and account balances."
        },
        {
          "id": "B",
          "text": "The glass screen of your smartphone.",
          "isCorrect": false,
          "explanation": "Incorrect. The glass screen is hardware for touching, not permanent storage."
        },
        {
          "id": "C",
          "text": "The car tires of the cab.",
          "isCorrect": false,
          "explanation": "Incorrect. Car tires are vehicle parts, not digital data storage."
        }
      ],
      "hint": "Hint: Think about which component acts as the permanent digital filing cabinet that remembers records."
    }
  },
  {
    "id": 5,
    "stage": 1,
    "sno": 5,
    "topic": "Basic System Architecture",
    "concept": "Basic System Architecture",
    "title": "Level 5: Connecting the Full Ola Dispatch System",
    "time": "Evening Peak — Hyderabad Cyber Towers",
    "usersCount": "Full City Deployment: 50,000 Riders & 8,000 Cabs",
    "topicHint": "Connecting Clients, Gateway, Dispatchers, and Data",
    "situation": "You are connecting all the pieces of Ola for an entire city. Rider phones, driver phones, API security gateways, dispatch servers, and database storage vaults must all communicate smoothly. An intern asks: \"Can we just connect every rider phone directly to our raw financial database without any security server in the middle?\"",
    "problem": "Why must every component be organized into a proper system architecture instead of letting phones touch the database directly?",
    "simulationType": "ola_system_blueprint",
    "choices": [
      {
        "id": "A",
        "text": "Organize traffic through an API Gateway and Backend Servers so phones never touch raw databases directly.",
        "isOptimal": true,
        "consequenceText": "Masterful architecture! By placing an API Gateway and Backend servers between phones and databases, requests are checked for security and balanced evenly. Sensitive databases remain completely protected!",
        "statImpact": {
          "latency": "20ms",
          "capacity": "50,000 Smooth",
          "risk": "High Security",
          "cost": "Well-Architected"
        },
        "whatHappened": {
          "helped": "Followed layered system architecture with security boundaries.",
          "bottleneck": "Allowing direct client access to databases exposes sensitive tables to attacks and corruption.",
          "reflectionQuestion": "Why does a bank have teller counters instead of letting customers walk directly into the money vault?"
        },
        "successSummary": "Brilliant! You connected the complete basic system architecture with secure layers."
      },
      {
        "id": "B",
        "text": "Let all 50,000 rider phones connect directly to the raw database files and edit fares as they wish.",
        "isOptimal": false,
        "consequenceText": "Dishonest riders edit their fare from ₹500 to ₹0, and delete other riders' accounts. The database crashes within 3 minutes.",
        "statImpact": {
          "latency": "Corrupted",
          "capacity": "Cheaters Everywhere",
          "risk": "Total Bankruptcy",
          "cost": "Disaster"
        },
        "whatHappened": {
          "helped": "Removed middle security servers to save money.",
          "bottleneck": "Unfiltered direct database access destroys data integrity.",
          "reflectionQuestion": "What happens if any random user can edit database numbers directly?"
        }
      },
      {
        "id": "C",
        "text": "Disconnect all servers and make drivers call every phone number in the phonebook one by one.",
        "isOptimal": false,
        "consequenceText": "Calling thousands of numbers manually takes days. Passengers give up and walk, and the cab company goes bankrupt.",
        "statImpact": {
          "latency": "Hours Delay",
          "capacity": "Manual Failure",
          "risk": "Zero Modern Tech",
          "cost": "Unusable"
        },
        "whatHappened": {
          "helped": "Abandoned automated system architecture.",
          "bottleneck": "Modern scale requires automated digital systems.",
          "reflectionQuestion": "Can telephone operators manually coordinate 50,000 live rides simultaneously?"
        }
      }
    ],
    "discovery": {
      "badge": "Basic System Architecture",
      "tagline": "Connecting clients, gateways, application servers, and databases into a safe flow",
      "simpleMeaning": "Basic System Architecture is the blueprint that organizes how software pieces fit together. Riders connect through an API Gateway, which sends requests to Application Servers (Dispatch, Payments, Maps), which then talk to secure Databases.",
      "pubgExample": "When an Ola rider requests a ride: (1) App sends request -> (2) API Gateway checks login -> (3) Dispatch Server matches driver -> (4) Database records trip -> (5) Confirmation sent back to rider and driver.",
      "analogy": "An airport: Passengers don't walk directly onto the runway. They pass through the Entrance -> Security Check -> Boarding Gate -> Airplane. Each step has a clear job.",
      "howItWorks": [
        "1. User Layer: Rider and Driver mobile apps running on smartphones.",
        "2. Gateway Layer: API Gateway verifies security tokens and routes requests.",
        "3. Service Layer: Dispatch, Fare Calculation, and Tracking services process trip logic.",
        "4. Data Layer: Databases and caches store persistent records securely."
      ],
      "whyItMatters": "Protects company data, stops fraud, prevents crashes, and ensures riders and drivers get accurate service in seconds.",
      "visualExplanation": "[Rider & Driver Apps] ──► [API Gateway] ──► [Dispatch Backend] ──► [Secure Database]",
      "contrast": {
        "termA": "Layered Architecture",
        "descA": "Organized layers protect databases, balance traffic, and allow independent scaling.",
        "termB": "Direct Unprotected Access",
        "descB": "Phones talk directly to databases; leads to security hacks, data theft, and server crashes."
      },
      "teacherNotes": {
        "concept": "System Architecture, Layered Design, API Gateway, Tier Separation, Security Boundaries",
        "experience": "Students learned how all the individual components connect into an end-to-end architecture.",
        "realWorld": "Every modern mobility platform (Ola, Uber, Lyft) uses multi-layered service architecture.",
        "question": "What is the job of the API Gateway sitting between rider phones and backend servers?"
      },
      "olaExample": "When an Ola rider requests a ride: (1) App sends request -> (2) API Gateway checks login -> (3) Dispatch Server matches driver -> (4) Database records trip -> (5) Confirmation sent back to rider and driver."
    },
    "knowledgeCheck": {
      "question": "Why should Ola never allow rider phones to connect directly to the raw financial database?",
      "options": [
        {
          "id": "A",
          "text": "Because riders could maliciously change fares or steal private bank details; backend servers must check security first.",
          "isCorrect": true,
          "explanation": "Correct! Backend servers act as a secure referee to validate all actions before touching database records."
        },
        {
          "id": "B",
          "text": "Because databases can only be touched by drivers wearing yellow uniforms.",
          "isCorrect": false,
          "explanation": "Incorrect. Database access is controlled by software security protocols, not driver uniforms."
        },
        {
          "id": "C",
          "text": "Because rider phones will physically melt if they touch database cables.",
          "isCorrect": false,
          "explanation": "Incorrect. Phone hardware does not melt; the problem is software data security and fraud."
        }
      ],
      "hint": "Hint: Think about what could happen if anyone could edit their own ride balance without a server checking first."
    }
  },
  {
    "id": 6,
    "stage": 2,
    "sno": 6,
    "topic": "Networking Fundamentals – IP Addresses, DNS, and Ports",
    "concept": "Networking Fundamentals – IP Addresses, DNS, and Ports",
    "title": "Level 6: Finding the Ola Cloud Server in Bangalore",
    "time": "Morning Commute — Koramangala, Bangalore",
    "usersCount": "Rider Phone Locating Ola Cloud",
    "topicHint": "IP Addresses (Street Address), DNS (Phonebook), Ports (Apartment Number)",
    "situation": "Your Ola app needs to connect to the Ola server over the internet. The server has an IP address like '142.250.190.46'. But humans cannot remember long strings of numbers for every website and service! When you tap Book, your app contacts 'api.olacabs.com'.",
    "problem": "How does your phone convert the friendly name 'api.olacabs.com' into the real computer IP address?",
    "simulationType": "networking_dns_ports",
    "choices": [
      {
        "id": "A",
        "text": "The phone asks DNS (the internet's phonebook), which translates 'api.olacabs.com' into the server's exact IP address.",
        "isOptimal": true,
        "consequenceText": "Spot on! DNS (Domain Name System) acts like your phone's contact list. You type 'api.olacabs.com', and DNS immediately tells your phone the exact computer IP address and Port 443 to connect to!",
        "statImpact": {
          "latency": "5ms DNS",
          "capacity": "Instant Lookups",
          "risk": "Zero Connection Failures",
          "cost": "Standard"
        },
        "whatHappened": {
          "helped": "Used DNS to resolve domain names into numerical IP addresses.",
          "bottleneck": "Without DNS, users would have to memorize 12-digit number codes for every service.",
          "reflectionQuestion": "Why do we save friends' names in our phone instead of memorizing their 10-digit phone numbers?"
        },
        "successSummary": "Awesome! You understood IP Addresses, DNS lookups, and Ports."
      },
      {
        "id": "B",
        "text": "Force all riders to memorize long 12-digit IP numbers and type them into their app every morning.",
        "isOptimal": false,
        "consequenceText": "Nobody wants to memorize '142.250.190.46:443' just to call a cab! Riders will make typos, get connection errors, and stop using Ola.",
        "statImpact": {
          "latency": "Slow & Frustrating",
          "capacity": "Typo Errors",
          "risk": "Lost Customers",
          "cost": "High Support Costs"
        },
        "whatHappened": {
          "helped": "Expected users to act like network routers.",
          "bottleneck": "Humans prefer memorable text names rather than raw binary or decimal numbers.",
          "reflectionQuestion": "Would you use Google if you had to type 172.217.16.206 into the browser every time?"
        }
      },
      {
        "id": "C",
        "text": "The phone transmits radio signals into outer space hoping an alien satellite forwards it to Ola.",
        "isOptimal": false,
        "consequenceText": "Satellites in outer space do not route city cab requests. Signals get lost, and riders are left waiting endlessly.",
        "statImpact": {
          "latency": "Lost in Space",
          "capacity": "0 Connection",
          "risk": "100% Failure",
          "cost": "Broken"
        },
        "whatHappened": {
          "helped": "Ignored internet networking standards.",
          "bottleneck": "Internet traffic follows organized IP and DNS routing protocols.",
          "reflectionQuestion": "How does internet traffic travel reliably through local network cables and towers?"
        }
      }
    ],
    "discovery": {
      "badge": "IP Addresses, DNS, and Ports",
      "tagline": "How computers find each other across the worldwide internet",
      "simpleMeaning": "An IP Address is like a house's street address (where the computer lives). DNS (Domain Name System) is the internet's phonebook that translates names like 'olacabs.com' into IP addresses. A Port number is like an apartment door number, telling the computer which specific program to deliver the message to.",
      "pubgExample": "When you tap 'Book Cab', your phone asks DNS: \"Where is api.olacabs.com?\" DNS answers: \"Go to IP 142.250.190.46 at Port 443.\" Your phone connects directly in 5 milliseconds.",
      "analogy": "Sending a parcel: The IP Address is the building street address. The DNS is looking up the person's name in a directory. The Port number is the specific Flat Number (e.g. Flat 443) inside the building.",
      "howItWorks": [
        "1. Domain Name: User app asks for 'api.olacabs.com'.",
        "2. DNS Lookup: Internet directory returns IP address '142.250.190.46'.",
        "3. Port Selection: Connects to Port 443 (the standard secure web door).",
        "4. Connection Established: Rider phone and Ola dispatch server begin talking."
      ],
      "whyItMatters": "Without IP addresses, DNS, and ports, computers on the internet would have no way to find each other or route messages.",
      "visualExplanation": "[Phone: 'api.olacabs.com'] ──► [DNS Server] ──Returns IP──► [Connects to IP: 142.250.190.46 : Port 443]",
      "contrast": {
        "termA": "DNS (Domain Name System)",
        "descA": "Human-friendly names like 'olacabs.com'; automatically looked up in milliseconds.",
        "termB": "IP Address & Port",
        "descB": "Machine-readable numerical destination (IP: 142.250.190.46) and door number (Port: 443)."
      },
      "teacherNotes": {
        "concept": "IP Address (IPv4/IPv6), DNS Resolution, Port Numbers, TCP/IP",
        "experience": "Students learned how domain names resolve to IP addresses and how ports direct traffic to specific services.",
        "realWorld": "Every network call in Ola, Google, and Netflix relies on DNS resolvers (like Cloudflare 1.1.1.1 and Google 8.8.8.8).",
        "question": "What is the internet phonebook called that converts domain names into IP addresses?"
      },
      "olaExample": "When you tap 'Book Cab', your phone asks DNS: \"Where is api.olacabs.com?\" DNS answers: \"Go to IP 142.250.190.46 at Port 443.\" Your phone connects directly in 5 milliseconds."
    },
    "knowledgeCheck": {
      "question": "Why does your phone use DNS when opening the Ola app instead of connecting directly by raw numbers?",
      "options": [
        {
          "id": "A",
          "text": "DNS translates friendly names like 'api.olacabs.com' into the server's exact IP address so humans don't have to memorize numbers.",
          "isCorrect": true,
          "explanation": "Correct! DNS translates names into IP addresses automatically so we never have to type raw numbers."
        },
        {
          "id": "B",
          "text": "DNS turns the cab's headlights on during night rides.",
          "isCorrect": false,
          "explanation": "Incorrect. DNS is an internet network service, not a physical car component."
        },
        {
          "id": "C",
          "text": "DNS gives the driver a 50% discount on road toll taxes.",
          "isCorrect": false,
          "explanation": "Incorrect. DNS handles domain name lookups, not highway toll pricing."
        }
      ],
      "hint": "Hint: Think about why you use a contact list instead of memorizing 10-digit phone numbers for all your friends."
    }
  },
  {
    "id": 7,
    "stage": 2,
    "sno": 7,
    "topic": "HTTP vs. HTTPS",
    "concept": "HTTP vs. HTTPS",
    "title": "Level 7: Protecting Credit Cards & Ola Money with Encryption",
    "time": "Evening Payment — Paying ₹450 Ride Fare",
    "usersCount": "1,000,000 Daily Online Payments",
    "topicHint": "Plain Text (HTTP) vs Encrypted Security (HTTPS)",
    "situation": "You reach your destination and pay ₹450 using your credit card or Ola Money wallet. If the app uses unencrypted HTTP, your card number and CVV are sent over open Wi-Fi like a clear postcard. A hacker sitting at a nearby tea stall with a laptop could easily read your bank details!",
    "problem": "How should Ola send your payment details over public networks without anyone spying on them?",
    "simulationType": "protocols_transport",
    "choices": [
      {
        "id": "A",
        "text": "Use HTTPS (encrypted): scrambles your payment details into secret code so only the Ola server can read it.",
        "isOptimal": true,
        "consequenceText": "Brilliant security! The 'S' in HTTPS stands for Secure (using SSL/TLS encryption). Even if someone intercepts your network packets, all they see is scrambled gibberish! Your card details and wallet remain 100% safe.",
        "statImpact": {
          "latency": "Encrypted & Fast",
          "capacity": "Safe Payments",
          "risk": "Zero Card Thefts",
          "cost": "Protected"
        },
        "whatHappened": {
          "helped": "Enforced end-to-end TLS encryption on all mobile communications.",
          "bottleneck": "Unencrypted HTTP leaves financial data vulnerable to packet sniffing and theft.",
          "reflectionQuestion": "Why would you send a secret letter in a sealed steel locker instead of writing it on a transparent postcard?"
        },
        "successSummary": "Success! You used HTTPS encryption to safeguard passenger credit cards and wallet balances."
      },
      {
        "id": "B",
        "text": "Use unencrypted HTTP and send raw credit card numbers in plain readable text across public Wi-Fi.",
        "isOptimal": false,
        "consequenceText": "Hackers easily intercept the plain text. Thousands of riders have their bank accounts emptied, and Ola faces devastating legal lawsuits.",
        "statImpact": {
          "latency": "Unsecure",
          "capacity": "Stolen Cards",
          "risk": "Catastrophic Breach",
          "cost": "Bankruptcy & Fines"
        },
        "whatHappened": {
          "helped": "Saved a tiny fraction of encryption CPU time.",
          "bottleneck": "Plain text transmission over public networks is an unforgivable security breach.",
          "reflectionQuestion": "Would you shout your bank PIN number out loud in a crowded train station?"
        }
      },
      {
        "id": "C",
        "text": "Stop taking online payments completely and force all riders to pay in gold coins.",
        "isOptimal": false,
        "consequenceText": "Nobody carries gold coins to take an auto rickshaw. Riders cannot pay, and the business collapses immediately.",
        "statImpact": {
          "latency": "Ancient",
          "capacity": "Zero Modern Riders",
          "risk": "Unusable",
          "cost": "Lost Business"
        },
        "whatHappened": {
          "helped": "Avoided modern digital security.",
          "bottleneck": "Modern commerce requires secure digital payment infrastructure.",
          "reflectionQuestion": "How do modern apps accept digital payments securely?"
        }
      }
    ],
    "discovery": {
      "badge": "HTTP vs. HTTPS",
      "tagline": "Protecting user data and passwords with end-to-end encryption",
      "simpleMeaning": "HTTP sends messages in plain readable text. Anyone tapping into the Wi-Fi can read it. HTTPS adds encryption (SSL/TLS), locking your message inside a secret digital code that only your phone and the Ola server have the key to open.",
      "pubgExample": "When you enter your CVV or Ola Money PIN, HTTPS encrypts 'PIN: 4892' into a scrambled string like 'x9#kL!982a'. Even if a hacker intercepts it, they cannot read your PIN.",
      "analogy": "HTTP is like sending a postcard through the mail where any postal worker can read your message. HTTPS is like locking your letter in a tamper-proof titanium safe before mailing it.",
      "howItWorks": [
        "1. TLS Handshake: Phone and Server verify security certificates and agree on a secret encryption key.",
        "2. Encryption on Phone: Rider's payment details are locked using the secret key.",
        "3. Safe Transit: Scrambled data travels safely over mobile networks and public Wi-Fi.",
        "4. Decryption on Server: Only the authentic Ola server unlocks the data and processes the payment."
      ],
      "whyItMatters": "Protects passengers from identity theft, card fraud, and stops malicious actors from tampering with ride prices.",
      "visualExplanation": "HTTP:  [Card: 4521...] ──Plain Text Over Wi-Fi──► Hacker can steal!\nHTTPS: [Card: 4521...] ──Scrambled Secret Code──► 100% Protected!",
      "contrast": {
        "termA": "HTTPS (Secure)",
        "descA": "Encrypted with SSL/TLS; scrambles data so eavesdroppers see only meaningless code.",
        "termB": "HTTP (Unencrypted)",
        "descB": "Sent in open plain text; vulnerable to snooping, man-in-the-middle attacks, and theft."
      },
      "teacherNotes": {
        "concept": "HTTP, HTTPS, SSL/TLS, Symmetric & Asymmetric Encryption, Certificates",
        "experience": "Students learned the critical security difference between plain-text HTTP and encrypted HTTPS.",
        "realWorld": "Google, Ola, Apple, and banks reject all plain HTTP connections and require HTTPS everywhere.",
        "question": "What does the letter 'S' in HTTPS stand for?"
      },
      "olaExample": "When you enter your CVV or Ola Money PIN, HTTPS encrypts 'PIN: 4892' into a scrambled string like 'x9#kL!982a'. Even if a hacker intercepts it, they cannot read your PIN."
    },
    "knowledgeCheck": {
      "question": "What does HTTPS do to protect your payment information when booking a ride on Ola?",
      "options": [
        {
          "id": "A",
          "text": "It encrypts (scrambles) the payment data so eavesdroppers on public Wi-Fi cannot read it.",
          "isCorrect": true,
          "explanation": "Correct! HTTPS encrypts all network traffic, ensuring passwords and credit cards remain completely private."
        },
        {
          "id": "B",
          "text": "It washes the cab so it looks clean upon arrival.",
          "isCorrect": false,
          "explanation": "Incorrect. HTTPS is an internet security protocol, not a car washing service."
        },
        {
          "id": "C",
          "text": "It prevents the cab from getting stuck in red traffic lights.",
          "isCorrect": false,
          "explanation": "Incorrect. HTTPS protects digital data; it cannot control physical street traffic lights."
        }
      ],
      "hint": "Hint: Think about what happens when you lock a message inside a secret code that only the receiver can read."
    }
  },
  {
    "id": 8,
    "stage": 2,
    "sno": 8,
    "topic": "APIs and JSON",
    "concept": "APIs and JSON",
    "title": "Level 8: The Universal Language Between Phone and Server",
    "time": "Afternoon Booking — Indiranagar, Bangalore",
    "usersCount": "Rider Phone Sending Ride Request",
    "topicHint": "APIs (The Messenger) and JSON (The Data Format)",
    "situation": "Your Ola phone app runs on Android (written in Java/Kotlin), while the Ola cloud server runs on Linux (written in Go/Python). They are two totally different computer programs! When your phone requests a cab, how do they understand each other without misunderstanding words?",
    "problem": "What standard messenger and data format allows different devices and servers to talk cleanly?",
    "simulationType": "api_contracts_scanners",
    "choices": [
      {
        "id": "A",
        "text": "Use an API to define the request, and JSON as the simple text format (key: value) both computers understand.",
        "isOptimal": true,
        "consequenceText": "Perfect! An API (Application Programming Interface) is the menu of allowed actions (like /book-ride). JSON (JavaScript Object Notation) is the clean, human-readable format both phones and servers understand: {\"rider\": \"Priya\", \"cab\": \"Mini\", \"fare\": 240}.",
        "statImpact": {
          "latency": "10ms",
          "capacity": "Universal Standard",
          "risk": "Zero Misunderstandings",
          "cost": "Efficient"
        },
        "whatHappened": {
          "helped": "Adopted standard APIs and lightweight JSON data interchange.",
          "bottleneck": "Without standard formats, different programming languages cannot exchange structured data.",
          "reflectionQuestion": "Why do pilots and airport air traffic controllers all speak standard English?"
        },
        "successSummary": "Great work! You connected mobile apps and cloud backends using APIs and JSON."
      },
      {
        "id": "B",
        "text": "Have the phone send random audio voice memos to the server and guess what the rider wants.",
        "isOptimal": false,
        "consequenceText": "Processing voice memos for millions of rides is slow, prone to background noise errors, and overloads server speech models.",
        "statImpact": {
          "latency": "30,000ms Delay",
          "capacity": "Speech Recognition Errors",
          "risk": "Failed Bookings",
          "cost": "Massive Compute"
        },
        "whatHappened": {
          "helped": "Attempted to use informal human voice for machine-to-machine communication.",
          "bottleneck": "Computers need structured, predictable data structures to execute transactions instantly.",
          "reflectionQuestion": "Why do digital forms have labeled fields rather than blank voice notes?"
        }
      },
      {
        "id": "C",
        "text": "Send a handwritten postcard by physical mail every time someone wants to hail an auto.",
        "isOptimal": false,
        "consequenceText": "By the time the physical postcard arrives 3 days later, the passenger has already walked to their destination.",
        "statImpact": {
          "latency": "3 Days",
          "capacity": "0 Rides Today",
          "risk": "Absurd",
          "cost": "Unusable"
        },
        "whatHappened": {
          "helped": "Used physical mail for digital bookings.",
          "bottleneck": "Online ride-hailing requires sub-second digital API messaging.",
          "reflectionQuestion": "How fast should an online ride request take?"
        }
      }
    ],
    "discovery": {
      "badge": "APIs and JSON",
      "tagline": "The digital messenger and data language connecting apps across the world",
      "simpleMeaning": "An API (Application Programming Interface) is like a restaurant waiter that takes your request to the kitchen and brings back the answer. JSON is the simple text language they use to write the order with clear labels and values.",
      "pubgExample": "When you tap 'Book Cab', your app calls the Ola Booking API with this JSON message: {\"pickup\": \"MG Road\", \"drop\": \"Airport\", \"cab_type\": \"Prime\"}. The server replies with: {\"status\": \"confirmed\", \"driver\": \"Ramesh\", \"cab_no\": \"KA01AB1234\"}.",
      "analogy": "Filling out an official form: An API is the submission counter window. JSON is the neatly labeled form with boxes like 'Name: John', 'Destination: Airport', 'Passengers: 2'.",
      "howItWorks": [
        "1. API Endpoint: A dedicated web address like `POST /api/v1/rides/book`.",
        "2. JSON Request Payload: Clean text formatted in curly braces with key-value pairs.",
        "3. Server Processing: The backend server reads the JSON fields in 1 millisecond.",
        "4. JSON Response: The server returns structured status and driver information."
      ],
      "whyItMatters": "Allows iPhones, Android devices, web browsers, and cloud servers built by different companies to exchange information flawlessly.",
      "visualExplanation": "[Rider Phone]\n       │  Sends JSON: {\"action\": \"book\", \"cab\": \"Mini\"}\n       ▼\n[Ola API Server] ──► Validates in 2ms and Returns JSON: {\"status\": \"confirmed\"}",
      "contrast": {
        "termA": "API (The Messenger)",
        "descA": "The defined set of rules and addresses through which apps ask servers for services.",
        "termB": "JSON (The Language)",
        "descB": "Simple, lightweight text format with key-value pairs: {\"driver\": \"Ramesh\", \"eta\": 3}."
      },
      "teacherNotes": {
        "concept": "APIs, JSON, Key-Value Pairs, Payloads, Endpoints, Serialization",
        "experience": "Students learned how frontends and backends communicate using structured JSON over APIs.",
        "realWorld": "Google Maps, Ola, Stripe, and WhatsApp communicate across billions of devices using JSON APIs.",
        "question": "What is the simple text format called that uses curly braces and key-value pairs?"
      },
      "olaExample": "When you tap 'Book Cab', your app calls the Ola Booking API with this JSON message: {\"pickup\": \"MG Road\", \"drop\": \"Airport\", \"cab_type\": \"Prime\"}. The server replies with: {\"status\": \"confirmed\", \"driver\": \"Ramesh\", \"cab_no\": \"KA01AB1234\"}."
    },
    "knowledgeCheck": {
      "question": "What is JSON used for when your phone talks to the Ola cloud server?",
      "options": [
        {
          "id": "A",
          "text": "It is a simple text format with key-value pairs that lets both phone and server understand ride details easily.",
          "isCorrect": true,
          "explanation": "Correct! JSON organizes data with clean labels (like \"fare\": 250) so any computer can read it instantly."
        },
        {
          "id": "B",
          "text": "It is a physical battery charger placed in the back seat of the cab.",
          "isCorrect": false,
          "explanation": "Incorrect. JSON is a software data format, not hardware in a car."
        },
        {
          "id": "C",
          "text": "It is the brand name of the gasoline used by the driver.",
          "isCorrect": false,
          "explanation": "Incorrect. JSON is a computer science data exchange standard, not vehicle fuel."
        }
      ],
      "hint": "Hint: Think about structured text with labels like {\"name\": \"Rahul\", \"rating\": 4.8}."
    }
  },
  {
    "id": 9,
    "stage": 2,
    "sno": 9,
    "topic": "API Design – REST and RESTful Architecture",
    "concept": "API Design – REST and RESTful Architecture",
    "title": "Level 9: Standard Rules for Booking, Tracking, and Cancelling",
    "time": "Evening Architecture Review — Ola HQ",
    "usersCount": "500 Software Developers Building Ola Features",
    "topicHint": "Standard HTTP Methods (GET, POST, PUT, DELETE)",
    "situation": "Ola has hundreds of developers building features for riders, drivers, corporate passes, and rentals. If every developer created random, chaotic names for their buttons (like /doTheCabThing, /fetchCarNow, /cancelItQuick), nobody would understand how the system works and bugs would appear everywhere.",
    "problem": "How do professional engineering teams organize APIs using standard, predictable rules?",
    "simulationType": "api_contracts_scanners",
    "choices": [
      {
        "id": "A",
        "text": "Use REST rules with standard HTTP verbs: GET (fetch rides), POST (book ride), PUT (update location), DELETE (cancel ride).",
        "isOptimal": true,
        "consequenceText": "Brilliant architecture! REST (Representational State Transfer) uses standard, intuitive HTTP verbs: GET to view, POST to create a booking, PUT/PATCH to update driver GPS, and DELETE to cancel a ride. Every developer instantly understands the system!",
        "statImpact": {
          "latency": "Clean & Predictable",
          "capacity": "Easy to Maintain",
          "risk": "Zero Confusion",
          "cost": "Low Bug Count"
        },
        "whatHappened": {
          "helped": "Followed industry-standard RESTful conventions.",
          "bottleneck": "Inventing ad-hoc, inconsistent endpoints leads to spaghetti architecture and endless integration bugs.",
          "reflectionQuestion": "Why do road signs use standard shapes (octagons for STOP) across the entire country?"
        },
        "successSummary": "Masterclass! You used RESTful API design principles with standard HTTP methods."
      },
      {
        "id": "B",
        "text": "Let every developer invent random confusing names like /pleaseGiveMeACabBro and /cancelPleaseNoCharge.",
        "isOptimal": false,
        "consequenceText": "Inconsistent naming creates massive confusion. When the mobile team tries to connect to the backend, features break and bookings fail.",
        "statImpact": {
          "latency": "Chaotic",
          "capacity": "Broken Integrations",
          "risk": "High Bugs",
          "cost": "Wasted Engineering"
        },
        "whatHappened": {
          "helped": "Avoided setting team conventions.",
          "bottleneck": "Lack of standardized API contracts destroys team velocity and system reliability.",
          "reflectionQuestion": "What happens if every player in a football team makes up their own rules during a match?"
        }
      },
      {
        "id": "C",
        "text": "Never create any APIs; force all riders to walk to the Ola headquarters in Bangalore to book a ride.",
        "isOptimal": false,
        "consequenceText": "Nobody will travel 500 kilometers to an office building just to book a 10-minute cab ride across town. The company fails immediately.",
        "statImpact": {
          "latency": "Unusable",
          "capacity": "0 Rides",
          "risk": "Company Dead",
          "cost": "Total Failure"
        },
        "whatHappened": {
          "helped": "Abandoned digital APIs completely.",
          "bottleneck": "Digital businesses require remote, standardized API interfaces.",
          "reflectionQuestion": "Why are remote web APIs essential for smartphone apps?"
        }
      }
    ],
    "discovery": {
      "badge": "RESTful API Design",
      "tagline": "Standardized, intuitive rules for interacting with web resources",
      "simpleMeaning": "REST is a set of clean rules for designing APIs. It treats things in the app (like Rides, Drivers, and Receipts) as 'resources' and uses standard action words (HTTP Verbs): GET (to see), POST (to create), PUT/PATCH (to update), and DELETE (to remove).",
      "pubgExample": "In Ola: `GET /rides/123` (view ride status), `POST /rides` (book a new ride), `PUT /rides/123/location` (update driver GPS), `DELETE /rides/123` (cancel the ride). Simple, clean, and predictable!",
      "analogy": "Standard library operations: You can BROWSE books (GET), DONATE a new book (POST), RENEW a book (PUT), or RETURN/REMOVE a book (DELETE).",
      "howItWorks": [
        "1. Resources as Nouns: Use plural nouns for resources (e.g., `/cabs`, `/riders`, `/rides`).",
        "2. Standard Verbs: Use GET to read, POST to create, PUT to update, DELETE to cancel.",
        "3. Stateless: Each request contains all information needed to process it.",
        "4. Clear Status Codes: Server replies with 200 OK (Success), 201 Created (Booked), 404 (Not Found)."
      ],
      "whyItMatters": "Makes APIs easy for hundreds of engineers and external partners (like Google Maps or payment gateways) to integrate seamlessly.",
      "visualExplanation": "POST   /rides      ──► Creates New Cab Booking (201 Created)\nGET    /rides/123  ──► Fetches Live Driver Location (200 OK)\nDELETE /rides/123  ──► Cancels Booking Safely (200 OK)",
      "contrast": {
        "termA": "RESTful API",
        "descA": "Clean nouns and standard verbs (`POST /rides`, `DELETE /rides/123`); predictable and clear.",
        "termB": "Unstructured API",
        "descB": "Messy, ad-hoc URLs (`/makeRideHappenNow`, `/removeTheCar`); difficult to maintain and debug."
      },
      "teacherNotes": {
        "concept": "REST, HTTP Verbs (GET, POST, PUT, DELETE), Statelessness, HTTP Status Codes (200, 201, 404, 500)",
        "experience": "Students learned how standardized REST conventions organize complex enterprise APIs.",
        "realWorld": "Ola, Uber, GitHub, and Twitter provide RESTful APIs powering thousands of third-party apps.",
        "question": "Which HTTP verb is used in REST to book a brand new cab ride?"
      },
      "olaExample": "In Ola: `GET /rides/123` (view ride status), `POST /rides` (book a new ride), `PUT /rides/123/location` (update driver GPS), `DELETE /rides/123` (cancel the ride). Simple, clean, and predictable!"
    },
    "knowledgeCheck": {
      "question": "In a RESTful API for Ola, which HTTP method should be used when a rider taps 'Book Ride' to create a new booking?",
      "options": [
        {
          "id": "A",
          "text": "POST (used to create a new resource, like creating a new ride booking).",
          "isCorrect": true,
          "explanation": "Correct! In REST architecture, POST is the standard method used to create new resources."
        },
        {
          "id": "B",
          "text": "DELETE (used to delete all records from the server).",
          "isCorrect": false,
          "explanation": "Incorrect. DELETE cancels or removes resources, it does not create a new booking."
        },
        {
          "id": "C",
          "text": "PAINT (used to repaint the cab yellow).",
          "isCorrect": false,
          "explanation": "Incorrect. PAINT is not an HTTP method."
        }
      ],
      "hint": "Hint: Think about which standard HTTP verb is used to create or submit brand new data (POST)."
    }
  },
  {
    "id": 10,
    "stage": 3,
    "sno": 10,
    "topic": "Database Fundamentals – SQL vs. NoSQL",
    "concept": "Database Fundamentals – SQL vs. NoSQL",
    "title": "Level 10: Rider Wallet Balances vs. Live Driver GPS Telemetry",
    "time": "Evening Peak — 10 Million Active Users",
    "usersCount": "10,000,000 Daily Rides & GPS Pings",
    "topicHint": "Structured Tables (SQL) vs. Rapid Flexible Streams (NoSQL)",
    "situation": "Ola needs to store two very different kinds of information. First, rider wallet balances and bank transactions that must always be 100% strictly accurate without losing a single rupee. Second, live GPS coordinates sent by 500,000 moving drivers every 3 seconds, generating billions of temporary location points a day.",
    "problem": "How should Ola choose between a structured SQL database and a flexible high-speed NoSQL database?",
    "simulationType": "database_polyglot",
    "choices": [
      {
        "id": "A",
        "text": "Use SQL for structured wallet balances and payments, and NoSQL for rapid, high-speed driver GPS streams.",
        "isOptimal": true,
        "consequenceText": "Spot on! SQL guarantees financial accuracy in organized tables where every rupee is accounted for. NoSQL handles millions of rapid GPS coordinate streams per second without locking up tables or slowing down the dispatch system!",
        "statImpact": {
          "latency": "30ms",
          "capacity": "10M Rides Safe",
          "risk": "Zero Data Loss",
          "cost": "Optimized"
        },
        "whatHappened": {
          "helped": "Matched the right database tool to the right data workload.",
          "bottleneck": "Using the wrong database either corrupts financial balances or locks up under GPS streams.",
          "reflectionQuestion": "Why do money balances need strict tables while live GPS points prefer write speed?"
        },
        "successSummary": "Perfect choice! You used SQL for structured payments and NoSQL for rapid GPS streams."
      },
      {
        "id": "B",
        "text": "Store all rider bank details and wallet money in an unorganized text file with no safety checks.",
        "isOptimal": false,
        "consequenceText": "Unorganized text files have no transaction safety. When multiple rides finish at once, balances get corrupted, riders lose their money, and complaints flood support.",
        "statImpact": {
          "latency": "Corrupted",
          "capacity": "Lost Money",
          "risk": "Financial Disaster",
          "cost": "Massive Refunds"
        },
        "whatHappened": {
          "helped": "Attempted to use the simplest possible file.",
          "bottleneck": "Flat files cannot safely handle concurrent financial writes.",
          "reflectionQuestion": "What happens if two payments update a text file at the exact same millisecond?"
        }
      },
      {
        "id": "C",
        "text": "Force billions of temporary GPS points into rigid financial tables, locking the entire database.",
        "isOptimal": false,
        "consequenceText": "Rigid relational tables lock up when flooded with billions of GPS writes. The entire Ola system freezes, and nobody can book a ride.",
        "statImpact": {
          "latency": "5,000ms Lag",
          "capacity": "Database Locked",
          "risk": "System Freeze",
          "cost": "High CPU Waste"
        },
        "whatHappened": {
          "helped": "Tried to force all data into one single relational format.",
          "bottleneck": "High-velocity streaming telemetry overloads strict relational row locks.",
          "reflectionQuestion": "Why should temporary live GPS logs be stored differently from permanent money receipts?"
        }
      }
    ],
    "discovery": {
      "badge": "SQL vs. NoSQL",
      "tagline": "Choosing between rigid organized tables and flexible rapid data storage",
      "simpleMeaning": "A database is a digital filing system. SQL databases store data in neat tables with fixed rows and columns (like a spreadsheet with strict rules). NoSQL databases store data in flexible documents without rigid tables, making them super fast for handling massive streams of changing data.",
      "pubgExample": "Ola uses SQL (like PostgreSQL or MySQL) to manage user accounts, wallet balances, and trip invoices where mistakes cannot happen. It uses NoSQL (like Cassandra or MongoDB) to ingest millions of live driver GPS pings every minute.",
      "analogy": "SQL is like a bank vault with numbered safety deposit boxes; NoSQL is like a high-speed conveyor belt where you can drop packages of any shape instantly.",
      "howItWorks": [
        "1. Structured Data (SQL): Uses strict columns like Rider_ID, Phone, Wallet_Balance, Created_At.",
        "2. Streaming Data (NoSQL): Uses flexible documents containing dynamic GPS coordinates and timestamps.",
        "3. Accuracy vs Speed: SQL prioritizes mathematical correctness; NoSQL prioritizes massive write speeds.",
        "4. Polyglot Persistence: Modern companies use both SQL and NoSQL for different jobs."
      ],
      "whyItMatters": "Using the wrong database causes passengers to lose money or causes the app to freeze when millions of cabs stream location data.",
      "visualExplanation": "[Wallet Balances & Receipts] ──► [SQL Database: Strict Rows & Columns]\n[Live Driver GPS Coordinates] ──► [NoSQL Database: High-Speed Stream]",
      "contrast": {
        "termA": "SQL Database",
        "descA": "Strict tables, fixed columns; perfect for rider money, billing, and user profiles.",
        "termB": "NoSQL Database",
        "descB": "Flexible documents, high write speed; perfect for live GPS tracking, telemetry, and chats."
      },
      "teacherNotes": {
        "concept": "SQL, NoSQL, Relational vs Document Storage, Polyglot Persistence",
        "experience": "Students learned how to choose storage based on structure, safety, and speed requirements.",
        "realWorld": "Ola, Uber, and Swiggy use PostgreSQL for billing/ledgers and Cassandra/Redis for live vehicle location streams.",
        "question": "If you are storing a user's bank wallet balance, would you choose SQL or NoSQL?"
      },
      "olaExample": "Ola uses SQL (like PostgreSQL or MySQL) to manage user accounts, wallet balances, and trip invoices where mistakes cannot happen. It uses NoSQL (like Cassandra or MongoDB) to ingest millions of live driver GPS pings every minute."
    },
    "knowledgeCheck": {
      "question": "Which database should Ola use to store user wallet balances and trip payments where data must never have math errors?",
      "options": [
        {
          "id": "A",
          "text": "A SQL database with structured tables and strict transactional safety rules.",
          "isCorrect": true,
          "explanation": "Correct! SQL databases ensure that user balances and purchase records remain completely accurate and protected from errors."
        },
        {
          "id": "B",
          "text": "A temporary notepad document saved on the driver's phone.",
          "isCorrect": false,
          "explanation": "Incorrect. A phone notepad file cannot handle secure central banking and payments."
        },
        {
          "id": "C",
          "text": "No database at all, just guessing wallet balances every time a rider logs in.",
          "isCorrect": false,
          "explanation": "Incorrect. Without a database, user balances would be lost every time the app closes."
        }
      ],
      "hint": "Hint: Think about which database uses strict, organized tables to guarantee financial accuracy."
    }
  },
  {
    "id": 11,
    "stage": 3,
    "sno": 11,
    "topic": "Relational Database Design",
    "concept": "Relational Database Design",
    "title": "Level 11: Linking Drivers, Cabs, Riders, and Trips",
    "time": "Morning Commute — 500,000 Daily Trips",
    "usersCount": "Drivers, Cabs, Riders & Receipts",
    "topicHint": "Organizing Tables with Keys instead of Duplicating Data",
    "situation": "In Ola, every driver has a unique Driver ID. Each driver drives one cab and completes hundreds of trips. If the database copied the driver's full name, phone number, vehicle registration, and home address into every single trip receipt, the database would explode in size and create messy mistakes whenever a driver updates their phone number.",
    "problem": "How should the database organize drivers, cabs, riders, and trips without duplicating data?",
    "simulationType": "database_polyglot",
    "choices": [
      {
        "id": "A",
        "text": "Create separate tables for Drivers, Cabs, and Trips, and link them using unique IDs (keys).",
        "isOptimal": true,
        "consequenceText": "Excellent architecture! By creating separate tables linked with IDs, each driver's info is stored once. If a driver changes their phone number, it updates in one single place, and all 500 of their past trip receipts stay perfectly accurate!",
        "statImpact": {
          "latency": "15ms Lookup",
          "capacity": "Minimal Storage",
          "risk": "Zero Duplication",
          "cost": "Low DB Cost"
        },
        "whatHappened": {
          "helped": "Normalized data into clean, linked relational tables.",
          "bottleneck": "Duplicating text across millions of rows wastes storage and leads to out-of-sync data.",
          "reflectionQuestion": "Why is using a unique Driver ID better than retyping the driver's name on every receipt?"
        },
        "successSummary": "Great job! You designed relational tables with primary and foreign keys to prevent duplication."
      },
      {
        "id": "B",
        "text": "Copy the driver's full name, home address, and vehicle engine number into every single trip row.",
        "isOptimal": false,
        "consequenceText": "If a driver completes 500 trips, their address is duplicated 500 times. If they move to a new house, you must find and update 500 rows, leading to broken data.",
        "statImpact": {
          "latency": "Slow Queries",
          "capacity": "10x Wasted Space",
          "risk": "Out-of-Sync Data",
          "cost": "High Storage"
        },
        "whatHappened": {
          "helped": "Kept all data in one place without thinking about relations.",
          "bottleneck": "Massive data redundancy and update nightmares.",
          "reflectionQuestion": "What happens if an update fails halfway through updating 500 duplicated rows?"
        }
      },
      {
        "id": "C",
        "text": "Delete driver and cab tables completely and store everything as random unlinked numbers.",
        "isOptimal": false,
        "consequenceText": "Without organized tables or relations, the system cannot tell which driver completed which trip, leaving drivers unpaid and riders without receipts.",
        "statImpact": {
          "latency": "Broken",
          "capacity": "Lost Records",
          "risk": "Total Failure",
          "cost": "Unusable"
        },
        "whatHappened": {
          "helped": "Avoided table design completely.",
          "bottleneck": "Data cannot be queried or understood without clear relational structure.",
          "reflectionQuestion": "How does an app know which driver picked you up without a linked record?"
        }
      }
    ],
    "discovery": {
      "badge": "Relational Database Design",
      "tagline": "Organizing data into neat tables connected by unique identification keys",
      "simpleMeaning": "Relational design means organizing information into separate tables (like Drivers, Cabs, Riders, and Trips) and connecting them using unique IDs called keys. This ensures you never have to repeat the same information over and over.",
      "pubgExample": "Instead of writing the driver's name, car color, and license number inside every single trip receipt, the Trips table simply stores `driver_id: 101`. The app looks up the driver's full profile using that ID.",
      "analogy": "A college student ID: The library and exam department only write your Roll Number on book receipts, not your entire home address and parent's names on every paper.",
      "howItWorks": [
        "1. Tables: Create dedicated tables for core entities (Drivers table, Cabs table, Trips table).",
        "2. Primary Key: Give each record a unique identifier (e.g., `driver_id`).",
        "3. Foreign Key: Use that unique ID in other tables to link related records cleanly.",
        "4. Single Source of Truth: Updating a driver's phone number in one table updates what shows everywhere."
      ],
      "whyItMatters": "Saves massive database storage, prevents out-of-sync bugs, and makes running reports fast and reliable.",
      "visualExplanation": "[Drivers Table]\n(ID: 101 | Name: 'Ramesh' | Phone: '98765...')\n       │ (driver_id)\n       ▼\n[Trips Table]\n(Trip: 5001 | driver_id: 101 | Fare: ₹250)\n(Trip: 5002 | driver_id: 101 | Fare: ₹320)",
      "contrast": {
        "termA": "Relational Design (Linked Tables)",
        "descA": "Data stored once in dedicated tables; connected cleanly by unique IDs.",
        "termB": "Flat Duplicated Design",
        "descB": "Every detail copied in every row; wastes storage and causes out-of-sync bugs."
      },
      "teacherNotes": {
        "concept": "Relational Database Design, Tables, Primary Keys, Foreign Keys, Normalization",
        "experience": "Students learned how tables connect using keys instead of copy-pasting information.",
        "realWorld": "Enterprise platforms like Ola, Amazon, and Salesforce rely on normalized relational schemas.",
        "question": "What is the key called that links a trip back to the driver who completed it?"
      },
      "olaExample": "Instead of writing the driver's name, car color, and license number inside every single trip receipt, the Trips table simply stores `driver_id: 101`. The app looks up the driver's full profile using that ID."
    },
    "knowledgeCheck": {
      "question": "Why does Ola link a trip receipt to a driver using their unique 'Driver ID' instead of repeating their entire profile on every receipt?",
      "options": [
        {
          "id": "A",
          "text": "It stores driver info in one place, saves storage, and updates easily if the driver changes their phone number.",
          "isCorrect": true,
          "explanation": "Correct! Relational design links records cleanly by ID so you store data once without messy duplication."
        },
        {
          "id": "B",
          "text": "It makes the cab travel twice as fast through street traffic.",
          "isCorrect": false,
          "explanation": "Incorrect. Database schema design manages data storage, not vehicle speed."
        },
        {
          "id": "C",
          "text": "It forces riders to pay double fare for every trip.",
          "isCorrect": false,
          "explanation": "Incorrect. Linking tables is an engineering best practice, not a fare penalty."
        }
      ],
      "hint": "Hint: Think about what happens if a driver changes their phone number—do you want to update it in 1 place or 1,000 places?"
    }
  },
  {
    "id": 12,
    "stage": 3,
    "sno": 12,
    "topic": "ACID Properties",
    "concept": "ACID Properties",
    "title": "Level 12: Paying ₹350 for a Ride with Ola Money (Zero Lost Money)",
    "time": "Evening Payment — Ride Completed",
    "usersCount": "1,000,000 Daily Wallet Transactions",
    "topicHint": "All-or-Nothing Transactions That Protect User Money",
    "situation": "Your ride ends and the fare is ₹350. You tap 'Pay with Ola Money'. In that exact millisecond, your mobile network drops! The server deducted ₹350 from your wallet, but the network glitch happened before the server could mark the driver's trip as paid. An inexperienced coder says: \"Too bad, the rider lost their ₹350 and the driver got nothing!\"",
    "problem": "How should a reliable database handle payments so money is never lost during a crash?",
    "simulationType": "acid_atomic_vault",
    "choices": [
      {
        "id": "A",
        "text": "Apply ACID rules: either both money is deducted and driver is paid, or the whole transaction cancels and refunds.",
        "isOptimal": true,
        "consequenceText": "Brilliant! This is Atomicity from ACID. A financial transaction is all-or-nothing. If any step fails, the system rolls back so you never lose your ₹350 without the ride being marked as paid!",
        "statImpact": {
          "latency": "Instant",
          "capacity": "100% Trust",
          "risk": "Zero Money Loss",
          "cost": "Protected"
        },
        "whatHappened": {
          "helped": "Treated the payment as an atomic database transaction.",
          "bottleneck": "Executing steps independently leads to money taken without payment credited.",
          "reflectionQuestion": "Why must deducting money and crediting the driver happen as one single atomic unit?"
        },
        "successSummary": "Success! You used ACID properties to protect riders and drivers from lost money and corrupted balances."
      },
      {
        "id": "B",
        "text": "Keep the rider's ₹350 deducted, but never credit the driver because the connection dropped halfway.",
        "isOptimal": false,
        "consequenceText": "Riders and drivers will be furious! Taking money without completing the transaction destroys trust and violates banking laws.",
        "statImpact": {
          "latency": "Broken",
          "capacity": "Angry Users",
          "risk": "Lawsuits & Chargebacks",
          "cost": "Huge Losses"
        },
        "whatHappened": {
          "helped": "Did not roll back the incomplete transaction.",
          "bottleneck": "Partial database operations leave accounts in an invalid state.",
          "reflectionQuestion": "Would you keep using an app that took your money and left your trip unpaid?"
        }
      },
      {
        "id": "C",
        "text": "Give the rider 50 free cab rides whenever their internet connection flickers.",
        "isOptimal": false,
        "consequenceText": "People will exploit this glitch by turning airplane mode on and off, taking millions of free rides and bankrupting the company.",
        "statImpact": {
          "latency": "Exploited",
          "capacity": "Free Ride Abuse",
          "risk": "Massive Revenue Loss",
          "cost": "Bankruptcy"
        },
        "whatHappened": {
          "helped": "Attempted to apologize to the user without proper validation.",
          "bottleneck": "Uncontrolled state generation destroys business finances.",
          "reflectionQuestion": "Why must financial transactions be strictly verified instead of handing out free rides?"
        }
      }
    ],
    "discovery": {
      "badge": "ACID Properties",
      "tagline": "The four unbreakable rules that keep database transactions safe and accurate",
      "simpleMeaning": "ACID stands for four guarantees: Atomicity (All or Nothing: all steps succeed or everything cancels), Consistency (rules are always followed), Isolation (multiple payments don't interfere with each other), and Durability (once saved, it's never lost even if the power cuts).",
      "pubgExample": "When you pay ₹350 for an Ola ride: Atomicity ensures either both ₹350 leaves your wallet AND the driver receives it, or zero money moves. Durability ensures that once payment confirms, it stays recorded even if the server reboots seconds later.",
      "analogy": "An ATM cash withdrawal: The machine either dispenses your ₹500 cash AND updates your bank balance, or if cash jams, it ejects your card and deducts zero rupees.",
      "howItWorks": [
        "1. Atomicity: The payment is treated as one single atomic action (All or Nothing).",
        "2. Consistency: Balances cannot go below zero or violate account rules.",
        "3. Isolation: If two people pay at the same second, each transaction runs cleanly one after the other.",
        "4. Durability: Once the transaction confirms, the record is written to safe permanent disk storage."
      ],
      "whyItMatters": "Without ACID guarantees, network glitches and server crashes would cause riders to lose money or drivers to go unpaid.",
      "visualExplanation": "[Deduct ₹350 from Rider] ──AND──► [Credit ₹350 to Driver]\n              ▲\n              │ (ACID Rule)\n    Both Succeed OR Both Cancel!",
      "contrast": {
        "termA": "ACID Transaction",
        "descA": "All-or-nothing guarantee; protects money and ensures data is never corrupted.",
        "termB": "Non-ACID Steps",
        "descB": "Steps run independently; partial failures take money without completing payments."
      },
      "teacherNotes": {
        "concept": "ACID, Atomicity, Consistency, Isolation, Durability, Rollback",
        "experience": "Students learned why critical state changes must be treated as atomic all-or-nothing transactions.",
        "realWorld": "Payment gateways (UPI, Razorpay, Paytm) and banking apps rely on ACID relational databases.",
        "question": "What does the letter 'A' in ACID stand for, and what does it mean?"
      },
      "olaExample": "When you pay ₹350 for an Ola ride: Atomicity ensures either both ₹350 leaves your wallet AND the driver receives it, or zero money moves. Durability ensures that once payment confirms, it stays recorded even if the server reboots seconds later."
    },
    "knowledgeCheck": {
      "question": "What does 'Atomicity' in ACID guarantee when you pay for an Ola ride with your wallet?",
      "options": [
        {
          "id": "A",
          "text": "The transaction is all-or-nothing: either money is deducted and trip is paid, or everything cancels safely with zero loss.",
          "isCorrect": true,
          "explanation": "Correct! Atomicity means all steps must succeed together, or the entire operation rolls back with zero loss."
        },
        {
          "id": "B",
          "text": "The cab engine uses atomic energy to travel faster.",
          "isCorrect": false,
          "explanation": "Incorrect. Atomicity is a database term about all-or-nothing actions, not vehicle fuel."
        },
        {
          "id": "C",
          "text": "The rider must pay double the fare if they ride after midnight.",
          "isCorrect": false,
          "explanation": "Incorrect. ACID properties protect transactions, they do not add price penalties."
        }
      ],
      "hint": "Hint: Think about 'All-or-Nothing'—you either pay and get the receipt, or get a full refund if it fails."
    }
  },
  {
    "id": 13,
    "stage": 3,
    "sno": 13,
    "topic": "Database Indexing",
    "concept": "Database Indexing",
    "title": "Level 13: Finding a Driver by Mobile Number in 2 Milliseconds",
    "time": "Driver Login — 2,000,000 Registered Drivers",
    "usersCount": "2,000,000 Driver Accounts in India",
    "topicHint": "Fast Lookups Like a Book Index vs. Checking Every Row",
    "situation": "A driver types their 10-digit mobile number to log into the Ola Driver app. Ola has 2,000,000 registered drivers in its database. Without an index, the database has to inspect driver 1, driver 2, driver 3... all the way to 2 million rows. The login screen spins for 30 seconds and times out!",
    "problem": "How can the database locate one specific driver instantly without scanning 2,000,000 records one by one?",
    "simulationType": "database_sharding_ledgers",
    "choices": [
      {
        "id": "A",
        "text": "Create an Index on the Phone_Number column, allowing the database to jump directly to the driver in 2 milliseconds.",
        "isOptimal": true,
        "consequenceText": "Super fast! An index acts like an alphabetical phonebook or book index. Instead of scanning 2 million rows, the database uses the index to jump straight to the driver in just 2 milliseconds!",
        "statImpact": {
          "latency": "2ms Lookup",
          "capacity": "2M Drivers Fast",
          "risk": "Zero Lag",
          "cost": "Tiny Extra Disk"
        },
        "whatHappened": {
          "helped": "Added an index on the frequently searched phone number field.",
          "bottleneck": "Full table scans read every single row on disk, wasting massive time and memory.",
          "reflectionQuestion": "Why does a textbook have an index at the back instead of making you read every page?"
        },
        "successSummary": "Awesome! You added an index to turn a 30-second table scan into a 2-millisecond instant lookup."
      },
      {
        "id": "B",
        "text": "Scan all 2,000,000 driver records row by row from top to bottom every single time someone logs in.",
        "isOptimal": false,
        "consequenceText": "Scanning 2 million records for every login overloads the database hard drives. Logins take half a minute, and the database crashes when 5,000 drivers log in at 8:00 AM.",
        "statImpact": {
          "latency": "30,000ms Lag",
          "capacity": "Disk Overload",
          "risk": "Database Crash",
          "cost": "Wasted Compute"
        },
        "whatHappened": {
          "helped": "Relied on a full table scan without indexing.",
          "bottleneck": "Linear search across 2 million records takes massive I/O time.",
          "reflectionQuestion": "How long would it take to find a name in a telephone directory if names were not in alphabetical order?"
        }
      },
      {
        "id": "C",
        "text": "Ask drivers to register a brand new account every single time they want to log in.",
        "isOptimal": false,
        "consequenceText": "Forcing drivers to re-register deletes their rating, earnings history, and bank links. Drivers will refuse to work for Ola.",
        "statImpact": {
          "latency": "Unusable",
          "capacity": "Lost History",
          "risk": "Driver Revolt",
          "cost": "Total Failure"
        },
        "whatHappened": {
          "helped": "Avoided solving the database lookup problem.",
          "bottleneck": "Unacceptable user experience destroys the entire driver community.",
          "reflectionQuestion": "Can software succeed if it forces users to restart from scratch?"
        }
      }
    ],
    "discovery": {
      "badge": "Database Indexing",
      "tagline": "Creating quick lookup shortcuts to find specific records in milliseconds",
      "simpleMeaning": "An index is a special lookup table created on specific columns (like Phone Number or Driver ID). Instead of reading every single row in the database, the index helps the database jump directly to the exact record you need.",
      "pubgExample": "When a driver enters their phone number on Ola, an index on `phone_number` lets the database locate their car details, rating, and wallet instantly out of 2 million drivers.",
      "analogy": "The index at the back of a 1,000-page book: You look up 'Cab' in the index, see page 142, and flip straight there without reading pages 1 to 141.",
      "howItWorks": [
        "1. Full Table Scan (Slow): Checks every row from start to end; very slow on large databases.",
        "2. Index Structure: Keeps a sorted list of values pointing to their exact disk storage locations.",
        "3. Instant Jump: Uses binary search or B-Trees to locate the target in just a few disk reads.",
        "4. Trade-off: Reads become super fast, but writes take slightly longer because the index must also update."
      ],
      "whyItMatters": "Without indexes, searching for drivers, riders, or booking receipts would take minutes and freeze the app.",
      "visualExplanation": "[Search: '9876543210']\n       │\n       ▼\n[Phone Index: Sorted] ──Jump──► [Row 1,421,809] (Found in 2ms!)",
      "contrast": {
        "termA": "Indexed Lookup",
        "descA": "Jumps directly to target record via sorted lookup tree; takes 2 milliseconds.",
        "termB": "Full Table Scan",
        "descB": "Reads every single row from row 1 to 2,000,000; takes 30 seconds and freezes CPU."
      },
      "teacherNotes": {
        "concept": "Database Indexing, B-Trees, Full Table Scan, Read vs Write Trade-offs",
        "experience": "Students learned why indexes are essential for rapid lookups and how they compare to book indexes.",
        "realWorld": "PostgreSQL, MySQL, and DynamoDB rely on B-Tree and hash indexes for sub-millisecond key lookups.",
        "question": "What is the small trade-off of having an index when you insert a brand-new driver?"
      },
      "olaExample": "When a driver enters their phone number on Ola, an index on `phone_number` lets the database locate their car details, rating, and wallet instantly out of 2 million drivers."
    },
    "knowledgeCheck": {
      "question": "Why does Ola create an index on the Driver Phone Number column in its database?",
      "options": [
        {
          "id": "A",
          "text": "To find and display the driver's profile in milliseconds without scanning millions of rows one by one.",
          "isCorrect": true,
          "explanation": "Correct! An index acts like a book index, jumping directly to the requested record immediately."
        },
        {
          "id": "B",
          "text": "To give the driver a 5-star rating automatically on every trip.",
          "isCorrect": false,
          "explanation": "Incorrect. Database indexes speed up data lookups; they have nothing to do with driver ratings."
        },
        {
          "id": "C",
          "text": "To hide all driver phone numbers so nobody can ever log in.",
          "isCorrect": false,
          "explanation": "Incorrect. Indexes make searching faster, they do not hide data."
        }
      ],
      "hint": "Hint: Think about why a textbook has an index at the back—does it help you find pages faster?"
    }
  },
  {
    "id": 14,
    "stage": 3,
    "sno": 14,
    "topic": "Database Replication",
    "concept": "Database Replication",
    "title": "Level 14: What if the Main Database Server Loses Power?",
    "time": "Friday Night Rush — Mumbai Data Center",
    "usersCount": "500,000 Concurrent Ride Bookings",
    "topicHint": "Keeping Live Backup Copies (Primary & Replicas)",
    "situation": "It is Friday night, the busiest time of the week. Half a million people across India are booking Ola rides. Suddenly, the main database server computer in the Mumbai data center suffers a sudden hardware motherboard blowout! An intern gasps: \"We only had that one single database computer...\"",
    "problem": "How can Ola ensure the app never goes down and trip data is safe when a database server dies?",
    "simulationType": "db_replication_cluster",
    "choices": [
      {
        "id": "A",
        "text": "Use Database Replication to keep exact live copies on backup replica servers that take over instantly.",
        "isOptimal": true,
        "consequenceText": "Lifesaver! With Database Replication, every ride is continuously copied to replica servers. When the Primary crashes, a Replica is automatically promoted to be the new Primary, and riders don't even notice a hiccup!",
        "statImpact": {
          "latency": "25ms",
          "capacity": "Zero Downtime",
          "risk": "Zero Data Loss",
          "cost": "Backup Hardware"
        },
        "whatHappened": {
          "helped": "Maintained continuous live replicas of the database.",
          "bottleneck": "A single point of failure guarantees total collapse when hardware breaks.",
          "reflectionQuestion": "What happens if you have no backup copy and your laptop hard drive breaks?"
        },
        "successSummary": "Outstanding! You set up database replication with automatic failover to prevent total disaster."
      },
      {
        "id": "B",
        "text": "Keep only one single database computer and accept that all rider and driver accounts are wiped out if it crashes.",
        "isOptimal": false,
        "consequenceText": "All driver accounts, trip histories, and wallet balances are lost. The company's reputation is destroyed, and the business faces immediate shutdown.",
        "statImpact": {
          "latency": "Dead",
          "capacity": "0 Rides",
          "risk": "100% Data Loss",
          "cost": "Catastrophic"
        },
        "whatHappened": {
          "helped": "Saved money by buying only one computer.",
          "bottleneck": "Single point of failure leads to irrecoverable data loss.",
          "reflectionQuestion": "Is it worth saving a few dollars if a crash destroys the entire business?"
        }
      },
      {
        "id": "C",
        "text": "Shut down all cab operations in India for two weeks while a technician looks for replacement parts.",
        "isOptimal": false,
        "consequenceText": "Two weeks of downtime causes all riders to switch to competing services. Millions of dollars in revenue are lost while servers sit offline.",
        "statImpact": {
          "latency": "2 Weeks Offline",
          "capacity": "0 Active",
          "risk": "Lost Customers",
          "cost": "Massive Revenue Drop"
        },
        "whatHappened": {
          "helped": "Waited for manual hardware repair.",
          "bottleneck": "Manual repair is far too slow for an active mobility service.",
          "reflectionQuestion": "Why do modern online services need automated instant failover?"
        }
      }
    ],
    "discovery": {
      "badge": "Database Replication",
      "tagline": "Copying data continuously to backup servers for high availability and read sharing",
      "simpleMeaning": "Database Replication means copying data from a main database (called the Primary) to one or more backup databases (called Replicas). If the Primary computer breaks, a Replica immediately steps in so the app keeps running smoothly.",
      "pubgExample": "When a rider completes a trip in Ola, the Primary database saves the receipt and instantly copies it to Replicas in Bangalore and Delhi. If the main server crashes, the backup server takes over in seconds.",
      "analogy": "Keeping a photocopy of your passport in your travel bag: if your original passport is lost, your backup copy keeps you safe.",
      "howItWorks": [
        "1. Primary Server: Handles all writes (new bookings, payments, driver ratings).",
        "2. Replica Servers: Continuously copy changes from the Primary.",
        "3. Read Distribution: Millions of riders checking their past receipts read from Replicas, taking load off the Primary.",
        "4. Automatic Failover: If the Primary dies, a Replica becomes the new Primary within seconds."
      ],
      "whyItMatters": "Protects against hardware crashes, prevents data loss, and lets millions of riders inspect receipts without overloading one server.",
      "visualExplanation": "              [Write: New Trip Receipt]\n                     │\n                     ▼\n            [Primary Database] (Crashes!)\n            ╱                ╲\n   (Syncs) ╱                  ╲ (Syncs)\n          ▼                    ▼\n   [Replica DB 1]       [Replica DB 2] ──Promoted──► New Primary!",
      "contrast": {
        "termA": "Replicated Cluster",
        "descA": "Multiple live database copies; zero downtime and instant failover on crashes.",
        "termB": "Single Database Server",
        "descB": "One computer holds everything; hardware failure causes total shutdown and data loss."
      },
      "teacherNotes": {
        "concept": "Database Replication, Primary/Replica (Master/Slave), High Availability, Failover",
        "experience": "Students learned why critical data must be continuously replicated across independent machines.",
        "realWorld": "AWS Aurora, PostgreSQL, and MySQL clusters use replication for 99.999% availability.",
        "question": "Besides handling crashes, how do replica servers help when millions of riders check their past trips?"
      },
      "olaExample": "When a rider completes a trip in Ola, the Primary database saves the receipt and instantly copies it to Replicas in Bangalore and Delhi. If the main server crashes, the backup server takes over in seconds."
    },
    "knowledgeCheck": {
      "question": "What is the main purpose of Database Replication in a 24/7 app like Ola?",
      "options": [
        {
          "id": "A",
          "text": "To keep live backup copies of the database so the app stays running if the main server fails.",
          "isCorrect": true,
          "explanation": "Correct! Replication ensures continuous backups and instant failover so user data is never lost."
        },
        {
          "id": "B",
          "text": "To make every cab driver fly in an airplane instead of driving on roads.",
          "isCorrect": false,
          "explanation": "Incorrect. Database replication manages data backups, not physical vehicle transport."
        },
        {
          "id": "C",
          "text": "To charge riders double fare every time they book on weekends.",
          "isCorrect": false,
          "explanation": "Incorrect. Replication is about system reliability, not charging riders."
        }
      ],
      "hint": "Hint: Think about what happens when you keep a duplicate backup copy of your school project on a pen drive."
    }
  },
  {
    "id": 15,
    "stage": 3,
    "sno": 15,
    "topic": "Database Partitioning",
    "concept": "Database Partitioning",
    "title": "Level 15: Splitting 50 Million Trip History Receipts by Month & Year",
    "time": "Rider Profile Screen — Trip History",
    "usersCount": "50,000,000 Completed Trips (2022 to 2024)",
    "topicHint": "Dividing One Huge Table into Smaller Manageable Sections",
    "situation": "Over the past 3 years, Ola has accumulated 50,000,000 completed trip receipts in one giant 'Trips' table. When a rider opens their app to view their ride from yesterday, the database takes 25 seconds to crawl through three years of old trips from 2022!",
    "problem": "How can Ola organize this massive 50-million-row table so checking recent trips is lightning fast?",
    "simulationType": "database_sharding_ledgers",
    "choices": [
      {
        "id": "A",
        "text": "Partition the huge table into smaller sections by Year or Month (e.g., Year 2024 table, Year 2023 table).",
        "isOptimal": true,
        "consequenceText": "Smart move! By partitioning the table by year and month, queries for yesterday's ride only search the current month's section. The database skips 45 million old rows entirely, and receipts load in 15 milliseconds!",
        "statImpact": {
          "latency": "15ms History",
          "capacity": "50M Trips Organized",
          "risk": "Zero Sluggishness",
          "cost": "Efficient"
        },
        "whatHappened": {
          "helped": "Partitioned historical trip data by date ranges.",
          "bottleneck": "Searching one monolithic table forces the database to scan millions of irrelevant old years.",
          "reflectionQuestion": "Why should checking yesterday's cab receipt search through trips from 3 years ago?"
        },
        "successSummary": "Great work! You used partitioning to divide a gigantic table into fast, manageable monthly pieces."
      },
      {
        "id": "B",
        "text": "Permanently delete all trip records from previous years so riders can never view their tax receipts.",
        "isOptimal": false,
        "consequenceText": "Riders need past receipts for corporate expense claims and tax filings. Deleting their history causes huge backlash and lost corporate accounts.",
        "statImpact": {
          "latency": "Fast but Empty",
          "capacity": "Lost History",
          "risk": "Upset Riders",
          "cost": "Lost Enterprise Clients"
        },
        "whatHappened": {
          "helped": "Reduced table size by destroying user records.",
          "bottleneck": "Deleting valuable historical data instead of organizing it cleanly.",
          "reflectionQuestion": "Can you make searches fast without deleting user data?"
        }
      },
      {
        "id": "C",
        "text": "Leave all 50 million rows in one giant table and tell riders to wait 25 seconds every time they open trip history.",
        "isOptimal": false,
        "consequenceText": "Riders get annoyed waiting half a minute just to download a receipt. Many riders abandon the app.",
        "statImpact": {
          "latency": "25,000ms Delay",
          "capacity": "Unoptimized Table",
          "risk": "Bad User Experience",
          "cost": "High DB Load"
        },
        "whatHappened": {
          "helped": "Avoided table reorganization.",
          "bottleneck": "Monolithic tables degrade in performance as row counts grow into the tens of millions.",
          "reflectionQuestion": "What happens to search speed as a table grows 10 times bigger?"
        }
      }
    ],
    "discovery": {
      "badge": "Database Partitioning",
      "tagline": "Splitting a giant table into smaller, faster logical sections within the same database",
      "simpleMeaning": "Database Partitioning means dividing a giant table with millions of rows into smaller, organized pieces (called partitions) based on a rule, like Year, Month, or City. The database only searches the relevant partition instead of the whole monster table.",
      "pubgExample": "Ola partitions its trip history table by Year and Month (e.g., Partition 2024_Oct, Partition 2024_Nov). When you view today's ride, the database searches only this month's partition.",
      "analogy": "An office filing cabinet: Instead of dumping 5 years of receipts into one giant pile, you use separate labeled folders for 2022, 2023, and 2024.",
      "howItWorks": [
        "1. Choose a Partition Key: Pick a field like `trip_date` or `year_month`.",
        "2. Divide Data: The database automatically stores records in the matching partition.",
        "3. Partition Pruning: When querying recent rides, the database completely skips old partitions.",
        "4. Easy Archiving: Old years can be archived or compressed without affecting live rides."
      ],
      "whyItMatters": "Keeps query speeds lightning fast even as the app accumulates tens of millions of historical records over years.",
      "visualExplanation": "[Giant Trips Table: 50 Million Rows]\n                   │\n       Divided into Partitions:\n┌──────────────────┼──────────────────┐\n▼                  ▼                  ▼\n[Year 2022]        [Year 2023]        [Year 2024: Current]\n(Skipped)          (Skipped)          (Only Search Here! 15ms)",
      "contrast": {
        "termA": "Partitioned Table",
        "descA": "Divided into monthly folders; queries scan only relevant data in milliseconds.",
        "termB": "Single Monster Table",
        "descB": "All 50M rows in one pile; queries crawl through years of old data and lag."
      },
      "teacherNotes": {
        "concept": "Database Partitioning, Range Partitioning, Partition Pruning, Query Optimization",
        "experience": "Students learned how to organize massive tables by logical boundaries like dates or months.",
        "realWorld": "PostgreSQL, Oracle, and Google BigQuery use range partitioning for fast time-series analysis.",
        "question": "What is the process called where the database skips old partitions during a query?"
      },
      "olaExample": "Ola partitions its trip history table by Year and Month (e.g., Partition 2024_Oct, Partition 2024_Nov). When you view today's ride, the database searches only this month's partition."
    },
    "knowledgeCheck": {
      "question": "How does dividing trip receipts into monthly partitions help an Ola rider checking yesterday's ride?",
      "options": [
        {
          "id": "A",
          "text": "The database only searches the current month's partition, making the receipt load in milliseconds.",
          "isCorrect": true,
          "explanation": "Correct! Partitioning allows the database to ignore millions of old records and search only the relevant month."
        },
        {
          "id": "B",
          "text": "It gives the rider 5 free rides every time they check their history.",
          "isCorrect": false,
          "explanation": "Incorrect. Partitioning speeds up database lookups; it does not alter ride pricing."
        },
        {
          "id": "C",
          "text": "It cancels all other rides in the city automatically.",
          "isCorrect": false,
          "explanation": "Incorrect. Partitioning organizes data storage, it is not a ride cancellation feature."
        }
      ],
      "hint": "Hint: Think about searching through one small folder of today's papers versus searching a warehouse of 3 years of old papers."
    }
  },
  {
    "id": 16,
    "stage": 3,
    "sno": 16,
    "topic": "Database Sharding",
    "concept": "Database Sharding",
    "title": "Level 16: Distributing Driver Data Across City Database Servers",
    "time": "National Expansion — 100 Indian Cities",
    "usersCount": "100,000,000 Nationwide Users across India",
    "topicHint": "Splitting Data Across Multiple Physical Computers",
    "situation": "Ola now operates across 100 cities in India. The total driver and rider profile data is over 150 Terabytes. The engineers bought the biggest, most expensive server computer available on the market, but the database hard drives are 100% full and cannot fit another city!",
    "problem": "What do you do when one single database computer physically cannot hold all the country's drivers and riders?",
    "simulationType": "database_sharding_ledgers",
    "choices": [
      {
        "id": "A",
        "text": "Use Database Sharding to split data across multiple separate database servers (e.g., Shard by City: Delhi, Mumbai, Bangalore).",
        "isOptimal": true,
        "consequenceText": "Brilliant engineering! Sharding splits the data across independent database machines (Server 1 for Delhi, Server 2 for Mumbai, Server 3 for Bangalore). You can now add as many database servers as needed to support every city in India!",
        "statImpact": {
          "latency": "20ms",
          "capacity": "Nationwide Scale",
          "risk": "Zero Hard Drive Limit",
          "cost": "Scalable Fleet"
        },
        "whatHappened": {
          "helped": "Horizontally distributed data across multiple physical database computers.",
          "bottleneck": "Single-node hardware reaches a hard physical limit on disk and RAM.",
          "reflectionQuestion": "Why is spreading work across 5 ordinary servers better than buying 1 impossible super-server?"
        },
        "successSummary": "Awesome! You used database sharding to scale storage horizontally across multiple machines."
      },
      {
        "id": "B",
        "text": "Keep trying to squeeze all 100 cities onto that one computer until the hard drive corrupts and fails.",
        "isOptimal": false,
        "consequenceText": "The hard drive hits 100% capacity and stops accepting writes. Driver registrations fail, trip saves corrupt, and the server crashes nationwide.",
        "statImpact": {
          "latency": "Dead",
          "capacity": "Disk Full",
          "risk": "Data Corruption",
          "cost": "Server Crash"
        },
        "whatHappened": {
          "helped": "Ignored hardware limits.",
          "bottleneck": "Hard drives cannot hold infinite data.",
          "reflectionQuestion": "What happens to your phone if storage reaches 100% and you try to take a 4K video?"
        }
      },
      {
        "id": "C",
        "text": "Ban 50 cities from using Ola to free up disk space on the single machine.",
        "isOptimal": false,
        "consequenceText": "Shutting down Ola in half the country destroys business growth and hands the market to competitors.",
        "statImpact": {
          "latency": "Abandoned",
          "capacity": "50% Market Lost",
          "risk": "Public Outrage",
          "cost": "Huge Revenue Loss"
        },
        "whatHappened": {
          "helped": "Reduced data by throwing away paying customers.",
          "bottleneck": "Engineering failures must be solved with architecture, not by punishing users.",
          "reflectionQuestion": "How should a growing system expand without rejecting users?"
        }
      }
    ],
    "discovery": {
      "badge": "Database Sharding",
      "tagline": "Splitting a massive dataset across multiple separate physical database computers",
      "simpleMeaning": "Sharding means dividing data horizontally across multiple separate database servers (called shards). Each database machine holds a portion of the data (for example, Server A holds Delhi data, Server B holds Mumbai data, Server C holds Bangalore data).",
      "pubgExample": "When a rider in Delhi books a cab, Ola routes the request directly to Database Shard Delhi. When a rider in Mumbai books, it routes to Database Shard Mumbai. Neither server runs out of space.",
      "analogy": "A city library that outgrows its building: The city opens a North Branch for North zone residents and a South Branch for South zone residents.",
      "howItWorks": [
        "1. Shard Key: Pick a field like `city_id` or `user_id` to decide where data lives.",
        "2. Routing Layer: A router checks the City ID and sends queries directly to the correct database computer.",
        "3. Independent Machines: Each shard has its own CPU, RAM, and hard drives.",
        "4. Unlimited Scale: When launching in 20 new cities, simply add Shards 4, 5, and 6!"
      ],
      "whyItMatters": "Allows applications to expand from one city to hundreds of cities without hitting the physical limits of a single computer.",
      "visualExplanation": "                 [Nationwide Ola Traffic]\n                            │\n              ┌─────────────┼─────────────┐\n              ▼             ▼             ▼\n       [Shard: Delhi] [Shard: Mumbai] [Shard: Bangalore]\n        (20TB Disk)    (20TB Disk)     (20TB Disk)",
      "contrast": {
        "termA": "Sharded Database Fleet",
        "descA": "Data split across multiple physical computers; scales horizontally to infinite cities.",
        "termB": "Single Database Server",
        "descB": "All data on one computer; crashes when disk space and memory hit hardware limits."
      },
      "teacherNotes": {
        "concept": "Database Sharding, Horizontal Partitioning, Shard Keys, Routing Layer",
        "experience": "Students learned how to scale beyond single-machine limits by sharding across multiple servers.",
        "realWorld": "Ola, Uber, Discord, and Instagram shard their database clusters by user ID or geographical region.",
        "question": "What is the difference between Partitioning (inside one DB) and Sharding (across multiple DB computers)?"
      },
      "olaExample": "When a rider in Delhi books a cab, Ola routes the request directly to Database Shard Delhi. When a rider in Mumbai books, it routes to Database Shard Mumbai. Neither server runs out of space."
    },
    "knowledgeCheck": {
      "question": "What is the main difference between Database Partitioning and Database Sharding in Ola?",
      "options": [
        {
          "id": "A",
          "text": "Partitioning divides data into sections inside one database computer; Sharding distributes data across multiple separate computers.",
          "isCorrect": true,
          "explanation": "Correct! Partitioning splits tables on a single machine, while Sharding spreads data across multiple physical database servers."
        },
        {
          "id": "B",
          "text": "Partitioning is for autos, while Sharding is for bicycle rentals.",
          "isCorrect": false,
          "explanation": "Incorrect. Both are core database architecture concepts used across all software systems."
        },
        {
          "id": "C",
          "text": "Sharding deletes user data permanently, while Partitioning duplicates it 100 times.",
          "isCorrect": false,
          "explanation": "Incorrect. Sharding safely stores data across different machines without deleting anything."
        }
      ],
      "hint": "Hint: Think about whether you are organizing drawers in one cabinet (partitioning) or buying multiple separate cabinets (sharding)."
    }
  },
  {
    "id": 17,
    "stage": 3,
    "sno": 17,
    "topic": "CAP Theorem",
    "concept": "CAP Theorem",
    "title": "Level 17: When the Telecom Cable Between Delhi and Bangalore Breaks",
    "time": "Monsoon Storms — Inter-City Network Cut",
    "usersCount": "2 Major Regional Data Centers (Delhi & Bangalore)",
    "topicHint": "Consistency vs. Availability During Network Partitions",
    "situation": "Ola has two main database centers: one in Delhi and one in Bangalore. They sync driver wallet balances across both regions. Suddenly, heavy monsoon landslides cut the main fiber optic internet cable between Delhi and Bangalore! A manager demands: \"I want 100% exact instant synchronization AND 100% uninterrupted instant updates in both cities right now!\"",
    "problem": "Under the famous CAP theorem, what trade-off must Ola make when the network connection between two servers is cut?",
    "simulationType": "cap_network_partition",
    "choices": [
      {
        "id": "A",
        "text": "Choose between Consistency (pause wallet updates to prevent mismatched balances) OR Availability (keep rides moving, sync balances later).",
        "isOptimal": true,
        "consequenceText": "Spot on! This is the CAP Theorem. When a network Partition (P) occurs, you MUST choose between Consistency (C) or Availability (A). You cannot physically have both while the cable between the cities is severed!",
        "statImpact": {
          "latency": "Predictable",
          "capacity": "Realistic System",
          "risk": "Understood Trade-off",
          "cost": "Balanced"
        },
        "whatHappened": {
          "helped": "Understood the physical laws of distributed networks.",
          "bottleneck": "Two disconnected computers cannot guarantee identical data while both accept independent writes.",
          "reflectionQuestion": "Why can two friends not keep identical notes if their phone call drops?"
        },
        "successSummary": "Brilliant! You mastered the CAP theorem and recognized that network splits force a trade-off between Consistency and Availability."
      },
      {
        "id": "B",
        "text": "Claim the system can magically guarantee 100% Consistency and 100% Availability simultaneously through a severed cable.",
        "isOptimal": false,
        "consequenceText": "Physics makes this impossible. If Delhi and Bangalore cannot talk, updates made in Delhi cannot appear in Bangalore. Claiming both leads to contradictory records and double spending.",
        "statImpact": {
          "latency": "Impossible",
          "capacity": "Corrupted State",
          "risk": "Contradictory Ledgers",
          "cost": "Financial Loss"
        },
        "whatHappened": {
          "helped": "Ignored the fundamental mathematical law of distributed systems.",
          "bottleneck": "Data cannot travel across a physically severed network line.",
          "reflectionQuestion": "Can information travel between two disconnected islands without a medium?"
        }
      },
      {
        "id": "C",
        "text": "Permanently shut down all cab booking across India whenever any network cable experiences a glitch.",
        "isOptimal": false,
        "consequenceText": "Internet glitches happen regularly. Shutting down all operations every time a cable has an issue would mean Ola is offline dozens of days every year.",
        "statImpact": {
          "latency": "Zero Uptime",
          "capacity": "0 Rides",
          "risk": "Business Dead",
          "cost": "Total Loss"
        },
        "whatHappened": {
          "helped": "Overreacted to a normal network event.",
          "bottleneck": "Systems must be resilient to partial network partitions.",
          "reflectionQuestion": "How should a distributed system react when one network cable cuts?"
        }
      }
    ],
    "discovery": {
      "badge": "CAP Theorem",
      "tagline": "The fundamental trade-off: Consistency vs. Availability during network failures",
      "simpleMeaning": "The CAP theorem states that a distributed system can only guarantee two of three things at the same time: Consistency (every server sees identical data), Availability (every request gets a fast response), and Partition Tolerance (the system handles broken network links). Since cables can always break in the real world, you must choose between Consistency or Availability during a split.",
      "pubgExample": "If the network cable between Delhi and Bangalore breaks, Ola can either pause wallet top-ups until the cable is fixed (Consistency), or let riders keep booking rides and synchronize balances once reconnected (Availability).",
      "analogy": "Two friends taking notes over the phone: If their call drops (Partition), they can either stop writing to stay matched (Consistency) or keep writing independently (Availability), but they cannot do both simultaneously while disconnected.",
      "howItWorks": [
        "1. Consistency (C): Every user reads the exact same data at the same second.",
        "2. Availability (A): The app keeps responding even if some servers are isolated.",
        "3. Partition Tolerance (P): The system continues operating despite network cables breaking.",
        "4. The Rule: In the real world, networks always break (P happens). You must choose C (Consistency) or A (Availability)."
      ],
      "whyItMatters": "Helps engineers make intentional trade-offs: choose strict accuracy for money (CP), or choose continuous uptime for cab matching (AP).",
      "visualExplanation": "                 [Network Cable Snaps!]\n               (Partition Tolerance: P)\n                         │\n         ┌───────────────┴───────────────┐\n         ▼                               ▼\n  Choose CONSISTENCY (C)          Choose AVAILABILITY (A)\n  Pause updates until linked.     Keep cabs moving; sync later.",
      "contrast": {
        "termA": "Consistency (CP System)",
        "descA": "Pauses or rejects requests during a split to prevent mismatched data (e.g., bank payments).",
        "termB": "Availability (AP System)",
        "descB": "Answers every request immediately; synchronizes data differences after the network heals."
      },
      "teacherNotes": {
        "concept": "CAP Theorem, Consistency, Availability, Partition Tolerance, Distributed Trade-offs",
        "experience": "Students learned why distributed systems cannot escape trade-offs when networks fail.",
        "realWorld": "Banking apps choose CP (Consistency) to protect balances; ride booking and social feeds often choose AP (Availability).",
        "question": "If you are designing a casual cab search feature, would you choose Consistency (stop search) or Availability (keep searching)?"
      },
      "olaExample": "If the network cable between Delhi and Bangalore breaks, Ola can either pause wallet top-ups until the cable is fixed (Consistency), or let riders keep booking rides and synchronize balances once reconnected (Availability)."
    },
    "knowledgeCheck": {
      "question": "When an internet cable breaks between two Ola server data centers, what does the CAP theorem state?",
      "options": [
        {
          "id": "A",
          "text": "You must choose between strict Consistency (identical data) or Availability (keeping the system online).",
          "isCorrect": true,
          "explanation": "Correct! When a network partition occurs, a system cannot guarantee both perfect instant consistency and 100% availability."
        },
        {
          "id": "B",
          "text": "All cabs on the road will run out of fuel simultaneously.",
          "isCorrect": false,
          "explanation": "Incorrect. The CAP theorem is a computer science theorem about data trade-offs, not car fuel."
        },
        {
          "id": "C",
          "text": "The app will automatically give every rider free lifetime rides.",
          "isCorrect": false,
          "explanation": "Incorrect. The CAP theorem guides system design choices, not promotional giveaways."
        }
      ],
      "hint": "Hint: Think about C (Consistency) and A (Availability)—when network cables cut, which trade-off must you pick?"
    }
  },
  {
    "id": 18,
    "stage": 3,
    "sno": 18,
    "topic": "OLTP vs. OLAP",
    "concept": "OLTP vs. OLAP",
    "title": "Level 18: Live Ride Dispatch vs. Studying 10 Million Past Trips",
    "time": "Evening Surge — Live Dispatch vs Data Science",
    "usersCount": "50,000 Live Trips vs 10M Historical Trips",
    "topicHint": "Fast Live Transactions (OLTP) vs Deep Analytics Warehouses (OLAP)",
    "situation": "Right now, 50,000 live Ola rides are running across Mumbai, updating driver GPS and meter fares every millisecond. At the exact same time, the pricing data scientist wants to run a massive query across 10,000,000 completed past trips to calculate surge pricing algorithms for the next year. A junior developer runs this giant calculation directly on the live dispatch database!",
    "problem": "What happens when heavy historical analytics queries are run directly on the live dispatch database?",
    "simulationType": "oltp_olap_registers",
    "choices": [
      {
        "id": "A",
        "text": "Keep them separate: use OLTP for fast live ride dispatch, and OLAP (data warehouse) for heavy historical analytics.",
        "isOptimal": true,
        "consequenceText": "Brilliant architecture! OLTP handles fast, small transactions (booking cabs, updating GPS) in real time. OLAP is a separate data warehouse that studies millions of historical trips without slowing down live rides!",
        "statImpact": {
          "latency": "25ms Live / Fast Reports",
          "capacity": "Separate Systems",
          "risk": "Zero Interference",
          "cost": "Well-Balanced"
        },
        "whatHappened": {
          "helped": "Separated operational transactional workloads from analytical workloads.",
          "bottleneck": "Heavy analytical queries lock tables and starve live dispatch transactions of CPU.",
          "reflectionQuestion": "Why should an accountant's yearly tax report not block the cashier scanning groceries?"
        },
        "successSummary": "Perfect! You separated OLTP (live ride transactions) from OLAP (deep analytics warehouse)."
      },
      {
        "id": "B",
        "text": "Run massive analytical queries scanning 10 million past trips directly on the live dispatch server during evening rush.",
        "isOptimal": false,
        "consequenceText": "The analytical query maxes out 100% of the database CPU for 10 minutes. Live bookings freeze, drivers cannot accept rides, and thousands of riders are stranded.",
        "statImpact": {
          "latency": "10,000ms Delay",
          "capacity": "CPU Overheated",
          "risk": "Live Dispatch Crash",
          "cost": "High Revenue Loss"
        },
        "whatHappened": {
          "helped": "Tried to save money by using only one database for everything.",
          "bottleneck": "Heavy scans consume all database resources, stalling fast live transactions.",
          "reflectionQuestion": "What happens if a customer asks the cashier to audit the store's whole year while 50 people wait in line?"
        }
      },
      {
        "id": "C",
        "text": "Never analyze past trips at all, leaving pricing and demand completely unmonitored forever.",
        "isOptimal": false,
        "consequenceText": "Without analytics, Ola cannot predict rush hour demand or plan driver incentives. The business loses money and falls behind competitors.",
        "statImpact": {
          "latency": "Blind Operations",
          "capacity": "Unoptimized Pricing",
          "risk": "Business Decline",
          "cost": "Lost Growth"
        },
        "whatHappened": {
          "helped": "Avoided running analytics entirely.",
          "bottleneck": "Modern mobility companies need data-driven insights to optimize supply and demand.",
          "reflectionQuestion": "How do ride-hailing apps know where more cabs will be needed tomorrow without past data?"
        }
      }
    ],
    "discovery": {
      "badge": "OLTP vs. OLAP",
      "tagline": "Separating fast real-time transactions from heavy historical analytics",
      "simpleMeaning": "OLTP (Online Transaction Processing) is built for fast, everyday actions like booking a cab, updating GPS, or deducting wallet fare. OLAP (Online Analytical Processing) is a separate data warehouse built for analyzing millions of past records to find trends, calculate surge pricing, and plan fleet growth.",
      "pubgExample": "When you book an Ola cab in Bandra, OLTP processes it in 10 milliseconds. Later that night, the Ola planning team uses OLAP to analyze 10 million rides and discover that 40% more cabs are needed at Mumbai Airport on Sunday nights.",
      "analogy": "OLTP is the grocery store cashier scanning milk quickly in 2 seconds; OLAP is the store manager in the back office analyzing sales numbers for the entire year to plan next year's inventory.",
      "howItWorks": [
        "1. OLTP (Operational): Handles fast, simple read/write operations (e.g., Update Ride Status to Completed).",
        "2. Background Sync (ETL): Completed trip data is copied periodically into the OLAP warehouse.",
        "3. OLAP (Analytical): Handles complex queries scanning millions of historical records.",
        "4. Zero Interference: Analysts can run giant queries without causing any lag for active riders.",
        "5. High Reliability: Keeps core ride booking fast and responsive 24/7."
      ],
      "whyItMatters": "Running big data analytics on a live production database causes lag spikes and freezes ride booking for real users.",
      "visualExplanation": "[Live Ride Booking: Tap 'Book'] ──► [OLTP Database: Fast & Instant (10ms)]\n                                              │\n                                     (Copies data overnight)\n                                              ▼\n[Data Scientist: Surge Pricing] ──► [OLAP Warehouse: Analyzes 10M Trips]",
      "contrast": {
        "termA": "OLTP (Transactions)",
        "descA": "Fast, simple operations on current data; keeps live ride booking running with zero lag.",
        "termB": "OLAP (Analytics)",
        "descB": "Complex queries on massive historical data; used for surge pricing and business planning."
      },
      "teacherNotes": {
        "concept": "OLTP, OLAP, Data Warehousing, ETL, Workload Isolation",
        "experience": "Students learned why live transactional operations must be isolated from analytical reporting.",
        "realWorld": "Companies use PostgreSQL/MySQL for OLTP and Snowflake/Google BigQuery/Amazon Redshift for OLAP analytics.",
        "question": "What would happen to live Ola riders if the analytics team ran a 10-minute report on the live database?"
      },
      "olaExample": "When you book an Ola cab in Bandra, OLTP processes it in 10 milliseconds. Later that night, the Ola planning team uses OLAP to analyze 10 million rides and discover that 40% more cabs are needed at Mumbai Airport on Sunday nights."
    },
    "knowledgeCheck": {
      "question": "Which system should Ola use to study passenger travel trends across 10 million past trips to optimize surge pricing?",
      "options": [
        {
          "id": "A",
          "text": "An OLAP data warehouse designed for deep analysis of large amounts of historical data.",
          "isCorrect": true,
          "explanation": "Correct! OLAP systems are built specifically to analyze massive historical datasets without slowing down live operations."
        },
        {
          "id": "B",
          "text": "The live dispatch OLTP database while 50,000 riders are actively booking cabs.",
          "isCorrect": false,
          "explanation": "Incorrect. Running heavy reports on the live OLTP database freezes the app for active riders."
        },
        {
          "id": "C",
          "text": "A driver's personal smartphone memory card.",
          "isCorrect": false,
          "explanation": "Incorrect. A single phone memory card cannot hold or compute 10 million historical trips."
        }
      ],
      "hint": "Hint: Think about which system is designed for Analytical processing of millions of past records (OLAP)."
    }
  },
  {
    "id": 19,
    "stage": 4,
    "sno": 19,
    "topic": "Monolithic vs. Microservices Architecture",
    "concept": "Monolithic vs. Microservices Architecture",
    "title": "Level 19: All Features in One Giant Program vs. Separate Services",
    "time": "System Architecture Review — Ola Tech Hub",
    "usersCount": "Dispatch, Wallet, Driver GPS & Invoices",
    "topicHint": "Single Fragile Program vs. Independent Resilient Services",
    "situation": "All of Ola's systems (Cab Matching, Ola Money Wallet, Driver GPS Tracking, and SMS Invoices) are packed into one giant computer program running on one big server (a Monolith). During Monday morning rush hour, a tiny bug causes the SMS Invoice generator to crash. Because everything is bundled into one program, the crash brings down the entire Ola app, stopping all cab dispatching and leaving riders stranded!",
    "problem": "Should all features run inside one giant program, or be separated into independent microservices?",
    "simulationType": "scaling_cluster_nodes",
    "choices": [
      {
        "id": "A",
        "text": "Use Microservices: split Cab Matching, Wallet, GPS, and Invoices into independent services that don't crash each other.",
        "isOptimal": true,
        "consequenceText": "Brilliant architecture! With Microservices, each feature runs on its own independent server. If the SMS Invoice service glitches, cab matching and wallet payments continue working 100% smoothly, and engineers can fix the SMS service without restarting the whole app!",
        "statImpact": {
          "latency": "25ms",
          "capacity": "Resilient Fleet",
          "risk": "Zero Total Outages",
          "cost": "Well-Organized"
        },
        "whatHappened": {
          "helped": "Isolated failure domains into independent microservices.",
          "bottleneck": "A monolithic program has one single point of failure; one small bug brings down everything.",
          "reflectionQuestion": "Why should a receipt printing glitch not stop drivers from picking up passengers?"
        },
        "successSummary": "Awesome! You separated the monolithic app into independent, resilient microservices."
      },
      {
        "id": "B",
        "text": "Keep everything glued together in one giant program and accept that any tiny bug crashes the entire company.",
        "isOptimal": false,
        "consequenceText": "Whenever any small feature like promo codes or invoice emails has an issue, the entire app crashes for millions of riders across India.",
        "statImpact": {
          "latency": "High Risk",
          "capacity": "Fragile Monolith",
          "risk": "Total Outage",
          "cost": "Frequent Downtime"
        },
        "whatHappened": {
          "helped": "Avoided separating services.",
          "bottleneck": "Tight coupling means all features share the exact same process memory and failure points.",
          "reflectionQuestion": "If your car air conditioner stops working, should the entire engine turn off?"
        }
      },
      {
        "id": "C",
        "text": "Delete driver tracking, invoices, and promo codes so the app only has one single button forever.",
        "isOptimal": false,
        "consequenceText": "Deleting essential features leaves riders blind without GPS tracking or receipts. Riders switch to other ride-hailing services.",
        "statImpact": {
          "latency": "Crippled",
          "capacity": "Stripped Features",
          "risk": "Lost Customers",
          "cost": "Zero Growth"
        },
        "whatHappened": {
          "helped": "Removed features instead of designing resilient architecture.",
          "bottleneck": "Modern applications require rich feature sets with reliable architecture.",
          "reflectionQuestion": "Can a modern ride-hailing app survive without maps, receipts, and live tracking?"
        }
      }
    ],
    "discovery": {
      "badge": "Monolithic vs. Microservices",
      "tagline": "Choosing between one giant combined program and independent mini-services",
      "simpleMeaning": "A Monolith is one single giant computer program that contains every feature (booking, billing, driver tracking, receipts). Microservices splits the application into small, independent services that run on separate computers. If one service has an error, the rest of the app stays online!",
      "pubgExample": "In Ola, the Ride Dispatch service is completely separate from the Promo Code service. If the promo code server gets overloaded during a festival discount, riders can still book cabs and track drivers without interruption.",
      "analogy": "A Swiss Army Knife vs. a Tool Box: If the knife blade breaks on a Swiss Army knife, the whole tool is ruined. In a tool box, if your screwdriver breaks, your hammer and wrench still work fine.",
      "howItWorks": [
        "1. Monolith (Simple Start): Easy to build initially, but hard to maintain as teams and features grow.",
        "2. Independent Deployment: With microservices, the Wallet team can update payments without touching the Map Dispatch code.",
        "3. Fault Isolation: A crash in SMS receipts does not stop riders from hailing cabs.",
        "4. Independent Scaling: When 200,000 riders book at 6:00 PM, scale only the Dispatch service without wasting money on the others."
      ],
      "whyItMatters": "Allows large engineering teams to build, scale, and update different parts of Ola without risking bringing down the entire platform.",
      "visualExplanation": "[Monolith: Everything in 1 Box] ──Bug in Invoices──► Entire Ola App Crashes!\n\n[Microservices Fleet]\n[Cab Dispatch] ──Works!──┐\n[Ola Wallet]   ──Works!──┼──► App stays online even if SMS Service glitches!\n[SMS Service]  ──Reboots ┘",
      "contrast": {
        "termA": "Microservices Architecture",
        "descA": "Separate services per feature; isolated failures, independent scaling, resilient app.",
        "termB": "Monolithic Architecture",
        "descB": "All features bundled in one process; a single bug crashes the entire platform for everyone."
      },
      "teacherNotes": {
        "concept": "Monolithic Architecture, Microservices, Loose Coupling, Fault Isolation",
        "experience": "Students learned why modern systems decompose giant applications into independent services.",
        "realWorld": "Ola, Uber, Netflix, and Amazon transitioned from monoliths to hundreds of microservices for resilience.",
        "question": "What is the main advantage of scaling individual microservices independently?"
      },
      "olaExample": "In Ola, the Ride Dispatch service is completely separate from the Promo Code service. If the promo code server gets overloaded during a festival discount, riders can still book cabs and track drivers without interruption."
    },
    "knowledgeCheck": {
      "question": "Why is Microservices architecture useful for Ola's ride booking and receipt generation features?",
      "options": [
        {
          "id": "A",
          "text": "If the receipt service experiences a crash, live ride booking and cab matching continue running normally.",
          "isCorrect": true,
          "explanation": "Correct! Microservices isolate failures so a problem in one service does not take down the rest of the app."
        },
        {
          "id": "B",
          "text": "It gives every passenger a free helicopter ride to work.",
          "isCorrect": false,
          "explanation": "Incorrect. Microservices are an architectural pattern for server software, not a transportation vehicle."
        },
        {
          "id": "C",
          "text": "It forces all cab drivers to turn off their car engines.",
          "isCorrect": false,
          "explanation": "Incorrect. Microservices keep digital systems running reliably, they do not affect car engines."
        }
      ],
      "hint": "Hint: Think about what happens if one tool in your toolbox breaks—do your other tools keep working?"
    }
  },
  {
    "id": 20,
    "stage": 4,
    "sno": 20,
    "topic": "Authentication and Authorization",
    "concept": "Authentication and Authorization",
    "title": "Level 20: Proving Who You Are vs. What You Are Allowed to Do",
    "time": "Rider Login & Security Gate",
    "usersCount": "Regular Riders vs Customer Support Admins",
    "topicHint": "Who You Are (AuthN) vs. What You Can Do (AuthZ)",
    "situation": "A passenger logs into Ola using their phone number and a 4-digit OTP. They have successfully proven: \"I am Rahul, phone 9876543210.\" Once in the app, Rahul discovers an internal developer URL: 'admin.olacabs.com/issue-refund-10000'. When Rahul clicks it, an unsecure server allows the refund because it thinks: \"Well, Rahul is logged in, so he can do whatever he wants!\"",
    "problem": "What is the critical difference between verifying WHO someone is and checking WHAT they are allowed to do?",
    "simulationType": "auth_identity_verification",
    "choices": [
      {
        "id": "A",
        "text": "Authentication verifies identity (Who are you?); Authorization checks permissions (What are you allowed to do?).",
        "isOptimal": true,
        "consequenceText": "Spot on! Authentication proved Rahul is Rahul via OTP. But Authorization stops Rahul from issuing refunds because his role is 'Regular Rider', not 'Ola Finance Admin'. This keeps the app safe from unauthorized actions!",
        "statImpact": {
          "latency": "Secure Check",
          "capacity": "Strict Roles",
          "risk": "Zero Admin Hacks",
          "cost": "Protected"
        },
        "whatHappened": {
          "helped": "Separated identity verification from role-based permission enforcement.",
          "bottleneck": "Assuming an authenticated user has permission to do everything creates massive security exploits.",
          "reflectionQuestion": "Why should logging in not automatically grant access to admin controls?"
        },
        "successSummary": "Awesome! You enforced proper Authorization to protect administrative controls and user wallets."
      },
      {
        "id": "B",
        "text": "Treat authentication and authorization as the same thing, letting any logged-in rider issue refunds to themselves.",
        "isOptimal": false,
        "consequenceText": "Dishonest users issue millions of rupees in fake refunds to their bank accounts. The company loses all its cash reserves in hours.",
        "statImpact": {
          "latency": "Compromised",
          "capacity": "Fraud Rampant",
          "risk": "Bankruptcy",
          "cost": "Massive Theft"
        },
        "whatHappened": {
          "helped": "Assumed login is all that is required for permissions.",
          "bottleneck": "Lack of authorization checks allows privilege escalation.",
          "reflectionQuestion": "Would a bank let any customer walk into the vault just because they have an ATM card?"
        }
      },
      {
        "id": "C",
        "text": "Remove login completely and let anyone use the app without any phone number or password.",
        "isOptimal": false,
        "consequenceText": "Anyone can impersonate any rider, book cabs under fake names, and steal saved wallet balances. Nobody can use the service safely.",
        "statImpact": {
          "latency": "Lawless",
          "capacity": "Stolen Accounts",
          "risk": "100% Vulnerable",
          "cost": "App Destroyed"
        },
        "whatHappened": {
          "helped": "Removed security to make things easy.",
          "bottleneck": "Online systems require both identity verification and permission control.",
          "reflectionQuestion": "Why does every real-world service require an account and verification?"
        }
      }
    ],
    "discovery": {
      "badge": "Authentication & Authorization",
      "tagline": "Authentication verifies who you are; Authorization decides what you can do",
      "simpleMeaning": "Authentication (AuthN) asks: 'Who are you?' It verifies your identity using credentials like an OTP, password, or fingerprint. Authorization (AuthZ) asks: 'What permissions do you have?' It checks whether your verified role (e.g., Passenger, Driver, Customer Support, Super Admin) is permitted to perform a specific action.",
      "pubgExample": "When you enter your OTP, Ola Authenticates you as 'Rider_Rahul'. When Rahul tries to click 'Refund ₹5,000', the server checks Authorization: if you are a Customer Support Manager, it permits the refund; if you are an ordinary rider, it blocks the button with 'Access Denied'.",
      "analogy": "An airport: Your passport and photo ID Authenticate that you are John. But Authorization checks your boarding pass to see if you can enter the business class lounge, and only authorized pilots can enter the cockpit!",
      "howItWorks": [
        "1. Authentication (AuthN): Rider enters phone number and OTP; server issues a secure session token (JWT).",
        "2. Identity Established: The system now knows exactly which User ID made the request.",
        "3. Authorization (AuthZ): When an action is requested, the server checks the user's role and permissions.",
        "4. Access Decision: If authorized, action completes; if not authorized, server returns HTTP 403 Forbidden."
      ],
      "whyItMatters": "Prevents normal riders from accessing developer tools, issuing fake refunds, or tampering with driver earnings.",
      "visualExplanation": "[Rider Enters OTP] ──► [Authentication (AuthN)] ──► Identity: 'Rider_Rahul'\n                                         │\n[Tries to Issue Refund] ──► [Authorization (AuthZ)] ──► Blocked! (Role: Rider, Not Admin)",
      "contrast": {
        "termA": "Authentication (AuthN)",
        "descA": "Verifies identity ('Who are you?'); uses passwords, OTPs, biometrics, and login tokens.",
        "termB": "Authorization (AuthZ)",
        "descB": "Checks permissions ('What can you do?'); enforces roles (Rider vs Driver vs Support Admin)."
      },
      "teacherNotes": {
        "concept": "Authentication (AuthN), Authorization (AuthZ), RBAC (Role-Based Access Control), Security",
        "experience": "Students learned the vital distinction between verifying identity and granting permission.",
        "realWorld": "OAuth 2.0, JWT tokens, and IAM systems handle AuthN and AuthZ across Ola, Google, and AWS.",
        "question": "If you show your college ID card to enter the campus, is that Authentication or Authorization?"
      },
      "olaExample": "When you enter your OTP, Ola Authenticates you as 'Rider_Rahul'. When Rahul tries to click 'Refund ₹5,000', the server checks Authorization: if you are a Customer Support Manager, it permits the refund; if you are an ordinary rider, it blocks the button with 'Access Denied'."
    },
    "knowledgeCheck": {
      "question": "When Ola checks whether your account has permission to view administrative driver earnings reports, which security step is it performing?",
      "options": [
        {
          "id": "A",
          "text": "Authorization (checking whether your verified account has permission to view internal financial reports).",
          "isCorrect": true,
          "explanation": "Correct! Authorization checks permissions to decide what actions an authenticated user is permitted to do."
        },
        {
          "id": "B",
          "text": "Authentication (asking you to enter an OTP for the first time).",
          "isCorrect": false,
          "explanation": "Incorrect. Authentication verifies who you are, while authorization checks your permissions."
        },
        {
          "id": "C",
          "text": "In-cab air conditioning temperature control.",
          "isCorrect": false,
          "explanation": "Incorrect. Car climate control has nothing to do with software access permissions."
        }
      ],
      "hint": "Hint: The system already knows who you are; it is checking if you have the PERMISSION to view the report."
    }
  },
  {
    "id": 21,
    "stage": 5,
    "sno": 21,
    "topic": "Scalability – Vertical vs. Horizontal Scaling",
    "concept": "Scalability – Vertical vs. Horizontal Scaling",
    "title": "Level 21: Monsoon Rain Rush — Adding 20 Servers vs. 1 Expensive Chip",
    "time": "Heavy Monsoon Storm — Mumbai & Pune",
    "usersCount": "Surge from 10,000 to 300,000 Ride Requests",
    "topicHint": "Upgrading 1 Computer vs. Adding a Team of Computers",
    "situation": "Heavy monsoon rains start in Mumbai. Ride requests suddenly surge from 10,000 to 300,000 in 15 minutes! The main dispatch server computer is running at 99% CPU load and getting red hot. An engineer suggests: \"Let's just keep buying bigger and more expensive RAM and CPU chips for this single computer!\" But the biggest chip on Earth still won't be enough.",
    "problem": "How should Ola scale its dispatch system to handle massive surges in ride requests?",
    "simulationType": "scaling_cluster_nodes",
    "choices": [
      {
        "id": "A",
        "text": "Use Horizontal Scaling: add 20 standard server computers to share the ride booking load as a team.",
        "isOptimal": true,
        "consequenceText": "Spot on! Horizontal Scaling (scaling out) means adding more computers to share the work. There is no limit to how many servers you can add, and if one breaks, the other 19 keep cabs booking smoothly!",
        "statImpact": {
          "latency": "20ms",
          "capacity": "300,000 Smooth",
          "risk": "Zero Single Point of Failure",
          "cost": "Cost-Effective"
        },
        "whatHappened": {
          "helped": "Scaled horizontally by adding standard servers to distribute load.",
          "bottleneck": "Vertical scaling hits hard physical limits, becomes exponentially expensive, and remains a single point of failure.",
          "reflectionQuestion": "Why is hiring 10 normal workers safer than hiring one giant bodybuilder who might get sick?"
        },
        "successSummary": "Great decision! You used horizontal scaling to support 300,000 riders without hardware limits."
      },
      {
        "id": "B",
        "text": "Stick to Vertical Scaling: spend ₹50,00,000 trying to find one giant computer until no bigger parts exist and it crashes.",
        "isOptimal": false,
        "consequenceText": "Single-computer hardware has physical limits. Once you hit the maximum CPU size, you cannot upgrade further. When that single computer crashes, all 300,000 riders lose connection at once.",
        "statImpact": {
          "latency": "Laggy",
          "capacity": "Hardware Ceiling Hit",
          "risk": "Total Single-Point Crash",
          "cost": "Extremely Expensive"
        },
        "whatHappened": {
          "helped": "Upgraded single machine hardware.",
          "bottleneck": "Vertical scaling is limited by physics and costs far more per unit of compute.",
          "reflectionQuestion": "What happens when the fastest processor in the world is still too slow for your traffic?"
        }
      },
      {
        "id": "C",
        "text": "Refuse to let new riders enter the app and lock the server at 10,000 riders forever.",
        "isOptimal": false,
        "consequenceText": "290,000 stranded riders in the rain get 'Service Unavailable' errors. Riders uninstall Ola and book other cabs.",
        "statImpact": {
          "latency": "Locked",
          "capacity": "Capped at 10k",
          "risk": "Massive Customer Churn",
          "cost": "Lost Revenue"
        },
        "whatHappened": {
          "helped": "Avoided scaling by rejecting users.",
          "bottleneck": "Refusing growth destroys business value.",
          "reflectionQuestion": "How should an online business respond when popularity grows?"
        }
      }
    ],
    "discovery": {
      "badge": "Vertical vs. Horizontal Scaling",
      "tagline": "Scaling Up (bigger computer) vs. Scaling Out (more computers working together)",
      "simpleMeaning": "Scalability is the ability of a system to handle more traffic by adding resources. Vertical Scaling ('Scaling Up') means making one computer more powerful by adding faster CPUs and more RAM. Horizontal Scaling ('Scaling Out') means adding more computers to work together as a team.",
      "pubgExample": "When rain starts in Mumbai and ride requests jump from 20,000 to 200,000, Ola automatically spins up 30 new cloud servers (Horizontal Scaling) to share the dispatch load evenly.",
      "analogy": "Moving heavy cargo: Vertical scaling is hiring one bodybuilder (who can still get exhausted or injured). Horizontal scaling is hiring 15 regular movers who easily carry the boxes together.",
      "howItWorks": [
        "1. Vertical Scaling (Scale Up): Fast initially, but hits a hard physical ceiling and becomes very expensive.",
        "2. Horizontal Scaling (Scale Out): Add dozens of standard servers that share the work.",
        "3. Auto-Scaling: Add servers automatically when rain starts, and turn them off at night to save money.",
        "4. High Availability: If 1 out of 30 servers crashes, 29 servers keep running without riders noticing."
      ],
      "whyItMatters": "Horizontal scaling allows Ola to grow from a small startup in one city to a national platform handling millions of rides daily.",
      "visualExplanation": "[Vertical Scaling: 1 Giant Server]\n[Bigger CPU + More RAM] ──► Hits physical hardware limit! (Risky)\n\n[Horizontal Scaling: Fleet of Servers]\n[Server 1] + [Server 2] + [Server 3] + [Server 4] ──► Infinite Growth!",
      "contrast": {
        "termA": "Horizontal Scaling (Scale Out)",
        "descA": "Add more standard computers; virtually unlimited scale, resilient, cost-effective.",
        "termB": "Vertical Scaling (Scale Up)",
        "descB": "Make one computer bigger; hits physical hardware limits, expensive, single point of failure."
      },
      "teacherNotes": {
        "concept": "Scalability, Vertical Scaling (Scale Up), Horizontal Scaling (Scale Out), Auto-Scaling",
        "experience": "Students learned why modern distributed architectures scale horizontally by adding nodes.",
        "realWorld": "Cloud platforms like AWS, GCP, and Azure use horizontal auto-scaling groups for Ola, Swiggy, and Uber.",
        "question": "What happens if you use vertical scaling and that single big computer loses power?"
      },
      "olaExample": "When rain starts in Mumbai and ride requests jump from 20,000 to 200,000, Ola automatically spins up 30 new cloud servers (Horizontal Scaling) to share the dispatch load evenly."
    },
    "knowledgeCheck": {
      "question": "Why does Ola prefer Horizontal Scaling (adding more servers) over Vertical Scaling (buying a bigger server)?",
      "options": [
        {
          "id": "A",
          "text": "You can add as many servers as needed without hardware limits, and if one server crashes, the others keep running.",
          "isCorrect": true,
          "explanation": "Correct! Horizontal scaling offers unlimited expansion and eliminates the single point of failure."
        },
        {
          "id": "B",
          "text": "It makes the physical cab tires last 10 times longer on roads.",
          "isCorrect": false,
          "explanation": "Incorrect. Server scaling manages compute capacity, not physical car tire wear."
        },
        {
          "id": "C",
          "text": "It removes the need for drivers to follow traffic signals.",
          "isCorrect": false,
          "explanation": "Incorrect. Server scaling does not change road traffic laws."
        }
      ],
      "hint": "Hint: Think about teamwork—is it safer to rely on 1 person or a team of 10 people sharing the work?"
    }
  },
  {
    "id": 22,
    "stage": 5,
    "sno": 22,
    "topic": "Load Balancing",
    "concept": "Load Balancing",
    "title": "Level 22: Distributing 100,000 Riders Evenly Across 10 Servers",
    "time": "Evening Rush — 100,000 Booking Requests",
    "usersCount": "100,000 Passengers Queueing Simultaneously",
    "topicHint": "Traffic Director that Shares Incoming Rides Evenly",
    "situation": "At 6:00 PM, 100,000 passengers tap 'Confirm Booking' at the exact same minute. Ola has 10 powerful dispatch servers ready. But there is no traffic director! All 100,000 passengers accidentally connect to Server #1, while Servers #2 through #10 sit completely empty with 0 users! Server #1 catches fire and crashes.",
    "problem": "How can Ola distribute incoming ride requests evenly across all available backend servers?",
    "simulationType": "load_balancer_traffic",
    "choices": [
      {
        "id": "A",
        "text": "Place a Load Balancer in front of the servers to distribute incoming riders evenly across all 10 servers (10,000 each).",
        "isOptimal": true,
        "consequenceText": "Perfect solution! The Load Balancer acts as an intelligent traffic police officer. It inspects server health and distributes ride requests smoothly across all 10 servers. Each server comfortably handles 10,000 riders with zero lag!",
        "statImpact": {
          "latency": "15ms Dispatch",
          "capacity": "100,000 Smooth",
          "risk": "Zero Server Overload",
          "cost": "Even Load"
        },
        "whatHappened": {
          "helped": "Used a Load Balancer to distribute traffic evenly.",
          "bottleneck": "Unbalanced traffic floods one machine while other machines sit idle.",
          "reflectionQuestion": "Why should an Ola load balancer route ride requests to all open dispatch servers?"
        },
        "successSummary": "Brilliant! You placed a load balancer in front of the server fleet to balance traffic evenly."
      },
      {
        "id": "B",
        "text": "Let all 100,000 riders rush directly into Server #1 until it crashes, then tell riders to try again tomorrow.",
        "isOptimal": false,
        "consequenceText": "Server #1 crashes instantly from memory overload. 100,000 riders receive connection errors while 9 other servers sit idle wasting money.",
        "statImpact": {
          "latency": "Crashed",
          "capacity": "Server 1 Overloaded",
          "risk": "100% Failure",
          "cost": "Wasted 9 Idle Servers"
        },
        "whatHappened": {
          "helped": "Did not balance incoming connections.",
          "bottleneck": "A single server cannot handle the entire crowd alone.",
          "reflectionQuestion": "What happens if 1,000 people try to enter a small shop through a single revolving door at once?"
        }
      },
      {
        "id": "C",
        "text": "Turn off servers 2 through 10 so riders have no choice but to wait in a 4-hour queue for Server #1.",
        "isOptimal": false,
        "consequenceText": "Turning off healthy servers makes the bottleneck even worse. Riders face a 4-hour queue just to get a 15-minute cab, and delete the app.",
        "statImpact": {
          "latency": "4-Hour Queue",
          "capacity": "Crippled Fleet",
          "risk": "Customer Exodus",
          "cost": "Unusable"
        },
        "whatHappened": {
          "helped": "Reduced total capacity instead of utilizing it.",
          "bottleneck": "Under-provisioning creates artificial bottlenecks.",
          "reflectionQuestion": "Why would you shut down healthy servers when traffic is high?"
        }
      }
    ],
    "discovery": {
      "badge": "Load Balancing",
      "tagline": "The intelligent traffic cop that distributes incoming requests evenly across servers",
      "simpleMeaning": "A Load Balancer is a software or hardware device that sits between users and backend servers. It acts like a traffic director, distributing incoming requests across multiple servers so no single server gets overwhelmed while others sit empty.",
      "pubgExample": "When 100,000 riders book cabs across Delhi, the Load Balancer routes rider 1 to Server A, rider 2 to Server B, rider 3 to Server C, and so on (Round Robin), keeping all servers fast and healthy.",
      "analogy": "A security guard at a busy bank: Directing people to open cashier counters (Counter 1, Counter 2, Counter 3) so one counter doesn't have 100 people while the other two counters sit idle.",
      "howItWorks": [
        "1. Single Entry Point: All rider apps connect to one clean address (the Load Balancer).",
        "2. Balancing Algorithms: Uses rules like Round Robin (taking turns) or Least Connections (finding the least busy server).",
        "3. Health Checks: Constantly checks server health. If Server #4 crashes, the load balancer stops sending requests there.",
        "4. High Availability: Ensures seamless cab dispatch even during peak festival hours."
      ],
      "whyItMatters": "Without load balancing, multiple servers cannot work together effectively, and traffic spikes crash individual machines.",
      "visualExplanation": "                 [100,000 Riders Booking Cabs]\n                               │\n                               ▼\n                       [Load Balancer]\n            ┌──────────────────┼──────────────────┐\n            ▼                  ▼                  ▼\n       [Server 1]         [Server 2]         [Server 3]\n     (10,000 Rides)     (10,000 Rides)     (10,000 Rides)",
      "contrast": {
        "termA": "Load Balanced Fleet",
        "descA": "Traffic distributed evenly across all healthy servers; optimal performance and zero overload.",
        "termB": "Direct Server Access",
        "descB": "Riders connect to one server directly; one server crashes under traffic while others sit idle."
      },
      "teacherNotes": {
        "concept": "Load Balancing, Reverse Proxy, Round Robin, Health Checks, Least Connections",
        "experience": "Students learned how load balancers act as traffic directors to maximize resource utilization.",
        "realWorld": "Nginx, HAProxy, AWS ALB (Application Load Balancer), and Cloudflare route trillions of web requests daily.",
        "question": "What does a load balancer do if one of the backend servers suddenly dies?"
      },
      "olaExample": "When 100,000 riders book cabs across Delhi, the Load Balancer routes rider 1 to Server A, rider 2 to Server B, rider 3 to Server C, and so on (Round Robin), keeping all servers fast and healthy."
    },
    "knowledgeCheck": {
      "question": "What is the primary job of a Load Balancer in Ola's booking infrastructure?",
      "options": [
        {
          "id": "A",
          "text": "To distribute incoming ride requests evenly across multiple backend servers so no single server gets overwhelmed.",
          "isCorrect": true,
          "explanation": "Correct! A load balancer distributes traffic evenly across healthy servers to prevent overloads and crashes."
        },
        {
          "id": "B",
          "text": "To balance the luggage weight inside the cab's trunk.",
          "isCorrect": false,
          "explanation": "Incorrect. Load balancing is a server networking concept, not physical car luggage weight."
        },
        {
          "id": "C",
          "text": "To steer the cab when the driver takes a sharp turn.",
          "isCorrect": false,
          "explanation": "Incorrect. Load balancers route network traffic, they do not steer physical cars."
        }
      ],
      "hint": "Hint: Think about a traffic police officer directing cars into different open lanes on a highway."
    }
  },
  {
    "id": 23,
    "stage": 5,
    "sno": 23,
    "topic": "Caching",
    "concept": "Caching",
    "title": "Level 23: Fast Driver Profile Loading in 2ms vs 120ms Disk Reads",
    "time": "Driver Match Screen — 5,000,000 Daily Lookups",
    "usersCount": "5,000,000 Rides Matching Drivers",
    "topicHint": "Ultra-Fast RAM Storage for Frequently Read Data",
    "situation": "Every time a rider is matched with a cab, the app displays the driver's name, car model, license plate, and 4.8-star rating. Reading this info from the main database hard drive takes 120 milliseconds. When 5 million riders open the app during evening rush, the database hard drives choke under millions of identical read requests, making the app freeze for 10 seconds!",
    "problem": "How can Ola serve frequently viewed driver profiles in 2 milliseconds instead of hitting slow hard drives every time?",
    "simulationType": "caching_sticky_notepad",
    "choices": [
      {
        "id": "A",
        "text": "Use an in-memory Cache (like Redis) to store frequently requested driver details in ultra-fast RAM memory.",
        "isOptimal": true,
        "consequenceText": "Blazing fast! RAM memory is over 100 times faster than reading from hard drives. The cache serves driver details in just 2 milliseconds, and takes 90% of the read traffic off the database disks!",
        "statImpact": {
          "latency": "2ms Instant",
          "capacity": "5M Lookups Smooth",
          "risk": "Zero DB Overload",
          "cost": "Optimized"
        },
        "whatHappened": {
          "helped": "Cached frequently read driver profile data in high-speed RAM.",
          "bottleneck": "Disk I/O is slow; reading the same data from hard drives millions of times causes severe bottlenecks.",
          "reflectionQuestion": "Why do you keep your favorite pen on your desk instead of walking to the store room every time you write?"
        },
        "successSummary": "Awesome! You introduced in-memory caching to turn 120ms disk reads into 2ms instant responses."
      },
      {
        "id": "B",
        "text": "Force every single ride match to query the slow hard drives directly, letting the database crash under load.",
        "isOptimal": false,
        "consequenceText": "Database hard drives get overwhelmed with millions of disk reads. The app freezes, driver photos show as blank gray boxes, and the database crashes.",
        "statImpact": {
          "latency": "10,000ms Freeze",
          "capacity": "Disk I/O Bottleneck",
          "risk": "Database Crash",
          "cost": "Unusable"
        },
        "whatHappened": {
          "helped": "Did not use temporary fast memory.",
          "bottleneck": "Hard drives have mechanical and physical I/O limits.",
          "reflectionQuestion": "What happens if 1,000 students ask the teacher the exact same question in 10 seconds instead of checking the board?"
        }
      },
      {
        "id": "C",
        "text": "Delete driver ratings and car model names completely so there is no data to load on the screen.",
        "isOptimal": false,
        "consequenceText": "Passengers refuse to board cabs when they cannot verify the driver's name or car license plate for safety. Trust is ruined.",
        "statImpact": {
          "latency": "Bland",
          "capacity": "No Verification",
          "risk": "Safety Complaints",
          "cost": "Lost Trust"
        },
        "whatHappened": {
          "helped": "Removed features to avoid system optimization.",
          "bottleneck": "User experience and safety must be fast, not degraded.",
          "reflectionQuestion": "Can a cab app be safe if you hide the driver's identity from riders?"
        }
      }
    ],
    "discovery": {
      "badge": "Caching",
      "tagline": "Storing popular data in super-fast RAM memory for instant lightning retrieval",
      "simpleMeaning": "A Cache is a temporary high-speed data store kept in computer RAM (Random Access Memory). Because reading from RAM takes less than 2 milliseconds (compared to 100+ milliseconds from disk storage), caching frequently accessed data makes apps feel instant and shields the database from traffic spikes.",
      "pubgExample": "When your Ola cab is assigned, the driver's photo, car model, and 4.8 rating are served straight from an in-memory Redis cache in 2 milliseconds. The main database disk is only touched if the driver's info changes.",
      "analogy": "Keeping your favorite textbook right on your study desk (cache) instead of walking downstairs to the school library basement (database) every time you need to look up a formula.",
      "howItWorks": [
        "1. Cache Hit: Request arrives -> Check fast RAM -> Data found! Return in 2ms.",
        "2. Cache Miss: Request arrives -> Check fast RAM -> Not found -> Fetch from slower database disk -> Save copy in Cache -> Return data.",
        "3. Invalidation (TTL): When a driver updates their phone or rating, the cache updates automatically.",
        "4. Database Protection: Up to 95% of read queries are handled by the cache, keeping the main database relaxed."
      ],
      "whyItMatters": "Caching is the single most effective way to make applications lightning fast and prevent databases from crashing during rush hours.",
      "visualExplanation": "[Rider Matched with Driver]\n         │\n         ▼\n   [Redis Cache: Fast RAM] ──Found! (Cache Hit)──► 2ms Instant Load!\n         │ (If not found)\n         ▼\n   [Main Database: Disk] ──Fetch & Save Copy in Cache──► 120ms",
      "contrast": {
        "termA": "Cached Read (RAM)",
        "descA": "Data retrieved from ultra-fast memory in 2ms; zero database strain.",
        "termB": "Direct Disk Read",
        "descB": "Data read from physical hard drives in 120ms; overloads database disks under heavy traffic."
      },
      "teacherNotes": {
        "concept": "Caching, RAM vs Disk, Cache Hit / Cache Miss, Redis, Memcached, TTL (Time-To-Live)",
        "experience": "Students learned why RAM caching is orders of magnitude faster than disk lookups.",
        "realWorld": "Redis and Memcached power caching for Ola, Twitter, Reddit, and YouTube.",
        "question": "What happens when data is updated in the database? What must happen to the cached copy?"
      },
      "olaExample": "When your Ola cab is assigned, the driver's photo, car model, and 4.8 rating are served straight from an in-memory Redis cache in 2 milliseconds. The main database disk is only touched if the driver's info changes."
    },
    "knowledgeCheck": {
      "question": "How does Caching help the Ola app display driver details in 2 milliseconds instead of lagging?",
      "options": [
        {
          "id": "A",
          "text": "It keeps frequently viewed driver details in ultra-fast RAM memory for instant delivery.",
          "isCorrect": true,
          "explanation": "Correct! RAM is over 100 times faster than hard disk drives, delivering data in just a few milliseconds."
        },
        {
          "id": "B",
          "text": "It forces riders to download the entire Ola app again every time a cab arrives.",
          "isCorrect": false,
          "explanation": "Incorrect. Caching speeds up data retrieval, it does not re-download the app."
        },
        {
          "id": "C",
          "text": "It automatically cancels the ride if the driver takes a wrong turn.",
          "isCorrect": false,
          "explanation": "Incorrect. Caching is a data storage technique, not a ride cancellation rule."
        }
      ],
      "hint": "Hint: Think about why keeping a book on your desk is faster than walking to the library basement."
    }
  },
  {
    "id": 24,
    "stage": 5,
    "sno": 24,
    "topic": "Content Delivery Network (CDN)",
    "concept": "Content Delivery Network (CDN)",
    "title": "Level 24: Downloading Car Icons & Map Tiles Instantly Across India",
    "time": "National App Launch — 50 Million Downloads",
    "usersCount": "50,000,000 Users Downloading Map Tiles & Icons",
    "topicHint": "Worldwide Edge Servers Delivering Large Files Locally",
    "situation": "Ola releases a new app update with high-resolution map tiles, 3D car icons (Auto, Mini, Prime, SUV), and driver profile avatars. The main origin storage server is located in Frankfurt, Germany. A rider in Chennai tries to download the map graphics. The heavy images must travel across 8,000 kilometers and dozens of international network cables, taking 15 seconds to load a simple car icon!",
    "problem": "How can riders all over India download heavy map images, car graphics, and icons in milliseconds?",
    "simulationType": "cdn_edge_kiosks",
    "choices": [
      {
        "id": "A",
        "text": "Use a Content Delivery Network (CDN) to cache image files on local edge servers located right in Chennai, Mumbai, and Delhi.",
        "isOptimal": true,
        "consequenceText": "Lightning fast loading! With a CDN, static images and map tiles are cached on local edge servers near the riders. The Chennai rider downloads the car icons from a local Chennai server in 10 milliseconds with zero lag!",
        "statImpact": {
          "latency": "10ms Local Ping",
          "capacity": "50M Downloads Fast",
          "risk": "Zero Origin Overload",
          "cost": "Bandwidth Optimized"
        },
        "whatHappened": {
          "helped": "Cached large static files at local edge locations near end users.",
          "bottleneck": "Long geographic distances increase latency, packet drops, and transmission time.",
          "reflectionQuestion": "Why buy milk from a local neighborhood store instead of ordering from a dairy farm 8,000 km away?"
        },
        "successSummary": "Brilliant! You deployed a CDN to deliver heavy app assets from local edge servers across the country."
      },
      {
        "id": "B",
        "text": "Force all 50 million riders in India to download every single image directly from that one server in Germany.",
        "isOptimal": false,
        "consequenceText": "50 million users hitting one server in Germany saturates the internet pipes. The server crashes, riders see blank gray squares instead of cars, and complaints explode.",
        "statImpact": {
          "latency": "15-Second Blank Screens",
          "capacity": "Origin Server Fried",
          "risk": "Global Outage",
          "cost": "Massive Overload"
        },
        "whatHappened": {
          "helped": "Did not use edge distribution.",
          "bottleneck": "A single origin server cannot handle global bandwidth demands.",
          "reflectionQuestion": "Can one local post office deliver packages to the entire planet on the same morning?"
        }
      },
      {
        "id": "C",
        "text": "Delete all car images, maps, and icons so riders look at a blank black screen forever.",
        "isOptimal": false,
        "consequenceText": "A cab booking app without maps or car icons looks broken and unusable. Riders delete the app immediately.",
        "statImpact": {
          "latency": "Ugly",
          "capacity": "No Visuals",
          "risk": "Customer Abandonment",
          "cost": "Lost Revenue"
        },
        "whatHappened": {
          "helped": "Gave up on delivering visual content.",
          "bottleneck": "Content delivery is a solved engineering challenge that should be leveraged.",
          "reflectionQuestion": "How do modern streaming and mobility companies deliver media daily?"
        }
      }
    ],
    "discovery": {
      "badge": "Content Delivery Network (CDN)",
      "tagline": "A worldwide network of edge servers bringing heavy content close to the user",
      "simpleMeaning": "A Content Delivery Network (CDN) is a network of servers distributed across different cities (called Edge Servers). When a user downloads static content like map tiles, car icons, banners, or app updates, the CDN serves the file from the geographically closest server, resulting in ultra-fast speeds and low latency.",
      "pubgExample": "When Ola releases new car graphics, the files are uploaded once to the origin server, and the CDN copies them to edge servers in Chennai, Mumbai, Delhi, and Kolkata. An Indian rider downloads the icons in milliseconds from their own city.",
      "analogy": "A local neighborhood grocery warehouse: Instead of traveling 1,000 miles to the manufacturer's factory to buy groceries, you walk down the street to your local neighborhood shop that keeps fresh inventory on hand.",
      "howItWorks": [
        "1. Origin Server: The company uploads new map graphics and car icons to their origin storage.",
        "2. Edge Caching: CDN edge servers across hundreds of cities cache copies of the files.",
        "3. Geo-DNS Routing: When a rider opens the app, the system directs them to the closest physical server.",
        "4. Offload Origin: The central server is protected from millions of direct image download requests."
      ],
      "whyItMatters": "Reduces load times from seconds to milliseconds, saves bandwidth costs, and ensures smooth visuals without crashing central servers.",
      "visualExplanation": "[Origin Server: Frankfurt, Germany]\n       │ (Copies file once)\n       ▼\n┌──────┴──────────────────────────┐\n▼                                 ▼\n[CDN Edge: Chennai]               [CDN Edge: Mumbai]\n       │ (10ms Local Download)           │ (10ms Local Download)\n       ▼                                 ▼\n[Rider in Chennai: Instant!]      [Rider in Mumbai: Instant!]",
      "contrast": {
        "termA": "CDN Edge Delivery",
        "descA": "Files downloaded from local servers nearby; low latency, lightning fast downloads.",
        "termB": "Single Origin Server",
        "descB": "Files travel across oceans; slow downloads, high packet loss, server crashes."
      },
      "teacherNotes": {
        "concept": "Content Delivery Network (CDN), Edge Servers, PoP (Points of Presence), Latency, Bandwidth Offload",
        "experience": "Students learned how CDNs solve geographic distance latency for large media and static files.",
        "realWorld": "Cloudflare, Akamai, and AWS CloudFront power media delivery for Ola, Netflix, YouTube, and Swiggy.",
        "question": "Why is a CDN perfect for map image tiles and car icons, but not for live cab booking matching?"
      },
      "olaExample": "When Ola releases new car graphics, the files are uploaded once to the origin server, and the CDN copies them to edge servers in Chennai, Mumbai, Delhi, and Kolkata. An Indian rider downloads the icons in milliseconds from their own city."
    },
    "knowledgeCheck": {
      "question": "Why does Ola use a Content Delivery Network (CDN) for downloading car icons and map tiles?",
      "options": [
        {
          "id": "A",
          "text": "To deliver heavy files from local edge servers physically close to the rider, making screens load in milliseconds.",
          "isCorrect": true,
          "explanation": "Correct! CDNs cache heavy content at edge locations worldwide, drastically cutting distance and download times."
        },
        {
          "id": "B",
          "text": "To make the physical cab drive without any driver inside.",
          "isCorrect": false,
          "explanation": "Incorrect. CDNs deliver media files over computer networks; they do not control physical car steering."
        },
        {
          "id": "C",
          "text": "To charge riders triple the fare when it rains.",
          "isCorrect": false,
          "explanation": "Incorrect. CDNs are for fast file delivery, not surge pricing algorithms."
        }
      ],
      "hint": "Hint: Think about downloading an image from a server in your own city versus a server on the other side of the planet."
    }
  },
  {
    "id": 25,
    "stage": 6,
    "sno": 25,
    "topic": "Message Queues and Background Processing",
    "concept": "Message Queues and Background Processing",
    "title": "Level 25: Generating Trip Invoices Without Freezing the App",
    "time": "Trip Completion Screen — 'Ride Completed!'",
    "usersCount": "100,000 Rides Finishing Simultaneously",
    "topicHint": "Doing Heavy Tasks in the Background Without Making Users Wait",
    "situation": "Your Ola ride finishes: 'You have reached your destination!' At that exact moment, four heavy tasks must happen: (1) calculate driver commission, (2) generate a PDF invoice, (3) send an email receipt, and (4) send an SMS notification. The current server executes these tasks synchronously, forcing the rider and driver to stare at a frozen loading screen for 20 seconds before they can exit the app!",
    "problem": "How can Ola let riders and drivers exit the app immediately while finishing heavy invoice tasks in the background?",
    "simulationType": "message_queues_async",
    "choices": [
      {
        "id": "A",
        "text": "Use a Message Queue: drop the invoice tasks into a background queue and let riders exit the app immediately.",
        "isOptimal": true,
        "consequenceText": "Smooth and fast! The server drops the 'Trip_Completed' event into a Message Queue (like RabbitMQ or Kafka) in 5 milliseconds and immediately unlocks the app. Dedicated background worker servers generate the PDF invoices and send emails smoothly in the background!",
        "statImpact": {
          "latency": "5ms App Response",
          "capacity": "Zero Lag",
          "risk": "Zero Frozen Screens",
          "cost": "Asynchronous Workers"
        },
        "whatHappened": {
          "helped": "Decoupled user response from heavy background processing using a message queue.",
          "bottleneck": "Synchronous processing blocks the user until every slow sub-task finishes.",
          "reflectionQuestion": "Why does a waiter take your food order ticket to the kitchen and serve the next table instead of cooking the meal himself?"
        },
        "successSummary": "Brilliant! You used a message queue for asynchronous background processing to eliminate rider wait times."
      },
      {
        "id": "B",
        "text": "Keep riders and drivers frozen on the payment screen for 20 seconds until every single email and PDF finishes.",
        "isOptimal": false,
        "consequenceText": "Riders hate staring at a frozen screen when they are in a hurry to catch a flight. Many force-close the app, causing corrupted payment states.",
        "statImpact": {
          "latency": "20,000ms Delay",
          "capacity": "Blocked Connections",
          "risk": "Frustrated Users",
          "cost": "Poor UX"
        },
        "whatHappened": {
          "helped": "Processed tasks sequentially on the main thread.",
          "bottleneck": "Synchronous blocking creates terrible user experiences.",
          "reflectionQuestion": "Would you keep using an app that freezes for half a minute after every ride?"
        }
      },
      {
        "id": "C",
        "text": "Cancel all trip invoices, receipts, and driver commissions completely so the server has zero work to do.",
        "isOptimal": false,
        "consequenceText": "Without invoices, corporate riders cannot claim expenses, and drivers never get their commission records. The business faces legal penalties.",
        "statImpact": {
          "latency": "Lawless",
          "capacity": "No Records",
          "risk": "Tax Violations",
          "cost": "Unusable"
        },
        "whatHappened": {
          "helped": "Avoided computing background work by deleting features.",
          "bottleneck": "Engineering must enable features asynchronously, not remove them.",
          "reflectionQuestion": "Why are invoices and financial receipts legally required for businesses?"
        }
      }
    ],
    "discovery": {
      "badge": "Message Queues & Background Processing",
      "tagline": "Handing off heavy tasks to a background line so users never have to wait",
      "simpleMeaning": "A Message Queue is an ordered buffer (like a to-do list line) that holds tasks. Instead of making a user wait for slow jobs (like generating PDF invoices, sending emails, or calculating commissions) to finish, the main server quickly drops a message into the queue and lets the user go. Background worker computers pick up tasks from the queue and finish them asynchronously.",
      "pubgExample": "When your Ola ride ends, the server drops a 'Generate_Invoice' message into Kafka in 3 milliseconds and immediately shows 'Ride Finished!'. In the background, worker servers format your PDF receipt and email it to you while you walk into your office.",
      "analogy": "A restaurant order ticket: The waiter takes your food order, clips the paper ticket to the kitchen order line (message queue), and immediately walks to the next customer. The chefs in the kitchen (worker servers) cook the meals in the background.",
      "howItWorks": [
        "1. Producer (App Server): Creates a message: 'Process Trip #89421' and pushes it into the queue in 2ms.",
        "2. Instant Response: The rider's phone screen immediately transitions to the rating screen with zero delay.",
        "3. Message Queue (RabbitMQ / Kafka): Safely stores tasks in order until processed.",
        "4. Consumers (Worker Fleet): Background servers pull jobs from the queue and send emails, SMS, and update ledgers."
      ],
      "whyItMatters": "Keeps user interfaces fast and responsive, and buffers traffic spikes safely so servers don't crash under load.",
      "visualExplanation": "[Ride Finishes!] ──Drop Task (2ms)──► [Message Queue: Tasks Waiting in Line]\n       │                                                │\n       ▼                                                ▼\n[Rider Exits App Instantly!]            [Background Worker Computers]\n                                        (Generates PDF, Sends Email)",
      "contrast": {
        "termA": "Asynchronous (Message Queue)",
        "descA": "Task dropped in queue; user gets instant response; workers process in background.",
        "termB": "Synchronous (Blocking)",
        "descB": "User waits on frozen screen until all calculations, PDF generation, and emails complete."
      },
      "teacherNotes": {
        "concept": "Message Queues, Asynchronous Processing, Producers/Consumers, Kafka, RabbitMQ, Decoupling",
        "experience": "Students learned why decoupling time-consuming work improves user experience and system reliability.",
        "realWorld": "Kafka, RabbitMQ, and AWS SQS power asynchronous workflows at Ola, Uber, and Amazon.",
        "question": "What happens to the tasks in a message queue if traffic suddenly triples for 10 minutes?"
      },
      "olaExample": "When your Ola ride ends, the server drops a 'Generate_Invoice' message into Kafka in 3 milliseconds and immediately shows 'Ride Finished!'. In the background, worker servers format your PDF receipt and email it to you while you walk into your office."
    },
    "knowledgeCheck": {
      "question": "What is the primary benefit of using a Message Queue for Ola trip completion tasks?",
      "options": [
        {
          "id": "A",
          "text": "Riders can exit the app immediately while heavy invoice and email generation happens safely in the background.",
          "isCorrect": true,
          "explanation": "Correct! Message queues decouple tasks, keeping user screens fast while workers process jobs asynchronously."
        },
        {
          "id": "B",
          "text": "It guarantees that the rider will get a free ride tomorrow.",
          "isCorrect": false,
          "explanation": "Incorrect. Message queues handle background server tasks, not promotional ride discounts."
        },
        {
          "id": "C",
          "text": "It deletes the driver's bank account after every trip.",
          "isCorrect": false,
          "explanation": "Incorrect. Message queues manage data processing safely without destroying accounts."
        }
      ],
      "hint": "Hint: Think about being handed a token at a bakery—you can sit down while the bakers bake your cake in the back."
    }
  },
  {
    "id": 26,
    "stage": 6,
    "sno": 26,
    "topic": "Fault Tolerance and Failure Handling",
    "concept": "Fault Tolerance and Failure Handling",
    "title": "Level 26: What Happens When a Sub-System Dies Mid-Trip?",
    "time": "Evening Peak — Live Ride in Progress",
    "usersCount": "50,000 Live Trips in Progress",
    "topicHint": "Keeping the System Running Even When Sub-Components Break",
    "situation": "You are sitting inside an Ola cab moving down the highway. In the cloud data center, a third-party SMS marketing server crashes, and one secondary database replica disk overheats. A beginner programmer panics and suggests shutting down the entire Ola app and cancelling all 50,000 active trips on the road!",
    "problem": "How should a robust system behave when individual secondary parts or services fail?",
    "simulationType": "fault_tolerance_resilience",
    "choices": [
      {
        "id": "A",
        "text": "Apply Fault Tolerance: isolate the failed SMS service, degrade gracefully, and let live cab rides continue smoothly.",
        "isOptimal": true,
        "consequenceText": "Masterful engineering! With Fault Tolerance and Graceful Degradation, core ride dispatch and live GPS tracking continue without interruption. The passenger reaches home safely, and the failed background SMS service reboots automatically behind the scenes!",
        "statImpact": {
          "latency": "25ms Smooth Trip",
          "capacity": "Zero Interruption",
          "risk": "High Resilience",
          "cost": "Redundant Design"
        },
        "whatHappened": {
          "helped": "Used graceful degradation and health checks to survive partial failure.",
          "bottleneck": "Treating any single sub-component failure as fatal ruins the entire application.",
          "reflectionQuestion": "If a car's radio stops working, should the car engine shut off on the highway?"
        },
        "successSummary": "Outstanding! You applied fault tolerance principles so active cab rides finished without interruption."
      },
      {
        "id": "B",
        "text": "Cancel all 50,000 active cab rides on the highway immediately because one secondary marketing SMS server died.",
        "isOptimal": false,
        "consequenceText": "Stranding 50,000 passengers on dark highways causes massive panic, police reports, and media fury. The company faces immediate regulatory bans.",
        "statImpact": {
          "latency": "Rides Aborted",
          "capacity": "Massive Outage",
          "risk": "Public Disaster",
          "cost": "Total Brand Ruin"
        },
        "whatHappened": {
          "helped": "Overreacted to a minor sub-system failure.",
          "bottleneck": "Lack of fault isolation allows non-critical failures to bring down critical workloads.",
          "reflectionQuestion": "Why should non-critical services never bring down core transportation?"
        }
      },
      {
        "id": "C",
        "text": "Ignore all errors, turn off crash monitoring, and pretend computer hardware never breaks.",
        "isOptimal": false,
        "consequenceText": "Ignoring errors means broken servers stay broken. Unhandled crashes cascade into other services, eventually leading to a complete system blackout.",
        "statImpact": {
          "latency": "Unmonitored",
          "capacity": "Cascading Outages",
          "risk": "Total Blackout",
          "cost": "Uncontrollable Failure"
        },
        "whatHappened": {
          "helped": "Ignored failure handling completely.",
          "bottleneck": "Uncontained failures cascade across distributed networks.",
          "reflectionQuestion": "What happens if you ignore a warning light on your car dashboard?"
        }
      }
    ],
    "discovery": {
      "badge": "Fault Tolerance & Failure Handling",
      "tagline": "Designing systems to stay alive and functional even when parts break",
      "simpleMeaning": "Fault Tolerance is the ability of a system to keep operating smoothly even when individual hardware or software parts fail. Key techniques include Redundancy (backup servers ready to take over), Graceful Degradation (non-essential features turn off while core features keep running), and Circuit Breakers (stopping cascading errors).",
      "pubgExample": "If Ola's driver review rating service crashes, the app degrades gracefully: riders can still book cabs, track routes, and pay fares 100% smoothly while the review service quietly restarts in the background.",
      "analogy": "A twin-engine passenger airplane: If one engine experiences a failure mid-flight, the plane does not fall out of the sky; it continues flying safely and lands using the second engine.",
      "howItWorks": [
        "1. Expect Failure: Hardware, cables, and disks WILL fail eventually in large systems.",
        "2. Redundancy: Always have standby backup servers ready to take over in seconds.",
        "3. Graceful Degradation: If a secondary feature (like promo codes or SMS) fails, preserve core cab booking.",
        "4. Circuit Breakers: Stop sending requests to a broken service so it has time to recover without crashing others."
      ],
      "whyItMatters": "Ensures the app maintains 99.99% uptime so passengers don't get stranded on roads during server glitches.",
      "visualExplanation": "[Core Cab Dispatch Server] ──► [Smooth Ride Continues! (100% Uptime)]\n                                        │\n[SMS Marketing Server Dies!] ──Degrades Gracefully──► (Skips SMS, but ride completes safely!)",
      "contrast": {
        "termA": "Fault Tolerant System",
        "descA": "Components fail independently; core features remain active; self-healing and redundant.",
        "termB": "Fragile System",
        "descB": "One tiny secondary error cascades and crashes the entire application for all users."
      },
      "teacherNotes": {
        "concept": "Fault Tolerance, High Availability, Graceful Degradation, Circuit Breaker, Redundancy",
        "experience": "Students learned why systems must be architected to survive inevitable component failures.",
        "realWorld": "Netflix built 'Chaos Monkey' to intentionally terminate production servers to prove fault tolerance.",
        "question": "What is 'graceful degradation' and how does it protect the core rider experience?"
      },
      "olaExample": "If Ola's driver review rating service crashes, the app degrades gracefully: riders can still book cabs, track routes, and pay fares 100% smoothly while the review service quietly restarts in the background."
    },
    "knowledgeCheck": {
      "question": "In Ola, which of the following is an example of Fault Tolerance and Graceful Degradation?",
      "options": [
        {
          "id": "A",
          "text": "If the promotional discount service crashes, the core ride booking and live GPS tracking continue working smoothly.",
          "isCorrect": true,
          "explanation": "Correct! Fault tolerance ensures that a secondary failure does not bring down the core transportation experience."
        },
        {
          "id": "B",
          "text": "The cab stops on the highway and refuses to move until a new update is downloaded.",
          "isCorrect": false,
          "explanation": "Incorrect. That would be catastrophic system failure, the exact opposite of fault tolerance."
        },
        {
          "id": "C",
          "text": "The app uninstalls itself from your phone if you hit a traffic bump.",
          "isCorrect": false,
          "explanation": "Incorrect. Road bumps have nothing to do with software fault tolerance."
        }
      ],
      "hint": "Hint: Think about what happens if a reading light on a plane breaks—does the plane keep flying?"
    }
  },
  {
    "id": 27,
    "stage": 6,
    "sno": 27,
    "topic": "Rate Limiting",
    "concept": "Rate Limiting",
    "title": "Level 27: Stopping Bot Scripts from Spamming 10,000 Fake Bookings",
    "time": "Morning Rush — Security Alert",
    "usersCount": "1 Malicious Bot Script vs 500,000 Normal Riders",
    "topicHint": "Limiting Request Speed to Protect Servers from Spam",
    "situation": "A malicious attacker writes an automated computer bot script that sends 10,000 fake ride booking requests and OTP requests every single second to Ola's servers. The dispatch servers get so overwhelmed answering the bot's spam that legitimate passengers trying to book cabs get connection timeouts and cannot go to work!",
    "problem": "How can Ola protect its servers and real passengers from being flooded by spam bots?",
    "simulationType": "rate_limiter_turnstile",
    "choices": [
      {
        "id": "A",
        "text": "Apply Rate Limiting: enforce a limit of 10 requests per minute per user/IP; block or throttle excess bot spam.",
        "isOptimal": true,
        "consequenceText": "Security victory! With Rate Limiting, the bot's spam is instantly blocked with HTTP 429 'Too Many Requests'. The bot is neutralized, server CPU drops back to normal, and real passengers enjoy fast, uninterrupted cab booking!",
        "statImpact": {
          "latency": "20ms Normal",
          "capacity": "Protected Fleet",
          "risk": "Zero Bot Flooding",
          "cost": "Spam Throttled"
        },
        "whatHappened": {
          "helped": "Enforced rate limiting to throttle excessive requests from abusive clients.",
          "bottleneck": "Unconstrained API endpoints allow a single malicious client to consume all server resources.",
          "reflectionQuestion": "Why does a bank ATM limit you to 3 incorrect PIN attempts?"
        },
        "successSummary": "Awesome! You implemented rate limiting to protect dispatch servers from abusive bot attacks."
      },
      {
        "id": "B",
        "text": "Allow the bot to send unlimited requests with no restrictions until server memory fills up and crashes for everyone.",
        "isOptimal": false,
        "consequenceText": "The bot exhausts all server memory and network connections. The booking portal crashes, and 500,000 real riders cannot book cabs.",
        "statImpact": {
          "latency": "Crashed",
          "capacity": "Memory Exhausted",
          "risk": "Denial of Service",
          "cost": "Total Blackout"
        },
        "whatHappened": {
          "helped": "Left endpoints open without limits.",
          "bottleneck": "Unchecked request volume leads to denial of service.",
          "reflectionQuestion": "What happens if 10,000 people try to enter a small shop at the exact same second?"
        }
      },
      {
        "id": "C",
        "text": "Disconnect all human riders from the app so the server can spend 100% of its power answering the bot.",
        "isOptimal": false,
        "consequenceText": "Banning human riders to serve a spam bot completely defeats the purpose of running a business. All riders leave permanently.",
        "statImpact": {
          "latency": "Absurd",
          "capacity": "Zero Real Users",
          "risk": "Business Destroyed",
          "cost": "Total Failure"
        },
        "whatHappened": {
          "helped": "Sacrificed users to satisfy an attacker.",
          "bottleneck": "Systems exist to serve legitimate users, not attackers.",
          "reflectionQuestion": "Why would an online service prioritize bots over real paying passengers?"
        }
      }
    ],
    "discovery": {
      "badge": "Rate Limiting",
      "tagline": "Controlling the speed of incoming requests to protect servers from spam and attacks",
      "simpleMeaning": "Rate Limiting means setting a maximum number of requests a user, IP address, or device can make in a given time period (for example, maximum 10 requests per minute). If a script or bot sends requests faster than the limit, the server temporarily blocks them with an HTTP 429 'Too Many Requests' response.",
      "pubgExample": "If an attacker tries to spam the 'Send OTP' or 'Book Cab' button 5,000 times a minute using a bot, Ola's Rate Limiter allows the first few requests and immediately blocks the rest, protecting the server for real riders.",
      "analogy": "A security bouncer at a popular club entrance: The bouncer allows 5 people through the door per minute so the dance floor doesn't get dangerously crushed.",
      "howItWorks": [
        "1. Set Threshold: Define a safe limit (e.g., 5 booking requests per minute per phone number).",
        "2. Token Bucket Algorithm: Tracks incoming request tokens in fast memory.",
        "3. Allow Normal Traffic: Real passengers tapping naturally never hit the limit.",
        "4. Throttle Abuse: Bots sending hundreds of requests per second are blocked with HTTP 429."
      ],
      "whyItMatters": "Protects systems against Denial of Service (DoS) attacks, brute-force OTP guessing, and runaway bugs that flood servers.",
      "visualExplanation": "[Real Rider: 1 Req/Min] ─────Allowed!───► [Ola Server: Healthy (20ms)]\n[Bot Script: 5,000 Req/Sec] ──Blocked!───► [Rate Limiter (HTTP 429 Too Many Requests)]",
      "contrast": {
        "termA": "Rate Limited API",
        "descA": "Restricts request frequency per user/IP; shields servers from spam bots and DDoS attacks.",
        "termB": "Unprotected API",
        "descB": "Accepts unlimited requests; a single spam script can exhaust server memory and crash the app."
      },
      "teacherNotes": {
        "concept": "Rate Limiting, DoS/DDoS Mitigation, Token Bucket, Leaky Bucket, HTTP 429",
        "experience": "Students learned why rate limiting is essential to preserve server availability under malicious spam.",
        "realWorld": "Cloudflare, Ola, Twitter, and payment gateways enforce strict rate limits per IP and API key.",
        "question": "What is the standard HTTP error status code returned when a rate limit is exceeded?"
      },
      "olaExample": "If an attacker tries to spam the 'Send OTP' or 'Book Cab' button 5,000 times a minute using a bot, Ola's Rate Limiter allows the first few requests and immediately blocks the rest, protecting the server for real riders."
    },
    "knowledgeCheck": {
      "question": "Why does Ola enforce Rate Limiting on ride booking and OTP verification requests?",
      "options": [
        {
          "id": "A",
          "text": "To prevent spam bots and malicious scripts from flooding the servers and crashing the app for real riders.",
          "isCorrect": true,
          "explanation": "Correct! Rate limiting caps request volume so malicious scripts cannot overwhelm and crash the backend."
        },
        {
          "id": "B",
          "text": "To limit drivers to driving only 10 kilometers per day.",
          "isCorrect": false,
          "explanation": "Incorrect. Rate limiting is a server network protection tool, not a limit on car driving distance."
        },
        {
          "id": "C",
          "text": "To force riders to delete their account after 5 minutes.",
          "isCorrect": false,
          "explanation": "Incorrect. Rate limiting protects servers so riders can book rides safely."
        }
      ],
      "hint": "Hint: Think about why a club bouncer limits how many people can enter at once."
    }
  },
  {
    "id": 28,
    "stage": 7,
    "sno": 28,
    "topic": "Geospatial Search and Indexing",
    "concept": "Geospatial Search and Indexing",
    "title": "Level 28: Matching the Nearest Available Cab Within 2 Kilometers",
    "time": "Live Ride Search — Koramangala 5th Block",
    "usersCount": "100,000 Moving Cabs in City",
    "topicHint": "Finding Nearest Locations Fast Using Spatial Grids (Geohash / QuadTree)",
    "situation": "A rider stands outside a cafe in Bangalore and taps 'Book Cab'. There are 100,000 active cabs driving across the entire state of Karnataka. Calculating mathematical distance (using square roots and latitude/longitude math) between this rider and all 100,000 moving cars takes 8 seconds of heavy CPU calculation on the server, causing dispatch to lag!",
    "problem": "How can Ola locate the closest available cabs within 2 kilometers in 5 milliseconds without checking all 100,000 cars?",
    "simulationType": "geospatial_spatial_indexing",
    "choices": [
      {
        "id": "A",
        "text": "Use Geospatial Indexing (like Geohash or QuadTrees) to divide the city map into grid boxes and search only the rider's local box.",
        "isOptimal": true,
        "consequenceText": "Brilliant! Geospatial Indexing divides the world map into numbered grid boxes (like Geohashes or Google S2 cells). Instead of calculating distance to 100,000 cars across the state, the server queries only the 15 cabs inside the rider's local 2km grid box in just 4 milliseconds!",
        "statImpact": {
          "latency": "4ms Instant Match",
          "capacity": "100,000 Cabs Scaled",
          "risk": "Zero Dispatch Lag",
          "cost": "Optimized Routing"
        },
        "whatHappened": {
          "helped": "Indexed geographic coordinates into spatial grids for instant nearest-neighbor lookups.",
          "bottleneck": "Calculating trigonometric distances across 100,000 moving points in real time melts server CPUs.",
          "reflectionQuestion": "Why does a postal system use PIN codes instead of measuring distance between every house?"
        },
        "successSummary": "Masterclass! You used geospatial indexing to match nearby cabs in single-digit milliseconds."
      },
      {
        "id": "B",
        "text": "Calculate distance by measuring distance to every single car in India, including cabs 2,000 km away in Kashmir.",
        "isOptimal": false,
        "consequenceText": "Calculating distance across hundreds of thousands of irrelevant cars freezes the server CPU. Ride searches take 20 seconds, and the server crashes.",
        "statImpact": {
          "latency": "20-Second Freeze",
          "capacity": "CPU Melted",
          "risk": "Dispatch Crash",
          "cost": "Massive Compute Waste"
        },
        "whatHappened": {
          "helped": "Used brute-force distance math without spatial indexing.",
          "bottleneck": "Linear geometric distance calculations fail at scale.",
          "reflectionQuestion": "Why would a rider in Bangalore care about cars in Kashmir?"
        }
      },
      {
        "id": "C",
        "text": "Assign a random cab from another state, sending a driver 800 km away to pick up the rider.",
        "isOptimal": false,
        "consequenceText": "The app tells the rider: 'Your cab is arriving in 16 hours from Hyderabad.' The passenger cancels in disbelief and uninstalls the app.",
        "statImpact": {
          "latency": "16 Hours ETA",
          "capacity": "Absurd Dispatch",
          "risk": "Total Brand Ruin",
          "cost": "Unusable"
        },
        "whatHappened": {
          "helped": "Ignored geographic proximity.",
          "bottleneck": "Ride-hailing requires tight geographical proximity matching.",
          "reflectionQuestion": "How close should a cab be when assigned to a rider?"
        }
      }
    ],
    "discovery": {
      "badge": "Geospatial Search and Indexing",
      "tagline": "Organizing geographic coordinates into spatial grids for instant nearby lookups",
      "simpleMeaning": "Geospatial Indexing is a way of organizing latitude and longitude coordinates into fast lookup structures (like Geohashes, QuadTrees, or Google S2 cells). Instead of calculating distances to every car on Earth, the system divides the world into grid cells so it can find nearest drivers in single-digit milliseconds.",
      "pubgExample": "When you tap 'Book Auto' in Indiranagar, Ola converts your GPS coordinates into a quick Geohash grid box (e.g. `tdr1v9`). The database checks only the cabs currently located inside that same grid box and assigns driver Ramesh in 3 milliseconds.",
      "analogy": "Postal PIN Codes: Instead of a postman measuring the physical distance from his office to every house in the country, letters are sorted by Postal PIN Code (e.g., 560034) so only local delivery hubs handle local houses.",
      "howItWorks": [
        "1. Spatial Grid: The Earth's surface is divided into a hierarchical grid of cells (like Geohash strings).",
        "2. Fast Prefix Matching: Nearby locations share the exact same starting prefix characters (e.g., `tdr1v*`).",
        "3. Instant Nearest Neighbor: The system queries only cabs inside the rider's immediate and 8 adjacent neighbor grid cells.",
        "4. Single-Digit Milliseconds: Dispatches the closest cab in 4 milliseconds, keeping battery usage low and response instant."
      ],
      "whyItMatters": "Powers proximity matching in ride-hailing apps (Ola, Uber), food delivery (Swiggy, Zomato), quick commerce (Blinkit, Zepto), and maps.",
      "visualExplanation": "[Rider at Lat 12.97, Long 77.59] ──► [Maps to Geohash: 'tdr1v']\n                                               │\n┌──────────────────────────────────────────────┴──────────────────────────────────────────────┐\n▼                                                                                             ▼\n[Search inside 'tdr1v' Grid: 12 Local Cabs (4ms)]                              [Skip 99,988 Cabs Elsewhere!]\nNearest Cab Found: Driver Ramesh (3 Mins Away!)",
      "contrast": {
        "termA": "Geospatially Indexed Search",
        "descA": "Divides map into spatial grid cells; nearest cabs found in 4 milliseconds; low CPU usage.",
        "termB": "Brute-Force Coordinate Math",
        "descB": "Calculates trigonometric distance across 100,000 cars; melts CPU and freezes booking."
      },
      "teacherNotes": {
        "concept": "Geospatial Indexing, Geohash, QuadTrees, Google S2, Spatial Databases (PostGIS, Redis GEO)",
        "experience": "Students learned how spatial indexes solve location-based search without brute-force math.",
        "realWorld": "Ola, Uber, and Swiggy rely on Redis GEO and Google S2 to match millions of drivers and orders every second.",
        "question": "Why is dividing a map into grid cells faster than calculating distance to every single coordinate?"
      },
      "olaExample": "When you tap 'Book Auto' in Indiranagar, Ola converts your GPS coordinates into a quick Geohash grid box (e.g. `tdr1v9`). The database checks only the cabs currently located inside that same grid box and assigns driver Ramesh in 3 milliseconds."
    },
    "knowledgeCheck": {
      "question": "How does Geospatial Indexing help the Ola app assign the closest cab in just 4 milliseconds?",
      "options": [
        {
          "id": "A",
          "text": "It divides the map into spatial grid boxes so the server only searches cabs inside the rider's local neighborhood grid.",
          "isCorrect": true,
          "explanation": "Correct! Geospatial indexing bounds queries to local grid boxes, finding nearest drivers in milliseconds."
        },
        {
          "id": "B",
          "text": "It teleports the cab through a magical wormhole into the rider's living room.",
          "isCorrect": false,
          "explanation": "Incorrect. Geospatial indexing routes data over servers; it does not teleport physical objects."
        },
        {
          "id": "C",
          "text": "It forces all drivers to park their cars and sleep.",
          "isCorrect": false,
          "explanation": "Incorrect. Geospatial indexing helps active drivers get ride assignments quickly."
        }
      ],
      "hint": "Hint: Think about sorting packages by postal PIN codes instead of measuring distance to every house in the country."
    }
  }
];

// Expose globally for browser usage
if (typeof window !== 'undefined') {
  window.GAME_STAGES = STAGES;
  window.GAME_LEVELS = LEVELS;
  window.STAGES = STAGES;
  window.LEVELS = LEVELS;
}

// Expose to Node.js environments if running server-side
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { STAGES, LEVELS, GAME_STAGES: STAGES, GAME_LEVELS: LEVELS };
}


/* === FILE: diorama-engine.js === */
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
    const totalLevels = window.GAME_LEVELS ? window.GAME_LEVELS.length : 28;
    this.setElementText('level-indicator-text', `Topic ${level.id} / ${totalLevels}`);
    this.setElementText('xp-count-val', `${this.xp}`);

    // Stepper dots for all 28 topics
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
    const totalLevels = window.GAME_LEVELS ? window.GAME_LEVELS.length : 28;
    const nextBtn = document.getElementById('btn-continue-next-level');
    if (nextBtn) {
      nextBtn.disabled = false;
      nextBtn.classList.remove('btn-locked');
      if (level.id >= totalLevels) {
        nextBtn.innerHTML = `Complete All 28 Topics & View Certificate 🏆 →`;
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
      // Completed all 28 topics!
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
      console.log('System Design Learning Game (Ola Cab Edition, 28 Topics) Initialized!');
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
