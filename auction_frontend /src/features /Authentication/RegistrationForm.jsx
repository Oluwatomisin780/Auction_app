import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useSignUp } from './useAuth';
import { Link } from 'react-router-dom';

function RegistrationForm() {
  const { signup, isLoading } = useSignUp();
  const onFinish = (values) => {
    const { email, password, fullName } = values;
    console.log('Success:', email, password);
    signup({ email, password, fullName });
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
        label="fullName"
        name="fullName"
        rules={[{ required: true, message: 'Please input your fullName!' }]}
      >
        <Input />
      </Form.Item>
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
        Already have an account?{' '}
        <Link to="/login" className="text-sky-500">
          Login
        </Link>
      </p>
    </Form>
  );
}

export default RegistrationForm;
