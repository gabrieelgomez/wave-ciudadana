import React from 'react';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Select,
} from 'antd';
const { Option } = Select;
const { TextArea } = Input;

const CitizenForm = (props) => {
  const {
    name,
    nickname,
    email,
    description,
    status_citizen,
    type_candidacy_id
  } = props.data;

  const placeholderSelectStatus = props.data.status_citizen

  // const type_candidacy = props.data.type_candidacy
  // const currentTypeCandidacyName = type_candidacy !== undefined ? type_candidacy.name : 'Cargando...';
  // const placeholderSelectType = type_candidacy_id === '' ? 'Seleccionar tipo de candidatura' : currentTypeCandidacyName;

  const isCandidate = status_citizen === 'candidate'
  
  return (
    <Form onSubmit={props.handleSubmit}>
      <Row>
        <Col span={12} lg={12} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>Estado del ciudadano</label><br></br>
            <Select placeholder={placeholderSelectStatus} defaultValue={status_citizen} style={{ width: 180 }} onChange={props.handleSelectStatus}>
              <Option value="citizen">Ciudadano</Option>
              <Option value="candidate">Candidato</Option>
            </Select>
          </Form.Item>
        </Col>
        { isCandidate ? (
          <Col span={12} lg={12} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>Tipo de Candidatura</label><br></br>
            <Select placeholder={type_candidacy_id} defaultValue={type_candidacy_id} style={{ width: 180 }} onChange={props.handleSelectType}>
              { props.typeCandidatesData !== undefined ? props.typeCandidatesData.map((item) => {
                  return <Option key={item.id} value={item.id}>{item.name}</Option>
                })
                :
                <Option disabled value="">No hay tipos de candidatura</Option>
              }
            </Select>
          </Form.Item>
        </Col>
        ) : '' }
      </Row>
      <Row>
        <Col span={12} lg={8} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>Usuario</label>
            <Input
              type="text"
              name="nickname"
              value={nickname}
              placeholder="Usuario"
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>
        <Col span={12} lg={8} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>Nombre</label>
            <Input
              type="text"
              name="name"
              value={name}
              placeholder="Nombre"
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>
        <Col span={12} lg={8} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>Email</label>
            <Input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
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
      </Row>
      { props.children }
      <Button htmlType="submit">
        Guardar
      </Button>
    </Form>
  )
}

export default CitizenForm;
