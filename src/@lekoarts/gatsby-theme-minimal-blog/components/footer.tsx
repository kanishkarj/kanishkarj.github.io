/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle, mailchimpAction } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.
      </div>
      <div>
        <Link
          target="_blank"
          aria-label="Link to the RSS feed"
          href="/rss.xml"
        >
          RSS feed
        </Link>
        {`, `}
        <Link
          target="_blank"
          aria-label="Link to the RSS feed"
          href={mailchimpAction}
        >
          Subscribe
        </Link>

      </div>
    </footer>
  )
}

export default Footer
