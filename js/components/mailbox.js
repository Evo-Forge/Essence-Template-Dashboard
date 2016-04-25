import React from 'react';
import ClassNames from 'classnames';

import { Btn, Block, Text, Utils, List, ListItem, Icon} from 'react-essence';

var data = [
  {id: 1, author: 'Christopher P. Smith', title: 'Updated project details', email: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'},
  {id: 2, author: 'Michael Myers', title: 'Dashboard ideas', email: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'},
  {id: 3, author: 'Christopher P. Smith', title: 'Dashboard ideas', email: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'},
  {id: 4, author: 'Antonio A. Gillespie', title: 'Updated project details', email: '4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'},
  {id: 5, author: 'Christopher P. Smith', title: 'Updated project details', email: '5Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'},
  {id: 6, author: 'Antonio A. Gillespie', title: 'Updated project details', email: '6Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'},
  {id: 7, author: 'Christopher P. Smith', title: 'Updated project details', email: '7Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'}
];

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
          <Text type={'p'} classes={'e-subhead e-text-black'}> Dashboard ideas </Text>
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
