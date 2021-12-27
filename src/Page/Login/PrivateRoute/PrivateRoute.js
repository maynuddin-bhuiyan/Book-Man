import { Route, Redirect } from "react-router-dom";
import React from 'react';
import UseAuth from "../../../Hooks/UseAuth";


const PrivateRoute = ({ children, ...rest }) => {
    const { user } = UseAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;