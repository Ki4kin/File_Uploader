export const thunkEditFileName = (newFileName, id) => {
  return () => {
    fetch(`${process.env.REACT_APP_URL}/edit/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        newFileName: newFileName,
      }),
    }).catch((error) => console.log(error));
  };
};
