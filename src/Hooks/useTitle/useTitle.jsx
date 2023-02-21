import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `GameSpace-${title}`
    } , [title]);
};

export default useTitle;