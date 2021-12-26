import {Header} from './components/Header';
import {Photo} from './components/Photo';

const App= () => {
  return(
    <div>
      <Header title="Este é um exemplo" />
      <Header title="Outro texto" />
      <Header />

      Olá Mundo
    <Photo  url="http://www.google.com.br/google.jpg" legend="google" />
    </div>
  );
};
export default App;