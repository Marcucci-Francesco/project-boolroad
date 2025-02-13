import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayouts from "./layouts/DefaultLayouts"
import TravelsPage from "./pages/TravelsPage"
import ParticipantsPage from "./pages/ParticipantsPage"
import NotFound from "./pages/NotFound"
import { GlobalProvider } from "./context/GlobalContext"

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayouts />}>
            <Route path="/" element={<TravelsPage />} />
            <Route path="/travel/:id" element={<ParticipantsPage />} />
            <Route path="/404" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App