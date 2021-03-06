import React from 'react';
import { Table, Tag } from 'antd';
import { StyledTable } from '../../styled';
import { Link } from 'react-router-dom';
import { truncate } from '../../../helpers';
const { Column } = Table;

const AdminPollsList = (props) => {
  return (
    <StyledTable
      dataSource={props.data}
      rowKey={record => record.id}
    >
      <Column title="ID" dataIndex="id" key="id" render={(text, record) => (
        <Link to={`/admin/poll/${record.id}`}>{text}</Link>
      )}/>
      <Column title="Encuesta" dataIndex="title" key="title" render={(text, record) => (
        <Link to={`/admin/poll/${record.id}`}>{text}</Link>
      )}/>
      <Column
        title="Descripción"
        dataIndex="description"
        key="description"
        render={description => truncate(description, 40)}
      />
      <Column title="Usuario" dataIndex="user.name" key="user.name" />
      <Column title="Categoría de Encuesta" dataIndex="poll_category.name" key="poll_category.name" />
      <Column title="Status" dataIndex="expired" key="expired" render={text => (
        <div>
          { text.toString() === "true" ? (
            <Tag color="#ffa39e">Expirado</Tag>
            ) : (
            <Tag color="#b7eb8f">Vigente</Tag>
          )}
        </div>
      )}/>
    </StyledTable>
  )
}

export default AdminPollsList;
