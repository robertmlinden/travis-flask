function Text(props) {
    return <p>{props.text}</p>
}

const e = React.createElement;

function Spreadsheet(props) {
    var rows = [];
    for(var i = 0; i < 10; i++) {
        var cols = [];
        for(var j = 0; j < 10; j++) {
            var cell = <Cell index={i*10 + j} />;
            cols.push(cell);
        }
        var row = <Row row={i} cells={cols} />
        rows.push(row);
    }
    return  <table><tbody>{rows}</tbody></table>
}

function Row(props) {
    return <tr key={props.row} id={"row-" + props.row}>{props.cells}</tr>;
}

function Cell(props) {
    return <td key={props.index} id={"cell-" + props.index}>{props.index}</td>;
}

var table = e(Spreadsheet, {});
ReactDOM.render(table, document.getElementsByTagName('body')[0]);


// const dom = document.querySelector('body');
// ReactDOM.render(e(Text, {text: 'text'}), dom);