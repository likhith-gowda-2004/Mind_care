import React from 'react';
import { Alert, Form, Button, Card, Typography, Input, Flex, Spin } from 'antd';
import { Link } from 'react-router-dom';
import useSignup from '../hooks/useSignup';  // Importing the custom hook (or from your context)

const Register = () => {
  const { loading, error, registerUser } = useSignup();
  
  const handleRegister = (values) => {
    registerUser(values);  // Calls the registration function
  };

  return (
    <Card className="form-container"> 
      <Flex gap='large' align='center'>
        <Flex vertical flex={1}>
          <Typography.Title level={3} className="title">
            Create an account
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Join for exclusive access!
          </Typography.Text>

          <Form layout="vertical" onFinish={handleRegister} autoComplete="off">
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: 'Please input your full name!' }]}
            >
              <Input size="large" placeholder="Enter your full name" />
            </Form.Item>

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

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password size="large" placeholder="Enter your password" />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="passwordConfirm"
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password size="large" placeholder="Re-enter your password" />
            </Form.Item>

            {error && (
              <Alert description={error} type="error" showIcon closable className="alert" />
            )}

            <Form.Item>
              <Button type={loading ? '' : 'primary'} htmlType="submit" size="large" className="btn"> 
                {loading ? <Spin /> : 'Create Account'}
              </Button>
            </Form.Item>

            <Form.Item> 
              <Link to="/login">
                <Button size="large" className="btn">Sign In</Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>

        <Flex flex={1}>
          <img
            src="https://img.freepik.com/free-photo/3d-portrait-high-school-teenager_23-2150793939.jpg"
            alt="Character Illustration"
            className="auth-image"
          />
        </Flex>
      </Flex>
    </Card>
  );
};

export default Register;
