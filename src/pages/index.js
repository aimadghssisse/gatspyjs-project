import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { countAction, productsAction } from "../state/actions"


const IndexPage = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => {
    console.log(state.products);
    return state.count
  });

  const { name } = useSelector((state) => {
    return state.products.name
  });

  const { addCount } = bindActionCreators(countAction, dispatch);
  const { getProducts } = bindActionCreators(productsAction, dispatch);
  const [headerConfigData, setHeaderConfigData] = useState(false);

  let data = useStaticQuery(
      graphql`
      query {
          allPrismicFooter {
              nodes {
                  data {
                      copyrights
                      footer_menu {
                          link_text
                          link_target {
                              url
                          }
                      }
                  }
              }
          }
      }
      `
  )
  console.log(data.allPrismicFooter.nodes[0]?.data);
  useEffect(() => {
  }, []);

  return (
    <Layout>
      <Seo title="Home" />
      <ul>
        <li>hi</li>
        <li>{count}</li>
        <li> {name} </li>
        <li> <button onClick={() => addCount(count + count)}>click on me</button> </li>
        <li> <button onClick={() => getProducts()}>get list Products</button> </li>
      </ul>
    </Layout>
  )
}

export default IndexPage
