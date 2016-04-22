import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Input, Image, Text, Utils, Menu, List, ListItem} from 'react-essence';
import {Dialog, DialogHeader, DialogContent, DialogFooter} from 'essence-dialog';



class DashboardUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open : false,
    };
  }
    showDialog() {
     this.setState({
      open: true
     });
    }

    hideDialog() {
     this.setState({
      open: false
     });
    }

    dialogClosed() {
     console.log('dialogClosed');
    }

    dialogOpened() {
     console.log('dialogOpened');
    }

    render() {
        return (
        	<Block classes={'dashboard-user'}>
            <Image onClick={this.showDialog.bind(this)} src={'assets/img/avatar.jpg'} width={'30px'} height={'30px'} alt={'profile picture'} classes={'avatar'}/>
            <Menu type={'cover'} placeholder={'Hello Carmen!'} classes={'e-text-green-400'}>
              <Text className={'e-text-black'}>Profile</Text>
              <Text className={'e-text-black'}>Settings</Text>
              <Text className={'e-text-black'}>Logout</Text>
            </Menu>
            <Dialog visible={this.state.open} onOpen={this.dialogOpened.bind(this)} onClose={this.dialogClosed.bind(this)}>
              <DialogHeader className={'e-text-left'}>
                <Text type={'p'} classes={'e-text-left e-headline'}>Change your profile picture</Text>
              </DialogHeader>
              <DialogContent>
                <Block className={'input-picture e-text-center'}>
                  <Input type={'text'} name={'label'} classes={'with-icon'} />
                  <Btn type={'default'} label={'Browse'} ripple={true} className={'flat e-text-white e-no-margin'} />
                </Block>
              </DialogContent>
              <DialogFooter>
                <Btn type={'succes'} label={'OK'} onClick={this.hideDialog.bind(this)} className={'flat'} />
                <Btn type={'info'} label={'Cancel'} onClick={this.hideDialog.bind(this)} className={'flat'} />
              </DialogFooter>
            </Dialog>
			    </Block>
        );
    }
}

module.exports = DashboardUser;
