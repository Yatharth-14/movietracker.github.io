function addMovie() {
  let imageUrl = "";
  let title = '';
  const value = document.querySelector("input").value;
  console.log(value);

  const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${value}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2b54cf3a03msh657eb0915fab890p15b9e9jsndba84a6a5989",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  try {
    fetch(url, options)
    .then((resolve) => {
      return resolve.json();
    })
    .then((data) => {
      imageUrl = data.d[0].i.imageUrl;
      title = data.d[0].l;
    });
    
  } catch (error) {
    alert("Movie Not Found");
  }
  

  setTimeout(() => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movieItem");
    const poster = document.createElement("img");
    poster.src = imageUrl;
    movieDiv.appendChild(poster);
    const movietitle = document.createElement("h3");
    movietitle.innerText = title;
    movieDiv.appendChild(movietitle);
    const movieContainer = document.querySelector(".moviesContainer");
    movieContainer.appendChild(movieDiv);
    document.querySelector("input").value = "";
  }, 3000);
}
