var menu = document.getElementById('lang-menu');
var countries = [ 'usa', 'ucrane', 'germany', 'cina'];
var portalUrls = [
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=1d0c2c3cedf04aff9260078a2b028ca2',
  'https://newsapi.org/v2/top-headlines?country=ua&apiKey=1d0c2c3cedf04aff9260078a2b028ca2',
  'https://newsapi.org/v2/top-headlines?country=de&apiKey=1d0c2c3cedf04aff9260078a2b028ca2',
  'https://newsapi.org/v2/top-headlines?country=cn&apiKey=1d0c2c3cedf04aff9260078a2b028ca2',
];

var publishers = [ 'Hacker News', 'The New York Times', 'IGN', 'Reddit'];
var publishersUrls = [
  'https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=1d0c2c3cedf04aff9260078a2b028ca2',
  'https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=1d0c2c3cedf04aff9260078a2b028ca2',
  'https://newsapi.org/v2/top-headlines?sources=ign&apiKey=1d0c2c3cedf04aff9260078a2b028ca2',
  'https://newsapi.org/v2/top-headlines?sources=reddit-r-all&apiKey=1d0c2c3cedf04aff9260078a2b028ca2',
];

function renderPage(url){
  var xhr = new XMLHttpRequest();
  var d = document.getElementById('name');
  clearPage();
  // xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=35a6b4a115454a22b4ce4547efa87738', true);
  xhr.open('GET', url, true);

  xhr.responseType = 'text';

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
}

function clearPage() {
  var d = document.getElementById('name');
  while (d.firstChild) d.removeChild(d.firstChild);
}

for (var i = 0; i < countries.length; i++){
  var nextCountry = document.createElement("div");
  nextCountry.setAttribute("id", i);
  nextCountry.onclick = function(event){
    var id = event.target.id;
    var url = portalUrls[id];
    renderPage(url);
  }
  nextCountry.innerHTML = countries[i];
  menu.appendChild(nextCountry);
}

for (var i = 0; i < publishers.length; i++){
  var nextPublisher = document.createElement("div");
  nextPublisher.setAttribute("id", i);
  nextPublisher.onclick = function(event){
    var id = event.target.id;
    var url = publishersUrls[id];
    renderPage(url);
  }
  nextPublisher.innerHTML = publishers[i];
  menu.appendChild(nextPublisher);
}
