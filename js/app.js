// ADD A NEW CLASS TO NAV-LINKS WHEN ICON IS CLICKED

function navBar() {

    let links = document.getElementById("links");

    if(links.className === "nav-links") {
        links.className += " responsive";
    } else {
        links.className = "nav-links";
    }
}