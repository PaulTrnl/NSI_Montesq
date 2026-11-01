document.addEventListener("DOMContentLoaded", () => {

  const sections = [
      document.getElementById("paradigmes"),
      document.getElementById("imperative"),
      document.getElementById("fonctionnelle"),
      document.getElementById("poo"),
      document.getElementById("projet")
  ].filter(Boolean);

  const boutonRemonter = document.getElementById("bouton-remonter");
  const boutonDescendre = document.getElementById("bouton-descendre");

  if (sections.length === 0) {
      return;
  }

  function mettreAJourBoutons() {

      const position = window.scrollY + 150;

      let indexActuel = 0;

      for (let i = 0; i < sections.length; i++) {
          if (sections[i].offsetTop <= position) {
              indexActuel = i;
          }
      }

      // Partie précédente
      if (indexActuel > 0) {
          boutonRemonter.href = "#" + sections[indexActuel - 1].id;
          boutonRemonter.style.display = "flex";
      } else {
          boutonRemonter.style.display = "none";
      }

      // Partie suivante
      if (indexActuel < sections.length - 1) {
          boutonDescendre.href = "#" + sections[indexActuel + 1].id;
          boutonDescendre.style.display = "flex";
      } else {
          boutonDescendre.style.display = "none";
      }
  }

  window.addEventListener("scroll", mettreAJourBoutons);

  mettreAJourBoutons();
});