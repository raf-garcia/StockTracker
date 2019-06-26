import {ERROR} from '../constants/actionTypes';


const handleError = (message=null) => (
    {
        type: ERROR,
        message
    }
);


export default handleError;