import Api from "../../graphql"




export const getProducts = () => {
  return (dispatch) => {
    console.log("is work");
    let data = Api.getistProduct();
      dispatch({
          type: "getProducts",
          payload: { name: data }
      });
  }
}
