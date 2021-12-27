const nome="Pablo Gafanha";
let nome2="";
let pessoaDefault= {
    nome: "Pablo",
    idade: "29",
    trabalho: "Programador"
}

let nomes = ["Luana", "Pablo","Henry"]
let pessoas = [
    {
        nome: "Pablo",
        idade: "29",
        trabalho: "Programador"
    },
    {
        nome: "Henry",
        idade: "06",
        trabalho: "bebe"
    }
];


function alterarNome() {
    nome2= "Maria Silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
console.log(pessoa.nome);

console.log("Idade:");
console.log(pessoa.idade);

console.log("Trabalho");
console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("----------IMPRIMIR PESSOAS-----------");
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho");
        console.log(item.trabalho);
        
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Diomar",
    idade: "49",
    trabalho: "Motorista"
})

imprimirPessoas();



//imprimirPessoa(pessoaDefault);
//imprimirPessoa({
//    nome: "João",
//    idade: "19",
//    trabalho: "Suporte Infra"
//})


//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");
//alterarNome();