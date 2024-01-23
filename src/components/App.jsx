import '@/styles/App.css'

import { RouterProvider } from 'react-router-dom'
import { appRouter } from '@/router/AppRouter'
import Layout from './Layout'

function App() {
  
  return (
    <main className='app'>
      <Layout>
        <RouterProvider router={appRouter}/>
      </Layout>
    </main>
  )
}

export default App
