var dog = 0;
var cat = 0;
var cow = 0;
var lion = 0;
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/MdK5jnJ_y/', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
       console.log(results);
       random_number_r = Math.floor(Math.random() * 255) + 1;
       random_number_g = Math.floor(Math.random() * 255) + 1;
       random_number_b = Math.floor(Math.random() * 255) + 1;

   document.getElementById("detected voices").innerHTML = "Detected Dog -"+dog+" Detected Cat -"+cat+" Detected Cow -"+cow+" Detected Lion -"+lion+" ";
   document.getElementById("detected voices").style.color = "rgb(" + random_number_r+","+random_number_g+","+random_number_r+")";
   document.getElementById("animal-voices").style.color = "rgb(" + random_number_r+","+random_number_g+","+random_number_r+")";
   document.getElementById("animal-voices").innerHTML = "Detected Voice of - "+ results[0].label;

   img = document.getElementById('dog-barking-vector-cartoon-sticker_590999_wh860.png');
   img1 = document.getElementById('mooing.jpg');
   img2 = document.getElementById('sticker-of-a-happy-cartoon-cat-meowing-vector.jpg');
   img3 = document.getElementById('depositphotos_72502531-stock-illustration-cartoon-roaring-lion.jpg');
   
   if(results[0].label == "Barking") {
       img.src = '4m3k.gif';
       dog = dog + 1;

   } else if (results[0].label == "meowing"){
       img.src = 'NAk7.gif';
       cat = cat + 1;
       
   } else if (results[0].label == "mooing"){
       img.src = 'Za9e.gif';

   }else (results[0].label == "roaring")
       img.src = 'depositphotos_72502531-stock-illustration-cartoon-roaring-lion.jpg';
   }
   }
   