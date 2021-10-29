const tabContainer = document.querySelector('.tabs');
const availableTabs = document.querySelectorAll("[data-tab]");

const clearSelectedItem = ({ classList }) => classList
    .remove("is-tab-selected");

const containerClickHandler = ({ target }) => {
    const clickedOnATab = target.dataset.tab;
    if (clickedOnATab) {
        availableTabs.forEach(clearSelectedItem);
        target.classList.add("is-tab-selected");
    }
}

tabContainer.addEventListener("click", containerClickHandler);
