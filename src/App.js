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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Protected from './Components/ProtectedRoute';
// import SocialList from './pages/Admin pages/SocialList/SocialList';
function App() {
  const { isAuthenticated, isnavloading } = useSelector(state => state.adminAuth)


  return (
    // <MiniDrawer/>
    // <div>app</div>
    <ThemeProvider theme={theme}>
      {/* {console.log("reder")} */}
      <CssBaseline />
      <Routes>
        <Route path={"/"} element={<div>Home</div>}>

        </Route>
        {/* <Route path="/login"element={<Login/>} /> */}
        <Route path="/api/v1/admin/login" element={<Login />} />
        <Route path="/api/v1/admin" element={
          <Protected isLoggedIn={isAuthenticated} >
            <Admin />
          </Protected>
        }
        // !isAuthenticated ? <Login /> : <Admin />}
        >
          <Route path="category" element={<Outlet />}>

            <Route index element={<Protected isLoggedIn={isAuthenticated}><CategoryTable /></Protected>} />

            <Route path="add" element={<AddCategory />} />
          </Route>
          <Route path="contacts" element={<Outlet />}>
            <Route index element={<Protected isLoggedIn={isAuthenticated}><SocialList /></Protected>} />

            <Route path="add" element={<AddSocialLinks />} />

          </Route>
          <Route path="article" element={

            <Protected isLoggedIn={isAuthenticated}>
              <AddArticle />
            </Protected>
          }
          />
          <Route path="privacy" element={<Outlet />}>
            <Route index element={<Protected isLoggedIn={isAuthenticated}><PrivacyTable /></Protected>} />

            <Route path="privacy/edit/:id" element={<EditPrivacyTerms />} />
            <Route path="add" element={<AddPrivacyTerms />} />

          </Route>
        </Route>

      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={true}
        theme="light"
      />
    </ThemeProvider>

  )
}

export default App