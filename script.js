let chave = "cebcd482eda57fa9a6714c1c2ba91885"
function colocarNatela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name 
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector('.icone').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidáde " + Math.floor(dados.main.humidity) + "°C"
}

async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric").then(resposta => resposta.json())

    colocarNatela(dados)
}
function cliquenobotao() {
    let cidade = document.querySelector(".in-cidade").value
    buscarCidade(cidade)
}

