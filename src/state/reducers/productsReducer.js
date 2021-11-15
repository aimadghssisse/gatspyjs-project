const initState = {
  name: false
}



const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case "getProducts":
        return {
          ...state,
          ...action.payload
        }
    default:
        return state
  }
  return state
}

export default productsReducer;
