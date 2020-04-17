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
  const info = props.item;
  const formatDueDateShow = moment.utc(info.due_date).format("L");

  return (
    <StyledCard>
      { props.type === "wave_citizen_polls" &&
        <div>
          <div className="feed-card-header">
            <div className="feed-card-name">
              <Avatar size={20} src={"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} />
              { info.type_poll === 'poll_admin' ? (
                <span className="name">{info.user.name}</span>
              ) : (
                <span className="name">{info.citizen.name} {info.citizen.lastname}</span>
                )
              }
            </div>
            { info.type_poll === 'poll_admin' &&
              <Badge count="Encuesta Oficial" style={{ backgroundColor: '#ff663b' }} />
            }
          </div>
          <small>{info.poll_category.name}</small>
          <h3><Link to={`/poll/${info.id}`}>{info.title}</Link></h3>
          <p>{truncate(info.description, 150)}</p>
          { info.items.length !== 0 &&
            <StyledPanel>
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
            </StyledPanel>
          }
          <div className="feed-card-footer">
            <div className="feed-card-footer-info"> {info.total_poll_votes} votos | Vence el {info.due_date ? formatDueDateShow : ''}</div>
            <div>
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

      { props.type === "wave_citizen_proposals" &&
        <div>
          <div className="feed-card-header">
            <div className="feed-card-name">
              <Avatar size={20} src={"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} />
              { info.type_proposal === 'proposal_admin' ? (
                <span className="name">{info.user.name}</span>
              ) : (
                <span className="name">{info.citizen.name}</span>
                )
              }
            </div>
            { info.type_proposal === 'proposal_admin' &&
              <Badge count="Propuesta Oficial" style={{ backgroundColor: '#ff663b' }} />
            }
          </div>
          <small>{info.proposal_category.name}</small>
          <h3>{info.title}</h3>
          <p>{truncate(info.description, 150)}</p>
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