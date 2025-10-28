// ✅ MBTI 버튼 클릭 시 링크 이동
document.addEventListener("DOMContentLoaded", () => {
  const mbtiBtn = document.querySelector("#btnMbti");
  if (mbtiBtn) {
    mbtiBtn.addEventListener("click", () => {
      window.open("https://www.16personalities.com/esfj-personality", "_blank");
    });
  }

  // ✅ 스크롤 시 네비게이션 색상 변화
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
