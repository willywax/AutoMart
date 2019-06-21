var filterBtn = document.getElementById('filterBtn');
var dropdown = document.getElementById('dropdown-content');

//filterBtn.onclick = closeFilter();

function closeFilter() {
    
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        dropdown.classList.add('hide');
    } else {
        dropdown.classList.add('show');
        dropdown.classList.remove('hide');
    }
}


var nav = document.getElementById('nav-button');

nav.addEventListener('click', () => {
    var nav_content = document.getElementById('nav-content');
    if (nav_content.classList.contains('show')) {
        nav_content.classList.remove('show');
        nav_content.classList.add('hide');
    } else {
        nav_content.classList.add('show');
        nav_content.classList.remove('hide');
    }
})