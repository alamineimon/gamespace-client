import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-GameSpace`
    } , [title]);
};

export default useTitle;