var xhr = new XMLHttpRequest();
var url = './health_article.json';


/*
'GET': Specifies the HTTP method used for
the request (in this case, a GET request).
URL: Represents the URL from where you
will fetch the data.
True: Indicates if the request is
asynchronous (true) or synchronous (false).
In this case, it's set to true for
asynchronous operation,
allowing other scripts to run while
the request is processed.
*/
debugger;

xhr.open('GET', url, true);

/*
Response type specification
- nform the XMLHttpRequest object that the expected
response from the server should be in JSON format.
set the expected response type to JSON format in
health_article.js file as follows:
*/
xhr.responseType = 'json';

/*
define what should happen when the data is successfully loaded using
xhr.onload = function() { ... } function.
var articles = xhr.response.articles; to retrieve the articles
array from the JSON response.
var articlesDiv = document.getElementById('articles');
to retrieve the HTML element with the ID 'articles' where the
fetched content will be displayed.
*/
var articles = xhr.response.articles;
var articlesDiv = document.getElementById('articles');

/*
Now, you need to iterate health data to fetch on the front page using loops.
    For this, you need to use the forEach array method as follows:
*/

/*
Create HTML elements dynamically for example,
<div>, <h2>, <p>, <h3>, <ul>, <li> for each article's title,
description,ways_to_achieve,
and benefits using createElement DOM method as follows:
*/

articles.forEach(function (article) {
    var articleDiv = document.createElement('div');

/*
Populate these HTML elements with corresponding content
from the fetched JSON data as follows:
*/

    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var description = document.createElement('p');
    description.textContent = article.description;

    var waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Ways to Achieve:';

    var waysList = document.createElement('ul');
    article.ways_to_achieve.forEach(function (way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
    });

    var benefitsHeader = document.createElement('h3');
    benefitsHeader.textContent = 'Benefits:';

    var benefitsList = document.createElement('ul');
    article.benefits.forEach(function (benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
    });

    /*
    Attach these elements to the articlesDiv to display each article's
    details on the webpage as follows:
    */

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);

    articlesDiv.appendChild(articleDiv);

    /*
    You need to send the XMLHttpRequest to fetch the data
    from the specified URL and
    include the given code at the end of the JavaScript file.
    */

    xhr.send();
});