(function () {
  'use strict';

  /* ── 소비 기록 슬라이더 마우스 드래그 ── */
  var slider = document.getElementById('spendingSlider');
  if (!slider) return;

  var startX = 0, scrollLeft0 = 0, dragging = false, moved = false;

  slider.addEventListener('mousedown', function (e) {
    if (e.button !== 0) return;
    dragging  = true;
    moved     = false;
    startX    = e.clientX;
    scrollLeft0 = slider.scrollLeft;
    slider.style.cursor = 'grabbing';
    slider.style.userSelect = 'none';
  });

  document.addEventListener('mouseup', function () {
    if (!dragging) return;
    dragging = false;
    slider.style.cursor = '';
    slider.style.userSelect = '';
    /* 드래그 끝나면 가장 가까운 카드에 스냅 */
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

  /* 드래그였으면 링크 클릭 차단 */
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

})();
