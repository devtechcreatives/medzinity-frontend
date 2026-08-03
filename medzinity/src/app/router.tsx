import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/app/Layout'
import HomePage from '@/features/home/HomePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
])
