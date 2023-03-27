import httpRequest from "src/utils/httpRequest";

export const singleApi = async (id) => {
    try {
        const res = await httpRequest.get(`data/${id}`);
        return res.data;
    } catch (error) {
        return error
    }
};
