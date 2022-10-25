const cards = document.getElementById("cards");
const apiUrl = "https://jsonplaceholder.typicode.com/photos?_limit=10";

const getCards = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();

  const cardSelected = (e) => {
    const card = e.target;
  };

  try {
    if (data !== null) {
      data.map((e) => {
        cards.innerHTML += `
                <div class="card">
                    <img src="${e.thumbnailUrl}">
                    <div>
                        <button class="btn" id="card-${e.id}"><i class="fa-regular fa-comment"></i>Comentários</button>
                        <p>${e.title}</p>
                    </div>
                </div>
            `;
      });
    //   document.getElementById("cards").addEventListener("click", cardSelected);
    } else {
      cards.innerHTML = `
        <h1>Houve algum problema!</h1>
    `;
    }
  } catch (err) {
    cards.innerHTML = `
        <h1>Houve algum problema!</h1>
    `;
  }
};

getCards();
