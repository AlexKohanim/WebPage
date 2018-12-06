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
document.getElementById("headder").innerHTML ='<li class="nav"><a class="active"href="index.html">Home</a></li><li class="nav"><a href="about.html">About</a></li><li class="nav"><a href="testing.html">Testing</a></li> <li class="nav"><a href="bootStrap.html">Boots</a></li>';
}


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
    }
  };	
  xhttp.open("GET", "fortune.txt?"+ new Date().getTime(), true);
  xhttp.send();
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

function getFortune(){
//readTextFile("fortune.txt");
loadDoc();
}

