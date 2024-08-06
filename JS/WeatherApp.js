const result = document.querySelector('result');
const form = document.querySelector('get-weather')
const nameCity = document.querySelector('#city');
const nameCountry = document.querySelector('#country')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(nameCity.value)
})