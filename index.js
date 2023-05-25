const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const hours = document.querySelector('.hours');
const days = document.querySelector('.days');
const topImage = document.querySelector('.top-image');
const bottomImage = document.querySelector('.bottom-image');
const topImageArray = ["img/kenan-top.png", "img/farley-top.png", "img/confused-girl-top.png", "img/threeve-top.png", "img/blind-top.png", "img/andy-top.png"];
const bottomImageArray = ["img/kenan-bottom.png", "img/farley-bottom.png", "img/confused-girl-bottom.png", "img/threeve-bottom.png", "img/blind-bottom.png", "img/andy-bottom.png"];
const backgroundArray = ["img/kenan-full.png", "img/farley-full.png", "img/confused-girl-full.png", "img/threeve-full.png", "img/blind-full.png", "img/andy-full.png"]
const cycleBox = document.querySelector('.seconds-ones-box');
const rotatingBackground = document.querySelector('.rotating-bg');
// rotatingBackground.style.backgroundImage = `url(/img/question-mark.png)`
const dropBackground = document.querySelector('.drop-box');

const oneSecondCycle = setInterval(cycleImages, 1200);
let count = 0;
function cycleImages() {
    rotatingBackground.style.backgroundImage = `url(${backgroundArray[count]}`;
    if (count > 0) {
        let flip = topImageArray[count-1];
        topImage.setAttribute('src', flip);
    } else {
        let flip = topImageArray[5];
        topImage.setAttribute('src', flip);
    };
    let drop = bottomImageArray[count];
    bottomImage.setAttribute('src', drop);
    if (count === 0) {
        dropBackground.style.backgroundImage = `url(${backgroundArray[5]})`;
    } else {
        dropBackground.style.backgroundImage = `url(${backgroundArray[count-1]})`;
    };
    count++;
    if (count === topImageArray.length) {
        drop = topImageArray[5];
        count = 0;
    }
}


function generateQuestionMarks(time, boxTens, boxOnes) {
    time.innerHTML = `<div class="flip-box question-bg">
                        <div class="${boxTens}">
                            <div class="front">
                                <img src="img/question-top.png" alt="Question mark" class="q-mark">
                            </div>
                            <div class="back">
                                <img src="img/question-bottom.png" alt="Question mark" class="q-mark">
                            </div>
                        </div>
                        </div>
                        <div class="flip-box question-bg">
                        <div class="${boxOnes}">
                            <div class="front">
                                <img src="img/question-top.png" alt="Question mark" class="q-mark">
                            </div>
                            <div class="back">
                                <img src="img/question-bottom.png" alt="Question mark" class="q-mark">
                            </div>
                        </div>
                        </div>
                        <div class="colon">
                        <span>:</span>
                    </div>`;
}

generateQuestionMarks(minutes, "minutes-tens-box", "minutes-ones-box");
generateQuestionMarks(hours, "hours-tens-box", "hours-ones-box");
generateQuestionMarks(days, "days-tens-box", "days-ones-box");

let year = new Date();
let credit = document.querySelector('.credit');
credit.textContent = `A light-hearted expression of biblical truth | ${year.getFullYear()}.`