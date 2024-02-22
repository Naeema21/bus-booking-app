"use client"
import React, { useState } from 'react';
import Input from '@/component/input';
import { MdCalendarMonth, MdCode, MdEmail, MdPassword, MdPerson, MdPhone } from 'react-icons/md';
import Container from '@/component/container';
import Link from 'next/link';

const RegisterForm: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: '',
        gender: '',
        referralCode: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Perform form validation and submission logic here
        console.log('Submitted:', formData);
    };

    return (
        <Container>
            <p className='text-right mb-4'>Already have an account ?<Link href={'/login'} className='text-red font-bold'> Login</Link> </p>

            <form onSubmit={handleSubmit}>
                <Input
                    Icon={MdPerson}
                    type="text"
                    name='firstName'
                    value={formData.firstName}
                    onChange={(e) => handleChange(e)}
                    label="First Name"
                    placeholder="Enter your first name"
                    required
                />
                <Input
                    Icon={MdPerson}
                    type="text"
                    value={formData.lastName}
                    name='lastName'
                    onChange={(e) => handleChange(e)}
                    label="Last Name"
                    placeholder="Enter your last name"
                    required
                />
                <Input
                    Icon={MdEmail}
                    type="email"
                    value={formData.email}
                    name='email'
                    onChange={(value) => handleChange(value)}
                    label="Email"
                    placeholder="Enter your email"
                    required
                />
                <Input
                    Icon={MdPhone}
                    type="tel"
                    value={formData.mobileNumber}
                    name='mobileNumber'
                    onChange={(value) => handleChange(value)}
                    label="Mobile Number"
                    placeholder="Enter your mobile number"
                    required
                />
                <Input
                    Icon={MdPassword}
                    type="password"
                    value={formData.password}
                    name='password'
                    onChange={(value) => handleChange(value)}
                    label="Password"
                    placeholder="Enter your password"
                    required
                />
                <Input
                    Icon={MdPassword}
                    type="password"
                    value={formData.confirmPassword}
                    name='confirmPassword'
                    onChange={(value) => handleChange(value)}
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    required
                />
                <Input
                    Icon={MdCalendarMonth}
                    type="date"
                    value={formData.dateOfBirth}
                    name='dateOfBirth'
                    onChange={(value) => handleChange(value)}
                    label="Date of Birth"
                    required
                />
                <div className="flex items-center mt-4 mb-2">
                    <label className="mr-4">Gender:</label>
                    <label className="mr-2">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === 'male'}
                            onChange={(e) => handleChange(e)}
                            className="mr-1"
                        />{' '}
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === 'female'}
                            onChange={(e) => handleChange(e)}
                            className="mr-1"
                        />{' '}
                        Female
                    </label>
                </div>
                <Input
                    Icon={MdCode}
                    type="text"
                    value={formData.referralCode}
                    name='referralCode'
                    onChange={(value) => handleChange(value)}
                    label="Referral Code (optional)"
                    placeholder="Enter referral code"
                />
                <button type="submit" className="bg-red text-white p-2 my-2 rounded-md w-full block text-center mt-4">
                    Register
                </button>
            </form>
        </Container>
    );
};

export default RegisterForm;
