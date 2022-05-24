import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Spinner from '../Spinner/Spinner';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user?.email);
    const navigate = useNavigate();

    if (loading || adminLoading) {
        return <Spinner></Spinner>
    }

    if (!admin) {

        return navigate('/');
    }

    return children;
};

export default RequireAdmin;