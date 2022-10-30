import { CssBaseline } from '@mui/material'
import React, { useEffect } from 'react'
import Admin from './pages/Admin pages/Admin/Admin'
// import MiniDrawer from './pages/Drawer'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme';
import { Outlet, Route, Routes } from 'react-router-dom';
// import CategoryTable from './pages/Category/Category'
import ArticleTable from './pages/Admin pages/Article/Article';
import PrivacyTable from './pages/Admin pages/Privacy/Privacy';
import SocialList from './pages/Admin pages/SocialList/SocialList';
import Login from './pages/Admin pages/Login/Login';
import CategoryTable from './pages/Admin pages/Category/Category';
import AddCategory from './pages/Admin pages/Category/AddCategory';
import AddSocialLinks from './pages/Admin pages/SocialList/AddSocialLinks';
import AddPrivacyTerms from './pages/Admin pages/Privacy/AddPrivacyTerms';
import AddArticle from './pages/Admin pages/Article/AddArticle';
import { useDispatch, useSelector } from 'react-redux';
import { check } from './Store/Action/AdminActions/AuthActions/AuthActions';
import Loader from './Components/Loader/Loader';
import EditPrivacyTerms from './pages/Admin pages/Privacy/editPrivacy';
// import SocialList from './pages/Admin pages/SocialList/SocialList';
function App() {
  const { isAuthenticated, isnavloading } = useSelector(state => state.adminAuth)


  return (
    // <MiniDrawer/>
    // <div>app</div>
    <ThemeProvider theme={theme}>
      {console.log("reder")}
      <CssBaseline />
      <Routes>
        <Route path={"/"} element={<div>Home</div>}>

        </Route>
        {/* <Route path="/login"element={<Login/>} /> */}
        <Route path="/api/v1/admin" element={!isAuthenticated ? <Login /> : <Admin />} >
          <Route path="category" element={<CategoryTable />} />

          <Route path="category/:add" element={<AddCategory />} />
          <Route path="article" element={<AddArticle />} />
          {/* <Route path="article/:add" element={<AddArticle/>}/> */}
          <Route path="contacts" element={<SocialList />} />
          <Route path="contacts/:add" element={<AddSocialLinks />} />
          <Route path="privacy" element={<PrivacyTable />} />
          <Route path="privacy/edit/:id" element={<EditPrivacyTerms />} />

          <Route path="privacy/add" element={<AddPrivacyTerms/>}/>
          {/* </Route> */}

        </Route>

      </Routes>

    </ThemeProvider>

  )
}

export default App