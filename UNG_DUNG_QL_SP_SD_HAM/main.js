function renderProduct() {
    let tableProduct = document.querySelector("#table_product");
    let stringTable = "";
    stringTable += "<table id = 'table_2'>";
    stringTable += "<tbody>";
    for (let row = 0; row < Arr.length; row++) {
        stringTable += `<tr id = "tr_${row}">
                        <td id="tdProduct_${row}">${Arr[row]}</td>
                        <td>
                            <button onclick="updateProduct(${row})" id="btnEdit_${row}" type="button" class="">Edit</button>
                            <button onclick="saveProduct(${row})" id="btnSave_${row}" type="button" class="d-none" style="background-color:blue">Save</button>
                            <button onclick="cancelProduct(${row})" id="btnCancel_${row}" type="button" class="d-none" style="background-color:red">Cancel</button>
                        </td>
                        <td>
                            <button onclick="deleteProduct(${row})" id="delete_${row}" type="button" class="">Delete</button>
                        </td>
                    </tr>`;
    }
    stringTable += "</tbody>";
    stringTable += "</table>";
    tableProduct.innerHTML = stringTable;
}

function updateCount(count) { 
    document.querySelector("#td_count").innerHTML = `${count} products`; 
}

function deleteProduct(row) {
    let confirmed = window.confirm("Are sure to remove this job?");
    if (confirmed) {
        Arr.splice(row, 1);
        document.querySelector(`#tr_${row}`).remove();
        updateCount(Arr.length);
        renderProduct();
    }
};

function updateProduct(row) {
    let productNameTd = Arr[row];
    document.querySelector(`#tdProduct_${row}`).innerHTML = `<input type='text' id="txtProduct_${row}" value='${productNameTd}'>`;
    hideButtonEdit(row);
}

function saveProduct(row) {
    let productNameTd = document.querySelector(`#txtProduct_${row}`).value;
    let confirmed = window.confirm("Do you want to save?");
    if (confirmed) {
        document.querySelector(`#tdProduct_${row}`).innerHTML = productNameTd;
        Arr[row] = productNameTd;
        renderProduct();
    }
    else{ 
        document.querySelector(`#tdProduct_${row}`).innerHTML = Arr[row];
    }
    hideButtonSaveDelete(row);
}

function cancelProduct(row) {
    let productNameTd = Arr[row];
    document.querySelector(`#tdProduct_${row}`).innerHTML = productNameTd;
    hideButtonSaveDelete(row);
}

function addProduct() {
    let productName = document.querySelector(`#txt_Add`).value;
    Arr.push(productName);
    alert(`You just added "${productName.value}" to product list`);
    renderProduct();
    updateCount(Arr.length);
}

function hideButtonEdit(row){
    document.querySelector(`#btnEdit_${row}`).classList.add('d-none');
    document.querySelector(`#btnSave_${row}`).classList.remove('d-none');
    document.querySelector(`#btnCancel_${row}`).classList.remove('d-none');
}

function hideButtonSaveDelete(row) {
    document.querySelector(`#btnEdit_${row}`).classList.remove('d-none');
    document.querySelector(`#btnSave_${row}`).classList.add('d-none');
    document.querySelector(`#btnCancel_${row}`).classList.add('d-none');
}
let Arr = ["Sony Xperia", "Samsung Galaxy", "Iphone", "Google Pixel", "Xiaomi", "Oppo", "BlackBerry", "Realme", "Vivo", "Vinsmart"];
updateCount(Arr.length);
renderProduct();

