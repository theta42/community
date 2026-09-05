document.addEventListener('DOMContentLoaded', () => {
  // 1. Navbar scroll blur
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  // 2. Mobile menu toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // 3. Paginated Chronicle Feed with Category Filtering
  const ITEMS_PER_PAGE = 6;
  let currentFilter = 'all';
  let currentPage = 1;

  const cards = Array.from(document.querySelectorAll('.chronicle-card'));
  const filterBtns = document.querySelectorAll('.filter-btn');
  const paginationControls = document.querySelector('.pagination-controls');
  const paginationInfo = document.querySelector('.pagination-info');

  function renderChronicle(shouldScroll = false) {
    const matchingCards = cards.filter(card => {
      const category = card.getAttribute('data-category') || '';
      return currentFilter === 'all' || category.includes(currentFilter);
    });

    const totalItems = matchingCards.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));

    if (currentPage > totalPages) {
      currentPage = totalPages;
    }
    if (currentPage < 1) {
      currentPage = 1;
    }

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
    const visibleCards = new Set(matchingCards.slice(startIndex, endIndex));

    cards.forEach(card => {
      if (visibleCards.has(card)) {
        card.style.display = 'block';
        card.style.opacity = '1';
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
      }
    });

    if (paginationInfo) {
      if (totalItems === 0) {
        paginationInfo.textContent = 'No announcements found in this category.';
      } else {
        paginationInfo.textContent = `Showing ${startIndex + 1}–${endIndex} of ${totalItems} announcements · Page ${currentPage} of ${totalPages}`;
      }
    }

    if (paginationControls) {
      paginationControls.innerHTML = '';

      if (totalPages > 1) {
        // Prev button
        const prevBtn = document.createElement('button');
        prevBtn.className = 'pagination-btn';
        prevBtn.textContent = '← Prev';
        prevBtn.disabled = (currentPage === 1);
        prevBtn.addEventListener('click', () => {
          if (currentPage > 1) {
            currentPage--;
            renderChronicle(true);
          }
        });
        paginationControls.appendChild(prevBtn);

        // Page number generator
        const pagesToRender = [];
        if (totalPages <= 7) {
          for (let i = 1; i <= totalPages; i++) pagesToRender.push(i);
        } else {
          pagesToRender.push(1);
          if (currentPage > 3) pagesToRender.push('...');
          const start = Math.max(2, currentPage - 1);
          const end = Math.min(totalPages - 1, currentPage + 1);
          for (let i = start; i <= end; i++) pagesToRender.push(i);
          if (currentPage < totalPages - 2) pagesToRender.push('...');
          pagesToRender.push(totalPages);
        }

        pagesToRender.forEach(p => {
          if (p === '...') {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-ellipsis';
            ellipsis.textContent = '...';
            ellipsis.style.color = 'var(--subtle)';
            ellipsis.style.padding = '0 6px';
            paginationControls.appendChild(ellipsis);
          } else {
            const numBtn = document.createElement('button');
            numBtn.className = 'pagination-btn' + (p === currentPage ? ' active' : '');
            numBtn.textContent = p;
            numBtn.addEventListener('click', () => {
              if (currentPage !== p) {
                currentPage = p;
                renderChronicle(true);
              }
            });
            paginationControls.appendChild(numBtn);
          }
        });

        // Next button
        const nextBtn = document.createElement('button');
        nextBtn.className = 'pagination-btn';
        nextBtn.textContent = 'Next →';
        nextBtn.disabled = (currentPage === totalPages);
        nextBtn.addEventListener('click', () => {
          if (currentPage < totalPages) {
            currentPage++;
            renderChronicle(true);
          }
        });
        paginationControls.appendChild(nextBtn);
      }
    }

    if (shouldScroll) {
      const chronicleSection = document.getElementById('chronicle');
      if (chronicleSection) {
        const top = chronicleSection.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      currentPage = 1;
      renderChronicle(false);
    });
  });

  // Initial render
  renderChronicle(false);

  // 4. Copy to clipboard handler
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const codeTarget = btn.getAttribute('data-copy');
      const textToCopy = codeTarget ? codeTarget : btn.previousElementSibling ? btn.previousElementSibling.textContent.trim() : '';

      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'COPIED!';
        btn.style.color = '#c8a96e';
        btn.style.borderColor = '#c8a96e';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.color = '';
          btn.style.borderColor = '';
        }, 2000);
      }).catch(err => {
        console.error('Clipboard copy failed:', err);
      });
    });
  });
});
