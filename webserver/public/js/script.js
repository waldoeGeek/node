console.log('Client js file loaded!');

// fetch('http://localhost:3000/weather?addr=Boston').then((response) => {
//     response.json().then(({location, forecast, error} = {}) => {
//         if (error) {
//             return console.log(error);
//          } else {
//             console.log('Location: ' + location + "\nForecast: " + forecast);
//         }
//     });    
// });

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const first = document.querySelector('#messageOne')
const second = document.querySelector('#messageTwo')
// first.textContent = 'dsfsdlfsd'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    first.innerHTML = '<span class="load">Loading.....</span>'
    second.textContent = ''

    fetch('http://localhost:3000/weather?addr='+location).then((response) => {
    response.json().then(({location, forecast, error} = {}) => {
        if (error) {
            first.classList.add('error');
            first.innerHTML = 'Error: ' + error;
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