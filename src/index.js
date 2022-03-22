//Get the API response for the weather in Sydney, using metrics unit



const displayWeather = (response) => {
  console.log(response.data)
  //Log the current temperature in Sydney
  console.log(response.data.main.temp)
  currentTemp = document.querySelector('h1');
  currentTemp.innerHTML = response.data.main.temp
}

// Log your current latitude and longitude using the Geolocation API
const getPositions = (position) => {
  console.log(position.coords.latitude)
  console.log(position.coords.longitude)
}

//navigator.geolocation.getCurrentPosition(getPositions)



//Get your API key and save in a variable called apiKey

const getAPI = async (position) => {
  let latitude = '';
  let longitude = '';


  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  if(latitude != '' && longitude != '') {
    console.log(`${latitude}, ${longitude}`)
    let key = '8ce0a35d2a13fe92920704c88ae78c6d'
    let city = 'Sydney'
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${key}`
    await axios.get(url).then(displayWeather)
  }
}

navigator.geolocation.getCurrentPosition((getAPI));