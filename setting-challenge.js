(function () {
  'use strict';

  /* ── 소비 기록 슬라이더 마우스 드래그 ── */
  var slider = document.getElementById('spendingSlider');
  if (slider) {
    var startX = 0, scrollLeft0 = 0, dragging = false, moved = false;

    slider.addEventListener('mousedown', function (e) {
      if (e.button !== 0) return;
      dragging = true;
      moved    = false;
      startX   = e.clientX;
      scrollLeft0 = slider.scrollLeft;
      slider.style.cursor = 'grabbing';
      slider.style.userSelect = 'none';
    });

    document.addEventListener('mouseup', function () {
      if (!dragging) return;
      dragging = false;
      slider.style.cursor = '';
      slider.style.userSelect = '';
      snapToNearest();
    });

    slider.addEventListener('mousemove', function (e) {
      if (!dragging) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      if (!moved) return;
      e.preventDefault();
      slider.scrollLeft = scrollLeft0 - dx;
    });

    slider.addEventListener('click', function (e) {
      if (moved) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }, true);

    function snapToNearest() {
      var first = slider.children[0];
      if (!first) return;
      var style = window.getComputedStyle(slider);
      var gap   = parseFloat(style.columnGap || style.gap) || 15;
      var cardW = first.offsetWidth + gap;
      var idx   = Math.round(slider.scrollLeft / cardW);
      idx = Math.max(0, Math.min(slider.children.length - 1, idx));
      slider.scrollTo({ left: cardW * idx, behavior: 'smooth' });
    }
  }

  /* ── 대화 상대 더보기 ── */
  var moreBtn     = document.getElementById('moreBtn');
  var hiddenItems = document.querySelectorAll('.hidden-member');

  if (moreBtn && hiddenItems.length) {
    moreBtn.addEventListener('click', function () {
      var expanded = moreBtn.getAttribute('aria-expanded') === 'true';

      if (!expanded) {
        /* 펼치기 */
        hiddenItems.forEach(function (el) { el.style.display = 'flex'; });
        moreBtn.setAttribute('aria-expanded', 'true');
        moreBtn.classList.add('expanded');
      } else {
        /* 접기 */
        hiddenItems.forEach(function (el) { el.style.display = 'none'; });
        moreBtn.setAttribute('aria-expanded', 'false');
        moreBtn.classList.remove('expanded');
        /* 접을 때 대화 상대 섹션으로 스크롤 */
        moreBtn.closest('.section-card').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

})();
