const todosOsProjetos = document.querySelector('js-todos-projetos')

new function (){
    mostraProjetos()
}

function mostraProjetos(){
    if(localStorage.length=0){
        return
    }else{
        let projetos = []
        for(let i = 0; i<localStorage.length; i++){
            projetos.push(JSON.parse(localStorage.getItem('i')))
        }
        console.log(projetos)
    }
}

function montaCartao(projeto){
    let cartao = 
    `
    <a href='index.html' class='codigo__wrapper' data-id-"${projeto.id}">
     <article class='projeto'>
        <code class='projeto__codigo hljs' ${projeto.detalhesDoProjeto.linguagem}></code>
        <h2 class='projeto__titulo'>${projeto.detalhesDoProjeto.nomeDoProjeto}</h2>
        <p class='projeto__descricao'>${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>
        <span class='projeto__linguagem linguagem--${projeto.detalhesDoProjeto.linguagem}'>${projeto.detalhesDoProjeto.linguagem}</span>
    </article>
    </a>
    `
    return cartao
}

