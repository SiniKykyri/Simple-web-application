function fetchAndDisplayCSV() {
    fetch('assets/data/rodut.csv') 
        .then(response => response.text())
        .then(csvData => {
            var rows = csvData.split('\n');
            var table = document.createElement('table');
            for (var i = 0; i < rows.length; i++) { 
                var row = table.insertRow();
                var cells = rows[i].split(',');
                for (var j = 0; j < cells.length; j++) {
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
        .catch(error => console.error('Error fetching CSV:', error));
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