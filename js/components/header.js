import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Icon, Text, Utils, Menu, List, ListItem} from 'react-essence';

class DashboardHeader extends React.Component {

    render() {
        return (
          <Block classes={'dashboard-header'}>
            <Block classes={'flex'}>
              <Block classes={'e-text-center'}>
                <Text type={'a'} href={'#'} className={'e-text-green-400 show'}>
                  <Icon name={"maps-store-mall-directory"} className={"e-text-green-400"} />
                  Archive</Text>
              </Block>
              <Block classes={'e-text-center'}>
                <Text type={'a'} href={'#'} className={'e-text-green-400 show'}>
                  <Icon name={"action-delete"} className={"e-text-green-400"} />
                  Trash</Text>
              </Block>
              <Block classes={'e-text-center'}>
                <Text type={'a'} href={'#'} className={'e-text-green-400 show'}>
                  <Icon name={"content-reply"} className={"e-text-green-400"} />
                  Reply</Text>
              </Block>
              <Block classes={'e-text-center'}>
                <Text type={'a'} href={'#'} className={'e-text-green-400 show'}>
                  <Icon name={"content-reply-all"} className={"e-text-green-400"} />
                  Reply all</Text>
              </Block>
              <Block classes={'e-text-center'}>
                <Text type={'a'} href={'#'} className={'e-text-green-400 show'}>
                  <Icon name={"content-forward"} className={"e-text-green-400"} />
                  Forward</Text>
              </Block>
            </Block>
          </Block>
        );
    }
}

module.exports = DashboardHeader;
