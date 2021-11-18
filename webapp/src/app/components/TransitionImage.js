import Image from 'mui-image'
import styled from 'styled-components'

const TransitionImage = styled(Image)`
    width: 90%;
    max-width: 800px;

    @media (min-width: 2561px) {
        max-width: 1000px;
}
`

export default TransitionImage;