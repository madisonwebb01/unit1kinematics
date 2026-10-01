/* Graph renderer: draws every graph in the practice test as an inline SVG image.
   Graphs are data, so they stay exact and print crisply at any size.

   G.plot({ x:{min,max,step,label,every}, y:{min,max,step,label,every},
            series:[{ pts:[[t,v],...] | fn:t=>v, from, to, label, labelAt:[t,v], dash }],
            marks:[{t, v, text}] })
   G.dots({ rows:[{ label:"A", xs:[...], dir:1|-1 }] })   dot (ticker tape) diagrams
   G.vectors({ rows:[{ label:"A", lens:[...], dir:1|-1 }] }) vector diagrams
*/
(function () {
  var INK = "#2a0a20", GRID = "#d9cdd5", MINOR = "#efe8ec", LINE = "#a8306a";
  var COLORS = ["#a8306a", "#1f5fa8", "#c0791b", "#2f7d4f"];

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function fmt(n) { return (Math.round(n * 100) / 100).toString().replace("-", "−"); }

  function plot(o) {
    var W = 420, H = 290, L = 60, R = 14, T = 14, B = 52;
    var X = o.x, Y = o.y;
    var pw = W - L - R, ph = H - T - B;
    function sx(t) { return L + (t - X.min) / (X.max - X.min) * pw; }
    function sy(v) { return T + (Y.max - v) / (Y.max - Y.min) * ph; }
    var s = [];
    s.push('<svg class="graph" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' +
      esc((o.title || (Y.label + " versus " + X.label + " graph"))) + '" xmlns="http://www.w3.org/2000/svg">');
    s.push('<rect x="0" y="0" width="' + W + '" height="' + H + '" fill="#fff"/>');
    // grid
    var t, v, xe = X.every || 1, ye = Y.every || 1, i;
    for (i = 0, t = X.min; t <= X.max + 1e-9; t += X.step, i++) {
      s.push('<line x1="' + sx(t) + '" y1="' + T + '" x2="' + sx(t) + '" y2="' + (T + ph) + '" stroke="' + (i % xe ? MINOR : GRID) + '" stroke-width="1"/>');
      if (i % xe === 0) s.push('<text x="' + sx(t) + '" y="' + (T + ph + 19) + '" text-anchor="middle" font-size="15" fill="' + INK + '">' + fmt(t) + "</text>");
    }
    for (i = 0, v = Y.min; v <= Y.max + 1e-9; v += Y.step, i++) {
      s.push('<line x1="' + L + '" y1="' + sy(v) + '" x2="' + (L + pw) + '" y2="' + sy(v) + '" stroke="' + (i % ye ? MINOR : GRID) + '" stroke-width="1"/>');
      if (i % ye === 0) s.push('<text x="' + (L - 7) + '" y="' + (sy(v) + 4.5) + '" text-anchor="end" font-size="15" fill="' + INK + '">' + fmt(v) + "</text>");
    }
    // axes (zero line darker when the range crosses zero)
    var y0 = (Y.min <= 0 && Y.max >= 0) ? sy(0) : T + ph;
    s.push('<line x1="' + L + '" y1="' + y0 + '" x2="' + (L + pw) + '" y2="' + y0 + '" stroke="' + INK + '" stroke-width="1.8"/>');
    s.push('<line x1="' + L + '" y1="' + T + '" x2="' + L + '" y2="' + (T + ph) + '" stroke="' + INK + '" stroke-width="1.8"/>');
    s.push('<text x="' + (L + pw / 2) + '" y="' + (H - 8) + '" text-anchor="middle" font-size="16" font-weight="600" fill="' + INK + '">' + esc(X.label) + "</text>");
    s.push('<text transform="translate(16 ' + (T + ph / 2) + ') rotate(-90)" text-anchor="middle" font-size="16" font-weight="600" fill="' + INK + '">' + esc(Y.label) + "</text>");
    // series
    (o.series || []).forEach(function (se, k) {
      var pts = se.pts;
      if (!pts && se.fn) {
        pts = [];
        for (var n = 0; n <= 80; n++) { var tt = se.from + (se.to - se.from) * n / 80; pts.push([tt, se.fn(tt)]); }
      }
      var col = se.color || (o.series.length > 1 ? COLORS[k % COLORS.length] : LINE);
      var d = pts.map(function (p, j) { return (j ? "L" : "M") + sx(p[0]).toFixed(1) + " " + sy(p[1]).toFixed(1); }).join(" ");
      s.push('<path d="' + d + '" fill="none" stroke="' + col + '" stroke-width="3.4" stroke-linejoin="round" stroke-linecap="round"' + (se.dash ? ' stroke-dasharray="8 6"' : "") + "/>");
      if (se.label) {
        var la = se.labelAt || pts[pts.length - 1];
        s.push('<text x="' + (sx(la[0]) + (se.dx || 6)) + '" y="' + (sy(la[1]) + (se.dy || -6)) + '" font-size="16" font-weight="700" fill="' + col + '">' + esc(se.label) + "</text>");
      }
    });
    (o.marks || []).forEach(function (m) {
      s.push('<text x="' + sx(m.t) + '" y="' + sy(m.v) + '" text-anchor="middle" font-size="15" font-weight="700" fill="' + (m.color || INK) + '">' + esc(m.text) + "</text>");
    });
    s.push("</svg>");
    return s.join("");
  }

  function strip(o, drawRow) {
    var W = 420, rowH = 54, L = 36, R = 14;
    var H = o.rows.length * rowH + 10;
    var s = ['<svg class="graph strip" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(o.title || "Motion diagram") + '" xmlns="http://www.w3.org/2000/svg">',
      '<rect width="' + W + '" height="' + H + '" fill="#fff"/>'];
    o.rows.forEach(function (r, k) {
      var y = 8 + k * rowH;
      s.push('<text x="12" y="' + (y + 31) + '" font-size="18" font-weight="700" fill="' + LINE + '">' + esc(r.label) + "</text>");
      s.push('<rect x="' + L + '" y="' + y + '" width="' + (W - L - R) + '" height="' + (rowH - 10) + '" rx="4" fill="none" stroke="' + INK + '" stroke-width="1.5"/>');
      drawRow(s, r, L + 14, W - R - 14, y + (rowH - 10) / 2);
    });
    s.push("</svg>");
    return s.join("");
  }

  function dots(o) {
    return strip(o, function (s, r, x0, x1, cy) {
      var span = x1 - x0, max = o.max || 10;
      r.xs.forEach(function (x) {
        var px = r.dir === -1 ? x1 - x / max * span : x0 + x / max * span;
        s.push('<circle cx="' + px.toFixed(1) + '" cy="' + (cy + 6) + '" r="5.5" fill="' + LINE + '"/>');
      });
      if (r.dir) {
        var a = (x0 + x1) / 2, l = 26 * r.dir, ay = cy - 11;
        s.push('<path d="M' + (a - l) + " " + ay + " L" + (a + l) + " " + ay + '" stroke="' + INK + '" stroke-width="1.6"/>');
        s.push('<path d="M' + (a + l) + " " + ay + " l" + (-7 * r.dir) + " -4 l0 8 z" + '" fill="' + INK + '"/>');
      }
    });
  }

  function vectors(o) {
    return strip(o, function (s, r, x0, x1, cy) {
      var n = r.lens.length, slot = (x1 - x0) / n;
      r.lens.forEach(function (len, j) {
        var mid = x0 + slot * (j + 0.5), half = len * slot * 0.42 / 2, d = r.dir || 1;
        if (len === 0) { s.push('<circle cx="' + mid + '" cy="' + cy + '" r="3" fill="' + INK + '"/>'); return; }
        var a = mid - half * d, b = mid + half * d;
        s.push('<path d="M' + a + " " + cy + " L" + b + " " + cy + '" stroke="' + LINE + '" stroke-width="3"/>');
        s.push('<path d="M' + (b + 3 * d) + " " + cy + " l" + (-9 * d) + " -5 l0 10 z" + '" fill="' + LINE + '"/>');
      });
    });
  }

  window.G = { plot: plot, dots: dots, vectors: vectors };
})();
