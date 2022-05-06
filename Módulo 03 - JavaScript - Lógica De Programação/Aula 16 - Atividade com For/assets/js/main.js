const elementos = [
    {tag: 'p', texto: 'Isso é um paragrafo'},
    {tag: 'div', texto: 'Isso é uma div'},
    {tag: 'section', texto: 'Isso é uma section'},
    {tag: 'footer', texto: 'Isso é um footer'},
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);