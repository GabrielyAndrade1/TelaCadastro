// Função para carregar os dados do cadastro existente para edição
function buscarDados() {
    if (!document.getElementById("ID").value){
        console.error("SEM ID ENCONTRADO");
        return;
    }
    const cadastro = JSON.parse(localStorage.getItem("cadastro")) [document.getElementById("ID").value];
    if (!cadastro) {
        console.error("Nenhum cadastro encontrado para edição.");
        return;
    }

    document.getElementById("nomeCompleto").value = cadastro.nome || "";
    document.getElementById("dataNascimento").value = cadastro.dataNascimento || "";
    document.getElementById("CPF").value = cadastro.CPF || "";
    document.getElementById("CNPJ").value = cadastro.CNPJ || "";
    document.getElementById("email").value = cadastro.email || "";
    document.getElementById("genero").value = cadastro.genero || "";
    document.getElementById("foto").value = cadastro.foto || "";
}

function editar() {
    if (!document.getElementById("ID").value){
        console.error("SEM ID ENCONTRADO");
        return;
    }
    const cadastro = JSON.parse(localStorage.getItem("cadastro")); 
    if (!cadastro) {
        console.error("Nenhum cadastro encontrado para edição.");
        return false;
    }

    cadastro[document.getElementById("ID").value].nome = document.getElementById("nomeCompleto").value;
    cadastro[document.getElementById("ID").value].dataNascimento = document.getElementById("dataNascimento").value;
    cadastro[document.getElementById("ID").value].CPF = document.getElementById("CPF").value;
    cadastro[document.getElementById("ID").value].CNPJ = document.getElementById("CNPJ").value;
    cadastro[document.getElementById("ID").value].email = document.getElementById("email").value;
    cadastro[document.getElementById("ID").value].genero = document.getElementById("genero").value;
    cadastro[document.getElementById("ID").value].foto = document.getElementById("foto").value;


    localStorage.setItem("cadastro", JSON.stringify(cadastro));

    console.log("Cadastro atualizado com sucesso:", cadastro);
    return true; 
}
