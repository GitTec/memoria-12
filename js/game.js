const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length === 24) {
        clearInterval(this.loop);
        alert(`PARABÉNS ${spanPlayer.innerHTML}!, Seu tempo foi: ${timer.innerHTML}`)
        alert(`
        Êeee MEU AMOR💞, terminou o joguim em, foi realmente só pra lembrar de alguns momentos da gente, espero que tenha gostado,
        hoje graças a Deus, mais uma vez chegou uma data linda que estamos juntos em, queria te dizer do fundo do meu coração que
        esse tempo que passamos juntos, tem sido a melhor coisa da minha vida viu, de verdade mesmo, sei que tivemos nossos
        desentendimentos e discussões e que tem muita magoa de mim, mas graças a Deus estamos aqui unidos e juntos, e sei
        que papai do céu tem nos abençoado e cada vez mais vem nos abençoando, peço sempre a ele que nos mostre os caminhos certos
        a trilhar, só tenho agradecimentos a ti, por toda dedicação e perserverança com a gente, sou um cara muito sortudo de ter 
        uma pessoa tão incrivel em minha vida, agradecer por ter uma mulher realmente incrivel no meu caminho, uma noiva linda e 
        futuramente esposa, aos poucos as coisas vão acontecendo pra gente e sei que vamos ser um casal muito lindo, enfim meu amor, 
        só quero realmente te dizer obrigado por tudo, tudo mesmo, por nunca ter desistido desse caba chato que eu sou, por ter feito 
        não só a mim feliz, mas todos da minha familia, você é incrivel em minha vida, o que fez e faz por mim, nunca irei esquecer, 
        te amo demais viu e um
        FELIZ DIA DOS NAMORADOS(NOIVOS)💝 PRA GENTE MEU AMOR, EU TE AMOOOOOO DEMAISS DA CONTAA VIU💞💞`)
            
    }
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter) {

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {

        setTimeout(() => {

            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';
        }, 500);
    }
}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {

        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }
}

const createCard = (character) => {
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('../imagens_noivos/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character)

    return card;
}

const loadGame = () => {

    const duplicateCharacters = [...characters, ...characters];

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((character) => {

        const card = createCard(character);
        grid.appendChild(card);
    });
}

const startTimer = () => {

    this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;
    }, 1000);
}

window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer();
    loadGame();
}
