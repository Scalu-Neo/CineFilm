import CineFilm, {ICineFilm} from "../models/cineFilmModel";
import { CreateFilmDto } from "../dto/cineFilmDto";

class CineFilmService {

    public async createFilm(filmData: CreateFilmDto):Promise<ICineFilm> {
        const newFilm = new CineFilm(filmData);
        return await newFilm.save();
    }

    public async getAllFilm():Promise<ICineFilm[]> {
        return await CineFilm.find();
    }

    public async getFilm(id: string):Promise<ICineFilm | null> {
        return await CineFilm.findById(id);
    }

    public async updateFilm(id: string, filmData: CreateFilmDto):Promise<ICineFilm | null> {
        return await CineFilm.findByIdAndUpdate(id, filmData, {new: true});
    }

    public async deleteFilm(id: string):Promise<ICineFilm | null> {
        return await CineFilm.findByIdAndDelete(id);
    }
}
export default new CineFilmService();