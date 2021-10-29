const tabContainer = document.querySelector('.tabs');
const availableTabs = document.querySelectorAll("[data-tab]");

tabContainer.addEventListener("click", e => {
    const clickedOnATab = e.target.dataset.tab;

    if (clickedOnATab) {
        availableTabs.forEach(tab => {
            tab.classList.remove("is-tab-selected");
        })

        e.target.classList.add("is-tab-selected");
    }
})
