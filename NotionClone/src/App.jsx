import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";
import { BrowserRouter, Route, Routes } from 'react-router';
import Page from './components/Page/Page';
import LandingPage from './components/lading_page/LadingPage';
import Share from './components/Shares/Shares';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Page" element={<Page />} />
          <Route path="/Share/:id" element={<Share />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
