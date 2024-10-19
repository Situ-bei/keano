import "./chunk-G3PMV62Z.js";

// node_modules/@moefy-canvas/core/dist/index.js
var p = (r3, t, i2) => {
  if (!t.has(r3))
    throw TypeError("Cannot " + i2);
};
var e = (r3, t, i2) => (p(r3, t, "read from private field"), i2 ? i2.call(r3) : t.get(r3));
var w = (r3, t, i2) => {
  if (t.has(r3))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r3) : t.set(r3, i2);
};
var g = (r3, t, i2, s3) => (p(r3, t, "write to private field"), s3 ? s3.call(r3, i2) : t.set(r3, i2), i2);
var f = class {
  constructor(t, i2) {
  }
};
var C = 2147483647;
var n;
var d;
var u = class {
  constructor(t, i2, s3, h3 = true) {
    w(this, n, void 0);
    w(this, d, void 0);
    g(this, n, { width: 0, height: 0 });
    const { el: l, ctx: o } = u.initCanvas(t);
    this.el = l, this.ctx = o, g(this, d, h3), this.size = { width: i2 || window.innerWidth, height: s3 || window.innerHeight };
  }
  get size() {
    return {
      ...e(this, n)
    };
  }
  set size({ width: t, height: i2 }) {
    var h3;
    if (e(this, n).width === t && e(this, n).height === i2)
      return;
    e(this, n).width = t, e(this, n).height = i2;
    const s3 = (h3 = e(this, d) ? window.devicePixelRatio : 1) != null ? h3 : 1;
    this.el.width = Math.round(e(this, n).width * s3), this.el.height = Math.round(e(this, n).height * s3), this.el.style.width = e(this, n).width + "px", this.el.style.height = e(this, n).height + "px", e(this, d) && this.ctx.scale(s3, s3);
  }
  clear() {
    u.clearCanvas(this.ctx, { ...e(this, n) });
  }
  to(t) {
    t.ctx.drawImage(this.el, 0, 0, e(this, n).width, e(this, n).height);
  }
  handleResize(t) {
    this.size = { width: window.innerWidth, height: window.innerHeight };
  }
  static setCanvasStyle(t, i2, s3) {
    const h3 = t.style, { zIndex: l = 0, opacity: o = 1 } = i2;
    h3.position = "fixed", h3.top = "0", h3.left = "0", h3.zIndex = l.toString(), h3.width = (s3 ? s3.width : t.width).toString() + "px", h3.height = (s3 ? s3.height : t.height).toString() + "px", o !== 1 && (h3.opacity = o.toString()), h3.pointerEvents = "none";
  }
  static initCanvas(t) {
    t || (t = document.createElement("canvas"));
    const i2 = t.getContext("2d");
    return {
      el: t,
      ctx: i2
    };
  }
  static createOffscreenCanvas() {
    return new u();
  }
  static clearCanvas(t, i2) {
    const { width: s3, height: h3 } = i2;
    t.clearRect(0, 0, s3, h3);
  }
};
var x = u;
n = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
var a;
var c;
var y = class {
  constructor(t, i2, s3, h3 = true, l = true, o = {
    zIndex: 0,
    opacity: 1
  }) {
    w(this, a, void 0);
    w(this, c, void 0);
    g(this, a, new x(t, i2, s3, h3)), x.setCanvasStyle(e(this, a).el, o, { width: i2, height: s3 }), g(this, c, l ? new x(void 0, i2, s3, h3) : null);
  }
  get size() {
    return e(this, a).size;
  }
  draw(t) {
    var s3;
    const i2 = (s3 = e(this, c)) != null ? s3 : e(this, a);
    i2.clear(), t(i2.ctx, {
      ...i2.size
    });
  }
  render() {
    !e(this, c) || (e(this, a).clear(), e(this, c).to(e(this, a)));
  }
  handleResize(t) {
    e(this, a).handleResize(t), e(this, c) && e(this, c).handleResize(t);
  }
  clear() {
    e(this, a).clear(), e(this, c) && e(this, c).clear();
  }
};
a = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();

// node_modules/@moefy-canvas/utils/dist/index.js
var f2 = (o, t, e2) => {
  if (!t.has(o))
    throw TypeError("Cannot " + e2);
};
var r = (o, t, e2) => (f2(o, t, "read from private field"), e2 ? e2.call(o) : t.get(o));
var h = (o, t, e2) => {
  if (t.has(o))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(o) : t.set(o, e2);
};
var d2 = (o, t, e2, n3) => (f2(o, t, "write to private field"), n3 ? n3.call(o, e2) : t.set(o, e2), e2);
var s;
var M = class {
  constructor() {
    h(this, s, void 0);
    d2(this, s, /* @__PURE__ */ new Map());
  }
  add(t, e2, n3 = window) {
    r(this, s).has(n3) || r(this, s).set(n3, /* @__PURE__ */ new Map());
    const c3 = r(this, s).get(n3);
    c3.has(t) || c3.set(t, /* @__PURE__ */ new Set()), c3.get(t).add(e2);
  }
  startAll() {
    for (const [t, e2] of r(this, s))
      for (const [n3, c3] of e2)
        for (const a2 of c3)
          t.addEventListener(n3, a2);
  }
  stopAll() {
    for (const [t, e2] of r(this, s))
      for (const [n3, c3] of e2)
        for (const a2 of c3)
          t.removeEventListener(n3, a2);
  }
  clear() {
    r(this, s).clear();
  }
};
s = /* @__PURE__ */ new WeakMap();
function g2() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function w2(o) {
  return !!o.touches;
}
var i = class _i {
  static randomFloat(t, e2) {
    return Math.random() * (e2 - t) + t;
  }
  static randomInt(t, e2) {
    return Math.floor(_i.randomFloat(t, e2));
  }
  static choice(t) {
    const e2 = t.length, n3 = Math.floor(e2 * Math.random());
    return t[n3];
  }
  static color(t = "0123456789ABCDEF") {
    return "#" + _i.choice(t) + _i.choice(t) + _i.choice(t) + _i.choice(t) + _i.choice(t) + _i.choice(t);
  }
};
function v(o, {
  leftColor: t = "#fff",
  rightColor: e2 = "#444",
  leftBgColor: n3 = "#35495e",
  rightBgColor: c3 = "#00ffc0"
} = {}) {
  console.log(
    `%c ${o} %c v0.5.2 112fa81 %c`,
    `background: ${n3}; padding: 2px; color: ${t}; font-weight: bold; text-transform: uppercase;`,
    `background: ${c3}; padding: 2px; color: ${e2}; font-weight: bold; text-transform: uppercase;`,
    "background: transparent"
  );
}

// node_modules/ts-debounce/dist/src/index.esm.js
function r2(r3, e2, n3) {
  var i2, t, o;
  void 0 === e2 && (e2 = 50), void 0 === n3 && (n3 = {});
  var a2 = null != (i2 = n3.isImmediate) && i2, u3 = null != (t = n3.callback) && t, c3 = n3.maxWait, v3 = Date.now(), l = [];
  function f4() {
    if (void 0 !== c3) {
      var r4 = Date.now() - v3;
      if (r4 + e2 >= c3) return c3 - r4;
    }
    return e2;
  }
  var d4 = function() {
    var e3 = [].slice.call(arguments), n4 = this;
    return new Promise(function(i3, t2) {
      var c4 = a2 && void 0 === o;
      if (void 0 !== o && clearTimeout(o), o = setTimeout(function() {
        if (o = void 0, v3 = Date.now(), !a2) {
          var i4 = r3.apply(n4, e3);
          u3 && u3(i4), l.forEach(function(r4) {
            return (0, r4.resolve)(i4);
          }), l = [];
        }
      }, f4()), c4) {
        var d5 = r3.apply(n4, e3);
        return u3 && u3(d5), i3(d5);
      }
      l.push({ resolve: i3, reject: t2 });
    });
  };
  return d4.cancel = function(r4) {
    void 0 !== o && clearTimeout(o), l.forEach(function(e3) {
      return (0, e3.reject)(r4);
    }), l = [];
  }, d4;
}

// node_modules/@moefy-canvas/theme-popper/dist/index.js
var T = (e2, t, i2) => {
  if (!t.has(e2))
    throw TypeError("Cannot " + i2);
};
var s2 = (e2, t, i2) => (T(e2, t, "read from private field"), i2 ? i2.call(e2) : t.get(e2));
var h2 = (e2, t, i2) => {
  if (t.has(e2))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e2) : t.set(e2, i2);
};
var n2 = (e2, t, i2, o) => (T(e2, t, "write to private field"), o ? o.call(e2, i2) : t.set(e2, i2), i2);
var D = (e2, t, i2, o) => ({
  set _(a2) {
    n2(e2, t, a2, i2);
  },
  get _() {
    return s2(e2, t, o);
  }
});
var u2 = (e2, t, i2) => (T(e2, t, "access private method"), i2);
var M2;
var b;
var P;
var H = class {
  constructor(t, i2, o, a2, l) {
    h2(this, M2, void 0);
    h2(this, b, void 0);
    h2(this, P, void 0);
    this.size = o, this.color = a2, n2(this, P, 0), n2(this, M2, l), n2(this, b, i2), this.position = { ...t };
  }
  move() {
    this.position.x = Math.sin(s2(this, M2)) * s2(this, b) + this.position.x, this.position.y = Math.cos(s2(this, M2)) * s2(this, b) + this.position.y + s2(this, P) * 0.3, D(this, P)._++;
  }
  shouleRemove(t) {
    return this.position.x < 0 || this.position.x > t.width || this.position.y > t.height;
  }
};
M2 = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap();
var N = class extends H {
  draw(t, i2) {
    t.fillStyle = this.color, t.beginPath(), t.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2), t.fill();
  }
};
var f3;
var Q = class extends H {
  constructor(i2, o, a2, l, r3) {
    super(i2, o, a2, l, r3);
    h2(this, f3, 0);
  }
  draw(i2, o) {
    i2.fillStyle = this.color, i2.beginPath();
    const a2 = this.size * 2, l = this.size;
    for (let r3 = 0; r3 < 5; r3++)
      i2.lineTo(
        Math.cos((18 + 72 * r3 - s2(this, f3)) / 180 * Math.PI) * a2 + this.position.x,
        -Math.sin((18 + 72 * r3 - s2(this, f3)) / 180 * Math.PI) * a2 + this.position.y
      ), i2.lineTo(
        Math.cos((54 + 72 * r3 - s2(this, f3)) / 180 * Math.PI) * l + this.position.x,
        -Math.sin((54 + 72 * r3 - s2(this, f3)) / 180 * Math.PI) * l + this.position.y
      );
    i2.fill(), n2(this, f3, s2(this, f3) + 5);
  }
};
f3 = /* @__PURE__ */ new WeakMap();
var q = class {
  static create(t, i2, o, a2, l, r3) {
    const j = this.shapeMap.get(t);
    return new j(i2, o, a2, l, r3);
  }
};
q.shapeMap = /* @__PURE__ */ new Map([
  ["star", Q],
  ["circle", N]
]);
var d3;
var U = class {
  constructor(t, i2, o, a2) {
    h2(this, d3, void 0);
    this.stopped = false, n2(this, d3, /* @__PURE__ */ new Set());
    for (let l = 0; l < a2; l++) {
      const r3 = q.create(
        t,
        i2,
        i.randomFloat(1, 6),
        o,
        i.color("89ABCDEF"),
        i.randomFloat(Math.PI - 1, Math.PI + 1)
      );
      s2(this, d3).add(r3);
    }
  }
  move(t) {
    for (const i2 of s2(this, d3)) {
      if (i2.shouleRemove(t)) {
        s2(this, d3).delete(i2);
        continue;
      }
      i2.move();
    }
    s2(this, d3).size === 0 && (this.stopped = true);
  }
  draw(t, i2) {
    for (const o of s2(this, d3))
      o.draw(t, i2);
  }
};
d3 = /* @__PURE__ */ new WeakMap();
var Z = ((e2) => (e2.Star = "star", e2.Circle = "circle", e2))(Z || {});
var y2;
var z;
var g3;
var p2;
var m;
var w3;
var v2;
var c2;
var F;
var X;
var I;
var Y;
var C2;
var B;
var S;
var O;
var A;
var V;
var R;
var W;
var et = class {
  constructor({ shape: t = "star", size: i2 = 2, numParticles: o = 10 } = {}, a2 = {}) {
    h2(this, F);
    h2(this, I);
    h2(this, C2);
    h2(this, S);
    h2(this, A);
    h2(this, R);
    h2(this, y2, void 0);
    h2(this, z, void 0);
    h2(this, g3, void 0);
    h2(this, p2, null);
    h2(this, m, /* @__PURE__ */ new Set());
    h2(this, w3, false);
    h2(this, v2, void 0);
    h2(this, c2, new M());
    n2(this, y2, t), n2(this, z, i2), n2(this, g3, o), n2(this, v2, a2), this.animate = this.animate.bind(this);
  }
  mount(t) {
    n2(this, p2, new y(
      t,
      window.innerWidth,
      window.innerHeight,
      true,
      true,
      s2(this, v2)
    )), u2(this, F, X).call(this), v("Theme Popper 🎉", { leftBgColor: "#ffb366" });
  }
  unmount() {
    u2(this, I, Y).call(this), n2(this, w3, false);
  }
  animate() {
    if (n2(this, w3, true), s2(this, m).size === 0) {
      n2(this, w3, false), s2(this, p2).clear();
      return;
    }
    requestAnimationFrame(this.animate);
    for (const t of s2(this, m)) {
      if (t.stopped) {
        s2(this, m).delete(t);
        return;
      }
      t.move(s2(this, p2).size);
    }
    s2(this, p2).draw((t, i2) => {
      for (const o of s2(this, m))
        o.draw(t, i2);
    }), s2(this, p2).render();
  }
};
y2 = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakMap(), g3 = /* @__PURE__ */ new WeakMap(), p2 = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap(), w3 = /* @__PURE__ */ new WeakMap(), v2 = /* @__PURE__ */ new WeakMap(), c2 = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakSet(), X = function() {
  g2() ? s2(this, c2).add("touchstart", u2(this, C2, B).bind(this)) : s2(this, c2).add("mousedown", u2(this, C2, B).bind(this)), s2(this, c2).add("visibilitychange", u2(this, A, V).bind(this)), s2(this, c2).add("resize", r2(u2(this, S, O).bind(this), 500)), s2(this, c2).startAll();
}, I = /* @__PURE__ */ new WeakSet(), Y = function() {
  s2(this, c2).stopAll(), s2(this, c2).clear();
}, C2 = /* @__PURE__ */ new WeakSet(), B = function(t) {
  const i2 = {
    x: w2(t) ? t.touches[0].clientX : t.clientX,
    y: w2(t) ? t.touches[0].clientY : t.clientY
  }, o = new U(s2(this, y2), { ...i2 }, s2(this, z), s2(this, g3));
  s2(this, m).add(o), s2(this, w3) || u2(this, R, W).call(this);
}, S = /* @__PURE__ */ new WeakSet(), O = function(t) {
  s2(this, p2).handleResize(t);
}, A = /* @__PURE__ */ new WeakSet(), V = function(t) {
  s2(this, m).clear(), n2(this, w3, false);
}, R = /* @__PURE__ */ new WeakSet(), W = function() {
  requestAnimationFrame(this.animate);
};
export {
  y as DrawBoard,
  C as MAX_Z_INDEX,
  et as Popper,
  Z as PopperShape,
  f as Theme
};
//# sourceMappingURL=@moefy-canvas_theme-popper.js.map
