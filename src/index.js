//Get the API response for the weather in Sydney, using metrics unit

const displayWeather = (response) => {
  console.log(response.data)
  //Log the current temperature in Sydney
  console.log(response.data.main.temp)
  //Replace the h1 of this page with the weather in Sydney: i.e: It is 19 degrees in Sydney
  currentTemp = document.querySelector('.current_temp')
  console.log(currentTemp)
  currentTemp.innerHTML = `It is ${Math.floor(response.data.main.temp)} degrees in Sydney`
}

//Get your API key and save in a variable called apiKey

const getAPI = async () => {
  let key = '8ce0a35d2a13fe92920704c88ae78c6d'
  let city = 'Sydney'
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
  await axios.get(url).then(displayWeather)
}

getAPI()


