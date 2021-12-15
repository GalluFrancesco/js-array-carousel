
//add array immagini
const imgList = ['./img/HEMIS_2506945.jpeg',
                 './img/ocean.jpg',
                 './img/R.jpg']

//aggancio lo script agli elementi del DOM
const boxImgHtml = document.querySelector('.box-img')
const imgHtml = document.querySelector('img');
const nextHtml = document.querySelector('.next');
const previousHtml = document.querySelector('.previous');

//creo un contatore da usare per scorrere gli elementi
//degli array
let currentIndex = 0;

//riempio gli elementi Html con i contenuti di defoult
imgHtml.src = imgList[currentIndex]
boxImgHtml.classList.add('transizione')

//creo evento onclick sul div next dell'Html
nextHtml.addEventListener('click',async function () {
    
    boxImgHtml.classList.remove('transizione')
    
    //ad ogni click aumento il contatore e controllo se
    //ha superato la lunghezze delle mie strutture dati
    //se ha superato lo riporto a zero per far ripartire
    //lo slider dall'inizio
    currentIndex++;
    if(currentIndex>imgList.length-1){
        currentIndex=0;
    }
    imgHtml.src = imgList[currentIndex]
    
    await new Promise(r => setTimeout(r, 10));
    boxImgHtml.classList.add('transizione')
})

//creo evento onclick sul div previous dell'Html
previousHtml.addEventListener('click',async function () {

    boxImgHtml.classList.remove('transizione')
    
    //funziona come il next ma al contrario
    currentIndex--;
    if(currentIndex<0){
        currentIndex=imgList.length-1;
    }
    imgHtml.src = imgList[currentIndex]

    await new Promise(r => setTimeout(r, 10));
    boxImgHtml.classList.add('transizione')
})