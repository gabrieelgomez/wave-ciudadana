import React from 'react';
import { Table } from 'antd';
import { StyledTable } from '../../styled';
import { Link } from 'react-router-dom';
const { Column } = Table;

const AdminCitizensList = (props) => {
  return (
    <StyledTable
      dataSource={props.data}
      rowKey={record => record.id}
    >
      <Column title="ID" dataIndex="id" key="id" render={(text, record) => (
        <Link to={`/admin/citizen/${record.id}`}>{text}</Link>
      )}/>
      <Column title="Nombre" dataIndex="name" key="name" render={(text, record) => (
        <Link to={`/admin/citizen/${record.id}`}>{text}</Link>
      )}/>
      <Column title="Email" dataIndex="email" key="email" />
      <Column title="Usuario" dataIndex="nickname" key="nickname" />
      <Column title="Status ciudadano" dataIndex="status_citizen" key="status_citizen" />
    </StyledTable>
  )
}

export default AdminCitizensList;
