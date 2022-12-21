//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);
      
document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 

 
 //set current year in span with id of this-year
 let d = new Date(); let thisYear = d.getFullYear();
 document.getElementById("this-year").innerHTML = thisYear;

//manages mobile nav 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}   

function openTab(tabName) {
    var tabs = document.getElementsByClassName("tab");
    for(var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

function playAudio(songName) {
    var a = document.querySelectorAll('audio');
    var btn = songName + "-btn";
    for(const audios of a)
    {
        audios.pause();
        audios.currentTime = 0;
    }
    if(document.getElementById(btn).innerText == "Play") {
        document.getElementById(btn).innerText = "Stop";
        document.getElementById(songName).play();
    } else {
        document.getElementById(btn).innerText = "Play";
        for(const audios of a)
            {
            audios.pause();
            audios.currentTime = 0;
            }
    }
}