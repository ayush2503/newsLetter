import { useSelector } from "react-redux";

const useAuth=()=>{
    // const { isAuthenticated, isnavloading } = useSelector(
    //     (state) => state.adminAuth
    //   );
      const isAuthenticated = localStorage.getItem("isAuthenticated")
      return  isAuthenticated
}
export default useAuth