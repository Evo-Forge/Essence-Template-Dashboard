import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Icon, Text, Utils, Menu, List, ListItem} from 'react-essence';

class DashboardHeader extends React.Component {

    render() {
        return (
            <Block classes={'dashboard-header'}>
              <List type={'inline'} classes={'full-w'}>
                <ListItem >
                  <Text type={'a'} href={'#'} className={'e-text-green-400 show'}>
                    <Icon name={"maps-store-mall-directory"} className={"e-text-green-400"} />
                    Archive</Text>
                </ListItem>
                <ListItem >
                  <Text type={'a'} href={'#'} className={'e-text-green-400 show'}>
                    <Icon name={"action-delete"} className={"e-text-green-400"} />
                    Trash</Text>
                </ListItem>
                <ListItem >
                  <Text type={'a'} href={'#'} className={'e-text-green-400 show'}>
                    <Icon name={"content-reply"} className={"e-text-green-400"} />
                    Reply</Text>
                </ListItem>
                <ListItem >
                  <Text type={'a'} href={'#'} className={'e-text-green-400 show'}>
                    <Icon name={"content-reply-all"} className={"e-text-green-400"} />
                    Reply all</Text>
                </ListItem>
                <ListItem >
                  <Text type={'a'} href={'#'} className={'e-text-green-400 show'}>
                    <Icon name={"content-forward"} className={"e-text-green-400"} />
                    Forward</Text>
                </ListItem>
              </List>
            </Block>
        );
    }
}

module.exports = DashboardHeader;
