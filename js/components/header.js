import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem} from 'react-essence';

class MobileHeader extends React.Component {

    render() {
        return (
        	<AppBar classes={'e-background-indigo-800'}>
        		<Block className={'e-container '}>
        			<Block className={'brick-12 e-no-margin'}>
						<List type={'inline'}>
							<ListItem>
								<Text type={'a'} href={'#Home'} className={'e-text-uppercase e-text-white'}>Mobile</Text>
							</ListItem>																			
						</List>						
					</Block>
				</Block>
			</AppBar>
        );
    }
}

module.exports = MobileHeader;