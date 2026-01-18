function corrigerQuiz() {
  let score = 0;
  const total = 15;

  for (let i = 1; i <= total; i++) {
    let reponse = document.querySelector('input[name="q' + i + '"]:checked');
    if (reponse && reponse.value === "1") {
      score++;
    }
  }

  document.getElementById("resultat").innerHTML =
    "Votre note est : " + score + " / " + total +
    "<br><br>Les réponses correctes sont toujours la première option de chaque question.";
}