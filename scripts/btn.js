function changeImg(){
     
    
    var button = document.getElementById('instaImg3').style.display

  


 if(button == "none"){
    document.getElementById('instaImg1').style.display  = 'none'
    document.getElementById('instaImg2').style.display  = 'none'
    document.getElementById('instaImg3').style.display = 'block'


    document.getElementById('inImg1').style.display  = 'block'
    document.getElementById('inImg2').style.display  = 'block'
    document.getElementById('inImg3').style.display  = 'none'


 }else{
    document.getElementById('instaImg1').style.display  = 'block'
    document.getElementById('instaImg2').style.display  = 'block'
    document.getElementById('instaImg3').style.display  = 'none'

 }

}

function changeImg_1(){
     
    
    var button = document.getElementById('inImg3').style.display

   


 if(button == "none"){
    document.getElementById('inImg1').style.display  = 'none'
    document.getElementById('inImg2').style.display  = 'none'
    document.getElementById('inImg3').style.display = 'block'

    document.getElementById('instaImg1').style.display  = 'block'
    document.getElementById('instaImg2').style.display  = 'block'
    document.getElementById('instaImg3').style.display = 'none'


 }else{
    document.getElementById('inImg1').style.display  = 'block'
    document.getElementById('inImg2').style.display  = 'block'
    document.getElementById('inImg3').style.display  = 'none'

 }

}