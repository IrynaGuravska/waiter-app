import Home from './components/pages/Home/Home.js'
import Table from './components/pages/Table/Table.js'
import NotFound from './components/pages/NotFound/NotFound.js'
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/table/:id" element={<Table />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
