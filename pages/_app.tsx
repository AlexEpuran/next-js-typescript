import '../styles/globals.css';
import List from './List';
import AddToList from './AddToList';

import React, { useState } from 'react';

export interface IState {
	people: {
		name: string;
		age: number;
		url: string;
		notes?: string;
	}[];
}

const _app = () => {
	const [people, setPeople] = useState<IState['people']>([]);

	return (
		<div className='w-screen h-screen '>
			<h1 className='text-center my-8 font-bold text-2xl'>People</h1>
			<List people={people} />
			<AddToList people={people} setPeople={setPeople} />
		</div>
	);
};

export default _app;
