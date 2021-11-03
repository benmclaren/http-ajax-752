// const button = document.querySelector("#click-me");
// console.log(button);

// button.addEventListener('click', (e) => {
//   e.currentTarget.innerText = "clicked";
//   e.currentTarget.setAttribute("disabled", "");
// });

const results = document.querySelector('#results');
console.log(results);

const input = document.querySelector('#keyword');
const search = document.querySelector('.button');
console.log(input);
console.log(search);


const fetchMovies = (keyword) => {
  fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      data.Search.forEach((result) => {
        const movieTag = `<li>
        <img src="${result.Poster}"> 
        <p>${result.Title}</p>
        </li>`;
        results.insertAdjacentHTML("beforeend", movieTag);
      });
    });
}

  search.addEventListener('click', (e) => {
    e.preventDefault();
    results.innerHTML = "";
    fetchMovies(input.value);
  });


  const searchInput = document.querySelector('#search');
  console.log(searchInput);

  const searchAlgoliaPlaces = (event) => {
    fetch("https://places-dsn.algolia.net/1/places/query", {
      method: "POST",
      body: JSON.stringify({ query: event.currentTarget.value })
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data.hits); // Look at local_names.default
      });
  };
  

  searchInput.addEventListener("keyup", searchAlgoliaPlaces);
