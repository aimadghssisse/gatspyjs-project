
export const addCount = (data) => {
  return (dispatch) => {
      dispatch({
          type: "addCount",
          payload: { count: data }
      });
  }
}
