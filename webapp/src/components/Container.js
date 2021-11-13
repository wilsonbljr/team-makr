import styled from 'styled-components'

const Container = styled.section`
    min-height: calc(100vh - 56px);
    overflow: auto;
    padding: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media(min-width: 600px) {
    min-height: calc(100vh - 64px);
    }
`

export default Container