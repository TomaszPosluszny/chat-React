import logo from './logo.svg';
import './App.css';
import Error404 from './pages/Error';
import{BrowserRouter, Route, Routes} from "react-router-dom"
import Profile from './pages/Profile';
import ChatContainer from './pages/ChatContainer';
import Navigation from './components/navigation';


function App() {
  return (    <div className="App">
    <BrowserRouter>
    <Navigation  />
    <main>
    <Routes>
      <Route path="/" element={<Profile/>}/>
      <Route path="/chat" element={<ChatContainer/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
    </main>
    </BrowserRouter>
    </div>
  );
}

export default App;
