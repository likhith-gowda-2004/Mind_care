// import React from 'react';
// import { Alert, Form, Button, Typography, Input, Spin, DatePicker, Select } from 'antd';
// import { Link } from 'react-router-dom';
// import useSignup from '../hooks/useSignup';

// const { Title, Text } = Typography;
// const { Option } = Select;

// const Register = () => {
//   const { loading, error, registerUser } = useSignup();

//   const handleRegister = (values) => {
//     registerUser(values);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 px-4 sm:px-6 lg:px-8">
//   <div className="w-full max-w-md md:max-w-lg p-10 bg-white rounded-xl shadow-lg transform transition-all duration-500 hover:shadow-2xl">
//         <Title level={3} className="text-center mb-4 text-gray-800">Create an Account</Title>
//         <Text type="secondary" className="text-center block mb-6 text-gray-600">
//           Join us for exclusive access!
//         </Text>

//         <Form layout="vertical" onFinish={handleRegister} autoComplete="off" className="space-y-4">
//           <Form.Item
//             label="SRN"
//             name="srn"
//             rules={[{ required: true, message: 'Please input your SRN!' }]}
//           >
//             <Input size="large" placeholder="Enter your SRN" className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500" />
//           </Form.Item>

//           <Form.Item
//             label="First Name"
//             name="firstName"
//             rules={[{ required: true, message: 'Please input your first name!' }]}
//           >
//             <Input size="large" placeholder="Enter your first name" className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500" />
//           </Form.Item>

//           <Form.Item
//             label="Last Name"
//             name="lastName"
//             rules={[{ required: true, message: 'Please input your last name!' }]}
//           >
//             <Input size="large" placeholder="Enter your last name" className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500" />
//           </Form.Item>

//           <Form.Item
//             label="Phone Number"
//             name="phoneNumber"
//             rules={[{ required: true, message: 'Please input your phone number!' }]}
//           >
//             <Input size="large" placeholder="Enter your phone number" className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500" />
//           </Form.Item>

//           <Form.Item
//             label="Email"
//             name="email"
//             rules={[
//               { required: true, message: 'Please input your email!' },
//               { type: 'email', message: 'Please enter a valid email address!' },
//             ]}
//           >
//             <Input size="large" placeholder="Enter your email" className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500" />
//           </Form.Item>

//           <Form.Item
//             label="Password"
//             name="password"
//             rules={[{ required: true, message: 'Please input your password!' }]}
//           >
//             <Input.Password size="large" placeholder="Enter your password" className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500" />
//           </Form.Item>

//           <Form.Item
//             label="Confirm Password"
//             name="passwordConfirm"
//             rules={[
//               { required: true, message: 'Please confirm your password!' },
//               ({ getFieldValue }) => ({
//                 validator(_, value) {
//                   if (!value || getFieldValue('password') === value) {
//                     return Promise.resolve();
//                   }
//                   return Promise.reject(new Error('The two passwords do not match!'));
//                 },
//               }),
//             ]}
//           >
//             <Input.Password size="large" placeholder="Re-enter your password" className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500" />
//           </Form.Item>

//           <Form.Item
//             label="Gender"
//             name="gender"
//             rules={[{ required: true, message: 'Please select your gender!' }]}
//           >
//             <Select size="large" placeholder="Select your gender" className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500">
//               <Option value="Male">Male</Option>
//               <Option value="Female">Female</Option>
//               <Option value="Other">Other</Option>
//             </Select>
//           </Form.Item>

//           <Form.Item
//             label="Date of Birth"
//             name="dateOfBirth"
//             rules={[{ required: true, message: 'Please select your date of birth!' }]}
//           >
//             <DatePicker size="large" className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="Select your date of birth" />
//           </Form.Item>

//           {error && (
//             <Alert description={error} type="error" showIcon closable className="mb-4" />
//           )}

//           <Form.Item>
//             <Button
//               type="primary"
//               htmlType="submit"
//               size="large"
//               className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               {loading ? <Spin /> : 'Create Account'}
//             </Button>
//           </Form.Item>

//           <Text type="secondary" className="text-center block mt-4 text-gray-600">
//             Already have an account?{' '}
//             <Link to="/login" className="text-blue-500 hover:text-blue-700 font-semibold transition duration-200">
//               Sign In
//             </Link>
//           </Text>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useSignup from '../hooks/useSignup';

const Register = () => {
  const { loading, error, registerUser } = useSignup();
  const [formData, setFormData] = useState({
    srn: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    passwordConfirm: '',
    gender: '',
    dateOfBirth: '',
  });

  const handleRegister = (e) => {
    e.preventDefault();
    registerUser(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-center mb-4">Create an Account</h3>
            <p className="text-center text-gray-600 mb-8">Join for exclusive access!</p>

            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label htmlFor="srn" className="block text-gray-700">SRN</label>
                <input
                  type="text"
                  name="srn"
                  value={formData.srn}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>

              <div className="flex space-x-4 mb-4">
                <div className="w-1/2">
                  <label htmlFor="firstName" className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>

                <div className="w-1/2">
                  <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>

              <div className="flex space-x-4 mb-4">
                <div className="w-1/2">
                  <label htmlFor="password" className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>

                <div className="w-1/2">
                  <label htmlFor="passwordConfirm" className="block text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    name="passwordConfirm"
                    value={formData.passwordConfirm}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>
              </div>

              <div className="flex space-x-4 mb-4">
                <div className="w-1/2">
                  <label htmlFor="gender" className="block text-gray-700">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  >
                    <option value="">Select your gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="w-1/2">
                  <label htmlFor="dateOfBirth" className="block text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>
              </div>

              {error && (
                <Alert variant="danger" className="mb-4">
                  {error}
                </Alert>
              )}

              <button
                type="submit"
                className="w-full py-2 mt-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors duration-200"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Create Account'}
              </button>

              <div className="mt-4 text-center">
                <Link to="/login" className="text-indigo-600 hover:underline">
                  Already have an account? Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
