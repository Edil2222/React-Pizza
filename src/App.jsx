import './scss/app.scss'
import { RouterProvider} from "react-router-dom";
import router from "./routing/routing";
import Header from "./components/Header/Header";

function App() {

  return (
      <>
          <div className="wrapper">
              <Header />
              <div className="content">
                  <RouterProvider router={router} />
              </div>
          </div>

      </>
  )
}

export default App
