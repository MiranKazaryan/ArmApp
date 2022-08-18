import { AstContextProvider } from '../stores/AstContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<AstContextProvider>
    <Component {...pageProps} />
    </AstContextProvider>)
}

export default MyApp
