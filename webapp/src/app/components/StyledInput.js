import { TextField } from '@mui/material';
import { styled } from '@mui/system';


const StyledInput = styled(TextField)({
    '& label': {
        color: 'white'
    },
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
            color: 'white'
        }
    },
    '& .MuiOutlinedInput-root.Mui-disabled': {
        '& fieldset': {
            borderColor: '#a0a1a3',
            color: '#a0a1a3'
        }
    },
    "& .MuiFormHelperText-root": {
        color: '#FFF',
    }
});

export default StyledInput;