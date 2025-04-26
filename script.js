let a = 0;  // num of grades
let b = 0; // num of studes

while (true) {
    a = prompt("How many grades?");
    if (!isNaN(+a) && +a != 0) {
        break;
    }
    alert("Invalid Input or 0 as input");
}
while (true) {
    b = prompt("How many students?");
    if (!isNaN(+b) && +a != 0) {
        break;
    }
    alert("Invalid Input or 0 as input");
}

function createable(x,y) {
    var taa = document.getElementById("gradebook");
    var tab = taa.firstElementChild;
    for (var i = 0; i < y; i++) {
        var ro = document.createElement("tr");
        ro.setAttribute("style", "")
        if (i == 0) {
            let name = document.createElement("th");
            name.innerHTML = "Names";
            name.setAttribute("style", "padding:10px");
            ro.appendChild(name);
            let avg = document.createElement('th');
            avg.innerHTML = "Averages";
            avg.setAttribute("style", "padding:10px 15px");
            ro.appendChild(avg);
            let enter = document.createElement("th");
            enter.innerHTML = "Enter Grades";
            enter.setAttribute("style", "text-align:left;padding:10px 15px;");
            enter.setAttribute("colspan", `${a}`);
            ro.appendChild(enter);
            tab = taa.lastElementChild;
        } else {
            for (var j = 0; j < x; j++) {
                var data = document.createElement("td");
                if (j == 0) {
                    data.innerHTML = `Student ${i}`;
                } else if (j == 1){
                    data.innerHTML = "null";
                    data.setAttribute("class", "avg");
                } else {
                    data.innerHTML = "<input type=\"text\">";
                    data.firstElementChild.setAttribute("style", "border-radius:3px;");
                }
                data.setAttribute("style", "border: 2px solid rgb(140 140 140); padding:5px; border-collapse:collapse; border-radius:5px;");
                ro.appendChild(data);
            }
        }
        tab.appendChild(ro);
    }
}

createable(+a+2,+b+1);

function calculate() {
    let k=0;
    let elem = document.getElementsByTagName("input");
    let avg = document.getElementsByClassName("avg");
    for (let i = 0; i < b; i++) {
        let sum = 0;
        let index = 0;
        for ( j = 0; j < a; j++) {
            if (isNaN(elem[k].value)) {
            } else if (elem[k].value == "") {
            } else if (+elem[k].value != NaN) {
                index++;
                sum += +elem[k].value;
            }
            k++;
        }
        let final = sum/index;
        if (isNaN(final)) {
            final = "null";
        }
        avg[i].innerHTML = final;
    }
}