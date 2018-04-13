!function(e) {
    "use strict";
    var t = Array.isArray, n = {};
    function r(e) {
        return document.createTextNode(e);
    }
    function i(e) {
        return document.createElement(e);
    }
    function o(t) {
        return null === t ? e : t;
    }
    function a(e) {
        return "number" == typeof e;
    }
    function l(e) {
        return "string" == typeof e;
    }
    function u(e) {
        return "function" == typeof e;
    }
    function c(e) {
        return "object" == typeof e;
    }
    null == Object.assign && (Object.assign = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        if (null == e) throw new TypeError("Target in assign cannot be undefined or null");
        for (var r = arguments.length, i = 1; i < r; i++) {
            var o = arguments[i];
            if (null != o) for (var a = Object.keys(o), l = a.length, u = 0; u < l; u++) {
                var c = a[u];
                e[c] = o[c];
            }
        }
        return e;
    });
    var f = Object.assign;
    var s = !1, d = !1, v = [], h = [], p = function(e, t, n, r) {
        n !== r && (e[Mt] = n);
    };
    function g(e) {
        var t = p;
        return p = e, t;
    }
    function m() {
        return Object.create(null);
    }
    var y = [ "Webkit", "Moz", "ms", "O" ], b = document.createElement("div").style;
    function w(e) {
        return l(b[e]);
    }
    var x = m(), k = {
        boxFlex: !0,
        boxFlexGroup: !0,
        columnCount: !0,
        flex: !0,
        flexGrow: !0,
        flexNegative: !0,
        flexPositive: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        strokeDashoffset: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
    };
    function C(t) {
        return function(n, r, i) {
            n[t] = r, n[i] = e;
        };
    }
    function D(t) {
        return function(n, r, i) {
            a(r) ? n[t] = r + "px" : n[t] = r, n[i] = e;
        };
    }
    function E(e, t, n) {
        a(t) && (e[n] = t + "px");
    }
    function M() {
        return document.documentMode;
    }
    function T(t) {
        for (var n = Object.keys(t), r = 0, i = n.length; r < i; r++) {
            var o = n[r], a = x[o], l = t[o];
            if (l !== e) {
                if (a === e) {
                    if (w(o)) a = !0 === k[o] ? null : E; else {
                        for (var u = o.replace(/^\w/, function(e) {
                            return e.toUpperCase();
                        }), c = 0; c < y.length; c++) if (w(y[c] + u)) {
                            a = (!0 === k[o] ? C : D)(y[c] + u);
                            break;
                        }
                        a === e && (a = !0 === k[o] ? null : E);
                    }
                    x[o] = a;
                }
                null !== a && a(t, l, o);
            }
        }
    }
    function O(e, t) {
        e[t] = "";
    }
    function X(e, t, n) {
        if (l(n)) {
            var r = n.length;
            if (r > 11 && " !important" === n.substr(r - 11, 11)) return void e.setProperty(t, n.substr(0, r - 11), "important");
        }
        e[t] = n;
    }
    function P(t, n, r) {
        var i, o = t.style;
        if (c(n)) if (T(n), c(r)) {
            for (i in r) i in n || O(o, i);
            for (i in n) {
                (a = n[i]) !== e ? r[i] !== a && X(o, i, a) : O(o, i);
            }
        } else for (i in r && (o.cssText = ""), n) {
            var a;
            (a = n[i]) !== e && X(o, i, a);
        } else if (n) o.cssText = n; else if (c(r)) for (i in r) O(o, i); else r && (o.cssText = "");
    }
    function Y(e, t) {
        s ? e.setAttribute("class", t) : e.className = t;
    }
    var S = /^input$|^select$|^textarea$|^button$/, N = "tabindex";
    function j(t, n, r, i, o) {
        var a, l, c, f, d, v = !1;
        if (null != r) for (a in r) {
            if (l = r[a], c = i[a], o && a === N) l = -1, v = !0; else if (a === Mt && !s) {
                u(l) && (i[Ct] = l, l = l()), f = c, d = l, i[a] = l;
                continue;
            }
            c !== l && (i[a] = l, s ? "href" === a ? n.setAttributeNS("http://www.w3.org/1999/xlink", "href", l) : n.setAttribute(a, l) : a in n && "list" !== a && "form" !== a ? n[a] = l : n.setAttribute(a, l));
        }
        if (o && !v && t.tag && S.test(t.tag) && (n.setAttribute(N, "-1"), i[N] = -1), null == r) {
            for (a in i) if (i[a] !== e) {
                if (o && a === N) continue;
                if (a === Ct) continue;
                i[a] = e, n.removeAttribute(a);
            }
        } else for (a in i) if (i[a] !== e && !(a in r)) {
            if (o && a === N) continue;
            if (a === Ct) continue;
            i[a] = e, n.removeAttribute(a);
        }
        return d !== e && p(n, t, d, f), i;
    }
    function I(e) {
        var t = e.component;
        if (t) {
            var n = t.postInitDom;
            n && (v.push(n), h.push(e));
        }
    }
    function K(e) {
        var t = e.component;
        if (t) {
            var n = t.postUpdateDom;
            n && (v.push(n), h.push(e)), (n = t.postUpdateDomEverytime) && (v.push(n), h.push(e));
        }
    }
    function A(e) {
        var t = e.component;
        if (t) {
            var n = t.postUpdateDomEverytime;
            n && (v.push(n), h.push(e));
        }
    }
    function F(t) {
        for (var n; t && (n = t.cfg) === e; ) {
            if (t.ctx) {
                n = t.ctx.cfg;
                break;
            }
            t = t.parent;
        }
        return n;
    }
    function U(e, t) {
        if (null != e) if (u(e)) e(t); else {
            var n = e[0], r = n.refs;
            null == r && (r = m(), n.refs = r), r[e[1]] = t;
        }
    }
    var B, L = [], R = null;
    function $(t, n, o, u) {
        var c, f, v = {
            tag: t.tag,
            key: t.key,
            ref: t.ref,
            className: t.className,
            style: t.style,
            attrs: t.attrs,
            children: t.children,
            component: t.component,
            data: t.data,
            cfg: e,
            parent: n,
            element: e,
            ctx: e,
            orig: t
        }, h = s, p = d, g = v.component;
        (U(v.ref, v), g) && (g.ctxClass ? ((f = new g.ctxClass(v.data || {}, v)).data === e && (f.data = v.data || {}), 
        f.me === e && (f.me = v)) : f = {
            data: v.data || {},
            me: v,
            cfg: e
        }, f.cfg = t.cfg === e ? F(n) : t.cfg, v.ctx = f, B = f, g.init && g.init(f, v), 
        je !== Ne && je(t, 0), g.render && g.render(f, v), B = e);
        var m = v.tag;
        if ("-" === m) return v.tag = e, v.children = e, v;
        var y = v.children, b = !1;
        if (a(y) && (y = "" + y, v.children = y), m === e) return l(y) ? (c = r(y), v.element = c, 
        o.insertBefore(c, u)) : V(v, o, u), g && (g.postRender && g.postRender(v.ctx, v), 
        I(v)), v;
        if ("/" === m) {
            var w = y;
            if ("" === w) ; else if (null == u) {
                var x = o.lastChild;
                for (o.insertAdjacentHTML("beforeend", w), v.element = [], x = x ? x.nextSibling : o.firstChild; x; ) v.element.push(x), 
                x = x.nextSibling;
            } else {
                c = u;
                var k = u.previousSibling, C = !1, D = o;
                c.insertAdjacentHTML || (c = D.insertBefore(i("i"), c), C = !0), c.insertAdjacentHTML("beforebegin", w), 
                k = k ? k.nextSibling : D.firstChild;
                for (var E = []; k !== c; ) E.push(k), k = k.nextSibling;
                v.element = E, C && D.removeChild(c);
            }
            return g && (g.postRender && g.postRender(v.ctx, v), I(v)), v;
        }
        s || "svg" === m ? (c = document.createElementNS("http://www.w3.org/2000/svg", m), 
        s = !(b = "foreignObject" === m)) : c = i(m), o.insertBefore(c, u), v.element = c, 
        V(v, c, null), g && g.postRender && g.postRender(v.ctx, v), d && R === v && (d = !1), 
        b && (s = !0), (v.attrs || d) && (v.attrs = j(v, c, v.attrs, {}, d)), v.style && P(c, v.style, e);
        var M = v.className;
        return M && Y(c, M), s = h, d = p, I(v), v;
    }
    function z(t) {
        return !1 === t || !0 === t || null === t ? e : l(t) ? {
            children: t
        } : a(t) ? {
            children: "" + t
        } : t;
    }
    function V(e, n, r) {
        var i = e.children;
        if (i) {
            if (!t(i)) {
                if (l(i)) return void (n.textContent = i);
                i = [ i ];
            }
            for (var o = 0, a = (i = i.slice(0)).length; o < a; ) {
                var u = i[o];
                t(u) ? (i.splice.apply(i, [ o, 1 ].concat(u)), a = i.length) : null != (u = z(u)) ? (i[o] = $(u, e, n, r), 
                o++) : (i.splice(o, 1), a--);
            }
            e.children = i;
        }
    }
    function H(e) {
        U(e.ref, null);
        var n = e.children;
        if (t(n)) for (var r = 0, i = n.length; r < i; r++) H(n[r]);
        var o = e.component;
        if (o) {
            var a = e.ctx;
            B = a, je !== Ne && je(e, 3), o.destroy && o.destroy(a, e, e.element);
            var l = a.disposables;
            if (t(l)) for (var c = l.length; c-- > 0; ) {
                var f = l[c];
                u(f) ? f(a) : f.dispose();
            }
        }
    }
    function W(e) {
        var n = e.element;
        if (t(n)) {
            var r = n[0].parentNode;
            if (r) for (var i = 0; i < n.length; i++) r.removeChild(n[i]);
        } else if (null != n) {
            var o = n.parentNode;
            o && o.removeChild(n);
        } else {
            var a = e.children;
            if (t(a)) for (var l = 0, u = a.length; l < u; l++) W(a[l]);
        }
    }
    function G(e) {
        H(e), W(e);
    }
    var q = m();
    function J(n, r, i, o) {
        var a = n.element, l = n.children;
        if (t(a)) {
            for (var u = 0; u < a.length; u++) if (a[u] === r) return o.push(n), t(l) ? l : null;
        } else if (null == a) {
            if (t(l)) for (var c = 0; c < l.length; c++) {
                var f = J(l[c], r, i, o);
                if (f !== e) return o.splice(i, 0, n), f;
            }
        } else if (a === r) return o.push(n), t(l) ? l : null;
        return e;
    }
    function Z(t) {
        var n = [];
        if (null == t) return n;
        var r = Object.keys(q), i = r.map(function(e) {
            return q[e].e || document.body;
        }), o = [];
        e: for (;t; ) {
            for (var a = 0; a < i.length; a++) if (t === i[a]) break e;
            o.push(t), t = t.parentNode;
        }
        if (!t || 0 === o.length) return n;
        var l = null, u = o.pop();
        for (a = 0; a < i.length; a++) if (t === i[a]) {
            var c = q[r[a]].n;
            if (c === e) continue;
            if ((d = J(c, u, n.length, n)) !== e) {
                l = d;
                break;
            }
        }
        e: for (;o.length; ) {
            if (u = o.pop(), l && l.length) for (var f = 0, s = l.length; f < s; f++) {
                var d;
                if ((d = J(l[f], u, n.length, n)) !== e) {
                    l = d;
                    continue e;
                }
            }
            n.push(null);
            break;
        }
        return n;
    }
    function Q(e) {
        for (var t = Z(e), n = null; null === n; ) n = t.pop();
        return n;
    }
    function _(t, n, r) {
        r && r.postRender && (B = n.ctx, r.postRender(B, t, n), B = e), n.data = t.data, 
        K(n);
    }
    function ee(n, r, i) {
        if (B = e, t(n.children)) {
            var o = s, a = d;
            "svg" === n.tag ? s = !0 : s && "foreignObject" === n.tag && (s = !1), d && R === n && (d = !1), 
            Se(n.children, n.element || r, null != n.element ? null : i), s = o, d = a;
        }
        A(n);
    }
    function te(r, i, o, u, c, v) {
        var h = r.component, p = !1, g = i.ctx;
        if (null != h && null != g) {
            var m = !1;
            if (g[ye] === De && (c = Math.max(c, g[be]), m = !0), h.id !== i.component.id) p = !0; else {
                if (B = g, r.cfg !== e ? g.cfg = r.cfg : g.cfg = F(i.parent), h.shouldChange && !h.shouldChange(g, r, i) && !Ge && !m) return ee(i, o, u), 
                i;
                g.data = r.data || {}, i.component = h, je !== Ne && je(r, v ? 2 : 1), h.render && (i.orig = r, 
                r = f({}, r), i.cfg = e, r.cfg !== e && (r.cfg = e), h.render(g, r, i), r.cfg !== e && (i.cfg === e ? i.cfg = r.cfg : f(i.cfg, r.cfg))), 
                B = e;
            }
        } else {
            if (i.orig === r) return i;
            i.orig = r;
        }
        var y = r.children, b = i.children, w = r.tag;
        if ("-" === w) return ee(i, o, u), i;
        var x = s, k = d;
        if (a(y) && (y = "" + y), p || null != h && null == g || null == h && null != g && g.me.component !== n) ; else if ("/" === w) {
            if ("/" === i.tag && b === y) return _(r, i, h), i;
        } else if (w === i.tag) {
            if (w === e) {
                if (l(y) && l(b)) {
                    if (y !== b) (D = i.element).textContent = y, i.children = y;
                } else d && R === i && (d = !1), c <= 0 ? t(b) && Se(i.children, o, u) : i.children = ce(o, y, b, i, u, c - 1), 
                s = x, d = k;
                return _(r, i, h), i;
            }
            var C = !1;
            "svg" === w ? s = !0 : s && "foreignObject" === w && (C = !0, s = !1), d && R === i && (d = !1);
            var D = i.element;
            l(y) && !t(b) ? y !== b && (D.textContent = y, b = y) : c <= 0 ? t(b) && Se(i.children, D, u) : b = ce(D, y, b, i, null, c - 1), 
            i.children = b, C && (s = !0), _(r, i, h), (i.attrs || r.attrs || d) && (i.attrs = j(i, D, r.attrs, i.attrs || {}, d)), 
            P(D, r.style, i.style), i.style = r.style;
            var E = r.className;
            return E !== i.className && (Y(D, E || ""), i.className = E), s = x, d = k, i;
        }
        var M = i.element;
        t(M) && (M = M[0]), M = null == M ? o : M.parentNode;
        var T = $(r, i.parent, M, ne(i));
        return G(i), T;
    }
    function ne(n) {
        if (n === e) return null;
        var r = n.element;
        if (null != r) return t(r) ? r[0] : r;
        var i = n.children;
        if (!t(i)) return null;
        for (var o = 0; o < i.length; o++) if (r = ne(i[o])) return r;
        return null;
    }
    function re(e, t, n, r) {
        for (;++t < n; ) {
            var i = e[t];
            if (null != i) {
                var o = ne(i);
                if (null != o) return o;
            }
        }
        return r;
    }
    function ie() {
        for (var t = h.length, n = 0; n < t; n++) {
            var r = h[n];
            B = r.ctx, v[n].call(r.component, B, r, r.element);
        }
        B = e, v = [], h = [];
    }
    function oe(e, t, n, r, i, o, a) {
        t[n] = te(e, t[n], o, re(t, n, r, i), a);
    }
    function ae(e, n, r) {
        var i = e.element;
        if (null == i) {
            var o = e.children;
            if (t(o)) for (a = 0; a < o.length; a++) ae(o[a], n, r);
        } else if (t(i)) for (var a = 0; a < i.length; a++) n.insertBefore(i[a], r); else n.insertBefore(i, r);
    }
    function le(e, t, n, r, i) {
        var o = re(e, t, n, r), a = e[t], l = ne(a);
        null != l && l !== o && ae(a, i, o);
    }
    function ue(e, t, n, r, i, o, a) {
        var l = re(t, n, r, i), u = t[n], c = ne(u);
        null != c && c !== l && ae(u, o, l), t[n] = te(e, u, o, l, a);
    }
    function ce(e, n, r, i, o, a) {
        null == n && (n = []), t(n) || (n = [ n ]), null == r && (r = []), t(r) || (e.firstChild && e.removeChild(e.firstChild), 
        r = []);
        var l, u = n, c = (u = u.slice(0)).length;
        for (l = 0; l < c; ) {
            var f = u[l];
            t(f) ? (u.splice.apply(u, [ l, 1 ].concat(f)), c = u.length) : null != (f = z(f)) ? (u[l] = f, 
            l++) : (u.splice(l, 1), c--);
        }
        return fe(e, u, r, i, o, a);
    }
    function fe(t, n, r, i, o, a) {
        for (var l = n.length, u = r.length, c = u, f = 0, s = 0; f < l && s < c; ) {
            if (n[f].key !== r[s].key) {
                for (;n[l - 1].key === r[c - 1].key && (c--, oe(n[--l], r, c, u, o, t, a), f < l && s < c); ) ;
                if (f < l && s < c) {
                    if (n[f].key === r[c - 1].key) {
                        r.splice(s, 0, r[c - 1]), r.splice(c, 1), ue(n[f], r, s, u, o, t, a), f++, s++;
                        continue;
                    }
                    if (n[l - 1].key === r[s].key) {
                        r.splice(c, 0, r[s]), r.splice(s, 1), c--, ue(n[--l], r, c, u, o, t, a);
                        continue;
                    }
                }
                break;
            }
            oe(n[f], r, s, u, o, t, a), f++, s++;
        }
        if (s === c) {
            if (f === l) return r;
            for (;f < l; ) r.splice(s, 0, $(n[f], i, t, re(r, s - 1, u, o))), s++, c++, u++, 
            f++;
            return r;
        }
        if (f === l) {
            for (;s < c; ) G(r[--c]), r.splice(c, 1);
            return r;
        }
        for (var d, v = m(), h = m(), p = f, g = s, y = 0; s < c; s++) null != (d = r[s].key) ? v[d] = s : y--;
        for (var b = -y - y; f < l; f++) null != (d = n[f].key) ? h[d] = f : y++;
        b += y;
        var w, x = 0;
        for (f = p, s = g; s < c && f < l; ) if (null !== r[s]) if (null != (w = r[s].key)) {
            if (null == (d = n[f].key)) {
                for (f++; f < l && null == (d = n[f].key); ) f++;
                if (null == d) break;
            }
            var k = v[d];
            k !== e ? w in h ? s === k + x ? (oe(n[f], r, s, u, o, t, a), f++, s++) : (r.splice(s, 0, r[k + x]), 
            r[k + ++x] = null, ue(n[f], r, s, u, o, t, a), s++, c++, u++, f++) : (G(r[s]), r.splice(s, 1), 
            x--, c--, u--) : (r.splice(s, 0, $(n[f], i, t, re(r, s - 1, u, o))), x++, f++, s++, 
            c++, u++);
        } else s++; else r.splice(s, 1), c--, u--, x--;
        for (;s < c; ) null !== r[s] ? null == r[s].key ? s++ : (G(r[s]), r.splice(s, 1), 
        c--, u--) : (r.splice(s, 1), c--, u--);
        for (;f < l; ) null != (d = n[f].key) && (r.splice(s, 0, $(n[f], i, t, re(r, s - 1, u, o))), 
        c++, u++, x++, s++), f++;
        if (!b) return r;
        for (b = b - Math.abs(y) >> 1, f = p, s = g; f < l; ) if (s < c && null != (w = r[s].key)) s++; else if (d = n[f].key, 
        f < c && d === r[f].key) {
            if (null != d) {
                f++;
                continue;
            }
            oe(n[f], r, f, u, o, t, a), b--, s = ++f;
        } else if (null == d) s < c ? (r.splice(f, 0, r[s]), r.splice(s + 1, 1), ue(n[f], r, f, u, o, t, a), 
        b--, f++, s++) : (r.splice(f, 0, $(n[f], i, t, re(r, f - 1, u, o))), c++, u++, f++, 
        s++); else {
            if (0 === b && y < 0) {
                for (;G(r[s]), r.splice(s, 1), c--, u--, y++, null == r[s].key; ) ;
                continue;
            }
            for (;null == r[s].key; ) s++;
            r[s].key, r.splice(f, 0, r[s]), r.splice(s + 1, 1), le(r, f, u, o, t), s = ++f;
        }
        for (;c > f; ) G(r[--c]), r.splice(c, 1);
        return r;
    }
    var se = !1, de = window.requestAnimationFrame;
    de && de(function(e) {
        e === +e && (se = !0);
    });
    var ve = Date.now || function() {
        return new Date().getTime();
    }, he = ve(), pe = 0;
    function ge(e) {
        if (se) de(e); else {
            var t = 50 / 3 + pe - ve();
            t < 0 && (t = 0), window.setTimeout(function() {
                pe = ve(), e(pe - he);
            }, t);
        }
    }
    var me, ye = "$invalidated", be = "$deepness", we = !0, xe = !1, ke = !0, Ce = 0, De = 0, Ee = 0, Me = {};
    function Te(e, t, n) {
        null == me && (me = {});
        var r = me[e] || [];
        r.push({
            priority: t,
            callback: n
        }), me[e] = r;
    }
    function Oe(e, t, n, r) {
        var i = Me[e];
        if (i) for (var o = 0; o < i.length; o++) if (i[o](t, n, r)) return !0;
        return !1;
    }
    var Xe = 0;
    function Pe(e, t) {
        if ("!" != t[0]) {
            var n = "^" == t[0], r = t;
            "@" == t[0] && (r = t.slice(1), e = document), n && (r = t.slice(1)), "on" + r in window && (e = window), 
            e.addEventListener(r, i, n);
        }
        function i(n) {
            var r = (n = n || window.event).target || n.srcElement || e;
            Xe++, Oe(t, n, r, Q(r)), 0 == --Xe && Re && $e();
        }
    }
    function Ye() {
        if (me !== e) {
            for (var t = Object.keys(me), n = 0; n < t.length; n++) {
                var r = t[n], i = me[r];
                i = i.sort(function(e, t) {
                    return e.priority - t.priority;
                }), Me[r] = i.map(function(e) {
                    return e.callback;
                });
            }
            me = e;
            for (var o = document.body, a = 0; a < t.length; a++) Pe(o, t[a]);
        }
    }
    function Se(e, n, r) {
        for (var i = e.length, o = 0; o < i; o++) {
            var a = e[o], l = a.ctx;
            if (null != l && l[ye] === De) e[o] = te(a.orig, a, n, r, l[be], !0); else if (t(a.children)) {
                var u = s, c = d;
                d && R === a && (d = !1), "svg" === a.tag ? s = !0 : s && "foreignObject" === a.tag && (s = !1), 
                Se(a.children, a.element || n, re(e, o, i, r)), A(a), s = u, d = c;
            }
        }
    }
    var Ne = function() {}, je = Ne, Ie = function() {}, Ke = function() {}, Ae = function() {};
    function Fe(e) {
        var t = Ie;
        return Ie = e, t;
    }
    function Ue(e) {
        var t = Ae;
        return Ae = e, t;
    }
    function Be(e, t, n) {
        for (;null != t; ) {
            if (e === t) return !0;
            var r = t.parent;
            if (null == r) for (var i = 0; i < n.length; i++) {
                var o = q[n[i]];
                if (o && o.n === t) {
                    r = o.p;
                    break;
                }
            }
            t = r;
        }
        return !1;
    }
    var Le, Re = !1;
    function $e() {
        Re = !1, He(ve() - he);
    }
    function ze(e) {
        xe = !1, He(e);
    }
    var Ve = Qr({
        render: function(t, n) {
            var r = t.data, i = r.f(r);
            i === e ? n.tag = "-" : n.children = i;
        }
    });
    function He(n) {
        Ee = ve(), Ye(), Ke(), De++, Ge = We, We = !1, Ce = n, Ie(), R = 0 === L.length ? null : L[L.length - 1], 
        d = !1;
        var r = !1;
        we && (we = !1, r = !0), Le = Object.keys(q);
        for (var i = 0; i < Le.length; i++) {
            var o = q[Le[i]];
            if (o) {
                for (var a = o.n, l = null, u = i + 1; u < Le.length; u++) {
                    var c = q[Le[u]];
                    if (c !== e && null != (l = ne(c.n))) break;
                }
                if (R && (d = !Be(R, o.p, Le)), o.e === e && (o.e = document.body), a) if (r || a.ctx[ye] === De) te(Ve(o), a, o.e, l, r ? 1e6 : a.ctx[be]); else t(o.c) && Se(o.c, o.e, l); else a = $(Ve(o), e, o.e, l), 
                o.n = a;
                o.c = a.children;
            }
        }
        Le = e, ie();
        var f = q[0];
        Ae(f ? f.c : null), ve() - Ee;
    }
    var We = !1, Ge = !1;
    function qe() {
        We = !0, Ze();
    }
    function Je(e) {
        var t = Ze;
        return Ze = e, t;
    }
    var Ze = function(t, n) {
        null != t ? (n == e && (n = 1e6), t[ye] !== De + 1 ? (t[ye] = De + 1, t[be] = n) : n > t[be] && (t[be] = n)) : we = !0, 
        xe || ke || (xe = !0, ge(ze));
    }, Qe = 0;
    function _e(t, n, r) {
        var i = "" + ++Qe;
        return q[i] = {
            f: t,
            e: n,
            c: [],
            p: r,
            n: e
        }, null != Le ? Le.push(i) : it(), i;
    }
    function et(e) {
        var t = q[e];
        t && (t.n && G(t.n), delete q[e]);
    }
    function tt() {
        return q;
    }
    function nt() {
        ke = !1, Ze();
    }
    var rt = nt;
    function it() {
        ke = !0, rt(), rt = nt;
    }
    function ot(t, n) {
        et("0"), q[0] = {
            f: t,
            e: n,
            c: [],
            p: e,
            n: e
        }, it();
    }
    function at(e) {
        var t = rt;
        rt = function() {
            e(t);
        };
    }
    function lt(t, n, r) {
        for (;t; ) {
            var i = t.component;
            if (i) {
                var o = t.ctx, a = i[n];
                if (a && a.call(i, o, r)) return o;
                if ((a = i.shouldStopBubble) && a.call(i, o, n, r)) break;
            }
            t = t.parent;
        }
        return e;
    }
    function ut(n, r, i) {
        if (!n) return e;
        var o = n.component;
        if (o) {
            var a = n.ctx, l = o[r];
            if (l && l.call(o, a, i)) return a;
            if ((l = o.shouldStopBroadcast) && l.call(o, a, r, i)) return e;
        }
        var u = n.children;
        if (t(u)) for (var c = 0; c < u.length; c++) {
            var f = ut(u[c], r, i);
            if (null != f) return f;
        }
        return e;
    }
    function ct(t, n) {
        for (var r = Object.keys(q), i = 0; i < r.length; i++) {
            var o = q[r[i]].n;
            if (null != o) {
                var a = ut(o, t, n);
                if (null != a) return a;
            }
        }
        return e;
    }
    function ft(e) {
        var t = e.preventDefault;
        t ? t.call(e) : e.returnValue = !1;
    }
    function st(e, t) {
        x[e] = t;
    }
    var dt = null, vt = [ [ 414, 800, 900 ], [ 736, 1280, 1440 ] ];
    function ht() {
        return dt = null, Ze(), !1;
    }
    for (var pt = [ "resize", "orientationchange" ], gt = 0; gt < pt.length; gt++) Te(pt[gt], 10, ht);
    var mt, yt = window.document.documentElement, bt = /Android/i.test(navigator.userAgent);
    function wt() {
        if (null == dt) {
            var e = yt.clientWidth, t = yt.clientHeight, n = window.orientation, r = t >= e;
            if (null == n && (n = r ? 0 : 90), bt) {
                var i = Math.abs(n) % 180 == 90;
                null == mt ? mt = i === r : r = i === mt;
            }
            for (var o = 0; e > vt[+!r][o]; ) o++;
            dt = {
                width: e,
                height: t,
                orientation: n,
                deviceCategory: o,
                portrait: r
            };
        }
        return dt;
    }
    var xt, kt = function() {
        var t = [];
        function n() {
            var e = t;
            t = [];
            for (var n = 0, r = e.length; n < r; n++) e[n]();
        }
        var r, i = "onreadystatechange";
        if (window.MutationObserver) {
            var o = document.createElement("div");
            return new MutationObserver(n).observe(o, {
                attributes: !0
            }), function(e) {
                t.length || o.setAttribute("yes", "no"), t.push(e);
            };
        }
        if (!window.setImmediate && window.postMessage && window.addEventListener) {
            var a = "basap" + Math.random(), l = !1, u = function(e) {
                e.source === window && e.data === a && (l = !1, n());
            };
            return window.addEventListener("message", u, !1), function(e) {
                t.push(e), l || (l = !0, window.postMessage(a, "*"));
            };
        }
        if (!window.setImmediate && i in document.createElement("script")) return function(e) {
            t.push(e), r || ((r = document.createElement("script"))[i] = function() {
                r[i] = null, r.parentNode.removeChild(r), r = null, n();
            }, document.body.appendChild(r));
        };
        var c, f = window.setImmediate || setTimeout;
        return function(r) {
            t.push(r), c || (c = f(function() {
                c = e, n();
            }, 0));
        };
    }();
    window.Promise || function() {
        function n(e, t) {
            return function() {
                e.apply(t, arguments);
            };
        }
        function r(e) {
            var t = this;
            null !== this.s ? kt(function() {
                var n = t.s ? e[0] : e[1];
                if (null != n) {
                    var r;
                    try {
                        r = n(t.v);
                    } catch (t) {
                        return void e[3](t);
                    }
                    e[2](r);
                } else (t.s ? e[2] : e[3])(t.v);
            }) : this.d.push(e);
        }
        function i() {
            for (var e = 0, t = this.d.length; e < t; e++) r.call(this, this.d[e]);
            this.d = null;
        }
        function o(e) {
            this.s = !1, this.v = e, i.call(this);
        }
        function a(e, t, n) {
            var r = !1;
            try {
                e(function(e) {
                    r || (r = !0, t(e));
                }, function(e) {
                    r || (r = !0, n(e));
                });
            } catch (e) {
                if (r) return;
                r = !0, n(e);
            }
        }
        function l(e) {
            try {
                if (e === this) throw new TypeError("Promise self resolve");
                if (Object(e) === e) {
                    var t = e.then;
                    if ("function" == typeof t) return void a(n(t, e), n(l, this), n(o, this));
                }
                this.s = !0, this.v = e, i.call(this);
            } catch (e) {
                o.call(this, e);
            }
        }
        function u(e) {
            this.s = null, this.v = null, this.d = [], a(e, n(l, this), n(o, this));
        }
        u.prototype.then = function(e, t) {
            var n = this;
            return new u(function(i, o) {
                r.call(n, [ e, t, i, o ]);
            });
        }, u.prototype.catch = function(t) {
            return this.then(e, t);
        }, u.all = function() {
            var e = [].slice.call(1 === arguments.length && t(arguments[0]) ? arguments[0] : arguments);
            return new u(function(t, n) {
                if (0 !== e.length) for (var r = e.length, i = 0; i < e.length; i++) o(i, e[i]); else t(e);
                function o(i, a) {
                    try {
                        if (a && ("object" == typeof a || "function" == typeof a)) {
                            var l = a.then;
                            if ("function" == typeof l) return void l.call(a, function(e) {
                                o(i, e);
                            }, n);
                        }
                        e[i] = a, 0 == --r && t(e);
                    } catch (e) {
                        n(e);
                    }
                }
            });
        }, u.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === u ? e : new u(function(t) {
                t(e);
            });
        }, u.reject = function(e) {
            return new u(function(t, n) {
                n(e);
            });
        }, u.race = function(e) {
            return new u(function(t, n) {
                for (var r = 0, i = e.length; r < i; r++) e[r].then(t, n);
            });
        }, window.Promise = u;
    }(), 9 === M() ? function() {
        function e(e, t) {
            null == e.zoom && (e.zoom = "1");
            var n = e.filter;
            e.filter = null == n ? t : n + " " + t;
        }
        var t = /^linear\-gradient\(to (.+?),(.+?),(.+?)\)/gi;
        st("background", function(n, r, i) {
            var o = t.exec(r);
            if (null != o) {
                var a, l = o[1], u = o[2], c = o[3];
                switch (l) {
                  case "top":
                    l = "0", a = u, u = c, c = a;
                    break;

                  case "bottom":
                    l = "0";
                    break;

                  case "left":
                    l = "1", a = u, u = c, c = a;
                    break;

                  case "right":
                    l = "1";
                    break;

                  default:
                    return;
                }
                n[i] = "none", e(n, "progid:DXImageTransform.Microsoft.gradient(startColorstr='" + u + "',endColorstr='" + c + "', gradientType='" + l + "')");
            }
        });
    }() : ((xt = document.createElement("div").style).cssText = "background:-webkit-linear-gradient(top,red,red)", 
    xt.background.length > 0 && function() {
        var e = /^(?:repeating\-)?(?:linear|radial)\-gradient/gi, t = {
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left"
        };
        function n(n, r, i) {
            if (e.test(r)) {
                var o = r.indexOf("(to ");
                if (o > 0) {
                    o += 4;
                    var a = r.indexOf(",", o), l = r.slice(o, a);
                    l = l.split(" ").map(function(e) {
                        return t[e] || e;
                    }).join(" "), r = r.slice(0, o - 3) + l + r.slice(a);
                }
                r = "-webkit-" + r;
            }
            n[i] = r;
        }
        st("background", n);
    }());
    var Ct = "b$value", Dt = "b$selStart", Et = "b$selEnd", Mt = "value";
    function Tt(e) {
        var t = e.type;
        return "checkbox" === t || "radio" === t;
    }
    function Ot(e, t) {
        var n = e.length;
        if (n !== t.length) return !1;
        for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
    }
    function Xt(e, t) {
        for (var n = 0; n < e.length; n++) if (e[n] === t) return !0;
        return !1;
    }
    function Pt(e) {
        for (var t = [], n = 0; n < e.length; n++) e[n].selected && t.push(e[n].value);
        return t;
    }
    var Yt = g(function(t, r, i, o) {
        var a = t.tagName, l = "SELECT" === a, u = "INPUT" === a || "TEXTAREA" === a;
        if (u || l) {
            r.ctx === e && (r.ctx = {
                me: r
            }, r.component = n), o === e && (r.ctx[Ct] = i);
            var c = !1;
            if (l && t.multiple) {
                var f = t.options, s = Pt(f);
                if (!Ot(i, s)) if (o === e || Ot(s, o) || !Ot(i, r.ctx[Ct])) {
                    for (var d = 0; d < f.length; d++) f[d].selected = Xt(i, f[d].value);
                    Ot(s = Pt(f), i) && (c = !0);
                } else c = !0;
            } else if (u || l) if (u && Tt(t)) {
                var v = t.checked;
                i !== v && (o === e || v === o || i !== r.ctx[Ct] ? t.checked = i : c = !0);
            } else {
                var h = l && t.size < 2, p = t[Mt];
                i !== p && (o === e || p === o || i !== r.ctx[Ct] ? l ? ("" === i ? t.selectedIndex = h ? 0 : -1 : t[Mt] = i, 
                ("" !== i || h) && i !== (p = t[Mt]) && (c = !0)) : t[Mt] = i : c = !0);
            }
            c ? St(e, t, r) : r.ctx[Ct] = i;
        } else Yt(t, r, i, o);
    });
    function St(t, n, r) {
        if (n && "OPTION" === n.nodeName && (n = document.activeElement, r = Q(n)), !r) return !1;
        var i = r.component, o = r.attrs && r.attrs[Ct], a = i && null != i.onChange, l = o || a, u = i && null != i.onSelectionChange;
        if (!l && !u) return !1;
        var c = r.ctx, f = "SELECT" === n.tagName && n.multiple;
        if (l && f) {
            var s = Pt(n.options);
            Ot(c[Ct], s) || (c[Ct] = s, o && o(s), a && i.onChange(c, s));
        } else if (l && Tt(n)) {
            if (t && "change" === t.type) return setTimeout(function() {
                St(e, n, r);
            }, 10), !1;
            if ("radio" === n.type) for (var d = document.getElementsByName(n.name), v = 0; v < d.length; v++) {
                var h = d[v], p = Q(h);
                if (p) {
                    var g = r.attrs[Ct], m = p.component, y = m && null != m.onChange;
                    if (g || y) {
                        var b = p.ctx, w = h.checked;
                        b[Ct] !== w && (b[Ct] = w, g && g(w), y && m.onChange(b, w));
                    }
                }
            } else {
                var x = n.checked;
                c[Ct] !== x && (c[Ct] = x, o && o(x), a && i.onChange(c, x));
            }
        } else {
            if (l) {
                var k = n.value;
                c[Ct] !== k && (c[Ct] = k, o && o(k), a && i.onChange(c, k));
            }
            if (u) {
                var C = n.selectionStart, D = n.selectionEnd, E = n.selectionDirection, M = !1, T = c[Dt];
                if (null == E ? D === T && (M = !0) : "backward" === E && (M = !0), M) {
                    var O = C;
                    C = D, D = O;
                }
                Nt(r, C, D);
            }
        }
        return !1;
    }
    function Nt(e, t, n) {
        var r = e.component, i = e.ctx;
        !r || i[Dt] === t && i[Et] === n || (i[Dt] = t, i[Et] = n, r.onSelectionChange && r.onSelectionChange(i, {
            startPosition: t,
            endPosition: n
        }));
    }
    function jt(e, t, n) {
        var r = Hn();
        return r && St(e, r.element, r), !1;
    }
    for (pt = [ "input", "cut", "paste", "keydown", "keypress", "keyup", "click", "change" ], 
    gt = 0; gt < pt.length; gt++) Te(pt[gt], 10, St);
    var It = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel" ];
    for (gt = 0; gt < It.length; gt++) Te(It[gt], 2, jt);
    function Kt(e) {
        return {
            shift: e.shiftKey,
            ctrl: e.ctrlKey,
            alt: e.altKey,
            meta: e.metaKey || !1,
            which: e.which || e.keyCode
        };
    }
    function At(e, t, n) {
        return !!n && (!!lt(n, "onKeyDown", Kt(e)) && (ft(e), !0));
    }
    function Ft(e, t, n) {
        return !!n && (!!lt(n, "onKeyUp", Kt(e)) && (ft(e), !0));
    }
    function Ut(e, t, n) {
        return !!n && (0 !== e.which && (!!lt(n, "onKeyPress", {
            charCode: e.which || e.keyCode
        }) && (ft(e), !0)));
    }
    Te("keydown", 50, At), Te("keyup", 50, Ft), Te("keypress", 50, Ut);
    var Bt = 13, Lt = 750, Rt = 500, $t = 800, zt = 50, Vt = null, Ht = "onClick", Wt = "onDoubleClick";
    function Gt(e, t) {
        if (null == Vt) return !1;
        var n = Vt.me.component[e];
        if (!n) return !1;
        !0;
        var r = n(Vt, t);
        return !1, r;
    }
    function qt(t) {
        for (;t; ) {
            var n = t.style;
            if (n) {
                var r = n.pointerEvents;
                if (r !== e) return "none" === r;
            }
            t = t.parent;
        }
        return !1;
    }
    function Jt(e) {
        return qt(Q(e));
    }
    function Zt(e) {
        if (e.length) {
            for (var t = e.length - 1; t >= 0; --t) e[t].t.style.visibility = e[t].p;
            return !0;
        }
        return !1;
    }
    function Qt(e, t) {
        e.push({
            t: t,
            p: t.style.visibility
        }), t.style.visibility = "hidden";
    }
    function _t(e, t, n) {
        for (var r = [], i = t; Jt(i); ) Qt(r, i), i = document.elementFromPoint(e.x, e.y);
        if (Zt(r)) {
            try {
                i.dispatchEvent(e);
            } catch (e) {
                return !1;
            }
            return ft(e), !0;
        }
        return !1;
    }
    function en(e, t) {
        Te(e, 5, t);
    }
    var tn = [ "PointerDown", "PointerMove", "PointerUp", "PointerCancel" ];
    if (M() && M() < 11) {
        It = [ "click", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "scroll", "wheel" ];
        for (gt = 0; gt < It.length; ++gt) Te(It[gt], 1, _t);
    }
    function nn(e) {
        return "mouse" === e || 4 === e ? 0 : "pen" === e || 3 === e ? 2 : 1;
    }
    function rn(e, t, n, r) {
        for (var i = [], o = n; qt(r); ) Qt(i, o), r = Q(o = document.elementFromPoint(e, t));
        return Zt(i), [ o, r ];
    }
    function on(e) {
        return function(t, n, r) {
            if (qt(r)) {
                var i = rn(t.clientX, t.clientY, n, r);
                n = i[0], r = i[1];
            }
            var o = t.button + 1, a = nn(t.pointerType), l = t.buttons;
            if (0 === o && 0 === a && l) for (o = 1; !(1 & l); ) l >>= 1, o++;
            var u = {
                id: t.pointerId,
                type: a,
                x: t.clientX,
                y: t.clientY,
                button: o,
                shift: t.shiftKey,
                ctrl: t.ctrlKey,
                alt: t.altKey,
                meta: t.metaKey || !1,
                count: t.detail
            };
            return !!Oe("!" + e, u, n, r) && (ft(t), !0);
        };
    }
    function an(e) {
        return function(t, n, r) {
            for (var i = !1, o = 0; o < t.changedTouches.length; o++) {
                var a = t.changedTouches[o];
                r = Q(n = document.elementFromPoint(a.clientX, a.clientY));
                var l = {
                    id: a.identifier + 2,
                    type: 1,
                    x: a.clientX,
                    y: a.clientY,
                    button: 1,
                    shift: t.shiftKey,
                    ctrl: t.ctrlKey,
                    alt: t.altKey,
                    meta: t.metaKey || !1,
                    count: t.detail
                };
                Oe("!" + e, l, n, r) && (i = !0);
            }
            return !!i && (ft(t), !0);
        };
    }
    function ln(e) {
        return function(t, n, r) {
            if (qt(r = Q(n = document.elementFromPoint(t.clientX, t.clientY)))) {
                var i = rn(t.clientX, t.clientY, n, r);
                n = i[0], r = i[1];
            }
            var o = {
                id: 1,
                type: 0,
                x: t.clientX,
                y: t.clientY,
                button: jn(t),
                shift: t.shiftKey,
                ctrl: t.ctrlKey,
                alt: t.altKey,
                meta: t.metaKey || !1,
                count: t.detail
            };
            return !!Oe("!" + e, o, n, r) && (ft(t), !0);
        };
    }
    function un() {
        en("mousedown", ln(tn[0])), en("mousemove", ln(tn[1])), en("mouseup", ln(tn[2]));
    }
    if (window.ontouchstart !== e) en("touchstart", an(tn[0])), en("touchmove", an(tn[1])), 
    en("touchend", an(tn[2])), en("touchcancel", an(tn[3])), un(); else if (window.onpointerdown !== e) for (gt = 0; gt < 4; gt++) {
        en((cn = tn[gt]).toLowerCase(), on(cn));
    } else if (window.onmspointerdown !== e) for (gt = 0; gt < 4; gt++) {
        var cn;
        en("@MS" + (cn = tn[gt]), on(cn));
    } else un();
    for (var fn = 0; fn < 4; fn++) !function(e) {
        var t = "on" + e;
        Te("!" + e, 50, function(e, n, r) {
            return Gt(t, e) || null != lt(r, t, e);
        });
    }(tn[fn]);
    var sn = m(), dn = [], vn = -1, hn = 0, pn = 0, gn = 0, mn = !1;
    function yn(e, t, n) {
        return Math.abs(e - t) < n;
    }
    var bn = [];
    function wn(t) {
        t;
        var n = document.elementFromPoint(t.x, t.y), r = Z(n), i = 0 == r.length ? e : r[r.length - 1];
        qt(i) && (r = Z(n = rn(t.x, t.y, n, null == i ? e : i)[0]));
        lt(i, "onMouseOver", t);
        for (var o, a, l = 0; l < bn.length && l < r.length && bn[l] === r[l]; ) l++;
        var u = bn.length;
        for (u > 0 && (o = bn[u - 1]) && (a = o.component) && a.onMouseOut && a.onMouseOut(o.ctx, t); u > l; ) (o = bn[--u]) && (a = o.component) && a.onMouseLeave && a.onMouseLeave(o.ctx, t);
        for (;u < r.length; ) (o = r[u]) && (a = o.component) && a.onMouseEnter && a.onMouseEnter(o.ctx, t), 
        u++;
        return bn = r, u > 0 && (o = bn[u - 1]) && (a = o.component) && a.onMouseIn && a.onMouseIn(o.ctx, t), 
        !1;
    }
    function xn() {
        return 0 === Object.keys(sn).length;
    }
    function kn(e, t, n) {
        return -1 === vn && xn() && (vn = e.id, hn = ve(), pn = e.x, gn = e.y, mn = !1, 
        wn(e)), sn[e.id] = e.type, vn !== e.id && (mn = !0), !1;
    }
    function Cn(e, t, n) {
        return 0 === e.type && 0 === e.button && null != sn[e.id] && (e.button = 1, Oe("!PointerUp", e, t, n), 
        e.button = 0), vn === e.id ? (wn(e), yn(pn, e.x, Bt) && yn(gn, e.y, Bt) || (mn = !0)) : xn() && wn(e), 
        !1;
    }
    var Dn = 0, En = 0;
    function Mn(e) {
        if (0 == En) return !1;
        var t = ve();
        return t < Dn + 1e3 && e >= En ? (Dn = t, En = e, !0) : (En = 0, !1);
    }
    function Tn(e, t, n) {
        if (delete sn[e.id], vn == e.id && (wn(e), vn = -1, 1 == e.type && !mn && ve() - hn < Lt)) {
            Oe("!PointerCancel", e, t, n), Mn(1);
            var r = Gt(Ht, e) || null != lt(n, Ht, e), i = M() ? $t : Rt;
            return dn.push([ e.x, e.y, ve() + i, r ? 1 : 0 ]), r;
        }
        return !1;
    }
    function On(e, t, n) {
        return delete sn[e.id], vn == e.id && (vn = -1), !1;
    }
    function Xn(e, t, n) {
        for (var r = ve(), i = 0; i < dn.length; i++) {
            var o = dn[i];
            if (o[2] < r) dn.splice(i, 1), i--; else if (yn(o[0], e.clientX, zt) && yn(o[1], e.clientY, zt)) return dn.splice(i, 1), 
            o[3] && ft(e), !0;
        }
        return !1;
    }
    var Pn = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel", "^click" ], Yn = [ kn, Cn, Tn, On, Xn ];
    for (gt = 0; gt < 5; gt++) Te(Pn[gt], 3, Yn[gt]);
    function Sn(e) {
        return function(t, n, r) {
            return !(vn != t.id && !xn()) && !(!Gt(e, t) && !lt(r, e, t));
        };
    }
    var Nn = [ "Down", "Move", "Up", "Up" ];
    for (gt = 0; gt < 4; gt++) Te(Pn[gt], 80, Sn("onMouse" + Nn[gt]));
    function jn(e) {
        return e.which || e.button;
    }
    function In(e, t) {
        return function(n, r, i) {
            if (1 == Xe && ("INPUT" != r.nodeName || 0 != n.clientX || 0 != n.clientY) && qt(i = Q(r = document.elementFromPoint(n.clientX, n.clientY)))) {
                var o = rn(n.clientX, n.clientY, r, i);
                r = o[0], i = o[1];
            }
            var a = jn(n) || 1;
            if (!t && 1 !== a) return !1;
            var l = {
                x: n.clientX,
                y: n.clientY,
                button: a,
                shift: n.shiftKey,
                ctrl: n.ctrlKey,
                alt: n.altKey,
                meta: n.metaKey || !1,
                count: n.detail || 1
            };
            return e == Wt && (l.count = 2), !!(Mn(l.count) || Gt(e, l) || lt(i, e, l)) && (ft(n), 
            !0);
        };
    }
    function Kn(e, t) {
        var n = document.elementFromPoint(e, t), r = Q(n);
        qt(r) && (r = rn(e, t, n, r)[1]);
        return r;
    }
    function An(e, t, n) {
        for (;n; ) {
            var r = n.style;
            if (r) {
                var i = r.userSelect;
                if ("none" === i) return ft(e), !0;
                if (i) break;
            }
            n = n.parent;
        }
        return !1;
    }
    en("selectstart", An), en("^click", In(Ht)), en("^dblclick", In(Wt)), en("contextmenu", In("onContextMenu", !0));
    var Fn = ("onwheel" in document.createElement("div") ? "" : "mouse") + "wheel";
    function Un(e, t, n) {
        if (qt(n)) {
            var r = rn(e.x, e.y, t, n);
            t = r[0], n = r[1];
        }
        var i = e.button + 1, o = e.buttons;
        if (0 === i && o) for (i = 1; !(1 & o); ) o >>= 1, i++;
        var a, l = 0;
        "mousewheel" == Fn ? (a = -.025 * e.wheelDelta, e.wheelDeltaX && (l = -.025 * e.wheelDeltaX)) : (l = e.deltaX, 
        a = e.deltaY);
        var u = {
            dx: l,
            dy: a,
            x: e.clientX,
            y: e.clientY,
            button: i,
            shift: e.shiftKey,
            ctrl: e.ctrlKey,
            alt: e.altKey,
            meta: e.metaKey || !1,
            count: e.detail
        };
        return !(!Gt("onMouseWheel", u) && !lt(n, "onMouseWheel", u)) && (ft(e), !0);
    }
    en(Fn, Un);
    var Bn = function(e, t) {
        var n = M() ? $t : Rt;
        dn.push([ e, t, ve() + n, 1 ]);
    }, Ln = e, Rn = e, $n = [];
    function zn(t) {
        var n = document.hasFocus() || t ? document.activeElement : e;
        if (n !== Ln) {
            for (var r = Z(Ln = n), i = 0; i < $n.length && i < r.length && $n[i] === r[i]; ) i++;
            var a, l, u = $n.length - 1;
            for (u >= i && ((a = $n[u]) && (l = a.component) && l.onBlur && l.onBlur(a.ctx), 
            u--); u >= i; ) (a = $n[u]) && (l = a.component) && l.onFocusOut && l.onFocusOut(a.ctx), 
            u--;
            for (u = i; u + 1 < r.length; ) (a = r[u]) && (l = a.component) && l.onFocusIn && l.onFocusIn(a.ctx), 
            u++;
            u < r.length && ((a = r[u]) && (l = a.component) && l.onFocus && l.onFocus(a.ctx), 
            u++), Rn = 0 == ($n = r).length ? e : o($n[$n.length - 1]);
        }
        return !1;
    }
    function Vn() {
        return setTimeout(function() {
            return zn(!1);
        }, 10), !1;
    }
    function Hn() {
        return Rn;
    }
    Te("^focus", 50, function() {
        return zn(!0);
    }), Te("^blur", 50, Vn);
    var Wn = [];
    function Gn(e, t, n) {
        for (var r = {
            node: n
        }, i = 0; i < Wn.length; i++) Wn[i](r);
        return !1;
    }
    Te("^scroll", 10, Gn);
    var qn, Jn, Zn = 0, Qn = [], _n = null, er = null, tr = {
        userSelect: ""
    };
    T(tr);
    var nr = Object.keys(tr), rr = nr[nr.length - 1], ir = function(t) {
        this.id = ++Zn, this.pointerid = t, this.enabledOperations = 7, this.operation = 0, 
        this.started = !1, this.beforeDrag = !0, this.local = !0, this.system = !1, this.ended = !1, 
        this.cursor = null, this.overNode = e, this.targetCtx = null, this.dragView = e, 
        this.startX = 0, this.startY = 0, this.distanceToStart = 10, this.x = 0, this.y = 0, 
        this.deltaX = 0, this.deltaY = 0, this.totalX = 0, this.totalY = 0, this.lastX = 0, 
        this.lastY = 0, this.shift = !1, this.ctrl = !1, this.alt = !1, this.meta = !1, 
        this.data = m(), t >= 0 && (sr[t] = this), Qn.push(this);
    };
    function or() {
        if (null == er) {
            var e = document.body.style;
            qn = e.cursor, Jn = e[rr], e[rr] = "none", er = _e(cr);
        }
    }
    var ar = {
        render: function(e, t) {
            var n = e.data;
            t.tag = "div", t.style = {
                position: "absolute",
                left: n.x,
                top: n.y
            }, t.children = n.dragView(n);
        }
    };
    function lr() {
        var e = "no-drop";
        if (0 !== Qn.length) {
            var t = Qn[0];
            if (t.beforeDrag) return "";
            if (null != t.cursor) return t.cursor;
            if (t.system) return "";
            switch (t.operation) {
              case 3:
                e = "move";
                break;

              case 1:
                e = "alias";
                break;

              case 2:
                e = "copy";
            }
        }
        return e;
    }
    var ur = {
        render: function(e, t) {
            for (var n = [], r = 0; r < Qn.length; r++) {
                var i = Qn[r];
                i.beforeDrag || (null == i.dragView || 0 == i.x && 0 == i.y || n.push({
                    key: "" + i.id,
                    data: i,
                    component: ar
                }));
            }
            t.tag = "div", t.style = {
                position: "fixed",
                pointerEvents: "none",
                userSelect: "none",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            var o = document.body.style, a = lr();
            a && o.cursor !== a && (o.cursor = a), t.children = n;
        },
        onDrag: function(e) {
            return Ze(e), !1;
        }
    };
    function cr() {
        return {
            component: ur
        };
    }
    var fr = ir.prototype;
    fr.setOperation = function(e) {
        this.operation = e;
    }, fr.setDragNodeView = function(e) {
        this.dragView = e;
    }, fr.addData = function(e, t) {
        return this.data[e] = t, !0;
    }, fr.listData = function() {
        return Object.keys(this.data);
    }, fr.hasData = function(t) {
        return this.data[t] !== e;
    }, fr.getData = function(e) {
        return this.data[e];
    }, fr.setEnabledOps = function(e) {
        this.enabledOperations = e;
    }, fr.cancelDnd = function() {
        vr(e, this), this.destroy();
    }, fr.destroy = function() {
        this.ended = !0, this.started && ct("onDragEnd", this), delete sr[this.pointerid];
        for (var e = 0; e < Qn.length; e++) if (Qn[e] === this) {
            Qn.splice(e, 1);
            break;
        }
        if (_n === this && (_n = null), 0 === Qn.length && null != er) {
            et(er), er = null;
            var t = document.body.style;
            t.cursor = qn, t[rr] = Jn;
        }
    };
    var sr = m();
    function dr(e, t, n) {
        var r = sr[e.id];
        if (r && r.cancelDnd(), e.button <= 1) {
            (r = new ir(e.id)).startX = e.x, r.startY = e.y, r.lastX = e.x, r.lastY = e.y, r.overNode = n, 
            hr(r, e);
            var i = lt(n, "onDragStart", r);
            if (i) {
                var o = ne(i.me);
                if (null == o) return r.destroy(), !1;
                r.started = !0;
                var a = o.getBoundingClientRect;
                if (a) {
                    var l = a.call(o);
                    r.deltaX = l.left - e.x, r.deltaY = l.top - e.y;
                }
                r.distanceToStart <= 0 && (r.beforeDrag = !1, vr(n, r)), or();
            } else r.destroy();
        }
        return !1;
    }
    function vr(e, t) {
        t.overNode = e, t.targetCtx = lt(e, "onDragOver", t), null == t.targetCtx && (t.operation = 0), 
        ct("onDrag", t);
    }
    function hr(e, t) {
        e.shift = t.shift, e.ctrl = t.ctrl, e.alt = t.alt, e.meta = t.meta, e.x = t.x, e.y = t.y;
    }
    function pr(e, t, n) {
        var r = sr[e.id];
        if (!r) return !1;
        if (r.totalX += Math.abs(e.x - r.lastX), r.totalY += Math.abs(e.y - r.lastY), r.beforeDrag) {
            if (r.totalX + r.totalY <= r.distanceToStart) return r.lastX = e.x, r.lastY = e.y, 
            !1;
            r.beforeDrag = !1;
        }
        return hr(r, e), vr(n, r), r.lastX = e.x, r.lastY = e.y, !0;
    }
    function gr(e, t, n) {
        var r = sr[e.id];
        if (!r) return !1;
        if (!r.beforeDrag) {
            hr(r, e), vr(n, r);
            var i = r.targetCtx;
            return i && lt(i.me, "onDrop", r) ? r.destroy() : r.cancelDnd(), Bn(e.x, e.y), !0;
        }
        return r.destroy(), !1;
    }
    function mr(e, t, n) {
        var r = sr[e.id];
        return !!r && (!r.system && (r.beforeDrag ? r.destroy() : r.cancelDnd(), !1));
    }
    function yr(e, t) {
        e.shift = t.shiftKey, e.ctrl = t.ctrlKey, e.alt = t.altKey, e.meta = t.metaKey, 
        e.x = t.clientX, e.y = t.clientY, e.totalX += Math.abs(e.x - e.lastX), e.totalY += Math.abs(e.y - e.lastY), 
        vr(Kn(e.x, e.y), e), e.lastX = e.x, e.lastY = e.y;
    }
    var br = [ "none", "link", "copy", "copyLink", "move", "linkMove", "copyMove", "all" ];
    function wr(e, t, n) {
        var r = _n;
        null != r && r.destroy();
        var i = Object.keys(sr);
        if (i.length > 0) (r = sr[i[0]]).system = !0, _n = r; else {
            var o = e.clientX, a = e.clientY;
            (r = new ir(-1)).system = !0, _n = r, r.x = o, r.y = a, r.lastX = o, r.lastY = a, 
            r.startX = o, r.startY = a;
            var u = lt(n, "onDragStart", r);
            if (!u) return r.destroy(), !1;
            var c = ne(u.me);
            if (null == c) return r.destroy(), !1;
            r.started = !0;
            var f = c.getBoundingClientRect;
            if (f) {
                var s = f.call(c);
                r.deltaX = s.left - o, r.deltaY = s.top - a;
            }
            or();
        }
        r.beforeDrag = !1;
        var d = br[r.enabledOperations], v = e.dataTransfer;
        if (v.effectAllowed = d, v.setDragImage) {
            var h = document.createElement("div");
            h.style.pointerEvents = "none", v.setDragImage(h, 0, 0);
        } else {
            var p = e.target.style, g = p.opacity, m = p.width, y = p.height, b = p.padding;
            p.opacity = "0", p.width = "0", p.height = "0", p.padding = "0", window.setTimeout(function() {
                p.opacity = g, p.width = m, p.height = y, p.padding = b;
            }, 0);
        }
        for (var w = r.data, x = Object.keys(w), k = 0; k < x.length; k++) try {
            var C = x[k], D = w[C];
            l(D) || (D = JSON.stringify(D)), e.dataTransfer.setData(C, D);
        } catch (e) {
            0;
        }
        return yr(r, e), !1;
    }
    function xr(e, t) {
        e.dataTransfer.dropEffect = [ "none", "link", "copy", "move" ][t];
    }
    function kr(t, n, r) {
        var i = _n;
        if (null == i) {
            (i = new ir(-1)).system = !0, _n = i, i.x = t.clientX, i.y = t.clientY, i.startX = i.x, 
            i.startY = i.y, i.local = !1;
            var o = t.dataTransfer, a = 0, l = e;
            try {
                l = o.effectAllowed;
            } catch (e) {}
            for (;a < 7 && br[a] !== l; a++) ;
            i.enabledOperations = a;
            var u = o.types;
            if (u) for (var c = 0; c < u.length; c++) {
                var f = u[c];
                "text/plain" === f ? f = "Text" : "text/uri-list" === f && (f = "Url"), i.data[f] = null;
            } else o.getData("Text") !== e && (i.data.Text = null);
        }
        return yr(i, t), xr(t, i.operation), 0 != i.operation && (ft(t), !0);
    }
    function Cr(e, t, n) {
        var r = e.clientX, i = e.clientY, o = wt();
        return null != _n && (0 === r && 0 === i || r < 0 || i < 0 || r >= o.width || i >= o.height) && (_n.x = 0, 
        _n.y = 0, _n.operation = 0, ct("onDrag", _n)), !1;
    }
    function Dr(e, t, n) {
        return null != _n && _n.destroy(), !1;
    }
    function Er(e, t, n) {
        var r = _n;
        if (null == r) return !1;
        if (r.x = e.clientX, r.y = e.clientY, !r.local) for (var i = Object.keys(r.data), o = e.dataTransfer, a = 0; a < i.length; a++) {
            var l, u = i[a];
            l = "Files" === u ? [].slice.call(o.files, 0) : o.getData(u), r.data[u] = l;
        }
        yr(r, e);
        var c = r.targetCtx;
        return c && lt(c.me, "onDrop", r) ? (xr(e, r.operation), r.destroy(), ft(e)) : r.cancelDnd(), 
        !0;
    }
    function Mr(e, t, n) {
        return ft(e), !0;
    }
    function Tr(e, t, n) {
        return 0 !== Qn.length && (ft(e), !0);
    }
    Te("!PointerDown", 4, dr), Te("!PointerMove", 4, pr), Te("!PointerUp", 4, gr), Te("!PointerCancel", 4, mr), 
    Te("selectstart", 4, Tr), Te("dragstart", 5, wr), Te("dragover", 5, kr), Te("dragend", 5, Dr), 
    Te("drag", 5, Cr), Te("drop", 5, Er), Te("dragenter", 5, Mr), Te("dragleave", 5, Mr);
    var Or = function() {
        return Qn;
    }, Xr = -1;
    function Pr() {
        return Xr >= 0 && clearTimeout(Xr), Xr = -1, Ze(), !1;
    }
    Te("hashchange", 10, Pr);
    m();
    var Yr = m(), Sr = (m(), m(), []), Nr = m(), jr = "", Ir = !1, Kr = null, Ar = 9 === M(), Fr = Fe(zr), Ur = /\:|\ |\>/;
    function Br(e) {
        var t = Ur.exec(e);
        if (!t) return Yr[e].name;
        var n = t.index;
        return Yr[e.substring(0, n)].name + e.substring(n);
    }
    function Lr(e, n) {
        var r = "";
        if (e) if (t(e)) for (var i = 0; i < e.length; i++) i > 0 && (r += ","), r += "." + Br(e[i]) + "." + n; else r = "." + Br(e) + "." + n; else r = "." + n;
        return r;
    }
    function Rr(n, r, i, o) {
        if (l(i)) {
            var a = Yr[i];
            if (a === e) throw Error("Unknown style " + i);
            Rr(n, r, a.style, a.pseudo);
        } else if (u(i)) i(n, r); else if (t(i)) for (var c = 0; c < i.length; c++) Rr(n, r, i[c], e); else if ("object" == typeof i) for (var f in i) if (Object.prototype.hasOwnProperty.call(i, f)) {
            var s = i[f];
            u(s) && (s = s(n, f)), n[f] = s;
        }
        if (null != o && null != r) for (var d in o) {
            var v = r[d];
            v === e && (v = m(), r[d] = v), Rr(v, e, o[d], e);
        }
    }
    var $r = !1;
    function zr() {
        var t, n = document.body.style;
        if ($r && Ce >= 150 && (n.opacity = "1", $r = !1), Ir) {
            1 === De && "webkitAnimation" in n && ($r = !0, n.opacity = "0", setTimeout(Ze, 200));
            for (var r = 0; r < Sr.length; r++) {
                var i = Sr[r], o = Nr[i.url];
                if (null != o) {
                    var a = i.color();
                    if (a !== i.lastColor) {
                        i.lastColor = a, null == i.width && (i.width = o.width), null == i.height && (i.height = o.height);
                        var c = Zr(o, a, i.width, i.height, i.left, i.top);
                        Yr[i.styleId].style = {
                            backgroundImage: "url(" + c + ")",
                            width: i.width,
                            height: i.height,
                            backgroundPosition: 0
                        };
                    }
                }
            }
            var f = jr;
            for (var s in Yr) {
                var d = Yr[s], v = d.parent, h = d.name, p = d.pseudo, g = d.style;
                if (u(g) && 0 === g.length && (g = (t = g())[0], p = t[1]), l(g) && null == p) d.realName = g; else {
                    d.realName = h;
                    var y = m(), b = m();
                    Rr(e, b, e, p), Rr(y, b, g, e);
                    var w = null;
                    y.pointerEvents && ((w = m()).pointerEvents = y.pointerEvents), Ar && y.userSelect && (null == w && (w = m()), 
                    w.userSelect = y.userSelect, delete y.userSelect), d.inlStyle = w, T(y);
                    var x = Gr(y);
                    for (var k in x.length > 0 && (f += (null == h ? v : Lr(v, h)) + " {" + x + "}\n"), 
                    b) {
                        var C = b[k];
                        T(C), f += (null == h ? v + ":" + k : Lr(v, h + ":" + k)) + " {" + Gr(C) + "}\n";
                    }
                }
            }
            var D = document.createElement("style");
            D.type = "text/css", D.styleSheet ? D.styleSheet.cssText = f : D.appendChild(document.createTextNode(f));
            var E = document.head || document.getElementsByTagName("head")[0];
            null != Kr ? E.replaceChild(D, Kr) : E.appendChild(D), Kr = D, Ir = !1;
        }
        Fr();
    }
    var Vr = /([A-Z])/g, Hr = /^ms-/;
    function Wr(e) {
        return "cssFloat" === e ? "float" : e.replace(Vr, "-$1").toLowerCase().replace(Hr, "-ms-");
    }
    function Gr(t) {
        var n = "";
        for (var r in t) {
            var i = t[r];
            i !== e && (n += Wr(r) + ":" + ("" === i ? '""' : i) + ";");
        }
        return n = n.slice(0, -1);
    }
    function qr() {
        Ir = !0, Ze();
    }
    var Jr = /\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;
    function Zr(e, t, n, r, i, o) {
        var a = document.createElement("canvas");
        a.width = n, a.height = r;
        var l = a.getContext("2d");
        l.drawImage(e, -i, -o);
        var u, c, f, s, d = l.getImageData(0, 0, n, r), v = d.data, h = Jr.exec(t);
        if (h ? (u = parseInt(h[1], 10), c = parseInt(h[2], 10), f = parseInt(h[3], 10), 
        s = Math.round(255 * parseFloat(h[4]))) : (u = parseInt(t.substr(1, 2), 16), c = parseInt(t.substr(3, 2), 16), 
        f = parseInt(t.substr(5, 2), 16), s = parseInt(t.substr(7, 2), 16) || 255), 255 === s) for (var p = 0; p < v.length; p += 4) {
            (g = v[p]) === v[p + 1] && g === v[p + 2] && (128 === g || v[p + 3] < 255 && g > 112) && (v[p] = u, 
            v[p + 1] = c, v[p + 2] = f);
        } else for (p = 0; p < v.length; p += 4) {
            var g = v[p], m = v[p + 3];
            g === v[p + 1] && g === v[p + 2] && (128 === g || m < 255 && g > 112) && (255 === m ? (v[p] = u, 
            v[p + 1] = c, v[p + 2] = f, v[p + 3] = s) : (m *= 1 / 255, v[p] = Math.round(u * m), 
            v[p + 1] = Math.round(c * m), v[p + 2] = Math.round(f * m), v[p + 3] = Math.round(s * m)));
        }
        return l.putImageData(d, 0, 0), a.toDataURL();
    }
    window.bobrilBPath;
    function Qr(t) {
        return function(n, r) {
            return r !== e && (null == n && (n = {}), n.children = r), {
                data: n,
                component: t
            };
        };
    }
    window.b || (window.b = {
        deref: Q,
        getRoots: tt,
        setInvalidate: Je,
        invalidateStyles: qr,
        ignoreShouldChange: qe,
        setAfterFrame: Ue,
        setBeforeFrame: Fe,
        getDnds: Or,
        setBeforeInit: at
    });
    ot(function() {
        return "hello";
    });
}();