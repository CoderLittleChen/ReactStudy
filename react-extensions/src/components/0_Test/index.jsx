import React, { Component } from 'react';

export default function App() {
	const [state, setState] = React.useState(1);

	React.useEffect(() => {
		console.log('mount');
		setTimeout(() => setState(s => s + 1), 1000);
		return () => {
			console.log('unmount');
		};
	}, []);

	return <div>{state}</div>;
}
