// Shared navigation and footer for all Kingsley pages
function getCurrentPage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  return path;
}

function renderNav() {
  const page = getCurrentPage();
  const links = [
    { href: 'index.html', label: 'Home' },
    { href: 'boarding.html', label: 'Boarding' },
    { href: 'surf-academy.html', label: 'Surf Academy' },
    { href: 'sport-academies.html', label: 'Sport' },
    { href: 'army-cea.html', label: 'Army CEA' },
    { href: 'connect-centre.html', label: 'Connect Centre' },
  ];
  const navLinksHtml = links.map(l =>
    `<li><a href="${l.href}"${page === l.href ? ' class="active"' : ''}>${l.label}</a></li>`
  ).join('\n');
  const overlayLinksHtml = links.map(l =>
    `<a href="${l.href}">${l.label}</a>`
  ).join('\n');

  const navHtml = `
<nav class="site-nav">
  <a href="index.html" class="nav-logo">
    <div>
      <span style="font-family:'Playfair Display',Georgia,serif;font-size:1.25rem;font-weight:700;color:var(--purple);">Kingsley</span>
      <span class="nav-logo-sub">School Devon</span>
    </div>
  </a>
  <ul class="nav-links">${navLinksHtml}
    <li><a href="mailto:admissions@kingsleydevon.com" class="nav-cta">Enquire</a></li>
  </ul>
  <button class="nav-hamburger" onclick="document.getElementById('navOverlay').classList.add('open')" aria-label="Open menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="nav-overlay" id="navOverlay">
  <button class="nav-overlay-close" onclick="document.getElementById('navOverlay').classList.remove('open')" aria-label="Close menu">&times;</button>
  ${overlayLinksHtml}
  <a href="mailto:admissions@kingsleydevon.com" style="color:var(--sand);margin-top:16px;">Enquire Now</a>
  <span class="nav-strapline">Nurturing wellbeing | Achieving success</span>
</div>`;
  document.getElementById('nav-mount').innerHTML = navHtml;
}

function renderFooter() {
  const footerHtml = `
<footer class="site-footer">
  <div class="footer-inner">
    <div>
      <div class="footer-brand-name">Kingsley School Devon</div>
      <div class="footer-strapline">Nurturing wellbeing | Achieving success</div>
      <div class="footer-address">
        Northdown Road, Bideford<br>
        North Devon, EX39 3LY<br><br>
        <a href="tel:+441237426200" style="color:rgba(255,255,255,0.7);text-decoration:none;">01237 426 200</a><br>
        <a href="mailto:admissions@kingsleydevon.com" style="color:var(--sand);text-decoration:none;">admissions@kingsleydevon.com</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>School</h4>
      <ul>
        <li><a href="index.html">About Kingsley</a></li>
        <li><a href="#">Prep School</a></li>
        <li><a href="#">Senior School</a></li>
        <li><a href="#">Sixth Form</a></li>
        <li><a href="connect-centre.html">Connect Centre</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Programmes</h4>
      <ul>
        <li><a href="surf-academy.html">Surf Academy</a></li>
        <li><a href="sport-academies.html">Sport Academies</a></li>
        <li><a href="#">Earth Centre</a></li>
        <li><a href="#">Arts Academy</a></li>
        <li><a href="#">STEM</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Admissions</h4>
      <ul>
        <li><a href="boarding.html">Boarding</a></li>
        <li><a href="army-cea.html">Army CEA</a></li>
        <li><a href="#">Open Days</a></li>
        <li><a href="#">Scholarships</a></li>
        <li><a href="#">International</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>&copy; 2025 Kingsley School Devon. All rights reserved.</span>
    <span>#BETTERMEBETTERWORLD</span>
  </div>
</footer>`;
  document.getElementById('footer-mount').innerHTML = footerHtml;
}

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
});
