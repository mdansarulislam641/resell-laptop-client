import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='h-[100vh] flex flex-col items-center justify-center text-center'>
            <h1 className='text-4xl'>this is error page {error.status} <br />  Page {error.statusText || error.statusMessage}</h1>
            <img className='w-25' src="https://i.ibb.co/QMW1NJf/images.jpg" alt="error-imag" />
        </div>
    );
};

export default ErrorPage;