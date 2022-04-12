import React, {useState} from 'react';
import {UserInfo, Users} from "./components";
import {Posts} from "./components/Posts/Posts";

const App = () => {
    const[user, setUser] = useState(null)
  return (
      <div>
          <div>
      <Users setUser={setUser}/>
              {user && <UserInfo user = {user}/>}
          </div>
          <Posts/>
      </div>
  );
};
export default App


