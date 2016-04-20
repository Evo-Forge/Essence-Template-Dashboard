import React from 'react';
import ClassNames from 'classnames';
import DashboardHeader from '../components/header'

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem} from 'react-essence';

class DashboardMain extends React.Component {

    render() {
        return (
          <Block classes={'e-background-green-200'}>
          <Block classes={'e-container e-background-green-200'}>
              <Block classes={'e-container'} style={{margin: '100px 0 0 0'}}>
                <Block classes={'dashboard-main e-background-white'}>
                  <DashboardHeader />

              </Block>
            </Block>
          </Block>
          </Block>
        );
    }
}

module.exports = DashboardMain;
