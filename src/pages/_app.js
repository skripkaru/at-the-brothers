import '@/styles/main.scss'
import {YMaps} from '@pbe/react-yandex-maps';

export default function App({Component, pageProps}) {
  return (
    <YMaps>
      <Component {...pageProps} />
    </YMaps>
  )
}
