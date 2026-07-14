(function() {

  const PAGES = [
    { href: 'index.html',          label: 'Home' },
    { href: 'nursery.html',        label: 'Nursery' },
    { href: 'prep-school.html',    label: 'Prep' },
    { href: 'senior-school.html',  label: 'Senior' },
    { href: 'sixth-form.html',     label: 'Sixth Form' },
    { href: 'boarding.html',       label: 'Boarding' },
    { href: 'surf-academy.html',   label: 'Surf' },
    { href: 'connect-centre.html', label: 'SEND' },
  ];

  const OVERLAY_GROUPS = [
    {
      label: 'Schools',
      links: [
        { href: 'nursery.html',        label: 'Nursery & Early Years' },
        { href: 'prep-school.html',    label: 'Prep School' },
        { href: 'senior-school.html',  label: 'Senior School' },
        { href: 'sixth-form.html',     label: 'Sixth Form' },
      ]
    },
    {
      label: 'Life at Kingsley',
      links: [
        { href: 'surf-academy.html',   label: 'Surf Academy' },
        { href: 'sport-academies.html',label: 'Sport Academies' },
        { href: 'boarding.html',       label: 'Boarding' },
        { href: 'connect-centre.html', label: 'Connect Centre (SEND)' },
        { href: 'army-cea.html',       label: 'Army CEA' },
      ]
    }
  ];

  function currentPage() {
    return window.location.pathname.split('/').pop() || 'index.html';
  }

  function renderNav() {
    const page = currentPage();
    const navLinks = PAGES.map(p =>
      `<li><a href="${p.href}"${page === p.href ? ' class="active"' : ''}>${p.label}</a></li>`
    ).join('');

    const overlayLinks = OVERLAY_GROUPS.map(g => `
      <div style="text-align:center;margin-bottom:8px;">
        <div style="font-size:0.62rem;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.35);font-weight:700;margin-bottom:10px;">${g.label}</div>
        ${g.links.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
      </div>
    `).join('');

    const html = `
<nav class="site-nav dark-hero" id="siteNav">
  <a href="index.html" class="nav-logo">
    <div>
      <span class="nav-logo-word">Kingsley</span>
      <span class="nav-logo-sub">School Devon</span>
    </div>
  </a>
  <ul class="nav-links">${navLinks}
    <li>
      <div class="nav-social">
        <a href="https://www.instagram.com/kingsleyschool/" target="_blank" rel="noopener" title="Instagram">📷</a>
        <a href="https://www.facebook.com/KingsleySchoolDevon" target="_blank" rel="noopener" title="Facebook">📘</a>
      </div>
    </li>
    <li><a href="mailto:admissions@kingsleydevon.com" class="nav-enquire">Enquire</a></li>
  </ul>
  <button class="nav-burger" onclick="document.getElementById('navOverlay').classList.add('open')" aria-label="Open menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<div class="nav-overlay" id="navOverlay">
  <button class="nav-overlay-close" onclick="document.getElementById('navOverlay').classList.remove('open')" aria-label="Close">&times;</button>
  ${overlayLinks}
  <a href="mailto:admissions@kingsleydevon.com" style="color:var(--sand);margin-top:8px;font-size:1.2rem;">Enquire Now</a>
  <div class="nav-overlay-social">
    <a href="https://www.instagram.com/kingsleyschool/" target="_blank" rel="noopener">📷</a>
    <a href="https://www.facebook.com/KingsleySchoolDevon" target="_blank" rel="noopener">📘</a>
    <a href="https://www.youtube.com/@kingsleydevon" target="_blank" rel="noopener">▶️</a>
  </div>
  <span class="nav-overlay-strapline">Nurturing wellbeing | Achieving success</span>
</div>`;

    document.getElementById('nav-mount').innerHTML = html;

    // Scroll behaviour: add .scrolled class after 80px
    const nav = document.getElementById('siteNav');
    function onScroll() {
      if (window.scrollY > 80) {
        nav.classList.add('scrolled');
        nav.classList.remove('dark-hero');
      } else {
        nav.classList.remove('scrolled');
        nav.classList.add('dark-hero');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function renderFooter() {
    const html = `
<footer class="site-footer">
  <div class="footer-inner">
    <div>
      <div class="footer-brand-name">Kingsley School Devon</div>
      <div class="footer-strapline">Nurturing wellbeing | Achieving success</div>
      <address class="footer-address" style="font-style:normal;">
        Northdown Road, Bideford<br>
        North Devon, EX39 3LY<br><br>
        <a href="tel:+441237426200">01237 426 200</a><br>
        <a href="mailto:admissions@kingsleydevon.com">admissions@kingsleydevon.com</a>
      </address>
      <div class="footer-social">
        <a href="https://www.instagram.com/kingsleyschool/" target="_blank" rel="noopener" title="Instagram">📷</a>
        <a href="https://www.facebook.com/KingsleySchoolDevon" target="_blank" rel="noopener" title="Facebook">📘</a>
        <a href="https://www.youtube.com/@kingsleydevon" target="_blank" rel="noopener" title="YouTube">▶</a>
        <a href="http://www.twitter.com/KingsleyDevon" target="_blank" rel="noopener" title="Twitter / X">𝕏</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Our School</h4>
      <ul>
        <li><a href="nursery.html">Nursery & Early Years</a></li>
        <li><a href="prep-school.html">Prep School</a></li>
        <li><a href="senior-school.html">Senior School</a></li>
        <li><a href="sixth-form.html">Sixth Form</a></li>
        <li><a href="connect-centre.html">Connect Centre</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Programmes</h4>
      <ul>
        <li><a href="surf-academy.html">Surf Academy</a></li>
        <li><a href="sport-academies.html">Sport Academies</a></li>
        <li><a href="boarding.html">Boarding</a></li>
        <li><a href="army-cea.html">Army CEA</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Admissions</h4>
      <ul>
        <li><a href="mailto:admissions@kingsleydevon.com">Enquire Now</a></li>
        <li><a href="#">Open Days</a></li>
        <li><a href="#">Scholarships</a></li>
        <li><a href="#">Fees</a></li>
        <li><a href="#">Bursaries</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Kingsley School Devon &nbsp;·&nbsp; #BETTERMEBETTERWORLD</span>
    <span>
      <a href="#">Privacy Policy</a> &nbsp;·&nbsp;
      <a href="#">Cookie Policy</a> &nbsp;·&nbsp;
      <a href="#">Sitemap</a>
    </span>
  </div>
</footer>`;
    document.getElementById('footer-mount').innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderNav();
    renderFooter();
  });

})();
