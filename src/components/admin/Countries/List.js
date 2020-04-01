import React from 'react';
import { Table } from 'antd';
import { StyledTable } from '../../styled';
import { Link } from 'react-router-dom';
const { Column } = Table;

const AdminCountriesList = (props) => {
  return (
    <StyledTable
      dataSource={props.data}
      rowKey={record => record.id}
    >
      <Column title="ID" dataIndex="id" key="id" render={(text, record) => (
        <Link to={`/admin/country/${record.id}`}>{text}</Link>
      )}/>
      <Column title="Nombre" dataIndex="name" key="name" render={(text, record) => (
        <Link to={`/admin/country/${record.id}`}>{text}</Link>
      )}/>
      <Column title="Código" dataIndex="country_code" key="country_code" />
      <Column title="Moneda" dataIndex="currency" key="currency" />

    </StyledTable>
  )
}

export default AdminCountriesList;
