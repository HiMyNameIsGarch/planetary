function sendForm() {
    var data = {
        firstName: getFormData('firstName'),
        lastName: getFormData('lastName'),
        username: getFormData('username'),
        email: getFormData('email'),
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
        discoveredOn: getFormData('discoveredOn'),
        discoveredBy: getFormData('discoveredBy'),
        facts: getFormData('facts'),
    };
    fetch('http://localhost:3000/contribute', {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
}

function getFormData(inputId) {
    return document.querySelector('#contributeForm #' + inputId).value;
}
