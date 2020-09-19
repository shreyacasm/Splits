var counter = 2;
var limit = 6;
function addInput(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "Person " + (counter + 1) + " <br><input type='text' name='myInputs[]'>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;
     }
    var ansD = document.getElementById("tot");
		ansD.value = counter;
    
}
function val(){
    
}

function exp() {
    
    var counter = parseInt(document.getElementById("tot").value);
    var expense = parseInt(document.getElementById("calex").value) + parseInt(document.getElementById("expense").value);
    var exclude = parseInt(document.getElementById("choice").value);
    
    var divide = expense/(counter-exclude);
    var cost = document.getElementById("cost");
    cost.value = divide;
    calex.value = expense;
    var res = document.getElementById("res");
		res.value = expense - divide;
    paid.value = expense;
    alert("This Expense Added !!! Add another or Calculate Total");
    
    var change = document.getElementById("choice");
    choice.value = "0";
    
}

function showpanel() {
  document.getElementById("panel").style.display = "block";
  document.getElementById("main").style.display = "none";
}

function showpanel2() {
  document.getElementById("panelex").style.display = "block";
  document.getElementById("panel").style.display = "none";
}
function showpanelback() {
    document.getElementById("panel").style.display = "block";
    document.getElementById("panelex").style.display = "none";
  
}