/* funksjon for å endre visning av menyen på mobil av og på */
function endreVisning() {
    let x = document.getElementById("navbar");
    if (x.className === "list mobile-menu") {
      x.className = "list";
    } else {
      x.className = "list mobile-menu";
    }
    let y = document.getElementById("nav-icon");
    if (y.className === "open") {
        y.className = "";
    } else {
        y.className = "open";
    }
}