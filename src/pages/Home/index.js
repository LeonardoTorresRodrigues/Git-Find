import { Header } from '../../components/Header';
import background from '../../assets/background.png';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="GitHub logo"/>
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username"/>
            <button>Buscar</button>
          </div>
          <div className='perfil'>
            <img src="https://avatars.githubusercontent.com/u/91892938?v=4" className="profile" alt="profile"/>
            <div>
              <h3>Leonardo Torres Rodrigues</h3>
              <span>@vaci_leo</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
