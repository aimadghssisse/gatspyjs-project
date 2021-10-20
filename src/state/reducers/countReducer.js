const initState = {
  count: 10
}



const countReducer = (state = initState, action) => {
  switch (action.type) {
    case "addCount":
        return {
          ...state,
          ...action.payload
        }
    default:
        return state
  }
  return state
}

export default countReducer;
