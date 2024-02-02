import '@/styles/App.css'

import { RouterProvider } from 'react-router-dom'
import { appRouter } from '@/router/AppRouter'
import Layout from './Layout'

import thinkingManSrc from '@/assets/man-thinking-cartoon-vector.svg';

function App() {
  
  return (
    <div className='app'>
      <img className='man_thinking_svg' src={thinkingManSrc} alt='Thinking man'/>
      <Layout>
        <RouterProvider router={appRouter}/>
      </Layout>
    </div>
  )
}

export default App
