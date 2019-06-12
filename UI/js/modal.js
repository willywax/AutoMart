var previewModal = document.getElementById('previewModal');
var previewBtn = document.getElementById('previewBtn');
var cancelBtn = document.getElementById('cancelBtn');

previewBtn.addEventListener('click', function () {
    previewModal.style.display = "block";
});

var closeBtn = document.getElementsByClassName('close')[0];

closeBtn.onclick = function () {
    previewModal.style.display = "none";
}

cancelBtn.onclick = function () {
    previewModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == previewModal) {
        previewModal.style.display = "none";
    }
}
