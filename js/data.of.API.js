var categoryTesla;
var categoryApple;
var categorySource;
var categoryDomains;
var categoryCountry;

fetch("https://newsapi.org/v2/everything?q=tesla&from=2025-08-29&sortBy=publishedAt&apiKey=0a41a4f5b2174e4ea14efdebefdcbb6e").then((response) => response.json()).then(function (data) {
    console.log(data);
    categoryTesla = data.articles;
    
    showDataOfAPI(categoryTesla);
}).catch((Error) => {
    console.log("Error", Error);
})

fetch("https://newsapi.org/v2/everything?q=apple&from=2025-09-28&to=2025-09-28&sortBy=popularity&apiKey=0a41a4f5b2174e4ea14efdebefdcbb6e").then((response) => response.json()).then(function (data) {
    categoryApple = data.articles;
}).catch((Error) => {
    console.log("Error", Error);
})

fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0a41a4f5b2174e4ea14efdebefdcbb6e").then((response) => response.json()).then(function (data) {
    categorySource = data.articles;
}).catch((Error) => {
    console.log("Error", Error);
})

fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=0a41a4f5b2174e4ea14efdebefdcbb6e").then((response) => response.json()).then(function (data) {
    categoryDomains = data.articles;
}).catch((Error) => {
    console.log("Error", Error);
})

fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0a41a4f5b2174e4ea14efdebefdcbb6e").then((response) => response.json()).then(function (data) {
    categoryCountry = data.articles;
}).catch((Error) => {
    console.log("Error", Error);
})




