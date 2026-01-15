const allH5 = document.querySelectorAll("h5");

allH5.forEach((h5) => {
  h5.addEventListener("click", function () {
    let numero = Math.floor(Math.random() * 3) + 1;

    switch (numero) {
      case 1:
        this.style.color = "red";
        break;
      case 2:
        this.style.color = "blue";
        break;
      case 3:
        this.style.color = "green";
        break;

      default:
        break;
    }
  });
});
