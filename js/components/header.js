import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Icon, Text, Utils, Menu, List, ListItem} from 'react-essence';

class DashboardHeader extends React.Component {

    render() {
        return (
        	<Block classes={'dashboard-header'}>
            <AppBar className={'e-background-white e-text-green-400 e-no-style'}>
              <Block classes={'e-row e-no-style'}>
                <Block classes={'brick brick-6 e-no-style'}>
                  <Menu type={'cover'} icon={'navigation-more-vert'} className={'e-left'}>
                    <Text className={'e-text-black'}>
                      <Text>
                        <Text>Change Title</Text>
                        <Text type={'strong'}>Toasts</Text>
                      </Text>
                    </Text>
                    <Text className={'e-text-black'}>
                      <Text>
                        <Text>Change Title</Text>
                        <Text type={'strong'}>SnackBars</Text>
                      </Text>
                    </Text>
                    <Text className={'e-text-black'}>
                      <Text>
                        <Text>Change Title</Text>
                        <Text type={'strong'}>Data Table</Text>
                      </Text>
                    </Text>
                  </Menu>
                  <Text>Essence</Text>
                </Block>
                <Block classes={'brick brick-6 e-no-style'}>
                  <Block >
                    <List type={'inline'} classes={'flex'}>
        							<ListItem>
        								<Text type={'a'} href={'#'} className={'e-text-green-400 show'}>
                          <Icon name={"maps-store-mall-directory"} className={"e-text-green-400"} />
                          Archive</Text>
        							</ListItem>
        							<ListItem>
        								<Text type={'a'} href={'#'} className={'e-text-green-400 show'}>
                          <Icon name={"action-delete"} className={"e-text-green-400"} />
                          Trash</Text>
        							</ListItem>
        							<ListItem>
        								<Text type={'a'} href={'#'} className={'e-text-green-400 show'}>
                          <Icon name={"content-reply"} className={"e-text-green-400"} />
                          Reply</Text>
        							</ListItem>
        							<ListItem>
        								<Text type={'a'} href={'#'} className={'e-text-green-400 show'}>
                          <Icon name={"content-reply-all"} className={"e-text-green-400"} />
                          Reply all</Text>
        							</ListItem>
                      <ListItem>
        								<Text type={'a'} href={'#'} className={'e-text-green-400 show'}>
                          <Icon name={"content-forward"} className={"e-text-green-400"} />
                          Forward</Text>
        							</ListItem>
        						</List>
                  </Block>
                </Block>
              </Block>
            </AppBar>
          </Block>
        );
    }
}

module.exports = DashboardHeader;
