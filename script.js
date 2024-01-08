const container = document.querySelector(".container-circle");

const circleToPut = `<svg class="progress-ring" height="120" width="120">
<circle class="progress-ring__circle" r="52" cx="60" cy="60" />
</svg>`;

const injectCircle = () => {
    container.innerHTML = "";
    console.log(container)
    container.innerHTML = circleToPut;
};

let circle;
circle = document.querySelector('.progress-ring__circle');


window.addEventListener("resize", () => {
    injectCircle;
    circle = document.querySelector('.progress-ring__circle');

});


const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

const buttons = document.querySelectorAll(".chapter");
let percentage = document.querySelector(".percentage");

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;



const setProgress = (buttonCount) => {
    let offset;

    switch (buttonCount) {
        case 0:
            offset = circumference - 0 / 100 * circumference;
            circle.style.strokeDashoffset = offset;
            percentage.textContent = '0';
            break;
        case 1:
            offset = circumference - 33 / 100 * circumference;
            circle.style.strokeDashoffset = offset;
            percentage.textContent = '33';
            break;
        case 2:
            offset = circumference - 66 / 100 * circumference;
            circle.style.strokeDashoffset = offset;
            percentage.textContent = '66';
            break;
        case 3:
            offset = circumference - 100 / 100 * circumference;
            circle.style.strokeDashoffset = offset;
            percentage.textContent = '100';
            break;
    }
    
  };

let pressedButtons = 1;
setProgress(pressedButtons);

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        buttons[i].classList.toggle("selected");
        if(buttons[i].classList.contains("selected")){
            pressedButtons++;
        } else {;
            pressedButtons--;
        }
        
        setProgress(pressedButtons);
    });
}

