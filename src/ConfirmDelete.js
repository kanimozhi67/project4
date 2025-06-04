import React, { useState } from 'react';
import { Modal, Form, Input, Select, Button, Row ,Col} from 'antd';
import {CloseOutlined} from '@ant-design/icons';

const { Option } = Select;

const ConfirmDelete = ({visible, onCancel, onDelete }) => {
 

  return (
    <Modal
        closable={false} 
       title={
        <div justify="centre" align="middle" style={{ position: 'relative', paddingRight: 40 }}>
          <h1 >Confirm Delete</h1>
          <p>you want to delete all the marked items, that can't be undo 
            once you delete.
          </p>
        
        </div>
       }
      
      open={visible}
       centered
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}
         >
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={onDelete}
         style={{
    backgroundColor: 'red',
    borderColor: 'red',
    color: 'white',
  }}>
          Yes, Delete
        </Button>,
      ]}
    >
    
    </Modal>
  );
};

export default ConfirmDelete;
