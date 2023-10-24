import  { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContest } from '../AuthProvider';
import PropTypes from 'prop-types';

const PriveteRoutes = ({children}) => {
    const {user, loader} = useContext(AuthContest)
    if(loader){
        return <span className="loading loading-spinner loading-lg"></span>

    }
    if(user){
       return children;
    }
    return <Navigate to="/login"></Navigate>
};
PriveteRoutes.propTypes ={
    children:PropTypes.node
}
export default PriveteRoutes;