import React, { useState } from 'react';
import {
  Table,
  Tag,
  Button,
  Select,
  Form,
  Input,
  Modal,
  Space,
  Row,
  Col,
  Pagination,
} from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import AddCompanyModal from './AddCompanyModal';

const { Option } = Select;

const initialData = [
  {
    key: '1',
    company: 'Stellar Dynamics',
    email: 'sophie@example.com',
    url: 'sd.example.com',
    plan: 'Basic (Yearly)',
    created: '24 Oct 2024',
    status: 'Active',
  },
  {
    key: '2',
    company: 'Nimbus Networks',
    email: 'stephen@example.com',
    url: 'nn.example.com',
    plan: 'Basic (Yearly)',
    created: '01 Nov 2024',
    status: 'Active',
  },
  {
    key: '3',
    company: 'UrbanPulse Design',
    email: 'estelle@example.com',
    url: 'upd.example.com',
    plan: 'Basic (Monthly)',
    created: '22 Feb 2024',
    status: 'Inactive',
  },
  {
    key: '4',
    company: 'BrightWave Innovations',
    email: 'michael@example.com',
    url: 'bwi.example.com',
    plan: 'Advanced (Monthly)',
    created: '12 Sep 2024',
    status: 'Active',
  },
  {
    key: '5',
    company: 'Quantum Nexus',
    email: 'cameron@example.com',
    url: 'qn.example.com',
    plan: 'Advanced (Monthly)',
    created: '18 Feb 2024',
    status: 'Active',
  },
  {
    key: '6',
    company: 'EcoVision Enterprises',
    email: 'doris@example.com',
    url: 'eve.example.com',
    plan: 'Advanced (Monthly)',
    created: '17 Oct 2024',
    status: 'Active',
  },
  {
    key: '7',
    company: 'BlueSky Ventures',
    email: 'kathleen@example.com',
    url: 'bsv.example.com',
    plan: 'Advanced (Monthly)',
    created: '10 Apr 2024',
    status: 'Active',
  },
  {
    key: '8',
    company: 'Epicurean Delights',
    email: 'angela@example.com',
    url: 'ed.example.com',
    plan: 'Advanced (Monthly)',
    created: '17 Dec 2024',
    status: 'Active',
  },
  {
    key: '9',
    company: 'TerraFusion Energy',
    email: 'bruce@example.com',
    url: 'tfe.example.com',
    plan: 'Enterprise (Yearly)',
    created: '23 Aug 2024',
    status: 'Active',
  },
  {
    key: '10',
    company: 'Aurora Technologies',
    email: 'thomas@example.com',
    url: 'at.example.com',
    plan: 'Enterprise (Monthly)',
    created: '20 Jul 2024',
    status: 'Active',
  },
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
   const [modalVisible, setModalVisible] = useState(false);

  const handleAdd = (data) => {
    console.log('Company Data:', data);
    setModalVisible(false);
  };

  const pageSize = 10;

  const paginatedData = initialData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const columns = [
    {
      title: 'Company Name',
      dataIndex: 'company',
      key: 'company',
      sorter: (a, b) => a.company.localeCompare(b.company),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: 'Account URL',
      dataIndex: 'url',
      key: 'url',
      sorter: (a, b) => a.url.localeCompare(b.url),
    },
    {
      title: 'Plan',
      dataIndex: 'plan',
      key: 'plan',
      sorter: (a, b) => a.plan.localeCompare(b.plan),
      render: (plan) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span>{plan}</span>
          {/* <Tag color="purple">Upgrade</Tag> */}
            <Button color="pink" variant="solid">
            Upgrade
          </Button>
        </div>
      ),
    },
    {
      title: 'Created Date',
      dataIndex: 'created',
      key: 'created',
      sorter: (a, b) => new Date(a.created) - new Date(b.created),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      sorter: (a, b) => a.status.localeCompare(b.status),
      render: (status) =>
        status === 'Active' ? (
          <Tag   style={{
    backgroundColor: 'green',
    borderColor: 'green',
    color: 'white',
  }}>Active</Tag>
        ) : (
          <Tag   style={{
    backgroundColor: 'red',
    borderColor: 'red',
    color: 'white',
  }}>Inactive</Tag>
        ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Space>
          <EyeOutlined />
          <EditOutlined />
          <DeleteOutlined />
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      {/* Top header row with "Companies" title and "Add Company" button */}
<Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
  <Col>
    <div>
      <h2 style={{ margin: 0 }}>Companies</h2>
      <div style={{ fontSize: 14, color: 'gray' }}>List</div>
    </div>
  </Col>
  <Col>
   <Button type="primary" onClick={() => setModalVisible(true)} 
  icon={<PlusOutlined />}
  style={{
    backgroundColor: 'orange',
    borderColor: 'orange',
    color: 'white',
  }}
>
  Add Company
</Button>

  </Col>
</Row>
   <AddCompanyModal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onAdd={handleAdd}
      />
<div  style={{
    border: '1px solid gray',
  paddingTop: 5,
  paddingRight:5,}} >
      {/* Filter row */}
      <Row justify="end" gutter={16} style={{ marginBottom: 12 }}>
        <Col>
          <Select placeholder="Select Plan" style={{ width: 180 }}>
            <Option value="basic">Basic</Option>
            <Option value="advanced">Advanced</Option>
          <Option value="enterprise">Enterprise</Option>
          </Select>
        </Col>
        <Col>
          <Select placeholder="Select Status" style={{ width: 180 }}>
            <Option value="active">Active</Option>
            <Option value="inactive">Inactive</Option>
          </Select>
        </Col>
        <Col>
          <Select placeholder="Sort By:Last 7 Days" style={{ width: 180 }}>
            <Option value="last 7">Last 7 Days</Option>
            <Option value="recent">Most Recent</Option>
          </Select>
        </Col>
      </Row>

      {/* Search row */}
      <Row justify="end" style={{ marginBottom: 16 }}>
        <Input.Search placeholder="Search" style={{ width: 300 }} />
      </Row>
</div>
      {/* Table */}
      <Table
      rowSelection={{}}

        columns={columns}
        dataSource={paginatedData}
        bordered
        pagination={false}
        footer={() => (
          <Row justify="space-between" align="middle">
            <Col>
              <span style={{ fontWeight: 500 }}>
                Showing {(currentPage - 1) * pageSize + 1} to{' '}
                {Math.min(currentPage * pageSize, initialData.length)} of{' '}
                {initialData.length} entries
              </span>
            </Col>
            <Col>
              <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={initialData.length}
                onChange={setCurrentPage}
                showSizeChanger={false}
              />
            </Col>
          </Row>
        )}
      />
    </div>
  );
};

export default App;
