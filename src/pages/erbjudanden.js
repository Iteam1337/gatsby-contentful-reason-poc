import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Offers from '../../lib/js/re/pages/Offers'
import Layout from '../Layout'
import { Helmet } from 'react-helmet'

export default () => {
  const data = useStaticQuery(graphql`
    query Offers {
      contentfulSidaErbjudanden {
        headerText1
        headerTextBgColor
        headerImage {
          file {
            url
          }
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        offersLeadText {
          offersLeadText
        }
        contactTitle
        contacts {
          avatar {
            file {
              url
            }
          }
          email
          name
          phoneNumber
          short
          title
        }
      }
      allContentfulErbjudande(filter: { node_locale: { eq: "sv-SE" } }) {
        nodes {
          offerOrder
          offerTitle
          offerLead {
            offerLead
          }
          offerUspOneTitle
          offerOneUspText {
            offerOneUspText
          }
          offerUspTwoTitle
          offerTwoUspText {
            offerTwoUspText
          }
          offerUspThreeTitle
          offerThreeUspText {
            offerThreeUspText
          }
          offerUspFourTitle
          offerFourUspText {
            offerFourUspText
          }
          offerIntroText {
            offerIntroText
          }
          offerIntroImage {
            file {
              url
            }
          }
          offerIllustrationImage {
            file {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Helmet>
        <title>Iteam | Erbjudanden</title>
      </Helmet>
      <Offers
        data={data.contentfulSidaErbjudanden}
        offers={data.allContentfulErbjudande.nodes}
      />
    </Layout>
  )
}
