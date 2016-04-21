import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Input, Text, Utils, Menu, List, ListItem} from 'react-essence';

class DashboardSearch extends React.Component {

    render() {
        return (
        	<Block classes={'dashboard-search'}>
            <Btn icon={'action-search'} ripple={true} type={'fab-mini'} className={'fab-mini e-text-grey-500 e-background-white e-no-margin'} />
            <Input type={'text'} name={'label'} classes={'with-icon'} />
            <Menu type={'cover'} icon={'navigation-more-vert'} className={'e-text-center e-text-grey-500'}>
              <Text className={'e-text-black'}>Mark Unread</Text>
              <Text className={'e-text-black'}>Mark Important</Text>
              <Text className={'e-text-black'}>Mark Finances</Text>
            </Menu>
			    </Block>
        );
    }
}

module.exports = DashboardSearch;
