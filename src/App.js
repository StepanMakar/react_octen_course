import Users from "./components/User";
import Posts from "./components/Post";
import Comments from "./components/Comment";
import './App.css'
const App = () => {
  return (
      <div className={'main'}>
          <div className={'block'}>
              <Users/>
          </div>
          <hr/>
          <div className={'block'}>
              <Posts/>
          </div>
          <hr/>
          <div className={'block'}>
              <Comments/>
          </div>

      </div>
  );
};
export default App;
