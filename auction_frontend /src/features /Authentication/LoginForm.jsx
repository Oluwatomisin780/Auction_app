import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useLogin } from './useAuth';
import { Link } from 'react-router-dom';

function LoginForm() {
  const { login, isLoading } = useLogin();
  const onFinish = (values) => {
    const { email, password } = values;
    console.log('Success:', email, password);
    login({ email, password });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="h-full w-1/2  flex flex-col justify-center"
    >
      <Form.Item
        label="email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item label={null} className="w-full">
        <Button type="primary" htmlType="submit" className="w-full">
          Submit
        </Button>
      </Form.Item>
      <p className="text-gray-500 text-center">
        Don't have an account?{' '}
        <Link to="/register" className="text-sky-500">
          Register
        </Link>
      </p>
    </Form>
  );
}

export default LoginForm;
