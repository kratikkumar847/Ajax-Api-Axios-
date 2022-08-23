// What is the meaning of AJAX?
// AJAX = Asynchronous JavaScript And XML. AJAX is not a programming language. AJAX just uses a combination of: A browser built-in XMLHttpRequest object (to request data from a web server) JavaScript and HTML DOM (to display or use the data)What is the meaning of AJAX?
// AJAX = Asynchronous JavaScript And XML. AJAX is not a programming language. AJAX just uses a combination of: A browser built-in XMLHttpRequest object (to request data from a web server) JavaScript and HTML DOM (to display or use the data)



// What is XMLHttpRequest
// The "original" way of sending request via JS
// Does not support Promise, so lots of callbacks
// WTF is going on with the weird capitalization ?
// Clunky syntax that i find difficult to remember 











// What is Fetch API
// The newer way of making request via JS
// return Promises!
// Not Supported in Internet Explorer :(

// fetch("https://swapi.dev/api/people/1/")
//     .then((res) =>{
//         console.log("it Worked")
//         console.log(res)
//     })
//     .catch((e) =>{
//         console.log("Sorry this time", e)
//     })



//

// fetch("https://swapi.dev/api/people/2")
//     .then((res)=>{
//         console.log("First Resolved")
//         return res.json();
//     })
//     .then((data)=>{
//         console.log("1st data is ", data)
//         return fetch("https://swapi.dev/api/people/3/")
//     })
//     .then((res1)=>{
//         console.log("Second Resolved")
//         console.log("2st data is ",  res1)
//     })
//     .catch((e)=>{
//         console.log("Error" , e);
//     })




// const loadStarWarsPeopleName = async () =>{
//     try {
//         const res = await fetch("https://swapi.dev/api/people/1/");
//         const data = await res.json()
//         console.log(data)
//     }
//     catch(e){
//         console.log("ERROR" , e);
//     }
// };

// loadStarWarsPeopleName();












// What is axios
// A Library for making http request

// axios.get("https://swapi.dev/api/people/1/")
//    .then((res) =>{
//        console.log(res)
//    })
//    .catch(err =>{
//        console.log("ERROR!", err)
//    })


//    const fetchBitcoinPrice = async (id) =>{
//        try{
//            const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
//            console.log(res.data.name)
//        }
//        catch(e){
//            console.log("ERROR ! ", e)
//        }
//    }
//    fetchBitcoinPrice(10);


const jokes = document.querySelector('#jokes')
const button = document.querySelector('button');
const addNewJoke = async () =>{
    const joketext = await getDadJoke();
    const newLi = document.createElement('LI')
    newLi.append(joketext);
    jokes.append(newLi)
}


const getDadJoke = async () =>{
    try{
        const config = {headers : {Accept : 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/' , config)
        return res.data.joke;
    }
    catch(e){
        return "No Jokes Available Sorry :( "
    }
}

button.addEventListener('click' , addNewJoke);