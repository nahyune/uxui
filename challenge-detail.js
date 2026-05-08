(function () {
  'use strict';

  var btn = document.getElementById('ctaBtn');
  if (!btn) return;

  btn.addEventListener('click', function () {
    if (btn.classList.contains('participated')) return;
    btn.classList.add('participated');
    btn.textContent = '챌린지 참여 완료';
  });
})();
