import { useTransform } from 'framer-motion';
import { ReactNode } from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Logo, Burger, Header, Footer } from './styles';

function UniqueOverlay() {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">Made with Love</a>
          </li>
          <li>
            <a href="#">By Pedro Barboza</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
