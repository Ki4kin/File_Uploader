import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainPage, Auth, Login, Table } from '../index';
import { thunkAuth } from '../../redux/Thunk/thunkAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  const pew = 'pow';

  useEffect(() => {
    dispatch(thunkAuth());
  }, [dispatch, isAuth]);

  return (
    <BrowserRouter>
      <div className="App">
        {isAuth ? (
          <Route exact path="/" component={Table} />
        ) : (
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/auth" component={Auth} />
            <Route path="/login" component={Login} />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
