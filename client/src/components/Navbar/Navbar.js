import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actionCreators/actionCreatorUser';
import './Navbar.css';

function Navbar() {
  const dispatch = useDispatch();
  const fileInfo = useSelector((state) => state.fileInfo);
  const user = useSelector((state) => state.user);
  const [fileAllSize, setFileAllSize] = useState(0);

  useEffect(() => {
    if (fileInfo?.length !== 0) {
      const reducer = (acc, current) => acc + current;
      setFileAllSize((fileInfo?.map((el) => el.size).reduce(reducer) / 1000000).toFixed(2));
    } else {
      setFileAllSize(0);
    }
  }, [fileInfo]);

  return (
    <div>
      <nav className="navbar navbar-light bg-light ">
        <div className="container-fluid zagruzhator-nav">
          <p className="navbar-brand">Загружатор</p>
          {fileInfo?.length !== 0 ? (
            <p>{`Привет, ${user.name}! Ты загрузил ${fileInfo?.length} файлов общим размером ${fileAllSize} Мб`}</p>
          ) : (
            <p>{`Привет, ${user.name}! Ты еще не загрузил ни одного файла!`}</p>
          )}
          <p type="submit" className="text-decoration-underline" onClick={() => dispatch(logout())}>
            Выйти
          </p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
