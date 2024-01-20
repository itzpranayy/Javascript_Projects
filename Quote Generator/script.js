const apiUrl = "https://api.quotable.io/random"

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;

}

getQuote(apiUrl);



function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" +  quote.innerHTML + "   --- " + author.innerHTML , "Tweet Window" , "width=600, height=300" )
}

const quote = document.getElementById("quote");
const author = document.getElementById("author");


