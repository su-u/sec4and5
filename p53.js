const EPS = 0.00000001;

function main() {
    let x = 0.0,
        y = 0.0;
    let h = 0.01,
        dx = 1.0,
        xmax = 10.0; // 初期条件
    let ddx = 0.0;
    let k1, k2, k3, k4;

    var res = document.querySelector('#result');
    addToTable(res, 'X', 'Y', 'th'); // ヘッダ表示

    do {
        if (x >= ddx - EPS) {
            ddx += dx;
            addToTable(res, x, y, 'td');
        }

        k1 = func_f(x, y);
        k2 = func_f(x + h / 2.0, y + (h * k1) / 2.0);
        k3 = func_f(x + h / 2.0, y + (h * k2) / 2.0);
        k4 = func_f(x + h, y + k3 * h);

        y += (h / 6.0) * (k1 + 2.0 * k2 + 2.0 * k3 + k4);
        x += h;
    } while (x <= xmax);
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
