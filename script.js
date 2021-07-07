console.log("Hello World!");

// Welcome to the Fetch and Asynchronous functions tutorial.
// Fetch and async code can seem very daunting and difficult but once you understand how
// Fetch and async functions work they are a breeze.

// What is Fetch?
// The Fetch API interface allows web browser to make HTTP requests to web servers.

// This means that we can get a JSON (Java Script Object Notation) object from across the
// internet and utilize that information in our web app.
// But, in order to use these objects correctly we need to use asynchronous functions to
// wait for the information to be gathered before we start manipulating our data.

// What is an Asynchronous function?
// Functions running in parallel with other functions are called asynchronous.

// In order to properly work with our async functions, we will use promises.
// What are promises?
// A Promise is a JavaScript object that links producing code and consuming code
// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result

// When we use fetch to request a 3rd party API the request will take some time.
// We use a promise to tell JavaScript to wait until we receive the response from the API.
// Once we get a response JavaScript will execute the next section of code.
// If we try to fetch an api without using promises, our code will not wait for
// a response from the API, and will execute code on an object that does not exist.
// Lets see this in action.
// Uncomment the code below:
// ==============================================

// function getApi() {
//   var object = fetch('https://jsonplaceholder.typicode.com/users/1'); // we save our response as a variable
//   console.log(object);
// };

// getApi();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Comment the code above.

// You can see in our console.log we received a <promise pending> log.
// This means that we never received a response to get our object.

// Now lets look at this same function but as a promise.
// Uncomment the code below:
// ==============================================

// function getApi() {
//   fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then(object => console.log(object)) // The "=>" seen here is a different way to declare functions, it is usually referred to as "Fat Arrrow"
// };

// getApi();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Comment the code above.

// Ok, Lets talk about what is going on in this function.
// We use Fetch to request a JSON object from a URL.
// We follow that up with the ".then()" method.
// In the method, we call an anonymous "fat arrow" function (see note on line 52) and
// give it the parameter "object".
// The object parameter will hold our response object from our 3rd party api.
// We then console.log the object and get back a response properly.

// Think of .then() like this: when you add the .then() method to the end of a function,
// you are telling JavaScript, "Wait until we get this response, and THEN once you have received it
// you can execute the following code."

// When we get an object from a 3rd part API in this way, the object received will be unworkable.
// We can't really use what we got in our script in its current format.
// In order to use the response object, we need ot convert it into JSON format.
// Uncomment the code below:
// ==============================================

// fetch('https://jsonplaceholder.typicode.com/users/1') // Making our fetch request
// .then(response => response.json()) // converting the response object into JSON format
// .then(json => console.log(json)) // logging the formatted response
// .catch(err => console.log(err)) // if we encounter a problem during our request, the ".catch()" method will let us know what happened

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Comment the code above.

// Now when you open the object in your dev tools we can see we have a properly formatted object that we can work with.
// Also notice that we used to back to back .then() methods. We can chain these methods together to manipulate our
// response object in stages.

// Now lets talk about the parameters inside our .then() calls.
// So far we have seen "object", "response" and "json". What do these parameters mean?
// Well, similarly to regular functions, these parameters don't mean anything. They are simply
// a placeholder to reference your response object. 
// The .then() method returns a promise object, that is why you do not see any return statments in those functions.
// So once we get the promise object we call it "response", because that's what it is.
// Then we convert our response to JSON format. Our formatted object is then returned by default.
// We then call the formatted object "json" because we formatted it as such. We console.log "json" and see our
// neatly formatted object.
// To emphasize that the name of parameters don't really mean anything, lets make it goofy.
// Uncomment the code below:
// ==============================================

// fetch('https://jsonplaceholder.typicode.com/users/1') 
// .then(doubleCheeseBurger => doubleCheeseBurger.json())
// .then(extraLargeFries => console.log(extraLargeFries))
// .catch(bananaSplit => console.log(bananaSplit))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// If you uncomment the previous code block and look at the returned objects side by side, you will see they are exactly the same.

// Comment the code above.

// Great! Now that we understand how to use fetch and async funcitons properly we can start working with our data.
// Uncomment the code below:
// ==============================================

function getApi() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data
    })
    .catch(err => console.log(err));
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// So we have created a function that will get the response object from an API, convert it to JSON format, and 
// return our object so its ready to work with.
// Lets call that fucntion and look at our object.
// Uncomment the code below:
// ==============================================

// getApi();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Comment the code above.

// We get back an array with 10 user accounts. Lets see a different way to write this function using ES6 async/await.
// Uncomment the code below:
// ==============================================

var getApiEs6 = async () => { // same as `async function createUserArr(promise, arr) {}`
  try {
    var promise = await fetch("https://jsonplaceholder.typicode.com/users");
    var json = await promise.json(); // using await in this way is very similar to using the .then() method
    console.log(await json);
    return await json
  } catch (err) { // same as a .catch() method
    throw (err);
  };
};

getApiEs6();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Comment the code above.