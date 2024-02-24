// navbar toggle button 

function nav_Toggler() {
    var x = document.getElementById("sub_header2");
    if (x.className === "sub_header2") {
      x.className += " responsive";
    } else {
      x.className = "sub_header2";
    }
  }