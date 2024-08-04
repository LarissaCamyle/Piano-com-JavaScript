function tocaSom(stringId){
    //encontra o audio atraves do id fornecido
    const elemento = document.querySelector(stringId);

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        console.log('Elemento não encontrado'+ stringId);
    }
}

const listaTeclaPreta = document.querySelectorAll('.tecla-preta');

//tecla preta
for(let i = 0; i < listaTeclaPreta.length; i++){
    //a tecla
    const teclaPreta = listaTeclaPreta[i];
    //a classe da tecla "preta1"
    const tipoDeSom = teclaPreta.classList[1];
    //cria o id igual do audio para atribuir, pois tanto na classe da tecla
    //quanto no id do audio tem "preta1"
    const idAudio = `#som_${tipoDeSom}`;

    //quando pressiona
    teclaPreta.onclick = function(event){
        teclaPreta.classList.add('tecla-preta-ativa');
        //evita que ative a tecla branca a baixo
        event.stopPropagation();

        //toca o som
        tocaSom(idAudio);
    }

    //quando retira o mouse de foco
    teclaPreta.onmouseout = function(){
        teclaPreta.classList.remove('tecla-preta-ativa');
    }

}

const listaTeclaBranca = document.querySelectorAll('.tecla');

for(let i = 0; i < listaTeclaBranca.length; i++){
    //a tecla
    const teclaBranca = listaTeclaBranca[i];
    //classe tecla1
    const tipoDeSom = teclaBranca.classList[1];
    // id #som_tecla1
    const idAudio = `#som_${tipoDeSom}`;

    //quando pressiona 
    teclaBranca.onclick = function(){
        teclaBranca.classList.add('tecla-branca-ativa');
        tocaSom(idAudio);
    }

    teclaBranca.onmouseout = function(){
        teclaBranca.classList.remove('tecla-branca-ativa');
    }

}

const listaPainel = document.querySelectorAll('.painel-tecla');

for(let i = 0; i < listaPainel.length; i++){
    const painel = listaPainel[i];
    const tipoDeSom = painel.classList[2];
    const idAudio = `#tecla-${tipoDeSom}`;

    painel.onclick = function(){
        tocaSom(idAudio);
    }
}

