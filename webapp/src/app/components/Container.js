import styled from 'styled-components'

const Container = styled.section`
    min-height: calc(100vh - 56px);
    width: 100%;
    overflow: auto;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media(min-width: 600px) {
    min-height: calc(100vh - 64px);
    width: 100%;
    flex-direction: row;
    }
`

export default Container