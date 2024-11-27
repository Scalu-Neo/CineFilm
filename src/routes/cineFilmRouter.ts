import { Router } from "express";
import cineFilmController from '../controller/cineFilmController';


const router: Router = Router();

router.post('/films', cineFilmController.createNewFilm);
router.get('/films', cineFilmController.getAllFilms);
router.get('/films/:id', cineFilmController.getFilmById);
router.put('/films/:id', cineFilmController.updateFilm);
router.delete('/films/:id', cineFilmController.deleteFilm);

export default router;