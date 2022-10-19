import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  // Movie App
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
    // router > routes > route
  );
}

export default App;
