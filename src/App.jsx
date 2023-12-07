import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Layout from './components/Layout/Layout'
import CollectionsPage from './pages/CollectionsPage/CollectionsPage'
import MenPage from './pages/MenPage/MenPage'
import WomenPage from './pages/WomenPage/WomenPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
import UserPage from './pages/UserPage/UserPage'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout /> }>
        <Route index element={<HomePage />} />
        <Route path='collections' element={<CollectionsPage />} />
        <Route path='men' element={<MenPage />} />
        <Route path='women' element={<WomenPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='user' element={<UserPage />} />
      </Route>      
    </Routes>
  );
}

export default App;
