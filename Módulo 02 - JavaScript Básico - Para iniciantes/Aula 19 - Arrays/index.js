const listaAlunos = ['João','Lucas','Maria','Joana'];
//para acessar o primeiro elemento da lista
console.log(listaAlunos);
//para acessar a primeira letra do primeiro nome da lista
console.log(listaAlunos[0][0]);
//adicionar elemento(aluno) na posição 15 do array(na lista com os nomes dos alunos)
listaAlunos[15] = 'Luiza';
// o problema de fazer isso, é que não sabemos quantos elementos(alunos) nosso array(nossa lista com os nomes dos alunos) possuem
// o jeito correto de se adicionar um novo elemento(aluno) no nosso array(nossa lista com os nomes dos alunos) é:
listaAlunos.push('Fernando');
console.log(listaAlunos);
//para adicionar o elemento no começo
listaAlunos.unshift('Roberto')
console.log(listaAlunos)
// para remover o último elemento do array
listaAlunos.pop()
console.log(listaAlunos)
//para remover do primeiro elemento do array
listaAlunos.shift()
console.log(listaAlunos)
//para deletar qualquer posição do array, porém o elemento ficará como empty item
delete listaAlunos[2]
console.log(listaAlunos)