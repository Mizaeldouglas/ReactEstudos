import axios from 'axios';

const request = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
})

export const api = {
    getAlbums:async () => {
        let req = await request('/albums');
        return req.data;
    },
    getAlbum:async (id:string) => {
        let req = await request(`/albums/${id}`);
        return req.data;
    },
    getPhotoFromAlbum:async (id:string) => {
        let req = await request(`/albums/${id}/photos`);
        return req.data;
    },
    getPhoto:async (id:string) => {
        let req = await request(`/photos/${id}`);
        return req.data;
    }

};