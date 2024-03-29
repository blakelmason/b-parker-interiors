import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

export default function Heading({ children }: PropsWithChildren) {
    return (
        <Typography variant="h1" sx={{ mb: 2 }}>
            {children}
        </Typography>
    );
}
