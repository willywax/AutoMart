var previewModal = document.getElementById('previewModal');
var orderModal = document.getElementById('orderModal');

var previewBtn = document.getElementById('previewBtn');

var cancelBtn = document.getElementById('cancelBtn');

var orderBtn = document.getElementById('orderBtn');

var orderModalCloseBtn = document.getElementsByClassName('close')[1];
var previewModalCloseBtn = document.getElementsByClassName('close')[0];

    previewModalCloseBtn.onclick = function () {
        previewModal.style.display = "none";
    }

    orderModalCloseBtn.onclick = function(){
        orderModal.style.display = "none";
    }

//Order MOdal Pop Up
orderBtn.addEventListener('click', function () {
    previewModal.style.display = "none";
    orderModal.style.display = "block";
});


function closeModal(){
    previewModal.style.display = "none";
    orderModal.style.display = "none";
}

function openPreview(type){
    if(type === 'preview')
        previewModal.style.display = "block";
    if(type === 'order')
        orderModal.style.display = "block";
}


window.onclick = function (event) {
    if (event.target === previewModal || event.target === orderModal) {
        previewModal.style.display = "none";
        orderModal.style.display = "none";
    }
}
