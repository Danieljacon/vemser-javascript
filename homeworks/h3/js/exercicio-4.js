const checkin = document.getElementById("s4-checkin");
const checkout = document.getElementById("s4-checkout");
const extend = document.getElementById("s4-extend");
const modal = document.getElementById("s4-modal");

const hotelOut = () => {
  modal.innerHTML = `
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Atenção!</strong> Você saiu do hotel e para entrar será necessário fazer um novo checkout.
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          `;
};

checkin.addEventListener("click", () => {
  modal.innerHTML = `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Bem vindooo!</strong> Você fez o checkout e já pode entrar no hotel.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;
});

checkout.addEventListener("click", () => {
  modal.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <div class="mb-2">
                <strong>Atenção!</strong> Você deseja mesmo fazer o checkout do hotel?
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <input onclick="hotelOut();" type="button" class="btn btn-danger" id="hotel-out" value="SIM">
        </div>
        `;
});

const extendTime = (e) => {
  const input = document.getElementById("hotel-extend");
  const alert = document.getElementById("extend-alert");
  const value = input.value;

  if (value === "") {
    alert.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Atenção!</strong> Você precisa informar um valor válido.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
  } else {
    alert.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Parabéns!</strong> Você estendeu o seu tempo no hotel.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;

    e.setAttribute("disabled", "disabled");
  }
};

extend.addEventListener("click", () => {
  modal.innerHTML = `
        <div class="alert alert-primary alert-dismissible fade show" role="alert">
            <div>
                <p>Deseja estender sua estadia por quanto tempo?</p>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div id="extend-alert"></div>
            <div class="w-100 s4-hotel-estender">
                <input type="number" class="form-control outro" min="1" id="hotel-extend" value="1" placeholder="Por quanto tempo? Digite.">
                <input onclick="extendTime(this);" type="button" class="form-control outro" id="hotel-extend-button" value="Estender">
            </div>
        </div>
        `;
});
