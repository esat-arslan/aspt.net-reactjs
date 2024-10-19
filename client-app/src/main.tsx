import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import './App/Layout/styles.css'
import { store, StoreContext } from './App/stores/store.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './App/router/Routes.tsx'
import 'semantic-ui-css/semantic.min.css';
import 'react-calendar/dist/Calendar.css';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreContext.Provider value={store}>
    <RouterProvider router={router}/>
    </StoreContext.Provider>

  </StrictMode>,
)
