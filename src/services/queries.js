import service from "./Api";

export const signupUser = async (params) => {
    const res = await service.post(`/api/users/singup`, { ...params });
    return res?.data;
};