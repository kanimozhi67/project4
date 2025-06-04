import React, { useState } from 'react';
import { Modal, Form, Input, Select, Button, Row ,Col} from 'antd';
import {CloseOutlined} from '@ant-design/icons';

const { Option } = Select;

const AddCompanyModal = ({ visible, onCancel, onAdd }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields()
      .then(values => {
        onAdd(values);
        form.resetFields();
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal
        closable={false} 
         centered
       title={
        <div style={{ position: 'relative', paddingRight: 40 }}>
          Add New Company
          <Button
            type="text"
            shape="circle"
            icon={<CloseOutlined />}
            onClick={onCancel}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: '#f5f5f5',
              border: '1px solid #d9d9d9',
            }}
          />
        </div>
      }
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}
         >
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}
         style={{
    backgroundColor: 'orange',
    borderColor: 'orange',
    color: 'white',
  }}>
          Add Company
        </Button>,
      ]}
    >
      <Form layout="vertical" form={form}>
        <Row gutter={16}>
            <Col span={12}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item></Col>
<Col span={12}>
        <Form.Item name="email" label="Email Address">
          <Input />
        </Form.Item></Col>
</Row>
        <Form.Item name="accountUrl" label="Account URL">
          <Input />
        </Form.Item>
 <Row gutter={16}>
     <Col span={12}>
        <Form.Item name="phoneNumber" label="Phone Number" rules={[{ required: true }]}>
          <Input />
        </Form.Item></Col>
    <Col span={12}>
        <Form.Item name="website" label="Website">
          <Input />
        </Form.Item>
        </Col>
</Row>
 <Row gutter={16}>
    <Col span={12}>
        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item></Col>
<Col span={12}>
        <Form.Item name="confirmPassword" label="Confirm Password" dependencies={['password']} rules={[
          { required: true },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Passwords do not match!'));
            },
          }),
        ]}>
          <Input.Password />
        </Form.Item></Col>
</Row>
        <Form.Item name="address" label="Address">
          <Input />
        </Form.Item>
 <Row gutter={16}>
    <Col span={12}>
        <Form.Item name="planName" label="Plan Name">
          <Select defaultValue="Advanced">
            <Option value="Basic">Basic</Option>
            <Option value="Advanced">Advanced</Option>
            <Option value="Enterprise">Enterprise</Option>
          </Select>
        </Form.Item>
</Col>
<Col span={12}>
        <Form.Item name="planType" label="Plan Type">
          <Select defaultValue="Monthly">
            <Option value="Monthly">Monthly</Option>
            <Option value="Yearly">Yearly</Option>
          </Select>
        </Form.Item></Col>
</Row>
<Row gutter={16}>
    <Col span={8}>
        <Form.Item name="currency" label="Currency" rules={[{ required: true }]}>
          <Select defaultValue="USD">
            <Option value="USD">USD</Option>
            <Option value="EUR">EUR</Option>
            <Option value="GBP">GBP</Option>
          </Select>
        </Form.Item></Col>
<Col span={8}>
        <Form.Item name="language" label="Language">
          <Select defaultValue="English">
            <Option value="English">English</Option>
            <Option value="Spanish">Spanish</Option>
            <Option value="French">French</Option>
          </Select>
        </Form.Item></Col>
<Col span={8}>
        <Form.Item name="status" label="Status">
          <Select defaultValue="Active">
            <Option value="Active">Active</Option>
            <Option value="Inactive">Inactive</Option>
          </Select>
        </Form.Item></Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default AddCompanyModal;
