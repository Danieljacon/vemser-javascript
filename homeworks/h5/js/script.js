const cards = document.getElementById("cards");
const comments = document.getElementById("comments");
const cardImage = document.getElementById("card-image");
const formComments = document.getElementById("form-comments");
const inputEmail = document.getElementById("input-email");
const inputMessage = document.getElementById("input-mensagem");
const apiUrl = "https://jsonplaceholder.typicode.com/photos?_limit=20";
let id = 1;
let commentsArray = [
  {
    id: 0,
    idMessage: 2,
    email: "danielcamillo2020@gmail.com",
    message: "testando",
  },
  {
    id: 1,
    idMessage: 1,
    email: "danielcamillo2020@gmail.com",
    message: "testsdasfdfsaando",
  },
];

const addComments = (e, commentsArray, id) => {
  e.preventDefault();

  const email = inputEmail.value;
  const message = inputMessage.value;

  if (email === "" || message === "") {
    alert("Preencha todos os campos");
    return;
  } else {
    commentsArray.push({
      id: commentsArray.length,
      idMessage: id,
      email: email,
      message: message,
    });
  }

  comments.innerHTML += `
              <div>
                  <small><i class="fa-regular fa-envelope"></i>${email}</small>
                  <p>${message}</p>
              </div>
      `;

  inputMessage.value = "";
};

const getCards = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();

  const cardSelected = (e) => {
    const card = e.target;
    id = parseInt(card.getAttribute("data-id"));

    const cardSelected = data.filter((item) => item.id === id);
    cardImage.src = cardSelected[0].url;

    const commentsSelected = commentsArray.filter(
      (item) => item.idMessage === id
    );
    comments.innerHTML = "";
    commentsSelected.map((item) => {
      comments.innerHTML += `
                <div>
                    <small><i class="fa-regular fa-envelope"></i>${item.email}</small>
                    <p>${item.message}</p>
                </div>
        `;
    });
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

      formComments.addEventListener("submit", (e) =>
        addComments(e, commentsArray, id)
      );
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
