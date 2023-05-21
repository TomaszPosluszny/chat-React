import { NavLink } from 'react-router-dom';
export default function Navigation() {
	return (
		<ul className='navbar'>
			<li>
				{' '}
				<NavLink to='/'>Pages</NavLink>
			</li>
			<li>
				<NavLink to='/chat'>Chat</NavLink>
			</li>
			<li>
				<NavLink to='*'>Error</NavLink>
			</li>
		</ul>
	);
}
