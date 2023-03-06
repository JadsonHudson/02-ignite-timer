import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout/'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>

      {/* 
        Este código abaixo é um exemplo de como criar uma rota privada
        para o usuário acessar somente se ele estiver logado.
        Para isso, é necessário criar um contexto para o usuário e
        verificar se ele está logado ou não.

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/products" element={<AdminHome />} />
      </Route> 
      */}
    </Routes>
  )
}
