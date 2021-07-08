import { useDispatch } from 'react-redux';
import { thunkEditFileName } from '../../redux/Thunk/thunkEditFileName';
import './ChangeFileName.css';

function ChangeFileName({ setIsChangeOpen, id }) {
  const dispatch = useDispatch();

  function changeFileName(e) {
    e.preventDefault();
    const newFileName = document.querySelector('#inputChangeFileName').value;
    dispatch(thunkEditFileName(newFileName, id));
    setIsChangeOpen(false);
  }

  return (
    <div className="changeFileDiv">
      <form className="row g-3 align-items-center changeFileForm" onSubmit={changeFileName}>
        <h5 className="card-title changeFileFormTitle">Редактирование файла</h5>
        <div className="col-auto">
          <label htmlFor="inputChangeFileName" className="col-form-label">
            Название файла
          </label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            id="inputChangeFileName"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div className="changeFileName">
          <button type="submit" className="btn btn-outline-dark bg-secondary saveButton">
            Сохранить
          </button>
          <button
            className="btn btn-outline-dark bg-secondary escButton"
            onClick={() => setIsChangeOpen(false)}>
            Отменить
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangeFileName;
