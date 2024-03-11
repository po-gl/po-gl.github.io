
function closeModal() {
    window.location.hash = "#Portfolio";
}

let modals = document.getElementsByClassName("modal");
for (let element of modals) {
    element.addEventListener("click", closeModal);
}

let modalContents = document.getElementsByClassName("modal-content");
for (let element of modalContents) {
    element.addEventListener("click", (e) => e.stopPropagation());
};

