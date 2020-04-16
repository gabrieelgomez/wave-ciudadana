import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Avatar, Badge, Icon, Collapse, List } from 'antd';
import { StyledCard } from '../../../styled';
import { truncate } from '../../../../helpers';
const { Panel } = Collapse;

const StyledPanel = styled(Collapse)`
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
  const card = props.item;
  const formatDueDateShow = moment.utc(card.due_date).format("L");

  return (
    <StyledCard>
      { props.type === "wave_citizen_polls" &&
        <div>
          <div className="feed-card-header">
            <div className="feed-card-name">
              <Avatar size={20} src={"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} />
              { card.type_poll === 'poll_admin' ? (
                <span className="name">{card.user.name}</span>
              ) : (
                <span className="name">{card.citizen.name}</span>
                )
              }
            </div>
            { card.type_poll === 'poll_admin' &&
              <Badge count="Encuesta Oficial" style={{ backgroundColor: '#ff663b' }} />
            }
          </div>
          <small>{card.poll_category.name}</small>
          <h3><Link to={`/poll/${card.id}`}>{card.title}</Link></h3>
          <p>{truncate(card.description, 150)}</p>
          { card.items.length !== 0 &&
            <StyledPanel>
              <Panel header="Items" key="1">
                <List bordered>
                  { card.items.map((item, i) => {
                    return (
                      <List.Item key={i}>
                        {item.title}
                      </List.Item>
                    )
                  })}
                </List>
              </Panel>
            </StyledPanel>
          }
          <div className="feed-card-footer">
            <div className="due-date">Vence el {card.due_date ? formatDueDateShow : ''}</div>
            <div>
              <Icon type="message"></Icon>
              <Icon type="like"></Icon>
            </div>
          </div>
        </div>
      }

      { props.type === "wave_citizen_proposals" &&
        <div>
          <div className="feed-card-header">
            <div className="feed-card-name">
              <Avatar size={20} src={"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} />
              { card.type_proposal === 'proposal_admin' ? (
                <span className="name">{card.user.name}</span>
              ) : (
                <span className="name">{card.citizen.name}</span>
                )
              }
            </div>
            { card.type_proposal === 'proposal_admin' &&
              <Badge count="Propuesta Oficial" style={{ backgroundColor: '#ff663b' }} />
            }
          </div>
          <small>{card.proposal_category.name}</small>
          <h3>{card.title}</h3>
          <p>{truncate(card.description, 150)}</p>
          <div className="feed-card-footer">
            <div></div>
            <div>
              <Icon type="message"></Icon>
              <Icon type="like"></Icon>
            </div>
          </div>
        </div>

      }
    </StyledCard>
  )
}

export default FeedCard;