import React from 'react';
import { Table } from 'antd';
import { StyledTable } from '../../styled';
import { Link } from 'react-router-dom';
const { Column } = Table;

const AdminTypeCandidatesList = (props) => {
  return (
    <StyledTable
      dataSource={props.data}
      rowKey={record => record.id}
    >
      <Column title="ID" dataIndex="id" key="id" render={(text, record) => (
        <Link to={`/admin/type_candidate/${record.id}`}>{text}</Link>
      )}/>
      <Column title="Tipo de candidatura" dataIndex="name" key="name" render={(text, record) => (
        <Link to={`/admin/type_candidate/${record.id}`}>{text}</Link>
      )}/>
      <Column title="País" dataIndex="country.name" key="country.name" />
    </StyledTable>
  )
}

export default AdminTypeCandidatesList;
