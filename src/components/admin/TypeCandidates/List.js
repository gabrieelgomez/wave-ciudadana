import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const { Column } = Table;

const StyledTable = styled(Table)`
  background-color: #fff;
  width: 100%;
  overflow-x: scroll;
  display: inline-block;
`

const AdminTypeCandidatesList = (props) => {
  return (
    <StyledTable
      dataSource={props.data}
      rowKey={record => record.id}
    >
      <Column title="ID Tipo Candidatura" dataIndex="id" key="id" render={(text, record) => (
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
