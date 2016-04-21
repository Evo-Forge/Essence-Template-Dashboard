import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Image, Input, Text, Utils, Menu, Navigation, List, ListItem} from 'react-essence';

class DashboardNavigation extends React.Component {

    render() {
        return (
        	<Block classes={'dashboard-navigation'}>
            <Navigation>
              <Block classes={'e-navigation-wrapper'} id={'navigationMenu'}>
                <Block type={'header'} className={'e-nav-header'} style={{lineHeight: '52px'}}>
                  <Btn label={'New message'} ripple={true} type={'success'} className={'flat e-button e-background-green-400 e-text-white'} />
                </Block>
              <List type={'navigation'} classes={'e-background-white'}>
               <ListItem key={'about'}>
                <Text type={'a'} href={'#about'}>
                 <Block classes={'content e-left'}>
                  <Text type={'small'}>About</Text>
                 </Block>
                </Text>
               </ListItem>
               <ListItem key={'get-started'}>
                <Text type={'a'} href={'#get-started'}>
                 <Block classes={'content e-left'}>
                  <Text type={'small'}>Get Started</Text>
                 </Block>
                </Text>
               </ListItem>
               <ListItem key={'contact'}>
                <Text type={'a'} href={'#contact'}>
                 <Block classes={'content e-left'}>
                  <Text type={'small'}>Contact</Text>
                 </Block>
                </Text>
               </ListItem>
              </List>
             </Block>
            </Navigation>
			    </Block>
        );
    }
}

module.exports = DashboardNavigation;
