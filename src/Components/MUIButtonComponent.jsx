import React from 'react'
import { Button } from '@mui/material'

const MUIButtonComponent = ({
    variant,
    onClick,
    label,
    size,
    fullWidth,
}) => {
    return (
        <>
            <Button
                variant={variant}
                onClick={onClick}
                size={size}
                fullWidth={fullWidth}
            >
                {label}
            </Button>
        </>
    )
}

export default MUIButtonComponent