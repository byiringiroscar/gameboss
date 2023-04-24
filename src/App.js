import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGames } from './redux/games/gamesSlice';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
