async function getAdvice(){
    const response = await fetch('https://api.adviceslip.com/advice').
                then(data => {return data.json()});
    
    console.log(response.slip.id);

    const adNum = document.querySelector('.quote-num');
    const quote = document.querySelector('.quote');
    adNum.innerHTML = 'Advice #'+response.slip.id;
    quote.innerHTML = '"'+response.slip.advice+'"';

    return response.slip;
}

getAdvice();

const button = document.querySelector('button');
button.addEventListener('click', ()=>{
    getAdvice()
});
