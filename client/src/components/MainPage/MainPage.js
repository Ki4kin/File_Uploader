import { Link } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
  return (
    <div className="login">
      <div className="block">
        <h1>Загружатор</h1>
        <Link to="/login">
          {' '}
          <button type="button" className="btn btn-outline-dark bg-secondary mainPageButton">
            Войти
          </button>
        </Link>
        <Link to="/auth">
          {' '}
          <button type="button" className="btn btn-outline-dark bg-secondary mainPageButton">
            Зарегистироваться
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
