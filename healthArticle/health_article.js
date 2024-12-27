//new XMLHttpRequest object
var xhr = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();

//variable named url to define the URL of the JSON file
var url = './health_article.json';
var url2 = './news_article.json';

//prepare a GET request to the specified URL
xhr.open('GET', url, true);
xhr2.open('GET', url2, true);

/* inform XMLHttpRequest object that the expected response from
the server shold be in JSON format */
xhr.responseType = 'json';
xhr2.responseType = 'json';

//define what will happen when data is successfully loaded
xhr.onload = function () {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    console.log("Testing 1 ...")
    console.log(articles);

//iterate health data to fetch on the front page using loops - forEach

  articles.forEach(function(article) {
      //create HTML elements dynamically using createElement DOM method
      var articleDiv = document.createElement('div');
      /* populate these HTML elements with corresponding content from the
      fetched JSON data */
      articleDiv.classList.add('article');

      var title = document.createElement('h2');
      title.textContent = article.title;

      var description = document.createElement('p');
      description.textContent = article.description;

      var waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Ways to Achieve:';

      var waysList = document.createElement('ul');
      article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
      });

      var benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Benefits:';

      var benefitsList = document.createElement('ul');
      article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });
      // attach elements to the articleDiv to display each article's detail's
      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

      articlesDiv.appendChild(articleDiv);
    });

}

//second json file - define what will happen when data is successfully loaded
xhr2.onload = function () {
    var news = xhr2.response.news;
    var articlesDiv2 = document.getElementById('news');
    console.log("Testing 2...")
    console.log(news);

    //iterate health data to fetch on the front page using loops - forEach

    news.forEach(function (newZ) {
        //create HTML elements dynamically using createElement DOM method
        var newsDiv = document.createElement('div');
        /* populate these HTML elements with corresponding content from the
        fetched JSON data */
        newsDiv.classList.add('newZ');

        var title = document.createElement('h2');
        title.textContent = newZ.title;

        var description = document.createElement('p');
        description.textContent = newZ.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');
        newZ.ways_to_achieve.forEach(function (way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        newZ.benefits.forEach(function (benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });
        // attach elements to the articleDiv to display each article's detail's
        newsDiv.appendChild(title);
        newsDiv.appendChild(description);
        newsDiv.appendChild(waysHeader);
        newsDiv.appendChild(waysList);
        newsDiv.appendChild(benefitsHeader);
        newsDiv.appendChild(benefitsList);

        articlesDiv2.appendChild(newsDiv);
    });

}


/*
 send the XMLHttpRequest to fetch the data from the specified URL
 and include the given code at the end of the JavaScript file.
 */
xhr.send();
xhr2.send();