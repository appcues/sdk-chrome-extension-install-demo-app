(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/@appcues/web-sdk/build/open-builder.XILUARRq.js
  var open_builder_XILUARRq_exports = {};
  __export(open_builder_XILUARRq_exports, {
    default: () => ev
  });
  function so(t, e) {
    var n = {};
    for (var r2 in t) Object.prototype.hasOwnProperty.call(t, r2) && e.indexOf(r2) < 0 && (n[r2] = t[r2]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r2 = Object.getOwnPropertySymbols(t); o < r2.length; o++)
        e.indexOf(r2[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r2[o]) && (n[r2[o]] = t[r2[o]]);
    return n;
  }
  function Y(t) {
    var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r2 = 0;
    if (n) return n.call(t);
    if (t && typeof t.length == "number") return {
      next: function() {
        return t && r2 >= t.length && (t = void 0), { value: t && t[r2++], done: !t };
      }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function rt(t, e) {
    var n = typeof Symbol == "function" && t[Symbol.iterator];
    if (!n) return t;
    var r2 = n.call(t), o, i2 = [], a3;
    try {
      for (; (e === void 0 || e-- > 0) && !(o = r2.next()).done; ) i2.push(o.value);
    } catch (s) {
      a3 = { error: s };
    } finally {
      try {
        o && !o.done && (n = r2.return) && n.call(r2);
      } finally {
        if (a3) throw a3.error;
      }
    }
    return i2;
  }
  function vt(t, e, n) {
    if (arguments.length === 2) for (var r2 = 0, o = e.length, i2; r2 < o; r2++)
      (i2 || !(r2 in e)) && (i2 || (i2 = Array.prototype.slice.call(e, 0, r2)), i2[r2] = e[r2]);
    return t.concat(i2 || Array.prototype.slice.call(e));
  }
  function uo(t, e, n) {
    n === void 0 && (n = Zi);
    var r2 = wn(t, n), o = wn(e, n);
    return et(o) ? et(r2) ? o === r2 : false : et(r2) ? r2 in o : Object.keys(r2).every(function(i2) {
      return i2 in o ? uo(r2[i2], o[i2]) : false;
    });
  }
  function Ji(t) {
    try {
      return et(t) || typeof t == "number" ? "".concat(t) : t.type;
    } catch {
      throw new Error("Events must be strings or objects with a string event.type property.");
    }
  }
  function qr(t, e) {
    try {
      return Ye(t) ? t : t.toString().split(e);
    } catch {
      throw new Error("'".concat(t, "' is not a valid state path."));
    }
  }
  function mc(t) {
    return typeof t == "object" && "value" in t && "context" in t && "event" in t && "_event" in t;
  }
  function wn(t, e) {
    if (mc(t))
      return t.value;
    if (Ye(t))
      return Qn(t);
    if (typeof t != "string")
      return t;
    var n = qr(t, e);
    return Qn(n);
  }
  function Qn(t) {
    if (t.length === 1)
      return t[0];
    for (var e = {}, n = e, r2 = 0; r2 < t.length - 1; r2++)
      r2 === t.length - 2 ? n[t[r2]] = t[r2 + 1] : (n[t[r2]] = {}, n = n[t[r2]]);
    return e;
  }
  function yn(t, e) {
    for (var n = {}, r2 = Object.keys(t), o = 0; o < r2.length; o++) {
      var i2 = r2[o];
      n[i2] = e(t[i2], i2, t, o);
    }
    return n;
  }
  function Bo(t, e, n) {
    var r2, o, i2 = {};
    try {
      for (var a3 = Y(Object.keys(t)), s = a3.next(); !s.done; s = a3.next()) {
        var c = s.value, f2 = t[c];
        n(f2) && (i2[c] = e(f2, c, t));
      }
    } catch (y2) {
      r2 = {
        error: y2
      };
    } finally {
      try {
        s && !s.done && (o = a3.return) && o.call(a3);
      } finally {
        if (r2) throw r2.error;
      }
    }
    return i2;
  }
  function Ec(t, e) {
    return function(n) {
      var r2, o, i2 = n;
      try {
        for (var a3 = Y(t), s = a3.next(); !s.done; s = a3.next()) {
          var c = s.value;
          i2 = i2[e][c];
        }
      } catch (f2) {
        r2 = {
          error: f2
        };
      } finally {
        try {
          s && !s.done && (o = a3.return) && o.call(a3);
        } finally {
          if (r2) throw r2.error;
        }
      }
      return i2;
    };
  }
  function qn(t) {
    if (!t)
      return [[]];
    if (et(t))
      return [[t]];
    var e = dt(Object.keys(t).map(function(n) {
      var r2 = t[n];
      return typeof r2 != "string" && (!r2 || !Object.keys(r2).length) ? [[n]] : qn(t[n]).map(function(o) {
        return [n].concat(o);
      });
    }));
    return e;
  }
  function dt(t) {
    var e;
    return (e = []).concat.apply(e, vt([], rt(t), false));
  }
  function Qi(t) {
    return Ye(t) ? t : [t];
  }
  function Ut(t) {
    return t === void 0 ? [] : Qi(t);
  }
  function Yn(t, e, n) {
    var r2, o;
    if (st(t))
      return t(e, n.data);
    var i2 = {};
    try {
      for (var a3 = Y(Object.keys(t)), s = a3.next(); !s.done; s = a3.next()) {
        var c = s.value, f2 = t[c];
        st(f2) ? i2[c] = f2(e, n.data) : i2[c] = f2;
      }
    } catch (y2) {
      r2 = {
        error: y2
      };
    } finally {
      try {
        s && !s.done && (o = a3.return) && o.call(a3);
      } finally {
        if (r2) throw r2.error;
      }
    }
    return i2;
  }
  function xc(t) {
    return /^(done|error)\./.test(t);
  }
  function zo(t) {
    return !!(t instanceof Promise || t !== null && (st(t) || typeof t == "object") && st(t.then));
  }
  function wc(t) {
    return t !== null && typeof t == "object" && "transition" in t && typeof t.transition == "function";
  }
  function Yi(t, e) {
    var n, r2, o = rt([[], []], 2), i2 = o[0], a3 = o[1];
    try {
      for (var s = Y(t), c = s.next(); !c.done; c = s.next()) {
        var f2 = c.value;
        e(f2) ? i2.push(f2) : a3.push(f2);
      }
    } catch (y2) {
      n = {
        error: y2
      };
    } finally {
      try {
        c && !c.done && (r2 = s.return) && r2.call(s);
      } finally {
        if (n) throw n.error;
      }
    }
    return [i2, a3];
  }
  function ta(t, e) {
    return yn(t.states, function(n, r2) {
      if (n) {
        var o = (et(e) ? void 0 : e[r2]) || (n ? n.current : void 0);
        if (o)
          return {
            current: o,
            states: ta(n, o)
          };
      }
    });
  }
  function Sc(t, e) {
    return {
      current: e,
      states: ta(t, e)
    };
  }
  function Uo(t, e, n, r2) {
    var o = t && n.reduce(function(i2, a3) {
      var s, c, f2 = a3.assignment, y2 = {
        state: r2,
        action: a3,
        _event: e
      }, l2 = {};
      if (st(f2))
        l2 = f2(i2, e.data, y2);
      else
        try {
          for (var u2 = Y(Object.keys(f2)), h2 = u2.next(); !h2.done; h2 = u2.next()) {
            var p2 = h2.value, v4 = f2[p2];
            l2[p2] = st(v4) ? v4(i2, e.data, y2) : v4;
          }
        } catch (b4) {
          s = {
            error: b4
          };
        } finally {
          try {
            h2 && !h2.done && (c = u2.return) && c.call(u2);
          } finally {
            if (s) throw s.error;
          }
        }
      return Object.assign({}, i2, l2);
    }, t);
    return o;
  }
  function Ye(t) {
    return Array.isArray(t);
  }
  function st(t) {
    return typeof t == "function";
  }
  function et(t) {
    return typeof t == "string";
  }
  function ea(t, e) {
    if (t)
      return et(t) ? {
        type: Vr,
        name: t,
        predicate: e ? e[t] : void 0
      } : st(t) ? {
        type: Vr,
        name: t.name,
        predicate: t
      } : t;
  }
  function Tc(t) {
    try {
      return "subscribe" in t && st(t.subscribe);
    } catch {
      return false;
    }
  }
  function Ge(t) {
    return !!t && "__xstatenode" in t;
  }
  function kc(t) {
    return !!t && typeof t.send == "function";
  }
  function lo(t, e) {
    return et(t) || typeof t == "number" ? H({
      type: t
    }, e) : t;
  }
  function Ct(t, e) {
    if (!et(t) && "$$type" in t && t.$$type === "scxml")
      return t;
    var n = lo(t);
    return H({
      name: n.type,
      data: n,
      $$type: "scxml",
      type: "external"
    }, e);
  }
  function Pe(t, e) {
    var n = Qi(e).map(function(r2) {
      return typeof r2 > "u" || typeof r2 == "string" || Ge(r2) ? {
        target: r2,
        event: t
      } : H(H({}, r2), {
        event: t
      });
    });
    return n;
  }
  function Cc(t) {
    if (!(t === void 0 || t === yc))
      return Ut(t);
  }
  function na(t, e, n, r2, o) {
    var i2 = t.options.guards, a3 = {
      state: o,
      cond: e,
      _event: r2
    };
    if (e.type === Vr)
      return (i2?.[e.name] || e.predicate)(n, r2.data, a3);
    var s = i2?.[e.type];
    if (!s)
      throw new Error("Guard '".concat(e.type, "' is not implemented on machine '").concat(t.id, "'."));
    return s(n, r2.data, a3);
  }
  function ra(t) {
    return typeof t == "string" ? {
      type: t
    } : t;
  }
  function Gr(t, e, n) {
    if (typeof t == "object")
      return t;
    var r2 = function() {
    };
    return {
      next: t,
      error: e || r2,
      complete: n || r2
    };
  }
  function Hn(t, e) {
    return "".concat(t, ":invocation[").concat(e, "]");
  }
  function Xr(t, e) {
    return e && e[t] || void 0;
  }
  function Tn(t, e) {
    var n;
    if (et(t) || typeof t == "number") {
      var r2 = Xr(t, e);
      st(r2) ? n = {
        type: t,
        exec: r2
      } : r2 ? n = r2 : n = {
        type: t,
        exec: void 0
      };
    } else if (st(t))
      n = {
        // Convert action to string if unnamed
        type: t.name || t.toString(),
        exec: t
      };
    else {
      var r2 = Xr(t.type, e);
      if (st(r2))
        n = H(H({}, t), {
          exec: r2
        });
      else if (r2) {
        var o = r2.type || t.type;
        n = H(H(H({}, r2), t), {
          type: o
        });
      } else
        n = t;
    }
    return n;
  }
  function fo(t) {
    var e = Tn(t);
    return H(H({
      id: et(t) ? t : e.id
    }, e), {
      type: e.type
    });
  }
  function oa(t) {
    return et(t) ? {
      type: hr,
      event: t
    } : Cn(t, {
      to: qe.Internal
    });
  }
  function Oc(t) {
    return {
      type: hr,
      _event: Ct(t.event)
    };
  }
  function Cn(t, e) {
    return {
      to: e ? e.to : void 0,
      type: vr,
      event: st(t) ? t : lo(t),
      delay: e ? e.delay : void 0,
      id: e && e.id !== void 0 ? e.id : st(t) ? t.name : Ji(t)
    };
  }
  function Ac(t, e, n, r2) {
    var o = {
      _event: n
    }, i2 = Ct(st(t.event) ? t.event(e, n.data, o) : t.event), a3;
    if (et(t.delay)) {
      var s = r2 && r2[t.delay];
      a3 = st(s) ? s(e, n.data, o) : s;
    } else
      a3 = st(t.delay) ? t.delay(e, n.data, o) : t.delay;
    var c = st(t.to) ? t.to(e, n.data, o) : t.to;
    return H(H({}, t), {
      to: c,
      _event: i2,
      event: i2.data,
      delay: a3
    });
  }
  function Nc(t, e) {
    return Cn(t, H(H({}, e), {
      to: qe.Parent
    }));
  }
  function Pc(t) {
    var e = fo(t);
    return {
      type: ot.Start,
      activity: e,
      exec: void 0
    };
  }
  function Dc(t) {
    var e = st(t) ? t : fo(t);
    return {
      type: ot.Stop,
      activity: e,
      exec: void 0
    };
  }
  function Hc(t, e, n) {
    var r2 = st(t.activity) ? t.activity(e, n.data) : t.activity, o = typeof r2 == "string" ? {
      id: r2
    } : r2, i2 = {
      type: ot.Stop,
      activity: o
    };
    return i2;
  }
  function $c(t, e) {
    var n = e ? "#".concat(e) : "";
    return "".concat(ot.After, "(").concat(t, ")").concat(n);
  }
  function Ln(t, e) {
    var n = "".concat(ot.DoneState, ".").concat(t), r2 = {
      type: n,
      data: e
    };
    return r2.toString = function() {
      return n;
    }, r2;
  }
  function Gn(t, e) {
    var n = "".concat(ot.DoneInvoke, ".").concat(t), r2 = {
      type: n,
      data: e
    };
    return r2.toString = function() {
      return n;
    }, r2;
  }
  function mn(t, e) {
    var n = "".concat(ot.ErrorPlatform, ".").concat(t), r2 = {
      type: n,
      data: e
    };
    return r2.toString = function() {
      return n;
    }, r2;
  }
  function Mc(t) {
    return {
      type: ot.Pure,
      get: t
    };
  }
  function Wc(t, e) {
    return Cn(function(n, r2) {
      return r2;
    }, H(H({}, e), {
      to: t
    }));
  }
  function ia(t) {
    return {
      type: ot.Choose,
      conds: t
    };
  }
  function Kr(t, e, n, r2, o, i2) {
    i2 === void 0 && (i2 = false);
    var a3 = rt(i2 ? [[], o] : Yi(o, function(u2) {
      return u2.type === zr;
    }), 2), s = a3[0], c = a3[1], f2 = s.length ? Uo(n, r2, s, e) : n, y2 = i2 ? [n] : void 0, l2 = dt(c.map(function(u2) {
      var h2;
      switch (u2.type) {
        case hr:
          return Oc(u2);
        case vr:
          var p2 = Ac(u2, f2, r2, t.options.delays);
          return p2;
        case Xi:
          return Ic(u2, f2, r2);
        case vc: {
          var v4 = u2, b4 = (h2 = v4.conds.find(function(P3) {
            var $4 = ea(P3.cond, t.options.guards);
            return !$4 || na(t, $4, f2, r2, e);
          })) === null || h2 === void 0 ? void 0 : h2.actions;
          if (!b4)
            return [];
          var E3 = rt(Kr(t, e, f2, r2, er(Ut(b4), t.options.actions), i2), 2), g4 = E3[0], w3 = E3[1];
          return f2 = w3, y2?.push(f2), g4;
        }
        case gc: {
          var b4 = u2.get(f2, r2.data);
          if (!b4)
            return [];
          var k2 = rt(Kr(t, e, f2, r2, er(Ut(b4), t.options.actions), i2), 2), S2 = k2[0], N3 = k2[1];
          return f2 = N3, y2?.push(f2), S2;
        }
        case co:
          return Hc(u2, f2, r2);
        case zr: {
          f2 = Uo(f2, r2, [u2], e), y2?.push(f2);
          break;
        }
        default:
          var O3 = Tn(u2, t.options.actions), C3 = O3.exec;
          if (C3 && y2) {
            var I3 = y2.length - 1;
            O3 = H(H({}, O3), {
              exec: function(P3) {
                for (var $4 = [], M4 = 1; M4 < arguments.length; M4++)
                  $4[M4 - 1] = arguments[M4];
                C3.apply(void 0, vt([y2[I3]], rt($4), false));
              }
            });
          }
          return O3;
      }
    }).filter(function(u2) {
      return !!u2;
    }));
    return [l2, f2];
  }
  function aa(t) {
    var e;
    return e = {
      id: t,
      send: function() {
      },
      subscribe: function() {
        return {
          unsubscribe: function() {
          }
        };
      },
      getSnapshot: function() {
      },
      toJSON: function() {
        return {
          id: t
        };
      }
    }, e[ge] = function() {
      return this;
    }, e;
  }
  function Bc(t, e, n, r2) {
    var o, i2 = ra(t.src), a3 = (o = e?.options.services) === null || o === void 0 ? void 0 : o[i2.type], s = t.data ? Yn(t.data, n, r2) : void 0, c = a3 ? sa(a3, t.id, s) : aa(t.id);
    return c.meta = t, c;
  }
  function sa(t, e, n) {
    var r2 = aa(e);
    if (r2.deferred = true, Ge(t)) {
      var o = r2.state = bn(void 0, function() {
        return (n ? t.withContext(n) : t).initialState;
      });
      r2.getSnapshot = function() {
        return o;
      };
    }
    return r2;
  }
  function zc(t) {
    try {
      return typeof t.send == "function";
    } catch {
      return false;
    }
  }
  function Uc(t) {
    return zc(t) && "id" in t;
  }
  function Vc(t) {
    var e;
    return H((e = {
      subscribe: function() {
        return {
          unsubscribe: function() {
          }
        };
      },
      id: "anonymous",
      getSnapshot: function() {
      }
    }, e[ge] = function() {
      return this;
    }, e), t);
  }
  function Xe(t) {
    return Object.keys(t.states).map(function(e) {
      return t.states[e];
    }).filter(function(e) {
      return e.type !== "history";
    });
  }
  function ca(t) {
    var e = [t];
    return rr(t) ? e : e.concat(dt(Xe(t).map(ca)));
  }
  function Me(t, e) {
    var n, r2, o, i2, a3, s, c, f2, y2 = new Set(t), l2 = Zr(y2), u2 = new Set(e);
    try {
      for (var h2 = Y(u2), p2 = h2.next(); !p2.done; p2 = h2.next())
        for (var v4 = p2.value, b4 = v4.parent; b4 && !u2.has(b4); )
          u2.add(b4), b4 = b4.parent;
    } catch (I3) {
      n = {
        error: I3
      };
    } finally {
      try {
        p2 && !p2.done && (r2 = h2.return) && r2.call(h2);
      } finally {
        if (n) throw n.error;
      }
    }
    var E3 = Zr(u2);
    try {
      for (var g4 = Y(u2), w3 = g4.next(); !w3.done; w3 = g4.next()) {
        var v4 = w3.value;
        if (v4.type === "compound" && (!E3.get(v4) || !E3.get(v4).length))
          l2.get(v4) ? l2.get(v4).forEach(function(P3) {
            return u2.add(P3);
          }) : v4.initialStateNodes.forEach(function(P3) {
            return u2.add(P3);
          });
        else if (v4.type === "parallel")
          try {
            for (var k2 = (a3 = void 0, Y(Xe(v4))), S2 = k2.next(); !S2.done; S2 = k2.next()) {
              var N3 = S2.value;
              u2.has(N3) || (u2.add(N3), l2.get(N3) ? l2.get(N3).forEach(function(P3) {
                return u2.add(P3);
              }) : N3.initialStateNodes.forEach(function(P3) {
                return u2.add(P3);
              }));
            }
          } catch (P3) {
            a3 = {
              error: P3
            };
          } finally {
            try {
              S2 && !S2.done && (s = k2.return) && s.call(k2);
            } finally {
              if (a3) throw a3.error;
            }
          }
      }
    } catch (I3) {
      o = {
        error: I3
      };
    } finally {
      try {
        w3 && !w3.done && (i2 = g4.return) && i2.call(g4);
      } finally {
        if (o) throw o.error;
      }
    }
    try {
      for (var O3 = Y(u2), C3 = O3.next(); !C3.done; C3 = O3.next())
        for (var v4 = C3.value, b4 = v4.parent; b4 && !u2.has(b4); )
          u2.add(b4), b4 = b4.parent;
    } catch (I3) {
      c = {
        error: I3
      };
    } finally {
      try {
        C3 && !C3.done && (f2 = O3.return) && f2.call(O3);
      } finally {
        if (c) throw c.error;
      }
    }
    return u2;
  }
  function ua(t, e) {
    var n = e.get(t);
    if (!n)
      return {};
    if (t.type === "compound") {
      var r2 = n[0];
      if (r2) {
        if (rr(r2))
          return r2.key;
      } else
        return {};
    }
    var o = {};
    return n.forEach(function(i2) {
      o[i2.key] = ua(i2, e);
    }), o;
  }
  function Zr(t) {
    var e, n, r2 = /* @__PURE__ */ new Map();
    try {
      for (var o = Y(t), i2 = o.next(); !i2.done; i2 = o.next()) {
        var a3 = i2.value;
        r2.has(a3) || r2.set(a3, []), a3.parent && (r2.has(a3.parent) || r2.set(a3.parent, []), r2.get(a3.parent).push(a3));
      }
    } catch (s) {
      e = {
        error: s
      };
    } finally {
      try {
        i2 && !i2.done && (n = o.return) && n.call(o);
      } finally {
        if (e) throw e.error;
      }
    }
    return r2;
  }
  function qc(t, e) {
    var n = Me([t], e);
    return ua(t, Zr(n));
  }
  function Xn(t, e) {
    return Array.isArray(t) ? t.some(function(n) {
      return n === e;
    }) : t instanceof Set ? t.has(e) : false;
  }
  function Gc(t) {
    return vt([], rt(new Set(dt(vt([], rt(t.map(function(e) {
      return e.ownEvents;
    })), false)))), false);
  }
  function Sn(t, e) {
    return e.type === "compound" ? Xe(e).some(function(n) {
      return n.type === "final" && Xn(t, n);
    }) : e.type === "parallel" ? Xe(e).every(function(n) {
      return Sn(t, n);
    }) : false;
  }
  function Xc(t) {
    return t === void 0 && (t = []), t.reduce(function(e, n) {
      return n.meta !== void 0 && (e[n.id] = n.meta), e;
    }, {});
  }
  function Vo(t) {
    return new Set(dt(t.map(function(e) {
      return e.tags;
    })));
  }
  function la(t, e) {
    if (t === e)
      return true;
    if (t === void 0 || e === void 0)
      return false;
    if (et(t) || et(e))
      return t === e;
    var n = Object.keys(t), r2 = Object.keys(e);
    return n.length === r2.length && n.every(function(o) {
      return la(t[o], e[o]);
    });
  }
  function Kc(t) {
    return typeof t != "object" || t === null ? false : "value" in t && "_event" in t;
  }
  function Zc(t, e) {
    var n = t.exec, r2 = H(H({}, t), {
      exec: n !== void 0 ? function() {
        return n(e.context, e.event, {
          action: t,
          state: e,
          _event: e._event
        });
      } : void 0
    });
    return r2;
  }
  function po() {
    if (typeof globalThis < "u")
      return globalThis;
    if (typeof self < "u")
      return self;
    if (typeof window < "u")
      return window;
    if (typeof global < "u")
      return global;
  }
  function Yc() {
    var t = po();
    if (t && "__xstate__" in t)
      return t.__xstate__;
  }
  function tu(t) {
    if (po()) {
      var e = Yc();
      e && e.register(t);
    }
  }
  function eu(t, e) {
    e === void 0 && (e = {});
    var n = t.initialState, r2 = /* @__PURE__ */ new Set(), o = [], i2 = false, a3 = function() {
      if (!i2) {
        for (i2 = true; o.length > 0; ) {
          var f2 = o.shift();
          n = t.transition(n, f2, c), r2.forEach(function(y2) {
            return y2.next(n);
          });
        }
        i2 = false;
      }
    }, s = Vc({
      id: e.id,
      send: function(f2) {
        o.push(f2), a3();
      },
      getSnapshot: function() {
        return n;
      },
      subscribe: function(f2, y2, l2) {
        var u2 = Gr(f2, y2, l2);
        return r2.add(u2), u2.next(n), {
          unsubscribe: function() {
            r2.delete(u2);
          }
        };
      }
    }), c = {
      parent: e.parent,
      self: s,
      id: e.id || "anonymous",
      observers: r2
    };
    return n = t.start ? t.start(c) : n, s;
  }
  function fa(t, e) {
    var n = ru(e);
    return Fc(function(r2) {
      return r2 ? r2.spawn(t, n.name, n) : sa(t, n.name);
    });
  }
  function da(t, e) {
    var n = new nu(t, e);
    return n;
  }
  function ou(t) {
    if (typeof t == "string") {
      var e = {
        type: t
      };
      return e.toString = function() {
        return t;
      }, e;
    }
    return t;
  }
  function Mn(t) {
    return H(H({
      type: Ur
    }, t), {
      toJSON: function() {
        t.onDone, t.onError;
        var e = so(t, ["onDone", "onError"]);
        return H(H({}, e), {
          type: Ur,
          src: ou(t.src)
        });
      }
    });
  }
  function gr(t, e) {
    return new au(t, e);
  }
  function Go(t) {
    return Object.prototype.toString.call(t) === "[object Object]";
  }
  function Xo(t) {
    var e, n;
    return Go(t) === false ? false : (e = t.constructor, e === void 0 ? true : (n = e.prototype, !(Go(n) === false || n.hasOwnProperty("isPrototypeOf") === false)));
  }
  function Oe(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  function su(t) {
    if (Object.prototype.hasOwnProperty.call(t, "__esModule")) return t;
    var e = t.default;
    if (typeof e == "function") {
      var n = function r2() {
        var o = false;
        try {
          o = this instanceof r2;
        } catch {
        }
        return o ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
      };
      n.prototype = e.prototype;
    } else n = {};
    return Object.defineProperty(n, "__esModule", { value: true }), Object.keys(t).forEach(function(r2) {
      var o = Object.getOwnPropertyDescriptor(t, r2);
      Object.defineProperty(n, r2, o.get ? o : {
        enumerable: true,
        get: function() {
          return t[r2];
        }
      });
    }), n;
  }
  function uu() {
    return Ko || (Ko = 1, (function(t) {
      (function(e, n) {
        t.exports = n();
      })(cu, function() {
        var e = Object.prototype.toString;
        function n(l2, u2) {
          return l2 == null ? false : Object.prototype.hasOwnProperty.call(l2, u2);
        }
        function r2(l2) {
          if (!l2 || a3(l2) && l2.length === 0)
            return true;
          if (typeof l2 != "string") {
            for (var u2 in l2)
              if (n(l2, u2))
                return false;
            return true;
          }
          return false;
        }
        function o(l2) {
          return e.call(l2);
        }
        function i2(l2) {
          return typeof l2 == "object" && o(l2) === "[object Object]";
        }
        var a3 = Array.isArray || function(l2) {
          return e.call(l2) === "[object Array]";
        };
        function s(l2) {
          return typeof l2 == "boolean" || o(l2) === "[object Boolean]";
        }
        function c(l2) {
          var u2 = parseInt(l2);
          return u2.toString() === l2 ? u2 : l2;
        }
        function f2(l2) {
          l2 = l2 || {};
          var u2 = function(E3) {
            return Object.keys(u2).reduce(function(g4, w3) {
              return w3 === "create" || typeof u2[w3] == "function" && (g4[w3] = u2[w3].bind(u2, E3)), g4;
            }, {});
          }, h2;
          l2.includeInheritedProps ? h2 = function() {
            return true;
          } : h2 = function(E3, g4) {
            return typeof g4 == "number" && Array.isArray(E3) || n(E3, g4);
          };
          function p2(E3, g4) {
            if (h2(E3, g4))
              return E3[g4];
          }
          var v4;
          l2.includeInheritedProps ? v4 = function(E3, g4) {
            typeof g4 != "string" && typeof g4 != "number" && (g4 = String(g4));
            var w3 = p2(E3, g4);
            if (g4 === "__proto__" || g4 === "prototype" || g4 === "constructor" && typeof w3 == "function")
              throw new Error("For security reasons, object's magic properties cannot be set");
            return w3;
          } : v4 = function(E3, g4) {
            return p2(E3, g4);
          };
          function b4(E3, g4, w3, k2) {
            if (typeof g4 == "number" && (g4 = [g4]), !g4 || g4.length === 0)
              return E3;
            if (typeof g4 == "string")
              return b4(E3, g4.split(".").map(c), w3, k2);
            var S2 = g4[0], N3 = v4(E3, S2);
            return g4.length === 1 ? ((N3 === void 0 || !k2) && (E3[S2] = w3), N3) : (N3 === void 0 && (typeof g4[1] == "number" ? E3[S2] = [] : E3[S2] = {}), b4(E3[S2], g4.slice(1), w3, k2));
          }
          return u2.has = function(E3, g4) {
            if (typeof g4 == "number" ? g4 = [g4] : typeof g4 == "string" && (g4 = g4.split(".")), !g4 || g4.length === 0)
              return !!E3;
            for (var w3 = 0; w3 < g4.length; w3++) {
              var k2 = c(g4[w3]);
              if (typeof k2 == "number" && a3(E3) && k2 < E3.length || (l2.includeInheritedProps ? k2 in Object(E3) : n(E3, k2)))
                E3 = E3[k2];
              else
                return false;
            }
            return true;
          }, u2.ensureExists = function(E3, g4, w3) {
            return b4(E3, g4, w3, true);
          }, u2.set = function(E3, g4, w3, k2) {
            return b4(E3, g4, w3, k2);
          }, u2.insert = function(E3, g4, w3, k2) {
            var S2 = u2.get(E3, g4);
            k2 = ~~k2, a3(S2) || (S2 = [], u2.set(E3, g4, S2)), S2.splice(k2, 0, w3);
          }, u2.empty = function(E3, g4) {
            if (!r2(g4) && E3 != null) {
              var w3, k2;
              if (w3 = u2.get(E3, g4)) {
                if (typeof w3 == "string")
                  return u2.set(E3, g4, "");
                if (s(w3))
                  return u2.set(E3, g4, false);
                if (typeof w3 == "number")
                  return u2.set(E3, g4, 0);
                if (a3(w3))
                  w3.length = 0;
                else if (i2(w3))
                  for (k2 in w3)
                    h2(w3, k2) && delete w3[k2];
                else
                  return u2.set(E3, g4, null);
              }
            }
          }, u2.push = function(E3, g4) {
            var w3 = u2.get(E3, g4);
            a3(w3) || (w3 = [], u2.set(E3, g4, w3)), w3.push.apply(w3, Array.prototype.slice.call(arguments, 2));
          }, u2.coalesce = function(E3, g4, w3) {
            for (var k2, S2 = 0, N3 = g4.length; S2 < N3; S2++)
              if ((k2 = u2.get(E3, g4[S2])) !== void 0)
                return k2;
            return w3;
          }, u2.get = function(E3, g4, w3) {
            if (typeof g4 == "number" && (g4 = [g4]), !g4 || g4.length === 0)
              return E3;
            if (E3 == null)
              return w3;
            if (typeof g4 == "string")
              return u2.get(E3, g4.split("."), w3);
            var k2 = c(g4[0]), S2 = v4(E3, k2);
            return S2 === void 0 ? w3 : g4.length === 1 ? S2 : u2.get(E3[k2], g4.slice(1), w3);
          }, u2.del = function(E3, g4) {
            if (typeof g4 == "number" && (g4 = [g4]), E3 == null || r2(g4))
              return E3;
            if (typeof g4 == "string")
              return u2.del(E3, g4.split("."));
            var w3 = c(g4[0]);
            if (v4(E3, w3), !h2(E3, w3))
              return E3;
            if (g4.length === 1)
              a3(E3) ? E3.splice(w3, 1) : delete E3[w3];
            else
              return u2.del(E3[w3], g4.slice(1));
            return E3;
          }, u2;
        }
        var y2 = f2();
        return y2.create = f2, y2.withInheritedProps = f2({ includeInheritedProps: true }), y2;
      });
    })(Yr)), Yr.exports;
  }
  function Zt(t) {
    if (to(t))
      return false;
    if (!t || Ke(t) && t.length === 0)
      return true;
    if (!pa(t)) {
      for (var e in t)
        if (Fe.call(t, e))
          return false;
      return true;
    }
    return false;
  }
  function to(t) {
    return typeof t == "number";
  }
  function pa(t) {
    return typeof t == "string";
  }
  function Ke(t) {
    return Array.isArray(t);
  }
  function eo(t, e) {
    for (var n in e)
      Fe.call(e, n) && (t[n] = e[n]);
    return t;
  }
  function du(t) {
    var e = parseInt(t);
    return e.toString() === t ? e : t;
  }
  function or(t, e, n) {
    return t == null ? e ? n ? [] : {} : t : Ke(t) ? t.slice() : eo({}, t);
  }
  function ir(t, e) {
    if (t !== e && Xo(t) && Xo(e)) {
      var n = {};
      for (var r2 in t)
        Fe.call(t, r2) && (Fe.call(e, r2) ? n[r2] = ir(t[r2], e[r2]) : n[r2] = t[r2]);
      for (r2 in e)
        Fe.call(e, r2) && (n[r2] = ir(t[r2], e[r2]));
      return n;
    }
    return e;
  }
  function oe(t, e, n, r2) {
    if (to(n) && (n = [n]), Zt(n))
      return e;
    if (pa(n))
      return oe(t, e, n.split(".").map(du), r2);
    var o = n[0];
    return (!t || t === e) && (t = or(e, true, to(o))), n.length === 1 ? r2(t, o) : (e != null && (e = e[o]), t[o] = oe(t[o], e, n.slice(1), r2), t);
  }
  function gu() {
    if (!Fn && (Fn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !Fn))
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return Fn(vu);
  }
  function mu(t) {
    return typeof t == "string" && yu.test(t);
  }
  function bu(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = (_t[t[e + 0]] + _t[t[e + 1]] + _t[t[e + 2]] + _t[t[e + 3]] + "-" + _t[t[e + 4]] + _t[t[e + 5]] + "-" + _t[t[e + 6]] + _t[t[e + 7]] + "-" + _t[t[e + 8]] + _t[t[e + 9]] + "-" + _t[t[e + 10]] + _t[t[e + 11]] + _t[t[e + 12]] + _t[t[e + 13]] + _t[t[e + 14]] + _t[t[e + 15]]).toLowerCase();
    if (!mu(n))
      throw TypeError("Stringified UUID is invalid");
    return n;
  }
  function Eu(t, e, n) {
    t = t || {};
    var r2 = t.random || (t.rng || gu)();
    return r2[6] = r2[6] & 15 | 64, r2[8] = r2[8] & 63 | 128, bu(r2);
  }
  function xu() {
    return Zo || (Zo = 1, (function(t, e) {
      var n = 200, r2 = "__lodash_hash_undefined__", o = 1, i2 = 2, a3 = 9007199254740991, s = "[object Arguments]", c = "[object Array]", f2 = "[object AsyncFunction]", y2 = "[object Boolean]", l2 = "[object Date]", u2 = "[object Error]", h2 = "[object Function]", p2 = "[object GeneratorFunction]", v4 = "[object Map]", b4 = "[object Number]", E3 = "[object Null]", g4 = "[object Object]", w3 = "[object Promise]", k2 = "[object Proxy]", S2 = "[object RegExp]", N3 = "[object Set]", O3 = "[object String]", C3 = "[object Symbol]", I3 = "[object Undefined]", P3 = "[object WeakMap]", $4 = "[object ArrayBuffer]", M4 = "[object DataView]", U4 = "[object Float32Array]", G2 = "[object Float64Array]", X3 = "[object Int8Array]", tt2 = "[object Int16Array]", ut2 = "[object Int32Array]", nt3 = "[object Uint8Array]", Z2 = "[object Uint8ClampedArray]", mt2 = "[object Uint16Array]", at3 = "[object Uint32Array]", gt3 = /[\\^$.*+?()[\]{}|]/g, bt3 = /^\[object .+?Constructor\]$/, J3 = /^(?:0|[1-9]\d*)$/, B3 = {};
      B3[U4] = B3[G2] = B3[X3] = B3[tt2] = B3[ut2] = B3[nt3] = B3[Z2] = B3[mt2] = B3[at3] = true, B3[s] = B3[c] = B3[$4] = B3[y2] = B3[M4] = B3[l2] = B3[u2] = B3[h2] = B3[v4] = B3[b4] = B3[g4] = B3[S2] = B3[N3] = B3[O3] = B3[P3] = false;
      var Nt2 = typeof Wt == "object" && Wt && Wt.Object === Object && Wt, Q2 = typeof self == "object" && self && self.Object === Object && self, lt3 = Nt2 || Q2 || Function("return this")(), Et3 = e && !e.nodeType && e, Ht3 = Et3 && true && t && !t.nodeType && t, It3 = Ht3 && Ht3.exports === Et3, Lt3 = It3 && Nt2.process, Ft3 = (function() {
        try {
          return Lt3 && Lt3.binding && Lt3.binding("util");
        } catch {
        }
      })(), be3 = Ft3 && Ft3.isTypedArray;
      function Ne4(m3, _) {
        for (var j3 = -1, F4 = m3 == null ? 0 : m3.length, ft3 = 0, q3 = []; ++j3 < F4; ) {
          var ht3 = m3[j3];
          _(ht3, j3, m3) && (q3[ft3++] = ht3);
        }
        return q3;
      }
      function ce4(m3, _) {
        for (var j3 = -1, F4 = _.length, ft3 = m3.length; ++j3 < F4; )
          m3[ft3 + j3] = _[j3];
        return m3;
      }
      function on2(m3, _) {
        for (var j3 = -1, F4 = m3 == null ? 0 : m3.length; ++j3 < F4; )
          if (_(m3[j3], j3, m3))
            return true;
        return false;
      }
      function an2(m3, _) {
        for (var j3 = -1, F4 = Array(m3); ++j3 < m3; )
          F4[j3] = _(j3);
        return F4;
      }
      function sn2(m3) {
        return function(_) {
          return m3(_);
        };
      }
      function ue3(m3, _) {
        return m3.has(_);
      }
      function le4(m3, _) {
        return m3?.[_];
      }
      function cn(m3) {
        var _ = -1, j3 = Array(m3.size);
        return m3.forEach(function(F4, ft3) {
          j3[++_] = [ft3, F4];
        }), j3;
      }
      function un2(m3, _) {
        return function(j3) {
          return m3(_(j3));
        };
      }
      function ln(m3) {
        var _ = -1, j3 = Array(m3.size);
        return m3.forEach(function(F4) {
          j3[++_] = F4;
        }), j3;
      }
      var fn2 = Array.prototype, Ie3 = Function.prototype, fe2 = Object.prototype, Qt2 = lt3["__core-js_shared__"], Ee4 = Ie3.toString, T2 = fe2.hasOwnProperty, L3 = (function() {
        var m3 = /[^.]+$/.exec(Qt2 && Qt2.keys && Qt2.keys.IE_PROTO || "");
        return m3 ? "Symbol(src)_1." + m3 : "";
      })(), d2 = fe2.toString, x2 = RegExp(
        "^" + Ee4.call(T2).replace(gt3, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), A3 = It3 ? lt3.Buffer : void 0, R3 = lt3.Symbol, D4 = lt3.Uint8Array, W3 = fe2.propertyIsEnumerable, z3 = fn2.splice, V3 = R3 ? R3.toStringTag : void 0, K3 = Object.getOwnPropertySymbols, it3 = A3 ? A3.isBuffer : void 0, ct2 = un2(Object.keys, Object), xt3 = je2(lt3, "DataView"), kt2 = je2(lt3, "Map"), Xt2 = je2(lt3, "Promise"), dn2 = je2(lt3, "Set"), Tr2 = je2(lt3, "WeakMap"), pn2 = je2(Object, "create"), ms2 = Se4(xt3), bs2 = Se4(kt2), Es2 = Se4(Xt2), xs2 = Se4(dn2), ws2 = Se4(Tr2), Oo2 = R3 ? R3.prototype : void 0, kr2 = Oo2 ? Oo2.valueOf : void 0;
      function xe2(m3) {
        var _ = -1, j3 = m3 == null ? 0 : m3.length;
        for (this.clear(); ++_ < j3; ) {
          var F4 = m3[_];
          this.set(F4[0], F4[1]);
        }
      }
      function Ss2() {
        this.__data__ = pn2 ? pn2(null) : {}, this.size = 0;
      }
      function _s2(m3) {
        var _ = this.has(m3) && delete this.__data__[m3];
        return this.size -= _ ? 1 : 0, _;
      }
      function Ts2(m3) {
        var _ = this.__data__;
        if (pn2) {
          var j3 = _[m3];
          return j3 === r2 ? void 0 : j3;
        }
        return T2.call(_, m3) ? _[m3] : void 0;
      }
      function ks2(m3) {
        var _ = this.__data__;
        return pn2 ? _[m3] !== void 0 : T2.call(_, m3);
      }
      function Rs2(m3, _) {
        var j3 = this.__data__;
        return this.size += this.has(m3) ? 0 : 1, j3[m3] = pn2 && _ === void 0 ? r2 : _, this;
      }
      xe2.prototype.clear = Ss2, xe2.prototype.delete = _s2, xe2.prototype.get = Ts2, xe2.prototype.has = ks2, xe2.prototype.set = Rs2;
      function Yt2(m3) {
        var _ = -1, j3 = m3 == null ? 0 : m3.length;
        for (this.clear(); ++_ < j3; ) {
          var F4 = m3[_];
          this.set(F4[0], F4[1]);
        }
      }
      function Cs2() {
        this.__data__ = [], this.size = 0;
      }
      function Os2(m3) {
        var _ = this.__data__, j3 = Nn(_, m3);
        if (j3 < 0)
          return false;
        var F4 = _.length - 1;
        return j3 == F4 ? _.pop() : z3.call(_, j3, 1), --this.size, true;
      }
      function As2(m3) {
        var _ = this.__data__, j3 = Nn(_, m3);
        return j3 < 0 ? void 0 : _[j3][1];
      }
      function Ns2(m3) {
        return Nn(this.__data__, m3) > -1;
      }
      function Is2(m3, _) {
        var j3 = this.__data__, F4 = Nn(j3, m3);
        return F4 < 0 ? (++this.size, j3.push([m3, _])) : j3[F4][1] = _, this;
      }
      Yt2.prototype.clear = Cs2, Yt2.prototype.delete = Os2, Yt2.prototype.get = As2, Yt2.prototype.has = Ns2, Yt2.prototype.set = Is2;
      function we3(m3) {
        var _ = -1, j3 = m3 == null ? 0 : m3.length;
        for (this.clear(); ++_ < j3; ) {
          var F4 = m3[_];
          this.set(F4[0], F4[1]);
        }
      }
      function js2() {
        this.size = 0, this.__data__ = {
          hash: new xe2(),
          map: new (kt2 || Yt2)(),
          string: new xe2()
        };
      }
      function Ps2(m3) {
        var _ = In2(this, m3).delete(m3);
        return this.size -= _ ? 1 : 0, _;
      }
      function Ds2(m3) {
        return In2(this, m3).get(m3);
      }
      function Hs(m3) {
        return In2(this, m3).has(m3);
      }
      function Ls2(m3, _) {
        var j3 = In2(this, m3), F4 = j3.size;
        return j3.set(m3, _), this.size += j3.size == F4 ? 0 : 1, this;
      }
      we3.prototype.clear = js2, we3.prototype.delete = Ps2, we3.prototype.get = Ds2, we3.prototype.has = Hs, we3.prototype.set = Ls2;
      function An2(m3) {
        var _ = -1, j3 = m3 == null ? 0 : m3.length;
        for (this.__data__ = new we3(); ++_ < j3; )
          this.add(m3[_]);
      }
      function $s(m3) {
        return this.__data__.set(m3, r2), this;
      }
      function Ms(m3) {
        return this.__data__.has(m3);
      }
      An2.prototype.add = An2.prototype.push = $s, An2.prototype.has = Ms;
      function de3(m3) {
        var _ = this.__data__ = new Yt2(m3);
        this.size = _.size;
      }
      function Ws2() {
        this.__data__ = new Yt2(), this.size = 0;
      }
      function Fs2(m3) {
        var _ = this.__data__, j3 = _.delete(m3);
        return this.size = _.size, j3;
      }
      function Bs(m3) {
        return this.__data__.get(m3);
      }
      function zs2(m3) {
        return this.__data__.has(m3);
      }
      function Us(m3, _) {
        var j3 = this.__data__;
        if (j3 instanceof Yt2) {
          var F4 = j3.__data__;
          if (!kt2 || F4.length < n - 1)
            return F4.push([m3, _]), this.size = ++j3.size, this;
          j3 = this.__data__ = new we3(F4);
        }
        return j3.set(m3, _), this.size = j3.size, this;
      }
      de3.prototype.clear = Ws2, de3.prototype.delete = Fs2, de3.prototype.get = Bs, de3.prototype.has = zs2, de3.prototype.set = Us;
      function Vs(m3, _) {
        var j3 = jn2(m3), F4 = !j3 && ac2(m3), ft3 = !j3 && !F4 && Rr2(m3), q3 = !j3 && !F4 && !ft3 && $o2(m3), ht3 = j3 || F4 || ft3 || q3, wt3 = ht3 ? an2(m3.length, String) : [], St2 = wt3.length;
        for (var pt3 in m3)
          T2.call(m3, pt3) && !(ht3 && // Safari 9 has enumerable `arguments.length` in strict mode.
          (pt3 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          ft3 && (pt3 == "offset" || pt3 == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          q3 && (pt3 == "buffer" || pt3 == "byteLength" || pt3 == "byteOffset") || // Skip index properties.
          ec2(pt3, St2))) && wt3.push(pt3);
        return wt3;
      }
      function Nn(m3, _) {
        for (var j3 = m3.length; j3--; )
          if (Po2(m3[j3][0], _))
            return j3;
        return -1;
      }
      function qs2(m3, _, j3) {
        var F4 = _(m3);
        return jn2(m3) ? F4 : ce4(F4, j3(m3));
      }
      function hn2(m3) {
        return m3 == null ? m3 === void 0 ? I3 : E3 : V3 && V3 in Object(m3) ? Ys2(m3) : ic2(m3);
      }
      function Ao2(m3) {
        return vn2(m3) && hn2(m3) == s;
      }
      function No2(m3, _, j3, F4, ft3) {
        return m3 === _ ? true : m3 == null || _ == null || !vn2(m3) && !vn2(_) ? m3 !== m3 && _ !== _ : Gs2(m3, _, j3, F4, No2, ft3);
      }
      function Gs2(m3, _, j3, F4, ft3, q3) {
        var ht3 = jn2(m3), wt3 = jn2(_), St2 = ht3 ? c : pe3(m3), pt3 = wt3 ? c : pe3(_);
        St2 = St2 == s ? g4 : St2, pt3 = pt3 == s ? g4 : pt3;
        var Pt3 = St2 == g4, Bt3 = pt3 == g4, Rt3 = St2 == pt3;
        if (Rt3 && Rr2(m3)) {
          if (!Rr2(_))
            return false;
          ht3 = true, Pt3 = false;
        }
        if (Rt3 && !Pt3)
          return q3 || (q3 = new de3()), ht3 || $o2(m3) ? Io2(m3, _, j3, F4, ft3, q3) : Js2(m3, _, St2, j3, F4, ft3, q3);
        if (!(j3 & o)) {
          var $t3 = Pt3 && T2.call(m3, "__wrapped__"), Mt3 = Bt3 && T2.call(_, "__wrapped__");
          if ($t3 || Mt3) {
            var he3 = $t3 ? m3.value() : m3, te2 = Mt3 ? _.value() : _;
            return q3 || (q3 = new de3()), ft3(he3, te2, j3, F4, q3);
          }
        }
        return Rt3 ? (q3 || (q3 = new de3()), Qs2(m3, _, j3, F4, ft3, q3)) : false;
      }
      function Xs2(m3) {
        if (!Lo2(m3) || rc2(m3))
          return false;
        var _ = Do2(m3) ? x2 : bt3;
        return _.test(Se4(m3));
      }
      function Ks2(m3) {
        return vn2(m3) && Ho2(m3.length) && !!B3[hn2(m3)];
      }
      function Zs2(m3) {
        if (!oc2(m3))
          return ct2(m3);
        var _ = [];
        for (var j3 in Object(m3))
          T2.call(m3, j3) && j3 != "constructor" && _.push(j3);
        return _;
      }
      function Io2(m3, _, j3, F4, ft3, q3) {
        var ht3 = j3 & o, wt3 = m3.length, St2 = _.length;
        if (wt3 != St2 && !(ht3 && St2 > wt3))
          return false;
        var pt3 = q3.get(m3);
        if (pt3 && q3.get(_))
          return pt3 == _;
        var Pt3 = -1, Bt3 = true, Rt3 = j3 & i2 ? new An2() : void 0;
        for (q3.set(m3, _), q3.set(_, m3); ++Pt3 < wt3; ) {
          var $t3 = m3[Pt3], Mt3 = _[Pt3];
          if (F4)
            var he3 = ht3 ? F4(Mt3, $t3, Pt3, _, m3, q3) : F4($t3, Mt3, Pt3, m3, _, q3);
          if (he3 !== void 0) {
            if (he3)
              continue;
            Bt3 = false;
            break;
          }
          if (Rt3) {
            if (!on2(_, function(te2, _e3) {
              if (!ue3(Rt3, _e3) && ($t3 === te2 || ft3($t3, te2, j3, F4, q3)))
                return Rt3.push(_e3);
            })) {
              Bt3 = false;
              break;
            }
          } else if (!($t3 === Mt3 || ft3($t3, Mt3, j3, F4, q3))) {
            Bt3 = false;
            break;
          }
        }
        return q3.delete(m3), q3.delete(_), Bt3;
      }
      function Js2(m3, _, j3, F4, ft3, q3, ht3) {
        switch (j3) {
          case M4:
            if (m3.byteLength != _.byteLength || m3.byteOffset != _.byteOffset)
              return false;
            m3 = m3.buffer, _ = _.buffer;
          case $4:
            return !(m3.byteLength != _.byteLength || !q3(new D4(m3), new D4(_)));
          case y2:
          case l2:
          case b4:
            return Po2(+m3, +_);
          case u2:
            return m3.name == _.name && m3.message == _.message;
          case S2:
          case O3:
            return m3 == _ + "";
          case v4:
            var wt3 = cn;
          case N3:
            var St2 = F4 & o;
            if (wt3 || (wt3 = ln), m3.size != _.size && !St2)
              return false;
            var pt3 = ht3.get(m3);
            if (pt3)
              return pt3 == _;
            F4 |= i2, ht3.set(m3, _);
            var Pt3 = Io2(wt3(m3), wt3(_), F4, ft3, q3, ht3);
            return ht3.delete(m3), Pt3;
          case C3:
            if (kr2)
              return kr2.call(m3) == kr2.call(_);
        }
        return false;
      }
      function Qs2(m3, _, j3, F4, ft3, q3) {
        var ht3 = j3 & o, wt3 = jo(m3), St2 = wt3.length, pt3 = jo(_), Pt3 = pt3.length;
        if (St2 != Pt3 && !ht3)
          return false;
        for (var Bt3 = St2; Bt3--; ) {
          var Rt3 = wt3[Bt3];
          if (!(ht3 ? Rt3 in _ : T2.call(_, Rt3)))
            return false;
        }
        var $t3 = q3.get(m3);
        if ($t3 && q3.get(_))
          return $t3 == _;
        var Mt3 = true;
        q3.set(m3, _), q3.set(_, m3);
        for (var he3 = ht3; ++Bt3 < St2; ) {
          Rt3 = wt3[Bt3];
          var te2 = m3[Rt3], _e3 = _[Rt3];
          if (F4)
            var Mo2 = ht3 ? F4(_e3, te2, Rt3, _, m3, q3) : F4(te2, _e3, Rt3, m3, _, q3);
          if (!(Mo2 === void 0 ? te2 === _e3 || ft3(te2, _e3, j3, F4, q3) : Mo2)) {
            Mt3 = false;
            break;
          }
          he3 || (he3 = Rt3 == "constructor");
        }
        if (Mt3 && !he3) {
          var Pn = m3.constructor, Dn = _.constructor;
          Pn != Dn && "constructor" in m3 && "constructor" in _ && !(typeof Pn == "function" && Pn instanceof Pn && typeof Dn == "function" && Dn instanceof Dn) && (Mt3 = false);
        }
        return q3.delete(m3), q3.delete(_), Mt3;
      }
      function jo(m3) {
        return qs2(m3, uc2, tc2);
      }
      function In2(m3, _) {
        var j3 = m3.__data__;
        return nc2(_) ? j3[typeof _ == "string" ? "string" : "hash"] : j3.map;
      }
      function je2(m3, _) {
        var j3 = le4(m3, _);
        return Xs2(j3) ? j3 : void 0;
      }
      function Ys2(m3) {
        var _ = T2.call(m3, V3), j3 = m3[V3];
        try {
          m3[V3] = void 0;
          var F4 = true;
        } catch {
        }
        var ft3 = d2.call(m3);
        return F4 && (_ ? m3[V3] = j3 : delete m3[V3]), ft3;
      }
      var tc2 = K3 ? function(m3) {
        return m3 == null ? [] : (m3 = Object(m3), Ne4(K3(m3), function(_) {
          return W3.call(m3, _);
        }));
      } : lc2, pe3 = hn2;
      (xt3 && pe3(new xt3(new ArrayBuffer(1))) != M4 || kt2 && pe3(new kt2()) != v4 || Xt2 && pe3(Xt2.resolve()) != w3 || dn2 && pe3(new dn2()) != N3 || Tr2 && pe3(new Tr2()) != P3) && (pe3 = function(m3) {
        var _ = hn2(m3), j3 = _ == g4 ? m3.constructor : void 0, F4 = j3 ? Se4(j3) : "";
        if (F4)
          switch (F4) {
            case ms2:
              return M4;
            case bs2:
              return v4;
            case Es2:
              return w3;
            case xs2:
              return N3;
            case ws2:
              return P3;
          }
        return _;
      });
      function ec2(m3, _) {
        return _ = _ ?? a3, !!_ && (typeof m3 == "number" || J3.test(m3)) && m3 > -1 && m3 % 1 == 0 && m3 < _;
      }
      function nc2(m3) {
        var _ = typeof m3;
        return _ == "string" || _ == "number" || _ == "symbol" || _ == "boolean" ? m3 !== "__proto__" : m3 === null;
      }
      function rc2(m3) {
        return !!L3 && L3 in m3;
      }
      function oc2(m3) {
        var _ = m3 && m3.constructor, j3 = typeof _ == "function" && _.prototype || fe2;
        return m3 === j3;
      }
      function ic2(m3) {
        return d2.call(m3);
      }
      function Se4(m3) {
        if (m3 != null) {
          try {
            return Ee4.call(m3);
          } catch {
          }
          try {
            return m3 + "";
          } catch {
          }
        }
        return "";
      }
      function Po2(m3, _) {
        return m3 === _ || m3 !== m3 && _ !== _;
      }
      var ac2 = Ao2(/* @__PURE__ */ (function() {
        return arguments;
      })()) ? Ao2 : function(m3) {
        return vn2(m3) && T2.call(m3, "callee") && !W3.call(m3, "callee");
      }, jn2 = Array.isArray;
      function sc2(m3) {
        return m3 != null && Ho2(m3.length) && !Do2(m3);
      }
      var Rr2 = it3 || fc2;
      function cc2(m3, _) {
        return No2(m3, _);
      }
      function Do2(m3) {
        if (!Lo2(m3))
          return false;
        var _ = hn2(m3);
        return _ == h2 || _ == p2 || _ == f2 || _ == k2;
      }
      function Ho2(m3) {
        return typeof m3 == "number" && m3 > -1 && m3 % 1 == 0 && m3 <= a3;
      }
      function Lo2(m3) {
        var _ = typeof m3;
        return m3 != null && (_ == "object" || _ == "function");
      }
      function vn2(m3) {
        return m3 != null && typeof m3 == "object";
      }
      var $o2 = be3 ? sn2(be3) : Ks2;
      function uc2(m3) {
        return sc2(m3) ? Vs(m3) : Zs2(m3);
      }
      function lc2() {
        return [];
      }
      function fc2() {
        return false;
      }
      t.exports = cc2;
    })(Zn, Zn.exports)), Zn.exports;
  }
  function nl() {
    return ni || (ni = 1, (function(t) {
      (function() {
        function e(d2, x2, A3) {
          return d2.call.apply(d2.bind, arguments);
        }
        function n(d2, x2, A3) {
          if (!d2) throw Error();
          if (2 < arguments.length) {
            var R3 = Array.prototype.slice.call(arguments, 2);
            return function() {
              var D4 = Array.prototype.slice.call(arguments);
              return Array.prototype.unshift.apply(D4, R3), d2.apply(x2, D4);
            };
          }
          return function() {
            return d2.apply(x2, arguments);
          };
        }
        function r2(d2, x2, A3) {
          return r2 = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? e : n, r2.apply(null, arguments);
        }
        var o = Date.now || function() {
          return +/* @__PURE__ */ new Date();
        };
        function i2(d2, x2) {
          this.a = d2, this.o = x2 || d2, this.c = this.o.document;
        }
        var a3 = !!window.FontFace;
        function s(d2, x2, A3, R3) {
          if (x2 = d2.c.createElement(x2), A3) for (var D4 in A3) A3.hasOwnProperty(D4) && (D4 == "style" ? x2.style.cssText = A3[D4] : x2.setAttribute(D4, A3[D4]));
          return R3 && x2.appendChild(d2.c.createTextNode(R3)), x2;
        }
        function c(d2, x2, A3) {
          d2 = d2.c.getElementsByTagName(x2)[0], d2 || (d2 = document.documentElement), d2.insertBefore(A3, d2.lastChild);
        }
        function f2(d2) {
          d2.parentNode && d2.parentNode.removeChild(d2);
        }
        function y2(d2, x2, A3) {
          x2 = x2 || [], A3 = A3 || [];
          for (var R3 = d2.className.split(/\s+/), D4 = 0; D4 < x2.length; D4 += 1) {
            for (var W3 = false, z3 = 0; z3 < R3.length; z3 += 1) if (x2[D4] === R3[z3]) {
              W3 = true;
              break;
            }
            W3 || R3.push(x2[D4]);
          }
          for (x2 = [], D4 = 0; D4 < R3.length; D4 += 1) {
            for (W3 = false, z3 = 0; z3 < A3.length; z3 += 1) if (R3[D4] === A3[z3]) {
              W3 = true;
              break;
            }
            W3 || x2.push(R3[D4]);
          }
          d2.className = x2.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
        }
        function l2(d2, x2) {
          for (var A3 = d2.className.split(/\s+/), R3 = 0, D4 = A3.length; R3 < D4; R3++) if (A3[R3] == x2) return true;
          return false;
        }
        function u2(d2) {
          return d2.o.location.hostname || d2.a.location.hostname;
        }
        function h2(d2, x2, A3) {
          function R3() {
            V3 && D4 && W3 && (V3(z3), V3 = null);
          }
          x2 = s(d2, "link", { rel: "stylesheet", href: x2, media: "all" });
          var D4 = false, W3 = true, z3 = null, V3 = A3 || null;
          a3 ? (x2.onload = function() {
            D4 = true, R3();
          }, x2.onerror = function() {
            D4 = true, z3 = Error("Stylesheet failed to load"), R3();
          }) : setTimeout(function() {
            D4 = true, R3();
          }, 0), c(d2, "head", x2);
        }
        function p2(d2, x2, A3, R3) {
          var D4 = d2.c.getElementsByTagName("head")[0];
          if (D4) {
            var W3 = s(d2, "script", { src: x2 }), z3 = false;
            return W3.onload = W3.onreadystatechange = function() {
              z3 || this.readyState && this.readyState != "loaded" && this.readyState != "complete" || (z3 = true, A3 && A3(null), W3.onload = W3.onreadystatechange = null, W3.parentNode.tagName == "HEAD" && D4.removeChild(W3));
            }, D4.appendChild(W3), setTimeout(function() {
              z3 || (z3 = true, A3 && A3(Error("Script load timeout")));
            }, R3 || 5e3), W3;
          }
          return null;
        }
        function v4() {
          this.a = 0, this.c = null;
        }
        function b4(d2) {
          return d2.a++, function() {
            d2.a--, g4(d2);
          };
        }
        function E3(d2, x2) {
          d2.c = x2, g4(d2);
        }
        function g4(d2) {
          d2.a == 0 && d2.c && (d2.c(), d2.c = null);
        }
        function w3(d2) {
          this.a = d2 || "-";
        }
        w3.prototype.c = function(d2) {
          for (var x2 = [], A3 = 0; A3 < arguments.length; A3++) x2.push(arguments[A3].replace(/[\W_]+/g, "").toLowerCase());
          return x2.join(this.a);
        };
        function k2(d2, x2) {
          this.c = d2, this.f = 4, this.a = "n";
          var A3 = (x2 || "n4").match(/^([nio])([1-9])$/i);
          A3 && (this.a = A3[1], this.f = parseInt(A3[2], 10));
        }
        function S2(d2) {
          return C3(d2) + " " + (d2.f + "00") + " 300px " + N3(d2.c);
        }
        function N3(d2) {
          var x2 = [];
          d2 = d2.split(/,\s*/);
          for (var A3 = 0; A3 < d2.length; A3++) {
            var R3 = d2[A3].replace(/['"]/g, "");
            R3.indexOf(" ") != -1 || /^\d/.test(R3) ? x2.push("'" + R3 + "'") : x2.push(R3);
          }
          return x2.join(",");
        }
        function O3(d2) {
          return d2.a + d2.f;
        }
        function C3(d2) {
          var x2 = "normal";
          return d2.a === "o" ? x2 = "oblique" : d2.a === "i" && (x2 = "italic"), x2;
        }
        function I3(d2) {
          var x2 = 4, A3 = "n", R3 = null;
          return d2 && ((R3 = d2.match(/(normal|oblique|italic)/i)) && R3[1] && (A3 = R3[1].substr(0, 1).toLowerCase()), (R3 = d2.match(/([1-9]00|normal|bold)/i)) && R3[1] && (/bold/i.test(R3[1]) ? x2 = 7 : /[1-9]00/.test(R3[1]) && (x2 = parseInt(R3[1].substr(0, 1), 10)))), A3 + x2;
        }
        function P3(d2, x2) {
          this.c = d2, this.f = d2.o.document.documentElement, this.h = x2, this.a = new w3("-"), this.j = x2.events !== false, this.g = x2.classes !== false;
        }
        function $4(d2) {
          d2.g && y2(d2.f, [d2.a.c("wf", "loading")]), U4(d2, "loading");
        }
        function M4(d2) {
          if (d2.g) {
            var x2 = l2(d2.f, d2.a.c("wf", "active")), A3 = [], R3 = [d2.a.c("wf", "loading")];
            x2 || A3.push(d2.a.c("wf", "inactive")), y2(d2.f, A3, R3);
          }
          U4(d2, "inactive");
        }
        function U4(d2, x2, A3) {
          d2.j && d2.h[x2] && (A3 ? d2.h[x2](A3.c, O3(A3)) : d2.h[x2]());
        }
        function G2() {
          this.c = {};
        }
        function X3(d2, x2, A3) {
          var R3 = [], D4;
          for (D4 in x2) if (x2.hasOwnProperty(D4)) {
            var W3 = d2.c[D4];
            W3 && R3.push(W3(x2[D4], A3));
          }
          return R3;
        }
        function tt2(d2, x2) {
          this.c = d2, this.f = x2, this.a = s(this.c, "span", { "aria-hidden": "true" }, this.f);
        }
        function ut2(d2) {
          c(d2.c, "body", d2.a);
        }
        function nt3(d2) {
          return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + N3(d2.c) + ";" + ("font-style:" + C3(d2) + ";font-weight:" + (d2.f + "00") + ";");
        }
        function Z2(d2, x2, A3, R3, D4, W3) {
          this.g = d2, this.j = x2, this.a = R3, this.c = A3, this.f = D4 || 3e3, this.h = W3 || void 0;
        }
        Z2.prototype.start = function() {
          var d2 = this.c.o.document, x2 = this, A3 = o(), R3 = new Promise(function(z3, V3) {
            function K3() {
              o() - A3 >= x2.f ? V3() : d2.fonts.load(S2(x2.a), x2.h).then(function(it3) {
                1 <= it3.length ? z3() : setTimeout(K3, 25);
              }, function() {
                V3();
              });
            }
            K3();
          }), D4 = null, W3 = new Promise(function(z3, V3) {
            D4 = setTimeout(V3, x2.f);
          });
          Promise.race([W3, R3]).then(function() {
            D4 && (clearTimeout(D4), D4 = null), x2.g(x2.a);
          }, function() {
            x2.j(x2.a);
          });
        };
        function mt2(d2, x2, A3, R3, D4, W3, z3) {
          this.v = d2, this.B = x2, this.c = A3, this.a = R3, this.s = z3 || "BESbswy", this.f = {}, this.w = D4 || 3e3, this.u = W3 || null, this.m = this.j = this.h = this.g = null, this.g = new tt2(this.c, this.s), this.h = new tt2(this.c, this.s), this.j = new tt2(this.c, this.s), this.m = new tt2(this.c, this.s), d2 = new k2(this.a.c + ",serif", O3(this.a)), d2 = nt3(d2), this.g.a.style.cssText = d2, d2 = new k2(this.a.c + ",sans-serif", O3(this.a)), d2 = nt3(d2), this.h.a.style.cssText = d2, d2 = new k2("serif", O3(this.a)), d2 = nt3(d2), this.j.a.style.cssText = d2, d2 = new k2("sans-serif", O3(this.a)), d2 = nt3(d2), this.m.a.style.cssText = d2, ut2(this.g), ut2(this.h), ut2(this.j), ut2(this.m);
        }
        var at3 = { D: "serif", C: "sans-serif" }, gt3 = null;
        function bt3() {
          if (gt3 === null) {
            var d2 = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            gt3 = !!d2 && (536 > parseInt(d2[1], 10) || parseInt(d2[1], 10) === 536 && 11 >= parseInt(d2[2], 10));
          }
          return gt3;
        }
        mt2.prototype.start = function() {
          this.f.serif = this.j.a.offsetWidth, this.f["sans-serif"] = this.m.a.offsetWidth, this.A = o(), B3(this);
        };
        function J3(d2, x2, A3) {
          for (var R3 in at3) if (at3.hasOwnProperty(R3) && x2 === d2.f[at3[R3]] && A3 === d2.f[at3[R3]]) return true;
          return false;
        }
        function B3(d2) {
          var x2 = d2.g.a.offsetWidth, A3 = d2.h.a.offsetWidth, R3;
          (R3 = x2 === d2.f.serif && A3 === d2.f["sans-serif"]) || (R3 = bt3() && J3(d2, x2, A3)), R3 ? o() - d2.A >= d2.w ? bt3() && J3(d2, x2, A3) && (d2.u === null || d2.u.hasOwnProperty(d2.a.c)) ? Q2(d2, d2.v) : Q2(d2, d2.B) : Nt2(d2) : Q2(d2, d2.v);
        }
        function Nt2(d2) {
          setTimeout(r2(function() {
            B3(this);
          }, d2), 50);
        }
        function Q2(d2, x2) {
          setTimeout(r2(function() {
            f2(this.g.a), f2(this.h.a), f2(this.j.a), f2(this.m.a), x2(this.a);
          }, d2), 0);
        }
        function lt3(d2, x2, A3) {
          this.c = d2, this.a = x2, this.f = 0, this.m = this.j = false, this.s = A3;
        }
        var Et3 = null;
        lt3.prototype.g = function(d2) {
          var x2 = this.a;
          x2.g && y2(x2.f, [x2.a.c("wf", d2.c, O3(d2).toString(), "active")], [x2.a.c("wf", d2.c, O3(d2).toString(), "loading"), x2.a.c("wf", d2.c, O3(d2).toString(), "inactive")]), U4(x2, "fontactive", d2), this.m = true, Ht3(this);
        }, lt3.prototype.h = function(d2) {
          var x2 = this.a;
          if (x2.g) {
            var A3 = l2(x2.f, x2.a.c("wf", d2.c, O3(d2).toString(), "active")), R3 = [], D4 = [x2.a.c("wf", d2.c, O3(d2).toString(), "loading")];
            A3 || R3.push(x2.a.c("wf", d2.c, O3(d2).toString(), "inactive")), y2(x2.f, R3, D4);
          }
          U4(x2, "fontinactive", d2), Ht3(this);
        };
        function Ht3(d2) {
          --d2.f == 0 && d2.j && (d2.m ? (d2 = d2.a, d2.g && y2(d2.f, [d2.a.c("wf", "active")], [d2.a.c("wf", "loading"), d2.a.c("wf", "inactive")]), U4(d2, "active")) : M4(d2.a));
        }
        function It3(d2) {
          this.j = d2, this.a = new G2(), this.h = 0, this.f = this.g = true;
        }
        It3.prototype.load = function(d2) {
          this.c = new i2(this.j, d2.context || this.j), this.g = d2.events !== false, this.f = d2.classes !== false, Ft3(this, new P3(this.c, d2), d2);
        };
        function Lt3(d2, x2, A3, R3, D4) {
          var W3 = --d2.h == 0;
          (d2.f || d2.g) && setTimeout(function() {
            var z3 = D4 || null, V3 = R3 || null || {};
            if (A3.length === 0 && W3) M4(x2.a);
            else {
              x2.f += A3.length, W3 && (x2.j = W3);
              var K3, it3 = [];
              for (K3 = 0; K3 < A3.length; K3++) {
                var ct2 = A3[K3], xt3 = V3[ct2.c], kt2 = x2.a, Xt2 = ct2;
                if (kt2.g && y2(kt2.f, [kt2.a.c("wf", Xt2.c, O3(Xt2).toString(), "loading")]), U4(kt2, "fontloading", Xt2), kt2 = null, Et3 === null) if (window.FontFace) {
                  var Xt2 = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent), dn2 = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                  Et3 = Xt2 ? 42 < parseInt(Xt2[1], 10) : !dn2;
                } else Et3 = false;
                Et3 ? kt2 = new Z2(r2(x2.g, x2), r2(x2.h, x2), x2.c, ct2, x2.s, xt3) : kt2 = new mt2(r2(x2.g, x2), r2(x2.h, x2), x2.c, ct2, x2.s, z3, xt3), it3.push(kt2);
              }
              for (K3 = 0; K3 < it3.length; K3++) it3[K3].start();
            }
          }, 0);
        }
        function Ft3(d2, x2, A3) {
          var D4 = [], R3 = A3.timeout;
          $4(x2);
          var D4 = X3(d2.a, A3, d2.c), W3 = new lt3(d2.c, x2, R3);
          for (d2.h = D4.length, x2 = 0, A3 = D4.length; x2 < A3; x2++) D4[x2].load(function(z3, V3, K3) {
            Lt3(d2, W3, z3, V3, K3);
          });
        }
        function be3(d2, x2) {
          this.c = d2, this.a = x2;
        }
        be3.prototype.load = function(d2) {
          function x2() {
            if (W3["__mti_fntLst" + R3]) {
              var z3 = W3["__mti_fntLst" + R3](), V3 = [], K3;
              if (z3) for (var it3 = 0; it3 < z3.length; it3++) {
                var ct2 = z3[it3].fontfamily;
                z3[it3].fontStyle != null && z3[it3].fontWeight != null ? (K3 = z3[it3].fontStyle + z3[it3].fontWeight, V3.push(new k2(ct2, K3))) : V3.push(new k2(ct2));
              }
              d2(V3);
            } else setTimeout(function() {
              x2();
            }, 50);
          }
          var A3 = this, R3 = A3.a.projectId, D4 = A3.a.version;
          if (R3) {
            var W3 = A3.c.o;
            p2(this.c, (A3.a.api || "https://fast.fonts.net/jsapi") + "/" + R3 + ".js" + (D4 ? "?v=" + D4 : ""), function(z3) {
              z3 ? d2([]) : (W3["__MonotypeConfiguration__" + R3] = function() {
                return A3.a;
              }, x2());
            }).id = "__MonotypeAPIScript__" + R3;
          } else d2([]);
        };
        function Ne4(d2, x2) {
          this.c = d2, this.a = x2;
        }
        Ne4.prototype.load = function(d2) {
          var x2, A3, R3 = this.a.urls || [], D4 = this.a.families || [], W3 = this.a.testStrings || {}, z3 = new v4();
          for (x2 = 0, A3 = R3.length; x2 < A3; x2++) h2(this.c, R3[x2], b4(z3));
          var V3 = [];
          for (x2 = 0, A3 = D4.length; x2 < A3; x2++) if (R3 = D4[x2].split(":"), R3[1]) for (var K3 = R3[1].split(","), it3 = 0; it3 < K3.length; it3 += 1) V3.push(new k2(R3[0], K3[it3]));
          else V3.push(new k2(R3[0]));
          E3(z3, function() {
            d2(V3, W3);
          });
        };
        function ce4(d2, x2) {
          d2 ? this.c = d2 : this.c = on2, this.a = [], this.f = [], this.g = x2 || "";
        }
        var on2 = "https://fonts.googleapis.com/css";
        function an2(d2, x2) {
          for (var A3 = x2.length, R3 = 0; R3 < A3; R3++) {
            var D4 = x2[R3].split(":");
            D4.length == 3 && d2.f.push(D4.pop());
            var W3 = "";
            D4.length == 2 && D4[1] != "" && (W3 = ":"), d2.a.push(D4.join(W3));
          }
        }
        function sn2(d2) {
          if (d2.a.length == 0) throw Error("No fonts to load!");
          if (d2.c.indexOf("kit=") != -1) return d2.c;
          for (var x2 = d2.a.length, A3 = [], R3 = 0; R3 < x2; R3++) A3.push(d2.a[R3].replace(/ /g, "+"));
          return x2 = d2.c + "?family=" + A3.join("%7C"), 0 < d2.f.length && (x2 += "&subset=" + d2.f.join(",")), 0 < d2.g.length && (x2 += "&text=" + encodeURIComponent(d2.g)), x2;
        }
        function ue3(d2) {
          this.f = d2, this.a = [], this.c = {};
        }
        var le4 = { latin: "BESbswy", "latin-ext": "\xE7\xF6\xFC\u011F\u015F", cyrillic: "\u0439\u044F\u0416", greek: "\u03B1\u03B2\u03A3", khmer: "\u1780\u1781\u1782", Hanuman: "\u1780\u1781\u1782" }, cn = { thin: "1", extralight: "2", "extra-light": "2", ultralight: "2", "ultra-light": "2", light: "3", regular: "4", book: "4", medium: "5", "semi-bold": "6", semibold: "6", "demi-bold": "6", demibold: "6", bold: "7", "extra-bold": "8", extrabold: "8", "ultra-bold": "8", ultrabold: "8", black: "9", heavy: "9", l: "3", r: "4", b: "7" }, un2 = { i: "i", italic: "i", n: "n", normal: "n" }, ln = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
        function fn2(d2) {
          for (var x2 = d2.f.length, A3 = 0; A3 < x2; A3++) {
            var R3 = d2.f[A3].split(":"), D4 = R3[0].replace(/\+/g, " "), W3 = ["n4"];
            if (2 <= R3.length) {
              var z3, V3 = R3[1];
              if (z3 = [], V3) for (var V3 = V3.split(","), K3 = V3.length, it3 = 0; it3 < K3; it3++) {
                var ct2;
                if (ct2 = V3[it3], ct2.match(/^[\w-]+$/)) {
                  var xt3 = ln.exec(ct2.toLowerCase());
                  if (xt3 == null) ct2 = "";
                  else {
                    if (ct2 = xt3[2], ct2 = ct2 == null || ct2 == "" ? "n" : un2[ct2], xt3 = xt3[1], xt3 == null || xt3 == "") xt3 = "4";
                    else var kt2 = cn[xt3], xt3 = kt2 || (isNaN(xt3) ? "4" : xt3.substr(0, 1));
                    ct2 = [ct2, xt3].join("");
                  }
                } else ct2 = "";
                ct2 && z3.push(ct2);
              }
              0 < z3.length && (W3 = z3), R3.length == 3 && (R3 = R3[2], z3 = [], R3 = R3 ? R3.split(",") : z3, 0 < R3.length && (R3 = le4[R3[0]]) && (d2.c[D4] = R3));
            }
            for (d2.c[D4] || (R3 = le4[D4]) && (d2.c[D4] = R3), R3 = 0; R3 < W3.length; R3 += 1) d2.a.push(new k2(D4, W3[R3]));
          }
        }
        function Ie3(d2, x2) {
          this.c = d2, this.a = x2;
        }
        var fe2 = { Arimo: true, Cousine: true, Tinos: true };
        Ie3.prototype.load = function(d2) {
          var x2 = new v4(), A3 = this.c, R3 = new ce4(this.a.api, this.a.text), D4 = this.a.families;
          an2(R3, D4);
          var W3 = new ue3(D4);
          fn2(W3), h2(A3, sn2(R3), b4(x2)), E3(x2, function() {
            d2(W3.a, W3.c, fe2);
          });
        };
        function Qt2(d2, x2) {
          this.c = d2, this.a = x2;
        }
        Qt2.prototype.load = function(d2) {
          var x2 = this.a.id, A3 = this.c.o;
          x2 ? p2(this.c, (this.a.api || "https://use.typekit.net") + "/" + x2 + ".js", function(R3) {
            if (R3) d2([]);
            else if (A3.Typekit && A3.Typekit.config && A3.Typekit.config.fn) {
              R3 = A3.Typekit.config.fn;
              for (var D4 = [], W3 = 0; W3 < R3.length; W3 += 2) for (var z3 = R3[W3], V3 = R3[W3 + 1], K3 = 0; K3 < V3.length; K3++) D4.push(new k2(z3, V3[K3]));
              try {
                A3.Typekit.load({ events: false, classes: false, async: true });
              } catch {
              }
              d2(D4);
            }
          }, 2e3) : d2([]);
        };
        function Ee4(d2, x2) {
          this.c = d2, this.f = x2, this.a = [];
        }
        Ee4.prototype.load = function(d2) {
          var x2 = this.f.id, A3 = this.c.o, R3 = this;
          x2 ? (A3.__webfontfontdeckmodule__ || (A3.__webfontfontdeckmodule__ = {}), A3.__webfontfontdeckmodule__[x2] = function(D4, W3) {
            for (var z3 = 0, V3 = W3.fonts.length; z3 < V3; ++z3) {
              var K3 = W3.fonts[z3];
              R3.a.push(new k2(K3.name, I3("font-weight:" + K3.weight + ";font-style:" + K3.style)));
            }
            d2(R3.a);
          }, p2(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + u2(this.c) + "/" + x2 + ".js", function(D4) {
            D4 && d2([]);
          })) : d2([]);
        };
        var T2 = new It3(window);
        T2.a.c.custom = function(d2, x2) {
          return new Ne4(x2, d2);
        }, T2.a.c.fontdeck = function(d2, x2) {
          return new Ee4(x2, d2);
        }, T2.a.c.monotype = function(d2, x2) {
          return new be3(x2, d2);
        }, T2.a.c.typekit = function(d2, x2) {
          return new Qt2(x2, d2);
        }, T2.a.c.google = function(d2, x2) {
          return new Ie3(x2, d2);
        };
        var L3 = { load: r2(T2.load, T2) };
        t.exports ? t.exports = L3 : (window.WebFont = L3, window.WebFontConfig && T2.load(window.WebFontConfig));
      })();
    })(ei)), ei.exports;
  }
  function il() {
    if (ri) return Bn.exports;
    ri = 1;
    function t(l2, u2) {
      var h2 = u2 && u2.cache ? u2.cache : y2, p2 = u2 && u2.serializer ? u2.serializer : c, v4 = u2 && u2.strategy ? u2.strategy : i2;
      return v4(l2, {
        cache: h2,
        serializer: p2
      });
    }
    function e(l2) {
      return l2 == null || typeof l2 == "number" || typeof l2 == "boolean";
    }
    function n(l2, u2, h2, p2) {
      var v4 = e(p2) ? p2 : h2(p2), b4 = u2.get(v4);
      return typeof b4 > "u" && (b4 = l2.call(this, p2), u2.set(v4, b4)), b4;
    }
    function r2(l2, u2, h2) {
      var p2 = Array.prototype.slice.call(arguments, 3), v4 = h2(p2), b4 = u2.get(v4);
      return typeof b4 > "u" && (b4 = l2.apply(this, p2), u2.set(v4, b4)), b4;
    }
    function o(l2, u2, h2, p2, v4) {
      return h2.bind(
        u2,
        l2,
        p2,
        v4
      );
    }
    function i2(l2, u2) {
      var h2 = l2.length === 1 ? n : r2;
      return o(
        l2,
        this,
        h2,
        u2.cache.create(),
        u2.serializer
      );
    }
    function a3(l2, u2) {
      var h2 = r2;
      return o(
        l2,
        this,
        h2,
        u2.cache.create(),
        u2.serializer
      );
    }
    function s(l2, u2) {
      var h2 = n;
      return o(
        l2,
        this,
        h2,
        u2.cache.create(),
        u2.serializer
      );
    }
    function c() {
      return JSON.stringify(arguments);
    }
    function f2() {
      this.cache = /* @__PURE__ */ Object.create(null);
    }
    f2.prototype.has = function(l2) {
      return l2 in this.cache;
    }, f2.prototype.get = function(l2) {
      return this.cache[l2];
    }, f2.prototype.set = function(l2, u2) {
      this.cache[l2] = u2;
    };
    var y2 = {
      create: function() {
        return new f2();
      }
    };
    return Bn.exports = t, Bn.exports.strategies = {
      variadic: a3,
      monadic: s
    }, Bn.exports;
  }
  function Dl(t, e) {
    return document.createElement(t, e);
  }
  function Hl(t, e, n) {
    return document.createElementNS(t, e, n);
  }
  function Ll() {
    return Te(document.createDocumentFragment());
  }
  function $l(t) {
    return document.createTextNode(t);
  }
  function Ml(t) {
    return document.createComment(t);
  }
  function Wl(t, e, n) {
    if (ne(t)) {
      let r2 = t;
      for (; r2 && ne(r2); )
        r2 = Te(r2).parent;
      t = r2 ?? t;
    }
    ne(e) && (e = Te(e, t)), n && ne(n) && (n = Te(n).firstChildNode), t.insertBefore(e, n);
  }
  function Fl(t, e) {
    t.removeChild(e);
  }
  function Bl(t, e) {
    ne(e) && (e = Te(e, t)), t.appendChild(e);
  }
  function Ha(t) {
    if (ne(t)) {
      for (; t && ne(t); )
        t = Te(t).parent;
      return t ?? null;
    }
    return t.parentNode;
  }
  function zl(t) {
    var e;
    if (ne(t)) {
      const n = Te(t), r2 = Ha(n);
      if (r2 && n.lastChildNode) {
        const o = Array.from(r2.childNodes), i2 = o.indexOf(n.lastChildNode);
        return (e = o[i2 + 1]) !== null && e !== void 0 ? e : null;
      }
      return null;
    }
    return t.nextSibling;
  }
  function Ul(t) {
    return t.tagName;
  }
  function Vl(t, e) {
    t.textContent = e;
  }
  function ql(t) {
    return t.textContent;
  }
  function Gl(t) {
    return t.nodeType === 1;
  }
  function Xl(t) {
    return t.nodeType === 3;
  }
  function Kl(t) {
    return t.nodeType === 8;
  }
  function ne(t) {
    return t.nodeType === 11;
  }
  function Te(t, e) {
    var n, r2, o;
    const i2 = t;
    return (n = i2.parent) !== null && n !== void 0 || (i2.parent = e ?? null), (r2 = i2.firstChildNode) !== null && r2 !== void 0 || (i2.firstChildNode = t.firstChild), (o = i2.lastChildNode) !== null && o !== void 0 || (i2.lastChildNode = t.lastChild), i2;
  }
  function At(t, e, n, r2, o) {
    const i2 = e === void 0 ? void 0 : e.key;
    return { sel: t, data: e, children: n, text: r2, elm: o, key: i2 };
  }
  function ke(t) {
    return typeof t == "string" || typeof t == "number" || t instanceof String || t instanceof Number;
  }
  function gn(t, e) {
    var n, r2;
    const o = t.key === e.key, i2 = ((n = t.data) === null || n === void 0 ? void 0 : n.is) === ((r2 = e.data) === null || r2 === void 0 ? void 0 : r2.is), a3 = t.sel === e.sel, s = !t.sel && t.sel === e.sel ? typeof t.text == typeof e.text : true;
    return a3 && o && i2 && s;
  }
  function Zl() {
    throw new Error("The document fragment is not supported on this platform.");
  }
  function Jl(t, e) {
    return t.isElement(e);
  }
  function Ql(t, e) {
    return t.isDocumentFragment(e);
  }
  function Yl(t, e, n) {
    var r2;
    const o = {};
    for (let i2 = e; i2 <= n; ++i2) {
      const a3 = (r2 = t[i2]) === null || r2 === void 0 ? void 0 : r2.key;
      a3 !== void 0 && (o[a3] = i2);
    }
    return o;
  }
  function La(t, e, n) {
    const r2 = {
      create: [],
      update: [],
      remove: [],
      destroy: [],
      pre: [],
      post: []
    }, o = e !== void 0 ? e : xo;
    for (const p2 of tf)
      for (const v4 of t) {
        const b4 = v4[p2];
        b4 !== void 0 && r2[p2].push(b4);
      }
    function i2(p2) {
      const v4 = p2.id ? "#" + p2.id : "", b4 = p2.getAttribute("class"), E3 = b4 ? "." + b4.split(" ").join(".") : "";
      return At(o.tagName(p2).toLowerCase() + v4 + E3, {}, [], void 0, p2);
    }
    function a3(p2) {
      return At(void 0, {}, [], void 0, p2);
    }
    function s(p2, v4) {
      return function() {
        if (--v4 === 0) {
          const b4 = o.parentNode(p2);
          b4 !== null && o.removeChild(b4, p2);
        }
      };
    }
    function c(p2, v4) {
      var b4, E3, g4, w3, k2;
      let S2;
      const N3 = p2.data, O3 = N3?.hook;
      (b4 = O3?.init) === null || b4 === void 0 || b4.call(O3, p2);
      const C3 = p2.children, I3 = p2.sel;
      if (I3 === "!")
        (E3 = p2.text) !== null && E3 !== void 0 || (p2.text = ""), p2.elm = o.createComment(p2.text);
      else if (I3 === "")
        p2.elm = o.createTextNode(p2.text);
      else if (I3 !== void 0) {
        const P3 = I3.indexOf("#"), $4 = I3.indexOf(".", P3), M4 = P3 > 0 ? P3 : I3.length, U4 = $4 > 0 ? $4 : I3.length, G2 = P3 !== -1 || $4 !== -1 ? I3.slice(0, Math.min(M4, U4)) : I3, X3 = N3?.ns, tt2 = X3 === void 0 ? o.createElement(G2, N3) : o.createElementNS(X3, G2, N3);
        for (p2.elm = tt2, M4 < U4 && tt2.setAttribute("id", I3.slice(M4 + 1, U4)), $4 > 0 && tt2.setAttribute("class", I3.slice(U4 + 1).replace(/\./g, " ")), S2 = 0; S2 < r2.create.length; ++S2)
          r2.create[S2](Ir, p2);
        if (ke(p2.text) && (!Je(C3) || C3.length === 0) && o.appendChild(tt2, o.createTextNode(p2.text)), Je(C3))
          for (S2 = 0; S2 < C3.length; ++S2) {
            const ut2 = C3[S2];
            ut2 != null && o.appendChild(tt2, c(ut2, v4));
          }
        O3 !== void 0 && ((g4 = O3.create) === null || g4 === void 0 || g4.call(O3, Ir, p2), O3.insert !== void 0 && v4.push(p2));
      } else if (!((w3 = n?.experimental) === null || w3 === void 0) && w3.fragments && p2.children) {
        for (p2.elm = ((k2 = o.createDocumentFragment) !== null && k2 !== void 0 ? k2 : Zl)(), S2 = 0; S2 < r2.create.length; ++S2)
          r2.create[S2](Ir, p2);
        for (S2 = 0; S2 < p2.children.length; ++S2) {
          const P3 = p2.children[S2];
          P3 != null && o.appendChild(p2.elm, c(P3, v4));
        }
      } else
        p2.elm = o.createTextNode(p2.text);
      return p2.elm;
    }
    function f2(p2, v4, b4, E3, g4, w3) {
      for (; E3 <= g4; ++E3) {
        const k2 = b4[E3];
        k2 != null && o.insertBefore(p2, c(k2, w3), v4);
      }
    }
    function y2(p2) {
      var v4, b4;
      const E3 = p2.data;
      if (E3 !== void 0) {
        (b4 = (v4 = E3?.hook) === null || v4 === void 0 ? void 0 : v4.destroy) === null || b4 === void 0 || b4.call(v4, p2);
        for (let g4 = 0; g4 < r2.destroy.length; ++g4)
          r2.destroy[g4](p2);
        if (p2.children !== void 0)
          for (let g4 = 0; g4 < p2.children.length; ++g4) {
            const w3 = p2.children[g4];
            w3 != null && typeof w3 != "string" && y2(w3);
          }
      }
    }
    function l2(p2, v4, b4, E3) {
      for (var g4, w3; b4 <= E3; ++b4) {
        let k2;
        const S2 = v4[b4];
        if (S2 != null)
          if (S2.sel !== void 0) {
            y2(S2), k2 = r2.remove.length + 1;
            const N3 = s(S2.elm, k2);
            for (let C3 = 0; C3 < r2.remove.length; ++C3)
              r2.remove[C3](S2, N3);
            const O3 = (w3 = (g4 = S2?.data) === null || g4 === void 0 ? void 0 : g4.hook) === null || w3 === void 0 ? void 0 : w3.remove;
            O3 !== void 0 ? O3(S2, N3) : N3();
          } else S2.children ? (y2(S2), l2(p2, S2.children, 0, S2.children.length - 1)) : o.removeChild(p2, S2.elm);
      }
    }
    function u2(p2, v4, b4, E3) {
      let g4 = 0, w3 = 0, k2 = v4.length - 1, S2 = v4[0], N3 = v4[k2], O3 = b4.length - 1, C3 = b4[0], I3 = b4[O3], P3, $4, M4, U4;
      for (; g4 <= k2 && w3 <= O3; )
        S2 == null ? S2 = v4[++g4] : N3 == null ? N3 = v4[--k2] : C3 == null ? C3 = b4[++w3] : I3 == null ? I3 = b4[--O3] : gn(S2, C3) ? (h2(S2, C3, E3), S2 = v4[++g4], C3 = b4[++w3]) : gn(N3, I3) ? (h2(N3, I3, E3), N3 = v4[--k2], I3 = b4[--O3]) : gn(S2, I3) ? (h2(S2, I3, E3), o.insertBefore(p2, S2.elm, o.nextSibling(N3.elm)), S2 = v4[++g4], I3 = b4[--O3]) : gn(N3, C3) ? (h2(N3, C3, E3), o.insertBefore(p2, N3.elm, S2.elm), N3 = v4[--k2], C3 = b4[++w3]) : (P3 === void 0 && (P3 = Yl(v4, g4, k2)), $4 = P3[C3.key], $4 === void 0 ? (o.insertBefore(p2, c(C3, E3), S2.elm), C3 = b4[++w3]) : P3[I3.key] === void 0 ? (o.insertBefore(p2, c(I3, E3), o.nextSibling(N3.elm)), I3 = b4[--O3]) : (M4 = v4[$4], M4.sel !== C3.sel ? o.insertBefore(p2, c(C3, E3), S2.elm) : (h2(M4, C3, E3), v4[$4] = void 0, o.insertBefore(p2, M4.elm, S2.elm)), C3 = b4[++w3]));
      w3 <= O3 && (U4 = b4[O3 + 1] == null ? null : b4[O3 + 1].elm, f2(p2, U4, b4, w3, O3, E3)), g4 <= k2 && l2(p2, v4, g4, k2);
    }
    function h2(p2, v4, b4) {
      var E3, g4, w3, k2, S2, N3, O3, C3;
      const I3 = (E3 = v4.data) === null || E3 === void 0 ? void 0 : E3.hook;
      (g4 = I3?.prepatch) === null || g4 === void 0 || g4.call(I3, p2, v4);
      const P3 = v4.elm = p2.elm;
      if (p2 === v4)
        return;
      if (v4.data !== void 0 || v4.text !== void 0 && v4.text !== p2.text) {
        (w3 = v4.data) !== null && w3 !== void 0 || (v4.data = {}), (k2 = p2.data) !== null && k2 !== void 0 || (p2.data = {});
        for (let U4 = 0; U4 < r2.update.length; ++U4)
          r2.update[U4](p2, v4);
        (O3 = (N3 = (S2 = v4.data) === null || S2 === void 0 ? void 0 : S2.hook) === null || N3 === void 0 ? void 0 : N3.update) === null || O3 === void 0 || O3.call(N3, p2, v4);
      }
      const $4 = p2.children, M4 = v4.children;
      v4.text === void 0 ? $4 !== void 0 && M4 !== void 0 ? $4 !== M4 && u2(P3, $4, M4, b4) : M4 !== void 0 ? (p2.text !== void 0 && o.setTextContent(P3, ""), f2(P3, null, M4, 0, M4.length - 1, b4)) : $4 !== void 0 ? l2(P3, $4, 0, $4.length - 1) : p2.text !== void 0 && o.setTextContent(P3, "") : p2.text !== v4.text && ($4 !== void 0 && l2(P3, $4, 0, $4.length - 1), o.setTextContent(P3, v4.text)), (C3 = I3?.postpatch) === null || C3 === void 0 || C3.call(I3, p2, v4);
    }
    return function(p2, v4) {
      let b4, E3, g4;
      const w3 = [];
      for (b4 = 0; b4 < r2.pre.length; ++b4)
        r2.pre[b4]();
      for (Jl(o, p2) ? p2 = i2(p2) : Ql(o, p2) && (p2 = a3(p2)), gn(p2, v4) ? h2(p2, v4, w3) : (E3 = p2.elm, g4 = o.parentNode(E3), c(v4, w3), g4 !== null && (o.insertBefore(g4, v4.elm, o.nextSibling(E3)), l2(g4, [p2], 0, 0))), b4 = 0; b4 < w3.length; ++b4)
        w3[b4].data.hook.insert(w3[b4]);
      for (b4 = 0; b4 < r2.post.length; ++b4)
        r2.post[b4]();
      return v4;
    };
  }
  function br(t, e, n) {
    if (t.ns = "http://www.w3.org/2000/svg", n !== "foreignObject" && e !== void 0)
      for (let r2 = 0; r2 < e.length; ++r2) {
        const o = e[r2];
        if (typeof o == "string")
          continue;
        const i2 = o.data;
        i2 !== void 0 && br(i2, o.children, o.sel);
      }
  }
  function ie(t, e, n) {
    let r2 = {}, o, i2, a3;
    if (n !== void 0 ? (e !== null && (r2 = e), Je(n) ? o = n : ke(n) ? i2 = n.toString() : n && n.sel && (o = [n])) : e != null && (Je(e) ? o = e : ke(e) ? i2 = e.toString() : e && e.sel ? o = [e] : r2 = e), o !== void 0)
      for (a3 = 0; a3 < o.length; ++a3)
        ke(o[a3]) && (o[a3] = At(void 0, void 0, void 0, o[a3], void 0));
    return t.startsWith("svg") && (t.length === 3 || t[3] === "." || t[3] === "#") && br(r2, o, t), At(t, r2, o, i2, void 0);
  }
  function ro(t) {
    let e, n;
    if (Je(t) ? e = t : ke(e) ? n = t : e && e.sel && (e = [t]), e !== void 0)
      for (let r2 = 0; r2 < e.length; ++r2)
        ke(e[r2]) && (e[r2] = At(void 0, void 0, void 0, e[r2], void 0));
    return At(void 0, {}, e, n, void 0);
  }
  function Jn(t, e) {
    var n;
    const r2 = (n = e.data) === null || n === void 0 ? void 0 : n.ns;
    t.data.fn = e.data.fn, t.data.args = e.data.args, e.data = t.data, e.children = t.children, e.text = t.text, e.elm = t.elm, r2 && br(e.data, e.children, e.sel);
  }
  function ef(t) {
    const e = t.data, n = e.fn(...e.args);
    Jn(n, t);
  }
  function nf(t, e) {
    let n;
    const r2 = t.data, o = e.data, i2 = r2.args, a3 = o.args;
    if (r2.fn !== o.fn || i2.length !== a3.length) {
      Jn(o.fn(...a3), e);
      return;
    }
    for (n = 0; n < a3.length; ++n)
      if (i2[n] !== a3[n]) {
        Jn(o.fn(...a3), e);
        return;
      }
    Jn(t, e);
  }
  function of(t, e) {
    const n = t.data.attachData;
    e.data.attachData.placeholder = n.placeholder, e.data.attachData.real = n.real, t.elm = t.data.attachData.real;
  }
  function af(t, e) {
    e.elm = e.data.attachData.placeholder;
  }
  function sf(t) {
    t.elm !== void 0 && t.elm.parentNode.removeChild(t.elm), t.elm = t.data.attachData.real;
  }
  function cf(t, e) {
    const n = e.elm, r2 = e.data.attachData, o = document.createElement("span");
    e.elm = o, r2.target.appendChild(n), r2.real = n, r2.placeholder = o;
  }
  function uf(t, e) {
    e.data === void 0 && (e.data = {}), e.data.hook === void 0 && (e.data.hook = {});
    const n = e.data, r2 = e.data.hook;
    return n.attachData = { target: t, placeholder: void 0, real: void 0 }, r2.create = cf, r2.prepatch = of, r2.postpatch = af, r2.destroy = sf, e;
  }
  function lf(t) {
    return t.slice(5).replace(/-([a-z])/g, (e, n) => n.toUpperCase());
  }
  function $a(t, e) {
    var n;
    const r2 = e !== void 0 ? e : xo;
    let o;
    if (r2.isElement(t)) {
      const i2 = t.id ? "#" + t.id : "", a3 = (n = t.getAttribute("class")) === null || n === void 0 ? void 0 : n.match(/[^\t\r\n\f ]+/g), s = a3 ? "." + a3.join(".") : "", c = r2.tagName(t).toLowerCase() + i2 + s, f2 = {}, y2 = {}, l2 = {}, u2 = [];
      let h2, p2, v4;
      const b4 = t.attributes, E3 = t.childNodes;
      for (p2 = 0, v4 = b4.length; p2 < v4; p2++)
        h2 = b4[p2].nodeName, h2.startsWith("data-") ? y2[lf(h2)] = b4[p2].nodeValue || "" : h2 !== "id" && h2 !== "class" && (f2[h2] = b4[p2].nodeValue);
      for (p2 = 0, v4 = E3.length; p2 < v4; p2++)
        u2.push($a(E3[p2], e));
      return Object.keys(f2).length > 0 && (l2.attrs = f2), Object.keys(y2).length > 0 && (l2.dataset = y2), c.startsWith("svg") && (c.length === 3 || c[3] === "." || c[3] === "#") && br(l2, u2, c), At(c, l2, u2, void 0, t);
    } else return r2.isText(t) ? (o = r2.getTextContent(t), At(void 0, void 0, void 0, o, t)) : r2.isComment(t) ? (o = r2.getTextContent(t), At("!", {}, [], o, t)) : At("", {}, [], void 0, t);
  }
  function si(t, e) {
    let n;
    const r2 = e.elm;
    let o = t.data.attrs, i2 = e.data.attrs;
    if (!(!o && !i2) && o !== i2) {
      o = o || {}, i2 = i2 || {};
      for (n in i2) {
        const a3 = i2[n];
        o[n] !== a3 && (a3 === true ? r2.setAttribute(n, "") : a3 === false ? r2.removeAttribute(n) : n.charCodeAt(0) !== hf ? r2.setAttribute(n, a3) : n.charCodeAt(3) === ai ? r2.setAttributeNS(pf, n, a3) : n.charCodeAt(5) === ai ? n.charCodeAt(1) === vf ? r2.setAttributeNS(df, n, a3) : r2.setAttributeNS(ff, n, a3) : r2.setAttribute(n, a3));
      }
      for (n in o)
        n in i2 || r2.removeAttribute(n);
    }
  }
  function ci(t, e) {
    let n, r2;
    const o = e.elm;
    let i2 = t.data.class, a3 = e.data.class;
    if (!(!i2 && !a3) && i2 !== a3) {
      i2 = i2 || {}, a3 = a3 || {};
      for (r2 in i2)
        i2[r2] && !Object.prototype.hasOwnProperty.call(a3, r2) && o.classList.remove(r2);
      for (r2 in a3)
        n = a3[r2], n !== i2[r2] && o.classList[n ? "add" : "remove"](r2);
    }
  }
  function li(t, e) {
    const n = e.elm;
    let r2 = t.data.dataset, o = e.data.dataset, i2;
    if (!r2 && !o || r2 === o)
      return;
    r2 = r2 || {}, o = o || {};
    const a3 = n.dataset;
    for (i2 in r2)
      i2 in o || (a3 ? i2 in a3 && delete a3[i2] : n.removeAttribute("data-" + i2.replace(ui, "-$&").toLowerCase()));
    for (i2 in o)
      r2[i2] !== o[i2] && (a3 ? a3[i2] = o[i2] : n.setAttribute("data-" + i2.replace(ui, "-$&").toLowerCase(), o[i2]));
  }
  function Fa(t, e, n) {
    if (typeof t == "function")
      t.call(e, n, e);
    else if (typeof t == "object")
      for (let r2 = 0; r2 < t.length; r2++)
        Fa(t[r2], e, n);
  }
  function yf(t, e) {
    const n = t.type, r2 = e.data.on;
    r2 && r2[n] && Fa(r2[n], e, t);
  }
  function mf() {
    return function t(e) {
      yf(e, t.vnode);
    };
  }
  function jr(t, e) {
    const n = t.data.on, r2 = t.listener, o = t.elm, i2 = e && e.data.on, a3 = e && e.elm;
    let s;
    if (n !== i2) {
      if (n && r2)
        if (i2)
          for (s in n)
            i2[s] || o.removeEventListener(s, r2, false);
        else
          for (s in n)
            o.removeEventListener(s, r2, false);
      if (i2) {
        const c = e.listener = t.listener || mf();
        if (c.vnode = e, n)
          for (s in i2)
            n[s] || a3.addEventListener(s, c, false);
        else
          for (s in i2)
            a3.addEventListener(s, c, false);
      }
    }
  }
  function fi(t, e) {
    let n, r2, o;
    const i2 = e.elm;
    let a3 = t.data.props, s = e.data.props;
    if (!(!a3 && !s) && a3 !== s) {
      a3 = a3 || {}, s = s || {};
      for (n in s)
        r2 = s[n], o = a3[n], o !== r2 && (n !== "value" || i2[n] !== r2) && (i2[n] = r2);
    }
  }
  function Ef(t, e, n) {
    bf(() => {
      t[e] = n;
    });
  }
  function pi(t, e) {
    let n, r2;
    const o = e.elm;
    let i2 = t.data.style, a3 = e.data.style;
    if (!i2 && !a3 || i2 === a3)
      return;
    i2 = i2 || {}, a3 = a3 || {};
    const s = "delayed" in i2;
    for (r2 in i2)
      r2 in a3 || (r2[0] === "-" && r2[1] === "-" ? o.style.removeProperty(r2) : o.style[r2] = "");
    for (r2 in a3)
      if (n = a3[r2], r2 === "delayed" && a3.delayed)
        for (const c in a3.delayed)
          n = a3.delayed[c], (!s || n !== i2.delayed[c]) && Ef(o.style, c, n);
      else r2 !== "remove" && n !== i2[r2] && (r2[0] === "-" && r2[1] === "-" ? o.style.setProperty(r2, n) : o.style[r2] = n);
  }
  function xf(t) {
    let e, n;
    const r2 = t.elm, o = t.data.style;
    if (!(!o || !(e = o.destroy)))
      for (n in e)
        r2.style[n] = e[n];
  }
  function wf(t, e) {
    const n = t.data.style;
    if (!n || !n.remove) {
      e();
      return;
    }
    oo || (t.elm.offsetLeft, oo = true);
    let r2;
    const o = t.elm;
    let i2 = 0;
    const a3 = n.remove;
    let s = 0;
    const c = [];
    for (r2 in a3)
      c.push(r2), o.style[r2] = a3[r2];
    const f2 = getComputedStyle(o)["transition-property"].split(", ");
    for (; i2 < f2.length; ++i2)
      c.indexOf(f2[i2]) !== -1 && s++;
    o.addEventListener("transitionend", (y2) => {
      y2.target === o && --s, s === 0 && e();
    });
  }
  function Sf() {
    oo = false;
  }
  function _f(t, ...e) {
    const n = wo(e, []);
    return n.length === 1 && !n[0].sel && n[0].text ? At(void 0, void 0, void 0, n[0].text, void 0) : At(void 0, t ?? {}, n, void 0, void 0);
  }
  function wo(t, e) {
    for (const n of t)
      n != null && n !== false && n !== "" && (Array.isArray(n) ? wo(n, e) : typeof n == "string" || typeof n == "number" || typeof n == "boolean" ? e.push(At(void 0, void 0, void 0, String(n), void 0)) : e.push(n));
    return e;
  }
  function Tf(t, e, ...n) {
    const r2 = wo(n, []);
    return typeof t == "function" ? t(e, r2) : r2.length === 1 && !r2[0].sel && r2[0].text ? ie(t, e, r2[0].text) : ie(t, e, r2);
  }
  function cd(t) {
    const e = (t.ownerDocument || document).createElement("div");
    return t.append(e), Ga(e, ie("div"));
  }
  function ld() {
    return mi || (mi = 1, yi = {
      area: true,
      base: true,
      br: true,
      col: true,
      embed: true,
      hr: true,
      img: true,
      input: true,
      keygen: true,
      link: true,
      menuitem: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true
    }), yi;
  }
  function fd() {
    if (bi) return Pr;
    bi = 1;
    var t = /([\w-]+)|=|(['"])([.\s\S]*?)\2/g, e = ld();
    return Pr = function(n) {
      var r2 = 0, o, i2 = true, a3 = {
        type: "tag",
        name: "",
        voidElement: false,
        attrs: {},
        children: []
      };
      return n.replace(t, function(s) {
        if (s === "=") {
          i2 = true, r2++;
          return;
        }
        i2 ? r2 === 0 ? ((e[s] || n.charAt(n.length - 2) === "/") && (a3.voidElement = true), a3.name = s) : (a3.attrs[o] = s.replace(/^['"]|['"]$/g, ""), o = void 0) : (o && (a3.attrs[o] = o), o = s), r2++, i2 = false;
      }), a3;
    }, Pr;
  }
  function dd() {
    if (Ei) return Dr;
    Ei = 1;
    var t = /(?:<!--[\S\s]*?-->|<(?:"[^"]*"|'[^']*'|[^'">])+>)/g, e = fd(), n = Object.create ? /* @__PURE__ */ Object.create(null) : {};
    function r2(o, i2, a3, s, c) {
      var f2 = i2.indexOf("<", s), y2 = i2.slice(s, f2 === -1 ? void 0 : f2);
      /^\s*$/.test(y2) && (y2 = " "), (!c && f2 > -1 && a3 + o.length >= 0 || y2 !== " ") && o.push({
        type: "text",
        content: y2
      });
    }
    return Dr = function(o, i2) {
      i2 || (i2 = {}), i2.components || (i2.components = n);
      var a3 = [], s, c = -1, f2 = [], y2 = {}, l2 = false;
      return o.replace(t, function(u2, h2) {
        if (l2) {
          if (u2 !== "</" + s.name + ">")
            return;
          l2 = false;
        }
        var p2 = u2.charAt(1) !== "/", v4 = u2.indexOf("<!--") === 0, b4 = h2 + u2.length, E3 = o.charAt(b4), g4;
        p2 && !v4 && (c++, s = e(u2), s.type === "tag" && i2.components[s.name] && (s.type = "component", l2 = true), !s.voidElement && !l2 && E3 && E3 !== "<" && r2(s.children, o, c, b4, i2.ignoreWhitespace), y2[s.tagName] = s, c === 0 && a3.push(s), g4 = f2[c - 1], g4 && g4.children.push(s), f2[c] = s), (v4 || !p2 || s.voidElement) && (v4 || c--, !l2 && E3 !== "<" && E3 && (g4 = c === -1 ? a3 : f2[c].children, r2(g4, o, c, b4, i2.ignoreWhitespace)));
      }), !a3.length && o.length && r2(a3, o, 0, 0, i2.ignoreWhitespace), a3;
    }, Dr;
  }
  function pd() {
    if (xi) return $e;
    xi = 1, Object.defineProperty($e, "__esModule", {
      value: true
    }), $e.createTextVNode = e, $e.transformName = n, $e.unescapeEntities = i2;
    var t = Xa;
    function e(a3, s) {
      return (0, t.vnode)(void 0, void 0, void 0, i2(a3, s));
    }
    function n(a3) {
      a3 = a3.replace(/-(\w)/g, function(c, f2) {
        return f2.toUpperCase();
      });
      var s = a3.charAt(0).toLowerCase();
      return "" + s + a3.substring(1);
    }
    var r2 = new RegExp("&[a-z0-9#]+;", "gi"), o = null;
    function i2(a3, s) {
      return o || (o = s.createElement("div")), a3.replace(r2, function(c) {
        return o.innerHTML = c, o.textContent;
      });
    }
    return $e;
  }
  function hd() {
    if (wi) return zn;
    wi = 1, Object.defineProperty(zn, "__esModule", {
      value: true
    }), zn.default = function(l2) {
      var u2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, h2 = u2.context || document;
      if (!l2)
        return null;
      var p2 = [], v4 = a3((0, e.default)(l2), p2, h2), b4 = void 0;
      return v4 ? v4.length === 1 ? b4 = v4[0] : b4 = v4 : b4 = s({ type: "text", content: l2 }, p2, h2), u2.hooks && u2.hooks.create && p2.forEach(function(E3) {
        u2.hooks.create(E3);
      }), b4;
    };
    var t = dd(), e = o(t), n = Xa, r2 = pd();
    function o(l2) {
      return l2 && l2.__esModule ? l2 : { default: l2 };
    }
    function i2(l2, u2, h2) {
      return u2 in l2 ? Object.defineProperty(l2, u2, { value: h2, enumerable: true, configurable: true, writable: true }) : l2[u2] = h2, l2;
    }
    function a3(l2, u2, h2) {
      if (l2 instanceof Array && l2.length > 0)
        return l2.map(function(p2) {
          return s(p2, u2, h2);
        });
    }
    function s(l2, u2, h2) {
      var p2 = void 0;
      return l2.type === "text" ? p2 = (0, r2.createTextVNode)(l2.content, h2) : p2 = (0, n.h)(l2.name, c(l2, h2), a3(l2.children, u2, h2)), u2.push(p2), p2;
    }
    function c(l2, u2) {
      var h2 = {};
      if (!l2.attrs)
        return h2;
      var p2 = Object.keys(l2.attrs).reduce(function(E3, g4) {
        if (g4 !== "style" && g4 !== "class") {
          var w3 = (0, r2.unescapeEntities)(l2.attrs[g4], u2);
          E3 ? E3[g4] = w3 : E3 = i2({}, g4, w3);
        }
        return E3;
      }, null);
      p2 && (h2.attrs = p2);
      var v4 = f2(l2);
      v4 && (h2.style = v4);
      var b4 = y2(l2);
      return b4 && (h2.class = b4), h2;
    }
    function f2(l2) {
      try {
        return l2.attrs.style.split(";").reduce(function(u2, h2) {
          var p2 = h2.split(":"), v4 = (0, r2.transformName)(p2[0].trim());
          if (v4) {
            var b4 = p2[1].replace("!important", "").trim();
            u2 ? u2[v4] = b4 : u2 = i2({}, v4, b4);
          }
          return u2;
        }, null);
      } catch {
        return null;
      }
    }
    function y2(l2) {
      try {
        return l2.attrs.class.split(" ").reduce(function(u2, h2) {
          return h2 = h2.trim(), h2 && (u2 ? u2[h2] = true : u2 = i2({}, h2, true)), u2;
        }, null);
      } catch {
        return null;
      }
    }
    return zn;
  }
  function vd() {
    return _i || (_i = 1, Si = hd()), Si;
  }
  function zd(t) {
    try {
      return new Re(t).textInfo;
    } catch {
      return { direction: "ltr" };
    }
  }
  function io(t, e, n) {
    return ze(t, kn(e, n));
  }
  function en(t, e) {
    return typeof t == "function" ? t(e) : t;
  }
  function nn(t) {
    return t.split("-")[0];
  }
  function re(t) {
    return t.split("-")[1];
  }
  function rs(t) {
    return t === "x" ? "y" : "x";
  }
  function _o(t) {
    return t === "y" ? "height" : "width";
  }
  function Er(t) {
    return Gd.has(nn(t)) ? "y" : "x";
  }
  function To(t) {
    return rs(Er(t));
  }
  function Xd(t, e, n) {
    n === void 0 && (n = false);
    const r2 = re(t), o = To(t), i2 = _o(o);
    let a3 = o === "x" ? r2 === (n ? "end" : "start") ? "right" : "left" : r2 === "start" ? "bottom" : "top";
    return e.reference[i2] > e.floating[i2] && (a3 = Ni(a3)), [a3, Ni(a3)];
  }
  function Kd(t) {
    return t.replace(/start|end/g, (e) => qd[e]);
  }
  function Ni(t) {
    return t.replace(/left|right|bottom|top/g, (e) => Vd[e]);
  }
  function Zd(t) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...t
    };
  }
  function os(t) {
    return typeof t != "number" ? Zd(t) : {
      top: t,
      right: t,
      bottom: t,
      left: t
    };
  }
  function cr(t) {
    const {
      x: e,
      y: n,
      width: r2,
      height: o
    } = t;
    return {
      width: r2,
      height: o,
      top: n,
      left: e,
      right: e + r2,
      bottom: n + o,
      x: e,
      y: n
    };
  }
  function Ii(t, e, n) {
    let {
      reference: r2,
      floating: o
    } = t;
    const i2 = Er(e), a3 = To(e), s = _o(a3), c = nn(e), f2 = i2 === "y", y2 = r2.x + r2.width / 2 - o.width / 2, l2 = r2.y + r2.height / 2 - o.height / 2, u2 = r2[s] / 2 - o[s] / 2;
    let h2;
    switch (c) {
      case "top":
        h2 = {
          x: y2,
          y: r2.y - o.height
        };
        break;
      case "bottom":
        h2 = {
          x: y2,
          y: r2.y + r2.height
        };
        break;
      case "right":
        h2 = {
          x: r2.x + r2.width,
          y: l2
        };
        break;
      case "left":
        h2 = {
          x: r2.x - o.width,
          y: l2
        };
        break;
      default:
        h2 = {
          x: r2.x,
          y: r2.y
        };
    }
    switch (re(e)) {
      case "start":
        h2[a3] -= u2 * (n && f2 ? -1 : 1);
        break;
      case "end":
        h2[a3] += u2 * (n && f2 ? -1 : 1);
        break;
    }
    return h2;
  }
  async function ur(t, e) {
    var n;
    e === void 0 && (e = {});
    const {
      x: r2,
      y: o,
      platform: i2,
      rects: a3,
      elements: s,
      strategy: c
    } = t, {
      boundary: f2 = "clippingAncestors",
      rootBoundary: y2 = "viewport",
      elementContext: l2 = "floating",
      altBoundary: u2 = false,
      padding: h2 = 0
    } = en(e, t), p2 = os(h2), v4 = s[u2 ? l2 === "floating" ? "reference" : "floating" : l2], b4 = cr(await i2.getClippingRect({
      element: (n = await (i2.isElement == null ? void 0 : i2.isElement(v4))) == null || n ? v4 : v4.contextElement || await (i2.getDocumentElement == null ? void 0 : i2.getDocumentElement(s.floating)),
      boundary: f2,
      rootBoundary: y2,
      strategy: c
    })), E3 = l2 === "floating" ? {
      x: r2,
      y: o,
      width: a3.floating.width,
      height: a3.floating.height
    } : a3.reference, g4 = await (i2.getOffsetParent == null ? void 0 : i2.getOffsetParent(s.floating)), w3 = await (i2.isElement == null ? void 0 : i2.isElement(g4)) ? await (i2.getScale == null ? void 0 : i2.getScale(g4)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    }, k2 = cr(i2.convertOffsetParentRelativeRectToViewportRelativeRect ? await i2.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: s,
      rect: E3,
      offsetParent: g4,
      strategy: c
    }) : E3);
    return {
      top: (b4.top - k2.top + p2.top) / w3.y,
      bottom: (k2.bottom - b4.bottom + p2.bottom) / w3.y,
      left: (b4.left - k2.left + p2.left) / w3.x,
      right: (k2.right - b4.right + p2.right) / w3.x
    };
  }
  function Yd(t, e, n) {
    return (t ? [...n.filter((r2) => re(r2) === t), ...n.filter((r2) => re(r2) !== t)] : n.filter((r2) => nn(r2) === r2)).filter((r2) => t ? re(r2) === t || (e ? Kd(r2) !== r2 : false) : true);
  }
  function ji(t, e) {
    return {
      top: t.top - e.height,
      right: t.right - e.width,
      bottom: t.bottom - e.height,
      left: t.left - e.width
    };
  }
  function Pi(t) {
    return ns.some((e) => t[e] >= 0);
  }
  async function rp(t, e) {
    const {
      placement: n,
      platform: r2,
      elements: o
    } = t, i2 = await (r2.isRTL == null ? void 0 : r2.isRTL(o.floating)), a3 = nn(n), s = re(n), c = Er(n) === "y", f2 = np.has(a3) ? -1 : 1, y2 = i2 && c ? -1 : 1, l2 = en(e, t);
    let {
      mainAxis: u2,
      crossAxis: h2,
      alignmentAxis: p2
    } = typeof l2 == "number" ? {
      mainAxis: l2,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: l2.mainAxis || 0,
      crossAxis: l2.crossAxis || 0,
      alignmentAxis: l2.alignmentAxis
    };
    return s && typeof p2 == "number" && (h2 = s === "end" ? p2 * -1 : p2), c ? {
      x: h2 * y2,
      y: u2 * f2
    } : {
      x: u2 * f2,
      y: h2 * y2
    };
  }
  function xr() {
    return typeof window < "u";
  }
  function rn(t) {
    return is(t) ? (t.nodeName || "").toLowerCase() : "#document";
  }
  function Dt(t) {
    var e;
    return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
  }
  function se(t) {
    var e;
    return (e = (is(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
  }
  function is(t) {
    return xr() ? t instanceof Node || t instanceof Dt(t).Node : false;
  }
  function qt(t) {
    return xr() ? t instanceof Element || t instanceof Dt(t).Element : false;
  }
  function Jt(t) {
    return xr() ? t instanceof HTMLElement || t instanceof Dt(t).HTMLElement : false;
  }
  function Di(t) {
    return !xr() || typeof ShadowRoot > "u" ? false : t instanceof ShadowRoot || t instanceof Dt(t).ShadowRoot;
  }
  function On(t) {
    const {
      overflow: e,
      overflowX: n,
      overflowY: r2,
      display: o
    } = Gt(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + r2 + n) && !ap.has(o);
  }
  function cp(t) {
    return sp.has(rn(t));
  }
  function wr(t) {
    return up.some((e) => {
      try {
        return t.matches(e);
      } catch {
        return false;
      }
    });
  }
  function ko(t) {
    const e = Ro(), n = qt(t) ? Gt(t) : t;
    return lp.some((r2) => n[r2] ? n[r2] !== "none" : false) || (n.containerType ? n.containerType !== "normal" : false) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !e && (n.filter ? n.filter !== "none" : false) || fp.some((r2) => (n.willChange || "").includes(r2)) || dp.some((r2) => (n.contain || "").includes(r2));
  }
  function pp(t) {
    let e = ye(t);
    for (; Jt(e) && !Qe(e); ) {
      if (ko(e))
        return e;
      if (wr(e))
        return null;
      e = ye(e);
    }
    return null;
  }
  function Ro() {
    return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
  }
  function Qe(t) {
    return hp.has(rn(t));
  }
  function Gt(t) {
    return Dt(t).getComputedStyle(t);
  }
  function Sr(t) {
    return qt(t) ? {
      scrollLeft: t.scrollLeft,
      scrollTop: t.scrollTop
    } : {
      scrollLeft: t.scrollX,
      scrollTop: t.scrollY
    };
  }
  function ye(t) {
    if (rn(t) === "html")
      return t;
    const e = (
      // Step into the shadow DOM of the parent of a slotted node.
      t.assignedSlot || // DOM Element detected.
      t.parentNode || // ShadowRoot detected.
      Di(t) && t.host || // Fallback.
      se(t)
    );
    return Di(e) ? e.host : e;
  }
  function as(t) {
    const e = ye(t);
    return Qe(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : Jt(e) && On(e) ? e : as(e);
  }
  function lr(t, e, n) {
    var r2;
    e === void 0 && (e = []), n === void 0 && (n = true);
    const o = as(t), i2 = o === ((r2 = t.ownerDocument) == null ? void 0 : r2.body), a3 = Dt(o);
    if (i2) {
      const s = ao(a3);
      return e.concat(a3, a3.visualViewport || [], On(o) ? o : [], s && n ? lr(s) : []);
    }
    return e.concat(o, lr(o, [], n));
  }
  function ao(t) {
    return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
  }
  function ss(t) {
    const e = Gt(t);
    let n = parseFloat(e.width) || 0, r2 = parseFloat(e.height) || 0;
    const o = Jt(t), i2 = o ? t.offsetWidth : n, a3 = o ? t.offsetHeight : r2, s = sr(n) !== i2 || sr(r2) !== a3;
    return s && (n = i2, r2 = a3), {
      width: n,
      height: r2,
      $: s
    };
  }
  function cs(t) {
    return qt(t) ? t : t.contextElement;
  }
  function Ue(t) {
    const e = cs(t);
    if (!Jt(e))
      return Kt(1);
    const n = e.getBoundingClientRect(), {
      width: r2,
      height: o,
      $: i2
    } = ss(e);
    let a3 = (i2 ? sr(n.width) : n.width) / r2, s = (i2 ? sr(n.height) : n.height) / o;
    return (!a3 || !Number.isFinite(a3)) && (a3 = 1), (!s || !Number.isFinite(s)) && (s = 1), {
      x: a3,
      y: s
    };
  }
  function us(t) {
    const e = Dt(t);
    return !Ro() || !e.visualViewport ? vp : {
      x: e.visualViewport.offsetLeft,
      y: e.visualViewport.offsetTop
    };
  }
  function gp(t, e, n) {
    return e === void 0 && (e = false), !n || e && n !== Dt(t) ? false : e;
  }
  function Rn(t, e, n, r2) {
    e === void 0 && (e = false), n === void 0 && (n = false);
    const o = t.getBoundingClientRect(), i2 = cs(t);
    let a3 = Kt(1);
    e && (r2 ? qt(r2) && (a3 = Ue(r2)) : a3 = Ue(t));
    const s = gp(i2, n, r2) ? us(i2) : Kt(0);
    let c = (o.left + s.x) / a3.x, f2 = (o.top + s.y) / a3.y, y2 = o.width / a3.x, l2 = o.height / a3.y;
    if (i2) {
      const u2 = Dt(i2), h2 = r2 && qt(r2) ? Dt(r2) : r2;
      let p2 = u2, v4 = ao(p2);
      for (; v4 && r2 && h2 !== p2; ) {
        const b4 = Ue(v4), E3 = v4.getBoundingClientRect(), g4 = Gt(v4), w3 = E3.left + (v4.clientLeft + parseFloat(g4.paddingLeft)) * b4.x, k2 = E3.top + (v4.clientTop + parseFloat(g4.paddingTop)) * b4.y;
        c *= b4.x, f2 *= b4.y, y2 *= b4.x, l2 *= b4.y, c += w3, f2 += k2, p2 = Dt(v4), v4 = ao(p2);
      }
    }
    return cr({
      width: y2,
      height: l2,
      x: c,
      y: f2
    });
  }
  function _r(t, e) {
    const n = Sr(t).scrollLeft;
    return e ? e.left + n : Rn(se(t)).left + n;
  }
  function ls(t, e) {
    const n = t.getBoundingClientRect(), r2 = n.left + e.scrollLeft - _r(t, n), o = n.top + e.scrollTop;
    return {
      x: r2,
      y: o
    };
  }
  function yp(t) {
    let {
      elements: e,
      rect: n,
      offsetParent: r2,
      strategy: o
    } = t;
    const i2 = o === "fixed", a3 = se(r2), s = e ? wr(e.floating) : false;
    if (r2 === a3 || s && i2)
      return n;
    let c = {
      scrollLeft: 0,
      scrollTop: 0
    }, f2 = Kt(1);
    const y2 = Kt(0), l2 = Jt(r2);
    if ((l2 || !l2 && !i2) && ((rn(r2) !== "body" || On(a3)) && (c = Sr(r2)), Jt(r2))) {
      const h2 = Rn(r2);
      f2 = Ue(r2), y2.x = h2.x + r2.clientLeft, y2.y = h2.y + r2.clientTop;
    }
    const u2 = a3 && !l2 && !i2 ? ls(a3, c) : Kt(0);
    return {
      width: n.width * f2.x,
      height: n.height * f2.y,
      x: n.x * f2.x - c.scrollLeft * f2.x + y2.x + u2.x,
      y: n.y * f2.y - c.scrollTop * f2.y + y2.y + u2.y
    };
  }
  function mp(t) {
    return Array.from(t.getClientRects());
  }
  function bp(t) {
    const e = se(t), n = Sr(t), r2 = t.ownerDocument.body, o = ze(e.scrollWidth, e.clientWidth, r2.scrollWidth, r2.clientWidth), i2 = ze(e.scrollHeight, e.clientHeight, r2.scrollHeight, r2.clientHeight);
    let a3 = -n.scrollLeft + _r(t);
    const s = -n.scrollTop;
    return Gt(r2).direction === "rtl" && (a3 += ze(e.clientWidth, r2.clientWidth) - o), {
      width: o,
      height: i2,
      x: a3,
      y: s
    };
  }
  function Ep(t, e) {
    const n = Dt(t), r2 = se(t), o = n.visualViewport;
    let i2 = r2.clientWidth, a3 = r2.clientHeight, s = 0, c = 0;
    if (o) {
      i2 = o.width, a3 = o.height;
      const y2 = Ro();
      (!y2 || y2 && e === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
    }
    const f2 = _r(r2);
    if (f2 <= 0) {
      const y2 = r2.ownerDocument, l2 = y2.body, u2 = getComputedStyle(l2), h2 = y2.compatMode === "CSS1Compat" && parseFloat(u2.marginLeft) + parseFloat(u2.marginRight) || 0, p2 = Math.abs(r2.clientWidth - l2.clientWidth - h2);
      p2 <= Hi && (i2 -= p2);
    } else f2 <= Hi && (i2 += f2);
    return {
      width: i2,
      height: a3,
      x: s,
      y: c
    };
  }
  function wp(t, e) {
    const n = Rn(t, true, e === "fixed"), r2 = n.top + t.clientTop, o = n.left + t.clientLeft, i2 = Jt(t) ? Ue(t) : Kt(1), a3 = t.clientWidth * i2.x, s = t.clientHeight * i2.y, c = o * i2.x, f2 = r2 * i2.y;
    return {
      width: a3,
      height: s,
      x: c,
      y: f2
    };
  }
  function Li(t, e, n) {
    let r2;
    if (e === "viewport")
      r2 = Ep(t, n);
    else if (e === "document")
      r2 = bp(se(t));
    else if (qt(e))
      r2 = wp(e, n);
    else {
      const o = us(t);
      r2 = {
        x: e.x - o.x,
        y: e.y - o.y,
        width: e.width,
        height: e.height
      };
    }
    return cr(r2);
  }
  function fs(t, e) {
    const n = ye(t);
    return n === e || !qt(n) || Qe(n) ? false : Gt(n).position === "fixed" || fs(n, e);
  }
  function Sp(t, e) {
    const n = e.get(t);
    if (n)
      return n;
    let r2 = lr(t, [], false).filter((s) => qt(s) && rn(s) !== "body"), o = null;
    const i2 = Gt(t).position === "fixed";
    let a3 = i2 ? ye(t) : t;
    for (; qt(a3) && !Qe(a3); ) {
      const s = Gt(a3), c = ko(a3);
      !c && s.position === "fixed" && (o = null), (i2 ? !c && !o : !c && s.position === "static" && o && xp.has(o.position) || On(a3) && !c && fs(t, a3)) ? r2 = r2.filter((f2) => f2 !== a3) : o = s, a3 = ye(a3);
    }
    return e.set(t, r2), r2;
  }
  function _p(t) {
    let {
      element: e,
      boundary: n,
      rootBoundary: r2,
      strategy: o
    } = t;
    const i2 = [...n === "clippingAncestors" ? wr(e) ? [] : Sp(e, this._c) : [].concat(n), r2], a3 = i2[0], s = i2.reduce((c, f2) => {
      const y2 = Li(e, f2, o);
      return c.top = ze(y2.top, c.top), c.right = kn(y2.right, c.right), c.bottom = kn(y2.bottom, c.bottom), c.left = ze(y2.left, c.left), c;
    }, Li(e, a3, o));
    return {
      width: s.right - s.left,
      height: s.bottom - s.top,
      x: s.left,
      y: s.top
    };
  }
  function Tp(t) {
    const {
      width: e,
      height: n
    } = ss(t);
    return {
      width: e,
      height: n
    };
  }
  function kp(t, e, n) {
    const r2 = Jt(e), o = se(e), i2 = n === "fixed", a3 = Rn(t, true, i2, e);
    let s = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const c = Kt(0);
    function f2() {
      c.x = _r(o);
    }
    if (r2 || !r2 && !i2)
      if ((rn(e) !== "body" || On(o)) && (s = Sr(e)), r2) {
        const h2 = Rn(e, true, i2, e);
        c.x = h2.x + e.clientLeft, c.y = h2.y + e.clientTop;
      } else o && f2();
    i2 && !r2 && o && f2();
    const y2 = o && !r2 && !i2 ? ls(o, s) : Kt(0), l2 = a3.left + s.scrollLeft - c.x - y2.x, u2 = a3.top + s.scrollTop - c.y - y2.y;
    return {
      x: l2,
      y: u2,
      width: a3.width,
      height: a3.height
    };
  }
  function Hr(t) {
    return Gt(t).position === "static";
  }
  function $i(t, e) {
    if (!Jt(t) || Gt(t).position === "fixed")
      return null;
    if (e)
      return e(t);
    let n = t.offsetParent;
    return se(t) === n && (n = n.ownerDocument.body), n;
  }
  function ds(t, e) {
    const n = Dt(t);
    if (wr(t))
      return n;
    if (!Jt(t)) {
      let o = ye(t);
      for (; o && !Qe(o); ) {
        if (qt(o) && !Hr(o))
          return o;
        o = ye(o);
      }
      return n;
    }
    let r2 = $i(t, e);
    for (; r2 && cp(r2) && Hr(r2); )
      r2 = $i(r2, e);
    return r2 && Qe(r2) && Hr(r2) && !ko(r2) ? n : r2 || pp(t) || n;
  }
  function Cp(t) {
    return Gt(t).direction === "rtl";
  }
  function Hp() {
    if (Mi) return Lr;
    Mi = 1;
    var t = "Expected a function", e = NaN, n = "[object Symbol]", r2 = /^\s+|\s+$/g, o = /^[-+]0x[0-9a-f]+$/i, i2 = /^0b[01]+$/i, a3 = /^0o[0-7]+$/i, s = parseInt, c = typeof Wt == "object" && Wt && Wt.Object === Object && Wt, f2 = typeof self == "object" && self && self.Object === Object && self, y2 = c || f2 || Function("return this")(), l2 = Object.prototype, u2 = l2.toString, h2 = Math.max, p2 = Math.min, v4 = function() {
      return y2.Date.now();
    };
    function b4(S2, N3, O3) {
      var C3, I3, P3, $4, M4, U4, G2 = 0, X3 = false, tt2 = false, ut2 = true;
      if (typeof S2 != "function")
        throw new TypeError(t);
      N3 = k2(N3) || 0, E3(O3) && (X3 = !!O3.leading, tt2 = "maxWait" in O3, P3 = tt2 ? h2(k2(O3.maxWait) || 0, N3) : P3, ut2 = "trailing" in O3 ? !!O3.trailing : ut2);
      function nt3(Q2) {
        var lt3 = C3, Et3 = I3;
        return C3 = I3 = void 0, G2 = Q2, $4 = S2.apply(Et3, lt3), $4;
      }
      function Z2(Q2) {
        return G2 = Q2, M4 = setTimeout(gt3, N3), X3 ? nt3(Q2) : $4;
      }
      function mt2(Q2) {
        var lt3 = Q2 - U4, Et3 = Q2 - G2, Ht3 = N3 - lt3;
        return tt2 ? p2(Ht3, P3 - Et3) : Ht3;
      }
      function at3(Q2) {
        var lt3 = Q2 - U4, Et3 = Q2 - G2;
        return U4 === void 0 || lt3 >= N3 || lt3 < 0 || tt2 && Et3 >= P3;
      }
      function gt3() {
        var Q2 = v4();
        if (at3(Q2))
          return bt3(Q2);
        M4 = setTimeout(gt3, mt2(Q2));
      }
      function bt3(Q2) {
        return M4 = void 0, ut2 && C3 ? nt3(Q2) : (C3 = I3 = void 0, $4);
      }
      function J3() {
        M4 !== void 0 && clearTimeout(M4), G2 = 0, C3 = U4 = I3 = M4 = void 0;
      }
      function B3() {
        return M4 === void 0 ? $4 : bt3(v4());
      }
      function Nt2() {
        var Q2 = v4(), lt3 = at3(Q2);
        if (C3 = arguments, I3 = this, U4 = Q2, lt3) {
          if (M4 === void 0)
            return Z2(U4);
          if (tt2)
            return M4 = setTimeout(gt3, N3), nt3(U4);
        }
        return M4 === void 0 && (M4 = setTimeout(gt3, N3)), $4;
      }
      return Nt2.cancel = J3, Nt2.flush = B3, Nt2;
    }
    function E3(S2) {
      var N3 = typeof S2;
      return !!S2 && (N3 == "object" || N3 == "function");
    }
    function g4(S2) {
      return !!S2 && typeof S2 == "object";
    }
    function w3(S2) {
      return typeof S2 == "symbol" || g4(S2) && u2.call(S2) == n;
    }
    function k2(S2) {
      if (typeof S2 == "number")
        return S2;
      if (w3(S2))
        return e;
      if (E3(S2)) {
        var N3 = typeof S2.valueOf == "function" ? S2.valueOf() : S2;
        S2 = E3(N3) ? N3 + "" : N3;
      }
      if (typeof S2 != "string")
        return S2 === 0 ? S2 : +S2;
      S2 = S2.replace(r2, "");
      var O3 = i2.test(S2);
      return O3 || a3.test(S2) ? s(S2.slice(2), O3 ? 2 : 8) : o.test(S2) ? e : +S2;
    }
    return Lr = b4, Lr;
  }
  function $p() {
    if (Wi) return $r;
    Wi = 1;
    var t = 200, e = "__lodash_hash_undefined__", n = 1 / 0, r2 = "[object Function]", o = "[object GeneratorFunction]", i2 = /[\\^$.*+?()[\]{}|]/g, a3 = /^\[object .+?Constructor\]$/, s = typeof Wt == "object" && Wt && Wt.Object === Object && Wt, c = typeof self == "object" && self && self.Object === Object && self, f2 = s || c || Function("return this")();
    function y2(T2, L3) {
      var d2 = T2 ? T2.length : 0;
      return !!d2 && u2(T2, L3, 0) > -1;
    }
    function l2(T2, L3, d2, x2) {
      for (var A3 = T2.length, R3 = d2 + -1; ++R3 < A3; )
        if (L3(T2[R3], R3, T2))
          return R3;
      return -1;
    }
    function u2(T2, L3, d2) {
      if (L3 !== L3)
        return l2(T2, h2, d2);
      for (var x2 = d2 - 1, A3 = T2.length; ++x2 < A3; )
        if (T2[x2] === L3)
          return x2;
      return -1;
    }
    function h2(T2) {
      return T2 !== T2;
    }
    function p2(T2, L3) {
      return T2.has(L3);
    }
    function v4(T2, L3) {
      return T2?.[L3];
    }
    function b4(T2) {
      var L3 = false;
      if (T2 != null && typeof T2.toString != "function")
        try {
          L3 = !!(T2 + "");
        } catch {
        }
      return L3;
    }
    function E3(T2) {
      var L3 = -1, d2 = Array(T2.size);
      return T2.forEach(function(x2) {
        d2[++L3] = x2;
      }), d2;
    }
    var g4 = Array.prototype, w3 = Function.prototype, k2 = Object.prototype, S2 = f2["__core-js_shared__"], N3 = (function() {
      var T2 = /[^.]+$/.exec(S2 && S2.keys && S2.keys.IE_PROTO || "");
      return T2 ? "Symbol(src)_1." + T2 : "";
    })(), O3 = w3.toString, C3 = k2.hasOwnProperty, I3 = k2.toString, P3 = RegExp(
      "^" + O3.call(C3).replace(i2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), $4 = g4.splice, M4 = le4(f2, "Map"), U4 = le4(f2, "Set"), G2 = le4(Object, "create");
    function X3(T2) {
      var L3 = -1, d2 = T2 ? T2.length : 0;
      for (this.clear(); ++L3 < d2; ) {
        var x2 = T2[L3];
        this.set(x2[0], x2[1]);
      }
    }
    function tt2() {
      this.__data__ = G2 ? G2(null) : {};
    }
    function ut2(T2) {
      return this.has(T2) && delete this.__data__[T2];
    }
    function nt3(T2) {
      var L3 = this.__data__;
      if (G2) {
        var d2 = L3[T2];
        return d2 === e ? void 0 : d2;
      }
      return C3.call(L3, T2) ? L3[T2] : void 0;
    }
    function Z2(T2) {
      var L3 = this.__data__;
      return G2 ? L3[T2] !== void 0 : C3.call(L3, T2);
    }
    function mt2(T2, L3) {
      var d2 = this.__data__;
      return d2[T2] = G2 && L3 === void 0 ? e : L3, this;
    }
    X3.prototype.clear = tt2, X3.prototype.delete = ut2, X3.prototype.get = nt3, X3.prototype.has = Z2, X3.prototype.set = mt2;
    function at3(T2) {
      var L3 = -1, d2 = T2 ? T2.length : 0;
      for (this.clear(); ++L3 < d2; ) {
        var x2 = T2[L3];
        this.set(x2[0], x2[1]);
      }
    }
    function gt3() {
      this.__data__ = [];
    }
    function bt3(T2) {
      var L3 = this.__data__, d2 = ce4(L3, T2);
      if (d2 < 0)
        return false;
      var x2 = L3.length - 1;
      return d2 == x2 ? L3.pop() : $4.call(L3, d2, 1), true;
    }
    function J3(T2) {
      var L3 = this.__data__, d2 = ce4(L3, T2);
      return d2 < 0 ? void 0 : L3[d2][1];
    }
    function B3(T2) {
      return ce4(this.__data__, T2) > -1;
    }
    function Nt2(T2, L3) {
      var d2 = this.__data__, x2 = ce4(d2, T2);
      return x2 < 0 ? d2.push([T2, L3]) : d2[x2][1] = L3, this;
    }
    at3.prototype.clear = gt3, at3.prototype.delete = bt3, at3.prototype.get = J3, at3.prototype.has = B3, at3.prototype.set = Nt2;
    function Q2(T2) {
      var L3 = -1, d2 = T2 ? T2.length : 0;
      for (this.clear(); ++L3 < d2; ) {
        var x2 = T2[L3];
        this.set(x2[0], x2[1]);
      }
    }
    function lt3() {
      this.__data__ = {
        hash: new X3(),
        map: new (M4 || at3)(),
        string: new X3()
      };
    }
    function Et3(T2) {
      return ue3(this, T2).delete(T2);
    }
    function Ht3(T2) {
      return ue3(this, T2).get(T2);
    }
    function It3(T2) {
      return ue3(this, T2).has(T2);
    }
    function Lt3(T2, L3) {
      return ue3(this, T2).set(T2, L3), this;
    }
    Q2.prototype.clear = lt3, Q2.prototype.delete = Et3, Q2.prototype.get = Ht3, Q2.prototype.has = It3, Q2.prototype.set = Lt3;
    function Ft3(T2) {
      var L3 = -1, d2 = T2 ? T2.length : 0;
      for (this.__data__ = new Q2(); ++L3 < d2; )
        this.add(T2[L3]);
    }
    function be3(T2) {
      return this.__data__.set(T2, e), this;
    }
    function Ne4(T2) {
      return this.__data__.has(T2);
    }
    Ft3.prototype.add = Ft3.prototype.push = be3, Ft3.prototype.has = Ne4;
    function ce4(T2, L3) {
      for (var d2 = T2.length; d2--; )
        if (Ie3(T2[d2][0], L3))
          return d2;
      return -1;
    }
    function on2(T2) {
      if (!Qt2(T2) || un2(T2))
        return false;
      var L3 = fe2(T2) || b4(T2) ? P3 : a3;
      return L3.test(ln(T2));
    }
    function an2(T2, L3, d2) {
      var x2 = -1, A3 = y2, R3 = T2.length, D4 = true, W3 = [], z3 = W3;
      if (R3 >= t) {
        var V3 = sn2(T2);
        if (V3)
          return E3(V3);
        D4 = false, A3 = p2, z3 = new Ft3();
      } else
        z3 = W3;
      t:
        for (; ++x2 < R3; ) {
          var K3 = T2[x2], it3 = K3;
          if (K3 = K3 !== 0 ? K3 : 0, D4 && it3 === it3) {
            for (var ct2 = z3.length; ct2--; )
              if (z3[ct2] === it3)
                continue t;
            W3.push(K3);
          } else A3(z3, it3, d2) || (z3 !== W3 && z3.push(it3), W3.push(K3));
        }
      return W3;
    }
    var sn2 = U4 && 1 / E3(new U4([, -0]))[1] == n ? function(T2) {
      return new U4(T2);
    } : Ee4;
    function ue3(T2, L3) {
      var d2 = T2.__data__;
      return cn(L3) ? d2[typeof L3 == "string" ? "string" : "hash"] : d2.map;
    }
    function le4(T2, L3) {
      var d2 = v4(T2, L3);
      return on2(d2) ? d2 : void 0;
    }
    function cn(T2) {
      var L3 = typeof T2;
      return L3 == "string" || L3 == "number" || L3 == "symbol" || L3 == "boolean" ? T2 !== "__proto__" : T2 === null;
    }
    function un2(T2) {
      return !!N3 && N3 in T2;
    }
    function ln(T2) {
      if (T2 != null) {
        try {
          return O3.call(T2);
        } catch {
        }
        try {
          return T2 + "";
        } catch {
        }
      }
      return "";
    }
    function fn2(T2) {
      return T2 && T2.length ? an2(T2) : [];
    }
    function Ie3(T2, L3) {
      return T2 === L3 || T2 !== T2 && L3 !== L3;
    }
    function fe2(T2) {
      var L3 = Qt2(T2) ? I3.call(T2) : "";
      return L3 == r2 || L3 == o;
    }
    function Qt2(T2) {
      var L3 = typeof T2;
      return !!T2 && (L3 == "object" || L3 == "function");
    }
    function Ee4() {
    }
    return $r = fn2, $r;
  }
  function Bi(t) {
    return t === "fixed" || t === "relative" || t === "absolute" || t === "sticky";
  }
  function zi(t) {
    return t.display === "flex" || t.display === "inline-flex";
  }
  function vs(t, e, n, r2, o) {
    let i2 = o, a3 = e.zIndex;
    const s = e.position, c = t.parentElement, f2 = c ? r2.getComputedStyle(c) : {};
    if (a3 !== "" && a3 !== "auto" && !Bi(s) && !zi(f2) && (a3 = "auto"), (!i2 || a3 !== "" && a3 !== "auto" && (Bi(s) || zi(f2))) && (i2 = a3), c && c !== n.body && c !== n.documentElement)
      return vs(c, f2, n, r2, i2);
    if (/^\d+$/.test(i2)) {
      let y2 = Number.parseInt(i2, 10);
      y2 += 1, i2 = y2;
    }
    return i2;
  }
  function ih({ addHook: t }) {
    let e, n, r2;
    t(
      "step.begin",
      ({
        step: o,
        getTraitConfig: i2,
        reportError: a3,
        onElementRemoved: s,
        updateRootStyle: c,
        querySelector: f2,
        getWindowReference: y2
      }) => {
        const {
          target: l2,
          placement: u2 = "right",
          verticalAlignment: h2 = "bottom",
          allowOverlap: p2 = false,
          xOffset: v4 = 0,
          yOffset: b4 = 0,
          distanceUnit: E3 = "px",
          sticky: g4 = false,
          rootDisplay: w3 = "inline-block"
        } = i2();
        e && e(), n && n();
        const k2 = Ve(
          f2(l2.selector),
          l2.filters
        ), S2 = k2.length === 1, N3 = k2.length > 1, O3 = k2.length === 0, C3 = ($4) => {
          const M4 = y2().document.createElement("div");
          if ($4.insertAdjacentElement(
            nh[u2],
            M4
          ) == null) {
            a3(`can't insert inline container on the ${u2}`);
            return;
          }
          o.setStepContainerTarget(M4);
        }, I3 = () => Ve(f2(l2.selector), l2.filters), P3 = () => {
          n = s({
            getTarget: I3,
            onRemoved: () => {
              r2 = a3(`Target got removed => ${l2.selector}`);
            }
          });
        };
        if (S2) {
          C3(k2[0]);
          const $4 = {
            display: w3,
            verticalAlign: h2
          }, { x: M4, y: U4 } = oh({
            distanceUnit: E3,
            xOffset: v4,
            yOffset: b4,
            targetEl: k2[0]
          });
          if (p2)
            $4.position = "absolute", $4.transform = `translate(${M4}, ${U4})`;
          else {
            const G2 = u2.includes("left") ? "right" : "left";
            $4[`margin-${G2}`] = M4, $4[`margin-${h2}`] = U4;
          }
          if (g4) {
            $4.position = "sticky";
            const G2 = u2.includes("left") ? "top" : "bottom";
            $4[G2] = 0, $4.zIndex = ul;
          }
          c($4), P3();
          return;
        }
        N3 && a3(
          `Found ${k2.length} elements for selector ${l2.selector}.`
        ), O3 && (r2 = a3(
          `Could not find element for selector ${l2.selector}.`
        ));
      }
    ), t(
      "step.error",
      ({ step: o, getTraitConfig: i2, onElementInserted: a3, querySelector: s }) => {
        const { target: c } = i2();
        e = a3({
          getTarget: () => Ve(s(c.selector), c.filters),
          onInserted: () => {
            o.recover({ errorId: r2 });
          }
        });
      }
    ), t("step.end", () => {
      e && e(), n && n();
    });
  }
  function Sh(t, e, n, r2) {
    const o = ys[n] || "px";
    switch (t) {
      case "left":
        return {
          left: 0,
          transform: `translateX(${e}${o})`,
          ...r2 && {
            right: "unset"
          }
        };
      case "center":
        return {
          left: "50%",
          transform: `translateX(calc(-50% + ${e}${o}))`,
          ...r2 && {
            right: "unset"
          }
        };
      default:
        return {
          right: 0,
          transform: `translateX(-${e}${o})`,
          ...r2 && {
            left: "unset"
          }
        };
    }
  }
  function _h(t, e, n, r2) {
    const o = ys[n] || "px";
    switch (t) {
      case "top":
        return {
          top: 0,
          transform: `translateY(${e}${o})`,
          ...r2 && {
            bottom: "unset"
          }
        };
      case "center":
        return {
          top: "50%",
          transform: `translateY(calc(-50% + ${e}${o}))`,
          ...r2 && {
            bottom: "unset"
          }
        };
      default:
        return {
          bottom: 0,
          transform: `translateY(-${e}${o})`,
          ...r2 && {
            top: "unset"
          }
        };
    }
  }
  function Vi(t) {
    return `_experience_dismissed_${t}`;
  }
  function Ih({ addHook: t }) {
    t("step.begin", qi), t("step.container_change", qi);
  }
  function Zh(t) {
    const { backdropBlur: e, backdropColor: n } = t;
    return {
      ...e && { "--backdrop-blur": e },
      ...n && { "--backdrop-color": n }
    };
  }
  function ev({
    runningExperiences: t = /* @__PURE__ */ new Map(),
    sendEvent: e = () => {
    },
    sendCustomEvent: n = () => {
    },
    showFlow: r2 = () => {
    },
    updateUserProfile: o = () => {
    },
    createRenderListener: i2 = ud,
    vNodeHandlers: a3 = xd,
    accessibilityHandlers: s = _d,
    getWindowReference: c = () => window,
    apiOverrides: f2 = {}
  } = {}) {
    ll(f2);
    const y2 = /* @__PURE__ */ new Map(), l2 = {
      sendEvent: e,
      sendCustomEvent: n,
      showFlow: r2,
      updateUserProfile: o,
      createRenderListener: i2,
      vNodeHandlers: a3,
      accessibilityHandlers: s,
      getWindowReference: c,
      apiOverrides: f2
    }, u2 = (v4) => v4 ? l2?.[v4] ? l2[v4] : () => {
      throw new Error(`can't find external dependency called ${v4}`);
    } : l2, h2 = ({ reason: v4 = Ce.NAVIGATION } = {}) => {
      t.forEach((b4) => {
        b4.experienceService.send({ type: Be, reason: v4 }), b4.experienceService.subscribe((E3) => {
          E3.matches("end-final") && b4.experienceService.stop();
        });
      }), t.clear();
    }, p2 = (v4, { reason: b4 = Ce.NAVIGATION } = {}) => {
      t.has(v4) && (t.get(v4).experienceService.send({ type: Be, reason: b4 }), t.delete(v4));
    };
    return {
      registerAction: ae,
      registerTrait: Tt,
      show: async (v4) => {
        Yh(c), await c().customElements.whenDefined(_n);
        const b4 = Kn(
          Kn(
            v4,
            "traits",
            (g4) => (g4 ?? []).map((w3, k2) => ({
              ...w3,
              id: w3.id || `${w3.type}:${k2}`
            }))
          ),
          "steps",
          (g4) => (g4 ?? []).map(
            (w3) => Kn(
              w3,
              "traits",
              (k2) => (k2 ?? []).map((S2, N3) => ({
                ...S2,
                id: S2.id || `${S2.type}:${N3}`
              }))
            )
          )
        ), E3 = t.get(v4.id)?.experienceService ?? da(sd(b4, u2), {
          devTools: tv
        }).start();
        E3.send({
          type: Jo,
          experience: b4
        }), t.set(v4.id, {
          experienceService: E3,
          experience: b4
        });
      },
      stopAll: h2,
      stop: p2,
      pause: (v4) => {
        if (y2.get(v4)) return;
        const b4 = t.get(v4);
        b4 && (p2(v4), y2.set(v4, {
          experienceService: b4.experienceService,
          experience: b4.experience
        }));
      },
      resume: (v4) => {
        const b4 = y2.get(v4);
        b4 && (b4.experienceService.send({ type: Jo }), t.set(v4, {
          experienceService: b4.experienceService,
          experience: b4.experience
        }), y2.delete(v4));
      },
      getRunningExperiences: () => [...t].map(([, { experience: v4 }]) => v4),
      isExperiencePaused: (v4) => y2.has(v4)
    };
  }
  var H, ot, qe, Br, co, hr, vr, Gi, dc, zr, Xi, pc, Ur, Wo, hc, Ki, vc, gc, Zi, Fo, Vr, yc, Cr, bc, _c, ge, Rc, tr, er, Ic, jc, Lc, nr, bn, Fc, rr, ee, Jc, qo, Or, Qc, $n, Jr, Ot, nu, ru, Wn, Qr, Ar, De, He, iu, au, yt, ho, Vt, Le, Wt, Yr, cu, Ko, lu, fu, Fe, jt, pu, Kn, hu, Fn, vu, yu, _t, Nr2, Zn, Zo, wu, En, Su, Jo, Be, Ce, _u, ha, vo, va, ga, ya, Tu, ku, Ru, Cu, Ou, Au, ma, Nu, ba, Iu, ju, Pu, Du, Hu, Lu, $u, go, Ea, xa, ar, wa, Sa, _a, Mu, yo, Ta, Wu, mo, _n, yr, mr, ka, bo, Ra, Fu, Bu, We, zu, Qo, Yo, Ze, Uu, Ae, ti, Vu, qu, Eo, Gu, Xu, Ca, Oa, Ku, Zu, Ju, Qu, Yu, tl, Aa, el, ei, ni, rl, ol, Bn, ri, al, sl, cl, ul, no, ll, fl, dl, pl, oi, Na, hl, vl, gl, yl, ml, bl, El, xl, wl, Sl, _l, Tl, kl, Rl, Ia, ja, Pa, Tt, Cl, Ol, Da, ii, Al, xn, ae, Nl, Il, jl, Pl, xo, Je, Ir, tf, rf, ff, df, pf, ai, hf, vf, Ma, Wa, ui, gf, Ba, za, di, bf, oo, Ua, kf, Rf, hi, Cf, Of, Af, Nf, zt, ve, If, Va, jf, Pf, Df, qa, Hf, Lf, tn, $f, Mf, Wf, Ff, Bf, zf, Uf, vi, Vf, qf, Gf, Xf, Kf, Zf, gi, me, Jf, Qf, Yf, td, ed, nd, rd, od, id, ad, sd, Ga, ud, zn, yi, mi, Pr, bi, Dr, Ei, Xa, $e, xi, wi, Si, _i, gd, yd, Ka, md, Za, Ja, Qa, Ya, So, ts, es, bd, Ed, xd, Ti, wd, Sd, _d, Td, ki, kd, Rd, Cd, Od, Ad, Nd, Id, jd, Pd, Dd, Hd, Ld, $d, Md, Wd, Fd, Ri, Re, Bd, Ci, Ud, ns, Oi, Ai, kn, ze, sr, Kt, Vd, qd, Gd, Jd, Qd, tp, ep, np, op, ip, ap, sp, up, lp, fp, dp, hp, vp, Hi, xp, Rp, Op, Ap, Np, Ip, jp, Pp, Dp, Lr, Mi, Lp, ps, $r, Wi, Mp, Wp, hs, Fp, Bp, Fi, zp, Up, fr, Vp, qp, Gp, dr, pr, Xp, Kp, Ve, Zp, Jp, Qp, Yp, th, eh, nh, rh, oh, ah, sh, ch, uh, Un, Mr, lh, gs, Ui, fh, dh, ph, hh, vh, gh, yh, mh, bh, Eh, xh, Wr, wh, ys, Th, kh, Rh, Ch, Oh, Ah, Nh, qi, jh, Ph, Dh, Hh, Co, Lh, $h, Mh, Wh, Fh, Bh, zh, Vn, Uh, Vh, qh, Gh, Xh, Kh, Jh, Qh, Fr, Yh, tv;
  var init_open_builder_XILUARRq = __esm({
    "node_modules/@appcues/web-sdk/build/open-builder.XILUARRq.js"() {
      H = function() {
        return H = Object.assign || function(t) {
          for (var e, n = 1, r2 = arguments.length; n < r2; n++) {
            e = arguments[n];
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          }
          return t;
        }, H.apply(this, arguments);
      };
      (function(t) {
        t.Start = "xstate.start", t.Stop = "xstate.stop", t.Raise = "xstate.raise", t.Send = "xstate.send", t.Cancel = "xstate.cancel", t.NullEvent = "", t.Assign = "xstate.assign", t.After = "xstate.after", t.DoneState = "done.state", t.DoneInvoke = "done.invoke", t.Log = "xstate.log", t.Init = "xstate.init", t.Invoke = "xstate.invoke", t.ErrorExecution = "error.execution", t.ErrorCommunication = "error.communication", t.ErrorPlatform = "error.platform", t.ErrorCustom = "xstate.error", t.Update = "xstate.update", t.Pure = "xstate.pure", t.Choose = "xstate.choose";
      })(ot || (ot = {}));
      (function(t) {
        t.Parent = "#_parent", t.Internal = "#_internal";
      })(qe || (qe = {}));
      Br = ot.Start;
      co = ot.Stop;
      hr = ot.Raise;
      vr = ot.Send;
      Gi = ot.Cancel;
      dc = ot.NullEvent;
      zr = ot.Assign;
      ot.After;
      ot.DoneState;
      Xi = ot.Log;
      pc = ot.Init;
      Ur = ot.Invoke;
      ot.ErrorExecution;
      Wo = ot.ErrorPlatform;
      hc = ot.ErrorCustom;
      Ki = ot.Update;
      vc = ot.Choose;
      gc = ot.Pure;
      Zi = ".";
      Fo = {};
      Vr = "xstate.guard";
      yc = "";
      bc = function(t) {
        return function(e) {
          var n, r2, o = e;
          try {
            for (var i2 = Y(t), a3 = i2.next(); !a3.done; a3 = i2.next()) {
              var s = a3.value;
              o = o[s];
            }
          } catch (c) {
            n = {
              error: c
            };
          } finally {
            try {
              a3 && !a3.done && (r2 = i2.return) && r2.call(i2);
            } finally {
              if (n) throw n.error;
            }
          }
          return o;
        };
      };
      _c = function() {
      };
      ge = /* @__PURE__ */ (function() {
        return typeof Symbol == "function" && Symbol.observable || "@@observable";
      })();
      Cr = {}, Cr[ge] = function() {
        return this;
      }, Cr[Symbol.observable] = function() {
        return this;
      };
      Rc = /* @__PURE__ */ (function() {
        var t = 0;
        return function() {
          return t++, t.toString(16);
        };
      })();
      tr = /* @__PURE__ */ Ct({
        type: pc
      });
      er = function(t, e) {
        if (!t)
          return [];
        var n = Ye(t) ? t : [t];
        return n.map(function(r2) {
          return Tn(r2, e);
        });
      };
      Ic = function(t, e, n) {
        return H(H({}, t), {
          value: et(t.expr) ? t.expr : t.expr(e, n.data, {
            _event: n
          })
        });
      };
      jc = function(t) {
        return {
          type: Gi,
          sendId: t
        };
      };
      Lc = function(t) {
        return {
          type: zr,
          assignment: t
        };
      };
      nr = [];
      bn = function(t, e) {
        nr.push(t);
        var n = e(t);
        return nr.pop(), n;
      };
      Fc = function(t) {
        return t(nr[nr.length - 1]);
      };
      rr = function(t) {
        return t.type === "atomic" || t.type === "final";
      };
      ee = /** @class */
      /* @__PURE__ */ (function() {
        function t(e) {
          var n = this, r2;
          this.actions = [], this.activities = Fo, this.meta = {}, this.events = [], this.value = e.value, this.context = e.context, this._event = e._event, this._sessionid = e._sessionid, this.event = this._event.data, this.historyValue = e.historyValue, this.history = e.history, this.actions = e.actions || [], this.activities = e.activities || Fo, this.meta = Xc(e.configuration), this.events = e.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = e.configuration, this.transitions = e.transitions, this.children = e.children, this.done = !!e.done, this.tags = (r2 = Array.isArray(e.tags) ? new Set(e.tags) : e.tags) !== null && r2 !== void 0 ? r2 : /* @__PURE__ */ new Set(), this.machine = e.machine, Object.defineProperty(this, "nextEvents", {
            get: function() {
              return Gc(n.configuration);
            }
          });
        }
        return t.from = function(e, n) {
          if (e instanceof t)
            return e.context !== n ? new t({
              value: e.value,
              context: n,
              _event: e._event,
              _sessionid: null,
              historyValue: e.historyValue,
              history: e.history,
              actions: [],
              activities: e.activities,
              events: [],
              configuration: [],
              transitions: [],
              children: {}
            }) : e;
          var r2 = tr;
          return new t({
            value: e,
            context: n,
            _event: r2,
            _sessionid: null,
            historyValue: void 0,
            history: void 0,
            actions: [],
            activities: void 0,
            events: [],
            configuration: [],
            transitions: [],
            children: {}
          });
        }, t.create = function(e) {
          return new t(e);
        }, t.inert = function(e, n) {
          if (e instanceof t) {
            if (!e.actions.length)
              return e;
            var r2 = tr;
            return new t({
              value: e.value,
              context: n,
              _event: r2,
              _sessionid: null,
              historyValue: e.historyValue,
              history: e.history,
              activities: e.activities,
              configuration: e.configuration,
              transitions: [],
              children: {}
            });
          }
          return t.from(e, n);
        }, t.prototype.toStrings = function(e, n) {
          var r2 = this;
          if (e === void 0 && (e = this.value), n === void 0 && (n = "."), et(e))
            return [e];
          var o = Object.keys(e);
          return o.concat.apply(o, vt([], rt(o.map(function(i2) {
            return r2.toStrings(e[i2], n).map(function(a3) {
              return i2 + n + a3;
            });
          })), false));
        }, t.prototype.toJSON = function() {
          var e = this;
          e.configuration, e.transitions;
          var n = e.tags;
          e.machine;
          var r2 = so(e, ["configuration", "transitions", "tags", "machine"]);
          return H(H({}, r2), {
            tags: Array.from(n)
          });
        }, t.prototype.matches = function(e) {
          return uo(e, this.value);
        }, t.prototype.hasTag = function(e) {
          return this.tags.has(e);
        }, t.prototype.can = function(e) {
          var n;
          _c(!!this.machine);
          var r2 = (n = this.machine) === null || n === void 0 ? void 0 : n.getTransitionData(this, e);
          return !!r2?.transitions.length && // Check that at least one transition is not forbidden
          r2.transitions.some(function(o) {
            return o.target !== void 0 || o.actions.length;
          });
        }, t;
      })();
      Jc = {
        deferEvents: false
      };
      qo = /** @class */
      /* @__PURE__ */ (function() {
        function t(e) {
          this.processingEvent = false, this.queue = [], this.initialized = false, this.options = H(H({}, Jc), e);
        }
        return t.prototype.initialize = function(e) {
          if (this.initialized = true, e) {
            if (!this.options.deferEvents) {
              this.schedule(e);
              return;
            }
            this.process(e);
          }
          this.flushEvents();
        }, t.prototype.schedule = function(e) {
          if (!this.initialized || this.processingEvent) {
            this.queue.push(e);
            return;
          }
          if (this.queue.length !== 0)
            throw new Error("Event queue should be empty when it is not processing events");
          this.process(e), this.flushEvents();
        }, t.prototype.clear = function() {
          this.queue = [];
        }, t.prototype.flushEvents = function() {
          for (var e = this.queue.shift(); e; )
            this.process(e), e = this.queue.shift();
        }, t.prototype.process = function(e) {
          this.processingEvent = true;
          try {
            e();
          } catch (n) {
            throw this.clear(), n;
          } finally {
            this.processingEvent = false;
          }
        }, t;
      })();
      Or = /* @__PURE__ */ new Map();
      Qc = 0;
      $n = {
        bookId: function() {
          return "x:".concat(Qc++);
        },
        register: function(t, e) {
          return Or.set(t, e), t;
        },
        get: function(t) {
          return Or.get(t);
        },
        free: function(t) {
          Or.delete(t);
        }
      };
      Jr = {
        sync: false,
        autoForward: false
      };
      (function(t) {
        t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped";
      })(Ot || (Ot = {}));
      nu = /** @class */
      /* @__PURE__ */ (function() {
        function t(e, n) {
          var r2 = this;
          n === void 0 && (n = t.defaultOptions), this.machine = e, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = Ot.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this.init = this.start, this.send = function(y2, l2) {
            if (Ye(y2))
              return r2.batch(y2), r2.state;
            var u2 = Ct(lo(y2, l2));
            if (r2.status === Ot.Stopped)
              return r2.state;
            if (r2.status !== Ot.Running && !r2.options.deferEvents)
              throw new Error('Event "'.concat(u2.name, '" was sent to uninitialized service "').concat(
                r2.machine.id,
                `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `
              ).concat(JSON.stringify(u2.data)));
            return r2.scheduler.schedule(function() {
              r2.forward(u2);
              var h2 = r2.nextState(u2);
              r2.update(h2, u2);
            }), r2._state;
          }, this.sendTo = function(y2, l2) {
            var u2 = r2.parent && (l2 === qe.Parent || r2.parent.id === l2), h2 = u2 ? r2.parent : et(l2) ? r2.children.get(l2) || $n.get(l2) : kc(l2) ? l2 : void 0;
            if (!h2) {
              if (!u2)
                throw new Error("Unable to send event to child '".concat(l2, "' from service '").concat(r2.id, "'."));
              return;
            }
            "machine" in h2 ? h2.send(H(H({}, y2), {
              name: y2.name === hc ? "".concat(mn(r2.id)) : y2.name,
              origin: r2.sessionId
            })) : h2.send(y2.data);
          };
          var o = H(H({}, t.defaultOptions), n), i2 = o.clock, a3 = o.logger, s = o.parent, c = o.id, f2 = c !== void 0 ? c : e.id;
          this.id = f2, this.logger = a3, this.clock = i2, this.parent = s, this.options = o, this.scheduler = new qo({
            deferEvents: this.options.deferEvents
          }), this.sessionId = $n.bookId();
        }
        return Object.defineProperty(t.prototype, "initialState", {
          get: function() {
            var e = this;
            return this._initialState ? this._initialState : bn(this, function() {
              return e._initialState = e.machine.initialState, e._initialState;
            });
          },
          enumerable: false,
          configurable: true
        }), Object.defineProperty(t.prototype, "state", {
          get: function() {
            return this._state;
          },
          enumerable: false,
          configurable: true
        }), t.prototype.execute = function(e, n) {
          var r2, o;
          try {
            for (var i2 = Y(e.actions), a3 = i2.next(); !a3.done; a3 = i2.next()) {
              var s = a3.value;
              this.exec(s, e, n);
            }
          } catch (c) {
            r2 = {
              error: c
            };
          } finally {
            try {
              a3 && !a3.done && (o = i2.return) && o.call(i2);
            } finally {
              if (r2) throw r2.error;
            }
          }
        }, t.prototype.update = function(e, n) {
          var r2, o, i2, a3, s, c, f2, y2, l2 = this;
          if (e._sessionid = this.sessionId, this._state = e, this.options.execute && this.execute(this.state), this.children.forEach(function(I3) {
            l2.state.children[I3.id] = I3;
          }), this.devTools && this.devTools.send(n.data, e), e.event)
            try {
              for (var u2 = Y(this.eventListeners), h2 = u2.next(); !h2.done; h2 = u2.next()) {
                var p2 = h2.value;
                p2(e.event);
              }
            } catch (I3) {
              r2 = {
                error: I3
              };
            } finally {
              try {
                h2 && !h2.done && (o = u2.return) && o.call(u2);
              } finally {
                if (r2) throw r2.error;
              }
            }
          try {
            for (var v4 = Y(this.listeners), b4 = v4.next(); !b4.done; b4 = v4.next()) {
              var p2 = b4.value;
              p2(e, e.event);
            }
          } catch (I3) {
            i2 = {
              error: I3
            };
          } finally {
            try {
              b4 && !b4.done && (a3 = v4.return) && a3.call(v4);
            } finally {
              if (i2) throw i2.error;
            }
          }
          try {
            for (var E3 = Y(this.contextListeners), g4 = E3.next(); !g4.done; g4 = E3.next()) {
              var w3 = g4.value;
              w3(this.state.context, this.state.history ? this.state.history.context : void 0);
            }
          } catch (I3) {
            s = {
              error: I3
            };
          } finally {
            try {
              g4 && !g4.done && (c = E3.return) && c.call(E3);
            } finally {
              if (s) throw s.error;
            }
          }
          var k2 = Sn(e.configuration || [], this.machine);
          if (this.state.configuration && k2) {
            var S2 = e.configuration.find(function(I3) {
              return I3.type === "final" && I3.parent === l2.machine;
            }), N3 = S2 && S2.doneData ? Yn(S2.doneData, e.context, n) : void 0;
            try {
              for (var O3 = Y(this.doneListeners), C3 = O3.next(); !C3.done; C3 = O3.next()) {
                var p2 = C3.value;
                p2(Gn(this.id, N3));
              }
            } catch (I3) {
              f2 = {
                error: I3
              };
            } finally {
              try {
                C3 && !C3.done && (y2 = O3.return) && y2.call(O3);
              } finally {
                if (f2) throw f2.error;
              }
            }
            this.stop();
          }
        }, t.prototype.onTransition = function(e) {
          return this.listeners.add(e), this.status === Ot.Running && e(this.state, this.state.event), this;
        }, t.prototype.subscribe = function(e, n, r2) {
          var o = this;
          if (!e)
            return {
              unsubscribe: function() {
              }
            };
          var i2, a3 = r2;
          return typeof e == "function" ? i2 = e : (i2 = e.next.bind(e), a3 = e.complete.bind(e)), this.listeners.add(i2), this.status !== Ot.NotStarted && i2(this.state), a3 && (this.status === Ot.Stopped ? a3() : this.onDone(a3)), {
            unsubscribe: function() {
              i2 && o.listeners.delete(i2), a3 && o.doneListeners.delete(a3);
            }
          };
        }, t.prototype.onEvent = function(e) {
          return this.eventListeners.add(e), this;
        }, t.prototype.onSend = function(e) {
          return this.sendListeners.add(e), this;
        }, t.prototype.onChange = function(e) {
          return this.contextListeners.add(e), this;
        }, t.prototype.onStop = function(e) {
          return this.stopListeners.add(e), this;
        }, t.prototype.onDone = function(e) {
          return this.doneListeners.add(e), this;
        }, t.prototype.off = function(e) {
          return this.listeners.delete(e), this.eventListeners.delete(e), this.sendListeners.delete(e), this.stopListeners.delete(e), this.doneListeners.delete(e), this.contextListeners.delete(e), this;
        }, t.prototype.start = function(e) {
          var n = this;
          if (this.status === Ot.Running)
            return this;
          this.machine._init(), $n.register(this.sessionId, this), this.initialized = true, this.status = Ot.Running;
          var r2 = e === void 0 ? this.initialState : bn(this, function() {
            return Kc(e) ? n.machine.resolveState(e) : n.machine.resolveState(ee.from(e, n.machine.context));
          });
          return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
            n.update(r2, tr);
          }), this;
        }, t.prototype.stop = function() {
          var e, n, r2, o, i2, a3, s, c, f2, y2, l2 = this;
          try {
            for (var u2 = Y(this.listeners), h2 = u2.next(); !h2.done; h2 = u2.next()) {
              var p2 = h2.value;
              this.listeners.delete(p2);
            }
          } catch (C3) {
            e = {
              error: C3
            };
          } finally {
            try {
              h2 && !h2.done && (n = u2.return) && n.call(u2);
            } finally {
              if (e) throw e.error;
            }
          }
          try {
            for (var v4 = Y(this.stopListeners), b4 = v4.next(); !b4.done; b4 = v4.next()) {
              var p2 = b4.value;
              p2(), this.stopListeners.delete(p2);
            }
          } catch (C3) {
            r2 = {
              error: C3
            };
          } finally {
            try {
              b4 && !b4.done && (o = v4.return) && o.call(v4);
            } finally {
              if (r2) throw r2.error;
            }
          }
          try {
            for (var E3 = Y(this.contextListeners), g4 = E3.next(); !g4.done; g4 = E3.next()) {
              var p2 = g4.value;
              this.contextListeners.delete(p2);
            }
          } catch (C3) {
            i2 = {
              error: C3
            };
          } finally {
            try {
              g4 && !g4.done && (a3 = E3.return) && a3.call(E3);
            } finally {
              if (i2) throw i2.error;
            }
          }
          try {
            for (var w3 = Y(this.doneListeners), k2 = w3.next(); !k2.done; k2 = w3.next()) {
              var p2 = k2.value;
              this.doneListeners.delete(p2);
            }
          } catch (C3) {
            s = {
              error: C3
            };
          } finally {
            try {
              k2 && !k2.done && (c = w3.return) && c.call(w3);
            } finally {
              if (s) throw s.error;
            }
          }
          if (!this.initialized)
            return this;
          vt([], rt(this.state.configuration), false).sort(function(C3, I3) {
            return I3.order - C3.order;
          }).forEach(function(C3) {
            var I3, P3;
            try {
              for (var $4 = Y(C3.definition.exit), M4 = $4.next(); !M4.done; M4 = $4.next()) {
                var U4 = M4.value;
                l2.exec(U4, l2.state);
              }
            } catch (G2) {
              I3 = {
                error: G2
              };
            } finally {
              try {
                M4 && !M4.done && (P3 = $4.return) && P3.call($4);
              } finally {
                if (I3) throw I3.error;
              }
            }
          }), this.children.forEach(function(C3) {
            st(C3.stop) && C3.stop();
          }), this.children.clear();
          try {
            for (var S2 = Y(Object.keys(this.delayedEventsMap)), N3 = S2.next(); !N3.done; N3 = S2.next()) {
              var O3 = N3.value;
              this.clock.clearTimeout(this.delayedEventsMap[O3]);
            }
          } catch (C3) {
            f2 = {
              error: C3
            };
          } finally {
            try {
              N3 && !N3.done && (y2 = S2.return) && y2.call(S2);
            } finally {
              if (f2) throw f2.error;
            }
          }
          return this.scheduler.clear(), this.scheduler = new qo({
            deferEvents: this.options.deferEvents
          }), this.initialized = false, this.status = Ot.Stopped, this._initialState = void 0, $n.free(this.sessionId), this;
        }, t.prototype.batch = function(e) {
          var n = this;
          if (!(this.status === Ot.NotStarted && this.options.deferEvents) && this.status !== Ot.Running)
            throw new Error(
              // tslint:disable-next-line:max-line-length
              "".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.')
            );
          this.scheduler.schedule(function() {
            var r2, o, i2 = n.state, a3 = false, s = [], c = function(u2) {
              var h2 = Ct(u2);
              n.forward(h2), i2 = bn(n, function() {
                return n.machine.transition(i2, h2);
              }), s.push.apply(s, vt([], rt(i2.actions.map(function(p2) {
                return Zc(p2, i2);
              })), false)), a3 = a3 || !!i2.changed;
            };
            try {
              for (var f2 = Y(e), y2 = f2.next(); !y2.done; y2 = f2.next()) {
                var l2 = y2.value;
                c(l2);
              }
            } catch (u2) {
              r2 = {
                error: u2
              };
            } finally {
              try {
                y2 && !y2.done && (o = f2.return) && o.call(f2);
              } finally {
                if (r2) throw r2.error;
              }
            }
            i2.changed = a3, i2.actions = s, n.update(i2, Ct(e[e.length - 1]));
          });
        }, t.prototype.sender = function(e) {
          return this.send.bind(this, e);
        }, t.prototype.nextState = function(e) {
          var n = this, r2 = Ct(e);
          if (r2.name.indexOf(Wo) === 0 && !this.state.nextEvents.some(function(i2) {
            return i2.indexOf(Wo) === 0;
          }))
            throw r2.data.data;
          var o = bn(this, function() {
            return n.machine.transition(n.state, r2);
          });
          return o;
        }, t.prototype.forward = function(e) {
          var n, r2;
          try {
            for (var o = Y(this.forwardTo), i2 = o.next(); !i2.done; i2 = o.next()) {
              var a3 = i2.value, s = this.children.get(a3);
              if (!s)
                throw new Error("Unable to forward event '".concat(e, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(a3, "'."));
              s.send(e);
            }
          } catch (c) {
            n = {
              error: c
            };
          } finally {
            try {
              i2 && !i2.done && (r2 = o.return) && r2.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
        }, t.prototype.defer = function(e) {
          var n = this;
          this.delayedEventsMap[e.id] = this.clock.setTimeout(function() {
            e.to ? n.sendTo(e._event, e.to) : n.send(e._event);
          }, e.delay);
        }, t.prototype.cancel = function(e) {
          this.clock.clearTimeout(this.delayedEventsMap[e]), delete this.delayedEventsMap[e];
        }, t.prototype.exec = function(e, n, r2) {
          r2 === void 0 && (r2 = this.machine.options.actions);
          var o = n.context, i2 = n._event, a3 = e.exec || Xr(e.type, r2), s = st(a3) ? a3 : a3 ? a3.exec : e.exec;
          if (s)
            try {
              return s(o, i2.data, {
                action: e,
                state: this.state,
                _event: i2
              });
            } catch (k2) {
              throw this.parent && this.parent.send({
                type: "xstate.error",
                data: k2
              }), k2;
            }
          switch (e.type) {
            case vr:
              var c = e;
              if (typeof c.delay == "number") {
                this.defer(c);
                return;
              } else
                c.to ? this.sendTo(c._event, c.to) : this.send(c._event);
              break;
            case Gi:
              this.cancel(e.sendId);
              break;
            case Br: {
              if (this.status !== Ot.Running)
                return;
              var f2 = e.activity;
              if (!this.state.activities[f2.id || f2.type])
                break;
              if (f2.type === ot.Invoke) {
                var y2 = ra(f2.src), l2 = this.machine.options.services ? this.machine.options.services[y2.type] : void 0, u2 = f2.id, h2 = f2.data, p2 = "autoForward" in f2 ? f2.autoForward : !!f2.forward;
                if (!l2)
                  return;
                var v4 = h2 ? Yn(h2, o, i2) : void 0;
                if (typeof l2 == "string")
                  return;
                var b4 = st(l2) ? l2(o, i2.data, {
                  data: v4,
                  src: y2,
                  meta: f2.meta
                }) : l2;
                if (!b4)
                  return;
                var E3 = void 0;
                Ge(b4) && (b4 = v4 ? b4.withContext(v4) : b4, E3 = {
                  autoForward: p2
                }), this.spawn(b4, u2, E3);
              } else
                this.spawnActivity(f2);
              break;
            }
            case co: {
              this.stopChild(e.activity.id);
              break;
            }
            case Xi:
              var g4 = e.label, w3 = e.value;
              g4 ? this.logger(g4, w3) : this.logger(w3);
              break;
          }
        }, t.prototype.removeChild = function(e) {
          var n;
          this.children.delete(e), this.forwardTo.delete(e), (n = this.state) === null || n === void 0 || delete n.children[e];
        }, t.prototype.stopChild = function(e) {
          var n = this.children.get(e);
          n && (this.removeChild(e), st(n.stop) && n.stop());
        }, t.prototype.spawn = function(e, n, r2) {
          if (zo(e))
            return this.spawnPromise(Promise.resolve(e), n);
          if (st(e))
            return this.spawnCallback(e, n);
          if (Uc(e))
            return this.spawnActor(e, n);
          if (Tc(e))
            return this.spawnObservable(e, n);
          if (Ge(e))
            return this.spawnMachine(e, H(H({}, r2), {
              id: n
            }));
          if (wc(e))
            return this.spawnBehavior(e, n);
          throw new Error('Unable to spawn entity "'.concat(n, '" of type "').concat(typeof e, '".'));
        }, t.prototype.spawnMachine = function(e, n) {
          var r2 = this;
          n === void 0 && (n = {});
          var o = new t(e, H(H({}, this.options), {
            parent: this,
            id: n.id || e.id
          })), i2 = H(H({}, Jr), n);
          i2.sync && o.onTransition(function(s) {
            r2.send(Ki, {
              state: s,
              id: o.id
            });
          });
          var a3 = o;
          return this.children.set(o.id, a3), i2.autoForward && this.forwardTo.add(o.id), o.onDone(function(s) {
            r2.removeChild(o.id), r2.send(Ct(s, {
              origin: o.id
            }));
          }).start(), a3;
        }, t.prototype.spawnBehavior = function(e, n) {
          var r2 = eu(e, {
            id: n,
            parent: this
          });
          return this.children.set(n, r2), r2;
        }, t.prototype.spawnPromise = function(e, n) {
          var r2, o = this, i2 = false, a3;
          e.then(function(c) {
            i2 || (a3 = c, o.removeChild(n), o.send(Ct(Gn(n, c), {
              origin: n
            })));
          }, function(c) {
            if (!i2) {
              o.removeChild(n);
              var f2 = mn(n, c);
              try {
                o.send(Ct(f2, {
                  origin: n
                }));
              } catch {
                o.devTools && o.devTools.send(f2, o.state), o.machine.strict && o.stop();
              }
            }
          });
          var s = (r2 = {
            id: n,
            send: function() {
            },
            subscribe: function(c, f2, y2) {
              var l2 = Gr(c, f2, y2), u2 = false;
              return e.then(function(h2) {
                u2 || (l2.next(h2), !u2 && l2.complete());
              }, function(h2) {
                u2 || l2.error(h2);
              }), {
                unsubscribe: function() {
                  return u2 = true;
                }
              };
            },
            stop: function() {
              i2 = true;
            },
            toJSON: function() {
              return {
                id: n
              };
            },
            getSnapshot: function() {
              return a3;
            }
          }, r2[ge] = function() {
            return this;
          }, r2);
          return this.children.set(n, s), s;
        }, t.prototype.spawnCallback = function(e, n) {
          var r2, o = this, i2 = false, a3 = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), c, f2 = function(u2) {
            c = u2, s.forEach(function(h2) {
              return h2(u2);
            }), !i2 && o.send(Ct(u2, {
              origin: n
            }));
          }, y2;
          try {
            y2 = e(f2, function(u2) {
              a3.add(u2);
            });
          } catch (u2) {
            this.send(mn(n, u2));
          }
          if (zo(y2))
            return this.spawnPromise(y2, n);
          var l2 = (r2 = {
            id: n,
            send: function(u2) {
              return a3.forEach(function(h2) {
                return h2(u2);
              });
            },
            subscribe: function(u2) {
              var h2 = Gr(u2);
              return s.add(h2.next), {
                unsubscribe: function() {
                  s.delete(h2.next);
                }
              };
            },
            stop: function() {
              i2 = true, st(y2) && y2();
            },
            toJSON: function() {
              return {
                id: n
              };
            },
            getSnapshot: function() {
              return c;
            }
          }, r2[ge] = function() {
            return this;
          }, r2);
          return this.children.set(n, l2), l2;
        }, t.prototype.spawnObservable = function(e, n) {
          var r2, o = this, i2, a3 = e.subscribe(function(c) {
            i2 = c, o.send(Ct(c, {
              origin: n
            }));
          }, function(c) {
            o.removeChild(n), o.send(Ct(mn(n, c), {
              origin: n
            }));
          }, function() {
            o.removeChild(n), o.send(Ct(Gn(n), {
              origin: n
            }));
          }), s = (r2 = {
            id: n,
            send: function() {
            },
            subscribe: function(c, f2, y2) {
              return e.subscribe(c, f2, y2);
            },
            stop: function() {
              return a3.unsubscribe();
            },
            getSnapshot: function() {
              return i2;
            },
            toJSON: function() {
              return {
                id: n
              };
            }
          }, r2[ge] = function() {
            return this;
          }, r2);
          return this.children.set(n, s), s;
        }, t.prototype.spawnActor = function(e, n) {
          return this.children.set(n, e), e;
        }, t.prototype.spawnActivity = function(e) {
          var n = this.machine.options && this.machine.options.activities ? this.machine.options.activities[e.type] : void 0;
          if (n) {
            var r2 = n(this.state.context, e);
            this.spawnEffect(e.id, r2);
          }
        }, t.prototype.spawnEffect = function(e, n) {
          var r2;
          this.children.set(e, (r2 = {
            id: e,
            send: function() {
            },
            subscribe: function() {
              return {
                unsubscribe: function() {
                }
              };
            },
            stop: n || void 0,
            getSnapshot: function() {
            },
            toJSON: function() {
              return {
                id: e
              };
            }
          }, r2[ge] = function() {
            return this;
          }, r2));
        }, t.prototype.attachDev = function() {
          var e = po();
          if (this.options.devTools && e) {
            if (e.__REDUX_DEVTOOLS_EXTENSION__) {
              var n = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
              this.devTools = e.__REDUX_DEVTOOLS_EXTENSION__.connect(H(H({
                name: this.id,
                autoPause: true,
                stateSanitizer: function(r2) {
                  return {
                    value: r2.value,
                    context: r2.context,
                    actions: r2.actions
                  };
                }
              }, n), {
                features: H({
                  jump: false,
                  skip: false
                }, n ? n.features : void 0)
              }), this.machine), this.devTools.init(this.state);
            }
            tu(this);
          }
        }, t.prototype.toJSON = function() {
          return {
            id: this.id
          };
        }, t.prototype[ge] = function() {
          return this;
        }, t.prototype.getSnapshot = function() {
          return this.status === Ot.NotStarted ? this.initialState : this._state;
        }, t.defaultOptions = {
          execute: true,
          deferEvents: true,
          clock: {
            setTimeout: function(e, n) {
              return setTimeout(e, n);
            },
            clearTimeout: function(e) {
              return clearTimeout(e);
            }
          },
          logger: /* @__PURE__ */ (() => {
          }).bind(console),
          devTools: false
        }, t.interpret = da, t;
      })();
      ru = function(t) {
        return et(t) ? H(H({}, Jr), {
          name: t
        }) : H(H(H({}, Jr), {
          name: Rc()
        }), t);
      };
      Wn = "";
      Qr = "#";
      Ar = "*";
      De = {};
      He = function(t) {
        return t[0] === Qr;
      };
      iu = function() {
        return {
          actions: {},
          guards: {},
          services: {},
          activities: {},
          delays: {}
        };
      };
      au = /** @class */
      /* @__PURE__ */ (function() {
        function t(e, n, r2, o) {
          var i2 = this;
          r2 === void 0 && (r2 = "context" in e ? e.context : void 0);
          var a3;
          this.config = e, this._context = r2, this.order = -1, this.__xstatenode = true, this.__cache = {
            events: void 0,
            relativeValue: /* @__PURE__ */ new Map(),
            initialStateValue: void 0,
            initialState: void 0,
            on: void 0,
            transitions: void 0,
            candidates: {},
            delayedTransitions: void 0
          }, this.idMap = {}, this.tags = [], this.options = Object.assign(iu(), n), this.parent = o?.parent, this.key = this.config.key || o?.key || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : Zi), this.id = this.config.id || vt([this.machine.key], rt(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (a3 = this.config.schema) !== null && a3 !== void 0 ? a3 : {}, this.description = this.config.description, this.initial = this.config.initial, this.states = this.config.states ? yn(this.config.states, function(f2, y2) {
            var l2, u2 = new t(f2, {}, void 0, {
              parent: i2,
              key: y2
            });
            return Object.assign(i2.idMap, H((l2 = {}, l2[u2.id] = u2, l2), u2.idMap)), u2;
          }) : De;
          var s = 0;
          function c(f2) {
            var y2, l2;
            f2.order = s++;
            try {
              for (var u2 = Y(Xe(f2)), h2 = u2.next(); !h2.done; h2 = u2.next()) {
                var p2 = h2.value;
                c(p2);
              }
            } catch (v4) {
              y2 = {
                error: v4
              };
            } finally {
              try {
                h2 && !h2.done && (l2 = u2.return) && l2.call(u2);
              } finally {
                if (y2) throw y2.error;
              }
            }
          }
          c(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(f2) {
            var y2 = f2.event;
            return y2 === Wn;
          }) : Wn in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = Ut(this.config.entry || this.config.onEntry).map(function(f2) {
            return Tn(f2);
          }), this.onExit = Ut(this.config.exit || this.config.onExit).map(function(f2) {
            return Tn(f2);
          }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = Ut(this.config.invoke).map(function(f2, y2) {
            var l2, u2;
            if (Ge(f2)) {
              var h2 = Hn(i2.id, y2);
              return i2.machine.options.services = H((l2 = {}, l2[h2] = f2, l2), i2.machine.options.services), Mn({
                src: h2,
                id: h2
              });
            } else if (et(f2.src)) {
              var h2 = f2.id || Hn(i2.id, y2);
              return Mn(H(H({}, f2), {
                id: h2,
                src: f2.src
              }));
            } else if (Ge(f2.src) || st(f2.src)) {
              var h2 = f2.id || Hn(i2.id, y2);
              return i2.machine.options.services = H((u2 = {}, u2[h2] = f2.src, u2), i2.machine.options.services), Mn(H(H({
                id: h2
              }, f2), {
                src: h2
              }));
            } else {
              var p2 = f2.src;
              return Mn(H(H({
                id: Hn(i2.id, y2)
              }, f2), {
                src: p2
              }));
            }
          }), this.activities = Ut(this.config.activities).concat(this.invoke).map(function(f2) {
            return fo(f2);
          }), this.transition = this.transition.bind(this), this.tags = Ut(this.config.tags);
        }
        return t.prototype._init = function() {
          this.__cache.transitions || ca(this).forEach(function(e) {
            return e.on;
          });
        }, t.prototype.withConfig = function(e, n) {
          var r2 = this.options, o = r2.actions, i2 = r2.activities, a3 = r2.guards, s = r2.services, c = r2.delays;
          return new t(this.config, {
            actions: H(H({}, o), e.actions),
            activities: H(H({}, i2), e.activities),
            guards: H(H({}, a3), e.guards),
            services: H(H({}, s), e.services),
            delays: H(H({}, c), e.delays)
          }, n ?? this.context);
        }, t.prototype.withContext = function(e) {
          return new t(this.config, this.options, e);
        }, Object.defineProperty(t.prototype, "context", {
          get: function() {
            return st(this._context) ? this._context() : this._context;
          },
          enumerable: false,
          configurable: true
        }), Object.defineProperty(t.prototype, "definition", {
          /**
           * The well-structured state node definition.
           */
          get: function() {
            return {
              id: this.id,
              key: this.key,
              version: this.version,
              context: this.context,
              type: this.type,
              initial: this.initial,
              history: this.history,
              states: yn(this.states, function(e) {
                return e.definition;
              }),
              on: this.on,
              transitions: this.transitions,
              entry: this.onEntry,
              exit: this.onExit,
              activities: this.activities || [],
              meta: this.meta,
              order: this.order || -1,
              data: this.doneData,
              invoke: this.invoke,
              description: this.description,
              tags: this.tags
            };
          },
          enumerable: false,
          configurable: true
        }), t.prototype.toJSON = function() {
          return this.definition;
        }, Object.defineProperty(t.prototype, "on", {
          /**
           * The mapping of events to transitions.
           */
          get: function() {
            if (this.__cache.on)
              return this.__cache.on;
            var e = this.transitions;
            return this.__cache.on = e.reduce(function(n, r2) {
              return n[r2.eventType] = n[r2.eventType] || [], n[r2.eventType].push(r2), n;
            }, {});
          },
          enumerable: false,
          configurable: true
        }), Object.defineProperty(t.prototype, "after", {
          get: function() {
            return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
          },
          enumerable: false,
          configurable: true
        }), Object.defineProperty(t.prototype, "transitions", {
          /**
           * All the transitions that can be taken from this state node.
           */
          get: function() {
            return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
          },
          enumerable: false,
          configurable: true
        }), t.prototype.getCandidates = function(e) {
          if (this.__cache.candidates[e])
            return this.__cache.candidates[e];
          var n = e === Wn, r2 = this.transitions.filter(function(o) {
            var i2 = o.eventType === e;
            return n ? i2 : i2 || o.eventType === Ar;
          });
          return this.__cache.candidates[e] = r2, r2;
        }, t.prototype.getDelayedTransitions = function() {
          var e = this, n = this.config.after;
          if (!n)
            return [];
          var r2 = function(i2, a3) {
            var s = st(i2) ? "".concat(e.id, ":delay[").concat(a3, "]") : i2, c = $c(s, e.id);
            return e.onEntry.push(Cn(c, {
              delay: i2
            })), e.onExit.push(jc(c)), c;
          }, o = Ye(n) ? n.map(function(i2, a3) {
            var s = r2(i2.delay, a3);
            return H(H({}, i2), {
              event: s
            });
          }) : dt(Object.keys(n).map(function(i2, a3) {
            var s = n[i2], c = et(s) ? {
              target: s
            } : s, f2 = isNaN(+i2) ? i2 : +i2, y2 = r2(f2, a3);
            return Ut(c).map(function(l2) {
              return H(H({}, l2), {
                event: y2,
                delay: f2
              });
            });
          }));
          return o.map(function(i2) {
            var a3 = i2.delay;
            return H(H({}, e.formatTransition(i2)), {
              delay: a3
            });
          });
        }, t.prototype.getStateNodes = function(e) {
          var n, r2 = this;
          if (!e)
            return [];
          var o = e instanceof ee ? e.value : wn(e, this.delimiter);
          if (et(o)) {
            var i2 = this.getStateNode(o).initial;
            return i2 !== void 0 ? this.getStateNodes((n = {}, n[o] = i2, n)) : [this, this.states[o]];
          }
          var a3 = Object.keys(o), s = [this];
          return s.push.apply(s, vt([], rt(dt(a3.map(function(c) {
            return r2.getStateNode(c).getStateNodes(o[c]);
          }))), false)), s;
        }, t.prototype.handles = function(e) {
          var n = Ji(e);
          return this.events.includes(n);
        }, t.prototype.resolveState = function(e) {
          var n = e instanceof ee ? e : ee.create(e), r2 = Array.from(Me([], this.getStateNodes(n.value)));
          return new ee(H(H({}, n), {
            value: this.resolve(n.value),
            configuration: r2,
            done: Sn(r2, this),
            tags: Vo(r2),
            machine: this.machine
          }));
        }, t.prototype.transitionLeafNode = function(e, n, r2) {
          var o = this.getStateNode(e), i2 = o.next(n, r2);
          return !i2 || !i2.transitions.length ? this.next(n, r2) : i2;
        }, t.prototype.transitionCompoundNode = function(e, n, r2) {
          var o = Object.keys(e), i2 = this.getStateNode(o[0]), a3 = i2._transition(e[o[0]], n, r2);
          return !a3 || !a3.transitions.length ? this.next(n, r2) : a3;
        }, t.prototype.transitionParallelNode = function(e, n, r2) {
          var o, i2, a3 = {};
          try {
            for (var s = Y(Object.keys(e)), c = s.next(); !c.done; c = s.next()) {
              var f2 = c.value, y2 = e[f2];
              if (y2) {
                var l2 = this.getStateNode(f2), u2 = l2._transition(y2, n, r2);
                u2 && (a3[f2] = u2);
              }
            }
          } catch (g4) {
            o = {
              error: g4
            };
          } finally {
            try {
              c && !c.done && (i2 = s.return) && i2.call(s);
            } finally {
              if (o) throw o.error;
            }
          }
          var h2 = Object.keys(a3).map(function(g4) {
            return a3[g4];
          }), p2 = dt(h2.map(function(g4) {
            return g4.transitions;
          })), v4 = h2.some(function(g4) {
            return g4.transitions.length > 0;
          });
          if (!v4)
            return this.next(n, r2);
          var b4 = dt(h2.map(function(g4) {
            return g4.entrySet;
          })), E3 = dt(Object.keys(a3).map(function(g4) {
            return a3[g4].configuration;
          }));
          return {
            transitions: p2,
            entrySet: b4,
            exitSet: dt(h2.map(function(g4) {
              return g4.exitSet;
            })),
            configuration: E3,
            source: n,
            actions: dt(Object.keys(a3).map(function(g4) {
              return a3[g4].actions;
            }))
          };
        }, t.prototype._transition = function(e, n, r2) {
          return et(e) ? this.transitionLeafNode(e, n, r2) : Object.keys(e).length === 1 ? this.transitionCompoundNode(e, n, r2) : this.transitionParallelNode(e, n, r2);
        }, t.prototype.getTransitionData = function(e, n) {
          return this._transition(e.value, e, Ct(n));
        }, t.prototype.next = function(e, n) {
          var r2, o, i2 = this, a3 = n.name, s = [], c = [], f2;
          try {
            for (var y2 = Y(this.getCandidates(a3)), l2 = y2.next(); !l2.done; l2 = y2.next()) {
              var u2 = l2.value, h2 = u2.cond, p2 = u2.in, v4 = e.context, b4 = p2 ? et(p2) && He(p2) ? (
                // Check if in state by ID
                e.matches(wn(this.getStateNodeById(p2).path, this.delimiter))
              ) : (
                // Check if in state by relative grandparent
                uo(wn(p2, this.delimiter), bc(this.path.slice(0, -2))(e.value))
              ) : true, E3 = false;
              try {
                E3 = !h2 || na(this.machine, h2, v4, n, e);
              } catch (S2) {
                throw new Error("Unable to evaluate guard '".concat(h2.name || h2.type, "' in transition for event '").concat(a3, "' in state node '").concat(this.id, `':
`).concat(S2.message));
              }
              if (E3 && b4) {
                u2.target !== void 0 && (c = u2.target), s.push.apply(s, vt([], rt(u2.actions), false)), f2 = u2;
                break;
              }
            }
          } catch (S2) {
            r2 = {
              error: S2
            };
          } finally {
            try {
              l2 && !l2.done && (o = y2.return) && o.call(y2);
            } finally {
              if (r2) throw r2.error;
            }
          }
          if (f2) {
            if (!c.length)
              return {
                transitions: [f2],
                entrySet: [],
                exitSet: [],
                configuration: e.value ? [this] : [],
                source: e,
                actions: s
              };
            var g4 = dt(c.map(function(S2) {
              return i2.getRelativeStateNodes(S2, e.historyValue);
            })), w3 = !!f2.internal, k2 = w3 ? [] : dt(g4.map(function(S2) {
              return i2.nodesFromChild(S2);
            }));
            return {
              transitions: [f2],
              entrySet: k2,
              exitSet: w3 ? [] : [this],
              configuration: g4,
              source: e,
              actions: s
            };
          }
        }, t.prototype.nodesFromChild = function(e) {
          if (e.escapes(this))
            return [];
          for (var n = [], r2 = e; r2 && r2 !== this; )
            n.push(r2), r2 = r2.parent;
          return n.push(this), n;
        }, t.prototype.escapes = function(e) {
          if (this === e)
            return false;
          for (var n = this.parent; n; ) {
            if (n === e)
              return false;
            n = n.parent;
          }
          return true;
        }, t.prototype.getActions = function(e, n, r2, o) {
          var i2, a3, s, c, f2 = Me([], o ? this.getStateNodes(o.value) : [this]), y2 = e.configuration.length ? Me(f2, e.configuration) : f2;
          try {
            for (var l2 = Y(y2), u2 = l2.next(); !u2.done; u2 = l2.next()) {
              var h2 = u2.value;
              Xn(f2, h2) || e.entrySet.push(h2);
            }
          } catch (O3) {
            i2 = {
              error: O3
            };
          } finally {
            try {
              u2 && !u2.done && (a3 = l2.return) && a3.call(l2);
            } finally {
              if (i2) throw i2.error;
            }
          }
          try {
            for (var p2 = Y(f2), v4 = p2.next(); !v4.done; v4 = p2.next()) {
              var h2 = v4.value;
              (!Xn(y2, h2) || Xn(e.exitSet, h2.parent)) && e.exitSet.push(h2);
            }
          } catch (O3) {
            s = {
              error: O3
            };
          } finally {
            try {
              v4 && !v4.done && (c = p2.return) && c.call(p2);
            } finally {
              if (s) throw s.error;
            }
          }
          var b4 = dt(e.entrySet.map(function(O3) {
            var C3 = [];
            if (O3.type !== "final")
              return C3;
            var I3 = O3.parent;
            if (!I3.parent)
              return C3;
            C3.push(
              Ln(O3.id, O3.doneData),
              // TODO: deprecate - final states should not emit done events for their own state.
              Ln(I3.id, O3.doneData ? Yn(O3.doneData, n, r2) : void 0)
            );
            var P3 = I3.parent;
            return P3.type === "parallel" && Xe(P3).every(function($4) {
              return Sn(e.configuration, $4);
            }) && C3.push(Ln(P3.id)), C3;
          }));
          e.exitSet.sort(function(O3, C3) {
            return C3.order - O3.order;
          }), e.entrySet.sort(function(O3, C3) {
            return O3.order - C3.order;
          });
          var E3 = new Set(e.entrySet), g4 = new Set(e.exitSet), w3 = rt([dt(Array.from(E3).map(function(O3) {
            return vt(vt([], rt(O3.activities.map(function(C3) {
              return Pc(C3);
            })), false), rt(O3.onEntry), false);
          })).concat(b4.map(oa)), dt(Array.from(g4).map(function(O3) {
            return vt(vt([], rt(O3.onExit), false), rt(O3.activities.map(function(C3) {
              return Dc(C3);
            })), false);
          }))], 2), k2 = w3[0], S2 = w3[1], N3 = er(S2.concat(e.actions).concat(k2), this.machine.options.actions);
          return N3;
        }, t.prototype.transition = function(e, n, r2) {
          e === void 0 && (e = this.initialState);
          var o = Ct(n), i2;
          if (e instanceof ee)
            i2 = r2 === void 0 ? e : this.resolveState(ee.from(e, r2));
          else {
            var a3 = et(e) ? this.resolve(Qn(this.getResolvedPath(e))) : this.resolve(e), s = r2 ?? this.machine.context;
            i2 = this.resolveState(ee.from(a3, s));
          }
          if (this.strict && !this.events.includes(o.name) && !xc(o.name))
            throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(o.name, "'"));
          var c = this._transition(i2.value, i2, o) || {
            transitions: [],
            configuration: [],
            entrySet: [],
            exitSet: [],
            source: i2,
            actions: []
          }, f2 = Me([], this.getStateNodes(i2.value)), y2 = c.configuration.length ? Me(f2, c.configuration) : f2;
          return c.configuration = vt([], rt(y2), false), this.resolveTransition(c, i2, i2.context, o);
        }, t.prototype.resolveRaisedTransition = function(e, n, r2) {
          var o, i2 = e.actions;
          return e = this.transition(e, n), e._event = r2, e.event = r2.data, (o = e.actions).unshift.apply(o, vt([], rt(i2), false)), e;
        }, t.prototype.resolveTransition = function(e, n, r2, o) {
          var i2, a3, s = this;
          o === void 0 && (o = tr);
          var c = e.configuration, f2 = !n || e.transitions.length > 0, y2 = f2 ? qc(this.machine, c) : void 0, l2 = n ? n.historyValue ? n.historyValue : e.source ? this.machine.historyValue(n.value) : void 0 : void 0, u2 = this.getActions(e, r2, o, n), h2 = n ? H({}, n.activities) : {};
          try {
            for (var p2 = Y(u2), v4 = p2.next(); !v4.done; v4 = p2.next()) {
              var b4 = v4.value;
              b4.type === Br ? h2[b4.activity.id || b4.activity.type] = b4 : b4.type === co && (h2[b4.activity.id || b4.activity.type] = false);
            }
          } catch (nt3) {
            i2 = {
              error: nt3
            };
          } finally {
            try {
              v4 && !v4.done && (a3 = p2.return) && a3.call(p2);
            } finally {
              if (i2) throw i2.error;
            }
          }
          var E3 = rt(Kr(this, n, r2, o, u2, this.machine.config.preserveActionOrder), 2), g4 = E3[0], w3 = E3[1], k2 = rt(Yi(g4, function(nt3) {
            return nt3.type === hr || nt3.type === vr && nt3.to === qe.Internal;
          }), 2), S2 = k2[0], N3 = k2[1], O3 = g4.filter(function(nt3) {
            var Z2;
            return nt3.type === Br && ((Z2 = nt3.activity) === null || Z2 === void 0 ? void 0 : Z2.type) === Ur;
          }), C3 = O3.reduce(function(nt3, Z2) {
            return nt3[Z2.activity.id] = Bc(Z2.activity, s.machine, w3, o), nt3;
          }, n ? H({}, n.children) : {}), I3 = f2 ? e.configuration : n ? n.configuration : [], P3 = Sn(I3, this), $4 = new ee({
            value: y2 || n.value,
            context: w3,
            _event: o,
            // Persist _sessionid between states
            _sessionid: n ? n._sessionid : null,
            historyValue: y2 ? l2 ? Sc(l2, y2) : void 0 : n ? n.historyValue : void 0,
            history: !y2 || e.source ? n : void 0,
            actions: y2 ? N3 : [],
            activities: y2 ? h2 : n ? n.activities : {},
            events: [],
            configuration: I3,
            transitions: e.transitions,
            children: C3,
            done: P3,
            tags: Vo(I3),
            machine: this
          }), M4 = r2 !== w3;
          $4.changed = o.name === Ki || M4;
          var U4 = $4.history;
          U4 && delete U4.history;
          var G2 = !P3 && (this._transient || c.some(function(nt3) {
            return nt3._transient;
          }));
          if (!f2 && (!G2 || o.name === Wn))
            return $4;
          var X3 = $4;
          if (!P3)
            for (G2 && (X3 = this.resolveRaisedTransition(X3, {
              type: dc
            }, o)); S2.length; ) {
              var tt2 = S2.shift();
              X3 = this.resolveRaisedTransition(X3, tt2._event, o);
            }
          var ut2 = X3.changed || (U4 ? !!X3.actions.length || M4 || typeof U4.value != typeof X3.value || !la(X3.value, U4.value) : void 0);
          return X3.changed = ut2, X3.history = U4, X3;
        }, t.prototype.getStateNode = function(e) {
          if (He(e))
            return this.machine.getStateNodeById(e);
          if (!this.states)
            throw new Error("Unable to retrieve child state '".concat(e, "' from '").concat(this.id, "'; no child states exist."));
          var n = this.states[e];
          if (!n)
            throw new Error("Child state '".concat(e, "' does not exist on '").concat(this.id, "'"));
          return n;
        }, t.prototype.getStateNodeById = function(e) {
          var n = He(e) ? e.slice(Qr.length) : e;
          if (n === this.id)
            return this;
          var r2 = this.machine.idMap[n];
          if (!r2)
            throw new Error("Child state node '#".concat(n, "' does not exist on machine '").concat(this.id, "'"));
          return r2;
        }, t.prototype.getStateNodeByPath = function(e) {
          if (typeof e == "string" && He(e))
            try {
              return this.getStateNodeById(e.slice(1));
            } catch {
            }
          for (var n = qr(e, this.delimiter).slice(), r2 = this; n.length; ) {
            var o = n.shift();
            if (!o.length)
              break;
            r2 = r2.getStateNode(o);
          }
          return r2;
        }, t.prototype.resolve = function(e) {
          var n, r2 = this;
          if (!e)
            return this.initialStateValue || De;
          switch (this.type) {
            case "parallel":
              return yn(this.initialStateValue, function(i2, a3) {
                return i2 ? r2.getStateNode(a3).resolve(e[a3] || i2) : De;
              });
            case "compound":
              if (et(e)) {
                var o = this.getStateNode(e);
                return o.type === "parallel" || o.type === "compound" ? (n = {}, n[e] = o.initialStateValue, n) : e;
              }
              return Object.keys(e).length ? yn(e, function(i2, a3) {
                return i2 ? r2.getStateNode(a3).resolve(i2) : De;
              }) : this.initialStateValue || {};
            default:
              return e || De;
          }
        }, t.prototype.getResolvedPath = function(e) {
          if (He(e)) {
            var n = this.machine.idMap[e.slice(Qr.length)];
            if (!n)
              throw new Error("Unable to find state node '".concat(e, "'"));
            return n.path;
          }
          return qr(e, this.delimiter);
        }, Object.defineProperty(t.prototype, "initialStateValue", {
          get: function() {
            var e;
            if (this.__cache.initialStateValue)
              return this.__cache.initialStateValue;
            var n;
            if (this.type === "parallel")
              n = Bo(this.states, function(r2) {
                return r2.initialStateValue || De;
              }, function(r2) {
                return r2.type !== "history";
              });
            else if (this.initial !== void 0) {
              if (!this.states[this.initial])
                throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
              n = rr(this.states[this.initial]) ? this.initial : (e = {}, e[this.initial] = this.states[this.initial].initialStateValue, e);
            } else
              n = {};
            return this.__cache.initialStateValue = n, this.__cache.initialStateValue;
          },
          enumerable: false,
          configurable: true
        }), t.prototype.getInitialState = function(e, n) {
          this._init();
          var r2 = this.getStateNodes(e);
          return this.resolveTransition({
            configuration: r2,
            entrySet: r2,
            exitSet: [],
            transitions: [],
            source: void 0,
            actions: []
          }, void 0, n ?? this.machine.context, void 0);
        }, Object.defineProperty(t.prototype, "initialState", {
          /**
           * The initial State instance, which includes all actions to be executed from
           * entering the initial state.
           */
          get: function() {
            var e = this.initialStateValue;
            if (!e)
              throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
            return this.getInitialState(e);
          },
          enumerable: false,
          configurable: true
        }), Object.defineProperty(t.prototype, "target", {
          /**
           * The target state value of the history state node, if it exists. This represents the
           * default state value to transition to if no history value exists yet.
           */
          get: function() {
            var e;
            if (this.type === "history") {
              var n = this.config;
              et(n.target) ? e = He(n.target) ? Qn(this.machine.getStateNodeById(n.target).path.slice(this.path.length - 1)) : n.target : e = n.target;
            }
            return e;
          },
          enumerable: false,
          configurable: true
        }), t.prototype.getRelativeStateNodes = function(e, n, r2) {
          return r2 === void 0 && (r2 = true), r2 ? e.type === "history" ? e.resolveHistory(n) : e.initialStateNodes : [e];
        }, Object.defineProperty(t.prototype, "initialStateNodes", {
          get: function() {
            var e = this;
            if (rr(this))
              return [this];
            if (this.type === "compound" && !this.initial)
              return [this];
            var n = qn(this.initialStateValue);
            return dt(n.map(function(r2) {
              return e.getFromRelativePath(r2);
            }));
          },
          enumerable: false,
          configurable: true
        }), t.prototype.getFromRelativePath = function(e) {
          if (!e.length)
            return [this];
          var n = rt(e), r2 = n[0], o = n.slice(1);
          if (!this.states)
            throw new Error("Cannot retrieve subPath '".concat(r2, "' from node with no states"));
          var i2 = this.getStateNode(r2);
          if (i2.type === "history")
            return i2.resolveHistory();
          if (!this.states[r2])
            throw new Error("Child state '".concat(r2, "' does not exist on '").concat(this.id, "'"));
          return this.states[r2].getFromRelativePath(o);
        }, t.prototype.historyValue = function(e) {
          if (Object.keys(this.states).length)
            return {
              current: e || this.initialStateValue,
              states: Bo(this.states, function(n, r2) {
                if (!e)
                  return n.historyValue();
                var o = et(e) ? void 0 : e[r2];
                return n.historyValue(o || n.initialStateValue);
              }, function(n) {
                return !n.history;
              })
            };
        }, t.prototype.resolveHistory = function(e) {
          var n = this;
          if (this.type !== "history")
            return [this];
          var r2 = this.parent;
          if (!e) {
            var o = this.target;
            return o ? dt(qn(o).map(function(a3) {
              return r2.getFromRelativePath(a3);
            })) : r2.initialStateNodes;
          }
          var i2 = Ec(r2.path, "states")(e).current;
          return et(i2) ? [r2.getStateNode(i2)] : dt(qn(i2).map(function(a3) {
            return n.history === "deep" ? r2.getFromRelativePath(a3) : [r2.states[a3[0]]];
          }));
        }, Object.defineProperty(t.prototype, "stateIds", {
          /**
           * All the state node IDs of this state node and its descendant state nodes.
           */
          get: function() {
            var e = this, n = dt(Object.keys(this.states).map(function(r2) {
              return e.states[r2].stateIds;
            }));
            return [this.id].concat(n);
          },
          enumerable: false,
          configurable: true
        }), Object.defineProperty(t.prototype, "events", {
          /**
           * All the event types accepted by this state node and its descendants.
           */
          get: function() {
            var e, n, r2, o;
            if (this.__cache.events)
              return this.__cache.events;
            var i2 = this.states, a3 = new Set(this.ownEvents);
            if (i2)
              try {
                for (var s = Y(Object.keys(i2)), c = s.next(); !c.done; c = s.next()) {
                  var f2 = c.value, y2 = i2[f2];
                  if (y2.states)
                    try {
                      for (var l2 = (r2 = void 0, Y(y2.events)), u2 = l2.next(); !u2.done; u2 = l2.next()) {
                        var h2 = u2.value;
                        a3.add("".concat(h2));
                      }
                    } catch (p2) {
                      r2 = {
                        error: p2
                      };
                    } finally {
                      try {
                        u2 && !u2.done && (o = l2.return) && o.call(l2);
                      } finally {
                        if (r2) throw r2.error;
                      }
                    }
                }
              } catch (p2) {
                e = {
                  error: p2
                };
              } finally {
                try {
                  c && !c.done && (n = s.return) && n.call(s);
                } finally {
                  if (e) throw e.error;
                }
              }
            return this.__cache.events = Array.from(a3);
          },
          enumerable: false,
          configurable: true
        }), Object.defineProperty(t.prototype, "ownEvents", {
          /**
           * All the events that have transitions directly from this state node.
           *
           * Excludes any inert events.
           */
          get: function() {
            var e = new Set(this.transitions.filter(function(n) {
              return !(!n.target && !n.actions.length && n.internal);
            }).map(function(n) {
              return n.eventType;
            }));
            return Array.from(e);
          },
          enumerable: false,
          configurable: true
        }), t.prototype.resolveTarget = function(e) {
          var n = this;
          if (e !== void 0)
            return e.map(function(r2) {
              if (!et(r2))
                return r2;
              var o = r2[0] === n.delimiter;
              if (o && !n.parent)
                return n.getStateNodeByPath(r2.slice(1));
              var i2 = o ? n.key + r2 : r2;
              if (n.parent)
                try {
                  var a3 = n.parent.getStateNodeByPath(i2);
                  return a3;
                } catch (s) {
                  throw new Error("Invalid transition definition for state node '".concat(n.id, `':
`).concat(s.message));
                }
              else
                return n.getStateNodeByPath(i2);
            });
        }, t.prototype.formatTransition = function(e) {
          var n = this, r2 = Cc(e.target), o = "internal" in e ? e.internal : r2 ? r2.some(function(c) {
            return et(c) && c[0] === n.delimiter;
          }) : true, i2 = this.machine.options.guards, a3 = this.resolveTarget(r2), s = H(H({}, e), {
            actions: er(Ut(e.actions)),
            cond: ea(e.cond, i2),
            target: a3,
            source: this,
            internal: o,
            eventType: e.event,
            toJSON: function() {
              return H(H({}, s), {
                target: s.target ? s.target.map(function(c) {
                  return "#".concat(c.id);
                }) : void 0,
                source: "#".concat(n.id)
              });
            }
          });
          return s;
        }, t.prototype.formatTransitions = function() {
          var e, n, r2 = this, o;
          if (!this.config.on)
            o = [];
          else if (Array.isArray(this.config.on))
            o = this.config.on;
          else {
            var i2 = this.config.on, a3 = Ar, s = i2[a3], c = s === void 0 ? [] : s, f2 = so(i2, [typeof a3 == "symbol" ? a3 : a3 + ""]);
            o = dt(Object.keys(f2).map(function(g4) {
              var w3 = Pe(g4, f2[g4]);
              return w3;
            }).concat(Pe(Ar, c)));
          }
          var y2 = this.config.always ? Pe("", this.config.always) : [], l2 = this.config.onDone ? Pe(String(Ln(this.id)), this.config.onDone) : [], u2 = dt(this.invoke.map(function(g4) {
            var w3 = [];
            return g4.onDone && w3.push.apply(w3, vt([], rt(Pe(String(Gn(g4.id)), g4.onDone)), false)), g4.onError && w3.push.apply(w3, vt([], rt(Pe(String(mn(g4.id)), g4.onError)), false)), w3;
          })), h2 = this.after, p2 = dt(vt(vt(vt(vt([], rt(l2), false), rt(u2), false), rt(o), false), rt(y2), false).map(function(g4) {
            return Ut(g4).map(function(w3) {
              return r2.formatTransition(w3);
            });
          }));
          try {
            for (var v4 = Y(h2), b4 = v4.next(); !b4.done; b4 = v4.next()) {
              var E3 = b4.value;
              p2.push(E3);
            }
          } catch (g4) {
            e = {
              error: g4
            };
          } finally {
            try {
              b4 && !b4.done && (n = v4.return) && n.call(v4);
            } finally {
              if (e) throw e.error;
            }
          }
          return p2;
        }, t;
      })();
      yt = Lc;
      ho = Cn;
      Vt = Nc;
      Le = Wc;
      Wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
      Yr = { exports: {} };
      cu = Yr.exports;
      lu = uu();
      fu = /* @__PURE__ */ Oe(lu);
      Fe = Object.prototype.hasOwnProperty;
      jt = {};
      jt.set = function(t, e, n, r2) {
        return Zt(n) ? r2 : oe(t, e, n, function(o, i2) {
          return o[i2] = r2, o;
        });
      };
      jt.update = function(t, e, n, r2) {
        return Zt(n) ? r2(or(e)) : oe(t, e, n, function(o, i2) {
          return o[i2] = r2(o[i2]), o;
        });
      };
      jt.push = function(t, e, n) {
        var r2 = Array.prototype.slice.call(arguments, 3);
        return Zt(n) ? Ke(e) ? e.concat(r2) : r2 : oe(t, e, n, function(o, i2) {
          return Ke(o[i2]) ? o[i2] = o[i2].concat(r2) : o[i2] = r2, o;
        });
      };
      jt.insert = function(t, e, n, r2, o) {
        if (o = ~~o, Zt(n)) {
          if (!Ke(e))
            return [r2];
          var i2 = e.slice(0, o);
          return i2.push(r2), i2.concat(e.slice(o));
        }
        return oe(t, e, n, function(a3, s) {
          var c = a3[s];
          if (!Ke(c)) {
            if (c != null && typeof c < "u")
              throw new Error("Expected " + n + "to be an array. Instead got " + typeof n);
            c = [];
          }
          var f2 = c.slice(0, o);
          return f2.push(r2), a3[s] = f2.concat(c.slice(o)), a3;
        });
      };
      jt.del = function(t, e, n) {
        if (!Zt(n))
          return oe(t, e, n, function(r2, o) {
            return Array.isArray(r2) ? r2[o] !== void 0 && r2.splice(o, 1) : Fe.call(r2, o) && delete r2[o], r2;
          });
      };
      jt.assign = function(t, e, n, r2) {
        return Zt(n) ? Zt(r2) ? e : eo(or(e), r2) : oe(t, e, n, function(o, i2) {
          r2 = Object(r2);
          var a3 = or(o[i2], true);
          return eo(a3, r2), o[i2] = a3, o;
        });
      };
      jt.merge = function(t, e, n, r2) {
        return Zt(n) ? Zt(r2) ? e : ir(e, r2) : oe(t, e, n, function(o, i2) {
          return r2 = Object(r2), o[i2] = ir(o[i2], r2), o;
        });
      };
      pu = jt.set.bind(null, null);
      Kn = jt.update.bind(null, null);
      jt.push.bind(null, null);
      jt.insert.bind(null, null);
      jt.del.bind(null, null);
      jt.assign.bind(null, null);
      jt.merge.bind(null, null);
      hu = fu.get;
      vu = new Uint8Array(16);
      yu = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      _t = [];
      for (Nr2 = 0; Nr2 < 256; ++Nr2)
        _t.push((Nr2 + 256).toString(16).substr(1));
      Zn = { exports: {} };
      Zn.exports;
      wu = xu();
      En = /* @__PURE__ */ Oe(wu);
      Su = "EXPERIENCE_STARTED";
      Jo = "SHOW";
      Be = "STOP_EXPERIENCE";
      Ce = {
        NAVIGATION: "navigation",
        DISMISSED: "dismissed"
      };
      _u = "EXTENDED_EVENT";
      ha = "START_STEP";
      vo = "STOP_STEP";
      va = "UPDATE_STEP";
      ga = "SET_STEP_CONTAINER_TARGET";
      ya = "UPDATE_STEP_CONTENT";
      Tu = "RECOVER_STEP";
      ku = "AUTO_RECOVER_STEP";
      Ru = "PARENT_RECOVER_STEP";
      Cu = "ERROR";
      Ou = "STEP_INTERACTION";
      Au = "STEP_SEEN";
      ma = "UPDATE_ROOT_STYLE";
      Nu = "RELOAD";
      ba = "STEP_STOPPED";
      Iu = "EXPERIENCE_DISMISSED";
      ju = "EXPERIENCE_SNOOZED";
      Pu = "FORWARD_TO_PARENT";
      Du = "ACTIONS_STARTED";
      Hu = "ACTIONS_FINISHED";
      Lu = "experience.begin";
      $u = "experience.end";
      go = "step.begin";
      Ea = "step.prerender";
      xa = "step.postrender";
      ar = "step.end";
      wa = "step.error";
      Sa = "step.container_change";
      _a = "RUN_HOOKS";
      Mu = "RUN_HOOKS_DONE";
      yo = "START_THEME_REMOVAL_LISTENER";
      Ta = "STOP_THEME_REMOVAL_LISTENER";
      Wu = "GLOBAL_CONTAINER_REMOVED";
      mo = "STEP_CONTAINER_REMOVED";
      _n = "appcues-experience-container";
      yr = "APPCUES-EXPERIENCE-CONTAINER";
      mr = "APPCUES-EXPERIENCE-CONTAINER-BUILDER";
      ka = "data-appcues-container-id";
      bo = "RUN_TRAITS_DONE";
      Ra = "RUN_TRAITS_ERROR";
      Fu = "BIND_ACTIONS_ERROR";
      Bu = () => {
        const t = /* @__PURE__ */ new Map(), e = (r2) => {
          const { observerInstance: o } = t.get(r2);
          if (o) return;
          const i2 = { childList: true, subtree: true }, a3 = (...f2) => {
            const { callbacks: y2 } = t.get(r2);
            y2.forEach((l2) => l2(...f2));
          }, s = new MutationObserver(a3);
          s.observe(r2, i2);
          const { callbacks: c } = t.get(r2);
          t.set(r2, {
            callbacks: c,
            observerInstance: s
          });
        }, n = (r2, o) => {
          const i2 = t.get(r2);
          if (i2) {
            const { callbacks: a3, observerInstance: s } = i2, c = a3.filter((f2) => f2 !== o);
            if (c.length > 0) {
              t.set(r2, {
                callbacks: c,
                observerInstance: s
              });
              return;
            }
            s.disconnect(), t.delete(r2);
          }
        };
        return (r2, o) => {
          const { callbacks: i2 = [], observerInstance: a3 = null } = t.get(r2) ?? {};
          return t.set(r2, {
            observerInstance: a3,
            callbacks: [...i2, o]
          }), e(r2), () => n(r2, o);
        };
      };
      We = Bu();
      zu = (t, ...e) => {
        e.forEach(
          (n) => t.addEventListener(n, (r2) => {
            r2.stopPropagation();
          })
        );
      };
      Qo = "|shadow-root|";
      Yo = "|iframe|";
      Ze = (t, e) => t.includes(Qo) || t.includes(Yo) ? t.split(Qo).flatMap((n) => n.split(Yo)).reduce((n, r2) => n === null ? [...e.querySelectorAll(r2)] : n.flatMap((o) => o.shadowRoot ? [...o.shadowRoot.querySelectorAll(r2)] : o.tagName === "IFRAME" ? [...o.contentDocument.querySelectorAll(r2)] : []), null) ?? [] : e.querySelectorAll(t);
      Uu = (t, e) => {
        const n = Ze(t, e);
        return n.length > 0 ? n[0] : null;
      };
      Ae = (t) => `appcues-container-${t}`;
      ti = (t, e, n) => {
        try {
          if (t.contentDocument && t.contentDocument.body && t.contentDocument.body.children.length > 0) {
            if (n()) return;
            e(t.contentDocument.body);
          } else {
            const r2 = () => {
              try {
                const o = t.contentDocument;
                if (!o || !o.body || n()) return;
                e(o.body);
              } catch {
              }
            };
            t.addEventListener("load", r2, { once: true });
          }
        } catch {
        }
      };
      Vu = (t, e) => {
        t.forEach((n) => {
          n.type === "childList" && n.addedNodes.forEach((r2) => {
            r2.nodeType === 1 && r2.tagName === "IFRAME" && e(r2);
          });
        });
      };
      qu = ({
        getTarget: t,
        onInserted: e,
        getWindowReference: n
      }) => {
        const r2 = n().document;
        let o = [];
        const i2 = () => {
          o.forEach((u2) => u2()), o = [];
        }, a3 = () => {
          const u2 = t();
          return u2.length === 1 ? (e(u2[0]), i2(), true) : false;
        };
        if (a3())
          return () => {
          };
        const s = (u2) => {
          u2.some((h2) => h2.addedNodes.length > 0) && (Vu(u2, (h2) => {
            ti(
              h2,
              (p2) => o.push(We(p2, s)),
              a3
            );
          }), a3());
        };
        o.push(We(r2.body, s));
        let c;
        const f2 = r2.createNodeIterator(
          r2.body,
          NodeFilter.SHOW_ELEMENT,
          (u2) => u2.shadowRoot && u2.nodeName !== yr && u2.nodeName !== mr ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
        );
        for (; (c = f2.nextNode()) !== null; )
          o.push(We(c.shadowRoot, s));
        let y2;
        const l2 = r2.createNodeIterator(
          r2.body,
          NodeFilter.SHOW_ELEMENT,
          (u2) => u2.tagName === "IFRAME" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
        );
        for (; (y2 = l2.nextNode()) !== null; )
          ti(
            y2,
            // eslint-disable-next-line no-loop-func
            (u2) => o.push(We(u2, s)),
            a3
          );
        return () => i2();
      };
      Eo = ({
        getTarget: t,
        onRemoved: e,
        getWindowReference: n
      }) => {
        const r2 = n().document;
        let [o] = t(), i2;
        const a3 = (s) => {
          if (!s.some((y2) => y2.removedNodes.length > 0))
            return;
          const c = t(), f2 = o ? c[0] !== o : false;
          [o] = c, (c.length === 0 || f2 || !o.isConnected) && (e(), i2());
        };
        return i2 = o && o.getRootNode().nodeType === Node.DOCUMENT_FRAGMENT_NODE ? We(o.getRootNode(), a3) : We(r2.body, a3), () => i2();
      };
      Gu = (t) => {
        let e = 0;
        for (let n = 0; n < t.length && !(t[n].nodeName !== yr || t[n].nodeName !== mr); n++)
          e = n;
        return t.slice(e + 1);
      };
      Xu = (t, e = document) => {
        try {
          const n = /^((body\s(>?\s?))?)(?<tagName>[\da-z]+):nth-child\((?<index>\d+)\)(?<remainingSelector>.*)/i, r2 = t.match(n), o = e.body.firstChild?.nodeName === yr || e.body.firstChild?.nodeName === mr;
          if (!r2 || !o) return [];
          const { tagName: i2, index: a3, remainingSelector: s } = r2.groups, c = Number.parseInt(a3, 10) - 1, f2 = Gu([
            ...e.body.children
          ]), y2 = f2[c]?.nodeName === i2.toUpperCase() ? f2[c] : null;
          return s ? (
            // adding * here to the string because
            // the remaining selector can be something like
            // > p:nth-of-type(1).
            // But selectors starting with > without a parent sentence first or *
            // would fail, because it is not a valid css selector.
            // * means the parentElement, which is the element
            // we are applying the querySelectorAll.
            y2 ? Ze(`* ${s}`, y2) : []
          ) : [y2];
        } catch {
          return [];
        }
      };
      Ca = (t, { step: e, stepContainer: n, checkOutsideContainer: r2, getWindowReference: o }) => {
        const i2 = Ae(e.id);
        let a3 = [];
        if (r2) {
          const c = o().document, f2 = Xu(t, c), y2 = f2.length > 0 ? f2 : Ze(t, c.documentElement);
          y2.length > 0 && (a3 = [...a3, ...y2]);
        }
        if (!n)
          return a3;
        let s = Uu(
          `[${ka}=${i2}]`,
          n
        );
        return s && (s = Ze(t, s)), s = s ?? [], s.length > 0 && (a3 = [...a3, ...s]), a3;
      };
      Oa = ({
        accountId: t,
        id: e,
        theme: n,
        getWindowReference: r2
      }) => {
        const o = r2().document.createElement(_n);
        return n && o.setAttribute("themeId", n), o.setAttribute("accountId", t), o.setAttribute("id", Ae(e)), zu(o, "keypress", "keydown", "keyup"), o;
      };
      Ku = (t) => ({ experience: e }) => {
        const { theme: n, accountId: r2, id: o } = e;
        if (!r2) return;
        const i2 = t("getWindowReference"), a3 = i2().document, s = Oa({
          accountId: r2,
          id: o,
          theme: n,
          getWindowReference: i2
        });
        a3.body.append(s);
      };
      Zu = (t) => ({ experience: e }) => {
        const n = t("getWindowReference")().document, r2 = Ae(e.id);
        Ze(
          `#${r2}`,
          n.documentElement
        ).forEach((o) => n.body.removeChild(o));
      };
      Ju = ({ getRoot: t }) => {
        const e = t();
        e.parentElement && e.parentElement.removeChild(e);
      };
      Qu = ({ getRoot: t }) => ia([
        {
          cond: "hasCustomContainer",
          actions: [
            () => {
              Ju({ getRoot: t });
            }
          ]
        }
      ]);
      Yu = (t) => ({ experience: e }) => (n, r2) => {
        r2(({ type: o }) => {
          if (o !== yo) return;
          const i2 = t("getWindowReference"), a3 = i2().document, s = Ae(e.id);
          Eo({
            getTarget: () => Ze(
              `#${s}`,
              a3.documentElement
            ),
            onRemoved: () => {
              n(Wu);
            },
            getWindowReference: i2
          });
        });
      };
      tl = ({ getRoot: t, getWindowReference: e }) => () => (
        // eslint-disable-next-line unicorn/consistent-function-scoping
        ((n, r2) => {
          let o;
          r2(({ type: i2 }) => {
            if (i2 === Ta && o) {
              o();
              return;
            }
            i2 === yo && (o && o(), o = Eo({
              getTarget: () => [t()],
              onRemoved: () => {
                n(mo);
              },
              getWindowReference: e
            }));
          });
        })
      );
      Aa = ho(yo, {
        to: "themeRemovalService"
      });
      el = ho(Ta, {
        to: "themeRemovalService"
      });
      ei = { exports: {} };
      rl = nl();
      ol = /* @__PURE__ */ Oe(rl);
      Bn = { exports: {} };
      al = il();
      sl = /* @__PURE__ */ Oe(al);
      cl = window.AppcuesBundleSettings?.VERSION === "dev" ? "https://fast.appcues.com/v1" : window.AppcuesBundleSettings?.GENERIC_BUNDLE_DOMAIN ? `${window.AppcuesBundleSettings.GENERIC_BUNDLE_DOMAIN}/v1` : "https://fast.appcues.com/v1";
      ul = 9999;
      no = {
        fastBaseUrl: null
        // null means use default
      };
      ll = (t = {}) => {
        no = { ...no, ...t };
      };
      fl = () => no.fastBaseUrl ?? cl;
      dl = sl((t, e) => {
        const n = fl();
        return fetch(`${n}/accounts/${e}/styles/${t}`).then(
          (r2) => r2.json()
        );
      });
      pl = (t, e) => {
        const n = {
          classes: false
        };
        e != null && (n.custom = {
          urls: [e.general.headerFontUrl, e.general.bodyFontUrl]
        }), t && (n.typekit = {
          id: t
        }), Object.keys(n).length > 1 && ol.load(n);
      };
      oi = (t, e, n) => {
        if (!t) return;
        const r2 = (n.ownerDocument || document).createElement("style");
        r2.innerHTML = `${t}`, e && r2.classList.add(`theme-${e}`), n.shadowRoot.prepend(r2);
      };
      Na = async (t) => {
        const e = t.getAttribute("themeId"), n = t.getAttribute("accountId"), r2 = await dl(e, n).catch(() => {
        }), { globalStyling: o, theme: i2, typekitId: a3 } = r2 ?? {
          globalStyling: "",
          theme: {},
          typekitId: ""
        }, s = i2?.json?.typekitId ?? a3;
        pl(s, i2?.json), oi(i2?.css, e, t), oi(o, e, t);
      };
      hl = async (t, e) => {
        await Na(t), e && t.shadowRoot.querySelectorAll(
          `.theme-${e}`
        ).forEach((n) => n.remove());
      };
      vl = yt({
        step: ({ step: t }, e) => ({
          ...t,
          virtualizedContent: e.virtualizedContent
        })
      });
      gl = (t) => yt({
        step: (e, n) => ({
          stepConfig: n.stepConfig,
          virtualizedContent: t(n.stepConfig)
        })
      });
      yl = yt({
        experience: (t, e) => e.experience,
        step: ({ step: t }, e) => ({
          ...t,
          ...e.stepConfig
        })
      });
      ml = Vt(Su);
      bl = Vt(({ step: t }) => ({
        type: ba,
        id: t.id
      }));
      El = (t, { styles: e, getRoot: n }) => {
        const r2 = n();
        r2 && Object.entries(e).forEach(([o, i2]) => {
          o.startsWith("--") ? r2.style.setProperty(o, i2) : r2.style[o] = i2;
        });
      };
      xl = (t) => (e) => {
        const { theme: n, id: r2 } = e.experience;
        if (!n) return;
        const o = t("getWindowReference")().document.documentElement.querySelector(
          `#${Ae(r2)}`
        ), i2 = o.getAttribute("themeId");
        o?.setAttribute("themeId", n), hl(o, i2);
      };
      wl = (t) => yt({
        step: ({ step: e }) => {
          if (e.type !== "tooltip") return e;
          const n = Object.entries(e.actions).filter(
            ([, o]) => o.find((i2) => i2.on === "click")
          ).map(([o]) => o), r2 = e.traits.filter(({ config: o }) => o.targetId).map(({ config: o }) => o.targetId);
          return {
            ...e,
            virtualizedContent: t(e, {
              interactiveEls: n,
              focusableEls: r2
            })
          };
        }
      });
      Sl = ia([
        {
          cond: (t, e) => e.errorEvent?.type === mo,
          actions: [
            oa({
              type: ku,
              isAutoRecoverEvent: true
            })
          ]
        }
      ]);
      _l = yt({
        actionsRunning: true
      });
      Tl = yt({
        actionsRunning: false
      });
      kl = (t, e) => {
        const n = e.changedExperienceTraits && e.changedExperienceTraits.changedTraits.length > 0, r2 = e.changedExperienceTraits && (e.changedExperienceTraits.addedTraits.length > 0 || e.changedExperienceTraits.removedTraits.length > 0), o = e.changedStepTraits && e.changedStepTraits.changedTraits.length > 0, i2 = e.changedStepTraits && (e.changedStepTraits.addedTraits.length > 0 || e.changedStepTraits.removedTraits.length > 0);
        return r2 || i2 ? false : !!(n || o);
      };
      Rl = "Key name should be string and callback a valid function";
      Ia = () => {
        const t = /* @__PURE__ */ new Map(), e = (n) => t.get(n);
        return {
          getCallback: e,
          registerCallback: (n, r2) => {
            if (e(n), typeof n != "string" || typeof r2 != "function")
              throw new TypeError(Rl);
            t.set(n, r2);
          }
        };
      };
      ja = ({ getTrait: t, trait: e, ...n }) => {
        const r2 = t(e.type);
        r2 && r2(n, e.config ?? {});
      };
      ({ getCallback: Pa, registerCallback: Tt } = Ia());
      Cl = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
      Ol = ({
        experience: t,
        callback: e,
        step: n,
        findId: r2,
        getContainer: o,
        getWindowReference: i2
      }) => {
        const a3 = (c, { forwardToParent: f2 = false } = {}) => {
          const y2 = ({ type: l2, ...u2 }) => e(f2 ? {
            ...u2,
            eventType: l2,
            type: Pu
          } : { type: l2, ...u2 });
          return {
            querySelector: (l2) => Ca(l2, {
              step: n,
              checkOutsideContainer: false,
              stepContainer: o(),
              getWindowReference: i2
            }),
            start: () => y2({
              type: ha,
              id: c.id
            }),
            stop: () => y2({
              type: vo,
              id: c.id
            }),
            setStepContainerTarget: (l2) => {
              y2({
                type: ga,
                id: c.id,
                container: l2
              });
            },
            recover: ({ errorId: l2 }) => {
              y2({
                type: Tu,
                id: c.id,
                errorId: l2
              });
            },
            dismissExperience: () => y2({
              type: Iu
            }),
            snoozeExperience: () => y2({
              type: ju
            }),
            seen: () => y2({
              type: Au,
              id: c.id
            }),
            getConfig: () => c,
            interaction: (l2, u2) => y2({
              type: Ou,
              id: c.id,
              interactionType: l2,
              interactionData: u2
            }),
            extendedEvent: (l2, u2) => y2({
              type: _u,
              id: c.id,
              name: l2,
              ...u2
            })
          };
        }, s = t.steps.map(
          (c) => a3(c, { forwardToParent: !!n })
        );
        return n ? {
          getRootNodeId: () => r2(n.virtualizedContent),
          steps: s,
          step: a3(n, { forwardToParent: false })
        } : {
          getRootNodeId: () => r2(n.virtualizedContent),
          steps: s
        };
      };
      Da = ({
        experience: t,
        step: e,
        overrideStyle: n,
        getContainer: r2,
        getRoot: o,
        callback: i2,
        get: a3,
        getAction: s = () => null
      }) => {
        const { findId: c } = a3("vNodeHandlers"), f2 = a3("getWindowReference"), y2 = Ol({
          experience: t,
          step: e,
          callback: i2,
          findId: c,
          getContainer: r2,
          getWindowReference: f2
        }), l2 = {
          querySelector: (u2) => Ca(u2, {
            step: e,
            checkOutsideContainer: true,
            stepContainer: r2(),
            getWindowReference: f2
          }),
          reportError: (u2) => {
            const h2 = Cl();
            return i2({
              type: Cu,
              message: u2,
              errorId: h2
            }), h2;
          },
          onElementInserted: (u2) => qu({ ...u2, getWindowReference: f2 }),
          onElementRemoved: (u2) => Eo({ ...u2, getWindowReference: f2 }),
          ...y2,
          stopExperience: () => i2(Be),
          getExperienceId: () => t.id,
          getWindowReference: f2,
          sendEvent: a3("sendEvent"),
          sendCustomEvent: a3("sendCustomEvent"),
          showFlow: a3("showFlow"),
          updateUserProfile: a3("updateUserProfile"),
          getAction: (u2) => s(`${t.id}.${u2}`) ?? s(`${e.id}.${u2}`) ?? s(u2)
        };
        return n ? {
          updateStyle: (u2, h2) => {
            n(u2, h2), i2({
              type: va,
              id: e.id
            });
          },
          updateRootStyle: (u2, h2 = {}) => {
            i2({
              type: ma,
              styles: u2,
              options: h2,
              getRoot: o
            });
          },
          ...l2
        } : l2;
      };
      ii = "formData.";
      Al = (t, e) => {
        if (e.startsWith(ii)) {
          const n = e.replace(ii, "");
          return new FormData(t.target).get(n);
        }
        return hu(t, e);
      };
      ({ getCallback: xn, registerCallback: ae } = Ia());
      Nl = (t, e, n) => {
        const r2 = {
          target: e.target,
          detail: e.detail
        };
        return Object.entries(t).reduce(
          (o, [i2, a3]) => {
            const s = Al(r2, i2);
            return s ? pu(o, a3, s) : o;
          },
          n
        );
      };
      Il = ({ overrideStyle: t, getContainer: e }, n) => ({ experience: r2, step: o }) => (i2, a3) => {
        a3(({ type: s }) => {
          if (s === bo)
            try {
              const { findId: c, traverseTree: f2, injectHandlers: y2 } = n("vNodeHandlers"), l2 = JSON.parse(
                JSON.stringify(o.virtualizedContent)
              );
              f2(l2, (u2) => {
                const h2 = c(u2);
                if (!o.actions[h2]) return;
                const p2 = {}, v4 = (E3, g4) => {
                  i2({
                    type: Du
                  });
                  const w3 = Da({
                    experience: r2,
                    step: o,
                    overrideStyle: t,
                    getContainer: e,
                    callback: i2,
                    get: n,
                    getAction: xn
                  });
                  try {
                    p2[E3].forEach(([k2, S2, N3]) => {
                      if (N3 && g4) {
                        const O3 = {
                          ...S2,
                          ...Nl(
                            N3,
                            g4,
                            S2
                          )
                        };
                        k2(O3, w3);
                      } else
                        k2(S2, w3);
                    });
                  } catch {
                    w3.reportError(
                      "something bad happened while running an action."
                    );
                  } finally {
                    i2({
                      type: Hu
                    });
                  }
                }, b4 = o.actions[h2].reduce(
                  (E3, { on: g4, type: w3, config: k2, allowedKeys: S2, mapEventToConfig: N3 }) => {
                    const O3 = xn(`${r2.id}.${w3}`) ?? xn(`${o.id}.${w3}`) ?? xn(w3);
                    return p2[g4] || (p2[g4] = []), O3 && p2[g4].push([O3, k2, N3]), g4.startsWith("hooks/") ? E3.hook[g4.replace("hooks/", "")] = () => v4(g4) : E3.on[g4] = (C3) => {
                      S2 && !S2.includes(C3.code) || (C3.preventDefault(), C3.stopPropagation(), v4(g4, C3));
                    }, E3;
                  },
                  {
                    on: {},
                    hook: {}
                  }
                );
                u2 = y2(u2, b4);
              }), i2({
                type: ya,
                virtualizedContent: l2
              });
            } catch {
              i2(Fu);
            }
        });
      };
      jl = ({ addHook: t }) => (e) => (n) => {
        const { step: r2 } = e;
        try {
          r2.traits.forEach(
            (o) => ja({
              getTrait: Pa,
              addHook: (i2, a3) => {
                t(i2, { callback: a3, traitId: o.id });
              },
              registerAction: (i2, a3) => {
                ae(`${r2.id}.${o.type}.${i2}`, a3);
              },
              trait: o
            })
          ), n(bo);
        } catch {
          n(Ra);
        }
      };
      Pl = ({ applyOverridesToVnode: t }) => {
        let e = {};
        const n = (a3) => (s, c) => {
          e[s] || (e[s] = {}), e[s][a3] || (e[s][a3] = {}), e[s][a3] = {
            ...e[s][a3],
            ...c
          };
        }, r2 = (a3) => e[a3], o = () => {
          e = {};
        }, i2 = yt(({ step: a3 }) => ({
          step: {
            ...a3,
            virtualizedContent: t(
              a3.virtualizedContent,
              r2
            )
          }
        }));
        return {
          createOverrideCallback: n,
          getOverrides: r2,
          applyOverrides: i2,
          clearOverrides: o
        };
      };
      xo = {
        createElement: Dl,
        createElementNS: Hl,
        createTextNode: $l,
        createDocumentFragment: Ll,
        createComment: Ml,
        insertBefore: Wl,
        removeChild: Fl,
        appendChild: Bl,
        parentNode: Ha,
        nextSibling: zl,
        tagName: Ul,
        setTextContent: Vl,
        getTextContent: ql,
        isElement: Gl,
        isText: Xl,
        isComment: Kl,
        isDocumentFragment: ne
      };
      Je = Array.isArray;
      Ir = At("", {}, [], void 0, void 0);
      tf = [
        "create",
        "update",
        "remove",
        "destroy",
        "pre",
        "post"
      ];
      rf = function(t, e, n, r2) {
        return r2 === void 0 && (r2 = n, n = e, e = void 0), ie(t, {
          key: e,
          hook: { init: ef, prepatch: nf },
          fn: n,
          args: r2
        });
      };
      ff = "http://www.w3.org/1999/xlink";
      df = "http://www.w3.org/2000/xmlns/";
      pf = "http://www.w3.org/XML/1998/namespace";
      ai = 58;
      hf = 120;
      vf = 109;
      Ma = {
        create: si,
        update: si
      };
      Wa = { create: ci, update: ci };
      ui = /[A-Z]/g;
      gf = {
        create: li,
        update: li
      };
      Ba = {
        create: jr,
        update: jr,
        destroy: jr
      };
      za = { create: fi, update: fi };
      di = typeof window?.requestAnimationFrame == "function" ? window.requestAnimationFrame.bind(window) : setTimeout;
      bf = (t) => {
        di(() => {
          di(t);
        });
      };
      oo = false;
      Ua = {
        pre: Sf,
        create: pi,
        update: pi,
        destroy: xf,
        remove: wf
      };
      kf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
        __proto__: null,
        Fragment: _f,
        array: Je,
        attachTo: uf,
        attributesModule: Ma,
        classModule: Wa,
        datasetModule: gf,
        eventListenersModule: Ba,
        fragment: ro,
        h: ie,
        htmlDomApi: xo,
        init: La,
        jsx: Tf,
        primitive: ke,
        propsModule: za,
        styleModule: Ua,
        thunk: rf,
        toVNode: $a,
        vnode: At
      }, Symbol.toStringTag, { value: "Module" }));
      Rf = (...t) => (e) => t.reduce((n, r2) => r2(n), e);
      hi = (t) => t.reduce(
        (e, { callback: n, context: r2 }) => e.then(() => n(r2)),
        Promise.resolve()
      );
      Cf = ({
        experience: t,
        onRender: e,
        onRenderReset: n,
        wrapContent: r2,
        getWindowReference: o = () => window
      }) => {
        let i2 = null, a3 = null;
        const s = () => {
          const l2 = o().document, u2 = Ae(t.id);
          return l2.documentElement.querySelector(`#${u2}`);
        }, c = () => a3 ? a3.shadowRoot : null, f2 = () => i2 ? i2.shadowRoot : null, y2 = Rf(
          (l2) => (f2() !== null || c() !== null || (i2 = s()), l2),
          r2,
          ({ step: { virtualizedContent: l2 } }) => {
            e(
              c() ?? f2(),
              l2
            );
          }
        );
        return {
          render: async (l2) => new Promise((u2) => {
            u2(y2(l2));
          }),
          unmount: () => e(null, ie("!")),
          setContainer: (l2, { container: u2 }) => {
            const { theme: h2, accountId: p2 } = l2.experience, { id: v4 } = l2.step;
            a3 && a3.remove(), a3 = Oa({
              accountId: p2,
              id: v4,
              theme: h2,
              getWindowReference: o
            }), u2.parentNode.replaceChild(a3, u2);
          },
          resetRender: () => {
            i2 = null, a3 && a3.remove(), a3 = null, n();
          },
          getContainer: () => c() ?? f2() ?? s().shadowRoot,
          getRoot: () => a3 ?? s(),
          hasCustomContainer: (l2, u2) => u2.type === ma && u2.options?.forceUpdate || !!c()
        };
      };
      Of = ({ container: t, nodes: e }, n = 0) => t.replace(/<% node %>/, e[n]);
      Af = (t) => t.replaceAll("//twemoji.maxcdn.com/2/svg/", "//cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/");
      Nf = (t) => t.split("_").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
      zt = ({ experience: t, experienceInstanceId: e }, n) => ({
        experienceId: t.id,
        experienceName: t.name,
        experienceType: t.type,
        isCoreEvent: true,
        localeName: t.context?.localeName || "default",
        localeId: t.context?.localeId || "default",
        timestamp: Date.now(),
        version: t.version,
        name: Nf(n),
        experienceInstanceId: e
      });
      ve = ({ step: t }) => ({
        stepId: t.id,
        stepName: t.name,
        stepType: t.type
      });
      If = (t, e) => !t.blockedEvents[e.type];
      Va = (t) => {
        const e = (h2) => {
          const p2 = "experience_started", v4 = zt(h2, p2);
          t("sendEvent")(p2, v4);
        }, n = (h2) => {
          const p2 = "experience_completed", v4 = zt(h2, p2);
          t("sendEvent")(p2, v4);
        }, r2 = (h2, { message: p2 }) => {
          const v4 = "experience_error", b4 = zt(h2, v4);
          t("sendEvent")(v4, { ...b4, message: p2 });
        }, o = (h2) => {
          const p2 = "experience_dismissed", v4 = zt(h2, p2), b4 = ve(h2);
          t("sendEvent")(p2, {
            ...v4,
            ...b4
          });
        }, i2 = (h2) => {
          const p2 = "experience_snoozed", v4 = zt(h2, p2), b4 = ve(h2);
          t("sendEvent")(p2, {
            ...v4,
            ...b4
          });
        }, a3 = (h2) => {
          const p2 = "step_seen", v4 = zt(h2, p2), b4 = ve(h2);
          t("sendEvent")(p2, {
            ...v4,
            ...b4
          });
        }, s = (h2) => {
          const p2 = "step_completed", v4 = zt(h2, p2), b4 = ve(h2);
          t("sendEvent")(p2, {
            ...v4,
            ...b4
          });
        }, c = (h2, p2) => {
          const v4 = zt(h2, p2.name), b4 = ve(h2), E3 = t("sendEvent"), { name: g4, ...w3 } = p2;
          E3(g4, {
            ...v4,
            ...b4,
            ...w3
          });
        }, f2 = (h2, { interactionType: p2, interactionData: v4 }) => {
          const b4 = "step_interaction", E3 = zt(h2, b4), g4 = ve(h2);
          t("sendEvent")(b4, {
            ...E3,
            ...g4,
            interactionType: p2,
            interactionData: v4
          });
        }, y2 = (h2, { message: p2, errorId: v4 }) => {
          const b4 = "step_error", E3 = zt(h2, b4), g4 = ve(h2);
          t("sendEvent")(b4, {
            ...E3,
            ...g4,
            message: p2,
            errorId: v4
          });
        }, l2 = (h2, { errorId: p2 }) => {
          const v4 = "step_recovered", b4 = zt(h2, v4), E3 = ve(h2);
          t("sendEvent")(v4, {
            ...b4,
            ...E3,
            errorId: p2
          });
        }, u2 = yt((h2, { type: p2, name: v4 = "" }) => {
          const b4 = p2 === "EXTENDED_EVENT" ? v4 : p2;
          return {
            blockedEvents: {
              ...h2.blockedEvents,
              [b4]: true
            }
          };
        });
        return {
          experienceActions: {
            experienceStarted: e,
            experienceError: r2,
            experienceCompleted: n
          },
          stepActions: {
            // NOTE: see above why this "experience" event is included in stepActions
            experienceDismissed: o,
            experienceSnoozed: i2,
            stepSeen: a3,
            stepInteraction: f2,
            stepError: y2,
            stepRecovered: l2,
            stepExtendedEvent: c,
            stepCompleted: s
          },
          helpers: {
            blockEvent: u2,
            isEventEnabled: If
          }
        };
      };
      jf = gr({
        initial: "waitingForAsyncEvents",
        context: {
          runHooksDone: false
        },
        states: {
          waitingForAsyncEvents: {
            on: {
              UPDATE_STEP: "update_step",
              ERROR: "error",
              RUN_HOOKS_DONE: {
                target: "",
                actions: yt({
                  runHooksDone: true
                })
              }
            }
          },
          update_step: {
            always: [
              {
                target: "done",
                cond: (t) => t.runHooksDone,
                actions: [Vt("RERENDER")]
              }
            ],
            on: {
              UPDATE_STEP: "",
              ERROR: "error",
              RUN_HOOKS_DONE: {
                target: "done",
                actions: [
                  yt({
                    runHooksDone: true
                  }),
                  Vt("RERENDER")
                ]
              }
            }
          },
          error: {
            always: [
              {
                target: "done",
                cond: (t) => t.runHooksDone,
                actions: [Vt("FORCE_ERROR")]
              }
            ],
            on: {
              UPDATE_STEP: "",
              ERROR: "",
              RUN_HOOKS_DONE: {
                target: "done",
                actions: [
                  yt({
                    runHooksDone: true
                  }),
                  Vt("FORCE_ERROR")
                ]
              }
            }
          },
          done: {
            type: "final"
          }
        }
      });
      Pf = gr({
        initial: "waitingForAsyncEvents",
        context: {
          runHooksDone: false
        },
        states: {
          waitingForAsyncEvents: {
            on: {
              RECOVER_STEP: "recover_step",
              RUN_HOOKS_DONE: {
                target: "",
                actions: yt({
                  runHooksDone: true
                })
              }
            }
          },
          recover_step: {
            always: [
              {
                target: "done",
                cond: (t) => t.runHooksDone,
                actions: [Vt("FORCE_RECOVER")]
              }
            ],
            on: {
              RUN_HOOKS_DONE: {
                target: "done",
                actions: [
                  yt({
                    runHooksDone: true
                  }),
                  Vt("FORCE_RECOVER")
                ]
              }
            }
          },
          done: {
            type: "final"
          }
        }
      });
      Df = {
        initial: "waiting_to_render",
        on: {
          SET_STEP_CONTAINER_TARGET: {
            actions: ["setContainer", "runStepContainerChangeHooks"],
            target: ""
          },
          UPDATE_ROOT_STYLE: {
            actions: "updateRootStyle",
            target: "",
            // updateRootStyle should only be called if
            // step has custom container since otherwise,
            // it would affect the global appcues-container
            // where multiple steps may coexist.
            cond: "hasCustomContainer"
          },
          UPDATE_STEP_CONTENT: {
            actions: "setContent",
            target: ""
          },
          RUN_HOOKS_ERROR: "destroyed",
          BIND_ACTIONS_ERROR: "destroyed",
          STOP_STEP: [
            {
              cond: "hasPendingActions",
              target: "waitingPendingActions",
              actions: ["saveStopReason"],
              internal: true
            },
            {
              target: "running_end_hooks",
              actions: ["saveStopReason"]
            }
          ],
          // Transitions by default are internal: false
          // meaning it will run entry, exit actions and also invoked services.
          // In this case we can't let it be false, otherwise the service instance (hooks and actions)
          // will not be the same and the sync callback calls will stop working
          // since the current callback instance was stopped to start a new one.
          // letting internal:true the service will be started just one time.
          // check https://xstate.js.org/docs/guides/transitions.html#internal-transitions
          // to understand better about internal config.
          PARENT_RECOVER_STEP: {
            actions: ["stepRecovered"],
            target: "rendering",
            internal: true
          },
          EXPERIENCE_DISMISSED: {
            target: "",
            actions: [
              "experienceDismissed",
              Vt({ type: Be, reason: Ce.DISMISSED })
            ]
          },
          EXPERIENCE_SNOOZED: {
            target: "",
            actions: ["experienceSnoozed"]
          },
          STEP_SEEN: {
            target: "",
            actions: ["stepSeen", "blockEvent"],
            cond: "isEventEnabled"
          },
          STEP_INTERACTION: {
            target: "",
            actions: ["stepInteraction"]
          },
          EXTENDED_EVENT: {
            actions: ["stepExtendedEvent", "blockEvent"],
            cond: "isEventEnabled"
          },
          RELOAD: [
            {
              target: "reload",
              actions: ["updateTheme", "updateStepContext"],
              cond: "didThemeChange"
            },
            {
              target: "reloading_traits",
              actions: ["setVirtualizedContent", "updateStepContext"],
              cond: "shouldOnlyReloadTraits"
            },
            {
              target: "reload",
              actions: ["setVirtualizedContent", "updateStepContext"],
              cond: "shouldStepReload"
            },
            {
              target: "rendering",
              internal: true,
              actions: ["setVirtualizedContent", "updateStepContext"],
              cond: "didContentChanged"
            }
          ],
          [Be]: {
            actions: [Vt(Be)]
          },
          FORWARD_TO_PARENT: [
            {
              actions: [
                Vt((t, { eventType: e, ...n }) => ({
                  ...n,
                  type: e
                }))
              ],
              internal: true
            }
          ],
          ACTIONS_STARTED: {
            target: "",
            actions: "setActionsRunning",
            internal: true
          },
          ACTIONS_FINISHED: {
            target: "",
            actions: "setActionsFinished",
            internal: true
          }
        },
        invoke: [
          {
            id: "hooksService",
            src: "hooksService"
          },
          {
            id: "actionsService",
            src: "actionsService"
          },
          {
            id: "themeRemovalService",
            src: "themeRemovalService"
          }
        ],
        states: {
          waiting_to_render: {
            on: {
              START_STEP: "running_traits"
            }
          },
          reload: {
            entry: [
              "removeCustomContainer",
              "unmount",
              "resetRender",
              "clearOverrides",
              "runStepEndHooks"
            ],
            exit: ["removeStepHooks"],
            on: {
              RUN_HOOKS_DONE: {
                target: "running_traits"
              }
            }
          },
          reloading_traits: {
            entry: ["runStepEndHooks", "runStepBeginHooks"],
            // Only run for the changed traits
            on: {
              // Certain traits can dispatch errors while in begin state
              // like inline traits, in this case we still need to catch these errors
              // and we send it directly to error state, since the rendering flow didn't started.
              ERROR: {
                target: "error",
                internal: true,
                actions: "stepError"
              },
              RUN_HOOKS_DONE: {
                target: "rendering",
                actions: "ensuresElementsAreAccessible",
                cond: "isHooksDoneEventBeginType"
              }
            }
          },
          running_traits: {
            invoke: {
              src: "runStepTraits"
            },
            on: {
              RUN_TRAITS_DONE: {
                target: "begin",
                // We can only bind actions' callbacks after running the traits
                // because traits can register actions.
                // so the action service will only do something after receiving
                // the confirmation that the traits are done with its execution.
                actions: Le("actionsService")
              },
              RUN_TRAITS_ERROR: "destroyed"
            }
          },
          begin: {
            entry: ["runStepBeginHooks"],
            on: {
              // Certain traits can dispatch errors while in begin state
              // like inline traits, in this case we still need to catch these errors
              // and we send it directly to error state, since the rendering flow didn't started.
              ERROR: {
                target: "error",
                internal: true,
                actions: "stepError"
              },
              RUN_HOOKS_DONE: {
                target: "rendering",
                actions: "ensuresElementsAreAccessible",
                cond: "isHooksDoneEventBeginType"
              }
            }
          },
          rendering: {
            initial: "pre-render",
            on: {
              STEP_CONTAINER_REMOVED: {
                target: "error",
                internal: false
              }
            },
            states: {
              "pre-render": {
                entry: ["runStepPreRenderHooks"],
                on: {
                  RUN_HOOKS_DONE: [
                    {
                      target: "render",
                      actions: ["applyOverrides"],
                      cond: "isHooksDoneEventPreRenderType"
                    }
                  ]
                }
              },
              render: {
                invoke: {
                  src: "render",
                  onDone: [
                    {
                      target: "post-render",
                      cond: "hasCustomContainer",
                      actions: "startThemeRemovalListener"
                    },
                    {
                      target: "post-render"
                    }
                  ]
                }
              },
              "post-render": {
                invoke: {
                  id: "postRenderAsyncEventsHandler",
                  src: jf
                },
                entry: ["runStepPostRenderHooks"],
                on: {
                  FORCE_ERROR: "#error",
                  RERENDER: "pre-render",
                  UPDATE_STEP: {
                    target: "",
                    actions: [Le("postRenderAsyncEventsHandler")]
                  },
                  ERROR: {
                    target: "",
                    actions: [Le("postRenderAsyncEventsHandler"), "stepError"]
                  },
                  RUN_HOOKS_DONE: {
                    target: "",
                    cond: "isHooksDoneEventPostRenderType",
                    actions: [
                      "notifyExperienceStarted",
                      Le("postRenderAsyncEventsHandler")
                    ]
                  }
                }
              }
            }
          },
          running_end_hooks: {
            entry: ["runStepEndHooks"],
            on: {
              RUN_HOOKS_DONE: [
                {
                  cond: "shouldFireStepCompletedEvent",
                  target: "end",
                  actions: [
                    "removeCustomContainer",
                    "unmount",
                    "stepCompleted",
                    "notifyStepStopped",
                    "removeStepHooks"
                  ]
                },
                {
                  cond: "isHooksDoneEventEndType",
                  target: "end",
                  actions: [
                    "removeCustomContainer",
                    "unmount",
                    "notifyStepStopped",
                    "removeStepHooks"
                  ]
                }
              ]
            }
          },
          end: {
            type: "final"
          },
          error: {
            id: "error",
            invoke: [
              {
                id: "errorAsyncEventsHandler",
                src: Pf
              }
            ],
            entry: ["unmount", "runStepErrorHooks", "stopThemeRemovalListener"],
            on: {
              RUN_HOOKS_DONE: {
                target: "",
                cond: "isHooksDoneEventErrorType",
                actions: [Le("errorAsyncEventsHandler"), "autoRecover"]
              },
              RECOVER_STEP: {
                target: "",
                actions: [Le("errorAsyncEventsHandler")]
              },
              FORCE_RECOVER: {
                target: "begin",
                actions: ["resetRender", "stepRecovered"]
              },
              AUTO_RECOVER_STEP: {
                target: "begin",
                actions: "resetRender",
                cond: "isAutoRecoverEvent"
              }
            }
          },
          destroyed: {
            entry: ["stepError", "unmount"]
          },
          waitingPendingActions: {
            on: {
              ACTIONS_FINISHED: {
                target: "running_end_hooks",
                actions: "setActionsFinished"
              }
            }
          }
        }
      };
      qa = (t, { createStepHooks: e, createHooksService: n, experience: r2, get: o, experienceInstanceId: i2 }) => {
        const {
          virtualizeContent: a3,
          createVnodeTree: s,
          wrapContent: c,
          applyOverridesToVnode: f2
        } = o("vNodeHandlers"), { makeElementsAccessible: y2 } = o("accessibilityHandlers"), { applyOverrides: l2, createOverrideCallback: u2, clearOverrides: h2 } = Pl({
          applyOverridesToVnode: f2
        }), p2 = u2("style"), v4 = o("getWindowReference"), { onRender: b4, onRenderReset: E3 } = o("createRenderListener")(), {
          render: g4,
          unmount: w3,
          setContainer: k2,
          resetRender: S2,
          getContainer: N3,
          hasCustomContainer: O3,
          getRoot: C3
        } = Cf({
          experience: r2,
          onRender: b4,
          onRenderReset: E3,
          wrapContent: c,
          getWindowReference: v4
        }), {
          addHook: I3,
          runStepBeginHooks: P3,
          runStepPreRenderHooks: $4,
          runStepPostRenderHooks: M4,
          runStepEndHooks: U4,
          runStepErrorHooks: G2,
          removeStepHooks: X3,
          runStepContainerChangeHooks: tt2
        } = e({
          step: t,
          overrideStyle: p2
        }), ut2 = jl({
          addHook: I3
        }), nt3 = Il(
          {
            overrideStyle: p2,
            getContainer: N3
          },
          o
        ), Z2 = n(
          {
            overrideStyle: p2,
            getContainer: N3,
            getRoot: C3
          },
          o
        ), mt2 = tl({
          getRoot: C3,
          getWindowReference: v4
        }), at3 = xl(o), gt3 = Va(o), bt3 = (J3) => J3.contentType === "text/html" ? a3(Af(Of(J3.content))) : s(J3.content);
        return gr(
          {
            ...Df,
            context: {
              id: `step-machine-${t.id}`,
              step: {
                ...t,
                /**
                 * Even though we receive an step content as HTML
                 * the first thing even before running the step is parsing it to a vnode tree
                 *
                 * The virtualizeContent lib, returns a vnode tree in the format that snabdom
                 * understands. But it helps not only for rendering, but also to attach actions to an element for example,
                 * since we use a tree traversal technique to find and match the element id with the actions callbacks.
                 *
                 */
                activeNodeIndex: 0,
                virtualizedContent: bt3(t)
              },
              experience: r2,
              blockedEvents: {},
              actionsRunning: false,
              experienceInstanceId: i2,
              stopReason: null
            }
          },
          {
            actions: {
              // injecting action coming from step level
              setContent: vl,
              updateRootStyle: El,
              // injecting action coming from render
              unmount: w3,
              setContainer: k2,
              updateTheme: at3,
              resetRender: S2,
              // injecting action coming from hooks
              runStepBeginHooks: P3,
              runStepPreRenderHooks: $4,
              runStepPostRenderHooks: M4,
              runStepEndHooks: U4,
              runStepErrorHooks: G2,
              runStepContainerChangeHooks: tt2,
              updateStepContext: yl,
              removeStepHooks: () => X3(),
              clearOverrides: () => h2(),
              setVirtualizedContent: gl(
                bt3
              ),
              // injecting action coming from overrides
              applyOverrides: l2,
              // injecting actions coming from dom
              startThemeRemovalListener: Aa,
              stopThemeRemovalListener: el,
              removeCustomContainer: Qu({ getRoot: C3 }),
              ensuresElementsAreAccessible: wl(
                y2
              ),
              notifyExperienceStarted: ml,
              notifyStepStopped: bl,
              // core events
              ...gt3.stepActions,
              blockEvent: gt3.helpers.blockEvent,
              autoRecover: Sl,
              setActionsRunning: _l,
              setActionsFinished: Tl,
              // stop reason handling
              saveStopReason: yt({
                stopReason: (J3, B3) => B3.reason
              })
            },
            services: {
              // injecting services coming from step level
              runStepTraits: ut2,
              // injecting services coming from render
              render: g4,
              // injecting services coming from hooks
              hooksService: Z2,
              // injecting services coming from steps
              actionsService: nt3,
              // injecting services coming from dom
              themeRemovalService: mt2
            },
            guards: {
              hasCustomContainer: O3,
              isAutoRecoverEvent: (J3, B3) => B3.isAutoRecoverEvent,
              isEventEnabled: gt3.helpers.isEventEnabled,
              didContentChanged: (J3, B3) => !En(J3.step.content, B3.stepConfig.content),
              shouldOnlyReloadTraits: kl,
              shouldStepReload: (J3, B3) => !En(J3.step.traits, B3.stepConfig.traits) || !En(J3.step.actions, B3.stepConfig.actions) || !En(J3.experience.traits, B3.experience.traits),
              didThemeChange: (J3, B3) => J3.experience.theme !== B3.experience.theme,
              isHooksDoneEventPostRenderType: (J3, B3) => B3.hookType === xa,
              isHooksDoneEventPreRenderType: (J3, B3) => B3.hookType === Ea,
              isHooksDoneEventBeginType: (J3, B3) => B3.hookType === go,
              isHooksDoneEventErrorType: (J3, B3) => B3.hookType === wa,
              isHooksDoneEventEndType: (J3, B3) => B3.hookType === ar,
              hasPendingActions: (J3) => J3.actionsRunning,
              shouldFireStepCompletedEvent: (J3, B3) => B3.hookType === ar && J3.stopReason !== Ce.NAVIGATION && J3.stopReason !== Ce.DISMISSED
            }
          }
        );
      };
      Hf = ({
        createStepHooks: t,
        createHooksService: e,
        get: n
      }) => yt({
        stepMachines: ({ experience: r2, experienceInstanceId: o }) => {
          const i2 = {
            experience: r2,
            experienceInstanceId: o,
            createStepHooks: t,
            createHooksService: e,
            get: n
          };
          return r2.steps.reduce((a3, s) => (a3[`${s.id}`] = fa(
            qa(s, i2),
            `step-machine - ${s.id}`
          ), a3), {});
        }
      });
      Lf = ({
        createStepHooks: t,
        createHooksService: e,
        get: n
      }) => yt({
        stepMachines: ({ experience: r2, stepMachines: o }, i2) => {
          const a3 = {
            experience: r2,
            createStepHooks: t,
            createHooksService: e,
            get: n
          }, s = r2.steps.find(
            (c) => c.id === i2.id
          );
          return s ? {
            ...o,
            [`${i2.id}`]: fa(
              qa(s, a3),
              `step-machine - ${i2.id}`
            )
          } : o;
        }
      });
      tn = (t) => (e, { id: n, ...r2 }) => {
        e.stepMachines[n]?.send({
          ...r2,
          type: t
        });
      };
      $f = tn(ha);
      Mf = tn(vo);
      Wf = tn(va);
      Ff = tn(
        ga
      );
      Bf = tn(Ru);
      zf = tn(ya);
      Uf = (t, e) => {
        Object.values(t.stepMachines).forEach((n) => {
          n.send({
            type: vo,
            reason: e.reason
          });
        });
      };
      vi = (t = [], e = []) => {
        const n = new Map(
          t.map((s) => [s.id, s])
        ), r2 = new Map(e.map((s) => [s.id, s])), o = e.filter(
          (s) => !n.has(s.id)
        ), i2 = t.filter(
          (s) => !r2.has(s.id)
        ), a3 = e.filter((s) => {
          const c = n.get(s.id);
          if (!c) return false;
          const f2 = c.config || {}, y2 = s.config || {};
          return !En(f2, y2);
        });
        return {
          addedTraits: o,
          removedTraits: i2,
          changedTraits: a3
        };
      };
      Vf = yt((t, e) => {
        const n = vi(
          t.experience.traits,
          e.experience.traits
        );
        return Object.entries(t.stepMachines).forEach(([r2, o]) => {
          const i2 = t.experience.steps.find(
            (c) => c.id === r2
          ), a3 = e.experience.steps.find((c) => c.id === r2);
          if (!i2 || !a3)
            return;
          const s = vi(
            i2.traits,
            a3.traits
          );
          o.send({
            type: Nu,
            stepConfig: a3,
            experience: e.experience,
            changedExperienceTraits: n,
            changedStepTraits: s
          });
        }), {
          experience: e.experience
        };
      });
      qf = (t) => {
        Object.values(t.stepMachines).forEach((e) => {
          e.send({
            type: mo
          });
        });
      };
      Gf = yt({
        experienceInstanceId: () => Eu()
      });
      Xf = yt({
        stepMachines: (t, e) => Object.entries(t.stepMachines).reduce(
          (n, [r2, o]) => (r2 !== e.id && (n[r2] = o), n),
          {}
        )
      });
      Kf = yt({
        experience: ({ experience: t }, e) => {
          const n = t.steps.findIndex((r2) => r2.id === e.id);
          return n === -1 ? t : Kn(
            t,
            `steps.${n}.traits`,
            (r2) => r2.filter(({ once: o = false }) => !o)
          );
        }
      });
      Zf = ({ addHook: t }) => ({ experience: e }) => (n) => {
        try {
          e.traits.forEach(
            (r2) => ja({
              getTrait: Pa,
              trait: r2,
              addHook: (o, i2) => {
                t(o, { callback: i2, traitId: r2.id });
              },
              registerAction: (o, i2) => ae(
                `${e.id}.${r2.type}.${o}`,
                i2
              )
            })
          ), n(bo);
        } catch {
          n(Ra);
        }
      };
      gi = (t, e) => (n, { callback: r2, traitId: o }) => {
        const i2 = t();
        i2.get(n) || i2.set(n, []);
        const a3 = i2.get(n);
        e(n, [...a3, { callback: r2, traitId: o }]);
      };
      me = (t, e) => ho(
        (n, r2) => {
          let o = e;
          return r2.changedExperienceTraits && (o = {
            ...o,
            onlyExperienceTraits: r2.changedExperienceTraits.changedTraits.filter((i2) => i2.id != null).map(({ id: i2 }) => i2)
          }), r2.changedStepTraits && (o = {
            ...o,
            onlyStepTraits: r2.changedStepTraits.changedTraits.filter((i2) => i2.id != null).map(({ id: i2 }) => i2)
          }), {
            type: _a,
            hookType: t,
            experience: n.experience,
            step: n.step,
            ...o
          };
        },
        { to: "hooksService" }
      );
      Jf = me(Lu);
      Qf = me($u);
      Yf = me(go);
      td = me(Ea);
      ed = me(xa);
      nd = me(ar);
      rd = Mc(
        (t, e) => me(wa, { errorEvent: e })
      );
      od = me(Sa);
      id = () => {
        const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), n = (o = {}, i2) => () => (
          // eslint-disable-next-line unicorn/consistent-function-scoping
          ((a3, s) => {
            s(async ({ type: c, hookType: f2, experience: y2, step: l2, ...u2 }) => {
              if (c !== _a) return;
              let h2 = {
                experience: y2,
                step: l2,
                callback: a3,
                get: i2,
                getContainer: o.getContainer
              };
              [go, Sa, ar].includes(f2) && (h2 = { ...h2, ...o });
              const p2 = ({ callback: b4, trait: E3 }) => {
                const g4 = {
                  ...Da({
                    ...h2,
                    getAction: xn
                  }),
                  getTraitConfig: () => E3.config
                };
                return {
                  callback: b4,
                  context: g4
                };
              }, v4 = (t.get(f2) ?? []).filter(
                ({ traitId: b4 }) => !u2.onlyExperienceTraits || u2.onlyExperienceTraits && u2.onlyExperienceTraits.includes(b4)
              ).map(
                (b4) => p2({
                  ...b4,
                  trait: (y2.traits ?? []).find(
                    (E3) => E3.id === b4.traitId
                  )
                })
              );
              try {
                if (await hi(v4), l2) {
                  const b4 = (e.get(l2.id)?.get(f2) ?? []).filter(
                    ({ traitId: E3 }) => !u2.onlyStepTraits || u2.onlyStepTraits && u2.onlyStepTraits.includes(E3)
                  ).map(
                    (E3) => p2({
                      ...E3,
                      trait: (l2.traits ?? []).find(
                        (g4) => g4.id === E3.traitId
                      )
                    })
                  );
                  await hi(b4);
                }
                a3({ type: Mu, hookType: f2, ...u2 });
              } catch {
                a3("RUN_HOOKS_ERROR");
              }
            });
          })
        ), r2 = ({ step: o }) => (e.get(o.id) || e.set(o.id, /* @__PURE__ */ new Map()), {
          addHook: gi(
            () => e.get(o.id),
            (i2, a3) => e.get(o.id).set(i2, a3)
          ),
          removeStepHooks: () => e.set(o.id, /* @__PURE__ */ new Map()),
          runStepBeginHooks: Yf,
          runStepPreRenderHooks: td,
          runStepPostRenderHooks: ed,
          runStepEndHooks: nd,
          runStepErrorHooks: rd,
          runStepContainerChangeHooks: od
        });
        return {
          addHook: gi(
            () => t,
            (o, i2) => t.set(o, i2)
          ),
          createStepHooks: r2,
          createHooksService: n,
          runExperienceBeginHooks: Jf,
          runExperienceEndHooks: Qf
        };
      };
      ad = {
        id: "experience",
        initial: "idle",
        invoke: [
          {
            src: "hooksService",
            id: "hooksService"
          },
          {
            id: "themeRemovalService",
            src: "globalThemeRemovalService"
          }
        ],
        on: {
          RUN_HOOKS_ERROR: "destroyed",
          EXPERIENCE_STARTED: {
            target: "",
            actions: ["experienceStarted", "blockEvent"],
            cond: "isEventEnabled"
          },
          SHOW: "running-traits"
        },
        states: {
          idle: {
            on: {
              SHOW: [
                {
                  target: "running-traits",
                  actions: ["updateExperienceInstanceId"]
                },
                {
                  target: "destroyed"
                }
              ]
            }
          },
          "running-traits": {
            invoke: {
              src: "runGlobalExperienceTraits"
            },
            on: {
              RUN_TRAITS_ERROR: "destroyed",
              RUN_TRAITS_DONE: "rendering-steps"
            }
          },
          "rendering-steps": {
            on: {
              STOP_EXPERIENCE: [
                {
                  target: "end",
                  actions: ["experienceCompleted", "stopSteps"],
                  cond: "shouldFireCompletedEvent"
                },
                {
                  target: "end",
                  actions: ["stopSteps"]
                }
              ],
              START_STEP: [
                {
                  target: "",
                  cond: "doesStepInstanceExist",
                  actions: "startStep"
                },
                {
                  target: "",
                  actions: ["startStepMachine", "startStep"]
                }
              ],
              STOP_STEP: {
                target: "",
                actions: "stopStep"
              },
              UPDATE_STEP: {
                target: "",
                actions: "updateStep"
              },
              SET_STEP_CONTAINER_TARGET: {
                target: "",
                actions: "setStepContainerTarget"
              },
              RECOVER_STEP: {
                target: "",
                actions: "recoverStep"
              },
              GLOBAL_CONTAINER_REMOVED: {
                target: "",
                actions: [
                  "createGlobalThemeComponent",
                  "startThemeRemovalListener",
                  "notifyStepsContainerRemoved"
                ]
              },
              UPDATE_STEP_CONTENT: {
                target: "",
                actions: "updateStepContent"
              },
              SHOW: {
                target: "",
                actions: ["reloadSteps"]
              },
              STEP_STOPPED: [
                {
                  target: "end-final",
                  cond: "areAllStepsStopped",
                  actions: [
                    "experienceCompleted",
                    "removeGlobalThemeComponent",
                    "runExperienceEndHooks"
                  ]
                },
                {
                  target: "",
                  actions: ["cleanStepMachines", "cleanRunOnceTraits"]
                }
              ]
            },
            entry: [
              "createGlobalThemeComponent",
              "startStepMachines",
              "runExperienceBeginHooks",
              "startThemeRemovalListener"
            ]
          },
          end: {
            entry: ["removeGlobalThemeComponent", "runExperienceEndHooks"],
            on: {
              [ba]: { target: "end-final", cond: "areAllStepsStopped" }
            }
          },
          "end-final": {
            final: true
          },
          destroyed: {
            entry: "experienceError",
            type: "final"
          }
        }
      };
      sd = (t, e) => {
        const {
          addHook: n,
          createStepHooks: r2,
          createHooksService: o,
          runExperienceBeginHooks: i2,
          runExperienceEndHooks: a3
        } = id(), s = o({}, e), c = Hf({
          createStepHooks: r2,
          createHooksService: o,
          get: e
        }), f2 = Lf({
          createStepHooks: r2,
          createHooksService: o,
          get: e
        }), y2 = Zf({
          addHook: n
        }), l2 = Va(e), u2 = Ku(e), h2 = Zu(e), p2 = Yu(e);
        return gr(
          {
            ...ad,
            context: {
              experience: t,
              blockedEvents: {},
              experienceInstanceId: null
            }
          },
          {
            actions: {
              // experience
              startStep: $f,
              stopStep: Mf,
              updateStep: Wf,
              setStepContainerTarget: Ff,
              recoverStep: Bf,
              startStepMachines: c,
              stopSteps: Uf,
              notifyStepsContainerRemoved: qf,
              updateStepContent: zf,
              reloadSteps: Vf,
              updateExperienceInstanceId: Gf,
              cleanStepMachines: Xf,
              startStepMachine: f2,
              // hooks
              runExperienceBeginHooks: i2,
              runExperienceEndHooks: a3,
              // dom
              createGlobalThemeComponent: u2,
              removeGlobalThemeComponent: h2,
              startThemeRemovalListener: Aa,
              // traits
              cleanRunOnceTraits: Kf,
              // core events
              ...l2.experienceActions,
              blockEvent: l2.helpers.blockEvent
            },
            services: {
              // experiences
              runGlobalExperienceTraits: y2,
              // hooks
              hooksService: s,
              // dom
              globalThemeRemovalService: p2
            },
            guards: {
              isEventEnabled: l2.helpers.isEventEnabled,
              areAllStepsStopped: (v4) => Object.values(v4.stepMachines).every(
                (b4) => b4.state.done
              ),
              doesStepInstanceExist: (v4, b4) => v4.stepMachines?.[b4.id] !== void 0,
              shouldFireCompletedEvent: (v4, b4) => b4.reason !== Ce.NAVIGATION && b4.reason !== Ce.DISMISSED
            }
          }
        );
      };
      Ga = La(
        [
          Wa,
          za,
          Ua,
          Ba,
          Ma
        ],
        void 0,
        {
          experimental: {
            fragments: true
          }
        }
      );
      ud = () => {
        let t = null;
        return {
          onRender: (e, n) => {
            !t && !e || (t || (t = cd(e)), t = Ga(t, n));
          },
          onRenderReset: () => {
            t = null;
          }
        };
      };
      zn = {};
      Xa = /* @__PURE__ */ su(kf);
      $e = {};
      gd = vd();
      yd = /* @__PURE__ */ Oe(gd);
      Ka = "data-interaction-style";
      md = (t) => t.replace(/([A-Z])/g, (e) => `-${e[0].toLowerCase()}`);
      Za = (t) => t.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&quot;/g, '"');
      Ja = ({ nodeId: t, interactionId: e, state: n }) => {
        const r2 = e ? `[${Ka}="${e}"]` : `#${t}`;
        return Object.keys(n).map((o) => `${r2}:${o} {
        ${Object.entries(n[o]).map(([i2, a3]) => {
          const s = Za(String(a3));
          return `${md(
            i2
          )}:${s} !important`;
        }).join(";")}
      }`).join(" ");
      };
      Qa = (t) => t.data && t.data.attrs ? t.data.attrs.id : void 0;
      Ya = (t, e) => Object.keys(e).reduce(
        (n, r2) => ({
          ...n,
          [r2]: {
            ...n[r2],
            ...e[r2]
          }
        }),
        t.data || {}
      );
      So = (t, e) => {
        t && (e(t), t.children && t.children.forEach((n) => So(n, e)));
      };
      ts = (t) => {
        if (typeof t == "string")
          return Za(t);
        if (t == null)
          return ro([]);
        const {
          is: e = "div",
          children: n = [],
          style: r2,
          behaviors: o,
          ...i2
        } = t.props, { state: a3, ...s } = r2 ?? {}, c = t.props.id, f2 = t.props[Ka], y2 = {
          ...Object.keys(s).length > 0 && { style: s },
          ...Object.keys(i2).length > 0 && { attrs: i2 }
        }, l2 = ie(e, y2, n.map(ts));
        return a3 ? ro([
          ie("style", Ja({ nodeId: c, interactionId: f2, state: a3 })),
          l2
        ]) : l2;
      };
      es = (t, e) => {
        const n = Qa(t), r2 = e(n) ?? {};
        return {
          ...t,
          data: Ya(t, r2),
          children: t.children?.map(
            (o) => es(o, e)
          )
        };
      };
      bd = ({ step: t }) => {
        const e = Ae(t.id), n = ie(
          "div",
          {
            attrs: {
              [ka]: e
            },
            style: {
              // this solution can adding extra height to the page, so we need a way to avoid this scenario
              // display: 'inline-block',
              // position: 'relative',
              width: "100%",
              display: "contents"
            }
          },
          [t.virtualizedContent]
        );
        return {
          step: {
            ...t,
            virtualizedContent: n
          }
        };
      };
      Ed = (t, e) => (t.data = {
        ...t.data,
        on: e.on,
        hook: e.hook
      }, t);
      xd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
        __proto__: null,
        applyOverridesToVnode: es,
        createStyleState: Ja,
        createVnodeTree: ts,
        findId: Qa,
        injectHandlers: Ed,
        mergeVnodeData: Ya,
        traverseTree: So,
        virtualizeContent: yd,
        wrapContent: bd
      }, Symbol.toStringTag, { value: "Module" }));
      Ti = (t, e) => e.includes(t.data?.attrs?.id) && typeof t.data?.attrs?.tabindex != "string" && typeof t.data?.attrs?.tabIndex != "number";
      wd = (t) => {
        t.data.attrs.tabindex = 0, t.sel = "button", t.data.style = {
          ...t.data.style,
          border: t.data?.style?.border ?? "none",
          ...t?.children?.length > 0 && {
            backgroundColor: t.data?.style?.backgroundColor ?? "transparent"
          }
        };
      };
      Sd = ({ virtualizedContent: t, index: e }, { interactiveEls: n = [], focusableEls: r2 = [] }) => (So(t, (o) => {
        Ti(o, n) ? wd(o) : Ti(o, r2) && (o.data.attrs = {
          ...o.data.attrs,
          tabindex: 0,
          role: "dialog",
          "aria-labelledby": `content-${e}`,
          "aria-describedby": `content-${e}`
        }), o.data?.class?.canvas && (o.data.attrs = {
          ...o.data.attrs,
          id: `content-${e}`
        });
      }), t);
      _d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
        __proto__: null,
        makeElementsAccessible: Sd
      }, Symbol.toStringTag, { value: "Module" }));
      Td = "@appcues/close";
      ki = {
        markComplete: true
      };
      kd = ({ markComplete: t = ki.markComplete } = ki, { stopExperience: e, step: n }) => {
        t ? e() : n.dismissExperience();
      };
      ae(Td, kd);
      Rd = "@appcues/redirectTo";
      Cd = ({ url: t = "", openInNewWindow: e = false } = {}, { reportError: n, getWindowReference: r2 }) => {
        if (!t) {
          n("Can't redirect to undefined URL");
          return;
        }
        r2().open(
          t,
          e ? "_blank" : "_self",
          "noopener"
        );
      };
      ae(Rd, Cd);
      Od = "@appcues/trackEvent";
      Ad = ({ name: t, properties: e = {} }, { sendCustomEvent: n }) => {
        n(t, e);
      };
      ae(Od, Ad);
      Nd = "@appcues/triggerFlow";
      Id = ({ flowId: t, url: e, prefetch: n = false } = {}, { showFlow: r2 }) => {
        r2({ flowId: t, url: e, prefetch: n });
      };
      ae(Nd, Id);
      jd = (t) => Object.keys(t).length === 0;
      Pd = (t) => t === "date.now" ? Date.now() : null;
      Dd = (t) => typeof t == "string" && t.startsWith("{") && t.endsWith("}");
      Hd = (t) => Object.entries(t).reduce((e, [n, r2]) => {
        if (Dd(r2)) {
          const o = r2.slice(1, -1), i2 = Pd(o);
          return { ...e, [n]: i2 ?? r2 };
        }
        return { ...e, [n]: r2 };
      }, {});
      Ld = "@appcues/setUserProperties";
      $d = (t, { updateUserProfile: e }) => {
        if (!jd(t)) {
          const n = Hd(t);
          e(n);
        }
      };
      ae(Ld, $d);
      Md = "@appcues/toggleActions";
      Wd = ({ actions: t = [], target: e } = {}, n) => {
        const r2 = n.querySelector(e.selector);
        r2.length !== 0 && t.forEach((o) => {
          const i2 = `toggleActions_${o.id}`, a3 = n.getAction(o.type), [s] = r2, c = !s.getAttribute(i2);
          a3 && c && (a3(o.config, n), s.setAttribute(i2, true)), c || s.removeAttribute(i2);
        });
      };
      ae(Md, Wd);
      Fd = /([\.\*\+\^\$\[\]\\\(\)\|\{\}\,\-\:\?])/g;
      Ri = /^([a-zA-Z]{2,3}|[a-zA-Z]{5,8})(-[a-zA-Z]{4})?(-(?:[a-zA-Z]{2}|\d{3}))?(-(?:[a-zA-Z\d]{5,8}|\d[a-zA-Z\d]{3}))?$/;
      Re = class _Re {
        // eslint-disable-line consistent-this
        /**
         * @param {string} locale
         */
        constructor(e) {
          if (typeof e != "string")
            throw new TypeError("A string argument is expected");
          if (!Ri.test(e))
            throw new RangeError("A proper locale must be provided");
          this._locale = e;
        }
        // Private functions - star
        /**
         * @param {null|undefined|string} [str]
         * @returns {null|undefined|string}
         */
        static _escapeRegExpPattern(e) {
          return typeof e != "string" ? e : e.replace(Fd, "\\$1");
        }
        /**
         * @param {string|null} [str]
         * @param {boolean} [reserveReturnValue]
         */
        static _toLowerCase(e, n) {
          return typeof e != "string" ? n && e : e.toLowerCase();
        }
        /**
         * @param {string|null} [str]
         * @param {boolean} [reserveReturnValue]
         */
        static _toUpperCase(e, n) {
          return typeof e != "string" ? n && e : e.toUpperCase();
        }
        /**
         * @param {string|null} [str]
         * @param {string|null|string[]|boolean} [delimiter]
         * @param {boolean} [reserveReturnValue]
         */
        static _trim(e, n, r2) {
          const o = [];
          let i2;
          const a3 = function(c) {
            o.push("^" + c + "+|" + c + "+$");
          };
          if (typeof n == "boolean" && (r2 = n, n = null), typeof e != "string")
            return r2 ? e : void 0;
          if (Array.isArray(n) && n.map((c) => {
            const f2 = this._escapeRegExpPattern(c);
            a3(f2);
          }), typeof n == "string") {
            const c = this._escapeRegExpPattern(n);
            a3(c);
          }
          n || a3("\\s");
          const s = "(" + o.join("|") + ")";
          for (i2 = new RegExp(s, "g"); e.match(i2); )
            e = e.replace(i2, "");
          return e;
        }
        /**
         * @typedef {{
         *   lang: string,
         *   script: string|undefined,
         *   countryCode: string|undefined
         * }} LocaleInfo
         */
        /**
         * @param {string|null} [strLocale]
         * @returns {undefined|LocaleInfo}
         */
        static _parseLocale(e) {
          if (typeof e != "string")
            return;
          const n = Ri.exec(e);
          let r2, o, i2;
          if (!e || !n)
            return;
          const a3 = this._trim(n[2], ["-", "_"]), s = this._trim(n[3], ["-", "_"]);
          return r2 = /** @type {string} */
          this._toLowerCase(n[1]), o = this._toLowerCase(a3) || o, i2 = this._toUpperCase(s) || i2, {
            lang: r2,
            script: o,
            countryCode: i2
          };
        }
        // Private functions - End
        _isRtlLang() {
          const { lang: e, script: n } = (
            /** @type {LocaleInfo} */
            _Re._parseLocale(this._locale)
          );
          return n ? _Re._RTL_SCRIPTS.indexOf(n) >= 0 : _Re._BIDI_RTL_LANGS.indexOf(e) >= 0;
        }
        // Public functions - star
        get textInfo() {
          return { direction: this._isRtlLang() ? "rtl" : "ltr" };
        }
        // Public functions - End
      };
      Re._RTL_SCRIPTS = [
        "adlm",
        "arab",
        "armi",
        "avst",
        "chrs",
        "cprt",
        "elym",
        "hatr",
        "hebr",
        "hung",
        "khar",
        "lydi",
        "mand",
        "mani",
        "mend",
        "merc",
        "mero",
        "narb",
        "nbat",
        "nkoo",
        "orkh",
        "ougr",
        "palm",
        "phli",
        "phlp",
        "phnx",
        "prti",
        "rohg",
        "samr",
        "sarb",
        "sogd",
        "sogo",
        "syrc",
        "thaa",
        "yezi"
      ];
      Re._BIDI_RTL_LANGS = [
        // Const BIDI_RTL_LANGS Array
        // BIDI_RTL_LANGS ref: http://en.wikipedia.org/wiki/Right-to-left
        // Table of scripts in Unicode: https://en.wikipedia.org/wiki/Script_(Unicode)
        "ae",
        // Avestan
        "aeb",
        // Tunisian Arabic
        "ajt",
        // Tunisian Arabic (old)
        "apc",
        // Levantine Arabic
        "apd",
        // Sudanese Arabic
        "ar",
        // 'العربية', Arabic
        "ara",
        // Arabic
        "arb",
        // Standard Arabic
        "arc",
        // Aramaic
        "arq",
        // Algerian Arabic
        "ars",
        // Najdi Arabic
        "ary",
        // Moroccan Arabic
        "arz",
        // Egyptian Arabic
        "ave",
        // Avestan
        "avl",
        // Eastern Egyptian Bedawi Arabic
        "bal",
        // Baluchi
        "bcc",
        // 'بلوچی مکرانی', Southern Balochi
        "bej",
        // Beja; Bedawiyet
        "bft",
        // Balti
        "bgn",
        // Western Balochi
        "bqi",
        // 'بختياري', Bakthiari
        "brh",
        // Brahui
        "cja",
        // Cham, Western
        "ckb",
        // 'Soranî / کوردی', Sorani
        "cld",
        // Chaldean Neo-Aramaic
        "dcc",
        // Deccan
        "dgl",
        // Andaandi
        "div",
        // Divehi
        "drw",
        // Darwazi (old)
        "dv",
        // Dhivehi
        "fa",
        // 'فارسی', Persian
        "fas",
        // Persian
        "fia",
        // Nobiin
        "fub",
        // Fulfulde (Adamawa)
        "gbz",
        // Dari, Zoroastrian
        "gjk",
        // Koli, Kachi
        "gju",
        // Gujari
        "glk",
        // 'گیلکی', Gilaki
        "grc",
        // Greek, Ancient (to 1453)
        "gwc",
        // Kalami
        "gwt",
        // Gawar-Bati
        "haz",
        // Hazaragi
        "he",
        // 'עברית', Hebrew
        "heb",
        // Hebrew
        "hnd",
        // Hindko, Southern
        "hno",
        // Hindko, Northern
        "iw",
        // Hebrew (old)
        "ji",
        // Yiddish (old)
        "kas",
        // Kashmiri
        "kby",
        // Kanuri, Manga
        "khw",
        // Khowar
        "ks",
        // Kashmiri
        "kvx",
        // Koli, Parkari
        "kxp",
        // Koli, Wadiyara
        "kzh",
        // Kenuzi-Dongola (old)
        "lad",
        // Ladino
        "lah",
        // Lahnda
        "lki",
        // Laki
        "lrc",
        // Luri, Northern
        "luz",
        // Luri, Southern
        "mde",
        // Maba (Chad)
        "mfa",
        // Malay, Pattani
        "mki",
        // Dhatki
        "mvy",
        // Kohistani, Indus
        "myz",
        // Mandaic, Classical
        "mzn",
        // 'مازِرونی', Mazanderani
        "nqo",
        // N'Ko
        "oru",
        // Ormuri
        "ota",
        // Turkish, Ottoman (1500–1928)
        "otk",
        // Turkish, Old
        "oui",
        // Uighur, Old
        "pal",
        // Pahlavi
        "pbu",
        // Pashto, Northern
        "per",
        // Persian
        "pes",
        // Western Farsi
        "phl",
        // Phalura
        "phn",
        // Phoenician
        "pnb",
        // 'پنجابی', Western Punjabi
        "pra",
        // Prakrit languages
        "prd",
        // Dari (Persian)
        "prs",
        // 'دری', Darī
        "ps",
        // 'پښتو', Pashto,
        "pus",
        // Pushto
        "rhg",
        // Rohingya
        "rmt",
        // Domari
        "scl",
        // Shina
        "sd",
        // 'سنڌي', Sindhi
        "sdh",
        // Kurdish, Southern
        "shu",
        // Arabic (Chadian)
        "skr",
        // Saraiki
        "smp",
        // Samaritan
        "snd",
        // Sindhi
        "sog",
        // Sogdian
        "swb",
        // Comorian
        "syr",
        // Syriac
        "tnf",
        // Tangshewi (old)
        "trw",
        // Torwali
        "ug",
        // 'Uyghurche / ئۇيغۇرچە', Uyghur
        "uig",
        // Uighur
        "ur",
        // 'اردو', Urdu
        "urd",
        // Urdu
        "wni",
        // Comorian, Ndzwani
        "xco",
        // Chorasmian
        "xld",
        // Lydian
        "xmn",
        // Manichaean Middle Persian
        "xmr",
        // Meroitic
        "xna",
        // North Arabian, Ancient
        "xpr",
        // Parthian
        "xsa",
        // Sabaean
        "ydd",
        // Yiddish, Eastern
        "yi",
        // 'ייִדיש', Yiddish
        "yid",
        // Yiddish
        "zdj"
        // Comorian, Ngazidja
      ];
      Bd = "@appcues/content-direction";
      Ci = ({ updateRootStyle: t, getTraitConfig: e }) => {
        const n = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage, { currentLanguage: r2 = n, forceDirection: o = null } = e(), i2 = zd(r2);
        t(
          {
            direction: o ?? i2.direction
          },
          { forceUpdate: true }
        );
      };
      Ud = ({ addHook: t }) => {
        t("step.begin", Ci), t("step.container_change", Ci);
      };
      Tt(Bd, Ud);
      ns = ["top", "right", "bottom", "left"];
      Oi = ["start", "end"];
      Ai = /* @__PURE__ */ ns.reduce((t, e) => t.concat(e, e + "-" + Oi[0], e + "-" + Oi[1]), []);
      kn = Math.min;
      ze = Math.max;
      sr = Math.round;
      Kt = (t) => ({
        x: t,
        y: t
      });
      Vd = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      qd = {
        start: "end",
        end: "start"
      };
      Gd = /* @__PURE__ */ new Set(["top", "bottom"]);
      Jd = async (t, e, n) => {
        const {
          placement: r2 = "bottom",
          strategy: o = "absolute",
          middleware: i2 = [],
          platform: a3
        } = n, s = i2.filter(Boolean), c = await (a3.isRTL == null ? void 0 : a3.isRTL(e));
        let f2 = await a3.getElementRects({
          reference: t,
          floating: e,
          strategy: o
        }), {
          x: y2,
          y: l2
        } = Ii(f2, r2, c), u2 = r2, h2 = {}, p2 = 0;
        for (let v4 = 0; v4 < s.length; v4++) {
          const {
            name: b4,
            fn: E3
          } = s[v4], {
            x: g4,
            y: w3,
            data: k2,
            reset: S2
          } = await E3({
            x: y2,
            y: l2,
            initialPlacement: r2,
            placement: u2,
            strategy: o,
            middlewareData: h2,
            rects: f2,
            platform: a3,
            elements: {
              reference: t,
              floating: e
            }
          });
          y2 = g4 ?? y2, l2 = w3 ?? l2, h2 = {
            ...h2,
            [b4]: {
              ...h2[b4],
              ...k2
            }
          }, S2 && p2 <= 50 && (p2++, typeof S2 == "object" && (S2.placement && (u2 = S2.placement), S2.rects && (f2 = S2.rects === true ? await a3.getElementRects({
            reference: t,
            floating: e,
            strategy: o
          }) : S2.rects), {
            x: y2,
            y: l2
          } = Ii(f2, u2, c)), v4 = -1);
        }
        return {
          x: y2,
          y: l2,
          placement: u2,
          strategy: o,
          middlewareData: h2
        };
      };
      Qd = (t) => ({
        name: "arrow",
        options: t,
        async fn(e) {
          const {
            x: n,
            y: r2,
            placement: o,
            rects: i2,
            platform: a3,
            elements: s,
            middlewareData: c
          } = e, {
            element: f2,
            padding: y2 = 0
          } = en(t, e) || {};
          if (f2 == null)
            return {};
          const l2 = os(y2), u2 = {
            x: n,
            y: r2
          }, h2 = To(o), p2 = _o(h2), v4 = await a3.getDimensions(f2), b4 = h2 === "y", E3 = b4 ? "top" : "left", g4 = b4 ? "bottom" : "right", w3 = b4 ? "clientHeight" : "clientWidth", k2 = i2.reference[p2] + i2.reference[h2] - u2[h2] - i2.floating[p2], S2 = u2[h2] - i2.reference[h2], N3 = await (a3.getOffsetParent == null ? void 0 : a3.getOffsetParent(f2));
          let O3 = N3 ? N3[w3] : 0;
          (!O3 || !await (a3.isElement == null ? void 0 : a3.isElement(N3))) && (O3 = s.floating[w3] || i2.floating[p2]);
          const C3 = k2 / 2 - S2 / 2, I3 = O3 / 2 - v4[p2] / 2 - 1, P3 = kn(l2[E3], I3), $4 = kn(l2[g4], I3), M4 = P3, U4 = O3 - v4[p2] - $4, G2 = O3 / 2 - v4[p2] / 2 + C3, X3 = io(M4, G2, U4), tt2 = !c.arrow && re(o) != null && G2 !== X3 && i2.reference[p2] / 2 - (G2 < M4 ? P3 : $4) - v4[p2] / 2 < 0, ut2 = tt2 ? G2 < M4 ? G2 - M4 : G2 - U4 : 0;
          return {
            [h2]: u2[h2] + ut2,
            data: {
              [h2]: X3,
              centerOffset: G2 - X3 - ut2,
              ...tt2 && {
                alignmentOffset: ut2
              }
            },
            reset: tt2
          };
        }
      });
      tp = function(t) {
        return t === void 0 && (t = {}), {
          name: "autoPlacement",
          options: t,
          async fn(e) {
            var n, r2, o;
            const {
              rects: i2,
              middlewareData: a3,
              placement: s,
              platform: c,
              elements: f2
            } = e, {
              crossAxis: y2 = false,
              alignment: l2,
              allowedPlacements: u2 = Ai,
              autoAlignment: h2 = true,
              ...p2
            } = en(t, e), v4 = l2 !== void 0 || u2 === Ai ? Yd(l2 || null, h2, u2) : u2, b4 = await ur(e, p2), E3 = ((n = a3.autoPlacement) == null ? void 0 : n.index) || 0, g4 = v4[E3];
            if (g4 == null)
              return {};
            const w3 = Xd(g4, i2, await (c.isRTL == null ? void 0 : c.isRTL(f2.floating)));
            if (s !== g4)
              return {
                reset: {
                  placement: v4[0]
                }
              };
            const k2 = [b4[nn(g4)], b4[w3[0]], b4[w3[1]]], S2 = [...((r2 = a3.autoPlacement) == null ? void 0 : r2.overflows) || [], {
              placement: g4,
              overflows: k2
            }], N3 = v4[E3 + 1];
            if (N3)
              return {
                data: {
                  index: E3 + 1,
                  overflows: S2
                },
                reset: {
                  placement: N3
                }
              };
            const O3 = S2.map((I3) => {
              const P3 = re(I3.placement);
              return [I3.placement, P3 && y2 ? (
                // Check along the mainAxis and main crossAxis side.
                I3.overflows.slice(0, 2).reduce(($4, M4) => $4 + M4, 0)
              ) : (
                // Check only the mainAxis.
                I3.overflows[0]
              ), I3.overflows];
            }).sort((I3, P3) => I3[1] - P3[1]), C3 = ((o = O3.filter((I3) => I3[2].slice(
              0,
              // Aligned placements should not check their opposite crossAxis
              // side.
              re(I3[0]) ? 2 : 3
            ).every((P3) => P3 <= 0))[0]) == null ? void 0 : o[0]) || O3[0][0];
            return C3 !== s ? {
              data: {
                index: E3 + 1,
                overflows: S2
              },
              reset: {
                placement: C3
              }
            } : {};
          }
        };
      };
      ep = function(t) {
        return t === void 0 && (t = {}), {
          name: "hide",
          options: t,
          async fn(e) {
            const {
              rects: n
            } = e, {
              strategy: r2 = "referenceHidden",
              ...o
            } = en(t, e);
            switch (r2) {
              case "referenceHidden": {
                const i2 = await ur(e, {
                  ...o,
                  elementContext: "reference"
                }), a3 = ji(i2, n.reference);
                return {
                  data: {
                    referenceHiddenOffsets: a3,
                    referenceHidden: Pi(a3)
                  }
                };
              }
              case "escaped": {
                const i2 = await ur(e, {
                  ...o,
                  altBoundary: true
                }), a3 = ji(i2, n.floating);
                return {
                  data: {
                    escapedOffsets: a3,
                    escaped: Pi(a3)
                  }
                };
              }
              default:
                return {};
            }
          }
        };
      };
      np = /* @__PURE__ */ new Set(["left", "top"]);
      op = function(t) {
        return t === void 0 && (t = 0), {
          name: "offset",
          options: t,
          async fn(e) {
            var n, r2;
            const {
              x: o,
              y: i2,
              placement: a3,
              middlewareData: s
            } = e, c = await rp(e, t);
            return a3 === ((n = s.offset) == null ? void 0 : n.placement) && (r2 = s.arrow) != null && r2.alignmentOffset ? {} : {
              x: o + c.x,
              y: i2 + c.y,
              data: {
                ...c,
                placement: a3
              }
            };
          }
        };
      };
      ip = function(t) {
        return t === void 0 && (t = {}), {
          name: "shift",
          options: t,
          async fn(e) {
            const {
              x: n,
              y: r2,
              placement: o
            } = e, {
              mainAxis: i2 = true,
              crossAxis: a3 = false,
              limiter: s = {
                fn: (b4) => {
                  let {
                    x: E3,
                    y: g4
                  } = b4;
                  return {
                    x: E3,
                    y: g4
                  };
                }
              },
              ...c
            } = en(t, e), f2 = {
              x: n,
              y: r2
            }, y2 = await ur(e, c), l2 = Er(nn(o)), u2 = rs(l2);
            let h2 = f2[u2], p2 = f2[l2];
            if (i2) {
              const b4 = u2 === "y" ? "top" : "left", E3 = u2 === "y" ? "bottom" : "right", g4 = h2 + y2[b4], w3 = h2 - y2[E3];
              h2 = io(g4, h2, w3);
            }
            if (a3) {
              const b4 = l2 === "y" ? "top" : "left", E3 = l2 === "y" ? "bottom" : "right", g4 = p2 + y2[b4], w3 = p2 - y2[E3];
              p2 = io(g4, p2, w3);
            }
            const v4 = s.fn({
              ...e,
              [u2]: h2,
              [l2]: p2
            });
            return {
              ...v4,
              data: {
                x: v4.x - n,
                y: v4.y - r2,
                enabled: {
                  [u2]: i2,
                  [l2]: a3
                }
              }
            };
          }
        };
      };
      ap = /* @__PURE__ */ new Set(["inline", "contents"]);
      sp = /* @__PURE__ */ new Set(["table", "td", "th"]);
      up = [":popover-open", ":modal"];
      lp = ["transform", "translate", "scale", "rotate", "perspective"];
      fp = ["transform", "translate", "scale", "rotate", "perspective", "filter"];
      dp = ["paint", "layout", "strict", "content"];
      hp = /* @__PURE__ */ new Set(["html", "body", "#document"]);
      vp = /* @__PURE__ */ Kt(0);
      Hi = 25;
      xp = /* @__PURE__ */ new Set(["absolute", "fixed"]);
      Rp = async function(t) {
        const e = this.getOffsetParent || ds, n = this.getDimensions, r2 = await n(t.floating);
        return {
          reference: kp(t.reference, await e(t.floating), t.strategy),
          floating: {
            x: 0,
            y: 0,
            width: r2.width,
            height: r2.height
          }
        };
      };
      Op = {
        convertOffsetParentRelativeRectToViewportRelativeRect: yp,
        getDocumentElement: se,
        getClippingRect: _p,
        getOffsetParent: ds,
        getElementRects: Rp,
        getClientRects: mp,
        getDimensions: Tp,
        getScale: Ue,
        isElement: qt,
        isRTL: Cp
      };
      Ap = op;
      Np = tp;
      Ip = ip;
      jp = ep;
      Pp = Qd;
      Dp = (t, e, n) => {
        const r2 = /* @__PURE__ */ new Map(), o = {
          platform: Op,
          ...n
        }, i2 = {
          ...o.platform,
          _c: r2
        };
        return Jd(t, e, {
          ...o,
          platform: i2
        });
      };
      Lp = Hp();
      ps = /* @__PURE__ */ Oe(Lp);
      Mp = $p();
      Wp = /* @__PURE__ */ Oe(Mp);
      hs = 10;
      Fp = 12;
      Bp = (t, e, n, r2) => {
        const { staticSide: o, offset: i2, rotation: a3, shadowOpacity: s } = {
          top: {
            staticSide: "bottom",
            offset: "-5px",
            rotation: 45,
            shadowOpacity: 40
          },
          bottom: {
            staticSide: "top",
            offset: "-5px",
            rotation: 225,
            shadowOpacity: 7
          },
          right: {
            staticSide: "left",
            offset: "-5px",
            rotation: 135,
            shadowOpacity: 7
          },
          left: {
            staticSide: "right",
            offset: "-5px",
            rotation: -45,
            shadowOpacity: 40
          }
        }[t.split("-")[0]];
        return {
          boxShadow: `1px 1px 1px hsl(0deg 0% 13% / ${s}%)`,
          transform: `rotate(${a3}deg)`,
          left: e != null ? `${e}px` : "",
          top: n != null ? `${n}px` : "",
          right: "",
          bottom: "",
          [o]: i2,
          zIndex: r2
        };
      };
      Fi = (t, e) => {
        const n = t.slice(1);
        return e.find(
          ({ config: r2, type: o }) => o === "@appcues/overlay" && n === r2.rootId
        );
      };
      zp = (t, e) => {
        const n = hs + Fp / 2;
        return e.includes("start") ? t - n : t + n;
      };
      Up = ({
        placementUnit: t,
        distance: e,
        skidding: n,
        placement: r2,
        targetEl: o
      }) => {
        const i2 = r2.startsWith("left") || r2.startsWith("right"), a3 = i2 ? e : n, s = i2 ? n : e;
        if (t !== "percentage" || !o)
          return {
            mainAxis: e,
            crossAxis: n
          };
        const { width: c, height: f2 } = o.getBoundingClientRect(), y2 = i2 ? c * a3 / 100 : f2 * s / 100, l2 = i2 ? f2 * s / 100 : c * a3 / 100;
        return {
          mainAxis: y2,
          crossAxis: l2
        };
      };
      fr = (t, e) => {
        try {
          const n = e(), r2 = n.document, o = n.getComputedStyle(t), { overflow: i2, overflowY: a3, overflowX: s } = o, c = /* @__PURE__ */ new Set([i2, a3, s]);
          if (o.position === "fixed" || o.position === "sticky" || c.has("auto") || c.has("hidden"))
            return true;
          const { host: f2 = null } = t?.getRootNode() ?? {}, y2 = f2?.tagName?.includes(yr) || f2?.tagName?.includes(mr);
          return t.parentElement === null && f2 && !y2 ? fr(f2.parentElement, e) : t.parentElement !== null && t.parentElement !== r2.body ? fr(t.parentElement, e) : false;
        } catch {
          return false;
        }
      };
      Vp = (t, e) => {
        const n = e(), r2 = n.document, o = n.getComputedStyle(t);
        return vs(t, o, r2, n);
      };
      qp = ({
        targetEl: t,
        rootStyle: e,
        shouldAutoCalculateZIndex: n,
        getWindowReference: r2
      }) => {
        let o = e;
        if (n) {
          const i2 = Vp(t, r2);
          o = { ...e, zIndex: i2 };
        }
        return o;
      };
      Gp = () => {
        const t = /* @__PURE__ */ new Map();
        function e(n) {
          n.composedPath().forEach((r2) => {
            (t.get(r2) ?? {})[n.type]?.map((o) => o(n));
          });
        }
        return {
          addEventListener: (n, r2, o) => {
            t.get(n) || t.set(n, {});
            const i2 = t.get(n);
            i2[r2] || (i2[r2] = []), i2[r2].includes(o) || (i2[r2] = [...i2[r2], o], t.set(n, i2)), i2[r2].length === 1 && n.addEventListener(r2, e, true);
          },
          removeEventListener: (n, r2, o) => {
            const i2 = t.get(n);
            if (!i2)
              return;
            const a3 = (i2[r2] ?? []).filter(
              (s) => s !== o
            );
            i2[r2] = a3, t.set(n, i2), i2[r2].length === 0 && n.removeEventListener(r2, e, true);
          }
        };
      };
      ({ addEventListener: dr, removeEventListener: pr } = Gp());
      Xp = () => {
        const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), n = (o) => {
          if (e.has(o)) return;
          const i2 = setInterval(() => {
            t.get(o).forEach((a3) => a3());
          }, o);
          e.set(o, i2);
        }, r2 = (o, i2) => {
          const a3 = t.get(i2);
          if (a3) {
            const s = a3.filter((f2) => f2 !== o);
            if (s.length > 0) {
              t.set(i2, s);
              return;
            }
            const c = e.get(i2);
            clearInterval(c), t.delete(i2), e.delete(i2);
          }
        };
        return (o, i2) => {
          const a3 = t.get(i2) ?? [];
          return t.set(i2, [...a3, o]), n(i2), () => r2(o, i2);
        };
      };
      Kp = Xp();
      Ve = (t, e) => {
        if (!e) return t;
        const { order: n, text: r2 } = e;
        let o = [...t];
        return r2 && r2 !== "" && (o = o.filter(
          (i2) => i2.textContent.replace(/\r\n|\r|\n/g, " ").toLowerCase().trim() === r2.toString().toLowerCase().trim()
        )), n != null ? o.length > n ? [o[n]] : [] : o;
      };
      Zp = "@appcues/overlay";
      Jp = {
        top: "top",
        "top-left": "top-start",
        "top-right": "top-end",
        right: "right",
        "right-top": "right-start",
        "right-bottom": "right-end",
        bottom: "bottom",
        "bottom-right": "bottom-end",
        "bottom-left": "bottom-start",
        left: "left",
        "left-bottom": "left-end",
        "left-top": "left-start",
        center: "top-start"
      };
      Qp = (t) => {
        let e, n, r2, o = [], i2, a3 = () => {
        }, s;
        function c() {
          t();
        }
        const f2 = ps(c, 100);
        function y2() {
          const l2 = e.getBoundingClientRect();
          s && (l2.x !== s.x || l2.y !== s.y || l2.width !== s.width || l2.height !== s.height) && f2(), s = l2;
        }
        return {
          setElements(l2, u2, h2) {
            return e = l2, n = u2, r2 = h2, o = [], this;
          },
          start() {
            r2 && (o = Wp([...lr(r2)])), o.forEach((l2) => {
              dr(l2, "scroll", f2), dr(l2, "resize", f2);
            }), i2 = new ResizeObserver(f2), i2.observe(n), s = e.getBoundingClientRect(), a3 = Kp(y2, 200);
          },
          remove() {
            o.forEach((l2) => {
              pr(l2, "scroll", f2), pr(l2, "resize", f2);
            }), i2?.unobserve(n), a3();
          }
        };
      };
      Yp = ({ addHook: t, registerAction: e }) => {
        let n, r2 = false, o = false, i2, a3, s, c, f2, y2, l2 = false, u2 = "absolute", h2, p2;
        t(
          "step.begin",
          ({
            onElementRemoved: v4,
            querySelector: b4,
            reportError: E3,
            step: g4,
            updateStyle: w3,
            getWindowReference: k2,
            getTraitConfig: S2
          }) => {
            const { traits: N3 } = g4.getConfig(), {
              arrowId: O3 = "arrow",
              target: C3,
              rootId: I3,
              placement: P3 = "auto",
              distance: $4,
              skidding: M4,
              placementUnit: U4 = "pixels",
              shouldAutoCalculateZIndex: G2 = true
            } = S2(), X3 = Fi(C3.selector, N3), tt2 = N3.find((Z2) => Z2.type === "@appcues/toggle")?.config?.startHidden ?? true;
            tt2 || w3(I3, { position: "absolute" }), s = () => {
              const Z2 = g4.querySelector(`#${I3}`), mt2 = g4.querySelector(`#${O3}`), at3 = Ve(
                b4(C3.selector),
                C3.filters
              );
              return {
                matchingElements: at3,
                targetEl: at3[0],
                rootEl: Z2[0],
                arrowEl: mt2[0]
              };
            };
            const ut2 = async () => {
              const { targetEl: Z2, rootEl: mt2, arrowEl: at3 } = s();
              if (!r2 && Z2 && mt2) {
                r2 = true;
                const gt3 = Up({
                  placement: P3,
                  targetEl: Z2,
                  distance: $4,
                  skidding: M4,
                  placementUnit: U4
                }), bt3 = [
                  Ap(({ placement: Lt3 }) => ({
                    ...gt3,
                    crossAxis: at3 && /start|end/gm.test(Lt3) ? zp(M4, Lt3) : gt3.crossAxis
                  }))
                ];
                P3 === "auto" && bt3.push(
                  Ip(),
                  Np({
                    crossAxis: true
                  })
                ), at3 && bt3.push(Pp({ element: at3, padding: hs })), bt3.push(jp());
                const {
                  middlewareData: J3,
                  strategy: B3,
                  x: Nt2,
                  y: Q2,
                  placement: lt3
                } = await Dp(Z2, mt2, {
                  middleware: bt3,
                  placement: Jp[P3] ?? "auto",
                  strategy: u2
                }), { referenceHidden: Et3 } = J3.hide;
                if (at3) {
                  const { x: Lt3, y: Ft3 } = J3.arrow;
                  w3(
                    O3,
                    Bp(lt3, Lt3, Ft3)
                  );
                }
                const Ht3 = {
                  left: `${Nt2}px`,
                  position: B3,
                  top: `${Q2}px`
                }, It3 = qp({
                  targetEl: Z2,
                  rootStyle: Ht3,
                  shouldAutoCalculateZIndex: G2,
                  getWindowReference: k2
                });
                Z2.style.visibility === "hidden" && (It3.visibility = "hidden", y2 = Z2.style.visibility), Et3 && mt2.style.visibility !== "hidden" && (f2 = mt2.style.visibility, l2 = true, It3.visibility = "hidden"), !Et3 && l2 && (It3.visibility = f2 ?? "visible", l2 = false), !Et3 && Z2.style.visibility !== "hidden" && Z2.style.visibility !== "" && y2 === "hidden" && (It3.visibility = "visible"), P3 === "center" && (It3.transform = "translate(-50%, 50%)"), w3(I3, It3);
              }
            };
            h2 = () => {
              r2 = false, ut2();
            }, c = Qp(h2);
            const nt3 = () => Ve(b4(C3.selector), C3.filters);
            n = async () => {
              i2 && i2(), a3 && a3();
              const { matchingElements: Z2, rootEl: mt2 } = s(), at3 = Z2.length === 1, gt3 = Z2.length > 1, bt3 = Z2.length === 0, J3 = () => {
                X3 || (a3 = v4({
                  getTarget: nt3,
                  onRemoved: () => {
                    r2 = false, p2 = E3(`Target got removed => ${C3.selector}`), c.remove();
                  }
                }));
              };
              if (at3) {
                const B3 = X3 ? b4(X3.config.target.selector) : null;
                if (tt2) {
                  const Nt2 = B3 != null ? fr(
                    B3[0]?.parentElement,
                    k2
                  ) : false;
                  u2 = fr(
                    Z2[0]?.parentElement,
                    k2
                  ) || Nt2 ? "fixed" : "absolute", w3(I3, { position: u2 });
                }
                await ut2(), J3(), c.setElements(
                  Z2[0],
                  mt2,
                  B3 ? B3[0] : null
                ).start();
                return;
              }
              gt3 && E3(
                `Found ${Z2.length} elements for selector ${C3.selector}.`
              ), bt3 && (p2 = E3(
                `Could not find element for selector ${C3.selector}.`
              ));
            };
          }
        ), t("step.postrender", async () => {
          o || (await n(), o = true);
        }), t("step.end", () => {
          i2 && i2(), a3 && a3(), c.remove(), r2 = false, o = false;
        }), t(
          "step.error",
          ({ step: v4, getTraitConfig: b4, onElementInserted: E3, querySelector: g4 }) => {
            r2 = false, o = false;
            const { target: w3 } = b4(), { traits: k2 } = v4.getConfig(), S2 = () => Ve(g4(w3.selector), w3.filters);
            Fi(w3.selector, k2) || (i2 = E3({
              getTarget: S2,
              onInserted: () => {
                o = false, v4.recover({ errorId: p2 });
              }
            }));
          }
        );
      };
      Tt(Zp, Yp);
      th = "@appcues/persistent";
      eh = ({ addHook: t }) => {
        t("experience.begin", ({ steps: e }) => {
          e.map((n) => n.start());
        });
      };
      Tt(th, eh);
      nh = {
        left: "beforebegin",
        "inner-left": "afterbegin",
        right: "afterend",
        "inner-right": "beforeend"
      };
      rh = "@appcues/inline";
      oh = ({
        distanceUnit: t,
        yOffset: e,
        xOffset: n,
        targetEl: r2
      }) => {
        if (t !== "%" || !r2)
          return {
            x: `${n}px`,
            y: `${e}px`
          };
        const { width: o, height: i2 } = r2.getBoundingClientRect();
        return {
          x: `${o * n / 100}px`,
          y: `${i2 * e / 100}px`
        };
      };
      Tt(rh, ih);
      ah = (t, e, n) => {
        const { height: r2, width: o, left: i2, top: a3 } = t.getBoundingClientRect();
        return Math.floor(
          Math.sqrt(
            (e - (i2 + o / 2)) ** 2 + (n - (a3 + r2 / 2)) ** 2
          ) / 2
        );
      };
      sh = (t, e) => {
        const { height: n, width: r2 } = t.getBoundingClientRect(), o = Math.floor(Math.sqrt(n ** 2 + r2 ** 2) / 4);
        return (e > 0 ? e : 0) + o;
      };
      ch = (t) => t.key === "Escape";
      uh = (t, e) => ![...t.composedPath()].filter((n) => n.nodeType === Node.ELEMENT_NODE).some((n) => n?.contains?.(e) ?? false);
      Un = (t, e) => ({
        remove: () => {
          t.removeEventListener("keydown", e), t.removeEventListener("click", e, true);
        },
        start: () => {
          t.addEventListener("click", e, true), t.addEventListener("keydown", e);
        }
      });
      Mr = (t, e, n) => e.length === 0 ? (n("Element not found"), false) : e.length > 1 ? (n(`More than one element found with id: ${t}`), false) : true;
      lh = "@appcues/toggle.style";
      gs = ({ targetId: t, styles: e = {} }, { updateStyle: n }) => {
        n(t, e);
      };
      Ui = {
        [lh]: gs
      };
      fh = ({ addHook: t, registerAction: e }, {
        startHidden: n = true,
        targetId: r2,
        transition: o,
        closeOnClickOutside: i2 = true,
        closeRadius: a3
      }) => {
        let s, c, f2, y2 = false, l2 = [], u2 = null, h2 = [];
        const p2 = () => {
          l2.forEach((E3) => E3.remove()), l2 = [];
        };
        n && t("step.begin", ({ updateStyle: E3, getWindowReference: g4 }) => {
          E3(r2, {
            opacity: "0",
            visibility: "hidden",
            "pointer-events": "none"
          }), h2 = [...g4().document.querySelectorAll("iframe")];
        }), t("step.end", () => {
          i2 && p2(), u2?.remove(), u2 = null;
        }), t("step.error", () => {
          i2 && p2(), u2?.remove(), u2 = null;
        });
        const v4 = ({ on: E3 } = {}, g4) => {
          const { reportError: w3, step: k2, updateStyle: S2, getWindowReference: N3 } = g4, O3 = N3().document, C3 = k2.querySelector(`#${r2}`);
          if (!Mr(r2, C3, w3)) return;
          i2 && p2();
          const I3 = {};
          o || (I3.visibility = "hidden", I3["pointer-events"] = "none"), S2(r2, {
            ...I3,
            opacity: "0"
          }), o && setTimeout(() => {
            S2(r2, {
              visibility: "hidden",
              "pointer-events": "none"
            });
          }, o.duration * 1e3), a3 && y2 && (pr(O3, "mousemove", s), h2.forEach((P3) => {
            P3.contentDocument?.body && pr(
              P3.contentDocument.body,
              "mousemove",
              s
            );
          }), y2 = false), E3?.close?.forEach(
            (P3) => Ui[P3.type](P3.config, g4)
          );
        }, b4 = ({ on: E3 } = {}, g4) => {
          const { reportError: w3, step: k2, updateStyle: S2, getWindowReference: N3 } = g4, O3 = N3().document, C3 = k2.querySelector(`#${r2}`);
          if (!Mr(r2, C3, w3)) return;
          const I3 = {};
          if (o && (I3.transition = `opacity ${o.duration}s ${o.easing}`), S2(r2, {
            ...I3,
            visibility: "visible",
            opacity: "1",
            "pointer-events": "auto"
          }), E3?.open?.forEach(
            (P3) => Ui[P3.type](P3.config, g4)
          ), i2 && l2.length === 0) {
            const P3 = k2.querySelector(":first-child")[0];
            f2 = (M4) => {
              (ch(M4) || uh(M4, C3[0])) && v4({ on: E3 }, g4);
            };
            const $4 = h2.map((M4) => M4.contentDocument?.body ? Un(
              M4.contentDocument.body,
              f2
            ) : null).filter(Boolean);
            l2.push(
              Un(O3, f2),
              Un(P3, f2),
              ...$4
            ), l2.forEach((M4) => M4.start());
          }
          if (u2 || (c = (P3) => {
            if (P3.type === "keydown" && !["Enter", " "].includes(P3.key))
              return;
            const $4 = [...P3.composedPath()];
            ["a", "button"].includes($4[0].tagName.toLowerCase()) && v4({ on: E3 }, g4);
          }, u2 = Un(C3[0], c), u2.start()), a3 && !y2) {
            const P3 = sh(C3[0], a3);
            s = ps(($4) => {
              ah(
                C3[0],
                $4.clientX,
                $4.clientY
              ) > P3 && v4({ on: E3 }, { reportError: w3, step: k2, updateStyle: S2, getWindowReference: N3 });
            }, 60), dr(O3, "mousemove", s), h2.forEach(($4) => {
              $4.contentDocument?.body && dr(
                $4.contentDocument.body,
                "mousemove",
                s
              );
            }), y2 = true;
          }
        };
        e("run", ({ on: E3 } = {}, g4) => {
          const { step: w3, reportError: k2, getWindowReference: S2 } = g4, N3 = w3.querySelector(`#${r2}`);
          if (Mr(r2, N3, k2)) {
            if (S2().getComputedStyle(N3[0]).visibility === "hidden") {
              b4({ on: E3 }, g4);
              return;
            }
            v4({ on: E3 }, g4);
          }
        }), e("open", b4), e("close", v4), e("style", gs);
      };
      dh = "@appcues/toggle";
      Tt(dh, fh);
      ph = "@appcues/coreEvents";
      hh = ({ registerAction: t }) => {
        t("step_seen", (e, { step: n }) => {
          n.seen();
        }), t("extended_event", ({ name: e, ...n }, { step: r2 }) => {
          r2.extendedEvent(e, n);
        }), t("step_interaction", (e, { step: n }) => {
          n.interaction(e.interactionType, e.interactionData);
        }), t("experience_dismissed", (e, { step: n }) => {
          n.dismissExperience();
        }), t("experience_snoozed", (e, { step: n }) => {
          n.snoozeExperience();
        });
      };
      Tt(ph, hh);
      vh = (t, e = {}, n = () => window) => {
        let r2 = e;
        const o = [], i2 = n().document, a3 = (s) => {
          const { el: c, callbackFn: f2 } = s.detail;
          o.push([c, f2]), c[f2].apply(s.target, [r2]);
        };
        return i2.addEventListener(`${t}:connect`, a3), {
          getState: () => r2,
          setState: (s) => {
            r2 = { ...r2, ...s }, o.forEach(([c, f2]) => {
              c[f2].apply(c, [r2]);
            });
          },
          destroy: () => {
            i2.removeEventListener(`${t}:connect`, a3);
          }
        };
      };
      gh = "@appcues/store";
      yh = ({ addHook: t, registerAction: e }, { id: n, initialState: r2 = {} }) => {
        let o;
        t("step.begin", ({ getWindowReference: i2 }) => {
          o = vh(n, r2, i2);
        }), t("step.end", () => {
          o && o.destroy();
        }), e("setState", ({ stateKey: i2 }, a3, s) => {
          o && o.setState({ [i2]: s?.detail });
        });
      };
      Tt(gh, yh);
      mh = {
        slide_in_down: [
          {
            transform: "translate3d(0, -100%, 0)",
            visibility: "visible"
          },
          {
            transform: "translate3d(0, 0, 0)"
          }
        ],
        slide_out_down: [
          {
            transform: "translate3d(0, 0, 0)",
            offset: 0
          },
          {
            transform: "translate3d(0, 100%, 0)",
            offset: 0.99
          },
          {
            visibility: "hidden",
            offset: 1
          }
        ],
        slide_in_up: [
          {
            transform: "translate3d(0, 100%, 0)",
            visibility: "visible"
          },
          {
            transform: "translate3d(0, 0, 0)"
          }
        ],
        pulse: [
          {
            transform: "scale3d(1, 1, 1)"
          },
          {
            transform: "scale3d(1.05, 1.05, 1.05)"
          },
          {
            transform: "scale3d(1, 1, 1)"
          }
        ]
      };
      bh = "@appcues/animate";
      Eh = 500;
      xh = "none";
      Wr = (t, e) => new Promise((n) => {
        const {
          keyframes: r2,
          duration: o = Eh,
          iterations: i2,
          effect: a3,
          fill: s = xh,
          easing: c = "linear"
        } = e, f2 = mh[a3] || r2, y2 = {
          duration: o,
          iterations: i2,
          fill: s,
          easing: c
        };
        if (!f2) return;
        const l2 = t.animate(f2, y2);
        l2?.addEventListener ? l2.addEventListener("finish", n, { once: true }) : n();
      });
      wh = ({ addHook: t, registerAction: e }, n) => {
        t("step.postrender", ({ querySelector: r2 }) => {
          const { target: o } = n;
          if (!o) return;
          const i2 = r2(o.selector);
          i2.length !== 0 && Wr(i2[0], n);
        }), e(
          "toggle",
          ({ toggleGroupId: r2, target: o, animations: i2 }, { querySelector: a3 }) => {
            const s = a3(o.selector);
            if (s.length === 0) return;
            const [c] = s, f2 = c.getAttribute(r2) === i2[0].id ? i2[1] : i2[0];
            Wr(c, f2), f2.id && c.setAttribute(r2, f2.id);
          }
        ), e("run", async (r2, o) => {
          const { querySelector: i2, getAction: a3 } = o, {
            toggleGroupId: s,
            target: c,
            animation: f2,
            ignoreToggleGroup: y2 = false,
            onFinish: l2 = []
          } = r2;
          if (!c) return;
          const u2 = i2(c.selector);
          if (u2.length === 0) return;
          const h2 = u2[0], p2 = h2.getAttribute(s);
          (!p2 || p2 === f2.id) && !y2 || (await Wr(h2, f2 ?? r2), l2.forEach((v4) => {
            a3(v4.type)(v4?.config ?? {}, o);
          }), y2 || h2.setAttribute(s, f2.id));
        });
      };
      Tt(bh, wh);
      ys = {
        pixels: "px",
        percentage: "%"
      };
      Th = "@appcues/floating";
      kh = ({ addHook: t }) => {
        t("step.begin", ({ getTraitConfig: e, updateStyle: n, updateRootStyle: r2 }) => {
          const {
            target: o,
            strategy: i2 = "fixed",
            xOffset: a3 = 0,
            yOffset: s = 0,
            xPosition: c = "left",
            yPosition: f2 = "top",
            placementUnit: y2 = "pixels",
            unsetOppositeDirection: l2 = false,
            applyToRoot: u2 = false
          } = e(), h2 = [
            Sh(
              c,
              a3,
              y2,
              l2
            ),
            _h(
              f2,
              s,
              y2,
              l2
            )
          ].reduce((v4, b4) => {
            const { transform: E3, ...g4 } = b4;
            return E3 && (v4.transform = v4.transform ? `${v4.transform} ${E3}` : E3), { ...v4, ...g4 };
          }, {}), p2 = {
            position: i2,
            ...h2
          };
          if (u2) {
            r2(p2, { forceUpdate: true });
            return;
          }
          n(o.selector, p2);
        });
      };
      Tt(Th, kh);
      Rh = "@appcues/dismissible";
      Ch = ({ addHook: t, registerAction: e }, { strategy: n = "permanent" }) => {
        function r2(o, i2) {
          return n === "session" ? i2().sessionStorage.getItem(Vi(o)) === "1" : false;
        }
        t(
          "experience.begin",
          ({ stopExperience: o, getExperienceId: i2, getWindowReference: a3 }) => {
            r2(i2(), a3) && o();
          }
        ), e(
          "dismiss",
          (o, { stopExperience: i2, updateUserProfile: a3, getExperienceId: s, getWindowReference: c }) => {
            const f2 = Vi(s());
            n === "session" ? c().sessionStorage.setItem(f2, "1") : n === "permanent" && a3({ [f2]: "permanently_dismissed" }), i2();
          }
        );
      };
      Tt(Rh, Ch);
      Oh = "@appcues/experienceStyle";
      Ah = ({ addHook: t }) => {
        t("step.begin", ({ updateRootStyle: e, getTraitConfig: n }) => {
          const r2 = n();
          e(r2, { forceUpdate: true });
        }), t("step.container_change", ({ updateRootStyle: e, getTraitConfig: n }) => {
          const r2 = n();
          e(r2, { forceUpdate: true });
        }), t("step.end", ({ updateRootStyle: e, getTraitConfig: n }) => {
          const r2 = Object.keys(n()).reduce((o, i2) => (o[i2] = null, o), {});
          e(r2, { forceUpdate: true });
        });
      };
      Tt(Oh, Ah);
      Nh = "@appcues/rootStyle";
      qi = ({ getTraitConfig: t, updateRootStyle: e }) => {
        const { forceUpdate: n = false, ...r2 } = t();
        e(r2, { forceUpdate: n });
      };
      Tt(Nh, Ih);
      jh = "appcues:launchpad_close";
      Ph = "appcues:launchpad_search";
      Dh = "appcues:launchpad_search_error";
      Hh = "appcues:launchpad_search_response";
      Co = function(t, e) {
        return window.addEventListener(t, e), function() {
          return window.removeEventListener(t, e);
        };
      };
      Lh = function(t) {
        return Co(jh, t);
      };
      $h = function(t, e, n) {
        var r2 = new CustomEvent(Ph, {
          detail: {
            integrationId: t,
            query: e,
            experienceId: n
          }
        });
        window.dispatchEvent(r2);
      };
      Mh = function(t, e) {
        return Co("".concat(Hh, ":").concat(t), e);
      };
      Wh = function(t, e) {
        return Co("".concat(Dh, ":").concat(t), e);
      };
      Fh = "@appcues/sdk-middleware-events";
      Bh = ({ addHook: t }, { onLaunchpadClose: e }) => {
        let n;
        t("step.begin", (r2) => {
          n = Lh(() => {
            e.forEach((o) => {
              r2.getAction(o.type)?.(o.config, r2);
            });
          });
        }), t("step.end", () => {
          n?.();
        });
      };
      Tt(Fh, Bh);
      zh = "@appcues/knowledge-base-integration";
      Vn = (t, { querySelector: e, reportError: n }) => {
        const r2 = e(t), o = r2.length > 1, i2 = r2.length === 0;
        return o && n(
          "The target element is duplicated, please provide a more specific selector"
        ), i2 && n("The target element is not found"), r2[0];
      };
      Uh = ({ addHook: t, registerAction: e }, n) => {
        const { integrationConnected: r2 = false } = n;
        let o, i2, a3, s, c;
        const f2 = () => {
          r2 && i2?.prev();
        }, y2 = (l2) => {
          if (!r2) return;
          const { integrationId: u2 } = n, { inputValue: h2 } = l2.detail;
          a3.setAttribute("searchTerm", h2), a3.setAttribute("state", "loading"), o.setAttribute("loading", true), s && (s.scrollTop = 0), i2?.next(), $h(u2, h2, c);
        };
        t("step.begin", ({ getExperienceId: l2 }) => {
          c = l2(), Mh(c, (u2) => {
            const h2 = u2.detail, p2 = h2.results?.length === 0 ? "empty" : "showing_results";
            a3.setAttribute("state", p2), a3.setAttribute("results", JSON.stringify(h2.results)), o.setAttribute("loading", false);
          }), Wh(c, () => {
            a3.setAttribute("state", "error"), o.setAttribute("loading", false);
          });
        }), t("step.end", () => {
          o?.removeEventListener("onSearch", y2), o?.removeEventListener("onCancel", f2);
        }), e("bindListeners", (l2, u2) => {
          const { navigation: h2 } = n;
          (!i2 || !o) && (i2 = Vn(h2.selector, u2), o = Vn("appcues-search-header", u2), a3 = Vn("appcues-search-results", u2), s = Vn("#launchpad-container", u2), o?.addEventListener("onSearch", y2), o?.addEventListener("onCancel", f2));
        });
      };
      Tt(zh, Uh);
      Vh = "@appcues/sequential";
      qh = ({ addHook: t, registerAction: e }) => {
        let n;
        const r2 = (a3, { steps: s }) => {
          n !== 0 && (s[n].stop(), n -= 1, s[n].start());
        }, o = (a3, { steps: s }) => {
          if (n === s.length - 1) {
            s[n].stop();
            return;
          }
          s[n].stop(), n += 1, s[n].start();
        }, i2 = (a3, { step: s, steps: c }) => {
          s.stop();
          const f2 = c.findIndex(
            (y2) => y2.getConfig()?.id === a3.stepId
          );
          f2 !== -1 && (n = f2, c[n].start());
        };
        t("experience.begin", ({ steps: a3 }) => {
          n = 0, a3[n].start();
        }), e("next", o), e("prev", r2), e("goTo", i2);
      };
      Tt(Vh, qh);
      Gh = ({
        getWindowReference: t,
        backdropZIndex: e,
        backdropBlur: n,
        backdropColor: r2
      }) => {
        if (t().document.querySelector(
          "#appcues-custom-backdrop"
        ))
          return null;
        const o = t().document.createElement("div");
        return o.id = "appcues-custom-backdrop", o.style.cssText = `
    z-index: ${e};
    position: fixed;
    inset: 0;
    backdrop-filter: ${n};
    background-color: ${r2};
    pointer-events: none;
  `, o;
      };
      Xh = "@appcues/dialog";
      Kh = `
  dialog { all: unset; }
  ::backdrop { backdrop-filter: var(--backdrop-blur); background-color: var(--backdrop-color); }
  :-internal-dialog-in-top-layer { all: unset; }
`;
      Jh = ({ addHook: t }, e) => {
        const { backdrop: n, variables: r2, customBackdrop: o } = e, { dialogZIndex: i2, backdropZIndex: a3, backdropBlur: s, backdropColor: c } = r2 || {};
        let f2, y2, l2;
        if (n && !o) {
          const u2 = ({ getTraitConfig: h2, updateRootStyle: p2 }) => {
            const { variables: v4 } = h2();
            p2(Zh(v4 || {}), {
              forceUpdate: true
            });
          };
          t("step.begin", u2), t("step.container_change", u2);
        }
        t("step.postrender", ({ step: u2, getWindowReference: h2 }) => {
          [y2] = u2.querySelector("dialog") ?? [], y2 && (n && o && (l2?.remove(), l2 = Gh({
            getWindowReference: h2,
            backdropZIndex: a3,
            backdropBlur: s,
            backdropColor: c
          }), l2 && h2().document.body.append(l2)), o || (f2?.remove(), f2 = h2().document.createElement("style"), f2.textContent = Kh, y2.prepend(f2)), y2.style.zIndex = i2, y2[n && !o ? "showModal" : "show"]());
        }), t("step.end", () => {
          y2?.close(), f2?.remove(), l2?.remove();
        });
      };
      Tt(Xh, Jh);
      Qh = (t) => class extends t.HTMLElement {
        constructor() {
          super();
          const e = this.ownerDocument || t.document;
          this.hideContentStyles = e.createElement("style"), this.hideContentStyles.innerHTML = `
        * {
          visibility: hidden;
        }
      `;
          try {
            this.attachShadow({ mode: "open" });
          } catch {
          }
          this.webComponentStyles = e.createElement("style"), this.webComponentStyles.innerHTML = `
        :host {
          all: initial;
          display: inline;
        }
      `;
        }
        async connectedCallback() {
          this.shadowRoot.append(this.hideContentStyles), this.shadowRoot.append(...this.childNodes), this.getAttribute("themeId") && await Na(this), this.shadowRoot.prepend(this.webComponentStyles), this.shadowRoot.removeChild(this.hideContentStyles);
        }
      };
      Fr = /* @__PURE__ */ new WeakMap();
      Yh = (t = () => window) => {
        const e = t();
        if (Fr.has(e))
          return Fr.get(e);
        if (!e.customElements.get(_n)) {
          const r2 = Qh(e);
          e.customElements.define(_n, r2);
        }
        const n = e.customElements.whenDefined(_n);
        return Fr.set(e, n), n;
      };
      tv = false;
    }
  });

  // node_modules/@appcues/web-sdk/build/index.DVtntSTl.js
  var index_DVtntSTl_exports = {};
  function Te2(e, t) {
    if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return ne2 !== void 0 ? ne2.createHTML(t) : t;
  }
  function X(e, t, i2 = e, s) {
    var r2, o, n, l2;
    if (t === j) return t;
    let a3 = s !== void 0 ? (r2 = i2._$Co) === null || r2 === void 0 ? void 0 : r2[s] : i2._$Cl;
    const c = ot2(t) ? void 0 : t._$litDirective$;
    return a3?.constructor !== c && ((o = a3?._$AO) === null || o === void 0 || o.call(a3, false), c === void 0 ? a3 = void 0 : (a3 = new c(e), a3._$AT(e, i2, s)), s !== void 0 ? ((n = (l2 = i2)._$Co) !== null && n !== void 0 ? n : l2._$Co = [])[s] = a3 : i2._$Cl = a3), a3 !== void 0 && (t = X(e, a3._$AS(e, t.values), a3, s)), t;
  }
  function v(e) {
    return (t, i2) => i2 !== void 0 ? li2(e, t, i2) : ai2(e, t);
  }
  function N(e) {
    return v({ ...e, state: true });
  }
  function mi2() {
    if (pe) return Ut2;
    pe = 1;
    var e = "Expected a function", t = NaN, i2 = "[object Symbol]", s = /^\s+|\s+$/g, r2 = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, n = /^0o[0-7]+$/i, l2 = parseInt, a3 = typeof ec == "object" && ec && ec.Object === Object && ec, c = typeof self == "object" && self && self.Object === Object && self, h2 = a3 || c || Function("return this")(), d2 = Object.prototype, p2 = d2.toString, y2 = Math.max, S2 = Math.min, E3 = function() {
      return h2.Date.now();
    };
    function Le3(u2, _, k2) {
      var W3, G2, ct2, Z2, x2, P3, Q2 = 0, Yt2 = false, tt2 = false, kt2 = true;
      if (typeof u2 != "function")
        throw new TypeError(e);
      _ = Xt2(_) || 0, At3(k2) && (Yt2 = !!k2.leading, tt2 = "maxWait" in k2, ct2 = tt2 ? y2(Xt2(k2.maxWait) || 0, _) : ct2, kt2 = "trailing" in k2 ? !!k2.trailing : kt2);
      function Ct3(f2) {
        var T2 = W3, et3 = G2;
        return W3 = G2 = void 0, Q2 = f2, Z2 = u2.apply(et3, T2), Z2;
      }
      function ze3(f2) {
        return Q2 = f2, x2 = setTimeout(dt3, _), Yt2 ? Ct3(f2) : Z2;
      }
      function Be3(f2) {
        var T2 = f2 - P3, et3 = f2 - Q2, Qt2 = _ - T2;
        return tt2 ? S2(Qt2, ct2 - et3) : Qt2;
      }
      function Kt2(f2) {
        var T2 = f2 - P3, et3 = f2 - Q2;
        return P3 === void 0 || T2 >= _ || T2 < 0 || tt2 && et3 >= ct2;
      }
      function dt3() {
        var f2 = E3();
        if (Kt2(f2))
          return Gt3(f2);
        x2 = setTimeout(dt3, Be3(f2));
      }
      function Gt3(f2) {
        return x2 = void 0, kt2 && W3 ? Ct3(f2) : (W3 = G2 = void 0, Z2);
      }
      function De3() {
        x2 !== void 0 && clearTimeout(x2), Q2 = 0, W3 = P3 = G2 = x2 = void 0;
      }
      function qe3() {
        return x2 === void 0 ? Z2 : Gt3(E3());
      }
      function St2() {
        var f2 = E3(), T2 = Kt2(f2);
        if (W3 = arguments, G2 = this, P3 = f2, T2) {
          if (x2 === void 0)
            return ze3(P3);
          if (tt2)
            return x2 = setTimeout(dt3, _), Ct3(P3);
        }
        return x2 === void 0 && (x2 = setTimeout(dt3, _)), Z2;
      }
      return St2.cancel = De3, St2.flush = qe3, St2;
    }
    function At3(u2) {
      var _ = typeof u2;
      return !!u2 && (_ == "object" || _ == "function");
    }
    function Oe3(u2) {
      return !!u2 && typeof u2 == "object";
    }
    function je2(u2) {
      return typeof u2 == "symbol" || Oe3(u2) && p2.call(u2) == i2;
    }
    function Xt2(u2) {
      if (typeof u2 == "number")
        return u2;
      if (je2(u2))
        return t;
      if (At3(u2)) {
        var _ = typeof u2.valueOf == "function" ? u2.valueOf() : u2;
        u2 = At3(_) ? _ + "" : _;
      }
      if (typeof u2 != "string")
        return u2 === 0 ? u2 : +u2;
      u2 = u2.replace(s, "");
      var k2 = o.test(u2);
      return k2 || n.test(u2) ? l2(u2.slice(2), k2 ? 2 : 8) : r2.test(u2) ? t : +u2;
    }
    return Ut2 = Le3, Ut2;
  }
  function Re2(e, t) {
    if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return ve2 !== void 0 ? ve2.createHTML(t) : t;
  }
  function K(e, t, i2 = e, s) {
    var r2, o, n, l2;
    if (t === lt) return t;
    let a3 = s !== void 0 ? (r2 = i2._$Co) === null || r2 === void 0 ? void 0 : r2[s] : i2._$Cl;
    const c = at(t) ? void 0 : t._$litDirective$;
    return a3?.constructor !== c && ((o = a3?._$AO) === null || o === void 0 || o.call(a3, false), c === void 0 ? a3 = void 0 : (a3 = new c(e), a3._$AT(e, i2, s)), s !== void 0 ? ((n = (l2 = i2)._$Co) !== null && n !== void 0 ? n : l2._$Co = [])[s] = a3 : i2._$Cl = a3), a3 !== void 0 && (t = K(e, a3._$AS(e, t.values), a3, s)), t;
  }
  var pt, Vt2, Wt2, ee2, xe, Je2, $, Xe2, ie2, Et, gt, se2, Ye2, re2, Ot2, Zt2, Tt2, jt2, F, It, vt2, J, ne2, zt2, I, Ae2, Ke2, O, nt, ot2, ke2, Ge2, Ht, it, oe2, ae2, M, le, he, Ce2, Se, w, Ee, j, m, ce, R, Qe2, Bt, ti2, Ft, bt, ei2, ii2, si2, ri2, ni2, de, oi2, Nt, Pt, A, ue, ai2, li2, Mt, hi2, ci2, di2, Dt2, ui2, pi2, gi2, vi2, Ut2, pe, fi2, $i2, bi2, g, B, ge2, ht, yi2, wi2, _i2, xi2, Ai2, ki2, Ci2, Si2, Rt, mt, Y2, ve2, qt2, H2, Ne, Ei2, z, ft, at, Pe2, Ti2, Lt, st2, me2, fe, U, $e2, be, Me2, Ue2, rt2, yt2, lt, b, ye2, L, Ii2, $t, Hi2, Jt2, wt, Ni2, Pi2, Mi2, Ui2, Ri2, we, Li2, Oi2, ji2, D, zi2, Bi2, Di2, C, qi2, Vi2, Wi2, _t2, Zi2, q, Fi2, Ji2, _e, Xi2, Yi2, Ki2, xt, Gi2, Qi2, ts2, es2, is2, ss2, rs2, V;
  var init_index_DVtntSTl = __esm({
    "node_modules/@appcues/web-sdk/build/index.DVtntSTl.js"() {
      init_index_DIKlkbGK();
      pt = window;
      Vt2 = pt.ShadowRoot && (pt.ShadyCSS === void 0 || pt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
      Wt2 = /* @__PURE__ */ Symbol();
      ee2 = /* @__PURE__ */ new WeakMap();
      xe = class {
        constructor(t, i2, s) {
          if (this._$cssResult$ = true, s !== Wt2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
          this.cssText = t, this.t = i2;
        }
        get styleSheet() {
          let t = this.o;
          const i2 = this.t;
          if (Vt2 && t === void 0) {
            const s = i2 !== void 0 && i2.length === 1;
            s && (t = ee2.get(i2)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && ee2.set(i2, t));
          }
          return t;
        }
        toString() {
          return this.cssText;
        }
      };
      Je2 = (e) => new xe(typeof e == "string" ? e : e + "", void 0, Wt2);
      $ = (e, ...t) => {
        const i2 = e.length === 1 ? e[0] : t.reduce(((s, r2, o) => s + ((n) => {
          if (n._$cssResult$ === true) return n.cssText;
          if (typeof n == "number") return n;
          throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(r2) + e[o + 1]), e[0]);
        return new xe(i2, e, Wt2);
      };
      Xe2 = (e, t) => {
        Vt2 ? e.adoptedStyleSheets = t.map(((i2) => i2 instanceof CSSStyleSheet ? i2 : i2.styleSheet)) : t.forEach(((i2) => {
          const s = document.createElement("style"), r2 = pt.litNonce;
          r2 !== void 0 && s.setAttribute("nonce", r2), s.textContent = i2.cssText, e.appendChild(s);
        }));
      };
      ie2 = Vt2 ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
        let i2 = "";
        for (const s of t.cssRules) i2 += s.cssText;
        return Je2(i2);
      })(e) : e;
      gt = window;
      se2 = gt.trustedTypes;
      Ye2 = se2 ? se2.emptyScript : "";
      re2 = gt.reactiveElementPolyfillSupport;
      Ot2 = { toAttribute(e, t) {
        switch (t) {
          case Boolean:
            e = e ? Ye2 : null;
            break;
          case Object:
          case Array:
            e = e == null ? e : JSON.stringify(e);
        }
        return e;
      }, fromAttribute(e, t) {
        let i2 = e;
        switch (t) {
          case Boolean:
            i2 = e !== null;
            break;
          case Number:
            i2 = e === null ? null : Number(e);
            break;
          case Object:
          case Array:
            try {
              i2 = JSON.parse(e);
            } catch {
              i2 = null;
            }
        }
        return i2;
      } };
      Zt2 = (e, t) => t !== e && (t == t || e == e);
      Tt2 = { attribute: true, type: String, converter: Ot2, reflect: false, hasChanged: Zt2 };
      jt2 = "finalized";
      F = class extends HTMLElement {
        constructor() {
          super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this._$Eu();
        }
        static addInitializer(t) {
          var i2;
          this.finalize(), ((i2 = this.h) !== null && i2 !== void 0 ? i2 : this.h = []).push(t);
        }
        static get observedAttributes() {
          this.finalize();
          const t = [];
          return this.elementProperties.forEach(((i2, s) => {
            const r2 = this._$Ep(s, i2);
            r2 !== void 0 && (this._$Ev.set(r2, s), t.push(r2));
          })), t;
        }
        static createProperty(t, i2 = Tt2) {
          if (i2.state && (i2.attribute = false), this.finalize(), this.elementProperties.set(t, i2), !i2.noAccessor && !this.prototype.hasOwnProperty(t)) {
            const s = typeof t == "symbol" ? /* @__PURE__ */ Symbol() : "__" + t, r2 = this.getPropertyDescriptor(t, s, i2);
            r2 !== void 0 && Object.defineProperty(this.prototype, t, r2);
          }
        }
        static getPropertyDescriptor(t, i2, s) {
          return { get() {
            return this[i2];
          }, set(r2) {
            const o = this[t];
            this[i2] = r2, this.requestUpdate(t, o, s);
          }, configurable: true, enumerable: true };
        }
        static getPropertyOptions(t) {
          return this.elementProperties.get(t) || Tt2;
        }
        static finalize() {
          if (this.hasOwnProperty(jt2)) return false;
          this[jt2] = true;
          const t = Object.getPrototypeOf(this);
          if (t.finalize(), t.h !== void 0 && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
            const i2 = this.properties, s = [...Object.getOwnPropertyNames(i2), ...Object.getOwnPropertySymbols(i2)];
            for (const r2 of s) this.createProperty(r2, i2[r2]);
          }
          return this.elementStyles = this.finalizeStyles(this.styles), true;
        }
        static finalizeStyles(t) {
          const i2 = [];
          if (Array.isArray(t)) {
            const s = new Set(t.flat(1 / 0).reverse());
            for (const r2 of s) i2.unshift(ie2(r2));
          } else t !== void 0 && i2.push(ie2(t));
          return i2;
        }
        static _$Ep(t, i2) {
          const s = i2.attribute;
          return s === false ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
        }
        _$Eu() {
          var t;
          this._$E_ = new Promise(((i2) => this.enableUpdating = i2)), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach(((i2) => i2(this)));
        }
        addController(t) {
          var i2, s;
          ((i2 = this._$ES) !== null && i2 !== void 0 ? i2 : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((s = t.hostConnected) === null || s === void 0 || s.call(t));
        }
        removeController(t) {
          var i2;
          (i2 = this._$ES) === null || i2 === void 0 || i2.splice(this._$ES.indexOf(t) >>> 0, 1);
        }
        _$Eg() {
          this.constructor.elementProperties.forEach(((t, i2) => {
            this.hasOwnProperty(i2) && (this._$Ei.set(i2, this[i2]), delete this[i2]);
          }));
        }
        createRenderRoot() {
          var t;
          const i2 = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
          return Xe2(i2, this.constructor.elementStyles), i2;
        }
        connectedCallback() {
          var t;
          this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t = this._$ES) === null || t === void 0 || t.forEach(((i2) => {
            var s;
            return (s = i2.hostConnected) === null || s === void 0 ? void 0 : s.call(i2);
          }));
        }
        enableUpdating(t) {
        }
        disconnectedCallback() {
          var t;
          (t = this._$ES) === null || t === void 0 || t.forEach(((i2) => {
            var s;
            return (s = i2.hostDisconnected) === null || s === void 0 ? void 0 : s.call(i2);
          }));
        }
        attributeChangedCallback(t, i2, s) {
          this._$AK(t, s);
        }
        _$EO(t, i2, s = Tt2) {
          var r2;
          const o = this.constructor._$Ep(t, s);
          if (o !== void 0 && s.reflect === true) {
            const n = (((r2 = s.converter) === null || r2 === void 0 ? void 0 : r2.toAttribute) !== void 0 ? s.converter : Ot2).toAttribute(i2, s.type);
            this._$El = t, n == null ? this.removeAttribute(o) : this.setAttribute(o, n), this._$El = null;
          }
        }
        _$AK(t, i2) {
          var s;
          const r2 = this.constructor, o = r2._$Ev.get(t);
          if (o !== void 0 && this._$El !== o) {
            const n = r2.getPropertyOptions(o), l2 = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((s = n.converter) === null || s === void 0 ? void 0 : s.fromAttribute) !== void 0 ? n.converter : Ot2;
            this._$El = o, this[o] = l2.fromAttribute(i2, n.type), this._$El = null;
          }
        }
        requestUpdate(t, i2, s) {
          let r2 = true;
          t !== void 0 && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || Zt2)(this[t], i2) ? (this._$AL.has(t) || this._$AL.set(t, i2), s.reflect === true && this._$El !== t && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t, s))) : r2 = false), !this.isUpdatePending && r2 && (this._$E_ = this._$Ej());
        }
        async _$Ej() {
          this.isUpdatePending = true;
          try {
            await this._$E_;
          } catch (i2) {
            Promise.reject(i2);
          }
          const t = this.scheduleUpdate();
          return t != null && await t, !this.isUpdatePending;
        }
        scheduleUpdate() {
          return this.performUpdate();
        }
        performUpdate() {
          var t;
          if (!this.isUpdatePending) return;
          this.hasUpdated, this._$Ei && (this._$Ei.forEach(((r2, o) => this[o] = r2)), this._$Ei = void 0);
          let i2 = false;
          const s = this._$AL;
          try {
            i2 = this.shouldUpdate(s), i2 ? (this.willUpdate(s), (t = this._$ES) === null || t === void 0 || t.forEach(((r2) => {
              var o;
              return (o = r2.hostUpdate) === null || o === void 0 ? void 0 : o.call(r2);
            })), this.update(s)) : this._$Ek();
          } catch (r2) {
            throw i2 = false, this._$Ek(), r2;
          }
          i2 && this._$AE(s);
        }
        willUpdate(t) {
        }
        _$AE(t) {
          var i2;
          (i2 = this._$ES) === null || i2 === void 0 || i2.forEach(((s) => {
            var r2;
            return (r2 = s.hostUpdated) === null || r2 === void 0 ? void 0 : r2.call(s);
          })), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t)), this.updated(t);
        }
        _$Ek() {
          this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
        }
        get updateComplete() {
          return this.getUpdateComplete();
        }
        getUpdateComplete() {
          return this._$E_;
        }
        shouldUpdate(t) {
          return true;
        }
        update(t) {
          this._$EC !== void 0 && (this._$EC.forEach(((i2, s) => this._$EO(s, this[s], i2))), this._$EC = void 0), this._$Ek();
        }
        updated(t) {
        }
        firstUpdated(t) {
        }
      };
      F[jt2] = true, F.elementProperties = /* @__PURE__ */ new Map(), F.elementStyles = [], F.shadowRootOptions = { mode: "open" }, re2?.({ ReactiveElement: F }), ((Et = gt.reactiveElementVersions) !== null && Et !== void 0 ? Et : gt.reactiveElementVersions = []).push("1.6.3");
      vt2 = window;
      J = vt2.trustedTypes;
      ne2 = J ? J.createPolicy("lit-html", { createHTML: (e) => e }) : void 0;
      zt2 = "$lit$";
      I = `lit$${(Math.random() + "").slice(9)}$`;
      Ae2 = "?" + I;
      Ke2 = `<${Ae2}>`;
      O = document;
      nt = () => O.createComment("");
      ot2 = (e) => e === null || typeof e != "object" && typeof e != "function";
      ke2 = Array.isArray;
      Ge2 = (e) => ke2(e) || typeof e?.[Symbol.iterator] == "function";
      Ht = `[ 	
\f\r]`;
      it = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
      oe2 = /-->/g;
      ae2 = />/g;
      M = RegExp(`>|${Ht}(?:([^\\s"'>=/]+)(${Ht}*=${Ht}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
      le = /'/g;
      he = /"/g;
      Ce2 = /^(?:script|style|textarea|title)$/i;
      Se = (e) => (t, ...i2) => ({ _$litType$: e, strings: t, values: i2 });
      w = Se(1);
      Ee = Se(2);
      j = /* @__PURE__ */ Symbol.for("lit-noChange");
      m = /* @__PURE__ */ Symbol.for("lit-nothing");
      ce = /* @__PURE__ */ new WeakMap();
      R = O.createTreeWalker(O, 129, null, false);
      Qe2 = (e, t) => {
        const i2 = e.length - 1, s = [];
        let r2, o = t === 2 ? "<svg>" : "", n = it;
        for (let l2 = 0; l2 < i2; l2++) {
          const a3 = e[l2];
          let c, h2, d2 = -1, p2 = 0;
          for (; p2 < a3.length && (n.lastIndex = p2, h2 = n.exec(a3), h2 !== null); ) p2 = n.lastIndex, n === it ? h2[1] === "!--" ? n = oe2 : h2[1] !== void 0 ? n = ae2 : h2[2] !== void 0 ? (Ce2.test(h2[2]) && (r2 = RegExp("</" + h2[2], "g")), n = M) : h2[3] !== void 0 && (n = M) : n === M ? h2[0] === ">" ? (n = r2 ?? it, d2 = -1) : h2[1] === void 0 ? d2 = -2 : (d2 = n.lastIndex - h2[2].length, c = h2[1], n = h2[3] === void 0 ? M : h2[3] === '"' ? he : le) : n === he || n === le ? n = M : n === oe2 || n === ae2 ? n = it : (n = M, r2 = void 0);
          const y2 = n === M && e[l2 + 1].startsWith("/>") ? " " : "";
          o += n === it ? a3 + Ke2 : d2 >= 0 ? (s.push(c), a3.slice(0, d2) + zt2 + a3.slice(d2) + I + y2) : a3 + I + (d2 === -2 ? (s.push(void 0), l2) : y2);
        }
        return [Te2(e, o + (e[i2] || "<?>") + (t === 2 ? "</svg>" : "")), s];
      };
      Bt = class Ie {
        constructor({ strings: t, _$litType$: i2 }, s) {
          let r2;
          this.parts = [];
          let o = 0, n = 0;
          const l2 = t.length - 1, a3 = this.parts, [c, h2] = Qe2(t, i2);
          if (this.el = Ie.createElement(c, s), R.currentNode = this.el.content, i2 === 2) {
            const d2 = this.el.content, p2 = d2.firstChild;
            p2.remove(), d2.append(...p2.childNodes);
          }
          for (; (r2 = R.nextNode()) !== null && a3.length < l2; ) {
            if (r2.nodeType === 1) {
              if (r2.hasAttributes()) {
                const d2 = [];
                for (const p2 of r2.getAttributeNames()) if (p2.endsWith(zt2) || p2.startsWith(I)) {
                  const y2 = h2[n++];
                  if (d2.push(p2), y2 !== void 0) {
                    const S2 = r2.getAttribute(y2.toLowerCase() + zt2).split(I), E3 = /([.?@])?(.*)/.exec(y2);
                    a3.push({ type: 1, index: o, name: E3[2], strings: S2, ctor: E3[1] === "." ? ei2 : E3[1] === "?" ? si2 : E3[1] === "@" ? ri2 : bt });
                  } else a3.push({ type: 6, index: o });
                }
                for (const p2 of d2) r2.removeAttribute(p2);
              }
              if (Ce2.test(r2.tagName)) {
                const d2 = r2.textContent.split(I), p2 = d2.length - 1;
                if (p2 > 0) {
                  r2.textContent = J ? J.emptyScript : "";
                  for (let y2 = 0; y2 < p2; y2++) r2.append(d2[y2], nt()), R.nextNode(), a3.push({ type: 2, index: ++o });
                  r2.append(d2[p2], nt());
                }
              }
            } else if (r2.nodeType === 8) if (r2.data === Ae2) a3.push({ type: 2, index: o });
            else {
              let d2 = -1;
              for (; (d2 = r2.data.indexOf(I, d2 + 1)) !== -1; ) a3.push({ type: 7, index: o }), d2 += I.length - 1;
            }
            o++;
          }
        }
        static createElement(t, i2) {
          const s = O.createElement("template");
          return s.innerHTML = t, s;
        }
      };
      ti2 = class {
        constructor(t, i2) {
          this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i2;
        }
        get parentNode() {
          return this._$AM.parentNode;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        u(t) {
          var i2;
          const { el: { content: s }, parts: r2 } = this._$AD, o = ((i2 = t?.creationScope) !== null && i2 !== void 0 ? i2 : O).importNode(s, true);
          R.currentNode = o;
          let n = R.nextNode(), l2 = 0, a3 = 0, c = r2[0];
          for (; c !== void 0; ) {
            if (l2 === c.index) {
              let h2;
              c.type === 2 ? h2 = new Ft(n, n.nextSibling, this, t) : c.type === 1 ? h2 = new c.ctor(n, c.name, c.strings, this, t) : c.type === 6 && (h2 = new ni2(n, this, t)), this._$AV.push(h2), c = r2[++a3];
            }
            l2 !== c?.index && (n = R.nextNode(), l2++);
          }
          return R.currentNode = O, o;
        }
        v(t) {
          let i2 = 0;
          for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, i2), i2 += s.strings.length - 2) : s._$AI(t[i2])), i2++;
        }
      };
      Ft = class He2 {
        constructor(t, i2, s, r2) {
          var o;
          this.type = 2, this._$AH = m, this._$AN = void 0, this._$AA = t, this._$AB = i2, this._$AM = s, this.options = r2, this._$Cp = (o = r2?.isConnected) === null || o === void 0 || o;
        }
        get _$AU() {
          var t, i2;
          return (i2 = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && i2 !== void 0 ? i2 : this._$Cp;
        }
        get parentNode() {
          let t = this._$AA.parentNode;
          const i2 = this._$AM;
          return i2 !== void 0 && t?.nodeType === 11 && (t = i2.parentNode), t;
        }
        get startNode() {
          return this._$AA;
        }
        get endNode() {
          return this._$AB;
        }
        _$AI(t, i2 = this) {
          t = X(this, t, i2), ot2(t) ? t === m || t == null || t === "" ? (this._$AH !== m && this._$AR(), this._$AH = m) : t !== this._$AH && t !== j && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : Ge2(t) ? this.T(t) : this._(t);
        }
        k(t) {
          return this._$AA.parentNode.insertBefore(t, this._$AB);
        }
        $(t) {
          this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
        }
        _(t) {
          this._$AH !== m && ot2(this._$AH) ? this._$AA.nextSibling.data = t : this.$(O.createTextNode(t)), this._$AH = t;
        }
        g(t) {
          var i2;
          const { values: s, _$litType$: r2 } = t, o = typeof r2 == "number" ? this._$AC(t) : (r2.el === void 0 && (r2.el = Bt.createElement(Te2(r2.h, r2.h[0]), this.options)), r2);
          if (((i2 = this._$AH) === null || i2 === void 0 ? void 0 : i2._$AD) === o) this._$AH.v(s);
          else {
            const n = new ti2(o, this), l2 = n.u(this.options);
            n.v(s), this.$(l2), this._$AH = n;
          }
        }
        _$AC(t) {
          let i2 = ce.get(t.strings);
          return i2 === void 0 && ce.set(t.strings, i2 = new Bt(t)), i2;
        }
        T(t) {
          ke2(this._$AH) || (this._$AH = [], this._$AR());
          const i2 = this._$AH;
          let s, r2 = 0;
          for (const o of t) r2 === i2.length ? i2.push(s = new He2(this.k(nt()), this.k(nt()), this, this.options)) : s = i2[r2], s._$AI(o), r2++;
          r2 < i2.length && (this._$AR(s && s._$AB.nextSibling, r2), i2.length = r2);
        }
        _$AR(t = this._$AA.nextSibling, i2) {
          var s;
          for ((s = this._$AP) === null || s === void 0 || s.call(this, false, true, i2); t && t !== this._$AB; ) {
            const r2 = t.nextSibling;
            t.remove(), t = r2;
          }
        }
        setConnected(t) {
          var i2;
          this._$AM === void 0 && (this._$Cp = t, (i2 = this._$AP) === null || i2 === void 0 || i2.call(this, t));
        }
      };
      bt = class {
        constructor(t, i2, s, r2, o) {
          this.type = 1, this._$AH = m, this._$AN = void 0, this.element = t, this.name = i2, this._$AM = r2, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = m;
        }
        get tagName() {
          return this.element.tagName;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(t, i2 = this, s, r2) {
          const o = this.strings;
          let n = false;
          if (o === void 0) t = X(this, t, i2, 0), n = !ot2(t) || t !== this._$AH && t !== j, n && (this._$AH = t);
          else {
            const l2 = t;
            let a3, c;
            for (t = o[0], a3 = 0; a3 < o.length - 1; a3++) c = X(this, l2[s + a3], i2, a3), c === j && (c = this._$AH[a3]), n || (n = !ot2(c) || c !== this._$AH[a3]), c === m ? t = m : t !== m && (t += (c ?? "") + o[a3 + 1]), this._$AH[a3] = c;
          }
          n && !r2 && this.j(t);
        }
        j(t) {
          t === m ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
        }
      };
      ei2 = class extends bt {
        constructor() {
          super(...arguments), this.type = 3;
        }
        j(t) {
          this.element[this.name] = t === m ? void 0 : t;
        }
      };
      ii2 = J ? J.emptyScript : "";
      si2 = class extends bt {
        constructor() {
          super(...arguments), this.type = 4;
        }
        j(t) {
          t && t !== m ? this.element.setAttribute(this.name, ii2) : this.element.removeAttribute(this.name);
        }
      };
      ri2 = class extends bt {
        constructor(t, i2, s, r2, o) {
          super(t, i2, s, r2, o), this.type = 5;
        }
        _$AI(t, i2 = this) {
          var s;
          if ((t = (s = X(this, t, i2, 0)) !== null && s !== void 0 ? s : m) === j) return;
          const r2 = this._$AH, o = t === m && r2 !== m || t.capture !== r2.capture || t.once !== r2.once || t.passive !== r2.passive, n = t !== m && (r2 === m || o);
          o && this.element.removeEventListener(this.name, this, r2), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
        }
        handleEvent(t) {
          var i2, s;
          typeof this._$AH == "function" ? this._$AH.call((s = (i2 = this.options) === null || i2 === void 0 ? void 0 : i2.host) !== null && s !== void 0 ? s : this.element, t) : this._$AH.handleEvent(t);
        }
      };
      ni2 = class {
        constructor(t, i2, s) {
          this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(t) {
          X(this, t);
        }
      };
      de = vt2.litHtmlPolyfillSupport;
      de?.(Bt, Ft), ((It = vt2.litHtmlVersions) !== null && It !== void 0 ? It : vt2.litHtmlVersions = []).push("2.8.0");
      oi2 = (e, t, i2) => {
        var s, r2;
        const o = (s = i2?.renderBefore) !== null && s !== void 0 ? s : t;
        let n = o._$litPart$;
        if (n === void 0) {
          const l2 = (r2 = i2?.renderBefore) !== null && r2 !== void 0 ? r2 : null;
          o._$litPart$ = n = new Ft(t.insertBefore(nt(), l2), l2, void 0, i2 ?? {});
        }
        return n._$AI(e), n;
      };
      A = class extends F {
        constructor() {
          super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
        }
        createRenderRoot() {
          var t, i2;
          const s = super.createRenderRoot();
          return (t = (i2 = this.renderOptions).renderBefore) !== null && t !== void 0 || (i2.renderBefore = s.firstChild), s;
        }
        update(t) {
          const i2 = this.render();
          this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = oi2(i2, this.renderRoot, this.renderOptions);
        }
        connectedCallback() {
          var t;
          super.connectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(true);
        }
        disconnectedCallback() {
          var t;
          super.disconnectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(false);
        }
        render() {
          return j;
        }
      };
      A.finalized = true, A._$litElement$ = true, (Nt = globalThis.litElementHydrateSupport) === null || Nt === void 0 || Nt.call(globalThis, { LitElement: A });
      ue = globalThis.litElementPolyfillSupport;
      ue?.({ LitElement: A });
      ((Pt = globalThis.litElementVersions) !== null && Pt !== void 0 ? Pt : globalThis.litElementVersions = []).push("3.3.3");
      ai2 = (e, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(i2) {
        i2.createProperty(t.key, e);
      } } : { kind: "field", key: /* @__PURE__ */ Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() {
        typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
      }, finisher(i2) {
        i2.createProperty(t.key, e);
      } };
      li2 = (e, t, i2) => {
        t.constructor.createProperty(i2, e);
      };
      ((Mt = window.HTMLSlotElement) === null || Mt === void 0 ? void 0 : Mt.prototype.assignedElements) != null;
      hi2 = { CHILD: 2 };
      ci2 = (e) => (...t) => ({ _$litDirective$: e, values: t });
      di2 = class {
        constructor(t) {
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AT(t, i2, s) {
          this._$Ct = t, this._$AM = i2, this._$Ci = s;
        }
        _$AS(t, i2) {
          return this.update(t, i2);
        }
        update(t, i2) {
          return this.render(...i2);
        }
      };
      Dt2 = class extends di2 {
        constructor(t) {
          if (super(t), this.et = m, t.type !== hi2.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
        }
        render(t) {
          if (t === m || t == null) return this.ft = void 0, this.et = t;
          if (t === j) return t;
          if (typeof t != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
          if (t === this.et) return this.ft;
          this.et = t;
          const i2 = [t];
          return i2.raw = i2, this.ft = { _$litType$: this.constructor.resultType, strings: i2, values: [] };
        }
      };
      Dt2.directiveName = "unsafeHTML", Dt2.resultType = 1;
      ui2 = ci2(Dt2);
      pi2 = /* @__PURE__ */ Symbol();
      gi2 = class {
        get taskComplete() {
          return this.t || (this.i === 1 ? this.t = new Promise(((t, i2) => {
            this.o = t, this.h = i2;
          })) : this.i === 3 ? this.t = Promise.reject(this.l) : this.t = Promise.resolve(this.u)), this.t;
        }
        constructor(t, i2, s) {
          this.p = 0, this.i = 0, (this._ = t).addController(this);
          const r2 = typeof i2 == "object" ? i2 : { task: i2, args: s };
          this.v = r2.task, this.j = r2.args, this.m = r2.argsEqual ?? vi2, this.k = r2.onComplete, this.A = r2.onError, this.autoRun = r2.autoRun ?? true, "initialValue" in r2 && (this.u = r2.initialValue, this.i = 2, this.O = this.T?.());
        }
        hostUpdate() {
          this.autoRun === true && this.S();
        }
        hostUpdated() {
          this.autoRun === "afterUpdate" && this.S();
        }
        T() {
          if (this.j === void 0) return;
          const t = this.j();
          if (!Array.isArray(t)) throw Error("The args function must return an array");
          return t;
        }
        async S() {
          const t = this.T(), i2 = this.O;
          this.O = t, t === i2 || t === void 0 || i2 !== void 0 && this.m(i2, t) || await this.run(t);
        }
        async run(t) {
          let i2, s;
          t ??= this.T(), this.O = t, this.i === 1 ? this.q?.abort() : (this.t = void 0, this.o = void 0, this.h = void 0), this.i = 1, this.autoRun === "afterUpdate" ? queueMicrotask((() => this._.requestUpdate())) : this._.requestUpdate();
          const r2 = ++this.p;
          this.q = new AbortController();
          let o = false;
          try {
            i2 = await this.v(t, { signal: this.q.signal });
          } catch (n) {
            o = true, s = n;
          }
          if (this.p === r2) {
            if (i2 === pi2) this.i = 0;
            else {
              if (o === false) {
                try {
                  this.k?.(i2);
                } catch {
                }
                this.i = 2, this.o?.(i2);
              } else {
                try {
                  this.A?.(s);
                } catch {
                }
                this.i = 3, this.h?.(s);
              }
              this.u = i2, this.l = s;
            }
            this._.requestUpdate();
          }
        }
        abort(t) {
          this.i === 1 && this.q?.abort(t);
        }
        get value() {
          return this.u;
        }
        get error() {
          return this.l;
        }
        get status() {
          return this.i;
        }
        render(t) {
          switch (this.i) {
            case 0:
              return t.initial?.();
            case 1:
              return t.pending?.();
            case 2:
              return t.complete?.(this.value);
            case 3:
              return t.error?.(this.error);
            default:
              throw Error("Unexpected status: " + this.i);
          }
        }
      };
      vi2 = (e, t) => e === t || e.length === t.length && e.every(((i2, s) => !Zt2(i2, t[s])));
      fi2 = mi2();
      $i2 = /* @__PURE__ */ ls2(fi2);
      bi2 = Object.defineProperty;
      g = (e, t, i2, s) => {
        for (var r2 = void 0, o = e.length - 1, n; o >= 0; o--) (n = e[o]) && (r2 = n(t, i2, r2) || r2);
        return r2 && bi2(t, i2, r2), r2;
      };
      B = (e = "", t) => {
        customElements.get(e) || customElements.define(e, t);
      };
      ge2 = (e, t) => [...e].reduce((i2, s) => t?.skip?.includes(s.name) ? i2 : `${i2}${s.name}="${s.value}" `, "");
      ht = class extends A {
        constructor() {
          super(...arguments), this.name = "", this.fallbackTag = null, this.defaultStyle = null, this.refElement = null;
        }
        connectedCallback() {
          super.connectedCallback();
          let e = this;
          for (; e.parentNode; )
            e = e.parentNode;
          if (this.refElement = e.host.querySelector(`[refElement="${this.name}"]`), this.refElement && this.fallbackTag !== null && this.refElement.tagName.toLowerCase() !== this.fallbackTag)
            throw new Error(`Your html tag to customize ${this.name} should be <${this.fallbackTag}></<${this.fallbackTag}>`);
        }
        render() {
          const e = ge2(this.attributes, { skip: ["name", "fallbacktag"] }), t = ge2(this.refElement?.attributes ?? []);
          return w`${ui2(`
      <style>${this.defaultStyle}</style>
      <${this.fallbackTag} ${e} ${t}>
        <slot></slot>
      </${this.fallbackTag}>`)}`;
        }
      };
      g([v()], ht.prototype, "name");
      g([v({ type: String || null })], ht.prototype, "fallbackTag");
      g([v({ type: String || null })], ht.prototype, "defaultStyle");
      g([v({ type: String || null })], ht.prototype, "refElement");
      B("appcues-use-ref", ht);
      yi2 = () => {
        let e = {};
        const t = window.AppcuesSettings?.userIdSignature;
        return t && (e = { Authorization: `Bearer ${t}` }), e;
      };
      wi2 = async (e, t) => {
        const i2 = yi2();
        return await fetch(e, { headers: i2, ...t });
      };
      _i2 = "https://api.appcues.net/v1/";
      xi2 = $`
  .container {
    background: #fff;
    box-shadow: var(--flows-list-block-shadow);
    border-radius: var(--flows-list-block-radius);
    padding: 8px 0;
    width: 100%;
  }

  .container .loading,
  .container .error-message {
    align-items: center;
    color: var(--flows-list-block-color);
    display: flex;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    justify-content: center;
    line-height: 160%;
    padding: 16px;
    text-align: center;
  }
`;
      Ai2 = $`
  slot[name='empty-message'],
  ::slotted(p[slot='empty-message']) {
    align-items: center;
    color: var(--flows-list-block-color);
    display: flex;
    font-style: normal;
    font-weight: 400;
    justify-content: center;
    line-height: 160%;
    padding: 16px;
    text-align: center;
    font-size: 14px;
  }
`;
      ki2 = $`
  ul {
    list-style-type: square;
    list-style-position: inside;
    margin: 0;
    padding: 0 4px;
  }
`;
      Ci2 = $`
  li {
    cursor: pointer;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    padding: 8px 16px;
    border-radius: var(--flows-list-block-item-radius);
    transition: background-color 0.3s ease 0s;
  }

  li:hover {
    background-color: var(--flows-list-block-background-hover);
  }

  li::marker {
    color: var(--flows-list-block-marker-color);
  }

  li:hover > span {
    background-color: var(--flows-list-block-background-hover);
  }

  li > span {
    color: var(--flows-list-block-color);
  }

  li appcues-use-ref {
    display: inline-flex;
    max-width: calc(100% - 20px);
  }
`;
      Si2 = $`
  ::slotted(h1[slot='title']),
  ::slotted(h2[slot='title']),
  ::slotted(h3[slot='title']) {
    color: var(--flows-list-block-color);
    font-size: 15px;
    font-weight: 700;
    line-height: 24px;
    margin: 0 0 8px;
    padding: 0 16px 0;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    max-height: 48px;
    max-width: calc(100% - 32px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
`;
      mt = window;
      Y2 = mt.trustedTypes;
      ve2 = Y2 ? Y2.createPolicy("lit-html", { createHTML: (e) => e }) : void 0;
      qt2 = "$lit$";
      H2 = `lit$${(Math.random() + "").slice(9)}$`;
      Ne = "?" + H2;
      Ei2 = `<${Ne}>`;
      z = document;
      ft = () => z.createComment("");
      at = (e) => e === null || typeof e != "object" && typeof e != "function";
      Pe2 = Array.isArray;
      Ti2 = (e) => Pe2(e) || typeof e?.[Symbol.iterator] == "function";
      Lt = `[ 	
\f\r]`;
      st2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
      me2 = /-->/g;
      fe = />/g;
      U = RegExp(`>|${Lt}(?:([^\\s"'>=/]+)(${Lt}*=${Lt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
      $e2 = /'/g;
      be = /"/g;
      Me2 = /^(?:script|style|textarea|title)$/i;
      Ue2 = (e) => (t, ...i2) => ({ _$litType$: e, strings: t, values: i2 });
      rt2 = Ue2(1);
      yt2 = Ue2(2);
      lt = /* @__PURE__ */ Symbol.for("lit-noChange");
      b = /* @__PURE__ */ Symbol.for("lit-nothing");
      ye2 = /* @__PURE__ */ new WeakMap();
      L = z.createTreeWalker(z, 129, null, false);
      Ii2 = (e, t) => {
        const i2 = e.length - 1, s = [];
        let r2, o = t === 2 ? "<svg>" : "", n = st2;
        for (let l2 = 0; l2 < i2; l2++) {
          const a3 = e[l2];
          let c, h2, d2 = -1, p2 = 0;
          for (; p2 < a3.length && (n.lastIndex = p2, h2 = n.exec(a3), h2 !== null); ) p2 = n.lastIndex, n === st2 ? h2[1] === "!--" ? n = me2 : h2[1] !== void 0 ? n = fe : h2[2] !== void 0 ? (Me2.test(h2[2]) && (r2 = RegExp("</" + h2[2], "g")), n = U) : h2[3] !== void 0 && (n = U) : n === U ? h2[0] === ">" ? (n = r2 ?? st2, d2 = -1) : h2[1] === void 0 ? d2 = -2 : (d2 = n.lastIndex - h2[2].length, c = h2[1], n = h2[3] === void 0 ? U : h2[3] === '"' ? be : $e2) : n === be || n === $e2 ? n = U : n === me2 || n === fe ? n = st2 : (n = U, r2 = void 0);
          const y2 = n === U && e[l2 + 1].startsWith("/>") ? " " : "";
          o += n === st2 ? a3 + Ei2 : d2 >= 0 ? (s.push(c), a3.slice(0, d2) + qt2 + a3.slice(d2) + H2 + y2) : a3 + H2 + (d2 === -2 ? (s.push(void 0), l2) : y2);
        }
        return [Re2(e, o + (e[i2] || "<?>") + (t === 2 ? "</svg>" : "")), s];
      };
      $t = class {
        constructor({ strings: e, _$litType$: t }, i2) {
          let s;
          this.parts = [];
          let r2 = 0, o = 0;
          const n = e.length - 1, l2 = this.parts, [a3, c] = Ii2(e, t);
          if (this.el = $t.createElement(a3, i2), L.currentNode = this.el.content, t === 2) {
            const h2 = this.el.content, d2 = h2.firstChild;
            d2.remove(), h2.append(...d2.childNodes);
          }
          for (; (s = L.nextNode()) !== null && l2.length < n; ) {
            if (s.nodeType === 1) {
              if (s.hasAttributes()) {
                const h2 = [];
                for (const d2 of s.getAttributeNames()) if (d2.endsWith(qt2) || d2.startsWith(H2)) {
                  const p2 = c[o++];
                  if (h2.push(d2), p2 !== void 0) {
                    const y2 = s.getAttribute(p2.toLowerCase() + qt2).split(H2), S2 = /([.?@])?(.*)/.exec(p2);
                    l2.push({ type: 1, index: r2, name: S2[2], strings: y2, ctor: S2[1] === "." ? Ni2 : S2[1] === "?" ? Mi2 : S2[1] === "@" ? Ui2 : wt });
                  } else l2.push({ type: 6, index: r2 });
                }
                for (const d2 of h2) s.removeAttribute(d2);
              }
              if (Me2.test(s.tagName)) {
                const h2 = s.textContent.split(H2), d2 = h2.length - 1;
                if (d2 > 0) {
                  s.textContent = Y2 ? Y2.emptyScript : "";
                  for (let p2 = 0; p2 < d2; p2++) s.append(h2[p2], ft()), L.nextNode(), l2.push({ type: 2, index: ++r2 });
                  s.append(h2[d2], ft());
                }
              }
            } else if (s.nodeType === 8) if (s.data === Ne) l2.push({ type: 2, index: r2 });
            else {
              let h2 = -1;
              for (; (h2 = s.data.indexOf(H2, h2 + 1)) !== -1; ) l2.push({ type: 7, index: r2 }), h2 += H2.length - 1;
            }
            r2++;
          }
        }
        static createElement(e, t) {
          const i2 = z.createElement("template");
          return i2.innerHTML = e, i2;
        }
      };
      Hi2 = class {
        constructor(e, t) {
          this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
        }
        get parentNode() {
          return this._$AM.parentNode;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        u(e) {
          var t;
          const { el: { content: i2 }, parts: s } = this._$AD, r2 = ((t = e?.creationScope) !== null && t !== void 0 ? t : z).importNode(i2, true);
          L.currentNode = r2;
          let o = L.nextNode(), n = 0, l2 = 0, a3 = s[0];
          for (; a3 !== void 0; ) {
            if (n === a3.index) {
              let c;
              a3.type === 2 ? c = new Jt2(o, o.nextSibling, this, e) : a3.type === 1 ? c = new a3.ctor(o, a3.name, a3.strings, this, e) : a3.type === 6 && (c = new Ri2(o, this, e)), this._$AV.push(c), a3 = s[++l2];
            }
            n !== a3?.index && (o = L.nextNode(), n++);
          }
          return L.currentNode = z, r2;
        }
        v(e) {
          let t = 0;
          for (const i2 of this._$AV) i2 !== void 0 && (i2.strings !== void 0 ? (i2._$AI(e, i2, t), t += i2.strings.length - 2) : i2._$AI(e[t])), t++;
        }
      };
      Jt2 = class {
        constructor(e, t, i2, s) {
          var r2;
          this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i2, this.options = s, this._$Cp = (r2 = s?.isConnected) === null || r2 === void 0 || r2;
        }
        get _$AU() {
          var e, t;
          return (t = (e = this._$AM) === null || e === void 0 ? void 0 : e._$AU) !== null && t !== void 0 ? t : this._$Cp;
        }
        get parentNode() {
          let e = this._$AA.parentNode;
          const t = this._$AM;
          return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
        }
        get startNode() {
          return this._$AA;
        }
        get endNode() {
          return this._$AB;
        }
        _$AI(e, t = this) {
          e = K(this, e, t), at(e) ? e === b || e == null || e === "" ? (this._$AH !== b && this._$AR(), this._$AH = b) : e !== this._$AH && e !== lt && this._(e) : e._$litType$ !== void 0 ? this.g(e) : e.nodeType !== void 0 ? this.$(e) : Ti2(e) ? this.T(e) : this._(e);
        }
        k(e) {
          return this._$AA.parentNode.insertBefore(e, this._$AB);
        }
        $(e) {
          this._$AH !== e && (this._$AR(), this._$AH = this.k(e));
        }
        _(e) {
          this._$AH !== b && at(this._$AH) ? this._$AA.nextSibling.data = e : this.$(z.createTextNode(e)), this._$AH = e;
        }
        g(e) {
          var t;
          const { values: i2, _$litType$: s } = e, r2 = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = $t.createElement(Re2(s.h, s.h[0]), this.options)), s);
          if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === r2) this._$AH.v(i2);
          else {
            const o = new Hi2(r2, this), n = o.u(this.options);
            o.v(i2), this.$(n), this._$AH = o;
          }
        }
        _$AC(e) {
          let t = ye2.get(e.strings);
          return t === void 0 && ye2.set(e.strings, t = new $t(e)), t;
        }
        T(e) {
          Pe2(this._$AH) || (this._$AH = [], this._$AR());
          const t = this._$AH;
          let i2, s = 0;
          for (const r2 of e) s === t.length ? t.push(i2 = new Jt2(this.k(ft()), this.k(ft()), this, this.options)) : i2 = t[s], i2._$AI(r2), s++;
          s < t.length && (this._$AR(i2 && i2._$AB.nextSibling, s), t.length = s);
        }
        _$AR(e = this._$AA.nextSibling, t) {
          var i2;
          for ((i2 = this._$AP) === null || i2 === void 0 || i2.call(this, false, true, t); e && e !== this._$AB; ) {
            const s = e.nextSibling;
            e.remove(), e = s;
          }
        }
        setConnected(e) {
          var t;
          this._$AM === void 0 && (this._$Cp = e, (t = this._$AP) === null || t === void 0 || t.call(this, e));
        }
      };
      wt = class {
        constructor(e, t, i2, s, r2) {
          this.type = 1, this._$AH = b, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = r2, i2.length > 2 || i2[0] !== "" || i2[1] !== "" ? (this._$AH = Array(i2.length - 1).fill(new String()), this.strings = i2) : this._$AH = b;
        }
        get tagName() {
          return this.element.tagName;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(e, t = this, i2, s) {
          const r2 = this.strings;
          let o = false;
          if (r2 === void 0) e = K(this, e, t, 0), o = !at(e) || e !== this._$AH && e !== lt, o && (this._$AH = e);
          else {
            const n = e;
            let l2, a3;
            for (e = r2[0], l2 = 0; l2 < r2.length - 1; l2++) a3 = K(this, n[i2 + l2], t, l2), a3 === lt && (a3 = this._$AH[l2]), o || (o = !at(a3) || a3 !== this._$AH[l2]), a3 === b ? e = b : e !== b && (e += (a3 ?? "") + r2[l2 + 1]), this._$AH[l2] = a3;
          }
          o && !s && this.j(e);
        }
        j(e) {
          e === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
        }
      };
      Ni2 = class extends wt {
        constructor() {
          super(...arguments), this.type = 3;
        }
        j(e) {
          this.element[this.name] = e === b ? void 0 : e;
        }
      };
      Pi2 = Y2 ? Y2.emptyScript : "";
      Mi2 = class extends wt {
        constructor() {
          super(...arguments), this.type = 4;
        }
        j(e) {
          e && e !== b ? this.element.setAttribute(this.name, Pi2) : this.element.removeAttribute(this.name);
        }
      };
      Ui2 = class extends wt {
        constructor(e, t, i2, s, r2) {
          super(e, t, i2, s, r2), this.type = 5;
        }
        _$AI(e, t = this) {
          var i2;
          if ((e = (i2 = K(this, e, t, 0)) !== null && i2 !== void 0 ? i2 : b) === lt) return;
          const s = this._$AH, r2 = e === b && s !== b || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive, o = e !== b && (s === b || r2);
          r2 && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, e), this._$AH = e;
        }
        handleEvent(e) {
          var t, i2;
          typeof this._$AH == "function" ? this._$AH.call((i2 = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null && i2 !== void 0 ? i2 : this.element, e) : this._$AH.handleEvent(e);
        }
      };
      Ri2 = class {
        constructor(e, t, i2) {
          this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i2;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(e) {
          K(this, e);
        }
      };
      we = mt.litHtmlPolyfillSupport;
      we?.($t, Jt2), ((Rt = mt.litHtmlVersions) !== null && Rt !== void 0 ? Rt : mt.litHtmlVersions = []).push("2.8.0");
      Li2 = yt2`
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="40px"
    height="40px"
    fill="#0072D6"
    viewBox="0 0 40 40"
    enable-background="new 0 0 40 40"
    xml:space="preserve"
  >
    <path
      opacity="0.2"
      fill="#0072D6"
      d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
    />
    <path
      fill="#0072D6"
      d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
 C22.32,8.481,24.301,9.057,26.013,10.047z"
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 20 20"
        to="360 20 20"
        keySplines="0.17 0.27 0.8 0.65"
        calcMode="spline"
        dur="0.6s"
        repeatCount="indefinite"
        keyTimes="0;1"
      />
    </path>
  </svg>
`;
      Oi2 = JSON.stringify([{ id: "1", name: "Item 1", publicName: "Item 1 public lorem ipsum dolor lorem impsum" }, { id: "2", name: "Item 2" }, { id: "3", name: "Item 3" }, { id: "4", name: "Item 4" }, { id: "5", name: "Item 5" }]);
      ji2 = async ({ accountId: e, userId: t }, i2) => {
        if (!e || !t)
          return [];
        const s = window.location.href, r2 = new URL(`${_i2}/accounts/${e}/users/${t}/widget`);
        return r2.searchParams.set("url", s), r2.searchParams.set("order_by", i2), (await wi2(r2.toString())).json();
      };
      D = class extends A {
        constructor() {
          super(...arguments), this.listItems = [], this.orderBy = "sort_order", this.limit = 5, this.listMock = Oi2, this.mode = "live", this.fetchListItems = async () => {
            if (this.mode === "preview")
              return this.listItems = JSON.parse(this.listMock), JSON.parse(this.listMock);
            const e = await Appcues?.user() ?? {}, { contents: t } = await ji2({ accountId: AppcuesBundleSettings?.accountId, userId: e?.userId }, this.orderBy), i2 = t.map(({ id: s, name: r2, public_name: o }) => ({ id: s, name: r2, publicName: o }));
            return this.listItems = i2, i2;
          }, this.getListItems = new gi2(this, { task: this.fetchListItems, args: () => [] }), this.handleItemClick = (e) => () => {
            const t = new CustomEvent("flow-item-clicked", { detail: this.listItems.find((i2) => i2.id === e), bubbles: true, composed: true });
            this.dispatchEvent(t);
          }, this.handleItemHover = (e) => () => {
            const t = new CustomEvent("flow-item-hovered", { detail: this.listItems.find((i2) => i2.id === e), bubbles: true, composed: true });
            this.dispatchEvent(t);
          }, this.containerTemplate = (e) => w`
    <appcues-use-ref
      name="list-container"
      fallbackTag="ul"
      defaultStyle=${ki2}
    >
      ${e.slice(0, this.limit).map(this.itemTemplate)}
    </appcues-use-ref>
  `, this.itemTemplate = (e) => w`
      <li
        @click="${this.handleItemClick(e.id)}"
        @mouseover="${this.handleItemHover(e.id)}"
      >
        <appcues-use-ref fallbackTag="span" name="list-item">
          ${e.publicName ?? e.name}
        </appcues-use-ref>
      </li>
    `, this.emptyMessageTemplate = w`
    <slot name="empty-message">
      <p>Nothing to see here at the moment</p>
    </slot>
  `;
        }
        connectedCallback() {
          super.connectedCallback(), this.mode !== "live" && new MutationObserver((t) => {
            t.forEach((i2) => {
              const [s] = i2.addedNodes;
              (i2.type === "attributes" || s && ["UL", "LI", "SPAN"].includes(s.nodeName)) && this.getListItems.run();
            });
          }).observe(this, { childList: true, subtree: true, attributes: true });
        }
        render() {
          return w`
      <div class="container">
        <slot name="title"></slot>
        ${this.getListItems.render({ pending: () => w`<div class="loading">${Li2}</div>`, complete: (e) => e.slice(0, this.limit).length === 0 ? this.emptyMessageTemplate : this.containerTemplate(e), error: () => w`
              <div class="error-message">Nothing to see here at the moment</div>
            ` })}
      </div>
    `;
        }
      };
      D.styles = [xi2, Ai2, Si2, Ci2];
      g([N()], D.prototype, "listItems");
      g([v()], D.prototype, "orderBy");
      g([v({ type: Number })], D.prototype, "limit");
      g([v()], D.prototype, "listMock");
      g([v({ type: String })], D.prototype, "mode");
      B("appcues-flows-list", D);
      zi2 = $`
  .btn-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .btn-wrapper button {
    background-color: var(--launcher-main-color, #0072d6);
    color: white;
    cursor: pointer;
    outline-color: #0072d6;
    outline-width: 2px;
  }

  .btn-wrapper button {
    border: none;
    border-start-start-radius: 80px;
    border-end-start-radius: 80px;
    border-start-end-radius: 0;
    border-end-end-radius: 0;
    padding-inline: 16px 8px;
    padding-block: 4px;
    height: 52px;
    outline-offset: 3px;
  }

  .btn-wrapper ::slotted(button) {
    padding: 10px 16px;
    border-radius: 80px;
    border: 2px solid transparent;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    outline-offset: 4px;
  }

  .btn-wrapper button:hover:not(:active):not([disabled]) {
    background-color: var(--launcher-hover-color, #4848eb) !important;
  }

  .btn-wrapper button:active {
    background-color: var(--launcher-active-color, #8c8cff) !important;
  }

  .btn-wrapper > .slot-wrapper {
    border: 2px solid white;
    margin-top: -2px;
    border-radius: 80px;
    width: max-content;
  }

  .btn-wrapper > .slot-wrapper.active {
    margin-inline-start: -18px;
  }
`;
      Bi2 = $`
  .checklist-content {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-inline-end: 18px;
    justify-content: center;
    gap: 6px;
    line-height: 1.2;
  }
`;
      Di2 = $`
  .progress-wrapper {
    display: flex;
    align-items: center;
    gap: 2px;
    border-radius: 6px;
    min-width: 100px;
    overflow: hidden;
  }

  .progress-bar,
  progress {
    background-color: rgba(255, 255, 255, 0.4);
    height: 4px;
    flex-grow: 1;
  }

  .progress-bar.completed {
    background-color: white;
  }

  progress[value] {
    --color: white;
    --background: rgba(255, 255, 255, 0.4);
    appearance: none;
    background: var(--background);
    border: none;
  }

  progress[value]::-webkit-progress-bar {
    background: var(--background);
  }

  progress[value]::-webkit-progress-value {
    background: var(--color);
  }

  progress[value]::-moz-progress-bar {
    background: var(--color);
  }
`;
      C = class extends A {
        constructor() {
          super(...arguments), this.title = "Checklist", this.totalItems = 0, this.completedItems = 0, this.activeColor = "#4848eb", this.hoverColor = "#4848eb", this.mainColor = "#0072d6", this.checklistId = "", this.handleSlotchange = (e) => {
            const r2 = (e.target?.assignedNodes({ flatten: true })).find((l2) => l2.querySelector ? l2.querySelector("button") : false)?.querySelector("button");
            if (!r2) return;
            const { backgroundColor: o, background: n } = getComputedStyle(r2);
            this.mainColor = o || n, this.style.setProperty("--launcher-main-color", this.mainColor);
          }, this.progressbar = () => {
            if (this.totalItems > 8)
              return rt2`<progress
        id="items"
        value="${this.completedItems}"
        max="${this.totalItems}"
      ></progress>`;
            const e = [];
            for (let t = 0; t < this.totalItems; t++)
              e.push(rt2`<div
          class="progress-bar ${t < this.completedItems && "completed"}"
        ></div>`);
            return e;
          }, this.slotElement = () => rt2`
    <slot @slotchange=${this.handleSlotchange}></slot>
  `;
        }
        connectedCallback() {
          super.connectedCallback(), this.totalItems = Number.parseInt(this.getAttribute("totalitems") || "0", 10), this.completedItems = Number.parseInt(this.getAttribute("completeditems") || "0", 10), this.title = this.getAttribute("title") || "Checklist", sA((e) => {
            const t = e, { id: i2, name: s, totalItems: r2, completedItems: o } = t.detail;
            this.totalItems = r2, this.completedItems = o, this.title = s, this.checklistId = i2, aA();
          }), cA(() => {
            this.totalItems = 0, this.completedItems = 0, this.title = "Checklist", this.checklistId = "";
          });
        }
        attributeChangedCallback(e, t, i2) {
          if (e === "totalitems") {
            const s = Number.parseInt(i2 || "0", 10);
            this.totalItems = s > 0 ? s : 0;
          }
          if (e === "completeditems") {
            const s = Number.parseInt(i2 || "0", 10);
            s > this.totalItems ? this.completedItems = this.totalItems : s < 0 ? this.completedItems = 0 : this.completedItems = s;
          }
          e === "title" && (this.title = i2 || "Checklist"), e === "hovercolor" && (this.hoverColor = i2 || "#4848eb", this.style.setProperty("--launcher-hover-color", this.hoverColor)), e === "activecolor" && (this.activeColor = i2 || "#8c8cff", this.style.setProperty("--launcher-active-color", this.activeColor));
        }
        render() {
          return rt2`
      <div class="btn-wrapper">
        ${this.totalItems === 0 ? this.slotElement() : rt2`
              <button @click="${() => lA(this.checklistId)}">
                <div class="checklist-content">
                  ${this.title}
                  <div class="progress-wrapper" aria-role="progressbar">
                    ${this.progressbar()}
                  </div>
                </div>
              </button>
              <div
                class="slot-wrapper ${this.totalItems > 0 && "active"}"
                @click="${{ handleEvent: () => lA(this.checklistId, true), capture: true }}"
              >
                ${this.slotElement()}
              </div>
            `}
      </div>
    `;
        }
      };
      C.styles = [zi2, Bi2, Di2];
      g([v()], C.prototype, "title");
      g([v()], C.prototype, "totalItems");
      g([v()], C.prototype, "completedItems");
      g([v()], C.prototype, "activeColor");
      g([v()], C.prototype, "hoverColor");
      g([N()], C.prototype, "mainColor");
      g([N()], C.prototype, "checklistId");
      B("appcues-checklist-wrapper", C);
      qi2 = $`
  .page {
    display: block;
    width: 100%;
    height: 100%;
  }

  .idle {
    display: none;
  }

  .hidden {
    pointer-events: none;
  }

  .animated {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
      Vi2 = $`
  .slide-in-bottom {
    animation: slide-in-bottom 0.4s cubic-bezier(0.15, 1.03, 0.8, 1.03) forwards;
  }

  @keyframes slide-in-bottom {
    0% {
      opacity: 0;
      transform: translateY(80%);
    }
    20% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
      Wi2 = $`
  .slide-out-bottom {
    animation: slide-out-bottom 0.4s cubic-bezier(0.7, 0, 0.57, 0.55) forwards;
  }

  @keyframes slide-out-bottom {
    0% {
      opacity: 1;
      transform: translateY(0);
    }

    80% {
      opacity: 1;
    }

    99% {
      transform: translateY(80%);
      opacity: 0;
    }

    100% {
      display: none;
      max-height: 0;
      overflow: hidden;
    }
  }
`;
      _t2 = class extends A {
        constructor() {
          super(...arguments), this.status = "idle", this.animation = "", this.minHeight = "auto";
        }
        show({ animation: e = "" } = {}) {
          e !== "" && (this.animation = e), this.status = "showing";
        }
        hide({ animation: e = "" } = {}) {
          e !== "" && (this.animation = e), this.status = "hidden";
        }
        render() {
          return w`
      <div
        class="page ${this.status} ${this.animation && "animated"} ${this.animation}"
        aria-hidden="${["hidden", "idle"].includes(this.status)}"
      >
        <slot></slot>
      </div>
    `;
        }
      };
      _t2.styles = [qi2, Vi2, Wi2];
      g([N()], _t2.prototype, "status");
      g([v()], _t2.prototype, "minHeight");
      B("appcues-page", _t2);
      Zi2 = $`
  .grow {
    animation: grow-min-height 0.4s cubic-bezier(0.7, 0, 0.57, 0.55) forwards;
    min-height: auto;
  }

  .shrink {
    animation: shrink-min-height 0.4s cubic-bezier(0.7, 0, 0.57, 0.55) forwards;
  }
`;
      q = class extends A {
        constructor() {
          super(...arguments), this.currentPage = 0, this.pages = [], this.currentHeight = "auto", this.entry = "slide-in-bottom", this.exit = "slide-out-bottom";
        }
        getChildren() {
          return this.shadowRoot ? this.shadowRoot.querySelector("slot")?.assignedElements({ flatten: true }) ?? [] : [];
        }
        updateHeight(e = this.currentPage) {
          const t = this.pages[e].minHeight || "auto";
          this.currentHeight = t !== "auto" ? t : "auto";
        }
        showFirstPage() {
          this.updateHeight(), this.pages[this.currentPage].show();
        }
        prev() {
          this.currentPage <= 0 || (this.updateHeight(this.currentPage - 1), this.pages[this.currentPage].hide({ animation: this.exit }), this.pages[this.currentPage - 1].show(), this.currentPage -= 1);
        }
        next() {
          this.currentPage >= this.pages.length - 1 || (this.currentPage += 1, this.updateHeight(), this.pages[this.currentPage].show({ animation: this.entry }), this.pages[this.currentPage - 1].hide());
        }
        goTo(e = 0) {
          e !== this.currentPage && (this.pages[e].show({ animation: e !== 0 ? this.entry : "" }), this.pages[this.currentPage].hide({ animation: this.currentPage !== 0 ? this.exit : "" }), this.currentPage = e, this.updateHeight());
        }
        firstUpdated() {
          this.pages = this.getChildren(), this.showFirstPage();
        }
        connectedCallback() {
          super.connectedCallback();
        }
        render() {
          return w`
      <style>
        @keyframes grow-min-height {
          0% {
            min-height: 0;
          }

          100% {
            min-height: ${this.currentHeight};
          }
        }

        @keyframes shrink-min-height {
          0% {
            min-height: ${this.currentHeight};
          }

          100% {
            min-height: auto;
          }
        }
      </style>
      <div
        class="${this.currentPage !== 0 ? "grow" : "shrink"}"
        style="position: relative;"
      >
        <slot></slot>
      </div>
    `;
        }
      };
      q.styles = [Zi2];
      g([N()], q.prototype, "currentPage");
      g([N()], q.prototype, "pages");
      g([N()], q.prototype, "currentHeight");
      g([v()], q.prototype, "entry");
      g([v()], q.prototype, "exit");
      B("appcues-navigation-stack", q);
      Fi2 = yt2`
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="40px"
    height="40px"
    fill="#0072D6"
    viewBox="0 0 40 40"
    enable-background="new 0 0 40 40"
    xml:space="preserve"
  >
    <path
      opacity="0.2"
      fill="#0072D6"
      d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
    />
    <path
      fill="#0072D6"
      d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
 C22.32,8.481,24.301,9.057,26.013,10.047z"
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 20 20"
        to="360 20 20"
        keySplines="0.17 0.27 0.8 0.65"
        calcMode="spline"
        dur="0.6s"
        repeatCount="indefinite"
        keyTimes="0;1"
      />
    </path>
  </svg>
`;
      Ji2 = yt2`
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g id="material-icon" clip-path="url(#clip0_19386_6120)">
      <path
        id="Vector" 
        d="M6.12522 8.00305L11.9239 13.8017C12.1702 14.048 12.2953 14.3528 12.2993 14.7161C12.3033 15.0794 12.1822 15.3842 11.9359 15.6305C11.6896 15.8769 11.3828 16 11.0155 16C10.6481 16 10.3413 15.8769 10.095 15.6305L3.93523 9.47075C3.7234 9.25892 3.57007 9.02893 3.47524 8.78077C3.38042 8.53262 3.33301 8.27338 3.33301 8.00305C3.33301 7.73273 3.38042 7.47349 3.47524 7.22534C3.57007 6.97718 3.7234 6.74719 3.93523 6.53536L10.095 0.375561C10.3413 0.129259 10.6461 0.00410428 11.0094 9.62603e-05C11.3727 -0.00391176 11.6776 0.117242 11.9239 0.363558C12.1702 0.60986 12.2933 0.916664 12.2933 1.28397C12.2933 1.65128 12.1702 1.95809 11.9239 2.20441L6.12522 8.00305Z"
        fill="currentColor"
      />
    </g>
  </svg>
`;
      _e = yt2`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"  viewBox="0 0 24 24">
      <path 
        fill="currentColor" 
        d="M8.9 17.81a8.6 8.6 0 0 1-6.31-2.59A8.6 8.6 0 0 1 0 8.91c0-2.49.86-4.6 2.59-6.32A8.6 8.6 0 0 1 8.9 0a8.6 8.6 0 0 1 6.32 2.59A8.6 8.6 0 0 1 17.8 8.9a8.39 8.39 0 0 1-1.68 5.07l7.45 7.46c.28.29.42.65.42 1.07 0 .43-.14.78-.43 1.06-.29.29-.64.43-1.07.43-.43 0-.78-.14-1.07-.43L14 16.13a8.42 8.42 0 0 1-5.09 1.68Zm0-3.05c1.63 0 3.01-.57 4.15-1.7a5.65 5.65 0 0 0 1.7-4.15c0-1.63-.56-3.02-1.7-4.15a5.64 5.64 0 0 0-4.15-1.7c-1.63 0-3 .56-4.14 1.7a5.65 5.65 0 0 0-1.7 4.15c0 1.63.56 3 1.7 4.15a5.64 5.64 0 0 0 4.14 1.7Z" 
      />
  </svg>
`;
      Xi2 = $`
  @keyframes fade-in {
    0% {
      opacity: 0;
      display: none;
    }

    100% {
      opacity: 1;
      display: flex;
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
      display: flex;
    }

    100% {
      opacity: 0;
      display: none;
    }
  }

  @keyframes expand {
    0% {
      width: 0%;
    }

    100% {
      width: 100%;
    }
  }

  @keyframes collapse {
    0% {
      width: 100%;
    }

    100% {
      width: 0%;
    }
  }

  @keyframes slide-in {
    0% {
      transform: translateX(120px);
    }

    100% {
      transform: translateX(0);
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(120px);
    }
  }
`;
      Yi2 = $`
  :host {
    display: flex;
    width: 100%;
  }

  .container {
    align-items: center;
    display: flex;
    height: 40px;
    justify-content: space-between;
    position: relative;
    width: 100%;
  }

  svg {
    height: 16px;
  }

  button {
    align-items: center;
    color: inherit;
    cursor: pointer;
    background: transparent;
    border: none;
    display: flex;
    justify-content: center;
    padding: 12px;
  }
`;
      Ki2 = $`
  .search-container {
    align-items: center;
    display: none;
    opacity: 0;
    position: absolute;
    width: calc(100% + 12px);
    left: -12px;
  }

  .search-container input {
    border: none;
    border-start-start-radius: 8px;
    border-end-start-radius: 8px;
    border-start-end-radius: 0;
    border-end-end-radius: 0;
    box-sizing: border-box;
    height: 40px;
    padding: 8px 12px 8px 16px;
    width: 0;
  }

  .search-container input:focus {
    outline: none;
  }

  .search-container .search-form {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    margin-bottom: 0;
  }

  .search-container .search-button {
    background: white;
    border-start-end-radius: 8px;
    border-end-end-radius: 8px;
    border-start-start-radius: 0;
    border-end-start-radius: 0;
    padding: 0 12px;
  }

  .search-container .search-button svg {
    width: 16px;
  }

  .search-container .search-button svg path {
    fill: black;
  }

  .search-container.show {
    animation: fade-in 0.3s cubic-bezier(0.3, 0.4, 0.3, 0.8) forwards;
    display: flex;
  }

  .search-container.show input {
    animation: expand 0.3s cubic-bezier(0.3, 0.4, 0.3, 0.8) forwards;
    width: 100%;
  }

  .search-container.hide {
    animation: fade-out 0.3s cubic-bezier(0.3, 0.4, 0.3, 0.8) forwards;
  }

  .search-container.hide input {
    animation: collapse 0.3s cubic-bezier(0.3, 0.4, 0.3, 0.8) forwards;
    width: 0;
  }

  .content-container {
    align-items: center;
    display: flex;
    height: 40px;
    justify-content: space-between;
    width: 100%;
  }

  .content-container .content {
    text-wrap: nowrap;
  }

  .content-container.show {
    display: flex;
    animation: fade-in 0.3s cubic-bezier(0.3, 0.4, 0.3, 0.8) forwards;
  }

  .content-container.show .content {
    animation: slide-in 0.3s cubic-bezier(0.3, 0.4, 0.3, 0.8) forwards;
  }

  .content-container.hide {
    animation: fade-out 0.3s cubic-bezier(0.3, 0.4, 0.3, 0.8) forwards;
  }

  .content-container.hide .content {
    animation: slide-out 0.3s cubic-bezier(0.3, 0.4, 0.3, 0.8) forwards;
  }

  .search-bar {
    align-items: center;
    background: white;
    border: none;
    display: none;
    justify-content: flex-end;
    gap: 16px;
    width: 100%;
  }

  .search-bar.show {
    display: flex;
  }
`;
      xt = class extends A {
        constructor() {
          super(...arguments), this.showSearchBar = null, this.loading = false, this.handleSubmit = () => {
            const t = this.shadowRoot?.querySelector("input")?.value || "";
            this.dispatchEvent(new CustomEvent("onSearch", { detail: { inputValue: t }, bubbles: true, composed: true })), this.requestUpdate();
          }, this.handleSearch = $i2(this.handleSubmit, 700);
        }
        setSearchMode(e) {
          this.showSearchBar = e;
          const t = this.shadowRoot?.querySelector("input");
          this.requestUpdate(), e ? setTimeout(() => {
            t?.focus();
          }, 100) : (this.dispatchEvent(new CustomEvent("onCancel", { bubbles: true, composed: true })), t && (t.value = ""));
        }
        render() {
          return w`
      <div class="container">
        <div
          class="content-container ${this.showSearchBar === null ? "" : this.showSearchBar ? "hide" : "show"}"
        >
          <div class="content" style="${this.style}">
            <slot></slot>
          </div>
          <button @click="${() => this.setSearchMode(true)}">
            ${_e}
          </button>
        </div>
        <div class="search-container ${this.showSearchBar ? "show" : "hide"}">
          <button
            class="return-button"
            @click="${() => this.setSearchMode(false)}"
          >
            ${Ji2}
          </button>
          <form
            class="search-form"
            @submit="${(e) => {
            e.preventDefault(), this.handleSubmit();
          }}"
          >
            <input
              type="text"
              placeholder="Type to search"
              @keyup=${this.handleSearch}
            />
            <button class="search-button" type="submit">
              ${this.loading ? Fi2 : _e}
            </button>
          </form>
        </div>
      </div>
    `;
        }
      };
      xt.styles = [Xi2, Yi2, Ki2];
      g([N()], xt.prototype, "showSearchBar");
      g([v({ converter: (e) => e === "true" })], xt.prototype, "loading");
      B("appcues-search-header", xt);
      Gi2 = (e) => e && new DOMParser().parseFromString(e, "text/html").body.textContent || "";
      Qi2 = $`
  :host {
    height: 100%;
    display: block;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .root-wrapper {
    height: 100%;
    box-shadow: var(--search-results-block-shadow);
    color: var(--search-results-block-color);
    background-color: var(--search-results-block-background-color);
  }

  .content-wrapper {
    padding: 16px 16px 16px 16px;
    background: var(--search-results-block-content-wrapper-background-color);
    min-height: 100%;
  }

  .content-wrapper .root-wrapper {
    height: auto;
    border-radius: var(--search-results-block-radius);
  }

  .root-wrapper[loading='true'] {
    overflow: hidden;
  }

  .alert-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 16px;
  }
`;
      ts2 = $`
  .pagination-btn {
    align-items: center;
    background: transparent;
    border-bottom-left-radius: var(--search-results-block-radius);
    border-bottom-right-radius: var(--search-results-block-radius);
    border-top: 1px solid rgba(66, 86, 120, 0.1);
    border-left: none;
    border-right: none;
    border-bottom: none;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    font-weight: 500;
    justify-content: center;
    line-height: 24px;
    padding: 8px 16px;
    width: 100%;
    position: relative;
    top: 1px;
  }

  .pagination-btn:hover {
    background: var(--search-results-block-background-color-hover);
  }

  .pagination-btn:focus {
    outline: 2px solid var(--search-results-block-outline-color);
    background: var(--search-results-block-background-color-active);
  }
`;
      es2 = $`
  .article-main-title-wrapper {
    padding: 8px 16px;
  }

  .article-main-title {
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
  }

  .article-list {
    font-style: normal;
    display: flex;
    flex-direction: column;
    gap: 4px;
    list-style: none;
  }

  .article-list a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px 16px;
    color: currentColor;
  }

  .article-list a[loading='false']:hover {
    background-color: var(--search-results-block-background-color-hover);
  }

  .article-list a[loading='false']:focus {
    outline: 2px solid var(--search-results-block-outline-color);
    background: var(--search-results-block-background-color-active);
  }

  .article-title-wrapper {
    font-size: 14px;
    font-weight: bold;
    line-height: 160%;
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: space-between;
  }

  .article-title-wrapper p {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .article-title-wrapper svg {
    min-width: 12px;
    min-height: 12px;
    width: 12px;
    height: 12px;
  }

  .article-title-wrapper.loading {
    width: 70%;
  }

  .article-description {
    font-size: 13px;
    font-weight: normal;
    line-height: 160%;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .article-description.loading {
    height: 50px;
  }
`;
      is2 = $`
  @keyframes animatedBackgroundPosition {
    0% {
      background-position: 0% 92%;
    }
    100% {
      background-position: 100% 9%;
    }
  }

  .loading {
    opacity: 0.5;
    background: linear-gradient(
      135deg,
      rgba(211, 223, 232, 0.5) 30%,
      rgba(169, 184, 197, 0.5) 38%,
      rgba(168, 182, 193, 0.6) 41%,
      rgba(168, 182, 193, 0.6) 50%,
      rgba(168, 182, 193, 0.6) 50%,
      rgba(169, 184, 197, 0.6) 51%,
      rgba(211, 223, 232, 0.6) 57%,
      rgba(211, 223, 232, 0.6) 80%,
      rgba(211, 223, 232, 0.6) 80%
    );
    background-size: 1200% 1200%;
    animation: animatedBackgroundPosition 3s ease infinite reverse;
    color: transparent;
  }
`;
      ss2 = Ee`
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Icon">
      <path id="Vector" d="M11.4752 14.475L7.8502 10.85C7.8002 10.8 7.7627 10.7458 7.7377 10.6875C7.7127 10.6292 7.7002 10.5667 7.7002 10.5C7.7002 10.3667 7.74603 10.25 7.8377 10.15C7.92936 10.05 8.0502 10 8.2002 10H15.8002C15.9502 10 16.071 10.05 16.1627 10.15C16.2544 10.25 16.3002 10.3667 16.3002 10.5C16.3002 10.5333 16.2502 10.65 16.1502 10.85L12.5252 14.475C12.4419 14.5583 12.3585 14.6167 12.2752 14.65C12.1919 14.6833 12.1002 14.7 12.0002 14.7C11.9002 14.7 11.8085 14.6833 11.7252 14.65C11.6419 14.6167 11.5585 14.5583 11.4752 14.475Z" fill="currentColor"/>
    </g>
  </svg>
`;
      rs2 = Ee`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12px"
    height="12px"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M3.44444 23C2.77222 23 2.19676 22.7606 1.71806 22.2819C1.23935 21.8032 1 21.2278 1 20.5556V3.44444C1 2.77222 1.23935 2.19676 1.71806 1.71806C2.19676 1.23935 2.77222 1 3.44444 1H10.7778C11.1241 1 11.4144 1.11713 11.6486 1.35139C11.8829 1.58565 12 1.87593 12 2.22222C12 2.56852 11.8829 2.8588 11.6486 3.09306C11.4144 3.32731 11.1241 3.44444 10.7778 3.44444H3.44444V20.5556H20.5556V13.2222C20.5556 12.8759 20.6727 12.5856 20.9069 12.3514C21.1412 12.1171 21.4315 12 21.7778 12C22.1241 12 22.4144 12.1171 22.6486 12.3514C22.8829 12.5856 23 12.8759 23 13.2222V20.5556C23 21.2278 22.7606 21.8032 22.2819 22.2819C21.8032 22.7606 21.2278 23 20.5556 23H3.44444ZM20.5556 5.15556L10.0444 15.6667C9.82037 15.8907 9.53518 16.0028 9.18889 16.0028C8.84259 16.0028 8.55741 15.8907 8.33333 15.6667C8.10926 15.4426 7.99722 15.1574 7.99722 14.8111C7.99722 14.4648 8.10926 14.1796 8.33333 13.9556L18.8444 3.44444H15.6667C15.3204 3.44444 15.0301 3.32731 14.7958 3.09306C14.5616 2.8588 14.4444 2.56852 14.4444 2.22222C14.4444 1.87593 14.5616 1.58565 14.7958 1.35139C15.0301 1.11713 15.3204 1 15.6667 1H21.7778C22.1241 1 22.4144 1.11713 22.6486 1.35139C22.8829 1.58565 23 1.87593 23 2.22222V8.33333C23 8.67963 22.8829 8.96991 22.6486 9.20417C22.4144 9.43843 22.1241 9.55556 21.7778 9.55556C21.4315 9.55556 21.1412 9.43843 20.9069 9.20417C20.6727 8.96991 20.5556 8.67963 20.5556 8.33333V5.15556Z"
      fill="currentColor"
    />
  </svg>
`;
      V = class extends A {
        constructor() {
          super(...arguments), this.state = "empty", this.searchTerm = "", this.hasNextPage = false, this.pageSize = 10, this.results = [], this.handleRequestNextPage = () => {
            this.dispatchEvent(new CustomEvent("onRequestNextPage", { bubbles: true, composed: true }));
          }, this.handleLinkClicked = (e) => () => {
            this.dispatchEvent(new CustomEvent("onLinkClicked", { bubbles: true, composed: true, detail: e }));
          }, this.mockResultData = () => {
            this.results = Array.from({ length: this.pageSize }).map((e, t) => ({ url: `url ${t}`, excerpt: `excerpt ${t}`, title: `title ${t}` }));
          };
        }
        connectedCallback() {
          super.connectedCallback(), this.state === "loading" && this.mockResultData();
        }
        attributeChangedCallback(e, t, i2) {
          super.attributeChangedCallback(e, t, i2), e === "state" && (i2 === "loading" && this.mockResultData(), this.state = i2);
        }
        render() {
          return this.state === "empty" ? w`
        <div class="root-wrapper alert-wrapper">
          <p>No results for '${this.searchTerm}'</p>
        </div>
      ` : this.state === "error" ? w`
        <div class="root-wrapper alert-wrapper">
          <p>We could not load the results</p>
          <p>Try again later</p>
        </div>
      ` : w`
      <div class="content-wrapper">
        <div class="root-wrapper" loading="${this.state === "loading"}">
          <ul class="article-list">
            ${this.results.map((e) => w`
                <li @click=${this.handleLinkClicked(e)}>
                  <a
                    href="${e.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    loading="${this.state === "loading"}"
                  >
                    <div class="article-title-wrapper ${this.state}">
                      <p>${e.title}</p>
                      ${rs2}
                    </div>
                    <p class="article-description ${this.state}">
                      ${Gi2(e.excerpt)}
                    </p>
                  </a>
                </li>
              `)}
          </ul>

          ${this.hasNextPage && this.state !== "loading" ? w`
                <button
                  class="pagination-btn"
                  @click=${this.handleRequestNextPage}
                >
                  See more ${this.results.length} results ${ss2}
                </button>
              ` : w``}
        </div>
      </div>
    `;
        }
      };
      V.styles = [Qi2, es2, is2, ts2];
      g([v()], V.prototype, "state");
      g([v()], V.prototype, "searchTerm");
      g([v({ converter: (e) => e === "true" })], V.prototype, "hasNextPage");
      g([v()], V.prototype, "pageSize");
      g([v({ type: Array })], V.prototype, "results");
      B("appcues-search-results", V);
    }
  });

  // node_modules/@appcues/web-sdk/build/index.DIKlkbGK.js
  var index_DIKlkbGK_exports = {};
  __export(index_DIKlkbGK_exports, {
    a: () => cA,
    b: () => aA,
    c: () => ec,
    g: () => ls2,
    i: () => uA,
    n: () => lA,
    o: () => sA
  });
  function ge3(e, t, n) {
    if (!t(e))
      throw $l2("error", "uncaught at check", n), new Error(n);
  }
  function zo2(e, t) {
    return M3.notUndef(e) && Md2.call(e, t);
  }
  function Ti3(e, t) {
    var n = e.indexOf(t);
    n >= 0 && e.splice(n, 1);
  }
  function Bd2() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = Ud2({}, e), n = new Promise(function(r2, i2) {
      t.resolve = r2, t.reject = i2;
    });
    return t.promise = n, t;
  }
  function Io(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, n = void 0, r2 = new Promise(function(i2) {
      n = setTimeout(function() {
        return i2(t);
      }, e);
    });
    return r2[Pl2] = function() {
      return clearTimeout(n);
    }, r2;
  }
  function Vd2() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return function() {
      return ++e;
    };
  }
  function Ao(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Wd2, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", r2 = arguments[3], i2 = { name: n, next: e, throw: t, return: Gd2 };
    return r2 && (i2[xl2] = true), typeof Symbol < "u" && (i2[Symbol.iterator] = function() {
      return i2;
    }), i2;
  }
  function $l2(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  }
  function Xo2(e, t) {
    return function() {
      return e.apply(void 0, arguments);
    };
  }
  function W2() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "*";
    if (arguments.length && ge3(arguments[0], M3.notUndef, "take(patternOrChannel): patternOrChannel is undefined"), M3.pattern(e))
      return et2(ai3, { pattern: e });
    if (M3.channel(e))
      return et2(ai3, { channel: e });
    throw new Error("take(patternOrChannel): argument " + String(e) + " is not valid channel or a valid pattern");
  }
  function g3(e, t) {
    return arguments.length > 1 ? (ge3(e, M3.notUndef, "put(channel, action): argument channel is undefined"), ge3(e, M3.channel, "put(channel, action): argument " + e + " is not a valid channel"), ge3(t, M3.notUndef, "put(channel, action): argument action is undefined")) : (ge3(e, M3.notUndef, "put(action): argument action is undefined"), t = e, e = null), et2(Jo2, { channel: e, action: t });
  }
  function pt2(e) {
    return et2(Wl2, e);
  }
  function qe2(e) {
    return et2(Gl2, e);
  }
  function ea2(e, t, n) {
    ge3(t, M3.notUndef, e + ": argument fn is undefined");
    var r2 = null;
    if (M3.array(t)) {
      var i2 = t;
      r2 = i2[0], t = i2[1];
    } else if (t.fn) {
      var o = t;
      r2 = o.context, t = o.fn;
    }
    return r2 && M3.string(t) && M3.func(r2[t]) && (t = r2[t]), ge3(t, M3.func, e + ": argument " + t + " is not a function"), { context: r2, fn: t, args: n };
  }
  function E(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r2 = 1; r2 < t; r2++)
      n[r2 - 1] = arguments[r2];
    return et2(jl2, ea2("call", e, n));
  }
  function F3(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r2 = 1; r2 < t; r2++)
      n[r2 - 1] = arguments[r2];
    return et2(Qo2, ea2("fork", e, n));
  }
  function kt(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r2 = 1; r2 < t; r2++)
      n[r2 - 1] = arguments[r2];
    return Yd2(F3.apply(void 0, [e].concat(n)));
  }
  function In() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    if (t.length > 1)
      return pt2(t.map(function(i2) {
        return In(i2);
      }));
    var r2 = t[0];
    return ge3(r2, M3.notUndef, "join(task): argument task is undefined"), ge3(r2, M3.task, "join(task): argument " + r2 + " is not a valid Task object " + Zl2), et2(ql2, r2);
  }
  function ot3() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    if (t.length > 1)
      return pt2(t.map(function(i2) {
        return ot3(i2);
      }));
    var r2 = t[0];
    return t.length === 1 && (ge3(r2, M3.notUndef, "cancel(task): argument task is undefined"), ge3(r2, M3.task, "cancel(task): argument " + r2 + " is not a valid Task object " + Zl2)), et2(Kl2, r2 || Fl2);
  }
  function v3(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r2 = 1; r2 < t; r2++)
      n[r2 - 1] = arguments[r2];
    return arguments.length === 0 ? e = Hl2 : (ge3(e, M3.notUndef, "select(selector,[...]): argument selector is undefined"), ge3(e, M3.func, "select(selector,[...]): argument " + e + " is not a function")), et2(Yl2, { selector: e, args: n });
  }
  function zd2(e, t) {
    return ge3(e, M3.notUndef, "actionChannel(pattern,...): argument pattern is undefined"), arguments.length > 1 && (ge3(t, M3.notUndef, "actionChannel(pattern, buffer): argument buffer is undefined"), ge3(t, M3.buffer, "actionChannel(pattern, buffer): argument " + t + " is not a valid buffer")), et2(zl2, { pattern: e, buffer: t });
  }
  function Ci3() {
    return et2(Xl2, {});
  }
  function Xd2(e) {
    return ge3(e, M3.channel, "flush(channel): argument " + e + " is not valid channel"), et2(Jl2, e);
  }
  function Jd2(e) {
    return ge3(e, M3.string, "getContext(prop): argument " + e + " is not a string"), et2(Ql2, e);
  }
  function Qd2(e) {
    return M3.channel(e) ? "channel" : Array.isArray(e) ? String(e.map(function(t) {
      return String(t);
    })) : String(e);
  }
  function Zd2(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "iterator", r2 = void 0, i2 = t;
    function o(s, c) {
      if (i2 === ni3)
        return js;
      if (c)
        throw i2 = ni3, c;
      r2 && r2(s);
      var l2 = e[i2](), u2 = l2[0], d2 = l2[1], f2 = l2[2];
      return i2 = u2, r2 = f2, i2 === ni3 ? js : d2;
    }
    return Ao(o, function(s) {
      return o(null, s);
    }, n, true);
  }
  function Gr2() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, t = arguments[1], n = new Array(e), r2 = 0, i2 = 0, o = 0, s = function(d2) {
      n[i2] = d2, i2 = (i2 + 1) % e, r2++;
    }, c = function() {
      if (r2 != 0) {
        var d2 = n[o];
        return n[o] = null, r2--, o = (o + 1) % e, d2;
      }
    }, l2 = function() {
      for (var d2 = []; r2; )
        d2.push(c());
      return d2;
    };
    return {
      isEmpty: function() {
        return r2 == 0;
      },
      put: function(d2) {
        if (r2 < e)
          s(d2);
        else {
          var f2 = void 0;
          switch (t) {
            case ta2:
              throw new Error(ef2);
            case na2:
              n[i2] = d2, i2 = (i2 + 1) % e, o = i2;
              break;
            case ra2:
              f2 = 2 * e, n = l2(), r2 = n.length, i2 = n.length, o = 0, n.length = f2, e = f2, s(d2);
              break;
          }
        }
      },
      take: c,
      flush: l2
    };
  }
  function rf2(e) {
    try {
      Zo2(), e();
    } finally {
      sa2();
    }
  }
  function oa2(e) {
    ia2.push(e), _i3 || (Zo2(), ca2());
  }
  function Zo2() {
    _i3++;
  }
  function sa2() {
    _i3--;
  }
  function ca2() {
    sa2();
    for (var e = void 0; !_i3 && (e = ia2.shift()) !== void 0; )
      rf2(e);
  }
  function sf2() {
    var e = [];
    function t(r2) {
      return e.push(r2), function() {
        return Ti3(e, r2);
      };
    }
    function n(r2) {
      for (var i2 = e.slice(), o = 0, s = i2.length; o < s; o++)
        i2[o](r2);
    }
    return {
      subscribe: t,
      emit: n
    };
  }
  function aa2() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Gn2.fixed(), t = false, n = [];
    ge3(e, M3.buffer, cf2);
    function r2() {
      if (t && n.length)
        throw Gs("Cannot have a closed channel with pending takers");
      if (n.length && !e.isEmpty())
        throw Gs("Cannot have pending takers with non empty buffer");
    }
    function i2(l2) {
      if (r2(), ge3(l2, M3.notUndef, lf2), !t) {
        if (!n.length)
          return e.put(l2);
        for (var u2 = 0; u2 < n.length; u2++) {
          var d2 = n[u2];
          if (!d2[Co2] || d2[Co2](l2))
            return n.splice(u2, 1), d2(l2);
        }
      }
    }
    function o(l2) {
      r2(), ge3(l2, M3.func, "channel.take's callback must be a function"), t && e.isEmpty() ? l2(yr2) : e.isEmpty() ? (n.push(l2), l2.cancel = function() {
        return Ti3(n, l2);
      }) : l2(e.take());
    }
    function s(l2) {
      if (r2(), ge3(l2, M3.func, "channel.flush' callback must be a function"), t && e.isEmpty()) {
        l2(yr2);
        return;
      }
      l2(e.flush());
    }
    function c() {
      if (r2(), !t && (t = true, n.length)) {
        var l2 = n;
        n = [];
        for (var u2 = 0, d2 = l2.length; u2 < d2; u2++)
          l2[u2](yr2);
      }
    }
    return {
      take: o,
      put: i2,
      flush: s,
      close: c,
      get __takers__() {
        return n;
      },
      get __closed__() {
        return t;
      }
    };
  }
  function kr(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Gn2.none(), n = arguments[2];
    arguments.length > 2 && ge3(n, M3.func, "Invalid match function passed to eventChannel");
    var r2 = aa2(t), i2 = function() {
      r2.__closed__ || (o && o(), r2.close());
    }, o = e(function(s) {
      if (ri3(s)) {
        i2();
        return;
      }
      n && !n(s) || r2.put(s);
    });
    if (r2.__closed__ && o(), !M3.func(o))
      throw new Error("in eventChannel: subscribe should return a function to unsubscribe");
    return {
      take: r2.take,
      flush: r2.flush,
      close: i2
    };
  }
  function af2(e) {
    var t = kr(function(n) {
      return e(function(r2) {
        if (r2[Dl2]) {
          n(r2);
          return;
        }
        oa2(function() {
          return n(r2);
        });
      });
    });
    return of2({}, t, {
      take: function(r2, i2) {
        arguments.length > 1 && (ge3(i2, M3.func, "channel.take's matcher argument must be a function"), r2[Co2] = i2), t.take(r2);
      }
    });
  }
  function uf2(e, t) {
    for (var n = arguments.length, r2 = Array(n > 2 ? n - 2 : 0), i2 = 2; i2 < n; i2++)
      r2[i2 - 2] = arguments[i2];
    var o = { done: false, value: W2(e) }, s = function(d2) {
      return { done: false, value: F3.apply(void 0, [t].concat(r2, [d2])) };
    }, c = void 0, l2 = function(d2) {
      return c = d2;
    };
    return Zd2({
      q1: function() {
        return ["q2", o, l2];
      },
      q2: function() {
        return c === yr2 ? [ni3] : ["q1", s(c)];
      }
    }, "q1", "takeEvery(" + Qd2(e) + ", " + t.name + ")");
  }
  function Ir2(e, t) {
    for (var n = arguments.length, r2 = Array(n > 2 ? n - 2 : 0), i2 = 2; i2 < n; i2++)
      r2[i2 - 2] = arguments[i2];
    return F3.apply(void 0, [uf2, e, t].concat(r2));
  }
  function ua2(e) {
    return (t) => df2.call(t) === `[object ${e}]`;
  }
  function P2(e, t = null) {
    return (...n) => {
      try {
        const r2 = e(...n);
        return ne4.defined(r2) ? r2 : t;
      } catch {
        return t;
      }
    };
  }
  function lt2(e, t) {
    const n = new Object(e), r2 = n.length >>> 0;
    if (typeof t != "function")
      throw new TypeError("predicate must be a function");
    let i2 = 0;
    for (; i2 < r2; ) {
      const o = n[i2];
      if (t(o, i2, n))
        return o;
      i2 += 1;
    }
    return null;
  }
  function bo2(e = {}) {
    const {
      selector: t,
      selector_settings: n,
      backup_selectors: r2
    } = e, i2 = Object.keys(n || {}).length > 0 ? n : t;
    return ne4.array(r2) ? [i2, ...r2] : [i2];
  }
  function Yf2(e, t) {
    return document.createElement(e, t);
  }
  function zf2(e, t, n) {
    return document.createElementNS(e, t, n);
  }
  function Xf2() {
    return an(document.createDocumentFragment());
  }
  function Jf2(e) {
    return document.createTextNode(e);
  }
  function Qf2(e) {
    return document.createComment(e);
  }
  function Zf2(e, t, n) {
    if (Pt2(e)) {
      let r2 = e;
      for (; r2 && Pt2(r2); )
        r2 = an(r2).parent;
      e = r2 ?? e;
    }
    Pt2(t) && (t = an(t, e)), n && Pt2(n) && (n = an(n).firstChildNode), e.insertBefore(t, n);
  }
  function ep2(e, t) {
    e.removeChild(t);
  }
  function tp2(e, t) {
    Pt2(t) && (t = an(t, e)), e.appendChild(t);
  }
  function ba2(e) {
    if (Pt2(e)) {
      for (; e && Pt2(e); )
        e = an(e).parent;
      return e ?? null;
    }
    return e.parentNode;
  }
  function np2(e) {
    var t;
    if (Pt2(e)) {
      const n = an(e), r2 = ba2(n);
      if (r2 && n.lastChildNode) {
        const i2 = Array.from(r2.childNodes), o = i2.indexOf(n.lastChildNode);
        return (t = i2[o + 1]) !== null && t !== void 0 ? t : null;
      }
      return null;
    }
    return e.nextSibling;
  }
  function rp2(e) {
    return e.tagName;
  }
  function ip2(e, t) {
    e.textContent = t;
  }
  function op2(e) {
    return e.textContent;
  }
  function sp2(e) {
    return e.nodeType === 1;
  }
  function cp2(e) {
    return e.nodeType === 3;
  }
  function lp2(e) {
    return e.nodeType === 8;
  }
  function Pt2(e) {
    return e.nodeType === 11;
  }
  function an(e, t) {
    var n, r2, i2;
    const o = e;
    return (n = o.parent) !== null && n !== void 0 || (o.parent = t ?? null), (r2 = o.firstChildNode) !== null && r2 !== void 0 || (o.firstChildNode = e.firstChild), (i2 = o.lastChildNode) !== null && i2 !== void 0 || (o.lastChildNode = e.lastChild), o;
  }
  function $e3(e, t, n, r2, i2) {
    const o = t === void 0 ? void 0 : t.key;
    return { sel: e, data: t, children: n, text: r2, elm: i2, key: o };
  }
  function un(e) {
    return typeof e == "string" || typeof e == "number" || e instanceof String || e instanceof Number;
  }
  function lr2(e, t) {
    var n, r2;
    const i2 = e.key === t.key, o = ((n = e.data) === null || n === void 0 ? void 0 : n.is) === ((r2 = t.data) === null || r2 === void 0 ? void 0 : r2.is), s = e.sel === t.sel, c = !e.sel && e.sel === t.sel ? typeof e.text == typeof t.text : true;
    return s && i2 && o && c;
  }
  function ap2() {
    throw new Error("The document fragment is not supported on this platform.");
  }
  function up2(e, t) {
    return e.isElement(t);
  }
  function dp2(e, t) {
    return e.isDocumentFragment(t);
  }
  function fp2(e, t, n) {
    var r2;
    const i2 = {};
    for (let o = t; o <= n; ++o) {
      const s = (r2 = e[o]) === null || r2 === void 0 ? void 0 : r2.key;
      s !== void 0 && (i2[s] = o);
    }
    return i2;
  }
  function Jn2(e, t, n) {
    const r2 = {
      create: [],
      update: [],
      remove: [],
      destroy: [],
      pre: [],
      post: []
    }, i2 = t !== void 0 ? t : ss3;
    for (const p2 of pp2)
      for (const m3 of e) {
        const T2 = m3[p2];
        T2 !== void 0 && r2[p2].push(T2);
      }
    function o(p2) {
      const m3 = p2.id ? "#" + p2.id : "", T2 = p2.getAttribute("class"), _ = T2 ? "." + T2.split(" ").join(".") : "";
      return $e3(i2.tagName(p2).toLowerCase() + m3 + _, {}, [], void 0, p2);
    }
    function s(p2) {
      return $e3(void 0, {}, [], void 0, p2);
    }
    function c(p2, m3) {
      return function() {
        if (--m3 === 0) {
          const _ = i2.parentNode(p2);
          _ !== null && i2.removeChild(_, p2);
        }
      };
    }
    function l2(p2, m3) {
      var T2, _, S2, A3, I3;
      let C3;
      const O3 = p2.data, L3 = O3?.hook;
      (T2 = L3?.init) === null || T2 === void 0 || T2.call(L3, p2);
      const H4 = p2.children, R3 = p2.sel;
      if (R3 === "!")
        (_ = p2.text) !== null && _ !== void 0 || (p2.text = ""), p2.elm = i2.createComment(p2.text);
      else if (R3 === "")
        p2.elm = i2.createTextNode(p2.text);
      else if (R3 !== void 0) {
        const K3 = R3.indexOf("#"), G2 = R3.indexOf(".", K3), ue3 = K3 > 0 ? K3 : R3.length, w3 = G2 > 0 ? G2 : R3.length, J3 = K3 !== -1 || G2 !== -1 ? R3.slice(0, Math.min(ue3, w3)) : R3, de3 = O3?.ns, pe3 = de3 === void 0 ? i2.createElement(J3, O3) : i2.createElementNS(de3, J3, O3);
        for (p2.elm = pe3, ue3 < w3 && pe3.setAttribute("id", R3.slice(ue3 + 1, w3)), G2 > 0 && pe3.setAttribute("class", R3.slice(w3 + 1).replace(/\./g, " ")), C3 = 0; C3 < r2.create.length; ++C3)
          r2.create[C3](qi3, p2);
        if (un(p2.text) && (!Vn2(H4) || H4.length === 0) && i2.appendChild(pe3, i2.createTextNode(p2.text)), Vn2(H4))
          for (C3 = 0; C3 < H4.length; ++C3) {
            const Ce3 = H4[C3];
            Ce3 != null && i2.appendChild(pe3, l2(Ce3, m3));
          }
        L3 !== void 0 && ((S2 = L3.create) === null || S2 === void 0 || S2.call(L3, qi3, p2), L3.insert !== void 0 && m3.push(p2));
      } else if (!((A3 = n?.experimental) === null || A3 === void 0) && A3.fragments && p2.children) {
        for (p2.elm = ((I3 = i2.createDocumentFragment) !== null && I3 !== void 0 ? I3 : ap2)(), C3 = 0; C3 < r2.create.length; ++C3)
          r2.create[C3](qi3, p2);
        for (C3 = 0; C3 < p2.children.length; ++C3) {
          const K3 = p2.children[C3];
          K3 != null && i2.appendChild(p2.elm, l2(K3, m3));
        }
      } else
        p2.elm = i2.createTextNode(p2.text);
      return p2.elm;
    }
    function u2(p2, m3, T2, _, S2, A3) {
      for (; _ <= S2; ++_) {
        const I3 = T2[_];
        I3 != null && i2.insertBefore(p2, l2(I3, A3), m3);
      }
    }
    function d2(p2) {
      var m3, T2;
      const _ = p2.data;
      if (_ !== void 0) {
        (T2 = (m3 = _?.hook) === null || m3 === void 0 ? void 0 : m3.destroy) === null || T2 === void 0 || T2.call(m3, p2);
        for (let S2 = 0; S2 < r2.destroy.length; ++S2)
          r2.destroy[S2](p2);
        if (p2.children !== void 0)
          for (let S2 = 0; S2 < p2.children.length; ++S2) {
            const A3 = p2.children[S2];
            A3 != null && typeof A3 != "string" && d2(A3);
          }
      }
    }
    function f2(p2, m3, T2, _) {
      for (var S2, A3; T2 <= _; ++T2) {
        let I3;
        const C3 = m3[T2];
        if (C3 != null)
          if (C3.sel !== void 0) {
            d2(C3), I3 = r2.remove.length + 1;
            const O3 = c(C3.elm, I3);
            for (let H4 = 0; H4 < r2.remove.length; ++H4)
              r2.remove[H4](C3, O3);
            const L3 = (A3 = (S2 = C3?.data) === null || S2 === void 0 ? void 0 : S2.hook) === null || A3 === void 0 ? void 0 : A3.remove;
            L3 !== void 0 ? L3(C3, O3) : O3();
          } else C3.children ? (d2(C3), f2(p2, C3.children, 0, C3.children.length - 1)) : i2.removeChild(p2, C3.elm);
      }
    }
    function h2(p2, m3, T2, _) {
      let S2 = 0, A3 = 0, I3 = m3.length - 1, C3 = m3[0], O3 = m3[I3], L3 = T2.length - 1, H4 = T2[0], R3 = T2[L3], K3, G2, ue3, w3;
      for (; S2 <= I3 && A3 <= L3; )
        C3 == null ? C3 = m3[++S2] : O3 == null ? O3 = m3[--I3] : H4 == null ? H4 = T2[++A3] : R3 == null ? R3 = T2[--L3] : lr2(C3, H4) ? (y2(C3, H4, _), C3 = m3[++S2], H4 = T2[++A3]) : lr2(O3, R3) ? (y2(O3, R3, _), O3 = m3[--I3], R3 = T2[--L3]) : lr2(C3, R3) ? (y2(C3, R3, _), i2.insertBefore(p2, C3.elm, i2.nextSibling(O3.elm)), C3 = m3[++S2], R3 = T2[--L3]) : lr2(O3, H4) ? (y2(O3, H4, _), i2.insertBefore(p2, O3.elm, C3.elm), O3 = m3[--I3], H4 = T2[++A3]) : (K3 === void 0 && (K3 = fp2(m3, S2, I3)), G2 = K3[H4.key], G2 === void 0 ? (i2.insertBefore(p2, l2(H4, _), C3.elm), H4 = T2[++A3]) : K3[R3.key] === void 0 ? (i2.insertBefore(p2, l2(R3, _), i2.nextSibling(O3.elm)), R3 = T2[--L3]) : (ue3 = m3[G2], ue3.sel !== H4.sel ? i2.insertBefore(p2, l2(H4, _), C3.elm) : (y2(ue3, H4, _), m3[G2] = void 0, i2.insertBefore(p2, ue3.elm, C3.elm)), H4 = T2[++A3]));
      A3 <= L3 && (w3 = T2[L3 + 1] == null ? null : T2[L3 + 1].elm, u2(p2, w3, T2, A3, L3, _)), S2 <= I3 && f2(p2, m3, S2, I3);
    }
    function y2(p2, m3, T2) {
      var _, S2, A3, I3, C3, O3, L3, H4;
      const R3 = (_ = m3.data) === null || _ === void 0 ? void 0 : _.hook;
      (S2 = R3?.prepatch) === null || S2 === void 0 || S2.call(R3, p2, m3);
      const K3 = m3.elm = p2.elm;
      if (p2 === m3)
        return;
      if (m3.data !== void 0 || m3.text !== void 0 && m3.text !== p2.text) {
        (A3 = m3.data) !== null && A3 !== void 0 || (m3.data = {}), (I3 = p2.data) !== null && I3 !== void 0 || (p2.data = {});
        for (let w3 = 0; w3 < r2.update.length; ++w3)
          r2.update[w3](p2, m3);
        (L3 = (O3 = (C3 = m3.data) === null || C3 === void 0 ? void 0 : C3.hook) === null || O3 === void 0 ? void 0 : O3.update) === null || L3 === void 0 || L3.call(O3, p2, m3);
      }
      const G2 = p2.children, ue3 = m3.children;
      m3.text === void 0 ? G2 !== void 0 && ue3 !== void 0 ? G2 !== ue3 && h2(K3, G2, ue3, T2) : ue3 !== void 0 ? (p2.text !== void 0 && i2.setTextContent(K3, ""), u2(K3, null, ue3, 0, ue3.length - 1, T2)) : G2 !== void 0 ? f2(K3, G2, 0, G2.length - 1) : p2.text !== void 0 && i2.setTextContent(K3, "") : p2.text !== m3.text && (G2 !== void 0 && f2(K3, G2, 0, G2.length - 1), i2.setTextContent(K3, m3.text)), (H4 = R3?.postpatch) === null || H4 === void 0 || H4.call(R3, p2, m3);
    }
    return function(m3, T2) {
      let _, S2, A3;
      const I3 = [];
      for (_ = 0; _ < r2.pre.length; ++_)
        r2.pre[_]();
      for (up2(i2, m3) ? m3 = o(m3) : dp2(i2, m3) && (m3 = s(m3)), lr2(m3, T2) ? y2(m3, T2, I3) : (S2 = m3.elm, A3 = i2.parentNode(S2), l2(T2, I3), A3 !== null && (i2.insertBefore(A3, T2.elm, i2.nextSibling(S2)), f2(A3, [m3], 0, 0))), _ = 0; _ < I3.length; ++_)
        I3[_].data.hook.insert(I3[_]);
      for (_ = 0; _ < r2.post.length; ++_)
        r2.post[_]();
      return T2;
    };
  }
  function vi3(e, t, n) {
    if (e.ns = "http://www.w3.org/2000/svg", n !== "foreignObject" && t !== void 0)
      for (let r2 = 0; r2 < t.length; ++r2) {
        const i2 = t[r2];
        if (typeof i2 == "string")
          continue;
        const o = i2.data;
        o !== void 0 && vi3(o, i2.children, i2.sel);
      }
  }
  function ui3(e, t, n) {
    let r2 = {}, i2, o, s;
    if (n !== void 0 ? (t !== null && (r2 = t), Vn2(n) ? i2 = n : un(n) ? o = n.toString() : n && n.sel && (i2 = [n])) : t != null && (Vn2(t) ? i2 = t : un(t) ? o = t.toString() : t && t.sel ? i2 = [t] : r2 = t), i2 !== void 0)
      for (s = 0; s < i2.length; ++s)
        un(i2[s]) && (i2[s] = $e3(void 0, void 0, void 0, i2[s], void 0));
    return e.startsWith("svg") && (e.length === 3 || e[3] === "." || e[3] === "#") && vi3(r2, i2, e), $e3(e, r2, i2, o, void 0);
  }
  function hp2(e) {
    let t, n;
    if (Vn2(e) ? t = e : un(t) ? n = e : t && t.sel && (t = [e]), t !== void 0)
      for (let r2 = 0; r2 < t.length; ++r2)
        un(t[r2]) && (t[r2] = $e3(void 0, void 0, void 0, t[r2], void 0));
    return $e3(void 0, {}, t, n, void 0);
  }
  function oi3(e, t) {
    var n;
    const r2 = (n = t.data) === null || n === void 0 ? void 0 : n.ns;
    e.data.fn = t.data.fn, e.data.args = t.data.args, t.data = e.data, t.children = e.children, t.text = e.text, t.elm = e.elm, r2 && vi3(t.data, t.children, t.sel);
  }
  function mp2(e) {
    const t = e.data, n = t.fn(...t.args);
    oi3(n, e);
  }
  function Ep2(e, t) {
    let n;
    const r2 = e.data, i2 = t.data, o = r2.args, s = i2.args;
    if (r2.fn !== i2.fn || o.length !== s.length) {
      oi3(i2.fn(...s), t);
      return;
    }
    for (n = 0; n < s.length; ++n)
      if (o[n] !== s[n]) {
        oi3(i2.fn(...s), t);
        return;
      }
    oi3(e, t);
  }
  function yp2(e, t) {
    const n = e.data.attachData;
    t.data.attachData.placeholder = n.placeholder, t.data.attachData.real = n.real, e.elm = e.data.attachData.real;
  }
  function Sp2(e, t) {
    t.elm = t.data.attachData.placeholder;
  }
  function Tp2(e) {
    e.elm !== void 0 && e.elm.parentNode.removeChild(e.elm), e.elm = e.data.attachData.real;
  }
  function Cp2(e, t) {
    const n = t.elm, r2 = t.data.attachData, i2 = document.createElement("span");
    t.elm = i2, r2.target.appendChild(n), r2.real = n, r2.placeholder = i2;
  }
  function _p2(e, t) {
    t.data === void 0 && (t.data = {}), t.data.hook === void 0 && (t.data.hook = {});
    const n = t.data, r2 = t.data.hook;
    return n.attachData = { target: e, placeholder: void 0, real: void 0 }, r2.create = Cp2, r2.prepatch = yp2, r2.postpatch = Sp2, r2.destroy = Tp2, t;
  }
  function Ip2(e) {
    return e.slice(5).replace(/-([a-z])/g, (t, n) => n.toUpperCase());
  }
  function wa2(e, t) {
    var n;
    const r2 = t !== void 0 ? t : ss3;
    let i2;
    if (r2.isElement(e)) {
      const o = e.id ? "#" + e.id : "", s = (n = e.getAttribute("class")) === null || n === void 0 ? void 0 : n.match(/[^\t\r\n\f ]+/g), c = s ? "." + s.join(".") : "", l2 = r2.tagName(e).toLowerCase() + o + c, u2 = {}, d2 = {}, f2 = {}, h2 = [];
      let y2, p2, m3;
      const T2 = e.attributes, _ = e.childNodes;
      for (p2 = 0, m3 = T2.length; p2 < m3; p2++)
        y2 = T2[p2].nodeName, y2.startsWith("data-") ? d2[Ip2(y2)] = T2[p2].nodeValue || "" : y2 !== "id" && y2 !== "class" && (u2[y2] = T2[p2].nodeValue);
      for (p2 = 0, m3 = _.length; p2 < m3; p2++)
        h2.push(wa2(_[p2], t));
      return Object.keys(u2).length > 0 && (f2.attrs = u2), Object.keys(d2).length > 0 && (f2.dataset = d2), l2.startsWith("svg") && (l2.length === 3 || l2[3] === "." || l2[3] === "#") && vi3(f2, h2, l2), $e3(l2, f2, h2, void 0, e);
    } else return r2.isText(e) ? (i2 = r2.getTextContent(e), $e3(void 0, void 0, void 0, i2, e)) : r2.isComment(e) ? (i2 = r2.getTextContent(e), $e3("!", {}, [], i2, e)) : $e3("", {}, [], void 0, e);
  }
  function Ks(e, t) {
    let n;
    const r2 = t.elm;
    let i2 = e.data.attrs, o = t.data.attrs;
    if (!(!i2 && !o) && i2 !== o) {
      i2 = i2 || {}, o = o || {};
      for (n in o) {
        const s = o[n];
        i2[n] !== s && (s === true ? r2.setAttribute(n, "") : s === false ? r2.removeAttribute(n) : n.charCodeAt(0) !== wp2 ? r2.setAttribute(n, s) : n.charCodeAt(3) === qs ? r2.setAttributeNS(bp2, n, s) : n.charCodeAt(5) === qs ? n.charCodeAt(1) === Np2 ? r2.setAttributeNS(vp2, n, s) : r2.setAttributeNS(Ap2, n, s) : r2.setAttribute(n, s));
      }
      for (n in i2)
        n in o || r2.removeAttribute(n);
    }
  }
  function Ys(e, t) {
    let n, r2;
    const i2 = t.elm;
    let o = e.data.class, s = t.data.class;
    if (!(!o && !s) && o !== s) {
      o = o || {}, s = s || {};
      for (r2 in o)
        o[r2] && !Object.prototype.hasOwnProperty.call(s, r2) && i2.classList.remove(r2);
      for (r2 in s)
        n = s[r2], n !== o[r2] && i2.classList[n ? "add" : "remove"](r2);
    }
  }
  function Xs(e, t) {
    const n = t.elm;
    let r2 = e.data.dataset, i2 = t.data.dataset, o;
    if (!r2 && !i2 || r2 === i2)
      return;
    r2 = r2 || {}, i2 = i2 || {};
    const s = n.dataset;
    for (o in r2)
      o in i2 || (s ? o in s && delete s[o] : n.removeAttribute("data-" + o.replace(zs, "-$&").toLowerCase()));
    for (o in i2)
      r2[o] !== i2[o] && (s ? s[o] = i2[o] : n.setAttribute("data-" + o.replace(zs, "-$&").toLowerCase(), i2[o]));
  }
  function Na2(e, t, n) {
    if (typeof e == "function")
      e.call(t, n, t);
    else if (typeof e == "object")
      for (let r2 = 0; r2 < e.length; r2++)
        Na2(e[r2], t, n);
  }
  function Op2(e, t) {
    const n = e.type, r2 = t.data.on;
    r2 && r2[n] && Na2(r2[n], t, e);
  }
  function Rp2() {
    return function e(t) {
      Op2(t, e.vnode);
    };
  }
  function Ki3(e, t) {
    const n = e.data.on, r2 = e.listener, i2 = e.elm, o = t && t.data.on, s = t && t.elm;
    let c;
    if (n !== o) {
      if (n && r2)
        if (o)
          for (c in n)
            o[c] || i2.removeEventListener(c, r2, false);
        else
          for (c in n)
            i2.removeEventListener(c, r2, false);
      if (o) {
        const l2 = t.listener = e.listener || Rp2();
        if (l2.vnode = t, n)
          for (c in o)
            n[c] || s.addEventListener(c, l2, false);
        else
          for (c in o)
            s.addEventListener(c, l2, false);
      }
    }
  }
  function Js(e, t) {
    let n, r2, i2;
    const o = t.elm;
    let s = e.data.props, c = t.data.props;
    if (!(!s && !c) && s !== c) {
      s = s || {}, c = c || {};
      for (n in c)
        r2 = c[n], i2 = s[n], i2 !== r2 && (n !== "value" || o[n] !== r2) && (o[n] = r2);
    }
  }
  function xp2(e, t, n) {
    Lp2(() => {
      e[t] = n;
    });
  }
  function Zs(e, t) {
    let n, r2;
    const i2 = t.elm;
    let o = e.data.style, s = t.data.style;
    if (!o && !s || o === s)
      return;
    o = o || {}, s = s || {};
    const c = "delayed" in o;
    for (r2 in o)
      r2 in s || (r2[0] === "-" && r2[1] === "-" ? i2.style.removeProperty(r2) : i2.style[r2] = "");
    for (r2 in s)
      if (n = s[r2], r2 === "delayed" && s.delayed)
        for (const l2 in s.delayed)
          n = s.delayed[l2], (!c || n !== o.delayed[l2]) && xp2(i2.style, l2, n);
      else r2 !== "remove" && n !== o[r2] && (r2[0] === "-" && r2[1] === "-" ? i2.style.setProperty(r2, n) : i2.style[r2] = n);
  }
  function Pp2(e) {
    let t, n;
    const r2 = e.elm, i2 = e.data.style;
    if (!(!i2 || !(t = i2.destroy)))
      for (n in t)
        r2.style[n] = t[n];
  }
  function Dp2(e, t) {
    const n = e.data.style;
    if (!n || !n.remove) {
      t();
      return;
    }
    ko2 || (e.elm.offsetLeft, ko2 = true);
    let r2;
    const i2 = e.elm;
    let o = 0;
    const s = n.remove;
    let c = 0;
    const l2 = [];
    for (r2 in s)
      l2.push(r2), i2.style[r2] = s[r2];
    const d2 = getComputedStyle(i2)["transition-property"].split(", ");
    for (; o < d2.length; ++o)
      l2.indexOf(d2[o]) !== -1 && c++;
    i2.addEventListener("transitionend", (f2) => {
      f2.target === i2 && --c, c === 0 && t();
    });
  }
  function Fp2() {
    ko2 = false;
  }
  function Up2(e, ...t) {
    const n = cs2(t, []);
    return n.length === 1 && !n[0].sel && n[0].text ? $e3(void 0, void 0, void 0, n[0].text, void 0) : $e3(void 0, e ?? {}, n, void 0, void 0);
  }
  function cs2(e, t) {
    for (const n of e)
      n != null && n !== false && n !== "" && (Array.isArray(n) ? cs2(n, t) : typeof n == "string" || typeof n == "number" || typeof n == "boolean" ? t.push($e3(void 0, void 0, void 0, String(n), void 0)) : t.push(n));
    return t;
  }
  function Hp2(e, t, ...n) {
    const r2 = cs2(n, []);
    return typeof e == "function" ? e(t, r2) : r2.length === 1 && !r2[0].sel && r2[0].text ? ui3(e, t, r2[0].text) : ui3(e, t, r2);
  }
  function ls2(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  function $p2(e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var t = e.default;
    if (typeof t == "function") {
      var n = function r2() {
        var i2 = false;
        try {
          i2 = this instanceof r2;
        } catch {
        }
        return i2 ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      n.prototype = t.prototype;
    } else n = {};
    return Object.defineProperty(n, "__esModule", { value: true }), Object.keys(e).forEach(function(r2) {
      var i2 = Object.getOwnPropertyDescriptor(e, r2);
      Object.defineProperty(n, r2, i2.get ? i2 : {
        enumerable: true,
        get: function() {
          return e[r2];
        }
      });
    }), n;
  }
  function Bp2() {
    if (tc) return Yi3;
    tc = 1;
    var e = "http://www.w3.org/2000/svg", t = ["hook", "on", "style", "class", "props", "attrs", "dataset"], n = Array.prototype.slice;
    function r2(f2) {
      return typeof f2 == "string" || typeof f2 == "number" || typeof f2 == "boolean" || typeof f2 == "symbol" || f2 === null || f2 === void 0;
    }
    function i2(f2, h2, y2, p2) {
      for (var m3 = { ns: h2 }, T2 = 0, _ = p2.length; T2 < _; T2++) {
        var S2 = p2[T2];
        f2[S2] && (m3[S2] = f2[S2]);
      }
      for (var A3 in f2)
        if (A3 !== "key" && A3 !== "classNames" && A3 !== "selector") {
          var I3 = A3.indexOf("-");
          I3 > 0 ? C3(A3.slice(0, I3), A3.slice(I3 + 1), f2[A3]) : m3[A3] || C3(y2, A3, f2[A3]);
        }
      return m3;
      function C3(O3, L3, H4) {
        var R3 = m3[O3] || (m3[O3] = {});
        R3[L3] = H4;
      }
    }
    function o(f2, h2, y2, p2, m3, T2) {
      if (m3.selector && (p2 = p2 + m3.selector), m3.classNames) {
        var _ = m3.classNames;
        p2 = p2 + "." + (Array.isArray(_) ? _.join(".") : _.replace(/\s+/g, "."));
      }
      return {
        sel: p2,
        data: i2(m3, f2, h2, y2),
        children: T2.map(function(S2) {
          return r2(S2) ? { text: S2 } : S2;
        }),
        key: m3.key
      };
    }
    function s(f2, h2, y2, p2, m3, T2) {
      var _;
      if (typeof p2 == "function")
        _ = p2(m3, T2);
      else if (p2 && typeof p2.view == "function")
        _ = p2.view(m3, T2);
      else if (p2 && typeof p2.render == "function")
        _ = p2.render(m3, T2);
      else
        throw "JSX tag must be either a string, a function or an object with 'view' or 'render' methods";
      return _.key = m3.key, _;
    }
    function c(f2, h2, y2) {
      for (var p2 = h2, m3 = f2.length; p2 < m3; p2++) {
        var T2 = f2[p2];
        Array.isArray(T2) ? c(T2, 0, y2) : y2.push(T2);
      }
    }
    function l2(f2) {
      if (f2) {
        for (var h2 = 0, y2 = f2.length; h2 < y2; h2++)
          if (Array.isArray(f2[h2])) {
            var p2 = f2.slice(0, h2);
            c(f2, h2, p2), f2 = p2;
            break;
          }
      }
      return f2;
    }
    function u2(f2, h2, y2, p2, m3, T2) {
      return m3 = m3 || {}, T2 = l2(T2), typeof p2 == "string" ? o(f2, h2, y2, p2, m3, T2) : s(f2, h2, y2, p2, m3, T2);
    }
    function d2(f2, h2, y2) {
      return function(m3, T2, _) {
        return (arguments.length > 3 || !Array.isArray(_)) && (_ = n.call(arguments, 2)), u2(f2, h2 || "props", y2 || t, m3, T2, _);
      };
    }
    return Yi3 = {
      html: d2(void 0),
      svg: d2(e, "attrs"),
      JSX: d2
    }, Yi3;
  }
  function Vp2() {
    if (nc) return ar2;
    nc = 1, Object.defineProperty(ar2, "__esModule", {
      value: true
    }), ar2.createApi = n;
    var e = "textContent";
    function t(i2, o) {
      var s = i2;
      return s.parent == null && (s.parent = null), s.firstChildNode == null && (s.firstChildNode = i2.firstChild), s.lastChildNode == null && (s.lastChildNode = i2.lastChild), s;
    }
    function n(i2) {
      var o = void 0;
      function s() {
        if (o && o.defaultView)
          return o;
        if (i2 && i2.clean) {
          var c = document.createElement("iframe");
          document.head.appendChild(c), o = c.contentDocument, i2.trustedTypesPolicy && c.contentWindow.trustedTypes.createPolicy("default", {
            createHTML: function(u2) {
              return i2.trustedTypesPolicy.createHTML(u2).toString();
            },
            createScript: function(u2) {
              return i2.trustedTypesPolicy.createScript(u2).toString();
            },
            createScriptURL: function(u2) {
              return i2.trustedTypesPolicy.createScriptURL(u2).toString();
            }
          });
        } else
          o = document;
        return o;
      }
      return s(), {
        createElement: function(l2) {
          return s().createElement(l2);
        },
        createElementNS: function(l2, u2) {
          return s().createElementNS(l2, u2);
        },
        createTextNode: function(l2) {
          return s().createTextNode(l2);
        },
        appendChild: function(l2, u2) {
          r2("appendChild", l2, u2);
        },
        removeChild: function(l2, u2) {
          r2("removeChild", l2, u2);
        },
        insertBefore: function(l2, u2, d2) {
          r2("insertBefore", l2, u2, d2);
        },
        parentNode: function(l2) {
          return l2.parentNode;
        },
        nextSibling: function(l2) {
          return l2.nextSibling;
        },
        tagName: function(l2) {
          return l2.tagName;
        },
        setTextContent: function(l2, u2) {
          r2(e, l2, u2);
        },
        isElement: function(l2) {
          return l2.nodeType === 1;
        },
        isText: function(l2) {
          return l2.nodeType === 3;
        },
        isComment: function(l2) {
          return l2.nodeType === 8;
        },
        isDocumentFragment: function(l2) {
          return l2.nodeType === 11;
        },
        createDocumentFragment: function() {
          return t(s().createDocumentFragment());
        },
        createComment: function(l2) {
          return s().createComment(l2);
        },
        getTextContent: function(l2) {
          return l2.textContent || null;
        }
      };
    }
    ar2.default = n();
    function r2(i2, o, s, c) {
      if (o.tagName !== "IFRAME")
        i2 === e ? o[e] = s : o[i2](s, c);
      else {
        var l2 = function() {
          r2(i2, o.contentDocument.body, s, c);
        };
        o.contentDocument && o.contentDocument.readyState === "complete" ? l2() : o.addEventListener("load", l2);
      }
    }
    return ar2;
  }
  function Wp2() {
    return rc || (rc = 1, (function(e) {
      function t(o) {
        var s = typeof o == "object" && !!o.composed;
        return s ? n(this) : r2(this);
      }
      function n(o) {
        var s = r2(o);
        return i2(s) ? n(s.host) : s;
      }
      function r2(o) {
        return o.parentNode != null ? r2(o.parentNode) : o;
      }
      function i2(o) {
        return o.nodeName === "#document-fragment" && o.constructor.name === "ShadowRoot";
      }
      e.exports && (e.exports = t);
    })(zi3)), zi3.exports;
  }
  function Ni3(e, t, n) {
    const r2 = e.data || {};
    Object.assign(e, {
      data: Object.assign(r2, {
        [t]: { ...r2[t], ...n }
      })
    });
  }
  function qp2(e, t, n) {
    const r2 = e.data || {};
    Object.assign(e, {
      data: Object.assign(r2, {
        [t]: n
      })
    });
  }
  function rr2(e, t) {
    return new RegExp(`(?:^${t}[#.]|^${t}$)`, "i").test(e.sel);
  }
  function Ne3(e, t) {
    try {
      return e.data.attrs[t] || null;
    } catch {
      return null;
    }
  }
  function Ee3(e, t, n) {
    Ni3(e, "attrs", { [t]: n });
  }
  function ka2(e, t) {
    if (!Object.prototype.hasOwnProperty.call(e.data, "attrs")) return;
    const { [t]: n = null, ...r2 } = e.data.attrs;
    qp2(e, "attrs", r2);
  }
  function Et2(e, t, n) {
    Ni3(e, "on", { [t]: n });
  }
  function Kp2(e, t) {
    Ni3(e, "class", { [t]: true });
  }
  function as2(e, t, n) {
    Ni3(e, "hook", { [t]: n });
  }
  function on(e, t) {
    try {
      return e.data.class[t] === true;
    } catch {
      return false;
    }
  }
  function Oa2(e) {
    return rr2(e, "a");
  }
  function Ra2(e) {
    return rr2(e, "img");
  }
  function Yp2(e) {
    return rr2(e, "input");
  }
  function zp2(e) {
    return rr2(e, "form");
  }
  function Xp2(e) {
    return rr2(e, "video");
  }
  function La2(e, t) {
    const n = /window\.parent\.Appcues\.show\('(.*)'\)/, i2 = (Ne3(e, "onclick") ?? "").match(n);
    if (!i2) return true;
    const [, o] = i2;
    return o && (ka2(e, "onclick"), t(function() {
      window.Appcues?.show?.(o);
    })), true;
  }
  function sn(e) {
    return { error: true, errorMessage: e };
  }
  function Jp2() {
    return Object.prototype.hasOwnProperty.call(Node.prototype, "getRootNode");
  }
  function Qp2(e) {
    return Jp2() ? e.getRootNode() : jp2.call(e);
  }
  function Pa2(e) {
    return e && [
      "appcues-container",
      "appcues-layer",
      "appcues-checklists",
      "appcues-debugger"
    ].some(
      (n) => e?.tagName?.toLowerCase().includes(n)
    ) ? true : e && e !== document.body && e !== document.documentElement ? Pa2(e.parentElement) : false;
  }
  function Da2(e, t) {
    const n = typeof e == "string" && e || typeof e == "object" && e.selector;
    if (!n)
      return sn("Missing selector.");
    const r2 = eh2(n, t);
    let i2 = r2.length > 0 ? r2 : wi3(n, t?.documentElement ?? t);
    const o = e.text_filter || e.textFilter, s = !!o, c = typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "order_filter"), l2 = e.order_filter;
    if (s && o.length >= 0 && (i2 = Array.prototype.slice.call(i2).filter((u2) => u2.innerText == null ? false : u2.innerText.replace(/\r\n|\r|\n/g, " ").toLowerCase().trim() === o.toString().toLowerCase().trim())), c && l2 >= 0 && (i2 = i2[l2] ? [i2[l2]] : []), i2.length === 0) {
      let u2 = "", d2 = "";
      return s && (u2 = ` with text filter "${o}"`), c && (d2 = ` with order value ${l2}`), sn(
        `Could not find element for selector "${n}"${s ? u2 : ""}${s && c ? " and" : ""}${c ? d2 : ""}.`
      );
    }
    return i2 = [...i2].filter((u2) => !Pa2(u2)), i2.length > 1 ? sn(
      `Found ${i2.length} elements for selector ${e.selector}.`
    ) : i2.length === 0 ? sn(`Could not find element for selector "${n}"`) : i2[0];
  }
  function th2(e, t) {
    if (e.length === 0)
      return sn("Missing selector.");
    let n;
    for (const r2 in e)
      if (Object.prototype.hasOwnProperty.call(e, r2)) {
        const i2 = Da2(e[r2], t);
        if (i2 && !i2.error) {
          n = i2;
          break;
        }
      }
    return n || sn("Could not find an element for list of selectors.");
  }
  function us2(e, t = window.document) {
    let n = e;
    if (n && typeof n == "object" && n.length > 0) {
      if (n.length > 1)
        return th2(n, t);
      [n] = n;
    }
    return Da2(n, t);
  }
  function ds2(e, t = {}) {
    return !!(!(t.display !== "contents") || e && (e.offsetWidth || e.offsetHeight) && e.offsetWidth > 0 && e.offsetHeight > 0);
  }
  function fs2(e, t) {
    if (xa2(e)) {
      const n = e.contentDocument.body;
      return n.scrollHeight > n.clientHeight;
    }
    return t !== "visible" && e.scrollHeight > e.clientHeight;
  }
  function Oo(e) {
    return e === "fixed" || e === "relative" || e === "absolute" || e === "sticky";
  }
  function sc(e) {
    return e.display === "flex" || e.display === "inline-flex";
  }
  function Fa2(e, t, n, r2, i2 = {}) {
    const o = i2;
    let s = t.zIndex;
    const c = t.position, u2 = ki3(e) || e.parentElement, d2 = u2 ? r2.getComputedStyle(u2) : {};
    if (o.fixed || (o.fixed = c === "fixed" || c === "sticky"), o.absolute || (o.absolute = c === "absolute"), o.opacity = Number.parseFloat(ne4.defined(o.opacity) ? o.opacity : 1) * Number.parseFloat(t.opacity), o.hiddenOverflow || (o.hiddenOverflow = !ds2(e, t) && t.overflow === "hidden" && !o.fixed && !o.absolute), o.hasScrollableParent || (o.hasScrollableParent = fs2(e, t.overflowY)), s !== "" && s !== "auto" && !Oo(c) && !sc(d2) && (s = "auto"), (ne4.undefined(o.zIndex) || s !== "" && s !== "auto" && (Oo(c) || sc(d2))) && (o.zIndex = s), u2 && u2 !== n.body && u2 !== n.documentElement)
      return Fa2(u2, d2, n, r2, o);
    if (/^\d+$/.test(o.zIndex)) {
      let f2 = Number.parseInt(o.zIndex, 10);
      f2 += 1, o.zIndex = f2;
    }
    return o;
  }
  function nh2(e, t) {
    const { documentElement: n } = e;
    return {
      xOffset: (t.pageXOffset || 0) - n.clientLeft,
      yOffset: (t.pageYOffset || 0) - n.clientTop
    };
  }
  function Xi3({ left: e, top: t, right: n, bottom: r2 }, { xOffset: i2, yOffset: o }) {
    return {
      left: e + i2,
      top: t + o,
      right: n + i2,
      bottom: r2 + o
    };
  }
  function rh2(e) {
    const t = e.getRootNode(), n = t.parentWindow || t.defaultView;
    if (n !== window && n) {
      const { frameElement: i2 } = n, { top: o, left: s } = i2.getBoundingClientRect();
      return { top: o, left: s };
    }
    return {
      top: 0,
      left: 0
    };
  }
  function Ua2(e, t, n = window.document) {
    let r2 = e;
    const i2 = us2(t, n);
    if (i2.error)
      return i2;
    r2 = i2;
    const o = ki3(r2), s = { element: r2 }, c = r2.ownerDocument || document, l2 = c.defaultView || window, u2 = rh2(r2), { left: d2, top: f2, right: h2, bottom: y2 } = r2.getBoundingClientRect(), p2 = { left: d2, top: f2, right: h2, bottom: y2 };
    let m3 = { left: d2, top: f2, right: h2, bottom: y2 };
    const T2 = l2.getComputedStyle(r2), { fixed: _, zIndex: S2, opacity: A3, hiddenOverflow: I3, hasScrollableParent: C3 } = Fa2(r2, T2, c, l2);
    if (!_ && !o) {
      const H4 = c.body, R3 = nh2(c, l2);
      if (m3 = Xi3(m3, R3), Oo(l2.getComputedStyle(H4).position)) {
        const { documentElement: K3 } = c, { overflowY: G2 } = l2.getComputedStyle(K3), { overflowY: ue3 } = l2.getComputedStyle(H4);
        fs2(H4, ue3) && G2 !== "visible" && (R3.yOffset -= H4.scrollTop);
        const w3 = Xi3(
          H4.getBoundingClientRect(),
          R3
        );
        m3 = Xi3(m3, {
          xOffset: -1 * w3.left,
          yOffset: -1 * w3.top
        });
      }
    }
    const O3 = (m3.right < 0 || m3.bottom < 0) && !C3;
    return !ds2(r2) || T2.visibility === "hidden" || A3 === 0 || I3 || O3 ? sn("Targeted element is present but not visible.") : Object.assign(s, {
      boundingRect: m3,
      fixed: _,
      zIndex: S2,
      relativeBoundingRect: p2,
      viewport: {
        width: c.documentElement.clientWidth,
        height: c.documentElement.clientHeight
      },
      iframeParent: o,
      padding: u2
    });
  }
  function ih2(e, t, n, r2) {
    return {
      // Divide the page into a 4x4 grid.
      // We make sure to bound the numerator within the bounds of the
      // rectangle, such that our region values are always 0, 1, 2 or 3.
      xRegion: Math.floor(Math.min(Math.max(e, 0), n - 1) / (n / 4)),
      yRegion: Math.floor(Math.min(Math.max(t, 0), r2 - 1) / (r2 / 4))
    };
  }
  function oh2(e, t) {
    return Math.min(
      ee3,
      Math.max(Z, (e - t) / 2)
    );
  }
  function sh2(e) {
    const { documentElement: t } = e;
    return t.scrollTop > 0 || t.clientHeight < t.scrollHeight ? t : e.body;
  }
  function ch2(e, t, n, r2, i2, o, s) {
    const c = Math.ceil(
      r2 + e + i2 - n - s * o
    );
    let l2 = false;
    c > e && c < e + r2 && (l2 = true);
    const u2 = c - r2 / 2, d2 = t - r2;
    return {
      idealScrollTop: Math.max(0, Math.min(u2, d2)),
      visibleInContainer: l2
    };
  }
  function lh2(e, t) {
    const n = [];
    let r2 = cc(e);
    const i2 = t || document, { documentElement: o, body: s } = i2;
    let c = window.getComputedStyle(e).position === "fixed";
    for (; !c && r2 && r2 !== s; ) {
      const { overflowY: u2, position: d2 } = window.getComputedStyle(r2);
      fs2(r2, u2) && (xa2(r2) ? n.push(r2.contentDocument.body) : n.push(r2)), c = d2 === "fixed", r2 = cc(r2);
    }
    const l2 = sh2(i2);
    return !c && (o.scrollHeight > o.clientHeight || l2.scrollHeight > l2.clientHeight) && n.push(l2), n;
  }
  function Ha2(e, t, n, r2) {
    const i2 = r2 || document, o = e.getBoundingClientRect(), { height: s } = o;
    let { bottom: c } = o;
    return n.map((l2) => {
      let { bottom: u2 } = l2.getBoundingClientRect();
      const { scrollTop: d2, scrollHeight: f2 } = l2;
      let { clientHeight: h2 } = l2;
      (l2 === i2.documentElement || l2 === i2.body) && (h2 = Math.min(
        // We use Infinity here to catch the case where the
        // documentElement or body doesn't have a clientHeight (due to
        // lacking a sized inline element).
        i2.documentElement.clientHeight || Number.POSITIVE_INFINITY,
        i2.body.clientHeight || Number.POSITIVE_INFINITY
      ), h2 = h2 === Number.POSITIVE_INFINITY ? window.innerHeight : h2, u2 = h2);
      const { idealScrollTop: y2, visibleInContainer: p2 } = ch2(
        d2,
        f2,
        u2,
        h2,
        c,
        s,
        t
      );
      return c += d2 - y2, { el: l2, scrollTop: y2, visibleInContainer: p2 };
    });
  }
  function jr2(e, t) {
    return e && t ? Object.keys(e).every((n) => e[n] === t[n]) : false;
  }
  function ah2(e, t) {
    return e.error || t.error ? e.error && t.error && e.errorMessage === t.errorMessage : e.fixed === t.fixed && e.zIndex === t.zIndex && e.element === t.element && jr2(e.boundingRect || {}, t.boundingRect || {}) && jr2(e.relativeBoundingRect || {}, t.relativeBoundingRect || {}) && jr2(e.viewport || {}, t.viewport || {}) && jr2(e.padding || {}, t.padding || {});
  }
  function Ro2(e) {
    const t = e.ownerDocument;
    return t && t.documentElement.contains(e);
  }
  function uh2(e) {
    const { height: t, width: n, top: r2, left: i2 } = e.getBoundingClientRect(), o = n / 2 + i2, s = -1 * (t / 2 + r2);
    return {
      originX: o,
      originY: s,
      // We subtract 0.5 here to slightly shrink the ellipse to provide ourselves
      // a little wiggle room to account for any issues due to rounding or
      // subpixel points
      majorAxis: n / 2 - 0.5,
      minorAxis: t / 2 - 0.5
    };
  }
  function dh2(e, t, n) {
    const { originX: r2, originY: i2, majorAxis: o, minorAxis: s } = n, c = e, l2 = -1 * t;
    return (c - r2) ** 2 / o ** 2 + (l2 - i2) ** 2 / s ** 2 <= 1;
  }
  function fh2(e, t, n) {
    return [
      (-1 * t + Math.sqrt(t ** 2 - 4 * e * n)) / (2 * e),
      (-1 * t - Math.sqrt(t ** 2 - 4 * e * n)) / (2 * e)
    ];
  }
  function lc(e, t) {
    return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2);
  }
  function ph2(e, t, n) {
    const { originX: r2, originY: i2, majorAxis: o, minorAxis: s } = n, c = e, l2 = -1 * t, u2 = (l2 - i2) / (c - r2), d2 = l2 - u2 * c, f2 = s ** 2 + o ** 2 * u2 ** 2, h2 = 2 * (o ** 2 * u2 * (d2 - i2) - s ** 2 * r2), y2 = s ** 2 * r2 ** 2 + o ** 2 * (d2 - i2) ** 2 - s ** 2 * o ** 2, p2 = fh2(f2, h2, y2).map((m3) => {
      const T2 = u2 * m3 + d2;
      return {
        x: m3,
        y: T2
      };
    }).reduce((m3, T2) => !m3 || lc({ x: c, y: l2 }, T2) < lc({ x: c, y: l2 }, m3) ? T2 : m3, null);
    return { ...p2, y: -1 * p2.y };
  }
  function ac(e, t, n) {
    const r2 = n?.ownerDocument ?? window.document;
    let i2 = (n ? Qp2(n) : null) ?? r2;
    i2.nodeType !== Node.DOCUMENT_FRAGMENT_NODE && i2.nodeType !== Node.DOCUMENT_NODE && (i2 = r2);
    const o = getComputedStyle(n).pointerEvents === "none", { pointerEvents: s } = n.style;
    o && (n.style.pointerEvents = "auto");
    const c = i2.msElementsFromPoint ? i2.msElementsFromPoint(e, t) : i2.elementsFromPoint(e, t);
    if (o && (n.style.pointerEvents = s), !c)
      return false;
    const l2 = r2.documentElement.querySelector("appcues-layer"), u2 = lt2(
      c,
      (d2) => !(l2 && l2.contains(d2))
    );
    return n.contains(u2);
  }
  function hh2({ xOffset: e, yOffset: t, element: n }) {
    if (!n)
      return false;
    if (document.fullscreenElement && /appcues-/.test(document.fullscreenElement.className))
      return true;
    const { left: r2, top: i2, right: o, bottom: s } = n.getBoundingClientRect(), c = o - r2, l2 = s - i2, u2 = Math.min(Math.max(1, e * c), c - 1) + r2, d2 = Math.min(Math.max(1, t * l2), l2 - 1) + i2;
    if (ac(u2, d2, n))
      return true;
    const f2 = uh2(n);
    if (dh2(u2, d2, f2) || f2.majorAxis <= 0 || f2.minorAxis <= 0)
      return false;
    const { x: h2, y: y2 } = ph2(u2, d2, f2);
    return ac(h2, y2, n);
  }
  function mh2(e, t) {
    const n = e, r2 = n.className.split(" ");
    r2.includes(t) || (n.className = [...r2, t].filter((i2) => i2).join(" "));
  }
  function Eh2(e, t) {
    const n = e, r2 = n.className.split(" "), i2 = r2.indexOf(t);
    i2 > -1 && (r2.splice(i2, 1), n.className = r2.join(" "));
  }
  function Ar2(e) {
    return (e.readyState === "interactive" || e.readyState === "complete") && e.body;
  }
  function Oi3(e, t, n) {
    const r2 = t.lastIndexOf("/") + 1, i2 = t.slice(r2);
    Array.prototype.some.call([...e.styleSheets], (o) => (o?.href ?? "").indexOf(i2) !== -1) ? setTimeout(() => n(), 5) : setTimeout(() => Oi3(e, t, n), 5);
  }
  function gh2(e, t) {
    e.requestAnimationFrame(() => {
      e.requestAnimationFrame(() => {
        t();
      });
    });
  }
  function yh2(e, t, n) {
    let r2;
    const i2 = new Promise((o) => {
      r2 = (s) => {
        n && !n(s) || (e.removeEventListener(t, r2), o(true));
      }, e.addEventListener(t, r2);
    });
    return { listener: r2, promise: i2 };
  }
  function it2(e, t = 5) {
    const n = e.ownerDocument;
    t <= 0 || e && n.activeElement !== e && (e.focus({
      preventScroll: true
    }), setTimeout(() => {
      n.documentElement.contains(e) && it2(e, t - 1);
    }, 200));
  }
  function Ma2(e) {
    e && e.tagName === "BODY" ? e.hasAttribute("tabindex") ? e.focus({ preventScroll: true }) : (e.setAttribute("tabindex", -1), e.focus({ preventScroll: true }), setTimeout(() => {
      e.removeAttribute("tabindex");
    }, 500)) : e && e.focus({ preventScroll: true });
  }
  function Ri3(e) {
    return [
      ...e.querySelectorAll(
        'a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
      )
    ].filter((t) => !t.hasAttribute("disabled"));
  }
  function Sh2(e = "", t = true) {
    const n = ["h1", "h2", "h3", "h4", "h5", "h6"];
    let o = false;
    return (s) => {
      n.some((c) => rr2(s, c)) && !o && (o = true, Ee3(s, "tabindex", "0"), e && Ee3(s, "id", e), Et2(s, "blur", (c) => {
        setTimeout(() => {
          c.target.removeAttribute("tabindex"), ka2(s, "tabindex");
        }, 400);
      }), as2(s, "insert", (c) => {
        c.elm && t && setTimeout(() => {
          it2(c.elm);
        }, 500);
      }));
    };
  }
  function Th2() {
    return /* @__PURE__ */ a2.svg("svg", { width: "16px", height: "13px", viewBox: "0 0 16 13" }, /* @__PURE__ */ a2.svg("defs", null), /* @__PURE__ */ a2.svg(
      "g",
      {
        id: "Icon-Check-Mark",
        stroke: "none",
        "stroke-width": "1",
        fill: "white",
        "fill-rule": "evenodd"
      },
      /* @__PURE__ */ a2.svg(
        "path",
        {
          d: "M5.4375,12.4668236 L0.21875,7.27932363 C0.0729165077,7.13349013 0,6.94599013 0,6.71682363 C0,6.48765712 0.0729165077,6.30015712 0.21875,6.15432363 L1.375,5.02932363 C1.52083349,4.86265712 1.703125,4.77932363 1.921875,4.77932363 C2.140625,4.77932363 2.33333349,4.86265712 2.5,5.02932363 L6,8.52932363 L13.5,1.02932363 C13.6666665,0.86265712 13.859375,0.779323627 14.078125,0.779323627 C14.296875,0.779323627 14.4791665,0.86265712 14.625,1.02932363 L15.78125,2.15432363 C15.9270835,2.30015712 16,2.48765712 16,2.71682363 C16,2.94599013 15.9270835,3.13349013 15.78125,3.27932363 L6.5625,12.4668236 C6.41666651,12.6334901 6.22916651,12.7168236 6,12.7168236 C5.77083349,12.7168236 5.58333349,12.6334901 5.4375,12.4668236 Z",
          id: "\uF00C",
          fill: "#ffffff"
        }
      )
    ));
  }
  function Ch2({ color: e = "#039be5" }) {
    return /* @__PURE__ */ a2.svg("svg", { width: "16px", height: "16px", viewBox: "0 0 16 16" }, /* @__PURE__ */ a2.svg("defs", null), /* @__PURE__ */ a2.svg(
      "g",
      {
        id: "Icon-Caret-Right",
        stroke: "none",
        "stroke-width": "1",
        fill: "none",
        "fill-rule": "evenodd"
      },
      /* @__PURE__ */ a2.svg(
        "path",
        {
          d: "M6.82142857,1.03571182 L7.60714286,0.249999404 C7.77380971,0.083332953 7.97619029,0 8.21428571,0 C8.45238113,0 8.65476172,0.083332953 8.82142857,0.249999404 L15.75,7.17855431 C15.9166668,7.34522076 16,7.54760087 16,7.78569572 C16,8.02379058 15.9166668,8.22617068 15.75,8.39283713 L8.82142857,15.321392 C8.65476172,15.4880585 8.45238113,15.5713914 8.21428571,15.5713914 C7.97619029,15.5713914 7.77380971,15.4880585 7.60714286,15.321392 L6.82142857,14.5356796 C6.63095256,14.3690132 6.54166685,14.1666331 6.55357143,13.9285382 C6.56547601,13.6904434 6.65476172,13.4880633 6.82142857,13.3213968 L11.1071429,9.21426375 L0.857142857,9.21426375 C0.619047437,9.21426375 0.416666848,9.13093079 0.25,8.96426434 C0.0833331517,8.79759789 0,8.59521778 0,8.35712293 L0,7.21426851 C0,6.97617366 0.0833331517,6.77379356 0.25,6.6071271 C0.416666848,6.44046065 0.619047437,6.3571277 0.857142857,6.3571277 L11.1071429,6.3571277 L6.82142857,2.24999464 C6.65476172,2.08332818 6.56547601,1.88094808 6.55357143,1.64285323 C6.54166685,1.40475837 6.63095256,1.20237827 6.82142857,1.03571182 Z",
          id: "\uF061",
          fill: e
        }
      )
    ));
  }
  function _h2({ color: e = "#999" }) {
    return /* @__PURE__ */ a2.svg("svg", { width: "16px", height: "16px", viewBox: "0 0 16 16" }, /* @__PURE__ */ a2.svg("defs", null), /* @__PURE__ */ a2.svg(
      "g",
      {
        id: "Icon-Arrow-Down",
        stroke: "none",
        "stroke-width": "1",
        fill: e,
        "fill-rule": "evenodd"
      },
      /* @__PURE__ */ a2.svg(
        "path",
        {
          d: "M7.18944314,11.1875067 L3.20507764,7.20314121 C3.06835906,7.06642263 3,6.9004077 3,6.70509552 C3,6.50978333 3.06835906,6.3437684 3.20507764,6.20704983 L3.87890415,5.56252012 C4.01562273,5.42580154 4.18163766,5.35744248 4.37694984,5.35744248 C4.57226203,5.35744248 4.73827696,5.42580154 4.87499553,5.56252012 L7.68748882,8.37501341 L10.4999821,5.56252012 C10.6367007,5.42580154 10.8027156,5.35744248 10.9980278,5.35744248 C11.19334,5.35744248 11.3593549,5.42580154 11.4960735,5.56252012 L12.1699,6.20704983 C12.3066186,6.3437684 12.3749776,6.50978333 12.3749776,6.70509552 C12.3749776,6.9004077 12.3066186,7.06642263 12.1699,7.20314121 L8.18553451,11.1875067 C8.04881594,11.3242253 7.88280101,11.3925843 7.68748882,11.3925843 C7.49217664,11.3925843 7.32616171,11.3242253 7.18944314,11.1875067 Z",
          id: "\uF107",
          fill: e
        }
      )
    ));
  }
  function Ih2({ width: e, height: t, color: n }) {
    return /* @__PURE__ */ a2.svg(
      "svg",
      {
        "attrs-width": e,
        "attrs-height": t,
        "attrs-viewBox": "0 0 24.7 22.8"
      },
      /* @__PURE__ */ a2.svg("title", null, "checkmark"),
      /* @__PURE__ */ a2.svg(
        "path",
        {
          "attrs-fill": n,
          class: "cls-1",
          d: "M18.4,17.4l-.3.3-.3.3h0a8.54,8.54,0,0,1-5.4,2,8.5,8.5,0,0,1,0-17,8.66,8.66,0,0,1,5.4,1.9l2.1-2.1A11.55,11.55,0,0,0,12.4,0,11.4,11.4,0,1,0,23.8,11.9Zm-5.8.5L6.1,11.4a1,1,0,0,1,0-1.4L7.5,8.6a1.08,1.08,0,0,1,.7-.3.91.91,0,0,1,.7.3L13.2,13l9.3-9.4a1,1,0,0,1,1.4,0L25.4,5a1,1,0,0,1,0,1.4L14,17.9a1,1,0,0,1-1.4,0Z",
          transform: "translate(-1 0)"
        }
      )
    );
  }
  function Ah2({ width: e, height: t, color: n }) {
    return /* @__PURE__ */ a2.svg("svg", { width: e, height: t, viewBox: "0 0 77 77", fill: "blue" }, /* @__PURE__ */ a2.svg("title", null, "Artboard"), /* @__PURE__ */ a2.svg("desc", null, "Created with Sketch."), /* @__PURE__ */ a2.svg("defs", null), /* @__PURE__ */ a2.svg(
      "g",
      {
        id: "Artboard",
        stroke: "none",
        "stroke-width": "1",
        fill: "none",
        "fill-rule": "evenodd"
      },
      /* @__PURE__ */ a2.svg("g", { id: "Group", transform: "translate(2.000000, 2.000000)", fill: n }, /* @__PURE__ */ a2.svg(
        "path",
        {
          d: "M36.5,72.5 C16.617749,72.5 0.5,56.382251 0.5,36.5 C0.5,16.617749 16.617749,0.5 36.5,0.5 C56.382251,0.5 72.5,16.617749 72.5,36.5 C72.5,56.382251 56.382251,72.5 36.5,72.5 Z M36.5,69.5 C54.7253967,69.5 69.5,54.7253967 69.5,36.5 C69.5,18.2746033 54.7253967,3.5 36.5,3.5 C18.2746033,3.5 3.5,18.2746033 3.5,36.5 C3.5,54.7253967 18.2746033,69.5 36.5,69.5 Z M32.7096583,27.0197504 C32.3597576,27.0197504 32.0723398,26.9364171 31.8474039,26.7697504 C31.622468,26.6030837 31.51,26.390121 31.51,26.1308615 L31.51,23.9086393 C31.51,23.6493797 31.622468,23.4364171 31.8474039,23.2697504 C32.0723398,23.1030837 32.3597576,23.0197504 32.7096583,23.0197504 L54.3035083,23.0197504 C54.653409,23.0197504 54.9408268,23.1030837 55.1657627,23.2697504 C55.3906987,23.4364171 55.5031667,23.6493797 55.5031667,23.9086393 L55.5031667,26.1308615 C55.5031667,26.390121 55.3906987,26.6030837 55.1657627,26.7697504 C54.9408268,26.9364171 54.653409,27.0197504 54.3035083,27.0197504 L32.7096583,27.0197504 Z M32.7096583,39.1382527 C32.3597576,39.1382527 32.0723398,39.0549194 31.8474039,38.8882527 C31.622468,38.7215861 31.51,38.5086234 31.51,38.2493638 L31.51,36.0271416 C31.51,35.7678821 31.622468,35.5549194 31.8474039,35.3882527 C32.0723398,35.2215861 32.3597576,35.1382527 32.7096583,35.1382527 L54.3035083,35.1382527 C54.653409,35.1382527 54.9408268,35.2215861 55.1657627,35.3882527 C55.3906987,35.5549194 55.5031667,35.7678821 55.5031667,36.0271416 L55.5031667,38.2493638 C55.5031667,38.5086234 55.3906987,38.7215861 55.1657627,38.8882527 C54.9408268,39.0549194 54.653409,39.1382527 54.3035083,39.1382527 L32.7096583,39.1382527 Z M32.7096583,51.2567551 C32.3597576,51.2567551 32.0723398,51.1734217 31.8474039,51.0067551 C31.622468,50.8400884 31.51,50.6271257 31.51,50.3678662 L31.51,48.1456439 C31.51,47.8863844 31.622468,47.6734217 31.8474039,47.5067551 C32.0723398,47.3400884 32.3597576,47.2567551 32.7096583,47.2567551 L54.3035083,47.2567551 C54.653409,47.2567551 54.9408268,47.3400884 55.1657627,47.5067551 C55.3906987,47.6734217 55.5031667,47.8863844 55.5031667,48.1456439 L55.5031667,50.3678662 C55.5031667,50.6271257 55.3906987,50.8400884 55.1657627,51.0067551 C54.9408268,51.1734217 54.653409,51.2567551 54.3035083,51.2567551 L32.7096583,51.2567551 Z M23.2982062,28.2493526 L22.1735266,29.4602668 C21.9735831,29.6116311 21.7486472,29.6873132 21.4987187,29.6873132 C21.2487903,29.6873132 21.0238544,29.6116311 20.8239109,29.4602668 L17.2999146,25.8275243 C17.0999711,25.6761601 17,25.4743407 17,25.2220673 C17,24.9697939 17.0749786,24.7427475 17.2249359,24.5409281 L18.4245943,23.405696 C18.6245377,23.2038766 18.8494736,23.1029675 19.0994021,23.1029675 C19.3493305,23.1029675 19.549274,23.2038766 19.6992312,23.405696 L21.4237401,25.070703 L26.2223734,20.2270464 C26.3723307,20.0756821 26.5722742,20 26.8222026,20 C27.072131,20 27.297067,20.0756821 27.4970104,20.2270464 L28.7716474,21.5136427 C28.9216047,21.7154621 28.9965833,21.9298944 28.9965833,22.1569408 C28.9965833,22.3839872 28.8966122,22.5984196 28.6966687,22.800239 L28.7716474,22.800239 L23.2982062,28.2493526 Z M23.2982062,40.4435371 L22.1735266,41.5787691 C21.9735831,41.7805885 21.7486472,41.8814977 21.4987187,41.8814977 C21.2487903,41.8814977 21.0238544,41.7805885 20.8239109,41.5787691 L17.2999146,38.0217088 C17.0999711,37.8198894 17,37.6054571 17,37.3784107 C17,37.1513643 17.0749786,36.9369319 17.2249359,36.7351125 L18.4245943,35.5241984 C18.6245377,35.3728341 18.8494736,35.297152 19.0994021,35.297152 C19.3493305,35.297152 19.549274,35.3728341 19.6992312,35.5241984 L21.4237401,37.1892053 L26.2223734,32.4212309 C26.3723307,32.2194115 26.5722742,32.1185023 26.8222026,32.1185023 C27.072131,32.1185023 27.297067,32.2194115 27.4970104,32.4212309 L28.7716474,33.7078272 C28.9216047,33.8591914 28.9965833,34.0610108 28.9965833,34.3132842 C28.9965833,34.5655576 28.8966122,34.792604 28.6966687,34.9944234 L28.7716474,34.9944234 L23.2982062,40.4435371 Z M23.2982062,52.5620394 L22.1735266,53.6972715 C21.9735831,53.8990909 21.7486472,54 21.4987187,54 C21.2487903,54 21.0238544,53.8990909 20.8239109,53.6972715 L17.2999146,50.1402111 C17.0999711,49.9383917 17,49.7239594 17,49.496913 C17,49.2698666 17.0749786,49.0554343 17.2249359,48.8536149 L18.4245943,47.6427007 C18.6245377,47.4913364 18.8494736,47.4156543 19.0994021,47.4156543 C19.3493305,47.4156543 19.549274,47.4913364 19.6992312,47.6427007 L21.4237401,49.3077077 L26.2223734,44.5397332 C26.3723307,44.3379138 26.5722742,44.2370047 26.8222026,44.2370047 C27.072131,44.2370047 27.297067,44.3379138 27.4970104,44.5397332 L28.7716474,45.8263295 C28.9216047,45.9776938 28.9965833,46.1795132 28.9965833,46.4317866 C28.9965833,46.68406 28.8966122,46.9111064 28.6966687,47.1129258 L28.7716474,47.1129258 L23.2982062,52.5620394 Z",
          id: "\uF0AE"
        }
      ))
    ));
  }
  function ae4() {
    return $e3(void 0, {}, void 0, "");
  }
  function Bt2(e) {
    if (window.AppcuesBundleSettings && window.AppcuesBundleSettings.GENERIC_BUNDLE_DOMAIN) {
      const { GENERIC_BUNDLE_DOMAIN: t } = window.AppcuesBundleSettings;
      return `${t}${e}`;
    }
    return `https://fast.appcues.com${e}`;
  }
  function Lh2({
    successImageCode: e,
    customSuccessImageUrl: t,
    successColor: n
  }) {
    if (t)
      return /* @__PURE__ */ a2.html(
        "img",
        {
          alt: "Success!",
          src: `${t}`,
          style: { height: "60px", width: "60px" }
        }
      );
    if (e === "none")
      return /* @__PURE__ */ a2.html(ae4, null);
    if (!e || e === "default")
      return /* @__PURE__ */ a2.html(Ah2, { width: "60px", height: "60px", color: n });
    if (e && e !== "none")
      return /* @__PURE__ */ a2.html(
        "img",
        {
          alt: "",
          src: `https:${Oh2}${e}.svg`,
          style: { height: "60px", width: "60px" }
        }
      );
  }
  function Li3() {
    return false;
  }
  function Ph2(e) {
    let t = document.body;
    if (window.AppcuesSettings && window.AppcuesSettings.customContainer) {
      const r2 = document.documentElement.querySelector(
        window.AppcuesSettings.customContainer
      );
      r2 && (t = r2);
    }
    const n = document.createElement("div");
    return t.appendChild(n), e(n, /* @__PURE__ */ a2.html("div", { "class-appcues": true }));
  }
  function Dh2() {
    const e = Jn2(
      [
        tr2,
        er2,
        Zn2,
        nr2,
        Qn2
      ],
      bi3.createApi({
        clean: true,
        trustedTypesPolicy: window.trustedTypes?.defaultPolicy
      })
    );
    let t = null;
    return function(r2) {
      if (Ar2(document)) {
        const i2 = ye3(r2) || {}, { status: o } = r2.currentContent || {}, s = Gf2(r2), c = i2.type && ne4.inArray(b2, o), l2 = gn2(r2), u2 = lt2(l2, (f2) => b2.includes(f2.status)), d2 = Li3(r2.settings);
        if (c || u2) {
          (!t || !Ro2(t.elm)) && (t = Ph2(e));
          const f2 = r2.views.callbacks[x.CHECKLIST];
          t = e(
            t,
            /* @__PURE__ */ a2.html("div", { "class-appcues": true, "class-injectable": s }, c && r2.views.renderers[i2.type] ? r2.views.renderers[i2.type](r2) : /* @__PURE__ */ a2.html(ae4, null), u2 ? /* @__PURE__ */ a2.html(
              "appcues-checklists",
              {
                "attrs-role": de2.ROLE_CONTAINER,
                "attrs-aria-label": de2.LABEL_CHECKLIST
              },
              xh2({
                ...u2,
                showBadge: d2,
                callbacks: f2,
                collisionMode: r2.collisionMode,
                collisionCoordinates: r2.collisionCoordinates,
                isInjectableSDK: s
              })
            ) : /* @__PURE__ */ a2.html(ae4, null))
          );
        } else t && (t = e(t, /* @__PURE__ */ a2.html("div", { "class-appcues": true })));
      }
    };
  }
  function Fh2() {
    return dc2 || (dc2 = 1, Qi3 = {
      area: true,
      base: true,
      br: true,
      col: true,
      embed: true,
      hr: true,
      img: true,
      input: true,
      keygen: true,
      link: true,
      menuitem: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true
    }), Qi3;
  }
  function Uh2() {
    if (fc) return Zi3;
    fc = 1;
    var e = /([\w-]+)|=|(['"])([.\s\S]*?)\2/g, t = Fh2();
    return Zi3 = function(n) {
      var r2 = 0, i2, o = true, s = {
        type: "tag",
        name: "",
        voidElement: false,
        attrs: {},
        children: []
      };
      return n.replace(e, function(c) {
        if (c === "=") {
          o = true, r2++;
          return;
        }
        o ? r2 === 0 ? ((t[c] || n.charAt(n.length - 2) === "/") && (s.voidElement = true), s.name = c) : (s.attrs[i2] = c.replace(/^['"]|['"]$/g, ""), i2 = void 0) : (i2 && (s.attrs[i2] = i2), i2 = c), r2++, o = false;
      }), s;
    }, Zi3;
  }
  function Hh2() {
    if (pc2) return eo2;
    pc2 = 1;
    var e = /(?:<!--[\S\s]*?-->|<(?:"[^"]*"|'[^']*'|[^'">])+>)/g, t = Uh2(), n = Object.create ? /* @__PURE__ */ Object.create(null) : {};
    function r2(i2, o, s, c, l2) {
      var u2 = o.indexOf("<", c), d2 = o.slice(c, u2 === -1 ? void 0 : u2);
      /^\s*$/.test(d2) && (d2 = " "), (!l2 && u2 > -1 && s + i2.length >= 0 || d2 !== " ") && i2.push({
        type: "text",
        content: d2
      });
    }
    return eo2 = function(o, s) {
      s || (s = {}), s.components || (s.components = n);
      var c = [], l2, u2 = -1, d2 = [], f2 = {}, h2 = false;
      return o.replace(e, function(y2, p2) {
        if (h2) {
          if (y2 !== "</" + l2.name + ">")
            return;
          h2 = false;
        }
        var m3 = y2.charAt(1) !== "/", T2 = y2.indexOf("<!--") === 0, _ = p2 + y2.length, S2 = o.charAt(_), A3;
        m3 && !T2 && (u2++, l2 = t(y2), l2.type === "tag" && s.components[l2.name] && (l2.type = "component", h2 = true), !l2.voidElement && !h2 && S2 && S2 !== "<" && r2(l2.children, o, u2, _, s.ignoreWhitespace), f2[l2.tagName] = l2, u2 === 0 && c.push(l2), A3 = d2[u2 - 1], A3 && A3.children.push(l2), d2[u2] = l2), (T2 || !m3 || l2.voidElement) && (T2 || u2--, !h2 && S2 !== "<" && S2 && (A3 = u2 === -1 ? c : d2[u2].children, r2(A3, o, u2, _, s.ignoreWhitespace)));
      }), !c.length && o.length && r2(c, o, 0, 0, s.ignoreWhitespace), c;
    }, eo2;
  }
  function Mh2() {
    if (hc2) return On2;
    hc2 = 1, Object.defineProperty(On2, "__esModule", {
      value: true
    }), On2.createTextVNode = t, On2.transformName = n, On2.unescapeEntities = o;
    var e = $a2;
    function t(s, c) {
      return (0, e.vnode)(void 0, void 0, void 0, o(s, c));
    }
    function n(s) {
      s = s.replace(/-(\w)/g, function(u2, d2) {
        return d2.toUpperCase();
      });
      var c = s.charAt(0).toLowerCase();
      return "" + c + s.substring(1);
    }
    var r2 = new RegExp("&[a-z0-9#]+;", "gi"), i2 = null;
    function o(s, c) {
      return i2 || (i2 = c.createElement("div")), s.replace(r2, function(l2) {
        return i2.innerHTML = l2, i2.textContent;
      });
    }
    return On2;
  }
  function $h2() {
    if (mc2) return qr2;
    mc2 = 1, Object.defineProperty(qr2, "__esModule", {
      value: true
    }), qr2.default = function(f2) {
      var h2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y2 = h2.context || document;
      if (!f2)
        return null;
      var p2 = [], m3 = s((0, t.default)(f2), p2, y2), T2 = void 0;
      return m3 ? m3.length === 1 ? T2 = m3[0] : T2 = m3 : T2 = c({ type: "text", content: f2 }, p2, y2), h2.hooks && h2.hooks.create && p2.forEach(function(_) {
        h2.hooks.create(_);
      }), T2;
    };
    var e = Hh2(), t = i2(e), n = $a2, r2 = Mh2();
    function i2(f2) {
      return f2 && f2.__esModule ? f2 : { default: f2 };
    }
    function o(f2, h2, y2) {
      return h2 in f2 ? Object.defineProperty(f2, h2, { value: y2, enumerable: true, configurable: true, writable: true }) : f2[h2] = y2, f2;
    }
    function s(f2, h2, y2) {
      if (f2 instanceof Array && f2.length > 0)
        return f2.map(function(p2) {
          return c(p2, h2, y2);
        });
    }
    function c(f2, h2, y2) {
      var p2 = void 0;
      return f2.type === "text" ? p2 = (0, r2.createTextVNode)(f2.content, y2) : p2 = (0, n.h)(f2.name, l2(f2, y2), s(f2.children, h2, y2)), h2.push(p2), p2;
    }
    function l2(f2, h2) {
      var y2 = {};
      if (!f2.attrs)
        return y2;
      var p2 = Object.keys(f2.attrs).reduce(function(_, S2) {
        if (S2 !== "style" && S2 !== "class") {
          var A3 = (0, r2.unescapeEntities)(f2.attrs[S2], h2);
          _ ? _[S2] = A3 : _ = o({}, S2, A3);
        }
        return _;
      }, null);
      p2 && (y2.attrs = p2);
      var m3 = u2(f2);
      m3 && (y2.style = m3);
      var T2 = d2(f2);
      return T2 && (y2.class = T2), y2;
    }
    function u2(f2) {
      try {
        return f2.attrs.style.split(";").reduce(function(h2, y2) {
          var p2 = y2.split(":"), m3 = (0, r2.transformName)(p2[0].trim());
          if (m3) {
            var T2 = p2[1].replace("!important", "").trim();
            h2 ? h2[m3] = T2 : h2 = o({}, m3, T2);
          }
          return h2;
        }, null);
      } catch {
        return null;
      }
    }
    function d2(f2) {
      try {
        return f2.attrs.class.split(" ").reduce(function(h2, y2) {
          return y2 = y2.trim(), y2 && (h2 ? h2[y2] = true : h2 = o({}, y2, true)), h2;
        }, null);
      } catch {
        return null;
      }
    }
    return qr2;
  }
  function Bh2() {
    return Ec2 || (Ec2 = 1, to2 = $h2()), to2;
  }
  function Wh2(e, t, n) {
    let r2 = 0, i2 = 0, o = e;
    if (o.offsetParent)
      for (; r2 += o.offsetLeft, i2 += o.offsetTop, !!(o = o.offsetParent); )
        ;
    return {
      left: r2 + e.offsetWidth / 2 + t,
      top: i2 + e.offsetHeight + 10 + n
    };
  }
  function Gh2(e) {
    const t = e.includes("top"), n = e.includes("left"), r2 = e.includes("right");
    return n ? t ? -140 : -135 : r2 ? t ? 130 : 135 : 0;
  }
  function Ba2(e) {
    return window.getComputedStyle(e).position === "fixed" ? true : e.parentElement !== null && e.parentElement !== document.body ? Ba2(e.parentElement) : false;
  }
  function jh2(e, t) {
    const n = e.includes("top"), r2 = Gh2(e), i2 = n ? -70 : 0, o = t.elm.parentElement;
    return Wh2(o, r2, i2);
  }
  function qh2() {
    const { body: e } = document, t = document.documentElement;
    return {
      width: Math.max.apply(Math, [
        e.scrollWidth,
        e.offsetWidth,
        t.clientWidth,
        t.scrollWidth,
        t.offsetWidth
      ]),
      height: Math.max.apply(Math, [
        e.scrollHeight,
        e.offsetHeight,
        t.clientHeight,
        t.scrollHeight,
        t.offsetHeight
      ])
    };
  }
  function gc2(e) {
    e.setAttribute("tabindex", "0"), e.focus();
  }
  function zh2(e) {
    const t = new Date(e);
    return `${Yh2[t.getMonth()]} ${t.getDate()}`;
  }
  function Sc2({ index: e, item: t, onItemClick: n, hasBeenSeen: r2 }) {
    const i2 = (o, { id: s }, c) => {
      (o.key === " " || o.key === "Enter") && n(o, s, c);
    };
    return /* @__PURE__ */ a2.html(
      "li",
      {
        classNames: r2 ? "appcues-read" : "appcues-unread",
        "attrs-tabindex": "-1",
        id: `appcues-widget-listitem-${e}`,
        "on-keyup": (o) => i2(o, t, r2)
      },
      /* @__PURE__ */ a2.html(
        "a",
        {
          "attrs-data-itemid": t.id,
          "attrs-data-isread": r2,
          "on-click": (o) => n(o, t.id, r2)
        },
        t.name,
        /* @__PURE__ */ a2.html("time", null, zh2(t.version_id))
      )
    );
  }
  function Qh2(e, t) {
    const n = document.createElement("div");
    t.classList.add("appcues-widget"), t.appendChild(n);
    const r2 = document.createElement("link");
    return r2.setAttribute("rel", "stylesheet"), r2.setAttribute("type", "text/css"), r2.setAttribute("href", Bt2("/widget.css")), document.head.appendChild(r2), e(n, /* @__PURE__ */ a2.html("div", null));
  }
  function Zh2(e) {
    const t = document.createElement("div");
    return document.body.appendChild(t), e(t, /* @__PURE__ */ a2.html("div", null));
  }
  function em() {
    const e = Jn2([
      tr2,
      er2,
      Zn2,
      nr2,
      Qn2
    ]);
    let t = null, n = null;
    return function(i2) {
      const o = Aa2(i2), s = Hf2(i2), c = Mf2(i2), l2 = $f2(i2) || "default", u2 = Bf2(i2), d2 = Vf2(i2), f2 = wo2(i2), h2 = Wf2(i2), y2 = i2.views.callbacks[x.WIDGET], p2 = document.documentElement.querySelector(o), m3 = () => {
        y2.onToggled(), document.documentElement.querySelector(
          "#appcues-widget-content > ul"
        ).focus();
      };
      p2 && ((!t || !Ro2(t.elm)) && (t = Qh2(e, p2)), (!n || !Ro2(n.elm)) && (n = Zh2(e)), t = e(
        t,
        /* @__PURE__ */ a2.html("div", { "class-appcues": true }, /* @__PURE__ */ a2.html("style", null, `
              .appcues-widget-icon {
                border: none;
                background: none;
                overflow: visible;
              }
            `), Jh2({
          expanded: f2,
          flows: c,
          history: s,
          onClose: y2.onClose,
          onClick: m3,
          icon: h2
        }))
      ), n = e(
        n,
        /* @__PURE__ */ a2.html("div", { "class-appcues": true }, Xh2({
          flows: c,
          history: s,
          position: l2,
          header: u2,
          footer: d2,
          expanded: f2,
          onClose: y2.onClose,
          onOutsideClick: y2.onToggled,
          onItemClick: y2.onItemClicked,
          dropdownPositioning: jh2(
            l2,
            t
          ),
          hasFixedAncestor: Ba2(
            t.elm.parentElement
          )
        }))
      ));
    };
  }
  function b3(e, t = (n) => n) {
    return (...n) => {
      const r2 = { type: e };
      if (n.length > 0 && n[0] instanceof Error) {
        const [i2] = n;
        r2.error = true, r2.payload = i2;
      } else n.length > 0 && (r2.payload = t(...n));
      return r2;
    };
  }
  function ze2(e) {
    return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
  }
  function $m(e) {
    if (typeof e != "object" || e === null)
      return false;
    let t = e;
    for (; Object.getPrototypeOf(t) !== null; )
      t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
  }
  function qa2(e, t, n) {
    if (typeof e != "function")
      throw new Error(ze2(2));
    if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
      throw new Error(ze2(0));
    if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
      if (typeof n != "function")
        throw new Error(ze2(1));
      return n(qa2)(e, t);
    }
    let r2 = e, i2 = t, o = /* @__PURE__ */ new Map(), s = o, c = 0, l2 = false;
    function u2() {
      s === o && (s = /* @__PURE__ */ new Map(), o.forEach((T2, _) => {
        s.set(_, T2);
      }));
    }
    function d2() {
      if (l2)
        throw new Error(ze2(3));
      return i2;
    }
    function f2(T2) {
      if (typeof T2 != "function")
        throw new Error(ze2(4));
      if (l2)
        throw new Error(ze2(5));
      let _ = true;
      u2();
      const S2 = c++;
      return s.set(S2, T2), function() {
        if (_) {
          if (l2)
            throw new Error(ze2(6));
          _ = false, u2(), s.delete(S2), o = null;
        }
      };
    }
    function h2(T2) {
      if (!$m(T2))
        throw new Error(ze2(7));
      if (typeof T2.type > "u")
        throw new Error(ze2(8));
      if (typeof T2.type != "string")
        throw new Error(ze2(17));
      if (l2)
        throw new Error(ze2(9));
      try {
        l2 = true, i2 = r2(i2, T2);
      } finally {
        l2 = false;
      }
      return (o = s).forEach((S2) => {
        S2();
      }), T2;
    }
    function y2(T2) {
      if (typeof T2 != "function")
        throw new Error(ze2(10));
      r2 = T2, h2({
        type: kc2.REPLACE
      });
    }
    function p2() {
      const T2 = f2;
      return {
        /**
         * The minimal observable subscription method.
         * @param observer Any object that can be used as an observer.
         * The observer object should have a `next` method.
         * @returns An object with an `unsubscribe` method that can
         * be used to unsubscribe the observable from the store, and prevent further
         * emission of values from the observable.
         */
        subscribe(_) {
          if (typeof _ != "object" || _ === null)
            throw new Error(ze2(11));
          function S2() {
            const I3 = _;
            I3.next && I3.next(d2());
          }
          return S2(), {
            unsubscribe: T2(S2)
          };
        },
        [wc2]() {
          return this;
        }
      };
    }
    return h2({
      type: kc2.INIT
    }), {
      dispatch: h2,
      subscribe: f2,
      getState: d2,
      replaceReducer: y2,
      [wc2]: p2
    };
  }
  function Bm(e, t, n) {
    return qa2(e, t, n);
  }
  function Vm(...e) {
    return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r2) => t(n(...r2)));
  }
  function Wm(...e) {
    return (t) => (n, r2) => {
      const i2 = t(n, r2);
      let o = () => {
        throw new Error(ze2(15));
      };
      const s = {
        getState: i2.getState,
        dispatch: (l2, ...u2) => o(l2, ...u2)
      }, c = e.map((l2) => l2(s));
      return o = Vm(...c)(i2.dispatch), {
        ...i2,
        dispatch: o
      };
    };
  }
  function jm(e, t) {
    for (var n in t) {
      var r2 = t[n];
      r2.configurable = r2.enumerable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e, n, r2);
    }
    return e;
  }
  function Lo(e) {
    return (e === "*" ? fr2.wildcard : M3.array(e) ? fr2.array : M3.stringableFunc(e) ? fr2.default : M3.func(e) ? fr2.predicate : fr2.default)(e);
  }
  function Km(e, t, n) {
    var r2 = [], i2 = void 0, o = false;
    c(t);
    function s(u2) {
      l2(), n(u2, true);
    }
    function c(u2) {
      r2.push(u2), u2.cont = function(d2, f2) {
        o || (Ti3(r2, u2), u2.cont = Pe3, f2 ? s(d2) : (u2 === t && (i2 = d2), r2.length || (o = true, n(i2))));
      };
    }
    function l2() {
      o || (o = true, r2.forEach(function(u2) {
        u2.cont = Pe3, u2.cancel();
      }), r2 = []);
    }
    return {
      addTask: c,
      cancelAll: l2,
      abort: s,
      getTasks: function() {
        return r2;
      },
      taskNames: function() {
        return r2.map(function(d2) {
          return d2.name;
        });
      }
    };
  }
  function Ym(e) {
    var t = e.context, n = e.fn, r2 = e.args;
    if (M3.iterator(n))
      return n;
    var i2 = void 0, o = void 0;
    try {
      i2 = n.apply(t, r2);
    } catch (s) {
      o = s;
    }
    return M3.iterator(i2) ? i2 : Ao(o ? function() {
      throw o;
    } : /* @__PURE__ */ (function() {
      var s = void 0, c = { done: false, value: i2 }, l2 = function(d2) {
        return { done: true, value: d2 };
      };
      return function(u2) {
        return s ? l2(u2) : (s = true, c);
      };
    })());
  }
  function xo2(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
      return Pe3;
    }, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Pe3, r2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Pe3, i2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {}, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 0, c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "anonymous", l2 = arguments[8];
    ge3(e, M3.iterator, qm);
    var u2 = Xo2(Oe3), d2 = o.sagaMonitor, f2 = o.logger, h2 = o.onError, y2 = f2 || $l2, p2 = function(x2) {
      var k2 = x2.sagaStack;
      !k2 && x2.stack && (k2 = x2.stack.split(`
`)[0].indexOf(x2.message) !== -1 ? x2.stack : "Error: " + x2.message + `
` + x2.stack), y2("error", "uncaught at " + c, k2 || x2.message || x2);
    }, m3 = af2(t), T2 = Object.create(i2);
    O3.cancel = Pe3;
    var _ = fe2(s, c, e, l2), S2 = { name: c, cancel: I3, isRunning: true }, A3 = Km(c, S2, L3);
    function I3() {
      S2.isRunning && !S2.isCancelled && (S2.isCancelled = true, O3(Zt3));
    }
    function C3() {
      e._isRunning && !e._isCancelled && (e._isCancelled = true, A3.cancelAll(), L3(Zt3));
    }
    return l2 && (l2.cancel = C3), e._isRunning = true, O3(), _;
    function O3(N3, x2) {
      if (!S2.isRunning)
        throw new Error("Trying to resume an already finished generator");
      try {
        var k2 = void 0;
        x2 ? k2 = e.throw(N3) : N3 === Zt3 ? (S2.isCancelled = true, O3.cancel(), k2 = M3.func(e.return) ? e.return(Zt3) : { done: true, value: Zt3 }) : N3 === Kr2 ? k2 = M3.func(e.return) ? e.return() : { done: true } : k2 = e.next(N3), k2.done ? (S2.isMainRunning = false, S2.cont && S2.cont(k2.value)) : H4(k2.value, s, "", O3);
      } catch (X3) {
        S2.isCancelled && p2(X3), S2.isMainRunning = false, S2.cont(X3, true);
      }
    }
    function L3(N3, x2) {
      e._isRunning = false, m3.close(), x2 ? (N3 instanceof Error && Object.defineProperty(N3, "sagaStack", {
        value: "at " + c + ` 
 ` + (N3.sagaStack || N3.stack),
        configurable: true
      }), _.cont || (N3 instanceof Error && h2 ? h2(N3) : p2(N3)), e._error = N3, e._isAborted = true, e._deferredEnd && e._deferredEnd.reject(N3)) : (e._result = N3, e._deferredEnd && e._deferredEnd.resolve(N3)), _.cont && _.cont(N3, x2), _.joiners.forEach(function(k2) {
        return k2.cb(N3, x2);
      }), _.joiners = null;
    }
    function H4(N3, x2) {
      var k2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", X3 = arguments[3], Z2 = Ml2();
      d2 && d2.effectTriggered({ effectId: Z2, parentEffectId: x2, label: k2, effect: N3 });
      var Q2 = void 0;
      function B3(ke3, xe2) {
        Q2 || (Q2 = true, X3.cancel = Pe3, d2 && (xe2 ? d2.effectRejected(Z2, ke3) : d2.effectResolved(Z2, ke3)), X3(ke3, xe2));
      }
      B3.cancel = Pe3, X3.cancel = function() {
        if (!Q2) {
          Q2 = true;
          try {
            B3.cancel();
          } catch (ke3) {
            p2(ke3);
          }
          B3.cancel = Pe3, d2 && d2.effectCancelled(Z2);
        }
      };
      var j3 = void 0;
      return (
        // Non declarative effect
        M3.promise(N3) ? R3(N3, B3) : M3.helper(N3) ? de3(zm(N3), Z2, B3) : M3.iterator(N3) ? K3(N3, Z2, c, B3) : M3.array(N3) ? u2(N3, Z2, B3) : (j3 = Me3.take(N3)) ? G2(j3, B3) : (j3 = Me3.put(N3)) ? ue3(j3, B3) : (j3 = Me3.all(N3)) ? Oe3(j3, Z2, B3) : (j3 = Me3.race(N3)) ? Ye3(j3, Z2, B3) : (j3 = Me3.call(N3)) ? w3(j3, Z2, B3) : (j3 = Me3.cps(N3)) ? J3(j3, B3) : (j3 = Me3.fork(N3)) ? de3(j3, Z2, B3) : (j3 = Me3.join(N3)) ? pe3(j3, B3) : (j3 = Me3.cancel(N3)) ? Ce3(j3, B3) : (j3 = Me3.select(N3)) ? Le3(j3, B3) : (j3 = Me3.actionChannel(N3)) ? V3(j3, B3) : (j3 = Me3.flush(N3)) ? ie4(j3, B3) : (j3 = Me3.cancelled(N3)) ? Y4(j3, B3) : (j3 = Me3.getContext(N3)) ? _e3(j3, B3) : (j3 = Me3.setContext(N3)) ? oe4(j3, B3) : (
          /* anything else returned as is */
          B3(N3)
        )
      );
    }
    function R3(N3, x2) {
      var k2 = N3[Pl2];
      M3.func(k2) ? x2.cancel = k2 : M3.func(N3.abort) && (x2.cancel = function() {
        return N3.abort();
      }), N3.then(x2, function(X3) {
        return x2(X3, true);
      });
    }
    function K3(N3, x2, k2, X3) {
      xo2(N3, t, n, r2, T2, o, x2, k2, X3);
    }
    function G2(N3, x2) {
      var k2 = N3.channel, X3 = N3.pattern, Z2 = N3.maybe;
      k2 = k2 || m3;
      var Q2 = function(j3) {
        return j3 instanceof Error ? x2(j3, true) : ri3(j3) && !Z2 ? x2(Kr2) : x2(j3);
      };
      try {
        k2.take(Q2, Lo(X3));
      } catch (B3) {
        return x2(B3, true);
      }
      x2.cancel = Q2.cancel;
    }
    function ue3(N3, x2) {
      var k2 = N3.channel, X3 = N3.action, Z2 = N3.resolve;
      oa2(function() {
        var Q2 = void 0;
        try {
          Q2 = (k2 ? k2.put : n)(X3);
        } catch (B3) {
          if (k2 || Z2) return x2(B3, true);
          p2(B3);
        }
        if (Z2 && M3.promise(Q2))
          R3(Q2, x2);
        else
          return x2(Q2);
      });
    }
    function w3(N3, x2, k2) {
      var X3 = N3.context, Z2 = N3.fn, Q2 = N3.args, B3 = void 0;
      try {
        B3 = Z2.apply(X3, Q2);
      } catch (j3) {
        return k2(j3, true);
      }
      return M3.promise(B3) ? R3(B3, k2) : M3.iterator(B3) ? K3(B3, x2, Z2.name, k2) : k2(B3);
    }
    function J3(N3, x2) {
      var k2 = N3.context, X3 = N3.fn, Z2 = N3.args;
      try {
        var Q2 = function(j3, ke3) {
          return M3.undef(j3) ? x2(ke3) : x2(j3, true);
        };
        X3.apply(k2, Z2.concat(Q2)), Q2.cancel && (x2.cancel = function() {
          return Q2.cancel();
        });
      } catch (B3) {
        return x2(B3, true);
      }
    }
    function de3(N3, x2, k2) {
      var X3 = N3.context, Z2 = N3.fn, Q2 = N3.args, B3 = N3.detached, j3 = Ym({ context: X3, fn: Z2, args: Q2 });
      try {
        Zo2();
        var ke3 = xo2(j3, t, n, r2, T2, o, x2, Z2.name, B3 ? null : Pe3);
        B3 ? k2(ke3) : j3._isRunning ? (A3.addTask(ke3), k2(ke3)) : j3._error ? A3.abort(j3._error) : k2(ke3);
      } finally {
        ca2();
      }
    }
    function pe3(N3, x2) {
      if (N3.isRunning()) {
        var k2 = { task: _, cb: x2 };
        x2.cancel = function() {
          return Ti3(N3.joiners, k2);
        }, N3.joiners.push(k2);
      } else
        N3.isAborted() ? x2(N3.error(), true) : x2(N3.result());
    }
    function Ce3(N3, x2) {
      N3 === Fl2 && (N3 = _), N3.isRunning() && N3.cancel(), x2();
    }
    function Oe3(N3, x2, k2) {
      var X3 = Object.keys(N3);
      if (!X3.length)
        return k2(M3.array(N3) ? [] : {});
      var Z2 = 0, Q2 = void 0, B3 = {}, j3 = {};
      function ke3() {
        Z2 === X3.length && (Q2 = true, k2(M3.array(N3) ? $d2.from(Oc2({}, B3, { length: X3.length })) : B3));
      }
      X3.forEach(function(xe2) {
        var wn2 = function(_t3, Vr2) {
          Q2 || (Vr2 || ri3(_t3) || _t3 === Kr2 || _t3 === Zt3 ? (k2.cancel(), k2(_t3, Vr2)) : (B3[xe2] = _t3, Z2++, ke3()));
        };
        wn2.cancel = Pe3, j3[xe2] = wn2;
      }), k2.cancel = function() {
        Q2 || (Q2 = true, X3.forEach(function(xe2) {
          return j3[xe2].cancel();
        }));
      }, X3.forEach(function(xe2) {
        return H4(N3[xe2], x2, xe2, j3[xe2]);
      });
    }
    function Ye3(N3, x2, k2) {
      var X3 = void 0, Z2 = Object.keys(N3), Q2 = {};
      Z2.forEach(function(B3) {
        var j3 = function(xe2, wn2) {
          if (!X3) {
            if (wn2)
              k2.cancel(), k2(xe2, true);
            else if (!ri3(xe2) && xe2 !== Kr2 && xe2 !== Zt3) {
              var Nn;
              k2.cancel(), X3 = true;
              var _t3 = (Nn = {}, Nn[B3] = xe2, Nn);
              k2(M3.array(N3) ? [].slice.call(Oc2({}, _t3, { length: Z2.length })) : _t3);
            }
          }
        };
        j3.cancel = Pe3, Q2[B3] = j3;
      }), k2.cancel = function() {
        X3 || (X3 = true, Z2.forEach(function(B3) {
          return Q2[B3].cancel();
        }));
      }, Z2.forEach(function(B3) {
        X3 || H4(N3[B3], x2, B3, Q2[B3]);
      });
    }
    function Le3(N3, x2) {
      var k2 = N3.selector, X3 = N3.args;
      try {
        var Z2 = k2.apply(void 0, [r2()].concat(X3));
        x2(Z2);
      } catch (Q2) {
        x2(Q2, true);
      }
    }
    function V3(N3, x2) {
      var k2 = N3.pattern, X3 = N3.buffer, Z2 = Lo(k2);
      Z2.pattern = k2, x2(kr(t, X3 || Gn2.fixed(), Z2));
    }
    function Y4(N3, x2) {
      x2(!!S2.isCancelled);
    }
    function ie4(N3, x2) {
      N3.flush(x2);
    }
    function _e3(N3, x2) {
      x2(T2[N3]);
    }
    function oe4(N3, x2) {
      _o2.assign(T2, N3), x2();
    }
    function fe2(N3, x2, k2, X3) {
      var Z2, Q2, B3;
      return k2._deferredEnd = null, Q2 = {}, Q2[Ll2] = true, Q2.id = N3, Q2.name = x2, Z2 = "done", B3 = {}, B3[Z2] = B3[Z2] || {}, B3[Z2].get = function() {
        if (k2._deferredEnd)
          return k2._deferredEnd.promise;
        var j3 = Bd2();
        return k2._deferredEnd = j3, k2._isRunning || (k2._error ? j3.reject(k2._error) : j3.resolve(k2._result)), j3.promise;
      }, Q2.cont = X3, Q2.joiners = [], Q2.cancel = C3, Q2.isRunning = function() {
        return k2._isRunning;
      }, Q2.isCancelled = function() {
        return k2._isCancelled;
      }, Q2.isAborted = function() {
        return k2._isAborted;
      }, Q2.result = function() {
        return k2._result;
      }, Q2.error = function() {
        return k2._error;
      }, Q2.setContext = function(ke3) {
        ge3(ke3, M3.object, Bl2("task", ke3)), _o2.assign(T2, ke3);
      }, jm(Q2, B3), Q2;
    }
  }
  function Jm(e, t) {
    for (var n = arguments.length, r2 = Array(n > 2 ? n - 2 : 0), i2 = 2; i2 < n; i2++)
      r2[i2 - 2] = arguments[i2];
    var o = void 0;
    M3.iterator(e) ? (o = e, e = t) : (ge3(t, M3.func, Rc2), o = t.apply(void 0, r2), ge3(o, M3.iterator, Rc2));
    var s = e, c = s.subscribe, l2 = s.dispatch, u2 = s.getState, d2 = s.context, f2 = s.sagaMonitor, h2 = s.logger, y2 = s.onError, p2 = Ml2();
    f2 && (f2.effectTriggered = f2.effectTriggered || Pe3, f2.effectResolved = f2.effectResolved || Pe3, f2.effectRejected = f2.effectRejected || Pe3, f2.effectCancelled = f2.effectCancelled || Pe3, f2.actionDispatched = f2.actionDispatched || Pe3, f2.effectTriggered({ effectId: p2, root: true, parentEffectId: 0, effect: { root: true, saga: t, args: r2 } }));
    var m3 = xo2(o, c, jd2(l2), u2, d2, { sagaMonitor: f2, logger: h2, onError: y2 }, p2, t.name);
    return f2 && f2.effectResolved(p2, m3), m3;
  }
  function Qm(e, t) {
    var n = {};
    for (var r2 in e)
      t.indexOf(r2) >= 0 || Object.prototype.hasOwnProperty.call(e, r2) && (n[r2] = e[r2]);
    return n;
  }
  function Zm() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.context, n = t === void 0 ? {} : t, r2 = Qm(e, ["context"]), i2 = r2.sagaMonitor, o = r2.logger, s = r2.onError;
    if (M3.func(r2))
      throw new Error("Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead");
    if (o && !M3.func(o))
      throw new Error("`options.logger` passed to the Saga middleware is not a function!");
    if (s && !M3.func(s))
      throw new Error("`options.onError` passed to the Saga middleware is not a function!");
    if (r2.emitter && !M3.func(r2.emitter))
      throw new Error("`options.emitter` passed to the Saga middleware is not a function!");
    function c(l2) {
      var u2 = l2.getState, d2 = l2.dispatch, f2 = sf2();
      return f2.emit = (r2.emitter || Hl2)(f2.emit), c.run = Jm.bind(null, {
        context: n,
        subscribe: f2.subscribe,
        dispatch: d2,
        getState: u2,
        sagaMonitor: i2,
        logger: o,
        onError: s
      }), function(h2) {
        return function(y2) {
          i2 && i2.actionDispatched && i2.actionDispatched(y2);
          var p2 = h2(y2);
          return f2.emit(y2), p2;
        };
      };
    }
    return c.run = function() {
      throw new Error("Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware");
    }, c.setContext = function(l2) {
      ge3(l2, M3.object, Bl2("sagaMiddleware", l2)), _o2.assign(n, l2);
    }, c;
  }
  function D3(e) {
    return (t, { error: n, payload: r2 }) => n ? t : e(t, r2);
  }
  function tE({ getState: e }) {
    return (t) => (n) => {
      try {
        n.error && $t2(e())(n.payload, { extra: n.payload.extra || {} });
      } catch {
      } finally {
        t(n);
      }
    };
  }
  function Qe3(e, t) {
    return { ...e, currentContent: { ...e.currentContent, ...t } };
  }
  function yt3(e, t) {
    return Qe3(e, {
      state: { ...e.currentContent.state, ...t }
    });
  }
  function Dt3(e, t, n) {
    const r2 = Ot3(e);
    return yt3(e, {
      children: {
        ...r2,
        [t]: { ...r2[t], ...n }
      }
    });
  }
  function rE(e, t) {
    const n = Ot3(e);
    return yt3(e, {
      children: {
        ...n,
        [t]: {}
      }
    });
  }
  function* oE(e) {
    try {
      yield In(e);
    } catch (t) {
      const n = yield v3($t2);
      try {
        n(t);
      } catch {
      }
    }
  }
  function* sE(e, ...t) {
    const n = yield kt(e, ...t);
    return yield kt(oE, n), n;
  }
  function ut(e, ...t) {
    return E(sE, e, ...t);
  }
  function* cE(e, t) {
    try {
      yield In(t);
    } finally {
      yield g3(km(e, t.id));
    }
  }
  function Ka2(e, t) {
    return `${e}-step:${t}`;
  }
  function* Ya2(e, t, n, ...r2) {
    for (; ; ) {
      const i2 = yield W2(e), o = yield ut(t, ...r2, i2);
      if (n) {
        const s = typeof n == "function" ? yield E(n) : n;
        yield g3(wm(s, o)), yield kt(cE, s, o);
      }
    }
  }
  function* ee4(e, t, ...n) {
    yield* Ya2(e, t, false, ...n);
  }
  function* lE(e, t, n, ...r2) {
    let i2;
    for (; ; ) {
      const o = yield W2(e);
      i2 && (yield ot3(i2)), i2 = yield ut(t, ...r2, o);
    }
  }
  function* Ze2(e, t, ...n) {
    yield* lE(e, t, false, ...n);
  }
  function* aE(e) {
    yield qe2(e);
  }
  function Qt(e, t, n) {
    let r2 = n;
    return ne4.defined(r2) || (r2 = Date.now()), { name: e, attributes: t, timestamp: r2 };
  }
  function Be2(e) {
    const t = { ...e }, { id: n, timestamp: r2 } = t;
    return delete t.timestamp, delete t.id, delete t.actionId, delete t.name, Qt(`appcues:${n}`, t, r2);
  }
  function Dr2(e, t, n) {
    return {
      checklistId: e.id,
      checklistName: e.internal_name,
      timestamp: Date.now(),
      sessionId: t,
      ...n
    };
  }
  function za2(e, t, n, r2) {
    return {
      checklistId: e.id,
      checklistName: e.internal_name,
      checklistVersion: e.version_id,
      itemId: t.id,
      itemIndex: t.index,
      itemLabel: t.label,
      timestamp: Date.now(),
      sessionId: n,
      ...r2
    };
  }
  function vn(e, t, n, r2) {
    const i2 = ht2(e, n);
    return Object.assign(
      i2,
      {
        stepId: t.id,
        stepType: t.type,
        stepNumber: $n2(e, t.id)
      },
      r2
    );
  }
  function Fr2(e, t, n, r2, i2) {
    const o = mn2(t, n);
    return vn(e, t, r2, {
      stepChildId: n,
      stepChildNumber: o,
      ...i2
    });
  }
  function ms(e, t, n, r2, i2, o) {
    return Fr2(e, t, n, o, {
      interactionType: r2,
      interaction: i2
    });
  }
  function dE(e) {
    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
  }
  function fE(e, t = "_") {
    return e.split(t).map((n) => n.toLowerCase().charAt(0).toUpperCase() + n.slice(1)).join(" ");
  }
  function Te4(e, t, n) {
    const r2 = n || fE(e);
    return { id: e, name: r2, ...t };
  }
  function pE(e, t) {
    return Te4("flow_attempted", ht2(e, t));
  }
  function Lc2(e, t) {
    return Te4("flow_started", ht2(e, t));
  }
  function hE(e, t) {
    return Te4(
      "nps_survey_started",
      ht2(e, t),
      "NPS Survey Started"
    );
  }
  function mE(e, t) {
    return Te4("flow_completed", ht2(e, t));
  }
  function EE(e, t, n) {
    return Te4(
      "flow_skipped",
      ht2(e, n, {
        stepId: t,
        stepNumber: $n2(e, t)
      })
    );
  }
  function gE(e, t) {
    return Te4("flow_aborted", ht2(e, t));
  }
  function yE(e, t, n) {
    return Te4("step_attempted", vn(e, t, n));
  }
  function xc2(e, t, n) {
    return Te4("step_started", vn(e, t, n));
  }
  function SE(e, t, n) {
    return Te4("step_completed", vn(e, t, n));
  }
  function TE(e, t, n, r2) {
    return Te4(
      "step_skipped",
      vn(e, t, r2, {
        stepChildId: n,
        stepChildNumber: mn2(t, n)
      })
    );
  }
  function CE(e, t, n) {
    return Te4("step_aborted", vn(e, t, n));
  }
  function _E(e, t, n, r2) {
    return Te4(
      "step_child_activated",
      Fr2(e, t, n, r2)
    );
  }
  function IE(e, t, n, r2, i2) {
    return Te4(
      "step_child_deactivated",
      Fr2(e, t, n, i2, { timeSpent: r2 })
    );
  }
  function Pc2(e, t, n, r2, i2, o) {
    return Te4(
      "step_interacted",
      ms(
        e,
        t,
        n,
        r2,
        i2,
        o
      )
    );
  }
  function AE(e, t, n, r2) {
    return Te4(
      "flow_error",
      ht2(e, r2, {
        error: t,
        details: n
      })
    );
  }
  function vE(e, t, n, r2, i2) {
    return Te4(
      "step_error",
      vn(e, t, i2, {
        error: n,
        details: r2
      })
    );
  }
  function bE(e, t, n, r2, i2) {
    return Te4(
      "step_child_error",
      Fr2(e, t, n, i2, {
        error: r2
      })
    );
  }
  function wE(e, t, n, r2) {
    return Te4(
      "step_child_recovered",
      Fr2(e, t, n, r2)
    );
  }
  function NE(e, t, n, r2, i2) {
    return Te4(
      "form_submitted",
      ms(
        e,
        t,
        n,
        "submit",
        r2,
        i2
      )
    );
  }
  function kE(e, t, n, r2, i2) {
    return Te4(
      "form_field_submitted",
      ms(
        e,
        t,
        n,
        "submit",
        r2,
        i2
      )
    );
  }
  function OE(e, t) {
    return Te4(
      "checklist_shown",
      Dr2(e, t)
    );
  }
  function RE(e, t) {
    return Te4(
      "checklist_completed",
      Dr2(e, t)
    );
  }
  function LE(e, t) {
    return Te4(
      "checklist_skipped",
      Dr2(e, t)
    );
  }
  function xE(e, t) {
    return Te4(
      "checklist_dismissed",
      Dr2(e, t)
    );
  }
  function PE(e, t) {
    return Te4(
      "checklist_shown_manually",
      Dr2(e, t)
    );
  }
  function DE(e, t, n) {
    return Te4(
      "checklist_item_started",
      za2(e, t, n)
    );
  }
  function FE(e, t, n) {
    return Te4(
      "checklist_item_completed",
      za2(e, t, n)
    );
  }
  function UE(e) {
    return Te4("session_started", uE(e));
  }
  function HE(e) {
    return Te4("experiment_entered", {
      experimentId: e.experiment_id,
      group: e.group
    });
  }
  function* Xa2(e, t) {
    return (yield v3(qf2))[t]?.[e];
  }
  function* Ja2(e, t) {
    return (yield E(Xa2, e, t))?.group === "control";
  }
  function* ME({ payload: { id: e, type: t } }) {
    const n = yield E(Xa2, e, t);
    if (!n) return;
    const r2 = HE(n);
    yield g3(Ue3(n.flow_id, r2)), yield g3(
      we2({}, [Be2(r2)], false)
    );
  }
  function* $E() {
    yield [
      F3(ee4, U3.EXPERIMENT_STARTED, ME)
    ];
  }
  function BE(e, t) {
    const n = { callback: e };
    return t && (n.context = t), n;
  }
  function VE(e, t, n) {
    let r2 = e;
    for (let i2 = 0; i2 < r2.length; r2++)
      if (t.call(n, r2[i2], i2, r2)) return i2;
    return -1;
  }
  function Dc2(e, t) {
    return e.callback === t.callback && e.context === t.context;
  }
  function Fc2(e, t) {
    let n = {};
    return n = t.type === x.ACTION ? {
      status: a.RUNNING,
      stepId: t.id
    } : {
      status: a.ERROR,
      error: "Tried to run a non-action step."
    }, Qe3(e, n);
  }
  function Sr2() {
    return Date.now();
  }
  function no2(e, t, n) {
    if (t.length > 0) {
      let r2 = Ai3(e);
      return t.forEach((i2) => {
        r2 = { ...r2, [i2]: { ...r2[i2], ...n(i2) } };
      }), {
        ...e,
        reportedErrors: { ...e.reportedErrors, child: r2 }
      };
    }
    return e;
  }
  function mr2(e, t, n) {
    return { ...e, debugger: { ...e.debugger, [t]: n } };
  }
  function Qa2(e, t, n) {
    return mr2(e, "viewState", {
      ...P2((r2) => r2.debugger.viewState, {})(e),
      [t]: n
    });
  }
  function zE(e, t, n) {
    return Qa2(e, "rowState", {
      ...P2((r2) => r2.debugger.viewState.rowState, {})(e),
      [t]: n
    });
  }
  function Za2(e, t) {
    return lt2(t, (n) => n.id === e);
  }
  function Lt2(e, t, n) {
    const i2 = { ...Za2(t, e.checklists), ...n };
    return {
      ...e,
      checklists: (e.checklists || []).map((o) => o.id === t ? i2 : o)
    };
  }
  function eg(e, t) {
    const n = nE({
      ...iE,
      ...WE,
      ...GE,
      ...jE,
      ...KE,
      ...YE,
      ...qE,
      ...JE,
      ...XE,
      ...QE,
      ...ZE,
      ...eE
    }), r2 = Zm(), o = Wm(...[tE, r2])(Bm)(
      n,
      e
    );
    return t.forEach((s) => {
      r2.run(s);
    }), r2.setContext({
      dispatch: o.dispatch
    }), o;
  }
  function Es({ accountId: e, isNPS: t }) {
    const n = `${t ? ng : tg}&utm_source=${e}`;
    return /* @__PURE__ */ a2.html("div", { classNames: "appcues-powered-by-text" }, /* @__PURE__ */ a2.html("a", { href: n, target: "_blank", rel: "noreferrer" }, /* @__PURE__ */ a2.html(eu2, { width: "10px", height: "10px" }), /* @__PURE__ */ a2.html("span", null, "Powered by Appcues")));
  }
  function Po({
    text: e,
    success: t,
    hidden: n,
    onClick: r2,
    attrs: i2,
    style: o
  }) {
    let s = "appcues-button";
    t && (s = `${s} appcues-button-success`);
    let c = o || {};
    n && (c = { ...o, display: "none" });
    const l2 = (d2) => {
      (d2.key === " " || d2.key === "Enter") && r2(d2);
    }, u2 = {};
    return r2 && (u2.click = r2, u2.keyup = l2), // eslint-disable-next-line jsx-a11y/anchor-is-valid
    /* @__PURE__ */ a2.html(
      "a",
      {
        classNames: s,
        attrs: i2,
        style: c,
        on: u2
      },
      e
    );
  }
  function rg() {
    return Uc2 || (Uc2 = 1, ro2 = function(t, n) {
      if (n = n.split(":")[0], t = +t, !t) return false;
      switch (n) {
        case "http":
        case "ws":
          return t !== 80;
        case "https":
        case "wss":
          return t !== 443;
        case "ftp":
          return t !== 21;
        case "gopher":
          return t !== 70;
        case "file":
          return false;
      }
      return t !== 0;
    }), ro2;
  }
  function ig() {
    if (Hc2) return Yr2;
    Hc2 = 1;
    var e = Object.prototype.hasOwnProperty, t;
    function n(s) {
      try {
        return decodeURIComponent(s.replace(/\+/g, " "));
      } catch {
        return null;
      }
    }
    function r2(s) {
      try {
        return encodeURIComponent(s);
      } catch {
        return null;
      }
    }
    function i2(s) {
      for (var c = /([^=?#&]+)=?([^&]*)/g, l2 = {}, u2; u2 = c.exec(s); ) {
        var d2 = n(u2[1]), f2 = n(u2[2]);
        d2 === null || f2 === null || d2 in l2 || (l2[d2] = f2);
      }
      return l2;
    }
    function o(s, c) {
      c = c || "";
      var l2 = [], u2, d2;
      typeof c != "string" && (c = "?");
      for (d2 in s)
        if (e.call(s, d2)) {
          if (u2 = s[d2], !u2 && (u2 === null || u2 === t || isNaN(u2)) && (u2 = ""), d2 = r2(d2), u2 = r2(u2), d2 === null || u2 === null) continue;
          l2.push(d2 + "=" + u2);
        }
      return l2.length ? c + l2.join("&") : "";
    }
    return Yr2.stringify = o, Yr2.parse = i2, Yr2;
  }
  function og() {
    if (Mc2) return io2;
    Mc2 = 1;
    var e = rg(), t = ig(), n = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, r2 = /[\n\r\t]/g, i2 = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, o = /:\d+$/, s = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, c = /^[a-zA-Z]:/;
    function l2(S2) {
      return (S2 || "").toString().replace(n, "");
    }
    var u2 = [
      ["#", "hash"],
      // Extract from the back.
      ["?", "query"],
      // Extract from the back.
      function(A3, I3) {
        return h2(I3.protocol) ? A3.replace(/\\/g, "/") : A3;
      },
      ["/", "pathname"],
      // Extract from the back.
      ["@", "auth", 1],
      // Extract from the front.
      [NaN, "host", void 0, 1, 1],
      // Set left over value.
      [/:(\d*)$/, "port", void 0, 1],
      // RegExp the back.
      [NaN, "hostname", void 0, 1, 1]
      // Set left over.
    ], d2 = { hash: 1, query: 1 };
    function f2(S2) {
      var A3;
      typeof window < "u" ? A3 = window : typeof ec < "u" ? A3 = ec : typeof self < "u" ? A3 = self : A3 = {};
      var I3 = A3.location || {};
      S2 = S2 || I3;
      var C3 = {}, O3 = typeof S2, L3;
      if (S2.protocol === "blob:")
        C3 = new m3(unescape(S2.pathname), {});
      else if (O3 === "string") {
        C3 = new m3(S2, {});
        for (L3 in d2) delete C3[L3];
      } else if (O3 === "object") {
        for (L3 in S2)
          L3 in d2 || (C3[L3] = S2[L3]);
        C3.slashes === void 0 && (C3.slashes = i2.test(S2.href));
      }
      return C3;
    }
    function h2(S2) {
      return S2 === "file:" || S2 === "ftp:" || S2 === "http:" || S2 === "https:" || S2 === "ws:" || S2 === "wss:";
    }
    function y2(S2, A3) {
      S2 = l2(S2), S2 = S2.replace(r2, ""), A3 = A3 || {};
      var I3 = s.exec(S2), C3 = I3[1] ? I3[1].toLowerCase() : "", O3 = !!I3[2], L3 = !!I3[3], H4 = 0, R3;
      return O3 ? L3 ? (R3 = I3[2] + I3[3] + I3[4], H4 = I3[2].length + I3[3].length) : (R3 = I3[2] + I3[4], H4 = I3[2].length) : L3 ? (R3 = I3[3] + I3[4], H4 = I3[3].length) : R3 = I3[4], C3 === "file:" ? H4 >= 2 && (R3 = R3.slice(2)) : h2(C3) ? R3 = I3[4] : C3 ? O3 && (R3 = R3.slice(2)) : H4 >= 2 && h2(A3.protocol) && (R3 = I3[4]), {
        protocol: C3,
        slashes: O3 || h2(C3),
        slashesCount: H4,
        rest: R3
      };
    }
    function p2(S2, A3) {
      if (S2 === "") return A3;
      for (var I3 = (A3 || "/").split("/").slice(0, -1).concat(S2.split("/")), C3 = I3.length, O3 = I3[C3 - 1], L3 = false, H4 = 0; C3--; )
        I3[C3] === "." ? I3.splice(C3, 1) : I3[C3] === ".." ? (I3.splice(C3, 1), H4++) : H4 && (C3 === 0 && (L3 = true), I3.splice(C3, 1), H4--);
      return L3 && I3.unshift(""), (O3 === "." || O3 === "..") && I3.push(""), I3.join("/");
    }
    function m3(S2, A3, I3) {
      if (S2 = l2(S2), S2 = S2.replace(r2, ""), !(this instanceof m3))
        return new m3(S2, A3, I3);
      var C3, O3, L3, H4, R3, K3, G2 = u2.slice(), ue3 = typeof A3, w3 = this, J3 = 0;
      for (ue3 !== "object" && ue3 !== "string" && (I3 = A3, A3 = null), I3 && typeof I3 != "function" && (I3 = t.parse), A3 = f2(A3), O3 = y2(S2 || "", A3), C3 = !O3.protocol && !O3.slashes, w3.slashes = O3.slashes || C3 && A3.slashes, w3.protocol = O3.protocol || A3.protocol || "", S2 = O3.rest, (O3.protocol === "file:" && (O3.slashesCount !== 2 || c.test(S2)) || !O3.slashes && (O3.protocol || O3.slashesCount < 2 || !h2(w3.protocol))) && (G2[3] = [/(.*)/, "pathname"]); J3 < G2.length; J3++) {
        if (H4 = G2[J3], typeof H4 == "function") {
          S2 = H4(S2, w3);
          continue;
        }
        L3 = H4[0], K3 = H4[1], L3 !== L3 ? w3[K3] = S2 : typeof L3 == "string" ? (R3 = L3 === "@" ? S2.lastIndexOf(L3) : S2.indexOf(L3), ~R3 && (typeof H4[2] == "number" ? (w3[K3] = S2.slice(0, R3), S2 = S2.slice(R3 + H4[2])) : (w3[K3] = S2.slice(R3), S2 = S2.slice(0, R3)))) : (R3 = L3.exec(S2)) && (w3[K3] = R3[1], S2 = S2.slice(0, R3.index)), w3[K3] = w3[K3] || C3 && H4[3] && A3[K3] || "", H4[4] && (w3[K3] = w3[K3].toLowerCase());
      }
      I3 && (w3.query = I3(w3.query)), C3 && A3.slashes && w3.pathname.charAt(0) !== "/" && (w3.pathname !== "" || A3.pathname !== "") && (w3.pathname = p2(w3.pathname, A3.pathname)), w3.pathname.charAt(0) !== "/" && h2(w3.protocol) && (w3.pathname = "/" + w3.pathname), e(w3.port, w3.protocol) || (w3.host = w3.hostname, w3.port = ""), w3.username = w3.password = "", w3.auth && (R3 = w3.auth.indexOf(":"), ~R3 ? (w3.username = w3.auth.slice(0, R3), w3.username = encodeURIComponent(decodeURIComponent(w3.username)), w3.password = w3.auth.slice(R3 + 1), w3.password = encodeURIComponent(decodeURIComponent(w3.password))) : w3.username = encodeURIComponent(decodeURIComponent(w3.auth)), w3.auth = w3.password ? w3.username + ":" + w3.password : w3.username), w3.origin = w3.protocol !== "file:" && h2(w3.protocol) && w3.host ? w3.protocol + "//" + w3.host : "null", w3.href = w3.toString();
    }
    function T2(S2, A3, I3) {
      var C3 = this;
      switch (S2) {
        case "query":
          typeof A3 == "string" && A3.length && (A3 = (I3 || t.parse)(A3)), C3[S2] = A3;
          break;
        case "port":
          C3[S2] = A3, e(A3, C3.protocol) ? A3 && (C3.host = C3.hostname + ":" + A3) : (C3.host = C3.hostname, C3[S2] = "");
          break;
        case "hostname":
          C3[S2] = A3, C3.port && (A3 += ":" + C3.port), C3.host = A3;
          break;
        case "host":
          C3[S2] = A3, o.test(A3) ? (A3 = A3.split(":"), C3.port = A3.pop(), C3.hostname = A3.join(":")) : (C3.hostname = A3, C3.port = "");
          break;
        case "protocol":
          C3.protocol = A3.toLowerCase(), C3.slashes = !I3;
          break;
        case "pathname":
        case "hash":
          if (A3) {
            var O3 = S2 === "pathname" ? "/" : "#";
            C3[S2] = A3.charAt(0) !== O3 ? O3 + A3 : A3;
          } else
            C3[S2] = A3;
          break;
        case "username":
        case "password":
          C3[S2] = encodeURIComponent(A3);
          break;
        case "auth":
          var L3 = A3.indexOf(":");
          ~L3 ? (C3.username = A3.slice(0, L3), C3.username = encodeURIComponent(decodeURIComponent(C3.username)), C3.password = A3.slice(L3 + 1), C3.password = encodeURIComponent(decodeURIComponent(C3.password))) : C3.username = encodeURIComponent(decodeURIComponent(A3));
      }
      for (var H4 = 0; H4 < u2.length; H4++) {
        var R3 = u2[H4];
        R3[4] && (C3[R3[1]] = C3[R3[1]].toLowerCase());
      }
      return C3.auth = C3.password ? C3.username + ":" + C3.password : C3.username, C3.origin = C3.protocol !== "file:" && h2(C3.protocol) && C3.host ? C3.protocol + "//" + C3.host : "null", C3.href = C3.toString(), C3;
    }
    function _(S2) {
      (!S2 || typeof S2 != "function") && (S2 = t.stringify);
      var A3, I3 = this, C3 = I3.host, O3 = I3.protocol;
      O3 && O3.charAt(O3.length - 1) !== ":" && (O3 += ":");
      var L3 = O3 + (I3.protocol && I3.slashes || h2(I3.protocol) ? "//" : "");
      return I3.username ? (L3 += I3.username, I3.password && (L3 += ":" + I3.password), L3 += "@") : I3.password ? (L3 += ":" + I3.password, L3 += "@") : I3.protocol !== "file:" && h2(I3.protocol) && !C3 && I3.pathname !== "/" && (L3 += "@"), (C3[C3.length - 1] === ":" || o.test(I3.hostname) && !I3.port) && (C3 += ":"), L3 += C3 + I3.pathname, A3 = typeof I3.query == "object" ? S2(I3.query) : I3.query, A3 && (L3 += A3.charAt(0) !== "?" ? "?" + A3 : A3), I3.hash && (L3 += I3.hash), L3;
    }
    return m3.prototype = { set: T2, toString: _ }, m3.extractProtocol = y2, m3.location = f2, m3.trimLeft = l2, m3.qs = t, io2 = m3, io2;
  }
  function ve3(e) {
    return new Promise((t) => {
      setTimeout(t, e);
    });
  }
  function Xt(e, t, n) {
    return ve3(10).then(() => {
      n ? e.open(t) : e.location.href = t;
    });
  }
  function hg(e) {
    const { pathname: t, query: n, hash: r2 } = cg(e);
    return `${t}${n}${r2}`;
  }
  function Bc2(e) {
    return e?.replace(dg, "$2");
  }
  function mg(e = "", t = "") {
    return e.toLowerCase().trim() === t.toLowerCase().trim();
  }
  function Eg(e = "", t) {
    const n = e.replace(lg, "\\$&").replace(ag, $c2).replace(ug, $c2);
    return pg.test(n) ? new RegExp(`${n}$`, "i").test(t) : new RegExp(`^/?${n}$`, "i").test(hg(t));
  }
  function St(e = "/", t = "/") {
    const [n, r2] = fg.test(e) ? [e, t] : [Bc2(e), Bc2(t)];
    return mg(n, r2) || Eg(n, r2);
  }
  function gg() {
    return window.location.href;
  }
  function tu2(e) {
    Ne3(e, "target") !== "_blank" && Ee3(e, "target", "_parent");
  }
  function nu2(e, t) {
    const n = Ne3(e, "href");
    if (n) {
      const r2 = (i2) => {
        if (i2.type === "keyup" && i2.key !== " " && i2.key !== "Enter")
          return;
        t(i2, n);
        const o = Ne3(e, "target");
        o !== "_blank" ? (i2.preventDefault(), window.setTimeout(() => {
          const s = ((c) => {
            switch (c) {
              case "_parent": {
                const l2 = !!window.parent.location;
                return typeof window.parent == "string" || !l2 ? window : window.parent;
              }
              case "_top":
                return window.top;
              default:
                return window;
            }
          })(o);
          Xt(s, n);
        }, 200)) : i2.type === "keyup" && o === "_blank" && Xt(window, n, true);
      };
      Et2(e, "click", r2), Et2(e, "keyup", r2);
    } else
      Et2(e, "click", t), Et2(e, "keyup", (r2) => {
        (r2.key === " " || r2.key === "Enter") && t(r2);
      });
  }
  function Sg(e) {
    return [
      ...e.querySelectorAll("form.step-action-form .field[data-field-id]")
    ];
  }
  function Tg(e) {
    const t = e.querySelector("form.step-action-form");
    return t ? t.getAttribute("data-form-id") : null;
  }
  function oo2(e) {
    as2(e, "update", (t) => {
      t.elm && t.elm.focus();
    });
  }
  function Ig(e) {
    const {
      step: t,
      currentState: n,
      showBadge: r2,
      accountId: i2,
      isFirst: o,
      isLast: s,
      onComplete: c,
      onCompleteFlow: l2,
      onNextStep: u2,
      onPrevStep: d2,
      onJumpStep: f2,
      onLinkClick: h2,
      onFormSubmission: y2,
      onContentChange: p2,
      onSkip: m3,
      onHandleProfileUpdate: T2,
      onHandleUserEvent: _,
      formatVersion: S2,
      onSetNextContentIdCookie: A3,
      showBackdrop: I3
    } = e, C3 = {
      LEFT: "LEFT",
      RIGHT: "RIGHT"
    }, O3 = {
      NEXT: "NEXT",
      BACK: "BACK"
    }, L3 = {
      NEXT: "Next",
      LAST: "OK, got it",
      BACK: "Back"
    }, H4 = S2 === 1;
    let R3 = t.step_buttons;
    (R3 == null || R3.length === 0) && (R3 = [
      {
        text: Ut3(t.next_text),
        type: O3.NEXT,
        align: C3.RIGHT
      },
      {
        text: Ut3(t.prev_text),
        type: O3.BACK,
        align: C3.LEFT
      }
    ]);
    let K3 = false;
    const G2 = (V3, Y4, ie4 = s, _e3 = false, oe4 = false) => {
      if (!K3) {
        Y4();
        return;
      }
      const fe2 = V3.ownerDocument.documentElement.querySelector(
        "cue.active > section"
      );
      y2(
        Tg(fe2),
        Sg(fe2),
        Y4,
        ie4,
        _e3,
        oe4
      );
    }, ue3 = (V3) => {
      const Y4 = s ? () => c(V3) : () => u2(V3, t.id);
      G2(V3.target, Y4);
    }, w3 = (V3, Y4, ie4, _e3) => {
      G2(Y4, () => f2(V3, ie4, _e3));
    }, J3 = ({ ignoreValidation: V3 }) => (Y4) => {
      G2(
        Y4.target,
        () => l2(Y4),
        false,
        V3
      );
    }, de3 = (V3) => {
      d2(V3, t.id);
    }, pe3 = (V3) => {
      switch (V3) {
        case O3.BACK:
          return de3;
        case O3.NEXT:
          return ue3;
        default:
          return null;
      }
    }, Ce3 = () => {
      const Y4 = (n.forms || {})[n.currentStepChildId] || {}, { fields: ie4 = [] } = Y4;
      return ie4;
    }, Oe3 = Object.keys(n.formErrors || {}).reduce(
      (V3, Y4) => {
        const ie4 = Ce3().findIndex(
          (_e3) => _e3.fieldId === Y4
        );
        return V3 < 0 ? ie4 : Math.min(V3, ie4);
      },
      -1
    ), Ye3 = (V3) => {
      if (Oa2(V3)) {
        const Y4 = Ne3(V3, "data-step"), ie4 = Ne3(V3, "href"), _e3 = Ne3(V3, "data-attrs-event"), oe4 = Ne3(V3, "data-attrs-profile-update"), fe2 = on(V3, "appcues-button"), N3 = Ne3(V3, "data-next-content-id"), x2 = [];
        if (N3 && x2.push(() => A3(N3)), ie4 ? (tu2(V3), x2.push((k2) => h2(k2, t.id, ie4))) : (Ee3(V3, "role", "button"), Ee3(V3, "tabindex", "0")), oe4)
          try {
            const k2 = JSON.parse(oe4);
            Object.keys(k2).length > 0 && x2.push((X3) => {
              G2(
                X3.currentTarget,
                () => T2(k2),
                false,
                Wc2.has(Y4),
                true
              );
            });
          } catch {
          }
        if (_e3)
          try {
            const k2 = JSON.parse(_e3);
            Object.keys(k2).length > 0 && x2.push((X3) => {
              G2(
                X3.currentTarget,
                () => _(
                  k2.event,
                  k2.properties
                ),
                false,
                Wc2.has(Y4),
                true
              );
            });
          } catch {
          }
        if (/^\d+$/.test(Y4))
          x2.push((k2) => {
            w3(
              k2,
              V3.elm,
              t.id,
              Number.parseInt(Y4, 10)
            );
          });
        else if (Y4) {
          const k2 = {
            end: c,
            next: ue3,
            prev: de3,
            skip: m3,
            // as we don't have a clear separation between
            // button action and its configuration.
            // for example:
            // a button can have dismiss action
            // and complete the flow as its configuration
            // that is not a thing today.
            // we actually save dismiss action and any other action
            // that can complete the flow as `end-flow` action.
            // As we need to ignore the form validation ONLY
            // for dismiss, the safest thing to do was to create this new action
            // skip-and-end-flow
            "skip-and-end-flow": J3({ ignoreValidation: true }),
            "end-flow": J3({ ignoreValidation: false })
          }[Y4];
          k2 && x2.push(k2);
        }
        fe2 && Ee3(V3, "tabindex", "0"), La2(V3, (k2) => {
          x2.push((X3) => {
            G2(X3.currentTarget, k2, false);
          });
        }), x2.length > 0 && nu2(V3, (k2, X3) => {
          x2.forEach((Z2) => {
            Z2(k2, X3);
          });
        });
      }
      if (Ra2(V3)) {
        Ee3(V3, "crossOrigin", "anonymous"), Ne3(V3, "alt") || (Ee3(V3, "alt", ""), Ee3(V3, "role", "presentation"));
        const ie4 = Ne3(V3, "src");
        if (ie4?.includes(Vc2)) {
          const _e3 = ie4.replace(Vc2, yg);
          Ee3(V3, "src", _e3);
        }
        Et2(V3, "load", (_e3) => {
          if (p2) {
            const oe4 = _e3.target.ownerDocument;
            window.requestAnimationFrame(() => {
              p2(
                oe4.documentElement.querySelector("modal-container")
              );
            });
          }
        });
      }
      if (zp2(V3) && Et2(V3, "keypress", (Y4) => {
        if (Y4.key === "Enter" && Y4.target.tagName !== "TEXTAREA" && Y4.target.type !== "radio" && Y4.target.type !== "checkbox" && !(Y4.target.classList.contains("rating-options") || Y4.target.classList.contains("rating-option"))) {
          const { currentTarget: ie4 } = Y4;
          G2(ie4, s ? () => c(Y4) : () => u2(Y4, t.id)), Y4.preventDefault ? Y4.preventDefault() : Y4.returnValue = false;
        }
      }), on(V3, "form-field")) {
        const Y4 = Ce3();
        let ie4;
        V3.children.forEach((_e3) => {
          _e3.children && _e3.children.forEach((oe4) => {
            on(oe4, "label-display") && (ie4 = Ne3(oe4, "for"), Ee3(oe4, "id", `label-${ie4}`));
            const fe2 = Y4.find(
              (N3) => N3.fieldId === ie4
            );
            if (on(oe4, "form-control") && (Ee3(oe4, "aria-invalid", "false"), ie4 && Ee3(oe4, "id", ie4), fe2?.value && Ee3(oe4, "value", fe2.value), ie4 === Y4[Oe3]?.fieldId && oo2(oe4), K3 || as2(oe4, "insert", (N3) => {
              N3.elm && N3.elm.focus();
            })), on(oe4, "field-options")) {
              const N3 = Ne3(oe4, "data-type-role"), x2 = Ne3(V3, "data-max-selection");
              if (Ee3(oe4, "role", N3 ?? "radiogroup"), ie4 && (Ee3(oe4, "aria-labelledby", `label-${ie4}`), Ee3(oe4, "tabindex", "0")), Y4) {
                const k2 = oe4.children.filter(
                  (X3) => X3.children && X3.children.find(({ sel: Z2 }) => Z2 === "input")
                );
                k2.forEach((X3) => {
                  Et2(X3, "keypress", (Z2) => {
                    if (Z2.key === "Enter") {
                      const Q2 = X3.children.find(
                        ({ sel: B3 }) => B3 === "input"
                      );
                      Q2 && Q2.elm && Q2.elm.click();
                    }
                  });
                }), x2 && Number.parseInt(x2, 10) > 0 && k2.forEach((X3) => {
                  Et2(X3, "change", () => {
                    const Z2 = k2.filter((Q2) => Q2.children.find(
                      ({ sel: j3 }) => j3 === "input"
                    ).elm.checked);
                    k2.forEach((Q2) => {
                      const B3 = Q2.children.find(
                        ({ sel: j3 }) => j3 === "input"
                      );
                      !B3.elm.checked && Z2.length >= x2 ? B3.elm.setAttribute("disabled", true) : B3.elm.checked || B3.elm.removeAttribute("disabled");
                    });
                  });
                });
              }
              if (Y4 && fe2?.value) {
                const k2 = oe4.children.find(
                  (X3) => X3.children && X3.children.find(({ sel: Z2 }) => Z2 === "input").data?.attrs?.value === fe2.value
                );
                if (k2) {
                  const X3 = k2.children.find(
                    ({ sel: Z2 }) => Z2 === "input"
                  );
                  Ee3(X3, "checked", true);
                }
              }
              ie4 === Y4[Oe3]?.fieldId && oo2(oe4);
            }
            on(oe4, "rating-options") && (Ee3(oe4, "role", "radiogroup"), ie4 && (Ee3(oe4, "aria-labelledby", `label-${ie4}`), Ee3(oe4, "tabindex", "0")), oe4.children.forEach((N3) => {
              Ee3(N3, "tabindex", "0"), Ee3(N3, "role", "radio"), Et2(N3, "keydown", (x2) => {
                if ((x2.key === " " || x2.key === "Enter") && (x2.stopPropagation(), N3.children.forEach((k2) => {
                  Yp2(k2) && k2 && k2.elm && k2.elm.click();
                })), x2.key === "ArrowRight" || x2.key === "ArrowDown") {
                  x2.preventDefault();
                  const k2 = N3.elm.nextElementSibling;
                  k2 ? k2.focus() : oe4.children[0]?.elm.focus();
                }
                if (x2.key === "ArrowLeft" || x2.key === "ArrowUp") {
                  x2.preventDefault();
                  const k2 = N3.elm.previousElementSibling;
                  k2 ? k2.focus() : oe4.children[oe4.children.length - 1]?.elm.focus();
                }
              });
            }), ie4 === Y4[Oe3]?.fieldId && oo2(oe4));
          });
        }), ie4 && n.formErrors && n.formErrors[ie4] && (Kp2(V3, "appcues-error"), V3.children = [
          ...V3.children,
          /* @__PURE__ */ a2.html(
            Ag,
            {
              vnodeFormField: V3.children,
              messages: n.formErrors[ie4],
              fieldId: ie4
            }
          )
        ]), K3 = true;
      }
    }, Le3 = Ut3(t.html, {
      hooks: {
        create: Ye3
      }
    });
    return /* @__PURE__ */ a2.html(
      "cue",
      {
        classNames: `active 
        ${t.actions_hidden ? "appcues-actions-hidden" : ""}
        ${H4 ? "" : "full-buttons"}
      `
      },
      /* @__PURE__ */ a2.html(
        "section",
        {
          "attrs-role": "dialog",
          "attrs-aria-modal": I3 ? "true" : "false",
          "attrs-aria-describedby": Cg,
          "hook-insert": _g,
          "attrs-tabindex": "-1"
        },
        Le3 || ""
      ),
      H4 ? /* @__PURE__ */ a2.html(
        "div",
        {
          classNames: `appcues-actions ${t.actions_hidden ? "hidden" : ""}`
        },
        !t.prev_button_hidden && !t.is_button_centered ? /* @__PURE__ */ a2.html(
          "div",
          {
            classNames: `appcues-actions-left ${t.next_button_hidden ? "appcues-actions-full-row" : ""} `
          },
          R3.filter(
            (V3) => V3.align === C3.LEFT && V3.isVisible !== false
          ).map((V3) => /* @__PURE__ */ a2.html(
            Po,
            {
              style: V3.style ? JSON.parse(V3.style) : void 0,
              text: V3.text || L3.BACK,
              hidden: o,
              attrs: {
                "data-step": "prev",
                role: "button",
                tabindex: "0"
              },
              onClick: pe3(V3.type)
            }
          ))
        ) : /* @__PURE__ */ a2.html(ae4, null),
        t.next_button_hidden ? /* @__PURE__ */ a2.html(ae4, null) : /* @__PURE__ */ a2.html(
          "div",
          {
            classNames: `appcues-actions-right ${t.prev_button_hidden || t.is_button_centered ? "appcues-actions-full-row" : ""} ${t.is_button_centered ? "appcues-actions-align-center" : ""}`
          },
          R3.filter(
            (V3) => V3.align === C3.RIGHT && V3.isVisible !== false
          ).map((V3) => /* @__PURE__ */ a2.html(
            Po,
            {
              success: true,
              style: V3.style ? JSON.parse(V3.style) : void 0,
              text: V3.text || (s ? L3.LAST : L3.NEXT),
              attrs: {
                "data-step": s ? "end" : "next",
                role: "button",
                tabindex: "0"
              },
              onClick: pe3(V3.type)
            }
          ))
        )
      ) : /* @__PURE__ */ a2.html(ae4, null),
      r2 ? /* @__PURE__ */ a2.html(Es, { accountId: i2 }) : /* @__PURE__ */ a2.html(ae4, null)
    );
  }
  function Ag({ messages: e, fieldId: t, vnodeFormField: n }) {
    const r2 = n.find(
      (o) => o.data?.class["field-controls"]
    );
    let i2 = "";
    return e.forEach((o, s) => {
      i2 += `error-for-${t}-${s} `;
    }), r2 && (r2.children[0].data.attrs["aria-invalid"] = "true", r2.children[0].data.attrs["aria-describedBy"] = i2), /* @__PURE__ */ a2.html("ul", { classNames: "messages" }, e.map((o, s) => /* @__PURE__ */ a2.html("li", null, /* @__PURE__ */ a2.html("span", { id: `error-for-${t}-${s}` }, o))));
  }
  function ru2({ onLoad: e = () => null, styling: t }) {
    return /* @__PURE__ */ a2.html(
      "style",
      {
        classNames: "appcues-global-styling",
        "attrs-type": "text/css",
        "on-load": e
      },
      t || ""
    );
  }
  function iu2() {
    return /* @__PURE__ */ a2.html(
      "style",
      {
        selector: Do,
        "attrs-type": "text/css",
        "hook-insert": vg,
        "hook-destroy": bg
      },
      wg
    );
  }
  function ou2(e, t) {
    const n = (o) => {
      o.key === "Escape" && t();
    };
    return { addEscapeEventListener: (o) => {
      if (!e || !o) return;
      const { elm: s } = o, c = s.ownerDocument;
      c && c.addEventListener("keyup", n, true), s.tagName === "IFRAME" && setTimeout(() => {
        const l2 = s.contentDocument;
        l2 && l2.addEventListener("keyup", n, true);
      }, 100);
    }, removeEscapeEventListener: (o) => {
      if (!e || !o) return;
      const { elm: s } = o, c = s.ownerDocument;
      if (c && c.removeEventListener("keyup", n, true), s.tagName === "IFRAME") {
        const l2 = s.contentDocument;
        l2 && l2.removeEventListener("keyup", n, true);
      }
    } };
  }
  function ys2(e, t, n, r2) {
    if (e.defaultView !== null && r2) {
      const i2 = () => r2(t, e.documentElement.querySelector(n));
      gh2(e.defaultView, i2), window.setTimeout(i2, 200);
    }
  }
  function jc2(e) {
    if (!e) return;
    const { style: t } = e, n = t.transform;
    t.transform = n === "scale(1) translateZ(0)" ? "scale(1)" : "scale(1) translateZ(0)", e.offsetHeight;
  }
  function qc2(e) {
    setTimeout(() => {
      e.focus();
    }, 100);
  }
  function xg(e) {
    const t = ye3(e), n = Lr2(e), r2 = Ve2(e), i2 = tt(e), o = st3(e), s = zt3(e, o), c = i2[s], l2 = t.attributes.pattern_type, u2 = t.attributes.is_progress_bar_hidden, { position: d2 } = t.attributes, { backdrop: f2 } = t.attributes, { skippable: h2 } = t.attributes, y2 = e.views.callbacks[x.MODAL], p2 = n.cssLoaded, m3 = Ef2(e), T2 = ga2(e), _ = va2(e), S2 = T2 || m3, I3 = ["modal", "left", "fullscreen"].lastIndexOf(l2) > -1, C3 = I3 || f2, O3 = Li3(e.settings), L3 = _ === 1, H4 = p2 && ne4.inArray(
      [
        /* ContentStatus.WILL_SHOW, */
        a.SHOWING,
        a.WILL_CLOSE
      ],
      r2
    ), R3 = r2 !== a.SHOWING, K3 = {}, G2 = {};
    C3 || (K3.height = (n.height || 0) > 2 ? `${n.height}px` : "150px", K3.width = (n.width || 0) > 2 ? `${n.width}px` : "400px"), H4 || (K3.opacity = "0", K3.visibility = "hidden"), Gc2.has(l2) && (G2.overflow = "auto");
    const ue3 = Math.round((s + 1) / i2.length * 1e3) / 10, w3 = {}, J3 = [];
    for (const [fe2, N3] of i2.entries()) {
      w3[`cue-step-${fe2}`] = fe2 === s;
      const x2 = /<style.*?>((?:.|[\n\r])*?)<\/style>/g;
      let k2;
      for (; (k2 = x2.exec(N3.html)) !== null; )
        k2.index === x2.lastIndex && (x2.lastIndex += 1), J3.push(k2[1]);
    }
    const de3 = (fe2) => {
      fe2.target.tagName === "APPCUES" && h2 && l2 !== "fullscreen" && y2.onSkip();
    }, pe3 = (fe2, N3) => {
      const x2 = fe2.target.ownerDocument;
      N3 ? Oi3(x2, zr2, () => {
        y2.onCSSLoaded(t.id, zr2, true), I3 || ys2(
          x2,
          t.id,
          "modal-container",
          y2.onContentChange
        );
      }) : y2.onCSSLoaded(t.id, zr2, false);
    }, Ce3 = (fe2) => {
      Object.keys(n.formErrors || {}).length > 0 && Gc2.has(l2) || !I3 && fe2 && // @todo remove this function by adding a check in callback to not trigger redraw if AREA same
      Math.abs(
        fe2.getBoundingClientRect().height - Number.parseInt(n.height, 10)
      ) > 2 && y2.onContentChange && window.requestAnimationFrame(
        () => y2.onContentChange(t.id, fe2)
      );
    }, { addEscapeEventListener: Oe3, removeEscapeEventListener: Ye3 } = ou2(h2, y2.onSkip), Le3 = (fe2) => {
      window.requestAnimationFrame(y2.onShow), C3 && mh2(
        document.documentElement.querySelector("body"),
        "appcues-noscroll"
      ), window.requestAnimationFrame(() => {
        it2(fe2.elm), jc2(fe2.elm);
      }), Oe3(fe2);
    }, V3 = (fe2) => {
      Ma2(ma2(e)), Eh2(
        document.documentElement.querySelector("body"),
        "appcues-noscroll"
      ), Ye3(fe2);
    }, Y4 = /* @__PURE__ */ a2.html(
      Dg,
      {
        percentComplete: ue3,
        isProgressBarHidden: u2,
        numberOfSteps: i2.length,
        currentStep: s + 1
      }
    ), ie4 = /* @__PURE__ */ a2.html(Pg, { skippable: h2, onClick: y2.onSkip }), _e3 = /* @__PURE__ */ a2.html(ae4, null), oe4 = /* @__PURE__ */ a2.html(
      Ig,
      {
        step: c,
        key: `modal-step-${s}`,
        currentState: n,
        showBadge: O3,
        accountId: e.settings.accountId,
        isFirst: s === 0,
        isLast: s === i2.length - 1,
        onComplete: y2.onComplete,
        onCompleteFlow: y2.onCompleteFlow,
        onNextStep: y2.onNextStep,
        onPrevStep: y2.onPrevStep,
        onJumpStep: y2.onJumpStep,
        onLinkClick: y2.onLinkClick,
        onStepChildActivated: y2.onStepChildActivated,
        onStepChildDeactivated: y2.onStepChildDeactivated,
        onFormSubmission: y2.onFormSubmission,
        onSetNextContentIdCookie: y2.onSetNextContentIdCookie,
        onContentChange: Ce3,
        onSkip: y2.onSkip,
        onHandleProfileUpdate: y2.onHandleProfileUpdate,
        onHandleUserEvent: y2.onHandleUserEvent,
        formatVersion: _,
        showBackdrop: C3
      }
    );
    return /* @__PURE__ */ a2.html(
      "appcues-container",
      {
        "attrs-data-pattern-type": l2,
        "attrs-data-position": d2,
        "attrs-tabindex": "0",
        "class-appcues-ontop": true,
        "class-appcues-fullscreen": C3,
        "class-apc-hidden": R3,
        classNames: `appcues--theme-${ns2(e) || S2.id || "-default"}`,
        style: K3,
        "on-keydown": so2
      },
      /* @__PURE__ */ a2.html(
        "iframe",
        {
          "style-border": "none",
          "style-display": "block",
          "style-height": "100%",
          "style-width": "100%",
          "style-color-scheme": "none",
          srcdoc: '<meta name="referrer" content="origin" />',
          src: "about:blank",
          "hook-insert": Le3,
          "hook-update": (fe2) => jc2(fe2.elm),
          "hook-destroy": V3,
          "attrs-allowfullscreen": true,
          "attrs-mozallowfullscreen": true,
          "attrs-webkitallowfullscreen": true,
          "attrs-msallowfullscreen": true
        },
        /* @__PURE__ */ a2.html("meta", { name: "referrer", content: "origin" }),
        /* @__PURE__ */ a2.html(
          "link",
          {
            "attrs-href": zr2,
            "attrs-type": "text/css",
            "attrs-rel": "stylesheet",
            "attrs-integrity": Og,
            "attrs-crossorigin": "anonymous",
            "on-load": (fe2) => {
              pe3(fe2, true);
            },
            "on-error": (fe2) => {
              pe3(fe2, false);
            }
          }
        ),
        L3 ? /* @__PURE__ */ a2.html(
          "link",
          {
            "attrs-href": Lg,
            "attrs-type": "text/css",
            "attrs-rel": "stylesheet",
            "attrs-integrity": Rg,
            "attrs-crossorigin": "anonymous"
          }
        ) : /* @__PURE__ */ a2.html(ae4, null),
        /* @__PURE__ */ a2.html(iu2, null),
        /* @__PURE__ */ a2.html(ru2, { styling: S2.globalStyling }),
        /* @__PURE__ */ a2.html("style", { "attrs-type": "text/css", classNames: "extracted-step-styles" }, J3.join(`
`)),
        C3 ? /* @__PURE__ */ a2.html(Fg, { patternType: l2, hidden: R3 }) : /* @__PURE__ */ a2.html(ae4, null),
        (() => {
          let fe2 = /* @__PURE__ */ a2.html(ae4, null);
          return fe2 = I3 ? /* @__PURE__ */ a2.html(
            "appcues",
            {
              "class-active": true,
              "class-apc-hidden": R3,
              "class-fullscreen": C3,
              class: w3,
              "attrs-data-pattern-type": l2,
              "on-click": de3,
              "on-keydown": so2
            },
            Y4,
            ie4,
            _e3,
            oe4
          ) : /* @__PURE__ */ a2.html(
            "appcues",
            {
              "class-active": true,
              "class-apc-hidden": R3,
              "class-fullscreen": C3,
              class: w3,
              "attrs-data-pattern-type": l2,
              "attrs-data-position": d2,
              "on-click": de3,
              "on-keydown": so2,
              style: G2
            },
            /* @__PURE__ */ a2.html(
              "modal-container",
              {
                "class-fullscreen": C3,
                "hook-update": (N3) => {
                  Ce3(N3.elm);
                }
              },
              Y4,
              ie4,
              oe4
            )
          ), fe2;
        })()
      )
    );
  }
  function Pg({ skippable: e, onClick: t }) {
    if (e) {
      const n = (r2) => {
        (r2.key === " " || r2.key === "Enter") && t();
      };
      return /* @__PURE__ */ a2.html("div", { classNames: "appcues-skip" }, /* @__PURE__ */ a2.html(
        "a",
        {
          "attrs-data-step": "skip",
          "on-keyup": n,
          "on-click": t,
          "attrs-aria-label": "Close modal",
          "attrs-role": "button",
          "attrs-tabindex": "0"
        },
        String.fromCodePoint(215)
      ));
    }
    return /* @__PURE__ */ a2.html(ae4, null);
  }
  function Dg({
    currentStep: e,
    numberOfSteps: t,
    percentComplete: n,
    isProgressBarHidden: r2
  }) {
    return r2 ? /* @__PURE__ */ a2.html(ae4, null) : /* @__PURE__ */ a2.html("div", { classNames: "appcues-progress" }, /* @__PURE__ */ a2.html(
      "div",
      {
        classNames: "appcues-progress-bar appcues-progress-bar-success",
        "attrs-role": "progressbar",
        "attrs-aria-label": "current step",
        "attrs-aria-valuemin": 1,
        "attrs-aria-valuemax": t,
        "attrs-aria-valuenow": e,
        "attrs-aria-valuetext": `You are on step ${e} of ${t}`,
        style: {
          width: `${n}%`
        }
      }
    ));
  }
  function Fg({ patternType: e, hidden: t }) {
    return /* @__PURE__ */ a2.html(
      "div",
      {
        "class-appcues-backdrop": true,
        "class-apc-hidden": t,
        "attrs-data-pattern-type": e
      }
    );
  }
  function $g(e, t) {
    return {
      skippable: e.skippable,
      skipText: e.skipText,
      skippableDisplayType: e.skippableDisplayType || Oe2.TEXT,
      onSkip: t.onSkip
    };
  }
  function Ss(e) {
    return !(!e || !e.skippable);
  }
  function su2(e, t) {
    return e ? e === t : false;
  }
  function Xc2(e) {
    return Ss(e) ? su2(
      e.skippableDisplayType,
      Oe2.TEXT
    ) : false;
  }
  function Bg(e) {
    return Ss(e) ? su2(
      e.skippableDisplayType,
      Oe2.EXIT_SYMBOL
    ) : false;
  }
  function Jc2(e, t) {
    if (!t)
      return { focusableElements: [], isBoundaryElement: () => false };
    const { activeElement: n, documentElement: r2 } = t, i2 = Ri3(r2), o = i2.indexOf(n);
    return {
      focusableElements: i2,
      isBoundaryElement: () => {
        const s = i2.length;
        return e.shiftKey && o === 0 || !e.shiftKey && o === s - 1;
      }
    };
  }
  function Vg({ skipOptions: e, buttonText: t, onButtonClick: n }) {
    return !Xc2(e) && !t ? /* @__PURE__ */ a2.html(ae4, null) : /* @__PURE__ */ a2.html("div", { classNames: "panel-content panel-content-actions" }, Xc2(e) ? /* @__PURE__ */ a2.html("div", { classNames: "appcues-actions-left" }, /* @__PURE__ */ a2.html(
      Wg,
      {
        skipText: e.skipText,
        onClick: e.onSkip
      }
    )) : /* @__PURE__ */ a2.html(ae4, null), /* @__PURE__ */ a2.html("div", { classNames: "appcues-actions-right" }, t ? /* @__PURE__ */ a2.html(
      Po,
      {
        text: Ut3(t),
        success: true,
        onClick: n,
        attrs: {
          role: "button",
          tabindex: "0"
        }
      }
    ) : /* @__PURE__ */ a2.html(ae4, null)));
  }
  function Wg({ skipText: e, onClick: t }) {
    return /* @__PURE__ */ a2.html(
      "small",
      {
        "on-keyup": (n) => {
          lu2(n, t);
        },
        "attrs-role": "button",
        "attrs-tabindex": "0",
        "on-click": t,
        classNames: "text-muted appcues-skip",
        "attrs-aria-label": e || zc2
      },
      /* @__PURE__ */ a2.html("span", { "attrs-aria-hidden": "true" }, String.fromCodePoint(8856), " "),
      e ? Ut3(e) : zc2
    );
  }
  function Gg({ onClick: e }) {
    return (
      // NOTE: Might need to put tabindex and keyup on a? test this out
      /* @__PURE__ */ a2.html(
        "div",
        {
          "attrs-role": "button",
          "on-keyup": (t) => {
            lu2(t, e);
          },
          "attrs-tabindex": "0",
          classNames: "exit-tooltip-container",
          "on-click": e,
          "attrs-aria-label": "Close tooltip"
        },
        /* @__PURE__ */ a2.html("a", { classNames: "exit-tooltip", "attrs-aria-hidden": "true" }, "\xD7")
      )
    );
  }
  function jg({ color: e, zIndex: t }) {
    return /* @__PURE__ */ a2.svg(
      "svg",
      {
        "class-beacon": true,
        "attrs-width": `${te}px`,
        "attrs-height": `${te}px`,
        "attrs-viewBox": "0 0 24 24",
        style: { zIndex: t }
      },
      /* @__PURE__ */ a2.svg(
        "g",
        {
          "attrs-stroke": "none",
          "attrs-stroke-width": "1",
          "attrs-fill": "none",
          "attrs-fill-rule": "evenodd",
          "attrs-transform": "translate(3, 3)"
        },
        /* @__PURE__ */ a2.svg("circle", { "attrs-fill": e, "attrs-cx": "9", "attrs-cy": "9", "attrs-r": "9" }),
        /* @__PURE__ */ a2.svg(
          "path",
          {
            "attrs-d": "M9.8 9.7L9.8 10.7C9.8 11.1 9.5 11.5 9 11.5L9 11.5C8.6 11.5 8.2 11.1 8.2 10.7L8.2 9.1C8.2 8.7 8.5 8.3 8.9 8.3L9 8.2C10.7 7.9 11.4 7.4 11.4 6.6 11.4 5.8 10.3 5 9 5 7.7 5 6.7 5.7 6.6 6.5 6.6 7 6.2 7.3 5.7 7.3 5.3 7.2 4.9 6.8 5 6.4 5.1 4.7 6.9 3.4 9 3.4 11.2 3.4 13.1 4.8 13.1 6.6 13.1 8.2 12 9.2 9.8 9.7L9.8 9.7Z",
            "attrs-fill": "#FFFFFF"
          }
        ),
        /* @__PURE__ */ a2.svg(
          "path",
          {
            "attrs-d": "M9.6 14.5C9.4 14.6 9.2 14.7 9 14.7 8.8 14.7 8.6 14.6 8.5 14.5 8.3 14.3 8.2 14.1 8.2 13.9 8.2 13.7 8.3 13.5 8.5 13.3 8.8 13 9.3 13 9.6 13.3 9.7 13.5 9.8 13.7 9.8 13.9 9.8 14.1 9.7 14.3 9.6 14.5L9.6 14.5Z",
            "attrs-fill": "#FFFFFF"
          }
        )
      )
    );
  }
  function qg({ color: e, outerBeaconClasses: t, zIndex: n, visibility: r2 }) {
    return /* @__PURE__ */ a2.svg(
      "svg",
      {
        "class-beacon": true,
        "attrs-width": `${te}px`,
        "attrs-height": `${te}px`,
        "attrs-viewBox": "0 0 24 24",
        style: { zIndex: n, visibility: r2 }
      },
      /* @__PURE__ */ a2.svg(
        "g",
        {
          "attrs-stroke": "none",
          "attrs-stroke-width": "1",
          "attrs-fill": "none",
          "attrs-fill-rule": "evenodd"
        },
        /* @__PURE__ */ a2.svg(
          "circle",
          {
            "class-beacon-inner": true,
            "attrs-fill": e,
            "attrs-cx": "12",
            "attrs-cy": "12",
            "attrs-r": "6"
          }
        ),
        /* @__PURE__ */ a2.svg(
          "circle",
          {
            "class-beacon-outer": true,
            class: t,
            "attrs-stroke": e,
            "attrs-stroke-width": "2",
            "attrs-cx": "12",
            "attrs-cy": "12",
            "attrs-r": "11"
          }
        )
      )
    );
  }
  function Kg(e = {}) {
    if (e.iconType === "question")
      return jg(e);
    const t = e.iconType === "hidden" ? "hidden" : "visible";
    return qg({ visibility: t, ...e });
  }
  function Yg(e) {
    const t = e.styling || {}, n = e.color || t.globalBeaconColor || "#FF765C", r2 = e[e.settledKey] && !e.willClose && e.stepVisible && e.isElementVisible;
    let i2 = e.zIndexOverride || (!e.fixed && (e.zIndex === "auto" || e.zIndex === "") ? se3 - 1 : e.zIndex || "");
    i2 = e.backdrop ? se3 - 1 : i2;
    const o = {
      position: e.fixed ? "fixed" : "absolute",
      left: `${e.x}px`,
      top: `${e.y}px`,
      zIndex: i2
    }, s = e.callbacks || {}, c = () => {
      !e.isActivated && s.onFirstInsert && window.requestAnimationFrame(
        () => s.onFirstInsert(e.id, e.isFirst)
      );
    }, l2 = (m3) => {
      if (m3.key === "Tab") {
        const _ = document.documentElement.querySelector(
          `#${Tr}-${e.id}`
        ).querySelector(
          ".appcues-tooltip-container"
        ).contentDocument, { activeElement: S2 } = _, A3 = Ri3(
          _.documentElement
        );
        S2 === _.body && A3.length === 0 && e.callbacks.onClickOut(e.isLast);
      }
    }, u2 = (m3) => {
      if (s.onBeaconClick) {
        const T2 = m3.target.ownerDocument.documentElement.querySelector(
          `#${Tr}-${e.id} iframe`
        );
        let _ = null;
        T2 && T2.contentDocument && (_ = T2.contentDocument.documentElement.querySelector(".tooltip")), s.onBeaconClick(
          e.id,
          _,
          e.isLast,
          e.isLastUnexpanded
        ), m3.stopPropagation(), e.callbacks.onClickOut && T2.contentDocument.addEventListener("keydown", l2);
      }
    }, d2 = {
      [t.hotspotClass || "hotspot"]: true
    }, f2 = {
      [t.globalHotspotAnimation || "hotspot-animation-none"]: true
    }, h2 = e.beaconStyle || t.globalBeaconStyle || "hotspot", y2 = h2 === "hidden", p2 = (m3) => {
      (m3.key === " " || m3.key === "Enter") && (m3.preventDefault(), u2(m3));
    };
    return /* @__PURE__ */ a2.html(
      "div",
      {
        class: d2,
        "class-apc-hidden": !r2,
        "class-apc-beacon-hidden": y2,
        "attrs-id": `${Tr}-${e.id}`,
        "attrs-aria-haspopup": de2.HASPOPUP_TOOLTIP,
        role: de2.ROLE_TOOLTIP,
        "attrs-aria-label": "Hotspot (open by clicking or pressing space/enter)",
        "hook-insert": c
      },
      /* @__PURE__ */ a2.html(
        "div",
        {
          "attrs-tabindex": "0",
          classNames: "beacon-container",
          style: o,
          "on-keydown": p2,
          "on-mouseup": u2
        },
        /* @__PURE__ */ a2.html(
          Kg,
          {
            iconType: h2,
            color: n,
            outerBeaconClasses: f2,
            zIndex: i2
          }
        )
      ),
      /* @__PURE__ */ a2.html(
        cu2,
        {
          ...e,
          zIndex: i2,
          hidden: !e.expanded || !e.cssLoaded
        }
      )
    );
  }
  function Jg(e) {
    return e.annotations.map((t) => {
      let n = t;
      return n = {
        ...n,
        ...e.annotationsState[n.id],
        html: n.html,
        showPoweredBy: Li3(e.settings),
        accountId: e.settings.accountId,
        styling: n.style || e.settings.styling
      }, e.activeAnnotations.includes(n.id) && !n.error ? n.type === "hotspot" ? /* @__PURE__ */ a2.html("div", { classNames: "apc-sequential-hotspot" }, /* @__PURE__ */ a2.html(
        Xg,
        {
          annotation: n,
          isScrollingToAnnotation: e.isScrollingToAnnotation
        }
      ), /* @__PURE__ */ a2.html(
        Yg,
        {
          ...n,
          key: n.id,
          callbacks: e.callbacks,
          previousActiveElement: e.previousActiveElement,
          shouldForceFocus: e.shouldForceFocus
        }
      )) : /* @__PURE__ */ a2.html(
        cu2,
        {
          ...n,
          key: n.id,
          callbacks: e.callbacks
        }
      ) : null;
    }).filter((t) => t !== null);
  }
  function ty() {
    return /* @__PURE__ */ a2.html(
      "style",
      {
        selector: au2,
        "attrs-type": "text/css",
        "hook-insert": Qg,
        "hook-destroy": Zg
      },
      ey
    );
  }
  function uu2(e, t) {
    const n = Bn2(e);
    return n.length === 1 && n.indexOf(t) === 0;
  }
  function ny(e) {
    const t = Bn2(e), n = Ot3(e);
    return t.filter(
      (r2) => n[r2] && !n[r2].activatedAt
    );
  }
  function Qc2(e, t, n) {
    if (t) {
      const r2 = (i2) => {
        const o = i2.target.ownerDocument.documentElement.querySelector(
          "appcues-layer .hotspots"
        );
        o && !o.contains(i2.target) && t(
          uu2(n, st3(n))
        );
      };
      e.data.onClickOut = r2, document.addEventListener("click", r2);
    }
  }
  function Zc2(e) {
    e.data.onClickOut && document.removeEventListener("click", e.data.onClickOut);
  }
  function du2(e, t, n) {
    const r2 = ye3(e), i2 = Ve2(e), o = e.settings || {}, s = ga2(e) || o.styling || {}, c = va2(e), l2 = tt(e).map((f2) => ({
      id: f2.id,
      type: "hotspot",
      beaconStyle: r2.attributes.beacon_style,
      skippable: r2.attributes.skippable,
      skippableDisplayType: r2.attributes.skippable_display_type,
      backdrop: r2.attributes.backdrop,
      backdropSolidEdge: r2.attributes.backdrop_solid_edge,
      backdropSolidEdgeBorderRadius: f2.backdrop_solid_edge_border_radius,
      backdropSolidEdgeXPadding: f2.backdrop_solid_edge_x_padding,
      backdropSolidEdgeYPadding: f2.backdrop_solid_edge_y_padding,
      backdropSolidEdgeOpacity: r2.attributes.backdrop_solid_edge_opacity,
      stepVisible: i2 === a.SHOWING,
      tooltipAlignment: f2.tooltip_alignment,
      skipText: f2.skip_text,
      html: f2.html,
      style: s,
      isActivated: is3(e, f2.id),
      settledKey: r2.attributes.sequential ? "isTooltipSettled" : "isBeaconSettled",
      zIndexOverride: f2.z_index_override,
      formatVersion: c,
      ...n(f2)
    })), u2 = (f2) => {
      Qc2(f2, t.onClickOut, e), window.requestAnimationFrame(t.onShow);
    }, d2 = (f2, h2) => {
      Zc2(f2), Qc2(h2, t.onClickOut, e);
    };
    return (
      // For some flows the `style` property is null, indicating the that it
      // uses the "default" style for the account. In that case use the `id`
      // that's bundled in with the default style object.
      /* @__PURE__ */ a2.html(
        "appcues-layer",
        {
          classNames: `appcues--theme-${ns2(e) || s.id || "-default"}`
        },
        /* @__PURE__ */ a2.html("style", { classNames: "appcues-global-hotspot-styling", "attrs-type": "text/css" }, s.globalHotspotStyling || ""),
        /* @__PURE__ */ a2.html("style", null, `
          .apc-sequential-hotspot ~ .apc-sequential-hotspot .apc-sequential-backdrop {
            opacity: 0;
            visibility: hidden;
            display: none;
          }
          `),
        /* @__PURE__ */ a2.html(ty, null),
        /* @__PURE__ */ a2.html(
          "div",
          {
            classNames: "hotspots appcues-hotspots",
            "hook-insert": u2,
            "hook-destroy": (f2) => {
              Zc2(f2);
            },
            "hook-update": d2
          },
          /* @__PURE__ */ a2.html(
            Jg,
            {
              annotations: l2,
              previousActiveElement: ma2(e),
              shouldForceFocus: mf2(e),
              annotationsState: Ot3(e),
              activeAnnotations: Bn2(e),
              callbacks: t,
              settings: o,
              isScrollingToAnnotation: Of2(
                e
              )
            }
          )
        )
      )
    );
  }
  function ry(e) {
    const t = ny(e);
    return du2(
      e,
      e.views.callbacks[x.HOTSPOTS],
      (n) => ({
        isLast: uu2(e, n.id),
        isLastUnexpanded: t.length === 1 && t.indexOf(n.id) === 0
      })
    );
  }
  function el2(e, t) {
    return zt3(e, t) === tt(e).length - 1;
  }
  function iy(e) {
    return du2(
      e,
      e.views.callbacks[x.SEQUENTIAL_HOTSPOTS],
      (t) => {
        const n = t.next_text || (el2(e, t.id) ? "Close" : "Next");
        return {
          stepsInGroup: kf2(e),
          buttonText: t.hide_next_button ? null : n,
          isLast: el2(e, t.id),
          isFirst: zt3(e, t.id) === 0
        };
      }
    );
  }
  function oy(e) {
    const t = ye3(e);
    return Kn2(t) ? iy(e) : ry(e);
  }
  function cy(e) {
    const { optionNumber: t, ctaStyles: n } = e, r2 = `option-#${t}`;
    return /* @__PURE__ */ a2.html("div", { classNames: "nps-number-option" }, /* @__PURE__ */ a2.html(
      "input",
      {
        name: "nps-options",
        classNames: "nps-number-input",
        id: r2,
        value: t,
        type: "radio"
      }
    ), /* @__PURE__ */ a2.html(
      "label",
      {
        classNames: "nps-number-link",
        style: n,
        test: "test",
        attrs: { for: r2 },
        on: sy
      },
      t
    ));
  }
  function ly(e) {
    const {
      onNextStep: n,
      onStartCollapsing: r2,
      onCollapse: i2,
      onQuantitativeQuestionSubmitted: o,
      onAskMeLaterSelected: s,
      step: c,
      askMeLaterTextOverride: l2,
      notLikelyTextOverride: u2,
      veryLikelyTextOverride: d2,
      doCollapseBeforeNextStep: f2
    } = e, h2 = l2 || "Ask Me Later", y2 = u2 || "Not likely", p2 = d2 || "Very likely", m3 = (I3) => {
      f2 && r2(), o(I3), n();
    }, T2 = (I3) => {
      I3.preventDefault();
      const O3 = new FormData(I3.target).get("nps-options");
      O3 !== null && m3(Number.parseInt(O3, 10));
    }, _ = {
      click: () => {
        i2(), s();
      },
      keydown: (I3) => {
        (I3.key === " " || I3.key === "Enter") && (i2(), s());
      }
    }, S2 = [];
    for (let I3 = 0; I3 <= 10; I3++)
      S2.push(I3);
    const A3 = c.question_text;
    return /* @__PURE__ */ a2.html("div", null, /* @__PURE__ */ a2.html("div", null, /* @__PURE__ */ a2.html(
      "a",
      {
        "attrs-role": "button",
        classNames: "ask-me-later",
        id: "ask-me-later",
        on: _,
        "attrs-tabindex": "0"
      },
      /* @__PURE__ */ a2.html("div", { classNames: "close-icon" }, "\u2715"),
      /* @__PURE__ */ a2.html("div", { classNames: "ask-me-later-text" }, h2)
    )), /* @__PURE__ */ a2.html("div", { classNames: "quantitative-question", id: "quantitative-question" }, /* @__PURE__ */ a2.html("div", { classNames: "question-text", id: "quantitative-question-text" }, A3), /* @__PURE__ */ a2.html("form", { name: "NPS options", "on-submit": T2 }, /* @__PURE__ */ a2.html(
      "fieldset",
      {
        classNames: "nps-options",
        "attrs-aria-labelledby": "quantitative-question-text",
        role: "radiogroup",
        on: {
          change: (I3) => {
            I3.type !== "submit" && (I3.preventDefault(), I3.stopPropagation());
          }
        }
      },
      S2.map((I3) => /* @__PURE__ */ a2.html(
        cy,
        {
          ...e,
          optionNumber: I3
        }
      )),
      /* @__PURE__ */ a2.html("input", { type: "submit", value: "Submit", hidden: true })
    )), /* @__PURE__ */ a2.html("div", { classNames: "context-hints" }, /* @__PURE__ */ a2.html(
      "label",
      {
        classNames: "not-likely-hint",
        htmlFor: "option-#0",
        on: tl2
      },
      y2
    ), /* @__PURE__ */ a2.html(
      "label",
      {
        classNames: "very-likely-hint",
        htmlFor: "option-#10",
        on: tl2
      },
      p2
    ))));
  }
  function ay(e) {
    const {
      onPrevStep: t,
      onCollapse: n,
      onQualitativeQuestionSubmitted: r2,
      onFeedbackTextChanged: i2,
      onStartCollapsing: o,
      ctaStyles: s,
      step: c,
      updateTextOverride: l2,
      cancelTextOverride: u2,
      submitTextOverride: d2,
      textAreaStyles: f2,
      feedbackText: h2,
      accountId: y2,
      showBadge: p2,
      isCollapsed: m3
    } = e, T2 = l2 || "Update Your Score", _ = u2 || "Close", S2 = d2 || "Submit", A3 = {
      click: () => {
        t();
      },
      keydown: (G2) => {
        (G2.key === " " || G2.key === "Enter") && t();
      }
    }, I3 = {
      click: () => {
        n();
      },
      keydown: (G2) => {
        (G2.key === " " || G2.key === "Enter") && n();
      }
    }, C3 = {
      click: () => {
        r2(h2), o();
      },
      keydown: (G2) => {
        G2.repeat || (G2.key === " " || G2.key === "Enter") && (r2(h2), o());
      }
    }, O3 = {
      change: (G2) => {
        i2(G2.target.value);
      },
      keyup: (G2) => {
        i2(G2.target.value);
      }
    }, L3 = 500, H4 = !h2 || h2.trim().length <= 0, R3 = h2 ? h2.length : 0, K3 = R3 > L3;
    return /* @__PURE__ */ a2.html("div", null, /* @__PURE__ */ a2.html("div", null, /* @__PURE__ */ a2.html(
      "a",
      {
        "attrs-role": "button",
        classNames: "ask-me-later",
        tabIndex: m3 ? "-1" : "0",
        on: I3
      },
      /* @__PURE__ */ a2.html("div", { classNames: "close-icon" }, "\u2715"),
      /* @__PURE__ */ a2.html("div", { classNames: "ask-me-later-text" }, _)
    ), /* @__PURE__ */ a2.html(
      "a",
      {
        "attrs-role": "button",
        tabIndex: m3 ? "-1" : "0",
        classNames: "back-to-nps",
        id: "back-to-nps",
        on: A3
      },
      T2
    )), /* @__PURE__ */ a2.html("div", { classNames: "qualitative-question", id: "qualitative-question" }, /* @__PURE__ */ a2.html("div", { classNames: "question-text", id: "qualitative-question-text" }, c.question_text), /* @__PURE__ */ a2.html("div", null, /* @__PURE__ */ a2.html(
      "textarea",
      {
        tabIndex: m3 ? "-1" : "0",
        "attrs-aria-labelledby": "qualitative-question-text",
        id: "feedback-box",
        style: f2,
        value: h2,
        on: O3
      }
    )), /* @__PURE__ */ a2.html("div", { classNames: "buttons" }, /* @__PURE__ */ a2.html("div", { classNames: "appcues-powdered-by-wrapper" }, p2 ? /* @__PURE__ */ a2.html(Es, { isNPS: true, accountId: y2 }) : /* @__PURE__ */ a2.html(ae4, null)), /* @__PURE__ */ a2.html("div", null, /* @__PURE__ */ a2.html("div", { classNames: "character-count" }, /* @__PURE__ */ a2.html(
      "span",
      {
        classNames: `numerator-character-count ${K3 || H4 ? "disabled" : ""}`
      },
      R3
    ), " ", "/ ", L3), /* @__PURE__ */ a2.html(
      "a",
      {
        "attrs-role": "button",
        tabIndex: m3 ? "-1" : "0",
        on: C3,
        classNames: `submit-button ${K3 ? "disabled" : ""}`,
        style: s
      },
      S2
    )))));
  }
  function uy(e) {
    const { lastSubmitted: t, inlineStyles: n, toastMessage: r2, show: i2 } = e, o = "Thanks!", s = {
      quantitative: "\u2190 Thanks! Have any additional feedback?",
      qualitative: o
    }, c = /* @__PURE__ */ a2.html("span", null, " ", r2 || s[t] || o, " ");
    return /* @__PURE__ */ a2.html(
      "div",
      {
        classNames: "confirmation-toast",
        id: "confirmation-toast",
        style: i2 ? {
          ...n,
          opacity: "0",
          transition: "opacity 0.4s",
          delayed: { opacity: "1" }
        } : {
          ...n,
          transition: "opacity 0.2s",
          delayed: { opacity: "0" }
        }
      },
      c
    );
  }
  function dy(e) {
    const {
      accountId: t,
      step: n,
      onNextStep: r2,
      onPrevStep: i2,
      onStartCollapsing: o,
      onCollapse: s,
      onUpdate: c,
      onExpand: l2,
      onShowToast: u2,
      onHideToast: d2,
      onQuantitativeQuestionSubmitted: f2,
      onQualitativeQuestionSubmitted: h2,
      onFeedbackTextChanged: y2,
      onAskMeLaterSelected: p2,
      currentState: m3,
      showBadge: T2
    } = e, _ = n.background_color || "#FFFFFF", S2 = n.foreground_color || "#000000", A3 = Number.parseInt(
      _.replace("#", ""),
      16
    ), I3 = Number.parseInt(
      S2.replace("#", ""),
      16
    ), C3 = A3 < I3, O3 = {
      backgroundColor: _,
      color: S2
    }, L3 = {
      color: C3 ? "#FFFFFF" : "#000000"
    }, H4 = {
      backgroundColor: n.foreground_color || "#FFFFFF",
      color: n.background_color || "#000000"
    }, G2 = {
      onNextStep: () => r2(n.id),
      onPrevStep: () => i2(n.id),
      onStartCollapsing: o,
      onCollapse: s,
      onExpand: l2,
      onShowToast: u2,
      onHideToast: d2,
      onQuantitativeQuestionSubmitted: f2,
      onQualitativeQuestionSubmitted: h2,
      onFeedbackTextChanged: y2,
      onAskMeLaterSelected: p2,
      collapsed: m3.surveyCollapsed,
      step: n,
      accountId: t,
      doCollapseBeforeNextStep: n.collapse_before_next_step,
      updateTextOverride: n.update_text_override,
      cancelTextOverride: n.cancel_text_override,
      submitTextOverride: n.submit_text_override,
      askMeLaterTextOverride: n.ask_me_later_text_override,
      notLikelyTextOverride: n.not_likely_text_override,
      veryLikelyTextOverride: n.very_likely_text_override,
      inlineStyles: O3,
      ctaStyles: H4,
      textAreaStyles: L3,
      showBadge: T2
    };
    let ue3 = false, w3;
    switch (n.step_number) {
      case 1:
        ue3 = false, w3 = /* @__PURE__ */ a2.html(ly, { ...G2 });
        break;
      case 2:
        ue3 = true, w3 = /* @__PURE__ */ a2.html(
          ay,
          {
            ...G2,
            feedbackText: m3.feedbackText,
            isCollapsed: m3.surveyCollapsed
          }
        );
        break;
      default:
        w3 = null;
    }
    const J3 = {
      click: l2,
      keydown: (de3) => {
        (de3.key === " " || de3.key === "Enter") && l2();
      }
    };
    return /* @__PURE__ */ a2.html("cue", { classNames: "active" }, /* @__PURE__ */ a2.html("div", null, /* @__PURE__ */ a2.html("section", null, /* @__PURE__ */ a2.html(
      "div",
      {
        classNames: "appcues-nps",
        "hook-update": c,
        style: m3.surveyCollapsed ? {
          ...O3,
          opacity: "0",
          delayed: {
            "transform-origin": "100% 100%",
            animation: "nps-complete 0s cubic-bezier(0.42, 0, 0.04, 1.03) forwards"
          }
        } : {
          ...O3,
          display: "block",
          opacity: 0,
          delayed: {
            animation: "nps-enter 0.2s ease-out forwards"
          }
        }
      },
      /* @__PURE__ */ a2.html(
        "div",
        {
          classNames: `nps-modal ${ue3 ? "qualitative" : ""}`,
          id: "nps-modal"
        },
        w3
      )
    )), /* @__PURE__ */ a2.html(
      "div",
      {
        classNames: `feedback-tab ${m3.surveyCollapsed ? "collapsed" : ""}`
      },
      m3.lastSubmitted === "quantitative" ? (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        /* @__PURE__ */ a2.html(
          "a",
          {
            "attrs-tabindex": "0",
            "hook-insert": (de3) => {
              window.requestAnimationFrame(() => it2(de3.elm));
            },
            classNames: "feedback-link",
            on: J3
          },
          /* @__PURE__ */ a2.html(
            "div",
            {
              classNames: "satisfaction-feedback",
              id: "satisfaction-overlay",
              style: m3.surveyCollapsed ? {
                ...O3,
                display: "block",
                opacity: 0,
                delayed: {
                  animation: "nps-enter 0.2s ease-out forwards"
                }
              } : {
                ...O3,
                opacity: "1",
                delayed: {
                  "transform-origin": "100% 100%",
                  animation: "nps-complete 0.4s cubic-bezier(0.42, 0, 0.04, 1.03) forwards"
                }
              }
            },
            "Feedback"
          )
        )
      ) : "",
      /* @__PURE__ */ a2.html(
        uy,
        {
          ...G2,
          show: m3.toastVisible,
          lastSubmitted: m3.lastSubmitted,
          toastMessage: n.completion_toast_copy
        }
      )
    )));
  }
  function hy(e) {
    const t = ye3(e), n = Lr2(e), r2 = Ve2(e), i2 = tt(e), o = st3(e), s = zt3(e, o), c = i2[s], l2 = t.attributes.pattern_type, { position: u2 } = t.attributes, d2 = e.views.callbacks[x.SATISFACTION_SURVEY], f2 = n.cssLoaded, h2 = Li3(e.settings), y2 = r2 !== a.SHOWING;
    let p2 = {};
    const m3 = f2 && ne4.inArray(
      [
        /* ContentStatus.WILL_SHOW, */
        a.SHOWING,
        a.WILL_CLOSE
      ],
      r2
    );
    m3 || (p2 = { display: "none" }), p2 = {
      ...p2,
      position: "fixed",
      bottom: "0px",
      left: "0px",
      width: "100%"
    };
    let T2 = "0px", _ = "100%", S2 = "0px";
    const { askMeLaterSelected: A3, surveyCollapsed: I3, toastVisible: C3, lastSubmitted: O3 } = n, L3 = !A3 && I3;
    L3 && (T2 = "40px", C3 || (_ = "125px", S2 = "296px"), !C3 && O3 === "qualitative" && (T2 = "0px", _ = "0px"));
    const H4 = (J3) => {
      nl2 = J3.elm, window.requestAnimationFrame(() => {
        d2.onShow(), it2(J3.elm);
      });
    }, R3 = (J3) => {
      if (J3) {
        const de3 = J3.getBoundingClientRect().height, pe3 = Number.parseInt(n.height, 10);
        Math.abs(de3 - pe3) > 2 && d2.onContentChange && window.requestAnimationFrame(
          () => d2.onContentChange(t.id, J3)
        );
      }
    }, K3 = (J3) => {
      if (A3 || O3 === "qualitative" || L3 || !m3)
        return;
      const de3 = J3.elm.scrollHeight, pe3 = window.innerHeight;
      if (de3) {
        Jr2 = Jr2 || de3 + 15;
        const Ce3 = de3 > pe3 ? pe3 : Jr2;
        nl2.style.height = `${Ce3}px`, J3.elm.children[0].style.height = `${Ce3}px`;
      }
    }, G2 = (J3, de3) => {
      (J3 === "next" ? d2.onNextStep : d2.onPrevStep)(de3), Jr2 = null;
    }, ue3 = (J3, de3) => {
      const pe3 = J3.target.ownerDocument;
      Oi3(pe3, co2, () => {
        d2.onCSSLoaded(t.id, co2, true), ys2(
          pe3,
          t.id,
          "survey-container",
          d2.onContentChange
        );
      });
    }, w3 = /* @__PURE__ */ a2.html(
      dy,
      {
        step: c,
        key: `survey-step-${s}`,
        currentState: n,
        showBadge: h2,
        accountId: e.settings.accountId,
        isFirst: s === 0,
        isLast: s === i2.length - 1,
        onNextStep: (J3) => G2("next", J3),
        onPrevStep: (J3) => G2("prev", J3),
        onCollapse: d2.onCollapse,
        onStartCollapsing: d2.onStartCollapsing,
        onExpand: d2.onExpand,
        onShowToast: d2.onShowToast,
        onHideToast: d2.onHideToast,
        onJumpStep: d2.onJumpStep,
        onLinkClick: d2.onLinkClick,
        onQuantitativeQuestionSubmitted: d2.onQuantitativeQuestionSubmitted,
        onQualitativeQuestionSubmitted: d2.onQualitativeQuestionSubmitted,
        onFeedbackTextChanged: d2.onFeedbackTextChanged,
        onAskMeLaterSelected: d2.onAskMeLaterSelected,
        onStepChildActivated: d2.onStepChildActivated,
        onStepChildDeactivated: d2.onStepChildDeactivated,
        onFormSubmission: d2.onFormSubmission,
        onUpdate: K3,
        onSkip: d2.onSkip
      }
    );
    return /* @__PURE__ */ a2.html(
      "appcues-container",
      {
        "attrs-data-pattern-type": l2,
        "attrs-data-position": u2,
        "class-appcues-ontop": true,
        "class-apc-hidden": y2,
        style: p2
      },
      /* @__PURE__ */ a2.html(
        "iframe",
        {
          style: {
            position: "fixed",
            bottom: "0",
            border: "none",
            height: T2,
            width: _,
            // We right-position and add a right margin to preserve the
            // positioning of the "Feedback" tab when the iframe is not
            // taking up 100% of the width
            right: "0",
            marginRight: S2
          },
          "hook-insert": H4,
          "hook-destroy": () => {
          },
          "attrs-aria-label": "NPS Survey",
          "style-color-scheme": "none"
        },
        /* @__PURE__ */ a2.html(
          "link",
          {
            "attrs-href": co2,
            "attrs-integrity": py,
            "attrs-crossorigin": "anonymous",
            "attrs-type": "text/css",
            "attrs-rel": "stylesheet",
            "on-load": (J3) => {
              ue3(J3);
            },
            "on-error": (J3) => {
              ue3(J3);
            }
          }
        ),
        /* @__PURE__ */ a2.html(
          "appcues",
          {
            "class-active": true,
            "class-apc-hidden": y2,
            "attrs-data-pattern-type": l2,
            "attrs-data-position": u2
          },
          /* @__PURE__ */ a2.html(
            "survey-container",
            {
              "hook-update": (J3) => {
                R3(J3.elm);
              }
            },
            w3
          )
        )
      )
    );
  }
  function Se3(e, t, n) {
    return { type: e, params: { stepId: t, ...n } };
  }
  function ft2(e, t, n, r2) {
    return Se3(e, t, { stepChildId: n, ...r2 });
  }
  function jt3(e, t, n, r2, i2 = {}) {
    return ft2(
      Te3.STEP_INTERACTED,
      e,
      t,
      {
        interactionType: "click",
        interaction: { category: n, destination: r2, ...i2 }
      }
    );
  }
  function rl2(e, t, n, r2 = {}) {
    return jt3(
      ce3(e),
      t,
      "internal",
      n,
      r2
    );
  }
  function Di3(e, t) {
    const n = Ny(
      e,
      t
    );
    return {
      /**
       * Callback for when the content inside a step child changes. At the
       * moment MODALS override this, though they shouldn't need to.
       *
       * @param  {string} id The ID of the step child.
       * @param  {Element} el The content element.
       */
      onContentChange(r2, i2) {
        ds2(i2) && e(gy(r2, i2.getBoundingClientRect(), Sr2()));
      },
      /**
       * Callback for when content is added to the page.
       */
      onShow() {
        const r2 = t();
        e(Wn2(ce3(r2))), e(
          se4(
            Se3(
              Te3.STEP_SHOWN,
              ce3(r2)
            )
          )
        );
      },
      onCSSLoaded(r2, i2, o = true) {
        if (o) {
          const s = t();
          e(Ey(r2)), e(
            se4(
              Se3(
                Te3.CSS_LOADED,
                ce3(s)
              )
            )
          );
        } else if (ce3(t()) === r2) {
          const s = new Error("Failed to load CSS.");
          s.extra = { url: i2 }, e(Wn2(s)), e(
            se4(
              Se3(Te3.STEP_ERRORED, r2, {
                error: s,
                details: JSON.stringify({ url: i2 })
              })
            )
          );
        }
      },
      onStepChildActivated(r2) {
        e(
          se4(
            ft2(
              Te3.CHILD_ACTIVATED,
              ce3(t()),
              r2,
              {
                ts: Date.now()
              }
            )
          )
        );
      },
      onStepChildDeactivated: n,
      onComplete(r2) {
        const i2 = t(), o = st3(i2), s = { text: At2(r2) };
        e(
          se4(
            rl2(i2, o, "end", s)
          )
        ), n(o), e(
          se4(
            Se3(
              Te3.STEP_COMPLETED,
              ce3(t())
            )
          )
        ), e(
          se4(
            Se3(
              Te3.STEP_END,
              ce3(i2)
            )
          )
        );
      },
      onCompleteFlow(r2) {
        const i2 = t(), o = st3(i2), s = { text: At2(r2) };
        e(
          se4(
            rl2(i2, o, "end-flow", s)
          )
        ), n(o), e(
          se4(
            Se3(
              Te3.STEP_COMPLETED,
              ce3(t()),
              { shouldEndFlow: true }
            )
          )
        ), e(
          se4(
            Se3(
              Te3.STEP_END,
              ce3(i2),
              { shouldEndFlow: true }
            )
          )
        );
      },
      onSkip() {
        const r2 = t();
        e(
          se4(
            ft2(
              Te3.STEP_SKIPPED,
              ce3(r2),
              st3(r2)
            )
          )
        );
      },
      /**
       * Callback for when a user clicks a link in a hotspot's tooltip box.
       *
       * @param  {string} id The ID of the step child in which the link was clicked.
       * @param  {string} href The href of the link that was clicked.
       * @param  {object} interaction Additional interaction data.
       */
      onLinkClick(r2, i2, o) {
        e(
          se4(
            jt3(
              ce3(t()),
              r2,
              "link",
              i2,
              o
            )
          )
        );
      },
      /**
       * Callback to handle when the user clicks a link submitting a user event inside a modal
       *
       * @param  {string} eventName The name of the event.
       * @param  {object} properties An object describing properties associated with the event.
       */
      onHandleUserEvent(r2, i2 = {}) {
        e(we2({}, [Qt(r2, i2)], true));
      },
      /**
       * Callback for when the user clicks a button with a set of user profile
       * properties to update
       *
       * @param {object} userProperties An object containing the key/value pairs
       *  to update on the user profile
       */
      onHandleProfileUpdate(r2) {
        const i2 = r2;
        i2.userId && delete i2.userId;
        const o = be2(t()).userId || null;
        ne4.defined(o) && e(ir2(o, i2));
      },
      onSetNextContentIdCookie(r2) {
        e(hu2(r2));
      }
    };
  }
  function ky(e) {
    return e === "" || !ne4.defined(e);
  }
  function Oy(e, { value: t, minSelection: n, maxSelection: r2, required: i2 }) {
    switch (e) {
      case "number":
        return /^\d+$/.test(t) || "This field should be a number.";
      case "date":
        return /^\d{4}(?:-\d{1,2}){2}$/.test(t) || "Please enter a valid date.";
      case "email":
        return /^[\w%+.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,}$/.test(t) || "This field should be an email address.";
      case "tel":
        return /^(?!\b(0)\1+\b)(\+?\d{1,3}[ .-]?)?\(?\d{3}\)?([ .-]?)\d{3}\3\d{4}$/.test(
          t
        ) || "This field should be a phone number.";
      case "url":
        return /^(?:https?:\/\/)?[\d.a-z-]+\.[.a-z]{2,6}(?:[\w ./-]*)*\/?(?:\?[\w&/=-]*)?(?:#[\w/-]*)?$/.test(
          t
        ) || "This field should be a URL.";
      case "checkbox": {
        if (t) {
          const o = t.split(`
`), s = Number.parseInt(n, 10), c = Number.parseInt(r2, 10);
          if (!i2 && o.length > c)
            return `Select a maximum of ${c} items`;
          if (s > o.length && s > 0 || o.length > c)
            return `Select between ${s} and ${c} items`;
        }
        return true;
      }
      default:
        return true;
    }
  }
  function mu2(e) {
    const t = [];
    return e.forEach((n) => {
      const r2 = [], i2 = ky(n.value);
      n.required && i2 && r2.push("This field is required.");
      const o = n.validation, s = Oy(o, n);
      s !== true && (o !== "date" && (!i2 || i2 && n.required) || o === "date" && i2 && !n.required) && r2.push(s), r2.length > 0 && t.push({ fieldId: n.fieldId, messages: r2 });
    }), t.length > 0 ? { result: false, errors: t } : { result: true };
  }
  function lo2(e, t, n, r2 = {}) {
    return jt3(
      ce3(e),
      t,
      "internal",
      n,
      r2
    );
  }
  function Ry(e) {
    const t = e.querySelectorAll("input, textarea, select"), n = [];
    for (const r2 of t)
      r2.type.search(/^(?:checkbox|radio)$/) > -1 ? r2.checked && n.push(r2) : n.push(r2);
    return n;
  }
  function xy(e, t) {
    const n = Di3(e, t);
    function r2(i2, o) {
      const s = t(), c = { text: At2(i2) };
      e(
        se4(
          lo2(s, o, "next", c)
        )
      ), n.onStepChildDeactivated(o);
      const l2 = ya2(
        s,
        o
      );
      l2 && (e(dn(l2)), n.onStepChildActivated(l2));
    }
    return {
      onSkip: n.onSkip,
      onStepChildActivated: n.onStepChildActivated,
      onStepChildDeactivated: n.onStepChildDeactivated,
      onCSSLoaded: n.onCSSLoaded,
      onHandleUserEvent: n.onHandleUserEvent,
      onHandleProfileUpdate: n.onHandleProfileUpdate,
      onCompleteFlow: n.onCompleteFlow,
      onComplete: n.onComplete,
      onSetNextContentIdCookie: n.onSetNextContentIdCookie,
      onNextStep: r2,
      onShow() {
        n.onShow(), n.onStepChildActivated(
          st3(t())
        );
      },
      /**
       * Callback to handle when the user submits a form inside a modal.
       * Extracts response objects and validations from the passed form field
       * elements. Dispatches a root action to trigger the form validation and
       * submission cycle, which will advance the step or complete the modal if
       * successful.
       *
       * @param  {string} formId The ID of the form.
       * @param  {Array} fieldElements A list of form field elements.
       * @param  {boolean} isLast If this is the last step child.
       */
      onFormSubmission(i2, o, s, c, l2 = false, u2 = false) {
        const d2 = o.map((h2, y2) => {
          const p2 = Ry(h2) || {}, m3 = h2.querySelector(".form-field");
          let T2 = null, _ = false, S2 = null;
          m3 && (T2 = m3.getAttribute("data-appcues-validation"), _ = m3.getAttribute("data-appcues-required") === "true", S2 = m3.getAttribute(
            "data-custom-reporting-label"
          ), (!S2 || S2 === "undefined") && (S2 = null));
          const A3 = h2.querySelector(".field-label label"), I3 = m3.getAttribute("data-min-selection"), C3 = m3.getAttribute("data-max-selection");
          let O3 = p2[0]?.name ?? null, L3 = null;
          const H4 = A3?.textContent?.trim() === "*" ? null : A3?.textContent;
          if ((h2.getAttribute("data-form-field") || !O3) && (O3 = h2.getAttribute("data-field-id")), A3 && H4)
            L3 = H4, O3 = O3 || A3.getAttribute("for");
          else {
            const [, R3] = (m3.getAttribute("class") || "").split(
              " "
            );
            L3 = R3.replace("form-field-", ""), R3.includes("radio") && m3.querySelector(".rating-options") && (L3 = L3.replace("radio", "rating")), L3 += `-${h2.getAttribute("data-field-id")}`;
          }
          return {
            required: _,
            validation: T2,
            fieldId: O3,
            label: L3,
            value: Ly(p2),
            formFieldIndex: y2,
            customReportingLabel: S2,
            minSelection: I3,
            maxSelection: C3
          };
        }), f2 = () => {
          if (c)
            n.onComplete();
          else if (s)
            s();
          else {
            const h2 = st3(t());
            r2(null, h2);
          }
        };
        if (u2) {
          (mu2(d2).result || l2) && s();
          return;
        }
        e(
          pm(i2, d2, f2, l2)
        );
      },
      /**
       * Callback for when the user clicks a button to go to the previous step
       * in the modal.
       *
       * @param {Event} event Click event
       * @param {string} currentStepChildId The ID of the current step child.
       */
      onPrevStep(i2, o) {
        const s = t(), c = { text: At2(i2) };
        e(
          se4(
            lo2(s, o, "previous", c)
          )
        ), n.onStepChildDeactivated(o);
        const l2 = rs3(
          s,
          o
        );
        l2 && (e(dn(l2)), n.onStepChildActivated(l2));
      },
      /**
       * Callback for the user click a button to go to some step in the modal.
       *
       * @param {Event} event Click event
       * @param  {string} currentStepChildId The ID of the current step child.
       * @param  {number} stepNumber The number of the step to jump to.
       */
      onJumpStep(i2, o, s) {
        const c = t(), l2 = { text: At2(i2) };
        e(
          se4(
            lo2(
              c,
              o,
              `step_${s}`,
              l2
            )
          )
        ), n.onStepChildDeactivated(o);
        const u2 = Ii3(c, s);
        u2 && (e(dn(u2)), n.onStepChildActivated(u2));
      },
      /**
       * Callback for the user click a button to go to a URL.
       *
       * @param {Event} event Click event
       * @param  {string} id The ID of the step child in which the link was clicked.
       * @param  {string} href The href of the link that was clicked.
       */
      onLinkClick(i2, o, s) {
        const c = { text: At2(i2) };
        n.onLinkClick(o, s, c);
      },
      /**
       * Callback for when the content inside the shorty changes.
       *
       * @param  {string} id The ID of the shorty.
       * @param  {Element} el The content element.
       */
      onContentChange(i2, o) {
        e(wy(i2, o.getBoundingClientRect()));
      }
    };
  }
  function gu2(e, t) {
    const n = Di3(e, t);
    function r2() {
      const s = t(), c = st3(s);
      return c && is3(s, c) ? c : null;
    }
    function i2(s) {
      s && (e(Cs([s])), e(Ty()), n.onStepChildDeactivated(s));
    }
    const o = (s = {}) => () => {
      const c = r2(), l2 = ce3(t());
      e(
        se4(
          Se3(Te3.STEP_COMPLETED, l2, s)
        )
      ), i2(c), ne4.defined(c) && e(si3(l2, c, s));
    };
    return {
      /**
       * Callback for when the user chooses to skip a set of hotspots.
       */
      onSkip: n.onSkip,
      onLinkClick: n.onLinkClick,
      onCSSLoaded: n.onCSSLoaded,
      onContentChange: n.onContentChange,
      onShow: n.onShow,
      onHandleUserEvent: n.onHandleUserEvent,
      onHandleProfileUpdate: n.onHandleProfileUpdate,
      onSetNextContentIdCookie: n.onSetNextContentIdCookie,
      /**
       * Callback for when an individual hotspot should be activated.
       *
       * @param  {string} hotspotId The ID of the hotspot that we're activating.
       */
      onActivate(s) {
        e(Py(s)), n.onStepChildActivated(s), e(Eu2(s, false));
      },
      /**
       * Callback for when a user clicks an individual hotspot.
       *
       * @param  {string}  clickedHotspotId The ID of the clicked hotspot.
       * @param  {Element} el               The hotspots tooltip element.
       * @param  {Boolean} isLast           If this is the last remaining
       *                                    hotspot.
       * @param  {Boolean} isLastUnexpanded   If this hotspot is the last to be
       *                                    activated.
       */
      onBeaconClick(s, c, l2, u2) {
        const d2 = r2(), f2 = d2 !== s, h2 = ce3(t());
        f2 && e(
          se4(
            jt3(
              h2,
              s,
              "beacon",
              s
            )
          )
        ), i2(d2), f2 ? (e(dn(s)), this.onActivate(s), setTimeout(() => {
          n.onContentChange(s, c);
        }, 50), u2 && e(
          se4(
            Se3(
              Te3.STEP_COMPLETED,
              ce3(t())
            )
          )
        )) : l2 && e(si3(h2, d2));
      },
      /**
       * Callback for when the user clicks outside of a hotspot.
       *
       * @param {Boolean} isLast If the currently active hotspot is the last.
       */
      onClickOut(s) {
        const c = r2();
        i2(c), s && ne4.defined(c) && e(si3(ce3(t()), c));
      },
      onComplete: o({ shouldEndFlow: false }),
      onCompleteFlow: o({ shouldEndFlow: true })
    };
  }
  function zy(e, t) {
    const n = gu2(e, t), r2 = Di3(e, t), i2 = (o, s = {}) => (c, l2) => {
      const u2 = t(), d2 = ce3(u2), f2 = nt2(u2), h2 = d2 ? ct(f2, d2) : null, y2 = { text: At2(c) };
      e(
        se4(
          jt3(
            d2,
            l2,
            "internal",
            o,
            y2
          )
        )
      ), e(
        fu2(
          x.SEQUENTIAL_HOTSPOTS,
          h2,
          l2,
          null,
          s.shouldEndFlow
        )
      );
    };
    return {
      onSkip: r2.onSkip,
      onLinkClick: r2.onLinkClick,
      onCSSLoaded: r2.onCSSLoaded,
      onContentChange: r2.onContentChange,
      onHandleUserEvent: r2.onHandleUserEvent,
      onHandleProfileUpdate: r2.onHandleProfileUpdate,
      onSetNextContentIdCookie: r2.onSetNextContentIdCookie,
      onShow: () => {
      },
      /**
       * Callback for when user clicks the 'next' button in a tooltip.
       *
       * @param {string} tooltipId The ID of the tooltip that was clicked in.
       */
      onNextButtonClick(o, s, c) {
        const l2 = t(), u2 = ce3(l2), d2 = { text: At2(o) };
        e(
          se4(
            jt3(
              u2,
              s,
              "internal",
              c ? "end" : "next",
              d2
            )
          )
        ), e(
          se4(
            ft2(
              Te3.CHILD_NEXT,
              u2,
              s
            )
          )
        );
      },
      onComplete: i2("end", {
        shouldEndFlow: false
      }),
      onCompleteFlow: i2("end-flow", {
        shouldEndFlow: true
      }),
      /**
       * Callback for when a sequential hotspot is inserted into the page. This
       * equates to 'activation' for non-sequential hotspots. We only want this
       * called once per "activation".
       *
       * @param {string} tooltipId ID of the tooltip that was inserted.
       * @param {boolean} isFirst  If this is the first tooltip in the sequence.
       */
      onFirstInsert(o, s) {
        s && r2.onShow(), n.onActivate(o);
      },
      /**
       * Callback for when the user clicks a button to go to the previous step
       * in the tooltip.
       *
       * @param {Event} event Click event
       * @param {string} currentStepChildId The ID of the current step child.
       */
      onPrevButtonClick(o, s) {
        const c = t(), l2 = ce3(c), u2 = { text: At2(o) };
        e(
          se4(
            jt3(
              l2,
              s,
              "internal",
              "previous",
              u2
            )
          )
        ), e(_y(l2, s));
      },
      onJumpStep: (o, s, c) => {
        const l2 = t(), u2 = ce3(l2), d2 = { text: At2(o) };
        e(
          se4(
            jt3(
              u2,
              s,
              "internal",
              `step_${c}`,
              d2
            )
          )
        ), e(Yy(u2, s, c));
      },
      onHandleBlur(o, s) {
        e(vy(o.target === s));
      }
    };
  }
  function iS(e, t) {
    const n = Di3(e, t);
    function r2(m3) {
      const T2 = t(), _ = ya2(
        T2,
        m3
      );
      _ && e(dn(_));
    }
    function i2(m3) {
      e(Zy(m3));
    }
    function o(m3) {
      e(tS(m3));
    }
    function s(m3) {
      e(nS(m3));
    }
    function c() {
      e(rS());
    }
    function l2() {
      e(yu2());
    }
    function u2() {
      e(Jy());
    }
    function d2() {
      e(Qy());
    }
    function f2() {
      e(Su2());
    }
    function h2() {
      e(Tu2());
    }
    function y2(m3) {
      const T2 = t(), _ = rs3(
        T2,
        m3
      );
      _ && (fa2(
        ye3(T2),
        _
      ).step_type === "quantitative-question" && e(eS()), e(dn(_)));
    }
    function p2() {
      n.onShow(), n.onStepChildActivated(
        st3(t())
      );
    }
    return {
      onShow: p2,
      onNextStep: r2,
      onPrevStep: y2,
      onStartCollapsing: u2,
      onCollapse: l2,
      onExpand: d2,
      onShowToast: f2,
      onHideToast: h2,
      onQuantitativeQuestionSubmitted: i2,
      onQualitativeQuestionSubmitted: o,
      onFeedbackTextChanged: s,
      onAskMeLaterSelected: c,
      onSkip: n.onSkip,
      onStepChildActivated: n.onStepChildActivated,
      onStepChildDeactivated: n.onStepChildDeactivated,
      onLinkClick: n.onLinkClick,
      onCSSLoaded: n.onCSSLoaded
    };
  }
  function pS(e, t) {
    let n = false;
    return {
      onBeaconClicked(r2) {
        const i2 = t(), o = yn2(i2, r2);
        o.viewState === q2.EXPANDED ? e(fn(r2)) : (e(Ur2(r2)), o.attributes.open_behavior === "closed" && !n && (n = true, e(Au2(o))));
      },
      onOutsideClicked(r2) {
        const i2 = t();
        yn2(i2, r2).viewState === q2.EXPANDED && e(fn(r2));
      },
      onItemClicked(r2, i2) {
        e(Iu2(r2, i2));
      },
      onDismissClicked(r2) {
        e(oS(r2));
      },
      onDismissCanceled(r2) {
        e(sS(r2));
      },
      onDismissConfirmed(r2, i2, o = false) {
        e(
          cS(
            r2,
            i2,
            o
          )
        );
      },
      onMinimizedClicked(r2) {
        e(fn(r2));
      },
      onCSSLoaded(r2, i2, o = true) {
        if (o)
          e(lS(r2));
        else {
          const s = new Error(
            `Failed to load CSS for checklist ${r2}`
          );
          s.extra = { url: i2 }, e(_u2(s));
        }
      },
      onExpandChecklistResize(r2, i2) {
        e(
          uS(r2, i2)
        );
      },
      onCollapseBeaconResize(r2, i2) {
        e(dS(r2, i2));
      }
    };
  }
  function hS(e) {
    return {
      onCancelClicked() {
        e({ type: Fn2.CANCEL_TEST });
      },
      onResetClicked() {
        e({ type: Fn2.RESET_TEST });
      },
      onCssLoaded() {
        e({ type: Fn2.LOADED_TEST_MODE_CSS });
      }
    };
  }
  function yS(e, t) {
    function n() {
      if (wo2(t())) {
        e(uo2(false));
        const i2 = {
          id: "widget_closed",
          timestamp: Date.now()
        };
        e(Ue3("widget_closed", i2)), e(we2({}, [Be2(i2)], false));
      }
    }
    function r2() {
      if (wo2(t())) {
        e(uo2(false));
        const i2 = {
          id: "widget_closed",
          timestamp: Date.now()
        };
        e(Ue3("widget_closed", i2)), e(we2({}, [Be2(i2)], false));
      } else {
        e(uo2(true));
        const i2 = {
          id: "widget_opened",
          timestamp: Date.now()
        };
        e(Ue3("widget_opened", i2)), e(we2({}, [Be2(i2)], false));
      }
    }
    return {
      onClose: n,
      onToggled: r2,
      onItemClicked(i2, o, s) {
        r2(), i2.preventDefault(), i2.stopPropagation();
        try {
          window.Appcues.show(o);
          const c = {
            id: "widget_item_clicked",
            flowId: o,
            hasBeenSeen: s,
            timestamp: Date.now()
          };
          e(Ue3("widget_item_clicked", c)), e(we2({}, [Be2(c)], false));
        } catch (c) {
          $t2(t())(c, { extra: c.extra });
        }
      }
    };
  }
  function SS({ settings: e, sagas: t, onStateChange: n }) {
    const r2 = Dh2(), i2 = em(), o = eg(
      {
        orderedContent: [],
        content: {},
        currentContent: null,
        session: {},
        settings: e,
        transport: {
          initialized: false
        },
        user: {},
        views: {
          callbacks: {},
          renderers: {}
        },
        reporter: null,
        styles: {},
        tasks: {},
        test: {},
        widget: {}
      },
      t
    );
    if (o.dispatch(
      Ga2({
        [x.MODAL]: xy(o.dispatch, o.getState),
        [x.HOTSPOTS]: gu2(
          o.dispatch,
          o.getState
        ),
        [x.SEQUENTIAL_HOTSPOTS]: zy(
          o.dispatch,
          o.getState
        ),
        [x.SATISFACTION_SURVEY]: iS(
          o.dispatch,
          o.getState
        ),
        [x.CHECKLIST]: pS(
          o.dispatch,
          o.getState
        ),
        [x.TEST_MODE]: hS(
          o.dispatch,
          o.getState
        ),
        [x.WIDGET]: yS(o.dispatch, o.getState)
      })
    ), o.dispatch(
      Am({
        [x.MODAL]: xg,
        [x.HOTSPOTS]: oy,
        [x.SATISFACTION_SURVEY]: hy
      })
    ), o.subscribe(() => {
      const s = o.getState();
      switch (Ve2(s)) {
        case a.PENDING:
          o.dispatch(lm());
          break;
        case a.ERROR:
          o.dispatch(ja2()), o.dispatch(Va2(window.location.href, false, null));
          break;
      }
      r2(s), i2(s), n && n(s);
    }), Ar2(document))
      o.dispatch(bc2());
    else {
      const s = () => {
        Ar2(document) && (o.dispatch(bc2()), document.removeEventListener("readystatechange", s));
      };
      document.addEventListener("readystatechange", s);
    }
    return o;
  }
  function Ui3() {
    let e = Date.now();
    return typeof Date.now() != "number" && (e = (/* @__PURE__ */ new Date()).getTime()), window.performance && ne4.function(window.performance.now) && (e += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (n) => {
      const r2 = Math.trunc((e + Math.random() * 16) % 16);
      return e = Math.floor(e / 16), (n === "x" ? r2 : r2 & 3 | 8).toString(16);
    });
  }
  function NS(e, t, n = {}) {
    return new Promise((r2, i2) => {
      const o = new XMLHttpRequest();
      o.addEventListener("readystatechange", ({ currentTarget: s }) => {
        const c = s || o;
        if (c.readyState === 4)
          switch (c.status) {
            case 200:
              try {
                r2(JSON.parse(c.responseText));
              } catch (l2) {
                i2(l2);
              }
              break;
            case 404:
              r2(null);
              break;
            default: {
              const l2 = new Error(`${c.status} ${c.statusText}`);
              l2.extra = { url: t, response: c.responseText }, i2(l2);
            }
          }
      }), o.open(e, t), n.headers && Object.entries(n.headers).forEach(
        ([s, c]) => o.setRequestHeader(s, c)
      ), o.send();
    });
  }
  function or2(e, t) {
    return NS("GET", e, t);
  }
  function DS(e, t, n, r2) {
    return new Promise((i2, o) => {
      try {
        n.create(e, t, r2, (s, c) => {
          c ? o(c) : i2(s);
        });
      } catch (s) {
        o(s);
      }
    });
  }
  function bu2(e) {
    return e.transport.module.isConfigured(e);
  }
  function FS(e) {
    return new Promise((t, n) => {
      e.transport.module.configure(e, (r2, i2) => {
        i2 ? n(i2) : t(r2);
      });
    });
  }
  function wu2(e, t, n, r2 = "event") {
    return new Promise((i2, o) => {
      try {
        e.transport.module.send(
          e,
          t,
          n,
          (s, c) => {
            c ? o(c) : i2(s);
          },
          r2
        );
      } catch (s) {
        o(s);
      }
    });
  }
  function HS(e, t, n, r2, i2 = null, o = null, s = null, c = {}) {
    const l2 = r2 ? Ui3() : null;
    return wu2(
      e,
      $r2.UserActivity,
      xS(window.AppcuesBundleSettings, {
        source: "web",
        request_id: l2,
        user_id: e.user.userId,
        group_id: i2,
        session_id: o,
        account_id: e.settings.accountId,
        profile_update: t,
        group_update: s,
        events: n,
        context: c
      })
    ).then(() => l2);
  }
  function Nu2(e, t) {
    return e.transport.module.sendMetrics(
      e,
      $r2.UserActivity,
      t
    );
  }
  function ku2(e, t) {
    const {
      settings: { accountId: n },
      user: { userId: r2, _localId: i2 }
    } = e;
    return or2(
      `${Hr2()}/accounts/${encodeURIComponent(
        n
      )}/users/${encodeURIComponent(
        r2 || i2
      )}/content/${encodeURIComponent(t)}`,
      { headers: Mr2() }
    );
  }
  function MS(e, t) {
    const {
      settings: { accountId: n },
      user: { userId: r2, _localId: i2 }
    } = e;
    return or2(
      `${Hr2()}/accounts/${encodeURIComponent(
        n
      )}/users/${encodeURIComponent(
        r2 || i2
      )}/experience_content/${encodeURIComponent(t)}`,
      { headers: Mr2() }
    );
  }
  function $S(e, t) {
    const {
      settings: { accountId: n },
      user: { userId: r2, _localId: i2 }
    } = e;
    return or2(
      `${Hr2()}/accounts/${encodeURIComponent(
        n
      )}/users/${encodeURIComponent(
        r2 || i2
      )}/checklist/${encodeURIComponent(t)}`,
      { headers: Mr2() }
    );
  }
  function BS(e, t) {
    return or2(
      `${PS()}/accounts/${encodeURIComponent(
        e.settings.accountId
      )}/styles/${encodeURIComponent(t)}`
    );
  }
  function VS(e) {
    const { userId: t, _localId: n } = be2(e);
    return or2(
      `${Hr2()}/accounts/${encodeURIComponent(
        e.settings.accountId
      )}/users/${encodeURIComponent(t || n)}/history`,
      { headers: Mr2() }
    );
  }
  function WS(e) {
    const { userId: t, _localId: n } = be2(e);
    return or2(
      `${Hr2()}/accounts/${encodeURIComponent(
        e.settings.accountId
      )}/users/${encodeURIComponent(
        t || n
      )}/widget?url=${encodeURIComponent(window.location.href)}`,
      { headers: Mr2() }
    );
  }
  function ei3(e, t) {
    let n;
    for (const r2 of Ho)
      if (r2.endpoint === t) {
        n = r2;
        break;
      }
    try {
      return e.transport.details.channels[n.name(e)];
    } catch {
      return null;
    }
  }
  function KS(e, t) {
    let n = null;
    return e && e.channels && e.channels.forEach((r2) => {
      r2.topic === t && (n = r2);
    }), n;
  }
  function ll2(e) {
    window.APPCUES_TEST_IDENTITY_VERIFICATION && window.console.log(`Appcues Identity Verification Test: ${e}`);
  }
  function YS(e, t, n, r2) {
    function i2() {
      const o = window[D2] || {}, s = { response_format: r2 };
      return window.APPCUES_TEST_IDENTITY_VERIFICATION || o.userIdSignature !== void 0 && o.userIdSignature !== null ? { ...s, token: o.userIdSignature || "" } : s;
    }
    return new Promise((o, s) => {
      let c = KS(t, n);
      function l2(u2, d2) {
        u2.receive("ok", () => {
          u2.channel.state !== "errored" ? (ll2(
            "Succeeded - sent update to API using User ID Signature"
          ), o({ topic: n, channel: u2.channel })) : s(new Error("Channel is in an errored state."));
        }).receive("error", (f2) => {
          if (f2 === GS || f2 === jS) {
            const { token: h2 } = i2();
            ll2(
              `Failed - ${h2 ? `invalid User ID Signature ${h2}` : "no User ID Signature present"}`
            ), !u2.channel.isLeaving() && !u2.channel.isClosed() && u2.channel.leave(), d2 && d2();
          } else
            s(new Error(f2));
        });
      }
      c && c.canPush() ? o({ topic: n, channel: c }) : c && !c.canPush() ? l2(c.joinPush, () => {
        l2(t.channel(n, i2).join());
      }) : (c = t.channel(n, i2), l2(c.join()));
    });
  }
  function bn2(e) {
    try {
      document.visibilityState === "visible" && window.performance.mark(e);
    } catch {
    }
  }
  function en2(e, t) {
    try {
      return window.performance.measure(Ou2, {
        start: e,
        end: t,
        detail: `${e} to ${t}`
      }).duration;
    } catch {
      return Number.NaN;
    }
  }
  function rT(e) {
    return !(e.css_load_time < 0 || [
      "api_response_duration",
      "time_to_attempt",
      "time_to_render",
      "css_load_time",
      "time_to_reveal",
      "time_to_show"
    ].some((n) => Number.isNaN(e[n])));
  }
  function iT(e) {
    try {
      Object.values(je).forEach((t) => {
        window.performance.clearMarks(t(e));
      }), window.performance.clearMeasures(Ou2);
    } catch {
    }
  }
  function oT(e, t) {
    try {
      const n = je.request(e), r2 = je.response(e), i2 = je.attempt(e), o = je.render(e), s = je.css(e), c = je.shown(e);
      let l2 = Number.NaN;
      try {
        l2 = en2(0, je.init());
      } catch {
      }
      const u2 = {
        ...Number.isNaN(l2) ? {} : { init_time: l2 },
        api_response_duration: en2(n, r2),
        time_to_attempt: en2(r2, i2),
        time_to_render: en2(i2, o),
        css_load_time: en2(o, s),
        time_to_reveal: en2(s, c),
        time_to_show: en2(n, c),
        step_type: t,
        request_id: e
      };
      return iT(e), rT(u2) ? u2 : null;
    } catch {
      return null;
    }
  }
  function sT(e) {
    return {
      onMessage(t) {
        t.request_id && QS(t.request_id), e.dispatch(nm(t));
      },
      onTimeout(t) {
        e.dispatch(rm(t));
      }
    };
  }
  function cT(e, t) {
    return () => {
    };
  }
  function* Du2() {
    let e = null;
    try {
      const t = yield v3(dt2);
      e = yield E(VS, t);
    } catch (t) {
      const n = yield v3($t2);
      yield E(n, t, { extra: t.extra });
    }
    e && (yield g3(ES(e.journeys)));
  }
  function* Fu2() {
    let e = null;
    try {
      const t = yield v3(dt2);
      e = yield E(WS, t);
    } catch (t) {
      const n = yield v3($t2);
      yield E(n, t, { extra: t.extra });
    }
    e && (yield g3(gS(e.contents)));
  }
  function* gT() {
    yield F3(ee4, vt3.LOADED_LAUNCHPAD, Du2), yield F3(ee4, vt3.LOADED_LAUNCHPAD, Fu2);
  }
  function He3(e, t, n) {
    try {
      window[e].setItem(t, n);
    } catch {
    }
  }
  function Re3(e, t) {
    try {
      return window[e].getItem(t);
    } catch {
      return null;
    }
  }
  function De2(e, t) {
    try {
      window[e].removeItem(t);
    } catch {
    }
  }
  function yT(e, t) {
    try {
      Object.keys(window[e]).forEach((r2) => {
        r2.startsWith(t) && window[e].removeItem(r2);
      });
    } catch {
    }
  }
  function ST(e) {
    return x.ANNOTATION.includes(e);
  }
  function* Hi3() {
    const e = yield E(Re3, k, g2);
    try {
      return JSON.parse(e);
    } catch {
      return null;
    }
  }
  function TT(e, t, n, r2) {
    let i2 = e;
    return (i2 /= r2 / 2) < 1 ? n / 2 * i2 * i2 + t : -n / 2 * (--i2 * (i2 - 2) - 1) + t;
  }
  function* CT(e, t) {
    if (window.document?.documentMode) {
      const n = e, r2 = n.scrollTop;
      if (r2 !== t) {
        const i2 = yield E(
          oh2,
          t,
          r2
        );
        let o = 0;
        for (; o < i2; )
          o += J2, n.scrollTop = TT(
            Math.min(o, i2),
            r2,
            t - r2,
            i2
          ), yield E(ve3, J2);
      }
      return true;
    }
    return e.scroll({
      top: t,
      behavior: "smooth"
    }), true;
  }
  function* _T(e, t, n, r2) {
    for (; ; ) {
      const i2 = Ha2(
        e,
        t,
        n
      );
      if (i2.some((s, c) => s.scrollTop !== r2[c].scrollTop))
        return i2;
      yield E(ve3, 200);
    }
  }
  function* IT(e, t, n, r2) {
    const i2 = [];
    if (r2.every(
      (s) => s.visibleInContainer
    ))
      return {
        doneScrolling: r2.map(() => true)
      };
    for (const { el: s, scrollTop: c } of r2)
      i2.push(E(CT, s, c));
    return yield qe2({
      doneScrolling: i2,
      scrollTargetsChanged: E(
        _T,
        e,
        t,
        n,
        r2
      )
    });
  }
  function* AT({ payload: e }) {
    yield g3(My(e)), yield E(ve3, Ie2), yield g3(Hy(e));
  }
  function* vT(e) {
    const t = yield* Hi3();
    yield E(
      He3,
      k,
      g2,
      JSON.stringify({ ...t, ...e })
    );
  }
  function* Uu2(e, t, n) {
    if (Object.keys(e).length > 0) {
      const r2 = yield v3(Ai3), i2 = Object.keys(e).filter((o) => !r2[o] || !r2[o].errorReported);
      if (i2.length > 0) {
        const o = {};
        i2.forEach((s) => {
          o[s] = e[s];
        }), yield g3(
          se4(
            Se3(Te3.CHILDREN_ERRORED, t, {
              errors: o
            }),
            n
          )
        ), yield g3(Gy(i2)), yield E(
          vT,
          i2.reduce((s, c) => ({ ...s, [c]: { ts: Date.now() } }), {})
        );
      }
    }
  }
  function* bT(e) {
    const t = yield* Hi3();
    t && Object.keys(t).length > 0 && (e.forEach((n) => {
      delete t[n];
    }), yield E(
      He3,
      k,
      g2,
      JSON.stringify(t)
    ));
  }
  function* wT(e) {
    const t = yield v3(Ai3), r2 = Object.keys(t).filter(
      (i2) => t[i2].errorReported || t[i2].existingError
    ).filter(
      (i2) => e[i2] && !e[i2].error && t[i2] && !t[i2].recoveryReported
    );
    if (r2.length > 0) {
      const i2 = yield v3(ce3);
      yield g3(
        se4(
          Se3(Te3.CHILDREN_RECOVERED, i2, {
            children: r2
          })
        )
      ), yield g3(jy(r2)), yield E(bT, r2);
    }
  }
  function* NT() {
    let e, t = Sr2();
    for (
      ;
      // eslint-disable-next-line no-cond-assign
      (e = yield v3(Ve2)) && e !== a.ERROR;
    ) {
      const n = yield v3(tt), r2 = yield v3(Ot3), o = (yield n.map((c) => E(
        Ua2,
        (r2[c.id] || {}).element || null,
        bo2(c)
      ))).reduce((c, l2, u2) => (c[n[u2].id] = l2, c), {});
      let s = false;
      if (Object.keys(o).forEach((c) => {
        const l2 = o[c], { _prevPosition: u2 } = r2[c] || {};
        ah2(l2, u2 || {}) || (s = true);
      }), s) {
        yield g3(il2(o)), yield g3(Wy(o)), t = Sr2();
        const c = Object.keys(o).filter((u2) => o[u2].error).reduce(
          (u2, d2) => Object.assign(u2, { [d2]: o[d2].errorMessage }),
          {}
        ), l2 = yield v3(ce3);
        yield E(Uu2, c, l2), yield E(wT, o);
      } else {
        const c = Sr2();
        c - t > 1e3 && (yield g3(il2(o)), t = c);
        for (const l2 in r2)
          if (Object.prototype.hasOwnProperty.call(r2, l2)) {
            const u2 = r2[l2];
            if (u2.isBeaconSettled || c - u2.lastRepositionedTs > Ee2 && (yield g3(Fy(l2, true))), u2.expanded && !u2.isTooltipSettled) {
              const d2 = c - u2.lastResizeTs > Ee2, f2 = c - u2.lastExpandedTs > pe2;
              (d2 || f2) && (yield g3(Ky(l2, true)));
            }
          }
      }
      yield E(ve3, Ee2);
    }
  }
  function* kT() {
    const e = yield v3(Ve2);
    ne4.inArray(
      [
        a.READY,
        a.WILL_SHOW,
        a.SHOWING,
        a.WILL_CLOSE
      ],
      e
    ) || (yield g3(Vy()));
  }
  function* OT() {
    const e = yield* Hi3();
    if (e) {
      const t = Date.now(), n = Object.keys(e).reduce((r2, i2) => (e[i2].ts + v2 > t && (r2[i2] = e[i2]), r2), {});
      yield E(
        He3,
        k,
        g2,
        JSON.stringify(n)
      );
    }
  }
  function* RT(e) {
    let t = yield v3(Ot3);
    const n = yield v3(tt);
    let r2 = t[e] || {};
    const i2 = lt2(
      n,
      (y2) => y2.id === e
    );
    let { element: o, error: s } = r2;
    const { offset_y_percentage: c } = i2, l2 = 1 - Number.parseFloat(c);
    for (; !o || s; )
      yield W2(he2.SET_ANNOTATIONS_POSITIONS), t = yield v3(Ot3), r2 = t[e] || {}, o = r2.element, s = r2.error;
    const u2 = yield E(lh2, o);
    if (ki3(o)) {
      if (window.document?.documentMode) return;
      setTimeout(() => {
        o.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 0);
      return;
    }
    let f2 = yield E(
      Ha2,
      o,
      l2,
      u2
    ), h2 = {};
    for (; !h2.doneScrolling; )
      h2 = yield E(
        IT,
        o,
        l2,
        u2,
        f2
      ), f2 = h2.scrollTargetsChanged;
  }
  function* LT({ payload: e }) {
    ST(e.type) && (yield g3(hm(Ka2(ae3.CALCULATE, e.id))));
  }
  function* xT() {
    const e = (yield E(Hi3)) || {};
    Object.keys(e).length > 0 && (yield g3(qy(e)));
  }
  function* PT({ payload: e }) {
    let t = yield v3(Bn2);
    const { annotationId: n, isScrolling: r2 } = e;
    if (r2)
      yield g3({
        type: he2.CONFIRM_SCROLLING,
        payload: r2
      });
    else {
      for (; t.length > 1 && t[0] !== n; )
        yield E(ve3, 200), t = yield v3(Bn2);
      yield E(ve3, Ie2), yield g3({ type: he2.CONFIRM_SCROLLING, payload: false });
    }
  }
  function* DT() {
    yield [
      F3(ee4, $3.CLEANUP_STEP, LT),
      F3(
        Ya2,
        he2.START_CALCULATE_POSITIONS,
        NT,
        function* () {
          const e = yield v3(ce3);
          return Ka2(ae3.CALCULATE, e);
        }
      ),
      F3(
        ee4,
        he2.SET_IS_SCROLLING_TO_ANNOTATION,
        PT
      ),
      F3(
        ee4,
        he2.HIDE_AND_REMOVE_ACTIVE_ANNOTATIONS,
        AT
      ),
      // We want to run the clearExpiredErrors once while we're initializing
      // our sagas, so forking it here will make sure it's called.
      F3(OT),
      F3(xT)
    ];
  }
  function Hu2(e) {
    const t = {};
    if (e) {
      const n = e.replace(/^\?/, "").split("&");
      for (let r2 = 0, i2 = n.length; r2 < i2; r2++) {
        const o = n[r2].split("=");
        try {
          t[o[0]] = decodeURIComponent(o[1]);
        } catch {
          const [, s] = o;
          t[o[0]] = s;
        }
      }
    }
    return t;
  }
  function Mu2(e) {
    return Hu2(e.location.search).appcuesTestContentId || null;
  }
  function gr2(e, t = "appcue") {
    return Hu2(e.location.search)[t] || null;
  }
  function Tn2(e, t = "appcue") {
    if (!e) return e;
    const n = new RegExp(`(\\?)?(&)?((?:${t})=[^&#]+)(&)?`);
    return e.replace(n, (r2, i2, o, s, c) => i2 && c ? "?" : o && c ? "&" : "");
  }
  function* $u2(e) {
    const t = yield e.map(
      (r2) => E(Ua2, null, r2)
    ), n = t.filter((r2) => r2.error);
    return n.length === t.length ? { result: false, failures: n.map((r2) => r2.errorMessage) } : { result: true };
  }
  function* UT(e) {
    for (; !(yield E($u2, e)).result; )
      yield E(ve3, Ee2);
    return { result: true };
  }
  function* HT(e, t, n = null) {
    const { promise: r2, listener: i2 } = yield E(
      yh2,
      e,
      t,
      n
    );
    let o, s;
    try {
      o = yield E(() => r2), s = true;
    } finally {
      return !s && i2 && (yield Ci3()) && (yield E([e, e.removeEventListener], t, i2)), o;
    }
  }
  function hi3(e, t = null, n = null) {
    return { result: e, task: t, failures: n };
  }
  function* MT(e) {
    const { result: t, failures: n } = yield E($u2, e);
    if (t)
      return hi3(true);
    const r2 = yield kt(UT, e);
    return hi3(false, r2, n);
  }
  function* al2(e, t, n) {
    let r2, i2;
    for (; ; )
      try {
        const o = yield E(us2, t);
        if (o.error)
          yield E(ve3, Ee2);
        else {
          if ((r2 !== o || !i2) && (i2 && (yield ot3(i2)), r2 = o, i2 = yield F3(HT, r2, e, n)), i2 && i2.result())
            return { result: true };
          const { eventOccurred: s } = yield qe2({
            timeout: E(ve3, Ee2),
            eventOccurred: In(i2)
          });
          if (s)
            return { result: true };
        }
      } catch {
        yield E(ve3, Ee2);
      }
  }
  function* $T(e) {
    return (yield qe2([
      E(al2, e.params.event, e.params.selector),
      E(
        al2,
        "keydown",
        e.params.selector,
        FT
      )
    ])).find((n) => n && n.result);
  }
  function* Bu2(e) {
    switch (e ? e.type : null) {
      case ie3.WAIT_FOR_ONE_ELEMENT:
        return yield E(MT, e.params.selectors);
      case ie3.WAIT_FOR_MOUSE_EVENT: {
        const n = yield kt($T, e);
        return hi3(false, n);
      }
      default:
        return hi3(true);
    }
  }
  function* BT(e, t, ...n) {
    const { result: r2, task: i2 } = yield E(Bu2, e);
    let o = r2;
    if (!r2 && i2)
      try {
        o = (yield In(i2)).result;
      } finally {
        i2.isRunning() && (yield Ci3()) && (yield ot3(i2));
      }
    o && (yield kt(t, ...n));
  }
  function VT(e, t, n) {
    return { type: e, params: t, context: n };
  }
  function fo2(e, t) {
    return VT(ie3.WAIT_FOR_ONE_ELEMENT, { selectors: e }, t);
  }
  function WT(e) {
    let t = "unknown", n = {};
    switch (e.type) {
      case ie3.WAIT_FOR_MOUSE_EVENT:
        t = e.params.event, n = {
          category: "element",
          element: e.params.selector
        };
        break;
      case ie3.WAIT_FOR_ONE_ELEMENT:
        t = "ui_modified", n = {
          category: "insertion",
          elements: e.params.selectors
        };
        break;
    }
    return { interactionType: t, interaction: n };
  }
  function* at2(e, t) {
    for (const n of t)
      yield g3(Ue3(e, n));
    yield g3(
      we2(
        {},
        t.map((n) => Be2(n))
      )
    );
  }
  function* ul2(e, t, n) {
    const r2 = yield* Ht2();
    yield* wt2({
      ...r2,
      flowId: e.id,
      stepId: t.id,
      status: n
    });
  }
  function* GT(...e) {
    for (const t of e)
      yield g3(se4(t));
  }
  function* jT(e, t, n) {
    (yield W2(
      ({ type: i2, payload: o }) => i2 === le3.ACTIVATED_STEP_CHILD && o.stepChildId === n.id || i2 === le3.CLOSE_FLOW && o.flowId === e.id
    )).type === le3.ACTIVATED_STEP_CHILD && (yield qe2({
      wait: E(
        BT,
        n.ui_conditions.next,
        GT,
        ft2(
          Te3.STEP_INTERACTED,
          t.id,
          n.id,
          WT(n.ui_conditions.next)
        ),
        ft2(
          Te3.CHILD_NEXT,
          t.id,
          n.id
        )
      ),
      cancel: W2(
        ({ type: i2, payload: o }) => i2 === le3.CLOSE_FLOW && o.flowId === e.id
      )
    }));
  }
  function dl2(e, t) {
    return t ? { ...e, _sdkMetrics: t } : e;
  }
  function* qT(e, t, n) {
    const r2 = yield v3(Rt2);
    for (; ; ) {
      const i2 = yield W2(t), o = i2.params || {}, s = o.stepId ? ct(e, o.stepId) : null;
      let c, l2;
      const u2 = s ? (c = Ft2(e, 0)) && c.id === s.id : false, f2 = (s ? (l2 = Ft2(e, da2(e) - 1)) && l2.id === s.id : false) || o.shouldEndFlow;
      switch (i2.type) {
        case Te3.STEP_ATTEMPTED:
          if (s && // Don't send this event for satisfcation surveys (and possibly eventually other types), we want to keep the logging very focused.
          Ln2(s)) {
            if (Gt2(s)) {
              const y2 = [];
              u2 && y2.push(Lc2(e, r2)), y2.push(xc2(e, s, r2)), yield* at2(e.id, y2);
              const { page_check_limit: p2 } = s.attributes.params, m3 = yield* Ht2(), { remainingPagesToCheck: T2 } = m3 || {};
              yield* wt2({
                ...m3,
                remainingPagesToCheck: typeof T2 == "number" ? T2 : typeof p2 == "number" ? p2 : z2
              });
            }
            const h2 = [];
            u2 && h2.push(pE(e, r2)), h2.push(yE(e, s, r2)), yield* at2(e.id, h2), yield* ul2(
              e,
              s,
              Te3.STEP_ATTEMPTED
            );
          }
          break;
        case Te3.STEP_SHOWN:
          if (s) {
            if (Ln2(s)) {
              const h2 = yield* Ht2(), y2 = u2 || !h2 ? Ui3() : h2.submissionId, p2 = u2 || !h2 ? yield E(gr2, window, "appcue") : h2.fromPermalink;
              yield* wt2({
                ...h2,
                submissionId: y2,
                status: Te3.STEP_SHOWN,
                fromPermalink: !!p2
              });
            }
            u2 && !pf2(s) && n && (yield E(eT, n));
          }
          break;
        case Te3.STEP_COMPLETED:
          if (s) {
            const h2 = [SE(e, s, r2)];
            if (f2 && h2.push(mE(e, r2)), yield* at2(e.id, h2), Gt2(s)) {
              const y2 = yield* Ht2(), { remainingPagesToCheck: p2, navByADTT: m3, ...T2 } = y2 || {};
              yield* wt2({
                ...T2,
                flowId: e.id,
                stepId: s.id,
                status: Te3.STEP_COMPLETED
              });
            } else
              yield* ul2(
                e,
                s,
                Te3.STEP_COMPLETED
              );
          }
          break;
        case Te3.STEP_SKIPPED:
          s && (yield* at2(e.id, [
            TE(e, s, o.stepChildId, r2),
            EE(e, o.stepId, r2)
          ]), yield* Mt2(e, s), yield g3(Jt3(e.id, V2.SKIPPED)), yield g3(br2()), yield g3(Nr()));
          break;
        case Te3.STEP_END:
          if (s) {
            const h2 = yield v3(ce3);
            if (h2 === s.id && (yield* Mt2(e, s)), f2)
              yield g3(Jt3(e.id, V2.COMPLETED));
            else {
              const y2 = Ft2(
                e,
                $n2(e, s.id) + 1
              );
              y2.type === x.HOTSPOTS && (yield g3(br2()), yield g3(Nr())), h2 === s.id && (yield g3(
                t,
                Se3(
                  Te3.STEP_ATTEMPTED,
                  y2.id
                )
              ), yield g3(Wa2(y2, document.location.href)));
            }
          }
          break;
        case Te3.STEP_INTERACTED:
          if (s) {
            const h2 = [], y2 = o.interaction || {};
            if (o.interactionType === "submit" && y2.category === "form") {
              const p2 = {
                category: y2.category,
                formId: y2.formId
              };
              h2.push(
                // Create step interacted event.
                Pc2(
                  e,
                  s,
                  o.stepChildId,
                  "submit",
                  { ...p2, response: y2.fields },
                  r2
                ),
                // Create form submitted event.
                NE(
                  e,
                  s,
                  o.stepChildId,
                  {
                    ...p2,
                    submissionId: y2.submissionId,
                    response: y2.fields
                  },
                  r2
                ),
                ...y2.fields.map((m3) => kE(
                  e,
                  s,
                  o.stepChildId,
                  {
                    ...p2,
                    submissionId: y2.submissionId,
                    ...m3
                  },
                  r2
                ))
              );
            } else
              h2.push(
                Pc2(
                  e,
                  s,
                  o.stepChildId,
                  o.interactionType,
                  y2,
                  r2
                )
              );
            yield* at2(e.id, h2);
          }
          break;
        case Te3.STEP_ERRORED:
          if (s) {
            const h2 = [
              vE(
                e,
                s,
                o.error,
                o.details,
                r2
              ),
              CE(e, s, r2),
              gE(e, r2)
            ];
            u2 && h2.splice(
              1,
              0,
              AE(e, o.error, o.details, r2)
            ), yield* at2(e.id, h2);
          }
          break;
        case Te3.CHILD_ACTIVATED:
          yield g3(yy(o.stepChildId, o.ts)), s && Ln2(s) && (yield* at2(e.id, [
            _E(e, s, o.stepChildId, r2)
          ]));
          break;
        case Te3.CHILD_DEACTIVATED: {
          const { stepChildId: h2 } = o, y2 = yield v3(Sa2, h2);
          yield g3(Sy(h2)), s && Ln2(s) && (yield* at2(e.id, [
            IE(
              e,
              s,
              h2,
              o.ts - y2,
              r2
            )
          ]));
          break;
        }
        case Te3.CHILDREN_ERRORED: {
          const h2 = Object.keys(o.errors || {});
          h2.length > 0 && (yield* at2(
            e.id,
            h2.map((y2) => bE(
              e,
              s,
              y2,
              o.errors[y2],
              r2
            ))
          ));
          break;
        }
        case Te3.CHILDREN_RECOVERED: {
          const h2 = o.children || [];
          h2.length > 0 && (yield* at2(
            e.id,
            h2.map((y2) => wE(e, s, y2, r2))
          ));
          break;
        }
        case Te3.CHILD_NEXT:
          if (s) {
            const h2 = mn2(s, o.stepChildId);
            let y2 = null;
            h2 > -1 && (y2 = (vo2(s, h2 + 1) || {}).id || null);
            let p2 = s.type;
            p2 === x.HOTSPOTS && Kn2(s) && (p2 = x.SEQUENTIAL_HOTSPOTS, yield g3(Eu2(y2, true))), yield g3(
              fu2(p2, s, o.stepChildId, y2)
            );
          }
          break;
        case Te3.CHILD_RUN: {
          const h2 = vo2(
            s,
            mn2(s, o.stepChildId)
          );
          yield g3(dn(o.stepChildId)), h2 && h2.ui_conditions && h2.ui_conditions.next && (yield kt(jT, e, s, h2));
          break;
        }
        case Te3.CSS_LOADED: {
          u2 && n && tT(n);
          break;
        }
        case Te3.STEP_REVEALED: {
          if (s) {
            let h2 = null;
            u2 && n && (yield E(nT, n), h2 = yield E(oT, n, s.type));
            const y2 = [];
            Ln2(s) ? (u2 && y2.push(
              dl2(Lc2(e, r2), h2)
            ), y2.push(xc2(e, s, r2)), yield* at2(e.id, y2)) : u2 && (y2.push(
              dl2(
                hE(e, r2),
                h2
              )
            ), yield* at2(e.id, y2));
          }
          break;
        }
      }
    }
  }
  function bs(e) {
    De2("localStorage", e), De2("localStorage", `${e}_timeout`);
  }
  function Vu2(e) {
    if (!e)
      return false;
    const t = Re3("localStorage", e), n = JSON.parse(Re3("localStorage", `${e}_timeout`)) ?? 0;
    return Date.now() > n || !t ? (bs(e), false) : true;
  }
  function KT(e) {
    return !e || !Vu2(e) ? null : Re3("localStorage", e);
  }
  function Wu2(e, t, n) {
    He3("localStorage", e, t), He3("localStorage", `${e}_timeout`, Date.now() + n);
  }
  function* YT(e, t) {
    yield W2(
      (n) => n.type === le3.CANCEL_STEP && n.payload.flowId === e
    ), yield ot3(t);
  }
  function* Gu2(e, t) {
    const n = yield E(Gn2.expanding, 5), r2 = yield E(aa2, n), i2 = yield kt(
      qT,
      e,
      r2,
      t
    );
    return yield kt(YT, e.id, i2), r2;
  }
  function zT(e) {
    if (e.uiConditions && e.uiConditions.start)
      return e.uiConditions;
    let t;
    switch (e.type) {
      case x.HOTSPOTS: {
        const n = An(e);
        if (Kn2(e)) {
          const [r2] = n;
          if (r2) {
            const i2 = [r2.id], o = [bo2(r2)];
            t = fo2(o, {
              stepChildIds: i2
            });
          } else
            t = fo2([], {
              stepChildIds: []
            });
        } else {
          const r2 = n.reduce((i2, o) => [...i2, bo2(o)], []);
          t = fo2(r2, {
            stepChildIds: n.map((i2) => i2.id)
          });
        }
        break;
      }
      case x.MODAL:
      default:
        t = null;
    }
    return { ...e.uiConditions, start: t };
  }
  function* XT(e, t, n, r2, i2) {
    let o = false;
    try {
      o = (yield In(e)).result, o && (yield g3(Pi3(n, Xe3.FLOWS)), yield g3(ps2(n, r2, i2, t)));
    } finally {
      (yield Ci3()) && (yield ot3(e)), o || (yield g3(t, yr2));
    }
  }
  function* mi3(e) {
    for (; (yield v3(Af2, e)).length > 0; )
      yield W2($3.FINISHED_EVENT);
  }
  function* ju2(e, t, n, r2, i2 = true) {
    const o = yield E(Gu2, e, r2), s = t ? ct(e, t) : Ft2(e, 0);
    Ln2(s) && s.attributes.action_type !== j2.WAIT_FOR_PAGE && (yield g3(
      o,
      Se3(Te3.STEP_ATTEMPTED, s.id)
    ));
    const l2 = zT(s).start, { result: u2, task: d2, failures: f2 } = yield E(Bu2, l2);
    if (u2)
      return yield g3(Lm(e.id)), yield g3(Pi3(e.id, Xe3.FLOWS)), yield g3(ps2(e.id, s.id, n, o)), true;
    const h2 = (l2.context || {}).stepChildIds || [];
    if (f2 && f2.length > 0 && h2.length === f2.length) {
      const p2 = f2.reduce((m3, T2, _) => T2 ? Object.assign(m3, {
        [l2.context.stepChildIds[_]]: T2
      }) : m3, {});
      yield E(Uu2, p2, s.id, o);
    }
    const y2 = [$3.START_FLOW];
    return i2 !== false && y2.push($3.CANCEL_ATTEMPTS), yield kt(aE, {
      wait: E(XT, d2, o, e.id, s.id, n),
      cancel: W2(y2)
    }), false;
  }
  function* fl2(e, t, n, r2) {
    const i2 = yield E(Gu2, e, null);
    yield g3(ps2(e.id, t, n, i2, r2));
  }
  function* JT(e) {
    const { flowId: t, stepId: n, url: r2, eventChannel: i2, status: o } = e.payload, s = yield v3(ts3, t), c = ct(s, n);
    c && (c.type === x.HOTSPOTS && (yield g3(br2()), yield g3(Nr())), yield g3(Wa2(c, r2, o)));
    const { payload: l2 } = yield W2(
      (u2) => u2.type === le3.CLOSE_FLOW && u2.payload.flowId === t
    );
    yield E(De2, y, M2), yield g3(mm(i2)), yield qe2({
      wait: E(mi3, t),
      cancel: E(ve3, Ae3)
    }), !s.redirect_url && !s.next_content_id && (yield g3(br2()), yield g3(Nr())), l2.type === V2.COMPLETED && (s.redirect_url ? (s.next_content_id && (yield E(
      Wu2,
      h,
      s.next_content_id,
      ue2
    )), yield E(Xt, window, s.redirect_url, s.redirect_new_tab)) : s.next_content_id && (yield g3(xr2(s.next_content_id))));
  }
  function* Ht2() {
    try {
      return JSON.parse(yield E(Re3, y, M2));
    } catch {
      return {};
    }
  }
  function* wt2(e) {
    yield E(
      He3,
      y,
      M2,
      JSON.stringify(e)
    );
  }
  function* ws(e, t) {
    const n = yield v3(ce3);
    yield g3(Wn2(e)), yield g3(
      se4(
        Se3(Te3.STEP_ERRORED, n, {
          error: e.message,
          details: t
        })
      )
    );
  }
  function* QT(e) {
    const { step: t, status: n } = e.payload;
    switch (t.type) {
      case x.MODAL:
      case x.HOTSPOTS:
      case x.SATISFACTION_SURVEY:
        yield g3(
          n ? se4(
            Se3(Te3.STEP_END, t.id)
          ) : Cy(t.id)
        );
        break;
      case x.ACTION:
        if (n)
          yield g3(Ac2(t, n));
        else if (t.attributes.action_type === j2.WAIT_FOR_PAGE) {
          const r2 = yield* Ht2(), i2 = n || r2 && r2.status || Te3.STEP_ATTEMPTED;
          yield g3(Ac2(t, i2));
        } else
          yield g3(Om(t));
        break;
      default:
        yield E(
          ws,
          new Error("Unknown step type."),
          JSON.stringify({ type: t.type })
        );
    }
  }
  function* Mt2(e, t) {
    if (!t) return;
    (yield v3(Ve2)) === a.SHOWING && (yield g3(_m()), yield E(ve3, re3)), yield g3(am(t)), yield g3(Iy(e.id, t.id));
  }
  function* ZT({ payload: e }) {
    const t = e.eventChannel || (yield v3(Nf2));
    t && (yield g3(t, e.event));
  }
  function* eC({ payload: e }) {
    yield E([e, e.close]);
  }
  function* tC() {
    yield [
      F3(Ze2, $3.START_FLOW, JT),
      F3(Ze2, $3.START_STEP, QT),
      F3(ee4, $3.SEND_LIFECYCLE_EVENT, ZT),
      F3(ee4, $3.CLOSE_CHANNEL, eC)
    ];
  }
  function nC() {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch {
      return null;
    }
  }
  function rC(e, t, n = {}) {
    let r2 = n;
    r2 = r2 === null ? {} : r2;
    const i2 = e.location.href;
    let o = r2._sessionPageviews || 0;
    (r2._currentPageUrl !== i2 || t) && (o += 1);
    const s = Mu2(e), c = e.navigator, l2 = c.languages ? c.languages[0] : c.language || c.userLanguage;
    let { referrer: u2 } = e.document, d2 = Math.floor(Math.random() * 100);
    t ? u2 || (u2 = r2._currentPageUrl) : (u2 = r2._currentPageUrl === i2 ? r2._lastPageUrl : r2._currentPageUrl, r2._sessionRandomizer && (d2 = r2._sessionRandomizer));
    const f2 = {
      _hostname: e.location.hostname,
      _lastBrowserLanguage: l2,
      _lastPageTitle: r2._currentPageTitle || "",
      _lastPageUrl: u2 || "",
      _updatedAt: Date.now(),
      // Last Seen At will deprecate _updatedAt which can't be entirely removed today since it's used for targeting
      _lastSeenAt: Date.now(),
      _userAgent: e.navigator.userAgent,
      // These help calculate _lastPageUrl and _lastPageTitle.
      _currentPageTitle: e.document.title,
      _currentPageUrl: i2,
      _sessionRandomizer: d2,
      _sessionPageviews: o,
      _timezoneCode: nC(),
      _timezoneOffset: (/* @__PURE__ */ new Date()).getTimezoneOffset(),
      _appId: e.AppcuesBundleSettings?.defaultAppId || null
    };
    return s ? (f2._testContentId = s, f2._testContentUrl = i2, He3(y, G, true)) : r2._testContentId && r2._testContentUrl && (f2._testContentId = r2._testContentId, f2._testContentUrl = r2._testContentUrl), Re3(
      y,
      G
    ) || (f2._testContentId = null, f2._testContentUrl = null), f2;
  }
  function qu2() {
    return { _lastSeenAt: Date.now() };
  }
  function iC(e) {
    return Object.keys(e).reduce((t, n) => (N2.includes(n) && (t[n] = e[n]), t), {});
  }
  function oC(e) {
    const { type: t, attributes: n } = e;
    return n && n.steps || t === "nps" || t === "flow" ? gt2.OVERLAY : t === "banner" || t === "persistent" ? gt2.BACKGROUND : t === "launchpad" ? gt2.FLOATING : gt2.OVERLAY;
  }
  function sC(e) {
    return e.reduce(
      (t, n) => {
        const r2 = oC(n);
        return t[r2] || (t[r2] = []), t[r2].push(n), t;
      },
      {
        [gt2.OVERLAY]: [],
        [gt2.BACKGROUND]: [],
        [gt2.FLOATING]: []
      }
    );
  }
  function Ns(e) {
    const t = sC(e);
    return Object.keys(t).reduce(
      (n, r2) => {
        const i2 = t[r2] || [];
        if (i2.length === 0)
          return n;
        switch (r2) {
          // OVERLAY context shows only the highest priority item.
          //
          // For legacy flows, there is an attempt to show the items in priority order, but if the first
          // attempt fails, we will attempt the next item in the list, and so on.
          // For v2 flows/v2 nps, we should always be able to show the content, so there is no "attempt"
          // process.
          // To account for these differences in behavior, if the highest priority item is an experience
          // (i.e. a v2 flow or v2 nps), we will add it to the experiences array to be shown. All other items
          // in the overlay context will be dropped. If the highest priority item is a legacy flow, we will
          // add all legacy flows to the contents array to be shown, but no v2 flows or v2 nps will be added
          // to the experiences array. This is because experiences are all shown at once, without any
          // understanding of whether a legacy flow is shown or not.
          //
          // TODO: The process described above does introduce a potential edge case where we attempt a legacy
          // flow, but it fails, and we do not show a lower-priority v2 flow or nps. To address this, we'll need
          // to refactor the flow attempt process to be able to account for experiences.
          case gt2.OVERLAY: {
            const { attributes: o } = i2[0];
            o && o.steps ? n.contents = i2.filter(
              (s) => s.attributes && s.attributes.steps
            ) : n.experiences = [...n.experiences, i2[0]];
            break;
          }
          // BACKGROUND context shows all items
          case gt2.BACKGROUND:
            n.experiences = [...n.experiences, ...i2];
            break;
          // FLOATING context shows all items
          case gt2.FLOATING:
            n.experiences = [...n.experiences, ...i2];
            break;
        }
        return n;
      },
      {
        contents: [],
        experiences: []
      }
    );
  }
  function* Ku2(e) {
    const t = [];
    let n, r2;
    const i2 = new Error("Invalid HTML.");
    i2.extra = {};
    const o = "";
    for (const [s, c] of e.entries()) {
      r2 = c;
      try {
        cC(
          document.createElement("div"),
          Ut3(`<div>${r2.html}</div>`, {
            hooks: {
              create: lC
            }
          })
        );
      } catch (l2) {
        n || (n = yield v3(ce3)), t.push({ childNumber: s, stepChildId: r2.id, error: l2 });
      }
    }
    return t.length === 0 ? true : (yield E(
      ws,
      Object.assign(i2, {
        extra: { stepId: n, errors: t }
      }),
      o
    ), false);
  }
  function* aC({ payload: { nextContentId: e } }) {
    yield E(
      Wu2,
      h,
      e,
      ue2
    );
  }
  function* dC() {
    try {
      const e = yield E(Re3, k, le2), t = JSON.parse(e);
      if (!t.id || !t.timestamp)
        throw yield E(De2, k, le2), new Error("Invalid session");
      return t;
    } catch {
      return {};
    }
  }
  function* fC() {
    const e = uC();
    yield g3(As(e)), yield g3(ET());
  }
  function* pC() {
    const e = yield v3(be2);
    (!e || !e.userId) && (yield W2(U3.IDENTIFY));
    const t = yield E(dC);
    if (!t.id || t?.id?.includes("NaN")) {
      yield g3(vs2());
      return;
    }
    yield g3(As(t));
  }
  function* hC() {
    const e = yield v3(Yn2);
    yield E(He3, k, le2, JSON.stringify(e));
  }
  function* Yu2() {
    const e = yield v3(Yn2);
    return !e.id || Date.now() - e.duration > e.lastEventTimestamp;
  }
  function* mC() {
    if (yield E(Yu2)) {
      yield g3(vs2()), yield W2(({ type: n }) => n === Ct2.SESSION_STARTED);
      const e = yield v3(Yn2);
      return Be2(
        UE(e)
      );
    }
    return null;
  }
  function* EC({ payload: e }) {
    (yield v3(Ea2)) || (yield W2(U3.COMPLETED_IDENTIFY)), (yield v3(Yn2)).id || (yield W2(Ct2.SET_SESSION));
    const { userId: r2 } = e;
    if (!r2)
      return;
    const i2 = yield v3(be2), s = (i2 && i2.userId && i2.userId.toString()) !== r2.toString(), c = yield E(Yu2);
    (s || c) && (yield g3(vs2()));
  }
  function* gC() {
    return yield [
      F3(Ze2, U3.INITIALIZE, pC),
      F3(Ze2, Ct2.SET_SESSION, hC),
      F3(Ze2, Ct2.START_SESSION, fC),
      F3(ee4, $3.START_IDENTIFY, EC)
    ];
  }
  function* Mi3() {
    return yield v3(Ta2);
  }
  function* ks(e = false) {
    if (yield v3(Tf2))
      return null;
    let n = yield E(
      Re3,
      y,
      U2
    );
    try {
      n = JSON.parse(n);
    } catch {
      n = null;
    }
    const r2 = yield E(
      rC,
      window,
      e,
      n
    );
    if (yield E(
      He3,
      y,
      U2,
      JSON.stringify(r2)
    ), (yield E(Mu2, window)) && window.history && window.location) {
      const l2 = yield E(
        Tn2,
        window.location.href,
        "appcuesTestContentId"
      );
      yield E(
        [window.history, window.history.replaceState],
        window.history.state,
        "",
        l2
      ), window.location.reload();
    }
    let o = yield E(Re3, k, f);
    o || (o = yield E(Ui3), yield E(He3, k, f, o));
    const s = yield v3(gf2), c = iC({
      _localId: o,
      _appcuesId: s,
      ...r2
    });
    return yield g3(Pr2(c, true)), c;
  }
  function* zu2() {
    yield g3(Sm()), yield E(De2, y, U2), yield E(De2, k, f), yield E(De2, k, P), yield E(De2, k, w2), yield E(bs, h), yield E(De2, y, M2), yield E(De2, k, le2), yield E(yT, y, F2), yield E(ks, true);
  }
  function* pl2(e) {
    const { properties: t, events: n } = e.payload, { _isAnonymous: r2 } = t, { userId: i2 } = e.payload, o = yield v3(be2), s = o && o.userId && o.userId.toString(), c = s !== i2?.toString();
    s && c && !r2 && (yield E(zu2)), yield g3(ym(i2)), ne4.defined(i2) && (yield E(He3, k, P, i2)), yield g3(
      Pr2(
        {
          _doNotTrack: `${window.navigator && window.navigator.doNotTrack}`[0] === "1",
          ...t
        },
        true
      )
    );
    const l2 = yield v3(be2);
    yield g3(we2(l2, n, true));
  }
  function* hl2() {
    const e = yield v3(dt2);
    try {
      const t = yield E(FS, e);
      yield g3(Cc2(t));
    } catch (t) {
      yield g3(Cc2(t));
    }
  }
  function* yC() {
    const e = yield W2(ml2);
    yield F3(ee4, ml2, pl2), yield E(pl2, e), yield g3(bm());
  }
  function* Xu2() {
    yield F3(hl2);
    let e = yield W2(
      U3.CONFIGURE_TRANSPORT
    ), t = 0;
    for (; e.error && t < 5; )
      yield E(ve3, 100), yield F3(hl2), e = yield W2(
        ({ type: n }) => n === U3.CONFIGURE_TRANSPORT
      ), t += 1;
  }
  function* SC(e) {
    const t = e.filter((n) => n?.attributes?._builderButtonEvent);
    yield pt2(
      t.map((n) => g3(Ue3(n.id, n)))
    );
  }
  function* Os({
    properties: e,
    events: t,
    trigger: n,
    groupId: r2 = null,
    groupProperties: i2 = null
  }) {
    let o = yield v3(dt2);
    (yield E(bu2, o)) || (yield E(Xu2), o = yield v3(dt2));
    const c = yield v3(be2), { id: l2 } = yield v3(Yn2), u2 = {
      url: window.location.href,
      sdk_version: window.AppcuesBundleSettings && window.AppcuesBundleSettings.VERSION
    }, d2 = t.map((h2) => ({
      ...h2,
      context: u2,
      attributes: {
        ...h2.attributes,
        sessionId: l2,
        _identity: c
      }
    })), f2 = t.find(
      (h2) => h2.name === Y3.PAGE_VIEW
    );
    try {
      const h2 = yield E(
        HS,
        o,
        e,
        d2,
        n,
        r2,
        l2,
        i2,
        u2
      );
      h2 && (yield g3(Tc2(h2, f2)), JS(h2)), yield g3(
        As({
          lastEventTimestamp: t[t.length - 1].timestamp
        })
      ), yield g3(Rm());
    } catch (h2) {
      yield g3(Tc2(h2));
    }
  }
  function Rs(e) {
    for (const t of e)
      if (t.name === Y3.PAGE_VIEW)
        try {
          if (ne4.string(t.attributes.url) && t.attributes.url.length > 0)
            return t;
        } catch {
        }
    return null;
  }
  function Ju2(e) {
    return Gt2(e) && St(e.attributes.params.url, window.location.href);
  }
  function* Qu2(e) {
    let t = e, n = null, r2 = null, i2 = null, o = null, s = null;
    const c = yield v3(nt2);
    if (t && (!c || c.id !== t && (!c.migrated_from_step_id || c.migrated_from_step_id !== t))) {
      if (r2 = window.location.href, yield g3(vr2()), c && ne4.defined(c.id)) {
        const u2 = yield v3(ce3), d2 = ct(c, u2);
        d2 && (yield* Mt2(c, d2)), yield g3(
          Jt3(
            c.id,
            V2.SHOWING_OTHER_CONTENT
          )
        );
      }
      const l2 = yield v3(Rr);
      if (l2 && l2[t])
        n = l2[t];
      else {
        yield g3(Im(t, r2));
        const u2 = yield v3(dt2), d2 = yield v3($t2);
        try {
          n = yield E(ku2, u2, t);
        } catch (f2) {
          yield E(d2, f2, { extra: f2.extra }), n = null;
        }
        if (!n)
          try {
            i2 = yield E($S, u2, t), o = i2 ? i2.checklist : null;
          } catch (f2) {
            yield E(d2, f2, { extra: f2.extra }), i2 = null;
          }
        if (!n && !o)
          try {
            s = yield E(MS, u2, t);
          } catch (f2) {
            yield E(d2, f2, { extra: f2.extra }), s = null;
          }
      }
      n && (t = n.id), yield g3(
        hs2([t], {
          [t]: n
        })
      ), !n && !o && !s ? yield g3(Wn2(new Error("No content returned."))) : n && (n = yield v3(ts3, t));
    }
    return { shownUrl: r2, content: n, checklistContent: o, experience: s };
  }
  function TC(e) {
    return Or2(e) && St(e.attributes.params.url, window.location.href);
  }
  function CC(e, t) {
    return !Or2(e) && t === Te3.STEP_COMPLETED;
  }
  function* _C() {
    const e = JSON.parse(
      yield E(Re3, y, M2)
    );
    if (e) {
      let t = e;
      const n = yield v3(nt2), r2 = n && n.id === e.flowId, i2 = ct(
        n,
        e.stepId
      );
      let o = window.location.href;
      if (Gt2(i2)) {
        if (yield E(
          Ju2,
          i2
        ))
          return yield ut(
            fl2,
            n,
            i2.id,
            o,
            null
          ), true;
        const u2 = e.remainingPagesToCheck;
        return u2 === 1 ? (yield g3(vr2()), yield E(Mt2, n, i2), yield g3(
          Jt3(n.id, V2.CLEAR)
        ), false) : (yield E(wt2, {
          ...e,
          remainingPagesToCheck: u2 - 1
        }), true);
      }
      e.fromPermalink || (yield E(De2, y, M2));
      let c;
      if (r2)
        c = n, o = window.location.href;
      else {
        const l2 = yield E(Qu2, e.flowId);
        c = l2.content, o = l2.shownUrl, c && (yield g3(ja2()));
      }
      if (c) {
        const l2 = ct(c, e.stepId), u2 = e.status, d2 = TC(l2), f2 = Gt2(l2), h2 = e.navByADTT;
        if (d2 || h2 || f2) {
          let y2 = l2, p2 = u2;
          if (CC(l2, u2) && (y2 = Ft2(
            c,
            $n2(c, e.stepId) + 1
          ), p2 = Te3.STEP_ATTEMPTED), Or2(y2) || Gt2(y2)) {
            if (p2 === Te3.STEP_COMPLETED && (y2 = Ft2(
              c,
              $n2(c, y2.id) + 1
            ), p2 = null), Gt2(y2)) {
              const { flowId: _, remainingPagesToCheck: S2 } = t, { page_check_limit: A3 } = y2.attributes.params, I3 = typeof S2 == "number" ? S2 : typeof A3 == "number" ? A3 : z2;
              if (I3 <= 1)
                return yield g3(vr2()), yield E(Mt2, c, y2), yield g3(
                  Jt3(c.id, V2.CLEAR)
                ), t.fromPermalink || (yield E(De2, y, M2)), false;
              t = {
                ...t,
                flowId: _,
                stepId: y2.id,
                status: Te3.STEP_ATTEMPTED,
                remainingPagesToCheck: I3 - 1
              }, yield E(wt2, t);
            }
            r2 && (yield g3(Ay(c.id, l2.id)), yield E(Mt2, c, l2));
            const { flowId: m3, submissionId: T2 } = t;
            return yield E(wt2, {
              ...t,
              flowId: m3,
              submissionId: T2
            }), yield ut(
              fl2,
              c,
              y2.id,
              o,
              p2
            ), true;
          }
        }
      }
    }
    return false;
  }
  function* Zu2() {
    yield g3(vc2(window.location.href, false));
    const e = yield v3(nt2);
    if (e) {
      const r2 = JSON.parse(
        yield E(Re3, y, M2)
      ), i2 = r2 ? ct(e, r2.stepId) : null;
      i2 && Ju2(i2) && (yield E(wt2, {
        ...r2,
        status: Te3.STEP_SHOWN
      }));
    }
    const t = yield E(_C);
    let n = t;
    if (!t) {
      let r2;
      if (yield E(gr2, window, "showappcue")) {
        if (r2 = yield E(gr2, window, "showappcue"), window.history) {
          const i2 = yield E(
            Tn2,
            window.location.href,
            "showappcue"
          );
          yield E(
            [window.history, window.history.replaceState],
            window.history.state,
            "",
            i2
          );
        }
      } else (yield E(gr2, window, "appcue")) && (r2 = yield E(gr2, window, "appcue"));
      (yield E(Vu2, h)) && (r2 || (r2 = yield E(KT, h)), yield E(bs, h)), r2 && (yield g3(xr2(r2)), n = true);
    }
    return yield g3(vc2(window.location.href, true)), n;
  }
  function* IC(e) {
    const t = yield v3(nt2), n = yield v3(ce3), r2 = ct(t, n), i2 = Rs(e);
    if (i2 && i2.attributes.url && t !== null) {
      const o = yield v3(wf2);
      Tn2(i2.attributes.url) !== Tn2(o) && (r2 && (yield* Mt2(t, r2)), yield g3(Jt3(t.id, V2.CLEAR)));
    }
  }
  function* AC({
    properties: e,
    events: t,
    groupProperties: n,
    groupId: r2
  }) {
    let i2 = e, o = n;
    if (Rs(t)) {
      const s = yield E(ks);
      i2 = { ...i2, ...s }, r2 != null && (o = { ...o, ...qu2() });
      const c = yield v3(es3);
      if (!St(c.url, window.location.href)) {
        (yield v3(
          Ve2
        )) === a.WILL_CLOSE && (yield W2(le3.CLOSE_STEP)), yield g3(vr2());
        const d2 = yield v3(No);
        d2 && d2.stopAll(), (yield E(Zu2)) || (yield E(IC, t)), (yield v3(Aa2)) && (yield pt2([E(Du2), E(Fu2)]));
      }
    }
    return [i2, o];
  }
  function* vC({
    properties: e,
    events: t,
    trigger: n,
    groupId: r2,
    groupProperties: i2
  }) {
    (yield E(Mi3)) || (yield W2(U3.INITIALIZE), yield W2(Ct2.SET_SESSION), yield W2(U3.CHECKED_FOR_INITIAL_CONTENT));
    const s = yield E(Re3, k, w2), [c, l2] = yield* AC({
      properties: e,
      events: t,
      groupProperties: i2,
      groupId: r2 ?? s
    });
    let u2 = t;
    const d2 = yield E(mC);
    if (d2) {
      const f2 = t[0];
      f2 && (d2.timestamp = f2.timestamp), u2 = [d2, ...t];
    }
    yield E(Os, {
      properties: c,
      events: u2,
      trigger: n,
      groupId: r2 ?? s,
      groupProperties: l2
    });
  }
  function* bC() {
    const e = yield E(Gn2.expanding, 10), t = yield zd2(
      [
        $3.START_ACTIVITY,
        $3.START_GROUP_ACTIVITY
      ],
      e
    ), n = yield v3(be2);
    (!n || !n.userId) && (yield W2(U3.IDENTIFY));
    let r2 = [];
    yield F3(function* () {
      for (; ; ) {
        const { payload: s } = yield W2($3.START_IDENTIFY), c = yield v3(be2);
        s.userId !== c?.userId && r2.length > 0 && (yield ot3(...r2), r2 = []);
      }
    });
    let i2;
    for (; ; ) {
      i2 = yield W2(t), yield E(ve3, Se2);
      const o = yield Xd2(t);
      let s = i2.payload.properties || {}, c = i2.payload.events || [], l2 = i2.payload.trigger || false, u2 = i2.payload.groupId || null, d2 = i2.payload.groupProperties || null;
      o.forEach((y2) => {
        const { payload: p2 } = y2;
        s = { ...s, ...p2.properties }, p2.events && (c = [...c, ...p2.events]), p2.trigger && (l2 = true), p2.groupId != null && (u2 = p2.groupId), p2.groupProperties && (d2 = { ...d2, ...p2.groupProperties });
      });
      let f2 = false, h2 = false;
      if (c = c.filter((y2) => Rs([y2]) ? Tn2(y2.attributes.url) !== Tn2(window.location.href) || f2 ? false : (f2 = true, true) : (h2 = l2, true)), l2 = f2 || h2, Object.keys(s).length > 0 || c.length > 0 || Object.keys(d2 ?? {}).length > 0 || u2 != null) {
        const y2 = yield F3(vC, {
          properties: s,
          events: c,
          trigger: l2,
          groupId: u2,
          groupProperties: d2
        }), p2 = yield F3(
          SC,
          c
        );
        r2.push(y2, p2);
      }
    }
  }
  function* El2(e, t) {
    const n = yield v3(yf2, e);
    if (n && n.length > 0)
      for (const r2 of n) {
        let i2 = [t];
        e === "all" && (i2 = [t.id, ...i2]), yield E([r2.context || window, r2.callback], ...i2);
      }
  }
  function* wC({ payload: e }) {
    const { flowId: t, event: n } = e, r2 = yield ut(El2, n.id, n), i2 = yield ut(El2, "all", n);
    yield In(r2, i2), yield g3(om(t, n));
  }
  function* NC({ payload: e }) {
    const t = yield E(mu2, e.fields);
    if (t.result || e.ignoreValidation) {
      if (!e.fields.some((c) => c.value)) {
        yield E(e.onSuccess);
        return;
      }
      const r2 = yield v3(ce3), i2 = yield v3(st3), { submissionId: o } = yield* Ht2();
      yield g3(
        se4(
          ft2(
            Te3.STEP_INTERACTED,
            r2,
            i2,
            {
              interactionType: "submit",
              interaction: {
                category: "form",
                formId: e.formId,
                submissionId: o,
                // We only want fieldId, label and value fields from each.
                fields: e.fields.map((c) => ({
                  fieldId: c.fieldId,
                  fieldType: c.validation,
                  fieldRequired: c.required,
                  label: c.label,
                  value: c.value,
                  formFieldIndex: c.formFieldIndex,
                  customReportingLabel: c.customReportingLabel
                }))
              }
            }
          )
        )
      ), yield E(e.onSuccess);
      const s = e.fields.reduce((c, l2) => {
        if (l2.label) {
          const u2 = R2 + dE(l2.label);
          return Object.assign(c, { [u2]: l2.value });
        }
        return c;
      }, {});
      Object.keys(s).length > 0 && (yield g3(we2(s, [], false)));
    } else
      yield g3(my(t.errors));
  }
  function* kC({ payload: e }) {
    const { shownUrl: t, content: n, checklistContent: r2, experience: i2 } = yield E(
      Qu2,
      e
    );
    if (i2 && (yield g3(Is([i2]))), n && (yield E(ju2, n, null, t, null, false)), r2 && !(yield v3(
      os2,
      a.SHOWING
    )).map((c) => c.id).includes(r2.id)) {
      const { userId: c } = yield v3(be2);
      yield E(
        De2,
        y,
        `${F2}${r2.id}`
      ), yield g3(ir2(c, { _showChecklist: r2.id }));
    }
  }
  function* OC() {
    const e = yield v3(Ve2);
    if (ne4.inArray(
      [a.READY, a.WILL_SHOW],
      e
    )) {
      if (e !== a.WILL_SHOW && (yield W2(U3.WILL_SHOW_CONTENT)).error)
        return;
      yield E(ve3, Ie2), yield g3(Cm());
      const t = yield v3(ce3);
      yield g3(
        se4(
          Se3(Te3.STEP_REVEALED, t)
        )
      );
    }
  }
  function* RC() {
    const e = yield qe2({
      cancel: W2($3.CANCEL_ATTEMPTS),
      result: E(OC)
    }), t = yield v3(Ve2);
    if (e.cancel && t === a.WILL_SHOW) {
      const n = yield v3(nt2);
      if (n && ne4.defined(n.id)) {
        const r2 = yield v3(ce3), i2 = ct(n, r2);
        i2 && (yield* Mt2(n, i2)), yield g3(
          Jt3(
            n.id,
            V2.SHOWING_OTHER_CONTENT
          )
        );
      }
    }
  }
  function* LC() {
    if (yield v3(En2)) {
      (yield v3(ye3)).type === x.HOTSPOTS || (yield g3(Fi3()), yield g3(xu2()));
      const r2 = yield v3(ns2), i2 = yield v3(bf2);
      if (r2 && !i2[r2]) {
        let o;
        try {
          const s = yield v3(dt2);
          o = yield E(BS, s, r2);
        } catch (s) {
          const c = yield v3($t2);
          yield E(c, s.message, { extra: s.extra });
        }
        o && (yield g3(Tm({ [r2]: o })));
      }
      yield g3(um());
    }
  }
  function* xC() {
    let e = yield v3(be2);
    const { _localId: t } = e;
    t || (yield W2(({ type: r2, payload: i2 }) => r2 === U3.UPDATE_USER && // eslint-disable-next-line no-underscore-dangle
    ne4.defined(i2.profile._localId)), e = yield v3(be2));
    const { _localId: n } = e;
    yield g3(
      ir2(`anon:${n}`, { _isAnonymous: true }, [
        Qt(Y3.PAGE_VIEW, { url: window.location.href })
      ])
    );
  }
  function* PC({ payload: e }) {
    (yield v3(Ea2)) || (yield W2(U3.COMPLETED_IDENTIFY));
    let n = yield v3(be2), { _appcuesId: r2 } = n;
    for (; !r2; )
      yield W2(U3.UPDATE_USER), n = yield v3(be2), { _appcuesId: r2 } = n;
    try {
      n = JSON.parse(JSON.stringify(n));
    } catch {
    }
    yield E(e, n);
  }
  function* DC({ payload: e }) {
    const t = yield v3(ii3, e);
    t && t.length > 0 && (yield g3(Nm(e)), yield t.map((n) => ot3(n)));
  }
  function FC(e) {
    return e === null || e === a.ERROR;
  }
  function UC(e, t) {
    return !!(e && t);
  }
  function* HC() {
    const e = yield v3(nt2), t = yield v3(ce3), n = ct(e, t);
    yield g3(vr2()), yield E(Mt2, e, n), yield g3(
      Jt3(e.id, V2.CLEAR)
    );
  }
  function* MC(e) {
    const { currentUrl: t, shouldOverrideCurrentFlow: n, requestId: r2 } = e.payload, i2 = yield v3(vf2), o = yield v3(Ve2), s = yield v3(En2);
    if (!(!i2 || i2.length === 0) && (FC(o) || UC(o, n))) {
      let c = true;
      const l2 = yield v3(Rr);
      for (const u2 of i2) {
        const d2 = l2[u2];
        if (s === d2.id)
          return;
        const f2 = yield E(
          Ja2,
          d2.id,
          Xe3.FLOWS
        );
        if (f2 && (yield g3(
          Pi3(d2.id, Xe3.FLOWS)
        )), o && n && (yield E(HC)), !f2) {
          if (yield E(
            ju2,
            d2,
            null,
            t,
            r2
          )) {
            c && (yield E(ZS, r2));
            return;
          }
          c = false;
        }
      }
    }
  }
  function* gl2(e, t, n, r2) {
    const i2 = yield v3(dt2), o = e.getEntriesByType("resource").filter((s) => s.name.match(/fast\.appcues\./)).map((s) => s.toJSON());
    yield E(Nu2, i2, {
      api_request_start: Math.round(n - t),
      api_response_duration: Math.round(r2 - n),
      timing: o,
      sdk_version: window.AppcuesBundleSettings.VERSION
    });
  }
  function* $C() {
    try {
      yield W2(Ct2.SET_SESSION);
      const e = window.performance, n = (yield v3(Yn2)).timestamp % 100 === 0;
      if (e.getEntriesByName) {
        const r2 = e.getEntriesByName("apc-init", "mark")[0].startTime, {
          payload: { requestId: i2 }
        } = yield W2(
          (u2) => u2.type === U3.SENT_REQUEST && u2.payload
        ), o = e.now(), { payload: s } = yield W2(
          (u2) => u2.type === $3.START_HANDLE_MESSAGE && u2.payload.request_id === i2
        ), c = e.now();
        (s.contents && s.contents.length > 0 || s.content && s.content.length > 0 && Ns(s.content).contents.length > 0) && document.visibilityState === "visible" && (yield W2($3.START_CHECK), yield ut(function* () {
          const d2 = yield qe2({
            imm: W2(U3.STARTED_FLOW_IMM),
            show: W2(U3.SHOW_CONTENT),
            start: W2($3.START_FLOW),
            check: W2($3.START_CHECK)
          });
          if (!d2.imm)
            return;
          const f2 = yield v3(ts3, d2.imm.payload), h2 = Ft2(f2, 0);
          if (Gt2(h2) || Or2(h2) || (yield W2(
            U3.WILL_SHOW_CONTENT
          )).error)
            return;
          const m3 = e.now();
          yield W2(le3.LOADED_CSS);
          const T2 = e.now();
          yield W2(U3.SHOW_CONTENT);
          const _ = yield v3(zn2), S2 = yield v3(dt2);
          yield E(Nu2, S2, {
            render_time: Math.round(m3 - c),
            css_load_time: Math.round(T2 - m3),
            time_to_show: Math.round(e.now() - r2),
            content_type: _,
            sdk_version: window.AppcuesBundleSettings.VERSION
          }), n || (yield* gl2(e, r2, o, c));
        })), n && (yield* gl2(e, r2, o, c));
      }
    } catch {
    }
  }
  function* BC() {
    const e = JSON.parse(
      yield E(Re3, y, W)
    );
    if (e) {
      const { checklistId: t, itemId: n, actionIndex: r2, checklist: i2 } = e;
      yield E(De2, y, W), yield g3(
        Iu2(t, n, r2 + 1, i2)
      );
    }
    return false;
  }
  function* VC() {
    const e = yield W2($3.START_INITIALIZE);
    if (!(yield E(Mi3))) {
      const n = yield E(Re3, k, P);
      n !== null && (yield g3(
        ir2(n, {}, [
          Qt(Y3.PAGE_VIEW, { url: window.location.href })
        ])
      ));
      const r2 = yield E(
        DS,
        e.payload.dispatchMessage.onMessage,
        e.payload.dispatchMessage.onTimeout,
        e.payload.transportModule
      );
      yield E(ks, true), yield g3(
        gm({
          type: r2.type,
          module: e.payload.transportModule,
          details: r2.details
        })
      ), yield E(Zu2), yield E(BC);
    }
  }
  function* WC({ payload: { groupId: e, groupProperties: t } }) {
    const n = {
      ...t,
      ...qu2()
    };
    yield g3(sm(e, n)), yield E(He3, k, w2, e), yield g3(Um({ groupId: e, groupProps: n }));
  }
  function* GC({ payload: e }) {
    const t = yield v3(Rr);
    if (Object.prototype.hasOwnProperty.call(t, e)) return;
    const n = yield v3(dt2), r2 = yield E(ku2, n, e);
    yield g3(
      hs2([e], {
        [e]: r2
      })
    );
  }
  function* jC() {
    yield [
      ut(VC),
      ut(yC),
      ut($C),
      F3(ee4, $3.START_EVENT, wC),
      F3(bC),
      F3(ee4, $3.START_ANONYMOUS, xC),
      F3(
        ee4,
        $3.START_FORM_SUBMISSION,
        NC
      ),
      F3(Ze2, $3.START_SHOW, kC),
      F3(
        Ze2,
        le3.LOADED_CSS,
        RC
      ),
      F3(
        ee4,
        $3.PREPARE_CONTENT,
        LC
      ),
      F3(ee4, $3.START_RESET, zu2),
      F3(
        ee4,
        U3.WAIT_IDENTIFY,
        PC
      ),
      F3(ee4, $3.STOP_TASKS, DC),
      F3(
        Ze2,
        $3.START_CHECK,
        MC
      ),
      F3(
        ee4,
        le3.SET_NEXT_CONTENT_ID_COOKIE,
        aC
      ),
      F3(
        ee4,
        $3.START_IDENTIFY_GROUP,
        WC
      ),
      F3(
        ee4,
        U3.PREFETCH_FLOWS,
        GC
      )
    ];
  }
  function ed2(e, t) {
    return e.innerText == null ? false : t ? e.innerText.replace(/\r\n|\r|\n/g, " ").toLowerCase().trim() === t.toLowerCase().trim() : true;
  }
  function td2(e, t) {
    if (Object.prototype.hasOwnProperty.call(t, "order_filter")) {
      const n = us2(t);
      return e === n;
    }
    return true;
  }
  function qC(e, t) {
    try {
      return !e.includes("|shadow-root|") && !e.includes("|iframe|") && (t.matches ? t.matches(e) : t.msMatchesSelector(e)) ? t : lt2(
        wi3(e),
        (n) => n.contains(t)
      );
    } catch {
      return null;
    }
  }
  function Ls({ events: e, $element: t, eventType: n }) {
    return e.map((r2) => {
      const { targets: i2 } = r2;
      for (const { event: o, selector: s } of i2)
        if (o === n) {
          const { selector: c, text_filter: l2 } = s, u2 = qC(c, t);
          if (u2 && ed2(u2, l2) && td2(u2, s))
            return [r2, u2];
        }
      return null;
    }).filter((r2) => r2);
  }
  function xs({ events: e, matchSelector: t }) {
    try {
      return e.flatMap((n) => n.targets).filter(({ selector: n }) => t(n.selector)).flatMap(({ selector: n }) => {
        const { selector: r2, text_filter: i2 } = n;
        return wi3(r2).filter((o) => ed2(o, i2) && td2(o, n));
      });
    } catch {
      return [];
    }
  }
  function Ei3(e) {
    return e.composedPath ? e.composedPath() : [e.target];
  }
  function KC({
    events: e,
    onEventsTriggered: t,
    stopPropagation: n
  }) {
    const r2 = e.filter(
      ({ targets: s }) => s.some(({ event: c }) => c === "click")
    ), i2 = (s) => {
      const [c] = Ei3(s), l2 = Ls({
        events: r2,
        $element: c,
        eventType: "click"
      }).map(([u2]) => u2);
      n && l2.length > 0 && (s.preventDefault(), s.stopImmediatePropagation()), t(l2);
    }, o = (s) => {
      (s.key === " " || s.key === "Enter") && i2(s);
    };
    try {
      const s = xs({
        events: r2,
        matchSelector: (c) => c.includes("|iframe|")
      });
      return s.forEach((c) => {
        c.addEventListener("click", i2, true), c.addEventListener("keyup", o, true);
      }), document.addEventListener("click", i2, true), document.addEventListener("keyup", o, true), () => {
        s.forEach((c) => {
          c.removeEventListener("click", i2, true), c.removeEventListener("keyup", o, true);
        }), document.removeEventListener("click", i2, true), document.removeEventListener("keyup", o, true);
      };
    } catch {
      return null;
    }
  }
  function zC({ events: e, onEventsTriggered: t }) {
    const n = e.filter(
      ({ targets: s }) => s.some(({ event: c }) => c === "input")
    );
    let r2 = [];
    const i2 = (s) => {
      const [c] = Ei3(s), u2 = Ls({
        events: n,
        $element: c,
        eventType: "input"
      }).map(([d2]) => d2).filter(
        (d2) => !YC(r2, d2)
      );
      r2 = [...r2, ...u2], t(u2);
    }, o = () => {
      r2 = [];
    };
    try {
      const s = xs({
        events: n,
        matchSelector: (c) => c.includes("|iframe|")
      });
      return s.forEach((c) => {
        c.addEventListener("input", i2), c.addEventListener("blur", o, true);
      }), document.addEventListener("input", i2), document.addEventListener("blur", o, true), () => {
        s.forEach((c) => {
          c.removeEventListener("input", i2), c.removeEventListener("blur", o, true);
        }), document.removeEventListener("input", i2), document.removeEventListener("blur", o, true);
      };
    } catch {
      return null;
    }
  }
  function yl2(e, t) {
    let n;
    const r2 = document.createNodeIterator(
      e,
      NodeFilter.SHOW_ELEMENT,
      (i2) => i2.shadowRoot && i2.nodeName !== "APPCUES-EXPERIENCE-CONTAINER" && i2.nodeName !== "APPCUES-EXPERIENCE-CONTAINER-BUILDER" && i2.nodeName !== "APPCUES-BUILDER" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
    );
    for (; (n = r2.nextNode()) !== null; )
      t(n.shadowRoot);
  }
  function XC({ events: e, onEventsTriggered: t }) {
    const n = e.filter(
      ({ targets: o }) => o.some(({ event: s }) => s === "hover")
    ), r2 = /* @__PURE__ */ new Set(), i2 = (o) => {
      const [s] = Ei3(o), c = Ls({
        events: n,
        $element: s,
        eventType: "hover"
      });
      c.length > 0 && c.reduce((u2, [d2, f2]) => (u2.has(f2) ? u2.set(f2, [...u2.get(f2), d2]) : u2.set(f2, [d2]), u2), /* @__PURE__ */ new Map()).forEach((u2, d2) => {
        if (r2.has(d2))
          return;
        r2.add(d2);
        const f2 = window.setTimeout(() => {
          t(u2);
        }, 500), h2 = (y2) => {
          const [p2] = Ei3(y2);
          p2 === d2 && (window.clearTimeout(f2), r2.delete(d2), d2.removeEventListener("mouseleave", h2));
        };
        d2.addEventListener("mouseleave", h2);
      });
    };
    if (n.length > 0)
      try {
        document.addEventListener("mouseover", i2);
        const o = xs({
          events: n,
          matchSelector: (s) => s.includes("|iframe|")
        });
        return o.forEach((s) => {
          s.addEventListener("mouseover", i2);
        }), yl2(
          document.body,
          (s) => s.addEventListener("mouseover", i2)
        ), () => {
          document.removeEventListener("mouseover", i2), o.forEach((s) => {
            s.removeEventListener("mouseover", i2);
          }), yl2(
            document.body,
            (s) => s.removeEventListener("mouseover", i2)
          );
        };
      } catch {
        return null;
      }
    return () => {
    };
  }
  function JC({
    name: e,
    timestamp: t,
    attributes: { url: n, interaction: r2, selector: i2 }
  }) {
    return {
      source: nd2,
      id: e,
      name: e,
      timestamp: t,
      url: n,
      interaction: r2,
      ...Object.keys(i2).reduce(
        (o, s) => ({ ...o, [`selector.${s}`]: i2[s] }),
        {}
      )
    };
  }
  function* QC(e = [], t = false) {
    const n = gg(), r2 = e.filter(
      ({ urls: o }) => o.some(
        (s) => s === "*" || St(s, n)
      )
    ), i2 = kr((o) => {
      const s = KC({
        events: r2,
        onEventsTriggered: o,
        stopPropagation: t
      }), c = zC({
        events: r2,
        onEventsTriggered: o
      }), l2 = XC({
        events: r2,
        onEventsTriggered: o
      });
      return () => {
        s(), c(), l2();
      };
    }, Gn2.expanding(5));
    try {
      for (; ; ) {
        const o = yield W2(i2);
        o.length > 0 && (yield g3(
          mT(
            o.map(
              ({ name: s, targets: [{ event: c, selector: l2 }] }) => Qt(s, {
                url: n,
                interaction: c,
                selector: {
                  css: l2.selector,
                  ...Sl2(l2, "text_filter") ? { textFilter: l2.text_filter } : {},
                  ...Sl2(l2, "order_filter") ? { orderFilter: l2.order_filter } : {}
                }
              })
            )
          )
        ));
      }
    } finally {
      (yield Ci3()) && i2.close();
    }
  }
  function* ZC(e = []) {
    const [t, n] = yield [
      F3(function* () {
        try {
          if (!e || e.length === 0)
            return;
          for (; ; ) {
            const i2 = yield F3(QC, e);
            yield W2(
              ({ type: o, payload: s }) => o === $3.START_ACTIVITY && s.events.some(
                (c) => c.name === Y3.PAGE_VIEW
              )
            ), yield ot3(i2);
          }
        } catch {
        }
      }),
      F3(
        Ir2,
        Pu2,
        function* ({ payload: i2 }) {
          try {
            (yield E(Mi3)) || (yield W2(U3.INITIALIZE));
            const s = yield E(
              Re3,
              k,
              w2
            );
            yield E(Os, {
              properties: {},
              events: i2,
              trigger: true,
              groupId: s ?? null
            }), (yield v3(Cf2)) && (yield i2.map((l2) => {
              const u2 = JC({
                ...l2,
                name: l2.name.replace("appcues_custom:", "")
              });
              return g3(Ue3(u2.id, u2));
            }));
          } catch {
          }
        }
      )
    ];
    t.isRunning() || n.cancel();
  }
  function rd2({ attributes: e }) {
    return e ? !!e._builderButtonEvent : false;
  }
  function e_(e) {
    const t = rd2(e), n = L2.some(
      (i2) => e?.id?.startsWith(i2)
    ), r2 = e?.source === nd2;
    return !t && !n && !r2;
  }
  function t_(e) {
    return `${e.name} (Appcues)`;
  }
  function n_(e, t) {
    return { ...e, user: t };
  }
  function po2(e, t, n, r2, i2) {
    e(t, "event", n, r2, i2, {
      nonInteraction: true
    });
  }
  function r_(e, t = {}) {
    if (e === "Form Field Submitted (Appcues)") {
      const {
        // Ignored fields
        user: n,
        interaction: r2,
        // Hoisted fields
        interaction: {
          category: i2,
          destination: o,
          formId: s,
          fieldId: c,
          label: l2,
          value: u2
        } = {},
        ...d2
      } = t;
      return {
        ...d2,
        category: i2,
        destination: o,
        formId: s,
        fieldId: c,
        label: l2,
        value: u2
      };
    } else
      return t;
  }
  function i_(e) {
    if (!e.user) return e;
    const t = Object.entries(e.user).reduce(
      (n, [r2, i2]) => {
        if (r2.startsWith("_")) {
          const o = r2.slice(1);
          n[o] = i2;
        } else
          n[r2] = i2;
        return n;
      },
      {}
    );
    return { ...e, user: t };
  }
  function o_(e) {
    const { user: t, ...n } = e, r2 = Object.entries(n).reduce(
      (o, [s, c]) => (Tl2(c) && (o[s] = c), o),
      {}
    );
    if (!t) return r2;
    const i2 = Object.entries(t).reduce(
      (o, [s, c]) => (Tl2(c) && (o[`user.${s}`] = c), o),
      {}
    );
    return { ...r2, ...i2 };
  }
  function s_(e, t) {
    const { settings: n } = t(), r2 = (i2) => () => {
      e.on("all", (o, s) => {
        if (e_(s)) return;
        const c = t_(s), l2 = rd2(s) ? s.name : o;
        try {
          if (l2 && c) {
            const u2 = n_(s, t().user);
            i2(l2, c, u2);
          }
        } catch {
        }
      });
    };
    return {
      initMixpanel: r2((i2, o, s) => {
        window.mixpanel.track(o, s);
      }),
      initHeap: r2((i2, o, s) => {
        const c = r_(o, s);
        window.heap.addUserProperties({
          appcuesUserID: be2(t()).userId
        }), window.heap.track(o, c, "appcues");
      }),
      initIntercom: r2((i2, o, s) => {
        window.Intercom("trackEvent", o, s);
      }),
      initCIO: r2((i2, o, s) => {
        window._cio.track(o, s);
      }),
      initVero: r2((i2, o, s) => {
        window._veroq.push(["track", o, s]);
      }),
      initWoopra: r2((i2, o, s) => {
        window.woopra.track(o, s);
      }),
      initAmplitude: r2((i2, o, s) => {
        window.amplitude.logEvent(o, s);
      }),
      initKlaviyo: r2((i2, o, s) => {
        window._learnq.push(["track", o, s]);
      }),
      initTD: r2((i2, o, s) => {
        window.td.trackEvent(o, s);
      }),
      initLl: r2((i2, o, s) => {
        window.ll("tagEvent", o, s);
      }),
      initCalq: r2((i2, o, s) => {
        window.calq.action.track(o, s);
      }),
      initKM: r2((i2, o, s) => {
        window._kmq.push(["record", o, s]);
      }),
      initGA: r2((i2, o, s) => {
        const { flowId: c, checklistId: l2, name: u2 } = s, d2 = c || l2 || u2, f2 = "appcues";
        let h2 = "";
        try {
          h2 = n.integrations.ga.trackerName || "";
        } catch {
        }
        if (d2) {
          const y2 = window[window.GoogleAnalyticsObject];
          ne4.function(y2) ? y2((p2) => {
            if (h2)
              po2(y2, `${h2}.send`, f2, i2, d2);
            else if (p2)
              po2(y2, "send", f2, i2, d2);
            else {
              const m3 = y2.getAll().reduce(
                (T2, _) => ({
                  ...T2,
                  [_.get("trackingId")]: _.get("name")
                }),
                {}
              );
              Object.keys(m3).forEach((T2) => {
                po2(
                  y2,
                  `${m3[T2]}.send`,
                  f2,
                  i2,
                  d2
                );
              });
            }
          }) : window._gaq ? window._gaq.push([
            "_trackEvent",
            f2,
            i2,
            d2,
            void 0,
            true
          ]) : window.gtag && (s.checklistName ? window.gtag("event", o, {
            appcues_event_id: i2,
            appcues_checklist_id: s.checklistId,
            appcues_checklist_name: s.checklistName
          }) : window.gtag("event", o, {
            appcues_event_id: i2,
            appcues_flow_id: d2,
            appcues_flow_name: s.flowName
          }));
        }
      }),
      initGTM: r2((i2, o, s) => {
        window.dataLayer.push({
          event: o,
          appcues_event_id: i2,
          appcues_flow_id: s.flowId,
          appcues_flow_name: s.flowName
        });
      }),
      initSegment: r2((i2, o, s) => {
        window.analytics.track(o, s, {
          integrations: {
            Appcues: false
          }
        });
      }),
      initRudderstack: r2(
        // We need to filter out the event ID and timestamp from the event
        // because RudderStack will throw an error if it sees them, because those props are reserved.
        // https://www.rudderstack.com/docs/sources/event-streams/sdks/rudderstack-javascript-sdk/faq/#what-is-the-reserved-keyword-error
        (i2, o, { id: s, timestamp: c, ...l2 }) => {
          window.rudderanalytics.track(o, l2, {
            integrations: {
              Appcues: false
            }
          });
        }
      ),
      initBraze: r2((i2, o, s) => {
        window.braze.logCustomEvent(o, s);
      }),
      initFullStory: r2((i2, o, s) => {
        const c = i_(s);
        window.FS.event(o, c);
      }),
      initHotjar: r2((i2, o) => {
        window.hj("event", o);
      }),
      initLogRocket: r2((i2, o, s) => {
        const c = o_(s);
        window.LogRocket.track(o, c);
      })
    };
  }
  function Cl2(e, t) {
    const n = { ...t, url: e };
    return Qt(Y3.PAGE_VIEW, n);
  }
  function c_({ dispatch: e, getState: t }) {
    const n = {
      identify(i2, o = {}) {
        let s = i2, c = o;
        if (!ne4.object(c)) {
          c = {};
          try {
            $t2(t())(
              new Error("Appcues.identify() called with invalid user properties")
            );
          } catch {
          }
        }
        ne4.object(s) ? (c = s, s = c.userId || be2(t()).userId || null) : (ne4.undefined(s) || s === null) && (s = c.userId || be2(t()).userId || null), delete c.userId, ne4.defined(s) ? e(
          ir2(s, c, [
            Cl2(window.location.href)
          ])
        ) : e(Pr2(c, true));
      },
      track(i2, o = {}) {
        i2 && e(
          we2({}, [Qt(i2, o)], true)
        );
      },
      page(i2, o = {}) {
        let s = o;
        ne4.object(i2) ? s = i2 : ne4.string(i2) && (s = { ...s, name: i2 }), e(
          we2({}, [Cl2(window.location.href, s)], true)
        );
      },
      anonymous() {
        e(cm());
      },
      show(i2) {
        e(xr2(i2));
      },
      clearShow() {
        e(fS());
      },
      on(i2, o, s) {
        e(_c2(i2, o, s));
      },
      off(i2, o, s) {
        e(Ic2(i2, o, s));
      },
      once(i2, o, s) {
        const c = function(...u2) {
          o.apply(this, u2), e(Ic2(i2, c, s));
        };
        e(_c2(i2, c, s));
      },
      reset() {
        e(dm());
      },
      debug(i2 = true) {
        e(i2 ? fm() : Lu2());
      },
      loadLaunchpad(i2, o) {
        e(mS({ selector: i2, ...o }));
      },
      group(i2, o) {
        let s = i2, c = o;
        if (!ne4.object(c)) {
          c = {};
          try {
            $t2(t())(
              new Error("Appcues.group() called with invalid group properties")
            );
          } catch {
          }
        }
        ne4.object(s) && (c = s), (ne4.object(s) || s == null || s === "") && (s = c.groupId || be2(t()).groupId || null), delete c.groupId, s == null && (c = {}), e(Em(s, c));
      }
    };
    Object.assign(n, {
      /**
       * Returns user properties stored locally.
       *
       * @param  {Boolean} defer  If we should wait until user has been
       *                          identified before returning properties.
       *                          Defaults to true.
       *
       * @return {object|Promise} Returns user properties as an object if
       *                          defer is false. Returns a Promise for user
       *                          properties if defer is true.
       */
      user(i2 = true) {
        if (i2)
          return new Promise((s) => {
            e(vm(s));
          });
        const o = be2(t());
        try {
          return JSON.parse(JSON.stringify(o));
        } catch {
          return o;
        }
      },
      settings() {
        return { ...t().settings };
      },
      content() {
        const i2 = t();
        return {
          content: { ...i2.content },
          orderedContent: [...i2.orderedContent],
          currentContent: {
            ...i2.currentContent,
            ...ye3(i2)
          }
        };
      }
    });
    const r2 = s_(n, t);
    return Object.assign(n, r2), Object.assign(n, {
      start() {
        n.page();
      },
      experience: {
        pause: (i2) => e(pT(i2)),
        resume: (i2) => e(hT(i2)),
        show: (i2) => e(Is([i2]))
      }
    }), n;
  }
  function a_(e) {
    return !!(e && e.attributes && e.attributes.params && e.attributes.params.url);
  }
  function u_(e) {
    return !!(e && e.type === x.ACTION && e.attributes.action_type === j2.WAIT_FOR_PAGE);
  }
  function d_(e) {
    const {
      lastTrackedPage: t,
      currentPage: n,
      currentContent: r2,
      currentFlow: i2,
      currentContentStatus: o,
      currentStepId: s,
      currentStepChildId: c,
      stepChildErrors: l2,
      user: u2,
      group: d2,
      settings: f2,
      isTransportInitialized: h2,
      rowState: y2,
      onToggleRowDetails: p2,
      onToggleCollapsed: m3,
      onCloseDebugger: T2
    } = e, _ = t && n, S2 = t === n, A3 = u2 && ne4.defined(u2.userId), I3 = d2 && ne4.defined(d2.groupId), C3 = Object.keys(l2 || {}).reduce(
      (L3, H4) => {
        const R3 = l2[H4];
        return R3.errorReported && !R3.recoveryReported ? [...L3, { ...R3, stepChildId: H4 }] : L3;
      },
      []
    ), O3 = f2.accountId && u2.userId;
    return /* @__PURE__ */ a2.html("debugger", null, /* @__PURE__ */ a2.html("div", { "class-header": true, "on-click": m3 }, /* @__PURE__ */ a2.html("div", { "class-logo": true }, /* @__PURE__ */ a2.html("a", { "attrs-href": _l2, "attrs-target": "_blank" }, /* @__PURE__ */ a2.html(eu2, { width: "20px", height: "20px" }))), /* @__PURE__ */ a2.html("div", { "class-title": true }, "Appcues Status"), /* @__PURE__ */ a2.html("div", { "class-version": true }, f2.VERSION ? `SDK Version: ${f2.VERSION}` : "SDK Version Pending"), /* @__PURE__ */ a2.html("div", { "class-close-button": true }, /* @__PURE__ */ a2.html(
      "a",
      {
        "on-click": T2,
        role: "button",
        "aria-label": "Close debugger"
      },
      "\xD7"
    ))), /* @__PURE__ */ a2.html("div", { "class-panel": true }, /* @__PURE__ */ a2.html(
      tn2,
      {
        status: f2 && f2.accountId ? "check" : "alert",
        category: "Installed",
        description: `Account ID: ${f2 && f2.accountId ? f2.accountId : "Unknown"}`
      }
    ), /* @__PURE__ */ a2.html(
      tn2,
      {
        status: h2 ? "check" : "alert",
        category: `${h2 ? "" : "Not "}Connected to Appcues`
      }
    ), /* @__PURE__ */ a2.html(
      tn2,
      {
        status: _ ? S2 ? "check" : "alert" : "pending",
        category: "Tracking Pages",
        description: _ ? S2 ? "Current URL matches last tracked" : "URL has changed since last tracked" : "Navigate to another page to test",
        showDetails: (y2 || {})["track-data"],
        onToggleRowDetails: () => p2("track-data"),
        details: /* @__PURE__ */ a2.html("span", null, /* @__PURE__ */ a2.html("b", null, "Last Tracked URL:"), /* @__PURE__ */ a2.html("br", null), t, /* @__PURE__ */ a2.html("br", null), /* @__PURE__ */ a2.html("br", null), /* @__PURE__ */ a2.html("b", null, "Current URL:"), /* @__PURE__ */ a2.html("br", null), n)
      }
    ), /* @__PURE__ */ a2.html(
      tn2,
      {
        status: A3 ? "check" : "alert",
        category: `User ${A3 ? "" : "Not "}Identified`,
        description: A3 ? (
          // eslint-disable-next-line no-underscore-dangle
          u2._isAnonymous ? "Anonymous User" : `User ID: ${u2.userId}`
        ) : "Have you called `identify`?",
        showDetails: (y2 || {})["user-data"],
        onToggleRowDetails: () => p2("user-data"),
        details: A3 ? /* @__PURE__ */ a2.html(Al2, { user: u2 }) : /* @__PURE__ */ a2.html("span", null, "Please identify the current user by providing a userId and tracked properties")
      }
    ), I3 ? /* @__PURE__ */ a2.html(
      tn2,
      {
        status: "check",
        category: "Group Identified",
        description: `Group ID: ${d2.groupId}`,
        showDetails: (y2 || {})["group-data"],
        onToggleRowDetails: () => p2("group-data"),
        details: /* @__PURE__ */ a2.html(Al2, { user: d2.groupProps })
      }
    ) : /* @__PURE__ */ a2.html(ae4, null), r2 ? /* @__PURE__ */ a2.html(
      tn2,
      {
        status: o === "SHOWING" ? "check" : "pending",
        category: "Showing Flow",
        description: i2.name,
        showDetails: (y2 || {})["flow-details"],
        onToggleRowDetails: () => p2("flow-details"),
        details: Il2(
          i2,
          s,
          c
        )
      }
    ) : /* @__PURE__ */ a2.html(ae4, null), C3.length > 0 ? /* @__PURE__ */ a2.html(
      tn2,
      {
        status: "warn",
        category: "Content Omitted",
        description: "Some content isn't showing",
        showDetails: (y2 || {})["omit-content"],
        onToggleRowDetails: () => p2("omit-content"),
        details: /* @__PURE__ */ a2.html("div", null, "Some of the content this user is eligible for isn't showing. If there are dynamic elements on your page, this may be expected. Otherwise, please double-check your selectors.", /* @__PURE__ */ a2.html("ul", null, C3.map((L3) => {
          const { stepChildId: H4, flow: R3 } = L3, K3 = ha2(qn2(R3), H4) || {};
          return /* @__PURE__ */ a2.html("li", null, Il2(R3, K3.id, H4));
        })))
      }
    ) : /* @__PURE__ */ a2.html(ae4, null)), /* @__PURE__ */ a2.html("div", { "class-footer": true }, /* @__PURE__ */ a2.html(
      "a",
      {
        href: `${_l2}/diagnostics?view_as=${f2.accountId}&context=${window.btoa(
          JSON.stringify({ userId: u2.userId, url: t })
        )}`,
        classNames: O3 ? "" : "disabled",
        target: "_blank",
        rel: "noreferrer"
      },
      /* @__PURE__ */ a2.html("div", { "class-launch-diagnostics": true }, O3 ? "View Flow Eligibility for User" : "Identify User to View Flow Eligibility")
    )));
  }
  function tn2({
    status: e,
    active: t,
    category: n,
    description: r2,
    details: i2,
    showDetails: o,
    onToggleRowDetails: s
  }) {
    return /* @__PURE__ */ a2.html("div", { classNames: `row ${t ? "active" : ""}` }, /* @__PURE__ */ a2.html("div", { classNames: `category-container ${e}` }, /* @__PURE__ */ a2.html("div", { "class-icon": true }), /* @__PURE__ */ a2.html("div", { "class-name": true }, n), r2 ? /* @__PURE__ */ a2.html("div", { "class-description": true }, r2) : /* @__PURE__ */ a2.html(ae4, null), i2 ? /* @__PURE__ */ a2.html(
      "div",
      {
        classNames: `toggle-details ${o ? "open" : "closed"}`,
        "on-click": s
      },
      "DETAILS"
    ) : /* @__PURE__ */ a2.html(ae4, null)), o ? /* @__PURE__ */ a2.html("div", { "class-details": true }, i2) : /* @__PURE__ */ a2.html(ae4, null));
  }
  function Al2({ user: e }) {
    const t = /^_.*/, n = Object.keys(e).map((i2) => ({ name: i2, value: e[i2] })), r2 = (i2, o) => {
      if (!t.test(i2.name) || !t.test(o.name)) {
        if (t.test(i2.name))
          return -1;
        if (t.test(o.name))
          return 1;
      } else
        return i2.name.toLowerCase() < o.name.toLowerCase() ? -1 : 1;
      return 0;
    };
    return /* @__PURE__ */ a2.html("table", null, /* @__PURE__ */ a2.html("thead", null, /* @__PURE__ */ a2.html("tr", null, /* @__PURE__ */ a2.html("th", null, "Property"), /* @__PURE__ */ a2.html("th", null, "Value"))), /* @__PURE__ */ a2.html("tbody", null, n.sort(r2).map((i2) => /* @__PURE__ */ a2.html("tr", null, /* @__PURE__ */ a2.html("td", null, i2.name), /* @__PURE__ */ a2.html("td", null, JSON.stringify(i2.value))))));
  }
  function g_(e) {
    if (Ar2(document)) {
      const t = e.views.callbacks[x.DEBUGGER], n = Ca2(e), r2 = n && n.isCollapsed;
      if (!nn2) {
        const i2 = document.createElement("appcues-debugger");
        document.body.appendChild(i2), nn2 = ho2(i2, /* @__PURE__ */ a2.html("appcues-debugger", null));
      }
      Xn2(e) && t ? nn2 = ho2(
        nn2,
        /* @__PURE__ */ a2.html("appcues-debugger", { classNames: r2 ? "collapsed" : "expanded" }, /* @__PURE__ */ a2.html(
          "iframe",
          {
            "style-border": "none",
            "style-height": "450px",
            "style-width": "600px",
            scrolling: "no",
            "style-color-scheme": "none"
          },
          /* @__PURE__ */ a2.html(
            "link",
            {
              "attrs-href": h_,
              "attrs-type": "text/css",
              "attrs-rel": "stylesheet",
              "attrs-integrity": p_,
              "attrs-crossorigin": "anonymous"
            }
          ),
          E_(e, t)
        ))
      ) : nn2 && (nn2 = ho2(nn2, /* @__PURE__ */ a2.html("div", null)));
    }
  }
  function I_(e) {
    if (Ar2(document)) {
      const t = e.views && e.views.callbacks && e.views.callbacks[x.TEST_MODE], { _testContentId: n } = e.user || {}, r2 = n, i2 = e.test && e.test.cssLoaded;
      if (!rn2) {
        const o = document.createElement("appcues-test-banner");
        document.body.appendChild(o), rn2 = mo2(o, /* @__PURE__ */ a2.html("appcues-test-banner", null));
      }
      r2 && t ? rn2 = mo2(
        rn2,
        /* @__PURE__ */ a2.html("div", { "class-appcues": true }, /* @__PURE__ */ a2.html(
          "appcues-test-banner",
          {
            style: { display: "flex", justifyContent: "center" }
          },
          /* @__PURE__ */ a2.html(
            "iframe",
            {
              style: {
                height: "50px",
                width: "595px",
                position: "fixed",
                bottom: "0",
                border: "0"
              }
            },
            /* @__PURE__ */ a2.html(
              "link",
              {
                "attrs-href": __,
                "attrs-integrity": C_,
                "attrs-crossorigin": "anonymous",
                "attrs-type": "text/css",
                "attrs-rel": "stylesheet",
                "on-load": t.onCssLoaded
              }
            ),
            i2 ? /* @__PURE__ */ a2.html(S_, { testModeCallbacks: t }) : /* @__PURE__ */ a2.html(ae4, null)
          )
        ))
      ) : rn2 && (rn2 = mo2(rn2, /* @__PURE__ */ a2.html("div", null)));
    }
  }
  function A_(e) {
    return {
      onToggleRowDetails(t) {
        e(lT(t));
      },
      onToggleCollapsed() {
        e(aT());
      },
      onCloseDebugger() {
        e(Lu2());
      }
    };
  }
  function* v_() {
    if ((yield v3(zn2)) === x.MODAL && (yield v3(Ve2)) === a.STARTED) {
      const e = yield v3(tt);
      (yield E(Ku2, e)) && (yield g3(pu2(document.activeElement)), yield g3(by()));
    }
  }
  function* b_() {
    yield F3(ee4, $3.START_CONTENT, v_);
  }
  function* Ps(e, t) {
    yield E(RT, t), yield g3(
      se4(
        ft2(Te3.CHILD_RUN, e, t)
      )
    ), yield g3(Uy([t]));
  }
  function* w_() {
    if ((yield v3(zn2)) === x.HOTSPOTS && (yield v3(Ve2)) === a.STARTED) {
      const e = yield v3(ye3), t = An(e);
      t.length > 0 ? (yield E(Ku2, t)) && (yield g3(pu2(document.activeElement)), yield g3(Dy()), yield g3($y()), Kn2(e) && (yield* Ps(e.id, t[0].id))) : yield E(
        ws,
        new Error("Trying to show an empty list of hotspots.")
      );
    }
  }
  function* N_({ payload: e }) {
    if ((yield v3(zn2)) === x.HOTSPOTS) {
      const n = (yield v3(tt)).reduce((r2, i2) => {
        let o = e[i2.id];
        if (!o.error) {
          const {
            viewport: s,
            fixed: c,
            zIndex: l2,
            element: u2,
            boundingRect: d2,
            relativeBoundingRect: f2,
            padding: h2,
            iframeParent: y2
          } = o, { left: p2, top: m3, right: T2, bottom: _ } = d2, S2 = f2.left, A3 = f2.top, I3 = i2.offset_x_percentage * (T2 - p2), C3 = i2.offset_y_percentage * (_ - m3), { scrollX: O3, scrollY: L3 } = y2 ? window : { scrollX: 0, scrollY: 0 };
          o = {
            x: p2 + I3 + (h2?.left || 0) + O3,
            y: m3 + C3 + (h2?.top || 0) + L3,
            fixed: c,
            zIndex: l2,
            element: u2,
            boundingRect: d2,
            elementBoundingRect: u2.getBoundingClientRect(),
            isElementVisible: hh2({
              xOffset: i2.offset_x_percentage,
              yOffset: i2.offset_y_percentage,
              element: u2
            }),
            ...ih2(
              S2 + I3,
              A3 + C3,
              s.width,
              s.height
            )
          };
        }
        return r2[i2.id] = o, r2;
      }, {});
      yield g3(By(n)), yield E(kT);
    }
  }
  function* k_() {
    yield E(ve3, 1e4);
    const e = yield* Ht2();
    e && (delete e.navByADTT, yield* wt2(e));
  }
  function* id2({ payload: e }) {
    (yield v3(Bn2)).length > 0 && (yield qe2({
      continue: W2(
        (r2) => r2.type === he2.REMOVE_ACTIVE_ANNOTATIONS && r2.payload[0] === e.childId
      ),
      cancel: W2(
        (r2) => r2.type === le3.CANCEL_STEP && r2.payload.stepId === e.stepId
      )
    })).cancel || (yield g3(
      se4(
        Se3(
          Te3.STEP_END,
          e.stepId,
          e.params
        )
      )
    ));
  }
  function* O_(e) {
    const { contentType: t, step: n, childId: r2, nextChildId: i2, shouldEndFlow: o } = e.payload;
    if (t === x.SEQUENTIAL_HOTSPOTS)
      if (yield g3(Cs([r2])), yield g3(
        se4(
          ft2(
            Te3.CHILD_DEACTIVATED,
            n.id,
            r2,
            {
              ts: Date.now()
            }
          )
        )
      ), i2)
        yield* Ps(n.id, i2);
      else {
        if (yield g3(
          se4(
            Se3(Te3.STEP_COMPLETED, n.id, {
              shouldEndFlow: o
            })
          )
        ), pa2(n, mn2(n, r2))) {
          const s = yield* Ht2();
          yield* wt2({ ...s, navByADTT: true }), yield F3(k_);
        }
        yield E(
          id2,
          si3(n.id, r2, { shouldEndFlow: o })
        );
      }
  }
  function* od2({
    stepId: e,
    currentStepChildId: t,
    nextStepChildId: n
  }) {
    yield g3(Cs([t])), yield g3(
      se4(
        ft2(
          Te3.CHILD_DEACTIVATED,
          e,
          t,
          {
            ts: Date.now()
          }
        )
      )
    ), yield g3(Fo2({ stepChildId: t })), yield g3(Fo2({ stepChildId: n })), yield g3(
      se4(
        ft2(
          Te3.CHILD_ACTIVATED,
          e,
          n,
          {
            ts: Date.now()
          }
        )
      )
    ), yield* Ps(e, n);
  }
  function* R_(e) {
    const { step: t, stepChildId: n } = e.payload, r2 = yield v3(
      rs3,
      n
    );
    r2 && (yield E(od2, {
      stepId: t,
      currentStepChildId: n,
      nextStepChildId: r2
    }));
  }
  function* L_(e) {
    const { stepId: t, currentStepChildId: n, nextStepChildIndex: r2 } = e.payload, i2 = yield v3(
      Ii3,
      r2
    );
    if (!i2 || n === i2)
      return;
    yield (yield v3(
      Rf2,
      n,
      i2
    )).map((s) => g3(Fo2({ stepChildId: s }))), yield E(od2, {
      stepId: t,
      currentStepChildId: n,
      nextStepChildId: i2
    });
  }
  function* x_() {
    yield [
      F3(ee4, $3.START_CONTENT, w_),
      F3(
        ee4,
        he2.START_HANDLE_POSITION_UPDATES,
        N_
      ),
      F3(
        ee4,
        le3.ADVANCE_STEP_CHILD,
        O_
      ),
      F3(ee4, Yt.CLOSE_LAST_HOTSPOT, id2),
      F3(
        ee4,
        le3.RUN_PREV_STEP_CHILD,
        R_
      ),
      F3(ee4, he2.GO_TO_STEP, L_)
    ];
  }
  function* P_() {
    for (; ; ) {
      const e = window.location.href;
      (yield v3(_a2)) !== e && (yield g3(uT(e))), yield E(Io, 1e3);
    }
  }
  function* D_(e) {
    let t = null;
    if (e.payload.events.forEach((n) => {
      n.name === Y3.PAGE_VIEW && (t = n);
    }), t) {
      const n = t.attributes.url, r2 = yield v3(Ia2);
      n !== r2 && (yield g3(Ru2(n)), yield E(He3, "localStorage", H3, n));
    }
  }
  function* F_(e) {
    if (e.error) {
      const n = (e.payload && e.payload.extra ? e.payload.extra.id : null) || (yield v3(ce3));
      yield g3(dT(n, e.payload.message));
    }
  }
  function* U_(e) {
    const t = Object.keys(e.payload).filter(
      (n) => e.payload[n].error
    );
    if (t.length > 0) {
      const n = yield v3(ce3);
      for (const r2 of t)
        yield g3(
          fT(n, r2, e.payload[r2].errorMessage)
        );
    }
  }
  function* H_() {
    for (; ; ) {
      (yield E(Re3, "localStorage", m2)) || (yield W2($3.START_DEBUG)), yield E(He3, "localStorage", m2, true);
      const t = yield E(Re3, "localStorage", H3);
      yield g3(Ru2(t));
      const n = yield ut(P_), r2 = yield F3(
        ee4,
        [$3.START_ACTIVITY, $3.START_IDENTIFY],
        D_
      ), i2 = yield F3(
        ee4,
        U3.WILL_SHOW_CONTENT,
        F_
      ), o = yield F3(
        ee4,
        he2.SET_ANNOTATIONS_POSITIONS,
        U_
      );
      yield W2(Ge3.CLOSE_DEBUGGER), yield ot3(n), yield ot3(r2), yield ot3(i2), yield ot3(o), yield E(De2, "localStorage", m2);
    }
  }
  function* M_() {
    yield F3(H_);
  }
  function* $_({ payload: e }) {
    switch (yield g3(
      // This should probably have been named STEP_STARTED instead of STEP_SHOWN.
      se4(
        Se3(Te3.STEP_SHOWN, e.id)
      )
    ), e.attributes.action_type) {
      case j2.REDIRECT: {
        const t = window.location.href, {
          url: n,
          new_tab: r2,
          initiated_by_user: i2
        } = e.attributes.params;
        if (i2)
          return;
        if (St(n, t))
          yield g3(
            se4(
              Se3(Te3.STEP_COMPLETED, e.id)
            )
          ), yield g3(
            se4(
              Se3(Te3.STEP_END, e.id)
            )
          );
        else {
          yield qe2({
            wait: W2(U3.SENT_ACTIVITY_UPDATE),
            cancel: E(ve3, 1500)
          });
          const o = yield v3(En2);
          yield qe2({
            wait: E(mi3, o),
            cancel: E(ve3, Ae3)
          }), yield E(Xt, window, n, r2);
        }
        break;
      }
      default:
        yield g3(Wn2(new Error("Unknown step type.")));
    }
  }
  function* B_({ payload: { action: e, status: t } }) {
    switch (e.attributes.action_type) {
      case j2.WAIT_FOR_PAGE: {
        const n = window.location.href, { url: r2 } = e.attributes.params, i2 = yield* Ht2(), o = yield v3(es3), s = St(
          r2,
          o.url
        ), c = St(o.url, n), l2 = t === Te3.STEP_SHOWN || s && c, u2 = t === Te3.STEP_ATTEMPTED && i2 && i2.remainingPagesToCheck !== z2;
        l2 || u2 && St(r2, n) ? (yield g3(
          se4(
            Se3(Te3.STEP_COMPLETED, e.id)
          )
        ), yield g3(
          se4(
            Se3(Te3.STEP_END, e.id)
          )
        )) : yield g3(
          se4(
            Se3(Te3.STEP_ATTEMPTED, e.id)
          )
        );
        break;
      }
      case j2.REDIRECT: {
        let n = [
          Se3(Te3.STEP_SHOWN, e.id),
          Se3(Te3.STEP_COMPLETED, e.id),
          Se3(Te3.STEP_END, e.id)
        ].filter((r2) => t !== r2.type);
        t === Te3.STEP_ATTEMPTED && (n = [
          Se3(Te3.STEP_ATTEMPTED, e.id),
          ...n
        ]);
        for (const r2 of n)
          yield g3(se4(r2));
        break;
      }
      default:
        yield g3(Wn2(new Error("Unknown step type.")));
    }
  }
  function* sd2(e, t) {
    const n = window.location.href;
    St(e, n) ? t && (yield E(t)) : (yield E(ve3, 500), yield E(sd2, e, t));
  }
  function* V_({
    payload: { action: e, checklistId: t, itemId: n, actionIndex: r2 }
  }) {
    switch (e.attributes.action_type) {
      case j2.REDIRECT: {
        const i2 = window.location.href, { url: o, new_tab: s } = e.attributes.params;
        if (St(o, i2))
          yield g3(
            ao2(
              t,
              n,
              r2
            )
          );
        else {
          const c = yield v3(En2);
          yield qe2({
            wait: pt2([
              E(mi3, c),
              E(mi3, t)
            ]),
            cancel: E(ve3, Ae3)
          });
          const l2 = yield v3(yn2, t);
          yield E(
            He3,
            y,
            W,
            JSON.stringify({
              checklistId: t,
              itemId: n,
              actionIndex: r2,
              checklist: l2
            })
          ), yield E(Xt, window, o, s), yield E(sd2, o, function* () {
            yield g3(
              ao2(
                t,
                n,
                r2
              )
            ), yield E(De2, y, W);
          });
        }
        break;
      }
      case j2.SHOW_FLOW: {
        const { flowId: i2 } = e.attributes.params;
        i2 && (yield g3(xr2(i2))), yield g3(
          ao2(
            t,
            n,
            r2
          )
        );
        break;
      }
      default: {
        const i2 = new Error("Checklist action has an invalid action_type.");
        i2.extra = { action: e, checklistId: t, itemId: n, actionIndex: r2 }, yield g3(_u2(i2));
      }
    }
  }
  function* W_() {
    yield [
      F3(ee4, U3.RUN_ACTION, $_),
      F3(ee4, U3.RESUME_ACTION, B_),
      F3(
        ee4,
        re4.START_CHECKLIST_ACTION,
        V_
      )
    ];
  }
  function* q_() {
    (yield v3(zn2)) === x.SATISFACTION_SURVEY && (yield v3(Ve2)) === a.STARTED && (yield g3(Xy()));
  }
  function* K_(e) {
    const { score: t } = e.payload, n = yield v3(nt2), r2 = yield v3(Rt2), o = ht2(n, r2, {
      score: t,
      name: "NPS Score",
      id: "nps_score"
    });
    yield g3(Ue3(o.flowId, o)), yield g3(
      we2(
        {
          [`${C2}MostRecentNPSScore`]: t,
          [`${C2}NPSLastCollectedAt`]: Date.now()
        },
        [Be2(o)],
        false
      )
    );
  }
  function* Y_(e) {
    const { feedback: t } = e.payload, n = yield v3(nt2), r2 = yield v3(Rt2), i2 = ht2(n, r2, {
      feedback: t,
      name: "NPS Feedback",
      id: "nps_feedback"
    });
    yield g3(Ue3(i2.flowId, i2)), yield g3(
      we2(
        {
          [`${C2}MostRecentFeedback`]: t,
          [`${C2}NPSFeedbackLastCollectedAt`]: Date.now()
        },
        [Be2(i2)],
        false
      )
    );
  }
  function* z_() {
    const e = {}, t = `${C2}ClickedUpdateNPSScore`;
    e[t] = Date.now();
    const n = yield v3(nt2), r2 = yield v3(Rt2), i2 = ht2(n, r2, {
      clickedUpdateNPSScore: e[t],
      name: "NPS Clicked Update NPS Score",
      id: "nps_clicked_update_nps_score"
    });
    yield g3(Ue3(i2.flowId, i2)), yield g3(we2(e, [Be2(i2)], false));
  }
  function* X_() {
    const e = {}, t = `${C2}AskMeLaterSelectedAt`;
    e[t] = Date.now();
    const n = yield v3(nt2), r2 = yield v3(Rt2), i2 = ht2(n, r2, {
      askMeLaterSelectedAt: e[t],
      name: "NPS Ask Me Later Selected At",
      id: "nps_ask_me_later_selected_at"
    });
    yield g3(Ue3(i2.flowId, i2)), yield g3(we2(e, [Be2(i2)], false));
  }
  function* J_() {
    yield g3(yu2()), yield Io(G_), yield g3(Su2()), yield Io(j_), yield g3(Tu2());
  }
  function* Q_() {
    yield [
      F3(
        ee4,
        Ae4.QUANTITATIVE_QUESTION_SUBMITTED,
        K_
      ),
      F3(
        ee4,
        Ae4.QUALITATIVE_QUESTION_SUBMITTED,
        Y_
      ),
      F3(
        ee4,
        Ae4.ASK_ME_LATER_SELECTED,
        X_
      ),
      F3(
        ee4,
        Ae4.CLICKED_UPDATE_NPS_SCORE,
        z_
      ),
      F3(
        ee4,
        Ae4.START_COLLAPSING_SATISFACTION_SURVEY,
        J_
      ),
      F3(ee4, $3.START_CONTENT, q_)
    ];
  }
  function* Mo(e) {
    yield g3(Sn2(e.id, a.READY)), yield W2(
      (r2) => r2.type === re4.LOADED_CHECKLIST_CSS && e.id
    );
    const t = yield v3(ye3);
    yield t && t.type !== x.HOTSPOTS ? g3(Fi3()) : g3(Sn2(e.id, a.SHOWING)), (e.attributes && e.attributes.progress_state) !== $2.COMPLETED && (yield g3(fn(e.id)));
  }
  function* Z_({ payload: e }) {
    const { open_behavior: t } = e;
    switch (t) {
      case Q.CLOSED: {
        yield E(Mo, e);
        break;
      }
      case Q.OPENED: {
        yield g3(cl2(e));
        break;
      }
      case Q.OPEN_ONCE:
      default: {
        const n = `${F2}${e.id}`;
        Re3(y, n) ? yield E(Mo, e) : (He3(y, n, "1"), yield g3(cl2(e)));
        break;
      }
    }
  }
  function* eI({ payload: e }) {
    yield E(Mo, e), yield E(ve3, 1e3), yield g3(Ur2(e.id)), yield g3(Au2(e));
  }
  function* tI(e) {
    const { checklist: t } = e.payload, n = yield v3(Rt2), r2 = OE(t, n);
    yield g3(Ue3(t.id, r2)), yield g3(we2(null, [Be2(r2)], false));
  }
  function* nI(e) {
    const { checklistId: t, didCompleteChecklist: n } = e.payload, r2 = yield v3(Rt2), i2 = yield v3(yn2, t);
    yield g3(Sn2(i2.id, a.DISMISSED));
    const o = n ? xE(i2, r2) : LE(i2, r2);
    yield g3(Ue3(o.checklistId, o)), yield g3(we2({}, [Be2(o)], false));
  }
  function* rI() {
    const { userId: e } = yield v3(be2);
    yield g3(ir2(e, { _showChecklist: null }));
  }
  function* iI(e) {
    const { checklistId: t, itemId: n, actionIndex: r2 } = e.payload;
    yield g3(fn(t));
    const i2 = yield v3(Rt2);
    let o, s;
    if (o = yield v3(yn2, t), s = yield v3(Ff2, t, n), s || (o = e.payload.checklist, s = yield E(
      lt2,
      o.attributes.items,
      ({ id: c }) => c === n
    )), r2 === 0) {
      try {
        const l2 = s.conditions?.and[0]?.properties, u2 = `_checklist_item_${n}_completed`;
        s.state === "incomplete" && l2?.property === u2 && l2?.value === "true" && (yield g3(
          we2(
            { [`_checklist_item_${n}_completed`]: true },
            [],
            true
          )
        ));
      } catch {
      }
      const c = DE(o, s, i2);
      yield g3(Ue3(c.checklistId, c)), yield g3(we2({}, [Be2(c)], false));
    }
    for (let c = r2; c < s.actions.length; c++)
      yield g3(aS(s.actions[c], t, n, c)), yield W2(
        ({ type: l2, payload: u2 }) => l2 === re4.COMPLETED_CHECKLIST_ACTION && u2.itemId === n
      );
  }
  function* oI() {
    const e = yield v3(gn2);
    e.length > 0 && (yield pt2(
      e.filter((t) => b2.includes(t.status)).map((t) => g3(Sn2(t.id, a.HIDING)))
    ));
  }
  function* sI() {
    const e = yield v3(
      os2,
      a.HIDING
    );
    e.length > 0 && (yield pt2(
      e.map(
        (t) => g3(Sn2(t.id, a.READY))
      )
    ), yield g3(
      Sn2(e[0].id, a.SHOWING)
    ), e[0].shouldTryExpandChecklist && (yield g3(Ur2(e[0].id)), yield g3(Cu2(e[0].id, false))));
  }
  function* cI() {
    yield [
      F3(ee4, re4.START_CHECKLIST, Z_),
      F3(ee4, re4.HIDE_CHECKLISTS, oI),
      F3(
        ee4,
        re4.UNHIDE_CHECKLISTS,
        sI
      ),
      F3(
        ee4,
        re4.ANIMATE_IN_CHECKLIST,
        eI
      ),
      F3(
        ee4,
        re4.CONFIRM_DISMISS_CHECKLIST,
        nI
      ),
      F3(
        Ze2,
        re4.START_CHECKLIST_ITEM,
        iI
      ),
      F3(
        Ze2,
        re4.CLEAR_FORCE_SHOWN_CHECKLIST,
        rI
      ),
      F3(
        ee4,
        re4.SEND_CHECKLIST_SHOWN_EVENT,
        tI
      )
    ];
  }
  function* lI({ payload: e }) {
    const { type: t, event: n } = e, r2 = yield v3(Rt2), i2 = { ...n, sessionId: r2 };
    yield g3(Ue3(t, i2));
  }
  function* aI() {
    yield [
      F3(
        ee4,
        $3.START_OPEN_BUILDER_EVENT,
        lI
      )
    ];
  }
  function uI() {
    const e = Re3(y, U2);
    let t;
    if (e)
      try {
        t = JSON.parse(e);
      } catch {
        return {};
      }
    if (t) {
      const {
        _testContentId: n,
        _testContentUrl: r2,
        ...i2
      } = t;
      return De2(y, U2), De2(y, G), He3(y, U2, JSON.stringify(i2)), { _testContentId: null };
    }
    return {};
  }
  function dI() {
    const e = Re3(y, U2);
    let t;
    if (e)
      try {
        t = JSON.parse(e);
      } catch {
        return window.location.href;
      }
    if (t) {
      const { _testContentUrl: n } = t;
      return n;
    }
    return window.location.href;
  }
  function* fI() {
    const e = uI();
    yield g3(Pr2(e, true)), yield E(Os, e, [], false);
    const t = Tn2(
      window.location.href,
      "appcuesTestContentId"
    );
    yield E(Xt, window, t);
  }
  function* pI() {
    const e = dI();
    yield E(Xt, window, e);
  }
  function* hI() {
    yield [
      F3(ee4, Fn2.CANCEL_TEST, fI),
      F3(ee4, Fn2.RESET_TEST, pI)
    ];
  }
  function* mI(e) {
    if (e.checklists && e.checklists.length > 0) {
      const t = yield v3(Rt2), n = [], i2 = ((yield v3(gn2)) || []).reduce((d2, f2) => ({
        ...d2,
        [f2.id]: f2
      }), {}), o = e.checklists.map(({ checklist: d2, state: f2 }) => {
        if (f2.status === $2.DISMISSED)
          return { checklist: d2 };
        const h2 = i2[d2.id];
        if (f2.changed && (f2.status === $2.COMPLETED || f2.status === $2.SHOWN_MANUALLY && f2.items.every((T2) => T2.is_completed))) {
          const T2 = RE(d2, t);
          n.push({ checklistId: d2.id, event: T2 });
        }
        const y2 = h2 && h2.attributes && h2.attributes.progress_state;
        let p2 = h2 && h2.status;
        if (f2.status === $2.SHOWN_MANUALLY && y2 !== $2.SHOWN_MANUALLY) {
          const T2 = PE(d2, t);
          n.push({ checklistId: d2.id, event: T2 }), p2 = null;
        }
        const m3 = (d2.items || []).map((T2, _) => {
          const S2 = f2.items[_];
          if (S2.is_completed && S2.changed) {
            const C3 = FE(
              d2,
              T2,
              t
            );
            n.push({
              checklistId: d2.id,
              event: C3
            });
          }
          const A3 = S2.is_completed ? "complete" : "incomplete", I3 = S2.changed ? S2.is_completed ? "incomplete" : "complete" : A3;
          return {
            ...T2,
            prev_state: I3,
            state: A3
          };
        });
        return {
          ...d2,
          status: p2,
          progress_state: f2.status,
          items: m3
        };
      });
      for (const d2 of n)
        yield (yield v3(
          Uf2,
          d2.checklistId
        )) === a.HIDING ? g3(Cu2(d2.checklistId, true)) : g3(Ur2(d2.checklistId)), yield g3(Ue3(d2.checklistId, d2.event)), yield g3(
          we2(
            {},
            [Be2(d2.event)],
            false
          )
        );
      yield g3(sl2(o));
      let s = e.contents;
      if (e.content && e.content.length > 0) {
        const { contents: d2 } = Ns(e.content);
        s = d2;
      }
      if (s && s.length > 0) {
        const d2 = s[0].attributes && s[0].attributes.steps, f2 = lt2(
          Object.keys(d2 || {}),
          (h2) => d2[h2].index === 0
        );
        d2 && d2[f2] && d2[f2].step_type && d2[f2].step_type !== x.HOTSPOTS && (yield W2(re4.HIDE_CHECKLISTS));
      }
      const c = yield v3(gn2), l2 = yield v3(
        os2,
        a.SHOWING
      ), u2 = l2[0] && l2[0].attributes && l2[0].attributes.id;
      if (c.every((d2) => d2.status === a.HIDING))
        return;
      c.every((d2) => !d2.status) && (yield g3(ol2(o[0]))), u2 && u2 !== o[0].id && (yield g3(
        Sn2(u2, a.READY)
      ), o[0] && o[0].status !== a.SHOWING && (yield g3(ol2(o[0]))));
    } else
      yield g3(sl2([]));
  }
  function* EI() {
    let e = [], t = {};
    const n = /* @__PURE__ */ new Map();
    yield Ir2(
      U3.SENT_REQUEST,
      ({ payload: { requestId: r2, pageViewEvent: i2 } }) => {
        e = [r2, ...e], i2 && (t = {
          ...t,
          [r2]: i2?.attributes?.url
        });
      }
    ), yield Ir2(
      [$3.START_HANDLE_MESSAGE, $3.MESSAGE_TIMEOUT],
      function* ({ type: i2, payload: o }) {
        const s = i2 === $3.MESSAGE_TIMEOUT ? { request_id: o } : o;
        if (s.type === Le2) {
          const {
            type: d2,
            status: f2 = "success",
            ...h2
          } = s;
          yield g3(f2 === "error" ? {
            type: fi3.LAUNCHPAD_SEARCH_ERROR
          } : {
            type: fi3.LAUNCHPAD_SEARCH_RESPONSE,
            payload: h2
          });
        } else i2 === $3.START_HANDLE_MESSAGE && (yield F3(mI, s));
        const c = yield v3(
          es3
        ), l2 = s.qualification_reason === X2.EVENT_TRIGGER;
        (c.url !== window.location.href || !c.complete) && !l2 && (yield W2((d2) => d2.type === U3.CHECKED_FOR_INITIAL_CONTENT && d2.payload.url === window.location.href && d2.payload.complete));
        const u2 = s.request_id;
        u2 && (n.set(u2, s), yield qe2({
          cancel: W2([
            $3.START_HANDLE_MESSAGE,
            $3.MESSAGE_TIMEOUT
          ]),
          handleMessage: E(function* () {
            if (e[0] === u2)
              for (; e.length > 0; ) {
                const [f2, ...h2] = e;
                e = h2;
                const y2 = n.get(f2) || {};
                n.delete(f2);
                const {
                  experiences: p2 = [],
                  // v1 format
                  experiments: m3 = [],
                  profile: T2,
                  contents: _,
                  // v1 format
                  content: S2,
                  // v2 format
                  performed_qualification: A3
                } = y2;
                yield g3(Fm(m3)), T2 && Object.keys(T2).length > 0 && (yield g3(Pr2(T2, true)));
                let I3 = _, C3 = p2;
                if (S2 && S2.length > 0) {
                  const { contents: R3, experiences: K3 } = Ns(S2);
                  I3 = R3, C3 = K3;
                }
                C3.some(
                  (R3) => R3.type === B2.NPS || R3.type === B2.FLOW
                ) && (yield g3(Fi3()), yield g3(xu2()));
                const L3 = y2.qualification_reason === X2.PAGE_VIEW;
                C3.length > 0 && // documentMode only exist in IE browser otherwise it will return undefined
                // ref: https://www.geeksforgeeks.org/html-dom-documentmode-property/
                // ref: https://www.w3schools.com/jsref/prop_doc_documentmode.asp
                !window.document?.documentMode && (!L3 || window.location.href === t[f2]) && (yield g3(Is(C3)));
                const H4 = A3 && I3 && I3.length > 0;
                if (L3 && H4 && window.location.href === t[f2] || !L3 && H4) {
                  e = [], n.clear();
                  const R3 = I3.map((G2) => G2.id), K3 = I3.reduce(
                    (G2, ue3) => (G2[ue3.id] = ue3, G2),
                    {}
                  );
                  return yield g3(hs2(R3, K3)), yield g3(
                    Va2(
                      window.location.href,
                      l2,
                      f2
                    )
                  );
                }
              }
          })
        }));
      }
    );
  }
  function gI(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[t] = n, e;
  }
  function yI(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {}, r2 = Object.keys(n);
      typeof Object.getOwnPropertySymbols == "function" && (r2 = r2.concat(Object.getOwnPropertySymbols(n).filter(function(i2) {
        return Object.getOwnPropertyDescriptor(n, i2).enumerable;
      }))), r2.forEach(function(i2) {
        gI(e, i2, n[i2]);
      });
    }
    return e;
  }
  function* vl2() {
    let e = yield v3(dt2);
    return (yield E(bu2, e)) || (yield E(Xu2), e = yield v3(dt2)), e;
  }
  function* OI() {
    (yield E(Mi3)) || (yield W2(U3.INITIALIZE));
    const t = yield v3(be2);
    ne4.defined(t.userId) || (yield W2(U3.COMPLETED_IDENTIFY));
    let n = yield E(vl2);
    const r2 = kr((i2) => (NI((o) => {
      const { experienceId: s, integrationId: c, query: l2 } = o.detail;
      $o.push(s), i2({
        type: Le2,
        data: {
          integration_id: c,
          query: l2,
          experience_id: s
        }
      });
    }), () => {
    }));
    for (n.transport.module.subscribeToError(
      () => {
        const i2 = Ds();
        ad2(i2);
      },
      n,
      $r2.UserActivity
    ); ; ) {
      const { data: i2 } = yield W2(r2);
      n = yield E(vl2), yield E(US, n, Le2, i2);
    }
  }
  function RI({ payload: e }) {
    const t = Ds();
    kI(t, e);
  }
  function LI() {
    const e = Ds();
    ad2(e);
  }
  function* xI() {
    yield [
      ut(OI),
      F3(
        Ze2,
        fi3.LAUNCHPAD_SEARCH_RESPONSE,
        RI
      ),
      F3(
        Ze2,
        fi3.LAUNCHPAD_SEARCH_ERROR,
        LI
      )
    ];
  }
  function* UI() {
    const e = yield Jd2("dispatch"), n = (yield E(FI))(e);
    yield g3(xm(n)), yield g3(Dm());
  }
  function* Vt3() {
    const e = yield v3(No), t = yield v3(jf2);
    return t && (yield W2(({ type: n }) => n === U3.OPEN_BUILDER_INITIALIZED)), !e && !t && (yield g3(Pm()), yield W2(({ type: n }) => n === U3.OPEN_BUILDER_INITIALIZED)), yield v3(No);
  }
  function* Fs({ payload: e }) {
    const t = yield E(Vt3);
    t && (yield E(t.pause, e));
  }
  function* ud2({ payload: e }) {
    const t = yield E(Vt3);
    t && (yield E(t.resume, e));
  }
  function* dd2(e, t) {
    yield g3(Pi3(e.id, Xe3.EXPERIENCES)), !(yield E(
      Ja2,
      e.id,
      Xe3.EXPERIENCES
    )) && t.show(e);
  }
  function gi3(e) {
    const t = {
      experiences: [],
      launchpads: []
    };
    return e.forEach((n) => {
      const r2 = n.type === "launchpad" ? "launchpads" : "experiences";
      t[r2].push(n);
    }), t;
  }
  function* HI({ payload: e }) {
    const t = yield E(Vt3);
    let n = e;
    const r2 = n.some(
      (o) => o.type === B2.NPS || o.type === B2.FLOW
    ), i2 = n.some(
      (o) => o.type === "launchpad"
    );
    if (i2) {
      yield Promise.resolve().then(() => (init_index_DVtntSTl(), index_DVtntSTl_exports));
      const o = yield v3(ye3);
      if (!(o?.type === x.HOTSPOTS) && o) {
        const { experiences: c, launchpads: l2 } = gi3(n);
        n = c, yield g3(wr2(l2));
      }
    }
    if (r2 && i2) {
      const { experiences: o, launchpads: s } = gi3(n);
      yield g3(wr2(s)), n = o;
    }
    r2 && (yield g3(Fi3())), yield pt2(
      n.map((o) => E(dd2, o, t))
    );
  }
  function* MI() {
    const e = yield E(Vt3);
    e && e.stopAll();
  }
  function* $I(e, t) {
    yield (yield E(t.isExperiencePaused, e.id)) ? E(ud2, { payload: e.id }) : E(dd2, e, t);
  }
  function* BI() {
    const e = yield v3(Kf2);
    if (e.length <= 0) return;
    const t = yield E(Vt3);
    yield pt2(
      e.map((n) => E($I, n, t))
    ), yield g3(wr2([]));
  }
  function* VI() {
    const e = yield E(Vt3), t = yield E(e.getRunningExperiences), { launchpads: n } = gi3(t);
    n.length <= 0 || (yield pt2(
      n.map(
        (r2) => E(Fs, { payload: r2.id })
      )
    ), yield g3(wr2(n)));
  }
  function* WI() {
    if ((yield v3(ye3)).type === x.HOTSPOTS) return;
    const n = yield E(Vt3), r2 = yield E(n.getRunningExperiences), { launchpads: i2 } = gi3(r2);
    i2.length <= 0 || (yield pt2(
      i2.map(
        (o) => E(Fs, { payload: o.id })
      )
    ), yield g3(wr2(i2)));
  }
  function* GI({ payload: e }) {
    const { type: t, event: n } = e, r2 = n.experienceType === B2.NPS || n.experienceType === B2.FLOW, i2 = K2.includes(t);
    if (r2 && i2) {
      const o = yield E(Vt3);
      yield E(o.stop, n.experienceId), yield g3(Nr()), yield g3(br2());
    }
  }
  function* jI() {
    yield [
      F3(
        Ze2,
        U3.INITIALIZE_OPEN_BUILDER,
        UI
      ),
      F3(ee4, Je3.PAUSE_EXPERIENCE, Fs),
      F3(
        ee4,
        Je3.RESUME_EXPERIENCE,
        ud2
      ),
      F3(
        Ze2,
        Je3.SHOW_EXPERIENCES,
        HI
      ),
      F3(ee4, $3.START_RESET, MI),
      F3(
        ee4,
        Je3.UNHIDE_LAUNCHPADS,
        BI
      ),
      F3(ee4, Je3.HIDE_LAUNCHPADS, VI),
      F3(
        ee4,
        $3.PREPARE_CONTENT,
        WI
      ),
      F3(
        ee4,
        $3.START_OPEN_BUILDER_EVENT,
        GI
      )
    ];
  }
  function* qI() {
    if (window.AppcuesSettings) {
      let e = window.location.href;
      const { enableURLDetection: t } = window.AppcuesSettings;
      for (; t; )
        window.location.href !== e && (window.Appcues.page(), e = window.location.href), yield E(ve3, 500);
    }
  }
  function* KI() {
    yield [F3(qI)];
  }
  function* fd2(e, t) {
    if (!e || !t) {
      yield g3(bl2({ collisionMode: false, checklist: null }));
      return;
    }
    const n = e.styles.position.toLowerCase(), { position: r2, xOffset: i2, yOffset: o } = JI(t);
    yield g3(
      bl2({
        collisionMode: n === r2,
        checklist: e,
        collisionCoordinates: {
          x: i2,
          y: o
        }
      })
    );
  }
  function* QI() {
    const e = yield qe2({
      checklist: W2(re4.UPDATE_CHECKLISTS),
      experiences: W2(Je3.SHOW_EXPERIENCES)
    }), t = yield e.checklist ? W2(Je3.SHOW_EXPERIENCES) : W2(re4.UPDATE_CHECKLISTS), n = zI(e, t), r2 = XI(e, t);
    yield E(fd2, n, r2);
  }
  function* ZI({ payload: { checklistId: e, forceClose: t } }) {
    const n = yield v3(yn2, e);
    if (t) {
      yield g3(fn(e));
      return;
    }
    const r2 = n.viewState === q2.EXPANDED;
    r2 || (yield E(wI)), yield g3(r2 ? fn(e) : Ur2(e));
  }
  function* pd2({ payload: { collisionMode: e, checklist: t } }) {
    if (!e) {
      yield E(AI);
      return;
    }
    const n = t.items.filter(
      (i2) => i2.state === "complete"
    ).length, r2 = yield qe2({
      received: pt2([
        W2(Bi3),
        E(II, {
          name: t.text_tokens.beacon_text,
          id: t.id,
          totalItems: t.items.length,
          completedItems: n
        })
      ]),
      cancel: E(ve3, 100)
    });
    Object.prototype.hasOwnProperty.call(r2, "cancel") && (yield E(pd2, {
      payload: { collisionMode: e, checklist: t }
    }));
  }
  function* eA() {
    const e = kr((t) => (vI((n) => {
      t({
        type: $i3,
        payload: {
          checklistId: n.detail.checklistId,
          forceClose: n.detail.forceClose
        }
      });
    }), bI(() => {
      t({
        type: Bi3
      });
    }), () => {
    }));
    for (; ; ) {
      const t = yield W2(e);
      yield g3(t);
    }
  }
  function* tA() {
    for (yield W2(xi3.SET_COLLISION_MODE); ; ) {
      const {
        payload: [e]
      } = yield W2(re4.UPDATE_CHECKLISTS), t = yield E(Vt3);
      if (!t) return;
      let n = null, r2 = 0;
      const i2 = 10;
      for (; !n && r2 <= i2; )
        yield ve3(100), n = t.getRunningExperiences().find(
          (s) => s.type === "launchpad"
        ), r2 += 1;
      n && (yield E(fd2, e, n));
    }
  }
  function* nA() {
    yield [
      F3(eA),
      F3(tA),
      F3(QI),
      F3(Ir2, $i3, ZI),
      F3(
        Ir2,
        xi3.SET_COLLISION_MODE,
        pd2
      )
    ];
  }
  var Ud2, Ws, _n2, Ll2, xl2, Co2, Pl2, Dl2, Fl2, Hd2, Ul2, Pe3, Hl2, Md2, M3, _o2, $d2, Ml2, Wd2, Gd2, Gs, Bl2, jd2, Vl2, ai3, Jo2, Wl2, Gl2, jl2, qd2, Qo2, ql2, Kl2, Yl2, zl2, Xl2, Jl2, Ql2, Kd2, Zl2, et2, Yd2, We2, Me3, js, ni3, ef2, ta2, tf2, na2, ra2, nf2, Gn2, ia2, _i3, of2, la2, yr2, ri3, cf2, lf2, df2, ff2, ne4, jn, qn2, da2, An, mn2, vo2, fa2, Kn2, pa2, Or2, Gt2, pf2, Ln2, Ft2, ct, $n2, ha2, hf2, En2, nt2, ce3, ma2, mf2, ye3, Ef2, dt2, gf2, $t2, yf2, be2, Ea2, Sf2, Tf2, Cf2, _f2, Rt2, Yn2, If2, ii3, Af2, es3, Rr, vf2, ts3, bf2, zn2, Ve2, Lr2, wf2, ns2, ga2, Nf2, st3, zt3, tt, Ot3, kf2, Ii3, Of2, ya2, rs3, Rf2, Sa2, is3, Ai3, Bn2, Ta2, Lf2, Xn2, Ca2, xf2, _a2, Ia2, Pf2, Df2, gn2, yn2, os2, Ff2, Uf2, Hf2, Mf2, Aa2, $f2, Bf2, Vf2, wo2, Wf2, va2, Gf2, No, jf2, qf2, Kf2, ss3, Vn2, qi3, pp2, gp2, Ap2, vp2, bp2, qs, wp2, Np2, Qn2, Zn2, zs, kp2, er2, tr2, Qs, Lp2, ko2, nr2, Mp2, ec, Yi3, tc, a2, ar2, nc, bi3, zi3, rc, Gp2, jp2, ic, oc, wi3, xa2, ki3, Zp2, eh2, cc, At2, vh2, bh2, wh2, Nh2, Ji3, uc, kh2, Oh2, ur2, dr2, Rh2, xh2, qr2, Qi3, dc2, Zi3, fc, eo2, pc2, $a2, On2, hc2, mc2, to2, Ec2, Vh2, Ut3, yc2, Kh2, Yh2, Xh2, Jh2, $3, U3, le3, di3, Ae4, he2, Yt, re4, Ge3, Fn2, vt3, Je3, Ct2, xi3, fi3, tm, ir2, nm, rm, Ue3, im, om, we2, sm, cm, lm, am, um, dm, fm, pm, xr2, hm, Va2, ps2, Wa2, vr2, se4, mm, Em, gm, ym, Tc2, Cc2, Pr2, Sm, hs2, Tm, Wn2, Cm, _m, Im, Am, Ga2, _c2, Ic2, vm, bm, wm, Nm, km, ja2, Om, Ac2, vc2, Rm, Lm, bc2, xm, Pm, Dm, Fm, Pi3, Um, Hm, wc2, Nc2, Mm, kc2, Oc2, Gm, qm, Kr2, Zt3, fr2, zm, Xm, Rc2, eE, nE, iE, ht2, uE, Xe3, WE, GE, jE, qE, KE, YE, XE, JE, QE, ZE, eu2, tg, ng, ro2, Uc2, Yr2, Hc2, io2, Mc2, sg, cg, lg, ag, ug, $c2, dg, fg, pg, Vc2, yg, Wc2, Cg, _g, Do, gs2, vg, bg, wg, Ng, kg, Og, Rg, Lg, zr2, Gc2, so2, Ug, Hg, Xr2, Kc2, Mg, Tr, Yc2, zc2, cu2, lu2, pr2, zg, Xg, au2, Ts, Qg, Zg, ey, sy, tl2, fy, py, co2, nl2, Jr2, my, Ey, gy, yy, Sy, dn, Ty, Cy, fu2, _y, Iy, Jt3, Ay, pu2, vy, hu2, Fo2, by, wy, Ny, Ly, Py, Dy, Fy, si3, Uy, Hy, Cs, My, $y, il2, By, Vy, Eu2, Wy, Gy, jy, qy, Ky, Yy, Xy, Jy, yu2, Qy, Su2, Tu2, Zy, eS, tS, nS, rS, ol2, Sn2, sl2, Fi3, br2, cl2, Ur2, fn, Cu2, oS, sS, cS, lS, _u2, Iu2, aS, ao2, uS, dS, fS, Au2, mS, ES, gS, uo2, Cr2, TS, Er2, pn, CS, It2, _S, IS, rt3, xt2, Uo2, AS, Qr2, vu2, vS, pi3, bS, hr2, Zr2, wS, _s, kS, OS, xn2, RS, LS, xS, Hr2, PS, Mr2, $r2, US, GS, jS, qS, Ho, zS, je, Ou2, XS, JS, QS, ZS, eT, tT, nT, lT, aT, uT, Ru2, dT, fT, Lu2, pT, hT, Is, wr2, Nr, xu2, Pu2, mT, As, vs2, ET, FT, gt2, cC, lC, uC, ml2, YC, nd2, Sl2, Tl2, _l2, l_, Il2, f_, p_, h_, ho2, nn2, m_, E_, y_, S_, T_, C_, __, mo2, rn2, G_, j_, cd2, ld2, $i3, Bi3, SI, TI, CI, _I, Br2, II, sA, AI, cA, lA, vI, aA, bI, wI, NI, kI, ad2, $o, Ds, PI, DI, FI, bl2, YI, zI, XI, JI, rA, iA, bt2, sr2, Eo2, Bo2, wl2, hn, Vi3, Nl2, ti3, uA;
  var init_index_DIKlkbGK = __esm({
    "node_modules/@appcues/web-sdk/build/index.DIKlkbGK.js"() {
      init_index_npm_CbNGHq_b();
      Ud2 = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r2 in n)
            Object.prototype.hasOwnProperty.call(n, r2) && (e[r2] = n[r2]);
        }
        return e;
      };
      Ws = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e;
      } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      };
      _n2 = function(t) {
        return "@@redux-saga/" + t;
      };
      Ll2 = /* @__PURE__ */ _n2("TASK");
      xl2 = /* @__PURE__ */ _n2("HELPER");
      Co2 = /* @__PURE__ */ _n2("MATCH");
      Pl2 = /* @__PURE__ */ _n2("CANCEL_PROMISE");
      Dl2 = /* @__PURE__ */ _n2("SAGA_ACTION");
      Fl2 = /* @__PURE__ */ _n2("SELF_CANCELLATION");
      Hd2 = function(t) {
        return function() {
          return t;
        };
      };
      Ul2 = /* @__PURE__ */ Hd2(true);
      Pe3 = function() {
      };
      Hl2 = function(t) {
        return t;
      };
      Md2 = Object.prototype.hasOwnProperty;
      M3 = {
        undef: function(t) {
          return t == null;
        },
        notUndef: function(t) {
          return t != null;
        },
        func: function(t) {
          return typeof t == "function";
        },
        number: function(t) {
          return typeof t == "number";
        },
        string: function(t) {
          return typeof t == "string";
        },
        array: Array.isArray,
        object: function(t) {
          return t && !M3.array(t) && (typeof t > "u" ? "undefined" : Ws(t)) === "object";
        },
        promise: function(t) {
          return t && M3.func(t.then);
        },
        iterator: function(t) {
          return t && M3.func(t.next) && M3.func(t.throw);
        },
        iterable: function(t) {
          return t && M3.func(Symbol) ? M3.func(t[Symbol.iterator]) : M3.array(t);
        },
        task: function(t) {
          return t && t[Ll2];
        },
        observable: function(t) {
          return t && M3.func(t.subscribe);
        },
        buffer: function(t) {
          return t && M3.func(t.isEmpty) && M3.func(t.take) && M3.func(t.put);
        },
        pattern: function(t) {
          return t && (M3.string(t) || (typeof t > "u" ? "undefined" : Ws(t)) === "symbol" || M3.func(t) || M3.array(t));
        },
        channel: function(t) {
          return t && M3.func(t.take) && M3.func(t.close);
        },
        helper: function(t) {
          return t && t[xl2];
        },
        stringableFunc: function(t) {
          return M3.func(t) && zo2(t, "toString");
        }
      };
      _o2 = {
        assign: function(t, n) {
          for (var r2 in n)
            zo2(n, r2) && (t[r2] = n[r2]);
        }
      };
      $d2 = {
        from: function(t) {
          var n = Array(t.length);
          for (var r2 in t)
            zo2(t, r2) && (n[r2] = t[r2]);
          return n;
        }
      };
      Ml2 = /* @__PURE__ */ Vd2();
      Wd2 = function(t) {
        throw t;
      };
      Gd2 = function(t) {
        return { value: t, done: true };
      };
      Gs = function(t) {
        return new Error(`
  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug
  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.
  Error: ` + t + `
`);
      };
      Bl2 = function(t, n) {
        return (t ? t + "." : "") + "setContext(props): argument " + n + " is not a plain object";
      };
      jd2 = function(t) {
        return function(n) {
          return t(Object.defineProperty(n, Dl2, { value: true }));
        };
      };
      Vl2 = /* @__PURE__ */ _n2("IO");
      ai3 = "TAKE";
      Jo2 = "PUT";
      Wl2 = "ALL";
      Gl2 = "RACE";
      jl2 = "CALL";
      qd2 = "CPS";
      Qo2 = "FORK";
      ql2 = "JOIN";
      Kl2 = "CANCEL";
      Yl2 = "SELECT";
      zl2 = "ACTION_CHANNEL";
      Xl2 = "CANCELLED";
      Jl2 = "FLUSH";
      Ql2 = "GET_CONTEXT";
      Kd2 = "SET_CONTEXT";
      Zl2 = `
(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)`;
      et2 = function(t, n) {
        var r2;
        return r2 = {}, r2[Vl2] = true, r2[t] = n, r2;
      };
      Yd2 = function(t) {
        return ge3(Me3.fork(t), M3.object, "detach(eff): argument must be a fork effect"), t[Qo2].detached = true, t;
      };
      W2.maybe = function() {
        var e = W2.apply(void 0, arguments);
        return e[ai3].maybe = true, e;
      };
      W2.maybe;
      g3.resolve = function() {
        var e = g3.apply(void 0, arguments);
        return e[Jo2].resolve = true, e;
      };
      g3.sync = /* @__PURE__ */ Xo2(g3.resolve);
      We2 = function(t) {
        return function(n) {
          return n && n[Vl2] && n[t];
        };
      };
      Me3 = {
        take: /* @__PURE__ */ We2(ai3),
        put: /* @__PURE__ */ We2(Jo2),
        all: /* @__PURE__ */ We2(Wl2),
        race: /* @__PURE__ */ We2(Gl2),
        call: /* @__PURE__ */ We2(jl2),
        cps: /* @__PURE__ */ We2(qd2),
        fork: /* @__PURE__ */ We2(Qo2),
        join: /* @__PURE__ */ We2(ql2),
        cancel: /* @__PURE__ */ We2(Kl2),
        select: /* @__PURE__ */ We2(Yl2),
        actionChannel: /* @__PURE__ */ We2(zl2),
        cancelled: /* @__PURE__ */ We2(Xl2),
        flush: /* @__PURE__ */ We2(Jl2),
        getContext: /* @__PURE__ */ We2(Ql2),
        setContext: /* @__PURE__ */ We2(Kd2)
      };
      js = { done: true, value: void 0 };
      ni3 = {};
      ef2 = "Channel's Buffer overflow!";
      ta2 = 1;
      tf2 = 2;
      na2 = 3;
      ra2 = 4;
      nf2 = { isEmpty: Ul2, put: Pe3, take: Pe3 };
      Gn2 = {
        none: function() {
          return nf2;
        },
        fixed: function(t) {
          return Gr2(t, ta2);
        },
        dropping: function(t) {
          return Gr2(t, tf2);
        },
        sliding: function(t) {
          return Gr2(t, na2);
        },
        expanding: function(t) {
          return Gr2(t, ra2);
        }
      };
      ia2 = [];
      _i3 = 0;
      of2 = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r2 in n)
            Object.prototype.hasOwnProperty.call(n, r2) && (e[r2] = n[r2]);
        }
        return e;
      };
      la2 = "@@redux-saga/CHANNEL_END";
      yr2 = { type: la2 };
      ri3 = function(t) {
        return t && t.type === la2;
      };
      cf2 = "invalid buffer passed to channel factory function";
      lf2 = "Saga was provided with an undefined action";
      df2 = Object.prototype.toString;
      ff2 = [
        "Object",
        "Arguments",
        "Function",
        "String",
        "Number",
        "Date",
        "RegExp",
        "Error"
      ];
      ne4 = {};
      ff2.forEach((e) => {
        ne4[e.toLowerCase()] = ua2(e);
      });
      ne4.array = Array.isArray || ua2("Array");
      ne4.undefined = (e) => typeof e > "u";
      ne4.defined = (e) => !ne4.undefined(e) && e !== null;
      ne4.inArray = (e, t) => {
        let n = e.length;
        for (; n--; )
          if (e[n] === t)
            return true;
        return false;
      };
      jn = (e) => e && e.type === x.JOURNEY;
      qn2 = P2((e) => jn(e) ? e.attributes.steps : { [e.id]: e }, {});
      da2 = P2((e) => jn(e) ? Object.keys(qn2(e)).length : 1, 0);
      An = P2((e) => {
        const t = e.attributes;
        return t.children || t.steps || t.hotspots || t.annotations;
      }, []);
      mn2 = P2((e, t) => {
        let n = -1;
        return An(e).forEach((r2, i2) => {
          r2.id === t && (n = i2);
        }), n;
      }, -1);
      vo2 = P2((e, t) => An(e)[t]);
      fa2 = P2((e, t) => {
        const n = e.step || e;
        return lt2(
          An(n),
          (r2) => r2.id === t
        );
      });
      Kn2 = P2(
        (e) => e.attributes.sequential,
        false
      );
      pa2 = P2((e, t) => {
        const n = vo2(e, t);
        return e.type === x.HOTSPOTS && Kn2(e) && n.ui_conditions && n.ui_conditions.next && n.ui_conditions.next.type === ie3.WAIT_FOR_MOUSE_EVENT;
      }, false);
      Or2 = P2((e) => e.type === x.ACTION && e.attributes.action_type === j2.REDIRECT, false);
      Gt2 = P2((e) => e.type === x.ACTION && e.attributes.action_type === j2.WAIT_FOR_PAGE, false);
      pf2 = P2(
        (e) => e.type === x.ACTION,
        false
      );
      Ln2 = P2(
        (e) => e.type !== x.SATISFACTION_SURVEY
      );
      Ft2 = P2((e, t) => {
        if (jn(e)) {
          let n;
          const r2 = qn2(e);
          return Object.keys(r2).forEach((i2) => {
            const o = r2[i2];
            o.index === t && (n = o);
          }), n.step;
        }
        return e;
      });
      ct = P2((e, t) => jn(e) ? qn2(e)[t].step : e);
      $n2 = P2((e, t) => jn(e) ? qn2(e)[t].index : t === e.id ? 0 : -1, -1);
      ha2 = P2((e, t) => {
        let n = e;
        return n = Object.keys(n || {}).map((r2) => n[r2]), lt2(n, (r2) => fa2(r2, t));
      });
      hf2 = P2((e, t) => {
        let n = e;
        return n = Object.keys(n || {}).map(
          (r2) => n[r2]
        ), lt2(n, (r2) => {
          const i2 = qn2(r2);
          return ha2(i2, t);
        });
      });
      En2 = P2((e) => e.currentContent.flowId);
      nt2 = P2(
        (e) => e.content[e.currentContent.flowId]
      );
      ce3 = P2((e) => e.currentContent.stepId);
      ma2 = P2(
        (e) => e.previousActiveElement
      );
      mf2 = P2((e) => e.forceFocus, true);
      ye3 = P2((e) => ct(
        nt2(e),
        ce3(e)
      ));
      Ef2 = P2((e) => e.settings.styling, {});
      dt2 = P2((e) => e);
      gf2 = P2((e) => e.settings.accountId);
      $t2 = P2((e) => e.reporter);
      yf2 = P2((e, t) => e.eventListeners[t], []);
      be2 = P2((e) => e.user, {});
      Ea2 = P2((e) => e.userIdentified, false);
      Sf2 = P2((e) => ({ groupId: e.groupId, groupProps: e.groupProps }), false);
      Tf2 = P2(
        (e) => e.settings.account.skipAutoProperties,
        false
      );
      Cf2 = P2(
        (e) => e.settings.account.gates.enableCTTEventIntegrations,
        false
      );
      _f2 = P2(
        (e) => e.settings.account.gates.responseFormatV2Enabled,
        false
      );
      Rt2 = P2((e) => e.session.id);
      Yn2 = P2((e) => e.session, {});
      If2 = P2((e) => e.settings, {});
      ii3 = P2((e, t) => e.tasks[t]);
      Af2 = P2(
        (e, t) => e.pendingEvents[t],
        []
      );
      es3 = (e) => e.lastCheckedForInitialContent || {};
      Rr = P2((e) => e.content);
      vf2 = P2((e) => e.orderedContent);
      ts3 = P2(
        (e, t) => Rr(e)[t]
      );
      bf2 = P2((e) => e.styles, {});
      zn2 = P2((e) => ye3(e).type);
      Ve2 = P2((e) => e.currentContent.status);
      Lr2 = P2((e) => e.currentContent.state);
      wf2 = P2(
        (e) => e.currentContent.shownUrl
      );
      ns2 = P2((e) => ye3(e).attributes.style);
      ga2 = P2((e) => e.styles[ye3(e).attributes.style]);
      Nf2 = P2(
        (e) => e.currentContent.eventChannel
      );
      st3 = P2(
        (e) => Lr2(e).currentStepChildId
      );
      zt3 = P2((e, t) => mn2(ye3(e), t), -1);
      tt = P2((e) => An(ye3(e)), []);
      Ot3 = P2(
        (e) => e.currentContent.state.children,
        {}
      );
      kf2 = P2(
        (e) => Object.keys(e.currentContent.state.children).length,
        0
      );
      Ii3 = P2(
        (e, t) => tt(e)[t].id
      );
      Of2 = P2(
        (e) => Lr2(e).isScrollingToAnnotation
      );
      ya2 = P2((e, t) => {
        const n = zt3(e, t);
        return ne4.defined(n) ? Ii3(e, n + 1) : false;
      });
      rs3 = P2((e, t) => {
        const n = zt3(e, t);
        return ne4.defined(n) ? Ii3(e, n - 1) : false;
      });
      Rf2 = P2((e, t, n) => {
        const r2 = zt3(e, t), i2 = zt3(e, n), o = Math.min(r2, i2), s = Math.max(r2, i2);
        if (ne4.defined(r2) && ne4.defined(i2)) {
          const [, ...c] = tt(e).slice(o, s).map(({ id: l2 }) => l2);
          return c;
        }
        return false;
      });
      Sa2 = P2(
        (e, t) => Ot3(e)[t].activatedAt
      );
      is3 = P2((e, t) => ne4.defined(Sa2(e, t)), false);
      Ai3 = P2(
        (e) => e.reportedErrors.child,
        {}
      );
      Bn2 = P2((e) => e.currentContent.state.activeAnnotations, []);
      Ta2 = P2((e) => e.transport.initialized, false);
      Lf2 = P2((e) => e.transport.details.socket);
      Xn2 = (e) => e.debugger || null;
      Ca2 = P2((e) => Xn2(e).viewState);
      xf2 = P2(
        (e) => Ca2(e).rowState
      );
      _a2 = P2(
        (e) => Xn2(e).currentPage
      );
      Ia2 = P2(
        (e) => Xn2(e).lastTrackedPage
      );
      Pf2 = P2(
        (e) => Xn2(e).contentErrors,
        []
      );
      Df2 = P2(
        (e) => Xn2(e).childErrors,
        {}
      );
      gn2 = P2((e) => e.checklists, []);
      yn2 = P2((e, t) => lt2(
        gn2(e),
        (n) => n.id === t
      ), {});
      os2 = P2((e, t) => gn2(e).filter((n) => n.status === t));
      Ff2 = P2((e, t, n) => {
        const r2 = yn2(e, t);
        return lt2(r2.attributes.items, (i2) => i2.id === n);
      });
      Uf2 = P2((e, t) => lt2(
        gn2(e),
        (n) => n.id === t
      ).status);
      Hf2 = P2((e) => e.widget.history, {});
      Mf2 = P2((e) => e.widget.flows, []);
      Aa2 = P2((e) => e.widget.selector, null);
      $f2 = P2(
        (e) => e.widget.position,
        "default"
      );
      Bf2 = P2((e) => e.widget.header, null);
      Vf2 = P2((e) => e.widget.footer, null);
      wo2 = P2((e) => e.widget.expanded, false);
      Wf2 = P2((e) => e.widget.icon, null);
      va2 = P2(
        (e) => nt2(e).format_version,
        1
      );
      Gf2 = P2(
        (e) => e.settings.isInjectableSDK,
        false
      );
      No = P2((e) => e.Appcues, null);
      jf2 = P2(
        (e) => e.initializingOpenBuilder,
        false
      );
      qf2 = P2((e) => e.experiments, []);
      Kf2 = P2(
        (e) => e.onHold.launchpads,
        []
      );
      ss3 = {
        createElement: Yf2,
        createElementNS: zf2,
        createTextNode: Jf2,
        createDocumentFragment: Xf2,
        createComment: Qf2,
        insertBefore: Zf2,
        removeChild: ep2,
        appendChild: tp2,
        parentNode: ba2,
        nextSibling: np2,
        tagName: rp2,
        setTextContent: ip2,
        getTextContent: op2,
        isElement: sp2,
        isText: cp2,
        isComment: lp2,
        isDocumentFragment: Pt2
      };
      Vn2 = Array.isArray;
      qi3 = $e3("", {}, [], void 0, void 0);
      pp2 = [
        "create",
        "update",
        "remove",
        "destroy",
        "pre",
        "post"
      ];
      gp2 = function(t, n, r2, i2) {
        return i2 === void 0 && (i2 = r2, r2 = n, n = void 0), ui3(t, {
          key: n,
          hook: { init: mp2, prepatch: Ep2 },
          fn: r2,
          args: i2
        });
      };
      Ap2 = "http://www.w3.org/1999/xlink";
      vp2 = "http://www.w3.org/2000/xmlns/";
      bp2 = "http://www.w3.org/XML/1998/namespace";
      qs = 58;
      wp2 = 120;
      Np2 = 109;
      Qn2 = {
        create: Ks,
        update: Ks
      };
      Zn2 = { create: Ys, update: Ys };
      zs = /[A-Z]/g;
      kp2 = {
        create: Xs,
        update: Xs
      };
      er2 = {
        create: Ki3,
        update: Ki3,
        destroy: Ki3
      };
      tr2 = { create: Js, update: Js };
      Qs = typeof window?.requestAnimationFrame == "function" ? window.requestAnimationFrame.bind(window) : setTimeout;
      Lp2 = (e) => {
        Qs(() => {
          Qs(e);
        });
      };
      ko2 = false;
      nr2 = {
        pre: Fp2,
        create: Zs,
        update: Zs,
        destroy: Pp2,
        remove: Dp2
      };
      Mp2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
        __proto__: null,
        Fragment: Up2,
        array: Vn2,
        attachTo: _p2,
        attributesModule: Qn2,
        classModule: Zn2,
        datasetModule: kp2,
        eventListenersModule: er2,
        fragment: hp2,
        h: ui3,
        htmlDomApi: ss3,
        init: Jn2,
        jsx: Hp2,
        primitive: un,
        propsModule: tr2,
        styleModule: nr2,
        thunk: gp2,
        toVNode: wa2,
        vnode: $e3
      }, Symbol.toStringTag, { value: "Module" }));
      ec = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
      a2 = Bp2();
      ar2 = {};
      bi3 = Vp2();
      zi3 = { exports: {} };
      Gp2 = Wp2();
      jp2 = /* @__PURE__ */ ls2(Gp2);
      ic = "|shadow-root|";
      oc = "|iframe|";
      wi3 = (e, t = document) => e.includes(ic) || e.includes(oc) ? e.split(ic).flatMap((n) => n.split(oc)).reduce((n, r2) => n === null ? [...t.querySelectorAll(r2)] : n.flatMap((i2) => i2.shadowRoot ? [...i2.shadowRoot.querySelectorAll(r2)] : i2.tagName === "IFRAME" ? [...i2.contentDocument.querySelectorAll(r2)] : []), null) ?? [] : [...t.querySelectorAll(e)];
      xa2 = (e) => e.tagName === "IFRAME";
      ki3 = (e) => {
        const t = e.getRootNode(e), n = t.parentWindow || t.defaultView;
        return n && n !== window ? n.frameElement : null;
      };
      Zp2 = (e) => {
        let t = 0;
        for (let n = 0; n < e.length && !(e[n].nodeName !== "APPCUES-EXPERIENCE-CONTAINER" || e[n].nodeName !== "APPCUES-EXPERIENCE-CONTAINER-BUILDER"); n++)
          t = n;
        return e.slice(t + 1);
      };
      eh2 = (e, t = window.document) => {
        try {
          const n = /^((body\s(>?\s?))?)(?<tagName>[\da-z]+):nth-child\((?<index>\d+)\)(?<remainingSelector>.*)/i, r2 = e.match(n), i2 = t.body.firstChild?.nodeName === "APPCUES-EXPERIENCE-CONTAINER" || t.body.firstChild?.nodeName === "APPCUES-EXPERIENCE-CONTAINER-BUILDER";
          if (!r2 || !i2) return [];
          const { tagName: o, index: s, remainingSelector: c } = r2.groups, l2 = Number.parseInt(s, 10) - 1, u2 = Zp2([
            ...document.body.children
          ]), d2 = u2[l2]?.nodeName === o.toUpperCase() ? u2[l2] : null;
          return c ? (
            // adding * here to the string because
            // the remaining selector can be something like
            // > p:nth-of-type(1).
            // But selectors starting with > without a parent sentence first or *
            // would fail, because it is not a valid css selector.
            // * means the parentElement, which is the element
            // we are applying the querySelectorAll.
            d2 ? wi3(`* ${c}`, d2) : []
          ) : [d2];
        } catch {
          return [];
        }
      };
      cc = (e) => {
        if (e.assignedSlot) {
          const { host: r2 } = e.assignedSlot.parentNode;
          return r2 ?? e.assignedSlot.parentNode;
        }
        const t = ki3(e);
        return t || (e.parentNode?.host?.tagName?.includes("-") ? e.parentNode?.host : e.parentElement);
      };
      At2 = P2((e) => e.target.textContent, "");
      vh2 = (e) => {
        const {
          label: t,
          items_remaining: n,
          onBeaconClicked: r2,
          setWidth: i2,
          isBottomRight: o,
          styles: s,
          percentComplete: c,
          isChecklistExpanded: l2,
          controls: u2,
          setRef: d2
        } = e, {
          beacon_background_color: f2,
          beacon_text_color: h2
        } = s, y2 = (p2) => {
          p2.key === "Tab" && (p2.currentTarget.style.outline = ""), (p2.key === " " || p2.key === "Enter") && r2();
        };
        return /* @__PURE__ */ a2.html(
          "div",
          {
            "attrs-role": "button",
            "attrs-aria-expanded": l2 ? "true" : "false",
            "attrs-aria-controls": u2,
            "class-beacon": true,
            "class-right": o,
            "hook-update": (p2) => i2(p2.elm),
            "attrs-tabindex": "0",
            "attrs-aria-label": `${t} ${n} items remaining, ${c} complete`,
            "on-keyup": y2,
            "hook-insert": d2,
            "on-mousedown": (p2) => {
              p2.currentTarget.style.outline = "none";
            },
            "on-click": r2,
            style: { backgroundColor: f2 }
          },
          /* @__PURE__ */ a2.html("div", { "attrs-aria-hidden": "true" }, /* @__PURE__ */ a2.html("div", { "class-icon": true, style: { color: h2 } }), /* @__PURE__ */ a2.html(
            Ih2,
            {
              height: "20px",
              width: "20px",
              color: h2 || "#FFFFFF"
            }
          ), /* @__PURE__ */ a2.html("div", { "class-label": true, style: { color: h2 } }, t), /* @__PURE__ */ a2.html("div", { "class-badge": true, style: { color: f2 } }, n))
        );
      };
      bh2 = (e) => {
        const {
          actions: t,
          label: n,
          state: r2,
          onItemClicked: i2,
          styles: o,
          itemNumberLabel: s,
          isSequential: c,
          depends_on: l2,
          items: u2,
          isChecklistExpanded: d2,
          setRef: f2
        } = e, h2 = r2 === "complete", y2 = t ? t.length === 0 : false, p2 = u2.reduce((I3, C3) => ({ ...I3, [C3.id]: C3 }), {}), T2 = (l2 || []).filter((I3) => p2[I3] && p2[I3].state === "incomplete").map((I3) => p2[I3].label).length === 0, _ = c && !T2 && !h2, S2 = (I3) => {
          (I3.key === " " || I3.key === "Enter") && i2();
        }, A3 = t ? t.some((I3) => I3.attributes.action_type === "redirect") : false;
        return /* @__PURE__ */ a2.html(
          "li",
          {
            "class-item": true,
            "class-completed": h2,
            "class-locked": _,
            "class-actionless": y2,
            "on-click": _ ? () => {
            } : i2,
            "attrs-tabindex": d2 ? "0" : "-1",
            "on-keyup": _ ? () => {
            } : S2,
            "attrs-role": A3 ? "link" : "button",
            "attrs-type": A3 ? "" : "button",
            "hook-insert": s === "1" ? f2 : void 0
          },
          /* @__PURE__ */ a2.html("a", null, /* @__PURE__ */ a2.html("span", { "class-checkmark": true }, /* @__PURE__ */ a2.html("span", { "class-sequential-label": c && !h2 }, s), /* @__PURE__ */ a2.html(Th2, null)), /* @__PURE__ */ a2.html("p", null, n, /* @__PURE__ */ a2.html("span", { "class-sr-only": true }, ` - ${h2 ? "completed" : "incomplete"}`)), /* @__PURE__ */ a2.html(Ch2, { color: o.beacon_background_color }))
        );
      };
      wh2 = "/generic/main/7.13.3/checklist.bfa6d184b8ace06dc4ece82bcefcd323190112c8.css";
      Nh2 = "sha256-+r+pTslgzdZXKHuCvF/3Xv/1BVTSc8g1KqjkV3G1icQ=";
      Ji3 = Bt2(wh2);
      uc = 30;
      kh2 = -300;
      Oh2 = "//cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/";
      ur2 = null;
      dr2 = null;
      Rh2 = (e) => {
        const {
          id: t,
          name: n,
          styles: r2,
          text_tokens: i2,
          items: o,
          is_checklist_expanded: s,
          is_first_view: c,
          frameHeight: l2,
          beaconWidth: u2,
          onBeaconClicked: d2,
          onItemClicked: f2,
          onOutsideClicked: h2,
          onDismissClicked: y2,
          onDismissCanceled: p2,
          onDismissConfirmed: m3,
          onCSSLoaded: T2,
          onMinimizedClicked: _,
          shouldShowConfirmDismiss: S2,
          onExpandChecklistResize: A3,
          onCollapseBeaconResize: I3,
          status: C3,
          progress_state: O3,
          is_sequential: L3,
          is_dismissable: H4,
          showBadge: R3,
          collisionMode: K3,
          collisionCoordinates: G2,
          isInjectableSDK: ue3
        } = e, w3 = (me3) => {
          ue3 || setTimeout(() => {
            it2(me3.elm);
          }, 300);
        }, J3 = i2.beacon_text || "Get Started", de3 = 60, { length: pe3 } = o.length > 0 ? o.filter((me3) => me3 && me3.state && me3.state !== "complete") : [], Ce3 = "appcues-checklist-main", Oe3 = `${Math.floor((o.length - pe3) / o.length * 100) || 0}%`, Ye3 = pe3 === 0, Le3 = i2.header_text || "Getting Started", V3 = i2.description_text || "Here are a few things to do first.", Y4 = i2.completion_dismiss_text || "I'm done", ie4 = i2.completion_title || "Congratulations!", _e3 = i2.completion_text || "You\u2019ve completed the first few steps. You can always come back if you need more help.", oe4 = O3 === "shown_manually" ? Ye3 : O3 === "completed", fe2 = i2.dismiss_text || "No thanks", N3 = i2.dismiss_prompt_text || "Are you sure you want to dismiss this list?", x2 = i2.dismiss_cancel_text || "Keep it", k2 = i2.dismiss_confirm_text || "Dismiss it", X3 = `.checklist .checklist-body .item:hover:not(.completed):not(.locked) a,
    .checklist .checklist-header.checklist-congrats:hover .dismiss-link,
    .checklist .skip-link:hover,
    .checklist .checklist-main .powered-by-appcues:hover {
        color: ${r2.beacon_background_color};
      }
      .checklist .checklist-body .item:hover:not(.completed):not(.locked) a .checkmark {
        border-color: ${r2.beacon_background_color};
      }
      .checklist .checklist-body .item:hover:not(.completed):not(.locked) a .checkmark .sequential-label{
        color: ${r2.beacon_background_color};
      }
      .checklist .checklist-body .item.completed a .checkmark {
        background-color: ${r2.success_color};
        border-color: ${r2.success_color};
      }
      .checklist .checklist-header.checklist-congrats h3 {
        color: ${r2.success_color};
      }`, Z2 = `
    @keyframes checkAppear {
      0% {
        border-color: inherit;
        background-color: inherit;
        -webkit-transform: none;
                transform: none;
      }
      20% {
        border-color: #555555;
      }
      35% {
        -webkit-transform: none;
                transform: none;
      }
      45% {
        border-color: #555555;
        background-color: white;
        -webkit-transform: scale(0.7);
                transform: scale(0.7);
      }
      58% {
        border-color: ${r2.success_color};
        background-color: ${r2.success_color};
        -webkit-transform: scale(1.25);
                transform: scale(1.25);
      }
      64% {
        -webkit-transform: scale(1.25);
                transform: scale(1.25);
      }
      100% {
        border-color: ${r2.success_color};
        background-color: ${r2.success_color};
        -webkit-transform: none;
                transform: none;
      }
    }
    .checklist .checklist-body .item.completed a .checkmark {
      animation-name: checkAppear;
      animation-duration: 1.5s;
      animation-timing-function: cubic-bezier(0, 0, 0.23, 1.27);
      animation-iteration-count: 1;
    }
  `, { position: Q2 } = r2, B3 = Q2 === "Bottom Right", j3 = s ? {
          height: `${l2}px`,
          // Checklist width [340px] + (2 * (Outline spread [8px])) = 364px
          width: "364px"
        } : {
          height: `${de3}px`,
          width: `${u2}px`,
          // iframe transition must be > checklist-main transition (0.15s)
          // to prevent checklist from being cutoff during animation
          transition: "all 0s linear 1s"
        }, ke3 = 12, xe2 = 12, {
          beacon_vertical_offset: wn2,
          beacon_horizontal_offset: Nn
        } = r2, _t3 = B3 ? "right" : "left", Vr2 = c ? kh2 : uc, hd2 = {
          opacity: 0,
          delayed: { opacity: 100 },
          remove: { opacity: 0 },
          destroy: { opacity: 0 },
          bottom: K3 ? `${G2.y}px` : `${uc + wn2}px`,
          [_t3]: K3 ? `${G2.x}px` : `${Vr2 + Nn}px`
        }, kn2 = (me3) => {
          if (me3) {
            const Wt3 = me3.getBoundingClientRect().height + de3 + ke3 + xe2;
            Math.ceil(Wt3) !== l2 && window.requestAnimationFrame(
              () => A3(t, Wt3)
            );
          } else
            window.requestAnimationFrame(
              () => A3(t, 359)
            );
        }, md2 = 18, Ed2 = (me3) => {
          if (me3) {
            const Wt3 = me3.getBoundingClientRect().width + md2;
            Math.ceil(Wt3) !== u2 && window.requestAnimationFrame(() => {
              I3(t, Wt3);
            });
          }
        }, Us = (me3) => {
          me3.target.nodeName !== "APPCUES-EXPERIENCE-CONTAINER" && !K3 && h2(t);
        }, Wr2 = r2.font, Hs = r2.font_url, gd2 = `
    .checklist-main .title, .desc, .completed-caption, .sequential-label,
    .item a, .skip-link, .dismiss-text, .button-default {
      font-family: ${Wr2};
    }

    .checklist-main .checklist-congrats h3, p, .dismiss-link {
      font-family: ${Wr2};
    }

    .beacon .label, .badge {
      font-family: ${Wr2};
    }
  `, Ms = r2.custom_background_color, yd2 = `
    .checklist-main,
    .checklist-main .checklist-body .item .checkmark,
    .checklist-main .checklist-body .dismiss-container,
    .checklist-main .checklist-header.checklist-congrats
     {
      background-color: ${Ms};
    }
  `, cr2 = r2.custom_font_color, Sd2 = `
    .checklist-main .title, .desc, .completed-caption, .sequential-label,
    .item a, .skip-link, .dismiss-text, .button-default,
    .checklist-main .checklist-header.checklist-congrats p,
    .checklist-main .checklist-body .item p,
    .checklist-main .checklist-body .item .checkmark,
    .checklist-main .checklist-body .item .checkmark > span,
    .checklist-main .checklist-footer .skip-link,
    .checklist-main .checklist-footer .powered-by-appcues {
      color: ${cr2};
    }
    .checklist-main .checklist-header {
      border-bottom: 1px solid ${cr2};
    }
    .checklist-main .checklist-body .item .checkmark {
      border: 2px solid ${cr2};
    }
    .checklist-main .checklist-footer .skip-link:hover,
    .checklist-main .checklist-footer .powered-by-appcues:hover,
    .checklist-main .checklist-body .item:hover:not(.actionless) p
     {
      color: ${r2.beacon_background_color};
    }
  `, $s = r2.custom_hover_state_color, Td2 = `
    .checklist-main .checklist-body .item:hover:not(.actionless) {
      background-color: ${$s};
    }
  `;
        return /* @__PURE__ */ a2.html(
          "appcues-checklist",
          {
            "class-apcl-right": B3,
            "class-apcl-left": !B3,
            "class-first-view": c,
            key: t,
            "hook-remove": () => document.removeEventListener("click", Us),
            style: hd2
          },
          /* @__PURE__ */ a2.html("iframe", { "style-border": "none", style: j3, "style-color-scheme": "none" }, /* @__PURE__ */ a2.html(
            "link",
            {
              "attrs-href": Ji3,
              "attrs-type": "text/css",
              "attrs-rel": "stylesheet",
              "attrs-integrity": Nh2,
              "attrs-crossorigin": "anonymous",
              "on-load": () => {
                T2(t, Ji3, true), document.addEventListener("click", Us);
              },
              "on-error": () => {
                T2(t, Ji3, false);
              }
            }
          ), Hs ? /* @__PURE__ */ a2.html("link", { "attrs-href": Hs, "attrs-rel": "stylesheet" }) : /* @__PURE__ */ a2.html(ae4, null), /* @__PURE__ */ a2.html("style", { "attrs-type": "text/css" }, X3), /* @__PURE__ */ a2.html("style", { "attrs-type": "text/css" }, Z2), Wr2 ? /* @__PURE__ */ a2.html("style", { "attrs-type": "text/css" }, gd2) : /* @__PURE__ */ a2.html(ae4, null), Ms ? /* @__PURE__ */ a2.html("style", { "attrs-type": "text/css" }, yd2) : /* @__PURE__ */ a2.html(ae4, null), cr2 ? /* @__PURE__ */ a2.html("style", { "attrs-type": "text/css" }, Sd2) : /* @__PURE__ */ a2.html(ae4, null), $s ? /* @__PURE__ */ a2.html("style", { "attrs-type": "text/css" }, Td2) : /* @__PURE__ */ a2.html(ae4, null), C3 === a.SHOWING ? /* @__PURE__ */ a2.html("div", { "class-checklist": true }, r2.type === "beacon" && !K3 ? /* @__PURE__ */ a2.html(
            vh2,
            {
              styles: r2,
              label: J3,
              items_remaining: pe3,
              onBeaconClicked: () => {
                d2(t), kn2();
              },
              setWidth: Ed2,
              isBottomRight: B3,
              percentComplete: Oe3,
              isChecklistExpanded: s,
              controls: Ce3,
              setRef: (me3) => {
                dr2 = me3;
              }
            }
          ) : /* @__PURE__ */ a2.html(ae4, null), /* @__PURE__ */ a2.html(
            "div",
            {
              "attrs-id": Ce3,
              "class-checklist-main": true,
              "class-expanded": s,
              "hook-update": (me3) => kn2(me3.elm)
            },
            /* @__PURE__ */ a2.html("div", { "class-checklist-container": true }, /* @__PURE__ */ a2.html(
              "div",
              {
                "class-checklist-header": true,
                "class-checklist-congrats": oe4
              },
              oe4 ? /* @__PURE__ */ a2.html("div", { "class-header-content": true }, /* @__PURE__ */ a2.html("span", { "class-emoji": true }, /* @__PURE__ */ a2.html(
                Lh2,
                {
                  successImageCode: r2.success_image_code,
                  customSuccessImageUrl: r2.custom_success_image_url,
                  successColor: r2.success_color
                }
              )), /* @__PURE__ */ a2.html("h3", null, ie4), /* @__PURE__ */ a2.html("p", null, _e3)) : /* @__PURE__ */ a2.html("div", { "class-header-content": true }, /* @__PURE__ */ a2.html("h2", { "class-title": true }, Le3), /* @__PURE__ */ a2.html("div", { "class-desc": true }, V3), /* @__PURE__ */ a2.html("div", { "class-progress-container": true }, /* @__PURE__ */ a2.html("span", { "class-completed-caption": true }, Oe3), /* @__PURE__ */ a2.html("span", { "class-progress-bar": true }, /* @__PURE__ */ a2.html(
                "span",
                {
                  "class-progress-bar-complete": true,
                  "class-progress-bar-done": Ye3,
                  "style-width": Oe3,
                  "style-backgroundColor": r2.beacon_background_color
                }
              )))),
              oe4 ? /* @__PURE__ */ a2.html(
                "button",
                {
                  type: "button",
                  "class-dismiss-link": true,
                  "attrs-tabindex": "0",
                  "on-keyup": (me3) => {
                    (me3.key === " " || me3.key === "Enter") && m3(t, n, oe4);
                  },
                  "on-click": () => m3(t, n, oe4)
                },
                Y4
              ) : s ? /* @__PURE__ */ a2.html(
                "div",
                {
                  style: {
                    visibility: s ? "visible" : "hidden"
                  },
                  "attrs-role": "button",
                  "attrs-aria-expanded": s ? "true" : "false",
                  "attrs-aria-controls": Ce3,
                  "attrs-aria-label": "Minimize checklist",
                  "class-minimize": true,
                  "attrs-tabindex": "0",
                  "hook-insert": w3,
                  "on-keyup": (me3) => {
                    (me3.key === " " || me3.key === "Enter") && (_(t), dr2 && w3(dr2));
                  },
                  "on-click": () => {
                    _(t), dr2 && w3(dr2);
                  }
                },
                /* @__PURE__ */ a2.html("div", { "attrs-aria-hidden": "true" }, /* @__PURE__ */ a2.html(_h2, { color: cr2 || "#999" }))
              ) : /* @__PURE__ */ a2.html(ae4, null)
            ), /* @__PURE__ */ a2.html(
              "div",
              {
                "class-checklist-body": true,
                "class-show-confirm": S2
              },
              S2 ? /* @__PURE__ */ a2.html(ae4, null) : /* @__PURE__ */ a2.html("ul", { "class-items": true }, o.map((me3, Wt3) => /* @__PURE__ */ a2.html(
                bh2,
                {
                  ...me3,
                  checklistId: t,
                  items: o,
                  onItemClicked: () => s && f2(t, me3.id),
                  styles: r2,
                  isSequential: L3,
                  itemNumberLabel: `${Wt3 + 1}`,
                  isChecklistExpanded: s,
                  setRef: (Cd2) => {
                    ur2 = Cd2;
                  }
                }
              ))),
              S2 ? /* @__PURE__ */ a2.html("div", { "class-dismiss-container": true }, /* @__PURE__ */ a2.html("div", { "class-content-container": true }, /* @__PURE__ */ a2.html("div", { "class-dismiss-content": true }, /* @__PURE__ */ a2.html("div", { "class-dismiss-text": true }, N3), /* @__PURE__ */ a2.html("div", { "class-button-container": true }, /* @__PURE__ */ a2.html("div", { "class-button-row": true }, /* @__PURE__ */ a2.html(
                "a",
                {
                  "class-button-default": true,
                  "class-alt": true,
                  "class-cancel-dismiss": true,
                  "attrs-tabindex": "0",
                  role: "button",
                  type: "button",
                  "hook-insert": w3,
                  "on-keyup": (me3) => {
                    (me3.key === " " || me3.key === "Enter") && (p2(t), kn2(), ur2 && w3(ur2));
                  },
                  "on-click": () => {
                    p2(t), kn2(), ur2 && w3(ur2);
                  }
                },
                x2
              ), /* @__PURE__ */ a2.html(
                "a",
                {
                  "class-button-default": true,
                  "attrs-tabindex": "0",
                  role: "button",
                  type: "button",
                  "on-keyup": (me3) => {
                    (me3.key === " " || me3.key === "Enter") && m3(t, n, Ye3);
                  },
                  "on-click": () => m3(t, n, Ye3)
                },
                /* @__PURE__ */ a2.html("strong", null, "\xD7"),
                " ",
                k2
              )))))) : /* @__PURE__ */ a2.html(ae4, null)
            ), /* @__PURE__ */ a2.html("div", { "class-checklist-footer": true }, H4 && s && !oe4 && !S2 ? /* @__PURE__ */ a2.html(
              "button",
              {
                type: "button",
                "class-skip-link": true,
                "class-left": B3,
                "attrs-tabindex": "0",
                "on-keyup": (me3) => {
                  (me3.key === " " || me3.key === "Enter") && (y2(t), document.querySelector("appcues-checklist iframe").contentDocument.documentElement.querySelector(
                    ".cancel-dismiss"
                  ).focus(), kn2());
                },
                "on-click": () => {
                  y2(t), kn2();
                }
              },
              fe2
            ) : /* @__PURE__ */ a2.html(ae4, null), s && oe4 && R3 ? (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              /* @__PURE__ */ a2.html(
                "a",
                {
                  "class-powered-by-appcues": true,
                  "class-left": B3,
                  "attrs-href": "http://www.appcues.com",
                  "attrs-target": "_blank"
                },
                "Brought to you by Appcues"
              )
            ) : /* @__PURE__ */ a2.html(ae4, null)))
          )) : /* @__PURE__ */ a2.html(ae4, null))
        );
      };
      xh2 = (e) => {
        const {
          id: t,
          attributes: n,
          beaconWidth: r2,
          viewState: i2,
          frameHeight: o,
          shouldShowConfirmDismiss: s,
          callbacks: c,
          showBadge: l2,
          status: u2,
          collisionMode: d2,
          collisionCoordinates: f2,
          isInjectableSDK: h2
        } = e;
        return /* @__PURE__ */ a2.html(
          Rh2,
          {
            id: t,
            status: u2,
            styles: n.styles || {},
            beaconWidth: r2,
            frameHeight: o,
            items: n.items || [],
            is_checklist_expanded: i2 === q2.EXPANDED,
            is_first_view: i2 === q2.FIRSTVIEW,
            text_tokens: n.text_tokens || {},
            name: n.name || "Untitled Checklist",
            shouldShowConfirmDismiss: s,
            progress_state: n.progress_state,
            is_sequential: n.is_sequential || false,
            is_dismissable: n?.is_dismissable ?? true,
            showBadge: l2,
            collisionMode: d2,
            collisionCoordinates: f2,
            isInjectableSDK: h2,
            ...c
          }
        );
      };
      qr2 = {};
      $a2 = /* @__PURE__ */ $p2(Mp2);
      On2 = {};
      Vh2 = Bh2();
      Ut3 = /* @__PURE__ */ ls2(Vh2);
      yc2 = (e, t, n) => {
        const r2 = e.currentTarget.querySelector('[tabindex="0"]');
        if (!r2 && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
          e.currentTarget.firstElementChild.setAttribute("tabindex", "0"), e.currentTarget.firstElementChild.focus();
          return;
        }
        switch (e.key) {
          case "Tab": {
            if (n) {
              e.currentTarget.lastElementChild.focus();
              break;
            }
            const i2 = document.documentElement.querySelector(
              "#appcues-widget-icon"
            );
            t(), i2.focus();
            break;
          }
          case "ArrowDown": {
            const i2 = r2.nextElementSibling || e.target.parentElement.firstElementChild;
            gc2(i2);
            break;
          }
          case "ArrowUp": {
            const i2 = r2.previousElementSibling || e.target.parentElement.lastElementChild;
            gc2(i2);
            break;
          }
        }
        r2?.setAttribute("tabindex", "-1");
      };
      Kh2 = {
        left: "appcues-widget-left",
        right: "appcues-widget-right",
        center: "appcues-widget-center",
        bottom: "appcues-widget-bottom",
        "bottom-left": "appcues-widget-bottom-left",
        "bottom-right": "appcues-widget-bottom-right",
        "bottom-center": "appcues-widget-bottom-center",
        top: "appcues-widget-top",
        "top-left": "appcues-widget-top-left",
        "top-right": "appcues-widget-top-right",
        "top-center": "appcues-widget-top-center",
        default: "appcues-widget-center"
      };
      Yh2 = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      Xh2 = (e) => {
        const {
          flows: t,
          history: n,
          position: r2,
          header: i2,
          footer: o,
          expanded: s,
          onClose: c,
          onOutsideClick: l2,
          onItemClick: u2,
          dropdownPositioning: d2,
          hasFixedAncestor: f2
        } = e, h2 = t.sort((m3, T2) => T2.version_id - m3.version_id).map((m3) => {
          const T2 = m3.migrated_from_step_id ? !!n[m3.id] || !!n[m3.migrated_from_step_id] : !!n[m3.id];
          return { ...m3, seen: T2 };
        }), [y2, p2] = h2.reduce(
          (m3, T2) => (m3[T2.seen ? 1 : 0].push(T2), m3),
          [[], []]
        );
        return /* @__PURE__ */ a2.html(
          "div",
          {
            classNames: `appcues-widget-container ${s ? "appcues-active" : ""}`,
            style: s ? { height: qh2().height } : {}
          },
          /* @__PURE__ */ a2.html("div", { "on-click": l2, classNames: "appcues-widget-backdrop" }),
          /* @__PURE__ */ a2.html(
            "div",
            {
              classNames: `appcues-widget-dropdown ${f2 ? "appcues-widget-fixed" : ""} ${Kh2[r2]}`,
              style: s ? {
                top: `${d2.top}px`,
                left: `${d2.left}px`
              } : {}
            },
            i2 ? /* @__PURE__ */ a2.html("div", { classNames: "appcues-widget-header" }, Ut3(i2)) : /* @__PURE__ */ a2.html(ae4, null),
            /* @__PURE__ */ a2.html(
              "div",
              {
                classNames: "appcues-widget-content",
                id: "appcues-widget-content",
                "attrs-tabindex": "-1"
              },
              /* @__PURE__ */ a2.html(
                "ul",
                {
                  classNames: "appcues-widget-list",
                  "attrs-tabindex": "0",
                  "on-keydown": (m3) => yc2(m3, c, p2.length > 0),
                  "attrs-aria-activedescendant": "appcues-widget-listitem-0"
                },
                !y2 || y2.length === 0 ? /* @__PURE__ */ a2.html("li", { classNames: "appcues-nothing-new" }, "There's nothing new to see here!") : y2.map((m3, T2) => /* @__PURE__ */ a2.html(
                  Sc2,
                  {
                    index: T2,
                    item: m3,
                    onItemClick: u2,
                    hasBeenSeen: false
                  }
                ))
              ),
              /* @__PURE__ */ a2.html(
                "ul",
                {
                  classNames: "appcues-widget-list",
                  id: "appcues-widget-list-unseen",
                  "attrs-tabindex": "0",
                  "on-keydown": (m3) => yc2(m3, c, false),
                  "attrs-aria-activedescendant": "appcues-widget-listitem-0"
                },
                !p2 || p2.length === 0 ? /* @__PURE__ */ a2.html(ae4, null) : p2.map((m3, T2) => /* @__PURE__ */ a2.html(
                  Sc2,
                  {
                    index: T2,
                    item: m3,
                    onItemClick: u2,
                    hasBeenSeen: true
                  }
                ))
              )
            ),
            o ? /* @__PURE__ */ a2.html("div", { classNames: "appcues-widget-footer" }, Ut3(o)) : /* @__PURE__ */ a2.html(ae4, null)
          )
        );
      };
      Jh2 = ({ expanded: e, flows: t, history: n, onClick: r2, onClose: i2, icon: o }) => {
        const s = (l2) => {
          l2.key === "Tab" && (l2.currentTarget.style.outline = "", e && i2());
        }, c = t.filter((l2) => !n[l2.id]).length;
        return /* @__PURE__ */ a2.html(
          "button",
          {
            "attrs-tabindex": "0",
            classNames: `${o ? "" : "appcues-icon-bell"} appcues-widget-icon appcues-icon appcues-icon-visible appcues-in appcues-slide`,
            "attrs-data-appcues-count": c,
            id: "appcues-widget-icon",
            "on-keyup": s,
            "on-mousedown": (l2) => {
              l2.currentTarget.style.outline = "none";
            },
            "on-click": r2,
            "attrs-aria-controls": "appcues-widget-list",
            "attrs-aria-expanded": e,
            "attrs-aria-haspopup": "true",
            "attrs-aria-label": `${c} unseen flows`,
            type: "button"
          },
          o ? /* @__PURE__ */ a2.html("img", { alt: "", src: o }) : /* @__PURE__ */ a2.html("i", null)
        );
      };
      $3 = i([
        "START_INITIALIZE",
        "START_IDENTIFY",
        "START_HANDLE_MESSAGE",
        "MESSAGE_TIMEOUT",
        "START_EVENT",
        "START_OPEN_BUILDER_EVENT",
        "FINISHED_EVENT",
        "START_ACTIVITY",
        "START_ANONYMOUS",
        "INJECT_CONTENT",
        "INJECT_STYLES",
        "PREPARE_CONTENT",
        "CLEANUP_STEP",
        "START_CONTENT",
        "START_RESET",
        "START_DEBUG",
        "START_FORM_SUBMISSION",
        "START_SHOW",
        "STOP_TASKS",
        "START_CHECK",
        "START_FLOW",
        "START_STEP",
        "CANCEL_ATTEMPTS",
        "SEND_LIFECYCLE_EVENT",
        "CLOSE_CHANNEL",
        "START_IDENTIFY_GROUP",
        "START_GROUP_ACTIVITY"
      ]);
      U3 = i([
        "INITIALIZE",
        "CONFIGURE_TRANSPORT",
        "IDENTIFY",
        "SENT_REQUEST",
        "UPDATE_USER",
        "RESET",
        "UPDATE_CONTENT",
        "UPDATE_STYLES",
        "WILL_SHOW_CONTENT",
        "SHOW_CONTENT",
        "WILL_CLOSE_CONTENT",
        "FETCHING_CONTENT",
        "REGISTER_RENDERER",
        "REGISTER_CALLBACKS",
        "ADD_EVENT_LISTENER",
        "REMOVE_EVENT_LISTENER",
        "WAIT_IDENTIFY",
        "COMPLETED_IDENTIFY",
        "STORE_TASK",
        "CLEAR_TASKS",
        "CLEAR_TASK",
        "CLEAR_CURRENT_CONTENT",
        "RUN_ACTION",
        "RESUME_ACTION",
        "CHECKED_FOR_INITIAL_CONTENT",
        "SENT_ACTIVITY_UPDATE",
        "STARTED_FLOW_IMM",
        "SET_BODY_READY",
        "SAVE_OPEN_BUILDER_INSTANCE",
        "SAVE_EXPERIMENTS",
        "EXPERIMENT_STARTED",
        "SAVE_GROUP_PROPS",
        "PREFETCH_FLOWS",
        "INITIALIZE_OPEN_BUILDER",
        "OPEN_BUILDER_INITIALIZED"
      ]);
      le3 = i([
        "INVALIDATE_FORM",
        "LOADED_CSS",
        "RESIZE_CONTENT",
        "ACTIVATED_STEP_CHILD",
        "DEACTIVATED_STEP_CHILD",
        "SET_CURRENT_STEP_CHILD",
        "CLEAR_CURRENT_STEP_CHILD",
        "SET_CURRENT_STEP",
        "ADVANCE_STEP_CHILD",
        "CLOSE_FLOW",
        "CLOSE_STEP",
        "CANCEL_STEP",
        "SET_PREVIOUS_ACTIVE_ELEMENT",
        "SET_NEXT_CONTENT_ID_COOKIE",
        "RUN_PREV_STEP_CHILD",
        "CLEAR_CONTENT_STATE_CHILD",
        "SET_FORCE_FOCUS"
      ]);
      di3 = i(["PREPARE_MODAL", "RESIZE_MODAL_CONTENT"]);
      Ae4 = i([
        "PREPARE_SATISFACTION_SURVEY",
        "START_COLLAPSING_SATISFACTION_SURVEY",
        "COLLAPSE_SATISFACTION_SURVEY",
        "EXPAND_SATISFACTION_SURVEY",
        "SHOW_SATISFACTION_SURVEY_TOAST",
        "HIDE_SATISFACTION_SURVEY_TOAST",
        "QUANTITATIVE_QUESTION_SUBMITTED",
        "CLICKED_UPDATE_NPS_SCORE",
        "QUALITATIVE_QUESTION_SUBMITTED",
        "ASK_ME_LATER_SELECTED",
        "FEEDBACK_TEXT_CHANGED"
      ]);
      he2 = i([
        "ADD_ACTIVE_ANNOTATIONS",
        "REMOVE_ACTIVE_ANNOTATIONS",
        "START_CALCULATE_POSITIONS",
        "START_HANDLE_POSITION_UPDATES",
        "SET_ANNOTATIONS_POSITIONS",
        "SET_ANNOTATIONS_READY",
        "SAVE_POSITION_DETAILS",
        "REPORTED_ANNOTATIONS_ERRORS",
        "REPORTED_ANNOTATIONS_RECOVERY",
        "SET_EXISTING_ANNOTATIONS_ERRORS",
        "SET_TOOLTIP_SETTLED",
        "SET_ACTIVE_ANNOTATIONS_WILL_CLOSE",
        "HIDE_AND_REMOVE_ACTIVE_ANNOTATIONS",
        "GO_TO_STEP",
        "SET_IS_SCROLLING_TO_ANNOTATION",
        "CONFIRM_SCROLLING"
      ]);
      Yt = i([
        "EXPAND_HOTSPOT",
        "PREPARE_HOTSPOTS",
        "SET_BEACON_SETTLED",
        "CLOSE_LAST_HOTSPOT"
      ]);
      re4 = i([
        "UPDATE_CHECKLISTS",
        "ANIMATE_IN_CHECKLIST",
        "EXPAND_CHECKLIST",
        "COLLAPSE_CHECKLIST",
        "SHOW_DISMISS_CONFIRMATION",
        "CANCEL_DISMISS_CONFIRMATION",
        "CONFIRM_DISMISS_CHECKLIST",
        "LOADED_CHECKLIST_CSS",
        "START_CHECKLIST",
        "SET_CHECKLIST_STATUS",
        "START_CHECKLIST_ITEM",
        "START_CHECKLIST_ACTION",
        "COMPLETED_CHECKLIST_ACTION",
        "SEND_CHECKLIST_ERROR",
        "SET_CHECKLIST_HEIGHT",
        "SET_CHECKLIST_WIDTH",
        "HIDE_CHECKLISTS",
        "UNHIDE_CHECKLISTS",
        "CLEAR_FORCE_SHOWN_CHECKLIST",
        "SET_EXPAND_CHECKLIST_LATER",
        "SEND_CHECKLIST_SHOWN_EVENT"
      ]);
      Ge3 = i([
        "TOGGLE_ROW_DETAILS",
        "TOGGLE_COLLAPSED",
        "SET_CURRENT_PAGE",
        "TRACK_PAGE",
        "ADD_CONTENT_ERROR",
        "ADD_CHILD_ERROR",
        "CLOSE_DEBUGGER"
      ]);
      Fn2 = i([
        "CANCEL_TEST",
        "RESET_TEST",
        "LOADED_TEST_MODE_CSS"
      ]);
      vt3 = i([
        "LOADED_LAUNCHPAD",
        "UPDATED_WIDGET_HISTORY",
        "UPDATED_WIDGET_FLOWS",
        "TOGGLED_WIDGET"
      ]);
      Je3 = i([
        "PAUSE_EXPERIENCE",
        "SHOW_EXPERIENCES",
        "RESUME_EXPERIENCE",
        "SAVE_ON_HOLD_LAUNCHPADS",
        "UNHIDE_LAUNCHPADS",
        "HIDE_LAUNCHPADS"
      ]);
      Ct2 = i([
        "SET_SESSION",
        "SESSION_STARTED",
        "START_SESSION"
      ]);
      xi3 = i(["SET_COLLISION_MODE"]);
      fi3 = i([
        "LAUNCHPAD_SEARCH_RESPONSE",
        "LAUNCHPAD_SEARCH_ERROR"
      ]);
      tm = b3(
        $3.START_INITIALIZE,
        (e, t, n, r2) => ({ settings: e, dispatchMessage: t, transportModule: n, reporter: r2 })
      );
      ir2 = b3(
        $3.START_IDENTIFY,
        (e, t = {}, n = []) => ({ userId: e, properties: t, events: n })
      );
      nm = b3(
        $3.START_HANDLE_MESSAGE
      );
      rm = b3($3.MESSAGE_TIMEOUT);
      Ue3 = b3(
        $3.START_EVENT,
        (e, t) => ({ flowId: e, event: t })
      );
      im = b3(
        $3.START_OPEN_BUILDER_EVENT,
        (e, t) => ({ type: e, event: t })
      );
      om = b3(
        $3.FINISHED_EVENT,
        (e, t) => ({ flowId: e, event: t })
      );
      we2 = b3(
        $3.START_ACTIVITY,
        (e = {}, t = [], n = false) => n ? { properties: e, events: t, trigger: true } : { properties: e, events: t, trigger: false }
      );
      sm = b3(
        $3.START_GROUP_ACTIVITY,
        (e, t = {}) => ({ groupId: e, groupProperties: t })
      );
      cm = b3($3.START_ANONYMOUS);
      b3(
        $3.INJECT_CONTENT,
        (e) => ({ content: e })
      );
      b3(
        $3.INJECT_STYLES,
        (e, t) => ({ defaultStyles: e, styles: t })
      );
      lm = b3($3.PREPARE_CONTENT);
      am = b3($3.CLEANUP_STEP);
      um = b3($3.START_CONTENT);
      dm = b3($3.START_RESET);
      fm = b3($3.START_DEBUG);
      pm = b3(
        $3.START_FORM_SUBMISSION,
        (e, t, n, r2) => ({ formId: e, fields: t, onSuccess: n, ignoreValidation: r2 })
      );
      xr2 = b3($3.START_SHOW);
      hm = b3($3.STOP_TASKS);
      Va2 = b3(
        $3.START_CHECK,
        (e, t, n) => ({ currentUrl: e, shouldOverrideCurrentFlow: t, requestId: n })
      );
      ps2 = b3(
        $3.START_FLOW,
        (e, t, n, r2, i2 = null) => ({ flowId: e, stepId: t, url: n, eventChannel: r2, status: i2 })
      );
      Wa2 = b3(
        $3.START_STEP,
        (e, t, n = null) => ({ step: e, url: t, status: n })
      );
      vr2 = b3($3.CANCEL_ATTEMPTS);
      se4 = b3(
        $3.SEND_LIFECYCLE_EVENT,
        (e, t = null) => ({ event: e, eventChannel: t })
      );
      mm = b3($3.CLOSE_CHANNEL);
      Em = b3(
        $3.START_IDENTIFY_GROUP,
        (e, t) => ({ groupId: e, groupProperties: t })
      );
      gm = b3(U3.INITIALIZE, (e) => ({ transport: e }));
      ym = b3(U3.IDENTIFY);
      Tc2 = b3(
        U3.SENT_REQUEST,
        (e, t) => ({ requestId: e, pageViewEvent: t })
      );
      Cc2 = b3(U3.CONFIGURE_TRANSPORT);
      Pr2 = b3(
        U3.UPDATE_USER,
        (e, t) => ({ profile: e, merge: t })
      );
      Sm = b3(U3.RESET);
      hs2 = b3(
        U3.UPDATE_CONTENT,
        (e, t) => ({ orderedContent: e, content: t })
      );
      Tm = b3(U3.UPDATE_STYLES);
      Wn2 = b3(U3.WILL_SHOW_CONTENT);
      Cm = b3(U3.SHOW_CONTENT);
      _m = b3(U3.WILL_CLOSE_CONTENT);
      Im = b3(
        U3.FETCHING_CONTENT,
        (e, t) => ({ contentId: e, url: t })
      );
      Am = b3(U3.REGISTER_RENDERER);
      Ga2 = b3(U3.REGISTER_CALLBACKS);
      _c2 = b3(
        U3.ADD_EVENT_LISTENER,
        (e, t, n) => ({
          name: e,
          callback: t,
          context: n
        })
      );
      Ic2 = b3(
        U3.REMOVE_EVENT_LISTENER,
        (e, t, n) => ({
          name: e,
          callback: t,
          context: n
        })
      );
      vm = b3(U3.WAIT_IDENTIFY);
      bm = b3(U3.COMPLETED_IDENTIFY);
      wm = b3(U3.STORE_TASK, (e, t) => ({ key: e, task: t }));
      Nm = b3(U3.CLEAR_TASKS);
      km = b3(U3.CLEAR_TASK, (e, t) => ({ key: e, id: t }));
      ja2 = b3(
        U3.CLEAR_CURRENT_CONTENT
      );
      Om = b3(U3.RUN_ACTION);
      Ac2 = b3(
        U3.RESUME_ACTION,
        (e, t) => ({ action: e, status: t })
      );
      vc2 = b3(
        U3.CHECKED_FOR_INITIAL_CONTENT,
        (e, t) => ({ url: e, complete: t })
      );
      Rm = b3(
        U3.SENT_ACTIVITY_UPDATE
      );
      Lm = b3(
        U3.STARTED_FLOW_IMM
      );
      bc2 = b3(U3.SET_BODY_READY);
      xm = b3(
        U3.SAVE_OPEN_BUILDER_INSTANCE
      );
      Pm = b3(
        U3.INITIALIZE_OPEN_BUILDER
      );
      Dm = b3(
        U3.OPEN_BUILDER_INITIALIZED
      );
      Fm = b3(U3.SAVE_EXPERIMENTS);
      Pi3 = b3(
        U3.EXPERIMENT_STARTED,
        (e, t) => ({ id: e, type: t })
      );
      Um = b3(U3.SAVE_GROUP_PROPS);
      Hm = typeof Symbol == "function" && Symbol.observable || "@@observable";
      wc2 = Hm;
      Nc2 = () => Math.random().toString(36).substring(7).split("").join(".");
      Mm = {
        INIT: `@@redux/INIT${/* @__PURE__ */ Nc2()}`,
        REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Nc2()}`
      };
      kc2 = Mm;
      Oc2 = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r2 in n)
            Object.prototype.hasOwnProperty.call(n, r2) && (e[r2] = n[r2]);
        }
        return e;
      };
      Gm = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e;
      } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      };
      qm = "proc first argument (Saga function result) must be an iterator";
      Kr2 = {
        toString: function() {
          return "@@redux-saga/CHANNEL_END";
        }
      };
      Zt3 = {
        toString: function() {
          return "@@redux-saga/TASK_CANCEL";
        }
      };
      fr2 = {
        wildcard: function() {
          return Ul2;
        },
        default: function(t) {
          return (typeof t > "u" ? "undefined" : Gm(t)) === "symbol" ? function(n) {
            return n.type === t;
          } : function(n) {
            return n.type === String(t);
          };
        },
        array: function(t) {
          return function(n) {
            return t.some(function(r2) {
              return Lo(r2)(n);
            });
          };
        },
        predicate: function(t) {
          return function(n) {
            return t(n);
          };
        }
      };
      zm = function(t) {
        return { fn: t };
      };
      Xm = "runSaga(storeInterface, saga, ...args)";
      Rc2 = Xm + ": saga argument must be a Generator function!";
      eE = {
        /**
         * Reducer for SET_SESSION action. Updates the `state.session`
         */
        [Ct2.SET_SESSION]: D3((e, t) => ({
          ...e,
          session: {
            ...e.session,
            ...t
          }
        })),
        /**
         * Reducer for START_SESSION action.
         * clear the session in the state before creating a new one
         */
        [Ct2.START_SESSION]: D3((e) => ({
          ...e,
          session: {}
        }))
      };
      nE = (e) => (t, n) => Object.prototype.hasOwnProperty.call(e, n.type) ? e[n.type](t, n) : t;
      iE = {
        [$3.START_INITIALIZE]: D3((e, t) => ({
          ...e,
          settings: { ...e.settings, ...t.settings },
          reporter: t.reporter
        })),
        /**
         * Reducer for PREPARE_CONTENT action. Updates the
         * `state.currentContent.status` value.
         */
        [$3.PREPARE_CONTENT]: D3((e) => e.currentContent && e.currentContent.status === a.PENDING ? Qe3(e, { status: a.STARTED }) : e),
        [$3.START_FLOW]: D3(
          (e, { flowId: t, url: n, eventChannel: r2 }) => Qe3(e, {
            flowId: t,
            shownUrl: n,
            eventChannel: r2
          })
        ),
        [$3.START_STEP]: D3((e, { step: t, url: n }) => Qe3(e, { stepId: t.id, shownUrl: n })),
        [$3.START_EVENT]: D3((e, { flowId: t, event: n }) => {
          if (t) {
            const r2 = e.pendingEvents || {};
            return {
              ...e,
              pendingEvents: {
                ...r2,
                [t]: [...r2[t] || [], n]
              }
            };
          }
          return e;
        }),
        [$3.FINISHED_EVENT]: D3((e, { flowId: t, event: n }) => {
          if (t && e.pendingEvents && e.pendingEvents[t]) {
            const r2 = e.pendingEvents[t], i2 = r2.indexOf(n);
            if (i2 >= 0)
              return {
                ...e,
                pendingEvents: {
                  ...e.pendingEvents,
                  [t]: [
                    ...r2.slice(0, i2),
                    ...r2.slice(i2 + 1, r2.length)
                  ]
                }
              };
          }
          return e;
        }),
        [$3.START_FORM_SUBMISSION]: D3(
          (e, { formId: t, fields: n }) => {
            const { state: r2 } = e.currentContent, { currentStepChildId: i2, forms: o = {} } = r2;
            return yt3(e, {
              forms: {
                ...o,
                // This allows to save the form data per step.
                [i2]: { formId: t, fields: n }
              }
            });
          }
        ),
        [xi3.SET_COLLISION_MODE]: D3(
          (e, t) => ({
            ...e,
            collisionMode: t.collisionMode,
            collisionCoordinates: t?.collisionCoordinates ?? {
              x: 0,
              y: 0
            }
          })
        ),
        [Je3.SAVE_ON_HOLD_LAUNCHPADS]: D3(
          (e, t) => ({
            ...e,
            onHold: {
              launchpads: t
            }
          })
        )
      };
      ht2 = (e, t, n) => {
        const r2 = e.context && Object.keys(e.context) && e.context.locale_name, i2 = e.context && Object.keys(e.context) && e.context.locale_id, { workflow_id: o, workflow_task_id: s } = e;
        return {
          flowId: e.id,
          flowName: e.name,
          flowType: e.type,
          flowVersion: e.version_id,
          ...o ? { workflowId: o } : {},
          ...s ? { workflowTaskId: s } : {},
          timestamp: Date.now(),
          sessionId: t,
          localeName: r2,
          localeId: i2,
          ...n
        };
      };
      uE = (e) => ({
        timestamp: Date.now(),
        sessionId: e.id
      });
      Xe3 = {
        EXPERIENCES: "experiences",
        FLOWS: "flows"
      };
      WE = {
        /**
         * Reducer for INITIALIZE action. Updates the `state.settings` and
         * `state.transport` values.
         */
        [U3.INITIALIZE]: D3((e, t) => ({
          ...e,
          transport: {
            ...e.transport,
            ...t.transport,
            initialized: true
          }
        })),
        /**
         * Reducer for the IDENTIFY action. Updates the `state.user` value.
         */
        [U3.IDENTIFY]: D3((e, t) => e.user.userId === t ? e : t == null ? { ...e, user: {} } : ne4.defined(e.user.userId) ? { ...e, user: { userId: t } } : { ...e, user: { ...e.user, userId: t } }),
        /**
         * Reducer for the CONFIGURE_TRANSPORT action. Updates the
         * `state.transport.details` value.
         */
        [U3.CONFIGURE_TRANSPORT]: D3((e, t) => ({
          ...e,
          transport: {
            ...e.transport,
            details: { ...e.transport.details, ...t }
          }
        })),
        /**
         * Reducer for the UPDATE_USER action. Updates the `state.user` value.
         */
        [U3.UPDATE_USER]: D3((e, t) => {
          const n = be2(e);
          let r2;
          return r2 = t.merge ? { ...n, ...t.profile } : t.profile, n.userId && (r2 = { ...r2, userId: n.userId }), { ...e, user: r2 };
        }),
        /**
         * Blows away the user and anything associated.
         */
        [U3.RESET]: D3((e) => ({
          ...e,
          content: {},
          checklists: [],
          orderedContent: [],
          currentContent: null,
          user: {},
          requestId: null,
          debugger: null,
          lastCheckedForInitialContent: {},
          experiments: {
            [Xe3.FLOWS]: {},
            [Xe3.EXPERIENCES]: {}
          }
        })),
        /**
         * Reducer for the UPDATE_CONTENT action. Updates the `state.content` and
         * `state.orderedContent` values and potentially runs transformations on the
         * content objects.
         */
        [U3.UPDATE_CONTENT]: D3(
          (e, { content: t, orderedContent: n }) => {
            let r2 = t;
            return r2 && (r2 = Object.keys(r2).reduce((i2, o) => {
              let s = r2[o];
              if (jn(s))
                for (let c = 0; c < da2(s); c++) {
                  const l2 = Ft2(s, c), u2 = An(l2);
                  if (pa2(l2, u2.length - 1)) {
                    const d2 = Ft2(s, c + 1);
                    if (Or2(d2) && !ne4.defined(d2.attributes.params.initiated_by_user)) {
                      const f2 = s.attributes.steps[d2.id];
                      s = {
                        ...s,
                        ...s.attributes && {
                          attributes: {
                            ...s.attributes,
                            steps: {
                              ...s.attributes.steps,
                              [d2.id]: {
                                ...f2,
                                step: {
                                  ...f2.step,
                                  attributes: {
                                    ...f2.step.attributes,
                                    params: {
                                      ...f2.step.attributes.params,
                                      initiated_by_user: true
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      };
                    }
                  }
                }
              return { ...i2, [o]: s };
            }, {})), {
              ...e,
              content: { ...e.content, ...r2 },
              orderedContent: n
            };
          }
        ),
        /**
         * Reducer for the UPDATE_STYLES action. Updates the `state.styles` value.
         */
        [U3.UPDATE_STYLES]: D3((e, t) => ({ ...e, styles: { ...e.styles, ...t } })),
        /**
         * Reducer for WILL_SHOW_CONTENT action. Updates the `state.currentContent.status`
         * value. Not a "default reducer", so it handles errors a little differently
         * than the other reducers. In the case of an error, it sets the current
         * content status to ERROR and removes the current content from the
         * the `orderedContent` array.
         *
         * @param  {object} state  Redux state.
         * @param  {object} action A WILL_SHOW_CONTENT action object.
         *
         * @return {object} New Redux state.
         */
        [U3.WILL_SHOW_CONTENT]: (e, t) => {
          const n = ce3(e);
          if (t.error) {
            let { orderedContent: r2 } = e;
            r2 && (r2 = r2.filter((o) => o !== En2(e)));
            const i2 = {
              ...e,
              currentContent: {
                ...e.currentContent,
                status: a.ERROR,
                error: t.payload.message
              },
              orderedContent: r2
            };
            return delete i2.currentContent.shownUrl, i2;
          }
          return n && t.payload === n ? Qe3(e, { status: a.WILL_SHOW }) : e;
        },
        /**
         * Reducer for SHOW_CONTENT action. Updates the `state.currentContent.status value.
         * This is used to set the initial state/keyframe for CSS transition-style animations.
         *
         * @param state
         * @returns {*}
         */
        [U3.SHOW_CONTENT]: D3((e) => Qe3(e, { status: a.SHOWING })),
        /**
         * Reducer for WILL_CLOSE_CONTENT action. Updates the `state.currentContent.status value.
         * This is used to set the initial state/keyframe for CSS transition-style animations.
         *
         * @param state
         * @returns {*}
         */
        [U3.WILL_CLOSE_CONTENT]: D3((e) => Ve2(e) === a.SHOWING ? Qe3(e, { status: a.WILL_CLOSE }) : e),
        /**
         * Reducer for the FETCHING_CONTENT action. Sets the current content ID and
         * the content status to FETCHING.
         */
        [U3.FETCHING_CONTENT]: (e, t) => {
          const { contentId: n, url: r2 } = t.payload || {};
          return n ? Qe3(e, {
            status: a.FETCHING,
            flowId: n,
            shownUrl: r2
          }) : e;
        },
        [U3.REGISTER_RENDERER]: D3((e, t) => ({
          ...e,
          views: {
            ...e.views,
            renderers: { ...e.views.renderers, ...t }
          }
        })),
        [U3.REGISTER_CALLBACKS]: D3((e, t) => ({
          ...e,
          views: {
            ...e.views,
            callbacks: { ...e.views.callbacks, ...t }
          }
        })),
        [U3.ADD_EVENT_LISTENER]: D3((e, t) => {
          const n = { ...e.eventListeners }, { name: r2 } = t, i2 = BE(t.callback, t.context), o = n[r2];
          if (o) {
            if (o.some((s) => Dc2(s, i2)))
              return e;
            n[r2] = [...o, i2];
          } else
            n[r2] = [i2];
          return { ...e, eventListeners: n };
        }),
        [U3.REMOVE_EVENT_LISTENER]: D3((e, t) => {
          const { name: n } = t, r2 = (e.eventListeners || {})[n] || [];
          if (t.callback) {
            const i2 = VE(r2, (o) => Dc2(o, {
              callback: t.callback,
              context: t.context
            }));
            return i2 > -1 ? {
              ...e,
              eventListeners: {
                ...e.eventListeners,
                [n]: [
                  ...r2.slice(0, i2),
                  ...r2.slice(i2 + 1)
                ]
              }
            } : e;
          }
          return {
            ...e,
            eventListeners: { ...e.eventListeners, [n]: [] }
          };
        }),
        [U3.COMPLETED_IDENTIFY]: D3((e) => ({ ...e, userIdentified: true })),
        [U3.STORE_TASK]: D3((e, t) => ({
          ...e,
          tasks: {
            ...e.tasks,
            [t.key]: [...ii3(e, t.key) || [], t.task]
          }
        })),
        [U3.CLEAR_TASKS]: D3((e, t) => ii3(e, t) ? { ...e, tasks: { ...e.tasks, [t]: null } } : e),
        [U3.CLEAR_TASK]: D3((e, t) => {
          const { key: n, id: r2 } = t, i2 = ii3(e, n);
          return i2 ? {
            ...e,
            tasks: { ...e.tasks, [n]: i2.filter((o) => o.id !== r2) }
          } : e;
        }),
        [U3.CLEAR_CURRENT_CONTENT]: D3((e) => ({ ...e, currentContent: null })),
        [U3.RUN_ACTION]: D3((e, t) => Fc2(e, t)),
        [U3.RESUME_ACTION]: D3((e, t) => Fc2(e, t.action)),
        [U3.CHECKED_FOR_INITIAL_CONTENT]: D3(
          (e, t) => ({ ...e, lastCheckedForInitialContent: t })
        ),
        [U3.SAVE_OPEN_BUILDER_INSTANCE]: D3((e, t) => ({ ...e, Appcues: t, initializingOpenBuilder: false })),
        [U3.INITIALIZE_OPEN_BUILDER]: D3((e) => ({ ...e, initializingOpenBuilder: true })),
        [U3.SAVE_EXPERIMENTS]: D3((e, t) => {
          const n = t.reduce(
            (r2, i2) => (i2.flow_id && (r2[Xe3.FLOWS][i2.flow_id] = i2), i2.experience_id && (r2[Xe3.EXPERIENCES][i2.experience_id] = i2), r2),
            {
              [Xe3.FLOWS]: {
                ...e.experiments?.[Xe3.FLOWS]
              },
              [Xe3.EXPERIENCES]: {
                ...e.experiments?.[Xe3.EXPERIENCES]
              }
            }
          );
          return { ...e, experiments: n };
        }),
        [U3.SAVE_GROUP_PROPS]: D3((e, t) => ({ ...e, ...t }))
      };
      GE = {
        /**
         * Reducer for the INVALIDATE_FORM action. Updates the the
         * `state.currentContent.state.formErrors` value, marking invalid fields.
         */
        [le3.INVALIDATE_FORM]: D3((e, t) => {
          if (Array.isArray(t)) {
            const n = t.reduce((r2, i2) => (r2[i2.fieldId] = i2.messages, r2), {});
            return yt3(e, { formErrors: n });
          }
          return e;
        }),
        /**
         * Reducer for the LOADED_CSS action. Updates the `state.currentContent.state.cssLoaded`
         * value to indicate when the CSS has been loaded. Or in the case of a loading
         * failure, updates the status of the content to be ERROR.
         */
        [le3.LOADED_CSS]: D3((e, t) => {
          switch (zn2(e)) {
            case x.MODAL:
            case x.SATISFACTION_SURVEY: {
              const n = ce3(e);
              if (t === n)
                return yt3(e, {
                  cssLoaded: true
                });
              break;
            }
            case x.HOTSPOTS: {
              if (Ot3(e)[t])
                return Dt3(e, t, {
                  cssLoaded: true
                });
              break;
            }
          }
          return e;
        }),
        [le3.RESIZE_CONTENT]: D3((e, t) => {
          if (e.currentContent) {
            const { currentContent: n } = e, r2 = n.state, i2 = Math.ceil(t.height) + 2, o = Math.ceil(t.width) + 2;
            let s = {};
            if (r2 && r2.children && (s = r2.children[t.id] || {}), s.height !== i2 || s.width !== o)
              return Dt3(e, t.id, {
                height: i2,
                width: o,
                lastResizeTs: t.ts
              });
          }
          return e;
        }),
        [le3.ACTIVATED_STEP_CHILD]: D3((e, t) => e.currentContent && st3(e) === t.stepChildId ? Dt3(e, t.stepChildId, {
          activatedAt: t.timestamp
        }) : e),
        [le3.DEACTIVATED_STEP_CHILD]: D3(
          (e, t) => is3(e, t) ? Dt3(e, t, {
            activatedAt: null
          }) : e
        ),
        [le3.SET_CURRENT_STEP_CHILD]: D3(
          (e, t) => ce3(e) ? yt3(e, {
            currentStepChildId: t,
            formErrors: null
          }) : e
        ),
        [le3.CLEAR_CURRENT_STEP_CHILD]: D3((e) => ce3(e) ? yt3(e, { currentStepChildId: null }) : e),
        [le3.SET_CURRENT_STEP]: D3((e, t) => Qe3(e, {
          stepId: t,
          status: a.PENDING
        })),
        [le3.CLOSE_STEP]: D3((e, t) => En2(e) === t.flowId && ce3(e) === t.stepId ? Qe3(e, {
          stepId: null,
          status: null,
          state: {}
        }) : e),
        /**
         * Reducer for the CLOSE_FLOW action. Updates the `orderedContent` and
         * `currentContent` values.
         */
        [le3.CLOSE_FLOW]: D3((e, t) => t.flowId === En2(e) ? t.type === V2.CLEAR ? { ...e, currentContent: null } : {
          ...e,
          orderedContent: e.orderedContent.slice(1),
          currentContent: null
        } : e),
        [le3.SET_PREVIOUS_ACTIVE_ELEMENT]: D3(
          (e, t) => ({ ...e, previousActiveElement: t.element })
        ),
        [le3.SET_FORCE_FOCUS]: D3((e, t) => ({ ...e, forceFocus: t.forceFocus })),
        [le3.CLEAR_CONTENT_STATE_CHILD]: D3(
          (e, t) => rE(e, t.stepChildId)
        )
      };
      jE = {
        [di3.PREPARE_MODAL]: D3((e) => ye3(e).type === x.MODAL ? {
          ...e,
          currentContent: {
            ...e.currentContent,
            state: {
              currentStepChildId: tt(e)[0].id
            },
            status: a.READY
          }
        } : e),
        [di3.RESIZE_MODAL_CONTENT]: D3((e, t) => {
          const n = Lr2(e);
          return e.currentContent ? {
            ...e,
            currentContent: {
              ...e.currentContent,
              state: {
                ...n,
                height: Math.ceil(t.height),
                width: Math.ceil(t.width)
              }
            }
          } : e;
        })
      };
      qE = {
        [Ae4.PREPARE_SATISFACTION_SURVEY]: D3(
          (e) => ye3(e).type === x.SATISFACTION_SURVEY ? {
            ...e,
            currentContent: {
              ...e.currentContent,
              state: {
                currentStepChildId: tt(e)[0] && tt(e)[0].id,
                surveyCollapsed: false,
                askMeLaterSelected: false,
                toastVisible: false
              },
              status: a.READY
            }
          } : e
        ),
        [Ae4.COLLAPSE_SATISFACTION_SURVEY]: D3(
          (e) => ye3(e).type === x.SATISFACTION_SURVEY ? {
            ...e,
            currentContent: {
              ...e.currentContent,
              state: {
                ...e.currentContent.state,
                surveyCollapsed: true,
                toastVisible: false
              }
            }
          } : e
        ),
        [Ae4.EXPAND_SATISFACTION_SURVEY]: D3(
          (e) => ye3(e).type === x.SATISFACTION_SURVEY ? {
            ...e,
            currentContent: {
              ...e.currentContent,
              state: {
                ...e.currentContent.state,
                surveyCollapsed: false,
                toastVisible: false
              }
            }
          } : e
        ),
        [Ae4.ASK_ME_LATER_SELECTED]: D3((e) => ye3(e).type === x.SATISFACTION_SURVEY ? {
          ...e,
          currentContent: {
            ...e.currentContent,
            state: {
              ...e.currentContent.state,
              askMeLaterSelected: true,
              toastVisible: false
            }
          }
        } : e),
        [Ae4.SHOW_SATISFACTION_SURVEY_TOAST]: D3(
          (e) => ye3(e).type === x.SATISFACTION_SURVEY ? {
            ...e,
            currentContent: {
              ...e.currentContent,
              state: {
                ...e.currentContent.state,
                toastVisible: true
              }
            }
          } : e
        ),
        [Ae4.HIDE_SATISFACTION_SURVEY_TOAST]: D3(
          (e) => ye3(e).type === x.SATISFACTION_SURVEY ? {
            ...e,
            currentContent: {
              ...e.currentContent,
              state: {
                ...e.currentContent.state,
                toastVisible: false
              }
            }
          } : e
        ),
        [Ae4.QUANTITATIVE_QUESTION_SUBMITTED]: D3(
          (e) => ye3(e).type === x.SATISFACTION_SURVEY ? {
            ...e,
            currentContent: {
              ...e.currentContent,
              state: {
                ...e.currentContent.state,
                lastSubmitted: "quantitative",
                toastVisible: false
              }
            }
          } : e
        ),
        [Ae4.QUALITATIVE_QUESTION_SUBMITTED]: D3(
          (e) => ye3(e).type === x.SATISFACTION_SURVEY ? {
            ...e,
            currentContent: {
              ...e.currentContent,
              state: {
                ...e.currentContent.state,
                lastSubmitted: "qualitative",
                toastVisible: false
              }
            }
          } : e
        ),
        [Ae4.FEEDBACK_TEXT_CHANGED]: D3(
          (e, t) => ye3(e).type === x.SATISFACTION_SURVEY ? {
            ...e,
            currentContent: {
              ...e.currentContent,
              state: {
                ...e.currentContent.state,
                feedbackText: t.feedback,
                toastVisible: false
              }
            }
          } : e
        )
      };
      KE = {
        [he2.ADD_ACTIVE_ANNOTATIONS]: D3(
          (e, t) => {
            if (e.currentContent) {
              const n = (e.currentContent.state || {}).activeAnnotations || [];
              return yt3(e, {
                activeAnnotations: [...n, ...t]
              });
            }
            return e;
          }
        ),
        [he2.CONFIRM_SCROLLING]: D3((e, t) => yt3(e, {
          isScrollingToAnnotation: t
        })),
        [he2.SET_ACTIVE_ANNOTATIONS_WILL_CLOSE]: D3(
          (e, t) => {
            let n = e;
            return t.forEach((r2) => {
              n = Dt3(n, r2, {
                willClose: true
              });
            }), n;
          }
        ),
        [he2.REMOVE_ACTIVE_ANNOTATIONS]: D3(
          (e, t) => {
            if (e.currentContent) {
              const n = (e.currentContent.state || {}).activeAnnotations || [];
              return yt3(e, {
                activeAnnotations: n.filter((r2) => !t.includes(r2))
              });
            }
            return e;
          }
        ),
        [he2.SET_ANNOTATIONS_POSITIONS]: D3(
          (e, t) => {
            const n = {}, r2 = Ot3(e);
            return Object.keys(t).forEach((i2) => {
              const o = {
                ...r2[i2],
                lastRepositionedTs: Sr2()
              };
              delete o.error, delete o.errorMessage, n[i2] = Object.assign(o, t[i2]);
            }), yt3(e, {
              children: n
            });
          }
        ),
        [he2.SET_ANNOTATIONS_READY]: D3((e) => e.currentContent.state ? Qe3(e, {
          status: a.READY,
          state: { ...e.currentContent.state, retries: 0 }
        }) : e),
        [he2.SAVE_POSITION_DETAILS]: D3(
          (e, t) => {
            let n = e;
            return Object.keys(t).forEach((r2) => {
              n = Dt3(n, r2, {
                _prevPosition: t[r2]
              });
            }), n;
          }
        ),
        [he2.REPORTED_ANNOTATIONS_ERRORS]: D3(
          (e, t) => no2(e, t, () => ({ errorReported: true }))
        ),
        [he2.REPORTED_ANNOTATIONS_RECOVERY]: D3(
          (e, t) => no2(e, t, () => ({ recoveryReported: true }))
        ),
        [he2.SET_EXISTING_ANNOTATIONS_ERRORS]: D3(
          (e, t) => no2(e, Object.keys(t || {}), (n) => ({ existingError: t[n] }))
        ),
        [he2.SET_TOOLTIP_SETTLED]: D3((e, t) => Dt3(e, t.id, {
          isTooltipSettled: t.isTooltipSettled
        }))
      };
      YE = {
        [Yt.EXPAND_HOTSPOT]: D3((e, t) => ce3(e) ? Dt3(e, t, { expanded: true }) : e),
        [Yt.PREPARE_HOTSPOTS]: D3((e) => {
          const t = ye3(e);
          if (t.type === x.HOTSPOTS) {
            const n = tt(e);
            let r2 = [];
            return n && n.length > 0 ? (r2 = n.map((i2) => i2.id), Kn2(t) && (r2 = []), Qe3(e, {
              state: { ...e.currentContent.state, activeAnnotations: r2 },
              status: a.CALCULATING_POSITIONS
            })) : Qe3(e, {
              status: a.ERROR,
              error: "Empty list of hotspots.",
              state: { ...e.currentContent.state, activeAnnotations: r2 }
            });
          }
          return e;
        }),
        [Yt.SET_BEACON_SETTLED]: D3((e, t) => Dt3(e, t.id, {
          isBeaconSettled: t.isBeaconSettled
        }))
      };
      XE = {
        [Ge3.TOGGLE_ROW_DETAILS]: D3((e, t) => {
          const n = P2(
            (r2) => r2.debugger.viewState.rowState[t],
            false
          )(e);
          return zE(e, t, !n);
        }),
        [Ge3.TOGGLE_COLLAPSED]: D3((e) => Qa2(
          e,
          "isCollapsed",
          e.debugger.viewState ? !e.debugger.viewState.isCollapsed : true
        )),
        [Ge3.SET_CURRENT_PAGE]: D3((e, t) => mr2(e, "currentPage", t)),
        [Ge3.TRACK_PAGE]: D3((e, t) => mr2(e, "lastTrackedPage", t)),
        [Ge3.ADD_CONTENT_ERROR]: D3((e, t) => mr2(e, "contentErrors", [
          ...Pf2(e),
          t
        ])),
        [Ge3.ADD_CHILD_ERROR]: D3((e, t) => {
          const n = Df2(e);
          return mr2(e, "childErrors", {
            ...n,
            [t.contentId]: {
              ...n[t.contentId],
              [t.childId]: { errorMessage: t.errorMessage }
            }
          });
        }),
        [Ge3.CLOSE_DEBUGGER]: D3((e) => ({ ...e, debugger: null }))
      };
      JE = {
        // Should merge the list of checklists in the action's payload into state by
        // updating the `attributes` property for each checklist in the list and
        // removing from state any that are no longer present.
        [re4.UPDATE_CHECKLISTS]: D3((e, t) => {
          const n = e.checklists || [];
          return t ? {
            ...e,
            checklists: t.map((r2) => ({
              ...Za2(
                r2.id,
                n
              ),
              id: r2.id,
              internal_name: r2.internal_name,
              attributes: r2,
              status: r2.status
            }))
          } : e;
        }),
        [re4.SET_CHECKLIST_STATUS]: D3((e, t) => {
          const n = e.checklists || [];
          return {
            ...e,
            checklists: n.map((r2) => r2.id === t.id ? { ...r2, status: t.status } : r2)
          };
        }),
        [re4.ANIMATE_IN_CHECKLIST]: D3((e, t) => Lt2(e, t.id, {
          viewState: q2.FIRSTVIEW
        })),
        [re4.EXPAND_CHECKLIST]: D3((e, t) => Lt2(e, t.checklistId, {
          viewState: q2.EXPANDED
        })),
        [re4.SET_EXPAND_CHECKLIST_LATER]: D3(
          (e, t) => Lt2(e, t.checklistId, {
            shouldTryExpandChecklist: t.shouldTryExpandChecklist
          })
        ),
        [re4.COLLAPSE_CHECKLIST]: D3((e, t) => Lt2(e, t.checklistId, {
          viewState: q2.COLLAPSED
        })),
        [re4.SHOW_DISMISS_CONFIRMATION]: D3(
          (e, t) => Lt2(e, t.checklistId, {
            shouldShowConfirmDismiss: true
          })
        ),
        [re4.CANCEL_DISMISS_CONFIRMATION]: D3(
          (e, t) => Lt2(e, t.checklistId, {
            shouldShowConfirmDismiss: false
          })
        ),
        [re4.CONFIRM_DISMISS_CHECKLIST]: D3(
          (e, t) => Lt2(e, t.checklistId, {
            status: a.DISMISSED,
            shouldShowConfirmDismiss: false
          })
        ),
        [re4.SET_CHECKLIST_HEIGHT]: D3((e, t) => Lt2(e, t.checklistId, {
          frameHeight: Math.ceil(t.height)
        })),
        [re4.SET_CHECKLIST_WIDTH]: D3((e, t) => Lt2(e, t.checklistId, {
          beaconWidth: Math.ceil(t.width)
        }))
      };
      QE = {
        [Fn2.LOADED_TEST_MODE_CSS]: D3((e) => ({ ...e, test: { cssLoaded: true } }))
      };
      ZE = {
        [vt3.LOADED_LAUNCHPAD]: D3(
          (e, { selector: t, position: n, header: r2, footer: i2, icon: o }) => ({
            ...e,
            widget: {
              selector: t,
              position: n,
              header: r2,
              footer: i2,
              icon: o,
              expanded: false
            }
          })
        ),
        [vt3.UPDATED_WIDGET_HISTORY]: D3(
          (e, { history: t }) => ({
            ...e,
            widget: {
              ...e.widget,
              history: t
            }
          })
        ),
        [vt3.UPDATED_WIDGET_FLOWS]: D3((e, { flows: t }) => ({
          ...e,
          widget: {
            ...e.widget,
            flows: t
          }
        })),
        [vt3.TOGGLED_WIDGET]: D3((e, { expanded: t }) => ({
          ...e,
          widget: {
            ...e.widget,
            expanded: t
          }
        }))
      };
      eu2 = ({ width: e, height: t }) => /* @__PURE__ */ a2.svg("svg", { "attrs-viewBox": "0 0 38 45", "attrs-width": e, "attrs-height": t }, /* @__PURE__ */ a2.svg("g", { "attrs-fill": "#bebebe" }, /* @__PURE__ */ a2.svg("polygon", { "attrs-points": "15.939 25.197 28.904 45.567 35.71 45.567 35.71 0 15.939 25.197" }), /* @__PURE__ */ a2.svg("polygon", { "attrs-points": "0 45.567 12.516 45.567 12.516 29.466 0 45.567" })));
      tg = "http://www.appcues.com/powered-by?utm_medium=embed-script&utm_campaign=powered-by-appcues";
      ng = "https://www.appcues.com/nps-survey-software?utm_medium=branding&utm_campaign=powered-by";
      Yr2 = {};
      sg = og();
      cg = /* @__PURE__ */ ls2(sg);
      lg = /[$()+.?[\\\]^{|}]/g;
      ag = /\*/g;
      ug = /\\{\\{.*?\\}\\}/g;
      $c2 = ".+";
      dg = /(\/$|\/(\?|#))$/;
      fg = /(\/\*)$/;
      pg = /^(https?:)\/\//i;
      Vc2 = "//twemoji.maxcdn.com/2/svg/";
      yg = "//cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/";
      Wc2 = /* @__PURE__ */ new Set([
        "skip",
        "skip-and-end-flow",
        "end",
        "prev",
        "end-flow"
      ]);
      Cg = "pattern-title";
      _g = (e) => {
        setTimeout(() => {
          const [t] = Ri3(e.elm);
          if (t) {
            it2(t);
            return;
          }
          it2(e.elm);
        }, 500);
      };
      Do = ".appcues-content-outline-styling";
      gs2 = ({ key: e, target: t }) => {
        const n = t.ownerDocument || t, r2 = n.documentElement?.querySelector(Do) ?? n.querySelector(Do);
        e === "Tab" && (r2.innerHTML = "", n.removeEventListener("keydown", gs2));
      };
      vg = (e) => {
        setTimeout(() => {
          e.elm.ownerDocument.addEventListener("keydown", gs2);
        }, 200);
      };
      bg = (e) => {
        e.elm.ownerDocument.removeEventListener("keydown", gs2);
      };
      wg = `
  appcues cue > section *, .content * {
    outline: none;
  }
`;
      Ng = "/generic/main/7.13.3/modal.bfa6d184b8ace06dc4ece82bcefcd323190112c8.css";
      kg = "/generic/main/7.13.3/modal-step-legacy-render.bfa6d184b8ace06dc4ece82bcefcd323190112c8.css";
      Og = "sha256-gMdbP/xfvtptqP/0vvPGgdlUKg1OcJp09by8eMIzx4Q=";
      Rg = "sha256-Ea5gC5g6QacVSWApI6ApmuZheqr4EDl50hD7GyRsaz0=";
      Lg = Bt2(kg);
      zr2 = Bt2(Ng);
      Gc2 = /* @__PURE__ */ new Set(["shorty", "slideout"]);
      so2 = (e) => {
        if (e.key === "Tab") {
          const t = document.documentElement.querySelector(
            "appcues-container iframe"
          ).contentWindow.document, { activeElement: n } = t, r2 = Ri3(
            t.documentElement
          ), i2 = r2.length, o = r2.indexOf(n);
          if (n === t.body) {
            e.shiftKey && (e.preventDefault(), qc2(r2[i2 - 1]));
            return;
          }
          (e.shiftKey && o === 0 || !e.shiftKey && o === i2 - 1) && (e.preventDefault(), qc2(r2[0]));
        }
      };
      Ug = "/generic/main/7.13.3/tooltip.bfa6d184b8ace06dc4ece82bcefcd323190112c8.css";
      Hg = "sha256-9y1o/fRpWDU82ZWAjihfIJSZnx+knnDTkr5DYPSqYhg=";
      Xr2 = Bt2(Ug);
      Kc2 = "//twemoji.maxcdn.com/2/svg/";
      Mg = "//cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/";
      Tr = "hs";
      Yc2 = "pattern-title";
      zc2 = "Hide these tips";
      cu2 = (e) => {
        const t = Sh2(Yc2, true), n = e.styling || {}, r2 = e.width || 0, i2 = e.height || 0, o = Number.parseInt(e.zIndex, 10), s = {
          position: e.fixed ? "fixed" : "absolute",
          height: `${i2}px`,
          width: `${r2}px`,
          // We want the tooltip z-index to be one higher so we don't have beacons
          // showing above tooltips.
          zIndex: Number.isNaN(o) ? e.zIndex || "" : o + 1,
          border: "none"
        }, c = e.callbacks || {}, l2 = e.formatVersion === 1, u2 = e.isTooltipSettled && !e.willClose && e.stepVisible && e.isElementVisible, d2 = (w3) => {
          c.onNextButtonClick(w3, e.id, e.isLast);
        }, f2 = (w3) => {
          c.onPrevButtonClick(w3, e.id);
        }, h2 = (w3) => {
          c.onComplete(w3, e.id);
        }, y2 = (w3) => {
          c.onCompleteFlow(w3, e.id);
        }, p2 = (w3, J3) => {
          const de3 = w3.target.ownerDocument;
          J3 ? Oi3(de3, Xr2, () => {
            c.onCSSLoaded && c.onCSSLoaded(e.id, Xr2, true), ys2(
              de3,
              e.id,
              ".tooltip",
              c.onContentChange
            );
          }) : c.onCSSLoaded && c.onCSSLoaded(e.id, Xr2, false);
        }, m3 = (w3) => {
          if (t(w3), Oa2(w3)) {
            const J3 = Ne3(w3, "data-step"), de3 = Ne3(w3, "href"), pe3 = on(w3, "appcues-button"), Ce3 = Ne3(w3, "data-attrs-event"), Oe3 = Ne3(w3, "data-attrs-profile-update"), Ye3 = Ne3(w3, "data-next-content-id"), Le3 = [];
            if (Ye3 && Le3.push(
              () => c.onSetNextContentIdCookie(Ye3)
            ), de3 ? (tu2(w3), Le3.push((Y4, ie4) => {
              c.onLinkClick(e.id, ie4);
            })) : (Ee3(w3, "role", "button"), Ee3(w3, "tabindex", "0")), Oe3)
              try {
                const Y4 = JSON.parse(Oe3);
                Object.keys(Y4).length > 0 && Le3.push(
                  () => c.onHandleProfileUpdate(Y4)
                );
              } catch {
              }
            if (Ce3)
              try {
                const Y4 = JSON.parse(Ce3);
                Object.keys(Y4).length > 0 && Le3.push(
                  () => c.onHandleUserEvent(
                    Y4.event,
                    Y4.properties
                  )
                );
              } catch {
              }
            const V3 = (Y4) => (ie4, _e3) => {
              window.setTimeout(() => Y4(ie4, _e3), 1);
            };
            if (/^\d+$/.test(J3))
              Le3.push((Y4) => {
                c.onJumpStep(Y4, e.id, Number.parseInt(J3, 10));
              });
            else if (J3) {
              const Y4 = {
                end: h2,
                next: d2,
                prev: f2,
                skip: c.onSkip,
                // as we don't have a clear separation between
                // button action and its configuration.
                // for example:
                // a button can have dismiss action
                // and complete the flow as its configuration
                // that is not a thing today.
                // we actually save dismiss action and any other action
                // that can complete the flow as `end-flow` action.
                // As we need to ignore the form validation ONLY
                // for dismiss, the safest thing to do was to create this new action
                // skip-and-end-flow
                // this would be mostly useful for modals
                // but we also need to provide support on tooltips
                "skip-and-end-flow": y2,
                "end-flow": y2
              }[J3];
              Y4 && Le3.push(V3(Y4));
            }
            pe3 && Ee3(w3, "tabindex", "0"), La2(w3, (Y4) => {
              Le3.push(Y4);
            }), Le3.length > 0 && nu2(w3, (Y4, ie4) => {
              Le3.forEach((_e3) => {
                _e3(Y4, ie4);
              });
            });
          }
          if (Ra2(w3)) {
            Ee3(w3, "crossOrigin", "anonymous"), Ne3(w3, "alt") || (Ee3(w3, "alt", ""), Ee3(w3, "role", "presentation"));
            const de3 = Ne3(w3, "src");
            if (de3?.includes(Kc2)) {
              const pe3 = de3.replace(Kc2, Mg);
              Ee3(w3, "src", pe3);
            }
            Et2(w3, "load", (pe3) => {
              if (c.onContentChange) {
                const Ce3 = pe3.target.ownerDocument;
                window.requestAnimationFrame(() => {
                  c.onContentChange(
                    e.id,
                    Ce3.documentElement.querySelector(".tooltip")
                  );
                });
              }
            });
          }
        }, T2 = Ut3(e.html, {
          hooks: {
            create: m3
          }
        });
        let _ = e.tooltipAlignment;
        if (!_) {
          let w3 = "bottom";
          e.yRegion > 1 && (w3 = "top");
          let J3 = "";
          e.xRegion === 0 ? J3 = "-right" : e.xRegion === 3 && (J3 = "-left"), _ = `${w3}${J3}`;
        }
        const S2 = { [`align-${_}`]: true }, A3 = { [`content-${_}`]: true };
        (_ === "top" || _ === "bottom") && (s.left = `${e.x + te / 2 - r2 / 2}px`), (_ === "left" || _ === "right") && (s.top = `${e.y - (i2 - te - ce2) / 2}px`);
        const I3 = _e2 + ce2 + ne3 / 2 + oe3 - te / 2;
        _.indexOf("left") > 0 ? s.left = `${e.x - r2 + I3 + te}px` : _.indexOf("right") > 0 ? s.left = `${e.x - I3}px` : _.indexOf("left") === 0 ? s.left = `${e.x - r2}px` : _.indexOf("right") === 0 && (s.left = `${e.x + te}px`), _.indexOf("top") > 0 ? s.top = `${e.y - i2 + I3 + te}px` : _.indexOf("bottom") > 0 ? s.top = `${e.y - I3 + ce2}px` : _.indexOf("top") === 0 ? s.top = `${e.y - i2}px` : _.indexOf("bottom") === 0 && (s.top = `${e.y + te}px`);
        const C3 = (w3) => {
          if (c.onContentChange) {
            const { target: J3 } = w3;
            window.requestAnimationFrame(() => {
              document.documentElement.contains(J3) && c.onContentChange(
                e.id,
                J3.contentDocument.documentElement.querySelector(".tooltip")
              );
            });
          }
        }, O3 = $g(e, c), { addEscapeEventListener: L3, removeEscapeEventListener: H4 } = ou2(Ss(O3), O3.onSkip), R3 = (w3) => {
          if (w3.key === "Tab" || [38, 40, 37, 39].includes(w3.keyCode)) {
            w3.stopPropagation();
            const de3 = (c.onClickOut || e.backdropSolidEdge ? document.documentElement.querySelector(`#${Tr}-${e.id}`) : document.documentElement)?.querySelector(
              ".appcues-tooltip-container"
            );
            if (de3) {
              const { contentDocument: pe3 } = de3, { focusableElements: Ce3, isBoundaryElement: Oe3 } = Jc2(
                w3,
                pe3
              );
              if (Oe3())
                if (c.onClickOut) c.onClickOut(e.isLast);
                else {
                  if (e.backdropSolidEdge) {
                    w3.preventDefault(), it2(e.element);
                    return;
                  }
                  Ce3.some(
                    (Le3) => Le3.classList.contains("appcues-button")
                  ) || it2(e.element);
                }
              !Ce3.includes(w3.target) && e.isElementVisible && (w3.preventDefault(), it2(Ce3[0]));
            }
          }
        };
        let K3;
        const G2 = (w3) => {
          L3(w3), window.requestAnimationFrame(() => it2(w3.elm)), K3 = (J3) => {
            const pe3 = (c.onClickOut || e.backdropSolidEdge ? document.documentElement.querySelector(`#${Tr}-${e.id}`) : document.documentElement)?.querySelector(
              ".appcues-tooltip-container"
            );
            if (pe3) {
              const { contentDocument: Ce3 } = pe3, { focusableElements: Oe3 } = Jc2(J3, Ce3);
              Oe3.length > 0 && it2(Oe3[0]);
            }
          }, e.element?.addEventListener("blur", K3);
        }, ue3 = (w3) => {
          !c.onClickOut && e.element !== document.activeElement && Ma2(e.previousActiveElement), H4(w3), e.element?.removeEventListener("blur", K3);
        };
        return /* @__PURE__ */ a2.html(
          "iframe",
          {
            src: "about:blank",
            classNames: "appcues-tooltip-container",
            style: s,
            class: S2,
            "attrs-seamless": true,
            "class-appcues-tooltip-hidden": e.hidden,
            "class-apc-hidden": !u2,
            "on-load": C3,
            "attrs-allowfullscreen": true,
            "attrs-mozallowfullscreen": true,
            "attrs-webkitallowfullscreen": true,
            "attrs-msallowfullscreen": true,
            "hook-insert": G2,
            "hook-destroy": ue3,
            "attrs-aria-hidden": false,
            "style-color-scheme": "none"
          },
          /* @__PURE__ */ a2.html(
            "link",
            {
              "attrs-href": Xr2,
              "attrs-type": "text/css",
              "attrs-rel": "stylesheet",
              "attrs-integrity": Hg,
              "attrs-crossorigin": "anonymous",
              "on-load": (w3) => {
                p2(w3, true);
              },
              "on-error": (w3) => {
                p2(w3, false);
              }
            }
          ),
          /* @__PURE__ */ a2.html(iu2, null),
          /* @__PURE__ */ a2.html(
            ru2,
            {
              styling: n.globalStyling,
              onLoad: (w3) => {
                p2(w3, true);
              }
            }
          ),
          /* @__PURE__ */ a2.html(
            "div",
            {
              "on-keydown": R3,
              classNames: "tooltip",
              "attrs-aria-label": de2.LABEL_TOOLTIP,
              "attrs-aria-modal": e.backdropSolidEdge,
              "attrs-aria-labelledby": Yc2,
              "attrs-role": "dialog",
              "attrs-tabindex": "-1"
            },
            /* @__PURE__ */ a2.html("div", { classNames: "content", class: A3 }, /* @__PURE__ */ a2.html("div", { classNames: "panel panel-default" }, /* @__PURE__ */ a2.html("div", { classNames: "panel-content" }, Bg(O3) ? /* @__PURE__ */ a2.html(
              Gg,
              {
                skipText: O3.skipText,
                onClick: O3.onSkip
              }
            ) : "", T2 || ""), l2 ? /* @__PURE__ */ a2.html(
              Vg,
              {
                skipOptions: O3,
                buttonText: e.buttonText,
                onButtonClick: d2
              }
            ) : /* @__PURE__ */ a2.html(ae4, null), e.showPoweredBy ? /* @__PURE__ */ a2.html(Es, { accountId: e.accountId }) : /* @__PURE__ */ a2.html(ae4, null)))
          )
        );
      };
      lu2 = (e, t) => {
        (e.key === " " || e.key === "Enter") && t();
      };
      pr2 = 1500;
      zg = (e) => {
        const t = "apc-spotlight", n = Math.max(
          document.documentElement.scrollHeight,
          document.documentElement.clientHeight,
          window.innerHeight
        ), r2 = Math.max(
          document.documentElement.scrollWidth,
          document.documentElement.clientWidth
        ), i2 = document && document.body && document.body.scrollTop ? document.body.scrollTop : 0, o = e.backdropSolidEdgeBorderRadius || 0, s = e.backdropSolidEdgeXPadding || 0, c = e.backdropSolidEdgeYPadding || 0, l2 = e.elementBoundingRect || {
          height: 0,
          width: 0
        }, u2 = (h2, y2, p2, m3) => ({
          top: `${h2}px`,
          left: `${y2}px`,
          width: `${p2}px`,
          height: `${m3}px`,
          background: `rgba(0,0,0,${e.backdropSolidEdgeOpacity})`,
          position: "absolute",
          pointerEvents: "all"
        }), d2 = e.boundingRect || {
          top: 0,
          left: 0
        }, f2 = {
          container: {
            position: e.fixed ? "fixed" : "absolute",
            zIndex: se3 - 1e3,
            top: "0",
            left: "0",
            pointerEvents: "none",
            height: `${n}px`,
            width: `${r2}px`
          },
          elemContainer: {
            position: "absolute",
            top: `${d2.top - c}px`,
            left: `${d2.left - s}px`,
            width: `${l2.width + 2 * s}px`,
            height: `${l2.height + 2 * c}px`,
            overflow: "hidden",
            pointerEvents: "none"
          },
          elemWrapper: {
            position: "relative",
            width: `${l2.width + 2 * s}px`,
            height: `${l2.height + 2 * c}px`,
            boxShadow: `0px 0px 0px 2000px rgba(0,0,0,${e.backdropSolidEdgeOpacity})`,
            borderRadius: `${o}px`,
            pointerEvents: "none"
          },
          backdropLeftPanel: u2(
            0,
            0,
            d2.left - s,
            n + i2
          ),
          backdropTopPanel: u2(
            0,
            d2.left - s,
            l2.width + 2 * s,
            d2.top - c
          ),
          backdropRightPanel: u2(
            0,
            d2.right + s,
            r2 - (d2.right + s),
            n + i2
          ),
          backdropBottomPanel: u2(
            d2.bottom + c,
            d2.left - s,
            l2.width + 2 * s,
            n + i2 - (d2.bottom + c)
          )
        };
        return /* @__PURE__ */ a2.html(
          "div",
          {
            style: f2.container,
            classNames: "apc-solid-edge apc-sequential-backdrop",
            key: e.id
          },
          /* @__PURE__ */ a2.html("div", { style: f2.elemContainer }, /* @__PURE__ */ a2.html(
            "div",
            {
              style: f2.elemWrapper,
              classNames: "apc-spotlight"
            }
          )),
          /* @__PURE__ */ a2.html(
            "div",
            {
              style: f2.backdropLeftPanel,
              classNames: t
            }
          ),
          /* @__PURE__ */ a2.html(
            "div",
            {
              style: f2.backdropRightPanel,
              classNames: t
            }
          ),
          /* @__PURE__ */ a2.html(
            "div",
            {
              style: f2.backdropTopPanel,
              classNames: t
            }
          ),
          /* @__PURE__ */ a2.html(
            "div",
            {
              style: f2.backdropBottomPanel,
              classNames: t
            }
          )
        );
      };
      Xg = ({ annotation: e, isScrollingToAnnotation: t }) => {
        const {
          backdrop: n,
          backdropSolidEdge: r2,
          backdropSolidEdgeOpacity: i2,
          cssLoaded: o,
          isActivated: s,
          isElementVisible: c
        } = e;
        if (!n) return /* @__PURE__ */ a2.html(ae4, null);
        if (t)
          return /* @__PURE__ */ a2.html(
            "div",
            {
              className: "apc-full-backdrop apc-sequential-backdrop",
              "data-testid": "full-backdrop",
              style: {
                top: "0",
                left: "0",
                width: "100vw",
                height: "100vh",
                background: `rgba(0,0,0,${i2})`,
                position: "fixed",
                pointerEvents: r2 ? "all" : "none",
                zIndex: se3
              }
            }
          );
        const l2 = e.boundingRect || {
          top: 0,
          left: 0
        }, u2 = e.elementBoundingRect || {
          height: 0,
          width: 0
        }, d2 = {
          position: e.fixed ? "fixed" : "absolute",
          pointerEvents: "none",
          top: "0px",
          left: "0px",
          overflow: "hidden",
          height: `${Math.max(
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight,
            window.innerHeight
          )}px`,
          width: `${Math.max(
            document.documentElement.scrollWidth,
            document.documentElement.clientWidth
          )}px`,
          zIndex: se3 - 1e3
        }, f2 = u2.width ? u2.width + 2 * pr2 : 0, h2 = u2.height ? u2.height + 2 * pr2 : 0, y2 = {
          position: "relative",
          top: `${l2.top - pr2}px`,
          left: `${l2.left - pr2}px`,
          height: `${h2}px`,
          width: `${f2}px`,
          boxSizing: "border-box",
          border: `${pr2}px solid transparent`,
          pointerEvents: "none",
          borderImage: `radial-gradient(transparent 2%, rgba(0, 0, 0, ${i2}) 28%) 49% 49% 49% 49%`,
          boxShadow: `0 0 0 2500px rgba(0, 0, 0, ${i2})`,
          zIndex: se3 - 1e3
        };
        return o && s && c ? r2 ? zg(e) : /* @__PURE__ */ a2.html("div", { style: d2 }, /* @__PURE__ */ a2.html(
          "div",
          {
            style: y2,
            classNames: "apc-animated-backdrop apc-spotlight apc-sequential-backdrop"
          }
        )) : /* @__PURE__ */ a2.html(ae4, null);
      };
      au2 = ".appcues-beacon-outline-styling";
      Ts = ({ key: e }) => {
        const t = document.documentElement.querySelector(au2);
        e === "Tab" && (t.innerHTML = "", document.removeEventListener("keydown", Ts));
      };
      Qg = () => {
        document.addEventListener("keydown", Ts);
      };
      Zg = () => {
        document.removeEventListener("keydown", Ts);
      };
      ey = `
  .beacon-container:focus, .beacon:focus {
    outline: none;
  }
`;
      sy = {
        click: (e) => {
          e.stopPropagation(), e.preventDefault(), e.target.control.checked = true, e.target.form.requestSubmit();
        }
      };
      tl2 = {
        click: (e) => {
          e.stopPropagation(), e.preventDefault();
        }
      };
      fy = "/generic/main/7.13.3/satisfaction-survey.bfa6d184b8ace06dc4ece82bcefcd323190112c8.css";
      py = "sha256-orClVQ0cwyOjh8QFSBbV42LCG1fNHRPUyzFj1HntWSY=";
      co2 = Bt2(fy);
      my = b3(le3.INVALIDATE_FORM);
      Ey = b3(le3.LOADED_CSS);
      gy = b3(
        le3.RESIZE_CONTENT,
        (e, t, n) => ({ id: e, height: t.height, width: t.width, ts: n })
      );
      yy = b3(
        le3.ACTIVATED_STEP_CHILD,
        (e, t) => ({ stepChildId: e, timestamp: t })
      );
      Sy = b3(
        le3.DEACTIVATED_STEP_CHILD
      );
      dn = b3(
        le3.SET_CURRENT_STEP_CHILD
      );
      Ty = b3(
        le3.CLEAR_CURRENT_STEP_CHILD
      );
      Cy = b3(le3.SET_CURRENT_STEP);
      fu2 = b3(
        le3.ADVANCE_STEP_CHILD,
        (e, t, n, r2, i2 = false) => ({ contentType: e, step: t, childId: n, nextChildId: r2, shouldEndFlow: i2 })
      );
      _y = b3(
        le3.RUN_PREV_STEP_CHILD,
        (e, t) => ({ step: e, stepChildId: t })
      );
      Iy = b3(
        le3.CLOSE_STEP,
        (e, t) => ({ flowId: e, stepId: t })
      );
      Jt3 = b3(
        le3.CLOSE_FLOW,
        (e, t) => ({ flowId: e, type: t })
      );
      Ay = b3(
        le3.CANCEL_STEP,
        (e, t) => ({ flowId: e, stepId: t })
      );
      pu2 = b3(
        le3.SET_PREVIOUS_ACTIVE_ELEMENT,
        (e) => ({ element: e })
      );
      vy = b3(
        le3.SET_FORCE_FOCUS,
        (e) => ({ forceFocus: e })
      );
      hu2 = b3(
        le3.SET_NEXT_CONTENT_ID_COOKIE,
        (e) => ({ nextContentId: e })
      );
      Fo2 = b3(
        le3.CLEAR_CONTENT_STATE_CHILD
      );
      by = b3(di3.PREPARE_MODAL);
      wy = b3(
        di3.RESIZE_MODAL_CONTENT,
        (e, t) => ({ id: e, height: t.height, width: t.width })
      );
      Ny = (e, t) => (n) => {
        e(
          se4(
            ft2(
              Te3.CHILD_DEACTIVATED,
              ce3(t()),
              n,
              {
                ts: Date.now()
              }
            )
          )
        );
      };
      Ly = (e) => e.length > 1 ? e.map((t) => t.value).join(`
`) : e[0]?.value || null;
      Py = b3(Yt.EXPAND_HOTSPOT);
      Dy = b3(Yt.PREPARE_HOTSPOTS);
      Fy = b3(
        Yt.SET_BEACON_SETTLED,
        (e, t) => ({ id: e, isBeaconSettled: t })
      );
      si3 = b3(
        Yt.CLOSE_LAST_HOTSPOT,
        (e, t, n = {}) => ({ stepId: e, childId: t, params: n })
      );
      Uy = b3(
        he2.ADD_ACTIVE_ANNOTATIONS
      );
      Hy = b3(
        he2.REMOVE_ACTIVE_ANNOTATIONS
      );
      Cs = b3(
        he2.HIDE_AND_REMOVE_ACTIVE_ANNOTATIONS
      );
      My = b3(
        he2.SET_ACTIVE_ANNOTATIONS_WILL_CLOSE
      );
      $y = b3(
        he2.START_CALCULATE_POSITIONS
      );
      il2 = b3(
        he2.START_HANDLE_POSITION_UPDATES
      );
      By = b3(
        he2.SET_ANNOTATIONS_POSITIONS
      );
      Vy = b3(
        he2.SET_ANNOTATIONS_READY
      );
      Eu2 = b3(
        he2.SET_IS_SCROLLING_TO_ANNOTATION,
        (e, t) => ({ annotationId: e, isScrolling: t })
      );
      Wy = b3(
        he2.SAVE_POSITION_DETAILS
      );
      Gy = b3(
        he2.REPORTED_ANNOTATIONS_ERRORS
      );
      jy = b3(
        he2.REPORTED_ANNOTATIONS_RECOVERY
      );
      qy = b3(
        he2.SET_EXISTING_ANNOTATIONS_ERRORS
      );
      Ky = b3(
        he2.SET_TOOLTIP_SETTLED,
        (e, t) => ({ id: e, isTooltipSettled: t })
      );
      Yy = b3(
        he2.GO_TO_STEP,
        (e, t, n) => ({ stepId: e, currentStepChildId: t, nextStepChildIndex: n })
      );
      Xy = b3(
        Ae4.PREPARE_SATISFACTION_SURVEY
      );
      Jy = b3(
        Ae4.START_COLLAPSING_SATISFACTION_SURVEY
      );
      yu2 = b3(
        Ae4.COLLAPSE_SATISFACTION_SURVEY
      );
      Qy = b3(
        Ae4.EXPAND_SATISFACTION_SURVEY
      );
      Su2 = b3(
        Ae4.SHOW_SATISFACTION_SURVEY_TOAST
      );
      Tu2 = b3(
        Ae4.HIDE_SATISFACTION_SURVEY_TOAST
      );
      Zy = b3(
        Ae4.QUANTITATIVE_QUESTION_SUBMITTED,
        (e) => ({ score: e })
      );
      eS = b3(
        Ae4.CLICKED_UPDATE_NPS_SCORE
      );
      tS = b3(
        Ae4.QUALITATIVE_QUESTION_SUBMITTED,
        (e) => ({ feedback: e })
      );
      nS = b3(
        Ae4.FEEDBACK_TEXT_CHANGED,
        (e) => ({ feedback: e })
      );
      rS = b3(
        Ae4.ASK_ME_LATER_SELECTED
      );
      ol2 = b3(re4.START_CHECKLIST);
      Sn2 = b3(
        re4.SET_CHECKLIST_STATUS,
        (e, t) => ({ id: e, status: t })
      );
      sl2 = b3(
        re4.UPDATE_CHECKLISTS
      );
      Fi3 = b3(
        re4.HIDE_CHECKLISTS
      );
      br2 = b3(
        re4.UNHIDE_CHECKLISTS
      );
      cl2 = b3(
        re4.ANIMATE_IN_CHECKLIST
      );
      Ur2 = b3(
        re4.EXPAND_CHECKLIST,
        (e) => ({ checklistId: e })
      );
      fn = b3(
        re4.COLLAPSE_CHECKLIST,
        (e) => ({ checklistId: e })
      );
      Cu2 = b3(
        re4.SET_EXPAND_CHECKLIST_LATER,
        (e, t) => ({ checklistId: e, shouldTryExpandChecklist: t })
      );
      oS = b3(
        re4.SHOW_DISMISS_CONFIRMATION,
        (e) => ({ checklistId: e })
      );
      sS = b3(
        re4.CANCEL_DISMISS_CONFIRMATION,
        (e) => ({ checklistId: e })
      );
      cS = b3(
        re4.CONFIRM_DISMISS_CHECKLIST,
        (e, t, n) => ({ checklistId: e, checklistName: t, didCompleteChecklist: n })
      );
      lS = b3(
        re4.LOADED_CHECKLIST_CSS,
        (e) => ({ checklistId: e })
      );
      _u2 = b3(
        re4.SEND_CHECKLIST_ERROR
      );
      Iu2 = b3(
        re4.START_CHECKLIST_ITEM,
        (e, t, n = 0, r2 = {}) => ({ checklistId: e, itemId: t, actionIndex: n, checklist: r2 })
      );
      aS = b3(
        re4.START_CHECKLIST_ACTION,
        (e, t, n, r2) => ({ action: e, checklistId: t, itemId: n, actionIndex: r2 })
      );
      ao2 = b3(
        re4.COMPLETED_CHECKLIST_ACTION,
        (e, t, n) => ({ checklistId: e, itemId: t, actionIndex: n })
      );
      uS = b3(
        re4.SET_CHECKLIST_HEIGHT,
        (e, t) => ({ checklistId: e, height: t })
      );
      dS = b3(
        re4.SET_CHECKLIST_WIDTH,
        (e, t) => ({ checklistId: e, width: t })
      );
      fS = b3(
        re4.CLEAR_FORCE_SHOWN_CHECKLIST
      );
      Au2 = b3(
        re4.SEND_CHECKLIST_SHOWN_EVENT,
        (e) => ({ checklist: e })
      );
      mS = b3(
        vt3.LOADED_LAUNCHPAD,
        ({ selector: e, position: t, header: n, footer: r2, icon: i2 }) => ({ selector: e, position: t, header: n, footer: r2, icon: i2 })
      );
      ES = b3(
        vt3.UPDATED_WIDGET_HISTORY,
        (e) => ({ history: e })
      );
      gS = b3(
        vt3.UPDATED_WIDGET_FLOWS,
        (e) => ({ flows: e })
      );
      uo2 = b3(
        vt3.TOGGLED_WIDGET,
        (e) => ({ expanded: e })
      );
      Cr2 = (e) => typeof e == "function" ? e : function() {
        return e;
      };
      TS = typeof self < "u" ? self : null;
      Er2 = typeof window < "u" ? window : null;
      pn = TS || Er2 || pn;
      CS = "2.0.0";
      It2 = { connecting: 0, open: 1, closing: 2, closed: 3 };
      _S = 1e4;
      IS = 1e3;
      rt3 = {
        closed: "closed",
        errored: "errored",
        joined: "joined",
        joining: "joining",
        leaving: "leaving"
      };
      xt2 = {
        close: "phx_close",
        error: "phx_error",
        join: "phx_join",
        reply: "phx_reply",
        leave: "phx_leave"
      };
      Uo2 = {
        longpoll: "longpoll",
        websocket: "websocket"
      };
      AS = {
        complete: 4
      };
      Qr2 = class {
        constructor(e, t, n, r2) {
          this.channel = e, this.event = t, this.payload = n || function() {
            return {};
          }, this.receivedResp = null, this.timeout = r2, this.timeoutTimer = null, this.recHooks = [], this.sent = false;
        }
        /**
         *
         * @param {number} timeout
         */
        resend(e) {
          this.timeout = e, this.reset(), this.send();
        }
        /**
         *
         */
        send() {
          this.hasReceived("timeout") || (this.startTimeout(), this.sent = true, this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload(),
            ref: this.ref,
            join_ref: this.channel.joinRef()
          }));
        }
        /**
         *
         * @param {*} status
         * @param {*} callback
         */
        receive(e, t) {
          return this.hasReceived(e) && t(this.receivedResp.response), this.recHooks.push({ status: e, callback: t }), this;
        }
        /**
         * @private
         */
        reset() {
          this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = false;
        }
        /**
         * @private
         */
        matchReceive({ status: e, response: t, _ref: n }) {
          this.recHooks.filter((r2) => r2.status === e).forEach((r2) => r2.callback(t));
        }
        /**
         * @private
         */
        cancelRefEvent() {
          this.refEvent && this.channel.off(this.refEvent);
        }
        /**
         * @private
         */
        cancelTimeout() {
          clearTimeout(this.timeoutTimer), this.timeoutTimer = null;
        }
        /**
         * @private
         */
        startTimeout() {
          this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, (e) => {
            this.cancelRefEvent(), this.cancelTimeout(), this.receivedResp = e, this.matchReceive(e);
          }), this.timeoutTimer = setTimeout(() => {
            this.trigger("timeout", {});
          }, this.timeout);
        }
        /**
         * @private
         */
        hasReceived(e) {
          return this.receivedResp && this.receivedResp.status === e;
        }
        /**
         * @private
         */
        trigger(e, t) {
          this.channel.trigger(this.refEvent, { status: e, response: t });
        }
      };
      vu2 = class {
        constructor(e, t) {
          this.callback = e, this.timerCalc = t, this.timer = null, this.tries = 0;
        }
        reset() {
          this.tries = 0, clearTimeout(this.timer);
        }
        /**
         * Cancels any previous scheduleTimeout and schedules callback
         */
        scheduleTimeout() {
          clearTimeout(this.timer), this.timer = setTimeout(() => {
            this.tries = this.tries + 1, this.callback();
          }, this.timerCalc(this.tries + 1));
        }
      };
      vS = class {
        constructor(e, t, n) {
          this.state = rt3.closed, this.topic = e, this.params = Cr2(t || {}), this.socket = n, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = false, this.joinPush = new Qr2(this, xt2.join, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new vu2(() => {
            this.socket.isConnected() && this.rejoin();
          }, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset())), this.stateChangeRefs.push(
            this.socket.onOpen(() => {
              this.rejoinTimer.reset(), this.isErrored() && this.rejoin();
            })
          ), this.joinPush.receive("ok", () => {
            this.state = rt3.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((r2) => r2.send()), this.pushBuffer = [];
          }), this.joinPush.receive("error", () => {
            this.state = rt3.errored, this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
          }), this.onClose(() => {
            this.rejoinTimer.reset(), this.socket.hasLogger() && this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`), this.state = rt3.closed, this.socket.remove(this);
          }), this.onError((r2) => {
            this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, r2), this.isJoining() && this.joinPush.reset(), this.state = rt3.errored, this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
          }), this.joinPush.receive("timeout", () => {
            this.socket.hasLogger() && this.socket.log("channel", `timeout ${this.topic} (${this.joinRef()})`, this.joinPush.timeout), new Qr2(this, xt2.leave, Cr2({}), this.timeout).send(), this.state = rt3.errored, this.joinPush.reset(), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
          }), this.on(xt2.reply, (r2, i2) => {
            this.trigger(this.replyEventName(i2), r2);
          });
        }
        /**
         * Join the channel
         * @param {integer} timeout
         * @returns {Push}
         */
        join(e = this.timeout) {
          if (this.joinedOnce)
            throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
          return this.timeout = e, this.joinedOnce = true, this.rejoin(), this.joinPush;
        }
        /**
         * Hook into channel close
         * @param {Function} callback
         */
        onClose(e) {
          this.on(xt2.close, e);
        }
        /**
         * Hook into channel errors
         * @param {Function} callback
         */
        onError(e) {
          return this.on(xt2.error, (t) => e(t));
        }
        /**
         * Subscribes on channel events
         *
         * Subscription returns a ref counter, which can be used later to
         * unsubscribe the exact event listener
         *
         * @example
         * const ref1 = channel.on("event", do_stuff)
         * const ref2 = channel.on("event", do_other_stuff)
         * channel.off("event", ref1)
         * // Since unsubscription, do_stuff won't fire,
         * // while do_other_stuff will keep firing on the "event"
         *
         * @param {string} event
         * @param {Function} callback
         * @returns {integer} ref
         */
        on(e, t) {
          let n = this.bindingRef++;
          return this.bindings.push({ event: e, ref: n, callback: t }), n;
        }
        /**
         * Unsubscribes off of channel events
         *
         * Use the ref returned from a channel.on() to unsubscribe one
         * handler, or pass nothing for the ref to unsubscribe all
         * handlers for the given event.
         *
         * @example
         * // Unsubscribe the do_stuff handler
         * const ref1 = channel.on("event", do_stuff)
         * channel.off("event", ref1)
         *
         * // Unsubscribe all handlers from event
         * channel.off("event")
         *
         * @param {string} event
         * @param {integer} ref
         */
        off(e, t) {
          this.bindings = this.bindings.filter((n) => !(n.event === e && (typeof t > "u" || t === n.ref)));
        }
        /**
         * @private
         */
        canPush() {
          return this.socket.isConnected() && this.isJoined();
        }
        /**
         * Sends a message `event` to phoenix with the payload `payload`.
         * Phoenix receives this in the `handle_in(event, payload, socket)`
         * function. if phoenix replies or it times out (default 10000ms),
         * then optionally the reply can be received.
         *
         * @example
         * channel.push("event")
         *   .receive("ok", payload => console.log("phoenix replied:", payload))
         *   .receive("error", err => console.log("phoenix errored", err))
         *   .receive("timeout", () => console.log("timed out pushing"))
         * @param {string} event
         * @param {Object} payload
         * @param {number} [timeout]
         * @returns {Push}
         */
        push(e, t, n = this.timeout) {
          if (t = t || {}, !this.joinedOnce)
            throw new Error(`tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
          let r2 = new Qr2(this, e, function() {
            return t;
          }, n);
          return this.canPush() ? r2.send() : (r2.startTimeout(), this.pushBuffer.push(r2)), r2;
        }
        /** Leaves the channel
         *
         * Unsubscribes from server events, and
         * instructs channel to terminate on server
         *
         * Triggers onClose() hooks
         *
         * To receive leave acknowledgements, use the `receive`
         * hook to bind to the server ack, ie:
         *
         * @example
         * channel.leave().receive("ok", () => alert("left!") )
         *
         * @param {integer} timeout
         * @returns {Push}
         */
        leave(e = this.timeout) {
          this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = rt3.leaving;
          let t = () => {
            this.socket.hasLogger() && this.socket.log("channel", `leave ${this.topic}`), this.trigger(xt2.close, "leave");
          }, n = new Qr2(this, xt2.leave, Cr2({}), e);
          return n.receive("ok", () => t()).receive("timeout", () => t()), n.send(), this.canPush() || n.trigger("ok", {}), n;
        }
        /**
         * Overridable message hook
         *
         * Receives all events for specialized message handling
         * before dispatching to the channel callbacks.
         *
         * Must return the payload, modified or unmodified
         * @param {string} event
         * @param {Object} payload
         * @param {integer} ref
         * @returns {Object}
         */
        onMessage(e, t, n) {
          return t;
        }
        /**
         * @private
         */
        isMember(e, t, n, r2) {
          return this.topic !== e ? false : r2 && r2 !== this.joinRef() ? (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", { topic: e, event: t, payload: n, joinRef: r2 }), false) : true;
        }
        /**
         * @private
         */
        joinRef() {
          return this.joinPush.ref;
        }
        /**
         * @private
         */
        rejoin(e = this.timeout) {
          this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = rt3.joining, this.joinPush.resend(e));
        }
        /**
         * @private
         */
        trigger(e, t, n, r2) {
          let i2 = this.onMessage(e, t, n, r2);
          if (t && !i2)
            throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
          let o = this.bindings.filter((s) => s.event === e);
          for (let s = 0; s < o.length; s++)
            o[s].callback(i2, n, r2 || this.joinRef());
        }
        /**
         * @private
         */
        replyEventName(e) {
          return `chan_reply_${e}`;
        }
        /**
         * @private
         */
        isClosed() {
          return this.state === rt3.closed;
        }
        /**
         * @private
         */
        isErrored() {
          return this.state === rt3.errored;
        }
        /**
         * @private
         */
        isJoined() {
          return this.state === rt3.joined;
        }
        /**
         * @private
         */
        isJoining() {
          return this.state === rt3.joining;
        }
        /**
         * @private
         */
        isLeaving() {
          return this.state === rt3.leaving;
        }
      };
      pi3 = class {
        static request(e, t, n, r2, i2, o, s) {
          if (pn.XDomainRequest) {
            let c = new pn.XDomainRequest();
            return this.xdomainRequest(c, e, t, r2, i2, o, s);
          } else {
            let c = new pn.XMLHttpRequest();
            return this.xhrRequest(c, e, t, n, r2, i2, o, s);
          }
        }
        static xdomainRequest(e, t, n, r2, i2, o, s) {
          return e.timeout = i2, e.open(t, n), e.onload = () => {
            let c = this.parseJSON(e.responseText);
            s && s(c);
          }, o && (e.ontimeout = o), e.onprogress = () => {
          }, e.send(r2), e;
        }
        static xhrRequest(e, t, n, r2, i2, o, s, c) {
          return e.open(t, n, true), e.timeout = o, e.setRequestHeader("Content-Type", r2), e.onerror = () => c && c(null), e.onreadystatechange = () => {
            if (e.readyState === AS.complete && c) {
              let l2 = this.parseJSON(e.responseText);
              c(l2);
            }
          }, s && (e.ontimeout = s), e.send(i2), e;
        }
        static parseJSON(e) {
          if (!e || e === "")
            return null;
          try {
            return JSON.parse(e);
          } catch {
            return null;
          }
        }
        static serialize(e, t) {
          let n = [];
          for (var r2 in e) {
            if (!Object.prototype.hasOwnProperty.call(e, r2))
              continue;
            let i2 = t ? `${t}[${r2}]` : r2, o = e[r2];
            typeof o == "object" ? n.push(this.serialize(o, i2)) : n.push(encodeURIComponent(i2) + "=" + encodeURIComponent(o));
          }
          return n.join("&");
        }
        static appendParams(e, t) {
          if (Object.keys(t).length === 0)
            return e;
          let n = e.match(/\?/) ? "&" : "?";
          return `${e}${n}${this.serialize(t)}`;
        }
      };
      bS = (e) => {
        let t = "", n = new Uint8Array(e), r2 = n.byteLength;
        for (let i2 = 0; i2 < r2; i2++)
          t += String.fromCharCode(n[i2]);
        return btoa(t);
      };
      hr2 = class {
        constructor(e) {
          this.endPoint = null, this.token = null, this.skipHeartbeat = true, this.reqs = /* @__PURE__ */ new Set(), this.awaitingBatchAck = false, this.currentBatch = null, this.currentBatchTimer = null, this.batchBuffer = [], this.onopen = function() {
          }, this.onerror = function() {
          }, this.onmessage = function() {
          }, this.onclose = function() {
          }, this.pollEndpoint = this.normalizeEndpoint(e), this.readyState = It2.connecting, setTimeout(() => this.poll(), 0);
        }
        normalizeEndpoint(e) {
          return e.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + Uo2.websocket), "$1/" + Uo2.longpoll);
        }
        endpointURL() {
          return pi3.appendParams(this.pollEndpoint, { token: this.token });
        }
        closeAndRetry(e, t, n) {
          this.close(e, t, n), this.readyState = It2.connecting;
        }
        ontimeout() {
          this.onerror("timeout"), this.closeAndRetry(1005, "timeout", false);
        }
        isActive() {
          return this.readyState === It2.open || this.readyState === It2.connecting;
        }
        poll() {
          this.ajax("GET", "application/json", null, () => this.ontimeout(), (e) => {
            if (e) {
              var { status: t, token: n, messages: r2 } = e;
              this.token = n;
            } else
              t = 0;
            switch (t) {
              case 200:
                r2.forEach((i2) => {
                  setTimeout(() => this.onmessage({ data: i2 }), 0);
                }), this.poll();
                break;
              case 204:
                this.poll();
                break;
              case 410:
                this.readyState = It2.open, this.onopen({}), this.poll();
                break;
              case 403:
                this.onerror(403), this.close(1008, "forbidden", false);
                break;
              case 0:
              case 500:
                this.onerror(500), this.closeAndRetry(1011, "internal server error", 500);
                break;
              default:
                throw new Error(`unhandled poll status ${t}`);
            }
          });
        }
        // we collect all pushes within the current event loop by
        // setTimeout 0, which optimizes back-to-back procedural
        // pushes against an empty buffer
        send(e) {
          typeof e != "string" && (e = bS(e)), this.currentBatch ? this.currentBatch.push(e) : this.awaitingBatchAck ? this.batchBuffer.push(e) : (this.currentBatch = [e], this.currentBatchTimer = setTimeout(() => {
            this.batchSend(this.currentBatch), this.currentBatch = null;
          }, 0));
        }
        batchSend(e) {
          this.awaitingBatchAck = true, this.ajax("POST", "application/x-ndjson", e.join(`
`), () => this.onerror("timeout"), (t) => {
            this.awaitingBatchAck = false, !t || t.status !== 200 ? (this.onerror(t && t.status), this.closeAndRetry(1011, "internal server error", false)) : this.batchBuffer.length > 0 && (this.batchSend(this.batchBuffer), this.batchBuffer = []);
          });
        }
        close(e, t, n) {
          for (let i2 of this.reqs)
            i2.abort();
          this.readyState = It2.closed;
          let r2 = Object.assign({ code: 1e3, reason: void 0, wasClean: true }, { code: e, reason: t, wasClean: n });
          this.batchBuffer = [], clearTimeout(this.currentBatchTimer), this.currentBatchTimer = null, typeof CloseEvent < "u" ? this.onclose(new CloseEvent("close", r2)) : this.onclose(r2);
        }
        ajax(e, t, n, r2, i2) {
          let o, s = () => {
            this.reqs.delete(o), r2();
          };
          o = pi3.request(e, this.endpointURL(), t, n, this.timeout, s, (c) => {
            this.reqs.delete(o), this.isActive() && i2(c);
          }), this.reqs.add(o);
        }
      };
      Zr2 = {
        HEADER_LENGTH: 1,
        META_LENGTH: 4,
        KINDS: { push: 0, reply: 1, broadcast: 2 },
        encode(e, t) {
          if (e.payload.constructor === ArrayBuffer)
            return t(this.binaryEncode(e));
          {
            let n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
            return t(JSON.stringify(n));
          }
        },
        decode(e, t) {
          if (e.constructor === ArrayBuffer)
            return t(this.binaryDecode(e));
          {
            let [n, r2, i2, o, s] = JSON.parse(e);
            return t({ join_ref: n, ref: r2, topic: i2, event: o, payload: s });
          }
        },
        // private
        binaryEncode(e) {
          let { join_ref: t, ref: n, event: r2, topic: i2, payload: o } = e, s = this.META_LENGTH + t.length + n.length + i2.length + r2.length, c = new ArrayBuffer(this.HEADER_LENGTH + s), l2 = new DataView(c), u2 = 0;
          l2.setUint8(u2++, this.KINDS.push), l2.setUint8(u2++, t.length), l2.setUint8(u2++, n.length), l2.setUint8(u2++, i2.length), l2.setUint8(u2++, r2.length), Array.from(t, (f2) => l2.setUint8(u2++, f2.charCodeAt(0))), Array.from(n, (f2) => l2.setUint8(u2++, f2.charCodeAt(0))), Array.from(i2, (f2) => l2.setUint8(u2++, f2.charCodeAt(0))), Array.from(r2, (f2) => l2.setUint8(u2++, f2.charCodeAt(0)));
          var d2 = new Uint8Array(c.byteLength + o.byteLength);
          return d2.set(new Uint8Array(c), 0), d2.set(new Uint8Array(o), c.byteLength), d2.buffer;
        },
        binaryDecode(e) {
          let t = new DataView(e), n = t.getUint8(0), r2 = new TextDecoder();
          switch (n) {
            case this.KINDS.push:
              return this.decodePush(e, t, r2);
            case this.KINDS.reply:
              return this.decodeReply(e, t, r2);
            case this.KINDS.broadcast:
              return this.decodeBroadcast(e, t, r2);
          }
        },
        decodePush(e, t, n) {
          let r2 = t.getUint8(1), i2 = t.getUint8(2), o = t.getUint8(3), s = this.HEADER_LENGTH + this.META_LENGTH - 1, c = n.decode(e.slice(s, s + r2));
          s = s + r2;
          let l2 = n.decode(e.slice(s, s + i2));
          s = s + i2;
          let u2 = n.decode(e.slice(s, s + o));
          s = s + o;
          let d2 = e.slice(s, e.byteLength);
          return { join_ref: c, ref: null, topic: l2, event: u2, payload: d2 };
        },
        decodeReply(e, t, n) {
          let r2 = t.getUint8(1), i2 = t.getUint8(2), o = t.getUint8(3), s = t.getUint8(4), c = this.HEADER_LENGTH + this.META_LENGTH, l2 = n.decode(e.slice(c, c + r2));
          c = c + r2;
          let u2 = n.decode(e.slice(c, c + i2));
          c = c + i2;
          let d2 = n.decode(e.slice(c, c + o));
          c = c + o;
          let f2 = n.decode(e.slice(c, c + s));
          c = c + s;
          let h2 = e.slice(c, e.byteLength), y2 = { status: f2, response: h2 };
          return { join_ref: l2, ref: u2, topic: d2, event: xt2.reply, payload: y2 };
        },
        decodeBroadcast(e, t, n) {
          let r2 = t.getUint8(1), i2 = t.getUint8(2), o = this.HEADER_LENGTH + 2, s = n.decode(e.slice(o, o + r2));
          o = o + r2;
          let c = n.decode(e.slice(o, o + i2));
          o = o + i2;
          let l2 = e.slice(o, e.byteLength);
          return { join_ref: null, ref: null, topic: s, event: c, payload: l2 };
        }
      };
      wS = class {
        constructor(e, t = {}) {
          this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.timeout = t.timeout || _S, this.transport = t.transport || pn.WebSocket || hr2, this.primaryPassedHealthCheck = false, this.longPollFallbackMs = t.longPollFallbackMs, this.fallbackTimer = null, this.sessionStore = t.sessionStorage || pn && pn.sessionStorage, this.establishedConnections = 0, this.defaultEncoder = Zr2.encode.bind(Zr2), this.defaultDecoder = Zr2.decode.bind(Zr2), this.closeWasClean = false, this.disconnecting = false, this.binaryType = t.binaryType || "arraybuffer", this.connectClock = 1, this.transport !== hr2 ? (this.encode = t.encode || this.defaultEncoder, this.decode = t.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder);
          let n = null;
          Er2 && Er2.addEventListener && (Er2.addEventListener("pagehide", (r2) => {
            this.conn && (this.disconnect(), n = this.connectClock);
          }), Er2.addEventListener("pageshow", (r2) => {
            n === this.connectClock && (n = null, this.connect());
          })), this.heartbeatIntervalMs = t.heartbeatIntervalMs || 3e4, this.rejoinAfterMs = (r2) => t.rejoinAfterMs ? t.rejoinAfterMs(r2) : [1e3, 2e3, 5e3][r2 - 1] || 1e4, this.reconnectAfterMs = (r2) => t.reconnectAfterMs ? t.reconnectAfterMs(r2) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][r2 - 1] || 5e3, this.logger = t.logger || null, !this.logger && t.debug && (this.logger = (r2, i2, o) => {
          }), this.longpollerTimeout = t.longpollerTimeout || 2e4, this.params = Cr2(t.params || {}), this.endPoint = `${e}/${Uo2.websocket}`, this.vsn = t.vsn || CS, this.heartbeatTimeoutTimer = null, this.heartbeatTimer = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new vu2(() => {
            this.teardown(() => this.connect());
          }, this.reconnectAfterMs);
        }
        /**
         * Returns the LongPoll transport reference
         */
        getLongPollTransport() {
          return hr2;
        }
        /**
         * Disconnects and replaces the active transport
         *
         * @param {Function} newTransport - The new transport class to instantiate
         *
         */
        replaceTransport(e) {
          this.connectClock++, this.closeWasClean = true, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.conn && (this.conn.close(), this.conn = null), this.transport = e;
        }
        /**
         * Returns the socket protocol
         *
         * @returns {string}
         */
        protocol() {
          return location.protocol.match(/^https/) ? "wss" : "ws";
        }
        /**
         * The fully qualified socket url
         *
         * @returns {string}
         */
        endPointURL() {
          let e = pi3.appendParams(
            pi3.appendParams(this.endPoint, this.params()),
            { vsn: this.vsn }
          );
          return e.charAt(0) !== "/" ? e : e.charAt(1) === "/" ? `${this.protocol()}:${e}` : `${this.protocol()}://${location.host}${e}`;
        }
        /**
         * Disconnects the socket
         *
         * See https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes for valid status codes.
         *
         * @param {Function} callback - Optional callback which is called after socket is disconnected.
         * @param {integer} code - A status code for disconnection (Optional).
         * @param {string} reason - A textual description of the reason to disconnect. (Optional)
         */
        disconnect(e, t, n) {
          this.connectClock++, this.disconnecting = true, this.closeWasClean = true, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.teardown(() => {
            this.disconnecting = false, e && e();
          }, t, n);
        }
        /**
         *
         * @param {Object} params - The params to send when connecting, for example `{user_id: userToken}`
         *
         * Passing params to connect is deprecated; pass them in the Socket constructor instead:
         * `new Socket("/socket", {params: {user_id: userToken}})`.
         */
        connect(e) {
          e && (this.params = Cr2(e)), !(this.conn && !this.disconnecting) && (this.longPollFallbackMs && this.transport !== hr2 ? this.connectWithFallback(hr2, this.longPollFallbackMs) : this.transportConnect());
        }
        /**
         * Logs the message. Override `this.logger` for specialized logging. noops by default
         * @param {string} kind
         * @param {string} msg
         * @param {Object} data
         */
        log(e, t, n) {
          this.logger && this.logger(e, t, n);
        }
        /**
         * Returns true if a logger has been set on this socket.
         */
        hasLogger() {
          return this.logger !== null;
        }
        /**
         * Registers callbacks for connection open events
         *
         * @example socket.onOpen(function(){ console.info("the socket was opened") })
         *
         * @param {Function} callback
         */
        onOpen(e) {
          let t = this.makeRef();
          return this.stateChangeCallbacks.open.push([t, e]), t;
        }
        /**
         * Registers callbacks for connection close events
         * @param {Function} callback
         */
        onClose(e) {
          let t = this.makeRef();
          return this.stateChangeCallbacks.close.push([t, e]), t;
        }
        /**
         * Registers callbacks for connection error events
         *
         * @example socket.onError(function(error){ alert("An error occurred") })
         *
         * @param {Function} callback
         */
        onError(e) {
          let t = this.makeRef();
          return this.stateChangeCallbacks.error.push([t, e]), t;
        }
        /**
         * Registers callbacks for connection message events
         * @param {Function} callback
         */
        onMessage(e) {
          let t = this.makeRef();
          return this.stateChangeCallbacks.message.push([t, e]), t;
        }
        /**
         * Pings the server and invokes the callback with the RTT in milliseconds
         * @param {Function} callback
         *
         * Returns true if the ping was pushed or false if unable to be pushed.
         */
        ping(e) {
          if (!this.isConnected())
            return false;
          let t = this.makeRef(), n = Date.now();
          this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: t });
          let r2 = this.onMessage((i2) => {
            i2.ref === t && (this.off([r2]), e(Date.now() - n));
          });
          return true;
        }
        /**
         * @private
         */
        transportConnect() {
          this.connectClock++, this.closeWasClean = false, this.conn = new this.transport(this.endPointURL()), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = () => this.onConnOpen(), this.conn.onerror = (e) => this.onConnError(e), this.conn.onmessage = (e) => this.onConnMessage(e), this.conn.onclose = (e) => this.onConnClose(e);
        }
        getSession(e) {
          return this.sessionStore && this.sessionStore.getItem(e);
        }
        storeSession(e, t) {
          this.sessionStore && this.sessionStore.setItem(e, t);
        }
        connectWithFallback(e, t = 2500) {
          clearTimeout(this.fallbackTimer);
          let n = false, r2 = true, i2, o, s = (c) => {
            this.log("transport", `falling back to ${e.name}...`, c), this.off([i2, o]), r2 = false, this.replaceTransport(e), this.transportConnect();
          };
          if (this.getSession(`phx:fallback:${e.name}`))
            return s("memorized");
          this.fallbackTimer = setTimeout(s, t), o = this.onError((c) => {
            this.log("transport", "error", c), r2 && !n && (clearTimeout(this.fallbackTimer), s(c));
          }), this.onOpen(() => {
            if (n = true, !r2)
              return this.primaryPassedHealthCheck || this.storeSession(`phx:fallback:${e.name}`, "true"), this.log("transport", `established ${e.name} fallback`);
            clearTimeout(this.fallbackTimer), this.fallbackTimer = setTimeout(s, t), this.ping((c) => {
              this.log("transport", "connected to primary after", c), this.primaryPassedHealthCheck = true, clearTimeout(this.fallbackTimer);
            });
          }), this.transportConnect();
        }
        clearHeartbeats() {
          clearTimeout(this.heartbeatTimer), clearTimeout(this.heartbeatTimeoutTimer);
        }
        onConnOpen() {
          this.hasLogger() && this.log("transport", `${this.transport.name} connected to ${this.endPointURL()}`), this.closeWasClean = false, this.disconnecting = false, this.establishedConnections++, this.flushSendBuffer(), this.reconnectTimer.reset(), this.resetHeartbeat(), this.stateChangeCallbacks.open.forEach(([, e]) => e());
        }
        /**
         * @private
         */
        heartbeatTimeout() {
          this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null, this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), this.triggerChanError(), this.closeWasClean = false, this.teardown(() => this.reconnectTimer.scheduleTimeout(), IS, "heartbeat timeout"));
        }
        resetHeartbeat() {
          this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, this.clearHeartbeats(), this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs));
        }
        teardown(e, t, n) {
          if (!this.conn)
            return e && e();
          let r2 = this.connectClock;
          this.waitForBufferDone(() => {
            r2 === this.connectClock && (this.conn && (t ? this.conn.close(t, n || "") : this.conn.close()), this.waitForSocketClosed(() => {
              r2 === this.connectClock && (this.conn && (this.conn.onopen = function() {
              }, this.conn.onerror = function() {
              }, this.conn.onmessage = function() {
              }, this.conn.onclose = function() {
              }, this.conn = null), e && e());
            }));
          });
        }
        waitForBufferDone(e, t = 1) {
          if (t === 5 || !this.conn || !this.conn.bufferedAmount) {
            e();
            return;
          }
          setTimeout(() => {
            this.waitForBufferDone(e, t + 1);
          }, 150 * t);
        }
        waitForSocketClosed(e, t = 1) {
          if (t === 5 || !this.conn || this.conn.readyState === It2.closed) {
            e();
            return;
          }
          setTimeout(() => {
            this.waitForSocketClosed(e, t + 1);
          }, 150 * t);
        }
        onConnClose(e) {
          let t = e && e.code;
          this.hasLogger() && this.log("transport", "close", e), this.triggerChanError(), this.clearHeartbeats(), !this.closeWasClean && t !== 1e3 && this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach(([, n]) => n(e));
        }
        /**
         * @private
         */
        onConnError(e) {
          this.hasLogger() && this.log("transport", e);
          let t = this.transport, n = this.establishedConnections;
          this.stateChangeCallbacks.error.forEach(([, r2]) => {
            r2(e, t, n);
          }), (t === this.transport || n > 0) && this.triggerChanError();
        }
        /**
         * @private
         */
        triggerChanError() {
          this.channels.forEach((e) => {
            e.isErrored() || e.isLeaving() || e.isClosed() || e.trigger(xt2.error);
          });
        }
        /**
         * @returns {string}
         */
        connectionState() {
          switch (this.conn && this.conn.readyState) {
            case It2.connecting:
              return "connecting";
            case It2.open:
              return "open";
            case It2.closing:
              return "closing";
            default:
              return "closed";
          }
        }
        /**
         * @returns {boolean}
         */
        isConnected() {
          return this.connectionState() === "open";
        }
        /**
         * @private
         *
         * @param {Channel}
         */
        remove(e) {
          this.off(e.stateChangeRefs), this.channels = this.channels.filter((t) => t !== e);
        }
        /**
         * Removes `onOpen`, `onClose`, `onError,` and `onMessage` registrations.
         *
         * @param {refs} - list of refs returned by calls to
         *                 `onOpen`, `onClose`, `onError,` and `onMessage`
         */
        off(e) {
          for (let t in this.stateChangeCallbacks)
            this.stateChangeCallbacks[t] = this.stateChangeCallbacks[t].filter(([n]) => e.indexOf(n) === -1);
        }
        /**
         * Initiates a new channel for the given topic
         *
         * @param {string} topic
         * @param {Object} chanParams - Parameters for the channel
         * @returns {Channel}
         */
        channel(e, t = {}) {
          let n = new vS(e, t, this);
          return this.channels.push(n), n;
        }
        /**
         * @param {Object} data
         */
        push(e) {
          if (this.hasLogger()) {
            let { topic: t, event: n, payload: r2, ref: i2, join_ref: o } = e;
            this.log("push", `${t} ${n} (${o}, ${i2})`, r2);
          }
          this.isConnected() ? this.encode(e, (t) => this.conn.send(t)) : this.sendBuffer.push(() => this.encode(e, (t) => this.conn.send(t)));
        }
        /**
         * Return the next message ref, accounting for overflows
         * @returns {string}
         */
        makeRef() {
          let e = this.ref + 1;
          return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString();
        }
        sendHeartbeat() {
          this.pendingHeartbeatRef && !this.isConnected() || (this.pendingHeartbeatRef = this.makeRef(), this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef, join_ref: "" }), this.heartbeatTimeoutTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs));
        }
        flushSendBuffer() {
          this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e) => e()), this.sendBuffer = []);
        }
        onConnMessage(e) {
          this.decode(e.data, (t) => {
            let { topic: n, event: r2, payload: i2, ref: o, join_ref: s } = t;
            o && o === this.pendingHeartbeatRef && (this.clearHeartbeats(), this.pendingHeartbeatRef = null, this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs)), this.hasLogger() && this.log("receive", `${i2.status || ""} ${n} ${r2} ${o && "(" + o + ")" || ""}`, i2);
            for (let c = 0; c < this.channels.length; c++) {
              const l2 = this.channels[c];
              l2.isMember(n, r2, i2, s) && l2.trigger(r2, i2, o, s);
            }
            for (let c = 0; c < this.stateChangeCallbacks.message.length; c++) {
              let [, l2] = this.stateChangeCallbacks.message[c];
              l2(t);
            }
          });
        }
        leaveOpenTopic(e) {
          let t = this.channels.find((n) => n.topic === e && (n.isJoined() || n.isJoining()));
          t && (this.hasLogger() && this.log("transport", `leaving duplicate topic "${e}"`), t.leave());
        }
      };
      _s = (e) => (t) => {
        const n = Array.isArray(t) ? [] : {};
        let r2, i2, o;
        for (i2 in t)
          Object.prototype.hasOwnProperty.call(t, i2) && (r2 = e[i2], o = typeof r2, n[i2] = o === "function" ? r2(t[i2]) : r2 && o === "object" ? _s(r2)(t[i2]) : t[i2]);
        return n;
      };
      kS = (e) => (t) => t.map(e);
      OS = (e, t, n) => n ? t.reduce((r2, i2) => r2[i2] || e, n) : e;
      xn2 = (e) => e.split("?")[0];
      RS = _s({
        attributes: {
          url: xn2,
          _identity: {
            _lastPageUrl: xn2,
            _currentPageUrl: xn2
          }
        },
        context: {
          url: xn2
        }
      });
      LS = _s({
        profile_update: {
          _lastPageUrl: xn2,
          _currentPageUrl: xn2
        },
        events: kS(RS)
      });
      xS = (e, t) => OS(false, ["account", "stripQueryParams"], e) ? LS(t) : t;
      Hr2 = P2(
        () => window.AppcuesBundleSettings.API_HOSTNAME && `https://${window.AppcuesBundleSettings.API_HOSTNAME}/v1`,
        "https://api.appcues.net/v1"
      );
      PS = P2(
        () => window.AppcuesBundleSettings.GENERIC_BUNDLE_DOMAIN && `${window.AppcuesBundleSettings.GENERIC_BUNDLE_DOMAIN}/v1`,
        "https://fast.appcues.com/v1"
      );
      Mr2 = () => {
        const e = window[D2] || {};
        let t = {};
        return e.userIdSignature && (t = { Authorization: `Bearer ${e.userIdSignature}` }), t;
      };
      $r2 = {
        UserActivity: "USER_ACTIVITY"
      };
      US = (e, t, n) => wu2(e, $r2.UserActivity, n, t);
      GS = "access forbidden";
      jS = "unauthorized";
      qS = P2(
        () => window.AppcuesBundleSettings.API_HOSTNAME && `wss://${window.AppcuesBundleSettings.API_HOSTNAME}/v1/socket`,
        "wss://api.appcues.net/v1/socket"
      );
      Ho = [
        {
          endpoint: $r2.UserActivity,
          name: (e) => `sdk:${e.settings.accountId}:${e.user.userId}`
        }
      ];
      zS = {
        create: (e, t, n, r2) => {
          const i2 = new wS(qS(), { reportError: n });
          i2.onOpen(() => {
            r2({ type: "WS", details: { socket: i2, onMessage: e, onTimeout: t } });
          }), i2.onError(() => {
            r2(null, new Error("Error connecting to WebSocket."));
          }), i2.connect();
        },
        send: (e, t, n, r2, i2 = "event") => {
          const o = ei3(e, t);
          if (o && o.canPush())
            o.push(i2, n).receive(
              "ok",
              (s) => e.transport.details.onMessage({
                request_id: n.request_id,
                type: i2,
                ...s
              })
            ).receive(
              "timeout",
              () => e.transport.details.onTimeout(n.request_id)
            ).receive(
              "error",
              (s) => e.transport.details.onMessage({
                request_id: n.request_id,
                type: i2,
                status: "error",
                ...s
              })
            ), r2(n);
          else {
            const s = new Error("Channel was not configured.");
            s.extra = {
              endpoint: t,
              message: n
            }, r2(null, s);
          }
        },
        subscribeToError: (e, t, n) => {
          ei3(t, n).onError(e);
        },
        sendMetrics: (e, t, n) => {
          const r2 = ei3(e, t);
          r2 && r2.canPush() && r2.push("sdk_metrics", n);
        },
        isConfigured: (e) => Ho.every((t) => {
          const n = ei3(e, t.endpoint);
          return n ? n.canPush() : false;
        }),
        configure: (e, t) => {
          const n = Lf2(e);
          n.isConnected() || n.connect();
          const r2 = _f2(e) ? "v2" : "v1";
          return Promise.all(
            Ho.map(
              (i2) => YS(
                e.transport,
                n,
                i2.name(e),
                r2
              )
            )
          ).then(
            (i2) => {
              const o = {};
              i2.forEach((s) => {
                o[s.topic] = s.channel;
              }), t({ channels: o });
            },
            (i2) => {
              t(null, i2);
            }
          );
        }
      };
      je = {
        init: () => "apc_init",
        request: (e) => `apc_req_start_${e}`,
        attempt: (e) => `apc_attempted_${e}`,
        response: (e) => `apc_resp_end_${e}`,
        render: (e) => `apc_rendered_${e}`,
        css: (e) => `apc_css_loaded_${e}`,
        shown: (e) => `apc_shown_${e}`
      };
      Ou2 = "apc_flow_performance";
      XS = () => bn2(je.init());
      JS = (e) => bn2(je.request(e));
      QS = (e) => bn2(je.response(e));
      ZS = (e) => bn2(je.attempt(e));
      eT = (e) => bn2(je.render(e));
      tT = (e) => bn2(je.css(e));
      nT = (e) => bn2(je.shown(e));
      lT = b3(
        Ge3.TOGGLE_ROW_DETAILS
      );
      aT = b3(Ge3.TOGGLE_COLLAPSED);
      uT = b3(Ge3.SET_CURRENT_PAGE);
      Ru2 = b3(Ge3.TRACK_PAGE);
      dT = b3(
        Ge3.ADD_CONTENT_ERROR,
        (e, t) => ({ contentId: e, errorMessage: t })
      );
      fT = b3(
        Ge3.ADD_CHILD_ERROR,
        (e, t, n) => ({ contentId: e, childId: t, errorMessage: n })
      );
      Lu2 = b3(Ge3.CLOSE_DEBUGGER);
      pT = b3(Je3.PAUSE_EXPERIENCE);
      hT = b3(
        Je3.RESUME_EXPERIENCE
      );
      Is = b3(Je3.SHOW_EXPERIENCES);
      wr2 = b3(
        Je3.SAVE_ON_HOLD_LAUNCHPADS
      );
      Nr = b3(
        Je3.UNHIDE_LAUNCHPADS
      );
      xu2 = b3(Je3.HIDE_LAUNCHPADS);
      Pu2 = "EVENTS_TRIGGERED";
      mT = b3(Pu2);
      As = b3(Ct2.SET_SESSION);
      vs2 = b3(Ct2.START_SESSION);
      ET = b3(Ct2.SESSION_STARTED);
      FT = (e) => ["Enter", " "].includes(e.key);
      gt2 = {
        OVERLAY: "overlay",
        BACKGROUND: "background",
        FLOATING: "floating"
      };
      cC = Jn2(
        [
          tr2,
          er2,
          Qn2,
          Zn2,
          nr2
        ],
        bi3.createApi({
          clean: true,
          trustedTypesPolicy: window.trustedTypes?.defaultPolicy
        })
      );
      lC = (e) => {
        if (Xp2(e)) {
          if (!Ne3(e, "autoplay")) return;
          const { autoplay: n, ...r2 } = e.data.attrs;
          e.data.attrs = r2;
        }
      };
      uC = () => {
        const { sessionDuration: e = Ne2 } = window.AppcuesSettings || {};
        return {
          id: Ui3(),
          timestamp: Date.now(),
          duration: e * 6e4
        };
      };
      ml2 = (e) => e.type === $3.START_IDENTIFY && ne4.defined(e.payload.userId);
      YC = (e, t) => e.includes(t);
      nd2 = "appcues/click-to-track";
      Sl2 = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
      Tl2 = (e) => {
        const t = /* @__PURE__ */ new Set(["string", "boolean", "number"]);
        return Array.isArray(e) ? e.every((n) => t.has(typeof n)) : t.has(typeof e);
      };
      _l2 = "https://studio.appcues.com";
      l_ = (e) => {
        switch (e.type) {
          case x.MODAL:
            switch (e.attributes.pattern_type) {
              case "shorty":
                return "Slideout Group";
              case "fullscreen":
                return "Full Screen Modal Group";
              case "left":
                return "Sidebar Group";
              default:
                return "Modal Group";
            }
          case x.HOTSPOTS:
            return e.attributes.sequential ? "Tooltip Group" : "Hotspot Group";
          case x.ACTION:
            return e.attributes.action_type === j2.WAIT_FOR_PAGE ? "Wait For Matching Page" : null;
          default:
            return null;
        }
      };
      Il2 = (e, t, n) => {
        const r2 = ct(e || {}, t), i2 = mn2(r2, n);
        return /* @__PURE__ */ a2.html("div", null, /* @__PURE__ */ a2.html("div", null, `${(e || {}).name}, Step ${$n2(e, t) + 1} (${l_(r2 || {})})${i2 > -1 ? `, Part ${i2 + 1}` : ""}`), u_(r2) && a_(r2) ? /* @__PURE__ */ a2.html("div", null, `Page to match: ${r2.attributes.params.url}`) : "");
      };
      f_ = "/generic/main/7.13.3/debugger.bfa6d184b8ace06dc4ece82bcefcd323190112c8.css";
      p_ = "sha256-LMjol9lu4iFfr9P6lIri9GX+onG7x+pqiR+EzoaK2sU=";
      h_ = Bt2(f_);
      ho2 = Jn2(
        [
          tr2,
          er2,
          Qn2,
          Zn2,
          nr2
        ],
        bi3.createApi({
          clean: true,
          trustedTypesPolicy: window.trustedTypes?.defaultPolicy
        })
      );
      nn2 = null;
      m_ = (e) => {
        const t = Rr(e) || {}, n = Ai3(e);
        return Object.keys(n || {}).reduce(
          (r2, i2) => {
            const o = hf2(t, i2);
            return o ? {
              ...r2,
              [i2]: {
                ...n[i2],
                flow: o
              }
            } : r2;
          },
          {}
        );
      };
      E_ = (e, t) => /* @__PURE__ */ a2.html(
        d_,
        {
          lastTrackedPage: Ia2(e),
          currentPage: _a2(e),
          currentContent: ye3(e),
          currentFlow: nt2(e),
          currentStepId: ce3(e),
          currentStepChildId: st3(e),
          currentContentStatus: Ve2(e),
          stepChildErrors: m_(e),
          user: be2(e),
          group: Sf2(e),
          settings: If2(e),
          isTransportInitialized: Ta2(e),
          rowState: xf2(e),
          onToggleRowDetails: t.onToggleRowDetails,
          onToggleCollapsed: t.onToggleCollapsed,
          onCloseDebugger: t.onCloseDebugger
        }
      );
      y_ = "https://docs.appcues.com/user-experiences-faq/faq-test-mode";
      S_ = (e) => {
        const { testModeCallbacks: t } = e;
        return /* @__PURE__ */ a2.html("div", { "class-banner-wrapper": true }, /* @__PURE__ */ a2.html("div", { "class-banner-background": true }, /* @__PURE__ */ a2.html("div", { "class-banner-content": true }, /* @__PURE__ */ a2.html("span", { "class-banner-header": true }, "Appcues Test Mode"), /* @__PURE__ */ a2.html(
          "a",
          {
            href: y_,
            "class-clickable": true,
            "class-doc-link": true,
            target: "_blank",
            rel: "noreferrer"
          },
          "Learn More"
        )), /* @__PURE__ */ a2.html("div", { "class-banner-content": true }, /* @__PURE__ */ a2.html(
          "div",
          {
            "class-restart": true,
            "class-clickable": true,
            "on-click": t.onResetClicked
          },
          "Restart"
        ), /* @__PURE__ */ a2.html("div", { "class-clickable": true, "on-click": t.onCancelClicked }, "End Test"))));
      };
      T_ = "/generic/main/7.13.3/test-mode.bfa6d184b8ace06dc4ece82bcefcd323190112c8.css";
      C_ = "sha256-nd0yl8XfotWCT+9jaAUZdIayDPvnbBNhrvbhzXcWLNs=";
      __ = Bt2(T_);
      mo2 = Jn2(
        [
          tr2,
          er2,
          Qn2,
          Zn2,
          nr2
        ],
        bi3.createApi({
          clean: true,
          trustedTypesPolicy: window.trustedTypes?.defaultPolicy
        })
      );
      rn2 = null;
      G_ = 500;
      j_ = 5e3;
      cd2 = "appcues:checklist_ready";
      ld2 = "appcues:checklist_close";
      $i3 = "appcues:toggle_checklist";
      Bi3 = "appcues:confirm_checklist_ready";
      SI = "appcues:launchpad_close";
      TI = "appcues:launchpad_search";
      CI = "appcues:launchpad_search_error";
      _I = "appcues:launchpad_search_response";
      Br2 = function(e, t) {
        return window.addEventListener(e, t), function() {
          return window.removeEventListener(e, t);
        };
      };
      II = function(e) {
        var t = e.name, n = e.id, r2 = e.totalItems, i2 = e.completedItems, o = new CustomEvent(cd2, {
          detail: {
            name: t,
            id: n,
            totalItems: r2,
            completedItems: i2
          }
        });
        window.dispatchEvent(o);
      };
      sA = function(e) {
        return Br2(cd2, e);
      };
      AI = function() {
        var e = new CustomEvent(ld2);
        window.dispatchEvent(e);
      };
      cA = function(e) {
        return Br2(ld2, e);
      };
      lA = function() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = new CustomEvent($i3, {
          detail: {
            checklistId: e,
            forceClose: t
          }
        });
        window.dispatchEvent(n);
      };
      vI = function(e) {
        return Br2($i3, e);
      };
      aA = function() {
        var e = new CustomEvent(Bi3);
        window.dispatchEvent(e);
      };
      bI = function(e) {
        return Br2(Bi3, e);
      };
      wI = function() {
        var e = new CustomEvent(SI);
        window.dispatchEvent(e);
      };
      NI = function(e) {
        return Br2(TI, e);
      };
      kI = function(e, t) {
        var n = new CustomEvent("".concat(_I, ":").concat(e), {
          detail: yI({}, t)
        });
        window.dispatchEvent(n);
      };
      ad2 = function(e) {
        var t = new CustomEvent("".concat(CI, ":").concat(e));
        window.dispatchEvent(t);
      };
      $o = [];
      Ds = () => {
        const [e, ...t] = $o;
        return $o = t, e;
      };
      PI = "v2";
      DI = (e) => {
        const t = {
          sendEvent: (n, r2) => {
            const i2 = `${PI}:${n}`, o = { ...r2, id: i2 };
            e(im(i2, o)), e(we2({}, [Be2(o)]));
          },
          sendCustomEvent: (n, r2) => {
            const i2 = { ...r2, id: n };
            e(we2({}, [Qt(n, i2)], true));
          },
          updateUserProfile: (n = {}) => {
            Object.keys(n).length !== 0 && e(we2(n, [], true));
          },
          showFlow({ flowId: n, url: r2, prefetch: i2 }) {
            if (i2) {
              e({ type: U3.PREFETCH_FLOWS, payload: n });
              return;
            }
            if (!r2 || St(window.location.href, r2)) {
              e(xr2(n));
              return;
            }
            e(hu2(n)), Xt(window, r2);
          }
        };
        return window.createAppcues(t);
      };
      FI = async () => {
        {
          const e = await Promise.resolve().then(() => (init_open_builder_XILUARRq(), open_builder_XILUARRq_exports));
          window.createAppcues = e.default;
        }
        return DI;
      };
      bl2 = b3(
        xi3.SET_COLLISION_MODE
      );
      YI = "launchpad-button-wrapper";
      zI = (e, t) => e.checklist ? e.checklist.payload[0] : t.payload[0];
      XI = (e, t) => (e.experiences ? e.experiences.payload : t.payload).find(
        (i2) => i2.type === "launchpad"
      );
      JI = (e) => {
        const n = e.steps[0].traits.filter(
          (c) => c.type === "@appcues/floating"
        ).find(
          (c) => c.config?.target?.selector === YI
        ), { xPosition: r2, yPosition: i2, xOffset: o, yOffset: s } = n.config;
        return {
          position: `${i2} ${r2}`,
          xOffset: o,
          yOffset: s
        };
      };
      rA = "/generic/main/7.13.3/container.bfa6d184b8ace06dc4ece82bcefcd323190112c8.css";
      iA = "sha256-hDvMQUFhRDDvNjMfTY9We9v9kJw7VBaXX8yL5nYcIcA=";
      window.performance && window.performance.mark && window.performance.mark("apc-init");
      XS();
      bt2 = window.AppcuesBundleSettings;
      [...document.documentElement.querySelectorAll("link")].forEach((e) => {
        /\/appcues(\.min|\.debug)?\.css$/.test(e.href) && e.parentElement && e.parentElement.removeChild(e);
      });
      sr2 = document.createElement("link");
      sr2.setAttribute("rel", "stylesheet");
      sr2.setAttribute("type", "text/css");
      sr2.setAttribute("integrity", iA);
      sr2.setAttribute("crossorigin", "anonymous");
      sr2.setAttribute("href", Bt2(rA));
      document.head.appendChild(sr2);
      Eo2 = window[D2];
      ne4.object(Eo2) && ne4.defined(Eo2.gaTracker) && bt2.integrations.ga && (bt2.integrations.ga.trackerName = Eo2.gaTracker);
      Bo2 = null;
      wl2 = document.documentElement.querySelector(
        'script[src*="fast.appcues"]'
      );
      wl2 && (Bo2 = wl2.getAttribute("data-user-id"));
      hn = SS({
        settings: bt2,
        sagas: [
          jC,
          tC,
          b_,
          DT,
          x_,
          Q_,
          W_,
          cI,
          aI,
          hI,
          M_,
          EI,
          gT,
          xI,
          jI,
          $E,
          KI,
          gC,
          nA,
          function* () {
            yield F3(ZC, bt2.events);
          }
        ],
        onStateChange: (e) => {
          g_(e), I_(e);
        }
      });
      hn.dispatch(
        Ga2({
          [x.DEBUGGER]: A_(
            hn.dispatch,
            hn.getState
          )
        })
      );
      hn.dispatch(
        tm(
          bt2,
          sT(hn),
          zS,
          cT(bt2, hn.getState)
        )
      );
      Vi3 = c_(hn);
      bt2 && bt2.integrations && Object.keys(bt2.integrations).forEach((e) => {
        if (bt2.integrations[e].isEnabled) {
          const t = Vi3[`init${{
            mixpanel: "Mixpanel",
            heap: "Heap",
            intercom: "Intercom",
            customerio: "CIO",
            vero: "Vero",
            woopra: "Woopra",
            amplitude: "Amplitude",
            klaviyo: "Klaviyo",
            calq: "Calq",
            localytics: "Ll",
            segment: "Segment",
            rudderstack: "Rudderstack",
            braze: "Braze",
            treasuredata: "TD",
            kissmetrics: "KM",
            ga: "GA",
            gtm: "GTM",
            fullstory: "FullStory",
            hotjar: "Hotjar",
            logrocket: "LogRocket"
          }[e]}`];
          t && t();
        }
      });
      /hey_appcues/i.test(window.location.search) && Vi3.debug();
      Bo2 !== null && Vi3.identify(Bo2);
      Nl2 = window.AppcuesBundleSettings;
      if (window.Appcues && !window.Appcues.SNIPPET_VERSION)
        ti3 = window.Appcues;
      else if (window.requestAnimationFrame && window.WebSocket && Nl2.accountId && /^\d+$/.test(Nl2.accountId))
        window.Appcues = Vi3, ti3 = window.Appcues;
      else {
        const e = () => {
        };
        ti3 = {}, S.forEach((t) => {
          ti3[t] = e;
        });
      }
      uA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
        __proto__: null
      }, Symbol.toStringTag, { value: "Module" }));
    }
  });

  // node_modules/@appcues/web-sdk/build/index.npm.CbNGHq_b.js
  function i(s) {
    return s.reduce(
      (e, t) => Object.assign(e, { [t]: t }),
      {}
    );
  }
  function A2(s) {
    return function(...t) {
      return E2 ? window.Appcues[s](...t) : (t.unshift(s), window.Appcues.push(t)), window.Appcues;
    };
  }
  function O2(s, e) {
    window.Appcues.SNIPPET_VERSION = e.version, window.AppcuesBundleSettings = {
      accountId: s,
      VERSION: e.version,
      RELEASE_ID: e.release_id,
      GENERIC_BUNDLE_DOMAIN: p,
      GENERIC_BUNDLE_PATH: e.generic_bundle_path,
      GENERIC_BUNDLE_INTEGRITY: e.generic_bundle_integrity,
      API_HOSTNAME: e.api_hostname ?? I2,
      styling: e.styling,
      integrations: e.integrations,
      account: e.account,
      events: e.custom_events
    };
  }
  async function d() {
    await Promise.resolve().then(() => (init_index_DIKlkbGK(), index_DIKlkbGK_exports)).then((s) => s.i), E2 = true;
  }
  async function u() {
    window.Appcues.forEach((s) => {
      const e = s[0], t = s.slice(1);
      if (T.includes(e)) {
        const n = t[0], _ = t.slice(1), o = window.Appcues?.[e];
        o && o(..._).then((...c) => {
          n(c[0]);
        });
      } else {
        const n = window.Appcues?.[e];
        n && n(...t);
      }
    });
  }
  async function r(s, e, t = 0) {
    return new Promise((n) => {
      (async () => {
        const _ = `${e.bundleDomain}/bundle/accounts/${s}/settings`;
        try {
          const o = await fetch(_);
          if (o.ok) {
            const c = await o.json();
            n({ accountId: s, settings: c });
          } else
            throw new Error(`HTTP error! status: ${o.status}`);
        } catch {
          if (t <= 3) {
            const o = window.Math.random() * 100, c = t * 500 + o;
            window.setTimeout(() => {
              r(s, e, t + 0.5);
            }, c);
          } else
            throw new Error("Failed to load account settings");
        }
      })();
    });
  }
  async function l(s, e) {
    const t = {
      bundleDomain: p,
      apiHostName: I2,
      ...e
    };
    try {
      const { accountId: n, settings: _ } = await r(s, t);
      await O2(n, _), await d(), await u();
    } catch {
    }
  }
  var N2, L2, R2, C2, D2, P, w2, f, h, U2, m2, H3, g2, M2, W, F2, G, k, y, v2, Y3, B2, K2, a, b2, V2, X2, x, j2, z2, $2, q2, Q, S, T, J2, Z, ee3, se3, te, ne3, oe3, _e2, ce2, ae3, ie3, Ee2, Te3, pe2, Ie2, re3, Se2, Ae3, Oe2, de2, ue2, le2, Ne2, Le2, p, I2, E2, Re4;
  var init_index_npm_CbNGHq_b = __esm({
    "node_modules/@appcues/web-sdk/build/index.npm.CbNGHq_b.js"() {
      N2 = [
        "_hostname",
        "_lastBrowserLanguage",
        "_lastPageTitle",
        "_lastPageUrl",
        "_currentPageTitle",
        "_currentPageUrl",
        "_localId",
        "_sessionPageviews",
        "_updatedAt",
        "_userAgent",
        "_appcuesId",
        "_sessionRandomizer",
        "_testContentId",
        "_showChecklist",
        "_doNotTrack",
        "_lastSeenAt",
        "_timezoneCode",
        "_timezoneOffset",
        "_appId"
      ];
      L2 = [
        "flow_started",
        "flow_completed",
        "flow_skipped",
        "flow_aborted",
        "step_started",
        "step_completed",
        "step_skipped",
        "step_interacted",
        "step_aborted",
        "form_submitted",
        "form_field_submitted",
        "nps_feedback",
        "nps_score",
        "nps_clicked_update_nps_score",
        "nps_ask_me_later_selected_at",
        "nps_survey_started",
        "checklist_shown",
        "checklist_completed",
        "checklist_skipped",
        "checklist_dismissed",
        "checklist_item_started",
        "checklist_item_completed",
        "appcues_custom",
        "experiment_entered",
        "v2:experience_started",
        "v2:step_seen",
        "v2:icon_seen",
        "v2:step_interaction",
        "v2:button_pin_seen"
      ];
      R2 = "_appcuesForm_";
      C2 = "_appcuesSatisfaction_";
      D2 = "AppcuesSettings";
      P = "apc_user_id";
      w2 = "apc_group_id";
      f = "apc_local_id";
      h = "apc_next_content_id";
      U2 = "apc_user";
      m2 = "apc_debug_enabled";
      H3 = "apc_debug_url";
      g2 = "apc_ann_errors";
      M2 = "apc_curr_flow";
      W = "apc_curr_checklist";
      F2 = "apc_cl:";
      G = "apc_followed_test_link";
      k = "localStorage";
      y = "sessionStorage";
      v2 = 720 * 60 * 60;
      Y3 = {
        PAGE_VIEW: "appcues:page_view"
      };
      B2 = {
        NPS: "nps",
        FLOW: "flow"
      };
      K2 = [
        "v2:experience_completed",
        "v2:experience_skipped",
        "v2:experience_snoozed"
      ];
      a = i([
        "PENDING",
        "STARTED",
        "CALCULATING_POSITIONS",
        "READY",
        "WILL_SHOW",
        "SHOWING",
        "WILL_CLOSE",
        "ERROR",
        "FETCHING",
        "RUNNING",
        "DISMISSED",
        "HIDING"
      ]);
      b2 = [
        a.READY,
        a.WILL_SHOW,
        a.SHOWING,
        a.WILL_CLOSE
      ];
      V2 = i([
        "COMPLETED",
        "SKIPPED",
        "SHOWING_OTHER_CONTENT",
        "CLEAR"
      ]);
      X2 = {
        EVENT_TRIGGER: "event_trigger",
        PAGE_VIEW: "page_view"
      };
      x = {
        MODAL: "modal",
        HOTSPOTS: "hotspot-group",
        SEQUENTIAL_HOTSPOTS: "hotspot-group-sequential",
        DEBUGGER: "debugger",
        JOURNEY: "journey",
        ACTION: "action",
        SATISFACTION_SURVEY: "satisfaction-survey",
        CHECKLIST: "checklist",
        TEST_MODE: "test-mode",
        WIDGET: "widget",
        ANNOTATION: ["hotspot-group"]
      };
      j2 = {
        REDIRECT: "redirect",
        WAIT_FOR_PAGE: "wait-for-page",
        SHOW_FLOW: "show_flow"
      };
      z2 = 2;
      $2 = {
        COMPLETED: "completed",
        DISMISSED: "dismissed",
        SHOWN_MANUALLY: "shown_manually"
      };
      q2 = {
        EXPANDED: "expanded",
        COLLAPSED: "collapsed",
        FIRSTVIEW: "first_view"
      };
      Q = {
        OPENED: "opened",
        CLOSED: "closed",
        OPEN_ONCE: "open_once"
      };
      S = [
        "identify",
        "track",
        "page",
        "anonymous",
        "show",
        "on",
        "off",
        "once",
        "reset",
        "debug",
        "user",
        "settings",
        "content",
        "injectContent",
        "injectStyles",
        "start",
        "initMixpanel",
        "initHeap",
        "initIntercom",
        "initCIO",
        "initVero",
        "initWoopra",
        "initAmplitude",
        "initKlaviyo",
        "initCalq",
        "initTD",
        "initLl",
        "initKM",
        "initGA",
        "initGTM",
        "initSegment",
        "initRudderstack",
        "initBraze",
        "initFullStory",
        "initHotjar",
        "initLogRocket",
        "loadLaunchpad",
        "group"
      ];
      T = ["user"];
      J2 = 20;
      Z = 300;
      ee3 = 700;
      se3 = 2147483647;
      te = 24;
      ne3 = 20;
      oe3 = 10;
      _e2 = 1;
      ce2 = 3;
      ae3 = {
        CALCULATE: "CALCULATE"
      };
      ie3 = i([
        "WAIT_FOR_ONE_ELEMENT",
        "WAIT_FOR_MOUSE_EVENT"
      ]);
      Ee2 = 200;
      Te3 = i([
        "STEP_ATTEMPTED",
        "STEP_SHOWN",
        "STEP_COMPLETED",
        "STEP_SKIPPED",
        "STEP_END",
        "STEP_INTERACTED",
        "STEP_ERRORED",
        "CHILD_ACTIVATED",
        "CHILD_DEACTIVATED",
        "CHILDREN_ERRORED",
        "CHILDREN_RECOVERED",
        "CHILD_NEXT",
        "CHILD_RUN",
        "CSS_LOADED",
        "STEP_REVEALED"
      ]);
      pe2 = 1e3;
      Ie2 = 300;
      re3 = 500;
      Se2 = 50;
      Ae3 = 3e3;
      Oe2 = {
        TEXT: "text",
        EXIT_SYMBOL: "exit-symbol"
      };
      de2 = {
        LABEL_TOOLTIP: "Tooltip",
        LABEL_CHECKLIST: "Contextual help checklist present on screen",
        ROLE_CONTAINER: "alert",
        ROLE_TOOLTIP: "alertdialog",
        HASPOPUP_TOOLTIP: "dialog"
      };
      ue2 = 6e4;
      le2 = "apc_session";
      Ne2 = 30;
      Le2 = "launchpad_kb_search";
      p = "https://fast.appcues.com";
      I2 = "api.appcues.net";
      E2 = false;
      window.Appcues = window.Appcues || [];
      (function() {
        window.Appcues.invoked || window.Appcues.identify || (window.Appcues.invoked = true, S.forEach((e) => {
          window.Appcues[e] = A2(e);
        }), T.forEach((e) => {
          window.Appcues[e] = function(...n) {
            return E2 ? window.Appcues[e](...n) : new Promise((_) => {
              n.unshift(_), n.unshift(e), window.Appcues.push(n);
            });
          };
        }));
      })();
      Re4 = {
        setup: l,
        ...window.Appcues
      };
    }
  });

  // node_modules/@appcues/web-sdk/build/index.npm.js
  init_index_npm_CbNGHq_b();

  // src/content-script.js
  var navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>',
      active: true
    },
    {
      id: "reports",
      label: "Reports",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>'
    },
    {
      id: "tasks",
      label: "Tasks",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    {
      id: "transactions",
      label: "Transactions",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>'
    },
    {
      id: "payroll",
      label: "Payroll",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" /></svg>'
    },
    {
      id: "sales",
      label: "Sales",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>'
    },
    {
      id: "expenses",
      label: "Expenses",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>'
    },
    {
      id: "support",
      label: "Support",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>'
    },
    {
      id: "subscription",
      label: "Subscription",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>'
    }
  ];
  var uploadIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>';
  var metricIcons = {
    sales: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>',
    expenses: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>',
    payroll: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" /></svg>',
    dailySales: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>'
  };
  var trendUpIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>';
  var trendDownIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" /></svg>';
  var dashboardMetrics = [
    {
      id: "sales",
      label: "Sales",
      value: "$24,780",
      change: "+12.5%",
      positive: true,
      icon: metricIcons.sales
    },
    {
      id: "expenses",
      label: "Expenses",
      value: "$8,450",
      change: "-3.2%",
      positive: true,
      // expenses down is good
      icon: metricIcons.expenses
    },
    {
      id: "payroll",
      label: "Payroll",
      value: "$12,300",
      change: "+2.1%",
      positive: false,
      // payroll up is neutral/negative
      icon: metricIcons.payroll
    },
    {
      id: "daily-sales",
      label: "Daily Sales",
      value: "$1,892",
      change: "+8.7%",
      positive: true,
      icon: metricIcons.dailySales
    }
  ];
  var checkIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>';
  var transactionIcons = {
    income: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
    expense: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>',
    software: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>'
  };
  var mockTasks = [
    { id: 1, title: "Review Q4 sales report", meta: "Due today", priority: "high", completed: false },
    { id: 2, title: "Update team expense policy", meta: "Due tomorrow", priority: "medium", completed: false },
    { id: 3, title: "Schedule payroll review meeting", meta: "Due in 3 days", priority: "low", completed: true },
    { id: 4, title: "Prepare monthly budget summary", meta: "Due next week", priority: "medium", completed: false }
  ];
  var mockTransactions = [
    { id: 1, name: "Client Payment", date: "Today", amount: "+$4,500", type: "income", icon: transactionIcons.income },
    { id: 2, name: "Office Supplies", date: "Yesterday", amount: "-$245", type: "expense", icon: transactionIcons.expense },
    { id: 3, name: "Software License", date: "Mar 15", amount: "-$99", type: "expense", icon: transactionIcons.software }
  ];
  var useCases = [
    {
      id: "free-trial",
      title: "Free Trial Conversion",
      description: "Engage trial users with targeted experiences to drive paid conversions",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>'
    },
    {
      id: "onboarding",
      title: "User Onboarding",
      description: "Get users to value from the start with guided onboarding flows",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>'
    },
    {
      id: "adoption",
      title: "Product Adoption",
      description: "Create stickier users by driving awareness of features",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>'
    },
    {
      id: "support",
      title: "Support",
      description: "Provide proactive and just-in-time guidance to users",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>'
    },
    {
      id: "feedback",
      title: "Collect User Feedback",
      description: "Get closer to your customers with in-app surveys and feedback",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>'
    }
  ];
  async function initAppcues() {
    try {
      await Re4.setup("88539");
      window.Appcues.identify("demo-user-001", {
        createdAt: Date.now(),
        role: "Sales Rep",
        firstName: "Demo",
        email: "demo@example.com",
        plan: "Professional"
      });
      window.Appcues.debug();
      console.log("Democues: Appcues initialized");
    } catch (error) {
      console.error("Democues: Appcues initialization failed", error);
    }
  }
  initAppcues();
  if (typeof window.democuesOverlayInitialized === "undefined") {
    let renderMetricsRow = function() {
      return `
      <div class="metrics-row">
        ${dashboardMetrics.map((metric) => `
          <div class="metric-card">
            <div class="metric-label">
              ${metric.icon}
              ${metric.label}
            </div>
            <div class="metric-value">${metric.value}</div>
            <span class="metric-change ${metric.positive ? "positive" : "negative"}">
              ${metric.positive ? trendUpIcon : trendDownIcon}
              ${metric.change}
            </span>
          </div>
        `).join("")}
      </div>
    `;
    }, renderTasksPanel = function() {
      return `
      <div class="widget-panel">
        <div class="widget-header">
          <span class="widget-title">Tasks</span>
          <span class="widget-action">View all</span>
        </div>
        <div class="tasks-list">
          ${mockTasks.map((task) => `
            <div class="task-item ${task.completed ? "completed" : ""}" data-task-id="${task.id}">
              <div class="task-checkbox ${task.completed ? "checked" : ""}">
                ${checkIcon}
              </div>
              <div class="task-content">
                <div class="task-title">${task.title}</div>
                <div class="task-meta">${task.meta}</div>
              </div>
              <span class="task-priority ${task.priority}">${task.priority}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `;
    }, renderTransactionsWidget = function() {
      return `
      <div class="widget-panel">
        <div class="widget-header">
          <span class="widget-title">Transactions</span>
          <span class="widget-action">View all</span>
        </div>
        <div class="transactions-balance">
          <div class="balance-label">Current Balance</div>
          <div class="balance-value">$32,450</div>
        </div>
        <div class="transactions-list">
          ${mockTransactions.map((tx) => `
            <div class="transaction-item">
              <div class="transaction-info">
                <div class="transaction-icon">${tx.icon}</div>
                <div>
                  <div class="transaction-name">${tx.name}</div>
                  <div class="transaction-date">${tx.date}</div>
                </div>
              </div>
              <div class="transaction-amount ${tx.type}">${tx.amount}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
    }, renderHomeView = function() {
      return `
      <div class="home-view">
        <h1 class="home-heading">Choose a use case</h1>
        <p class="home-subheading">Select what you'd like to explore</p>
        <div class="use-cases-grid">
          ${useCases.map((uc2) => `
            <div class="use-case-card" data-usecase="${uc2.id}">
              <div class="use-case-icon">${uc2.icon}</div>
              <div class="use-case-title">${uc2.title}</div>
              <div class="use-case-description">${uc2.description}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
    }, renderDashboardView = function() {
      const useCaseTitle = useCases.find((uc2) => uc2.id === selectedUseCase)?.title || "Dashboard";
      return `
      <div class="dashboard-view">
        <div class="dashboard-sidebar">
          <div class="sidebar-header">
            <div class="sidebar-logo">
              <div class="sidebar-logo-icon">D</div>
              Democues
            </div>
          </div>
          <nav class="sidebar-nav">
            ${navItems.map((item) => `
              <div class="nav-item ${item.active ? "active" : ""}" data-nav="${item.id}">
                ${item.icon}
                ${item.label}
              </div>
            `).join("")}
          </nav>
        </div>
        <div class="dashboard-main">
          <div class="dashboard-header">
            <div class="dashboard-breadcrumb">
              <span class="breadcrumb-link" data-action="go-home">Home</span>
              <span class="breadcrumb-separator">/</span>
              <span class="breadcrumb-current">${useCaseTitle}</span>
            </div>
            <div class="dashboard-actions">
              <button class="upload-btn">
                ${uploadIcon}
                Upload my data
              </button>
            </div>
          </div>
          <div class="dashboard-content">
            ${renderMetricsRow()}
            <div class="widgets-row">
              ${renderTasksPanel()}
              ${renderTransactionsWidget()}
            </div>
          </div>
        </div>
      </div>
    `;
    }, renderCurrentView = function() {
      if (!shadowRootRef) return;
      const contentArea = shadowRootRef.querySelector(".modal-content");
      if (!contentArea) return;
      if (currentView === "home") {
        contentArea.innerHTML = renderHomeView();
      } else if (currentView === "dashboard") {
        contentArea.innerHTML = renderDashboardView();
      }
      attachViewEventListeners();
    }, navigateTo = function(view) {
      if (!VALID_VIEWS.includes(view)) {
        console.warn(`Democues: Invalid view "${view}", defaulting to home`);
        view = "home";
      }
      currentView = view;
      renderCurrentView();
    }, attachViewEventListeners = function() {
      if (currentView === "home") {
        const cards = shadowRootRef.querySelectorAll(".use-case-card");
        cards.forEach((card) => {
          card.addEventListener("click", () => {
            const useCaseId = card.dataset.usecase;
            selectedUseCase = useCaseId;
            navigateTo("dashboard");
          });
        });
      } else if (currentView === "dashboard") {
        const homeLink = shadowRootRef.querySelector('[data-action="go-home"]');
        if (homeLink) {
          homeLink.addEventListener("click", () => navigateTo("home"));
        }
        const navItemElements = shadowRootRef.querySelectorAll(".nav-item");
        navItemElements.forEach((item) => {
          item.addEventListener("click", () => {
            navItemElements.forEach((n) => n.classList.remove("active"));
            item.classList.add("active");
          });
        });
        const taskItems = shadowRootRef.querySelectorAll(".task-item");
        taskItems.forEach((item) => {
          item.addEventListener("click", () => {
            const checkbox = item.querySelector(".task-checkbox");
            checkbox.classList.toggle("checked");
            item.classList.toggle("completed");
          });
        });
      }
    }, createOverlayHost = function() {
      const host = document.createElement("div");
      host.id = "democues-overlay-host";
      const shadowRoot = host.attachShadow({ mode: "open" });
      shadowRootRef = shadowRoot;
      const style = document.createElement("style");
      style.textContent = `
      /* Reset & Base */
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      /* Backdrop */
      .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 2147483646;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .backdrop.visible {
        opacity: 1;
      }

      /* Modal Container (Right-side Sidebar) */
      .modal {
        position: fixed;
        top: 0;
        right: 0;
        transform: translateX(100%);
        width: 600px;
        height: 100vh;
        background: linear-gradient(180deg, #FAFBFC 0%, #F3F4F6 100%);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);
        z-index: 2147483647;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        opacity: 0;
        transition: transform 0.3s ease-out, opacity 0.3s ease;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        line-height: 1.5;
        color: #1F2937;
        border-radius: 0;
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      .modal.open {
        transform: translateX(0);
        opacity: 1;
      }

      /* Modal Header */
      .modal-header {
        padding: 16px 24px;
        background: #FFFFFF;
        border-bottom: 1px solid #E5E7EB;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
      }
      .header-left {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .logo {
        width: 32px;
        height: 32px;
        background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #A855F7 100%);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
      }
      .logo svg {
        width: 18px;
        height: 18px;
        fill: white;
      }
      .header-title {
        display: flex;
        flex-direction: column;
      }
      .title {
        font-weight: 600;
        font-size: 16px;
        color: #111827;
        letter-spacing: -0.01em;
      }
      .close-btn {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        color: #9CA3AF;
        transition: all 0.15s ease;
      }
      .close-btn:hover {
        color: #374151;
        background: #F3F4F6;
      }
      .close-btn svg {
        width: 20px;
        height: 20px;
      }

      /* Modal Content */
      .modal-content {
        flex: 1;
        overflow: hidden;
        padding: 0;
      }
      .modal-content::-webkit-scrollbar {
        width: 6px;
      }
      .modal-content::-webkit-scrollbar-track {
        background: transparent;
      }
      .modal-content::-webkit-scrollbar-thumb {
        background: #D1D5DB;
        border-radius: 3px;
      }
      .modal-content::-webkit-scrollbar-thumb:hover {
        background: #9CA3AF;
      }

      /* Home View */
      .home-view {
        padding: 32px 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        overflow-y: auto;
      }
      .home-heading {
        font-size: 28px;
        font-weight: 600;
        color: #1F2937;
        margin-bottom: 8px;
        text-align: center;
      }
      .home-subheading {
        font-size: 16px;
        color: #6B7280;
        margin-bottom: 40px;
        text-align: center;
      }
      .use-cases-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 20px;
        width: 100%;
        max-width: 100%;
      }
      .use-case-card {
        background: #FFFFFF;
        border: 1px solid #E5E7EB;
        border-radius: 12px;
        padding: 24px;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .use-case-card:hover {
        border-color: #6366F1;
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
        transform: translateY(-2px);
      }
      .use-case-icon {
        width: 48px;
        height: 48px;
        background: linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #6366F1;
      }
      .use-case-icon svg {
        width: 24px;
        height: 24px;
      }
      .use-case-title {
        font-size: 16px;
        font-weight: 600;
        color: #111827;
      }
      .use-case-description {
        font-size: 14px;
        color: #6B7280;
        line-height: 1.5;
      }

      /* Dashboard Layout */
      .dashboard-view {
        display: flex;
        height: 100%;
        overflow: hidden;
      }
      .dashboard-sidebar {
        width: 200px;
        background: #FFFFFF;
        border-right: 1px solid #E5E7EB;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        overflow-y: auto;
      }
      .sidebar-header {
        padding: 20px 16px;
        border-bottom: 1px solid #E5E7EB;
      }
      .sidebar-logo {
        font-size: 18px;
        font-weight: 600;
        color: #111827;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .sidebar-logo-icon {
        width: 28px;
        height: 28px;
        background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 14px;
        font-weight: 700;
      }
      .sidebar-nav {
        padding: 12px 8px;
        flex: 1;
      }
      .nav-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 12px;
        border-radius: 8px;
        color: #4B5563;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.15s ease;
        margin-bottom: 2px;
      }
      .nav-item:hover {
        background: #F3F4F6;
        color: #111827;
      }
      .nav-item.active {
        background: #EEF2FF;
        color: #6366F1;
      }
      .nav-item svg {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
      }
      .nav-section-title {
        font-size: 11px;
        font-weight: 600;
        color: #9CA3AF;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        padding: 16px 12px 8px;
      }

      /* Dashboard Main Area */
      .dashboard-main {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        background: #F9FAFB;
      }
      .dashboard-header {
        padding: 16px 24px;
        background: #FFFFFF;
        border-bottom: 1px solid #E5E7EB;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .dashboard-breadcrumb {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
      }
      .breadcrumb-link {
        color: #6366F1;
        cursor: pointer;
        text-decoration: none;
      }
      .breadcrumb-link:hover {
        text-decoration: underline;
      }
      .breadcrumb-separator {
        color: #D1D5DB;
      }
      .breadcrumb-current {
        color: #111827;
        font-weight: 500;
      }
      .dashboard-actions {
        display: flex;
        gap: 12px;
      }
      .upload-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        background: #6366F1;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      .upload-btn:hover {
        background: #4F46E5;
      }
      .upload-btn svg {
        width: 16px;
        height: 16px;
      }

      /* Dashboard Content Area */
      .dashboard-content {
        flex: 1;
        padding: 24px;
        overflow-y: auto;
      }
      .dashboard-content::-webkit-scrollbar {
        width: 6px;
      }
      .dashboard-content::-webkit-scrollbar-track {
        background: transparent;
      }
      .dashboard-content::-webkit-scrollbar-thumb {
        background: #D1D5DB;
        border-radius: 3px;
      }
      .dashboard-content::-webkit-scrollbar-thumb:hover {
        background: #9CA3AF;
      }
      .dashboard-sidebar::-webkit-scrollbar {
        width: 6px;
      }
      .dashboard-sidebar::-webkit-scrollbar-track {
        background: transparent;
      }
      .dashboard-sidebar::-webkit-scrollbar-thumb {
        background: #D1D5DB;
        border-radius: 3px;
      }
      .dashboard-sidebar::-webkit-scrollbar-thumb:hover {
        background: #9CA3AF;
      }
      .content-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
      }

      /* Metric Cards */
      .metrics-row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin-bottom: 24px;
      }
      .metric-card {
        background: #FFFFFF;
        border: 1px solid #E5E7EB;
        border-radius: 12px;
        padding: 20px;
      }
      .metric-label {
        font-size: 13px;
        color: #6B7280;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .metric-label svg {
        width: 16px;
        height: 16px;
      }
      .metric-value {
        font-size: 28px;
        font-weight: 600;
        color: #111827;
        margin-bottom: 8px;
      }
      .metric-change {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 13px;
        font-weight: 500;
        padding: 2px 8px;
        border-radius: 100px;
      }
      .metric-change.positive {
        background: #D1FAE5;
        color: #059669;
      }
      .metric-change.negative {
        background: #FEE2E2;
        color: #DC2626;
      }
      .metric-change svg {
        width: 12px;
        height: 12px;
      }

      /* Widget Panels */
      .widgets-row {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
      }
      .widget-panel {
        background: #FFFFFF;
        border: 1px solid #E5E7EB;
        border-radius: 12px;
        overflow: hidden;
      }
      .widget-header {
        padding: 16px 20px;
        border-bottom: 1px solid #E5E7EB;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .widget-title {
        font-size: 16px;
        font-weight: 600;
        color: #111827;
      }
      .widget-action {
        font-size: 13px;
        color: #6366F1;
        cursor: pointer;
        font-weight: 500;
      }
      .widget-action:hover {
        text-decoration: underline;
      }

      /* Tasks List */
      .tasks-list {
        padding: 8px 0;
      }
      .task-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 20px;
        cursor: pointer;
        transition: background 0.15s ease;
      }
      .task-item:hover {
        background: #F9FAFB;
      }
      .task-checkbox {
        width: 18px;
        height: 18px;
        border: 2px solid #D1D5DB;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        transition: all 0.15s ease;
      }
      .task-checkbox.checked {
        background: #6366F1;
        border-color: #6366F1;
      }
      .task-checkbox.checked svg {
        color: white;
      }
      .task-checkbox svg {
        width: 12px;
        height: 12px;
        opacity: 0;
      }
      .task-checkbox.checked svg {
        opacity: 1;
      }
      .task-content {
        flex: 1;
      }
      .task-title {
        font-size: 14px;
        color: #111827;
        margin-bottom: 2px;
      }
      .task-item.completed .task-title {
        color: #9CA3AF;
        text-decoration: line-through;
      }
      .task-meta {
        font-size: 12px;
        color: #9CA3AF;
      }
      .task-priority {
        padding: 2px 8px;
        border-radius: 100px;
        font-size: 11px;
        font-weight: 500;
      }
      .task-priority.high {
        background: #FEE2E2;
        color: #DC2626;
      }
      .task-priority.medium {
        background: #FEF3C7;
        color: #D97706;
      }
      .task-priority.low {
        background: #D1FAE5;
        color: #059669;
      }

      /* Transactions Widget */
      .transactions-balance {
        padding: 24px 20px;
        text-align: center;
        border-bottom: 1px solid #E5E7EB;
      }
      .balance-label {
        font-size: 13px;
        color: #6B7280;
        margin-bottom: 4px;
      }
      .balance-value {
        font-size: 32px;
        font-weight: 600;
        color: #111827;
      }
      .transactions-list {
        padding: 8px 0;
      }
      .transaction-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 20px;
      }
      .transaction-info {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .transaction-icon {
        width: 36px;
        height: 36px;
        background: #F3F4F6;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #6B7280;
      }
      .transaction-icon svg {
        width: 18px;
        height: 18px;
      }
      .transaction-name {
        font-size: 14px;
        color: #111827;
        font-weight: 500;
      }
      .transaction-date {
        font-size: 12px;
        color: #9CA3AF;
      }
      .transaction-amount {
        font-size: 14px;
        font-weight: 500;
      }
      .transaction-amount.income {
        color: #059669;
      }
      .transaction-amount.expense {
        color: #DC2626;
      }
    `;
      const backdrop = document.createElement("div");
      backdrop.className = "backdrop";
      backdrop.addEventListener("click", hideOverlay);
      backdropElement = backdrop;
      const modal = document.createElement("div");
      modal.className = "modal";
      modal.addEventListener("click", (e) => e.stopPropagation());
      const header = document.createElement("div");
      header.className = "modal-header";
      const headerLeft = document.createElement("div");
      headerLeft.className = "header-left";
      const logo = document.createElement("div");
      logo.className = "logo";
      logo.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`;
      const headerTitle = document.createElement("div");
      headerTitle.className = "header-title";
      const title = document.createElement("span");
      title.className = "title";
      title.textContent = "Democues";
      headerTitle.appendChild(title);
      headerLeft.appendChild(logo);
      headerLeft.appendChild(headerTitle);
      const closeButton = document.createElement("button");
      closeButton.className = "close-btn";
      closeButton.setAttribute("aria-label", "Close overlay");
      closeButton.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
      closeButton.addEventListener("click", hideOverlay);
      header.appendChild(headerLeft);
      header.appendChild(closeButton);
      const content = document.createElement("div");
      content.className = "modal-content";
      modal.appendChild(header);
      modal.appendChild(content);
      modalElement = modal;
      shadowRoot.appendChild(style);
      shadowRoot.appendChild(backdrop);
      shadowRoot.appendChild(modal);
      return host;
    }, showOverlay = function() {
      if (!hostElement) {
        hostElement = createOverlayHost();
      }
      document.body.appendChild(hostElement);
      currentView = "home";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          backdropElement.classList.add("visible");
          modalElement.classList.add("open");
          renderCurrentView();
        });
      });
      overlayVisible = true;
      console.log("Democues: Overlay shown");
    }, hideOverlay = function() {
      if (modalElement) {
        backdropElement.classList.remove("visible");
        modalElement.classList.remove("open");
        setTimeout(() => {
          if (hostElement && hostElement.parentNode) {
            hostElement.parentNode.removeChild(hostElement);
          }
          hostElement = null;
          backdropElement = null;
          modalElement = null;
          shadowRootRef = null;
        }, 300);
      }
      overlayVisible = false;
      console.log("Democues: Overlay hidden");
    }, toggleOverlay = function() {
      if (overlayVisible) {
        hideOverlay();
      } else {
        showOverlay();
      }
    };
    window.democuesOverlayInitialized = true;
    let overlayVisible = false;
    let hostElement = null;
    let backdropElement = null;
    let modalElement = null;
    let shadowRootRef = null;
    let currentView = "home";
    let selectedUseCase = null;
    const VALID_VIEWS = ["home", "dashboard"];
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.action === "toggle-sidebar") {
        toggleOverlay();
      }
      return true;
    });
    console.log("Democues: Content script initialized");
  }
})();
