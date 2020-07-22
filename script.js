const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const transition = document.querySelector('.hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const mins = now.getMinutes();
    const minsDegree = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegree}deg)`;


    const hours = now.getHours();
    const hoursDegree = ((hours / 60) * 360) + 90;
    hourHand.style.transform =  `rotate(${hoursDegree}deg)`;

    if (secondsDegree == 444) {
        transition.style.transform = "";
    } 

    console.log(secondsDegree);

}

setInterval(setDate, 1000);