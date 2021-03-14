import React from 'react'
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const Main = () => {
    return (
        <div>
            <Link to="/login">
                <Button variant="contained" color="primary">Login</Button>
            </Link>
        </div>
    )
}

export default Main;
