import mongoose, {Schema, Document} from 'mongoose';

export interface ICineFilm extends Document {

    titulo: string;
    autor: string;
    faixaEtaria: string;
    genero: string;
}

const ICineFilm: Schema = new Schema({

    titulo: {type: String, required: true},
    autor: {type: String, required: true},
    faixaEtaria: {type: String, required: true},
    genero: {type: String, required: true}
});

const CineFilm = mongoose.model<ICineFilm>('CineFilm', ICineFilm);

export default CineFilm;