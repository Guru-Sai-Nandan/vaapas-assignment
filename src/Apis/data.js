export const fetchMovies = async (query) => {
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    if (!response.ok) {
        throw new Error('Failed to fetch');
    }
    const data = await response.json();
    return data.docs;
};

export const fetchRandomDogImage = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    if (!response.ok) {
        throw new Error('Failed to fetch');
    }
    const data = await response.json();
    return data.message;
};