import {useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import {signinContext} from "~/context/signinContext";

export function isLogged(isFrom:string) {
    const navigate = useNavigate()
    // @ts-ignore
    const [signin, setSignin] = useContext(signinContext);

    useEffect(() => {
        if (!signin) {
            switch(isFrom) {
                case 'backoffice':
                    navigate('/backoffice/login');
                    break;

                case 'user':
                    navigate('/authentication');
                    break;
            }
        }
    }, [signin]);
}