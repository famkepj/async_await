// async function getData(){
//     try{    
//         // const apiUrl =  "https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}";
//         const apiUrl =  "https://api.themoviedb.org/3/genre/movie/list?api_key=356e96dc3634b34c274d78d0873db8be";
//         var res = await fetch(apiUrl);
//         var genre = await res.json();
//         console.log (genre);
//     } catch(err){
//     console.log("error")
//     }
// }

// getData()

// var api_key = "356e96dc3634b34c274d78d0873db8be";

/* Bovenstaand de orginele code uit de vorige opdracht*/



// var api_key = "356e96dc3634b34c274d78d0873db8be";

// async function getData(){
//     try{    
//         const apiUrl = "https://api.themoviedb.org/3/genre/movie/list";
//         const res = await fetch(apiUrl,{
//             methode:"GET", /*op website gezocht moet merhode GET gebruiken bij deze*/
//             headers:{
//                 "Content-Type: application/json;charset=utf-8":
//                 "Authorization: Bearer {eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTZlOTZkYzM2MzRiMzRjMjc0ZDc4ZDA4NzNkYjhiZSIsInN1YiI6IjYxOTYyOGM3Mjk3MzM4MDA5MjBjMjc5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.foRchjj72funVFGs_xlrRR-goYCQy_sM37ySgbF_R5g}"
//             },
//             body: JSON.stringify(data),
//         })
//         const genre = await res.json();
//         console.log(genre);
//         console.log("data opgehaald");
//         // .then(data) =>{
//         //     const genreArray = data.genres;
//         //     console.log (genreArray);
//         // });
//         // const genre = await res.json();
//         // console.log(genre)
//         // const genreArray = JSON.parse(myJSON);
        
        
//     } catch(err){
//     console.log("error")
//     }
// }

// getData ()

/*Bovenstaande met Bearer token e.d. proberen op te halen; kom er niet uit :-( */

async function getMovieGenres(){
    try{    
        const apiUrl =  "https://api.themoviedb.org/3/genre/movie/list?api_key=356e96dc3634b34c274d78d0873db8be";
        const res = await fetch(apiUrl);
        const data = await res.json();
        // console.log (data);

        var titelnaam = "Movie Genres";
        const titelItem = document.createElement("h3");
        titelItem.appendChild(document.createTextNode(titelnaam));
        const addTitel = document.getElementById("titel");
        addTitel.appendChild(titelItem);
        
        const dataOntvangen = await data 
            var list = dataOntvangen.genres;
            return list.map((genre) =>{
                var genrelijst = ("genre naam: "+ genre.name + ", id: " + genre.id);
                const listItem = document.createElement("li");
                listItem.appendChild(document.createTextNode(genrelijst));
                const lijst = document.getElementById("list");
                lijst.appendChild(listItem);
        });

}catch(err){
    console.log("error")
    }
}

getMovieGenres()

async function getMyBestMovie (){
    try{    
        const apiUrl = "https://api.themoviedb.org/3/search/movie?api_key=356e96dc3634b34c274d78d0873db8be&query=Maleficent&year=2014";
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log (data);
        
        const dataOntvangen = await data 
            var list = dataOntvangen.results;
            return list.map((results) =>{
                bestmovie = (results.title);
                const listItem = document.createElement("p");
                listItem.appendChild(document.createTextNode(bestmovie));
                const lijst = document.getElementById("bestefilm");
                lijst.appendChild(listItem);
        });

}catch(err){
    console.log("error")
    }
}

getMyBestMovie()




async function getTopRatedMovies(){
    try{    
        const apiUrl= "https://api.themoviedb.org/3/discover/movie?api_key=356e96dc3634b34c274d78d0873db8be&sort_by=popularity.asc";
        const res = await fetch(apiUrl);
        const data = await res.json();
        
        const dataOntvangen = await data 
            var list = dataOntvangen.results;
            const eerste10 = list.slice(0, 10)
            return eerste10.map((results) =>{
                    var toplijst2 = (results.title);
                    const listItem2 = document.createElement("li");
                    listItem2.appendChild(document.createTextNode(toplijst2));
                    const lijst2 = document.getElementById("top10");
                    lijst2.appendChild(listItem2);
                }       
        );

}catch(err){
    console.log("error")
    }
}

getTopRatedMovies()


async function getTopRatedActionMovies(){
    try{    
        const apiUrl= "https://api.themoviedb.org/3/discover/movie?api_key=356e96dc3634b34c274d78d0873db8be&sort_by=popularity.desc&with_genres=action";
        const res = await fetch(apiUrl);
        const data = await res.json();
        
        const dataOntvangen = await data 
            var list = dataOntvangen.results;
            const eerste10 = list.slice(0, 10)
            return eerste10.map((results) =>{
                    var toplijst = (results.title);
                    const listItem = document.createElement("li");
                    listItem.appendChild(document.createTextNode(toplijst));
                    const lijst = document.getElementById("top10action");
                    lijst.appendChild(listItem);
                }       
        );

}catch(err){
    console.log("error")
    }
}


getTopRatedActionMovies()


async function get1975Movies(){
    try{    
        const apiUrl= "https://api.themoviedb.org/3/discover/movie?api_key=356e96dc3634b34c274d78d0873db8be&sort_by=primary_release_date.asc&release_date.gte=1975";
        const res = await fetch(apiUrl);
        const data = await res.json();
        
        const dataOntvangen = await data 
            var list = dataOntvangen.results;
            const eerste10 = list.slice(0, 10)
            return eerste10.map((results) =>{
                    var toplijst = (results.title);
                    const listItem = document.createElement("li");
                    listItem.appendChild(document.createTextNode(toplijst));
                    const lijst = document.getElementById("movies1975");
                    lijst.appendChild(listItem);
                }       
        );

}catch(err){
    console.log("error")
    }
}


get1975Movies()




// Ga verder met part 2 in Postman
