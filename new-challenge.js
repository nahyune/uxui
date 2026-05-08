(function () {
  'use strict';

  /* ── 카테고리 탭 active 전환 ── */
  var catBtns = document.querySelectorAll('.cat-btn');

  catBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      catBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');
    });
  });

  /* ── 날짜 picker → text input 동기화 ── */
  window.syncDate = function (pickerId, displayId) {
    var picker  = document.getElementById(pickerId);
    var display = document.getElementById(displayId);
    if (!picker || !display) return;

    var raw = picker.value;           /* "2026-05-08" */
    if (!raw) return;

    /* "26.05.08" 형식으로 변환 */
    var parts = raw.split('-');       /* [2026, 05, 08] */
    var yy = parts[0].slice(2);       /* "26" */
    display.value = yy + '.' + parts[1] + '.' + parts[2];
  };

  /* ── CTA 버튼: 유효성 검사 후 이동 ── */
  var submitBtn = document.getElementById('submitBtn');
  if (submitBtn) {
    submitBtn.addEventListener('click', function () {
      var titleInput = document.querySelector('input[placeholder="챌린지 이름을 입력하세요"]');
      var title = titleInput ? titleInput.value.trim() : '';

      if (!title) {
        titleInput && titleInput.focus();
        titleInput && (titleInput.style.borderBottomColor = '#FF4444');
        setTimeout(function () {
          if (titleInput) titleInput.style.borderBottomColor = '';
        }, 1500);
        return;
      }

      /* 정상 → challenge.html 이동 */
      window.location.href = 'challenge.html';
    });
  }

})();
