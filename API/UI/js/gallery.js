function myFunction(img) {
  const expandedImg = document.getElementById('expandedImg');

  const imageText = document.getElementById('imageText');

  expandedImg.src = img.src;

  imageText.innerHTML = img.alt;

  expandedImg.parentElement.style.display = 'block';
}
