import './LoadForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { thunkLoad } from '../../redux/Thunk/thunkLoad';

function LoadForm({ setIsLoaderOpen }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user._id);

  async function loadFile(e) {
    e.preventDefault();
    const loadData = new FormData(e.target);
    loadData.append('author', user);
    dispatch(thunkLoad(loadData));

    // const res = await fetch(`${process.env.REACT_APP_URL}/load`, {
    //   method: 'POST',
    //   // headers: {'Content-Type': 'form/multipart'},
    //   body: loadData,
    //   // mode: 'no-cors',
    // })
    // console.log(res);
    // const result = await res.json() 
    // console.log(result);

    setIsLoaderOpen(false);
  }

  return (
    <div className="loadFileDiv">
      <form
        action="localhost:4000/load"
        method="POST"
        encType="multipart/form-data"
        name={`${user}`}
        onSubmit={loadFile}
        className="row g-3 align-items-center loadFileForm">
        <input type="file" name="file" className="fileToLoad" />
        <button className="btn btn-outline-dark loadFormButton">Загрузить файл</button>
      </form>
    </div>
  );
}

export default LoadForm;
