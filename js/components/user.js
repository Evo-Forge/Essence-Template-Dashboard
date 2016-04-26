import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Input, Image, Text, Utils, Menu, List, ListItem} from 'react-essence';
import {Dialog, DialogHeader, DialogContent, DialogFooter} from 'essence-dialog';



class DashboardUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open : false,
      value : "Peste URL here",
      src : 'assets/img/avatar.jpg'
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

    handleChange(event) {
      this.setState({src: event.target.value});
    }

    render() {
        return (
        	<Block classes={'dashboard-user'}>
            <Image onClick={this.showDialog.bind(this)} src={this.state.src} width={'30px'} height={'30px'} alt={'profile picture'} classes={'avatar'}/>
            <Menu type={'cover'} placeholder={'Hello Carmen!'} classes={'e-text-green-400'}>
              <Text className={'e-text-black'}>Profile</Text>
              <Text className={'e-text-black'}>Settings</Text>
              <Text className={'e-text-black'}>Logout</Text>
            </Menu>
            <Dialog visible={this.state.open} onOpen={this.dialogOpened.bind(this)} onClose={this.dialogClosed.bind(this)}>
              <DialogContent>
                <Image src={this.state.src} alt={'profile picture'} className={'e-img-rsp'}/>
                <Text type={'p'} classes={'e-text-left e-body1 e-text-black'}>Change your profile picture: </Text>
                <Block>
                  <Input type={'text'} name={'label'} value={this.state.value} onChange={this.handleChange.bind(this)} />
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
