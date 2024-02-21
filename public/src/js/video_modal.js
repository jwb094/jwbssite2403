
const  modalTriggerBtn = document.getElementById("modalTriggerBtn");
const  modalElem = document.getElementById("modal-video_bloc");
const  modalCloseBtn = document.getElementById("modalCloseBtn");


modalTriggerBtn.onclick = function () {
    //alert("hi");
    modalElem.classList.remove("hidden");
}


modalCloseBtn.onclick = function () {
    //alert("close");
    modalElem.classList.add("hidden");
}