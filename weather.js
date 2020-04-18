//first get the longitude and latitude from our location. there is a very simple way to do that. it is built-in in javascript
//we need to define icons for relevant weather conditions. so we basically define a new skycon. then we add the canvas in the html and then we say what kind of svg do we want to use
window.addEventListener('load', ()=>{
    
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.tempeature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let title = document.querySelector('title');
    let temperature = document.querySelector('.temperature');
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
        const {description, icon} = data.weather[0];
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
      temperature.addEventListener("click", function(){
          if(temperatureSpan.textContent === "C"){
              temperatureSpan.textContent = "F";
              temperatureDegree.textContent = Math.floor(fahrenheit);
          }
          else{
              temperatureSpan.textContent = "C";
              temperatureDegree.textContent = temp;
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

//once our page is loaded we can get the location and this function will run
    //var and let both are used for variable declaration
    //var is function scoped and let is block scoped
    //there are 3 ways to declare a variable
    //var width = 100;
    //let height = 200;
    //const key = 'abcd';

    //var can be reassigned and updated and called again with the new value
    //fucntion scope means they are available only in function they are created. or if created outside then they are globally scoped
    //if var is created inside a function and if i try to call it outside, it won't work. returns a referenceError

    //scope
    //if var is not defined in a function then it is defined in a window or global scope
    //in other word var is not restricted to the curly brackets

    //let  and const are scoped to block. block is a set of opening and closing curly brackets

    //so if we change var to let and call the variable then it will give a referenceError
    //we coud use cont instead of let

    //var is defined for entire program compared to let
    //var cannot have block scope

    //variables declared between {} can be accessed outside the brackets

    //using let variables declared inside {} cannot be accessed outside the bracket

    //SCOPE DETERMINES THE VISIBILITY AND ACCESSIBILITY OF A VARIABLE
    //area outside the functions is global scope

    //functions declared inside the function become local scope

    //LOCAL SCOPE CAN BE DIVIED INTO FUNCTION SCOPE AND BLOCK SCOPE
    //block scope was introduced in es6 with new ways to declare variables using let and const

    //Whenever you declare a variable in a function, the variable is visible only within the function. You can't access it outside the function. var is the keyword to define variable for a function-scope accessibility.

    //A block scope is the area within if, switch conditions or for and while loops.

    //Generally speaking, whenever you see {curly brackets}, it is a block.

    //In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.

    //arrow functions are a new way of writing functions in es6. it helps developers save time
    //By using arrow functions, we avoid having to type the function keyword, return keyword

    //ARROW FUNCTIONS EXAMPLE
    //Before:
//hello = function() {
    //return "Hello World!";
  //}
  //With Arrow Function:
//hello = () => {
    //return "Hello World!";
  //}
    //It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

    //Arrow Functions Return Value by Default:
//hello = () => "Hello World!";

