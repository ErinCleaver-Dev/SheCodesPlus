let country = "Guinea Bissau";
let city = " Sydney   ";
let place = "School";
let attraction = "Opera House";


console.log(`I went to visit the ${attraction} in ${city}, right next to my ${place}. Now, I'm getting ready for my trip to ${country}!`)

country = country.replace(" ", "-")
console.log(country)

city = city.trim()
console.log(city)

attraction = attraction.toLowerCase();
console.log(attraction)

place = place.toUpperCase()
console.log(place)