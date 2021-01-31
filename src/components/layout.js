import React from "react"
import { Link } from "gatsby"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="pt-12 pb-14">
        <div className="flex flex-col pt-12 pb-10"><img src="/images/site-logo.png" style={{width: 232, margin: 'auto'}}/></div>
      </h1>
    )
  } else {
    header = (
      <Link to="/">
        <div className="flex flex-col pt-12 pb-10"><img src="/images/site-logo.png" style={{width: 232, margin: 'auto'}}/></div>
      </Link>
    )
  }

  return (
    <div className="md:container md:max-w-screen-lg font-sans" data-is-root-path={isRootPath}>
      <header>{header}</header>
      <main>{children}</main>
      <footer className="text-xs text-center pb-3 pt-10">
        © {new Date().getFullYear()} Peter Witham
      </footer>
    </div>
  )
}

export default Layout
