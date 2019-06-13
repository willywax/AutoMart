var previewModal = document.getElementById('previewModal');
var orderModal = document.getElementById('orderModal');
var flagModal = document.getElementById('flagModal');
var submitOrderModal = document.getElementById('submitOrderModal');
var userModal = document.getElementById('userModal');
var deleteCarModal = document.getElementById('deleteCarModal');
var postCarModal = document.getElementById('postModal');
var submitPostModal = document.getElementById('submitPostModal');

var previewBtn = document.getElementById('previewBtn');

var cancelBtn = document.getElementById('cancelBtn');



var closeBtn = document.getElementsByClassName('close')[0];

closeBtn.onclick = function () {
    previewModal.style.display = "none";
}


// Function to close Modal
function closeModal(type) {
    //Handling optional parameter
    type = typeof type == 'undefined' ? 'none' : type;
    if (type === 'preview')
        previewModal.style.display = "none";
    else if (type === 'order')
        orderModal.style.display = "none";
    else if (type === 'flag')
        flagModal.style.display = "none";
    else if (type === 'submitOrder')
        submitOrderModal.style.display = "none";
    else if (type === 'user')
        userModal.style.display = "none";
    else if (type === 'deleteCar')
        deleteCarModal.style.display = "none";
    else if(type === 'post'){
        postCarModal.style.display = "none";
    }
    else if(type === 'submitPost'){
        submitPostModal.style.display = "none"
    }
    else {
        previewModal.style.display = "none";
        orderModal.style.display = "none";
        flagModal.style.display = "none";
        submitOrderModal.style.display = "none";
        userModal.style.display = "none";
        deleteCarModal.style.display = "none";
        postCarModal.style.display = "none";
        submitPostModal.style.display = "none"
    }
}

//Function to Open ANy Modal
function openPreview(type) {
    //alert('Clicker');
    if (type === 'preview')
        previewModal.style.display = "block";
    if (type === 'order')
        orderModal.style.display = "block";
    if (type === 'flag')
        flagModal.style.display = "block";
    if (type === 'submitOrder')
        submitOrderModal.style.display = "block";
    if (type === 'user')
        userModal.style.display = "block";
    if (type === 'deleteCar')
        deleteCarModal.style.display = "block";
    if(type === 'post')
        postCarModal.style.display = "block";
    if(type === 'submitPost')
        submitPostModal.style.display = "block";
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
