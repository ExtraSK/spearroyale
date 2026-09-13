(function() {
  const petalsEl = document.getElementById('petals');
  const petalShapes = ['❀', '✿', '❁', '✾', '❋'];
  const pinks = ['#F04FA3', '#FF65B5', '#FF8FC9', '#E84393', '#FD79A8', '#C22C7C'];
  const PETAL_COUNT = window.innerWidth < 600 ? 0 : 26;

  for (let i = 0; i < PETAL_COUNT; i++) {
    const p = document.createElement('span');
    p.className = 'petal';
    p.textContent = petalShapes[Math.floor(Math.random() * petalShapes.length)];
    p.style.left = Math.random() * 100 + '%';
    p.style.fontSize = (10 + Math.random() * 14) + 'px';
    p.style.color = pinks[Math.floor(Math.random() * pinks.length)];
    p.style.animationDuration = (10 + Math.random() * 16) + 's';
    p.style.animationDelay = (Math.random() * -26) + 's';
    p.style.setProperty('--drift', (Math.random() * 140 - 70) + 'px');
    p.style.opacity = (0.3 + Math.random() * 0.5).toFixed(2);
    petalsEl.appendChild(p);
  }

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });

    document.addEventListener('click', function(e) {
      if (!navLinks.contains(e.target) && e.target !== menuToggle) {
        navLinks.classList.remove('active');
      }
    });
  }

  const copyBtn = document.getElementById('copyIPBtn');
  const copyText = document.getElementById('copyText');
  const copyIcon = document.getElementById('copyIcon');
  const ipEl = document.getElementById('serverIP');
  const ip = ipEl ? ipEl.textContent.trim() : 'spearroyale.xyz';

  function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise((resolve, reject) => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        resolve();
      } catch (err) {
        reject(err);
      }
      document.body.removeChild(ta);
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', function() {
      copyToClipboard(ip).then(() => {
        copyText.textContent = 'Copied';
        copyIcon.textContent = '✓';
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyText.textContent = 'Copy';
          copyIcon.textContent = '⧉';
          copyBtn.classList.remove('copied');
        }, 1600);
      }).catch(() => {
        copyText.textContent = 'Failed';
        setTimeout(() => {
          copyText.textContent = 'Copy';
        }, 1600);
      });
    });
  }

  const playNow = document.getElementById('playNowBtn');
  if (playNow) {
    playNow.addEventListener('click', function(e) {
      e.preventDefault();
      const info = document.getElementById('info');
      if (info) {
        info.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

})();