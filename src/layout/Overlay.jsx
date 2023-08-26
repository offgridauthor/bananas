import { Container, TopLeft, BottomLeft, BottomRight, Hamburger } from './styles'
import styled from 'styled-components'



export default function Overlay() {


    const StyledUl = styled.ul`
  text-align: left;
`;

    return (
        <Container>
            <TopLeft>
                <h1>
                    COULD <br />BE<br /> <br /> YOU'RE <br />FALLING. . .<br />
                </h1>
                <h2>
                    Or maybe infinite bananas are floating<br />
                </h2>

            </TopLeft>
            <BottomLeft>
                A runtime deconstruction of <a href="https://playful.software">playful.software</a>
                <br />
                thanks <a href="https://twitter.com/0xca0a">0xca0a</a>
            </BottomLeft>
            <BottomRight >
                <StyledUl>
                    <li>React</li>
                    <li>Three.js</li>
                    <li>react-three-fiber</li>
                    <li>drei</li>
                </StyledUl>
            </BottomRight>

        </Container>
    )
}
