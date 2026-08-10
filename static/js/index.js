$(document).ready(function() {
  // Navbar burger toggle
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // BibTeX toggle for paper cards
  $(".bibtex-toggle").click(function() {
    var bibtex = $(this).closest(".paper-card").find(".bibtex-content");
    bibtex.toggleClass("visible");
    $(this).text(bibtex.hasClass("visible") ? "Hide BibTeX ▲" : "Show BibTeX ▼");
  });
});
