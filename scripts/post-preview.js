

// Function to get content from the text area

getText();

function getText() {

	
	var description = document.getElementById('txt-desc-insta').innerHTML;
    var text = document.getElementById('textarea').value;
    
	if (text != "") {
		description = '<p>' + text + '</p>';
		document.getElementById('txt-desc-insta').innerHTML = description;
	}else if (text == "") {

        description = '<p>Aqui vai o texto descritivo desse post</p>';
		document.getElementById('txt-desc-insta').innerHTML = description;

    }
}

// Function to get content from the image upload

function readImage() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
            document.getElementById("prevImg").src = e.target.result;
        };       
        file.readAsDataURL(this.files[0]);
    }
}

document.getElementById("file-select").addEventListener("change", readImage, false);