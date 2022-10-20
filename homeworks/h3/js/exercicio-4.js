const checkin = document.getElementById("s4-checkin");
const checkout = document.getElementById("s4-checkout");
const extend = document.getElementById("s4-extend");
const modal = document.getElementById("s4-modal");

const useModalText = ({ modalName, type, strong, text, optional }) => {
  modalName.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <div>
                <strong>${strong}</strong> ${text}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            ${optional ? optional : ""}
        </div>
        `;
};

const hotelOut = () => {
  useModalText({
    modalName: modal,
    type: "danger",
    strong: "Atenção!",
    text: "Você saiu do hotel e para entrar será necessário fazer um novo checkout.",
  });
};

checkin.addEventListener("click", () => {
  useModalText({
    modalName: modal,
    type: "success",
    strong: "Parabéns!",
    text: "Você entrou no hotel.",
  });
});

checkout.addEventListener("click", () => {
  useModalText({
    modalName: modal,
    type: "warning",
    strong: "Atenção!",
    text: "Você deseja mesmo fazer o checkout do hotel?",
    optional: `<input onclick="hotelOut();" type="button" class="mt-2 btn btn-danger" id="hotel-out" value="SIM">`,
  });
});

const extendTime = (e) => {
  const input = document.getElementById("hotel-extend");
  const alert = document.getElementById("extend-alert");
  const value = input.value;

  if (value === "") {
    useModalText({
      modalName: alert,
      type: "danger",
      strong: "Atenção!",
      text: "Você precisa informar um valor válido.",
    });
  } else {
    e.setAttribute("disabled", "disabled");
    useModalText({
      modalName: alert,
      type: "success",
      strong: "Parabéns!",
      text: "Você estendeu o seu tempo no hotel.",
    });
  }
};

extend.addEventListener("click", () => {
  useModalText({
    modalName: modal,
    type: "primary",
    strong: "Atenção!",
    text: "Deseja estender sua estadia por quanto tempo?",
    optional: `
            <div id="extend-alert"></div>
            <div class="w-100 s4-hotel-estender">
                <input type="number" class="form-control outro" min="1" id="hotel-extend" value="1" placeholder="Por quanto tempo? Digite.">
                <input onclick="extendTime(this);" type="button" class="form-control outro" id="hotel-extend-button" value="Estender">
            </div>
        `,
  });
});
