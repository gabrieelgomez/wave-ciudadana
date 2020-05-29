import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Avatar, Badge, Icon, Collapse, List } from 'antd';
import { StyledCard } from '../../styled';
import { truncate } from '../../../helpers';
const { Panel } = Collapse;

const StyledCollapse = styled(Collapse)`
  background-color: white;
  border: 0;
  font-size: 12px;

  .ant-collapse-item {
    border: 0;

    .ant-collapse-header {
      padding-left: 16px;

      .ant-collapse-arrow {
        left: 0;
      }
    }
  }
`

const FeedCard = (props) => {
  const info = props.item;
  const formatDueDateShow = moment.utc(info.due_date).format("L");
  const isAdminPoll = info.type_poll === 'poll_admin'
  const human = isAdminPoll ? info.user : info.citizen;

  return (
    <StyledCard>
      { human &&
        <div>
          <div className="info-card-header">
            <div className="info-card-name">
              <Avatar size={20} src={human.avatar ? human.avatar : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} />
              <span className="name">{human.name}</span>
            </div>
            { isAdminPoll &&
              <Badge count="Encuesta Oficial" style={{ backgroundColor: '#ff663b' }} />
            }
          </div>
          <small>{info.poll_category.name}</small>
          <h3><Link to={`/poll/${info.id}`}>{info.title}</Link></h3>
          <p>{truncate(info.description, 150)}</p>
          { info.items.length !== 0 &&
            <StyledCollapse>
              <Panel header="Items" key="1">
                <List bordered>
                  { info.items.map((item, i) => {
                    return (
                      <List.Item key={i}>
                        {item.title}
                      </List.Item>
                    )
                  })}
                </List>
              </Panel>
            </StyledCollapse>
          }
          <div className="info-card-footer">
            <div className="info-card-footer-info"> {info.total_poll_votes} votos | Vence el {info.due_date ? formatDueDateShow : ''}</div>
            <div className="footer-icons-l">
              <Badge count={5}>
                <Icon type="message"></Icon>
              </Badge>
              <Badge count={20}>
                <Icon type="like"></Icon>
              </Badge>
            </div>
          </div>
        </div>
      }
    </StyledCard>
  )
}

export default FeedCard;