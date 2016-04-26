import React from 'react';
import ClassNames from 'classnames';

import { Btn, Block, Text, Utils, List, ListItem, Icon} from 'react-essence';

class DashboardMaillist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        classes: ClassNames(
            this.props.classes,
            this.props.className
        )
    };
  }

  render() {
    return (
      <Block classes={ClassNames('maillist e-flex-container e-align-row', this.state.classes)}>
        <Block>
          <Icon name={"action-grade"} className={"e-text-yellow-500 e-title"} />
        </Block>
        <Block>
          <Block classes={'e-flex-container e-align-row space-between'}>
            <Text type={'strong'} classes={'e-subhead e-text-black'}> Christopher P. Smith </Text>
            <Text type={'span'} classes={'e-subhead e-text-grey-300'}> 10.34 AM</Text>
          </Block>
          <Block>
            <Text type={'label'} classes={ClassNames('e-text-center e-text-uppercase e-text-white hide', this.state.classes)}> Important </Text>
            <Text type={'label'} classes={ClassNames('e-text-center e-text-uppercase e-text-white hide', this.state.classes)}> finances </Text>
            <Text type={'label'} classes={ClassNames('e-text-center e-text-uppercase e-text-white hide', this.state.classes)}> dashboard </Text>
            <Text type={'p'} classes={'e-subhead e-text-black inline'}> Dashboard ideas </Text>
          </Block>
          <Text type={'p'} classes={'e-subhead e-text-grey-600'}> Hello there! As a reader of our ebooks, I would like... </Text>
        </Block>
      </Block>
    );
  }
}

class DashboardMailbox extends React.Component {

    render() {
        return (
        	<Block className={'dashboard-mailbox'}>
            <DashboardMaillist />
            <DashboardMaillist className={'selected'} />
            <DashboardMaillist className={'important'} />
            <DashboardMaillist />
            <DashboardMaillist className={'important finances'} />
            <DashboardMaillist className={'dashboard'} />
            <DashboardMaillist />
			    </Block>
        );
    }
}

module.exports = DashboardMailbox;
