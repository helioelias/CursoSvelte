import "@testing-library/jest-dom/extend-expect";
import  { render } from "@testing-library/svelte";
import MovieCard from "../Movies/MovieCard.svelte";
import { store, INITIAL_STATE } from '../../store';
import moviesMock from '../../mocks/movies.json';

const setStore = ({ movies }) => {
    store.set({
        ...INITIAL_STATE,
        wasSearched: true,
        movies
    });
}

describe("MovieCard", () => {


    it("renders movie card with all relevant content", () => {
        
        const [movie] = moviesMock.results;
        movie.friendly_date = new Date(movie.release_date).toLocaleDateString();

        const { getByText } = render(MovieCard, { movie });

        expect(getByText('Star Wars')).toBeInTheDocument();

        const exactAssertions = [
            '13774', 
            '8.2', 
            '24/05/1977', 
            'held hostage by the evil Imperial'
        ];

        exactAssertions.forEach(item => {
            expect(getByText(item, {exact: false})).toBeInTheDocument();
        });

    });

    it("renders the movie poster with proper data", () => {
        const [movie] = moviesMock.results;
        const { getByAltText, get } = render(MovieCard, { movie });     

        const image = getByAltText(`Poster: ${movie.title}`);

        expect(image).toBeInTheDocument();        
        expect(image).toHaveProperty('src', 'https://image.tmdb.org/t/p/original/kN0s7VCXZinNXP9qV0yDHOVrZn3.jpg');
    });


});