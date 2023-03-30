import Home from './components/pages/Home/Home.js';
import Table from './components/pages/Table/Table.js';
import NotFound from './components/pages/NotFound/NotFound.js';
import { Routes, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Header from './components/views/Header/Header.js';
import Footer from './components/views/Footer/Footer.js';


const App = () => {
  return (
    <Container className="my-5">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/table/:id" element={<Table />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Container>
  );
};

export default App;
