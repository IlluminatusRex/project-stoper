import Hero from './components/Hero/Hero.js'
import Container from './components/Container/Container.js';
import Timer from './components/Timer/Timer.js'

const App = () => {
  return (
    <Container>
      <Hero />
        <Timer />
    </Container>
  );
};

export default App;