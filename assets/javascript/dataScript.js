function fetchAndDisplayCSV() {
    fetch('assets/data/rodut.csv') 
        .then(response => response.text())
        .then(csvData => {
            var rows = csvData.split('\n');
            var table = document.createElement('table');
            for (var i = 0; i < rows.length; i++) { 
                var row = table.insertRow();
                var cells = rows[i].split(',');
                for (var j = 1; j < cells.length; j++) {
                        var cell = row.insertCell();
                        cell.textContent = cells[j].trim();    
                }
            }

            var divTable = document.querySelector('.table');
            if(divTable){
                divTable.appendChild(table);
                table.id="breedTable";
            }
            else{
                console.error('Div with class table not found');
            }
        })
        .catch (error =>{
            alert("Error: " + error);
        });
}

fetchAndDisplayCSV();

document.addEventListener('DOMContentLoaded', function() {
    
    const btn = document.getElementById("refreshBtn");
    btn.addEventListener("click", refreshTable);

    function refreshTable(){

        const table = document.getElementById("breedTable");
        
        if(table){
            table.remove();
            fetchAndDisplayCSV();
        } 
        
    }

});

const filterInput = document.getElementById("filterInput");

filterInput.addEventListener("input", function(){

    const table = document.getElementById("breedTable");
    const filterValue = filterInput.value.toLowerCase();

    const rows = Array.from(table.rows).slice(1);
    rows.forEach(row => {
        const name = row.cells[0].textContent.trim().toLowerCase();
        if(name.includes(filterValue)){
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });

})

const sortBtn = document.getElementById("sortBtn");

sortBtn.addEventListener("click", function(){

    const table = document.getElementById("breedTable");
    const rows = Array.from(table.rows).slice(1);

    rows.sort(function(a, b) {
        const nameA = a.cells[0].textContent.trim().toUpperCase();
        const nameB = b.cells[0].textContent.trim().toUpperCase();
        return nameA.localeCompare(nameB);
    });
    while(table.rows.length > 1){
        table.deleteRow(1);
    }


    rows.forEach(row => {
        table.appendChild(row);
    });


});

