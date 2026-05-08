/* ════════════════════════════════════════
   카테고리 탭 활성화
   CSS overflow-x: auto + 순수 JS click (jQuery 불필요)
════════════════════════════════════════ */
const catBtns = document.querySelectorAll('.cat-btn');
catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

/* ════════════════════════════════════════
   카테고리 슬라이드 드래그 스크롤
════════════════════════════════════════ */
const categoryScroll = document.querySelector('.category-scroll');
let isDragging = false;
let dragStartX = 0;
let scrollStartLeft = 0;

categoryScroll.addEventListener('mousedown', e => {
  isDragging = true;
  dragStartX = e.pageX - categoryScroll.offsetLeft;
  scrollStartLeft = categoryScroll.scrollLeft;
  categoryScroll.classList.add('dragging');
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  categoryScroll.classList.remove('dragging');
});

document.addEventListener('mousemove', e => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - categoryScroll.offsetLeft;
  categoryScroll.scrollLeft = scrollStartLeft - (x - dragStartX) * 1.2;
});

/* ════════════════════════════════════════
   소비 리스트 체크박스 → 해당 row selected 클래스 toggle
════════════════════════════════════════ */
document.querySelectorAll('.item-check').forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    checkbox.closest('.spending-item').classList.toggle('selected', checkbox.checked);
  });
});

/* ════════════════════════════════════════
   오버레이 열기 / 닫기
   소비 공유하기 버튼 → 아래에서 위로 슬라이드 모달
════════════════════════════════════════ */
const overlay     = document.getElementById('shareOverlay');
const shareBtn    = document.getElementById('shareBtn');
const closeBtn    = document.getElementById('closeOverlay');
const backdrop    = document.getElementById('overlayBackdrop');
const sendBtn     = document.getElementById('sendBtn');

function openOverlay() {
  overlay.classList.add('overlay--open');
}

function closeOverlay() {
  overlay.classList.remove('overlay--open');
}

shareBtn.addEventListener('click', openOverlay);
closeBtn.addEventListener('click', closeOverlay);
backdrop.addEventListener('click', closeOverlay);
sendBtn.addEventListener('click', closeOverlay);   // 보내기 → 닫기

/* ════════════════════════════════════════
   모달 탭 활성화 (전체 / 친구 / 최근 공유)
════════════════════════════════════════ */
const modalTabs = document.querySelectorAll('.modal-tab');
modalTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    modalTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

/* ════════════════════════════════════════
   채팅방 항목 클릭 → selected 클래스 toggle
════════════════════════════════════════ */
document.querySelectorAll('.chatroom-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('selected');
  });
});
