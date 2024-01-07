import React from 'react';

import { Grid } from '@mui/material';

import MUICardComponent from '../../../Components/MUICardComponent';
import MUIButtonComponent from '../../../Components/MUIButtonComponent';

import cardContent from '../../../constant';

const Cards = () => {
    return (
        <>
            {cardContent.map((data) => (
                <Grid mt={2} item xs={12} md={6} lg={3}>
                    <MUICardComponent
                        cardTitle={data.title}
                        cardContent={data.metrics}
                        cardActions={
                            <>
                                <MUIButtonComponent
                                    label='view'
                                    onClick={() => alert('clicked')}
                                    variant='text'
                                    size='small'
                                />
                            </>
                        }
                    />
                </Grid>
            ))}
        </>
    )
}

export default Cards