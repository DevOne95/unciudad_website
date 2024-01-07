import React from 'react'

import { Card, CardActions, CardContent, Typography } from '@mui/material'

const MUICardComponent = ({
    cardTitle,
    cardContent,
    cardActions }) => {
    return (
        <>
            <Card>

                <CardContent>

                    <Typography variant="h6" component="div">
                        {cardTitle}
                    </Typography>

                    <Typography variant="h4" color="text.secondary">
                        <strong>{cardContent}</strong>
                    </Typography>

                </CardContent>

                <CardActions>
                    {cardActions}
                </CardActions>

            </Card >
        </>
    )
}

export default MUICardComponent