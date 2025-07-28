import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { appRoute } from './core/route_handler/AppRouteHandler'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error: unknown) => {
        const axiosError = error as { response?: { status: number } };
        if (axiosError?.response?.status === 404 || axiosError?.response?.status === 401) {
          // window.location.href = '/404';
          return false;
        }
        return failureCount < 3;
      }
    },
    mutations: {
      onError: (error: unknown) => {
        const axiosError = error as { response?: { status: number } };
        if (axiosError?.response?.status === 404 || axiosError?.response?.status === 401) {
          // window.location.href = '/404';
        }
      }
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={appRoute} />
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
)
