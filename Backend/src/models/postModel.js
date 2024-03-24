import {Schema, model} from 'mongoose';

const postSchema = new Schema ({

    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['Uncategorize', 'Guia de viajes', 'Guia de ciudades', 'Paises', 'Itinerarios','Tips', 'Consejos', 'Aerolineas']
    },

});

export default model("Post", postSchema);