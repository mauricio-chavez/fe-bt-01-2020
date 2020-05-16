const section = document.querySelector('#section');

async function retrievePosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    data.forEach(post => {
      const article = document.createElement('article');
      article.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      section.appendChild(article);
    });
  } catch {
    alert('Error al obtener artículos');
  }
}

retrievePosts();
