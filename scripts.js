var answers = ["Certamente",
             "Decididamente sim",
             "Sim - definitivamente",
             "Você pode contar com ele",
             "A meu ver, sim",
             "Provavelmente",
             "Boa perspectiva",
             "Os sinais apontam para sim",
             "Não conte com isso",
             "Minha resposta é não",
             "Minhas fontes dizem não",
             "Perspectiva não tão boa",
             "Muito duvidoso",
             "Responder nebuloso, tente novamente",
             "Pergunte novamente mais tarde",
             "Melhor não te dizer agora",
             "Não é possível prever agora",
             "Concentre-se e pergunte novamente"];

window.onload = function() {
    var eight = document.getElementById("eight");
    var answer = document.getElementById("answer");
    var eightball = document.getElementById("eight-ball");
    var question = document.getElementById("question");

    eightball.addEventListener("click", function(){
        if (question.value.length < 1) {
            alert('Faça uma pergunta!');
        } else {
            eight.innerText = "";
            var num = Math.floor(Math.random() * Math.floor(answers.length));
            answer.innerText = answers[num];
        }
    });

}