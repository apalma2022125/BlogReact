import { useState } from "react";
import toast from "react-hot-toast";
import { getOnePublication as getOnePublicationRequest } from "../../services";

export const usePublication = () => {
    const [publication, setPublication] = useState(null);

    const getPublication = async (publicationId) => {
        const publicationData = await getOnePublicationRequest(publicationId);
        if (publicationData.error) {
            return toast.error(
                publicationData.error,
                publicationData.e?.response?.data || 'Error ocurred when reading publication'
            )
        }
        setPublication(publicationData.data.publication)
        return publicationData.data;
    }
    return {
        publication,
        getPublication,
    }
}
