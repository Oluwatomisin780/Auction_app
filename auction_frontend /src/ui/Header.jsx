import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <header className="px-4 sm:ml-64p flex  justify-end space-x-6 bg-gray-800 h-12 items-center">
      {/* <div className="space-x-6 mt-2"> */}
      <Avatar
        style={{
          backgroundColor: '#e5e7eb',
          color: '#f56a00',
        }}
        size="small"
        icon={<UserOutlined />}
      />
      <Button color="default" onClick={() => navigate('/login')}>
        Login
      </Button>
      {/* </div> */}
    </header>
  );
}

export default Header;
