import React from 'react';
import { Descriptions, Icon } from 'antd';
import { StyledCard } from '../../styled';
import { Link } from 'react-router-dom';

const PollCategoryShowCard = (props) => {
  const {
    id,
    name
  } = props.poll_category;

  return (
    <div className="admin-container">
      <StyledCard>
        <div className="card-actions">
          <Link to={`/admin/poll_category/${id}/update`}>Editar<Icon type="edit"/></Link>
          <span onClick={props.handleDelete}>Eliminar<Icon type="delete"/></span>
        </div>
        <Descriptions title="Información del País" layout="vertical">
          <Descriptions.Item label="Nombre">{name}</Descriptions.Item>
          <Descriptions.Item label="Pais">{props.country.name}</Descriptions.Item>
        </Descriptions>
      </StyledCard>
    </div>
  )
}

export default PollCategoryShowCard;
