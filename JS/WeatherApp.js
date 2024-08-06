const result = document.querySelector('.result');
const form = document.querySelector('.get-weather')
const nameCity = document.querySelector('#city');
const nameCountry = document.querySelector('#country')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(nameCity.value === ''||nameCountry.value ===''){
        showError('Ambos campos son obligatorios')
        return;
    }

    callAPI(nameCity.value,nameCountry.value);
    // console.log(nameCity.value)
    // console.log(nameCountry.value)
})

function callAPI(nameCity,nameCountry){
    const apiId = '320ffc90f26317588ccef650a9fb12f0';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;
    //https://api.openweathermap.org/data/2.5/weather?q=bogota,Colombia&appid=320ffc90f26317588ccef650a9fb12f0

    

}

function showError(message){
    console.log(message)
    const alert = document.createElement('p');
    alert.classList.add('alert-message');
    alert.innerHTML = message;

    form.appendChild(alert);
    setTimeout(()=>{
        alert.remove();
    },3000);
}
