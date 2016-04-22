import React from 'react';
import ClassNames from 'classnames';

import { Btn, Block, Text, Utils, List, ListItem, Icon} from 'react-essence';

class DashboardMaillist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Block classes={'maillist e-flex-container e-align-row'}>
        <Block>
          <Icon name={"action-grade"} className={"e-text-yellow-500 e-title"} />
        </Block>
        <Block>
          <Block classes={'e-flex-container e-align-row space-between'}>
            <Text type={'strong'} classes={'e-subhead e-text-black'}> Christopher P. Smith </Text>
            <Text type={'span'} classes={'e-subhead e-text-grey-300'}> 10.34 AM</Text>
          </Block>
          <Text type={'p'} classes={'e-subhead e-text-black'}> Christopher P. Smith </Text>
          <Text type={'p'} classes={'e-subhead e-text-grey-600'}> Hello there! As a reader of our ebooks, I would like... </Text>
        </Block>
      </Block>
    );
  }
}

class DashboardMailbox extends React.Component {

    render() {
        return (
        	<Block classes={'dashboard-mailbox'}>
            <DashboardMaillist />
            <DashboardMaillist classes={'selected'}/>
            <DashboardMaillist />
            <DashboardMaillist />
            <DashboardMaillist />
            <DashboardMaillist />
            <DashboardMaillist />
			    </Block>
        );
    }
}

module.exports = DashboardMailbox;
