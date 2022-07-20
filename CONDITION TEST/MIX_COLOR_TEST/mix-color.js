function changeColor()
{
    let red = document.querySelector('#red');
    let green = document.querySelector('#green');
    let blue = document.querySelector('#blue');
   
    let colorArea = document.getElementById('color-area');
    colorArea.innerHTML = `<h2>rgb (${red.value}, ${green.value}, ${blue.value})</h2>`;
    colorArea.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;

    let td_red = document.querySelector("table>tbody>tr:nth-child(4)>td:nth-child(1)");
    td_red.innerHTML = red.value;

    let td_green = document.querySelector("table>tbody>tr:nth-child(4)>td:nth-child(2)");
    td_green.innerHTML = green.value;

    let td_blue = document.querySelector("table>tbody>tr:nth-child(4)>td:nth-child(3)");
    td_blue.innerHTML = blue.value;
}
changeColor();