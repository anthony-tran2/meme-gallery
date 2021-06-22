var gallery = document.querySelector('main');

var imageUrls = [];

var imageUrlInput = document.querySelector("#linkInput");
var addImageButton = document.querySelector("#addButton");


addImageButton.addEventListener('click', function() {
  if (imageUrlInput.value !== ''){
    imageUrls.push(imageUrlInput.value)
  }
   imageUrlInput.value = '';
   updateGallery();
})

function updateGallery() {
  gallery.innerHTML = '';
  for (var k = 0; k < imageUrls.length; k++) {
    var imageElement = document.createElement("img");
    imageElement.className ="gallery-image";
    imageElement.src =imageUrls[k];
    gallery.appendChild(imageElement);
  }
};

updateGallery();
