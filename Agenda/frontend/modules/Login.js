import validator from "validator";

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.messageContainer = document.createElement("div");
    this.messageContainer.classList.add("message-container");
    this.form.appendChild(this.messageContainer);

    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validate(e);
    });
  }

  displayMessage(message) {
    this.messageContainer.innerHTML = `<p>${message}</p>`;
  }

  validate(e) {
    const el = e.target;
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');
    let error = false;

    this.displayMessage = "";

    if (!validator.isEmail(emailInput.value)) {
      this.displayMessage("O email inserido não é válido.");
      error = true;
    }

    if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
      this.displayMessage("A senha precisa conter entre 3 e 50 caracteres.");
      error = true;
    }

    if (!error) el.submit();
  }
}
