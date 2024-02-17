var bitcoin = document.getElementById("bitcoin");
var dogecoin = document.getElementById("dogecoin");
var ethereum = document.getElementById("ethereum");


var settings = {
    "async" : true,
    "scrossDomain" : true,
    "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=USD",
    "method" : "GET",
    "headers" : {}
}

$.ajax(settings).done(function(response){
    bitcoin.innerHTML = response.bitcoin.usd;
    dogecoin.innerHTML = response.dogecoin.usd;
    ethereum.innerHTML = response.ethereum.usd;
})