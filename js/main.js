'use strict';

{
  function createColumn(col) {
    // const source =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const source =[];
    for (let i = 0; i<15; i++) {
      // 1 ... 15
      // source[i] = i + 1 + 15 * 0;
      // 16 ... 30
      // source[i] = i +1 + 15 * 1;
      // 31 ... 45
      // source[i] = i +1 + 15 * 2;
      source[i] = i +1 + 15 * col;
    }
  
    // Math.floor(Math.random() * (14 + 1))
    // Math.floor(Math.random() * source.length)
  
    const column = [];
    // b[0] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    // b[1] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    // b[2] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    // b[3] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    // b[4] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  
    for (let i = 0; i < 5; i++) {
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }
    return column;
  
    // console.log(b);
  }

  function createColumns() {
    const columns = [];
    // columns[0] = createColumn(0);
    // columns[1] = createColumn(1);
    // columns[2] = createColumn(2);
    // columns[3] = createColumn(3);
    // columns[4] = createColumn(4);

    for (let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE';
    // console.table(columns);
    return columns;
  }

  // function createBingo(columns) {
  //     const bingo = [];
  //     for (let row =0; row < 5; row++) {
  //       bingo[row] = [];
  //       for (let col = 0; col < 5; col++) {
  //         bingo[row][col] = columns[col][row];
  //       }
  //     }
      // console.table(bingo);
  //   return bingo;
  // }

  function renderBingo(columns) {
    for (let row = 0; row < 5; row++) {
      const tr = document.createElement('tr');
      for (let col = 0; col < 5; col++) {
        const td = document.createElement('td');
        td.textContent = columns[col][row];
        tr.appendChild(td);
      }
      document.querySelector('tbody').appendChild(tr);
    }
  }

  const columns = createColumns();
  // const bingo = createBingo(columns);
  renderBingo(columns);
}