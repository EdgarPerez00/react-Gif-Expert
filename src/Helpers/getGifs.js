export const getGifs = async( category ) => {

    const limit = 10;

    const apiKey = 'hDlfsrdJWxQz03ePdsdl2jZJQ45W5lw3';

    const baseUrl = 'https://api.giphy.com/v1/gifs/search';

    const url = `${baseUrl}?api_key=${apiKey}&q=${category}&limit=${limit}`;

    const response = await fetch(url);

    const {data} = await response.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}