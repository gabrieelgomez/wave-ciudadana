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

const AdminProposalCategoriesList = (props) => {
  return (
    <StyledTable
      dataSource={props.data}
      rowKey={record => record.id}
    >
      <Column title="ID Categoría de Propuesta" dataIndex="id" key="id" render={(text, record) => (
        <Link to={`/admin/proposal_category/${record.id}`}>{text}</Link>
      )}/>
      <Column title="Nombre" dataIndex="name" key="name" render={(text, record) => (
        <Link to={`/admin/proposal_category/${record.id}`}>{text}</Link>
      )}/>
      <Column title="ID País" dataIndex="country_id" key="country_id" />
    </StyledTable>
  )
}

export default AdminProposalCategoriesList;
