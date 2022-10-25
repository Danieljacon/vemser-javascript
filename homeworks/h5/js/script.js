const cards = document.getElementById("cards");
const formComments = document.getElementById("form-comments");
const apiUrl = "https://jsonplaceholder.typicode.com/photos?_limit=10";
let id = 1;

const getCards = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();

  const cardSelected = (e) => {
    const card = e.target;
    id = parseInt(card.getAttribute("data-id"));
    console.log(id);
  };

  try {
    if (data !== null) {
      data.map((e) => {
        cards.innerHTML += `
                <div class="card">
                    <img src="${e.thumbnailUrl}">
                    <div>
                        <button class="btn" data-id="${e.id}"><i class="fa-regular fa-comment"></i>Comentários</button>
                        <p>${e.title}</p>
                    </div>
                </div>
            `;
      });

      const getByDataId = document.querySelectorAll("[data-id]");
      getByDataId.forEach((e) => {
        e.addEventListener("click", cardSelected);
      });
    } else {
        throw ("Não foi possível carregar os dados");
    }
  } catch (err) {
    cards.innerHTML = `
        <h1>${err}</h1>
    `;
  }
};

getCards();
