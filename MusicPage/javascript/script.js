var mysound=document.getElementById("mysound");
var icon=document.getElementById("icon");
function mfunction(){
    if(mysound.paused){
        mysound.play();
        icon.src="download.jpeg";
    }
    else{
        mysound.pause();
        icon.src="";

    }
}