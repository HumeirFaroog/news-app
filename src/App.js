import './App.css';
import NewsList from './Pages/NewsList'
// import navBar from './Pages/navBar'

function App() {
  return (
    <div className="App">
      {/* <h1 className="title"> See The Latest News</h1> */}
      <nav className="navbar"> 
        <ul>
          <li><a href="/"> Fashion </a></li>
          <li><a href="/"> Football </a></li>
          <li><a href="/"> Health </a></li>
          <li><a href="/"> Technology </a></li>
          <li class="flt"><a class="active" href="#about">News App </a></li>
        </ul>
      </nav>
      <NewsList />
    </div>
  );
}

export default App;
