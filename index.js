const btn = document.getElementById('btn');
var visibility = document.getElementsByClassName('toggle');
btn.addEventListener('click', () => {
    const screen = document.querySelector('div#formScreen');

    screen.style.display = 'block'
    
    document.onkeydown = function(event){
        if (event.key == 'Escape' && screen.style.display == 'block') {
            screen.style.display = 'none'
        }
    }
    console.log(screen)
})

timer = setInterval(update, 1000);
var startDate = new Date();
//como exemplo vou definir a data de fim com base na data atual
var endDate = new Date();
endDate.setDate(endDate.getDate()+1);

//aqui é a diferenca entre as datas, basicamente é com isso que voce calcula o tempo restante
var dateDiff;
var days, hours, minutes, seconds;
var timer;
function update() {
    setInterval(function () {
        dateDiff = endDate - startDate;
        dateDiff = dateDiff / 1000;
  
	    seconds = Math.floor((dateDiff % 60));
  
        dateDiff = dateDiff / 60;
        minutes = Math.floor((dateDiff % 60));
            
        dateDiff = dateDiff / 60;
        hours = Math.floor((dateDiff%24));
  
        days = Math.floor(dateDiff/24);

        display.textContent = days + " : " + hours + " : " + minutes + " : " + seconds;
    });
    startDate.setSeconds(startDate.getSeconds()+1);
}
window.onload = function () {
    display = document.querySelector('#timer'); // selecionando o timer
};