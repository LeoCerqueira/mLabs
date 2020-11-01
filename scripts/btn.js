// ------------- Sotial midia button behavior --------------------

//-----Instagram's button behavior and effects

function changeImg() {
	var button = document.getElementById('instaImg3').style.display;

	if (button == 'none') {
		//-----Instagram when "Active" :

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

		//Preview post are behavior

		document.getElementById('post-preview').style.display = 'none';
		document.getElementById('waiting').style.display = 'block';
	}
}

//-----Linkedin's button behavior and effects

function changeImg_1() {
	var button = document.getElementById('inImg3').style.display;

	if (button == 'none') {
		//-----Linkedin when "Active" :

		//Linkedin button behavior and effects

		document.getElementById('inImg1').style.display = 'none';
		document.getElementById('inImg2').style.display = 'none';
		document.getElementById('inImg3').style.display = 'block';

		//Preview's interface behavior

		document.getElementById('post-preview-in').style.display = 'block';
		document.getElementById('post-preview').style.display = 'none';
		document.getElementById('waiting').style.display = 'none';

		//Instagram's button behavior

		document.getElementById('instaImg1').style.display = 'block';
		document.getElementById('instaImg2').style.display = 'block';
		document.getElementById('instaImg3').style.display = 'none';
	} else {
		//Unpressing

		//Button's interface behavior

		document.getElementById('inImg1').style.display = 'block';
		document.getElementById('inImg2').style.display = 'block';
		document.getElementById('inImg3').style.display = 'none';

		//Preview post are behavior

		document.getElementById('post-preview-in').style.display = 'none';
		document.getElementById('post-preview').style.display = 'none';
		document.getElementById('waiting').style.display = 'block';
	}
}

// Screen behavior mobile - page-Scheduling

function showPreview() {
	document.getElementById('section2').style.display = 'block';
	document.getElementById('section2').style.position = 'fixed';
	document.getElementById('section2').style.width = '92%';
	document.getElementById('preview-box').style.background = '#e5e5e5';
	document.getElementById('form-field').style.border = 'none';

	document.getElementById('section1').style.display = 'none';
	document.getElementById('footer').style.display = 'none';
	document.getElementById('post-header').style.display = 'none';
}

// Menu button - mobile --- page-Scheduling


function backToScheduling(){

	document.getElementById('section1').style.display = 'block';
	document.getElementById('section2').style.display = 'none';
	document.getElementById('footer').style.display = 'flex';
	document.getElementById('post-header').style.display = 'none';

}

// "Agendar" button behavior

function submitData() {
	instagram = document.getElementById('instaImg3').style.display;
	linkedin = document.getElementById('inImg3').style.display;

	date = document.getElementById('date').value;
	time = document.getElementById('time').value;

	if (
		(instagram == 'block' || linkedin == 'block') &&
		date != '' &&
		time != ''
	) {
		insta = JSON.stringify(instagram);
		lin = JSON.stringify(linkedin);
		dt = JSON.stringify(date);
		tm = JSON.stringify(time);

		sessionStorage.setItem('instagram', insta);
		sessionStorage.setItem('linkedin', lin);
		sessionStorage.setItem('data', dt);
		sessionStorage.setItem('hora', tm);

		document.getElementById('modal').style.display = 'flex';
	} else {
		alert('Esolha ao menos uma rede social, data e horário.');
	}
}
