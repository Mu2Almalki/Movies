
let arrayMovi = [];

// fetch('https://imdb-api.com/en/API/MostPopularMovies/k_nbd9s6cf', {
//     "method": "GET",
// })



// .then((response) => {
//     console.log("resolve", response)
//     return response.json();
// }).then(
//     data => {
//         console.log(data.items)
//         for(object in data.items ){
//             // console.log(data.items[object].title)
//             // console.log(data.items[object].image)
//             let x = document.createElement("H3")
//             let div=document.createElement("div")
//             let b = document.createElement("button")
//             let divmini =document.createElement("div")
//             x.innerText=data.items[object].title
//             b.innerText="Fav"
//             let y =document.createElement("IMG")
//             y.src = data.items[object].image
//             div.appendChild(y)
//             divmini.appendChild(x)
//             divmini.appendChild(b)
//             div.appendChild(divmini)
//             y.className = "card-img-top"
//             let maindiv=document.getElementById("movies")
//             maindiv.appendChild(div)
//             b.className="btn btn-primary"
//             x.className="card-title"
//             div.className="card"
//             divmini.className="card-body"


//             b.addEventListener('click', function () {
//                 console.log(data.items[object]);
//                 let check = false;
//                 for (let i = 0; i < arrayMovi.length; i++) {

//                     if (data.items[object].id == arrayMovi[i].id) {
//                         alert("This movie is added")
//                         check = true;
//                         break;

//                     }
//                 }

//                 if (check == false) {
//                     arrayMovi.push(data.items[object]);
//                     saveb()

//                 }

//             })



//         }
//     }

// ).catch((err) => {
//     console.log('rejected', err)
// });
let searchInput = '';

function favoriet() {
    fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${searchInput}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
                "x-rapidapi-key": "6ff251b1b6mshf4872ca5c8d0e13p1999e9jsn201341460947"
            }
        })
        .then(response => {
            // console.log(response);
            return response.json();

        }).then(
            data => {
                // console.log(data)
                for (object in data.titles) {
                    // console.log(data.titles[object].title)
                    // console.log(data.titles[object].image)
                 


                    let x = document.createElement("H3")
                    let div=document.createElement("div")
                    let b = document.createElement("button")
                    let divmini =document.createElement("div")
                    x.innerText=data.titles[object].title
                    b.innerText="add Favorite"
                    let y =document.createElement("IMG")
                    y.src = data.titles[object].image
                    div.appendChild(y)
                    divmini.appendChild(x)
                    divmini.appendChild(b)
                    div.appendChild(divmini)
                    y.className = "card-img-top"
                    let maindiv=document.getElementById("movies")
                    maindiv.style.display="none"
                    b.className="btn btn-primary"
                    x.className="card-title"
                    div.className="card"
                    divmini.className="card-body"
                    let divmin2=document.getElementById("movies2")
                    divmin2.appendChild(div)
                    
        

                    b.addEventListener('click', function () {
                        console.log(data.titles[object]);
                        let check = false;
                        for (let i = 0; i < arrayMovi.length; i++) {

                            if (data.titles[object].id == arrayMovi[i].id) {
                                alert("This movie is added")
                                check = true;
                                break;

                            }
                        }

                        if (check == false) {
                            arrayMovi.push(data.titles[object]);
                            saveb()

                        }

                    })




                }


            }
        ).catch(err => {
            console.error(err);
        });
}
// ______________________________________________

function saveb() {
    localStorage.setItem("favoriteMovie", JSON.stringify(arrayMovi));

}

function loadb() {
    arrayMovi = JSON.parse(localStorage.getItem("favoriteMovie"));
}

if (localStorage.getItem("favoriteMovie") != null) {
    loadb();
}

// ______________Search_____________

let btnSearch = document.getElementById("btn");

function search() {
    searchInput = document.getElementById("inputSearch").value
    favoriet()

}


// craete function  === 
// it will loop through the arrfavemovie === 
// create element === 


// put the value inside the element 
// append in the small div 
// create div in the favorite html and give it id 
// get the main div from the favorite html 
// append the small div to the main div 


function favmovie() {
    for (i in arrayMovi) {
        let xf = document.createElement("H2")
        let d = document.createElement("button")
        let yf = document.createElement("IMG")
        let divf = document.createElement("div")
        let divminif =document.createElement("div")
        xf.innerText = arrayMovi[i].title
        d.innerText = "Delet"
        yf.src = arrayMovi[i].image
        divf.appendChild(yf)
        divf.appendChild(divminif)
        divminif.appendChild(xf)
        divminif.appendChild(d)
        d.className = "btn btn-primary"
        yf.className = "card-img-top"
        divf.className = "card"
        xf.className = "card-title"
        divminif.className="card-body"
        let maindivf = document.getElementById("fav")

        maindivf.appendChild(divf)
        d.addEventListener('click', function () {

                for (let i = 0; i < arrayMovi.length; i++) {

                    if (arrayMovi[i].id == arrayMovi[i].id) {
                        arrayMovi.splice(arrayMovi[i], 1);
                        fav.removeChild(divf);
                        saveb()
                    }
                }
            


            })
        }




}