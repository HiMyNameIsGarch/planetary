function searchForPlanet() {
    const searchTxt = document.querySelector('#searchText');
    fetch('http://localhost:3000/search', {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            sq: searchTxt.value,
        }),
    })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
    searchTxt.value = '';
}

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((element) => {
    if (element.pathname == activePage) {
        element.classList.add('active');
    }
});
