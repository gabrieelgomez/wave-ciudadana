import React from 'react';
import { Card, Row, Col } from 'antd';
import styled from 'styled-components';

const { Meta } = Card;

const StyledCard = styled(Card)`
  width: calc(100% - 20px) !important;
  margin: 10px 10px;
  height: 350px;
`

const ProposalsList = () => {
  return (
    <div>
      <h1 className="title">Propuestas</h1>
      <Row>
        <Col xs={24} sm={12} md={8} lg={6}>
          <StyledCard
            hoverable
            bordered={false}
            style={{ width: 240 }}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />}
          >
            <Meta title="Titulo de la propuesta" description="Descripción corta de la propuesta" />
          </StyledCard>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <StyledCard
            hoverable
            bordered={false}
            style={{ width: 240 }}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />}
          >
            <Meta title="Titulo de la propuesta" description="Descripción corta de la propuesta" />
          </StyledCard>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <StyledCard
            hoverable
            bordered={false}
            style={{ width: 240 }}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />}
          >
            <Meta title="Titulo de la propuesta" description="Descripción corta de la propuesta" />
          </StyledCard>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <StyledCard
            hoverable
            bordered={false}
            style={{ width: 240 }}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />}
          >
            <Meta title="Titulo de la propuesta" description="Descripción corta de la propuesta" />
          </StyledCard>
        </Col>
      </Row>
    </div>
  );
}

export default ProposalsList;