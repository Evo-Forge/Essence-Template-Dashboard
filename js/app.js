import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

/* Use of components */

// Essence core
import {Block} from 'react-essence';

// Components
import DashboardMain from './components/main';


class Dashboard extends React.Component {
	render() {
        return(
        	<Block>
						<DashboardMain />
        	</Block>
        );
    }
}

ReactDOM.render(
	<Block>
		<Dashboard />
	</Block>
	,
	document.querySelector('.app')
);
