const cards = document.getElementById("cards");
const comments = document.getElementById("comments");
const cardImage = document.getElementById("card-image");
const formComments = document.getElementById("form-comments");
const inputEmail = document.getElementById("input-email");
const inputMessage = document.getElementById("input-mensagem");
const apiUrl = "https://jsonplaceholder.typicode.com/photos?_limit=3";
let id = 1;

const addComments = (e) => {
  e.preventDefault();
  const email = inputEmail.value;
  const message = inputMessage.value;

  if (message !== "") {
    comments.innerHTML += `
                <div>
                    <small><i class="fa-regular fa-envelope"></i>${email.value}</small>
                    <p>${message.value}</p>
                </div>
            `;
  } else {
    alert("Preencha os campos");
  }
};

const getCards = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();

  const cardSelected = (e) => {
    const card = e.target;
    id = parseInt(card.getAttribute("data-id"));
    // console.log(id);

    const cardSelected = data.filter((item) => item.id === id);
    console.log(cardSelected);
    // cardImage change image
    cardImage.src = cardSelected[0].url;
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
      throw "Não foi possível carregar os dados";
    }
  } catch (err) {
    cards.innerHTML = `
        <h1>${err}</h1>
    `;
  }
};

getCards();
