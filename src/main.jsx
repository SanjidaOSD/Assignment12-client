import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <FirebaseProvider>
        <RouterProvider router={router} />
      </FirebaseProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
