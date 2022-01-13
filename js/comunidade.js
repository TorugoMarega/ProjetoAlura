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
        
    `
}