import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplete';
import AuthForm from '../components/auth/AuthForm';

const LoginPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type="login"/>
        </AuthTemplate>
    );
};

export default LoginPage;