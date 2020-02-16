import React from 'react';
import { Card, Row, Col } from 'antd';

const { Meta } = Card;

const Home = () => {
  return (
    <div className="container">
      <h1 class="title">Propuestas</h1>
      <Row>
        <Col span={6}>
          <Card
            hoverable
            bordered={false}
            style={{ width: 240 }}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />}
          >
            <Meta title="Titulo de la propuesta" description="Descripción corta de la propuesta" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            bordered={false}
            style={{ width: 240 }}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />}
          >
            <Meta title="Titulo de la propuesta" description="Descripción corta de la propuesta" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            bordered={false}
            style={{ width: 240 }}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />}
          >
            <Meta title="Titulo de la propuesta" description="Descripción corta de la propuesta" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            bordered={false}
            style={{ width: 240 }}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />}
          >
            <Meta title="Titulo de la propuesta" description="Descripción corta de la propuesta" />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;