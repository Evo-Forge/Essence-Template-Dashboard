import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem} from 'react-essence';

class MobileFooter extends React.Component {

    render() {
        return (
        	<Block type={'footer'} classes={'e-text-white e-text-center e-background-indigo-500'}>
        		<Block classes={'e-container'}>	        	
	        			<Text type={'p'} classes={'e-caption e-text-white'}>
	        				&copy; 2016 Materiable
	        			</Text>				
				</Block>
			</Block>
        );
    }
}

module.exports = MobileFooter;