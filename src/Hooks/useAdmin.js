import { useEffect, useState } from "react"

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://lit-mountain-23720.herokuapp.com/user/admin/${email}`)
                .then(res => res.json())
                .then(data => {

                    setIsAdmin(data.admin);
                    setAdminLoading(false);

                });
        }
    }, [email]);

    return [isAdmin, adminLoading];
}
export default useAdmin;