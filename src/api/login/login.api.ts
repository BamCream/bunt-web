import {AuthResponse, Login, NewAccessToken} from "src/types/login/login.type";
import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const login = async (loginData: Login): Promise<AuthResponse> => {
    const {data} = await axios.post<AuthResponse>(`${SERVER_URL}/login`, loginData);
    return data;
};

export const refresh = async (refreshToken: { refreshToken: string | null }): Promise<NewAccessToken> => {
    // reissue는 적절한 경로로 수정
    const {data} = await axios.post<NewAccessToken>(`${SERVER_URL}/reissue`, refreshToken);
    return data;
};