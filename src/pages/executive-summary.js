import React from "react"
import Layout from "../components/Layout/Layout"
import Helmet from "../components/Helmet/helmet"

const ExecutiveSummary = () => {
  return (
    <Layout>
      <Helmet title="Executive Summary" />
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Executive Summary</h2>
        <p className="paragraph">
          The area of intervention of this organisation is located in the slum
          located within Kiambu County and mainly targets health and the social
          gap existing among the locals. Its intent is to help in the
          accessibility of critical social and economic services that are scarce
          and unaffordable. The organisation looks forward to descreasing cases
          of school dropouts by effectively providing support where necessary.
          Majority of the families have an average of six children and the
          parents survive by doing odd jobs.
        </p>
      </div>
    </Layout>
  )
}

export default ExecutiveSummary
