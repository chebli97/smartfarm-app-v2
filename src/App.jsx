import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutContainer from './components/LayoutContainer';
import SmartIrrigationPage from './views/SmartIrrigationPage';
import Overview from './views/Overview';

const App = () => {
  return (
    <Router>
      <LayoutContainer>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/smart-irrigation" element={<SmartIrrigationPage />} />
          {/* Add other routes as needed */}
        </Routes>
      </LayoutContainer>
    </Router>
  );
};

export default App;
