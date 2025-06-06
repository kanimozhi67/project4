import React, { useState } from 'react';
import { Modal, Form, Input, Select, Button, Row ,Col} from 'antd';
import {CloseOutlined} from '@ant-design/icons';

const { Option } = Select;

const ConfirmDelete = ({visible, onCancel, onDelete }) => {
 

  return (
    <Modal
        closable={false} 
       title={
        <div justify="space-between" align="middle" style={{ position: 'relative', paddingRight: 40 }}>
          <h1 >Confirm Delete</h1>
          
        
        </div>
       }
      
      open={visible}
       centered
      onCancel={onCancel}
      footer={
        
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <Button key="cancel" onClick={onCancel}
         >
          Cancel
        </Button>
        <Button key="submit" type="primary" onClick={onDelete}
         style={{
    backgroundColor: 'red',
    borderColor: 'red',
    color: 'white',
   
  }}>
          Yes, Delete
        </Button>
      </div>}
    >
    <p  justify="space-between" align="middle"
     style={{ 
      fontSize:20, margin:15}}>you want to delete all the marked items, that can't be undo 
            once you delete.
          </p>
    </Modal>
  );
};

export default ConfirmDelete;
