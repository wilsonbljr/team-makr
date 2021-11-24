import { Typography } from '@mui/material';
import { styled } from '@mui/styles';

export const CardText = styled(Typography)({
    fontWeight: '300',
    textAlign: 'left',
    color: 'white',
    letterSpacing: '0.3px',
    wordWrap: 'break-word',
    marginTop: 5,
    marginBottom: 10
});

export const CardCategoryText = styled(Typography)({
    fontWeight: '500',
    fontSize: '1.5em',
    color: 'white',
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 5
});
