import {useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import {signinContext} from "~/context/signinContext";
import useGetCurrentUserRoles from "~/hook/useGetCurrentRoles";

export function isLogged(isFrom: string) {
    const navigate = useNavigate()
    // @ts-ignore
    const [signin, setSignin] = useContext(signinContext);
    const getcurrentUserRoles = () => {
        try {
            if (signin) {
                return useGetCurrentUserRoles(signin)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (!signin) {
            switch (isFrom) {
                case 'backoffice':
                    navigate('/backoffice/login');
                    break;

                case 'user':
                    navigate('/authentication');
                    break;
            }
        } else {
            if (isFrom === 'backoffice') {
                const currentUserRoles = getcurrentUserRoles()
                console.log(currentUserRoles)
                if (currentUserRoles.length === 1) {
                    navigate("/")
                }
            }
        }
    }, [signin]);
}