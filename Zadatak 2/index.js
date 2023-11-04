function generateMultiplicationTable() {
    let tableHtml = '<table>';
    for (let i = 0; i <= 10; i++) {
      tableHtml += '<tr>';
      for (let j = 0; j <= 10; j++) {
        if (i === 0 && j === 0) {
          tableHtml += '<th id="header">X</th>';
        } else if (i === 0) {
          tableHtml += `<th>${j}</th>`;
        } else if (j === 0) {
          tableHtml += `<th>${i}</th>`;
        } else {
          tableHtml += `<td>${i * j}</td>`;
        }
      }
      tableHtml += '</tr>';
    }
    tableHtml += '</table>';
  
    const tableContainer = document.getElementById('multiplicationTable');
    tableContainer.innerHTML = tableHtml;
  }
  
  generateMultiplicationTable();