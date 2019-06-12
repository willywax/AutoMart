var previewModal = document.getElementById('previewModal');
var orderModal = document.getElementById('orderModal');

var previewBtn = document.getElementById('previewBtn');
var cancelBtn = document.getElementById('cancelBtn');

var orderBtn = document.getElementById('orderBtn');

previewBtn.addEventListener('click', function () {
    previewModal.style.display = "block";
});

//Order MOdal Pop Up
orderBtn.addEventListener('click', function () {
    previewModal.style.display = "none";
    orderModal.style.display = "block";
});

var closeBtn = document.getElementsByClassName('close')[0];

closeBtn.onclick = function () {
    previewModal.style.display = "none";
    orderModal.style.display = "none";
}

cancelBtn.onclick = function () {
    previewModal.style.display = "none";
    orderModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === previewModal || event.target === orderModal) {
        previewModal.style.display = "none";
        orderModal.style.display = "none";
    }
}
