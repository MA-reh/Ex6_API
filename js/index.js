let rowNews = document.querySelector("#Page .data .content-search .row"),
    dataOfLinkAPI,
    optionsOfSearch = document.querySelectorAll("#Page .tolls-search select option"),
    ulIndicators = document.querySelector("#Page  .data .indicators ul"),
    allLiIndicators = ulIndicators.querySelectorAll("li"),
    indexEnd,
    indexStart,
    ArrayOfData,
    NumberAllObjInArray;


// self Invoke
/* (function () {
    fetch(`https://newsapi.org/v2/everything?q=tesla&from=2025-08-29&sortBy=publishedAt&apiKey=814ce8259ad34255b22b14943ff4124c`)
        .then((respond) => respond.json())
        .then((data) => {
            dataOfLinkAPI = data.articles

            rowNews.innerHTML += ``;
            dataOfLinkAPI.forEach(function (New, numberOfCards) {
                if (numberOfCards >= 12) {
                    return 0;
                }
                rowNews.innerHTML += `
<div class="spacial-card mb-4 col-md-6 col-xl-4">
    <div class="item" data-id="${New.source.id ?? New.source.name ?? "unknown"}">
        <div class="header"
            style="background-image: url(${(New.urlToImage == null || New.urlToImage == undefined || New.urlToImage == "") ? "https://cleantechnica.com/wp-content/uploads/2025/09/VW-ID1.jpg" : New.urlToImage});">
        </div>
        <div class="body text-start">
            <h6 class="NameUser">
            <span>${(New.author == null || New.author == "") ? "unknown" : New.author}</span>...
            </h6>
            <h5 class="titleOfNew">
                ${New.title.substr(0, 25)}...
            </h5>
            <p class="contentNew">
                ${New.content.substr(0, 100)}
            </p>
            <a class="" target="_blank" href="${New.url}">See More</a>
        </div>
    </div>
</div>
    
    `
            });
        });
})() */

function typeOfNews(that, indexEndFun = 15, indexStartFun = 0, Walk = false) {
    rowNews.innerHTML = ``;
    let typeData = that.value;

    if (typeData == "tesla") {
        ArrayOfData = categoryTesla;
        if (Walk) {
            showDataOfAPI(ArrayOfData, (NumberAllObjInArray < indexEnd) ? NumberAllObjInArray - 1 : indexEnd, indexStart);
        }
    } else if (typeData == "apple") {
        ArrayOfData = categoryApple;
        if (Walk) {
            showDataOfAPI(ArrayOfData, (NumberAllObjInArray < indexEnd) ? NumberAllObjInArray - 1 : indexEnd, indexStart);
        }
    } else if (typeData == "sources") {
        ArrayOfData = categorySource;
        if (Walk) {
            showDataOfAPI(ArrayOfData, (NumberAllObjInArray < indexEnd) ? NumberAllObjInArray - 1 : indexEnd, indexStart);
        }
    } else if (typeData == "domains") {
        ArrayOfData = categoryDomains;
        if (Walk) {
            showDataOfAPI(ArrayOfData, (NumberAllObjInArray < indexEnd) ? NumberAllObjInArray - 1 : indexEnd, indexStart);
        }
    } else if (typeData == "country") {
        ArrayOfData = categoryCountry;
        if (Walk) {
            showDataOfAPI(ArrayOfData, (NumberAllObjInArray < indexEnd) ? NumberAllObjInArray - 1 : indexEnd, indexStart);
        }
    } else {
        console.log("I'm here");
    }

    setTimeout((e) => {
        showDataOfAPI(ArrayOfData, indexEndFun, indexStartFun, typeData);
    }, 10)
}











