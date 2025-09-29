
function showDataOfAPI(ArrayOfData, indexEndFun = 15, indexStart = 0, typeData = "tesla") {
    let rowNews = document.querySelector("#Page .data .content-search .row");
    ulIndicators = document.querySelector("#Page  .data .indicators ul");
    indexEnd = indexEndFun;
    rowNews.innerHTML += ``;
    NumberAllObjInArray = ArrayOfData.length;

    ulIndicators.innerHTML = `   
    ${createIndicatorsContent(typeData)}
    `;

    ArrayOfData.forEach(function (data, numberOfCards) {
        if (numberOfCards >= indexStart) {
            if (numberOfCards < indexEndFun) {
                rowNews.innerHTML += `
                <div class="spacial-card mb-4 col-md-6 col-xl-4">
                <div class="item" data-id="">
                <div class="header"
                style="background-image: url('${data.urlToImage}');">
                </div>
                <div class="body text-start">
                <h6 class="NameUser">${data.source.id ?? data.source.name ?? "unknown"}</h6>
                <h5 class="titleOfNew">
                ${data.title.substr(0, 20)}...
                </h5>
                <p class="contentNew">
                ${data.description.substr(0, 60) ?? "unknown"}
                </p>
                <span class="d-block mb-3 mainColor">
                ${data.publishedAt} 
                </span>
                <a class="" href="${data.url}">See More</a>
                </div>
                </div>
                </div>
                `;
            }
            else {
                return 0;
            }
        }
    });

    indexStart = indexEndFun;
}

function createIndicatorsContent(dataOfNews) {
    let HtmlContent = ``;
    
    for (let i = 0; i < Math.ceil(((NumberAllObjInArray / indexEnd))); i++) {
        HtmlContent += ` 
        <li value="${dataOfNews}" onclick="changeActives(this);typeOfNews(this , ${indexEnd * (i + 1)} , ${(indexEnd * (i + 1)) - indexEnd})" class="${(Math.ceil(((NumberAllObjInArray / indexEnd))) != i) ? "me-2" : ""} ${(i == 0) ? "active" : ""}">
            ${i + 1}
        </li> 
        `
    }

    return HtmlContent;
}

function changeActives(that) {
    let parentAllChildren = that.closest(".changeActives"),
        childActive = parentAllChildren.querySelector(".active"),
        currentChild = that;

    childActive.classList.remove("active");
    currentChild.classList.add("active");
}




