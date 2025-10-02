function createIndicatorsContent() {
    let HtmlContent = ``;
    let numOfEnd = 15;

    for (let i = 1; i <= Math.ceil(NumberAllObjInArray / numberCardsInRow); i++) {
        HtmlContent += ` 
        <li value="${dataType}" onclick="changeActives(this);loopContent(${numOfEnd * i} , ${(i * numberCardsInRow) - numberCardsInRow} , this);"  class="${(Math.ceil(((NumberAllObjInArray / numberCardsInRow))) != i) ? "me-2" : ""} indicators ${(i == 1) ? "active clicked" : ""}">
            ${i}
        </li> 
        `
    }

    console.log(HtmlContent);
    return HtmlContent;
}
function updateIndicatorsContent() {
    ulIndicators.innerHTML = ``;
    ulIndicators.innerHTML = `   
        ${createIndicatorsContent()}
        `;
    ulIndicators.classList.remove("d-none")
}
function changeActives(that) {
    let parentAllChildren = that.closest(".changeActives"),
        childActive = parentAllChildren.querySelector(".active"),
        currentChild = that;

    if (that.classList.contains("active")) {
        return 0
    } else {
        childActive.classList.remove("active");
        currentChild.classList.add("active");
    }

    if (that.classList.contains("indicators")) {
        childActive.classList.remove("clicked");
        currentChild.classList.add("clicked");
    }
}
function showDataOnClickIndicator(arrOfData) {
    rowNews.innerHTML = ``;

    arrOfData.forEach(function (data, index) {
        itemIndex = index + 1
        if (itemIndex <= numOfEnd && itemIndex >= numOfStart) {
            rowNews.innerHTML += `
                <div class="spacial-card mb-4 col-md-6 col-xl-4">
                    <div class="item" data-id="${itemIndex}">
                        <div class="header"
                            style="background-image: url('${data.urlToImage}');">
                        </div>
                        <div class="body text-start">
                            <h6 class="NameUser">${data.source.id ?? data.source.name ?? "unknown"}</h6>
                            <h5 class="titleOfNew">
                                ${data.title?.slice(0, 20) ?? "unknown"}...
                            </h5>
                            <p class="contentNew">
                                ${data.description === "" ? "Nothing" : data.description?.slice(0, 50) ?? "unknown"}
                            </p>
                            <span class="d-block mb-3 mainColor">
                                ${data.publishedAt} 
                            </span>
                            <a class="" href="${data.url}">See More</a>
                        </div>
                    </div>
                </div>
                `;
            updateIndicatorsContent(dataType);
        } else {
            return 0;
        }
    })
}
function editDataOnClickIndicator(arrOfData) {
    rowNews.innerHTML = ``;

    arrOfData.forEach(function (data, index) {
        itemIndex = index + 1
        if (itemIndex <= numOfEnd && itemIndex > numOfStart) {
            rowNews.innerHTML += `
                <div class="spacial-card mb-4 col-md-6 col-xl-4">
                    <div class="item" data-id="${itemIndex}">
                        <div class="header"
                            style="background-image: url('${data.urlToImage}');">
                        </div>
                        <div class="body text-start">
                            <h6 class="NameUser">${data.source.id ?? data.source.name ?? "unknown"}</h6>
                            <h5 class="titleOfNew">
                                ${data.title?.slice(0, 20) ?? "unknown"}...
                            </h5>
                            <p class="contentNew">
                                ${data.description === "" ? "Nothing" : data.description?.slice(0, 20)}
                            </p>
                            <span class="d-block mb-3 mainColor">
                                ${data.publishedAt} 
                            </span>
                            <a class="" href="${data.url}">See More</a>
                        </div>
                    </div>
                </div>
                `;

        } else {
            return 0;
        }
    })
}
function typeOfNews(typeOfNews, go = false) {
    if (typeOfNews == "tesla") {
        ArrayOfData = categoryTesla;
        dataType = typeOfNews;
    } else if (typeOfNews == "apple") {
        ArrayOfData = categoryApple;
        dataType = typeOfNews;
    } else if (typeOfNews == "sources") {
        ArrayOfData = categorySource;
        dataType = typeOfNews;
    } else if (typeOfNews == "domains") {
        ArrayOfData = categoryDomains;
        dataType = typeOfNews;
    } else if (typeOfNews == "country") {
        ArrayOfData = categoryCountry;
        dataType = typeOfNews;
    } else {
        console.log("I'm here");
    }

    NumberAllObjInArray = ArrayOfData.length;
    if (go) {
        editDataOnClickIndicator(ArrayOfData);
    } else {
        showDataOnClickIndicator(ArrayOfData);
    }
}
function loopContent(endPoint, startPoint, that) {
    numOfStart = (numberCardsInRow * that.textContent) - numberCardsInRow;
    numOfEnd = endPoint;
    typeOfNews(that.getAttribute("value"), true);
}
