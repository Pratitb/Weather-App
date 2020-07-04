//first get the longitude and latitude from our location. there is a very simple way to do that. it is built-in in javascript
//we need to define icons for relevant weather conditions. so we basically define a new skycon. then we add the canvas in the html and then we say what kind of svg do we want to use
window.addEventListener('load', ()=>{
    
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.tempeature-description');
    let degree = document.querySelector('.degree-section');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    const temperatureSpan = document.querySelector('span');
if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(function(position){
    //getCurrentPosition method is used to get the current position of the device.
    long = position.coords.longitude;
    lat = position.coords.latitude;
var api = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&units=metric&appid=1e000e131269ac10cfb2cb097aa24bd2';
    //we need to access weather. we need to pull it from somewhere
    //api will not work on local host
    fetch(api)
//after you have got this information then we can do something with this data
    .then(response =>{
        //we''ll have to take this information and convert it to JSON. with json we can easily use it in JS. so to do that we write
        return  response.json();
    })
    .then(data =>{
        //data is the actual data
        console.log(data);
        const {temp} = data.main;
        const {description} = data.weather[0];
        const {name} = data;
        //set dom elements from api
        //change the text
        temperatureDegree.textContent = temp;
        temperatureDescription.textContent = description;
        temperatureDescription.style.textTransform = 'capitalize';
        locationTimezone.textContent = name;
        locationTimezone.style.textTransform = 'capitalize';
        //formula for fahrenheit
        let fahrenheit = (temp + 9 / 5) + 32;
        //title.innerHTML = (name + ',' + ' ' + description);
      //change from c to f or f to c
      //we need to check if it is c or f
      degree.addEventListener("click", function(){
          if(temperatureSpan.textContent === "C"){
              temperatureSpan.textContent = "F";
              temperatureDegree.textContent = Math.floor(fahrenheit);
          }
          else{
              temperatureSpan.textContent = "C";
              temperatureDegree.textContent = Math.floor(temp);
          }
      })  
    });
});
//to get the information we're gonna use the fetch

//we are fetching the link above
//what it basically does is tries to do a GET request which is basically getting information from the above url
}
//else{
    //we can mention something to notify the user that if you don't allow location access then it won't work correctly
//}
//this means if this exists in the browser then we can find the exact position of the user
//The Navigator.geolocation read-only property returns a Geolocation object that gives Web content access to the location of the device. This allows a Web site or app to offer customized results based on the user's location.
});