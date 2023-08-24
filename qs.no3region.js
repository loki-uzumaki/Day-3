// 3.region
let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all')
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    for (let details of data) {
        console.log(details.region);
    }
}
xhr.send();