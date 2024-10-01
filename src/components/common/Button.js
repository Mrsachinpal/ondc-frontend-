import React from 'react';
import { Button as MUIButton, Typography, Grid } from '@mui/material';
const ButtonComponent = () => {
    return (
        <div className="bg-gray-100 p-8 h-screen">
            <Typography variant="h3" className="mb-6 text-center">Buttons</Typography>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={6} md={3}>
                    <MUIButton variant="contained" color="primary" className="w-full" disableElevation>
                        Primary
                    </MUIButton>
                </Grid>
                <Grid item xs={6} md={3}>
                    <MUIButton variant="outlined" color="primary" className="w-full">
                        Outlined Primary
                    </MUIButton>
                </Grid>
                <Grid item xs={6} md={3}>
                    <MUIButton variant="contained" color="secondary" className="w-full" disableElevation>
                        Secondary
                    </MUIButton>
                </Grid>
                <Grid item xs={6} md={3}>
                    <MUIButton variant="outlined" color="secondary" className="w-full">
                        Outlined Secondary
                    </MUIButton>
                </Grid>
            </Grid>
        </div>
    );
};
export default ButtonComponent;