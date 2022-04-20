import React, {useState} from 'react';

import {UserInfo, Users, Posts} from "./components";


const App = () => {
    const[user, setUser] = useState(null)
    const[userIdForPosts, setUserIdForPost] = useState(null)
  return (
      <div>
          <div className={``}>
      <Users setUser={setUser} setUserIdForPost={setUserIdForPost}/>
              {user && <UserInfo user = {user} setUserIdForPost={setUserIdForPost} />}
          </div>
          {userIdForPosts && <Posts userId={userIdForPosts}/>}
      </div>
  );
};
export default App


