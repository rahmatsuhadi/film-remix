import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./styles/app.css"

export const links: LinksFunction = () =>{
  return [{rel: 'stylesheet', href: styles}]
}

export const meta: MetaFunction = () =>{
  return {title: 'Studios | Film Global Dunia',description: 'all Product In Toko Loak'}
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}


export function ErrorBoundary({ error }: any){
  console.log(error);
  return(
    <html>
      <head>
        <title>Oh Shit Here Were are go!</title>
        <Meta/>
        <Links/>
      </head>
      <body>
        {/* add the UI you want yout users to see */}
        {error.message}
        <Scripts/>
      </body>
    </html>
  )
}
