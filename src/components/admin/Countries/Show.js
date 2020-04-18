import React from 'react';
import { Descriptions, Icon } from 'antd';
import { StyledCard } from '../../styled';
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
      <StyledCard>
        <div className="card-actions">
          <Link to={`/admin/country/${id}/update`}>Editar<Icon type="edit"/></Link>
          <span onClick={props.handleDelete}>Eliminar<Icon type="delete"/></span>
        </div>
        <Descriptions title="Información del País" layout="vertical">
          <Descriptions.Item label="Nombre">{name}</Descriptions.Item>
          <Descriptions.Item label="Código país">{country_code}</Descriptions.Item>
          <Descriptions.Item label="Moneda">{currency}</Descriptions.Item>
        </Descriptions>
      </StyledCard>
    </div>
  )
}

export default CountryShowCard;
