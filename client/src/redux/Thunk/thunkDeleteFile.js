export const ThunkDeleteFile = (id) => {
  return () => {
    fetch(`${process.env.REACT_APP_URL}/deleteFile/${id}`, {
      method: 'DELETE',
    });
  };
};
