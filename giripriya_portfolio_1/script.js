document.addEventListener('DOMContentLoaded',()=>{
  // year
  const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();

  // mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  navToggle && navToggle.addEventListener('click',()=>{
    if(navLinks.style.display === 'flex') navLinks.style.display = 'none'; else navLinks.style.display = 'flex';
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',(e)=>{
      const target = document.querySelector(a.getAttribute('href'));
      if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});
        if(window.innerWidth<=900) navLinks.style.display='none';
      }
    });
  });

  // contact form (demo) — do not send anywhere by default
  const form = document.getElementById('contact-form');
  if(form) form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data = new FormData(form);
    alert('Thanks, '+(data.get('name')||'there')+"! Your message was received (demo). I'll contact you soon.");
    form.reset();
  });
});
