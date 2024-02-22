'use client'
import Container from '@/component/container';
import Input from '@/component/input';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdEmail, MdPassword } from 'react-icons/md';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }
        setError('');
        console.log('Submitted:', { email, password });
    };

    return (
        <Container>
            <p className='text-right mb-4'>Don’t have an account ?<Link href={'/sign-up'} className='text-red font-bold'> Sign Up</Link> </p>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                    placeholder="Enter your email"
                    required
                    Icon={MdEmail}
                />
                <Input
                    Icon={MdPassword}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="Password"
                    placeholder="Enter your password"
                    required
                />
                <button type="submit" className="bg-red text-white p-2 my-2 rounded-md w-full block text-center mt-4">
                    Login
                </button>
            </form>
        </Container>
    );
};

export default LoginForm;
