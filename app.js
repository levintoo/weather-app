window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.local-timezone');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long + '';
                
            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                console.log(data.main.temp);

                temperatureDegree.innerHTML= data.main.temp;

                
            })
        });

    }
});