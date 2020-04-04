function myFunction() {
  var x = document.getElementById("myTopNav");
  if (x.className === "topnav") {
      console.log("here")
    x.className += " responsive";
  } else {
      console.log("nope here")
    x.className = "topnav";
  }
}