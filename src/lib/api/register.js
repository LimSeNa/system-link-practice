import client from "./client";

export const registerPost = ({email, password, nickname}) =>
    client.post('api/signup', ({email, password, nickname}));