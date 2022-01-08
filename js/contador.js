var end = new Date('2022-01-31 00:00:00'.replace(" ", "T")+"Z");

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var idEtiquet = 'clock'
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById(idEtiquet).innerHTML = 'LA OFERTA A FINALIZADO!';

        return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById(idEtiquet).innerHTML = '<h5 class="title-contador" style="display: inline">LA OFERTA TERMINARÁ EN </h5>'+ days + ' días|';
    document.getElementById(idEtiquet).innerHTML += hours + ' horas|';
    document.getElementById(idEtiquet).innerHTML += minutes + ' minutos|';
    document.getElementById(idEtiquet).innerHTML += seconds + ' segundos';
}

timer = setInterval(showRemaining, 1000);

// const getRemainingTime = deadline => {
//     let now = new Date(),
//         remainTime = (new Date(deadline) - now + 1000) / 1000,
//         remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
//         remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
//         remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
//         remainDays = Math.floor(remainTime / (3600 * 24));

//     return {
//         remainSeconds,
//         remainMinutes,
//         remainHours,
//         remainDays,
//         remainTime
//     }
// };

// const countdown = (deadline, elem, finalMessage) => {
//     const el = document.getElementById(elem);

//     const timerUpdate = setInterval(() => {
//         let t = getRemainingTime(deadline);
//         el.innerHTML = `<h5 class="title-contador" style="display: inline">LA OFERTA TERMINARÁ EN </h5>${t.remainDays} días | ${t.remainHours} horas | ${t.remainMinutes} minutos | ${t.remainSeconds} segundos`;

//         if (t.remainTime <= 1) {
//             clearInterval(timerUpdate);
//             el.innerHTML = finalMessage;
//         }

//     }, 1000)
// };

// countdown('01 31 2022 23:59:59 GMT-0500', 'clock', '¡LA OFERTA A FINALIZADO!');

{/* <div id="countdown"></div> */}