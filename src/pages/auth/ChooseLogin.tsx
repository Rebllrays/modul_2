import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import './auth.css'
import {useNavigate} from 'react-router-dom'


const ChooseLogin = () => {
    const navigate = useNavigate()
    return (
        <Grid sx={{display:'flex', flexDirection: 'column', alignItems: 'center', height: '80vh', justifyContent: 'center' }}>
            <h1>Choose Your Status:</h1>

           <div className='block__btn__login'>
            <Button
            onClick={()=>navigate('/mentor-login')}>Mentor</Button>
            <Button
            onClick={()=>navigate('/user-login')}>User</Button>
            </div>
        </Grid>
    );
};

export default ChooseLogin;