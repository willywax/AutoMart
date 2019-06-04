function myFunction(){
    var dropdown = document.getElementById('dropdown-content');
    if(dropdown.classList.contains('show')){
        dropdown.classList.remove('show');
        dropdown.classList.add('hide');
    }else{
        dropdown.classList.add('show');
        dropdown.classList.remove('hide');
    }
}
