import React from 'react';
import io from 'socket.io-client';

export default class ChatComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			myMessage: '',
			messages: [],
		};
		this.connectionChat = null;
	}

	componentDidMount() {
		if (!this.connectionChat) {
			this.connectionChat = io.connect('https://chat-server.fbg.pl');
			this.connectionChat.on('chat message', (message) => {
				this.setState((state) => {
					return { messages: [...state.messages, message] };
				});
			});
		}
	}
	messageChange = (e) => {
		this.setState({ myMessage: e.target.value });
	};
	sendMessage = () => {
		this.connectionChat.emit('chat message', {
			authorId: this.props.username,
			text: this.state.myMessage,
		});
	};
	render() {
		return (
			<div>
				<h2>Rozmowa</h2>
				<div>
					<input onChange={this.messageChange} />
					<button on onClick={this.sendMessage}>
						Wyślij
					</button>
				</div>
				<ul>
					{this.state.messages.map((message, index) => (
						<li key={index}>
							<b>{message.authorId}</b>: <span>{message.text}</span>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
