import { useEffect, useState } from "react";

const useToken = (email) =>{
    const [token, setToken] = useState('');
    useEffect(() => {
        if(email){
            fetch(`http://localhost:9000/jwt?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                    setToken(data.accessToken);
                }
                console.log(data)
            });

        }
    }, [email]);
    return [token];
}

export default useToken;