console.log('Client js file loaded!');
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const first = document.querySelector('#messageOne')
const second = document.querySelector('#messageTwo')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    first.innerHTML = '<span class="load">Loading.....</span>'
    second.textContent = ''

    fetch('/weather?addr='+location).then((response) => {
    response.json().then(({location, forecast, error} = {}) => {
        if (error) {
            first.classList.add('error');
            first.innerHTML = '<b>Error: </b>' + error;
            second.innerHTML = ''
         } else {
            if (first.classList.contains('error')) {
                first.classList.remove('error')
            }
            first.innerHTML = '<b>Location: </b>' + location
            second.innerHTML = '<b>Forecast: </b>' + forecast + '&deg C'
            console.log('Location: ' + location + "\nForecast: " + forecast +'&deg C');
        }
    });    
});    
});