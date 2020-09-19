var counter = 2;
var limit = 5;

function addInput(divName) {
    if (counter == limit) {
        alert("You have reached the limit of adding " + counter + " inputs");
    } else {
        var newdiv = document.createElement('div');
        newdiv.innerHTML = "Person " + (counter + 1) + " <br><input type='text' name='myInputs[]'>";
        document.getElementById(divName).appendChild(newdiv);
        counter++;
    }
    var ansD = document.getElementById("tot");
    ansD.value = counter;

}

function Hide() {
    document.getElementById("checkbox1").style.display = "none";
    document.getElementById("checkbox2").style.display = "none";
    document.getElementById("checkbox3").style.display = "none";
    document.getElementById("checkbox4").style.display = "none";
    document.getElementById("checkbox5").style.display = "none";

}

function ShowHide() {
    var counter = parseInt(document.getElementById("tot").value);
    alert("Either enter Amount to be divided or let us divide equally among selected people");
    if (counter == 2) {
        document.getElementById("checkbox1").style.display = "block";
        document.getElementById("checkbox2").style.display = "block";

    } else if (counter == 3) {
        document.getElementById("checkbox1").style.display = "block";
        document.getElementById("checkbox2").style.display = "block";
        document.getElementById("checkbox3").style.display = "block";

    }
    if (counter == 4) {
        document.getElementById("checkbox1").style.display = "block";
        document.getElementById("checkbox2").style.display = "block";
        document.getElementById("checkbox3").style.display = "block";
        document.getElementById("checkbox4").style.display = "block";

    }
    if (counter == 5) {
        document.getElementById("checkbox1").style.display = "block";
        document.getElementById("checkbox2").style.display = "block";
        document.getElementById("checkbox3").style.display = "block";
        document.getElementById("checkbox4").style.display = "block";
        document.getElementById("checkbox5").style.display = "block";

    }
}

function exp() {
    var selected = document.querySelectorAll('input[type="checkbox"]:checked').length;
    

    var counter = parseInt(document.getElementById("tot").value);
    var exclude = counter - selected;
    var expense = parseInt(document.getElementById("expense").value);
    
        var co = parseInt(document.getElementById("cost").value);
        var cal = parseInt(document.getElementById("calex").value);
        var present = 0;
        var lim = 0 ;
        if(exclude == counter){
            present = expense / counter;
        }
        else{
            present = expense / selected;
        }
        
        var calex = document.getElementById("calex");
        calex.value = cal + expense;

        var cost = document.getElementById("cost");
        cost.value = present + co;

        var res = document.getElementById("res");
        res.value = parseInt(document.getElementById("calex").value) - parseInt(document.getElementById("cost").value);

        var paid = document.getElementById("paid");
        paid.value = parseInt(document.getElementById("calex").value);
        alert("This Expense Added !!! Add another or Calculate Total");



}


function showpanel() {
    let allAreFilled = true;
    document.getElementById("main").querySelectorAll("[required]").forEach(function (i) {
        if (!allAreFilled) return;
        if (!i.value) allAreFilled = false;
        if (i.type === "radio") {
            let radioValueCheck = false;
            document.getElementById("myForm").querySelectorAll(`[name=${i.name}]`).forEach(function (r) {
                if (r.checked) radioValueCheck = true;
            })
            allAreFilled = radioValueCheck;
        }
    })
    if (!allAreFilled) {
        alert('Fill all the fields');
    } else {
        document.getElementById("panel").style.display = "block";
        document.getElementById("main").style.display = "none";
    }

}

function showpanel2() {
    let allAreFilled = true;
    document.getElementById("main").querySelectorAll("[required]").forEach(function (i) {
        if (!allAreFilled) return;
        if (!i.value) allAreFilled = false;
        if (i.type === "radio") {
            let radioValueCheck = false;
            document.getElementById("myForm").querySelectorAll(`[name=${i.name}]`).forEach(function (r) {
                if (r.checked) radioValueCheck = true;
            })
            allAreFilled = radioValueCheck;
        }
    })
    if (!allAreFilled) {
        alert('Fill all the fields');
    } else {
        document.getElementById("panelex").style.display = "block";
        document.getElementById("panel").style.display = "none";

    }
}

function showpanelback() {
    document.getElementById("panel").style.display = "block";
    document.getElementById("panelex").style.display = "none";
}
