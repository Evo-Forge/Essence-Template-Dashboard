import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Input, Image, Text, Utils, Menu, List, ListItem} from 'react-essence';

class DashboardUser extends React.Component {

    render() {
        return (
        	<Block classes={'dashboard-user'}>
            <Image src={'assets/img/avatar.jpg'} width={'30px'} height={'30px'} alt={'Essence Image'} classes={'avatar'}/>
              <Menu type={'cover'} placeholder={'Hello Carmen!'} classes={'e-text-green-400'}>
                <Text className={'e-text-black'}>Profil</Text>
                <Text className={'e-text-black'}>Settings</Text>
                <Text className={'e-text-black'}>Logout</Text>
              </Menu>
			    </Block>
        );
    }
}

module.exports = DashboardUser;
