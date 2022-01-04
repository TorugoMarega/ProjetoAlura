let nomeprojeto = document.querySelector ('#nomeprojeto');
let descricaoprojeto = document.querySelector('#descricaoprojeto');
let editorCodigo = document.querySelector('#editorCodigo').textContent;
let linguagemSeletor = document.querySelector('#liguagem');
let cores = document.querySelector ('#cores');

function salvar(){
        let listaProjeto = JSON.parse(localStorage.getItem('listaProjeto') || '[]')   
        listaProjeto.push(
            {
                editorCodigoSalva: editorCodigo,
                nomeProjetoSalva: nomeprojeto.value,
                descricaoProjetoSalva: descricaoprojeto.value,
                linguagemSalva: linguagem.value,
                coresSalva: cores.value,
            });
            localStorage.setItem('listaProjeto', JSON.stringify(listaProjeto));
} 

/* const abacate = document.querySelector('melhorfrutaparafazervitamina')- Torugo lindo e gostoso */

