import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import Helmet from "../components/Helmet/helmet"

const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet title="404" />
      <div className="u-center-text">
        <h1 class="heading-secondary">Page Not Found</h1>
        <p>
          <Link to="/" className="btn-text">
            Head Home
          </Link>
        </p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
