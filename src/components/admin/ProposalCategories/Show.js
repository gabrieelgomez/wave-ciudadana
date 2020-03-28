import React from 'react';
import { Descriptions, Card, Icon } from 'antd';
import { Link } from 'react-router-dom';

const ProposalCategoryShowCard = (props) => {
  const {
    id,
    name,
    country_id
  } = props.proposal_category;

  return (
    <div className="admin-container">
      <Card>
        <Link to={`/admin/proposal_category/${id}/update`}><Icon type="edit"/></Link>
        <Descriptions title="Información del País" layout="vertical">
          <Descriptions.Item label="Nombre">{name}</Descriptions.Item>
          <Descriptions.Item label="ID Pais">{country_id}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  )
}

export default ProposalCategoryShowCard;
