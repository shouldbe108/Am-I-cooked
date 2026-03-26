const question = document.getElementById("question");
const answerView = document.getElementById("answerView");
const answerText = document.getElementById("answerText");
const subText = document.getElementById("subText");
const btnYes = document.getElementById("btnYes");
const btnNo = document.getElementById("btnNo");
const btnReset = document.getElementById("btnReset");

function showAnswer(main, sub, cooked) {
  question.classList.remove("fade-in-up");
  question.classList.add("fade-out-down");

  setTimeout(() => {
    question.classList.add("hidden");
    question.classList.remove("fade-out-down");

    answerText.textContent = main;
    answerText.className = "answer " + (cooked ? "cooked" : "ok");
    subText.textContent = sub;

    answerView.classList.remove("hidden");
    answerView.classList.add("fade-in-up");
  }, 200);
}

btnYes.addEventListener("click", () => {
  showAnswer(
    "Not cooked.",
    "Keep going, you’re actually on script.",
    false
  );
});

btnNo.addEventListener("click", () => {
  showAnswer(
    "Bro is cooked.",
    "Close this tab, breathe, and reconsider your life's side quests.",
    true
  );
});

btnReset.addEventListener("click", () => {
  answerView.classList.remove("fade-in-up");
  answerView.classList.add("fade-out-down");

  setTimeout(() => {
    answerView.classList.add("hidden");
    answerView.classList.remove("fade-out-down");

    question.classList.remove("hidden");
    question.classList.add("fade-in-up");
  }, 200);
});
