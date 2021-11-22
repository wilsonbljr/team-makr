import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { StyledForm } from './StyledForm'
import { secondaryColour } from '../../core/utils/Variables'

export const CustomStyledForm = styled(StyledForm)`
    width: 100%;
    max-width: 400px;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
`

export const ForgotPassword = styled(Link)`
    text-decoration: none;
    color: ${secondaryColour};
    text-align: right;
    margin-top: 1vh;
`

export const PasswordContainer = styled.div`
    display: flex;
    flex-direction: column;
`