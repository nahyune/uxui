(function () {
  'use strict';

  /* ═══════════════════════════════════════
     공통: 카드 너비 + gap 계산
  ═══════════════════════════════════════ */
  function getItemWidth(scroller) {
    var first = scroller.children[0];
    if (!first) return 0;
    var style = window.getComputedStyle(scroller);
    var gap = parseFloat(style.columnGap || style.gap) || 14;
    return first.offsetWidth + gap;
  }

  /* ═══════════════════════════════════════
     공통: 인덱스 → 스크롤 이동
  ═══════════════════════════════════════ */
  function scrollToIndex(scroller, idx) {
    var w = getItemWidth(scroller);
    if (!w) return;
    var max = scroller.children.length - 1;
    idx = Math.max(0, Math.min(max, idx));
    scroller.scrollTo({ left: w * idx, behavior: 'smooth' });
  }

  /* ═══════════════════════════════════════
     공통: 현재 활성 인덱스 계산
  ═══════════════════════════════════════ */
  function getActiveIdx(scroller) {
    var w = getItemWidth(scroller);
    if (!w) return 0;
    var idx = Math.round(scroller.scrollLeft / w);
    return Math.max(0, Math.min(scroller.children.length - 1, idx));
  }

  /* ═══════════════════════════════════════
     도트 인디케이터 생성 및 연동
  ═══════════════════════════════════════ */
  function initDots(scroller, existingDotsContainer) {
    var count = scroller.children.length;
    if (count < 2) return;

    var container = existingDotsContainer;
    if (!container) {
      container = document.createElement('div');
      container.className = 'slide-dots';
      scroller.parentElement.insertBefore(container, scroller.nextSibling);
    } else {
      container.innerHTML = '';
    }

    var dots = [];
    for (var i = 0; i < count; i++) {
      var d = document.createElement('span');
      d.className = 'dot' + (i === 0 ? ' active' : '');
      container.appendChild(d);
      dots.push(d);
    }

    /* 스크롤 → 도트 업데이트 */
    var raf = false;
    scroller.addEventListener('scroll', function () {
      if (raf) return;
      raf = true;
      requestAnimationFrame(function () {
        var idx = getActiveIdx(scroller);
        dots.forEach(function (d, i) {
          d.classList.toggle('active', i === idx);
        });
        raf = false;
      });
    }, { passive: true });

    /* 도트 클릭 → 스크롤 이동 */
    dots.forEach(function (d, i) {
      d.addEventListener('click', function () {
        scrollToIndex(scroller, i);
      });
    });
  }

  /* ═══════════════════════════════════════
     마우스 드래그 스크롤 (데스크탑)
  ═══════════════════════════════════════ */
  function initDrag(scroller) {
    var startX = 0, startScroll = 0, startIdx = 0;
    var dragging = false, moved = false;

    scroller.addEventListener('mousedown', function (e) {
      if (e.button !== 0) return;
      dragging  = true;
      moved     = false;
      startX    = e.clientX;
      startScroll = scroller.scrollLeft;
      startIdx  = getActiveIdx(scroller);
      scroller.style.cursor = 'grabbing';
      /* 드래그 중 scroll-snap 일시 해제 → 부드러운 이동 */
      scroller.style.scrollSnapType = 'none';
      e.preventDefault();
    });

    document.addEventListener('mouseup', function () {
      if (!dragging) return;
      dragging = false;
      scroller.style.cursor = '';
      scroller.style.scrollSnapType = '';

      if (!moved) return;
      /* 드래그 방향에 따라 다음/이전 카드로 이동 */
      var delta = scroller.scrollLeft - startScroll;
      var w     = getItemWidth(scroller);
      var threshold = w * 0.25;     /* 25% 이상 드래그 시 넘김 */
      var nextIdx   = startIdx;
      if (delta > threshold)  nextIdx = startIdx + 1;
      if (delta < -threshold) nextIdx = startIdx - 1;
      scrollToIndex(scroller, nextIdx);
    });

    document.addEventListener('mousemove', function (e) {
      if (!dragging) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 5) moved = true;
      if (!moved) return;
      scroller.scrollLeft = startScroll - dx;
    });

    /* 드래그 후 링크 클릭 차단 */
    scroller.addEventListener('click', function (e) {
      if (moved) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }, true);
  }

  /* ═══════════════════════════════════════
     나의 챌린지 + 지금 참여하세요 초기화
  ═══════════════════════════════════════ */
  document.querySelectorAll('.hscroll:not(.coming-hscroll)').forEach(function (el) {
    if (el.children.length < 1) return;
    initDrag(el);
    /* 나의 챌린지 / 지금 참여하세요는 점 없음 */
  });

  /* ═══════════════════════════════════════
     곧 시작해요 슬라이드 초기화
  ═══════════════════════════════════════ */
  var coming     = document.getElementById('comingSlider');
  var comingWrap = document.querySelector('.slide-dots');   /* HTML에 이미 있는 dots */

  if (coming) {
    initDrag(coming);
    initDots(coming, comingWrap);
  }

})();
