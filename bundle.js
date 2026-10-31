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
 * RideQuest - Ola Cab Architecture Curriculum
 * Exact 23 Topics: Day 1 (Topics 1-11), Day 2 (Topics 12-23)
 * Beginner-Friendly Simple English with Zero Technical Words in Questions
 */

const STAGES = [
  {
    "id": 1,
    "name": "Day 1: System & Data Foundations",
    "description": "Master core client-server architecture, protocols, security, and database design using real-world Ola cab booking scenarios.",
    "levels": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": 2,
    "name": "Day 2: Distributed Systems & Scale",
    "description": "Learn caching, content delivery, scaling, load balancing, sharding, fault tolerance, streaming, and geospatial search under 100,000 live rides.",
    "levels": [
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  }
];

const LEVELS = [
  {
    "id": 1,
    "stage": 1,
    "sno": 1,
    "topic": "Requirements Engineering: Functional vs. Non-Functional Requirements (FR & NFR)",
    "concept": "Functional vs. Non-Functional Requirements",
    "title": "Level 1: What the App Does vs. How Fast It Runs",
    "time": "6:00 PM Rush Hour — Bangalore",
    "usersCount": "50,000 Riders Booking Cabs",
    "topicHint": "Understanding App Features vs. Speed & Reliability",
    "situation": "A passenger opens the Ola app and taps 'Book Cab'. The app successfully finds a nearby driver, but it takes 2 full minutes for the screen to confirm the booking.",
    "problem": "A passenger is booking an Ola cab. The app finds a driver, but it takes 2 full minutes to confirm it on the screen. What is wrong here?",
    "simulationType": "requirements_stress",
    "choices": [
      {
        "id": "A",
        "text": "The app completed the task, but it is far too slow for the user.",
        "isOptimal": true,
        "consequenceText": "Exactly right! Booking the cab worked (the feature succeeded), but taking 2 full minutes is unacceptable in real life. Apps must both work correctly and run quickly.",
        "statImpact": {
          "latency": "1.2s Target",
          "capacity": "50,000 Smooth",
          "risk": "Low",
          "cost": "Optimal"
        },
        "whatHappened": {
          "helped": "Understood the difference between app features and app performance.",
          "bottleneck": "Taking 2 minutes causes passengers to cancel and abandon the app.",
          "reflectionQuestion": "Why must an app not only do the job, but also do it in under 2 seconds?"
        },
        "successSummary": "Spot on! You distinguished between what the app does and how fast it performs."
      },
      {
        "id": "B",
        "text": "The app is completely broken and cannot book rides at all.",
        "isOptimal": false,
        "consequenceText": "Not quite. The cab was actually booked successfully! The problem is that it took 2 minutes, which frustrates passengers.",
        "statImpact": {
          "latency": "120s Slow",
          "capacity": "Low",
          "risk": "User Drop",
          "cost": "High"
        },
        "whatHappened": {
          "helped": "Looked only at the delay rather than the booking outcome.",
          "bottleneck": "Confusing a slow feature with a missing feature.",
          "reflectionQuestion": "Can a feature work correctly but still fail user speed expectations?"
        }
      },
      {
        "id": "C",
        "text": "The driver cancelled because the car ran out of fuel.",
        "isOptimal": false,
        "consequenceText": "Incorrect. The driver was assigned; the delay happened inside the computer system processing the request.",
        "statImpact": {
          "latency": "Unknown",
          "capacity": "0",
          "risk": "Confusion",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Guessed a physical car reason instead of software speed.",
          "bottleneck": "Missing the software delay.",
          "reflectionQuestion": "What part of the app is responsible when screens freeze for 2 minutes?"
        }
      }
    ],
    "discovery": {
      "badge": "Requirements Engineering",
      "tagline": "Balancing what the software does with how fast and reliably it performs",
      "simpleMeaning": "Think of an elevator: Its basic job is to move you to the 10th floor. But if it takes 30 minutes to get there, it is not useful. Software must both complete the task and do it fast.",
      "olaExample": "In Ola, booking a cab is the feature; doing it in under 2 seconds during peak rain is the performance requirement.",
      "analogy": "A restaurant: Serving food is the main job, but making customers wait 3 hours makes it a bad experience.",
      "howItWorks": [
        "1. Feature Requirements: Actions users can take (book cab, see driver photo, pay fare).",
        "2. Performance Requirements: How well the system behaves (loads in 1 second, works 99.9% of the year).",
        "3. Balancing: Engineers test both features and speed before launching."
      ],
      "whyItMatters": "Even if your app has wonderful buttons, users will uninstall it if it takes 2 minutes to respond.",
      "visualExplanation": "[Tap Book Cab] ──► [Feature: Cab Assigned] + [Performance: Done in 1.4s!] ──► Happy Rider",
      "contrast": {
        "termA": "App Features",
        "descA": "What the user can do: Book a ride, choose a car, apply coupon.",
        "termB": "App Performance",
        "descB": "How the app runs: Response time under 2 seconds, never crashes."
      },
      "teacherNotes": {
        "realWorld": "Ola measures response times in milliseconds so rush-hour surges never cause app timeouts."
      }
    },
    "knowledgeCheck": {
      "question": "Which of these is an example of an app performance requirement for Ola?",
      "options": [
        {
          "id": "A",
          "text": "The booking confirmation screen must appear in under 2 seconds.",
          "isCorrect": true,
          "explanation": "Correct! Speed and responsiveness are performance requirements."
        },
        {
          "id": "B",
          "text": "The app has a button to select an Ola Prime sedan.",
          "isCorrect": false,
          "explanation": "That is an app feature (what the user clicks), not a performance speed measurement."
        },
        {
          "id": "C",
          "text": "The app displays a picture of the driver.",
          "isCorrect": false,
          "explanation": "Displaying driver photos is a functional feature, not a speed/reliability metric."
        }
      ],
      "hint": "Hint: Look for the option that describes how fast or reliable the app must be."
    }
  },
  {
    "id": 2,
    "stage": 1,
    "sno": 2,
    "topic": "Client–Server Architecture: Decoupling Requesters from Central Data Stores",
    "concept": "Client–Server Architecture",
    "title": "Level 2: Why Your Phone Can't Change the Master Records",
    "time": "7:00 PM — 100,000 Active Passengers",
    "usersCount": "100,000 Rider Phones",
    "topicHint": "Separating User Phones from the Central Brain",
    "situation": "Thousands of passengers want cabs at the same time. A student asks: 'Why doesn't every passenger's phone just connect directly to the master disk where all drivers are listed?'",
    "problem": "Why can't every passenger's phone directly change the master list of available cabs on its own?",
    "simulationType": "client_server_clerk",
    "choices": [
      {
        "id": "A",
        "text": "Having one main central computer check and approve requests keeps all information safe and orderly.",
        "isOptimal": true,
        "consequenceText": "Brilliant! If 100,000 phones could write directly to the master disk, two riders would book the same driver at the same second. The central server checks rules and coordinates everyone cleanly.",
        "statImpact": {
          "latency": "15ms",
          "capacity": "100k Coordinated",
          "risk": "Zero Conflicts",
          "cost": "Protected"
        },
        "whatHappened": {
          "helped": "Understood why a central coordinator is required.",
          "bottleneck": "Uncontrolled direct disk access leads to corrupted records and security leaks.",
          "reflectionQuestion": "What would happen if two riders booked the same driver at the exact same instant?"
        },
        "successSummary": "Great work! You understood why client devices must ask a central server."
      },
      {
        "id": "B",
        "text": "Phone screens are too small to show all the cars in the country.",
        "isOptimal": false,
        "consequenceText": "Screen size has nothing to do with database permissions and data safety.",
        "statImpact": {
          "latency": "Error",
          "capacity": "0",
          "risk": "Confusion",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Focused on hardware display instead of software coordination.",
          "bottleneck": "Overlooking data corruption.",
          "reflectionQuestion": "Does screen size prevent computers from saving records?"
        }
      },
      {
        "id": "C",
        "text": "Drivers only accept phone calls, not app taps.",
        "isOptimal": false,
        "consequenceText": "Ola is a digital app where cab bookings happen through network taps, not manual telephone calls.",
        "statImpact": {
          "latency": "Slow",
          "capacity": "0",
          "risk": "Manual",
          "cost": "High"
        },
        "whatHappened": {
          "helped": "Thought of traditional taxi booths instead of digital systems.",
          "bottleneck": "Missing automated server dispatch.",
          "reflectionQuestion": "How does software automate matching without phone operators?"
        }
      }
    ],
    "discovery": {
      "badge": "Client–Server Architecture",
      "tagline": "Passenger phones (Clients) request rides; Central computers (Servers) verify and coordinate",
      "simpleMeaning": "Think of a restaurant: Customers (clients) do not walk into the kitchen to grab food from the stove. They give their order to the waiter (server), who coordinates with the kitchen safely.",
      "olaExample": "Your Ola app on iPhone/Android is the client. The cloud datacenter in Bangalore is the server.",
      "analogy": "A bank: You talk to the teller through the counter window; you don't walk into the bank vault yourself.",
      "howItWorks": [
        "1. Client asks: Phone sends 'Book me a Prime cab near Indiranagar'.",
        "2. Server decides: Central computer checks driver availability, pricing, and safety rules.",
        "3. Response returned: Server tells the phone 'Driver Ramesh assigned, arriving in 3 mins'."
      ],
      "whyItMatters": "Central servers keep data private, prevent booking collisions, and ensure drivers only get one ride at a time.",
      "visualExplanation": "[Rider Phone (Client)] ──Request──► [Ola Cloud Server] ──Assign──► [Driver Phone (Client)]",
      "contrast": {
        "termA": "Client (Your Phone)",
        "descA": "Displays the map, accepts your taps, sends requests.",
        "termB": "Server (Central Brain)",
        "descB": "Holds master records, verifies rules, coordinates all cars."
      },
      "teacherNotes": {
        "realWorld": "Ola runs clusters of backend servers across India to coordinate millions of riders daily."
      }
    },
    "knowledgeCheck": {
      "question": "What is the primary role of the client in the Ola cab booking app?",
      "options": [
        {
          "id": "A",
          "text": "To display the user interface and send ride requests to the server.",
          "isCorrect": true,
          "explanation": "Correct! The client runs on the user's phone, showing the map and sending choices to the server."
        },
        {
          "id": "B",
          "text": "To store the private bank account numbers of all drivers in India.",
          "isCorrect": false,
          "explanation": "Sensitive master records stay safely on central servers, never on user phones."
        },
        {
          "id": "C",
          "text": "To control traffic lights on city roads.",
          "isCorrect": false,
          "explanation": "Ola is a ride app, not city traffic signal infrastructure."
        }
      ],
      "hint": "Hint: Think about what happens directly on your smartphone screen."
    }
  },
  {
    "id": 3,
    "stage": 1,
    "sno": 3,
    "topic": "Networking Fundamentals: IP Addresses, DNS, and Ports",
    "concept": "IP Addresses, DNS, and Ports",
    "title": "Level 3: Finding the Right Computer in Bangalore",
    "time": "Morning Office Rush — Koramangala",
    "usersCount": "80,000 App Lookups",
    "topicHint": "How Phones Translate App Names into Computer Addresses",
    "situation": "When you tap the Ola app icon, your phone needs to reach the main dispatch computer. A new student wonders how millions of phones know where that computer lives on the internet.",
    "problem": "When you open the Ola app, how does your phone find the exact computer in Bangalore that handles ride bookings?",
    "simulationType": "networking_dns_ports",
    "choices": [
      {
        "id": "A",
        "text": "It looks up the app's name in a digital address book to get that computer's unique number.",
        "isOptimal": true,
        "consequenceText": "Exactly right! Just like opening your phone contacts to find a friend's phone number, the app asks the internet address book for the server's numeric address.",
        "statImpact": {
          "latency": "8ms",
          "capacity": "Global Lookup",
          "risk": "Zero Confusion",
          "cost": "Standard"
        },
        "whatHappened": {
          "helped": "Understood that human-friendly names map to numeric computer addresses.",
          "bottleneck": "Without address translation, phones would not know where to send ride requests.",
          "reflectionQuestion": "Why do computers use numbers while humans prefer names like olacabs.com?"
        },
        "successSummary": "Spot on! The digital address book translated the name into the right computer address in 8 milliseconds."
      },
      {
        "id": "B",
        "text": "It guesses random numbers until a computer answers.",
        "isOptimal": false,
        "consequenceText": "Random guessing would take hours and could connect your phone to a stranger's computer or a foreign website.",
        "statImpact": {
          "latency": "Hours",
          "capacity": "0",
          "risk": "Connection Fail",
          "cost": "Wasted"
        },
        "whatHappened": {
          "helped": "Realized that computers cannot guess addresses randomly.",
          "bottleneck": "Lack of organized address lookups.",
          "reflectionQuestion": "Can a letter reach your house without an address written on the envelope?"
        }
      },
      {
        "id": "C",
        "text": "It sends an open shout to every phone in your city.",
        "isOptimal": false,
        "consequenceText": "Broadcasting to all phones in the city would clog cellular towers with junk noise and violate user privacy.",
        "statImpact": {
          "latency": "Tower Jam",
          "capacity": "0",
          "risk": "Privacy Breach",
          "cost": "Illegal"
        },
        "whatHappened": {
          "helped": "Saw why broadcasting to everybody is not how internet communication works.",
          "bottleneck": "Network saturation.",
          "reflectionQuestion": "How does targeted messaging protect network speed?"
        }
      }
    ],
    "discovery": {
      "badge": "Networking Fundamentals",
      "tagline": "Names become numbers (Addresses), and numbers open specific software doors (Ports)",
      "simpleMeaning": "An address book: You don't memorize 10-digit phone numbers for all your friends. You tap their name, and your phone calls their number. The internet does the same thing for computers.",
      "olaExample": "Your phone looks up api.olacabs.com, gets numeric address 104.22.15.82, and connects to Door 443 (the secure web door).",
      "analogy": "Sending postal mail: The building name is the address, and the apartment number is the specific door.",
      "howItWorks": [
        "1. Human Name: Your phone requests 'api.olacabs.com'.",
        "2. Address Book (DNS): Translates the name into computer number '104.22.15.82'.",
        "3. Numbered Door (Port): Connects to Door 443, where the Ola ride service is waiting."
      ],
      "whyItMatters": "Without address lookups, phones could never find the right company servers across the worldwide internet.",
      "visualExplanation": "[Phone: api.olacabs.com] ──► [Address Book] ──► [Server IP: 104.22.15.82 : Port 443]",
      "contrast": {
        "termA": "Server Address (IP)",
        "descA": "The unique number that identifies which computer in the world to reach.",
        "termB": "Door Number (Port)",
        "descB": "The numbered entrance on that computer for a specific program."
      },
      "teacherNotes": {
        "realWorld": "Ola uses global DNS providers so riders anywhere in India connect to the closest regional gateway."
      }
    },
    "knowledgeCheck": {
      "question": "What is the job of the internet's digital address book (DNS)?",
      "options": [
        {
          "id": "A",
          "text": "To translate human-friendly website names into numeric computer addresses.",
          "isCorrect": true,
          "explanation": "Correct! It converts names like olacabs.com into numbers computers can connect to."
        },
        {
          "id": "B",
          "text": "To recharge your phone battery when you run out of power.",
          "isCorrect": false,
          "explanation": "DNS is a software lookup system, not a battery charger."
        },
        {
          "id": "C",
          "text": "To count how many kilometers the cab driver drove.",
          "isCorrect": false,
          "explanation": "Distance tracking is calculated from GPS, not from the address book."
        }
      ],
      "hint": "Hint: Think about why you use a phone contact list instead of memorizing digits."
    }
  },
  {
    "id": 4,
    "stage": 1,
    "sno": 4,
    "topic": "Networking Protocols: TCP vs. UDP and HTTP vs. HTTPS",
    "concept": "Reliable & Encrypted Communication",
    "title": "Level 4: Protecting Payments from Prying Eyes",
    "time": "Evening Commute — Public Café Wi-Fi",
    "usersCount": "40,000 Wallet Recharges",
    "topicHint": "Guaranteed Delivery and Secret Envelopes for Sensitive Data",
    "situation": "A rider sitting in a public coffee shop adds ₹500 to their Ola Money wallet. Other people are using the same public Wi-Fi network.",
    "problem": "When you pay for a cab ride using your card, why must the app guarantee that every single detail arrives safely and secretly?",
    "simulationType": "protocols_transport",
    "choices": [
      {
        "id": "A",
        "text": "So no payment information gets lost, scrambled, or stolen along the way.",
        "isOptimal": true,
        "consequenceText": "Spot on! Financial data must be enclosed in a secret encrypted digital envelope so hackers on public Wi-Fi cannot read your card number or CVV.",
        "statImpact": {
          "latency": "18ms",
          "capacity": "Encrypted TLS",
          "risk": "Zero Fraud",
          "cost": "Protected"
        },
        "whatHappened": {
          "helped": "Recognized the critical need for encrypted and guaranteed delivery.",
          "bottleneck": "Sending payment numbers in open plain text allows anyone on the Wi-Fi to steal funds.",
          "reflectionQuestion": "Why should sensitive payments use secret encryption while casual car map updates don't need heavy locks?"
        },
        "successSummary": "Payment secured! The transaction completed through a locked digital tunnel with zero stolen data."
      },
      {
        "id": "B",
        "text": "So the driver gets paid before the passenger even gets into the car.",
        "isOptimal": false,
        "consequenceText": "Incorrect. Fares are settled after the ride begins or ends, not before matching.",
        "statImpact": {
          "latency": "Premature",
          "capacity": "0",
          "risk": "Dispute",
          "cost": "High"
        },
        "whatHappened": {
          "helped": "Confused payment security with trip billing timing.",
          "bottleneck": "Incorrect billing logic.",
          "reflectionQuestion": "What protects data as it flies through the radio waves?"
        }
      },
      {
        "id": "C",
        "text": "So the phone battery does not drain while paying.",
        "isOptimal": false,
        "consequenceText": "Encryption protects privacy and data safety, not battery life.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "Security Breach",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Equated security with hardware power consumption.",
          "bottleneck": "Ignoring cybersecurity risks.",
          "reflectionQuestion": "Why do bank websites show a padlock icon on your screen?"
        }
      }
    ],
    "discovery": {
      "badge": "Protocols & Encryption",
      "tagline": "Guaranteed delivery (No lost pieces) and Secret envelopes (No stolen secrets)",
      "simpleMeaning": "A postcard vs. a locked bank deposit box: Sending payment details over plain HTTP is like writing your card PIN on a postcard where every mail carrier can read it. HTTPS puts your details in a locked metal box that only the bank can open.",
      "olaExample": "Ola uses HTTPS for wallet recharges and booking payments, turning your card number into scrambled text as it flies through public Wi-Fi.",
      "analogy": "A registered courier: The courier gets your signature confirming delivery and keeps the contents sealed in a tamper-proof bag.",
      "howItWorks": [
        "1. Handshake: Phone and server agree on a secret scrambling key.",
        "2. Encryption: Your card numbers become scrambled gibberish like '#!$*92&'.",
        "3. Verified Arrival: Server decrypts the message and confirms every byte arrived safely."
      ],
      "whyItMatters": "Without encryption, cyber criminals sitting in public cafés could steal passwords and drain rider bank accounts.",
      "visualExplanation": "[Phone Card Data] ──Locked Tunnel (HTTPS)──► [Hacker Sees Noise: ?%#$] ──► [Ola Bank Server]",
      "contrast": {
        "termA": "Open Plaintext (HTTP)",
        "descA": "Like an open postcard: readable by anyone inspecting the network.",
        "termB": "Encrypted Tunnel (HTTPS)",
        "descB": "Like a tamper-proof locked box: only the intended computer can read it."
      },
      "teacherNotes": {
        "realWorld": "All modern financial transactions mandate TLS 1.3 encryption for PCI-DSS security compliance."
      }
    },
    "knowledgeCheck": {
      "question": "What happens to your credit card number when it is sent through an encrypted HTTPS connection?",
      "options": [
        {
          "id": "A",
          "text": "It is scrambled into secret text so strangers on the network cannot read it.",
          "isCorrect": true,
          "explanation": "Correct! Encryption scrambles the data so only the destination server can unscramble it."
        },
        {
          "id": "B",
          "text": "It is posted on a public social media wall for everyone to verify.",
          "isCorrect": false,
          "explanation": "That would be a catastrophic privacy disaster."
        },
        {
          "id": "C",
          "text": "It is permanently deleted so no one can ever be charged.",
          "isCorrect": false,
          "explanation": "The payment must still be processed by the bank; it is protected, not deleted."
        }
      ],
      "hint": "Hint: Think about why bank websites use secret scrambling."
    }
  },
  {
    "id": 5,
    "stage": 1,
    "sno": 5,
    "topic": "API Design & RESTful Architecture: Standardized Communication Contracts",
    "concept": "Standardized API Contracts",
    "title": "Level 5: Standard Rules for Booking, Tracking, and Cancelling",
    "time": "Midday Cab Dispatches",
    "usersCount": "120,000 Connected Apps",
    "topicHint": "Predictable Actions for Ride Operations",
    "situation": "A rider's phone needs to create a new ride booking, check where the assigned cab is, or cancel the ride if plans change. The app and server need a clear set of standard rules.",
    "problem": "How do the passenger's phone and the company's computers talk to each other without misunderstanding what the user wants?",
    "simulationType": "api_contracts_scanners",
    "choices": [
      {
        "id": "A",
        "text": "They use a standard set of clear commands like 'create ride', 'show ride', and 'cancel ride'.",
        "isOptimal": true,
        "consequenceText": "Exactly right! Using standard actions (create, read, update, delete) ensures the server always knows whether the passenger wants to start a ride or cancel one.",
        "statImpact": {
          "latency": "14ms",
          "capacity": "Standard REST",
          "risk": "Zero Confusion",
          "cost": "Clean"
        },
        "whatHappened": {
          "helped": "Understood the value of standard, predictable request actions.",
          "bottleneck": "Unstructured messages cause servers to guess, leading to accidental cancellations or double bookings.",
          "reflectionQuestion": "Why is it important to use separate specific commands for creating versus cancelling a ride?"
        },
        "successSummary": "Standard contract applied! All ride operations communicate cleanly."
      },
      {
        "id": "B",
        "text": "The passenger types free-form text messages to an employee.",
        "isOptimal": false,
        "consequenceText": "Having humans read free-form text messages for millions of rides would require an army of staff and take 20 minutes per cab booking.",
        "statImpact": {
          "latency": "20 Mins",
          "capacity": "Tiny",
          "risk": "Human Error",
          "cost": "Huge"
        },
        "whatHappened": {
          "helped": "Saw why automated standard software commands beat manual messaging.",
          "bottleneck": "Manual human bottlenecks.",
          "reflectionQuestion": "How do apps automate bookings instantly without human chat operators?"
        }
      },
      {
        "id": "C",
        "text": "The phone takes screenshots of the screen and emails them to the driver.",
        "isOptimal": false,
        "consequenceText": "Emailing screenshots is completely unworkable for instant cab dispatching and cannot be parsed by automated dispatch computers.",
        "statImpact": {
          "latency": "Hours",
          "capacity": "0",
          "risk": "Total Failure",
          "cost": "Wasted"
        },
        "whatHappened": {
          "helped": "Realized that automated systems need structured commands, not picture attachments.",
          "bottleneck": "Unparsable file formats.",
          "reflectionQuestion": "Why do computers prefer structured text over images for basic commands?"
        }
      }
    ],
    "discovery": {
      "badge": "API Design & Contracts",
      "tagline": "Standardized commands that computers understand without guesswork",
      "simpleMeaning": "A restaurant menu: You point to Item #4 ('Masala Dosa'). You don't write an essay explaining how to cook potatoes. Standardized requests make operations fast and error-free.",
      "olaExample": "Your phone sends POST /rides to create a booking, GET /rides/123 to check location, and DELETE /rides/123 to cancel.",
      "analogy": "A vending machine: You press B4 for chips; clear numbered buttons prevent wrong snacks.",
      "howItWorks": [
        "1. Action Verb: 'Create', 'Fetch', 'Update', or 'Cancel'.",
        "2. Clear Resource: '/rides/4592'.",
        "3. Clean Data: Simple details enclosed like pickup location and car type."
      ],
      "whyItMatters": "Standard API rules allow iPhone, Android, and web apps to talk to the same server smoothly.",
      "visualExplanation": "[Phone: POST /rides] ──► [Ola Gateway] ──► [HTTP 201: Ride #4592 Created!]",
      "contrast": {
        "termA": "Standard API Rules",
        "descA": "Clear, universal actions understood by any programming language.",
        "termB": "Messy Custom Messages",
        "descB": "Unstructured requests that easily cause errors and crashes."
      },
      "teacherNotes": {
        "realWorld": "RESTful conventions make it effortless for mobile developers to integrate new features."
      }
    },
    "knowledgeCheck": {
      "question": "Which standard command should a phone send to cancel an existing ride booking?",
      "options": [
        {
          "id": "A",
          "text": "A standard remove / cancel command specifically targeting that ride number.",
          "isCorrect": true,
          "explanation": "Correct! Standard APIs use clear removal actions targeting the specific ride ID."
        },
        {
          "id": "B",
          "text": "A create ride command with all passenger names erased.",
          "isCorrect": false,
          "explanation": "That would create a new blank ride instead of cancelling the existing one."
        },
        {
          "id": "C",
          "text": "Turning off the car's headlights.",
          "isCorrect": false,
          "explanation": "Car headlights are physical car hardware, not software booking commands."
        }
      ],
      "hint": "Hint: Think about the clean difference between creating something new and cancelling an existing item."
    }
  },
  {
    "id": 6,
    "stage": 1,
    "sno": 6,
    "topic": "Authentication (AuthN) & Token-Based Sessions: Cryptographic Identity Verification",
    "concept": "Authentication & Digital Passes",
    "title": "Level 6: Remembering Who You Are Without Asking Every Second",
    "time": "Daily Login Sessions",
    "usersCount": "1,000,000 Active Logins",
    "topicHint": "Verifying Identity and Issuing Safe Session Passes",
    "situation": "You open the Ola app, enter your phone number, and type the secret 4-digit code sent by SMS. You are logged in successfully.",
    "problem": "After you type your secret code to log into Ola, how does the app remember it is still you every time you open it?",
    "simulationType": "auth_identity_verification",
    "choices": [
      {
        "id": "A",
        "text": "The central computer gives your phone a digital pass that proves who you are for future requests.",
        "isOptimal": true,
        "consequenceText": "Exactly right! The server hands your phone a temporary digital stamp (like a concert wristband). Your phone shows this pass with every tap so you never have to re-type your code.",
        "statImpact": {
          "latency": "2ms",
          "capacity": "Token Verified",
          "risk": "Protected",
          "cost": "Low"
        },
        "whatHappened": {
          "helped": "Understood digital passes and session tokens.",
          "bottleneck": "Asking for passwords on every screen frustrates users; storing passwords openly is dangerous.",
          "reflectionQuestion": "Why is a temporary wristband safer than carrying your birth certificate everywhere?"
        },
        "successSummary": "Identity verified! The digital pass keeps the rider logged in securely."
      },
      {
        "id": "B",
        "text": "You must type your secret code again every two seconds.",
        "isOptimal": false,
        "consequenceText": "Asking users to type an SMS code every two seconds would make the app completely unusable.",
        "statImpact": {
          "latency": "Annoying",
          "capacity": "0",
          "risk": "Abandon App",
          "cost": "High"
        },
        "whatHappened": {
          "helped": "Realized that apps need a way to remember verified users automatically.",
          "bottleneck": "Excessive login friction.",
          "reflectionQuestion": "How do apps balance user convenience with high security?"
        }
      },
      {
        "id": "C",
        "text": "The app checks your face through the camera non-stop.",
        "isOptimal": false,
        "consequenceText": "Running camera face recognition constantly drains phone battery in 10 minutes and violates user camera privacy.",
        "statImpact": {
          "latency": "Battery Dead",
          "capacity": "0",
          "risk": "Privacy Issue",
          "cost": "Extreme"
        },
        "whatHappened": {
          "helped": "Saw why continuous biometric scanning is impractical.",
          "bottleneck": "Heavy battery drain and privacy invasion.",
          "reflectionQuestion": "Why are lightweight digital passes better than non-stop camera scans?"
        }
      }
    ],
    "discovery": {
      "badge": "Authentication & Sessions",
      "tagline": "Prove who you are once, receive a digital pass, and stay safely logged in",
      "simpleMeaning": "A theme park wristband: When you buy a ticket, the staff checks your ID and puts a colored wristband on your arm. For the rest of the day, you just show the wristband at every ride instead of pulling out your passport each time.",
      "olaExample": "You verify your mobile number via OTP once. Ola gives your phone a secure token pass that lasts for weeks.",
      "analogy": "A hotel keycard: You show your ID at the front desk once, and they give you a plastic keycard for your room.",
      "howItWorks": [
        "1. Proving Identity: You enter your phone number and 4-digit secret SMS code.",
        "2. Pass Issued: Server confirms the code is correct and issues a signed digital token pass.",
        "3. Reusing the Pass: Every time you search for a cab, your phone attaches the pass automatically."
      ],
      "whyItMatters": "Token passes allow millions of riders to book rides instantly without re-entering passwords every minute.",
      "visualExplanation": "[Login with OTP] ──► [Server Issues Digital Pass] ──► [Phone Attaches Pass to Every Ride Request]",
      "contrast": {
        "termA": "Full Login (Authentication)",
        "descA": "Proving who you are with your password or one-time code.",
        "termB": "Session Pass (Token)",
        "descB": "A temporary proof badge that lets you stay logged in seamlessly."
      },
      "teacherNotes": {
        "realWorld": "JSON Web Tokens (JWT) allow stateless server verification across thousands of cloud instances."
      }
    },
    "knowledgeCheck": {
      "question": "What is the main benefit of giving the user's phone a digital pass after they log in?",
      "options": [
        {
          "id": "A",
          "text": "The user stays logged in safely without typing their password for every single tap.",
          "isCorrect": true,
          "explanation": "Correct! The digital pass proves identity smoothly for all subsequent requests."
        },
        {
          "id": "B",
          "text": "The phone gets free unlimited mobile data from the telecom tower.",
          "isCorrect": false,
          "explanation": "Session tokens do not provide telecom mobile data plans."
        },
        {
          "id": "C",
          "text": "The cab driver drives twice as fast.",
          "isCorrect": false,
          "explanation": "Speed on the road depends on traffic laws and safety, not app login passes."
        }
      ],
      "hint": "Hint: Think about avoiding repetitive password typing on your phone."
    }
  },
  {
    "id": 7,
    "stage": 1,
    "sno": 7,
    "topic": "Authorization (AuthZ) & Access Control Models: Role-Based Access Control & Principle of Least Privilege",
    "concept": "Authorization & Permissions",
    "title": "Level 7: What You Are Allowed to Do on the App",
    "time": "Ola Admin Center",
    "usersCount": "Riders, Drivers, and Support Staff",
    "topicHint": "Separating Passenger Powers from Driver and Admin Powers",
    "situation": "A rider logs in with their verified phone number. They open the app settings and notice a button titled 'Change Driver Payout Rates for All Cabs'.",
    "problem": "Why should a regular passenger not be allowed to change how much drivers get paid per kilometer?",
    "simulationType": "authz_rbac_vault",
    "choices": [
      {
        "id": "A",
        "text": "Different people should only have permission to do the specific tasks meant for them.",
        "isOptimal": true,
        "consequenceText": "Spot on! Authentication checks WHO you are; Authorization checks WHAT you are allowed to do. Passengers should only book rides, while only authorized managers should set financial rates.",
        "statImpact": {
          "latency": "1ms",
          "capacity": "Role Enforced",
          "risk": "Zero Breach",
          "cost": "Protected"
        },
        "whatHappened": {
          "helped": "Understood the critical separation between identity and permission.",
          "bottleneck": "Letting any user edit company settings destroys the entire business.",
          "reflectionQuestion": "What is the difference between showing your ID card and having the keys to the vault?"
        },
        "successSummary": "Permissions protected! Passengers can only book rides; admin controls stay locked."
      },
      {
        "id": "B",
        "text": "Passengers already get discounts, so they do not need that screen.",
        "isOptimal": false,
        "consequenceText": "Discounts have nothing to do with security permissions and financial safety rules.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "Dangerous",
          "cost": "Loss"
        },
        "whatHappened": {
          "helped": "Confused marketing discounts with system security access.",
          "bottleneck": "Overlooking system access boundaries.",
          "reflectionQuestion": "Why must every system verify user permissions regardless of pricing?"
        }
      },
      {
        "id": "C",
        "text": "The button was removed simply because there was no space left on the screen.",
        "isOptimal": false,
        "consequenceText": "Permissions are not about visual screen space; they are strict security rules enforced by the central computer.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "Breach",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Equated permission controls with graphic layout design.",
          "bottleneck": "Missing backend security checks.",
          "reflectionQuestion": "Where should permissions be checked: on the phone screen or inside the server?"
        }
      }
    ],
    "discovery": {
      "badge": "Authorization & Permissions",
      "tagline": "Proving identity is one thing; having permission to perform actions is another",
      "simpleMeaning": "An office badge: Your badge proves you work for the company (Authentication). But your badge only opens your floor, not the CEO's private safe (Authorization).",
      "olaExample": "A passenger role can only request rides and view receipts. An admin role can approve drivers and adjust city surge rules.",
      "analogy": "An airplane: Passengers have tickets to sit in seats; only the pilot has authorization to enter the cockpit and fly the plane.",
      "howItWorks": [
        "1. User Role: Every user is tagged with a role (Passenger, Driver, Support Agent, Admin).",
        "2. Action Check: Before changing any record, the server verifies if the user's role allows it.",
        "3. Rejection: If an unauthorized user tries to touch admin settings, the server says 'Access Denied'."
      ],
      "whyItMatters": "Strict access control prevents rogue users from modifying prices, stealing driver earnings, or seeing private trip histories.",
      "visualExplanation": "[Rider Rahul] ──► Books Cab: [ALLOWED] | ──► Edits Payouts: [403 FORBIDDEN - ACCESS DENIED]",
      "contrast": {
        "termA": "Who You Are (AuthN)",
        "descA": "Verifying identity: 'Yes, this is Rahul's phone number'.",
        "termB": "What You Can Do (AuthZ)",
        "descB": "Checking permissions: 'Rahul is a passenger; he cannot edit driver bank rates'."
      },
      "teacherNotes": {
        "realWorld": "Role-Based Access Control (RBAC) ensures least-privilege security across all microservices."
      }
    },
    "knowledgeCheck": {
      "question": "What is the difference between Authentication and Authorization?",
      "options": [
        {
          "id": "A",
          "text": "Authentication confirms who you are; Authorization decides what you have permission to do.",
          "isCorrect": true,
          "explanation": "Correct! One verifies identity, and the other checks permissions."
        },
        {
          "id": "B",
          "text": "Authentication is for cars; Authorization is for bicycles.",
          "isCorrect": false,
          "explanation": "Both are software security concepts applicable to any application."
        },
        {
          "id": "C",
          "text": "Authentication is free; Authorization costs ₹500 per month.",
          "isCorrect": false,
          "explanation": "These are foundational security mechanisms, not subscription products."
        }
      ],
      "hint": "Hint: Think about showing your ID card vs having a key to a specific door."
    }
  },
  {
    "id": 8,
    "stage": 1,
    "sno": 8,
    "topic": "Relational Database Design (RDBMS) & ACID Guarantees: Transactional Integrity",
    "concept": "Relational Design & Atomic Settlements",
    "title": "Level 8: Connecting Riders, Drivers, Cabs, and Money",
    "time": "Trip Completion — Koramangala to Airport",
    "usersCount": "Trip #89021 Completed",
    "topicHint": "Linking Tables Cleanly and Making Fare Transfers Safe",
    "situation": "A ride finishes at Bangalore Airport. The fare is ₹850. The system needs to deduct ₹850 from the rider's wallet, credit ₹850 to the driver, and update the ride receipt.",
    "problem": "When a ride ends, why must deducting money from the rider and giving money to the driver happen together at the exact same moment?",
    "simulationType": "acid_atomic_vault",
    "choices": [
      {
        "id": "A",
        "text": "To make sure money is never deducted from the passenger without reaching the driver.",
        "isOptimal": true,
        "consequenceText": "Exactly right! Both balance updates must be linked as one unbreakable transaction. If a network glitch happens midway, the entire transfer is rolled back so no money is lost.",
        "statImpact": {
          "latency": "12ms",
          "capacity": "Atomic Ledger",
          "risk": "Zero Financial Loss",
          "cost": "Exact"
        },
        "whatHappened": {
          "helped": "Understood the principle of atomic transactions.",
          "bottleneck": "Updating accounts separately risks losing money if the connection drops halfway through.",
          "reflectionQuestion": "What would happen if the phone network crashed after taking money from the passenger but before paying the driver?"
        },
        "successSummary": "Atomic settlement complete! Both accounts balanced perfectly with zero lost funds."
      },
      {
        "id": "B",
        "text": "Because the car engine automatically turns off when the ride ends.",
        "isOptimal": false,
        "consequenceText": "The physical car engine has nothing to do with database account ledgers inside cloud servers.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "Confusion",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Confused mechanical vehicle hardware with software banking rules.",
          "bottleneck": "Missing software transaction principles.",
          "reflectionQuestion": "Where are user wallet balances stored: inside the car engine or in the cloud database?"
        }
      },
      {
        "id": "C",
        "text": "To save mobile data on both phones.",
        "isOptimal": false,
        "consequenceText": "Transaction safety is about financial accuracy, not saving a few kilobytes of internet data.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "Money Loss",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Equated financial accuracy with phone data plans.",
          "bottleneck": "Overlooking financial reconciliation.",
          "reflectionQuestion": "Why do banks treat transaction completeness as the highest priority?"
        }
      }
    ],
    "discovery": {
      "badge": "Relational Design & Transactions",
      "tagline": "Organized tables linked together, updated as all-or-nothing operations",
      "simpleMeaning": "A see-saw balance: You cannot push down one side without raising the other. In payments, taking ₹850 from Person A and giving ₹850 to Person B must happen as one single linked step. It either succeeds 100% together, or rolls back to the start.",
      "olaExample": "In Ola, the 'Trips' table links the 'Rider ID' and 'Driver ID'. When trip ends, ₹850 transfers atomically between both balances.",
      "analogy": "Swapping books: You put a book in your friend's hand at the exact moment they put their book in yours; no one walks away empty-handed.",
      "howItWorks": [
        "1. Begin Transaction: Lock both balances temporarily.",
        "2. Perform Steps: Deduct ₹850 from rider, add ₹850 to driver, mark trip as paid.",
        "3. Commit: If all steps succeed, commit changes. If anything fails, rollback completely."
      ],
      "whyItMatters": "Without linked atomic transactions, system crashes would cause riders to lose money without drivers getting paid.",
      "visualExplanation": "[Rider Wallet: -₹850] ◄──(Atomic Link)──► [Driver Wallet: +₹850] ──► [Trip #89021: Paid ✓]",
      "contrast": {
        "termA": "All-or-Nothing (Atomic)",
        "descA": "Both accounts update together perfectly, or neither updates at all.",
        "termB": "Disconnected Updates",
        "descB": "One account updates while the other fails, causing vanished money."
      },
      "teacherNotes": {
        "realWorld": "Relational databases use Write-Ahead Logs (WAL) to ensure durability even during sudden server power cuts."
      }
    },
    "knowledgeCheck": {
      "question": "What happens if a power failure occurs halfway through an atomic bank transfer in the Ola app?",
      "options": [
        {
          "id": "A",
          "text": "The entire transaction is cancelled and both accounts return to their original balances.",
          "isCorrect": true,
          "explanation": "Correct! Atomic transactions roll back completely if interrupted, preserving exact balances."
        },
        {
          "id": "B",
          "text": "The money is permanently lost and deleted forever.",
          "isCorrect": false,
          "explanation": "Transactional databases prevent money from vanishing during crashes."
        },
        {
          "id": "C",
          "text": "The app gives both the rider and driver ₹10,000 for free.",
          "isCorrect": false,
          "explanation": "Crashes do not create magic free money; databases protect exact numbers."
        }
      ],
      "hint": "Hint: Think about what 'all-or-nothing' means when something fails midway."
    }
  },
  {
    "id": 9,
    "stage": 1,
    "sno": 9,
    "topic": "Database Architecture: Relational vs. Non-Relational (SQL vs. NoSQL Paradigm)",
    "concept": "SQL vs. NoSQL Storage",
    "title": "Level 9: Strict Bank Ledgers vs. Fast Moving Car Coordinates",
    "time": "Evening Peak — 100,000 Cars Moving",
    "usersCount": "100,000 Cabs Sending GPS Pings",
    "topicHint": "Choosing the Right Storage System for the Right Kind of Data",
    "situation": "Ola manages two very different types of information: (1) Passenger bank wallet balances that must never have a single rupee mistake, and (2) 100,000 moving cars sending rapid GPS coordinates every single second.",
    "problem": "Why does Ola use strict, organized record books for wallet money, but a quick, flexible notepad for moving car locations?",
    "simulationType": "database_polyglot",
    "choices": [
      {
        "id": "A",
        "text": "Money needs strict rules with zero mistakes, while moving cars need ultra-fast saving every second.",
        "isOptimal": true,
        "consequenceText": "Spot on! Financial balances require rigid safety checks where numbers always add up. But moving GPS coordinates arrive thousands of times per second and need lightning-fast saving without heavy locking.",
        "statImpact": {
          "latency": "2ms GPS / 15ms Bank",
          "capacity": "Dual Optimized",
          "risk": "Zero Data Corruption",
          "cost": "Balanced"
        },
        "whatHappened": {
          "helped": "Understood why different kinds of data need different kinds of storage.",
          "bottleneck": "Using slow, rigid bank ledgers for rapid GPS coordinates causes the database to lock up and freeze.",
          "reflectionQuestion": "Why would forcing 100,000 GPS pings per second into a bank database slow down cab booking?"
        },
        "successSummary": "Optimal storage choice! Bank money stays strictly safe; moving car locations stream smoothly."
      },
      {
        "id": "B",
        "text": "Moving car locations are permanent and can never be erased.",
        "isOptimal": false,
        "consequenceText": "Old car coordinates from 2 hours ago become outdated quickly; they are not permanent like bank receipts.",
        "statImpact": {
          "latency": "Disk Full",
          "capacity": "Low",
          "risk": "Wasted Space",
          "cost": "High"
        },
        "whatHappened": {
          "helped": "Confused temporary location telemetry with permanent financial records.",
          "bottleneck": "Storing transient data permanently.",
          "reflectionQuestion": "Does anyone care where a cab was driving 3 weeks ago at 3:15 PM?"
        }
      },
      {
        "id": "C",
        "text": "Bank accounts change thousands of times every second for each passenger.",
        "isOptimal": false,
        "consequenceText": "A passenger pays for a ride once every few hours, not thousands of times per second.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "Confusion",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Reversed the traffic frequency of bank payments vs GPS pings.",
          "bottleneck": "Misunderstanding data velocity.",
          "reflectionQuestion": "Which happens more often: a car sending its GPS location or a passenger paying a bill?"
        }
      }
    ],
    "discovery": {
      "badge": "SQL vs. NoSQL Databases",
      "tagline": "Strict relational tables for finances; Flexible high-speed stores for live telemetry",
      "simpleMeaning": "A spreadsheet vs. a whiteboard: A financial ledger is like an accountant's spreadsheet: rows and columns must balance to the penny. A live location tracker is like a whiteboard: you quickly wipe and update the latest car coordinate every second.",
      "olaExample": "Ola uses PostgreSQL (SQL) for rider balances and invoices; it uses Redis and Cassandra (NoSQL) for high-speed live GPS coordinates.",
      "analogy": "A bank vault vs. a sports scoreboard: The bank vault has double locks; the scoreboard updates numbers instantly as players run.",
      "howItWorks": [
        "1. Structured Data (SQL): Strict tables, columns, and foreign keys for money and user accounts.",
        "2. Fast Stream Data (NoSQL): Simple key-value pairs (`Cab_901: Lat 12.97, Long 77.59`) saved in milliseconds."
      ],
      "whyItMatters": "Using the right database engine keeps banking reliable while letting the map update smoothly.",
      "visualExplanation": "[Wallet & Invoices] ──► [Strict SQL Ledger] | [100k GPS Pings/sec] ──► [Fast NoSQL Cache]",
      "contrast": {
        "termA": "Relational (SQL)",
        "descA": "Strict structure, tables, zero mistakes, ideal for payments.",
        "termB": "Non-Relational (NoSQL)",
        "descB": "Ultra-fast, flexible, high volume, ideal for streaming coordinates."
      },
      "teacherNotes": {
        "realWorld": "This pattern is known as Polyglot Persistence: using specialized databases for specialized workloads."
      }
    },
    "knowledgeCheck": {
      "question": "Which database type is best suited for storing live driver GPS coordinates updated every second?",
      "options": [
        {
          "id": "A",
          "text": "A fast, flexible non-relational database built for rapid writing.",
          "isCorrect": true,
          "explanation": "Correct! High-velocity data needs high write throughput without heavy relational locks."
        },
        {
          "id": "B",
          "text": "A paper notebook kept inside the driver's glove compartment.",
          "isCorrect": false,
          "explanation": "Paper notebooks cannot be read by cloud computers or mobile apps."
        },
        {
          "id": "C",
          "text": "A CD-ROM disk that can only be written once.",
          "isCorrect": false,
          "explanation": "CD-ROMs are slow, outdated, and cannot handle continuous updates."
        }
      ],
      "hint": "Hint: Look for the option built for fast, frequent writes."
    }
  },
  {
    "id": 10,
    "stage": 1,
    "sno": 10,
    "topic": "OLTP vs. OLAP: Fast Transactional Processing vs. Deep Analytical Processing",
    "concept": "Live Operations vs. Historical Analytics",
    "title": "Level 10: Booking Cabs Right Now vs. Studying Last Year's Traffic",
    "time": "Peak Evening — Ola Headquarters",
    "usersCount": "50,000 Live Bookings + 10M Historical Reports",
    "topicHint": "Separating Live Ride Dispatch from Heavy Business Analytics",
    "situation": "While 50,000 passengers are actively booking cabs, a team of business analysts wants to run a massive study analyzing 10 million rides from last monsoon to calculate holiday surge prices.",
    "problem": "Why shouldn't managers run giant reports on last year's 10 million rides on the same computer that is currently booking live cabs?",
    "simulationType": "oltp_olap_registers",
    "choices": [
      {
        "id": "A",
        "text": "The heavy report will slow down the computer and make live cab bookings freeze.",
        "isOptimal": true,
        "consequenceText": "Exactly right! Crunching millions of past records takes heavy memory and CPU. Running that on the live dispatch computer would cause passengers' screens to freeze and fail to book cabs.",
        "statImpact": {
          "latency": "Live: 10ms / Analytics: Separate",
          "capacity": "Isolated",
          "risk": "Zero Freeze",
          "cost": "Optimized"
        },
        "whatHappened": {
          "helped": "Understood why live transactional systems must be separated from historical analytical warehouses.",
          "bottleneck": "Heavy analytical queries consume all disk read channels, blocking quick customer bookings.",
          "reflectionQuestion": "Why should customers at a grocery cash register not wait for the store accountant to audit annual taxes?"
        },
        "successSummary": "Clean separation! Live dispatch stays lightning fast; analysts run heavy reports on a separate data warehouse."
      },
      {
        "id": "B",
        "text": "Past ride data could accidentally change today's cab fares.",
        "isOptimal": false,
        "consequenceText": "Reading past reports doesn't overwrite current prices; the real danger is exhausting computer power and freezing live dispatch.",
        "statImpact": {
          "latency": "Frozen",
          "capacity": "0",
          "risk": "Downtime",
          "cost": "High"
        },
        "whatHappened": {
          "helped": "Focused on data corruption instead of computer workload exhaustion.",
          "bottleneck": "Resource contention.",
          "reflectionQuestion": "What happens when a computer processor is pushed to 100% capacity?"
        }
      },
      {
        "id": "C",
        "text": "Computers can only open one file per day.",
        "isOptimal": false,
        "consequenceText": "Computers can open millions of files; the challenge is sharing memory and processing power between live users and giant reports.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "Confusion",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Underestimated computer capabilities.",
          "bottleneck": "Misunderstanding multi-tasking limits.",
          "reflectionQuestion": "Why do big companies use separate analytical data warehouses?"
        }
      }
    ],
    "discovery": {
      "badge": "OLTP vs. OLAP",
      "tagline": "Fast live operations on one side; Deep historical analytics on the other",
      "simpleMeaning": "A supermarket checkout vs. a tax audit: At the checkout register, customers need to scan items and pay in 5 seconds (OLTP). In the back office, the accountant spends 4 hours analyzing last month's receipts (OLAP). You never make customers wait at the register while the accountant audits the books.",
      "olaExample": "Ola dispatches live cabs in 10ms using an OLTP database. Every night, ride records copy over to an OLAP warehouse (like Snowflake/BigQuery) for long business reports.",
      "analogy": "A restaurant kitchen (making today's lunch fast) vs. a recipe book author (studying culinary trends over 10 years).",
      "howItWorks": [
        "1. Live Booking (OLTP): Small, fast reads and writes. 'Book cab, assign driver, deduct ₹250'.",
        "2. Deep Analytics (OLAP): Giant historical queries. 'What was the average travel time on rainy Fridays across 5 years?'",
        "3. Workload Isolation: Keep them on separate computers so live rides never lag."
      ],
      "whyItMatters": "Separating live booking from business reporting ensures passengers never experience app freezes because an executive ran a big report.",
      "visualExplanation": "[Live Bookings (10ms)] ──► [Live OLTP Server] | [10M Past Rides] ──► [Separate OLAP Warehouse]",
      "contrast": {
        "termA": "Live Operations (OLTP)",
        "descA": "Handles millions of tiny, fast transactions happening right now.",
        "termB": "Analytical Warehouse (OLAP)",
        "descB": "Scans millions of past records for charts, trends, and business decisions."
      },
      "teacherNotes": {
        "realWorld": "Data pipelines extract, transform, and load (ETL) operational data into cloud analytical warehouses."
      }
    },
    "knowledgeCheck": {
      "question": "What is the main purpose of an analytical data warehouse (OLAP)?",
      "options": [
        {
          "id": "A",
          "text": "To study large amounts of past data and business trends without slowing down live users.",
          "isCorrect": true,
          "explanation": "Correct! It isolates heavy analysis from the live customer booking system."
        },
        {
          "id": "B",
          "text": "To assign a nearby driver to a passenger in 2 milliseconds.",
          "isCorrect": false,
          "explanation": "Live cab matching is an OLTP operational task, not an analytical warehouse job."
        },
        {
          "id": "C",
          "text": "To sound a loud horn inside the driver's car.",
          "isCorrect": false,
          "explanation": "Car horns are physical automotive hardware, not data warehousing."
        }
      ],
      "hint": "Hint: Think about why managers study long-term business trends."
    }
  },
  {
    "id": 11,
    "stage": 1,
    "sno": 11,
    "topic": "ACID Properties: Atomicity, Consistency, Isolation, and Durability",
    "concept": "ACID Reliability Guarantees",
    "title": "Level 11: What Happens When Your Phone Battery Dies Mid-Payment?",
    "time": "Midnight Airport Ride Settlement",
    "usersCount": "Trip #99214 — ₹600 Payment",
    "topicHint": "The 4 Golden Rules That Keep Money and Data Completely Safe",
    "situation": "A passenger finishes a ride and taps 'Pay ₹600 with Wallet'. Right as the wheel spins, the passenger's phone runs out of battery and turns off completely.",
    "problem": "If your phone battery suddenly dies in the middle of paying for a ride, what must happen to your money?",
    "simulationType": "acid_atomic_vault",
    "choices": [
      {
        "id": "A",
        "text": "The payment is cancelled completely and your balance stays untouched, with zero money lost.",
        "isOptimal": true,
        "consequenceText": "Exactly right! This is the 'A' in ACID (Atomicity). If the payment cannot finish 100% cleanly, the computer automatically resets the transaction to the beginning. No money disappears into nowhere.",
        "statImpact": {
          "latency": "10ms",
          "capacity": "ACID Guaranteed",
          "risk": "Zero Lost Rupee",
          "cost": "Exact"
        },
        "whatHappened": {
          "helped": "Understood that reliable systems never leave transactions in a broken, half-finished state.",
          "bottleneck": "Without atomicity, partial updates cause money to vanish or balance mismatches.",
          "reflectionQuestion": "Why is it better for an interrupted payment to completely cancel rather than half-finish?"
        },
        "successSummary": "ACID protection verified! Interrupted payment rolled back safely with zero lost funds."
      },
      {
        "id": "B",
        "text": "The money is permanently lost and cannot be returned.",
        "isOptimal": false,
        "consequenceText": "Computer databases are designed with safety rules precisely so battery deaths or network drops never erase your money.",
        "statImpact": {
          "latency": "Broken",
          "capacity": "0",
          "risk": "Customer Outrage",
          "cost": "Heavy"
        },
        "whatHappened": {
          "helped": "Assumed software crashes destroy money.",
          "bottleneck": "Unfamiliarity with transaction rollback logs.",
          "reflectionQuestion": "How do database logs protect account balances even after sudden power cuts?"
        }
      },
      {
        "id": "C",
        "text": "Half the money goes to the driver and half vanishes.",
        "isOptimal": false,
        "consequenceText": "There is no such thing as 'half a payment'. Transactions are all-or-nothing; they never split money into thin air.",
        "statImpact": {
          "latency": "Corrupted",
          "capacity": "0",
          "risk": "Accounting Disaster",
          "cost": "Loss"
        },
        "whatHappened": {
          "helped": "Thought partial transactions are kept.",
          "bottleneck": "Violating atomicity.",
          "reflectionQuestion": "Can a bank transfer be 50% finished?"
        }
      }
    ],
    "discovery": {
      "badge": "ACID Properties",
      "tagline": "Atomicity (All or nothing), Consistency (Valid rules), Isolation (No mix-ups), Durability (Saved permanently)",
      "simpleMeaning": "The four unbreakable rules of bank storage: 1. Atomicity: You can't take half a step; it's all-or-nothing. 2. Consistency: Balances can never be negative. 3. Isolation: Multiple payments don't bump into each other. 4. Durability: Once saved, even lightning striking the building won't erase it.",
      "olaExample": "When paying ₹600 for an Ola ride, ACID ensures that if the server loses power midway, your ₹600 is safe and reappears correctly on reboot.",
      "analogy": "A physical vending machine: If the snack gets stuck and doesn't drop, the coin falls back into the coin return slot; it doesn't keep your money.",
      "howItWorks": [
        "1. Atomicity: Complete every step or reset to the starting point.",
        "2. Consistency: Ensure all rules (e.g. non-negative wallet) are obeyed.",
        "3. Isolation: Process simultaneous transactions independently without interference.",
        "4. Durability: Write changes to disk so they survive sudden power loss."
      ],
      "whyItMatters": "ACID properties prevent double charges, negative balances, and missing payments across millions of daily rides.",
      "visualExplanation": "[Payment Interrupted] ──► [ACID Rollback Triggered] ──► [Balance Untouched: ₹600 Safe!]",
      "contrast": {
        "termA": "ACID Compliant",
        "descA": "Unbreakable guarantees: zero lost money, zero phantom balances.",
        "termB": "Non-ACID System",
        "descB": "Network drops or battery deaths can corrupt ledgers and lose funds."
      },
      "teacherNotes": {
        "realWorld": "Financial core systems rely on ACID guarantees in relational databases like PostgreSQL and Oracle."
      }
    },
    "knowledgeCheck": {
      "question": "What does the 'A' (Atomicity) in ACID guarantee during an Ola wallet payment?",
      "options": [
        {
          "id": "A",
          "text": "The transaction happens completely as one step, or rolls back entirely if any error occurs.",
          "isCorrect": true,
          "explanation": "Correct! Atomicity means all-or-nothing: no half-finished payments."
        },
        {
          "id": "B",
          "text": "The app plays an automated voice message thanking the passenger.",
          "isCorrect": false,
          "explanation": "Voice messages are audio features, not database transaction guarantees."
        },
        {
          "id": "C",
          "text": "The cab arrives in exactly 60 seconds.",
          "isCorrect": false,
          "explanation": "Cab arrival time depends on city traffic, not database atomicity."
        }
      ],
      "hint": "Hint: Think about the 'all-or-nothing' rule."
    }
  },
  {
    "id": 12,
    "stage": 2,
    "sno": 12,
    "topic": "Database Replication: Primary-Replica (Master-Slave) Architecture",
    "concept": "Database Replication & High Availability",
    "title": "Level 12: When the Main Storage Computer Loses Power",
    "time": "Heavy Thunderstorm — Mumbai Datacenter",
    "usersCount": "150,000 Active Trips",
    "topicHint": "Keeping Identical Copy Computers Ready to Take Over Instantly",
    "situation": "A lightning storm hits the main datacenter in Mumbai, and the master computer storing all ongoing ride records suddenly shuts off.",
    "problem": "If the main computer storing all ride records suddenly loses power, how does the Ola app stay online?",
    "simulationType": "db_replication_cluster",
    "choices": [
      {
        "id": "A",
        "text": "Backup copy computers immediately step in and take over the work.",
        "isOptimal": true,
        "consequenceText": "Spot on! The primary computer was continuously copying every booking to backup computers in Bangalore. When Mumbai went dark, Bangalore stepped in instantly with zero lost rides.",
        "statImpact": {
          "latency": "15ms",
          "capacity": "Failover in 1.2s",
          "risk": "Zero Downtime",
          "cost": "High Availability"
        },
        "whatHappened": {
          "helped": "Understood the life-saving value of database replication and automatic failover.",
          "bottleneck": "Relying on one computer without copies creates a fatal single point of failure.",
          "reflectionQuestion": "Why should database copies be located in different physical cities?"
        },
        "successSummary": "Failover complete! Backup copy stepped up as leader with zero lost trips."
      },
      {
        "id": "B",
        "text": "The app tells all passengers across the country to wait until tomorrow.",
        "isOptimal": false,
        "consequenceText": "Shutting down for a full day loses millions in revenue and strands commuters across the country.",
        "statImpact": {
          "latency": "24 Hours",
          "capacity": "0",
          "risk": "Business Disaster",
          "cost": "Massive"
        },
        "whatHappened": {
          "helped": "Saw why large scale apps cannot simply stop operating.",
          "bottleneck": "Unacceptable business downtime.",
          "reflectionQuestion": "How do companies guarantee 99.99% uptime year-round?"
        }
      },
      {
        "id": "C",
        "text": "All past ride records are deleted so the computer can restart faster.",
        "isOptimal": false,
        "consequenceText": "Deleting ride records would erase driver earnings and passenger payment receipts, causing legal and financial chaos.",
        "statImpact": {
          "latency": "Data Lost",
          "capacity": "0",
          "risk": "Legal Catastrophe",
          "cost": "Total"
        },
        "whatHappened": {
          "helped": "Recognized that business records must be preserved permanently.",
          "bottleneck": "Unrecoverable data loss.",
          "reflectionQuestion": "Why must financial receipts be protected across multiple machines?"
        }
      }
    ],
    "discovery": {
      "badge": "Database Replication",
      "tagline": "Keep exact mirror copies updated continuously so you never face a blackout",
      "simpleMeaning": "A twin co-pilot: In an airplane, there are two pilots. If the captain suddenly faints, the co-pilot takes the controls immediately. The plane never crashes. Database replication gives you digital co-pilots.",
      "olaExample": "Ola's primary database in Mumbai writes every ride to replica databases in Bangalore. If Mumbai loses power, Bangalore takes over in 2 seconds.",
      "analogy": "Photocopying a will: You keep one copy in your home safe and another with your lawyer so a fire doesn't destroy the only record.",
      "howItWorks": [
        "1. Master Writes: Primary database accepts new bookings and payments.",
        "2. Live Sync: Changes stream instantly to replica backup machines.",
        "3. Auto-Promotion: If the primary dies, a replica is automatically promoted to the new master."
      ],
      "whyItMatters": "Hardware breaks, power cords get unplugged, and storms happen. Replication guarantees the app survives without losing customer trips.",
      "visualExplanation": "[Primary DB (Mumbai)] ──Sync──► [Replica DB (Bangalore)] ──(Mumbai Dies!)──► [Replica Becomes New Master ✓]",
      "contrast": {
        "termA": "Replicated Cluster",
        "descA": "Multiple synchronized machines; seamless automatic takeover during failures.",
        "termB": "Single Machine Setup",
        "descB": "One machine dies, taking down the entire app for everyone."
      },
      "teacherNotes": {
        "realWorld": "High availability setups use consensus algorithms like Raft to elect a new leader automatically."
      }
    },
    "knowledgeCheck": {
      "question": "What is the primary benefit of running a backup replica database for Ola?",
      "options": [
        {
          "id": "A",
          "text": "The app stays online without losing data if the main storage computer crashes.",
          "isCorrect": true,
          "explanation": "Correct! Replicas provide high availability and prevent catastrophic downtime."
        },
        {
          "id": "B",
          "text": "It washes the cabs automatically after every trip.",
          "isCorrect": false,
          "explanation": "Software databases manage digital records, not physical car washing."
        },
        {
          "id": "C",
          "text": "It replaces all human drivers with flying drones.",
          "isCorrect": false,
          "explanation": "Replication is a data reliability pattern, not drone technology."
        }
      ],
      "hint": "Hint: Think about what happens when the primary machine stops working."
    }
  },
  {
    "id": 13,
    "stage": 2,
    "sno": 13,
    "topic": "Caching Strategies: In-Memory Caching & Cache Eviction (LRU/LFU)",
    "concept": "Fast Memory Caching",
    "title": "Level 13: Loading Driver Profiles in 2 Milliseconds",
    "time": "Morning Rush — 60,000 Profile Views/sec",
    "usersCount": "60,000 Riders Checking Drivers",
    "topicHint": "Keeping Popular Information in Ultra-Fast Temporary Memory",
    "situation": "When a cab is assigned, riders repeatedly check the driver's name, rating, and car photo. Searching the slow spinning hard disk 60,000 times a second is grinding the database to a halt.",
    "problem": "How can the Ola app show a driver's name and photo instantly without searching through slow storage disks every single time?",
    "simulationType": "caching_sticky_notepad",
    "choices": [
      {
        "id": "A",
        "text": "It keeps frequently viewed details in super-fast temporary memory ready to read.",
        "isOptimal": true,
        "consequenceText": "Brilliant! Reading from super-fast temporary memory (RAM) takes just 2 milliseconds, compared to 120 milliseconds on a hard disk. 99% of requests are answered instantly without touching the disk.",
        "statImpact": {
          "latency": "2ms (vs 120ms)",
          "capacity": "99% Cache Hit",
          "risk": "Zero Disk Overload",
          "cost": "Efficient"
        },
        "whatHappened": {
          "helped": "Understood the tremendous speed boost of in-memory caching.",
          "bottleneck": "Repeated disk reads saturate input/output channels, making the app crawl.",
          "reflectionQuestion": "Why is keeping a sticky note on your desk faster than walking to the basement library every time?"
        },
        "successSummary": "Cache active! Driver profiles load in 2ms; database disk stays relaxed."
      },
      {
        "id": "B",
        "text": "It asks the passenger to guess the driver's name first.",
        "isOptimal": false,
        "consequenceText": "Making passengers guess names is absurd and makes the app completely unusable.",
        "statImpact": {
          "latency": "Awful",
          "capacity": "0",
          "risk": "User Rage",
          "cost": "Lost Users"
        },
        "whatHappened": {
          "helped": "Saw why user guessing is not a software solution.",
          "bottleneck": "Unacceptable user experience.",
          "reflectionQuestion": "How should software provide instant answers automatically?"
        }
      },
      {
        "id": "C",
        "text": "It downloads every driver picture on the internet onto the passenger's phone.",
        "isOptimal": false,
        "consequenceText": "Downloading millions of driver photos would fill up the passenger's phone storage and consume gigabytes of mobile data.",
        "statImpact": {
          "latency": "Phone Full",
          "capacity": "0",
          "risk": "Storage Full",
          "cost": "Extreme"
        },
        "whatHappened": {
          "helped": "Recognized that client devices cannot store the entire company's files.",
          "bottleneck": "Storage exhaustion on mobile phones.",
          "reflectionQuestion": "Why should servers cache only the active, frequently requested data?"
        }
      }
    ],
    "discovery": {
      "badge": "In-Memory Caching",
      "tagline": "Keep answers on a digital sticky note instead of walking to the bookshelf",
      "simpleMeaning": "A sticky note on your computer: If your friend asks for your Wi-Fi password 10 times a day, you don't go look under the router in the hallway each time. You write it on a sticky note right by your keyboard. Caching is that sticky note.",
      "olaExample": "Ola stores active driver profiles in Redis RAM cache. Fetching takes 2ms instead of 120ms from disk.",
      "analogy": "Keeping salt on the kitchen counter instead of walking to the grocery store every time you cook.",
      "howItWorks": [
        "1. First Request: Server reads from disk, hands data to user, and leaves a copy in fast RAM.",
        "2. Next 1,000 Requests: Read directly from RAM in 2 milliseconds.",
        "3. Eviction: When RAM gets full, remove the least recently used records to make room for new ones."
      ],
      "whyItMatters": "Caching protects databases from crashing under heavy rush-hour traffic and makes the app feel lightning fast.",
      "visualExplanation": "[Rider Checks Ramesh Profile] ──► [Fast RAM Cache (2ms ✓)] ──► Instant Response (Bypasses Slow Disk!)",
      "contrast": {
        "termA": "RAM Cache (Redis)",
        "descA": "Ultra-fast memory (2ms), temporary, handles millions of reads effortlessly.",
        "termB": "Permanent Disk (Database)",
        "descB": "Safe permanent storage, but 50x slower for repetitive reads."
      },
      "teacherNotes": {
        "realWorld": "Least Recently Used (LRU) cache eviction ensures the most active data remains readily accessible."
      }
    },
    "knowledgeCheck": {
      "question": "What happens when the fast cache memory runs out of space?",
      "options": [
        {
          "id": "A",
          "text": "It removes the least recently viewed records to make room for fresh data.",
          "isCorrect": true,
          "explanation": "Correct! Cache eviction policies like LRU safely discard stale items."
        },
        {
          "id": "B",
          "text": "The computer explodes and catches fire.",
          "isCorrect": false,
          "explanation": "Computers do not explode when RAM fills up; they execute eviction algorithms."
        },
        {
          "id": "C",
          "text": "All passengers get charged ₹50 extra.",
          "isCorrect": false,
          "explanation": "Memory management has nothing to do with charging extra customer fees."
        }
      ],
      "hint": "Hint: Think about throwing away old papers when your desk gets cluttered."
    }
  },
  {
    "id": 14,
    "stage": 2,
    "sno": 14,
    "topic": "Content Delivery Networks (CDN): Edge Caching & Geographical PoPs",
    "concept": "Edge Caching & Geographical CDN",
    "title": "Level 14: Downloading Car Icons & Map Tiles Across India",
    "time": "Pan-India Expansion — Delhi, Kolkata, Chennai",
    "usersCount": "5,000,000 App Downloads Across India",
    "topicHint": "Placing Content Nearby So It Doesn't Travel Thousands of Kilometers",
    "situation": "A passenger in Delhi opens the Ola app. The app needs to load 15MB of city map tiles and car pictures. The main company computers are located 2,000 kilometers away in Bangalore.",
    "problem": "Why should a rider in Delhi download car pictures from a nearby computer in Delhi instead of the main office in Bangalore?",
    "simulationType": "cdn_edge_kiosks",
    "choices": [
      {
        "id": "A",
        "text": "Fetching pictures from nearby takes less time and avoids overloading the main office.",
        "isOptimal": true,
        "consequenceText": "Spot on! Light signals travel across fiber optic cables. Fetching files from 10km away in Delhi takes only 15ms, compared to 150ms from Bangalore, and keeps the Bangalore datacenter free for live bookings.",
        "statImpact": {
          "latency": "15ms (vs 150ms)",
          "capacity": "Distributed Edge",
          "risk": "Zero Origin Congestion",
          "cost": "Bandwidth Saved"
        },
        "whatHappened": {
          "helped": "Understood the physics of network distance and edge caching.",
          "bottleneck": "Sending every static image request across 2,000km chokes central office bandwidth.",
          "reflectionQuestion": "Why shouldn't 5 million users all download the same car icon from one single room in Bangalore?"
        },
        "successSummary": "Edge delivery verified! Map tiles and vehicle graphics load in 15ms across all cities."
      },
      {
        "id": "B",
        "text": "Cars in Delhi look completely different from cars in Bangalore.",
        "isOptimal": false,
        "consequenceText": "Car pictures and map tiles are identical standard graphics across all cities.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "Confusion",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Assumed geographic content differences instead of network speed advantages.",
          "bottleneck": "Missing network physics.",
          "reflectionQuestion": "Why does physical distance matter when downloading files over the internet?"
        }
      },
      {
        "id": "C",
        "text": "Pictures are not allowed to travel across state borders over the internet.",
        "isOptimal": false,
        "consequenceText": "Internet signals travel freely across state borders; physical distance is the only factor causing network latency.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "False Legal Belief",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Invented false border restrictions.",
          "bottleneck": "Ignoring speed of light latency.",
          "reflectionQuestion": "How does storing files closer to users reduce loading delay?"
        }
      }
    ],
    "discovery": {
      "badge": "Content Delivery Networks (CDN)",
      "tagline": "Store heavy static files close to users in every city to slash loading times",
      "simpleMeaning": "Neighborhood book warehouses: If an online bookstore kept all books in one warehouse in London, Indian readers would wait 3 weeks for delivery. Instead, the company keeps small warehouses in Delhi, Mumbai, and Kolkata. Orders arrive in 1 hour.",
      "olaExample": "Ola puts vehicle icons, map graphics, and promotional banners on edge servers in every major Indian city. Riders download them in 15 milliseconds.",
      "analogy": "Local newspaper printing presses: Rather than flying papers from one capital, newspapers print in each regional city so morning papers arrive before breakfast.",
      "howItWorks": [
        "1. Origin Server: Master graphics live in Bangalore.",
        "2. Edge Distribution: Caches in Delhi, Mumbai, and Kolkata save copies locally.",
        "3. Instant Delivery: When a Delhi user taps the app, Delhi's edge machine serves the file immediately."
      ],
      "whyItMatters": "CDNs reduce app launch times from 5 seconds to under 1 second and save massive bandwidth bills.",
      "visualExplanation": "[Delhi Rider] ──► [Delhi Edge CDN (15ms!)] | (Bypasses 2,000km trip to Bangalore!)",
      "contrast": {
        "termA": "Local Edge CDN",
        "descA": "Static pictures served from your local city in 15ms.",
        "termB": "Single Central Server",
        "descB": "Every user travels 2,000km across fiber cables, choking central bandwidth."
      },
      "teacherNotes": {
        "realWorld": "CDNs like Cloudflare and Akamai handle the vast majority of worldwide internet static media delivery."
      }
    },
    "knowledgeCheck": {
      "question": "Which of the following items is BEST suited to be stored on an Edge CDN for the Ola app?",
      "options": [
        {
          "id": "A",
          "text": "App logo images, car type graphics, and city street map tiles.",
          "isCorrect": true,
          "explanation": "Correct! Static, unchanging assets that everyone downloads benefit most from CDN caching."
        },
        {
          "id": "B",
          "text": "A passenger's private bank PIN number.",
          "isCorrect": false,
          "explanation": "Private bank credentials must never be cached on public edge nodes."
        },
        {
          "id": "C",
          "text": "The live GPS coordinate of a moving car updated this second.",
          "isCorrect": false,
          "explanation": "Live moving GPS changes every second and requires direct streaming, not static CDN caching."
        }
      ],
      "hint": "Hint: Think about files that stay the same for months and are shared by all users."
    }
  },
  {
    "id": 15,
    "stage": 2,
    "sno": 15,
    "topic": "Scaling Paradigms: Horizontal (Scale Out) vs. Vertical (Scale Up)",
    "concept": "Horizontal vs. Vertical Scaling",
    "title": "Level 15: Monsoon Rush — More Computers vs. One Giant Chip",
    "time": "Friday 6:00 PM — Sudden Bangalore Monsoon Rain",
    "usersCount": "10x Traffic Spike (100,000 Riders)",
    "topicHint": "Adding Many Normal Machines vs. Buying One Super-Expensive Machine",
    "situation": "Heavy rain pours over the city. Ride requests explode by 10 times in 5 minutes. The current server is at 98% CPU and about to crash.",
    "problem": "When sudden rain starts and 10 times more people open Ola, what is the best way to keep the app fast?",
    "simulationType": "scaling_cluster_nodes",
    "choices": [
      {
        "id": "A",
        "text": "Add many normal computers to share the workload together.",
        "isOptimal": true,
        "consequenceText": "Spot on! This is Horizontal Scaling ('Scaling Out'). Adding 10 affordable cloud servers shares the heavy rain surge effortlessly. If traffic doubles again, simply add 10 more with a single click.",
        "statImpact": {
          "latency": "20ms",
          "capacity": "Elastic 10x Fleet",
          "risk": "Zero Downtime",
          "cost": "Pay-as-you-go"
        },
        "whatHappened": {
          "helped": "Understood the limitless elasticity of horizontal scaling.",
          "bottleneck": "Upgrading a single computer (Vertical Scaling) is expensive, has strict physical limits, and creates one single point of total failure.",
          "reflectionQuestion": "Why is hiring 10 delivery riders better than trying to make one rider pedal a bicycle 10 times faster?"
        },
        "successSummary": "Elastic scaling achieved! 10 modular servers shared the storm surge effortlessly."
      },
      {
        "id": "B",
        "text": "Buy one super expensive machine and hope it never reaches its limit.",
        "isOptimal": false,
        "consequenceText": "One single machine has physical heat and chip limits. It costs 20x more and if it fails, the entire company goes completely dark.",
        "statImpact": {
          "latency": "Limit Reached",
          "capacity": "Fixed Ceiling",
          "risk": "Single Point of Failure",
          "cost": "Extreme"
        },
        "whatHappened": {
          "helped": "Recognized the severe physical and financial limits of vertical scaling.",
          "bottleneck": "Hardware ceilings and single point of failure.",
          "reflectionQuestion": "Can one supercomputer handle infinite traffic alone?"
        }
      },
      {
        "id": "C",
        "text": "Make passengers wait in a line so only one person can book at a time.",
        "isOptimal": false,
        "consequenceText": "Making 100,000 people wait one-by-one means the last passenger waits 3 days for a cab! Customers will immediately switch to competitors.",
        "statImpact": {
          "latency": "3 Days",
          "capacity": "1 User",
          "risk": "Business Death",
          "cost": "Zero Revenue"
        },
        "whatHappened": {
          "helped": "Saw why serialization destroys business during traffic surges.",
          "bottleneck": "Single-file queue bottlenecks.",
          "reflectionQuestion": "Why must modern cloud architectures process requests simultaneously?"
        }
      }
    ],
    "discovery": {
      "badge": "Scaling Paradigms",
      "tagline": "Scale Up (Make one bigger) vs. Scale Out (Add more machines to share the work)",
      "simpleMeaning": "Carrying heavy bricks: If you have 1,000 bricks to move, you don't look for an Olympic weightlifter to carry all 1,000 at once (Scale Up). You hire 10 normal workers to carry 100 bricks each (Scale Out). It's cheaper, faster, and if one worker trips, the other 9 keep moving.",
      "olaExample": "When rain starts in Bangalore, Ola's cloud automatically spins up 15 new server pods to share incoming ride bookings.",
      "analogy": "A supermarket on festival eve: You open 10 more checkout counters instead of making one cashier scan groceries at 200 mph.",
      "howItWorks": [
        "1. Traffic Detection: Cloud monitors CPU usage.",
        "2. Auto-Scale: When CPU exceeds 70%, launch 5 new server instances automatically.",
        "3. Scale Down: When rain stops and night falls, turn off the extra servers to save money."
      ],
      "whyItMatters": "Horizontal scaling provides practically unlimited growth with no single point of failure.",
      "visualExplanation": "[100k Rain Requests] ──► Distributed across [Server 1] + [Server 2] + [Server 3] ──► Smooth 25% CPU Each",
      "contrast": {
        "termA": "Horizontal Scaling (Scale Out)",
        "descA": "Adding more affordable machines. Limitless growth, resilient, elastic.",
        "termB": "Vertical Scaling (Scale Up)",
        "descB": "Upgrading CPU/RAM on one machine. Expensive, has hard physical ceilings."
      },
      "teacherNotes": {
        "realWorld": "Kubernetes and AWS Auto-Scaling Groups automate horizontal scaling based on live telemetry."
      }
    },
    "knowledgeCheck": {
      "question": "What is the biggest advantage of Horizontal Scaling (adding more computers) over Vertical Scaling?",
      "options": [
        {
          "id": "A",
          "text": "You can add as many machines as needed and if one crashes, the others keep working.",
          "isCorrect": true,
          "explanation": "Correct! It provides redundancy and elastic, practically limitless capacity."
        },
        {
          "id": "B",
          "text": "Computers stop using electricity completely.",
          "isCorrect": false,
          "explanation": "All computers require electricity to function."
        },
        {
          "id": "C",
          "text": "Cab drivers don't need to put fuel in their cars.",
          "isCorrect": false,
          "explanation": "Server architecture does not replace physical car fuel."
        }
      ],
      "hint": "Hint: Think about teamwork: many workers sharing the load."
    }
  },
  {
    "id": 16,
    "stage": 2,
    "sno": 16,
    "topic": "Load Balancing: Smart Traffic Routing & Node Health Checks",
    "concept": "Load Balancing & Traffic Distribution",
    "title": "Level 16: Dividing 100,000 Riders Evenly Across Servers",
    "time": "Evening Peak Traffic — 10 Backend Servers",
    "usersCount": "100,000 Active Connections",
    "topicHint": "The Smart Traffic Guide That Keeps Servers Calm and Healthy",
    "situation": "You added 5 new backend servers to handle rush hour. But right now, all 100,000 riders are rushing into Server #1, while Servers 2, 3, 4, and 5 are sitting completely empty.",
    "problem": "If thousands of people open Ola at the same time, how do we make sure one computer doesn't crash while others sit doing nothing?",
    "simulationType": "load_balancer_traffic",
    "choices": [
      {
        "id": "A",
        "text": "A traffic guide distributes incoming users evenly among all healthy computers.",
        "isOptimal": true,
        "consequenceText": "Exactly right! A Load Balancer acts like a smart airport traffic director. It points User 1 to Server A, User 2 to Server B, User 3 to Server C, keeping all servers relaxed at 25% load.",
        "statImpact": {
          "latency": "12ms",
          "capacity": "Balanced Across Fleet",
          "risk": "Zero Hotspots",
          "cost": "Optimal"
        },
        "whatHappened": {
          "helped": "Understood the critical role of load balancers in distributing incoming traffic.",
          "bottleneck": "Without traffic distribution, one computer gets crushed while others sit idle.",
          "reflectionQuestion": "What happens if one of the backend servers becomes sick or dies?"
        },
        "successSummary": "Traffic balanced! 100,000 requests distributed smoothly; all nodes healthy."
      },
      {
        "id": "B",
        "text": "The first computer takes everything until it crashes, then the next one starts.",
        "isOptimal": false,
        "consequenceText": "Crashing computers one by one causes constant app interruptions, dropped rides, and angry passengers.",
        "statImpact": {
          "latency": "Cascading Crashes",
          "capacity": "0",
          "risk": "Total Outage",
          "cost": "High"
        },
        "whatHappened": {
          "helped": "Saw why cascading failure is dangerous.",
          "bottleneck": "Unbalanced overload.",
          "reflectionQuestion": "Why should traffic be divided continuously from the very first request?"
        }
      },
      {
        "id": "C",
        "text": "Passengers must choose which computer number they want to connect to.",
        "isOptimal": false,
        "consequenceText": "Passengers have no idea what a server number is; asking users to pick server IDs is terrible design.",
        "statImpact": {
          "latency": "Confusing",
          "capacity": "Low",
          "risk": "User Drop",
          "cost": "Poor UX"
        },
        "whatHappened": {
          "helped": "Realized that internal infrastructure should be invisible to users.",
          "bottleneck": "Exposing internal routing to consumers.",
          "reflectionQuestion": "Should software handle routing automatically behind the scenes?"
        }
      }
    ],
    "discovery": {
      "badge": "Load Balancing",
      "tagline": "A smart traffic cop distributing incoming requests so no machine gets overwhelmed",
      "simpleMeaning": "A bank queue manager: When you enter a busy bank, you don't see 50 people crowding one teller window while four other tellers read newspapers. A staff member directs the next person in line to the next available teller. That staff member is the Load Balancer.",
      "olaExample": "Ola's Load Balancer receives 100,000 booking requests and routes 20,000 requests to each of 5 backend servers evenly.",
      "analogy": "Toll booth gates on a highway: Traffic divides into 8 open gates so cars don't all pile up behind Gate #1.",
      "howItWorks": [
        "1. Single Entry Point: All phones send requests to one public gateway.",
        "2. Health Checks: Load balancer pings all servers every 5 seconds. If Server 3 is dead, stop sending it traffic.",
        "3. Distribution Algorithms: Round-Robin (in turns), Least Connections (send to the least busy server)."
      ],
      "whyItMatters": "Load balancing prevents hot-spot crashes and ensures 100% smooth operations during massive traffic spikes.",
      "visualExplanation": "[100,000 Requests] ──► [LOAD BALANCER] ──► Evenly split across 4 Servers (25k each) ✓",
      "contrast": {
        "termA": "Load Balanced",
        "descA": "Traffic shared evenly; dead servers automatically bypassed.",
        "termB": "Unbalanced",
        "descB": "One machine overheats and crashes while others remain unused."
      },
      "teacherNotes": {
        "realWorld": "Cloud load balancers like AWS ALB/NLB operate at Layer 4 and Layer 7 with built-in SSL termination."
      }
    },
    "knowledgeCheck": {
      "question": "What does a Load Balancer do if one of the backend servers suddenly dies?",
      "options": [
        {
          "id": "A",
          "text": "It detects the dead server via health checks and routes all new traffic only to healthy servers.",
          "isCorrect": true,
          "explanation": "Correct! Automatic health checking ensures dead machines are bypassed instantly."
        },
        {
          "id": "B",
          "text": "It shuts down all other computers in sympathy.",
          "isCorrect": false,
          "explanation": "The entire purpose of load balancing is to keep the remaining servers running."
        },
        {
          "id": "C",
          "text": "It sends an apology letter to the dead computer's manufacturer.",
          "isCorrect": false,
          "explanation": "Load balancers automate technical routing, not postal apologies."
        }
      ],
      "hint": "Hint: Think about routing cars away from a blocked highway lane."
    }
  },
  {
    "id": 17,
    "stage": 2,
    "sno": 17,
    "topic": "Rate Limiting: Token Bucket Algorithms & Bot Traffic Shaping",
    "concept": "Rate Limiting & Bot Protection",
    "title": "Level 17: Stopping Bot Scripts from Flooding the App",
    "time": "Cyber Defense Alert — Ola Gateway",
    "usersCount": "1 Malicious Script vs. 100,000 Real Riders",
    "topicHint": "Protecting System Capacity with Fair Usage Turnstiles",
    "situation": "A malicious bot script targets the Ola dispatch gateway, sending 5,000 fake cab booking requests every second from a single IP address to crash the servers.",
    "problem": "What should the Ola app do if a single user tries to book 5,000 rides in one second?",
    "simulationType": "rate_limiter_turnstile",
    "choices": [
      {
        "id": "A",
        "text": "Block the flood of requests while letting normal passengers book without delay.",
        "isOptimal": true,
        "consequenceText": "Exactly right! This is Rate Limiting. Real humans tap 'Book' once or twice; they don't tap 5,000 times a second. The gateway blocks the flood with 'Too Many Requests' while real riders get cabs smoothly.",
        "statImpact": {
          "latency": "1ms Block",
          "capacity": "Bots Blocked",
          "risk": "Zero Server Crash",
          "cost": "Defended"
        },
        "whatHappened": {
          "helped": "Understood the critical need for rate limiting to protect public gateways from spam attacks.",
          "bottleneck": "Without rate limits, a single bad script can overwhelm servers and deny service to everyone.",
          "reflectionQuestion": "How does a subway turnstile ensure people enter one at a time with a valid token?"
        },
        "successSummary": "Gate protected! Malicious flood rejected with HTTP 429; genuine riders served smoothly."
      },
      {
        "id": "B",
        "text": "Accept all 5,000 bookings and send 5,000 cabs to the same house.",
        "isOptimal": false,
        "consequenceText": "Sending 5,000 cabs to one house creates a colossal traffic jam, wastes driver fuel, and strands real passengers across the city.",
        "statImpact": {
          "latency": "Chaos",
          "capacity": "0",
          "risk": "Physical Gridlock",
          "cost": "Disaster"
        },
        "whatHappened": {
          "helped": "Recognized that software must detect and reject obvious spam.",
          "bottleneck": "Unfiltered spam processing.",
          "reflectionQuestion": "Why should systems validate whether a request volume is physically realistic?"
        }
      },
      {
        "id": "C",
        "text": "Shut down the entire app for all users in the city.",
        "isOptimal": false,
        "consequenceText": "Shutting down the app gives the hacker exactly what they wanted: taking down the service for all legitimate users.",
        "statImpact": {
          "latency": "Total Blackout",
          "capacity": "0",
          "risk": "Attacker Wins",
          "cost": "Massive Loss"
        },
        "whatHappened": {
          "helped": "Saw why defensive systems isolate the abuser instead of penalizing everyone.",
          "bottleneck": "Excessive collateral damage.",
          "reflectionQuestion": "Why should security systems block only the offender's IP address?"
        }
      }
    ],
    "discovery": {
      "badge": "Rate Limiting",
      "tagline": "Enforce fair usage limits so bad actors cannot overwhelm the system",
      "simpleMeaning": "A museum ticket turnstile: You can only walk through the turnstile if you insert one token. If someone tries to shove 5,000 people through the door in one second, the metal turnstile locks in place and blocks them. Rate limiting is that digital turnstile.",
      "olaExample": "Ola limits each user to 2 ride booking requests per minute. If a script sends 5,000/sec, the server immediately rejects them with 'HTTP 429: Too Many Requests'.",
      "analogy": "Only 3 free samples per customer at an ice cream parlor: It prevents one greedy person from eating all the ice cream before others arrive.",
      "howItWorks": [
        "1. Token Bucket: Every user gets a digital bucket with 5 tokens. Each request takes 1 token.",
        "2. Refill: Tokens refill slowly (e.g., 1 token every 10 seconds).",
        "3. Reject Excess: If the bucket is empty, reject the extra requests instantly at the door."
      ],
      "whyItMatters": "Rate limiting stops Denial-of-Service (DoS) attacks, brute-force password guessing, and ticket-scalping bots.",
      "visualExplanation": "[Bot: 5,000 req/sec] ──► [RATE LIMITER TURNSTILE] ──► [BLOCKED: 429 Too Many Requests 🛑] | [Human: 1 req/sec] ──► [PASSED ✓]",
      "contrast": {
        "termA": "Rate Limited Gateway",
        "descA": "Protects resources; ensures fair access for all legitimate humans.",
        "termB": "Unprotected Gateway",
        "descB": "One malicious script can crash the entire company for everyone."
      },
      "teacherNotes": {
        "realWorld": "Token Bucket and Leaky Bucket algorithms running in Redis provide sub-millisecond rate check speeds."
      }
    },
    "knowledgeCheck": {
      "question": "What is the standard response given to a computer that sends too many requests too quickly?",
      "options": [
        {
          "id": "A",
          "text": "An error message indicating 'Too Many Requests' so the sender must back off.",
          "isCorrect": true,
          "explanation": "Correct! HTTP 429 tells the client they exceeded their allowed rate limit."
        },
        {
          "id": "B",
          "text": "A coupon for a free meal.",
          "isCorrect": false,
          "explanation": "Rate limiting punishes spam, not rewards it."
        },
        {
          "id": "C",
          "text": "A prompt asking for the driver's favorite color.",
          "isCorrect": false,
          "explanation": "Rate limiting is an automated network protocol protection, not a survey."
        }
      ],
      "hint": "Hint: Think about telling someone to slow down because they are asking too fast."
    }
  },
  {
    "id": 18,
    "stage": 2,
    "sno": 18,
    "topic": "Database Sharding: Horizontal Partitioning across Independent Nodes",
    "concept": "Database Sharding by Region",
    "title": "Level 18: Splitting 100 Million Records Across Cities",
    "time": "Pan-India Data Growth — 100 Million Trips",
    "usersCount": "100 Million Historical Trip Records",
    "topicHint": "Dividing Massive Storage Across Independent City Machines",
    "situation": "Ola now has 100 million trip receipts stored in its database. Searching for a driver's trip in Delhi takes 40 seconds because the database has to scan past millions of records from Bangalore and Mumbai.",
    "problem": "How can Ola quickly manage 100 million ride records without slowing down a single computer?",
    "simulationType": "database_sharding_ledgers",
    "choices": [
      {
        "id": "A",
        "text": "Divide the records across different computers based on city, like Delhi, Mumbai, and Bangalore.",
        "isOptimal": true,
        "consequenceText": "Exactly right! This is Database Sharding. By putting Delhi trips in a Delhi database and Mumbai trips in a Mumbai database, each machine only searches its own local records in 2 milliseconds.",
        "statImpact": {
          "latency": "2ms (vs 40s)",
          "capacity": "City Shards",
          "risk": "Zero Monolithic Lag",
          "cost": "Scalable"
        },
        "whatHappened": {
          "helped": "Understood database sharding and horizontal data partitioning.",
          "bottleneck": "Keeping 100 million records in one giant table makes searches crawl to a halt.",
          "reflectionQuestion": "Why is it faster to find a student's paper in a class folder rather than in a pile of all papers in the country?"
        },
        "successSummary": "Sharding deployed! City-based partitioning reduced query time from 40 seconds to 2 milliseconds."
      },
      {
        "id": "B",
        "text": "Put all 100 million records into one giant text file.",
        "isOptimal": false,
        "consequenceText": "A 100-million-line text file would take 15 minutes just to open and would crash the computer's memory instantly.",
        "statImpact": {
          "latency": "Freeze",
          "capacity": "0",
          "risk": "File Corruption",
          "cost": "Disaster"
        },
        "whatHappened": {
          "helped": "Realized that giant unindexed files are unusable at scale.",
          "bottleneck": "Unscalable flat file storage.",
          "reflectionQuestion": "How do databases divide work across multiple machines?"
        }
      },
      {
        "id": "C",
        "text": "Delete yesterday's rides every morning.",
        "isOptimal": false,
        "consequenceText": "Deleting ride records means riders lose trip receipts for tax filing and drivers lose proof of earnings.",
        "statImpact": {
          "latency": "Loss",
          "capacity": "0",
          "risk": "Legal Disaster",
          "cost": "Massive"
        },
        "whatHappened": {
          "helped": "Recognized that business records must be retained.",
          "bottleneck": "Unacceptable data destruction.",
          "reflectionQuestion": "How can systems keep all data while maintaining high search speed?"
        }
      }
    ],
    "discovery": {
      "badge": "Database Sharding",
      "tagline": "Divide giant tables into smaller independent pieces spread across multiple servers",
      "simpleMeaning": "A library with multiple floors: If all 100,000 books were dumped in one giant pile in the lobby, finding a book would take hours. Instead, Floor 1 holds History, Floor 2 holds Science, and Floor 3 holds Fiction. You go directly to the right floor in seconds.",
      "olaExample": "Ola shards ride databases by City ID. Delhi queries go to the Delhi database cluster; Bangalore queries go to the Bangalore cluster.",
      "analogy": "Phone books: Instead of one massive phonebook for all of India, every city has its own local phonebook.",
      "howItWorks": [
        "1. Shard Key: Pick an attribute to divide by (e.g. `City_ID`).",
        "2. Route Query: If a rider is in Mumbai, the app router directs the query straight to the Mumbai Shard.",
        "3. Small & Fast: Each database only handles a fraction of the total data, keeping lookups lightning-fast."
      ],
      "whyItMatters": "Sharding allows companies to grow to billions of records without hitting hardware memory ceilings.",
      "visualExplanation": "[Query: Delhi Ride] ──► [Router Checks City] ──► Direct to [Delhi Shard (2ms!)] (Ignores Mumbai & Bangalore)",
      "contrast": {
        "termA": "Sharded Database",
        "descA": "Data split across multiple servers; queries route directly to the specific slice.",
        "termB": "Giant Single Database",
        "descB": "One huge disk tries to hold all data in the world, eventually choking and slowing down."
      },
      "teacherNotes": {
        "realWorld": "Consistent hashing and virtual nodes prevent uneven data hotspotting across shards."
      }
    },
    "knowledgeCheck": {
      "question": "What is the key used to decide which database machine stores a particular ride record called?",
      "options": [
        {
          "id": "A",
          "text": "The Shard Key (such as City ID or User ID).",
          "isCorrect": true,
          "explanation": "Correct! The shard key determines how data is partitioned across independent nodes."
        },
        {
          "id": "B",
          "text": "The car's physical ignition key.",
          "isCorrect": false,
          "explanation": "Car ignition keys start engines; database shard keys partition software records."
        },
        {
          "id": "C",
          "text": "The driver's shoe size.",
          "isCorrect": false,
          "explanation": "Shoe size is irrelevant to database architecture."
        }
      ],
      "hint": "Hint: Think about the attribute used to split the data (like city or region)."
    }
  },
  {
    "id": 19,
    "stage": 2,
    "sno": 19,
    "topic": "CAP Theorem: Consistency, Availability, and Partition Tolerance",
    "concept": "CAP Theorem Trade-offs",
    "title": "Level 19: When the Telecom Cable Between Cities Breaks",
    "time": "Underground Fiber Cut — Highway Construction",
    "usersCount": "Delhi Cluster vs. Bangalore Cluster",
    "topicHint": "Choosing Between 100% Identical Data vs. Keeping the App Running",
    "situation": "A road construction crew accidentally severs the underground optical fiber line connecting Ola's Delhi and Bangalore datacenters. The two regional servers can no longer talk to each other.",
    "problem": "If the internet line between two city offices breaks, what choice must the app make?",
    "simulationType": "cap_network_partition",
    "choices": [
      {
        "id": "A",
        "text": "Either keep serving rides locally with delayed updates, or pause booking until the line is repaired.",
        "isOptimal": true,
        "consequenceText": "Exactly right! This is the CAP Theorem. When a network partition happens, you MUST choose between Availability (keep booking cabs locally in Delhi and Bangalore) OR Consistency (pause bookings so data stays 100% in sync). You cannot have both at once during a cut.",
        "statImpact": {
          "latency": "Local 10ms",
          "capacity": "AP Available",
          "risk": "Sync Delayed",
          "cost": "Resilient"
        },
        "whatHappened": {
          "helped": "Understood the fundamental CAP Theorem trade-off during network partitions.",
          "bottleneck": "Believing a distributed system can maintain both perfect real-time sync and 100% uptime when the physical wire is cut.",
          "reflectionQuestion": "Why does a ride app prefer keeping cabs moving locally rather than freezing all cars across the country?"
        },
        "successSummary": "CAP trade-off made! Availability chosen: local riders continue booking cabs while fiber is repaired."
      },
      {
        "id": "B",
        "text": "Turn off every mobile phone in the country.",
        "isOptimal": false,
        "consequenceText": "Turning off user phones is impossible and would destroy customer trust completely.",
        "statImpact": {
          "latency": "Outage",
          "capacity": "0",
          "risk": "Absurd",
          "cost": "Total"
        },
        "whatHappened": {
          "helped": "Saw why systems must adapt gracefully rather than crashing user hardware.",
          "bottleneck": "Unrealistic intervention.",
          "reflectionQuestion": "How should software behave when internet connections between cities drop?"
        }
      },
      {
        "id": "C",
        "text": "Make all cab rides free until the line is fixed.",
        "isOptimal": false,
        "consequenceText": "Giving away millions in free rides bankrupts the company; CAP is about data synchronization, not pricing promotions.",
        "statImpact": {
          "latency": "Free Fall",
          "capacity": "Bankrupt",
          "risk": "Financial Ruin",
          "cost": "Total Loss"
        },
        "whatHappened": {
          "helped": "Confused distributed consensus with promotional giveaways.",
          "bottleneck": "Ignoring the technical trade-off.",
          "reflectionQuestion": "What is the real dilemma when two computers lose communication?"
        }
      }
    ],
    "discovery": {
      "badge": "CAP Theorem",
      "tagline": "Consistency (Everyone sees identical data) vs. Availability (Everyone gets an answer)",
      "simpleMeaning": "Two bank branches during a phone blackout: A traveler wants to withdraw money in Delhi, but the phone line to their home branch in Bangalore is cut. Does the Delhi teller (1) Give them money to be helpful (Availability), risking they might spend more than they have, or (2) Refuse the withdrawal until the line is fixed to protect exact numbers (Consistency)? You can't do both.",
      "olaExample": "Ola picks Availability (AP): Riders in Delhi can still book local Delhi cabs even if the line to Bangalore is down. The systems sync up once the fiber is reconnected.",
      "analogy": "Writing letters during a snowstorm: You keep doing your daily work locally even if the mail carrier cannot reach the next village today.",
      "howItWorks": [
        "1. Partition Happens (P): Underground fiber cut disconnects two server regions.",
        "2. Choice A (CP): Block bookings until servers can talk. 100% consistent, but app stops for riders.",
        "3. Choice B (AP): Keep booking cabs locally. App stays running, and data syncs up later once the wire is fixed."
      ],
      "whyItMatters": "Understanding CAP ensures architects design resilient systems that stay operational even when network cables break.",
      "visualExplanation": "[FIBER CABLE CUT ⚡] ──► Pick: [AP: Keep Cabs Moving Locally ✓] OR [CP: Freeze App Nationwide Until Fixed]",
      "contrast": {
        "termA": "Availability (AP)",
        "descA": "Keep the app working for users, accepting that sync will happen a bit later.",
        "termB": "Consistency (CP)",
        "descB": "Block requests until every computer in the world confirms the exact same number."
      },
      "teacherNotes": {
        "realWorld": "Eric Brewer's CAP Theorem proves that no distributed system can achieve both C and A in the presence of P."
      }
    },
    "knowledgeCheck": {
      "question": "Why does a ride-hailing app like Ola generally prioritize Availability (AP) during a network partition?",
      "options": [
        {
          "id": "A",
          "text": "Because stranding passengers in the rain is worse than letting local servers sync their ride records an hour later.",
          "isCorrect": true,
          "explanation": "Correct! Keeping cabs moving locally provides the best real-world user safety and service continuity."
        },
        {
          "id": "B",
          "text": "Because passengers love when the app shows a white error screen.",
          "isCorrect": false,
          "explanation": "White error screens lead to angry passengers and lost revenue."
        },
        {
          "id": "C",
          "text": "Because fiber optic cables cannot be repaired by humans.",
          "isCorrect": false,
          "explanation": "Cables are repaired all the time by telecom technicians."
        }
      ],
      "hint": "Hint: Think about whether passengers need to get home safely during bad weather."
    }
  },
  {
    "id": 20,
    "stage": 2,
    "sno": 20,
    "topic": "BASE: Basically Available, Soft State, Eventual Consistency",
    "concept": "Eventual Consistency in Real-Time Maps",
    "title": "Level 20: Why Car Icons Can Be Half a Second Behind",
    "time": "Live Map Tracking — Indiranagar 100 Feet Road",
    "usersCount": "50,000 Live Animated Maps",
    "topicHint": "Keeping the Screen Fast and Smooth Even if Data Catches Up Shortly After",
    "situation": "A rider watches little yellow cab icons glide across their map screen. A junior engineer worries: 'Wait! The cab icon on the map is 300 milliseconds behind the physical car's exact tire position on the asphalt!'",
    "problem": "When looking at cabs on your map, why is it okay if a car's icon is half a second behind where the car is on the road?",
    "simulationType": "base_eventual_consistency",
    "choices": [
      {
        "id": "A",
        "text": "The app stays fast and smooth, and the position catches up in a tiny fraction of a second anyway.",
        "isOptimal": true,
        "consequenceText": "Exactly right! This is Eventual Consistency (the 'E' in BASE). For moving cars, having the icon catch up in 300 milliseconds is completely fine for human eyes. Demanding 100% microsecond perfection would freeze the phone screen.",
        "statImpact": {
          "latency": "300ms Smooth",
          "capacity": "50k Live Maps",
          "risk": "Zero Freeze",
          "cost": "Lightweight"
        },
        "whatHappened": {
          "helped": "Understood why eventual consistency is perfect for streaming location updates.",
          "bottleneck": "Demanding instant global synchronization for moving cars freezes phones with network lag.",
          "reflectionQuestion": "Does a passenger waiting for a pickup notice if the car icon is 0.3 seconds behind reality?"
        },
        "successSummary": "Eventual consistency verified! Screen stays smooth; car position syncs up fractions of a second later."
      },
      {
        "id": "B",
        "text": "Drivers prefer hiding from passengers on the map.",
        "isOptimal": false,
        "consequenceText": "Drivers want passengers to find them quickly; small latency is a natural network reality, not driver hiding.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "Confusion",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Guessed personal motives instead of network physics.",
          "bottleneck": "Missing streaming mechanics.",
          "reflectionQuestion": "Why does cellular data transmission take a fraction of a second to travel through the air?"
        }
      },
      {
        "id": "C",
        "text": "City roads change their names every few seconds.",
        "isOptimal": false,
        "consequenceText": "Street names do not change every second; network transmission delay is the only reason for the tiny time difference.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "Absurd",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Invented false geographic claims.",
          "bottleneck": "Overlooking signal transmission delays.",
          "reflectionQuestion": "How does eventual consistency keep animations silky smooth?"
        }
      }
    ],
    "discovery": {
      "badge": "BASE & Eventual Consistency",
      "tagline": "Fast, smooth, and usable right now — data will catch up in a split second",
      "simpleMeaning": "Watching live sports on TV: When your favorite team scores a goal, the TV broadcast shows it about 2 seconds after the player actually kicked the ball in the stadium. You still enjoy the game completely. Demanding 0.0000-second perfection would cause the video to buffer and stutter.",
      "olaExample": "Ola updates driver map markers using eventual consistency. The car icon glides smoothly, syncing to the exact GPS spot in fractions of a second.",
      "analogy": "Social media likes: When a celebrity posts a photo, seeing 10,000 likes vs 10,005 likes doesn't matter; the count catches up eventually.",
      "howItWorks": [
        "1. Basically Available: The app responds immediately without making the user stare at a spinning circle.",
        "2. Soft State: Data is in motion and updating continuously.",
        "3. Eventual Consistency: Within a few hundred milliseconds, all screens catch up to the latest position."
      ],
      "whyItMatters": "Eventual consistency makes apps feel instantaneous, responsive, and fluid under massive user volume.",
      "visualExplanation": "[Cab Moves on Road] ──(300ms Transit)──► [Icon Glides Smoothly on Phone Map ✓] ──► (Eventual Sync!)",
      "contrast": {
        "termA": "Eventual Consistency (BASE)",
        "descA": "Smooth, instant response; exact numbers settle a fraction of a second later.",
        "termB": "Immediate Strict Consistency (ACID)",
        "descB": "Locks everything until 100% verified; required for money, but too slow for moving car animations."
      },
      "teacherNotes": {
        "realWorld": "NoSQL stores like Cassandra and DynamoDB leverage eventual consistency to deliver extreme write throughput."
      }
    },
    "knowledgeCheck": {
      "question": "For which of the following features is Eventual Consistency totally acceptable in the Ola app?",
      "options": [
        {
          "id": "A",
          "text": "Showing the live moving car icon gliding on the passenger's map screen.",
          "isCorrect": true,
          "explanation": "Correct! A split-second delay in visual icon tracking is completely harmless."
        },
        {
          "id": "B",
          "text": "Deducting money from a passenger's bank account.",
          "isCorrect": false,
          "explanation": "Bank balance changes must have strict, immediate consistency (ACID), never guessing."
        },
        {
          "id": "C",
          "text": "Verifying if a passenger's one-time password (OTP) is correct.",
          "isCorrect": false,
          "explanation": "OTP verification requires immediate strict accuracy to prevent unauthorized logins."
        }
      ],
      "hint": "Hint: Think about visual updates where being 0.3 seconds behind causes no harm."
    }
  },
  {
    "id": 21,
    "stage": 2,
    "sno": 21,
    "topic": "Fault Tolerance & Resilience: Redundancy, Recovery, Graceful Degradation",
    "concept": "Fault Tolerance & Circuit Breakers",
    "title": "Level 21: Surviving Sub-System Outages Mid-Trip",
    "time": "Peak Traffic — 3rd Party Partner Outage",
    "usersCount": "80,000 Live Rides in Progress",
    "topicHint": "Quarantining Broken Secondary Services so Core Cab Bookings Keep Rolling",
    "situation": "A third-party external company that sends promotional marketing SMS texts suffers a server fire and stops responding completely.",
    "problem": "If the computer that sends promotional text messages stops working, what should happen to cab bookings?",
    "simulationType": "fault_tolerance_resilience",
    "choices": [
      {
        "id": "A",
        "text": "Cab bookings should keep working normally, ignoring the broken text message system.",
        "isOptimal": true,
        "consequenceText": "Exactly right! This is Graceful Degradation. When non-essential features fail, the system flips a digital circuit breaker to quarantine the problem. Passengers can still book and ride cabs with zero interruption.",
        "statImpact": {
          "latency": "12ms",
          "capacity": "Core Cab Booking 100%",
          "risk": "Zero Cascade",
          "cost": "Resilient"
        },
        "whatHappened": {
          "helped": "Understood failure isolation and graceful degradation.",
          "bottleneck": "Letting a secondary failing feature freeze the core ride dispatch engine.",
          "reflectionQuestion": "Why should a car's radio breaking not cause the steering wheel and brakes to lock up?"
        },
        "successSummary": "Fault isolated! Circuit breaker opened; broken marketing server quarantined while rides roll smoothly."
      },
      {
        "id": "B",
        "text": "The whole app should shut down so no one can book a cab.",
        "isOptimal": false,
        "consequenceText": "Shutting down the entire ride service because promotional coupons can't send is terrible engineering and costs millions.",
        "statImpact": {
          "latency": "Down",
          "capacity": "0",
          "risk": "Total Collapse",
          "cost": "High Loss"
        },
        "whatHappened": {
          "helped": "Saw why secondary bugs should never kill the main application.",
          "bottleneck": "Tight coupling and cascading failure.",
          "reflectionQuestion": "How do circuit breakers protect core services from external outages?"
        }
      },
      {
        "id": "C",
        "text": "All cabs should stop moving in the middle of the road.",
        "isOptimal": false,
        "consequenceText": "Stopping physical cars on highways would cause massive road accidents; software bugs must never endanger real-world safety.",
        "statImpact": {
          "latency": "Emergency",
          "capacity": "0",
          "risk": "Life Threat",
          "cost": "Extreme"
        },
        "whatHappened": {
          "helped": "Recognized physical safety boundaries in system design.",
          "bottleneck": "Unsafe system behavior.",
          "reflectionQuestion": "How does graceful degradation guarantee safety?"
        }
      }
    ],
    "discovery": {
      "badge": "Fault Tolerance & Resilience",
      "tagline": "When one secondary part breaks, isolate it so the main engine keeps running",
      "simpleMeaning": "Car electrical fuses: If the radio in your car blows a fuse, your headlights, steering wheel, and engine keep working 100% normally. You don't crash on the highway because of a broken radio. Circuit breakers isolate the fault.",
      "olaExample": "If the third-party SMS coupon provider goes down, Ola's circuit breaker trips open. Cab bookings and GPS matching continue with zero lag.",
      "analogy": "A submarine with watertight bulkheads: If one compartment springs a leak, steel doors seal it off so the rest of the ship stays afloat.",
      "howItWorks": [
        "1. Failure Detection: The system notices the SMS server timing out repeatedly.",
        "2. Circuit Breaker Trips: Stop calling the broken SMS service immediately.",
        "3. Graceful Fallback: Continue booking cabs normally; re-test the SMS service quietly in the background."
      ],
      "whyItMatters": "Fault tolerance prevents minor partner glitches from causing catastrophic company-wide blackouts.",
      "visualExplanation": "[SMS Service Dies! 🔥] ──► [CIRCUIT BREAKER OPENS ⚡] ──► [Core Cab Dispatch Stays 100% Active ✓]",
      "contrast": {
        "termA": "Fault Tolerant (Resilient)",
        "descA": "Isolates failures; secondary glitches never stop primary customer features.",
        "termB": "Brittle System",
        "descB": "One tiny broken button causes the entire mobile app to freeze and crash."
      },
      "teacherNotes": {
        "realWorld": "Netflix Hystrix and Resilience4j popularized the Circuit Breaker pattern in microservice ecosystems."
      }
    },
    "knowledgeCheck": {
      "question": "What is the primary purpose of a software Circuit Breaker in the Ola backend?",
      "options": [
        {
          "id": "A",
          "text": "To isolate a failing sub-service so it doesn't drag down and crash the core cab booking system.",
          "isCorrect": true,
          "explanation": "Correct! It stops calls to failing components to prevent cascading application crashes."
        },
        {
          "id": "B",
          "text": "To turn off the headlights of all yellow cabs at midnight.",
          "isCorrect": false,
          "explanation": "Automotive lighting is controlled by car drivers, not backend software circuit breakers."
        },
        {
          "id": "C",
          "text": "To give free promo codes to passengers.",
          "isCorrect": false,
          "explanation": "Circuit breakers handle failure resilience, not marketing discounts."
        }
      ],
      "hint": "Hint: Think about electrical fuses protecting your house from a short circuit."
    }
  },
  {
    "id": 22,
    "stage": 2,
    "sno": 22,
    "topic": "Stream Processing & WebSockets: Real-Time Pipelines, Persistent Two-Way Communication",
    "concept": "Real-Time Streaming & WebSockets",
    "title": "Level 22: Watching Your Cab Glide Smoothly on the Map",
    "time": "Active Trip Telemetry — Driver Approaching",
    "usersCount": "100,000 Live Moving Cabs",
    "topicHint": "Keeping an Open Two-Way Line for Live Continuous Movement",
    "situation": "A passenger stands outside an office waiting for their booked cab. On the phone screen, the little yellow cab glides smoothly down the road toward the pickup point in real time.",
    "problem": "How does your phone show a moving cab gliding smoothly across the map without you having to tap refresh every second?",
    "simulationType": "stream_websockets",
    "choices": [
      {
        "id": "A",
        "text": "The driver's phone keeps an open line with the computer to send new positions continuously.",
        "isOptimal": true,
        "consequenceText": "Spot on! This is persistent two-way communication (WebSockets). Instead of hanging up and redialing every second, the phone keeps an open connection, streaming coordinates smoothly like a live walkie-talkie.",
        "statImpact": {
          "latency": "5ms Stream",
          "capacity": "100k Live Streams",
          "risk": "Zero Refresh Needed",
          "cost": "Lightweight"
        },
        "whatHappened": {
          "helped": "Understood persistent two-way streaming vs repeated polling.",
          "bottleneck": "Re-establishing full connections every second causes massive battery drain and server overhead.",
          "reflectionQuestion": "Why is keeping a walkie-talkie channel open better than dialing a new phone call for every single sentence?"
        },
        "successSummary": "Streaming connection verified! Cab coordinates flow continuously with zero manual refreshes."
      },
      {
        "id": "B",
        "text": "The phone guesses where the car is by looking at the weather forecast.",
        "isOptimal": false,
        "consequenceText": "Weather reports tell you about rain and clouds; they have zero information about where a specific cab is driving.",
        "statImpact": {
          "latency": "Blind Guess",
          "capacity": "0",
          "risk": "Wrong Location",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Saw why vehicle tracking requires live telemetry, not environmental guesses.",
          "bottleneck": "Using irrelevant data sources.",
          "reflectionQuestion": "How does GPS hardware determine actual vehicle position?"
        }
      },
      {
        "id": "C",
        "text": "The driver calls the passenger every 5 seconds to say where they are.",
        "isOptimal": false,
        "consequenceText": "Calling every 5 seconds while driving is illegal, dangerous, and physically impossible for drivers to do.",
        "statImpact": {
          "latency": "Hazardous",
          "capacity": "0",
          "risk": "Accident Risk",
          "cost": "Illegal"
        },
        "whatHappened": {
          "helped": "Recognized the need for automated background digital telemetry.",
          "bottleneck": "Manual human distraction.",
          "reflectionQuestion": "How do background digital streams automate telemetry invisibly?"
        }
      }
    ],
    "discovery": {
      "badge": "Real-Time Streaming & WebSockets",
      "tagline": "Keep a live, open channel so data flows continuously in real time",
      "simpleMeaning": "A phone call vs. sending letters: If you send a postal letter every time you take a step, updates take days. If you keep an open phone call running on speaker, the other person hears your steps in real time. WebSockets is that open speakerphone line.",
      "olaExample": "The Ola driver app keeps a WebSocket connection open to Ola servers, streaming latitude and longitude coordinates every 2 seconds.",
      "analogy": "A garden water hose: Once the valve is open, water flows continuously without you having to turn the tap on and off every second.",
      "howItWorks": [
        "1. Handshake: Phone and server establish an open persistent socket connection.",
        "2. Live Stream: Driver app pushes small GPS coordinate packets continuously.",
        "3. Instant Broadcast: Server pushes the coordinate straight to the passenger's screen in 5 milliseconds."
      ],
      "whyItMatters": "Persistent streams eliminate network connection overhead and deliver smooth, real-time live map animations.",
      "visualExplanation": "[Driver Phone] ──(Live Open Socket Stream: Lat/Long)──► [Ola Gateway] ──► [Passenger Map Glides ✓]",
      "contrast": {
        "termA": "Persistent Stream (WebSockets)",
        "descA": "Single open connection; coordinates push instantly with microsecond latency.",
        "termB": "Repeated Polling (HTTP)",
        "descB": "Tears down and rebuilds a new connection every second, wasting data and battery."
      },
      "teacherNotes": {
        "realWorld": "Real-time transport systems combine WebSockets with pub/sub event brokers like Apache Kafka."
      }
    },
    "knowledgeCheck": {
      "question": "Why are WebSockets preferred over standard web requests for live cab tracking on a map?",
      "options": [
        {
          "id": "A",
          "text": "They maintain a continuous open line so location updates flow instantly without reconnecting each time.",
          "isCorrect": true,
          "explanation": "Correct! WebSockets avoid the heavy overhead of creating new connections every second."
        },
        {
          "id": "B",
          "text": "They make the cab driver play music through the phone speaker.",
          "isCorrect": false,
          "explanation": "WebSockets are a networking transport protocol, not an audio music player."
        },
        {
          "id": "C",
          "text": "They clean the passenger's phone screen automatically.",
          "isCorrect": false,
          "explanation": "WebSockets manage digital data packets, not physical screen cleaning."
        }
      ],
      "hint": "Hint: Think about keeping an open line versus dialing a new phone number every second."
    }
  },
  {
    "id": 23,
    "stage": 2,
    "sno": 23,
    "topic": "Geospatial Search: Coordinates, Proximity Queries, Spatial Indexing",
    "concept": "Geospatial Search & Proximity Queries",
    "title": "Level 23: Finding the 3 Nearest Cabs in 2 Seconds",
    "time": "Pickup Request — Indiranagar 100 Feet Road",
    "usersCount": "50,000 Cabs in City",
    "topicHint": "Searching Inside Local Neighborhood Map Boxes Instead of Scanning the Whole Country",
    "situation": "A passenger taps 'Book Cab' at Indiranagar. There are 50,000 cabs in the city and 500,000 across India. The app needs to find the 3 closest available drivers in under 2 seconds.",
    "problem": "When you open the Ola app, how does it find the 3 closest cabs near you in just a couple of seconds?",
    "simulationType": "geospatial_spatial_indexing",
    "choices": [
      {
        "id": "A",
        "text": "It only checks cabs inside your neighborhood box instead of scanning every car in the whole country.",
        "isOptimal": true,
        "consequenceText": "Exactly right! This is Spatial Indexing. The map is divided into little grid boxes (like city postal pin codes). The computer only searches the box you are standing in and the 8 surrounding boxes, matching 3 nearby cabs in 4 milliseconds!",
        "statImpact": {
          "latency": "4ms (vs 45s)",
          "capacity": "Spatial Quad-Tree",
          "risk": "Zero Delay",
          "cost": "Instant Match"
        },
        "whatHappened": {
          "helped": "Understood geospatial indexing and bounding-box proximity searches.",
          "bottleneck": "Calculating geometric distance to all 500,000 cars in the country one by one takes 45 seconds and drains computer power.",
          "reflectionQuestion": "Why is it faster to search for a book in one specific bookshelf rather than inspecting every book in the entire city library?"
        },
        "successSummary": "Nearest cabs matched! Spatial indexing found 3 drivers within 800m in just 4 milliseconds."
      },
      {
        "id": "B",
        "text": "It calculates the distance to all 500,000 cars in India one by one.",
        "isOptimal": false,
        "consequenceText": "Calculating mathematical distance to 500,000 cars one-by-one for every single search takes over 45 seconds and melts database processors.",
        "statImpact": {
          "latency": "45s Crawl",
          "capacity": "Overloaded",
          "risk": "CPU Collapse",
          "cost": "Massive"
        },
        "whatHappened": {
          "helped": "Saw why brute-force distance calculation fails at scale.",
          "bottleneck": "Full-table scanning across global coordinates.",
          "reflectionQuestion": "Why does a passenger in Bangalore never care about a cab driving in Delhi?"
        }
      },
      {
        "id": "C",
        "text": "It assigns a random cab from anywhere in the country.",
        "isOptimal": false,
        "consequenceText": "Assigning a random cab could match a passenger in Bangalore with a driver 2,000km away in Delhi, taking 3 days to arrive!",
        "statImpact": {
          "latency": "3 Days Arrival",
          "capacity": "0",
          "risk": "Useless Match",
          "cost": "Disaster"
        },
        "whatHappened": {
          "helped": "Recognized that proximity matching must be geographically accurate.",
          "bottleneck": "Ignoring spatial coordinates.",
          "reflectionQuestion": "Why is proximity the core requirement for taxi dispatch?"
        }
      }
    ],
    "discovery": {
      "badge": "Geospatial Indexing",
      "tagline": "Carve the map into spatial grid cells to match nearby drivers in milliseconds",
      "simpleMeaning": "Postal Pin Codes: If someone asks where you live, they don't search through 1.4 billion people one by one. They look at your postal pin code (e.g. 560038), which instantly narrows the search to a small neighborhood. Geospatial indexing is a digital pin code system for maps.",
      "olaExample": "Ola divides the earth into hexagonal cells using spatial algorithms (like Uber H3 or Geohash). A pickup in Indiranagar only checks drivers inside Cell #88618925 and adjacent cells.",
      "analogy": "Chessboard squares: If your piece is on square E4, you only check adjacent squares (E5, D4, F4), not all 64 squares on the board.",
      "howItWorks": [
        "1. Spatial Grid: The world map is partitioned into indexed cells (e.g., 500-meter hexagons).",
        "2. Driver Hashing: Every car coordinate maps to a specific cell ID in memory.",
        "3. Proximity Query: Find drivers whose cell ID matches the passenger's cell or the 6 adjacent cells in 4 milliseconds."
      ],
      "whyItMatters": "Geospatial indexing allows apps to match millions of riders with nearby drivers in milliseconds without brute-force math.",
      "visualExplanation": "[Rider at Indiranagar] ──► [Search Cell #560038 (2km radius)] ──► [3 Cabs Matched in 4ms ✓] (Ignores 499,997 cars far away!)",
      "contrast": {
        "termA": "Geospatial Index (H3/Geohash)",
        "descA": "Divides map into grid cells; searches only the local neighborhood in 4ms.",
        "termB": "Brute-Force Calculation",
        "descB": "Calculates math distance to all 500,000 cars in the nation, taking 45 seconds."
      },
      "teacherNotes": {
        "realWorld": "Mobility companies use Uber H3 hexagonal hierarchical spatial indexes and Redis GEO commands."
      }
    },
    "knowledgeCheck": {
      "question": "How does spatial indexing help the Ola app find nearby drivers so quickly?",
      "options": [
        {
          "id": "A",
          "text": "It cuts the map into small grid cells and only checks cars in your immediate local cell.",
          "isCorrect": true,
          "explanation": "Correct! It filters out 99.9% of distant cars instantly, searching only the local grid."
        },
        {
          "id": "B",
          "text": "It paints all nearby cabs bright green so they show up brighter on the phone screen.",
          "isCorrect": false,
          "explanation": "Spatial indexing is mathematical spatial partitioning, not car painting."
        },
        {
          "id": "C",
          "text": "It makes the driver honk their car horn three times.",
          "isCorrect": false,
          "explanation": "Honking horns is physical sound, not software database indexing."
        }
      ],
      "hint": "Hint: Think about searching within your neighborhood postal code box."
    }
  }
];

// Browser and Node.js environment exports
if (typeof window !== 'undefined') {
  window.GAME_STAGES = STAGES;
  window.GAME_LEVELS = LEVELS;
  window.STAGES = STAGES;
  window.LEVELS = LEVELS;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { STAGES, LEVELS };
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
    // LEVEL 20: BASE & EVENTUAL CONSISTENCY (LIVE MAP TELEMETRY)
    // =========================================================================
    renderBaseEventualConsistencyScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        // Moving Cab streaming coordinates
        this.renderOlaCab(220, 190, 'SE', 'moving', 'Moving Cab (Actual GPS)') +
        // Wave showing 300ms transit delay
        '<path d="M260,190 Q340,150 420,180" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,3" filter="url(#glowCyan)"><animate attributeName="stroke-dashoffset" values="14;0" dur="1s" repeatCount="indefinite"/></path>' +
        // Rider phone showing icon
        this.renderPhoneClient(450, 190, 'Rider Map (300ms Eventual Sync)', 'ready') +
        // Status HUD
        '<g transform="translate(320, 80)">' +
          '<rect x="-70" y="-14" width="140" height="28" rx="5" fill="#0f172a" stroke="#22c55e" stroke-width="1.2"/>' +
          '<text x="0" y="4" text-anchor="middle" font-size="7.5" font-family="sans-serif" font-weight="900" fill="#4ade80">EVENTUAL SYNC: 300MS LAG (SMOOTH)</text>' +
        '</g>';

      return this.wrapScene({
        theme: 'night',
        badgeText: isOptimal ? 'BASE EVENTUAL CONSISTENCY ACTIVE' : 'EVENTUAL CONSISTENCY MAP TRACKING',
        badgeType: isOptimal ? 'solution' : 'problem',
        telemetryText: isOptimal ? 'Map Sync: 300ms Latency • UI Smooth & Responsive' : 'Locking UI for Exact Microsecond GPS',
        footerIcon: '⏱️',
        footerTitle: isOptimal ? 'Fluid User Experience with Eventual Consistency' : 'Consistency Trade-off',
        footerDesc: isOptimal ? 'The cab icon catches up fractions of a second later, keeping the phone animation silky smooth without stutter.' : 'Demanding absolute zero-latency synchronization locks the screen and drains phone batteries.',
        svgContent
      });
    },

    // =========================================================================
    // LEVEL 22: STREAM PROCESSING & WEBSOCKETS (PERSISTENT TWO-WAY TELEMETRY)
    // =========================================================================
    renderStreamWebSocketsScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);

      const svgContent = 
        this.renderCityRoadGrid(12, 8, 320, 100, 'city') +
        // Moving driver cab
        this.renderOlaCab(170, 210, 'SE', 'moving', 'Driver App (Live GPS)') +
        // Two-way continuous stream pipe
        '<g transform="translate(320, 170)">' +
          '<rect x="-60" y="-20" width="120" height="40" rx="6" fill="#0f172a" stroke="#22c55e" stroke-width="1.8" filter="url(#glowGreen)"/>' +
          '<text x="0" y="-6" text-anchor="middle" font-size="7.5" font-family="sans-serif" font-weight="900" fill="#4ade80">⚡ WEBSOCKET PIPELINE</text>' +
          '<text x="0" y="8" text-anchor="middle" font-size="6.5" font-family="sans-serif" font-weight="700" fill="#93c5fd">Persistent Open Stream (5ms)</text>' +
        '</g>' +
        // Rider phone receiving coordinates
        this.renderPhoneClient(470, 200, 'Rider Screen (Gliding Icon)', 'ready');

      return this.wrapScene({
        theme: 'night',
        badgeText: isOptimal ? 'PERSISTENT WEBSOCKET STREAM ACTIVE' : 'REAL-TIME STREAMING TELEMETRY',
        badgeType: isOptimal ? 'solution' : 'problem',
        telemetryText: isOptimal ? 'Open Two-Way Socket • Latency: 5ms' : 'Repeated HTTP Polling (High Overhead)',
        footerIcon: '📡',
        footerTitle: isOptimal ? 'Continuous Live Coordinates Flow' : 'Real-Time Pipeline',
        footerDesc: isOptimal ? 'An open two-way connection streams driver coordinates continuously to the passenger screen without manual page refreshes.' : 'Reconnecting every second creates heavy overhead, drains battery, and stutters.',
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
        case 'base_eventual_consistency':
          return this.renderBaseEventualConsistencyScene(choiceMade);
        case 'stream_websockets':
          return this.renderStreamWebSocketsScene(choiceMade);
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
