import React from 'react';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Select
} from 'antd';
const {Option} = Select;
const { TextArea } = Input;

const ProposalForm = (props) => {
  const {
    title,
    description,
    proposal_category_id
  } = props.data;

  const proposal_category = props.data.proposal_category
  const currentProposalCategoryName = proposal_category !== undefined ? proposal_category.name : 'Cargando...';
  const placeholderSelect = proposal_category_id === '' ? 'Seleccionar categoría de propuesta' : currentProposalCategoryName;

  return (
    <Form onSubmit={props.handleSubmit}>
      <Row>
        <Col span={12} lg={8} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>Título de la propuesta</label>
            <Input
              type="text"
              name="title"
              value={title}
              placeholder="Nombre de la propuesta"
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>

        <Col span={24} lg={24} md={24} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>Descripción</label>
            <TextArea
              name="description"
              value={description}
              placeholder="Descripción"
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>

        <Col span={12} lg={8} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>Categoría de la propuesta</label><br></br>
            <Select placeholder={placeholderSelect} defaultValue={proposal_category_id} style={{ width: 120 }} onChange={props.handleSelect}>
              { props.proposalCategoriesData !== undefined ? props.proposalCategoriesData.map((item) => {
                  return <Option key={item.id} value={item.id}>{item.name}</Option>
                })
                :
                <Option disabled value="">No hay categorías</Option>
              }
            </Select>
          </Form.Item>
        </Col>
      </Row>
      { props.children }
      <Button htmlType="submit">
        Guardar
      </Button>
    </Form>
  )
}

export default ProposalForm;
