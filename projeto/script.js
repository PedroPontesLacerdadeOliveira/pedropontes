function calcular(){
    let filho = parseFloat(document.getElementById('filho').value);
    let pai = parseFloat(document.getElementById('pai').value);
    
    let resultado = pai - filho;
    if (resultado >= 20 && resultado <= 35){
        document.getElementById('status').src= "img/pai-idademedia.webp";
        document.getElementById('texto').innerHTML = "<h1>Seu pai te teve na idade média brasileira</h1>";
    } else if (resultado<20 && resultado>11){
        document.getElementById('status').src="img/pai-novo.jpg";
         document.getElementById('texto').innerHTML = "<h1>Seu pai te teve numa idade abaixo da média Brasileira</h1>";
    } else if (resultado>35 && resultado<100){
         document.getElementById('status').src="img/pai-velho.jpg";
         document.getElementById('texto').innerHTML = "<h1>Seu pai te teve numa idade acima da média Brasileira</h1>";
    } else {
        document.getElementById('status').src="img/caveira.jpeg";
         document.getElementById('texto').innerHTML = "<h1><i>Error.</i> Seu pai cientificamente não pode gerar filhos </h1>";

    }
}
function limpar() {
    document.getElementById('status').src='img/pai.png'
    document.getElementById('filho').value='';
    document.getElementById('pai').value='';
    document.getElementById('texto').innerHTML='';

}