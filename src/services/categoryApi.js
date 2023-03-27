import httpRequest from "src/utils/httpRequest";

export const categoryApi = async (category) => {
  try {
    const res = await httpRequest.get(`data?category=${category}`);
    return res.data;
  } catch (error) {
    return error;
  }
};
