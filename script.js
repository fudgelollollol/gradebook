
createable(5,5);

function createable(x,y) {
    let tab = document.getElementById("gradebook");
    for (let i = 0; i < y; i++) {
        let ro = document.createElement("tr");
        tab.appendChild(ro);
        for (let j = 0; j < x; j++) {
            let data = document.createElement("td");
            ro.appendChild(data);
        }
    }
}