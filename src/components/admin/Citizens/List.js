import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const { Column } = Table;

const StyledTable = styled(Table)`
  background-color: #fff;
`

const AdminCitizensList = (props) => {
  return (
    <StyledTable
      dataSource={props.data}
      rowKey={record => record.id}
    >
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