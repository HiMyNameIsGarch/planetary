import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const planetSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    name: String,
    description: String,
    colorPicker: String,
    planetType: String,
    material: String,
    solarSystem: String,
    canSustainEarthLife: String,
    distanceToEarth: String,
    mass: String,
    gravity: String,
    acceleration: String,
    density: String,
    image: String,
    discoveredOn: String,
    discoveredBy: String,
    facts: String,
});

export default model('Planet', planetSchema);
