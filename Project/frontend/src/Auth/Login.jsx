import React from 'react';
import { Alert ,Form,  Button, Card, Typography, Input,Flex,Spin} from 'antd';
import {Link} from 'react-router-dom';
import useLogin from '../hooks/useLogin';
const Login = () => {
    const {error , loading, loginUser} = useLogin();
    const handleLogin = async(values)=>{
        await loginUser(values);
    };
  return (
    <Card className="form-container"> 
      <Flex gap='large' align='center'>
      <Flex flex={1}>
      {/* Character/Illustration Side */}
      <img
          src="https://img.freepik.com/free-photo/3d-portrait-people_23-2150793852.jpg?t=st=1728098122~exp=1728101722~hmac=db5906b0cbf8e5392925e487bf98123996c561a2499587f0e4f1fbdefaa645c3&w=360"// Replace with the actual URL of your character image
          alt="Character Illustration"
          className="auth-image" />
        
      </Flex>

         {/* form */}
         <Flex vertical flex={1}>  
        <Typography.Title level={3} stront className="title" >
            Sign In
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Unlock your world.
          </Typography.Text>

          <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
            {/* Full Name Field */}
            

            {/* Email Field */}
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email address!' },
              ]}
            >
              <Input size="large" placeholder="Enter your email" />
            </Form.Item>

            {/* Password Field */}
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password size="large" placeholder="Enter your password" />
            </Form.Item>

            {/* Confirm Password Field */}
            
            {
                error && (
                    <Alert description={error} type="error" showIcon closable className="alert"/>

                 )
            }

            {/* Submit Button */}
            <Form.Item>
              <Button type={`${loading ? '' : 'primary'}`}
              htmlType="submit" size="large" className="btn"> 
              {loading ? <Spin/>:'Sign In'}
              
              
                
              </Button>
              </Form.Item>
              <Form.Item> 
                <Link to="/">
                <Button size="large" className="btn">
                Create an account
              </Button>

                </Link>
              
            </Form.Item>
          </Form>
        </Flex>
      
      
    </Flex>
    </Card>
  )
}

export default Login
