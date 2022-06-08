import mongoose from 'mongoose';
import Planet from './models/planet.js';

class PlanetaryEntity {
    #db = null;

    async connect() {
        const mongoDB =
            'mongodb+srv://marcelAdmin:hOCkNs3iaoARg1HS@cluster0.wjwwl.mongodb.net/planetary?retryWrites=true&w=majority';

        await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        //Get the default connection
        this.#db = mongoose.connection;
    }

    async getAll() {
        const all = await Planet.find();
        return all;
    }

    async getRandom() {
        const all = await this.getAll();
        const randomPlanet = all[Math.floor(Math.random() * all.length)];
        return randomPlanet;
    }

    async get(id) {
        const pl = await Planet.findById(id);
        return pl;
    }

    async search(sq) {
        const planet = await Planet.findOne({ name: sq });
        return planet;
    }

    async add(planet) {
        const newPlanet = new Planet(planet);
        try {
            await newPlanet.save();
            return newPlanet._id;
        } catch (err) {
            console.log('Cannot add planet');
            console.log(err);
            return false;
        }
    }
}
export default PlanetaryEntity;
