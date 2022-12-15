const loadModal = content => {
    document.getElementById("modal_content").innerHTML = content;
    document.getElementById("modal").style.display = "block";
}

const closeModal = () => {
    document.getElementById("modal_content").innerHTML = "";
    document.getElementById("modal").style.display = "none";
}

export {
    loadModal,
    closeModal
}