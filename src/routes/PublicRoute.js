import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';
// Assuming you have an AuthContext for authentication

function PublicRoute({ element, ...rest }) {
    const { isAuthenticated } = useAuth(); // Replace with your actual authentication context

    return (
        <Route
            {...rest}
            element={!isAuthenticated ? (
                element
            ) : (
                <Navigate to="/dashboard" replace />
            )}
        />
    );
}

export default PublicRoute;
