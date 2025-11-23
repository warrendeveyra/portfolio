import { useState } from 'react';
import { Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ExpandableText = ({ text }) => {
    const [expanded, setExpanded] = useState(false);
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const limit = 150;

    if (!isSmall || text.length <= limit) {
        return (
            <Typography variant="body2" style={{ marginTop: "0.5rem" }}>
                {text}
            </Typography>
        );
    }

    return (
        <Typography variant="body2" style={{ marginTop: "0.5rem" }}>
            {expanded ? text : `${text.substring(0, limit)}...`}
            <span
                onClick={() => setExpanded(!expanded)}
                style={{ color: theme.palette.primary.main, cursor: 'pointer', fontWeight: 'bold', marginLeft: '5px' }}
            >
                {expanded ? " Read Less" : " Read More"}
            </span>
        </Typography>
    );
};
