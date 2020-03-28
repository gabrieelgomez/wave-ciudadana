import React from 'react';
import { Descriptions, Card, Icon } from 'antd';
import { Link } from 'react-router-dom';

const CountryShowCard = (props) => {
  const {
    id,
    name,
    country_code,
    currency
  } = props.country;

  return (
    <div className="admin-container">
      <Card>
        <div className="card-actions">
          <Link to={`/admin/country/${id}/update`}>Editar<Icon type="edit"/></Link>
        </div>
        <Descriptions title="Información del País" layout="vertical">
          <Descriptions.Item label="Nombre">{name}</Descriptions.Item>
          <Descriptions.Item label="Código país">{country_code}</Descriptions.Item>
          <Descriptions.Item label="Moneda">{currency}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  )
}

export default CountryShowCard;
