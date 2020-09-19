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
    var exclude = parseInt(document.getElementById("choice").value);
    var counter = parseInt(document.getElementById("tot").value);
    var expense = parseInt(document.getElementById("expense").value);
    
    var co = parseInt(document.getElementById("cost").value);
    var cal = parseInt(document.getElementById("calex").value);
    
    var present = expense/(counter-exclude);
    
    var calex = document.getElementById("calex");
    calex.value = cal + expense;
    
    var cost = document.getElementById("cost");
    cost.value = present + co;
    
    var res = document.getElementById("res");
    res.value = parseInt(document.getElementById("calex").value) -  parseInt(document.getElementById("cost").value);
    
    var paid = document.getElementById("paid");
    paid.value = parseInt(document.getElementById("calex").value);
    alert("This Expense Added !!! Add another or Calculate Total");
    
    var change = document.getElementById("choice");
    choice.value = "0";
    
}

function showpanel() {
    let allAreFilled = true;
  document.getElementById("main").querySelectorAll("[required]").forEach(function(i) {
    if (!allAreFilled) return;
    if (!i.value) allAreFilled = false;
    if (i.type === "radio") {
      let radioValueCheck = false;
      document.getElementById("myForm").querySelectorAll(`[name=${i.name}]`).forEach(function(r) {
        if (r.checked) radioValueCheck = true;
      })
      allAreFilled = radioValueCheck;
    }
  })
  if (!allAreFilled) {
    alert('Fill all the fields');
  }
    else{
        document.getElementById("panel").style.display = "block";
        document.getElementById("main").style.display = "none";
    }
  
}

function showpanel2() {
    let allAreFilled = true;
  document.getElementById("main").querySelectorAll("[required]").forEach(function(i) {
    if (!allAreFilled) return;
    if (!i.value) allAreFilled = false;
    if (i.type === "radio") {
      let radioValueCheck = false;
      document.getElementById("myForm").querySelectorAll(`[name=${i.name}]`).forEach(function(r) {
        if (r.checked) radioValueCheck = true;
      })
      allAreFilled = radioValueCheck;
    }
  })
  if (!allAreFilled) {
    alert('Fill all the fields');
  }
    else{
  document.getElementById("panelex").style.display = "block";
  document.getElementById("panel").style.display = "none";

    }
}
function showpanelback() {
    choice.value = "0";
    document.getElementById("panel").style.display = "block";
    document.getElementById("panelex").style.display = "none";
  
}