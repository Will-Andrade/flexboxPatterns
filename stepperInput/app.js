const stepperContainer = document.querySelector(".stepper-container");
const stepperInput = document.querySelector(".stepper-input");

const stepperHandler = ({ target: { classList } }) => {
    const increment = classList.contains("button-left");
    increment ? Number(stepperInput.value++) : Number(stepperInput.value--);
}

stepperContainer.addEventListener('click', stepperHandler);
