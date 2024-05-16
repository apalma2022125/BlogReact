import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/blog/v1',
    timeout: 5000
})

export const getPublications = async () => {
    try{
        return await apiClient.get('/publication/')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getOnePublication = async (publicationId) => {
    try{
        const response = await apiClient.get(`/publication/one/${publicationId}`);
        return response;
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const commentPost = async (publicationId, autorName, date, commentText) => {
    try{
        return await apiClient.post(`/comment/create/${publicationId}`, { autorName, date, commentText })
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const commentsGet = async (idPublication) => {
    try{
        return await apiClient.get(`/comment/${idPublication}`)
    }catch(e){
        console.log(idPublication)
        return{
            error: true,
            e
        }
    }
}

export const commentPut = async (data) => {
    try{
        return await apiClient.put('/comment/', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const commentDelete = async (commentId) => {
    try{
        return await apiClient.delete('/comment/', commentId)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

const checkResponseStatus = (e) => {
    const responseStatus = e?.response?.status

    if(responseStatus){
        e,
        (responseStatus === 401 || responseStatus === 403)
    }
}
