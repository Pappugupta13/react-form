export const download = async () => {
    const url = 'https://fb-video-reels.p.rapidapi.com/smvd/get/all?url=https://youtu.be/ofx7aqvEoP4?si=rI13CEabHOr9iWn5';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '96e48d5ce4msh9f2ec030b4261d0p120b33jsn7fe4a2b13b4a',
            'x-rapidapi-host': 'fb-video-reels.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}