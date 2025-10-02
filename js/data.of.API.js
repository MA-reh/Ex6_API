var categoryTesla;
var categoryApple;
var categorySource;
var categoryDomains;
var categoryCountry;

fetch(
  "https://newsapi.org/v2/everything?q=tesla&from=2025-09-02&sortBy=publishedAt&apiKey=49878c3f53a943c28b30ba4476d1d610"
)
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
    categoryTesla = data.articles;
    ArrayOfData = categoryTesla
    NumberAllObjInArray = data.articles.length;
  })
  .then(() => {
    (function () {
      rowNews.innerHTML += ``;
      updateIndicatorsContent();
      categoryTesla.forEach(function (data, index) {
        itemIndex = index + 1;
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
                                ${data.title?.slice(0, 20)}...
                            </h5>
                            <p class="contentNew">
                                ${data.description === "" ? "Nothing" : data.description?.slice(0, 50)}
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
      });
    })();
  })
  .then(() => {
    searchInput.addEventListener("keyup", () => {
      inputValue = searchInput.value.toLowerCase();

      let filteredNews = ArrayOfData.filter(function (objData) {
        
        let findData = objData.author?.includes(inputValue) ||
        objData.title?.includes(inputValue) ||
        objData.description?.includes(inputValue) ||
        objData.publishedAt?.includes(inputValue) ||
        objData.source.name?.includes(inputValue)

        return findData;
      });

      console.log(filteredNews);

      if(filteredNews.length === 0){
        waring.classList.replace("d-none" , "d-block");
        rowNews.innerHTML=``
        ulIndicators.classList.add("d-none")
      }else{
        ulIndicators.classList.replace("d-block" , "d-none")
        waring.classList.replace("d-block" , "d-none");
        showDataOnClickIndicator(filteredNews);
      }
    });
  })
  .catch((Error) => {
    console.log("Error", Error);
  });

fetch(
  "https://newsapi.org/v2/everything?q=apple&from=2025-10-01&to=2025-10-01&sortBy=popularity&apiKey=49878c3f53a943c28b30ba4476d1d610"
)
  .then((response) => response.json())
  .then(function (data) {
    categoryApple = data.articles;
  })
  .catch((Error) => {
    console.log("Error", Error);
  });

fetch(
  "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=49878c3f53a943c28b30ba4476d1d610"
)
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
    categorySource = data.articles;
  })
  .catch((Error) => {
    console.log("Error", Error);
  });

fetch(
  "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=49878c3f53a943c28b30ba4476d1d610"
)
  .then((response) => response.json())
  .then(function (data) {
    categoryDomains = data.articles;
  })
  .catch((Error) => {
    console.log("Error", Error);
  });

fetch(
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=49878c3f53a943c28b30ba4476d1d610"
)
  .then((response) => response.json())
  .then(function (data) {
    categoryCountry = data.articles;
  })
  .catch((Error) => {
    console.log("Error", Error);
  });
