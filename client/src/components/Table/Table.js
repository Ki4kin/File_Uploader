import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkInitFileInfo } from '../../redux/Thunk/thunkInitFileInfo';
import { Navbar, Footer, ChangeFileName, DeleteFile, LoadForm, MainPage } from '../index';
import './Table.css';

function Table() {
  const dispatch = useDispatch();
  const fileInfo = useSelector((state) => state.fileInfo);
  const user = useSelector((state) => state.user.isAuth);
  const userId = useSelector((state) => state.user._id);
  const [id, setId] = useState(0);
  const [fileName, setFileName] = useState('');
  const [isChangeOpen, setIsChangeOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isLoaderOpen, setIsLoaderOpen] = useState(false);

  const baseUrl = process.env.REACT_APP_URL || "http://localhost:4000";

  function composeUrl(filename) {
    return `${baseUrl}/files/${filename}`;
  }

  function isImage(filename) {
    return filename.includes('jpg') || filename.includes('jpeg') || filename.includes('png')
  }

  useEffect(() => {
    dispatch(thunkInitFileInfo(userId));
  }, [dispatch, isDeleteOpen, userId, isChangeOpen]);

  return user ? (
    <>
      {isChangeOpen && <ChangeFileName setIsChangeOpen={setIsChangeOpen} id={id} />}
      {isDeleteOpen && <DeleteFile setIsDeleteOpen={setIsDeleteOpen} id={id} fileName={fileName} />}
      {isLoaderOpen && <LoadForm setIsLoaderOpen={setIsLoaderOpen} />}
      <Navbar />
      <div className="mainPageBody">
        <button className="loadButton" onClick={() => setIsLoaderOpen(true)}>
          Загрузить новый файл
        </button>

        <table className="table table-bordered mt-5">
          <thead className="table-secondary tableHead">
            <tr>
              <th scope="col" style={{ width: 20 + '%' }}>
                Превью
              </th>
              <th scope="col" style={{ width: 50 + '%' }}>
                Название файла
              </th>
              <th scope="col" style={{ width: 20 + '%' }}>
                Размер файла
              </th>
              <th scope="col" style={{ width: 10 + '%' }}></th>
            </tr>
          </thead>

          <tbody>
            {fileInfo?.map((el, i) => (
              <tr key={`${el.filename}${i}`}>
                <th className="preview" scope="row">
                  {isImage(el.filename) ? (
                    <div className="imgDiv file-preview file-preview--image">
                      <a href={composeUrl(el.filename)}>
                        <img
                          alt=""
                          className="imgPreview file-preview__image"
                          src={composeUrl(el.filename)}
                        />
                      </a>
                    </div>
                  ) : (
                    <div className="imgDiv file-preview">
                      <a href={composeUrl(el.filename)}>
                        <h2 style={{}}>&#9993;</h2>
                      </a>
                    </div>
                  )}
                </th>

                <td className="tdName">{el.originalname}</td>
                <td className="tdName">{`${(el.size / 1000000).toFixed(2)} Мб`}</td>
                <td className="tdButtons">
                  <div className="buttonDiv">
                    {/* 
                    <TableButton onClick={() => {}}>edit</TableButton> 
                    <TableButton onClick={() => {}}>delete</TableButton>
                    */}
                    <button
                      className="btn btn-light tableButton"
                      onClick={() => {
                        setId(el._id);
                        setIsChangeOpen(true);
                      }}>
                      &#9998;
                    </button>
                    <button
                      className="btn btn-light tableButton"
                      onClick={() => {
                        setId(el._id);
                        setFileName(el.originalname);
                        setIsDeleteOpen(true);
                      }}>
                      &#128465;
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  ) : (
    <MainPage />
  );
}

export default Table;
