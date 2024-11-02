// import React from 'react';
// import { Alert ,Form,  Button, Card, Typography, Input,Flex,Spin} from 'antd';
// import {Link} from 'react-router-dom';
// import useLogin from '../hooks/useLogin';
// const Login = () => {
//     const {error , loading, loginUser} = useLogin();
//     const handleLogin = async(values)=>{
//         await loginUser(values);
//     };
//   return (
//     <Card className="form-container"> 
//       <Flex gap='large' align='center'>
//       <Flex flex={1}>
//       {/* Character/Illustration Side */}
//       <img
//           src="https://img.freepik.com/free-photo/3d-portrait-people_23-2150793852.jpg?t=st=1728098122~exp=1728101722~hmac=db5906b0cbf8e5392925e487bf98123996c561a2499587f0e4f1fbdefaa645c3&w=360"// Replace with the actual URL of your character image
//           alt="Character Illustration"
//           className="auth-image" />
        
//       </Flex>

//          {/* form */}
//          <Flex vertical flex={1}>  
//         <Typography.Title level={3} stront className="title" >
//             Sign In
//           </Typography.Title>
//           <Typography.Text type="secondary" strong className="slogan">
//             Unlock your world.
//           </Typography.Text>

//           <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
//             {/* Full Name Field */}
            

//             {/* Email Field */}
//             <Form.Item
//               label="Email"
//               name="email"
//               rules={[
//                 { required: true, message: 'Please input your email!' },
//                 { type: 'email', message: 'Please enter a valid email address!' },
//               ]}
//             >
//               <Input size="large" placeholder="Enter your email" />
//             </Form.Item>

//             {/* Password Field */}
//             <Form.Item
//               label="Password"
//               name="password"
//               rules={[{ required: true, message: 'Please input your password!' }]}
//             >
//               <Input.Password size="large" placeholder="Enter your password" />
//             </Form.Item>

//             {/* Confirm Password Field */}
            
//             {
//                 error && (
//                     <Alert description={error} type="error" showIcon closable className="alert"/>

//                  )
//             }

//             {/* Submit Button */}
//             <Form.Item>
//               <Button type={`${loading ? '' : 'primary'}`}
//               htmlType="submit" size="large" className="btn"> 
//               {loading ? <Spin/>:'Sign In'}
              
              
                
//               </Button>
//               </Form.Item>
//               <Form.Item> 
//                 <Link to="/register">
//                 <Button size="large" className="btn">
//                 Create an account
//               </Button>

//                 </Link>
              
//             </Form.Item>
//           </Form>
//         </Flex>
      
      
//     </Flex>
//     </Card>
//   )
// }

// export default Login
// import React from 'react';
// import { Form, Button, Card, Alert, Spinner } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import useLogin from '../hooks/useLogin';

// const Login = () => {
//     const { error, loading, loginUser } = useLogin();
//     const navigate = useNavigate();

//     const handleLogin = async (values) => {
//         if (values.role === 'admin') {
//             const adminEmail = "johnsnow@gmail.com";
//             const adminPassword = "valarmorghulis";

//             if (values.email === adminEmail && values.password === adminPassword) {
//                 navigate('/admin');
//             } else {
//                 alert("Invalid admin credentials");
//                 return;
//             }
//         } else {
//             await loginUser(values);
//             navigate('/home');
//         }
//     };

//     return (
//         <Card className="form-container max-w-lg mx-auto p-6 shadow-lg rounded-lg bg-white border border-gray-200">
//             <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">Sign In</h3>
//             <p className="text-gray-500 text-center mb-6">Unlock your world</p>

//             <Form onSubmit={handleLogin} autoComplete="off" className="space-y-4">
//                 {/* Role Selection */}
//                 <Form.Group controlId="roleSelect">
//                     <Form.Label className="font-medium text-gray-700">Role</Form.Label>
//                     <Form.Select name="role" required className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
//                         <option value="">Select your role</option>
//                         <option value="student">Student</option>
//                         <option value="admin">Admin</option>
//                     </Form.Select>
//                 </Form.Group>

//                 {/* Email Field */}
//                 <Form.Group controlId="email">
//                     <Form.Label className="font-medium text-gray-700">Email</Form.Label>
//                     <Form.Control
//                         type="email"
//                         name="email"
//                         placeholder="Enter your email"
//                         required
//                         className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </Form.Group>

//                 {/* Password Field */}
//                 <Form.Group controlId="password">
//                     <Form.Label className="font-medium text-gray-700">Password</Form.Label>
//                     <Form.Control
//                         type="password"
//                         name="password"
//                         placeholder="Enter your password"
//                         required
//                         className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </Form.Group>

//                 {/* Error Alert */}
//                 {error && (
//                     <Alert variant="danger" className="text-sm text-red-600 mb-4 p-2">
//                         {error}
//                     </Alert>
//                 )}

//                 {/* Submit Button */}
//                 <Button
//                     type="submit"
//                     variant="primary"
//                     className="w-full py-2 text-white font-semibold bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 rounded-lg"
//                     disabled={loading}
//                 >
//                     {loading ? <Spinner animation="border" size="sm" /> : 'Sign In'}
//                 </Button>

//                 {/* Create Account Link */}
//                 <div className="text-center mt-3">
//                     <Link to="/register">
//                         <Button variant="link" className="text-blue-600 hover:text-blue-700 font-medium">
//                             Create an account
//                         </Button>
//                     </Link>
//                 </div>
//             </Form>
//         </Card>
//     );
// };

// export default Login;
import React from 'react';
import { Form, Button, Card, Alert, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useLogin from '../hooks/useLogin';

const Login = () => {
    const { error, loading, loginUser } = useLogin();
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const values = {
            role: formData.get("role"),
            email: formData.get("email"),
            password: formData.get("password"),
        };

        if (values.role === 'admin') {
            const adminEmail = "johnsnow@gmail.com";
            const adminPassword = "valarmorghulis";

            if (values.email === adminEmail && values.password === adminPassword) {
                navigate('/admin');
            } else {
                alert("Invalid admin credentials");
                return;
            }
        } else {
            await loginUser(values);
            navigate('/home');
        }
    };

    return (
        <Card className="form-container max-w-lg mx-auto p-6 shadow-lg rounded-lg bg-white border border-gray-200">
            <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">Sign In</h3>
            <p className="text-gray-500 text-center mb-6">Unlock your world</p>

            <Form onSubmit={handleLogin} autoComplete="off" className="space-y-4">
                {/* Role Selection */}
                <Form.Group controlId="roleSelect">
                    <Form.Label className="font-medium text-gray-700">Role</Form.Label>
                    <Form.Select name="role" required className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select your role</option>
                        <option value="student">Student</option>
                        <option value="admin">Admin</option>
                    </Form.Select>
                </Form.Group>

                {/* Email Field */}
                <Form.Group controlId="email">
                    <Form.Label className="font-medium text-gray-700">Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </Form.Group>

                {/* Password Field */}
                <Form.Group controlId="password">
                    <Form.Label className="font-medium text-gray-700">Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </Form.Group>

                {/* Error Alert */}
                {error && (
                    <Alert variant="danger" className="text-sm text-red-600 mb-4 p-2">
                        {error}
                    </Alert>
                )}

                {/* Submit Button */}
                <Button
                    type="submit"
                    variant="primary"
                    className="w-full py-2 text-white font-semibold bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 rounded-lg"
                    disabled={loading}
                >
                    {loading ? <Spinner animation="border" size="sm" /> : 'Sign In'}
                </Button>

                {/* Create Account Link */}
                <div className="text-center mt-3">
                    <Link to="/register">
                        <Button variant="link" className="text-blue-600 hover:text-blue-700 font-medium">
                            Create an account
                        </Button>
                    </Link>
                </div>
            </Form>
        </Card>
    );
};

export default Login;
