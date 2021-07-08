import { useDispatch } from 'react-redux';
import { ThunkDeleteFile } from '../../redux/Thunk/thunkDeleteFile';
import './DeleteFile.css';

function DeleteFile({ setIsDeleteOpen, id, fileName }) {
  const dispatch = useDispatch();
  function deleteFileHandler(e) {
    e.preventDefault();
    dispatch(ThunkDeleteFile(id));
    setIsDeleteOpen(false);
  }

  return (
    <div className="deleteFileDiv">
      <form
        className="row g-3 align-items-center deleteFileForm"
        action={`/deleteFile/:${id}`}
        method="DELETE"
        onSubmit={deleteFileHandler}>
        <div className="col-auto">
          <label htmlFor="deleteFileName" className="col-form-label">
            {`Вы действительно хотите удалить "${fileName}?"`}
          </label>
        </div>

        <div className="deleteFileName">
          <button type="submit" className="btn btn-outline-dark yesButton">
            Да
          </button>
          <button
            type="submit"
            className="btn btn-outline-dark noButton"
            onClick={() => setIsDeleteOpen(false)}>
            Нет
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeleteFile;
