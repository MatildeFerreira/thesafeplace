//WB2 - P1 -  2020/21 - Matilde Ferreira
//Função onclick no titulo
function myTitulo() {
    document.getElementById("inicio").style.backgroundColor = "transparent"; //Fundo da div fica transparente

    document.getElementById("titulo").style.display = "none"; //Titulo e insert name desaparecem
    document.getElementById("myName").style.display = "none";

    //Delay para haver tempo para a transição do fundo de cinza para transparente
    let delay;
    delay = setTimeout(myDelay, 1000);

    function myDelay() {
        document.getElementById("inicio").style.display = "none"; //Div desaparece
    }


    let vNome = document.getElementById("myName").value; //vNome é igual ao nome inserido

    //Se não for inserido nada o span é preenchido por stranger
    if (vNome == "") {
        document.getElementById("nome").innerHTML = "stranger";

        //Se for inserido um nome, o span é preenchido com esse nome
    } else {
        document.getElementById("nome").innerHTML = vNome;
    }
}

//Se for pressionado o enter na div "Insert your name", ativa a função onclick do titulo (de modo a não ser necessário clicar no título)
let input = document.getElementById("myName");
input.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        event.preventDefault();
        document.getElementById("titulo").click();
    }
});


//Função que preenche com uma ou mais palavras, repetida n vezes, um elemento (no caso p's) consoante a sua ID 
function myREPEAT(pWord, pID, pQuantidade) {
    document.getElementById(pID).innerHTML = pWord.repeat(pQuantidade);
}

//Função que preenche os elementos de class "window" (as diferentes partes da moldura da janela), com uma palavra, x vezes.
//Para que possa controlar o número de palavras consoante a width do device.
function myWINDOW(pWord, pQuantidade) {
    let myWindows = document.getElementsByClassName("WINDOW");
    for (let i = 0; i < myWindows.length; i++) {
        myWindows[i].innerHTML = pWord.repeat(pQuantidade);
    }
}

document.getElementsByClassName("button")[2].style.display = "none"; //Não mostrar o botão "previous" on load 

//Função que conta o número de vezes que o botão "Next" é clicado, modificando os elementos consoante é o primeiro, segundo ou terceiro click.
let clicks = 0;

function myNext() {

    //Soma dos clicks a cada click
    clicks += 1;

    //Página inicial - Restore CSS inicial, caso seja pressionado o previous na segunda página
    if (clicks == 0) {

        //Mostrar frase um
        document.getElementById("um").style.display = "block";
        //Esconder frase dois
        document.getElementById("dois").style.display = "none";
        //Não mostrar botão "previous"
        document.getElementsByClassName("button")[2].style.display = "none";

        //Estilo default de "Grass"
        let grass = document.getElementById("GRASS");
        grass.classList.add("GRASSzero");

        //Estilo default de "Sky"
        let sky = document.getElementById("SKY");
        sky.classList.add("SKYzero");

        //Remover estilo de "GRASS" do click 1
        grass.classList.remove("GRASSum");

        //Remover stilo de "SKY" do click 1
        sky.classList.remove("SKYum");

    }

    //Segunda página
    if (clicks == 1) {

        //Frase um deixa de ser vísivel, frase dois passa a ser vísivel
        document.getElementById("um").style.display = "none";
        document.getElementById("dois").style.display = "block";
        document.getElementById("tres").style.display = "none"; //Frase três torna-se invísivel (caso click Previous na segunda página)

        //Butão Previous passa a ser vísivel
        document.getElementsByClassName("button")[2].style.display = "block";

        //Estilo de "GRASS" do click 1
        let grass = document.getElementById("GRASS");
        grass.classList.add("GRASSum");

        //Estilo de "SKY" do click 1
        let sky = document.getElementById("SKY");
        sky.classList.add("SKYum");

        //Remover estilo de "GRASS" do click 2
        grass.classList.remove("GRASSdois");

        //Remover stilo de "SKY" do click 2
        sky.classList.remove("SKYdois");
    }

    //Terceira página
    if (clicks == 2) {

        //Frase dois deixa de ser vísivel, frase três passa a ser vísivel
        document.getElementById("dois").style.display = "none";
        document.getElementById("tres").style.display = "block";

        //Estilo de "GRASS" do click 2
        let grass = document.getElementById("GRASS");
        grass.classList.add("GRASSdois");

        //Estilo de "SKY" do click 2
        let sky = document.getElementById("SKY");
        sky.classList.add("SKYdois");

        //Remover estilo de "GRASS" do click 3
        grass.classList.remove("GRASStres");

        //Remover estilo de "SKY" do click 3
        sky.classList.remove("SKYtres");
    }

    //Quarta página
    if (clicks == 3) {

        //Frase três deixa de ser vísivel, frase quatro passa a ser vísivel
        document.getElementById("tres").style.display = "none";
        document.getElementById("quatro").style.display = "block";

        //Estilo de "GRASS" do click 3
        let grass = document.getElementById("GRASS");
        grass.classList.toggle("GRASStres");

        //Estilo de "SKY" do click 3
        let sky = document.getElementById("SKY");
        sky.classList.toggle("SKYtres");

        //Tornar todos os botões invísiveis
        let button = document.querySelectorAll(".button");
        button = Array.from(button);
        button.forEach(element => {
            element.style.display = "none";
        });

        //Tempo de delay
        let myTime;
        myTime = setTimeout(myCAM, 3000);

        //Alteração da quarta página
        function myCAM() {

            //Frase quatro deixa de ser vísivel, frase cinco passa a ser vísivel
            document.getElementById("quatro").style.display = "none";
            document.getElementById("cinco").style.display = "block";

            //Obtenção dos dados do utilizador, que preenchem os spans da frase cinco
            fetch('https://extreme-ip-lookup.com/json/')
                .then(res => res.json())
                .then(response => {
                    document.getElementById("city").innerText = response.city; //Cidade
                    document.getElementById("country").innerText = response.country; //País
                    document.getElementById("ip").innerText = response.ipName; //IP
                })
                .catch((error) => {
                    console.log('Request failed');
                });

            //Preenchimento da silhoeta
            myREPEAT("stranger ", "STRANGERhead", 2000);
            myREPEAT("algorithm ", "STRANGERbody", 3000);

            //Silhoeta torna-se vísivel
            document.getElementById("STRANGERhead").style.display = "block";
            document.getElementById("STRANGERbody").style.display = "block";


            //Alterar o style de todos os elementos da janela
            let window = document.querySelectorAll(".WINDOW");
            window = Array.from(window);
            window.forEach(element => {
                element.style.color = "#F2F2F2";
                element.style.backgroundColor = "#F2F2F2";
            });

            //Alterar o título da página
            document.title = "Never Safe";


            //Alterar o estilo da trama de fundo
            document.getElementById("BG").style.color = "#000";
            document.getElementById("BG").style.fontSize = "15px";
            document.getElementById("BG").style.lineHeight = "25px";
            document.getElementById("BG").style.letterSpacing = "10px";
            document.getElementById("BG").style.textTransform = "uppercase";

            //Alterar o estilo do "GRASS" e do "SKY"
            document.getElementById("SKY").style.backgroundColor = "#000";
            document.getElementById("GRASS").style.backgroundColor = "#000";

            document.getElementById("SKY").style.color = "rgb(45,45,45)";
            document.getElementById("GRASS").style.color = "rgb(35,35,35)";


            //Livestream torna-se vísivel
            document.getElementById("VIDEOcontainer").style.display = "block";
            let video = document.querySelector("#videoElement");

            //Se o utilizador tiver e autorizar a camera, livestream
            if (navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({
                        video: true
                    })
                    .then(function (stream) {
                        video.srcObject = stream;
                    })
                    //Se o utilizador não tiver ou não autorizar a camera, alerta
                    .catch(function (err0r) {
                        alert("I don't need your cam, I still see you...");
                    });
            }

        }

    }
}

//Função para voltar atrás
function myPrev() {
    //Subtrair 1 a clicks, de modo a ele voltar ao click anterior, e subtrair mais 1 porque quando o myNext é chamado acrescenta um
    clicks = clicks - 2;
    myNext();

}

//Função que permite o utilizador voltar à página ínicial, fazendo reload na página ao clicar no botão "HOME"
function myHome() {
    location.reload();
}

//Break points dos media query tamanhos e orientação
//de modo a não sobrecarregar a página com número excessivo de repetições das palavras, etc
function myMD() {

    let telemovel = window.matchMedia('(max-width: 600px)');
    let tablet = window.matchMedia('(min-width: 600px) and (max-width: 900px)');
    let portatil = window.matchMedia('(min-width: 900px) and (max-width: 1300px)');
    let monitor = window.matchMedia('(min-width: 1300px)');
    let portrait = window.matchMedia('(orientation: portrait)');

    //De modo a não ser preciso atualizar a página para atualizar os break points (por exemplo diminuir/aumentar a janela)
    //O window.addEventListener causava alguns bugs ao fazer resize (e.g enquanto se está a diminuir não vai atualizando, por vezes não assumia o media query correspondente)
    telemovel.addListener(myMD);
    tablet.addListener(myMD);
    portatil.addListener(myMD);
    monitor.addListener(myMD);
    portrait.addListener(myMD);

    //Breakpoint Telemovel
    if (telemovel.matches) {

        //Preenchimento dos fundo, céu, relvado e janela
        myREPEAT("no privacy ", "BG", 2000);
        myREPEAT("sky ", "SKY", 3500);
        myREPEAT("grass ", "GRASS", 3000);
        myWINDOW("window ", 150);

        document.getElementById("titulo").style.fontSize = "30px";
        //Janela ocupa maior percentagem do ecrã
        document.getElementById("SKY").style.width = "85%";
        document.getElementById("SKY").style.left = "7.5%";

        document.getElementById("GRASS").style.width = "85%";
        document.getElementById("GRASS").style.left = "7.5%";

        document.getElementById("FT").style.width = "90%";
        document.getElementById("FB").style.width = "90%";
        document.getElementById("FMH").style.width = "87%";
        document.getElementById("FT").style.left = "5%";
        document.getElementById("FB").style.left = "5%";
        document.getElementById("FMH").style.left = "6.5%";
        document.getElementById("FL").style.left = "6%";
        document.getElementById("FR").style.right = "6%";

        let box = document.getElementById("box");
        box.classList.add("boxTLM");
        box.classList.remove("boxTabl");

        document.getElementById("VIDEOcontainer").style.left = "6%";
        document.getElementById("VIDEOcontainer").style.width = "87%";

        let button = document.querySelectorAll(".button");
        button = Array.from(button);
        button.forEach(element => {
            element.style.fontSize = "12px";
            element.style.marginLeft = "10px";
            element.style.paddingLeft = "5px";
            element.style.paddingRight = "5px";
        });


        //Telemovel e portrait
        if (portrait.matches) {
            let shead = document.getElementById("STRANGERhead");
            shead.classList.toggle("SHeadTport");
            shead.classList.remove("SHeadTaport");
            let sbody = document.getElementById("STRANGERbody");
            sbody.classList.toggle("SBodyTport");
            sbody.classList.remove("SBodyTaport");

            //Telemovel e landscape
        } else {
            let shead = document.getElementById("STRANGERhead");
            shead.classList.toggle("SHeadTlands");
            shead.classList.remove("SHeadTalands");
            let sbody = document.getElementById("STRANGERbody");
            sbody.classList.toggle("SBodyTlands");
            sbody.classList.remove("SBodyTalands");
            

        }

        //Tablets
    } else if (tablet.matches) { // width 700-900

        myREPEAT("no privacy ", "BG", 4000);
        myREPEAT("sky ", "SKY", 5500);
        myREPEAT("grass ", "GRASS", 5500);
        myWINDOW("window ", 300);

        document.getElementById("titulo").style.fontSize = "40px";

        document.getElementById("SKY").style.width = "65%";
        document.getElementById("SKY").style.left = "17.5%";

        document.getElementById("GRASS").style.width = "65%";
        document.getElementById("GRASS").style.left = "17.5%";

        document.getElementById("FT").style.width = "70%";
        document.getElementById("FB").style.width = "70%";
        document.getElementById("FMH").style.width = "65.4%";
        document.getElementById("FT").style.left = "15%";
        document.getElementById("FB").style.left = "15%";
        document.getElementById("FMH").style.left = "17.5%";
        document.getElementById("FL").style.left = "16%";
        document.getElementById("FR").style.right = "16%";

        let box = document.getElementById("box");
        box.classList.add("boxTabl");
        box.classList.remove("boxPort");

        document.getElementById("VIDEOcontainer").style.width = "65%";
        document.getElementById("VIDEOcontainer").style.left = "17.5%";

        let button = document.querySelectorAll(".button");
        button = Array.from(button);
        button.forEach(element => {
            element.style.fontSize = "15px";
            element.style.marginLeft = "10px";
            element.style.paddingLeft = "5px";
            element.style.paddingRight = "5px";
        });

        //Tablets portrait
        if (portrait.matches) {
            let shead = document.getElementById("STRANGERhead");
            shead.classList.add("SHeadTaport");
            let sbody = document.getElementById("STRANGERbody");
            sbody.classList.add("SBodyTaport");


            //Tablets landscape
        } else {
            let shead = document.getElementById("STRANGERhead");
            shead.classList.add("SHeadTalands");
            let sbody = document.getElementById("STRANGERbody");
            sbody.classList.add("SBodyTalands");
        }



        //Portateis / monitores 
    } else if (portatil.matches) { // width 900-1300
        myREPEAT("no privacy ", "BG", 7800);
        myREPEAT("sky ", "SKY", 11000);
        myREPEAT("grass ", "GRASS", 11000);
        myWINDOW("window ", 400);

        document.getElementById("titulo").style.fontSize = "40px";

        document.getElementById("SKY").style.width = "65%";
        document.getElementById("SKY").style.left = "17.5%";

        document.getElementById("GRASS").style.width = "65%";
        document.getElementById("GRASS").style.left = "17.5%";

        document.getElementById("FT").style.width = "70%";
        document.getElementById("FB").style.width = "70%";
        document.getElementById("FMH").style.width = "65.4%";
        document.getElementById("FT").style.left = "15%";
        document.getElementById("FB").style.left = "15%";
        document.getElementById("FMH").style.left = "17.5%";
        document.getElementById("FL").style.left = "16%";
        document.getElementById("FR").style.right = "16%";

        let box = document.getElementById("box");
        box.classList.add("boxPort");
        box.classList.remove("boxMonit");

        document.getElementById("VIDEOcontainer").style.width = "65%";
        document.getElementById("VIDEOcontainer").style.left = "17.5%";

        let button = document.querySelectorAll(".button");
        button = Array.from(button);
        button.forEach(element => {
            element.style.fontSize = "15px";
            element.style.marginLeft = "10px";
            element.style.paddingLeft = "5px";
            element.style.paddingRight = "5px";
        });

        //Portateis / monitores portrait
        if (portrait.matches) {
            let shead = document.getElementById("STRANGERhead");
            shead.classList.add("SHeadTaport");
            shead.classList.remove("SHeadmonitor");
            let sbody = document.getElementById("STRANGERbody");
            sbody.classList.add("SBodyTaport");
            sbody.classList.remove("SBodymonitor");

            //Tablets landscape
        } else {
            let shead = document.getElementById("STRANGERhead");
            shead.classList.add("SHeadTalands");
            shead.classList.remove("SHeadmonitor");
            let sbody = document.getElementById("STRANGERbody");
            sbody.classList.add("SBodyTalands");
            sbody.classList.remove("SBodymonitor");
        }

        //Monitores grandes
    } else if (monitor.matches) { // width >1300

        myREPEAT("no privacy ", "BG", 70000);
        myREPEAT("sky ", "SKY", 19000);
        myREPEAT("grass ", "GRASS", 8000);
        myWINDOW("window ", 500);

        document.getElementById("titulo").style.fontSize = "40px";

        document.getElementById("SKY").style.width = "65%";
        document.getElementById("SKY").style.left = "17.5%";

        document.getElementById("GRASS").style.width = "65%";
        document.getElementById("GRASS").style.left = "17.5%";

        document.getElementById("FT").style.width = "70%";
        document.getElementById("FB").style.width = "70%";
        document.getElementById("FMH").style.width = "65.4%";
        document.getElementById("FT").style.left = "15%";
        document.getElementById("FB").style.left = "15%";
        document.getElementById("FMH").style.left = "17.5%";
        document.getElementById("FL").style.left = "16%";
        document.getElementById("FR").style.right = "16%";

        let box = document.getElementById("box");
        box.classList.add("boxMonit");

        document.getElementById("VIDEOcontainer").style.width = "65%";
        document.getElementById("VIDEOcontainer").style.left = "17.5%";

        let button = document.querySelectorAll(".button");
        button = Array.from(button);
        button.forEach(element => {
            element.style.fontSize = "19px";
            element.style.marginLeft = "10px";
            element.style.paddingLeft = "10px";
            element.style.paddingRight = "10px";
        });

        let shead = document.getElementById("STRANGERhead");
        shead.classList.toggle("SHeadmonitor");
        let sbody = document.getElementById("STRANGERbody");
        sbody.classList.toggle("SBodymonitor");
    }

    //área minima para as frases serem legiveis, inferior  a isso passa a ser possível fazer scroll
    let w = window.innerWidth;
    let h = window.innerHeight;
    let area = w * h;
    if (area < 230405) {
        document.getElementById("BG").style.height = "111vh";
        document.getElementById("box").style.height = "23vh";
        document.getElementById("inicio").style.height = "111vh";

    } else {
        document.getElementById("BG").style.height = "100vh";
        document.getElementById("inicio").style.height = "100vh";
    }

}

myMD();
