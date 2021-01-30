import React from "react"
import { Link } from "gatsby"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="text-3xl text-center pt-12 pb-14">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link to="/">
        <div className="text-3xl text-center pt-12 pb-10">{title}</div>
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
