import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function handleRegister({ email, password }) {
  auth
    .register(email, password)
    .then((res) => {
      if (res) {
        // Redirecionar para a página de login ou outra página
      }
    })
    .catch((err) => {
      console.error(`Erro ao registrar usuário: ${err}`);
    });
}

export default function Register() {
  return (
    <>
      <Header>
        <Link to='/signin' className='header__link'>
          Faça o login
        </Link>
      </Header>

      {/* formulário */}
    </>
  );
}
