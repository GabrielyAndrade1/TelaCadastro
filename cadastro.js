
const nomeCompleto = document.getElementById("nomeCompleto");
const dataNascimento = document.getElementById("dataNascimento");
const CPF = document.getElementById("CPF");
const CNPJ = document.getElementById("CNPJ");
const email = document.getElementById("email");
const genero = document.getElementById("genero");
const foto = document.getElementById("foto");
const tabelaCadastroDiv = document.getElementById("tabelaCadastro");

function pegaPessoasCadastradas() {
    let pessoasLocalStorage = JSON.parse(localStorage.getItem("cadastro"));
    if (!pessoasLocalStorage) {
        pessoasLocalStorage = [];
    }
    return pessoasLocalStorage;
}


function salvar(){
    const pessoa = {};
    pessoa.nome = nomeCompleto.value;
    pessoa.dataNascimento = dataNascimento.value;
    pessoa.CPF = CPF.value;
    pessoa.CNPJ = CNPJ.value;
    pessoa.email = email.value;
    pessoa.genero = genero.value;
    pessoa.foto = foto.value;

    let pessoasCadastradas = pegaPessoasCadastradas();

    pessoasCadastradas.push(pessoa);

    localStorage.setItem("cadastro", JSON.stringify(pessoasCadastradas));

    console.log("Usuário cadastrado com sucesso:", pessoa);

    return false;
}

