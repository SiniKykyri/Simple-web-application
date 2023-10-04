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
                        console.log('Cell Content:', cells[j].trim());  
                }
            }

            var divTable = document.querySelector('.table');
            if(divTable){
                divTable.appendChild(table);
            }
            else{
                console.error('Div with class table not found');
            }
        })
        .catch(error => console.error('Error fetching CSV:', error));
}

fetchAndDisplayCSV();