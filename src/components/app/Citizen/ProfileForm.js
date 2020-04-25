import React, { Component } from 'react';
import { Form, Avatar, Upload, Icon, Row, Col, Select } from 'antd';
import { StyledInput, StyledButton, StyledTextAreaFeed } from '../../styled';
const { Option } = Select;

class ProfileForm extends Component {

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  avatarRequest = ({file, onSuccess}) => {
    setTimeout(() => {
      let avatarBase64 = '';
      this.getBase64(file, (result) => {
        avatarBase64 = result;

        this.props.getAvatarBase64(avatarBase64)
      });

      onSuccess("ok")
    }, 0)
  }

  bannerRequest = ({file, onSuccess}) => {
    setTimeout(() => {
      let bannerBase64 = '';
      this.getBase64(file, (result) => {
        bannerBase64 = result;

        this.props.getBannerBase64(bannerBase64)
      });

      onSuccess("ok")
    }, 0)
  }

  render() {
    const {
      name,
      nickname,
      email,
      phone,
      avatar,
      banner,
      description,
      status_citizen,
      type_candidacy_id
    } = this.props.citizen;

    const { typeCandidacies } = this.props;

    const isCandidate = status_citizen === 'candidate'
   
    const Item = Form.Item;

    return (
      <div>
        <Form name="nest-messages" onSubmit={this.props.updateCitizen}>
          <Row>
            <Col span={6}>
              <Item>
                <Upload name="avatar" customRequest={this.avatarRequest}>
                  <div style={{position: 'relative'}}>
                    <Avatar size={120} src={avatar ? avatar : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} />
                    <div className="avatar-profile-mask">
                      <Icon type="plus" />
                      <div className="ant-upload-text">Avatar</div>
                    </div>
                  </div>
                </Upload>
              </Item>
            </Col>
            <Col span={17} offset={1}>
              <Item>
                <Upload name="banner" customRequest={this.bannerRequest}>
                  <div style={{position: 'relative'}}>
                    <img width="100%" src={banner ? banner : "https://www.bannerbatterien.com/upload/filecache/Banner-Batterien-Solar-web_5b783e66a0dd14b56c07227718cd636d.jpg"} alt="Banner del citizen" />
                    <div className="banner-profile">
                      <Icon type="plus" />
                      <div className="ant-upload-text">Banner</div>
                    </div>
                  </div>
                </Upload>
              </Item>
            </Col>
          </Row>
          <Row>
            <Col span={12} lg={12} md={12} xs={24}>
              <Item>
                <label>Estado del ciudadano</label><br></br>
                <Select placeholder={status_citizen} defaultValue={status_citizen} style={{ width: 180 }} onChange={this.props.handleSelectStatus}>
                  <Option value="citizen">Ciudadano</Option>
                  <Option value="candidate">Candidato</Option>
                </Select>
              </Item>
            </Col>
            { isCandidate ? (
              <Col span={12} lg={12} md={12} xs={24}>
              <Item>
                <label>Tipo de Candidatura</label><br></br>
                <Select placeholder={type_candidacy_id} defaultValue={type_candidacy_id} style={{ width: 180 }} onChange={this.props.handleSelectType}>
                  { typeCandidacies !== undefined ? typeCandidacies.map((item) => {
                      return <Option key={item.id} value={item.id}>{item.name}</Option>
                    })
                    :
                    <Option disabled value="">No hay tipos de candidatura</Option>
                  }
                </Select>
              </Item>
            </Col>
            ) : '' }
          </Row>
          <Item name={['citizen', 'nickname']} rules={[{ required: true }]}>
            <label>Usuario</label>
            <StyledInput placeholder="Nickname" value={nickname} name="nickname" onChange={this.props.handleChange}/>
          </Item>
          <Item name={['citizen', 'name']} rules={[{ required: true }]}>
            <label>Nombre</label>
            <StyledInput placeholder="Name" value={name} name="name" onChange={this.props.handleChange}/>
          </Item>
          <Item name={['citizen', 'email']} rules={[{ required: true }]}>
            <label>Email</label>
            <StyledInput placeholder="email" value={email} name="email" onChange={this.props.handleChange}/>
          </Item>
          <Item name={['citizen', 'phone']} rules={[{ required: false }]}>
            <label>Teléfono</label>
            <StyledInput placeholder="Teléfono" value={phone} name="phone" onChange={this.props.handleChange}/>
          </Item>
          <Item name={['citizen', 'description']} rules={[{ required: false }]}>
            <label>Descripción</label>
            <StyledTextAreaFeed placeholder="Descripción" value={description} name="description" onChange={this.props.handleChange}/>
          </Item>
          <Item>
            <StyledButton onClick={this.props.updateCitizen}>Actualizar datos</StyledButton>
          </Item>
        </Form>
      </div>
    )
  } 
}

export default ProfileForm;