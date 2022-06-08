const searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    search();
});

function search() {
    const searchTxt = document.querySelector('#searchText');
    fetch('http://localhost:3000/search', {
        method: 'post',
        redirect: 'follow',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            sq: searchTxt.value,
        }),
    })
        .then((response) => {
            if (response.redirected) {
                window.location.href = response.url;
            }
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
