// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Modal window functionality
    const form = document.getElementById('newsletter-form');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');

    if (form && modal && closeBtn) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload
            modal.style.display = 'flex'; // Show modal
        });

        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none'; // Hide modal
        });

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none'; // Hide modal on outside click
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                modal.style.display = 'none'; // Hide modal on Esc
            }
        });
    }

    // Menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const siteHeader = document.querySelector('.site-header');

    if (menuToggle && siteHeader) {
        menuToggle.addEventListener('click', function() {
            siteHeader.classList.toggle('menu-open');
        });
    }

    // Disappearing section
    const disappearingSection = document.querySelector('.disappearing-section');
    if (disappearingSection) {
        setTimeout(function() {
            disappearingSection.style.opacity = '0';
            setTimeout(function() {
                disappearingSection.style.display = 'none';
            }, 1000); // Wait for fade-out transition
        }, 10000); // Wait 10 seconds before starting fade-out
    }
});


  document.querySelector('.callback-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    const modal = document.getElementById('callback-modal');
    modal.style.display = 'flex';

    // Очистим форму (по желанию)
    this.reset();
  });

  document.getElementById('close-callback').addEventListener('click', function () {
    document.getElementById('callback-modal').style.display = 'none';
  });

  window.addEventListener('click', function (e) {
    const modal = document.getElementById('callback-modal');
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

