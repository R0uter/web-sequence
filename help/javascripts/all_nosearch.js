!(function () {
  if ('ontouchstart' in window) {
    var e,
      t,
      n,
      r,
      i,
      o,
      s = {};
    (e = function (e, t) {
      return Math.abs(e[0] - t[0]) > 5 || Math.abs(e[1] - t[1]) > 5;
    }),
      (t = function (e) {
        (this.startXY = [e.touches[0].clientX, e.touches[0].clientY]),
          (this.threshold = !1);
      }),
      (n = function (t) {
        if (this.threshold) return !1;
        this.threshold = e(this.startXY, [
          t.touches[0].clientX,
          t.touches[0].clientY,
        ]);
      }),
      (r = function (t) {
        if (
          !this.threshold &&
          !e(this.startXY, [
            t.changedTouches[0].clientX,
            t.changedTouches[0].clientY,
          ])
        ) {
          var n = t.changedTouches[0],
            r = document.createEvent('MouseEvents');
          r.initMouseEvent(
            'click',
            !0,
            !0,
            window,
            0,
            n.screenX,
            n.screenY,
            n.clientX,
            n.clientY,
            !1,
            !1,
            !1,
            !1,
            0,
            null,
          ),
            (r.simulated = !0),
            t.target.dispatchEvent(r);
        }
      }),
      (i = function (e) {
        var t = Date.now(),
          n = t - s.time,
          r = e.clientX,
          i = e.clientY,
          a = [Math.abs(s.x - r), Math.abs(s.y - i)],
          u = o(e.target, 'A') || e.target,
          c = u.nodeName,
          l = 'A' === c,
          f = window.navigator.standalone && l && e.target.getAttribute('href');
        if (
          ((s.time = t),
          (s.x = r),
          (s.y = i),
          ((!e.simulated &&
            (n < 500 || (n < 1500 && a[0] < 50 && a[1] < 50))) ||
            f) &&
            (e.preventDefault(), e.stopPropagation(), !f))
        )
          return !1;
        f && (window.location = u.getAttribute('href')),
          u &&
            u.classList &&
            (u.classList.add('energize-focus'),
            window.setTimeout(function () {
              u.classList.remove('energize-focus');
            }, 150));
      }),
      (o = function (e, t) {
        for (var n = e; n !== document.body; ) {
          if (!n || n.nodeName === t) return n;
          n = n.parentNode;
        }
        return null;
      }),
      document.addEventListener('touchstart', t, !1),
      document.addEventListener('touchmove', n, !1),
      document.addEventListener('touchend', r, !1),
      document.addEventListener('click', i, !0);
  }
})() /*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */,
  (function (e, t) {
    'use strict';
    'object' == typeof module && 'object' == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error('jQuery requires a window with a document');
              return t(e);
            })
      : t(e);
  })('undefined' != typeof window ? window : this, function (e, t) {
    'use strict';
    function n(e, t) {
      t = t || ne;
      var n = t.createElement('script');
      (n.text = e), t.head.appendChild(n).parentNode.removeChild(n);
    }
    function r(e) {
      var t = !!e && 'length' in e && e.length,
        n = ge.type(e);
      return (
        'function' !== n &&
        !ge.isWindow(e) &&
        ('array' === n ||
          0 === t ||
          ('number' == typeof t && t > 0 && t - 1 in e))
      );
    }
    function i(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    function o(e, t, n) {
      return ge.isFunction(t)
        ? ge.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n;
          })
        : t.nodeType
          ? ge.grep(e, function (e) {
              return (e === t) !== n;
            })
          : 'string' != typeof t
            ? ge.grep(e, function (e) {
                return ae.call(t, e) > -1 !== n;
              })
            : ke.test(t)
              ? ge.filter(t, e, n)
              : ((t = ge.filter(t, e)),
                ge.grep(e, function (e) {
                  return ae.call(t, e) > -1 !== n && 1 === e.nodeType;
                }));
    }
    function s(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; );
      return e;
    }
    function a(e) {
      var t = {};
      return (
        ge.each(e.match(De) || [], function (e, n) {
          t[n] = !0;
        }),
        t
      );
    }
    function u(e) {
      return e;
    }
    function c(e) {
      throw e;
    }
    function l(e, t, n, r) {
      var i;
      try {
        e && ge.isFunction((i = e.promise))
          ? i.call(e).done(t).fail(n)
          : e && ge.isFunction((i = e.then))
            ? i.call(e, t, n)
            : t.apply(undefined, [e].slice(r));
      } catch (e) {
        n.apply(undefined, [e]);
      }
    }
    function f() {
      ne.removeEventListener('DOMContentLoaded', f),
        e.removeEventListener('load', f),
        ge.ready();
    }
    function d() {
      this.expando = ge.expando + d.uid++;
    }
    function p(e) {
      return (
        'true' === e ||
        ('false' !== e &&
          ('null' === e
            ? null
            : e === +e + ''
              ? +e
              : Re.test(e)
                ? JSON.parse(e)
                : e))
      );
    }
    function h(e, t, n) {
      var r;
      if (n === undefined && 1 === e.nodeType)
        if (
          ((r = 'data-' + t.replace($e, '-$&').toLowerCase()),
          'string' == typeof (n = e.getAttribute(r)))
        ) {
          try {
            n = p(n);
          } catch (e) {}
          Pe.set(e, t, n);
        } else n = undefined;
      return n;
    }
    function g(e, t, n, r) {
      var i,
        o = 1,
        s = 20,
        a = r
          ? function () {
              return r.cur();
            }
          : function () {
              return ge.css(e, t, '');
            },
        u = a(),
        c = (n && n[3]) || (ge.cssNumber[t] ? '' : 'px'),
        l = (ge.cssNumber[t] || ('px' !== c && +u)) && Me.exec(ge.css(e, t));
      if (l && l[3] !== c) {
        (c = c || l[3]), (n = n || []), (l = +u || 1);
        do {
          (o = o || '.5'), (l /= o), ge.style(e, t, l + c);
        } while (o !== (o = a() / u) && 1 !== o && --s);
      }
      return (
        n &&
          ((l = +l || +u || 0),
          (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
          r && ((r.unit = c), (r.start = l), (r.end = i))),
        i
      );
    }
    function m(e) {
      var t,
        n = e.ownerDocument,
        r = e.nodeName,
        i = Xe[r];
      return (
        i ||
        ((t = n.body.appendChild(n.createElement(r))),
        (i = ge.css(t, 'display')),
        t.parentNode.removeChild(t),
        'none' === i && (i = 'block'),
        (Xe[r] = i),
        i)
      );
    }
    function y(e, t) {
      for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
        (r = e[o]),
          r.style &&
            ((n = r.style.display),
            t
              ? ('none' === n &&
                  ((i[o] = Fe.get(r, 'display') || null),
                  i[o] || (r.style.display = '')),
                '' === r.style.display && Be(r) && (i[o] = m(r)))
              : 'none' !== n && ((i[o] = 'none'), Fe.set(r, 'display', n)));
      for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
      return e;
    }
    function v(e, t) {
      var n;
      return (
        (n =
          'undefined' != typeof e.getElementsByTagName
            ? e.getElementsByTagName(t || '*')
            : 'undefined' != typeof e.querySelectorAll
              ? e.querySelectorAll(t || '*')
              : []),
        t === undefined || (t && i(e, t)) ? ge.merge([e], n) : n
      );
    }
    function x(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
        Fe.set(e[n], 'globalEval', !t || Fe.get(t[n], 'globalEval'));
    }
    function b(e, t, n, r, i) {
      for (
        var o,
          s,
          a,
          u,
          c,
          l,
          f = t.createDocumentFragment(),
          d = [],
          p = 0,
          h = e.length;
        p < h;
        p++
      )
        if ((o = e[p]) || 0 === o)
          if ('object' === ge.type(o)) ge.merge(d, o.nodeType ? [o] : o);
          else if (Qe.test(o)) {
            for (
              s = s || f.appendChild(t.createElement('div')),
                a = (ze.exec(o) || ['', ''])[1].toLowerCase(),
                u = Ye[a] || Ye._default,
                s.innerHTML = u[1] + ge.htmlPrefilter(o) + u[2],
                l = u[0];
              l--;

            )
              s = s.lastChild;
            ge.merge(d, s.childNodes), (s = f.firstChild), (s.textContent = '');
          } else d.push(t.createTextNode(o));
      for (f.textContent = '', p = 0; (o = d[p++]); )
        if (r && ge.inArray(o, r) > -1) i && i.push(o);
        else if (
          ((c = ge.contains(o.ownerDocument, o)),
          (s = v(f.appendChild(o), 'script')),
          c && x(s),
          n)
        )
          for (l = 0; (o = s[l++]); ) Ve.test(o.type || '') && n.push(o);
      return f;
    }
    function w() {
      return !0;
    }
    function T() {
      return !1;
    }
    function C() {
      try {
        return ne.activeElement;
      } catch (e) {}
    }
    function E(e, t, n, r, i, o) {
      var s, a;
      if ('object' == typeof t) {
        'string' != typeof n && ((r = r || n), (n = undefined));
        for (a in t) E(e, a, n, r, t[a], o);
        return e;
      }
      if (
        (null == r && null == i
          ? ((i = n), (r = n = undefined))
          : null == i &&
            ('string' == typeof n
              ? ((i = r), (r = undefined))
              : ((i = r), (r = n), (n = undefined))),
        !1 === i)
      )
        i = T;
      else if (!i) return e;
      return (
        1 === o &&
          ((s = i),
          (i = function (e) {
            return ge().off(e), s.apply(this, arguments);
          }),
          (i.guid = s.guid || (s.guid = ge.guid++))),
        e.each(function () {
          ge.event.add(this, t, i, r, n);
        })
      );
    }
    function k(e, t) {
      return i(e, 'table') && i(11 !== t.nodeType ? t : t.firstChild, 'tr')
        ? ge('>tbody', e)[0] || e
        : e;
    }
    function j(e) {
      return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
    }
    function A(e) {
      var t = rt.exec(e.type);
      return t ? (e.type = t[1]) : e.removeAttribute('type'), e;
    }
    function S(e, t) {
      var n, r, i, o, s, a, u, c;
      if (1 === t.nodeType) {
        if (
          Fe.hasData(e) &&
          ((o = Fe.access(e)), (s = Fe.set(t, o)), (c = o.events))
        ) {
          delete s.handle, (s.events = {});
          for (i in c)
            for (n = 0, r = c[i].length; n < r; n++)
              ge.event.add(t, i, c[i][n]);
        }
        Pe.hasData(e) &&
          ((a = Pe.access(e)), (u = ge.extend({}, a)), Pe.set(t, u));
      }
    }
    function L(e, t) {
      var n = t.nodeName.toLowerCase();
      'input' === n && Ue.test(e.type)
        ? (t.checked = e.checked)
        : ('input' !== n && 'textarea' !== n) ||
          (t.defaultValue = e.defaultValue);
    }
    function D(e, t, r, i) {
      t = oe.apply([], t);
      var o,
        s,
        a,
        u,
        c,
        l,
        f = 0,
        d = e.length,
        p = d - 1,
        h = t[0],
        g = ge.isFunction(h);
      if (g || (d > 1 && 'string' == typeof h && !pe.checkClone && nt.test(h)))
        return e.each(function (n) {
          var o = e.eq(n);
          g && (t[0] = h.call(this, n, o.html())), D(o, t, r, i);
        });
      if (
        d &&
        ((o = b(t, e[0].ownerDocument, !1, e, i)),
        (s = o.firstChild),
        1 === o.childNodes.length && (o = s),
        s || i)
      ) {
        for (a = ge.map(v(o, 'script'), j), u = a.length; f < d; f++)
          (c = o),
            f !== p &&
              ((c = ge.clone(c, !0, !0)), u && ge.merge(a, v(c, 'script'))),
            r.call(e[f], c, f);
        if (u)
          for (
            l = a[a.length - 1].ownerDocument, ge.map(a, A), f = 0;
            f < u;
            f++
          )
            (c = a[f]),
              Ve.test(c.type || '') &&
                !Fe.access(c, 'globalEval') &&
                ge.contains(l, c) &&
                (c.src
                  ? ge._evalUrl && ge._evalUrl(c.src)
                  : n(c.textContent.replace(it, ''), l));
      }
      return e;
    }
    function N(e, t, n) {
      for (var r, i = t ? ge.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
        n || 1 !== r.nodeType || ge.cleanData(v(r)),
          r.parentNode &&
            (n && ge.contains(r.ownerDocument, r) && x(v(r, 'script')),
            r.parentNode.removeChild(r));
      return e;
    }
    function q(e, t, n) {
      var r,
        i,
        o,
        s,
        a = e.style;
      return (
        (n = n || at(e)),
        n &&
          ((s = n.getPropertyValue(t) || n[t]),
          '' !== s || ge.contains(e.ownerDocument, e) || (s = ge.style(e, t)),
          !pe.pixelMarginRight() &&
            st.test(s) &&
            ot.test(t) &&
            ((r = a.width),
            (i = a.minWidth),
            (o = a.maxWidth),
            (a.minWidth = a.maxWidth = a.width = s),
            (s = n.width),
            (a.width = r),
            (a.minWidth = i),
            (a.maxWidth = o))),
        s !== undefined ? s + '' : s
      );
    }
    function O(e, t) {
      return {
        get: function () {
          return e()
            ? void delete this.get
            : (this.get = t).apply(this, arguments);
        },
      };
    }
    function H(e) {
      if (e in pt) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--; )
        if ((e = dt[n] + t) in pt) return e;
    }
    function F(e) {
      var t = ge.cssProps[e];
      return t || (t = ge.cssProps[e] = H(e) || e), t;
    }
    function P(e, t, n) {
      var r = Me.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
    }
    function R(e, t, n, r, i) {
      var o,
        s = 0;
      for (
        o = n === (r ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0;
        o < 4;
        o += 2
      )
        'margin' === n && (s += ge.css(e, n + We[o], !0, i)),
          r
            ? ('content' === n && (s -= ge.css(e, 'padding' + We[o], !0, i)),
              'margin' !== n &&
                (s -= ge.css(e, 'border' + We[o] + 'Width', !0, i)))
            : ((s += ge.css(e, 'padding' + We[o], !0, i)),
              'padding' !== n &&
                (s += ge.css(e, 'border' + We[o] + 'Width', !0, i)));
      return s;
    }
    function $(e, t, n) {
      var r,
        i = at(e),
        o = q(e, t, i),
        s = 'border-box' === ge.css(e, 'boxSizing', !1, i);
      return st.test(o)
        ? o
        : ((r = s && (pe.boxSizingReliable() || o === e.style[t])),
          'auto' === o && (o = e['offset' + t[0].toUpperCase() + t.slice(1)]),
          (o = parseFloat(o) || 0) +
            R(e, t, n || (s ? 'border' : 'content'), r, i) +
            'px');
    }
    function I(e, t, n, r, i) {
      return new I.prototype.init(e, t, n, r, i);
    }
    function M() {
      gt &&
        (!1 === ne.hidden && e.requestAnimationFrame
          ? e.requestAnimationFrame(M)
          : e.setTimeout(M, ge.fx.interval),
        ge.fx.tick());
    }
    function W() {
      return (
        e.setTimeout(function () {
          ht = undefined;
        }),
        (ht = ge.now())
      );
    }
    function B(e, t) {
      var n,
        r = 0,
        i = { height: e };
      for (t = t ? 1 : 0; r < 4; r += 2 - t)
        (n = We[r]), (i['margin' + n] = i['padding' + n] = e);
      return t && (i.opacity = i.width = e), i;
    }
    function _(e, t, n) {
      for (
        var r,
          i = (z.tweeners[t] || []).concat(z.tweeners['*']),
          o = 0,
          s = i.length;
        o < s;
        o++
      )
        if ((r = i[o].call(n, t, e))) return r;
    }
    function X(e, t, n) {
      var r,
        i,
        o,
        s,
        a,
        u,
        c,
        l,
        f = 'width' in t || 'height' in t,
        d = this,
        p = {},
        h = e.style,
        g = e.nodeType && Be(e),
        m = Fe.get(e, 'fxshow');
      n.queue ||
        ((s = ge._queueHooks(e, 'fx')),
        null == s.unqueued &&
          ((s.unqueued = 0),
          (a = s.empty.fire),
          (s.empty.fire = function () {
            s.unqueued || a();
          })),
        s.unqueued++,
        d.always(function () {
          d.always(function () {
            s.unqueued--, ge.queue(e, 'fx').length || s.empty.fire();
          });
        }));
      for (r in t)
        if (((i = t[r]), mt.test(i))) {
          if (
            (delete t[r],
            (o = o || 'toggle' === i),
            i === (g ? 'hide' : 'show'))
          ) {
            if ('show' !== i || !m || m[r] === undefined) continue;
            g = !0;
          }
          p[r] = (m && m[r]) || ge.style(e, r);
        }
      if ((u = !ge.isEmptyObject(t)) || !ge.isEmptyObject(p)) {
        f &&
          1 === e.nodeType &&
          ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
          (c = m && m.display),
          null == c && (c = Fe.get(e, 'display')),
          (l = ge.css(e, 'display')),
          'none' === l &&
            (c
              ? (l = c)
              : (y([e], !0),
                (c = e.style.display || c),
                (l = ge.css(e, 'display')),
                y([e]))),
          ('inline' === l || ('inline-block' === l && null != c)) &&
            'none' === ge.css(e, 'float') &&
            (u ||
              (d.done(function () {
                h.display = c;
              }),
              null == c && ((l = h.display), (c = 'none' === l ? '' : l))),
            (h.display = 'inline-block'))),
          n.overflow &&
            ((h.overflow = 'hidden'),
            d.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1);
        for (r in p)
          u ||
            (m
              ? 'hidden' in m && (g = m.hidden)
              : (m = Fe.access(e, 'fxshow', { display: c })),
            o && (m.hidden = !g),
            g && y([e], !0),
            d.done(function () {
              g || y([e]), Fe.remove(e, 'fxshow');
              for (r in p) ge.style(e, r, p[r]);
            })),
            (u = _(g ? m[r] : 0, r, d)),
            r in m ||
              ((m[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      }
    }
    function U(e, t) {
      var n, r, i, o, s;
      for (n in e)
        if (
          ((r = ge.camelCase(n)),
          (i = t[r]),
          (o = e[n]),
          Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
          n !== r && ((e[r] = o), delete e[n]),
          (s = ge.cssHooks[r]) && 'expand' in s)
        ) {
          (o = s.expand(o)), delete e[r];
          for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
        } else t[r] = i;
    }
    function z(e, t, n) {
      var r,
        i,
        o = 0,
        s = z.prefilters.length,
        a = ge.Deferred().always(function () {
          delete u.elem;
        }),
        u = function () {
          if (i) return !1;
          for (
            var t = ht || W(),
              n = Math.max(0, c.startTime + c.duration - t),
              r = n / c.duration || 0,
              o = 1 - r,
              s = 0,
              u = c.tweens.length;
            s < u;
            s++
          )
            c.tweens[s].run(o);
          return (
            a.notifyWith(e, [c, o, n]),
            o < 1 && u
              ? n
              : (u || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
          );
        },
        c = a.promise({
          elem: e,
          props: ge.extend({}, t),
          opts: ge.extend(
            !0,
            { specialEasing: {}, easing: ge.easing._default },
            n,
          ),
          originalProperties: t,
          originalOptions: n,
          startTime: ht || W(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var r = ge.Tween(
              e,
              c.opts,
              t,
              n,
              c.opts.specialEasing[t] || c.opts.easing,
            );
            return c.tweens.push(r), r;
          },
          stop: function (t) {
            var n = 0,
              r = t ? c.tweens.length : 0;
            if (i) return this;
            for (i = !0; n < r; n++) c.tweens[n].run(1);
            return (
              t
                ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                : a.rejectWith(e, [c, t]),
              this
            );
          },
        }),
        l = c.props;
      for (U(l, c.opts.specialEasing); o < s; o++)
        if ((r = z.prefilters[o].call(c, e, l, c.opts)))
          return (
            ge.isFunction(r.stop) &&
              (ge._queueHooks(c.elem, c.opts.queue).stop = ge.proxy(r.stop, r)),
            r
          );
      return (
        ge.map(l, _, c),
        ge.isFunction(c.opts.start) && c.opts.start.call(e, c),
        c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always),
        ge.fx.timer(ge.extend(u, { elem: e, anim: c, queue: c.opts.queue })),
        c
      );
    }
    function V(e) {
      return (e.match(De) || []).join(' ');
    }
    function Y(e) {
      return (e.getAttribute && e.getAttribute('class')) || '';
    }
    function Q(e, t, n, r) {
      var i;
      if (Array.isArray(t))
        ge.each(t, function (t, i) {
          n || At.test(e)
            ? r(e, i)
            : Q(
                e + '[' + ('object' == typeof i && null != i ? t : '') + ']',
                i,
                n,
                r,
              );
        });
      else if (n || 'object' !== ge.type(t)) r(e, t);
      else for (i in t) Q(e + '[' + i + ']', t[i], n, r);
    }
    function G(e) {
      return function (t, n) {
        'string' != typeof t && ((n = t), (t = '*'));
        var r,
          i = 0,
          o = t.toLowerCase().match(De) || [];
        if (ge.isFunction(n))
          for (; (r = o[i++]); )
            '+' === r[0]
              ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
              : (e[r] = e[r] || []).push(n);
      };
    }
    function J(e, t, n, r) {
      function i(a) {
        var u;
        return (
          (o[a] = !0),
          ge.each(e[a] || [], function (e, a) {
            var c = a(t, n, r);
            return 'string' != typeof c || s || o[c]
              ? s
                ? !(u = c)
                : void 0
              : (t.dataTypes.unshift(c), i(c), !1);
          }),
          u
        );
      }
      var o = {},
        s = e === It;
      return i(t.dataTypes[0]) || (!o['*'] && i('*'));
    }
    function K(e, t) {
      var n,
        r,
        i = ge.ajaxSettings.flatOptions || {};
      for (n in t) t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && ge.extend(!0, e, r), e;
    }
    function Z(e, t, n) {
      for (var r, i, o, s, a = e.contents, u = e.dataTypes; '*' === u[0]; )
        u.shift(),
          r === undefined &&
            (r = e.mimeType || t.getResponseHeader('Content-Type'));
      if (r)
        for (i in a)
          if (a[i] && a[i].test(r)) {
            u.unshift(i);
            break;
          }
      if (u[0] in n) o = u[0];
      else {
        for (i in n) {
          if (!u[0] || e.converters[i + ' ' + u[0]]) {
            o = i;
            break;
          }
          s || (s = i);
        }
        o = o || s;
      }
      if (o) return o !== u[0] && u.unshift(o), n[o];
    }
    function ee(e, t, n, r) {
      var i,
        o,
        s,
        a,
        u,
        c = {},
        l = e.dataTypes.slice();
      if (l[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
      for (o = l.shift(); o; )
        if (
          (e.responseFields[o] && (n[e.responseFields[o]] = t),
          !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          (u = o),
          (o = l.shift()))
        )
          if ('*' === o) o = u;
          else if ('*' !== u && u !== o) {
            if (!(s = c[u + ' ' + o] || c['* ' + o]))
              for (i in c)
                if (
                  ((a = i.split(' ')),
                  a[1] === o && (s = c[u + ' ' + a[0]] || c['* ' + a[0]]))
                ) {
                  !0 === s
                    ? (s = c[i])
                    : !0 !== c[i] && ((o = a[0]), l.unshift(a[1]));
                  break;
                }
            if (!0 !== s)
              if (s && e['throws']) t = s(t);
              else
                try {
                  t = s(t);
                } catch (e) {
                  return {
                    state: 'parsererror',
                    error: s ? e : 'No conversion from ' + u + ' to ' + o,
                  };
                }
          }
      return { state: 'success', data: t };
    }
    var te = [],
      ne = e.document,
      re = Object.getPrototypeOf,
      ie = te.slice,
      oe = te.concat,
      se = te.push,
      ae = te.indexOf,
      ue = {},
      ce = ue.toString,
      le = ue.hasOwnProperty,
      fe = le.toString,
      de = fe.call(Object),
      pe = {},
      he = '3.2.1',
      ge = function (e, t) {
        return new ge.fn.init(e, t);
      },
      me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ye = /^-ms-/,
      ve = /-([a-z])/g,
      xe = function (e, t) {
        return t.toUpperCase();
      };
    (ge.fn = ge.prototype =
      {
        jquery: he,
        constructor: ge,
        length: 0,
        toArray: function () {
          return ie.call(this);
        },
        get: function (e) {
          return null == e
            ? ie.call(this)
            : e < 0
              ? this[e + this.length]
              : this[e];
        },
        pushStack: function (e) {
          var t = ge.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return ge.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            ge.map(this, function (t, n) {
              return e.call(t, n, t);
            }),
          );
        },
        slice: function () {
          return this.pushStack(ie.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: se,
        sort: te.sort,
        splice: te.splice,
      }),
      (ge.extend = ge.fn.extend =
        function () {
          var e,
            t,
            n,
            r,
            i,
            o,
            s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            c = !1;
          for (
            'boolean' == typeof s && ((c = s), (s = arguments[a] || {}), a++),
              'object' == typeof s || ge.isFunction(s) || (s = {}),
              a === u && ((s = this), a--);
            a < u;
            a++
          )
            if (null != (e = arguments[a]))
              for (t in e)
                (n = s[t]),
                  (r = e[t]),
                  s !== r &&
                    (c && r && (ge.isPlainObject(r) || (i = Array.isArray(r)))
                      ? (i
                          ? ((i = !1), (o = n && Array.isArray(n) ? n : []))
                          : (o = n && ge.isPlainObject(n) ? n : {}),
                        (s[t] = ge.extend(c, o, r)))
                      : r !== undefined && (s[t] = r));
          return s;
        }),
      ge.extend({
        expando: 'jQuery' + (he + Math.random()).replace(/\D/g, ''),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isFunction: function (e) {
          return 'function' === ge.type(e);
        },
        isWindow: function (e) {
          return null != e && e === e.window;
        },
        isNumeric: function (e) {
          var t = ge.type(e);
          return (
            ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e))
          );
        },
        isPlainObject: function (e) {
          var t, n;
          return (
            !(!e || '[object Object]' !== ce.call(e)) &&
            (!(t = re(e)) ||
              ('function' ==
                typeof (n = le.call(t, 'constructor') && t.constructor) &&
                fe.call(n) === de))
          );
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        type: function (e) {
          return null == e
            ? e + ''
            : 'object' == typeof e || 'function' == typeof e
              ? ue[ce.call(e)] || 'object'
              : typeof e;
        },
        globalEval: function (e) {
          n(e);
        },
        camelCase: function (e) {
          return e.replace(ye, 'ms-').replace(ve, xe);
        },
        each: function (e, t) {
          var n,
            i = 0;
          if (r(e))
            for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
          else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
          return e;
        },
        trim: function (e) {
          return null == e ? '' : (e + '').replace(me, '');
        },
        makeArray: function (e, t) {
          var n = t || [];
          return (
            null != e &&
              (r(Object(e))
                ? ge.merge(n, 'string' == typeof e ? [e] : e)
                : se.call(n, e)),
            n
          );
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : ae.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++)
            e[i++] = t[r];
          return (e.length = i), e;
        },
        grep: function (e, t, n) {
          for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
            !t(e[i], i) !== s && r.push(e[i]);
          return r;
        },
        map: function (e, t, n) {
          var i,
            o,
            s = 0,
            a = [];
          if (r(e))
            for (i = e.length; s < i; s++)
              null != (o = t(e[s], s, n)) && a.push(o);
          else for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
          return oe.apply([], a);
        },
        guid: 1,
        proxy: function (e, t) {
          var n, r, i;
          return (
            'string' == typeof t && ((n = e[t]), (t = e), (e = n)),
            ge.isFunction(e)
              ? ((r = ie.call(arguments, 2)),
                (i = function () {
                  return e.apply(t || this, r.concat(ie.call(arguments)));
                }),
                (i.guid = e.guid = e.guid || ge.guid++),
                i)
              : undefined
          );
        },
        now: Date.now,
        support: pe,
      }),
      'function' == typeof Symbol &&
        (ge.fn[Symbol.iterator] = te[Symbol.iterator]),
      ge.each(
        'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
          ' ',
        ),
        function (e, t) {
          ue['[object ' + t + ']'] = t.toLowerCase();
        },
      );
    var be =
      /*!
       * Sizzle CSS Selector Engine v2.3.3
       * https://sizzlejs.com/
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license
       * http://jquery.org/license
       *
       * Date: 2016-08-08
       */
      (function (e) {
        function t(e, t, n, r) {
          var i,
            o,
            s,
            a,
            u,
            c,
            l,
            d = t && t.ownerDocument,
            h = t ? t.nodeType : 9;
          if (
            ((n = n || []),
            'string' != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
          )
            return n;
          if (
            !r &&
            ((t ? t.ownerDocument || t : W) !== O && q(t), (t = t || O), F)
          ) {
            if (11 !== h && (u = ye.exec(e)))
              if ((i = u[1])) {
                if (9 === h) {
                  if (!(s = t.getElementById(i))) return n;
                  if (s.id === i) return n.push(s), n;
                } else if (
                  d &&
                  (s = d.getElementById(i)) &&
                  I(t, s) &&
                  s.id === i
                )
                  return n.push(s), n;
              } else {
                if (u[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                if (
                  (i = u[3]) &&
                  T.getElementsByClassName &&
                  t.getElementsByClassName
                )
                  return K.apply(n, t.getElementsByClassName(i)), n;
              }
            if (T.qsa && !z[e + ' '] && (!P || !P.test(e))) {
              if (1 !== h) (d = t), (l = e);
              else if ('object' !== t.nodeName.toLowerCase()) {
                for (
                  (a = t.getAttribute('id'))
                    ? (a = a.replace(we, Te))
                    : t.setAttribute('id', (a = M)),
                    c = j(e),
                    o = c.length;
                  o--;

                )
                  c[o] = '#' + a + ' ' + p(c[o]);
                (l = c.join(',')), (d = (ve.test(e) && f(t.parentNode)) || t);
              }
              if (l)
                try {
                  return K.apply(n, d.querySelectorAll(l)), n;
                } catch (e) {
                } finally {
                  a === M && t.removeAttribute('id');
                }
            }
          }
          return S(e.replace(ae, '$1'), t, n, r);
        }
        function n() {
          function e(n, r) {
            return (
              t.push(n + ' ') > C.cacheLength && delete e[t.shift()],
              (e[n + ' '] = r)
            );
          }
          var t = [];
          return e;
        }
        function r(e) {
          return (e[M] = !0), e;
        }
        function i(e) {
          var t = O.createElement('fieldset');
          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
        }
        function o(e, t) {
          for (var n = e.split('|'), r = n.length; r--; )
            C.attrHandle[n[r]] = t;
        }
        function s(e, t) {
          var n = t && e,
            r =
              n &&
              1 === e.nodeType &&
              1 === t.nodeType &&
              e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
          return e ? 1 : -1;
        }
        function a(e) {
          return function (t) {
            return 'input' === t.nodeName.toLowerCase() && t.type === e;
          };
        }
        function u(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ('input' === n || 'button' === n) && t.type === e;
          };
        }
        function c(e) {
          return function (t) {
            return 'form' in t
              ? t.parentNode && !1 === t.disabled
                ? 'label' in t
                  ? 'label' in t.parentNode
                    ? t.parentNode.disabled === e
                    : t.disabled === e
                  : t.isDisabled === e || (t.isDisabled !== !e && Ee(t) === e)
                : t.disabled === e
              : 'label' in t && t.disabled === e;
          };
        }
        function l(e) {
          return r(function (t) {
            return (
              (t = +t),
              r(function (n, r) {
                for (var i, o = e([], n.length, t), s = o.length; s--; )
                  n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
              })
            );
          });
        }
        function f(e) {
          return e && 'undefined' != typeof e.getElementsByTagName && e;
        }
        function d() {}
        function p(e) {
          for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
          return r;
        }
        function h(e, t, n) {
          var r = t.dir,
            i = t.next,
            o = i || r,
            s = n && 'parentNode' === o,
            a = _++;
          return t.first
            ? function (t, n, i) {
                for (; (t = t[r]); )
                  if (1 === t.nodeType || s) return e(t, n, i);
                return !1;
              }
            : function (t, n, u) {
                var c,
                  l,
                  f,
                  d = [B, a];
                if (u) {
                  for (; (t = t[r]); )
                    if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
                } else
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || s)
                      if (
                        ((f = t[M] || (t[M] = {})),
                        (l = f[t.uniqueID] || (f[t.uniqueID] = {})),
                        i && i === t.nodeName.toLowerCase())
                      )
                        t = t[r] || t;
                      else {
                        if ((c = l[o]) && c[0] === B && c[1] === a)
                          return (d[2] = c[2]);
                        if (((l[o] = d), (d[2] = e(t, n, u)))) return !0;
                      }
                return !1;
              };
        }
        function g(e) {
          return e.length > 1
            ? function (t, n, r) {
                for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                return !0;
              }
            : e[0];
        }
        function m(e, n, r) {
          for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
          return r;
        }
        function y(e, t, n, r, i) {
          for (var o, s = [], a = 0, u = e.length, c = null != t; a < u; a++)
            (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), c && t.push(a)));
          return s;
        }
        function v(e, t, n, i, o, s) {
          return (
            i && !i[M] && (i = v(i)),
            o && !o[M] && (o = v(o, s)),
            r(function (r, s, a, u) {
              var c,
                l,
                f,
                d = [],
                p = [],
                h = s.length,
                g = r || m(t || '*', a.nodeType ? [a] : a, []),
                v = !e || (!r && t) ? g : y(g, d, e, a, u),
                x = n ? (o || (r ? e : h || i) ? [] : s) : v;
              if ((n && n(v, x, a, u), i))
                for (c = y(x, p), i(c, [], a, u), l = c.length; l--; )
                  (f = c[l]) && (x[p[l]] = !(v[p[l]] = f));
              if (r) {
                if (o || e) {
                  if (o) {
                    for (c = [], l = x.length; l--; )
                      (f = x[l]) && c.push((v[l] = f));
                    o(null, (x = []), c, u);
                  }
                  for (l = x.length; l--; )
                    (f = x[l]) &&
                      (c = o ? ee(r, f) : d[l]) > -1 &&
                      (r[c] = !(s[c] = f));
                }
              } else
                (x = y(x === s ? x.splice(h, x.length) : x)),
                  o ? o(null, s, x, u) : K.apply(s, x);
            })
          );
        }
        function x(e) {
          for (
            var t,
              n,
              r,
              i = e.length,
              o = C.relative[e[0].type],
              s = o || C.relative[' '],
              a = o ? 1 : 0,
              u = h(
                function (e) {
                  return e === t;
                },
                s,
                !0,
              ),
              c = h(
                function (e) {
                  return ee(t, e) > -1;
                },
                s,
                !0,
              ),
              l = [
                function (e, n, r) {
                  var i =
                    (!o && (r || n !== L)) ||
                    ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
                  return (t = null), i;
                },
              ];
            a < i;
            a++
          )
            if ((n = C.relative[e[a].type])) l = [h(g(l), n)];
            else {
              if (((n = C.filter[e[a].type].apply(null, e[a].matches)), n[M])) {
                for (r = ++a; r < i && !C.relative[e[r].type]; r++);
                return v(
                  a > 1 && g(l),
                  a > 1 &&
                    p(
                      e
                        .slice(0, a - 1)
                        .concat({ value: ' ' === e[a - 2].type ? '*' : '' }),
                    ).replace(ae, '$1'),
                  n,
                  a < r && x(e.slice(a, r)),
                  r < i && x((e = e.slice(r))),
                  r < i && p(e),
                );
              }
              l.push(n);
            }
          return g(l);
        }
        function b(e, n) {
          var i = n.length > 0,
            o = e.length > 0,
            s = function (r, s, a, u, c) {
              var l,
                f,
                d,
                p = 0,
                h = '0',
                g = r && [],
                m = [],
                v = L,
                x = r || (o && C.find.TAG('*', c)),
                b = (B += null == v ? 1 : Math.random() || 0.1),
                w = x.length;
              for (
                c && (L = s === O || s || c);
                h !== w && null != (l = x[h]);
                h++
              ) {
                if (o && l) {
                  for (
                    f = 0, s || l.ownerDocument === O || (q(l), (a = !F));
                    (d = e[f++]);

                  )
                    if (d(l, s || O, a)) {
                      u.push(l);
                      break;
                    }
                  c && (B = b);
                }
                i && ((l = !d && l) && p--, r && g.push(l));
              }
              if (((p += h), i && h !== p)) {
                for (f = 0; (d = n[f++]); ) d(g, m, s, a);
                if (r) {
                  if (p > 0) for (; h--; ) g[h] || m[h] || (m[h] = G.call(u));
                  m = y(m);
                }
                K.apply(u, m),
                  c &&
                    !r &&
                    m.length > 0 &&
                    p + n.length > 1 &&
                    t.uniqueSort(u);
              }
              return c && ((B = b), (L = v)), g;
            };
          return i ? r(s) : s;
        }
        var w,
          T,
          C,
          E,
          k,
          j,
          A,
          S,
          L,
          D,
          N,
          q,
          O,
          H,
          F,
          P,
          R,
          $,
          I,
          M = 'sizzle' + 1 * new Date(),
          W = e.document,
          B = 0,
          _ = 0,
          X = n(),
          U = n(),
          z = n(),
          V = function (e, t) {
            return e === t && (N = !0), 0;
          },
          Y = {}.hasOwnProperty,
          Q = [],
          G = Q.pop,
          J = Q.push,
          K = Q.push,
          Z = Q.slice,
          ee = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
          },
          te =
            'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
          ne = '[\\x20\\t\\r\\n\\f]',
          re = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
          ie =
            '\\[' +
            ne +
            '*(' +
            re +
            ')(?:' +
            ne +
            '*([*^$|!~]?=)' +
            ne +
            '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
            re +
            '))|)' +
            ne +
            '*\\]',
          oe =
            ':(' +
            re +
            ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
            ie +
            ')*)|.*)\\)|)',
          se = new RegExp(ne + '+', 'g'),
          ae = new RegExp(
            '^' + ne + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ne + '+$',
            'g',
          ),
          ue = new RegExp('^' + ne + '*,' + ne + '*'),
          ce = new RegExp('^' + ne + '*([>+~]|' + ne + ')' + ne + '*'),
          le = new RegExp('=' + ne + '*([^\\]\'"]*?)' + ne + '*\\]', 'g'),
          fe = new RegExp(oe),
          de = new RegExp('^' + re + '$'),
          pe = {
            ID: new RegExp('^#(' + re + ')'),
            CLASS: new RegExp('^\\.(' + re + ')'),
            TAG: new RegExp('^(' + re + '|[*])'),
            ATTR: new RegExp('^' + ie),
            PSEUDO: new RegExp('^' + oe),
            CHILD: new RegExp(
              '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                ne +
                '*(even|odd|(([+-]|)(\\d*)n|)' +
                ne +
                '*(?:([+-]|)' +
                ne +
                '*(\\d+)|))' +
                ne +
                '*\\)|)',
              'i',
            ),
            bool: new RegExp('^(?:' + te + ')$', 'i'),
            needsContext: new RegExp(
              '^' +
                ne +
                '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                ne +
                '*((?:-\\d)?\\d*)' +
                ne +
                '*\\)|)(?=[^-]|$)',
              'i',
            ),
          },
          he = /^(?:input|select|textarea|button)$/i,
          ge = /^h\d$/i,
          me = /^[^{]+\{\s*\[native \w/,
          ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ve = /[+~]/,
          xe = new RegExp(
            '\\\\([\\da-f]{1,6}' + ne + '?|(' + ne + ')|.)',
            'ig',
          ),
          be = function (e, t, n) {
            var r = '0x' + t - 65536;
            return r !== r || n
              ? t
              : r < 0
                ? String.fromCharCode(r + 65536)
                : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
          },
          we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          Te = function (e, t) {
            return t
              ? '\0' === e
                ? '\ufffd'
                : e.slice(0, -1) +
                  '\\' +
                  e.charCodeAt(e.length - 1).toString(16) +
                  ' '
              : '\\' + e;
          },
          Ce = function () {
            q();
          },
          Ee = h(
            function (e) {
              return !0 === e.disabled && ('form' in e || 'label' in e);
            },
            { dir: 'parentNode', next: 'legend' },
          );
        try {
          K.apply((Q = Z.call(W.childNodes)), W.childNodes),
            Q[W.childNodes.length].nodeType;
        } catch (e) {
          K = {
            apply: Q.length
              ? function (e, t) {
                  J.apply(e, Z.call(t));
                }
              : function (e, t) {
                  for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                  e.length = n - 1;
                },
          };
        }
        (T = t.support = {}),
          (k = t.isXML =
            function (e) {
              var t = e && (e.ownerDocument || e).documentElement;
              return !!t && 'HTML' !== t.nodeName;
            }),
          (q = t.setDocument =
            function (e) {
              var t,
                n,
                r = e ? e.ownerDocument || e : W;
              return r !== O && 9 === r.nodeType && r.documentElement
                ? ((O = r),
                  (H = O.documentElement),
                  (F = !k(O)),
                  W !== O &&
                    (n = O.defaultView) &&
                    n.top !== n &&
                    (n.addEventListener
                      ? n.addEventListener('unload', Ce, !1)
                      : n.attachEvent && n.attachEvent('onunload', Ce)),
                  (T.attributes = i(function (e) {
                    return (e.className = 'i'), !e.getAttribute('className');
                  })),
                  (T.getElementsByTagName = i(function (e) {
                    return (
                      e.appendChild(O.createComment('')),
                      !e.getElementsByTagName('*').length
                    );
                  })),
                  (T.getElementsByClassName = me.test(
                    O.getElementsByClassName,
                  )),
                  (T.getById = i(function (e) {
                    return (
                      (H.appendChild(e).id = M),
                      !O.getElementsByName || !O.getElementsByName(M).length
                    );
                  })),
                  T.getById
                    ? ((C.filter.ID = function (e) {
                        var t = e.replace(xe, be);
                        return function (e) {
                          return e.getAttribute('id') === t;
                        };
                      }),
                      (C.find.ID = function (e, t) {
                        if ('undefined' != typeof t.getElementById && F) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((C.filter.ID = function (e) {
                        var t = e.replace(xe, be);
                        return function (e) {
                          var n =
                            'undefined' != typeof e.getAttributeNode &&
                            e.getAttributeNode('id');
                          return n && n.value === t;
                        };
                      }),
                      (C.find.ID = function (e, t) {
                        if ('undefined' != typeof t.getElementById && F) {
                          var n,
                            r,
                            i,
                            o = t.getElementById(e);
                          if (o) {
                            if ((n = o.getAttributeNode('id')) && n.value === e)
                              return [o];
                            for (
                              i = t.getElementsByName(e), r = 0;
                              (o = i[r++]);

                            )
                              if (
                                (n = o.getAttributeNode('id')) &&
                                n.value === e
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (C.find.TAG = T.getElementsByTagName
                    ? function (e, t) {
                        return 'undefined' != typeof t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : T.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          i = 0,
                          o = t.getElementsByTagName(e);
                        if ('*' === e) {
                          for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return o;
                      }),
                  (C.find.CLASS =
                    T.getElementsByClassName &&
                    function (e, t) {
                      if ('undefined' != typeof t.getElementsByClassName && F)
                        return t.getElementsByClassName(e);
                    }),
                  (R = []),
                  (P = []),
                  (T.qsa = me.test(O.querySelectorAll)) &&
                    (i(function (e) {
                      (H.appendChild(e).innerHTML =
                        "<a id='" +
                        M +
                        "'></a><select id='" +
                        M +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          P.push('[*^$]=' + ne + '*(?:\'\'|"")'),
                        e.querySelectorAll('[selected]').length ||
                          P.push('\\[' + ne + '*(?:value|' + te + ')'),
                        e.querySelectorAll('[id~=' + M + '-]').length ||
                          P.push('~='),
                        e.querySelectorAll(':checked').length ||
                          P.push(':checked'),
                        e.querySelectorAll('a#' + M + '+*').length ||
                          P.push('.#.+[+~]');
                    }),
                    i(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = O.createElement('input');
                      t.setAttribute('type', 'hidden'),
                        e.appendChild(t).setAttribute('name', 'D'),
                        e.querySelectorAll('[name=d]').length &&
                          P.push('name' + ne + '*[*^$|!~]?='),
                        2 !== e.querySelectorAll(':enabled').length &&
                          P.push(':enabled', ':disabled'),
                        (H.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(':disabled').length &&
                          P.push(':enabled', ':disabled'),
                        e.querySelectorAll('*,:x'),
                        P.push(',.*:');
                    })),
                  (T.matchesSelector = me.test(
                    ($ =
                      H.matches ||
                      H.webkitMatchesSelector ||
                      H.mozMatchesSelector ||
                      H.oMatchesSelector ||
                      H.msMatchesSelector),
                  )) &&
                    i(function (e) {
                      (T.disconnectedMatch = $.call(e, '*')),
                        $.call(e, "[s!='']:x"),
                        R.push('!=', oe);
                    }),
                  (P = P.length && new RegExp(P.join('|'))),
                  (R = R.length && new RegExp(R.join('|'))),
                  (t = me.test(H.compareDocumentPosition)),
                  (I =
                    t || me.test(H.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (V = t
                    ? function (e, t) {
                        if (e === t) return (N = !0), 0;
                        var n =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          n ||
                          ((n =
                            (e.ownerDocument || e) === (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1),
                          1 & n ||
                          (!T.sortDetached &&
                            t.compareDocumentPosition(e) === n)
                            ? e === O || (e.ownerDocument === W && I(W, e))
                              ? -1
                              : t === O || (t.ownerDocument === W && I(W, t))
                                ? 1
                                : D
                                  ? ee(D, e) - ee(D, t)
                                  : 0
                            : 4 & n
                              ? -1
                              : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (N = !0), 0;
                        var n,
                          r = 0,
                          i = e.parentNode,
                          o = t.parentNode,
                          a = [e],
                          u = [t];
                        if (!i || !o)
                          return e === O
                            ? -1
                            : t === O
                              ? 1
                              : i
                                ? -1
                                : o
                                  ? 1
                                  : D
                                    ? ee(D, e) - ee(D, t)
                                    : 0;
                        if (i === o) return s(e, t);
                        for (n = e; (n = n.parentNode); ) a.unshift(n);
                        for (n = t; (n = n.parentNode); ) u.unshift(n);
                        for (; a[r] === u[r]; ) r++;
                        return r
                          ? s(a[r], u[r])
                          : a[r] === W
                            ? -1
                            : u[r] === W
                              ? 1
                              : 0;
                      }),
                  O)
                : O;
            }),
          (t.matches = function (e, n) {
            return t(e, null, null, n);
          }),
          (t.matchesSelector = function (e, n) {
            if (
              ((e.ownerDocument || e) !== O && q(e),
              (n = n.replace(le, "='$1']")),
              T.matchesSelector &&
                F &&
                !z[n + ' '] &&
                (!R || !R.test(n)) &&
                (!P || !P.test(n)))
            )
              try {
                var r = $.call(e, n);
                if (
                  r ||
                  T.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (e) {}
            return t(n, O, null, [e]).length > 0;
          }),
          (t.contains = function (e, t) {
            return (e.ownerDocument || e) !== O && q(e), I(e, t);
          }),
          (t.attr = function (e, t) {
            (e.ownerDocument || e) !== O && q(e);
            var n = C.attrHandle[t.toLowerCase()],
              r =
                n && Y.call(C.attrHandle, t.toLowerCase())
                  ? n(e, t, !F)
                  : undefined;
            return r !== undefined
              ? r
              : T.attributes || !F
                ? e.getAttribute(t)
                : (r = e.getAttributeNode(t)) && r.specified
                  ? r.value
                  : null;
          }),
          (t.escape = function (e) {
            return (e + '').replace(we, Te);
          }),
          (t.error = function (e) {
            throw new Error('Syntax error, unrecognized expression: ' + e);
          }),
          (t.uniqueSort = function (e) {
            var t,
              n = [],
              r = 0,
              i = 0;
            if (
              ((N = !T.detectDuplicates),
              (D = !T.sortStable && e.slice(0)),
              e.sort(V),
              N)
            ) {
              for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
              for (; r--; ) e.splice(n[r], 1);
            }
            return (D = null), e;
          }),
          (E = t.getText =
            function (e) {
              var t,
                n = '',
                r = 0,
                i = e.nodeType;
              if (i) {
                if (1 === i || 9 === i || 11 === i) {
                  if ('string' == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += E(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
              } else for (; (t = e[r++]); ) n += E(t);
              return n;
            }),
          (C = t.selectors =
            {
              cacheLength: 50,
              createPseudo: r,
              match: pe,
              attrHandle: {},
              find: {},
              relative: {
                '>': { dir: 'parentNode', first: !0 },
                ' ': { dir: 'parentNode' },
                '+': { dir: 'previousSibling', first: !0 },
                '~': { dir: 'previousSibling' },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(xe, be)),
                    (e[3] = (e[3] || e[4] || e[5] || '').replace(xe, be)),
                    '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    'nth' === e[1].slice(0, 3)
                      ? (e[3] || t.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ('even' === e[3] || 'odd' === e[3]))),
                        (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                      : e[3] && t.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return pe.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || '')
                        : n &&
                          fe.test(n) &&
                          (t = j(n, !0)) &&
                          (t = n.indexOf(')', n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(xe, be).toLowerCase();
                  return '*' === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = X[e + ' '];
                  return (
                    t ||
                    ((t = new RegExp(
                      '(^|' + ne + ')' + e + '(' + ne + '|$)',
                    )) &&
                      X(e, function (e) {
                        return t.test(
                          ('string' == typeof e.className && e.className) ||
                            ('undefined' != typeof e.getAttribute &&
                              e.getAttribute('class')) ||
                            '',
                        );
                      }))
                  );
                },
                ATTR: function (e, n, r) {
                  return function (i) {
                    var o = t.attr(i, e);
                    return null == o
                      ? '!=' === n
                      : !n ||
                          ((o += ''),
                          '=' === n
                            ? o === r
                            : '!=' === n
                              ? o !== r
                              : '^=' === n
                                ? r && 0 === o.indexOf(r)
                                : '*=' === n
                                  ? r && o.indexOf(r) > -1
                                  : '$=' === n
                                    ? r && o.slice(-r.length) === r
                                    : '~=' === n
                                      ? (
                                          ' ' +
                                          o.replace(se, ' ') +
                                          ' '
                                        ).indexOf(r) > -1
                                      : '|=' === n &&
                                        (o === r ||
                                          o.slice(0, r.length + 1) ===
                                            r + '-'));
                  };
                },
                CHILD: function (e, t, n, r, i) {
                  var o = 'nth' !== e.slice(0, 3),
                    s = 'last' !== e.slice(-4),
                    a = 'of-type' === t;
                  return 1 === r && 0 === i
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, u) {
                        var c,
                          l,
                          f,
                          d,
                          p,
                          h,
                          g = o !== s ? 'nextSibling' : 'previousSibling',
                          m = t.parentNode,
                          y = a && t.nodeName.toLowerCase(),
                          v = !u && !a,
                          x = !1;
                        if (m) {
                          if (o) {
                            for (; g; ) {
                              for (d = t; (d = d[g]); )
                                if (
                                  a
                                    ? d.nodeName.toLowerCase() === y
                                    : 1 === d.nodeType
                                )
                                  return !1;
                              h = g = 'only' === e && !h && 'nextSibling';
                            }
                            return !0;
                          }
                          if (
                            ((h = [s ? m.firstChild : m.lastChild]), s && v)
                          ) {
                            for (
                              d = m,
                                f = d[M] || (d[M] = {}),
                                l = f[d.uniqueID] || (f[d.uniqueID] = {}),
                                c = l[e] || [],
                                p = c[0] === B && c[1],
                                x = p && c[2],
                                d = p && m.childNodes[p];
                              (d =
                                (++p && d && d[g]) || (x = p = 0) || h.pop());

                            )
                              if (1 === d.nodeType && ++x && d === t) {
                                l[e] = [B, p, x];
                                break;
                              }
                          } else if (
                            (v &&
                              ((d = t),
                              (f = d[M] || (d[M] = {})),
                              (l = f[d.uniqueID] || (f[d.uniqueID] = {})),
                              (c = l[e] || []),
                              (p = c[0] === B && c[1]),
                              (x = p)),
                            !1 === x)
                          )
                            for (
                              ;
                              (d =
                                (++p && d && d[g]) || (x = p = 0) || h.pop()) &&
                              ((a
                                ? d.nodeName.toLowerCase() !== y
                                : 1 !== d.nodeType) ||
                                !++x ||
                                (v &&
                                  ((f = d[M] || (d[M] = {})),
                                  (l = f[d.uniqueID] || (f[d.uniqueID] = {})),
                                  (l[e] = [B, x])),
                                d !== t));

                            );
                          return (x -= i) === r || (x % r == 0 && x / r >= 0);
                        }
                      };
                },
                PSEUDO: function (e, n) {
                  var i,
                    o =
                      C.pseudos[e] ||
                      C.setFilters[e.toLowerCase()] ||
                      t.error('unsupported pseudo: ' + e);
                  return o[M]
                    ? o(n)
                    : o.length > 1
                      ? ((i = [e, e, '', n]),
                        C.setFilters.hasOwnProperty(e.toLowerCase())
                          ? r(function (e, t) {
                              for (var r, i = o(e, n), s = i.length; s--; )
                                (r = ee(e, i[s])), (e[r] = !(t[r] = i[s]));
                            })
                          : function (e) {
                              return o(e, 0, i);
                            })
                      : o;
                },
              },
              pseudos: {
                not: r(function (e) {
                  var t = [],
                    n = [],
                    i = A(e.replace(ae, '$1'));
                  return i[M]
                    ? r(function (e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--; )
                          (o = s[a]) && (e[a] = !(t[a] = o));
                      })
                    : function (e, r, o) {
                        return (
                          (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: r(function (e) {
                  return function (n) {
                    return t(e, n).length > 0;
                  };
                }),
                contains: r(function (e) {
                  return (
                    (e = e.replace(xe, be)),
                    function (t) {
                      return (
                        (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                      );
                    }
                  );
                }),
                lang: r(function (e) {
                  return (
                    de.test(e || '') || t.error('unsupported lang: ' + e),
                    (e = e.replace(xe, be).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if (
                          (n = F
                            ? t.lang
                            : t.getAttribute('xml:lang') ||
                              t.getAttribute('lang'))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + '-')
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === H;
                },
                focus: function (e) {
                  return (
                    e === O.activeElement &&
                    (!O.hasFocus || O.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: c(!1),
                disabled: c(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ('input' === t && !!e.checked) ||
                    ('option' === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !C.pseudos.empty(e);
                },
                header: function (e) {
                  return ge.test(e.nodeName);
                },
                input: function (e) {
                  return he.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ('input' === t && 'button' === e.type) || 'button' === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    'input' === e.nodeName.toLowerCase() &&
                    'text' === e.type &&
                    (null == (t = e.getAttribute('type')) ||
                      'text' === t.toLowerCase())
                  );
                },
                first: l(function () {
                  return [0];
                }),
                last: l(function (e, t) {
                  return [t - 1];
                }),
                eq: l(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: l(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: l(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: l(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                  return e;
                }),
                gt: l(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }),
          (C.pseudos.nth = C.pseudos.eq);
        for (w in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0,
        })
          C.pseudos[w] = a(w);
        for (w in { submit: !0, reset: !0 }) C.pseudos[w] = u(w);
        return (
          (d.prototype = C.filters = C.pseudos),
          (C.setFilters = new d()),
          (j = t.tokenize =
            function (e, n) {
              var r,
                i,
                o,
                s,
                a,
                u,
                c,
                l = U[e + ' '];
              if (l) return n ? 0 : l.slice(0);
              for (a = e, u = [], c = C.preFilter; a; ) {
                (r && !(i = ue.exec(a))) ||
                  (i && (a = a.slice(i[0].length) || a), u.push((o = []))),
                  (r = !1),
                  (i = ce.exec(a)) &&
                    ((r = i.shift()),
                    o.push({ value: r, type: i[0].replace(ae, ' ') }),
                    (a = a.slice(r.length)));
                for (s in C.filter)
                  !(i = pe[s].exec(a)) ||
                    (c[s] && !(i = c[s](i))) ||
                    ((r = i.shift()),
                    o.push({ value: r, type: s, matches: i }),
                    (a = a.slice(r.length)));
                if (!r) break;
              }
              return n ? a.length : a ? t.error(e) : U(e, u).slice(0);
            }),
          (A = t.compile =
            function (e, t) {
              var n,
                r = [],
                i = [],
                o = z[e + ' '];
              if (!o) {
                for (t || (t = j(e)), n = t.length; n--; )
                  (o = x(t[n])), o[M] ? r.push(o) : i.push(o);
                (o = z(e, b(i, r))), (o.selector = e);
              }
              return o;
            }),
          (S = t.select =
            function (e, t, n, r) {
              var i,
                o,
                s,
                a,
                u,
                c = 'function' == typeof e && e,
                l = !r && j((e = c.selector || e));
              if (((n = n || []), 1 === l.length)) {
                if (
                  ((o = l[0] = l[0].slice(0)),
                  o.length > 2 &&
                    'ID' === (s = o[0]).type &&
                    9 === t.nodeType &&
                    F &&
                    C.relative[o[1].type])
                ) {
                  if (
                    !(t = (C.find.ID(s.matches[0].replace(xe, be), t) || [])[0])
                  )
                    return n;
                  c && (t = t.parentNode),
                    (e = e.slice(o.shift().value.length));
                }
                for (
                  i = pe.needsContext.test(e) ? 0 : o.length;
                  i-- && ((s = o[i]), !C.relative[(a = s.type)]);

                )
                  if (
                    (u = C.find[a]) &&
                    (r = u(
                      s.matches[0].replace(xe, be),
                      (ve.test(o[0].type) && f(t.parentNode)) || t,
                    ))
                  ) {
                    if ((o.splice(i, 1), !(e = r.length && p(o))))
                      return K.apply(n, r), n;
                    break;
                  }
              }
              return (
                (c || A(e, l))(
                  r,
                  t,
                  !F,
                  n,
                  !t || (ve.test(e) && f(t.parentNode)) || t,
                ),
                n
              );
            }),
          (T.sortStable = M.split('').sort(V).join('') === M),
          (T.detectDuplicates = !!N),
          q(),
          (T.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(O.createElement('fieldset'));
          })),
          i(function (e) {
            return (
              (e.innerHTML = "<a href='#'></a>"),
              '#' === e.firstChild.getAttribute('href')
            );
          }) ||
            o('type|href|height|width', function (e, t, n) {
              if (!n)
                return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
            }),
          (T.attributes &&
            i(function (e) {
              return (
                (e.innerHTML = '<input/>'),
                e.firstChild.setAttribute('value', ''),
                '' === e.firstChild.getAttribute('value')
              );
            })) ||
            o('value', function (e, t, n) {
              if (!n && 'input' === e.nodeName.toLowerCase())
                return e.defaultValue;
            }),
          i(function (e) {
            return null == e.getAttribute('disabled');
          }) ||
            o(te, function (e, t, n) {
              var r;
              if (!n)
                return !0 === e[t]
                  ? t.toLowerCase()
                  : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
            }),
          t
        );
      })(e);
    (ge.find = be),
      (ge.expr = be.selectors),
      (ge.expr[':'] = ge.expr.pseudos),
      (ge.uniqueSort = ge.unique = be.uniqueSort),
      (ge.text = be.getText),
      (ge.isXMLDoc = be.isXML),
      (ge.contains = be.contains),
      (ge.escapeSelector = be.escape);
    var we = function (e, t, n) {
        for (var r = [], i = n !== undefined; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (i && ge(e).is(n)) break;
            r.push(e);
          }
        return r;
      },
      Te = function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
      Ce = ge.expr.match.needsContext,
      Ee = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      ke = /^.[^:#\[\.,]*$/;
    (ge.filter = function (e, t, n) {
      var r = t[0];
      return (
        n && (e = ':not(' + e + ')'),
        1 === t.length && 1 === r.nodeType
          ? ge.find.matchesSelector(r, e)
            ? [r]
            : []
          : ge.find.matches(
              e,
              ge.grep(t, function (e) {
                return 1 === e.nodeType;
              }),
            )
      );
    }),
      ge.fn.extend({
        find: function (e) {
          var t,
            n,
            r = this.length,
            i = this;
          if ('string' != typeof e)
            return this.pushStack(
              ge(e).filter(function () {
                for (t = 0; t < r; t++) if (ge.contains(i[t], this)) return !0;
              }),
            );
          for (n = this.pushStack([]), t = 0; t < r; t++) ge.find(e, i[t], n);
          return r > 1 ? ge.uniqueSort(n) : n;
        },
        filter: function (e) {
          return this.pushStack(o(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(o(this, e || [], !0));
        },
        is: function (e) {
          return !!o(
            this,
            'string' == typeof e && Ce.test(e) ? ge(e) : e || [],
            !1,
          ).length;
        },
      });
    var je,
      Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((ge.fn.init = function (e, t, n) {
      var r, i;
      if (!e) return this;
      if (((n = n || je), 'string' == typeof e)) {
        if (
          !(r =
            '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
              ? [null, e, null]
              : Ae.exec(e)) ||
          (!r[1] && t)
        )
          return !t || t.jquery
            ? (t || n).find(e)
            : this.constructor(t).find(e);
        if (r[1]) {
          if (
            ((t = t instanceof ge ? t[0] : t),
            ge.merge(
              this,
              ge.parseHTML(
                r[1],
                t && t.nodeType ? t.ownerDocument || t : ne,
                !0,
              ),
            ),
            Ee.test(r[1]) && ge.isPlainObject(t))
          )
            for (r in t)
              ge.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this;
        }
        return (
          (i = ne.getElementById(r[2])),
          i && ((this[0] = i), (this.length = 1)),
          this
        );
      }
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : ge.isFunction(e)
          ? n.ready !== undefined
            ? n.ready(e)
            : e(ge)
          : ge.makeArray(e, this);
    }).prototype = ge.fn),
      (je = ge(ne));
    var Se = /^(?:parents|prev(?:Until|All))/,
      Le = { children: !0, contents: !0, next: !0, prev: !0 };
    ge.fn.extend({
      has: function (e) {
        var t = ge(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) if (ge.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        var n,
          r = 0,
          i = this.length,
          o = [],
          s = 'string' != typeof e && ge(e);
        if (!Ce.test(e))
          for (; r < i; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (s
                  ? s.index(n) > -1
                  : 1 === n.nodeType && ge.find.matchesSelector(n, e))
              ) {
                o.push(n);
                break;
              }
        return this.pushStack(o.length > 1 ? ge.uniqueSort(o) : o);
      },
      index: function (e) {
        return e
          ? 'string' == typeof e
            ? ae.call(ge(e), this[0])
            : ae.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
      },
      add: function (e, t) {
        return this.pushStack(ge.uniqueSort(ge.merge(this.get(), ge(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e),
        );
      },
    }),
      ge.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return we(e, 'parentNode');
          },
          parentsUntil: function (e, t, n) {
            return we(e, 'parentNode', n);
          },
          next: function (e) {
            return s(e, 'nextSibling');
          },
          prev: function (e) {
            return s(e, 'previousSibling');
          },
          nextAll: function (e) {
            return we(e, 'nextSibling');
          },
          prevAll: function (e) {
            return we(e, 'previousSibling');
          },
          nextUntil: function (e, t, n) {
            return we(e, 'nextSibling', n);
          },
          prevUntil: function (e, t, n) {
            return we(e, 'previousSibling', n);
          },
          siblings: function (e) {
            return Te((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return Te(e.firstChild);
          },
          contents: function (e) {
            return i(e, 'iframe')
              ? e.contentDocument
              : (i(e, 'template') && (e = e.content || e),
                ge.merge([], e.childNodes));
          },
        },
        function (e, t) {
          ge.fn[e] = function (n, r) {
            var i = ge.map(this, t, n);
            return (
              'Until' !== e.slice(-5) && (r = n),
              r && 'string' == typeof r && (i = ge.filter(r, i)),
              this.length > 1 &&
                (Le[e] || ge.uniqueSort(i), Se.test(e) && i.reverse()),
              this.pushStack(i)
            );
          };
        },
      );
    var De = /[^\x20\t\r\n\f]+/g;
    (ge.Callbacks = function (e) {
      e = 'string' == typeof e ? a(e) : ge.extend({}, e);
      var t,
        n,
        r,
        i,
        o = [],
        s = [],
        u = -1,
        c = function () {
          for (i = i || e.once, r = t = !0; s.length; u = -1)
            for (n = s.shift(); ++u < o.length; )
              !1 === o[u].apply(n[0], n[1]) &&
                e.stopOnFalse &&
                ((u = o.length), (n = !1));
          e.memory || (n = !1), (t = !1), i && (o = n ? [] : '');
        },
        l = {
          add: function () {
            return (
              o &&
                (n && !t && ((u = o.length - 1), s.push(n)),
                (function t(n) {
                  ge.each(n, function (n, r) {
                    ge.isFunction(r)
                      ? (e.unique && l.has(r)) || o.push(r)
                      : r && r.length && 'string' !== ge.type(r) && t(r);
                  });
                })(arguments),
                n && !t && c()),
              this
            );
          },
          remove: function () {
            return (
              ge.each(arguments, function (e, t) {
                for (var n; (n = ge.inArray(t, o, n)) > -1; )
                  o.splice(n, 1), n <= u && u--;
              }),
              this
            );
          },
          has: function (e) {
            return e ? ge.inArray(e, o) > -1 : o.length > 0;
          },
          empty: function () {
            return o && (o = []), this;
          },
          disable: function () {
            return (i = s = []), (o = n = ''), this;
          },
          disabled: function () {
            return !o;
          },
          lock: function () {
            return (i = s = []), n || t || (o = n = ''), this;
          },
          locked: function () {
            return !!i;
          },
          fireWith: function (e, n) {
            return (
              i ||
                ((n = n || []),
                (n = [e, n.slice ? n.slice() : n]),
                s.push(n),
                t || c()),
              this
            );
          },
          fire: function () {
            return l.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!r;
          },
        };
      return l;
    }),
      ge.extend({
        Deferred: function (t) {
          var n = [
              [
                'notify',
                'progress',
                ge.Callbacks('memory'),
                ge.Callbacks('memory'),
                2,
              ],
              [
                'resolve',
                'done',
                ge.Callbacks('once memory'),
                ge.Callbacks('once memory'),
                0,
                'resolved',
              ],
              [
                'reject',
                'fail',
                ge.Callbacks('once memory'),
                ge.Callbacks('once memory'),
                1,
                'rejected',
              ],
            ],
            r = 'pending',
            i = {
              state: function () {
                return r;
              },
              always: function () {
                return o.done(arguments).fail(arguments), this;
              },
              catch: function (e) {
                return i.then(null, e);
              },
              pipe: function () {
                var e = arguments;
                return ge
                  .Deferred(function (t) {
                    ge.each(n, function (n, r) {
                      var i = ge.isFunction(e[r[4]]) && e[r[4]];
                      o[r[1]](function () {
                        var e = i && i.apply(this, arguments);
                        e && ge.isFunction(e.promise)
                          ? e
                              .promise()
                              .progress(t.notify)
                              .done(t.resolve)
                              .fail(t.reject)
                          : t[r[0] + 'With'](this, i ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  })
                  .promise();
              },
              then: function (t, r, i) {
                function o(t, n, r, i) {
                  return function () {
                    var a = this,
                      l = arguments,
                      f = function () {
                        var e, f;
                        if (!(t < s)) {
                          if ((e = r.apply(a, l)) === n.promise())
                            throw new TypeError('Thenable self-resolution');
                          (f =
                            e &&
                            ('object' == typeof e || 'function' == typeof e) &&
                            e.then),
                            ge.isFunction(f)
                              ? i
                                ? f.call(e, o(s, n, u, i), o(s, n, c, i))
                                : (s++,
                                  f.call(
                                    e,
                                    o(s, n, u, i),
                                    o(s, n, c, i),
                                    o(s, n, u, n.notifyWith),
                                  ))
                              : (r !== u && ((a = undefined), (l = [e])),
                                (i || n.resolveWith)(a, l));
                        }
                      },
                      d = i
                        ? f
                        : function () {
                            try {
                              f();
                            } catch (e) {
                              ge.Deferred.exceptionHook &&
                                ge.Deferred.exceptionHook(e, d.stackTrace),
                                t + 1 >= s &&
                                  (r !== c && ((a = undefined), (l = [e])),
                                  n.rejectWith(a, l));
                            }
                          };
                    t
                      ? d()
                      : (ge.Deferred.getStackHook &&
                          (d.stackTrace = ge.Deferred.getStackHook()),
                        e.setTimeout(d));
                  };
                }
                var s = 0;
                return ge
                  .Deferred(function (e) {
                    n[0][3].add(
                      o(0, e, ge.isFunction(i) ? i : u, e.notifyWith),
                    ),
                      n[1][3].add(o(0, e, ge.isFunction(t) ? t : u)),
                      n[2][3].add(o(0, e, ge.isFunction(r) ? r : c));
                  })
                  .promise();
              },
              promise: function (e) {
                return null != e ? ge.extend(e, i) : i;
              },
            },
            o = {};
          return (
            ge.each(n, function (e, t) {
              var s = t[2],
                a = t[5];
              (i[t[1]] = s.add),
                a &&
                  s.add(
                    function () {
                      r = a;
                    },
                    n[3 - e][2].disable,
                    n[0][2].lock,
                  ),
                s.add(t[3].fire),
                (o[t[0]] = function () {
                  return (
                    o[t[0] + 'With'](this === o ? undefined : this, arguments),
                    this
                  );
                }),
                (o[t[0] + 'With'] = s.fireWith);
            }),
            i.promise(o),
            t && t.call(o, o),
            o
          );
        },
        when: function (e) {
          var t = arguments.length,
            n = t,
            r = Array(n),
            i = ie.call(arguments),
            o = ge.Deferred(),
            s = function (e) {
              return function (n) {
                (r[e] = this),
                  (i[e] = arguments.length > 1 ? ie.call(arguments) : n),
                  --t || o.resolveWith(r, i);
              };
            };
          if (
            t <= 1 &&
            (l(e, o.done(s(n)).resolve, o.reject, !t),
            'pending' === o.state() || ge.isFunction(i[n] && i[n].then))
          )
            return o.then();
          for (; n--; ) l(i[n], s(n), o.reject);
          return o.promise();
        },
      });
    var Ne = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (ge.Deferred.exceptionHook = function (t, n) {
      e.console &&
        e.console.warn &&
        t &&
        Ne.test(t.name) &&
        e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n);
    }),
      (ge.readyException = function (t) {
        e.setTimeout(function () {
          throw t;
        });
      });
    var qe = ge.Deferred();
    (ge.fn.ready = function (e) {
      return (
        qe.then(e)['catch'](function (e) {
          ge.readyException(e);
        }),
        this
      );
    }),
      ge.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (!0 === e ? --ge.readyWait : ge.isReady) ||
            ((ge.isReady = !0),
            (!0 !== e && --ge.readyWait > 0) || qe.resolveWith(ne, [ge]));
        },
      }),
      (ge.ready.then = qe.then),
      'complete' === ne.readyState ||
      ('loading' !== ne.readyState && !ne.documentElement.doScroll)
        ? e.setTimeout(ge.ready)
        : (ne.addEventListener('DOMContentLoaded', f),
          e.addEventListener('load', f));
    var Oe = function (e, t, n, r, i, o, s) {
        var a = 0,
          u = e.length,
          c = null == n;
        if ('object' === ge.type(n)) {
          i = !0;
          for (a in n) Oe(e, t, a, n[a], !0, o, s);
        } else if (
          r !== undefined &&
          ((i = !0),
          ge.isFunction(r) || (s = !0),
          c &&
            (s
              ? (t.call(e, r), (t = null))
              : ((c = t),
                (t = function (e, t, n) {
                  return c.call(ge(e), n);
                }))),
          t)
        )
          for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : c ? t.call(e) : u ? t(e[0], n) : o;
      },
      He = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
    (d.uid = 1),
      (d.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              He(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var r,
            i = this.cache(e);
          if ('string' == typeof t) i[ge.camelCase(t)] = n;
          else for (r in t) i[ge.camelCase(r)] = t[r];
          return i;
        },
        get: function (e, t) {
          return t === undefined
            ? this.cache(e)
            : e[this.expando] && e[this.expando][ge.camelCase(t)];
        },
        access: function (e, t, n) {
          return t === undefined ||
            (t && 'string' == typeof t && n === undefined)
            ? this.get(e, t)
            : (this.set(e, t, n), n !== undefined ? n : t);
        },
        remove: function (e, t) {
          var n,
            r = e[this.expando];
          if (r !== undefined) {
            if (t !== undefined) {
              Array.isArray(t)
                ? (t = t.map(ge.camelCase))
                : ((t = ge.camelCase(t)),
                  (t = t in r ? [t] : t.match(De) || [])),
                (n = t.length);
              for (; n--; ) delete r[t[n]];
            }
            (t === undefined || ge.isEmptyObject(r)) &&
              (e.nodeType
                ? (e[this.expando] = undefined)
                : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return t !== undefined && !ge.isEmptyObject(t);
        },
      });
    var Fe = new d(),
      Pe = new d(),
      Re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      $e = /[A-Z]/g;
    ge.extend({
      hasData: function (e) {
        return Pe.hasData(e) || Fe.hasData(e);
      },
      data: function (e, t, n) {
        return Pe.access(e, t, n);
      },
      removeData: function (e, t) {
        Pe.remove(e, t);
      },
      _data: function (e, t, n) {
        return Fe.access(e, t, n);
      },
      _removeData: function (e, t) {
        Fe.remove(e, t);
      },
    }),
      ge.fn.extend({
        data: function (e, t) {
          var n,
            r,
            i,
            o = this[0],
            s = o && o.attributes;
          if (e === undefined) {
            if (
              this.length &&
              ((i = Pe.get(o)), 1 === o.nodeType && !Fe.get(o, 'hasDataAttrs'))
            ) {
              for (n = s.length; n--; )
                s[n] &&
                  ((r = s[n].name),
                  0 === r.indexOf('data-') &&
                    ((r = ge.camelCase(r.slice(5))), h(o, r, i[r])));
              Fe.set(o, 'hasDataAttrs', !0);
            }
            return i;
          }
          return 'object' == typeof e
            ? this.each(function () {
                Pe.set(this, e);
              })
            : Oe(
                this,
                function (t) {
                  var n;
                  if (o && t === undefined) {
                    if ((n = Pe.get(o, e)) !== undefined) return n;
                    if ((n = h(o, e)) !== undefined) return n;
                  } else
                    this.each(function () {
                      Pe.set(this, e, t);
                    });
                },
                null,
                t,
                arguments.length > 1,
                null,
                !0,
              );
        },
        removeData: function (e) {
          return this.each(function () {
            Pe.remove(this, e);
          });
        },
      }),
      ge.extend({
        queue: function (e, t, n) {
          var r;
          if (e)
            return (
              (t = (t || 'fx') + 'queue'),
              (r = Fe.get(e, t)),
              n &&
                (!r || Array.isArray(n)
                  ? (r = Fe.access(e, t, ge.makeArray(n)))
                  : r.push(n)),
              r || []
            );
        },
        dequeue: function (e, t) {
          t = t || 'fx';
          var n = ge.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = ge._queueHooks(e, t),
            s = function () {
              ge.dequeue(e, t);
            };
          'inprogress' === i && ((i = n.shift()), r--),
            i &&
              ('fx' === t && n.unshift('inprogress'),
              delete o.stop,
              i.call(e, s, o)),
            !r && o && o.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + 'queueHooks';
          return (
            Fe.get(e, n) ||
            Fe.access(e, n, {
              empty: ge.Callbacks('once memory').add(function () {
                Fe.remove(e, [t + 'queue', n]);
              }),
            })
          );
        },
      }),
      ge.fn.extend({
        queue: function (e, t) {
          var n = 2;
          return (
            'string' != typeof e && ((t = e), (e = 'fx'), n--),
            arguments.length < n
              ? ge.queue(this[0], e)
              : t === undefined
                ? this
                : this.each(function () {
                    var n = ge.queue(this, e, t);
                    ge._queueHooks(this, e),
                      'fx' === e &&
                        'inprogress' !== n[0] &&
                        ge.dequeue(this, e);
                  })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            ge.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || 'fx', []);
        },
        promise: function (e, t) {
          var n,
            r = 1,
            i = ge.Deferred(),
            o = this,
            s = this.length,
            a = function () {
              --r || i.resolveWith(o, [o]);
            };
          for (
            'string' != typeof e && ((t = e), (e = undefined)), e = e || 'fx';
            s--;

          )
            (n = Fe.get(o[s], e + 'queueHooks')) &&
              n.empty &&
              (r++, n.empty.add(a));
          return a(), i.promise(t);
        },
      });
    var Ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Me = new RegExp('^(?:([+-])=|)(' + Ie + ')([a-z%]*)$', 'i'),
      We = ['Top', 'Right', 'Bottom', 'Left'],
      Be = function (e, t) {
        return (
          (e = t || e),
          'none' === e.style.display ||
            ('' === e.style.display &&
              ge.contains(e.ownerDocument, e) &&
              'none' === ge.css(e, 'display'))
        );
      },
      _e = function (e, t, n, r) {
        var i,
          o,
          s = {};
        for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = s[o];
        return i;
      },
      Xe = {};
    ge.fn.extend({
      show: function () {
        return y(this, !0);
      },
      hide: function () {
        return y(this);
      },
      toggle: function (e) {
        return 'boolean' == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              Be(this) ? ge(this).show() : ge(this).hide();
            });
      },
    });
    var Ue = /^(?:checkbox|radio)$/i,
      ze = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      Ve = /^$|\/(?:java|ecma)script/i,
      Ye = {
        option: [1, "<select multiple='multiple'>", '</select>'],
        thead: [1, '<table>', '</table>'],
        col: [2, '<table><colgroup>', '</colgroup></table>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        _default: [0, '', ''],
      };
    (Ye.optgroup = Ye.option),
      (Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead),
      (Ye.th = Ye.td);
    var Qe = /<|&#?\w+;/;
    !(function () {
      var e = ne.createDocumentFragment(),
        t = e.appendChild(ne.createElement('div')),
        n = ne.createElement('input');
      n.setAttribute('type', 'radio'),
        n.setAttribute('checked', 'checked'),
        n.setAttribute('name', 't'),
        t.appendChild(n),
        (pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (t.innerHTML = '<textarea>x</textarea>'),
        (pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
    })();
    var Ge = ne.documentElement,
      Je = /^key/,
      Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ze = /^([^.]*)(?:\.(.+)|)/;
    (ge.event = {
      global: {},
      add: function (e, t, n, r, i) {
        var o,
          s,
          a,
          u,
          c,
          l,
          f,
          d,
          p,
          h,
          g,
          m = Fe.get(e);
        if (m)
          for (
            n.handler && ((o = n), (n = o.handler), (i = o.selector)),
              i && ge.find.matchesSelector(Ge, i),
              n.guid || (n.guid = ge.guid++),
              (u = m.events) || (u = m.events = {}),
              (s = m.handle) ||
                (s = m.handle =
                  function (t) {
                    return void 0 !== ge && ge.event.triggered !== t.type
                      ? ge.event.dispatch.apply(e, arguments)
                      : undefined;
                  }),
              t = (t || '').match(De) || [''],
              c = t.length;
            c--;

          )
            (a = Ze.exec(t[c]) || []),
              (p = g = a[1]),
              (h = (a[2] || '').split('.').sort()),
              p &&
                ((f = ge.event.special[p] || {}),
                (p = (i ? f.delegateType : f.bindType) || p),
                (f = ge.event.special[p] || {}),
                (l = ge.extend(
                  {
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ge.expr.match.needsContext.test(i),
                    namespace: h.join('.'),
                  },
                  o,
                )),
                (d = u[p]) ||
                  ((d = u[p] = []),
                  (d.delegateCount = 0),
                  (f.setup && !1 !== f.setup.call(e, r, h, s)) ||
                    (e.addEventListener && e.addEventListener(p, s))),
                f.add &&
                  (f.add.call(e, l),
                  l.handler.guid || (l.handler.guid = n.guid)),
                i ? d.splice(d.delegateCount++, 0, l) : d.push(l),
                (ge.event.global[p] = !0));
      },
      remove: function (e, t, n, r, i) {
        var o,
          s,
          a,
          u,
          c,
          l,
          f,
          d,
          p,
          h,
          g,
          m = Fe.hasData(e) && Fe.get(e);
        if (m && (u = m.events)) {
          for (t = (t || '').match(De) || [''], c = t.length; c--; )
            if (
              ((a = Ze.exec(t[c]) || []),
              (p = g = a[1]),
              (h = (a[2] || '').split('.').sort()),
              p)
            ) {
              for (
                f = ge.event.special[p] || {},
                  p = (r ? f.delegateType : f.bindType) || p,
                  d = u[p] || [],
                  a =
                    a[2] &&
                    new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                  s = o = d.length;
                o--;

              )
                (l = d[o]),
                  (!i && g !== l.origType) ||
                    (n && n.guid !== l.guid) ||
                    (a && !a.test(l.namespace)) ||
                    (r && r !== l.selector && ('**' !== r || !l.selector)) ||
                    (d.splice(o, 1),
                    l.selector && d.delegateCount--,
                    f.remove && f.remove.call(e, l));
              s &&
                !d.length &&
                ((f.teardown && !1 !== f.teardown.call(e, h, m.handle)) ||
                  ge.removeEvent(e, p, m.handle),
                delete u[p]);
            } else for (p in u) ge.event.remove(e, p + t[c], n, r, !0);
          ge.isEmptyObject(u) && Fe.remove(e, 'handle events');
        }
      },
      dispatch: function (e) {
        var t,
          n,
          r,
          i,
          o,
          s,
          a = ge.event.fix(e),
          u = new Array(arguments.length),
          c = (Fe.get(this, 'events') || {})[a.type] || [],
          l = ge.event.special[a.type] || {};
        for (u[0] = a, t = 1; t < arguments.length; t++) u[t] = arguments[t];
        if (
          ((a.delegateTarget = this),
          !l.preDispatch || !1 !== l.preDispatch.call(this, a))
        ) {
          for (
            s = ge.event.handlers.call(this, a, c), t = 0;
            (i = s[t++]) && !a.isPropagationStopped();

          )
            for (
              a.currentTarget = i.elem, n = 0;
              (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();

            )
              (a.rnamespace && !a.rnamespace.test(o.namespace)) ||
                ((a.handleObj = o),
                (a.data = o.data),
                (r = (
                  (ge.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, u)) !== undefined &&
                  !1 === (a.result = r) &&
                  (a.preventDefault(), a.stopPropagation()));
          return l.postDispatch && l.postDispatch.call(this, a), a.result;
        }
      },
      handlers: function (e, t) {
        var n,
          r,
          i,
          o,
          s,
          a = [],
          u = t.delegateCount,
          c = e.target;
        if (u && c.nodeType && !('click' === e.type && e.button >= 1))
          for (; c !== this; c = c.parentNode || this)
            if (1 === c.nodeType && ('click' !== e.type || !0 !== c.disabled)) {
              for (o = [], s = {}, n = 0; n < u; n++)
                (r = t[n]),
                  (i = r.selector + ' '),
                  s[i] === undefined &&
                    (s[i] = r.needsContext
                      ? ge(i, this).index(c) > -1
                      : ge.find(i, this, null, [c]).length),
                  s[i] && o.push(r);
              o.length && a.push({ elem: c, handlers: o });
            }
        return (
          (c = this),
          u < t.length && a.push({ elem: c, handlers: t.slice(u) }),
          a
        );
      },
      addProp: function (e, t) {
        Object.defineProperty(ge.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: ge.isFunction(t)
            ? function () {
                if (this.originalEvent) return t(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[e];
              },
          set: function (t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            });
          },
        });
      },
      fix: function (e) {
        return e[ge.expando] ? e : new ge.Event(e);
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            if (this !== C() && this.focus) return this.focus(), !1;
          },
          delegateType: 'focusin',
        },
        blur: {
          trigger: function () {
            if (this === C() && this.blur) return this.blur(), !1;
          },
          delegateType: 'focusout',
        },
        click: {
          trigger: function () {
            if ('checkbox' === this.type && this.click && i(this, 'input'))
              return this.click(), !1;
          },
          _default: function (e) {
            return i(e.target, 'a');
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            e.result !== undefined &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    }),
      (ge.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (ge.Event = function (e, t) {
        if (!(this instanceof ge.Event)) return new ge.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented ||
              (e.defaultPrevented === undefined && !1 === e.returnValue)
                ? w
                : T),
            (this.target =
              e.target && 3 === e.target.nodeType
                ? e.target.parentNode
                : e.target),
            (this.currentTarget = e.currentTarget),
            (this.relatedTarget = e.relatedTarget))
          : (this.type = e),
          t && ge.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || ge.now()),
          (this[ge.expando] = !0);
      }),
      (ge.Event.prototype = {
        constructor: ge.Event,
        isDefaultPrevented: T,
        isPropagationStopped: T,
        isImmediatePropagationStopped: T,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = w),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = w),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = w),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      ge.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: function (e) {
            var t = e.button;
            return null == e.which && Je.test(e.type)
              ? null != e.charCode
                ? e.charCode
                : e.keyCode
              : !e.which && t !== undefined && Ke.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                    ? 3
                    : 4 & t
                      ? 2
                      : 0
                : e.which;
          },
        },
        ge.event.addProp,
      ),
      ge.each(
        {
          mouseenter: 'mouseover',
          mouseleave: 'mouseout',
          pointerenter: 'pointerover',
          pointerleave: 'pointerout',
        },
        function (e, t) {
          ge.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              var n,
                r = this,
                i = e.relatedTarget,
                o = e.handleObj;
              return (
                (i && (i === r || ge.contains(r, i))) ||
                  ((e.type = o.origType),
                  (n = o.handler.apply(this, arguments)),
                  (e.type = t)),
                n
              );
            },
          };
        },
      ),
      ge.fn.extend({
        on: function (e, t, n, r) {
          return E(this, e, t, n, r);
        },
        one: function (e, t, n, r) {
          return E(this, e, t, n, r, 1);
        },
        off: function (e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj)
            return (
              (r = e.handleObj),
              ge(e.delegateTarget).off(
                r.namespace ? r.origType + '.' + r.namespace : r.origType,
                r.selector,
                r.handler,
              ),
              this
            );
          if ('object' == typeof e) {
            for (i in e) this.off(i, t, e[i]);
            return this;
          }
          return (
            (!1 !== t && 'function' != typeof t) || ((n = t), (t = undefined)),
            !1 === n && (n = T),
            this.each(function () {
              ge.event.remove(this, e, n, t);
            })
          );
        },
      });
    var et =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      tt = /<script|<style|<link/i,
      nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rt = /^true\/(.*)/,
      it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ge.extend({
      htmlPrefilter: function (e) {
        return e.replace(et, '<$1></$2>');
      },
      clone: function (e, t, n) {
        var r,
          i,
          o,
          s,
          a = e.cloneNode(!0),
          u = ge.contains(e.ownerDocument, e);
        if (
          !(
            pe.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            ge.isXMLDoc(e)
          )
        )
          for (s = v(a), o = v(e), r = 0, i = o.length; r < i; r++)
            L(o[r], s[r]);
        if (t)
          if (n)
            for (o = o || v(e), s = s || v(a), r = 0, i = o.length; r < i; r++)
              S(o[r], s[r]);
          else S(e, a);
        return (
          (s = v(a, 'script')), s.length > 0 && x(s, !u && v(e, 'script')), a
        );
      },
      cleanData: function (e) {
        for (
          var t, n, r, i = ge.event.special, o = 0;
          (n = e[o]) !== undefined;
          o++
        )
          if (He(n)) {
            if ((t = n[Fe.expando])) {
              if (t.events)
                for (r in t.events)
                  i[r] ? ge.event.remove(n, r) : ge.removeEvent(n, r, t.handle);
              n[Fe.expando] = undefined;
            }
            n[Pe.expando] && (n[Pe.expando] = undefined);
          }
      },
    }),
      ge.fn.extend({
        detach: function (e) {
          return N(this, e, !0);
        },
        remove: function (e) {
          return N(this, e);
        },
        text: function (e) {
          return Oe(
            this,
            function (e) {
              return e === undefined
                ? ge.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length,
          );
        },
        append: function () {
          return D(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              k(this, e).appendChild(e);
            }
          });
        },
        prepend: function () {
          return D(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = k(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return D(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return D(this, arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (ge.cleanData(v(e, !1)), (e.textContent = ''));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return ge.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return Oe(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                r = this.length;
              if (e === undefined && 1 === t.nodeType) return t.innerHTML;
              if (
                'string' == typeof e &&
                !tt.test(e) &&
                !Ye[(ze.exec(e) || ['', ''])[1].toLowerCase()]
              ) {
                e = ge.htmlPrefilter(e);
                try {
                  for (; n < r; n++)
                    (t = this[n] || {}),
                      1 === t.nodeType &&
                        (ge.cleanData(v(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length,
          );
        },
        replaceWith: function () {
          var e = [];
          return D(
            this,
            arguments,
            function (t) {
              var n = this.parentNode;
              ge.inArray(this, e) < 0 &&
                (ge.cleanData(v(this)), n && n.replaceChild(t, this));
            },
            e,
          );
        },
      }),
      ge.each(
        {
          appendTo: 'append',
          prependTo: 'prepend',
          insertBefore: 'before',
          insertAfter: 'after',
          replaceAll: 'replaceWith',
        },
        function (e, t) {
          ge.fn[e] = function (e) {
            for (var n, r = [], i = ge(e), o = i.length - 1, s = 0; s <= o; s++)
              (n = s === o ? this : this.clone(!0)),
                ge(i[s])[t](n),
                se.apply(r, n.get());
            return this.pushStack(r);
          };
        },
      );
    var ot = /^margin/,
      st = new RegExp('^(' + Ie + ')(?!px)[a-z%]+$', 'i'),
      at = function (t) {
        var n = t.ownerDocument.defaultView;
        return (n && n.opener) || (n = e), n.getComputedStyle(t);
      };
    !(function () {
      function t() {
        if (a) {
          (a.style.cssText =
            'box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%'),
            (a.innerHTML = ''),
            Ge.appendChild(s);
          var t = e.getComputedStyle(a);
          (n = '1%' !== t.top),
            (o = '2px' === t.marginLeft),
            (r = '4px' === t.width),
            (a.style.marginRight = '50%'),
            (i = '4px' === t.marginRight),
            Ge.removeChild(s),
            (a = null);
        }
      }
      var n,
        r,
        i,
        o,
        s = ne.createElement('div'),
        a = ne.createElement('div');
      a.style &&
        ((a.style.backgroundClip = 'content-box'),
        (a.cloneNode(!0).style.backgroundClip = ''),
        (pe.clearCloneStyle = 'content-box' === a.style.backgroundClip),
        (s.style.cssText =
          'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute'),
        s.appendChild(a),
        ge.extend(pe, {
          pixelPosition: function () {
            return t(), n;
          },
          boxSizingReliable: function () {
            return t(), r;
          },
          pixelMarginRight: function () {
            return t(), i;
          },
          reliableMarginLeft: function () {
            return t(), o;
          },
        }));
    })();
    var ut = /^(none|table(?!-c[ea]).+)/,
      ct = /^--/,
      lt = { position: 'absolute', visibility: 'hidden', display: 'block' },
      ft = { letterSpacing: '0', fontWeight: '400' },
      dt = ['Webkit', 'Moz', 'ms'],
      pt = ne.createElement('div').style;
    ge.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = q(e, 'opacity');
              return '' === n ? '1' : n;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: 'cssFloat' },
      style: function (e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i,
            o,
            s,
            a = ge.camelCase(t),
            u = ct.test(t),
            c = e.style;
          if (
            (u || (t = F(a)),
            (s = ge.cssHooks[t] || ge.cssHooks[a]),
            n === undefined)
          )
            return s && 'get' in s && (i = s.get(e, !1, r)) !== undefined
              ? i
              : c[t];
          (o = typeof n),
            'string' === o &&
              (i = Me.exec(n)) &&
              i[1] &&
              ((n = g(e, t, i)), (o = 'number')),
            null != n &&
              n === n &&
              ('number' === o &&
                (n += (i && i[3]) || (ge.cssNumber[a] ? '' : 'px')),
              pe.clearCloneStyle ||
                '' !== n ||
                0 !== t.indexOf('background') ||
                (c[t] = 'inherit'),
              (s && 'set' in s && (n = s.set(e, n, r)) === undefined) ||
                (u ? c.setProperty(t, n) : (c[t] = n)));
        }
      },
      css: function (e, t, n, r) {
        var i,
          o,
          s,
          a = ge.camelCase(t);
        return (
          ct.test(t) || (t = F(a)),
          (s = ge.cssHooks[t] || ge.cssHooks[a]),
          s && 'get' in s && (i = s.get(e, !0, n)),
          i === undefined && (i = q(e, t, r)),
          'normal' === i && t in ft && (i = ft[t]),
          '' === n || n
            ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
            : i
        );
      },
    }),
      ge.each(['height', 'width'], function (e, t) {
        ge.cssHooks[t] = {
          get: function (e, n, r) {
            if (n)
              return !ut.test(ge.css(e, 'display')) ||
                (e.getClientRects().length && e.getBoundingClientRect().width)
                ? $(e, t, r)
                : _e(e, lt, function () {
                    return $(e, t, r);
                  });
          },
          set: function (e, n, r) {
            var i,
              o = r && at(e),
              s =
                r &&
                R(e, t, r, 'border-box' === ge.css(e, 'boxSizing', !1, o), o);
            return (
              s &&
                (i = Me.exec(n)) &&
                'px' !== (i[3] || 'px') &&
                ((e.style[t] = n), (n = ge.css(e, t))),
              P(e, n, s)
            );
          },
        };
      }),
      (ge.cssHooks.marginLeft = O(pe.reliableMarginLeft, function (e, t) {
        if (t)
          return (
            (parseFloat(q(e, 'marginLeft')) ||
              e.getBoundingClientRect().left -
                _e(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + 'px'
          );
      })),
      ge.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
        (ge.cssHooks[e + t] = {
          expand: function (n) {
            for (
              var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n];
              r < 4;
              r++
            )
              i[e + We[r] + t] = o[r] || o[r - 2] || o[0];
            return i;
          },
        }),
          ot.test(e) || (ge.cssHooks[e + t].set = P);
      }),
      ge.fn.extend({
        css: function (e, t) {
          return Oe(
            this,
            function (e, t, n) {
              var r,
                i,
                o = {},
                s = 0;
              if (Array.isArray(t)) {
                for (r = at(e), i = t.length; s < i; s++)
                  o[t[s]] = ge.css(e, t[s], !1, r);
                return o;
              }
              return n !== undefined ? ge.style(e, t, n) : ge.css(e, t);
            },
            e,
            t,
            arguments.length > 1,
          );
        },
      }),
      (ge.Tween = I),
      (I.prototype = {
        constructor: I,
        init: function (e, t, n, r, i, o) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = i || ge.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = o || (ge.cssNumber[n] ? '' : 'px'));
        },
        cur: function () {
          var e = I.propHooks[this.prop];
          return e && e.get ? e.get(this) : I.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = I.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t =
                  ge.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration,
                  ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : I.propHooks._default.set(this),
            this
          );
        },
      }),
      (I.prototype.init.prototype = I.prototype),
      (I.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType ||
              (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : ((t = ge.css(e.elem, e.prop, '')), t && 'auto' !== t ? t : 0);
          },
          set: function (e) {
            ge.fx.step[e.prop]
              ? ge.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                  (null == e.elem.style[ge.cssProps[e.prop]] &&
                    !ge.cssHooks[e.prop])
                ? (e.elem[e.prop] = e.now)
                : ge.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }),
      (I.propHooks.scrollTop = I.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (ge.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: 'swing',
      }),
      (ge.fx = I.prototype.init),
      (ge.fx.step = {});
    var ht,
      gt,
      mt = /^(?:toggle|show|hide)$/,
      yt = /queueHooks$/;
    (ge.Animation = ge.extend(z, {
      tweeners: {
        '*': [
          function (e, t) {
            var n = this.createTween(e, t);
            return g(n.elem, e, Me.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        ge.isFunction(e) ? ((t = e), (e = ['*'])) : (e = e.match(De));
        for (var n, r = 0, i = e.length; r < i; r++)
          (n = e[r]),
            (z.tweeners[n] = z.tweeners[n] || []),
            z.tweeners[n].unshift(t);
      },
      prefilters: [X],
      prefilter: function (e, t) {
        t ? z.prefilters.unshift(e) : z.prefilters.push(e);
      },
    })),
      (ge.speed = function (e, t, n) {
        var r =
          e && 'object' == typeof e
            ? ge.extend({}, e)
            : {
                complete: n || (!n && t) || (ge.isFunction(e) && e),
                duration: e,
                easing: (n && t) || (t && !ge.isFunction(t) && t),
              };
        return (
          ge.fx.off
            ? (r.duration = 0)
            : 'number' != typeof r.duration &&
              (r.duration in ge.fx.speeds
                ? (r.duration = ge.fx.speeds[r.duration])
                : (r.duration = ge.fx.speeds._default)),
          (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
          (r.old = r.complete),
          (r.complete = function () {
            ge.isFunction(r.old) && r.old.call(this),
              r.queue && ge.dequeue(this, r.queue);
          }),
          r
        );
      }),
      ge.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(Be)
            .css('opacity', 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, r);
        },
        animate: function (e, t, n, r) {
          var i = ge.isEmptyObject(e),
            o = ge.speed(t, n, r),
            s = function () {
              var t = z(this, ge.extend({}, e), o);
              (i || Fe.get(this, 'finish')) && t.stop(!0);
            };
          return (
            (s.finish = s),
            i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
          );
        },
        stop: function (e, t, n) {
          var r = function (e) {
            var t = e.stop;
            delete e.stop, t(n);
          };
          return (
            'string' != typeof e && ((n = t), (t = e), (e = undefined)),
            t && !1 !== e && this.queue(e || 'fx', []),
            this.each(function () {
              var t = !0,
                i = null != e && e + 'queueHooks',
                o = ge.timers,
                s = Fe.get(this);
              if (i) s[i] && s[i].stop && r(s[i]);
              else for (i in s) s[i] && s[i].stop && yt.test(i) && r(s[i]);
              for (i = o.length; i--; )
                o[i].elem !== this ||
                  (null != e && o[i].queue !== e) ||
                  (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
              (!t && n) || ge.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            !1 !== e && (e = e || 'fx'),
            this.each(function () {
              var t,
                n = Fe.get(this),
                r = n[e + 'queue'],
                i = n[e + 'queueHooks'],
                o = ge.timers,
                s = r ? r.length : 0;
              for (
                n.finish = !0,
                  ge.queue(this, e, []),
                  i && i.stop && i.stop.call(this, !0),
                  t = o.length;
                t--;

              )
                o[t].elem === this &&
                  o[t].queue === e &&
                  (o[t].anim.stop(!0), o.splice(t, 1));
              for (t = 0; t < s; t++)
                r[t] && r[t].finish && r[t].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      ge.each(['toggle', 'show', 'hide'], function (e, t) {
        var n = ge.fn[t];
        ge.fn[t] = function (e, r, i) {
          return null == e || 'boolean' == typeof e
            ? n.apply(this, arguments)
            : this.animate(B(t, !0), e, r, i);
        };
      }),
      ge.each(
        {
          slideDown: B('show'),
          slideUp: B('hide'),
          slideToggle: B('toggle'),
          fadeIn: { opacity: 'show' },
          fadeOut: { opacity: 'hide' },
          fadeToggle: { opacity: 'toggle' },
        },
        function (e, t) {
          ge.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r);
          };
        },
      ),
      (ge.timers = []),
      (ge.fx.tick = function () {
        var e,
          t = 0,
          n = ge.timers;
        for (ht = ge.now(); t < n.length; t++)
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || ge.fx.stop(), (ht = undefined);
      }),
      (ge.fx.timer = function (e) {
        ge.timers.push(e), ge.fx.start();
      }),
      (ge.fx.interval = 13),
      (ge.fx.start = function () {
        gt || ((gt = !0), M());
      }),
      (ge.fx.stop = function () {
        gt = null;
      }),
      (ge.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (ge.fn.delay = function (t, n) {
        return (
          (t = ge.fx ? ge.fx.speeds[t] || t : t),
          (n = n || 'fx'),
          this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
              e.clearTimeout(i);
            };
          })
        );
      }),
      (function () {
        var e = ne.createElement('input'),
          t = ne.createElement('select'),
          n = t.appendChild(ne.createElement('option'));
        (e.type = 'checkbox'),
          (pe.checkOn = '' !== e.value),
          (pe.optSelected = n.selected),
          (e = ne.createElement('input')),
          (e.value = 't'),
          (e.type = 'radio'),
          (pe.radioValue = 't' === e.value);
      })();
    var vt,
      xt = ge.expr.attrHandle;
    ge.fn.extend({
      attr: function (e, t) {
        return Oe(this, ge.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          ge.removeAttr(this, e);
        });
      },
    }),
      ge.extend({
        attr: function (e, t, n) {
          var r,
            i,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return 'undefined' == typeof e.getAttribute
              ? ge.prop(e, t, n)
              : ((1 === o && ge.isXMLDoc(e)) ||
                  (i =
                    ge.attrHooks[t.toLowerCase()] ||
                    (ge.expr.match.bool.test(t) ? vt : undefined)),
                n !== undefined
                  ? null === n
                    ? void ge.removeAttr(e, t)
                    : i && 'set' in i && (r = i.set(e, n, t)) !== undefined
                      ? r
                      : (e.setAttribute(t, n + ''), n)
                  : i && 'get' in i && null !== (r = i.get(e, t))
                    ? r
                    : ((r = ge.find.attr(e, t)), null == r ? undefined : r));
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!pe.radioValue && 'radio' === t && i(e, 'input')) {
                var n = e.value;
                return e.setAttribute('type', t), n && (e.value = n), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            r = 0,
            i = t && t.match(De);
          if (i && 1 === e.nodeType)
            for (; (n = i[r++]); ) e.removeAttribute(n);
        },
      }),
      (vt = {
        set: function (e, t, n) {
          return !1 === t ? ge.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      ge.each(ge.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = xt[t] || ge.find.attr;
        xt[t] = function (e, t, r) {
          var i,
            o,
            s = t.toLowerCase();
          return (
            r ||
              ((o = xt[s]),
              (xt[s] = i),
              (i = null != n(e, t, r) ? s : null),
              (xt[s] = o)),
            i
          );
        };
      });
    var bt = /^(?:input|select|textarea|button)$/i,
      wt = /^(?:a|area)$/i;
    ge.fn.extend({
      prop: function (e, t) {
        return Oe(this, ge.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[ge.propFix[e] || e];
        });
      },
    }),
      ge.extend({
        prop: function (e, t, n) {
          var r,
            i,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return (
              (1 === o && ge.isXMLDoc(e)) ||
                ((t = ge.propFix[t] || t), (i = ge.propHooks[t])),
              n !== undefined
                ? i && 'set' in i && (r = i.set(e, n, t)) !== undefined
                  ? r
                  : (e[t] = n)
                : i && 'get' in i && null !== (r = i.get(e, t))
                  ? r
                  : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = ge.find.attr(e, 'tabindex');
              return t
                ? parseInt(t, 10)
                : bt.test(e.nodeName) || (wt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
            },
          },
        },
        propFix: { for: 'htmlFor', class: 'className' },
      }),
      pe.optSelected ||
        (ge.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      ge.each(
        [
          'tabIndex',
          'readOnly',
          'maxLength',
          'cellSpacing',
          'cellPadding',
          'rowSpan',
          'colSpan',
          'useMap',
          'frameBorder',
          'contentEditable',
        ],
        function () {
          ge.propFix[this.toLowerCase()] = this;
        },
      ),
      ge.fn.extend({
        addClass: function (e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            a,
            u = 0;
          if (ge.isFunction(e))
            return this.each(function (t) {
              ge(this).addClass(e.call(this, t, Y(this)));
            });
          if ('string' == typeof e && e)
            for (t = e.match(De) || []; (n = this[u++]); )
              if (((i = Y(n)), (r = 1 === n.nodeType && ' ' + V(i) + ' '))) {
                for (s = 0; (o = t[s++]); )
                  r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
                (a = V(r)), i !== a && n.setAttribute('class', a);
              }
          return this;
        },
        removeClass: function (e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            a,
            u = 0;
          if (ge.isFunction(e))
            return this.each(function (t) {
              ge(this).removeClass(e.call(this, t, Y(this)));
            });
          if (!arguments.length) return this.attr('class', '');
          if ('string' == typeof e && e)
            for (t = e.match(De) || []; (n = this[u++]); )
              if (((i = Y(n)), (r = 1 === n.nodeType && ' ' + V(i) + ' '))) {
                for (s = 0; (o = t[s++]); )
                  for (; r.indexOf(' ' + o + ' ') > -1; )
                    r = r.replace(' ' + o + ' ', ' ');
                (a = V(r)), i !== a && n.setAttribute('class', a);
              }
          return this;
        },
        toggleClass: function (e, t) {
          var n = typeof e;
          return 'boolean' == typeof t && 'string' === n
            ? t
              ? this.addClass(e)
              : this.removeClass(e)
            : ge.isFunction(e)
              ? this.each(function (n) {
                  ge(this).toggleClass(e.call(this, n, Y(this), t), t);
                })
              : this.each(function () {
                  var t, r, i, o;
                  if ('string' === n)
                    for (
                      r = 0, i = ge(this), o = e.match(De) || [];
                      (t = o[r++]);

                    )
                      i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                  else
                    (e !== undefined && 'boolean' !== n) ||
                      ((t = Y(this)),
                      t && Fe.set(this, '__className__', t),
                      this.setAttribute &&
                        this.setAttribute(
                          'class',
                          t || !1 === e
                            ? ''
                            : Fe.get(this, '__className__') || '',
                        ));
                });
        },
        hasClass: function (e) {
          var t,
            n,
            r = 0;
          for (t = ' ' + e + ' '; (n = this[r++]); )
            if (1 === n.nodeType && (' ' + V(Y(n)) + ' ').indexOf(t) > -1)
              return !0;
          return !1;
        },
      });
    var Tt = /\r/g;
    ge.fn.extend({
      val: function (e) {
        var t,
          n,
          r,
          i = this[0];
        {
          if (arguments.length)
            return (
              (r = ge.isFunction(e)),
              this.each(function (n) {
                var i;
                1 === this.nodeType &&
                  ((i = r ? e.call(this, n, ge(this).val()) : e),
                  null == i
                    ? (i = '')
                    : 'number' == typeof i
                      ? (i += '')
                      : Array.isArray(i) &&
                        (i = ge.map(i, function (e) {
                          return null == e ? '' : e + '';
                        })),
                  ((t =
                    ge.valHooks[this.type] ||
                    ge.valHooks[this.nodeName.toLowerCase()]) &&
                    'set' in t &&
                    t.set(this, i, 'value') !== undefined) ||
                    (this.value = i));
              })
            );
          if (i)
            return (t =
              ge.valHooks[i.type] || ge.valHooks[i.nodeName.toLowerCase()]) &&
              'get' in t &&
              (n = t.get(i, 'value')) !== undefined
              ? n
              : ((n = i.value),
                'string' == typeof n ? n.replace(Tt, '') : null == n ? '' : n);
        }
      },
    }),
      ge.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = ge.find.attr(e, 'value');
              return null != t ? t : V(ge.text(e));
            },
          },
          select: {
            get: function (e) {
              var t,
                n,
                r,
                o = e.options,
                s = e.selectedIndex,
                a = 'select-one' === e.type,
                u = a ? null : [],
                c = a ? s + 1 : o.length;
              for (r = s < 0 ? c : a ? s : 0; r < c; r++)
                if (
                  ((n = o[r]),
                  (n.selected || r === s) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !i(n.parentNode, 'optgroup')))
                ) {
                  if (((t = ge(n).val()), a)) return t;
                  u.push(t);
                }
              return u;
            },
            set: function (e, t) {
              for (
                var n, r, i = e.options, o = ge.makeArray(t), s = i.length;
                s--;

              )
                (r = i[s]),
                  (r.selected =
                    ge.inArray(ge.valHooks.option.get(r), o) > -1) && (n = !0);
              return n || (e.selectedIndex = -1), o;
            },
          },
        },
      }),
      ge.each(['radio', 'checkbox'], function () {
        (ge.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t))
              return (e.checked = ge.inArray(ge(e).val(), t) > -1);
          },
        }),
          pe.checkOn ||
            (ge.valHooks[this].get = function (e) {
              return null === e.getAttribute('value') ? 'on' : e.value;
            });
      });
    var Ct = /^(?:focusinfocus|focusoutblur)$/;
    ge.extend(ge.event, {
      trigger: function (t, n, r, i) {
        var o,
          s,
          a,
          u,
          c,
          l,
          f,
          d = [r || ne],
          p = le.call(t, 'type') ? t.type : t,
          h = le.call(t, 'namespace') ? t.namespace.split('.') : [];
        if (
          ((s = a = r = r || ne),
          3 !== r.nodeType &&
            8 !== r.nodeType &&
            !Ct.test(p + ge.event.triggered) &&
            (p.indexOf('.') > -1 &&
              ((h = p.split('.')), (p = h.shift()), h.sort()),
            (c = p.indexOf(':') < 0 && 'on' + p),
            (t = t[ge.expando]
              ? t
              : new ge.Event(p, 'object' == typeof t && t)),
            (t.isTrigger = i ? 2 : 3),
            (t.namespace = h.join('.')),
            (t.rnamespace = t.namespace
              ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')
              : null),
            (t.result = undefined),
            t.target || (t.target = r),
            (n = null == n ? [t] : ge.makeArray(n, [t])),
            (f = ge.event.special[p] || {}),
            i || !f.trigger || !1 !== f.trigger.apply(r, n)))
        ) {
          if (!i && !f.noBubble && !ge.isWindow(r)) {
            for (
              u = f.delegateType || p, Ct.test(u + p) || (s = s.parentNode);
              s;
              s = s.parentNode
            )
              d.push(s), (a = s);
            a === (r.ownerDocument || ne) &&
              d.push(a.defaultView || a.parentWindow || e);
          }
          for (o = 0; (s = d[o++]) && !t.isPropagationStopped(); )
            (t.type = o > 1 ? u : f.bindType || p),
              (l = (Fe.get(s, 'events') || {})[t.type] && Fe.get(s, 'handle')),
              l && l.apply(s, n),
              (l = c && s[c]) &&
                l.apply &&
                He(s) &&
                ((t.result = l.apply(s, n)),
                !1 === t.result && t.preventDefault());
          return (
            (t.type = p),
            i ||
              t.isDefaultPrevented() ||
              (f._default && !1 !== f._default.apply(d.pop(), n)) ||
              !He(r) ||
              (c &&
                ge.isFunction(r[p]) &&
                !ge.isWindow(r) &&
                ((a = r[c]),
                a && (r[c] = null),
                (ge.event.triggered = p),
                r[p](),
                (ge.event.triggered = undefined),
                a && (r[c] = a))),
            t.result
          );
        }
      },
      simulate: function (e, t, n) {
        var r = ge.extend(new ge.Event(), n, { type: e, isSimulated: !0 });
        ge.event.trigger(r, null, t);
      },
    }),
      ge.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            ge.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return ge.event.trigger(e, t, n, !0);
        },
      }),
      ge.each(
        'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
          ' ',
        ),
        function (e, t) {
          ge.fn[t] = function (e, n) {
            return arguments.length > 0
              ? this.on(t, null, e, n)
              : this.trigger(t);
          };
        },
      ),
      ge.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      (pe.focusin = 'onfocusin' in e),
      pe.focusin ||
        ge.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
          var n = function (e) {
            ge.event.simulate(t, e.target, ge.event.fix(e));
          };
          ge.event.special[t] = {
            setup: function () {
              var r = this.ownerDocument || this,
                i = Fe.access(r, t);
              i || r.addEventListener(e, n, !0), Fe.access(r, t, (i || 0) + 1);
            },
            teardown: function () {
              var r = this.ownerDocument || this,
                i = Fe.access(r, t) - 1;
              i
                ? Fe.access(r, t, i)
                : (r.removeEventListener(e, n, !0), Fe.remove(r, t));
            },
          };
        });
    var Et = e.location,
      kt = ge.now(),
      jt = /\?/;
    ge.parseXML = function (t) {
      var n;
      if (!t || 'string' != typeof t) return null;
      try {
        n = new e.DOMParser().parseFromString(t, 'text/xml');
      } catch (e) {
        n = undefined;
      }
      return (
        (n && !n.getElementsByTagName('parsererror').length) ||
          ge.error('Invalid XML: ' + t),
        n
      );
    };
    var At = /\[\]$/,
      St = /\r?\n/g,
      Lt = /^(?:submit|button|image|reset|file)$/i,
      Dt = /^(?:input|select|textarea|keygen)/i;
    (ge.param = function (e, t) {
      var n,
        r = [],
        i = function (e, t) {
          var n = ge.isFunction(t) ? t() : t;
          r[r.length] =
            encodeURIComponent(e) +
            '=' +
            encodeURIComponent(null == n ? '' : n);
        };
      if (Array.isArray(e) || (e.jquery && !ge.isPlainObject(e)))
        ge.each(e, function () {
          i(this.name, this.value);
        });
      else for (n in e) Q(n, e[n], t, i);
      return r.join('&');
    }),
      ge.fn.extend({
        serialize: function () {
          return ge.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = ge.prop(this, 'elements');
            return e ? ge.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !ge(this).is(':disabled') &&
                Dt.test(this.nodeName) &&
                !Lt.test(e) &&
                (this.checked || !Ue.test(e))
              );
            })
            .map(function (e, t) {
              var n = ge(this).val();
              return null == n
                ? null
                : Array.isArray(n)
                  ? ge.map(n, function (e) {
                      return { name: t.name, value: e.replace(St, '\r\n') };
                    })
                  : { name: t.name, value: n.replace(St, '\r\n') };
            })
            .get();
        },
      });
    var Nt = /%20/g,
      qt = /#.*$/,
      Ot = /([?&])_=[^&]*/,
      Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Pt = /^(?:GET|HEAD)$/,
      Rt = /^\/\//,
      $t = {},
      It = {},
      Mt = '*/'.concat('*'),
      Wt = ne.createElement('a');
    (Wt.href = Et.href),
      ge.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Et.href,
          type: 'GET',
          isLocal: Ft.test(Et.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          accepts: {
            '*': Mt,
            text: 'text/plain',
            html: 'text/html',
            xml: 'application/xml, text/xml',
            json: 'application/json, text/javascript',
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: 'responseXML',
            text: 'responseText',
            json: 'responseJSON',
          },
          converters: {
            '* text': String,
            'text html': !0,
            'text json': JSON.parse,
            'text xml': ge.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? K(K(e, ge.ajaxSettings), t) : K(ge.ajaxSettings, e);
        },
        ajaxPrefilter: G($t),
        ajaxTransport: G(It),
        ajax: function (t, n) {
          function r(t, n, r, a) {
            var c,
              d,
              p,
              b,
              w,
              T = n;
            l ||
              ((l = !0),
              u && e.clearTimeout(u),
              (i = undefined),
              (s = a || ''),
              (C.readyState = t > 0 ? 4 : 0),
              (c = (t >= 200 && t < 300) || 304 === t),
              r && (b = Z(h, C, r)),
              (b = ee(h, b, C, c)),
              c
                ? (h.ifModified &&
                    ((w = C.getResponseHeader('Last-Modified')),
                    w && (ge.lastModified[o] = w),
                    (w = C.getResponseHeader('etag')) && (ge.etag[o] = w)),
                  204 === t || 'HEAD' === h.type
                    ? (T = 'nocontent')
                    : 304 === t
                      ? (T = 'notmodified')
                      : ((T = b.state), (d = b.data), (p = b.error), (c = !p)))
                : ((p = T), (!t && T) || ((T = 'error'), t < 0 && (t = 0))),
              (C.status = t),
              (C.statusText = (n || T) + ''),
              c ? y.resolveWith(g, [d, T, C]) : y.rejectWith(g, [C, T, p]),
              C.statusCode(x),
              (x = undefined),
              f &&
                m.trigger(c ? 'ajaxSuccess' : 'ajaxError', [C, h, c ? d : p]),
              v.fireWith(g, [C, T]),
              f &&
                (m.trigger('ajaxComplete', [C, h]),
                --ge.active || ge.event.trigger('ajaxStop')));
          }
          'object' == typeof t && ((n = t), (t = undefined)), (n = n || {});
          var i,
            o,
            s,
            a,
            u,
            c,
            l,
            f,
            d,
            p,
            h = ge.ajaxSetup({}, n),
            g = h.context || h,
            m = h.context && (g.nodeType || g.jquery) ? ge(g) : ge.event,
            y = ge.Deferred(),
            v = ge.Callbacks('once memory'),
            x = h.statusCode || {},
            b = {},
            w = {},
            T = 'canceled',
            C = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (l) {
                  if (!a)
                    for (a = {}; (t = Ht.exec(s)); )
                      a[t[1].toLowerCase()] = t[2];
                  t = a[e.toLowerCase()];
                }
                return null == t ? null : t;
              },
              getAllResponseHeaders: function () {
                return l ? s : null;
              },
              setRequestHeader: function (e, t) {
                return (
                  null == l &&
                    ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                    (b[e] = t)),
                  this
                );
              },
              overrideMimeType: function (e) {
                return null == l && (h.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (l) C.always(e[C.status]);
                  else for (t in e) x[t] = [x[t], e[t]];
                return this;
              },
              abort: function (e) {
                var t = e || T;
                return i && i.abort(t), r(0, t), this;
              },
            };
          if (
            (y.promise(C),
            (h.url = ((t || h.url || Et.href) + '').replace(
              Rt,
              Et.protocol + '//',
            )),
            (h.type = n.method || n.type || h.method || h.type),
            (h.dataTypes = (h.dataType || '*').toLowerCase().match(De) || ['']),
            null == h.crossDomain)
          ) {
            c = ne.createElement('a');
            try {
              (c.href = h.url),
                (c.href = c.href),
                (h.crossDomain =
                  Wt.protocol + '//' + Wt.host != c.protocol + '//' + c.host);
            } catch (e) {
              h.crossDomain = !0;
            }
          }
          if (
            (h.data &&
              h.processData &&
              'string' != typeof h.data &&
              (h.data = ge.param(h.data, h.traditional)),
            J($t, h, n, C),
            l)
          )
            return C;
          (f = ge.event && h.global),
            f && 0 == ge.active++ && ge.event.trigger('ajaxStart'),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !Pt.test(h.type)),
            (o = h.url.replace(qt, '')),
            h.hasContent
              ? h.data &&
                h.processData &&
                0 ===
                  (h.contentType || '').indexOf(
                    'application/x-www-form-urlencoded',
                  ) &&
                (h.data = h.data.replace(Nt, '+'))
              : ((p = h.url.slice(o.length)),
                h.data &&
                  ((o += (jt.test(o) ? '&' : '?') + h.data), delete h.data),
                !1 === h.cache &&
                  ((o = o.replace(Ot, '$1')),
                  (p = (jt.test(o) ? '&' : '?') + '_=' + kt++ + p)),
                (h.url = o + p)),
            h.ifModified &&
              (ge.lastModified[o] &&
                C.setRequestHeader('If-Modified-Since', ge.lastModified[o]),
              ge.etag[o] && C.setRequestHeader('If-None-Match', ge.etag[o])),
            ((h.data && h.hasContent && !1 !== h.contentType) ||
              n.contentType) &&
              C.setRequestHeader('Content-Type', h.contentType),
            C.setRequestHeader(
              'Accept',
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                    ('*' !== h.dataTypes[0] ? ', ' + Mt + '; q=0.01' : '')
                : h.accepts['*'],
            );
          for (d in h.headers) C.setRequestHeader(d, h.headers[d]);
          if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || l))
            return C.abort();
          if (
            ((T = 'abort'),
            v.add(h.complete),
            C.done(h.success),
            C.fail(h.error),
            (i = J(It, h, n, C)))
          ) {
            if (((C.readyState = 1), f && m.trigger('ajaxSend', [C, h]), l))
              return C;
            h.async &&
              h.timeout > 0 &&
              (u = e.setTimeout(function () {
                C.abort('timeout');
              }, h.timeout));
            try {
              (l = !1), i.send(b, r);
            } catch (e) {
              if (l) throw e;
              r(-1, e);
            }
          } else r(-1, 'No Transport');
          return C;
        },
        getJSON: function (e, t, n) {
          return ge.get(e, t, n, 'json');
        },
        getScript: function (e, t) {
          return ge.get(e, undefined, t, 'script');
        },
      }),
      ge.each(['get', 'post'], function (e, t) {
        ge[t] = function (e, n, r, i) {
          return (
            ge.isFunction(n) && ((i = i || r), (r = n), (n = undefined)),
            ge.ajax(
              ge.extend(
                { url: e, type: t, dataType: i, data: n, success: r },
                ge.isPlainObject(e) && e,
              ),
            )
          );
        };
      }),
      (ge._evalUrl = function (e) {
        return ge.ajax({
          url: e,
          type: 'GET',
          dataType: 'script',
          cache: !0,
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      ge.fn.extend({
        wrapAll: function (e) {
          var t;
          return (
            this[0] &&
              (ge.isFunction(e) && (e = e.call(this[0])),
              (t = ge(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (e) {
          return ge.isFunction(e)
            ? this.each(function (t) {
                ge(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                var t = ge(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
        },
        wrap: function (e) {
          var t = ge.isFunction(e);
          return this.each(function (n) {
            ge(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function (e) {
          return (
            this.parent(e)
              .not('body')
              .each(function () {
                ge(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (ge.expr.pseudos.hidden = function (e) {
        return !ge.expr.pseudos.visible(e);
      }),
      (ge.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (ge.ajaxSettings.xhr = function () {
        try {
          return new e.XMLHttpRequest();
        } catch (e) {}
      });
    var Bt = { 0: 200, 1223: 204 },
      _t = ge.ajaxSettings.xhr();
    (pe.cors = !!_t && 'withCredentials' in _t),
      (pe.ajax = _t = !!_t),
      ge.ajaxTransport(function (t) {
        var n, r;
        if (pe.cors || (_t && !t.crossDomain))
          return {
            send: function (i, o) {
              var s,
                a = t.xhr();
              if (
                (a.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
              )
                for (s in t.xhrFields) a[s] = t.xhrFields[s];
              t.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  i['X-Requested-With'] ||
                  (i['X-Requested-With'] = 'XMLHttpRequest');
              for (s in i) a.setRequestHeader(s, i[s]);
              (n = function (e) {
                return function () {
                  n &&
                    ((n =
                      r =
                      a.onload =
                      a.onerror =
                      a.onabort =
                      a.onreadystatechange =
                        null),
                    'abort' === e
                      ? a.abort()
                      : 'error' === e
                        ? 'number' != typeof a.status
                          ? o(0, 'error')
                          : o(a.status, a.statusText)
                        : o(
                            Bt[a.status] || a.status,
                            a.statusText,
                            'text' !== (a.responseType || 'text') ||
                              'string' != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders(),
                          ));
                };
              }),
                (a.onload = n()),
                (r = a.onerror = n('error')),
                a.onabort !== undefined
                  ? (a.onabort = r)
                  : (a.onreadystatechange = function () {
                      4 === a.readyState &&
                        e.setTimeout(function () {
                          n && r();
                        });
                    }),
                (n = n('abort'));
              try {
                a.send((t.hasContent && t.data) || null);
              } catch (e) {
                if (n) throw e;
              }
            },
            abort: function () {
              n && n();
            },
          };
      }),
      ge.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      ge.ajaxSetup({
        accepts: {
          script:
            'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          'text script': function (e) {
            return ge.globalEval(e), e;
          },
        },
      }),
      ge.ajaxPrefilter('script', function (e) {
        e.cache === undefined && (e.cache = !1),
          e.crossDomain && (e.type = 'GET');
      }),
      ge.ajaxTransport('script', function (e) {
        if (e.crossDomain) {
          var t, n;
          return {
            send: function (r, i) {
              (t = ge('<script>')
                .prop({ charset: e.scriptCharset, src: e.url })
                .on(
                  'load error',
                  (n = function (e) {
                    t.remove(),
                      (n = null),
                      e && i('error' === e.type ? 404 : 200, e.type);
                  }),
                )),
                ne.head.appendChild(t[0]);
            },
            abort: function () {
              n && n();
            },
          };
        }
      });
    var Xt = [],
      Ut = /(=)\?(?=&|$)|\?\?/;
    ge.ajaxSetup({
      jsonp: 'callback',
      jsonpCallback: function () {
        var e = Xt.pop() || ge.expando + '_' + kt++;
        return (this[e] = !0), e;
      },
    }),
      ge.ajaxPrefilter('json jsonp', function (t, n, r) {
        var i,
          o,
          s,
          a =
            !1 !== t.jsonp &&
            (Ut.test(t.url)
              ? 'url'
              : 'string' == typeof t.data &&
                0 ===
                  (t.contentType || '').indexOf(
                    'application/x-www-form-urlencoded',
                  ) &&
                Ut.test(t.data) &&
                'data');
        if (a || 'jsonp' === t.dataTypes[0])
          return (
            (i = t.jsonpCallback =
              ge.isFunction(t.jsonpCallback)
                ? t.jsonpCallback()
                : t.jsonpCallback),
            a
              ? (t[a] = t[a].replace(Ut, '$1' + i))
              : !1 !== t.jsonp &&
                (t.url += (jt.test(t.url) ? '&' : '?') + t.jsonp + '=' + i),
            (t.converters['script json'] = function () {
              return s || ge.error(i + ' was not called'), s[0];
            }),
            (t.dataTypes[0] = 'json'),
            (o = e[i]),
            (e[i] = function () {
              s = arguments;
            }),
            r.always(function () {
              o === undefined ? ge(e).removeProp(i) : (e[i] = o),
                t[i] && ((t.jsonpCallback = n.jsonpCallback), Xt.push(i)),
                s && ge.isFunction(o) && o(s[0]),
                (s = o = undefined);
            }),
            'script'
          );
      }),
      (pe.createHTMLDocument = (function () {
        var e = ne.implementation.createHTMLDocument('').body;
        return (
          (e.innerHTML = '<form></form><form></form>'),
          2 === e.childNodes.length
        );
      })()),
      (ge.parseHTML = function (e, t, n) {
        if ('string' != typeof e) return [];
        'boolean' == typeof t && ((n = t), (t = !1));
        var r, i, o;
        return (
          t ||
            (pe.createHTMLDocument
              ? ((t = ne.implementation.createHTMLDocument('')),
                (r = t.createElement('base')),
                (r.href = ne.location.href),
                t.head.appendChild(r))
              : (t = ne)),
          (i = Ee.exec(e)),
          (o = !n && []),
          i
            ? [t.createElement(i[1])]
            : ((i = b([e], t, o)),
              o && o.length && ge(o).remove(),
              ge.merge([], i.childNodes))
        );
      }),
      (ge.fn.load = function (e, t, n) {
        var r,
          i,
          o,
          s = this,
          a = e.indexOf(' ');
        return (
          a > -1 && ((r = V(e.slice(a))), (e = e.slice(0, a))),
          ge.isFunction(t)
            ? ((n = t), (t = undefined))
            : t && 'object' == typeof t && (i = 'POST'),
          s.length > 0 &&
            ge
              .ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
              .done(function (e) {
                (o = arguments),
                  s.html(r ? ge('<div>').append(ge.parseHTML(e)).find(r) : e);
              })
              .always(
                n &&
                  function (e, t) {
                    s.each(function () {
                      n.apply(this, o || [e.responseText, t, e]);
                    });
                  },
              ),
          this
        );
      }),
      ge.each(
        [
          'ajaxStart',
          'ajaxStop',
          'ajaxComplete',
          'ajaxError',
          'ajaxSuccess',
          'ajaxSend',
        ],
        function (e, t) {
          ge.fn[t] = function (e) {
            return this.on(t, e);
          };
        },
      ),
      (ge.expr.pseudos.animated = function (e) {
        return ge.grep(ge.timers, function (t) {
          return e === t.elem;
        }).length;
      }),
      (ge.offset = {
        setOffset: function (e, t, n) {
          var r,
            i,
            o,
            s,
            a,
            u,
            c,
            l = ge.css(e, 'position'),
            f = ge(e),
            d = {};
          'static' === l && (e.style.position = 'relative'),
            (a = f.offset()),
            (o = ge.css(e, 'top')),
            (u = ge.css(e, 'left')),
            (c =
              ('absolute' === l || 'fixed' === l) &&
              (o + u).indexOf('auto') > -1),
            c
              ? ((r = f.position()), (s = r.top), (i = r.left))
              : ((s = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
            ge.isFunction(t) && (t = t.call(e, n, ge.extend({}, a))),
            null != t.top && (d.top = t.top - a.top + s),
            null != t.left && (d.left = t.left - a.left + i),
            'using' in t ? t.using.call(e, d) : f.css(d);
        },
      }),
      ge.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return e === undefined
              ? this
              : this.each(function (t) {
                  ge.offset.setOffset(this, e, t);
                });
          var t,
            n,
            r,
            i,
            o = this[0];
          if (o)
            return o.getClientRects().length
              ? ((r = o.getBoundingClientRect()),
                (t = o.ownerDocument),
                (n = t.documentElement),
                (i = t.defaultView),
                {
                  top: r.top + i.pageYOffset - n.clientTop,
                  left: r.left + i.pageXOffset - n.clientLeft,
                })
              : { top: 0, left: 0 };
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n = this[0],
              r = { top: 0, left: 0 };
            return (
              'fixed' === ge.css(n, 'position')
                ? (t = n.getBoundingClientRect())
                : ((e = this.offsetParent()),
                  (t = this.offset()),
                  i(e[0], 'html') || (r = e.offset()),
                  (r = {
                    top: r.top + ge.css(e[0], 'borderTopWidth', !0),
                    left: r.left + ge.css(e[0], 'borderLeftWidth', !0),
                  })),
              {
                top: t.top - r.top - ge.css(n, 'marginTop', !0),
                left: t.left - r.left - ge.css(n, 'marginLeft', !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e && 'static' === ge.css(e, 'position');

            )
              e = e.offsetParent;
            return e || Ge;
          });
        },
      }),
      ge.each(
        { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
        function (e, t) {
          var n = 'pageYOffset' === t;
          ge.fn[e] = function (r) {
            return Oe(
              this,
              function (e, r, i) {
                var o;
                if (
                  (ge.isWindow(e)
                    ? (o = e)
                    : 9 === e.nodeType && (o = e.defaultView),
                  i === undefined)
                )
                  return o ? o[t] : e[r];
                o
                  ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                  : (e[r] = i);
              },
              e,
              r,
              arguments.length,
            );
          };
        },
      ),
      ge.each(['top', 'left'], function (e, t) {
        ge.cssHooks[t] = O(pe.pixelPosition, function (e, n) {
          if (n)
            return (n = q(e, t)), st.test(n) ? ge(e).position()[t] + 'px' : n;
        });
      }),
      ge.each({ Height: 'height', Width: 'width' }, function (e, t) {
        ge.each(
          { padding: 'inner' + e, content: t, '': 'outer' + e },
          function (n, r) {
            ge.fn[r] = function (i, o) {
              var s = arguments.length && (n || 'boolean' != typeof i),
                a = n || (!0 === i || !0 === o ? 'margin' : 'border');
              return Oe(
                this,
                function (t, n, i) {
                  var o;
                  return ge.isWindow(t)
                    ? 0 === r.indexOf('outer')
                      ? t['inner' + e]
                      : t.document.documentElement['client' + e]
                    : 9 === t.nodeType
                      ? ((o = t.documentElement),
                        Math.max(
                          t.body['scroll' + e],
                          o['scroll' + e],
                          t.body['offset' + e],
                          o['offset' + e],
                          o['client' + e],
                        ))
                      : i === undefined
                        ? ge.css(t, n, a)
                        : ge.style(t, n, i, a);
                },
                t,
                s ? i : undefined,
                s,
              );
            };
          },
        );
      }),
      ge.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, '**')
            : this.off(t, e || '**', n);
        },
      }),
      (ge.holdReady = function (e) {
        e ? ge.readyWait++ : ge.ready(!0);
      }),
      (ge.isArray = Array.isArray),
      (ge.parseJSON = JSON.parse),
      (ge.nodeName = i),
      'function' == typeof define &&
        define.amd &&
        define('jquery', [], function () {
          return ge;
        });
    var zt = e.jQuery,
      Vt = e.$;
    return (
      (ge.noConflict = function (t) {
        return (
          e.$ === ge && (e.$ = Vt), t && e.jQuery === ge && (e.jQuery = zt), ge
        );
      }),
      t || (e.jQuery = e.$ = ge),
      ge
    );
  }) /*!
   * imagesLoaded PACKAGED v3.1.8
   * JavaScript is all like "You images are done yet or what?"
   * MIT License
   */,
  function () {
    function e() {}
    function t(e, t) {
      for (var n = e.length; n--; ) if (e[n].listener === t) return n;
      return -1;
    }
    function n(e) {
      return function () {
        return this[e].apply(this, arguments);
      };
    }
    var r = e.prototype,
      i = this,
      o = i.EventEmitter;
    (r.getListeners = function (e) {
      var t,
        n,
        r = this._getEvents();
      if ('object' == typeof e) {
        t = {};
        for (n in r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n]);
      } else t = r[e] || (r[e] = []);
      return t;
    }),
      (r.flattenListeners = function (e) {
        var t,
          n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n;
      }),
      (r.getListenersAsObject = function (e) {
        var t,
          n = this.getListeners(e);
        return n instanceof Array && ((t = {}), (t[e] = n)), t || n;
      }),
      (r.addListener = function (e, n) {
        var r,
          i = this.getListenersAsObject(e),
          o = 'object' == typeof n;
        for (r in i)
          i.hasOwnProperty(r) &&
            -1 === t(i[r], n) &&
            i[r].push(o ? n : { listener: n, once: !1 });
        return this;
      }),
      (r.on = n('addListener')),
      (r.addOnceListener = function (e, t) {
        return this.addListener(e, { listener: t, once: !0 });
      }),
      (r.once = n('addOnceListener')),
      (r.defineEvent = function (e) {
        return this.getListeners(e), this;
      }),
      (r.defineEvents = function (e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this;
      }),
      (r.removeListener = function (e, n) {
        var r,
          i,
          o = this.getListenersAsObject(e);
        for (i in o)
          o.hasOwnProperty(i) && -1 !== (r = t(o[i], n)) && o[i].splice(r, 1);
        return this;
      }),
      (r.off = n('removeListener')),
      (r.addListeners = function (e, t) {
        return this.manipulateListeners(!1, e, t);
      }),
      (r.removeListeners = function (e, t) {
        return this.manipulateListeners(!0, e, t);
      }),
      (r.manipulateListeners = function (e, t, n) {
        var r,
          i,
          o = e ? this.removeListener : this.addListener,
          s = e ? this.removeListeners : this.addListeners;
        if ('object' != typeof t || t instanceof RegExp)
          for (r = n.length; r--; ) o.call(this, t, n[r]);
        else
          for (r in t)
            t.hasOwnProperty(r) &&
              (i = t[r]) &&
              ('function' == typeof i
                ? o.call(this, r, i)
                : s.call(this, r, i));
        return this;
      }),
      (r.removeEvent = function (e) {
        var t,
          n = typeof e,
          r = this._getEvents();
        if ('string' === n) delete r[e];
        else if ('object' === n)
          for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
        else delete this._events;
        return this;
      }),
      (r.removeAllListeners = n('removeEvent')),
      (r.emitEvent = function (e, t) {
        var n,
          r,
          i,
          o = this.getListenersAsObject(e);
        for (i in o)
          if (o.hasOwnProperty(i))
            for (r = o[i].length; r--; )
              (n = o[i][r]),
                !0 === n.once && this.removeListener(e, n.listener),
                n.listener.apply(this, t || []) ===
                  this._getOnceReturnValue() &&
                  this.removeListener(e, n.listener);
        return this;
      }),
      (r.trigger = n('emitEvent')),
      (r.emit = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t);
      }),
      (r.setOnceReturnValue = function (e) {
        return (this._onceReturnValue = e), this;
      }),
      (r._getOnceReturnValue = function () {
        return (
          !this.hasOwnProperty('_onceReturnValue') || this._onceReturnValue
        );
      }),
      (r._getEvents = function () {
        return this._events || (this._events = {});
      }),
      (e.noConflict = function () {
        return (i.EventEmitter = o), e;
      }),
      'function' == typeof define && define.amd
        ? define('eventEmitter/EventEmitter', [], function () {
            return e;
          })
        : 'object' == typeof module && module.exports
          ? (module.exports = e)
          : (this.EventEmitter = e);
  }.call(this),
  (function (e) {
    function t(t) {
      var n = e.event;
      return (n.target = n.target || n.srcElement || t), n;
    }
    var n = document.documentElement,
      r = function () {};
    n.addEventListener
      ? (r = function (e, t, n) {
          e.addEventListener(t, n, !1);
        })
      : n.attachEvent &&
        (r = function (e, n, r) {
          (e[n + r] = r.handleEvent
            ? function () {
                var n = t(e);
                r.handleEvent.call(r, n);
              }
            : function () {
                var n = t(e);
                r.call(e, n);
              }),
            e.attachEvent('on' + n, e[n + r]);
        });
    var i = function () {};
    n.removeEventListener
      ? (i = function (e, t, n) {
          e.removeEventListener(t, n, !1);
        })
      : n.detachEvent &&
        (i = function (e, t, n) {
          e.detachEvent('on' + t, e[t + n]);
          try {
            delete e[t + n];
          } catch (r) {
            e[t + n] = void 0;
          }
        });
    var o = { bind: r, unbind: i };
    'function' == typeof define && define.amd
      ? define('eventie/eventie', o)
      : (e.eventie = o);
  })(this),
  (function (e, t) {
    'function' == typeof define && define.amd
      ? define(
          ['eventEmitter/EventEmitter', 'eventie/eventie'],
          function (n, r) {
            return t(e, n, r);
          },
        )
      : 'object' == typeof exports
        ? (module.exports = t(
            e,
            require('wolfy87-eventemitter'),
            require('eventie'),
          ))
        : (e.imagesLoaded = t(e, e.EventEmitter, e.eventie));
  })(window, function (e, t, n) {
    function r(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function i(e) {
      return '[object Array]' === d.call(e);
    }
    function o(e) {
      var t = [];
      if (i(e)) t = e;
      else if ('number' == typeof e.length)
        for (var n = 0, r = e.length; r > n; n++) t.push(e[n]);
      else t.push(e);
      return t;
    }
    function s(e, t, n) {
      if (!(this instanceof s)) return new s(e, t);
      'string' == typeof e && (e = document.querySelectorAll(e)),
        (this.elements = o(e)),
        (this.options = r({}, this.options)),
        'function' == typeof t ? (n = t) : r(this.options, t),
        n && this.on('always', n),
        this.getImages(),
        c && (this.jqDeferred = new c.Deferred());
      var i = this;
      setTimeout(function () {
        i.check();
      });
    }
    function a(e) {
      this.img = e;
    }
    function u(e) {
      (this.src = e), (p[e] = this);
    }
    var c = e.jQuery,
      l = e.console,
      f = void 0 !== l,
      d = Object.prototype.toString;
    (s.prototype = new t()),
      (s.prototype.options = {}),
      (s.prototype.getImages = function () {
        this.images = [];
        for (var e = 0, t = this.elements.length; t > e; e++) {
          var n = this.elements[e];
          'IMG' === n.nodeName && this.addImage(n);
          var r = n.nodeType;
          if (r && (1 === r || 9 === r || 11 === r))
            for (
              var i = n.querySelectorAll('img'), o = 0, s = i.length;
              s > o;
              o++
            ) {
              var a = i[o];
              this.addImage(a);
            }
        }
      }),
      (s.prototype.addImage = function (e) {
        var t = new a(e);
        this.images.push(t);
      }),
      (s.prototype.check = function () {
        function e(e, i) {
          return (
            t.options.debug && f && l.log('confirm', e, i),
            t.progress(e),
            n++,
            n === r && t.complete(),
            !0
          );
        }
        var t = this,
          n = 0,
          r = this.images.length;
        if (((this.hasAnyBroken = !1), !r)) return void this.complete();
        for (var i = 0; r > i; i++) {
          var o = this.images[i];
          o.on('confirm', e), o.check();
        }
      }),
      (s.prototype.progress = function (e) {
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
        var t = this;
        setTimeout(function () {
          t.emit('progress', t, e),
            t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e);
        });
      }),
      (s.prototype.complete = function () {
        var e = this.hasAnyBroken ? 'fail' : 'done';
        this.isComplete = !0;
        var t = this;
        setTimeout(function () {
          if ((t.emit(e, t), t.emit('always', t), t.jqDeferred)) {
            var n = t.hasAnyBroken ? 'reject' : 'resolve';
            t.jqDeferred[n](t);
          }
        });
      }),
      c &&
        (c.fn.imagesLoaded = function (e, t) {
          return new s(this, e, t).jqDeferred.promise(c(this));
        }),
      (a.prototype = new t()),
      (a.prototype.check = function () {
        var e = p[this.img.src] || new u(this.img.src);
        if (e.isConfirmed)
          return void this.confirm(e.isLoaded, 'cached was confirmed');
        if (this.img.complete && void 0 !== this.img.naturalWidth)
          return void this.confirm(0 !== this.img.naturalWidth, 'naturalWidth');
        var t = this;
        e.on('confirm', function (e, n) {
          return t.confirm(e.isLoaded, n), !0;
        }),
          e.check();
      }),
      (a.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emit('confirm', this, t);
      });
    var p = {};
    return (
      (u.prototype = new t()),
      (u.prototype.check = function () {
        if (!this.isChecked) {
          var e = new Image();
          n.bind(e, 'load', this),
            n.bind(e, 'error', this),
            (e.src = this.src),
            (this.isChecked = !0);
        }
      }),
      (u.prototype.handleEvent = function (e) {
        var t = 'on' + e.type;
        this[t] && this[t](e);
      }),
      (u.prototype.onload = function (e) {
        this.confirm(!0, 'onload'), this.unbindProxyEvents(e);
      }),
      (u.prototype.onerror = function (e) {
        this.confirm(!1, 'onerror'), this.unbindProxyEvents(e);
      }),
      (u.prototype.confirm = function (e, t) {
        (this.isConfirmed = !0),
          (this.isLoaded = e),
          this.emit('confirm', this, t);
      }),
      (u.prototype.unbindProxyEvents = function (e) {
        n.unbind(e.target, 'load', this), n.unbind(e.target, 'error', this);
      }),
      s
    );
  }),
  (function () {
    'use strict';
    function e(e, i, o, s) {
      var a = {},
        u = 0,
        c = 0,
        l = document.title,
        f = function () {
          (a = {}),
            (u = $(document).height()),
            (c = $(window).height()),
            e.find(i).each(function () {
              var e = $(this).attr('href');
              '#' === e[0] && (a[e] = $(e).offset().top);
            });
        },
        d = function () {
          var n = $(document).scrollTop() + s;
          n + c >= u && (n = u + 1e3);
          var r = null;
          for (var f in a) ((a[f] < n && a[f] > a[r]) || null === r) && (r = f);
          n != s || t || ((r = window.location.hash), (t = !0));
          var d = e.find("[href='" + r + "']").first();
          if (!d.hasClass('active')) {
            e.find('.active').removeClass('active'),
              e.find('.active-parent').removeClass('active-parent'),
              d.addClass('active'),
              d
                .parents(o)
                .addClass('active')
                .siblings(i)
                .addClass('active-parent'),
              d.siblings(o).addClass('active'),
              e.find(o).filter(':not(.active)').slideUp(150),
              e.find(o).filter('.active').slideDown(150),
              window.history.replaceState &&
                window.history.replaceState(null, '', r);
            var p = d.data('title');
            p !== undefined && p.length > 0
              ? (document.title = p + ' \u2013 ' + l)
              : (document.title = l);
          }
        };
      (function () {
        f(),
          d(),
          $('#nav-button').click(function () {
            return (
              $('.toc-wrapper').toggleClass('open'),
              $('#nav-button').toggleClass('open'),
              !1
            );
          }),
          $('.page-wrapper').click(r),
          $('.toc-link').click(r),
          e.find(i).click(function () {
            setTimeout(function () {
              d();
            }, 0);
          }),
          $(window).scroll(n(d, 200)),
          $(window).resize(n(f, 200));
      })(),
        (window.recacheHeights = f),
        (window.refreshToc = d);
    }
    var t = !1,
      n = function (e, t) {
        var n = !1;
        return function () {
          !1 === n &&
            (setTimeout(function () {
              e(), (n = !1);
            }, t),
            (n = !0));
        };
      },
      r = function () {
        $('.toc-wrapper').removeClass('open'),
          $('#nav-button').removeClass('open');
      };
    window.loadToc = e;
  })(),
  (function () {
    'use strict';
    function e(e) {
      if (e && '' !== e) {
        $('.lang-selector a').removeClass('active'),
          $(".lang-selector a[data-language-name='" + e + "']").addClass(
            'active',
          );
        for (var t = 0; t < a.length; t++)
          $('.highlight.tab-' + a[t]).hide(),
            $('.lang-specific.' + a[t]).hide();
        $('.highlight.tab-' + e).show(),
          $('.lang-specific.' + e).show(),
          window.recacheHeights(),
          $(window.location.hash).get(0) &&
            $(window.location.hash).get(0).scrollIntoView(!0);
      }
    }
    function t(e) {
      return 'string' != typeof e
        ? {}
        : ((e = e.trim().replace(/^(\?|#|&)/, '')),
          e
            ? e.split('&').reduce(function (e, t) {
                var n = t.replace(/\+/g, ' ').split('='),
                  r = n[0],
                  i = n[1];
                return (
                  (r = decodeURIComponent(r)),
                  (i = i === undefined ? null : decodeURIComponent(i)),
                  e.hasOwnProperty(r)
                    ? Array.isArray(e[r])
                      ? e[r].push(i)
                      : (e[r] = [e[r], i])
                    : (e[r] = i),
                  e
                );
              }, {})
            : {});
    }
    function n(e) {
      return e
        ? Object.keys(e)
            .sort()
            .map(function (t) {
              var n = e[t];
              return Array.isArray(n)
                ? n
                    .sort()
                    .map(function (e) {
                      return (
                        encodeURIComponent(t) + '=' + encodeURIComponent(e)
                      );
                    })
                    .join('&')
                : encodeURIComponent(t) + '=' + encodeURIComponent(n);
            })
            .join('&')
        : '';
    }
    function r() {
      if (location.search.length >= 1) {
        var e = t(location.search).language;
        if (e) return e;
        if (-1 != jQuery.inArray(location.search.substr(1), a))
          return location.search.substr(1);
      }
      return !1;
    }
    function i(e) {
      var r = t(location.search);
      return r.language ? ((r.language = e), n(r)) : e;
    }
    function o(e) {
      if (history) {
        var t = window.location.hash;
        t && (t = t.replace(/^#+/, '')),
          history.pushState({}, '', '?' + i(e) + '#' + t),
          localStorage.setItem('language', e);
      }
    }
    function s(t) {
      var n = localStorage.getItem('language');
      a = t;
      var i = r();
      i
        ? (e(i), localStorage.setItem('language', i))
        : e(null !== n && -1 != jQuery.inArray(n, a) ? n : a[0]);
    }
    var a = [];
    (window.setupLanguages = s),
      (window.activateLanguage = e),
      (window.getLanguageFromQueryString = r),
      $(function () {
        $('.lang-selector a').on('click', function () {
          var t = $(this).data('language-name');
          return o(t), e(t), !1;
        });
      });
  })(),
  $(function () {
    loadToc($('#toc'), '.toc-link', '.toc-list-h2', 10),
      setupLanguages($('body').data('languages')),
      $('.content').imagesLoaded(function () {
        window.recacheHeights(), window.refreshToc();
      });
  }),
  (window.onpopstate = function () {
    activateLanguage(getLanguageFromQueryString());
  });
