import { Request, Response, NextFunction } from 'express';
import cineFilmService from '../service/cineFilmService';
import { CreateFilmDto } from '../dto/cineFilmDto';
import { validateDataFilm } from '../utils/cineFilmValidation';
import { ICineFilm } from '../models/cineFilmModel';
import AppError from '../utils/appError';

class FilmController {

  public async createNewFilm(req: Request, res: Response, next: NextFunction): Promise<void> {

    try {
      const { titulo, autor, faixaEtaria, genero }: CreateFilmDto = req.body;
      const newFilm: CreateFilmDto = { titulo, autor, faixaEtaria, genero };

      validateDataFilm(newFilm);

      const createdFilm: ICineFilm = await cineFilmService.createFilm(newFilm);
      res.status(201).json({ message: "Filme criado com sucesso", createdFilm });

    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Erro no servidor'});
      }
    }
  }

  public async getAllFilms(req: Request, res: Response, next: NextFunction): Promise<void> {

    try {
      const films = await cineFilmService.getAllFilm();
      res.status(200).json(films);

    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Erro no servidor'});
      }
    }
  }

  public async getFilmById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const film = await cineFilmService.getFilm(id);

      if (!film) {
        throw new AppError("Filme não encontrado", 404);
      }

      res.status(200).json(film);
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Erro no servidor' });
      }
    }
  }

  public async updateFilm(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const { titulo, autor, faixaEtaria, genero }: CreateFilmDto = req.body;
      const updatedFilm: CreateFilmDto = { titulo, autor, faixaEtaria, genero };

      validateDataFilm(updatedFilm);

      const film = await cineFilmService.updateFilm(id, updatedFilm);

      if (!film) {
        throw new AppError("Filme não encontrado", 404);
      }

      res.status(200).json(film);
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Erro no servidor' });
      }
    }
  }

  public async deleteFilm(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const result = await cineFilmService.deleteFilm(id);

      if (!result) {
        throw new AppError("Filme não encontrado", 404);
      }

      res.status(200).json({ message: 'Filme deletado com sucesso' });
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Erro no servidor' });
      }
    }
  }
}

export default new FilmController();
