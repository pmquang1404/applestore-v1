import httpRequest from 'src/utils/httpRequest';


export const search = async (name_like) => {
    try {
        const res = await httpRequest.get('data', {
            params: {
                name_like,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
