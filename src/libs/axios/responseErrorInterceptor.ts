import { AxiosError } from "axios";
import { Token } from "src/libs/token/session";
import { ACCESS_TOKEN,REFRESH_TOKEN,REQUEST_TOKEN } from "src/constants/token/token.constants";
import { CustomAxios } from "src/libs/axios/customAxios";
import { refresh } from "src/api/login/login.api";
import { errorHandler } from "src/libs/axios/errorHandler";

let isRefreshing = false;

let refreshSubscribers: ((accessToken: string) => void)[] = [];

const onTokenRefreshed = (accessToken: string) => {
    refreshSubscribers.map((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback: (accessToken: string) => void) => {
    refreshSubscribers.push(callback);
};


export const responseErrorInterceptor = async (error: AxiosError) => {
    if (error.response) {
        const {
            config: originalRequest,
            response: { status },
        } = error;

        const usingAccessToken = Token.getToken(ACCESS_TOKEN);
        const usingRefreshToken = Token.getToken(REFRESH_TOKEN);

        if (
            usingAccessToken !== undefined &&
            usingRefreshToken !== undefined &&
            status === 401
        ) {
            if (!isRefreshing) {
                isRefreshing = true;

                if (usingRefreshToken === null) {
                    await errorHandler(error);
                    return Promise.reject(error);
                }

                try {
                    const { data: newAccessToken } = await refresh({
                        refreshToken: usingRefreshToken,
                    });

                    CustomAxios.defaults.headers.common[REQUEST_TOKEN] = `Bearer ${newAccessToken}`;

                    Token.setToken(ACCESS_TOKEN, newAccessToken.accessToken);
                    isRefreshing = false;

                    onTokenRefreshed(newAccessToken.accessToken);
                } catch (err) {
                    await errorHandler(err as AxiosError);
                    Token.clearToken();
                    // 로그인 경로는 적절히 수정
                    window.location.href = "/sign";
                    return Promise.reject(err);
                }
            }

            return new Promise((resolve) => {
                addRefreshSubscriber((accessToken: string) => {
                    originalRequest!.headers![REQUEST_TOKEN] = `Bearer ${accessToken}`;
                    resolve(CustomAxios(originalRequest!));
                });
            });
        }
    }

    await errorHandler(error);
    return Promise.reject(error);
};