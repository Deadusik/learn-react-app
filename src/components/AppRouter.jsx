import React, { useContext } from 'react'
import { publicRoutes, privateRoutes } from '../router/routes'
import { AuthContext } from '../context'
import {
    Route, Routes
} from 'react-router-dom'

const AppRouter = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    return (
        <>
            {isAuth ?
                <Routes>
                    {
                        privateRoutes.map(route =>
                            <Route
                                key={route.path}
                                path={route.path}
                                element={route.element}
                                errorElement={route.error} />
                        )
                    }
                </Routes>
                :
                <Routes>
                    {
                        publicRoutes.map(route =>
                            <Route
                                key={route.path}
                                path={route.path}
                                element={route.element}
                                errorElement={route.error} />
                        )
                    }
                </Routes>
            }
        </>
    );
}

export default AppRouter;