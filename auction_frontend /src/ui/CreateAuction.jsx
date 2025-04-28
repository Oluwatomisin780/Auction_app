import { Form, Input, DatePicker, Upload, Button, Flex } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';
import { useForm } from 'react-hook-form';

function CreateAuction({}) {
  const { RangePicker } = DatePicker;
  const { closeModal } = useModal();
  const [fileList, setFileList] = useState([]);
  const { TextArea } = Input;
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onSubmit = (data) => {
    const { bidPeriod, ...rest } = data;
    const [startDate, endDate] = bidPeriod;
    console.log('start:', startDate?.toISOString());
    console.log('end:', endDate?.toISOString());

    const formData = {
      ...rest,
      bidPeriod: {
        startDate: startDate?.toISOString(),
        endDate: endDate?.toISOString(),
      },
      auctionImage: fileList,
    };
    console.log('formData', formData);
  };
  const onError = (error) => {
    console.log('error');
  };
  return (
    <Form onFinish={onSubmit}>
      <Form.Item
        label="name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please thi name is required',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="description"
        name="description"
        rules={[
          {
            required: true,
            message: 'Please descriptionis require',
          },
        ]}
      >
        <TextArea />
      </Form.Item>
      <Form.Item
        label="bid price"
        name="bidPrice"
        rules={[
          {
            required: true,
            message: 'Please bid price is required',
          },
        ]}
      >
        <Input placeholder="place bid" type="number" />
      </Form.Item>
      <Form.Item label="bid Period" name="bidPeriod">
        <RangePicker />
      </Form.Item>
      <Form.Item label="Auction Image">
        <Upload
          action=""
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
        >
          <button style={{ border: 0, background: 'none' }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </button>
        </Upload>
      </Form.Item>

      <Flex gap="small" justify="flex-end">
        <Button onClick={closeModal}>Cancel</Button>
        <Button htmlType="submit">Submit</Button>
      </Flex>
    </Form>
  );
}

export default CreateAuction;
