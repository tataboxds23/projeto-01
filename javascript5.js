
// armazena o nome dos jogadores inputados em variáveis únicas //

$(".botaoj").click(cadastraJogador);

function cadastraJogador(){

    var x = document.getElementById("jog1").value;
    var y = document.getElementById("jog2").value;
    var z = document.getElementById("jog3").value;
    var w = document.getElementById("jog4").value;
    var k = document.getElementById("jog5").value;

    var nomes = [x,y,z,w,k];

    var a = document.getElementById("mostra-jog1").innerHTML = x;
    var b = document.getElementById("mostra-jog2").innerHTML = y;
    var c = document.getElementById("mostra-jog3").innerHTML = z;
    var d = document.getElementById("mostra-jog4").innerHTML = w;
    var e = document.getElementById("mostra-jog5").innerHTML = k;

     $(".cartoes,.campo,.botaoj").css("display", "none"); // muda o layout //
        $(".cartoes1,.campo3,.botaoz,.campo4").show();

}


$(".botaoz").click(mostraCartao); // o que acontece quando clico neste botao //

function mostraCartao(){ // recebe o número dos cartões de cada jogador //

    
    var h1 = document.getElementById("recebe-cartao1").value;
    var h2 = document.getElementById("recebe-cartao2").value;
    var h3 = document.getElementById("recebe-cartao3").value;
    var h4 = document.getElementById("recebe-cartao4").value;
    var h5 = document.getElementById("recebe-cartao5").value;


    var jogadores = [
                { jogador: document.getElementById("mostra-jog1").innerHTML, value: h1 },
                { jogador: document.getElementById("mostra-jog2").innerHTML, value: h2 },
                { jogador: document.getElementById("mostra-jog3").innerHTML, value: h3 },
                { jogador: document.getElementById("mostra-jog4").innerHTML, value: h4 },
                { jogador: document.getElementById("mostra-jog5").innerHTML, value: h5 }
                ];
                        jogadores.sort(function (a, b) {
                        if (a.value > b.value) {
                            return -1;
                        }
                        if (a.value < b.value) {
                            return 1;
                        }
                        // a must be equal to b
                        return 0;
});


                        var convertida = jogadores.map(function(obj) {
                            return Object.keys(obj).map(function(chave) {
                            return obj[chave];
                        });
                    });


                        document.getElementById("mostra-cartao1").innerHTML = JSON.stringify(convertida).replace(/]|[[]/g, '\n');

    $(".botaoz").css("display", "none");
        $(".campo5").show();
}



