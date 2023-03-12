function costumizar() {
    var div_escolher = document.getElementById("escolher");
    var bot_costumize = document.getElementById("costumize");
    if (bot_costumize.innerHTML != "Salvar") {
        div_escolher.classList.remove("escolhas");
        div_escolher.classList.remove("escolhas_animacao_voltar");
        div_escolher.classList.add("escolhas_animacao_ir");
        bot_costumize.innerHTML = "Salvar";
    } else {
        bot_costumize.innerHTML = "Costumize";
        div_escolher.classList.remove("escolhas_animacao_ir");
        div_escolher.classList.add("escolhas_animacao_voltar");
    }
}

function mudou() {
    var bot = document.querySelector(".bot_voltar");
    var select = document.getElementById("select_mao");
    var valor = select.value;
    switch (valor) {
        case "1":
            bot.innerHTML = "👆️ Diagrama";
            break;
        case "2":
            bot.innerHTML = "👆🏿 Diagrama";
            break;
        case "3":
            bot.innerHTML = "👆🏾 Diagrama";
            break;
            case "4":
            bot.innerHTML = "👆🏽 Diagrama";
            break;
            case "5":
            bot.innerHTML = "👆🏼 Diagrama";
            break;
            case "6":
            bot.innerHTML = "👆🏻 Diagrama";
            break;
    }
}

function mudou_tema() {
    var anexo1 = document.getElementById("anexo1");
    var anexo2 = document.getElementById("anexo2");
    var anexo3 = document.getElementById("anexo3");
    var diagrama = document.getElementById("diagrama");
    var body = document.getElementById("body");
    var select = document.getElementById("select_tema");
    var valor = select.value;
    switch (valor) {
        case "1":
            body.classList.remove("body_escuro");
            body.classList.add("body_normal");
            diagrama.src = "images/DiagramaProcessoFabricaSoftware.png";
            anexo1.src = "images/anexo/anexo1.jpg";
            anexo2.src = "images/anexo/anexo2.jpg";
            anexo3.src = "images/anexo/anexo3.jpg";
            break;
        case "2":
            body.classList.remove("body_normal");
            body.classList.add("body_escuro");
            anexo1.src = "images/anexo/anexo1_escuro.jpg";
            anexo2.src = "images/anexo/anexo2_escuro.jpg";
            anexo3.src = "images/anexo/anexo3_escuro.jpg";
            diagrama.src = "images/DiagramaEscuro.png";
            break;

    }
}

function mostrar() {
    var input_mostrar = document.getElementById("input_mostrar");
    var mostrar_atividade = document.getElementById("mostrar_atividade");
    if (input_mostrar.checked) {
        mostrar_atividade.classList.remove("mostrar_atividade");
        mostrar_atividade.classList.remove("mostrar_atividade_voltar");
        mostrar_atividade.classList.add("mostrar_atividade_vir");
    } else {
        mostrar_atividade.classList.remove("mostrar_atividade_vir");
        mostrar_atividade.classList.add("mostrar_atividade_voltar");
    }
}

window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const h1 = section.querySelector("h1");
            if (h1) {
                document.getElementById("mostrar_atividade").innerHTML = h1.textContent.trim();
            }
        }
    }
});

