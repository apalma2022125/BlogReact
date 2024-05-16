import { useState } from "react"
import toast from "react-hot-toast"
import { getPublications as getPublicationsRequest } from "../../services"

export const usePublications = () => {
    const [publications, setPublications] = useState([])

    const getPublications = async () => {
        const publicationsData = await getPublicationsRequest();
        console.log(publicationsData); 
        if (publicationsData.error) {
            return toast.error(
                publicationsData.error,
                publicationsData.e?.response?.data || 'Error ocurred when reading publications'
            )
        }
        setPublications(publicationsData.data)
        return publicationsData.data;
    }
    return {
        publications,
        getPublications,
        allPublications: publications?.publications,
    }
}



