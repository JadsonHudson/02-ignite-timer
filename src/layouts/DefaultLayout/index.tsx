import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      {/* react-router-dom renderiza a página que está sendo acessada pelo usuário */}
      <Outlet />
    </LayoutContainer>
  )
}
