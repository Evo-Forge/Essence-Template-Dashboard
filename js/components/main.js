import React from 'react';
import ClassNames from 'classnames';
import DashboardHeader from '../components/header';
import DashboardSearch from '../components/search';
import DashboardUser from '../components/user';
import DashboardNavigation from '../components/navigation';
import DashboardMailbox from '../components/mailbox';
import DashboardConversation from '../components/conversation';

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem} from 'react-essence';

class DashboardMain extends React.Component {

    render() {
        return (

          <Block>
              <Block classes={'e-container'}>
                <Block classes={'dashboard-main e-background-white e-shadow-2'}>
                  <Block classes={'e-row border-row e-no-margin'}>
                    <Block classes={'brick brick-2 e-h-start e-v-center no-margin-b'}>
                      <DashboardUser />
                    </Block>
                    <Block classes={'brick brick-4 e-h-center e-v-center border-col no-margin-b'}>
                      <DashboardSearch />
                    </Block>
                    <Block classes={'brick brick-6 e-h-end e-v-center no-margin-b'}>
                      <DashboardHeader />
                    </Block>
                  </Block>
                  <Block classes={'e-row e-no-margin'}>
                    <Block classes={'brick brick-2 '}>
                      <DashboardNavigation />
                    </Block>
                    <Block classes={'brick brick-4'}>
                      <DashboardMailbox />
                    </Block>
                    <Block classes={'brick brick-6'}>
                      <DashboardConversation />
                    </Block>
                  </Block>
                </Block>
              </Block>
          </Block>
        );
    }
}

module.exports = DashboardMain;
