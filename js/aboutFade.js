function onClickProjects(){
    console.log("triggered project")
    var projectpage = document.getElementById("projectlistpage");
    var mainpage = document.getElementById("mainpage");
    var aboutpage = document.getElementById("aboutpage");
    if(!(projectpage.style.display === "none")){//check if projects is already on the page
        console.log("what")
        return;
    } 
    
    if(!(mainpage.style.display === "none")){
       console.log("main fade")
        fade(mainpage, projectpage);
    }else if(!(aboutpage.style.display === "none")){
        console.log("about fade")
        fade(aboutpage, projectpage);
    }
   
    
}

function onClickAbout(){
    console.log("triggered about")
    var projectpage = document.getElementById("projectlistpage");
    var mainpage = document.getElementById("mainpage");
    var aboutpage = document.getElementById("aboutpage");
    if(!(aboutpage.style.display === "none")){//check if projects is already on the page
        return;
    } 
    
    if(!(mainpage.style.display === "none")){
        fade(mainpage, aboutpage);
    }else if(!(projectpage.style.display === "none")){
        fade(projectpage, aboutpage);
    }
   
    
}

function onClickMain(){
    console.log("triggered main")
    var projectpage = document.getElementById("projectlistpage");
    var mainpage = document.getElementById("mainpage");
    var aboutpage = document.getElementById("aboutpage");
    if(!(mainpage.style.display === "none")){//check if projects is already on the page
        return;
    } 
    
    if(!(aboutpage.style.display === "none")){
        fade(aboutpage, mainpage);
    }else if(!(projectpage.style.display === "none")){
        fade(projectpage, mainpage);
    }
    
}


function fade(element, element2){
    
    var seconds = 1000/1000;
    element.style.transition = "opacity "+seconds+"s ease";
    element.style.opacity = 0;
    
    setTimeout(function() {
        element.style.display="none";
        fadeIn(element2);
    }, 1000);
    
    
   
}

function fadeIn(element){
     var seconds = 1000/1000;
   
    element.style.display = "block";
 
   
    
    setTimeout(function() {
        element.style.transition = "opacity "+seconds+"s ease";
        element.style.opacity = 1;
    }, 100);
}

//
//function fadeOutMain(){
//    var mainpage = document.getElementById("mainpage");
//    if(mainpage.style.opacity == 1){
//        console.log("HELLO");
//        return;
//    }
//    var i = 10;
//    var k = window.setInterval(function(){
//        if(i < 0){
//            clearInterval(k);
//        }else{
//            mainpage.style.opacity = i/10;
//            i--;
//        }
//    }, 100);
//    
//    mainpage.style.pointerEvents= "none";
//   fadeInAbout(mainpage);
//    
//}
//
//function fadeInMain(){
//    var mainpage = document.getElementById("mainpage");
//    if(mainpage.style.opacity == 1){
//        return;
//    }
//    var i = 0;
//    var k = window.setInterval(function(){
//        if(i > 10){
//            clearInterval(k);
//        }else{
//            mainpage.style.opacity = i/10;
//            i++;
//        }
//    }, 100);
//    mainpage.style.pointerEvents = "auto";
//}
//
//function fadeInAbout(var element){
//    var mainpage = document.getElementById("mainpage");
//    var projectspage = document.getElementById("projectlistpage");
//    
//    if(mainpage.isEqualNode(element)){
//         mainpage.style.opacity = 0;
//         mainpage.style.display = "none";
//    }else if(projectspage.style.opacity==1){
//        projectspage.style.opacity = 0;
//        projectspage.style.display="none";
//    }
//    var aboutpage = document.getElementById("aboutpage");
//    aboutpage.style.opacity = 0;
//    aboutpage.style.display = "flex";
//    var i = 0;
//     var k = window.setInterval(function(){
//        if(i > 10){
//            clearInterval(k);
//        }else{
//            aboutpage.style.opacity = i/10;
//            i++;
//        }
//    }, 100);
//    aboutpage.style.pointerEvents = "auto";
//    
//}
//
//function fadeInProjects(){
//    var aboutpage = document.getElementById("aboutpage");
//    var mainpage = documents.getElementById("mainpage");
//    if(aboutpage.style.opacity==1){
//        aboutpage.style.opacity = 0;
//        aboutpage.style.display = "none";
//    }else if(mainpage.style.opacity==1){
//        mainpage.style.opacity=0;
//        mainpage.style.display = "none";
//    }
//}