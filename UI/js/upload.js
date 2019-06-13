function previewFiles() {

    //var image_card = document.querySelector('image-card')
    var preview = document.querySelector('#preview');
    var files = document.querySelector('input[type=file]').files;

    function readAndPreview(file) {

        // Make sure `file.name` matches our extensions criteria
        if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
            var reader = new FileReader();

            reader.addEventListener("load", function() {
                var image = new Image();

                var img = new Image();
                image.title = file.name;
                image.src = this.result;
                image.classList.add('image-card');
                preview.prepend(image);

            }, false);

            reader.readAsDataURL(file);
        }

    }

    if (files && files.length < 4) {
        //console.log(files.length);
        [].forEach.call(files, readAndPreview);
    } else {
        alert('Max No of files uploaded');
    }

}