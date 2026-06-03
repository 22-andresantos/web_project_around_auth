import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function handleLogin({ email, password }) {
  auth
    .authorize(email, password)
    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        // Redirecionar para a página principal ou outra página
        setLoggedIn(true);
      }
    })
    .catch((err) => {
      console.error(`Erro ao fazer login: ${err}`);
    });
}

export default function Login() {
  return (
    <>
      <Header>
        <Link to='/signup' className='header__link'>
          Inscrever-se
        </Link>
      </Header>

      {/* formulário */}
    </>
  );
}
