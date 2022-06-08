import mongoose from 'mongoose';

class PlanetaryEntity {
    #db = null;

    async connect() {
        const mongoDB =
            'mongodb+srv://marcelAdmin:hOCkNs3iaoARg1HS@cluster0.wjwwl.mongodb.net/?retryWrites=true&w=majority';

        await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        //Get the default connection
        this.#db = mongoose.connection;
    }

    getAll() {
        return [
            {
                link: '/planet',
                img: 'https://w.wallhaven.cc/full/eo/wallhaven-eo3m7k.jpg',
                alt: 'my planet',
                title: 'my planet',
                content:
                    'this is some kind of textthis is some kind of textthis is some kind of textthis is some kind of textthis is some kind of text',
            },
            {
                link: '/planet',
                img: 'https://w.wallhaven.cc/full/eo/wallhaven-eo3m7k.jpg',
                alt: 'my planet',
                title: 'my planet',
                content:
                    'this is some kind of textthis is some kind of textthis is some kind of textthis is some kind of textthis is some kind of text',
            },
        ];
    }

    getRandom() {
        const all = this.get(1);
        // const randomPlanet = all[Math.floor(Math.random() * all.length)];
        return all;
    }

    get(id) {
        return {
            id: id,
            img: 'https://w.wallhaven.cc/full/eo/wallhaven-eo3m7k.jpg',
            name: 'Earth',
            description: 'this is the description',
            color: 'color',
            type: 'type',
            material: 'material',
            solarSystem: 'solar system',
            canSustainEarthLife: 'yes',
            distanceToEarth: 'distance',
            mass: 'mass',
            gravity: 'gravity',
            acceleration: 'acc',
            density: 'density',
            discoveredOn: 'on',
            discoveredBy: 'by',
            facts: 'facts',
        };
    }

    search(sq) {
        console.log('sq: ' + sq);
        return this.get(1);
    }

    add(planet) {
        console.log('planet: ' + planet);
        return true;
    }
}
export default PlanetaryEntity;
