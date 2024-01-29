/*

Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas 
deve abrie as caixa com botões de seleção de plataforma
    passo 1 - pegar o botão de seleção de plataformas
    no JS pra poder  verificar quando o usuário clicar
    em cima dele
    
    passo 2 - pegar o elemento do conteúdo que 
    precisa ser mostrado
    
    passo 3 - pegar o clique do usuário no JS

    passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de platorformas dentro do 
    botão, para que o conteúdo dele apareça



Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em fechar, o conteúdo
deve ser escondido
    passo 1 - verificar se botão já está aberto, se sim, devemos remover a classe ativo 
    para que ele esconda o conteúdo novamente
*/

// objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrie as caixa com botões de seleção de plataforma

//passo 1 - pegar o botão de seleção de plataformas no JS pra poder  verificar quando o usuário clicar em cima dele
const botão = document.querySelector(".btn-plataforma");

//passo 2 - pegar o elemento do conteúdo que precisa ser mostrado
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

//passo 3 - pegar o clique do usuário no JS
botão.addEventListener("click", () => {
    //Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em fechar, o conteúdo deve ser escondido

    const botaoEstaAberto = elementoPlataformas.classList.contains("ativo")
    // passo 1 - verificar se botão já está aberto, se sim, devemos remover a classe ativo  para que ele esconda o conteúdo novamente
    if(botaoEstaAberto) {
        elementoPlataformas.classList.remove("ativo")
    }else{
        //passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de platorformas dentro do  botão, para que o conteúdo dele apareça
        elementoPlataformas.classList.add("ativo")
    }
});


    