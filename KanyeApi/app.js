let kanyeButton = document.querySelector('#give-quotes')

kanyeButton.addEventListener('click', event =>{
    let quotesDiv = document.querySelector('.bottom')
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(quote => {quotesDiv.innerHTML = `<p>${quote.quote}</p>`})
})
