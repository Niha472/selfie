var SpeechRecognition=window.webkitSpeechRecognition;
var Niha_listening_skills=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML;
    Niha_listening_skills.start();
}
Niha_listening_skills.onresult= function(event){
    console.log(event)
    var content=event.results[0][0].transcript;
    console.log(content)
    document.getElementById("textbox").innerHTML=content
    speak();
} 
function speak(){
    var synth= window.speechSynthesis;
    speak_data= document.getElementById("textbox").value;
var utter_this= new SpeechSynthesisUtterance(speak_data)
synth.speak(utter_this)
Webcam.attach(camera)
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
