var previewModal = document.getElementById('previewModal');
var orderModal = document.getElementById('orderModal');
var flagModal = document.getElementById('flagModal');
var submitOrderModal = document.getElementById('submitOrderModal');

var previewBtn = document.getElementById('previewBtn');

var cancelBtn = document.getElementById('cancelBtn');

var orderBtn = document.getElementById('orderBtn');

var orderModalCloseBtn = document.getElementsByClassName('close')[1];
var previewModalCloseBtn = document.getElementsByClassName('close')[0];

previewModalCloseBtn.onclick = function () {
    previewModal.style.display = "none";
}

orderModalCloseBtn.onclick = function () {
    orderModal.style.display = "none";
}

//Order MOdal Pop Up
orderBtn.addEventListener('click', function () {
    previewModal.style.display = "none";
    orderModal.style.display = "block";
});

// Function to close Modal
function closeModal(type) {
    //Handling optional parameter
    type = typeof type=='undefined' ? 'none' : type;
    if (type === 'preview')
        previewModal.style.display = "none";
    else if (type === 'order')
        orderModal.style.display = "none";
    else if (type === 'flag')
        flagModal.style.display = "none";
    else if (type === 'submitOrder')
        submitOrderModal.style.display = "none";
    else {
        previewModal.style.display = "none";
        orderModal.style.display = "none";
        flagModal.style.display = "none";
        submitOrderModal.style.display = "none";
    }

}

//Function to Open ANy Modal
function openPreview(type) {
    //  alert('Clicker');
    if (type === 'preview')
        previewModal.style.display = "block";
    if (type === 'order')
        orderModal.style.display = "block";
    if (type === 'flag')
        flagModal.style.display = "block";
    if (type === 'submitOrder')
        submitOrderModal.style.display = "block";
}

//Confrimation Alert
function alertBox(text) {
    alert(text);
    closeModal();
}



window.onclick = function (event) {
    if (event.target === previewModal || event.target === orderModal) {
        previewModal.style.display = "none";
        orderModal.style.display = "none";
    }
}
