const contributeForm = document.querySelector('#contributeForm');
contributeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    send();
});

function send() {
    var data = {
        firstName: getFormData('firstName'),
        lastName: getFormData('lastName'),
        username: getFormData('username'),
        email: getFormData('email'),
        name: getFormData('planetName'),
        description: getFormData('planetDescription'),
        colorPicker: getFormData('colorPicker'),
        planetType: getFormData('planetType'),
        material: getFormData('material'),
        solarSystem: getFormData('solarSystem'),
        canSustainEarthLife: getFormData('canSustainEarthLife'),
        distanceToEarth: getFormData('distanceToEarth'),
        mass: getFormData('mass'),
        gravity: getFormData('gravity'),
        acceleration: getFormData('acceleration'),
        density: getFormData('density'),
        image: getFormData('imgLink'),
        discoveredOn: getFormData('discoveredOn'),
        discoveredBy: getFormData('discoveredBy'),
        facts: getFormData('facts'),
    };
    fetch('http://localhost:3000/contribute', {
        method: 'post',
        redirect: 'follow',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (response.redirected) {
                window.location.href = response.url;
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

function getFormData(inputId) {
    return document.querySelector('#contributeForm #' + inputId).value;
}
