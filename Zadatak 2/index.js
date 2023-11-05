let tabela = "<table>";
for(let i = 0; i <= 10; i++){
    tabela += "<tr>";
    for(let j = 0; j <= 10; j++){
        if(i == 0 && j == 0){
            tabela += '<th id ="header">X</th>';
        }
        else if(i == 0){
            tabela += `<th>${j}</th>`;
        }
        else if(j == 0){
            tabela += `<th>${i}</th>`;
        }
        else{
            tabela += `<td>${i * j}</td>`;
        }
    }
    tabela += '</tr>';
}

const tabelaDiv = document.getElementById("tabela");
tabelaDiv.innerHTML = tabela;
 
