function generateDivs() {

const container = document.querySelector('#container');
for (i=0;i<16;i++){
    let row = document.createElement('div');
    row.className = 'row';
    for (j=1;j<=16;j++) {
        let cell = document.createElement('div');
        cell.className = 'gridsquare';
        cell.style.backgroundColor = 'white';
        cell.addEventListener('mouseover',changeColor)
        row.appendChild(cell);
    }
    container.appendChild(row);
}
//document.getElementsByClassName('div').style = 'color:red', 'border:16px';
}

generateDivs();

// document.querySelector('.gridsquare').addEventListener('mouseover', function() {
//     cell.className.toggle('hovercolor');
// }); //toggle class w/ color 

function changeColor(e) {
e.target.style.backgroundColor = 'black';

}

//btn = document.querySelector('#btn');
btn.onclick = () => {container.innerHTML = "";
    generateDivs();}
//btn.onlick = () => generateDivs();
//btn.addEventListener('mousedown',generateDivs)

// if (btn.clicked == true) {
//     generateDivs();
// }


// btn = document.querySelector('btn');
// btn.addEventListener('mousedown',clearGrid)

// function clearGrid(e) {



// }