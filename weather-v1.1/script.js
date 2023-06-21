
//User Search Data for Weater Information
const submitBtn = document.getElementById('submitid');
const weather_img = document.getElementById('weather_icon');

// Main Function for Weather 
function getWeatherData(){
    const apiKey = "&appid=b4f8fbfa716588032129057f745b1025"
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q="
    const searchBox = document.getElementById('searchid').value;


    //Fetch API Weather Data
    fetch(`${baseUrl}${searchBox}${apiKey}`)
    .then((res) => res.json())
    .then((data)=>{

        const location = data.name
        const temp = data.main.temp -273.15 // Kelvin to celcials
        const humidity = data.main.humidity
        const wind = data.wind.speed
        const description = data.weather[0].description
        
        //console.log(location,temp,humidity,wind)
        document.getElementById('city').textContent = location
        document.getElementById('temp').innerHTML = `${Math.round(temp)}&degC`  
        document.getElementById('humidity').innerHTML = `${humidity}%`
        document.getElementById('wind').innerHTML = `${wind} km/h`
        document.getElementById('description').innerHTML = description
      
        //Images for Wearther
        if(data.weather[0].main == "Clouds"){
            weather_img.src = "/images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weather_img.src = "/images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weather_img.src = "/images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weather_img.src = "/images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weather_img.src = "/images/mist.png";
        }
        else if(data.weather[0].main == "Snow"){
            weather_img.src = "/images/snow.png";
            }

}).catch((res)=> alert("Please Type Right Country Name")) //not found message

}

//click Event Listener
submitBtn.addEventListener("click", ()=>{
    getWeatherData() // function call
})

