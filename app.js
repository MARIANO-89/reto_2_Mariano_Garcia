const drag = (ev) => {
    ev.dataTransfer.setData('text', ev.target.id);
};

const drop = (ev, type) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
    if (type === 'suma') {
        document.getElementById('total').innerHTML =
            Number(document.getElementById(data).getElementsByTagName('span')[0].innerText) +
            Number(document.getElementById('total').innerText);
    } else {
        document.getElementById('total').innerHTML =
            Number(document.getElementById('total').innerText) -
            Number(document.getElementById(data).getElementsByTagName('span')[0].innerText);
    }
};

const allowDrop = (ev) => {
    ev.preventDefault();
};
