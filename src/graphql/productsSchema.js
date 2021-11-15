import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function GlobalQueryToExecute(schema) {
  console.log(schema);
  let data = graphql`
    query {
      allBigCommerceProducts {
        edges {
          node {
            name
          }
        }
      }
    }
    `
    return data
}

const Api = {
  getistProduct() {
    console.log('api is executed');
    return GlobalQueryToExecute(
      `
      allBigCommerceProducts {
        edges {
          node {
            name
          }
        }
      }
      `
    )
  }
}
export default Api;
