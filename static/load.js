function Text(props) {
    return <p>{props.text}</p>
}

const e = React.createElement;

function Table(props) {
    return  <tbody>{props.rows}</tbody>
}

function Row(props) {
    return <tr id={props.row}>{props.cells}</tr>;
}

function Cell(props) {
    return <td>{props.i}</td>;
}

var rows = [];
for(var i = 0; i < 10; i++) {
    var cols = [];
    for(var j = 0; j < 10; j++) {
        var cell = e(Cell, {i: i*10 + j});
        cols.push(cell);
    }
    var row = <Row row={"row" + i} cells={cols} />
    rows.push(row);
}
var table = e(Table, {rows: rows});
ReactDOM.render(table, document.getElementsByTagName('body')[0]);
console.log(rows);


// const dom = document.querySelector('body');
// ReactDOM.render(e(Text, {text: 'text'}), dom);