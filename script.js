var el = document.getElementById('name');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=35a6b4a115454a22b4ce4547efa87738', true);

xhr.responseType = 'text';
var d = document.getElementById('name');

xhr.onload = function () {



            var x = xhr.responseText;
            var s = JSON.parse(x);
            console.log(s.articles);
            for (var i = 0; i < s.articles.length; i++) {
              console.log(s.articles.length);

              var newDiv = document.createElement("div");

              var newP = document.createElement("p");
              newDiv.appendChild(newP);
              newP.innerHTML = s.articles[i].title;

              var newimg = document.createElement("img")
              newDiv.appendChild(newimg);
              newimg.src = s.articles[i].urlToImage;
              d.appendChild(newDiv);
            }


};

xhr.send(null);