// https://jsonplaceholder.typicode.com/photos
const cards = document.getElementById("cards");
const apiUrl = "https://jsonplaceholder.typicode.com/photos?_limit=10";

/*
                <div class="card">
                    <img src="https://via.placeholder.com/150/92c952">
                    <div>
                        <button class="btn"><i class="fa-regular fa-comment"></i>Comentários</button>
                        <p>accusamus beatae ad facilis cum similique qui sunt</p>
                    </div>
                </div>
*/

const getCards = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();

  try {
    if (data !== null) {
      data.map((e) => {
        cards.innerHTML += `
                <div class="card">
                    <img src="${e.thumbnailUrl}">
                    <div>
                        <button class="btn"><i class="fa-regular fa-comment"></i>Comentários</button>
                        <p>${e.title}</p>
                    </div>
                </div>
            `;
      });
    }
  } catch (err) {
    console.log(err);
  }
};

getCards();
