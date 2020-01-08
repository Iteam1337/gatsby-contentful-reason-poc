import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import Labs from '../../lib/js/re/pages/Labs'
import Layout from '../Layout'

export default () => {
  const data = useStaticQuery(graphql`
    query allGhostPost {
      allGhostPost {
        nodes {
          feature_image
          excerpt
          published_at(formatString: "DD MMMM YYYY", locale: "sv-SE")
          primary_author {
            profile_image
            name
          }
          slug
          title
        }
      }
      ghostSettings {
        cover_image
      }
    }
  `)

  return (
    <Layout>
      <Helmet>
        <html lang="sv" />
        <title>Iteam | Labs</title>
        <meta property="og:title" content="Iteam | Labs" />
        <meta property="og:image" content={data.ghostSettings.cover_image} />
      </Helmet>
      <Labs posts={data.allGhostPost.nodes} settings={data.ghostSettings} />
    </Layout>
  )
}
