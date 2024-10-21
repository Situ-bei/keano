import "./chunk-G3PMV62Z.js";

// node_modules/@moefy-canvas/core/dist/index.js
var p = (r3, t2, i) => {
  if (!t2.has(r3))
    throw TypeError("Cannot " + i);
};
var e = (r3, t2, i) => (p(r3, t2, "read from private field"), i ? i.call(r3) : t2.get(r3));
var w = (r3, t2, i) => {
  if (t2.has(r3))
    throw TypeError("Cannot add the same private member more than once");
  t2 instanceof WeakSet ? t2.add(r3) : t2.set(r3, i);
};
var g = (r3, t2, i, s2) => (p(r3, t2, "write to private field"), s2 ? s2.call(r3, i) : t2.set(r3, i), i);
var f = class {
  constructor(t2, i) {
  }
};
var C = 2147483647;
var n;
var d;
var u = class {
  constructor(t2, i, s2, h2 = true) {
    w(this, n, void 0);
    w(this, d, void 0);
    g(this, n, { width: 0, height: 0 });
    const { el: l3, ctx: o2 } = u.initCanvas(t2);
    this.el = l3, this.ctx = o2, g(this, d, h2), this.size = { width: i || window.innerWidth, height: s2 || window.innerHeight };
  }
  get size() {
    return {
      ...e(this, n)
    };
  }
  set size({ width: t2, height: i }) {
    var h2;
    if (e(this, n).width === t2 && e(this, n).height === i)
      return;
    e(this, n).width = t2, e(this, n).height = i;
    const s2 = (h2 = e(this, d) ? window.devicePixelRatio : 1) != null ? h2 : 1;
    this.el.width = Math.round(e(this, n).width * s2), this.el.height = Math.round(e(this, n).height * s2), this.el.style.width = e(this, n).width + "px", this.el.style.height = e(this, n).height + "px", e(this, d) && this.ctx.scale(s2, s2);
  }
  clear() {
    u.clearCanvas(this.ctx, { ...e(this, n) });
  }
  to(t2) {
    t2.ctx.drawImage(this.el, 0, 0, e(this, n).width, e(this, n).height);
  }
  handleResize(t2) {
    this.size = { width: window.innerWidth, height: window.innerHeight };
  }
  static setCanvasStyle(t2, i, s2) {
    const h2 = t2.style, { zIndex: l3 = 0, opacity: o2 = 1 } = i;
    h2.position = "fixed", h2.top = "0", h2.left = "0", h2.zIndex = l3.toString(), h2.width = (s2 ? s2.width : t2.width).toString() + "px", h2.height = (s2 ? s2.height : t2.height).toString() + "px", o2 !== 1 && (h2.opacity = o2.toString()), h2.pointerEvents = "none";
  }
  static initCanvas(t2) {
    t2 || (t2 = document.createElement("canvas"));
    const i = t2.getContext("2d");
    return {
      el: t2,
      ctx: i
    };
  }
  static createOffscreenCanvas() {
    return new u();
  }
  static clearCanvas(t2, i) {
    const { width: s2, height: h2 } = i;
    t2.clearRect(0, 0, s2, h2);
  }
};
var x = u;
n = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
var a;
var c;
var y = class {
  constructor(t2, i, s2, h2 = true, l3 = true, o2 = {
    zIndex: 0,
    opacity: 1
  }) {
    w(this, a, void 0);
    w(this, c, void 0);
    g(this, a, new x(t2, i, s2, h2)), x.setCanvasStyle(e(this, a).el, o2, { width: i, height: s2 }), g(this, c, l3 ? new x(void 0, i, s2, h2) : null);
  }
  get size() {
    return e(this, a).size;
  }
  draw(t2) {
    var s2;
    const i = (s2 = e(this, c)) != null ? s2 : e(this, a);
    i.clear(), t2(i.ctx, {
      ...i.size
    });
  }
  render() {
    !e(this, c) || (e(this, a).clear(), e(this, c).to(e(this, a)));
  }
  handleResize(t2) {
    e(this, a).handleResize(t2), e(this, c) && e(this, c).handleResize(t2);
  }
  clear() {
    e(this, a).clear(), e(this, c) && e(this, c).clear();
  }
};
a = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();

// node_modules/@moefy-canvas/utils/dist/index.js
var f2 = (o2, t2, e3) => {
  if (!t2.has(o2))
    throw TypeError("Cannot " + e3);
};
var r = (o2, t2, e3) => (f2(o2, t2, "read from private field"), e3 ? e3.call(o2) : t2.get(o2));
var h = (o2, t2, e3) => {
  if (t2.has(o2))
    throw TypeError("Cannot add the same private member more than once");
  t2 instanceof WeakSet ? t2.add(o2) : t2.set(o2, e3);
};
var d2 = (o2, t2, e3, n3) => (f2(o2, t2, "write to private field"), n3 ? n3.call(o2, e3) : t2.set(o2, e3), e3);
var p2 = (o2) => typeof o2 == "string";
var s;
var M = class {
  constructor() {
    h(this, s, void 0);
    d2(this, s, /* @__PURE__ */ new Map());
  }
  add(t2, e3, n3 = window) {
    r(this, s).has(n3) || r(this, s).set(n3, /* @__PURE__ */ new Map());
    const c3 = r(this, s).get(n3);
    c3.has(t2) || c3.set(t2, /* @__PURE__ */ new Set()), c3.get(t2).add(e3);
  }
  startAll() {
    for (const [t2, e3] of r(this, s))
      for (const [n3, c3] of e3)
        for (const a2 of c3)
          t2.addEventListener(n3, a2);
  }
  stopAll() {
    for (const [t2, e3] of r(this, s))
      for (const [n3, c3] of e3)
        for (const a2 of c3)
          t2.removeEventListener(n3, a2);
  }
  clear() {
    r(this, s).clear();
  }
};
s = /* @__PURE__ */ new WeakMap();
function g2() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function w2(o2) {
  return !!o2.touches;
}
function v(o2, {
  leftColor: t2 = "#fff",
  rightColor: e3 = "#444",
  leftBgColor: n3 = "#35495e",
  rightBgColor: c3 = "#00ffc0"
} = {}) {
  console.log(
    `%c ${o2} %c v0.5.2 112fa81 %c`,
    `background: ${n3}; padding: 2px; color: ${t2}; font-weight: bold; text-transform: uppercase;`,
    `background: ${c3}; padding: 2px; color: ${e3}; font-weight: bold; text-transform: uppercase;`,
    "background: transparent"
  );
}
function l() {
  return window.matchMedia("(prefers-color-scheme: dark)");
}
function b() {
  return !!l().matches;
}

// node_modules/ts-debounce/dist/src/index.esm.js
function r2(r3, e3, n3) {
  var i, t2, o2;
  void 0 === e3 && (e3 = 50), void 0 === n3 && (n3 = {});
  var a2 = null != (i = n3.isImmediate) && i, u3 = null != (t2 = n3.callback) && t2, c3 = n3.maxWait, v3 = Date.now(), l3 = [];
  function f4() {
    if (void 0 !== c3) {
      var r4 = Date.now() - v3;
      if (r4 + e3 >= c3) return c3 - r4;
    }
    return e3;
  }
  var d4 = function() {
    var e4 = [].slice.call(arguments), n4 = this;
    return new Promise(function(i2, t3) {
      var c4 = a2 && void 0 === o2;
      if (void 0 !== o2 && clearTimeout(o2), o2 = setTimeout(function() {
        if (o2 = void 0, v3 = Date.now(), !a2) {
          var i3 = r3.apply(n4, e4);
          u3 && u3(i3), l3.forEach(function(r4) {
            return (0, r4.resolve)(i3);
          }), l3 = [];
        }
      }, f4()), c4) {
        var d5 = r3.apply(n4, e4);
        return u3 && u3(d5), i2(d5);
      }
      l3.push({ resolve: i2, reject: t3 });
    });
  };
  return d4.cancel = function(r4) {
    void 0 !== o2 && clearTimeout(o2), l3.forEach(function(e4) {
      return (0, e4.reject)(r4);
    }), l3 = [];
  }, d4;
}

// node_modules/@moefy-canvas/theme-meteor/dist/index.js
var Y = (r3, i, h2) => {
  if (!i.has(r3))
    throw TypeError("Cannot " + h2);
};
var t = (r3, i, h2) => (Y(r3, i, "read from private field"), h2 ? h2.call(r3) : i.get(r3));
var e2 = (r3, i, h2) => {
  if (i.has(r3))
    throw TypeError("Cannot add the same private member more than once");
  i instanceof WeakSet ? i.add(r3) : i.set(r3, h2);
};
var d3 = (r3, i, h2, s2) => (Y(r3, i, "write to private field"), s2 ? s2.call(r3, h2) : i.set(r3, h2), h2);
var l2 = (r3, i, h2) => (Y(r3, i, "access private method"), h2);
var o;
var g3;
var f3;
var v2 = class {
  constructor(i = 0, h2 = 0, s2 = 0) {
    e2(this, o, null);
    e2(this, g3, null);
    e2(this, f3, 50);
    this.x = i, this.y = h2, this.z = s2;
  }
  bindGlobalSpeed(i) {
    return d3(this, o, i), this;
  }
  bindColor(i) {
    return d3(this, g3, i), this;
  }
  reset(i, h2 = false) {
    h2 || (this.x = Math.random() * i.width, this.y = Math.random() * i.height), this.z = 0.2 + Math.random() * 0.8;
  }
  move(i) {
    let h2, s2, a2;
    if (this.x += t(this, o).x * this.z, this.y += t(this, o).y * this.z, this.x += (this.x - i.width / 2) * t(this, o).z * this.z, this.y += (this.y - i.height / 2) * t(this, o).z * this.z, this.z += t(this, o).z, this.x < -t(this, f3) || this.x > i.width + t(this, f3) || this.y < -t(this, f3) || this.y > i.height + t(this, f3))
      switch (h2 = "z", s2 = Math.abs(t(this, o).tx), a2 = Math.abs(t(this, o).ty), s2 > 1 && a2 > 1 && (h2 = (s2 > a2 ? Math.random() < Math.abs(t(this, o).x) / (s2 + a2) ? "h" : "v" : Math.random() < Math.abs(t(this, o).y) / (s2 + a2) ? "v" : "h") == "h" ? t(this, o).x > 0 ? "l" : "r" : t(this, o).y > 0 ? "t" : "b"), this.reset(i, true), h2) {
        case "z":
          this.z = 0.1, this.x = Math.random() * i.width, this.y = Math.random() * i.height;
          break;
        case "l":
          this.x = -3, this.y = Math.random() * i.height;
          break;
        case "r":
          this.x = i.width + 3, this.y = Math.random() * i.height;
          break;
        case "t":
          this.x = Math.random() * i.width, this.y = -3;
          break;
        case "b":
          this.x = Math.random() * i.width, this.y = i.height + 3;
      }
  }
  draw(i, h2) {
    i.lineCap = "round", i.lineWidth = 3 * this.z, i.strokeStyle = t(this, g3), i.beginPath(), i.moveTo(this.x, this.y);
    let s2 = 2 * t(this, o).x, a2 = 2 * t(this, o).y;
    Math.abs(s2) < 0.1 && (s2 = 0.5), Math.abs(a2) < 0.1 && (a2 = 0.5), i.lineTo(this.x + s2, this.y + a2), i.stroke();
  }
};
o = /* @__PURE__ */ new WeakMap(), g3 = /* @__PURE__ */ new WeakMap(), f3 = /* @__PURE__ */ new WeakMap();
var M2;
var y2;
var w3;
var u2;
var c2;
var b2;
var n2;
var p3;
var x2;
var m;
var P;
var L;
var T;
var R;
var A;
var O;
var H;
var V;
var B;
var j;
var k;
var q;
var z;
var C2;
var F;
var I;
var W;
var J;
var X;
var K;
var et = class {
  constructor({ numParticles: i = null, particleColor: h2 = "rgba(102, 175, 239, .2)" } = {}, s2 = {}) {
    e2(this, P);
    e2(this, T);
    e2(this, A);
    e2(this, H);
    e2(this, B);
    e2(this, k);
    e2(this, z);
    e2(this, F);
    e2(this, W);
    e2(this, X);
    e2(this, M2, void 0);
    e2(this, y2, void 0);
    e2(this, w3, void 0);
    e2(this, u2, null);
    e2(this, c2, /* @__PURE__ */ new Set());
    e2(this, b2, null);
    e2(this, n2, { x: 0, y: 0, tx: 0, ty: 0, z: 5e-4 });
    e2(this, p3, false);
    e2(this, x2, false);
    e2(this, m, new M());
    d3(this, M2, i), p2(h2) && (h2 = { light: h2, dark: h2 }), d3(this, y2, h2), d3(this, w3, s2), this.animate = this.animate.bind(this);
  }
  mount(i) {
    d3(this, x2, false), d3(this, u2, new y(
      i,
      window.innerWidth,
      window.innerHeight,
      true,
      true,
      t(this, w3)
    )), l2(this, P, L).call(this), l2(this, B, j).call(this), l2(this, A, O).call(this), v("Theme Meteor 🌠", { leftBgColor: "#66afe0" });
  }
  unmount() {
    l2(this, H, V).call(this), l2(this, T, R).call(this), d3(this, x2, true), d3(this, b2, null);
  }
  animate(i) {
    if (t(this, x2)) {
      t(this, u2).clear();
      return;
    }
    if (requestAnimationFrame(this.animate), !t(this, p3)) {
      t(this, n2).tx *= 0.95, t(this, n2).ty *= 0.95, t(this, n2).x += 0.7 * (t(this, n2).tx - t(this, n2).x), t(this, n2).y += 0.7 * (t(this, n2).ty - t(this, n2).y);
      for (const h2 of t(this, c2))
        h2.move(t(this, u2).size);
      t(this, u2).draw((h2, s2) => {
        for (const a2 of t(this, c2))
          a2.draw(h2, i);
      }), t(this, u2).render();
    }
  }
};
M2 = /* @__PURE__ */ new WeakMap(), y2 = /* @__PURE__ */ new WeakMap(), w3 = /* @__PURE__ */ new WeakMap(), u2 = /* @__PURE__ */ new WeakMap(), c2 = /* @__PURE__ */ new WeakMap(), b2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap(), p3 = /* @__PURE__ */ new WeakMap(), x2 = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakSet(), L = function() {
  var s2;
  const i = (s2 = t(this, M2)) != null ? s2 : (window.innerWidth + window.innerHeight) / 8, h2 = b() ? t(this, y2).dark : t(this, y2).light;
  for (let a2 = 0; a2 < i; a2++) {
    const D = new v2(0, 0, 0).bindColor(h2).bindGlobalSpeed(t(this, n2));
    D.reset(t(this, u2).size, false), t(this, c2).add(D);
  }
}, T = /* @__PURE__ */ new WeakSet(), R = function() {
  t(this, c2).clear();
}, A = /* @__PURE__ */ new WeakSet(), O = function() {
  g2() ? (t(this, m).add("touchmove", l2(this, k, q).bind(this)), t(this, m).add("touchend", l2(this, z, C2).bind(this))) : (t(this, m).add("mousemove", l2(this, k, q).bind(this)), t(this, m).add("mouseleave", l2(this, z, C2).bind(this))), t(this, m).add("visibilitychange", l2(this, X, K).bind(this)), t(this, m).add(
    "change",
    l2(this, W, J).bind(this),
    l()
  ), t(this, m).add("resize", r2(l2(this, F, I).bind(this), 500)), t(this, m).startAll();
}, H = /* @__PURE__ */ new WeakSet(), V = function() {
  t(this, m).stopAll(), t(this, m).clear();
}, B = /* @__PURE__ */ new WeakSet(), j = function() {
  requestAnimationFrame(this.animate);
}, k = /* @__PURE__ */ new WeakSet(), q = function(i) {
  const h2 = {
    x: w2(i) ? i.touches[0].clientX : i.clientX,
    y: w2(i) ? i.touches[0].clientY : i.clientY
  };
  if (t(this, b2)) {
    const s2 = {
      x: h2.x - t(this, b2).x,
      y: h2.y - t(this, b2).y
    };
    t(this, n2).tx = t(this, n2).x + s2.x / 8, t(this, n2).ty = t(this, n2).y + s2.y / 8;
  }
  d3(this, b2, h2);
}, z = /* @__PURE__ */ new WeakSet(), C2 = function(i) {
  d3(this, b2, null);
}, F = /* @__PURE__ */ new WeakSet(), I = function(i) {
  t(this, u2).handleResize(i);
  for (const h2 of t(this, c2))
    h2.reset(t(this, u2).size, false);
}, W = /* @__PURE__ */ new WeakSet(), J = function(i) {
  const h2 = b() ? t(this, y2).dark : t(this, y2).light;
  for (const s2 of t(this, c2))
    s2.bindColor(h2);
}, X = /* @__PURE__ */ new WeakSet(), K = function(i) {
  d3(this, p3, document.hidden);
};
export {
  y as DrawBoard,
  C as MAX_Z_INDEX,
  et as Meteor,
  f as Theme
};
//# sourceMappingURL=@moefy-canvas_theme-meteor.js.map
