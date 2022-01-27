function generateDivs() {

const container = document.querySelector('#container');
for (i=0;i<16;i++){
    let row = document.createElement('div');
    row.className = 'row';
    for (j=1;j<=16;j++) {
        let cell = document.createElement('div');
        cell.className = 'gridsquare';
        //cell.innerText = i + ' , ' + j;
        row.appendChild(cell);

        

    }
    container.appendChild(row);
}
//document.getElementsByClassName('div').style = 'color:red', 'border:16px';
}

generateDivs();

document.querySelector('.gridsquare').addEventListener('mouseenter', function() {
    cell.className.toggle('hovercolor');


}); //toggle class w/ color 