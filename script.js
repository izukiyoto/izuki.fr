document.addEventListener("DOMContentLoaded", function () {
  // Gestion du menu hamburger
  const hamburger = document.querySelector(".menu-hamburger");
  const navLinks = document.querySelector(".liens-navigation");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("actif");
  });

  // Ajout de l'événement pour les boutons "Commander"
  const buttons = document.querySelectorAll(".bouton-optimisation");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const service = this.getAttribute("data-service");
      const price = this.getAttribute("data-price");

      localStorage.setItem("selectedService", service);
      localStorage.setItem("selectedPrice", price);

      window.location.href = "panier.html";
    });
  });

  // Gestion de la fenêtre modale pour le paiement par carte bancaire
  const modal = document.getElementById("modale");
  const btn = document.getElementById("carte-bancaire");
  const span = document.getElementsByClassName("fermer")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  document
    .getElementById("formulaire-carte")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      // Ajoutez ici la logique pour traiter les informations de la carte bancaire
      alert("Paiement effectué avec succès !");
      modal.style.display = "none";
    });

  // Récupération des éléments du panier depuis le stockage local et affichage
  const selectedService = localStorage.getItem("selectedService");
  const selectedPrice = localStorage.getItem("selectedPrice");

  if (selectedService && selectedPrice) {
    const cartItems = document.getElementById("elements-panier");
    cartItems.innerHTML = `
      <div class="element-panier card mb-3 p-3">
        <h3>${selectedService}</h3>
        <p>Prix: ${selectedPrice}€</p>
      </div>
    `;
  } else {
    const cartItems = document.getElementById("elements-panier");
    cartItems.innerHTML = `<p>Votre panier est vide.</p>`;
  }
});
