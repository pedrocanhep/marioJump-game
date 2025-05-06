// coletando as informações do documento e adicionando à constantes
const mario = document.querySelector('img.mario'); 
const cano = document.querySelector('img.tubo');

// gerando botão de "iniciar" o jogo
const menuInicial = document.querySelector('#menuInicial');
const gameBoard = document.querySelector('#game-board');
const btnStart = document.querySelector('.start'); // coletando o botão de "iniciar"
btnStart.addEventListener('click', () => { // gerando um evento de click no botão de "iniciar"
  menuInicial.style.display = 'none'; // ao clicar, o menu inicial será ocultado
  gameBoard.style.display = 'block'; // e o jogo será mostrado
});

// geração da função que fará com que o Mario pule:
const pular = () => { // gerando com uma arrow function
  mario.classList.add('pulo'); // será adicionado ao mário a class 'pulo', que contém a animação de pulo

  setTimeout(() => { // gerando um "temporizador" para a duração do pulo do mário
    mario.classList.remove('pulo'); // removendo a class que faz o Mário pular
  }, 500); // o tempo de duração será o mesmo da animação
}

const loop = setInterval(()=>{ // gerando um looping para o "game-over", que executará uma determinada função em um certo intervalo de tempo

  const posTubo = cano.offsetLeft; // coletando a posição lateral do tubo com relação à sua distancia sobre a borda esquerda
  const posMario = +window.getComputedStyle(mario).bottom.replace('px', ''); // coletando a posição do mário com relação à sua distância para a borda inferior, transformando em numérico: replace para retirar o "px" presente do dado e o símbolo de + convertendo a string para um number

  if(posTubo <= 120 && posTubo > 0 && posMario < 80){ // criando uma condicional que irá testar as posições do tubo e do Mário afim de checar se será "game-over"

    // configurando o tubo para caso seja game-over
    cano.style.animation = 'none';
    cano.style.left = `${posTubo}px`;

    // configurando o Mário para caso seja game-over
    mario.style.bottom = `${posMario}px`;
    mario.style.animation = 'none';
    
    // configurando o estilo do Mário para o game-over
    mario.src = 'img/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '15px';
    

    clearInterval(loop); // parando o looping
  }

},10); // intervalo de 10ms do looping

document.addEventListener('keydown', pular); // gerando o evento que fará com que, quando pressionada qualquer tecla (keydown), a função de pulo será acionada

