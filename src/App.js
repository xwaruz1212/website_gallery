import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Books from './components/Books'
import Gallery from './components/Gallery'
import Layout from './components/Layout'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Books" element={<Books />} />
          <Route path="Gallery" element={<Gallery />} /> ffff
        </Route>
      </Routes>
    </>
  );
}

export default App;
