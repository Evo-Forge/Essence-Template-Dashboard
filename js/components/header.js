import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem} from 'react-essence';

class DashboardHeader extends React.Component {

    render() {
        return (
        	<Block classes={'dashboard-header'}>
            <AppBar className={'e-background-indigo-500 e-text-white'}>
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

              <Block className={'e-right'}>
              <Menu type={'cover'} icon={'action-settings'} className={'e-right'}>
               <Text className={'e-text-black'}>
                 <Text type={'a'} href={'#icons'}>Link to: Icons</Text>
               </Text>
               <Text className={'e-text-black'}>
                 <Text type={'a'} href={'#button'}>Link to: Buttons</Text>
               </Text>
               <Text className={'e-text-black'}>
                 <Text type={'a'} href={'#core'}>Link to: Essence Core</Text>
               </Text>
              </Menu>
              </Block>
            </AppBar>
          </Block>
        );
    }
}

module.exports = DashboardHeader;
