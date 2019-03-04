// sheet = document.getElementById('sheet');
// console.log(sheet);
// tr = document.createElement('tr');
// td = document.createElement('td');
// td.innerText = 'test';

// tr.append(td);
// sheet.appendChild(tr)

function Text(props) {
    return <p>{props.text}</p>
}


const e = React.createElement;
const dom = document.querySelector('body');
ReactDOM.render(e(Text, {text: 'text'}), dom);