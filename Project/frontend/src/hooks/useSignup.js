import { useAuth } from '../contexts/AuthContext';
import { message } from 'antd';  // Assuming you're using 'antd' for notifications
import { useState } from 'react';

const useSignup = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const registerUser = async (values) => {
    if (values.password !== values.passwordConfirm) {
      return setError("Passwords are not the same ");
    }

    try {
      setError(null);
      setLoading(true); // Start loading before the fetch

      const res = await fetch('http://localhost:5000/api/v1/auth/signup', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json", // Ensure JSON content type
        },
        credentials: 'include',  // Send cookies along with the request
      });

      const data = await res.json();

      if (res.status === 201) {
        message.success(data.message);
        login(data.token, data.user);  // Assuming login function stores token/user
      } else if (res.status === 400) {
        setError(data.message);  // Set error from server response
      } else {
        message.error('Registration failed');
      }

    } catch (error) {
      message.error('An error occurred during registration');
    } finally {
      setLoading(false);  // Stop loading after the fetch
    }
  };

  return { loading, error, registerUser };
};

export default useSignup;
