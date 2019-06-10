const EPS = 0.00000001;

function main() {
    var x = 0.0,
        y = 0.0;
    var h = 0.01,
        dx = 1.0,
        xmax = 10.0; // 初期条件
    var ddx = 0.0;

    var res = document.querySelector('#result');
    addToTable(res, 'X', 'Y', 'th'); // ヘッダ表示

    do {
        if (x >= ddx - EPS) {
            ddx += dx;
            addToTable(res, x, y, 'td'); // 表示
        }

        y += h * func_f(x); // 関数値増加
        x += h; // 式(5.4)
    } while (x <= xmax); // 式(5.5)
}

// 原関数 f(x) = 2x 定義
function func_f(x) {
    return 2.0 * x;
}

/**
 * テーブル要素に回答を追加する関数
 * @param {HTMLTableElement} elem 追加するTable要素
 * @param {number} x xの値
 * @param {number} y yの値
 * @param {string} classification "th"か"td"を指定する
 */
function addToTable(elem, x, y, classification) {
    var table_row = document.createElement('tr');
    var tdx = document.createElement(classification);
    var tdy = document.createElement(classification);
    tdx.appendChild(document.createTextNode(x));
    tdy.appendChild(document.createTextNode(y));
    table_row.appendChild(tdx);
    table_row.appendChild(tdy);
    elem.appendChild(table_row);
}
