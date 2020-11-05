const axios = require('axios');

const getLugarLatLng = async(dir) => {


    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': 'd68e441a5emshbbda945a0c6de43p19afc9jsna9ca6db9b503' }
    });

    const resp = await instance.get();

    if (resp.data.data.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);

    }

    const data = resp.data.data[0];
    const direccion = data.name;
    const lat = data.latitude;
    const lng = data.longitude;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}