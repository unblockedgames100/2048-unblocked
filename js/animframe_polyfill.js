!function() {
    for (var n = 0, i = ["webkit", "moz"], e = 0; e < i.length && !window.requestAnimationFrame; ++e)
        window.requestAnimationFrame = window[i[e] + "RequestAnimationFrame"],
        window.cancelAnimationFrame = window[i[e] + "CancelAnimationFrame"] || window[i[e] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(i, e) {
        var a = (new Date).getTime()
          , o = Math.max(0, 16 - (a - n))
          , t = window.setTimeout((function() {
            i(a + o)
        }
        ), o);
        return n = a + o,
        t
    }
    ),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(n) {
        clearTimeout(n)
    }
    )
}();
