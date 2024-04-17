import './App.css';
import AllRoutes from './routes/AllRoutes';
import { Footer, Header, ScrollToTop } from './components';

function App() {
  return (
    <div className="App dark:bg-gray-900">
      <Header />
      <AllRoutes />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
