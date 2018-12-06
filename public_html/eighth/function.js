function change_background(){
var colors = ["red", "green", "blue", "yellow", "pink", "cyan", "magenta", "orange", "brown", "gold", "black", "white", "gray"];
document.body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
};

function GenerateHeadder() {
//	alert("Generating Headder...")
    //var table = document.getElementById("headerTable");
    //var row = table.insertRow(0);
    //var cell1 = row.insertCell(0);
    //var cell2 = row.insertCell(1);
    //cell1.innerHTML = "NEW CELL1";
    //cell2.innerHTML = "NEW CELL2";
  document.getElementById("headder").innerHTML ='<li class="nav"><a class="active"href="index.html">Home</a></li><li class="nav"><a href="about.html">About</a></li><li class="nav"><a href="testing.html">Testing</a></li>';
  //$('#headder').append(myHeadder);
 //<li><a class="active"href="index.html">Home</a></li>
  //<li><a href="about.html">About</a></li>
  //<li><a href="testing.html">Testing</a></li>
//alert("Generated Header?")
};
