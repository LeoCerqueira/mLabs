
// ------------- Sotial midia button behavior --------------------

function changeImg() {
	var button = document.getElementById('instaImg3').style.display;

	if (button == 'none') {		

		//-----Instagram's button behavior and effects 
		//-----Active
		
		//Button's interface behavior

		document.getElementById('instaImg1').style.display = 'none';
		document.getElementById('instaImg2').style.display = 'none';
		document.getElementById('instaImg3').style.display = 'block';

		//Preview's interface behavior

		document.getElementById('post-preview').style.display = 'block';
		document.getElementById('post-preview-in').style.display = 'none';
		document.getElementById('waiting').style.display = 'none';

		//Linkedin's button behavior

		document.getElementById('inImg1').style.display = 'block';
		document.getElementById('inImg2').style.display = 'block';
		document.getElementById('inImg3').style.display = 'none';
	} else {

		//Unpressing 
		//Button's interface behavior


		document.getElementById('instaImg1').style.display = 'block';
		document.getElementById('instaImg2').style.display = 'block';
		document.getElementById('instaImg3').style.display = 'none';

		document.getElementById('post-preview').style.display = 'none';
		document.getElementById('waiting').style.display = 'block';
	}
}

function changeImg_1() {
	var button = document.getElementById('inImg3').style.display;

	if (button == 'none') {

        //Linkedin button behavior and effects 

		document.getElementById('inImg1').style.display = 'none';
		document.getElementById('inImg2').style.display = 'none';
        document.getElementById('inImg3').style.display = 'block';
		
		document.getElementById('post-preview-in').style.display = 'block';		
        document.getElementById('post-preview').style.display = 'none';
		document.getElementById('waiting').style.display = 'none';

		document.getElementById('instaImg1').style.display = 'block';
		document.getElementById('instaImg2').style.display = 'block';
		document.getElementById('instaImg3').style.display = 'none';
	} else {
		document.getElementById('inImg1').style.display = 'block';
		document.getElementById('inImg2').style.display = 'block';
		document.getElementById('inImg3').style.display = 'none';

		document.getElementById('post-preview-in').style.display = 'none';		
        document.getElementById('post-preview').style.display = 'none';
		document.getElementById('waiting').style.display = 'block';
	}
}
