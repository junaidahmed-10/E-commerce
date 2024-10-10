import { Navigate, useLocation } from 'react-router-dom'

function CheckAuth({isAuthenticated, user, children}) {

    const location = useLocation()

    if (
        !isAuthenticated &&
        !(
            location.pathname.includes("/signIn") ||
            location.pathname.includes("/signUp")
        )) {
        return <Navigate to="/auth/signIn" />
    }

    if (isAuthenticated &&
        (location.pathname.includes("/signIn") ||
            location.pathname.includes("/signUp"))) {

        if (user?.role === "admin") {
            return <Navigate to="/admin/dashboard" />
        } else {
            return <Navigate to="/shop/home" />
        }
    }

    if (isAuthenticated && user?.role !== "admin" && location.pathname.includes("admin")) {
        return <Navigate to="/unAuthPage" />
    }

    if (isAuthenticated && user?.role === 'admin' && location.pathname.includes('shop')) {
        return <Navigate to='/admin/dashboard' />
    }


    return <>{children}</>

}

export default CheckAuth




