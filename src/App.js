import './App.css'
import {Routes, Route, Navigate} from "react-router-dom"
import {MainLayout} from './layouts/'
import {HomePage, UsersPage, PostsPage, AboutPage,NotFoundPAge, SinglePage} from './page'


const App = () => {
  return (
      <Routes >
     <Route path={'/'} element={<MainLayout/>}>
         <Route index element={<Navigate to={'/home'}/>}/>
         <Route path={'home'} element={<HomePage/>}/>
         <Route path={'users'} element={<UsersPage/>}/>
         <Route path={'posts'} element={<PostsPage/>}>
             < Route path={':id'} element={<SinglePage/>}/>
             </Route>
         <Route path={'about'} element={<AboutPage/>}/>
         <Route path={'*'} element={<NotFoundPAge/>}/>
         </Route>
      </Routes>
  );
};
export default App;
