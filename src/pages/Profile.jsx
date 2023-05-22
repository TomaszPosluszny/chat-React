import { useSelector, useDispatch } from 'react-redux';

export default function Profile() {
	const dispatch = useDispatch();
	const username = useSelector((state) => state.username);

	const usernameHandler = (e) => {
		const usernameAction = { type: 'CHANGE_USERNAME', payload: e.target.value };
		dispatch(usernameAction);
	};

	return (
		<section>
			<h1>Profile</h1>
			<h3>Mój nik to:{username}</h3>
			<label>
				Podaj swój nik:
				<input value={username} onChange={usernameHandler} />
			</label>
		</section>
	);
}
