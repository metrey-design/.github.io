/* -------------------------------------------------------
   modal.js — charge la modale globale + gère open/close
-------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", async () => {

  // 1. Inject modal.html dans la page
  const container = document.createElement("div");
  container.id = "modal-container";
  document.body.appendChild(container);

  try {
    const modalHTML = await fetch("/portfolio/components/modal.html").then(r => r.text());
    container.innerHTML = modalHTML;
  } catch (e) {
    console.error("Erreur chargement modal.html", e);
  }

  // 2. Logique d'ouverture / fermeture
  const openers = document.querySelectorAll(".js-open-modal");

  openers.forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("modal").classList.add("show");
    });
  });

  // Délégation pour les éléments chargés dynamiquement
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("js-close-modal") ||
        e.target.classList.contains("modal-backdrop")) {
      document.getElementById("modal").classList.remove("show");
    }
  });

});
