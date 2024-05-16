import { useState } from "react"
import toast from "react-hot-toast"
import { commentsGet as commentsGetRequest } from "../../services"

export const useComments = () => {
    const [comments, setComments] = useState([])

    const getComments = async (idPublication) => {
        const commentsData = await commentsGetRequest(idPublication)
        if (commentsData.error) {
            return toast.error(
                commentsData.e?.response?.data || 'Error ocurred when reading comments'
            )
        }
        console.log(commentsData)
        return setComments(commentsData.data.comments)
    }
    return {
        comments,
        getComments,
        allComments: comments?.comments,
    }
}
