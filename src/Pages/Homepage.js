import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    const navigate = useNavigate();

  return (
    <>
    <div style={{ margin: "10px" }} >
    <Button variant="outlined" onClick={() => navigate("/add")} >Add Employee</Button>
    <div>Employee Homepage</div>
    </div>

    </>
  )
}

export default Homepage
