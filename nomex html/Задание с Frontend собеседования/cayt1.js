const createElement = () => {
	const root = document.createElement('div');
	const root__text = document.createElement('div');
	const root__container = document.createElement('div');
	const root__loud = document.createElement('div');

	return {root, root__text, root__container, root__loud};
};

const setAttribute = ({ root, root__text, root__container, root__loud }) => {
	root.setAttribute('class', 'root');
	root__text.setAttribute('class', 'root__text');
	root__container.setAttribute('class', 'root__container');
	root__loud.setAttribute('class', 'root__loud');
};

const startCounting = ({width, root__text, root__loud }) => {
	let count = 0;
	//let intervalID;
	console.log('StartCounting')

	const countFun = (root__loud) => {
		root__loud.root__text.width = '${count}';
		count++;

	};



	setInterval(countFun, 20);

};

const init = ()=> {
	const { root, root__text, root__container, root__loud } = createElement();
	setAttribute({ root, root__text, root__container, root__loud });
	
	document.body.appendChild(root);
	root.appendChild(root__text);
	root.appendChild(root__container);
	root__container.appendChild(root__loud);

	startCounting({width : 75, root__text, root__loud})
};

init();
