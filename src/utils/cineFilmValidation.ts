import { CreateFilmDto } from "../dto/cineFilmDto";
import AppError from "./appError";

export function validateDataFilm(filmData: CreateFilmDto): void {
    const faixaEtariaValida = ["Livre", "L", "10", "12", "14", "16", "18"];
    const generosValidos = ["Ação", "Comédia", "Aventura", "Drama", "Ficção Científica", "Animação", "Suspense", "Terror"];
    const errors: string[] = [];

    if (!filmData.titulo || filmData.titulo.trim() === '') {
        errors.push("O título do filme é obrigatório");
    }

    if (!filmData.autor || filmData.autor.trim() === '') {
        errors.push("Informe o autor do filme");
    }

    if (!faixaEtariaValida.includes(filmData.faixaEtaria)) {
        errors.push("Insira uma faixa etária válida para o filme: Livre, 10, 12, 14, 16 ou 18");
    }

    if (!generosValidos.includes(filmData.genero)) {
        errors.push("Insira um gênero válido conforme as opções: Ação, Aventura, Comédia, Drama, Terror, Animação, Suspense, Ficção Científica");
    }

    // Se houver erros, lançamos uma exceção
    if (errors.length > 0) {
        throw new AppError(errors.join(', '), 400);  // Lança uma exceção com todos os erros concatenados
    }
}
