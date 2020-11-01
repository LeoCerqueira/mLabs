// Extractiong values from Session Storage

var sotialTableLn = JSON.parse(sessionStorage.getItem('linkedin'));
var sotialTableIn = JSON.parse(sessionStorage.getItem('instagram'));
var textTable = JSON.parse(sessionStorage.getItem('comentario'));
var dayTable = JSON.parse(sessionStorage.getItem('data'));
var timeTable = JSON.parse(sessionStorage.getItem('hora'));
var photoTable = JSON.parse(sessionStorage.getItem('foto'));

document.getElementById('sotialTableIn').style.display = sotialTableIn;
document.getElementById('sotialTableIn').style.margin = 'auto';

document.getElementById('sotialTableLn').style.display = sotialTableLn;
document.getElementById('sotialTableLn').style.margin = 'auto';

document.getElementById('textTable').innerHTML = textTable;

document.getElementById('dayTable').innerHTML = dayTable;

document.getElementById('timeTable').innerHTML = timeTable;

document.getElementById('photoTable').src = photoTable;
