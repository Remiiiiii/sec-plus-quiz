const startBtn = document.querySelector(".start-btn");
const chapterSelect = document.getElementById("chapter-select");

startBtn.onclick = () => {
  audio.play();
  setTimeout(() => {
    window.location.href = "./chapter1/Chapter1.html";
  }, 800);
  bgAudio.play();
};

chapterSelect.addEventListener("change", function () {
  var selectedChapter = this.value;

  if (selectedChapter === "chapter-2") {
    window.location.href = "./chapter2/index.html";
  }
  if (selectedChapter === "chapter-3") {
    window.location.href = "./chapter3/index.html";
  }
  if (selectedChapter === "chapter-4") {
    window.location.href = "./chapter4/index.html";
  }
  if (selectedChapter === "chapter-5") {
    window.location.href = "./chapter5/index.html";
  }
  if (selectedChapter === "chapter-6") {
    window.location.href = "./chapter6/index.html";
  }
  if (selectedChapter === "chapter-7") {
    window.location.href = "./chapter7/index.html";
  }
});
