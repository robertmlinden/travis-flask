sheet = document.getElementById('sheet');
console.log(sheet);
tr = document.createElement('tr');
td = document.createElement('td');
td.innerText = 'test';

tr.append(td);
sheet.appendChild(tr)

// class Tile extends React.Component {
//     constructor(props) {
//         super(props);
//         this.index = props.index
//     }

//     render() {
//         return(
//             <td>{this.index}</td>
//         );
//     }
// }


// const e = React.createElement;
// const sheet = document.querySelector('#sheet');
// tr = e('tr', {id: 'tr-0'});
// ReactDom.render(tr, sheet);
// td = e(Tile, {index: (0)});
// ReactDom.render(td, tr);