const N = 30; // 積分刻み数

function main() {
    var y = new Array(N + 1);
    var xa = 0.0,
        xb = 3.0; // 積分範囲
    var z1 = 0.0,
        z2 = 0.0,
        s;

    var h = (xb - xa) / N; // 刻み計算

    for (var i = 0; i <= N; i++) {
        // 関数値計算
        var x = xa + h * i;
        y[i] = func_y(x);
    }

    for (var i = 1; i <= N - 1; i += 2) {
        // 数値積分
        z1 += 4.0 * y[i];
    }
    for (var i = 2; i <= N - 2; i += 2) {
        // 数値積分
        z2 += 2.0 * y[i];
    }
    s = (h / 3.0) * (y[0] + z1 + z2 + y[N]); // 式(4.11)
    console.log('ANS = ' + s); // 解答打ち出し
}

// 積分関数 x^4 + x2 定義
function func_y(x) {
    return Math.pow(x, 4.0) + 2.0 * x;
}
