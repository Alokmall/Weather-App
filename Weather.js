
let searchvalue = document.getElementById('searchvalue')
let temperature = document.getElementById('temperature')
let cityname = document.getElementById('cityname')
let countryname = document.getElementById('countryname')
let detail=document.getElementsByClassName('detail') 
let weatherIcon = document.getElementById('weatherIcon');
 
 
let search = async () => {
    if (searchvalue.value.length == 0) {
        alert('please enter a city name before search')
    } else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
        let response = await fetch(url)
        let data = await response.json() 
        temperature.textContent = `${data.main.temp} °C`;
        cityname.textContent = data.name
        countryname.textContent = data.sys.country
        detail[0].textContent = data.weather[0].description;
        detail[1].textContent=`${data.main.pressure} hPa`;
        detail[2].textContent=`${data.main.humidity}%`;
        const iconCode = data.weather[0].icon; 
        const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
        weatherIcon.src = iconUrl;
        if (data.main.temp > 30) {
            document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2014/03/05/21/12/desert-279862_1280.jpg')"

        } else if (data.main.temp > 10 && data.main.temp < 30) {
            document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/05/08/21/01/fog-1379906_1280.jpg')"
        } else {
            document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/08/24/05/49/winter-2675500_1280.jpg')"
        }    
    }
}


