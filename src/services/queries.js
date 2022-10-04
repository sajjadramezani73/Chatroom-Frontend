import service from "./Api";

export const signupUser = async (params) => {
    const res = await service.post(`/api/users/singup`, { ...params });
    return res?.data;
};

export const loginUser = async (params) => {
    const res = await service.post(`/api/users/login`, { ...params });
    return res?.data;
};