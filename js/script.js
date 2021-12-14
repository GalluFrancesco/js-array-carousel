//add array titoli
//add array paragrafi

const titoliList = ['titolo1', 'titolo2', 'titolo3', 'titolo4']
const paragrafiList = [ 'prova paragrafo uno',
                        'prova paragrafo due',
                        'prova paragrafo tre',
                        'prova paragrafo quattro']

//aggancio lo script agli elementi del DOM
const titoloHtml = document.querySelector('h1');
const paragrafoHtml = document.querySelector('p');
const nextHtml = document.querySelector('.next');
const previousHtml = document.querySelector('.previous');

//creo un contatore da usare per scorrere gli elementi
//degli array
let currentIndex = 0;

//riempio gli elementi Html con i contenuti di defoult
titoloHtml.innerText = titoliList[currentIndex];
paragrafoHtml.innerText = paragrafiList [currentIndex];

//creo evento onclick sul div next dell'Html
nextHtml.addEventListener('click', function () {

    //ad ogni click aumento il contatore e controllo se
    //ha superato la lunghezze delle mie strutture dati
    //se ha superato lo riporto a zero per far ripartire
    //lo slider dall'inizio
    currentIndex++;
    if(currentIndex>titoliList.length-1 &&
        currentIndex>paragrafiList.length-1){
        currentIndex=0;
    }
    titoloHtml.innerText = titoliList[currentIndex];
    paragrafoHtml.innerText = paragrafiList [currentIndex];
})
