// function ShowSelection()
// {
//   var textComponent = document.getElementById('Editor');
//   var selectedText;
//
//   if (textComponent.selectionStart !== undefined)
//   {// Standards Compliant Version
//     var startPos = textComponent.selectionStart;
//     var endPos = textComponent.selectionEnd;
//     selectedText = textComponent.value.substring(startPos, endPos);
//   }
//   else if (document.selection !== undefined)
//   {// IE Version
//     textComponent.focus();
//     var sel = document.selection.createRange();
//     selectedText = sel.text;
//     console.log
//   }

// function sendRequest(search) {
//   return new Promise((resolve, reject) => {
//     var req = new XMLHttpRequest();
//     req.open('GET', `http://www.omdbapi.com/?s=${search}&apikey=dc6da79d`, true);
//     req.onreadystatechange = function (aEvt) {
//       if (req.readyState == 4) {
//         if (req.status == 200) {
//           let result = JSON.parse(req.responseText);
//           resolve(result.Search);
//         }
//         else
//           reject("Error loading page\n");
//       }
//     };
//     req.send(null);
//   });
// }
////////////////////////

let page;
if(page === undefined || page === "NaN"){page = 1;}

var search;
if(search === undefined || search === "NaN"){search = "Man";}


async function getMovieTitle(page) {
 const url = `https://www.omdbapi.com/?s=${search}&page=${page}&apikey=2ebab628`;
 const res = await fetch(url);
 const data = await res.json();
 return data;
}

function ShowSelection(){
let input = document.querySelector('input');
search = input.value;
console.log(input.value);
getMovieTitle(page)
.then(render)
.catch(e => console.log(e));
}


    var count=4;
    function next(){}
    function prev() {
      count--;
    }

  getMovieTitle(page)
  .then(render)
  .catch(e => console.log(e));

  function pages() {
    count++;
    if(count%10==0){
    page++;
    getMovieTitle(page)
    .then(render)
    .catch(e => console.log(e));}
  }


  function render(data) {
    data.Search.forEach(item => {
      let img = document.createElement('img');
      img.alt = item.Title;
      img.src = item.Poster;
      img.id = item.imdbID;
      img.year = item.Year;
      img.reit = item.imdbRating;
      // console.log(item.imdbID);

      swiper.appendSlide([
      '<div class="swiper-slide"><a class="onecard" href = "https://www.imdb.com/title/' + img.id + '">'+ img.alt +'</a><img class = "poster" alt="oops" src ="' +img.src + '"></img><div class="year">'+ img.year +'</div><div class="rate"><img class = "mark" alt="" src ="resources/star.png"></img><a href = "https://www.omdbapi.com/?i=tt0371746&apikey=2ebab628">'+img.reit+'</a></div></div>'
        ]);
    });
  }
