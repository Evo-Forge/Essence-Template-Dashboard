import React from 'react';
import ClassNames from 'classnames';

import { Btn, Block, Text, Utils, List, ListItem, Icon, Image, Input} from 'react-essence';

class DashboardReply extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Block classes={'reply'}>
        <Block classes={'e-flex-container e-align-row'}>
          <Icon name={"image-panorama-fisheye"} className={"e-text-grey-400"} />
          <Block classes={'e-flex-container space-between adjust-w'}>
            <Block classes={'e-flex-container space-around from'}>
            <Text classes={'e-subhead e-text-black'}>Carmen Thibodaux</Text>
              <Text classes={'e-subhead e-text-grey-400'}>to</Text>
              <Text classes={'e-subhead e-text-black'}>Michael Myers</Text>
            </Block>
            <Block classes={'e-flex-container space-between e-align-row'}>
              <Text classes={'e-body1 e-text-grey-400'}>10.34 AM Jan 12th, 2016</Text>
            </Block>
          </Block>
        </Block>
        <Block>
          <Text type={'p'} classes={'e-subhead e-text-black padding-25'}>
            Michael
          </Text>
          <Text type={'p'} classes={'e-subhead e-text-black padding-25'}>
            Hamburger brisket cupim, porchetta landjaeger alcatra doner jowl  turkey pork loin. Ball tip shankle andouille frankfurter shank pork loin pork. Porchetta landjaeger alcatra doner.
          </Text>
        </Block>
      </Block>
    );
  }
}
class DashboardReplyForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Block classes={'reply-form e-flex-container e-align-row space-between e-background-grey-100 e-margin-top-15'}>
        <Input type={'textarea'} name={'label'} rows={3} placeholder={'Type here to reply...'}/>
        <Btn label={'Send'} ripple={true} type={'success'} className={'flat e-background-grey-200'} />
      </Block>
    );
  }
}

class DashboardConversation extends React.Component {

    render() {
        return (
        	<Block classes={'dashboard-conversation'}>
            <Block>
              <Text type={'h1'} classes={'e-display-1 e-text-black padding-25'}>Dashboard ideas</Text>
            </Block>
            <Block classes={'e-flex-container e-align-row'}>
              <Icon name={"image-panorama-fisheye"} className={"e-text-grey-400"} />
              <Block classes={'e-flex-container space-between adjust-w'}>
                <Block classes={'e-flex-container space-around from'}>
                  <Text classes={'e-subhead e-text-black'}>Michael Myers</Text>
                  <Text classes={'e-subhead e-text-grey-400'}>to</Text>
                  <Text classes={'e-subhead e-text-black'}>Carmen Thibodaux</Text>
                </Block>
                <Block classes={'e-flex-container space-between e-align-row'}>
                  <Icon name={"editor-attach-file"} className={"e-text-grey-400"} />
                  <Text classes={'e-body1 e-text-grey-400'}>12.20 AM Jan 12th, 2016</Text>
                </Block>
              </Block>
            </Block>
            <Block>
              <Text type={'p'} classes={'e-subhead e-text-black padding-25'}>
                Hello Carmen!
              </Text>
              <Text type={'p'} classes={'e-subhead e-text-black padding-25'}>
                Hamburger brisket cupim, porchetta landjaeger alcatra doner jowl  turkey pork loin. Ball tip shankle andouille frankfurter shank pork loin pork. Porchetta landjaeger alcatra doner.
              </Text>
              <Text type={'p'} classes={'e-subhead e-text-black padding-25'}>
                Tri-tip chuck alcatra, pig bacon pancetta flank brisket filet.
              </Text>
              <Text type={'p'} classes={'e-subhead e-text-black padding-25'}>Chicken,</Text>
              <Text type={'p'} classes={'e-subhead e-text-black padding-25'}>Michael Frankfurter</Text>
              <Block>
                <Block classes={'e-subhead e-text-black padding-25'}>
                  <Text type={'span'} classes={'e-caption e-text-grey-400 e-text-uppercase'}>
                    Attachments
                  </Text>
                  <Text type={'span'} classes={'e-caption e-text-grey-400'}>
                    (2 files, 75 mb)
                  </Text>
                  <Btn icon={'file-file-download'} classes={'e-text-grey-400 e-background-grey-100'} />
                </Block>
                <Block classes={'padding-25'}>
                  <Image src={'../assets/img/img1.png'} />
                  <Image src={'../assets/img/img2.jpg'} />
                </Block>
              </Block>
            </Block>
            <DashboardReply />
            <DashboardReplyForm />
			    </Block>
        );
    }
}

module.exports = DashboardConversation;
