import React from 'react';

export default class ChatComponent extends React.Component {
	render() {
		return (
            <div>
                <h2>Rozmowa</h2>
                <div><input/>
                <button>Wyślij</button></div>
			<ul>
				<li>
					<b>Wiktor</b> hej hej
				</li>
                <li>
					<b>Ela</b> co tam
				</li>
                <li>
					<b>Wiktor</b> nic
				</li>
			</ul>
            </div>
		);
	}
}
