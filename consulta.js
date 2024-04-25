function pegaPessoasCadastradas() {
    let pessoasLocalStorage = JSON.parse(localStorage.getItem("cadastro"));
    if (!pessoasLocalStorage) {
        pessoasLocalStorage = [];
    }
    return pessoasLocalStorage;
}

function adicionarTabela() {
    const pessoasCadastradas = pegaPessoasCadastradas();
    console.log("Pessoas cadastradas:", pessoasCadastradas); // Adicionar este console.log para depuração
    const tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];

    for(const [ID, pessoa] of pessoasCadastradas.entries()){
        const row = tabela.insertRow();
        const valores = Object.values(pessoa);
        const cell1 = row.insertCell();
        const id = document.createTextNode(ID);
        cell1.appendChild(id);
        
        valores.forEach((value) => {
            const cell = row.insertCell();
            if (typeof value === 'string') {
                if (value.startsWith('http')) { 
                    const img = document.createElement('img');
                    img.src = value;
                    img.width = 100;
                    cell.appendChild(img);
                } else {
                    const text = document.createTextNode(value);
                    cell.appendChild(text);
                }
            }
        });
        const cell2 = row.insertCell();
        const apagar = document.createElement('button');
        apagar.textContent = 'Apagar Usuario';
        // apagar.onclick = `apagar(${ID})`;
        apagar.setAttribute("onclick",`apagar(${ID})`);
        cell2.appendChild(apagar);

    }
}

function apagar(ID){
    const pessoasCadastradas = pegaPessoasCadastradas();
    pessoasCadastradas.splice(ID,1);
    localStorage.setItem('cadastro',JSON.stringify(pessoasCadastradas));
    location.reload();
}


adicionarTabela();

