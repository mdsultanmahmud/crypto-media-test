import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Movie from "./pages/Movie/Movie"
import Summary from "./pages/Summary/Summary"

function App() {
  const router = createBrowserRouter([
      {
        path: '/',
        element:<Movie></Movie>
      },
      {
        path:'/summary/:id',
        element:<Summary></Summary>,
        loader: ({params}) => fetch(`https://api.tvmaze.com/shows/${params.id}`)
      }
  ])
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
