import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Icon, Image, Input, Text, Utils, Menu, Navigation, List, ListItem} from 'react-essence';

class DashboardNavigation extends React.Component {

    render() {
        return (
        	<Block classes={'dashboard-navigation'}>
            <Navigation>
              <Block classes={'e-navigation-wrapper'} id={'navigationMenu'}>
                <Block type={'header'} className={'e-nav-header e-background-grey-100 flex-center'} style={{lineHeight: '52px'}}>
                  <Btn label={'New message'} ripple={true} type={'success'} className={'flat full-w e-button e-background-green-400 e-text-white'} />
                </Block>
                <Block>
                  <List type={'navigation'} classes={'e-background-grey-100'}>
                    <ListItem>
                      <Text type={'label'} classes={'e-text-center e-button e-text-grey-900  padding-l-list'}>Mailboxes</Text>
                      <List type={'navigation'} classes={'e-background-grey-100 padding-l-list'}>
                        <ListItem key={'inbox'}>
                          <Text type={'a'} href={'#inbox'} className={'e-text-grey-800 padding-l-list'}>
                            <Block classes={'content e-left'}>
                              <Text type={'small'} classes={'e-text-green-400'}>Inbox (12)</Text>
                            </Block>
                          </Text>
                        </ListItem>
                        <ListItem key={'starred'}>
                          <Text type={'a'} href={'#starred'} className={'e-text-grey-800 padding-l-list'}>
                            <Block classes={'content e-left'}>
                              <Text type={'small'}>Starred</Text>
                            </Block>
                          </Text>
                        </ListItem>
                        <ListItem key={'sent'}>
                          <Text type={'a'} href={'#sent'} className={'e-text-grey-800 padding-l-list'}>
                            <Block classes={'content e-left'}>
                              <Text type={'small'}>Sent</Text>
                            </Block>
                          </Text>
                        </ListItem>
                        <ListItem key={'drafts'}>
                          <Text type={'a'} href={'#drafts'} className={'e-text-grey-800 padding-l-list'}>
                            <Block classes={'content e-left'}>
                              <Text type={'small'}>Drafts</Text>
                            </Block>
                          </Text>
                        </ListItem>
                        <ListItem key={'Trash'}>
                          <Text type={'a'} href={'#trash'} className={'e-text-grey-800 padding-l-list'}>
                            <Block classes={'content e-left'}>
                              <Text type={'small'}>Trash</Text>
                            </Block>
                          </Text>
                        </ListItem>
                      </List>
                    </ListItem>
                    <ListItem>
                      <Text type={'label'} classes={'e-text-center e-button e-text-grey-900 padding-l-list'}>Labels</Text>
                      <List type={'navigation'} classes={'e-background-grey-100'}>
                        <ListItem key={'important'}>
                          <Text type={'a'} href={'#important'} className={'e-text-grey-800'}>
                            <Block classes={'content e-left'}>
                              <Icon type={'small'} name={"toggle-radio-button-off"} className={"e-caption e-text-light-green-400 e-text-center"} />
                              <Text type={'small'}>Important</Text>
                            </Block>
                          </Text>
                        </ListItem>
                        <ListItem key={'finances'}>
                          <Text type={'a'} href={'#finances'} className={'e-text-grey-800'}>
                            <Block classes={'content e-left'}>
                              <Icon type={'small'} name={"toggle-radio-button-off"} className={"e-caption e-text-deep-purple-400 e-text-center"} />
                              <Text type={'small'}>Finances</Text>
                            </Block>
                          </Text>
                        </ListItem>
                        <ListItem key={'dashboard'}>
                          <Text type={'a'} href={'#dasboard'} className={'e-text-grey-800'}>
                            <Block classes={'content e-left'}>
                              <Icon type={'small'} name={"toggle-radio-button-off"} className={"e-caption e-text-light-blue-A400 e-text-center"} />
                              <Text type={'small'}>Dashboard</Text>
                            </Block>
                          </Text>
                        </ListItem>
                      </List>
                    </ListItem>
                  </List>
                </Block>
             </Block>
            </Navigation>
			    </Block>
        );
    }
}

module.exports = DashboardNavigation;
