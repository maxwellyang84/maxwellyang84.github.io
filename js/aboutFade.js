function fadeOutMain(){
    var element = document.getElementById("mainpage");
    var i = 10;
    var k = window.setInterval(function(){
        if(i < 0){
            clearInterval(k);
        }else{
            element.style.opacity = i/10;
            i--;
        }
    }, 100);
    
    element.style.pointerEvents= "none";
   
    
}