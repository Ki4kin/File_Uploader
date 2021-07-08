import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { thunkNewUser } from '../../redux/Thunk/thunkNewUser';
import './Auth.css';

function Auth() {
  const dispatch = useDispatch();
  const history = useHistory();
  function authHandler(e) {
    e.preventDefault();
    if (e.target.password.value === e.target.checkPassword.value) {
      const newUser = {
        email: e.target.email.value,
        password: e.target.password.value,
        phone: e.target.phone.value,
        name: e.target.name.value,
      };
      dispatch(thunkNewUser(newUser));
      history.push('/');
    } else {
      alert('Пароли не совпали');
    }
  }
  return (
    <div className="auth">
      <form onSubmit={authHandler}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Пароль"
            name="password"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Пароль еще раз"
            name="checkPassword"
          />
        </div>
        <div className="mb-3">
          <input
            type="phone"
            className="form-control"
            id="exampleInputPhone"
            placeholder="Телефон"
            name="phone"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            placeholder="Имя"
            name="name"
          />
        </div>
        <button type="submit" className="btn btn-outline-dark bg-secondary authButton">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Auth;
