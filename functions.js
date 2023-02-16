console.log('Faça uma lista de tarefas diárias (strings), e crie 4 funções diferentes.Função que busca se a tarefa existe na lista.Função que altera um item da lista.Função que deleta um item da lista Função que adiciona um item na lista')

/* Faça uma lista de tarefas diárias (strings), e crie 4 funções diferentes.
01. Função que busca se a tarefa existe na lista.
02. Função que altera um item da lista.
03. Função que deleta um item da lista
04. Função que adiciona um item na lista */

let tarefa = [
    {atividade: 'Acordar'},
    {atividade: 'Banho'},
    {atividade: 'Almoçar'},
    {atividade: 'Trabalhar'},
    {atividade: 'Aula'},
];
//CONFERINDO O ARRAY
console.log(tarefa);


//PESQUISANDO A ATIVIDADE COM FIND 
let pesquisa = tarefa.find(pesquisa => {
    return pesquisa.atividade === 'Aula';
});
console.log(pesquisa);


//ATERANDO A ATIVIDADE 'Acordar' por 'Descansar'
// Ao definir '1' na função determino qual item quero excluir enquanto incluo novo item
 let alteraAcordar = 0;
    tarefa.splice(alteraAcordar, 1, "Descansar");

console.log(tarefa); 


// DELETANDO UM ITEM DA LISTA
// - ao determinar pop('1') desejo que delete a opção "Acordar" que passou para a posição 1 depois da inclisão de 'Descansar'
let deleta = tarefa.pop(1);
console.log(tarefa);

// ADICIONANDO UMA NOVA ATIVIDADE NO FINAL DA LISTA
tarefa.push('Ir para casa'); 
console.log(tarefa);
