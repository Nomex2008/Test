const createElements = () => {
    let root = document.createElement('div')
    let text = document.createElement('div')
    let container = document.createElement('div')
    let load = document.createElement('div')

    return { root, text, container, load}
};

const setAttribute = ({ root, text, container, load}) => {
    root.setAttribute('class', 'root')
    text.setAttribute('class', 'text')
    container.setAttribute('class', 'container')
    load.setAttribute('class', 'load')
};

const startCounting = ({width, load, text, interval}) => {
    let count = 0;
    let intervalId;
    console.log('startCounting')

    const func = () => {
        if (count === width ) {
            clearInterval(intervalId)
            return
        };

        var a = load.style.width = count + '%';
        var b = text.textContent = count + '%';
        console.log(b)
        count++
    };

    intervalId = setInterval(func, interval)
};

const init = () => {
    const { root, text, container, load} = createElements();
    setAttribute({ root, text, container, load});


    document.body.appendChild(root);
    root.appendChild(text);
    root.appendChild(container);
    container.appendChild(load);

    startCounting({width:76, text, load, interval:20});
};

init();