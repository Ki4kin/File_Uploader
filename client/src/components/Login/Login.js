import './Login.css';
import { useDispatch } from 'react-redux';
import {useHistory} from "react-router-dom";
import { thunkLogin } from '../../redux/Thunk/thunkLogin';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  function loginHandler(e) {
    e.preventDefault();
    const logInfo = {
      loginEmail: e.target.loginEmail.value,
      loginPassword: e.target.loginPassword.value,
    };
    dispatch(thunkLogin(logInfo));
    history.push('/')
  }
  return (
    <div className="login">
      <form onSubmit={loginHandler}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            name="loginEmail"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="loginPassword"
          />
        </div>
        <button type="submit" className="btn btn-outline-dark bg-secondary loginButton">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
