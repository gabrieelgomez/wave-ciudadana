import React from 'react';
import { Descriptions, Card, Icon } from 'antd';
import { Link } from 'react-router-dom';

const UserShowCard = (props) => {
  const {
    id,
    name,
    lastname,
    nickname,
    email,
    phone_one,
    phone_two,
    dni,
    gender
  } = props.user;

  return (
    <div className="admin-container">
      <Card>
        <div className="card-actions">
          <Link to={`/admin/user/${id}/update`}>Editar<Icon type="edit"/></Link>            
        </div>
        <Descriptions title="Información del Usuario" layout="vertical">
          <Descriptions.Item label="Nombre">{name}</Descriptions.Item>
          <Descriptions.Item label="Apellido">{lastname}</Descriptions.Item>
          <Descriptions.Item label="Usuario">{nickname}</Descriptions.Item>
          <Descriptions.Item label="Email">{email}</Descriptions.Item>
          <Descriptions.Item label="DNI">{dni}</Descriptions.Item>
          <Descriptions.Item label="Género">{gender}</Descriptions.Item>
          <Descriptions.Item label="Telefono 1">{phone_one}</Descriptions.Item>
          <Descriptions.Item label="Telefono 2">{phone_two}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  )
}

export default UserShowCard;