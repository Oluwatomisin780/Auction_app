import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const ModalPop = ({ children, open, title, close }) => {
  return (
    <>
      <Modal title={title} open={open} footer={null} onCancel={close}>
        {children}
      </Modal>
    </>
  );
};
export default ModalPop;
