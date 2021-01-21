import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplete';
import AuthForm from '../components/auth/AuthForm';

const RegisterPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type="register"/>
        </AuthTemplate>
    );
};

export default RegisterPage;