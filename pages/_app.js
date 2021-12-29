import 'antd/dist/antd.css'
import '../styles/globals.css'
import '../styles/ant-edited.css'
import Menu from '../components/menu'
import HeaderBar from '../components/headerBar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeaderBar/>
      <Menu/>
      <Component {...pageProps} />  
    </>
  )
}

export default MyApp
