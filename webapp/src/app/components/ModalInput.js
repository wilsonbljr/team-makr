import { TextField } from '@mui/material';
import { styled } from '@mui/system';


const ModalInput = styled(TextField)({
    '& label': {
        color: 'black'
    },
    '& label.Mui-focused': {
        color: 'black',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'black',
            color: 'black'
        },
        '& :hover $notchedOutline': {
            borderColor: 'black'
        }
    },
    '& .MuiOutlinedInput-root.Mui-disabled': {
        '& fieldset': {
            borderColor: '#a0a1a3',
            color: '#a0a1a3'
        }
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "black"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "black"
    },
    "& .MuiOutlinedInput-input": {
        color: 'black'
    },
    "& .MuiInputLabel-outlined": {
        color: "black"
    },
    "&:hover .MuiInputLabel-outlined": {
        color: "black"
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
        color: "black"
    }
});

export default ModalInput;