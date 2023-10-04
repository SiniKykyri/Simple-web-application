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
                    cell.textContent = cells[j];
                }
            }
            document.body.appendChild(table);
        })
        .catch(error => console.error('Error fetching CSV:', error));
}

fetchAndDisplayCSV();


$(document).ready(function () {
    $('#slider').on('input', function () {
        var rowCount = $(this).val();
        $('table tr').hide();
        $('table tr:lt(' + rowCount + ')').show();
    });
});