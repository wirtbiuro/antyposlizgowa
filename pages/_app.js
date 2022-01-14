import 'antd/dist/antd.css'
import '../styles/globals.css'
import '../styles/ant-edited.css'
import 'animate.css';
import Menu from '../components/menu'
import HeaderBar from '../components/headerBar'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{overflow: 'hidden'}}>
      <HeaderBar/>
      <Menu/>
      <Component {...pageProps} />  
    </div>
  )
}

export default MyApp
