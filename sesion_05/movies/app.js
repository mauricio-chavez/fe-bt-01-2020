const form = document.querySelector('#movie-form')
const search = document.querySelector('#search')
const movies = document.querySelector('#movies')

form.addEventListener('submit', e => {
  e.preventDefault()
  const searchValue = search.value
  fetch(`http://www.omdbapi.com/?apikey=5a4feaa&s=${searchValue}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data.Error) {
        movies.innerHTML = `<strong style="color: red">${data.Error}</strong>`
      } else {
        movies.innerHTML = data.Search.map(movie => `
          <article>
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://www.digopaul.com/wp-content/uploads/related_images/2015/09/08/placeholder_2.jpg'}" />
            <h1>${movie.Title}</h1>
            <p>Year: ${movie.Year} </p>
          </article>
        `).join('')
      }
    })
})