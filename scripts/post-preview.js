// Func --- get content from the text area --- uploading preview-post-card

//Instagram - Linkedin
getText();

function getText() {
	var descriptionInsta = document.getElementById('txt-desc-insta').innerHTML;
	var descriptionIn = document.getElementById('txt-desc-in').innerHTML;

	var text = document.getElementById('textarea').value;

	var comment = JSON.stringify(text);
	sessionStorage.setItem('comentario', comment);


	if (text != '') {
		descriptionInsta = '<p>' + text + '</p>';
		descriptionIn = '<p>' + text + '</p>';
		document.getElementById('txt-desc-insta').innerHTML = descriptionInsta;
		document.getElementById('txt-desc-in').innerHTML = descriptionIn;
	} else if (text == '') {
		descriptionIn = '<p>Aqui vai o texto descritivo desse post</p>';
		descriptionInsta = '<p>Aqui vai o texto descritivo desse post</p>';

		document.getElementById('txt-desc-insta').innerHTML = descriptionInsta;
		document.getElementById('txt-desc-in').innerHTML = descriptionIn;
	}
}

// Func ------ get content from the image upload field ---- upload to preview-post-card

//Instagram - Linkedin

function readImage() {
	if (this.files && this.files[0]) {
		var file = new FileReader();
		file.onload = function (e) {
			document.getElementById('prevImg').src = e.target.result;
			document.getElementById('prevImg-in').src = e.target.result;
			var photo = document.getElementById('prevImg-in').src;
			console.log(photo)
			var ph = JSON.stringify(photo);
			sessionStorage.setItem('foto', ph);


		};
		file.readAsDataURL(this.files[0]);
	}
}

document
	.getElementById('file-select')
	.addEventListener('change', readImage, false);
