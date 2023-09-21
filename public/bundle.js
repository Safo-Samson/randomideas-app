/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var t = {
      230: (t) => {
        t.exports = "object" == typeof self ? self.FormData : window.FormData;
      },
    },
    e = {};
  function r(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var i = (e[n] = { exports: {} });
    return t[n](i, i.exports, r), i.exports;
  }
  (() => {
    "use strict";
    function t(e) {
      return (
        (t =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        t(e)
      );
    }
    function e(e, r) {
      for (var n = 0; n < r.length; n++) {
        var o = r[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(
            e,
            (void 0,
            (i = (function (e, r) {
              if ("object" !== t(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, "string");
                if ("object" !== t(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(o.key)),
            "symbol" === t(i) ? i : String(i)),
            o
          );
      }
      var i;
    }
    const n = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this._modal = document.querySelector("#modal")),
          (this._modalBtn = document.querySelector("#modal-btn")),
          this.addEventListeners();
      }
      var r, n;
      return (
        (r = t),
        (n = [
          {
            key: "addEventListeners",
            value: function () {
              var t = this;
              this._modalBtn.addEventListener("click", this.open.bind(this)),
                window.addEventListener("click", this.outsideClick.bind(this)),
                document.addEventListener("closemodal", function () {
                  return t.close();
                });
            },
          },
          {
            key: "open",
            value: function () {
              this._modal.style.display = "block";
            },
          },
          {
            key: "close",
            value: function () {
              this._modal.style.display = "none";
            },
          },
          {
            key: "outsideClick",
            value: function (t) {
              t.target === this._modal && this.close();
            },
          },
        ]) && e(r.prototype, n),
        Object.defineProperty(r, "prototype", { writable: !1 }),
        t
      );
    })();
    function o(t, e) {
      return function () {
        return t.apply(e, arguments);
      };
    }
    const { toString: i } = Object.prototype,
      { getPrototypeOf: a } = Object,
      s =
        ((c = Object.create(null)),
        (t) => {
          const e = i.call(t);
          return c[e] || (c[e] = e.slice(8, -1).toLowerCase());
        });
    var c;
    const u = (t) => ((t = t.toLowerCase()), (e) => s(e) === t),
      l = (t) => (e) => typeof e === t,
      { isArray: f } = Array,
      d = l("undefined"),
      h = u("ArrayBuffer"),
      p = l("string"),
      m = l("function"),
      y = l("number"),
      v = (t) => null !== t && "object" == typeof t,
      g = (t) => {
        if ("object" !== s(t)) return !1;
        const e = a(t);
        return !(
          (null !== e &&
            e !== Object.prototype &&
            null !== Object.getPrototypeOf(e)) ||
          Symbol.toStringTag in t ||
          Symbol.iterator in t
        );
      },
      b = u("Date"),
      w = u("File"),
      E = u("Blob"),
      S = u("FileList"),
      O = u("URLSearchParams");
    function x(t, e, { allOwnKeys: r = !1 } = {}) {
      if (null == t) return;
      let n, o;
      if (("object" != typeof t && (t = [t]), f(t)))
        for (n = 0, o = t.length; n < o; n++) e.call(null, t[n], n, t);
      else {
        const o = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
          i = o.length;
        let a;
        for (n = 0; n < i; n++) (a = o[n]), e.call(null, t[a], a, t);
      }
    }
    function _(t, e) {
      e = e.toLowerCase();
      const r = Object.keys(t);
      let n,
        o = r.length;
      for (; o-- > 0; ) if (((n = r[o]), e === n.toLowerCase())) return n;
      return null;
    }
    const L =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : global,
      j = (t) => !d(t) && t !== L,
      T =
        ((R = "undefined" != typeof Uint8Array && a(Uint8Array)),
        (t) => R && t instanceof R);
    var R;
    const P = u("HTMLFormElement"),
      A = (
        ({ hasOwnProperty: t }) =>
        (e, r) =>
          t.call(e, r)
      )(Object.prototype),
      N = u("RegExp"),
      k = (t, e) => {
        const r = Object.getOwnPropertyDescriptors(t),
          n = {};
        x(r, (r, o) => {
          !1 !== e(r, o, t) && (n[o] = r);
        }),
          Object.defineProperties(t, n);
      },
      C = {
        isArray: f,
        isArrayBuffer: h,
        isBuffer: function (t) {
          return (
            null !== t &&
            !d(t) &&
            null !== t.constructor &&
            !d(t.constructor) &&
            m(t.constructor.isBuffer) &&
            t.constructor.isBuffer(t)
          );
        },
        isFormData: (t) => {
          const e = "[object FormData]";
          return (
            t &&
            (("function" == typeof FormData && t instanceof FormData) ||
              i.call(t) === e ||
              (m(t.toString) && t.toString() === e))
          );
        },
        isArrayBufferView: function (t) {
          let e;
          return (
            (e =
              "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                ? ArrayBuffer.isView(t)
                : t && t.buffer && h(t.buffer)),
            e
          );
        },
        isString: p,
        isNumber: y,
        isBoolean: (t) => !0 === t || !1 === t,
        isObject: v,
        isPlainObject: g,
        isUndefined: d,
        isDate: b,
        isFile: w,
        isBlob: E,
        isRegExp: N,
        isFunction: m,
        isStream: (t) => v(t) && m(t.pipe),
        isURLSearchParams: O,
        isTypedArray: T,
        isFileList: S,
        forEach: x,
        merge: function t() {
          const { caseless: e } = (j(this) && this) || {},
            r = {},
            n = (n, o) => {
              const i = (e && _(r, o)) || o;
              g(r[i]) && g(n)
                ? (r[i] = t(r[i], n))
                : g(n)
                ? (r[i] = t({}, n))
                : f(n)
                ? (r[i] = n.slice())
                : (r[i] = n);
            };
          for (let t = 0, e = arguments.length; t < e; t++)
            arguments[t] && x(arguments[t], n);
          return r;
        },
        extend: (t, e, r, { allOwnKeys: n } = {}) => (
          x(
            e,
            (e, n) => {
              r && m(e) ? (t[n] = o(e, r)) : (t[n] = e);
            },
            { allOwnKeys: n }
          ),
          t
        ),
        trim: (t) =>
          t.trim
            ? t.trim()
            : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
        stripBOM: (t) => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
        inherits: (t, e, r, n) => {
          (t.prototype = Object.create(e.prototype, n)),
            (t.prototype.constructor = t),
            Object.defineProperty(t, "super", { value: e.prototype }),
            r && Object.assign(t.prototype, r);
        },
        toFlatObject: (t, e, r, n) => {
          let o, i, s;
          const c = {};
          if (((e = e || {}), null == t)) return e;
          do {
            for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
              (s = o[i]),
                (n && !n(s, t, e)) || c[s] || ((e[s] = t[s]), (c[s] = !0));
            t = !1 !== r && a(t);
          } while (t && (!r || r(t, e)) && t !== Object.prototype);
          return e;
        },
        kindOf: s,
        kindOfTest: u,
        endsWith: (t, e, r) => {
          (t = String(t)),
            (void 0 === r || r > t.length) && (r = t.length),
            (r -= e.length);
          const n = t.indexOf(e, r);
          return -1 !== n && n === r;
        },
        toArray: (t) => {
          if (!t) return null;
          if (f(t)) return t;
          let e = t.length;
          if (!y(e)) return null;
          const r = new Array(e);
          for (; e-- > 0; ) r[e] = t[e];
          return r;
        },
        forEachEntry: (t, e) => {
          const r = (t && t[Symbol.iterator]).call(t);
          let n;
          for (; (n = r.next()) && !n.done; ) {
            const r = n.value;
            e.call(t, r[0], r[1]);
          }
        },
        matchAll: (t, e) => {
          let r;
          const n = [];
          for (; null !== (r = t.exec(e)); ) n.push(r);
          return n;
        },
        isHTMLForm: P,
        hasOwnProperty: A,
        hasOwnProp: A,
        reduceDescriptors: k,
        freezeMethods: (t) => {
          k(t, (e, r) => {
            if (m(t) && -1 !== ["arguments", "caller", "callee"].indexOf(r))
              return !1;
            const n = t[r];
            m(n) &&
              ((e.enumerable = !1),
              "writable" in e
                ? (e.writable = !1)
                : e.set ||
                  (e.set = () => {
                    throw Error("Can not rewrite read-only method '" + r + "'");
                  }));
          });
        },
        toObjectSet: (t, e) => {
          const r = {},
            n = (t) => {
              t.forEach((t) => {
                r[t] = !0;
              });
            };
          return f(t) ? n(t) : n(String(t).split(e)), r;
        },
        toCamelCase: (t) =>
          t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function (t, e, r) {
            return e.toUpperCase() + r;
          }),
        noop: () => {},
        toFiniteNumber: (t, e) => ((t = +t), Number.isFinite(t) ? t : e),
        findKey: _,
        global: L,
        isContextDefined: j,
        toJSONObject: (t) => {
          const e = new Array(10),
            r = (t, n) => {
              if (v(t)) {
                if (e.indexOf(t) >= 0) return;
                if (!("toJSON" in t)) {
                  e[n] = t;
                  const o = f(t) ? [] : {};
                  return (
                    x(t, (t, e) => {
                      const i = r(t, n + 1);
                      !d(i) && (o[e] = i);
                    }),
                    (e[n] = void 0),
                    o
                  );
                }
              }
              return t;
            };
          return r(t, 0);
        },
      };
    function F(t, e, r, n, o) {
      Error.call(this),
        Error.captureStackTrace
          ? Error.captureStackTrace(this, this.constructor)
          : (this.stack = new Error().stack),
        (this.message = t),
        (this.name = "AxiosError"),
        e && (this.code = e),
        r && (this.config = r),
        n && (this.request = n),
        o && (this.response = o);
    }
    C.inherits(F, Error, {
      toJSON: function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: C.toJSONObject(this.config),
          code: this.code,
          status:
            this.response && this.response.status ? this.response.status : null,
        };
      },
    });
    const U = F.prototype,
      B = {};
    [
      "ERR_BAD_OPTION_VALUE",
      "ERR_BAD_OPTION",
      "ECONNABORTED",
      "ETIMEDOUT",
      "ERR_NETWORK",
      "ERR_FR_TOO_MANY_REDIRECTS",
      "ERR_DEPRECATED",
      "ERR_BAD_RESPONSE",
      "ERR_BAD_REQUEST",
      "ERR_CANCELED",
      "ERR_NOT_SUPPORT",
      "ERR_INVALID_URL",
    ].forEach((t) => {
      B[t] = { value: t };
    }),
      Object.defineProperties(F, B),
      Object.defineProperty(U, "isAxiosError", { value: !0 }),
      (F.from = (t, e, r, n, o, i) => {
        const a = Object.create(U);
        return (
          C.toFlatObject(
            t,
            a,
            function (t) {
              return t !== Error.prototype;
            },
            (t) => "isAxiosError" !== t
          ),
          F.call(a, t.message, e, r, n, o),
          (a.cause = t),
          (a.name = t.name),
          i && Object.assign(a, i),
          a
        );
      });
    const D = F,
      I = r(230);
    function q(t) {
      return C.isPlainObject(t) || C.isArray(t);
    }
    function M(t) {
      return C.endsWith(t, "[]") ? t.slice(0, -2) : t;
    }
    function z(t, e, r) {
      return t
        ? t
            .concat(e)
            .map(function (t, e) {
              return (t = M(t)), !r && e ? "[" + t + "]" : t;
            })
            .join(r ? "." : "")
        : e;
    }
    const G = C.toFlatObject(C, {}, null, function (t) {
        return /^is[A-Z]/.test(t);
      }),
      H = function (t, e, r) {
        if (!C.isObject(t)) throw new TypeError("target must be an object");
        e = e || new (I || FormData)();
        const n = (r = C.toFlatObject(
            r,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (t, e) {
              return !C.isUndefined(e[t]);
            }
          )).metaTokens,
          o = r.visitor || l,
          i = r.dots,
          a = r.indexes,
          s =
            (r.Blob || ("undefined" != typeof Blob && Blob)) &&
            (c = e) &&
            C.isFunction(c.append) &&
            "FormData" === c[Symbol.toStringTag] &&
            c[Symbol.iterator];
        var c;
        if (!C.isFunction(o)) throw new TypeError("visitor must be a function");
        function u(t) {
          if (null === t) return "";
          if (C.isDate(t)) return t.toISOString();
          if (!s && C.isBlob(t))
            throw new D("Blob is not supported. Use a Buffer instead.");
          return C.isArrayBuffer(t) || C.isTypedArray(t)
            ? s && "function" == typeof Blob
              ? new Blob([t])
              : Buffer.from(t)
            : t;
        }
        function l(t, r, o) {
          let s = t;
          if (t && !o && "object" == typeof t)
            if (C.endsWith(r, "{}"))
              (r = n ? r : r.slice(0, -2)), (t = JSON.stringify(t));
            else if (
              (C.isArray(t) &&
                (function (t) {
                  return C.isArray(t) && !t.some(q);
                })(t)) ||
              C.isFileList(t) ||
              (C.endsWith(r, "[]") && (s = C.toArray(t)))
            )
              return (
                (r = M(r)),
                s.forEach(function (t, n) {
                  !C.isUndefined(t) &&
                    null !== t &&
                    e.append(
                      !0 === a ? z([r], n, i) : null === a ? r : r + "[]",
                      u(t)
                    );
                }),
                !1
              );
          return !!q(t) || (e.append(z(o, r, i), u(t)), !1);
        }
        const f = [],
          d = Object.assign(G, {
            defaultVisitor: l,
            convertValue: u,
            isVisitable: q,
          });
        if (!C.isObject(t)) throw new TypeError("data must be an object");
        return (
          (function t(r, n) {
            if (!C.isUndefined(r)) {
              if (-1 !== f.indexOf(r))
                throw Error("Circular reference detected in " + n.join("."));
              f.push(r),
                C.forEach(r, function (r, i) {
                  !0 ===
                    (!(C.isUndefined(r) || null === r) &&
                      o.call(e, r, C.isString(i) ? i.trim() : i, n, d)) &&
                    t(r, n ? n.concat(i) : [i]);
                }),
                f.pop();
            }
          })(t),
          e
        );
      };
    function J(t) {
      const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0",
      };
      return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (t) {
        return e[t];
      });
    }
    function W(t, e) {
      (this._pairs = []), t && H(t, this, e);
    }
    const K = W.prototype;
    (K.append = function (t, e) {
      this._pairs.push([t, e]);
    }),
      (K.toString = function (t) {
        const e = t
          ? function (e) {
              return t.call(this, e, J);
            }
          : J;
        return this._pairs
          .map(function (t) {
            return e(t[0]) + "=" + e(t[1]);
          }, "")
          .join("&");
      });
    const V = W;
    function $(t) {
      return encodeURIComponent(t)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    function Y(t, e, r) {
      if (!e) return t;
      const n = (r && r.encode) || $,
        o = r && r.serialize;
      let i;
      if (
        ((i = o
          ? o(e, r)
          : C.isURLSearchParams(e)
          ? e.toString()
          : new V(e, r).toString(n)),
        i)
      ) {
        const e = t.indexOf("#");
        -1 !== e && (t = t.slice(0, e)),
          (t += (-1 === t.indexOf("?") ? "?" : "&") + i);
      }
      return t;
    }
    const X = class {
        constructor() {
          this.handlers = [];
        }
        use(t, e, r) {
          return (
            this.handlers.push({
              fulfilled: t,
              rejected: e,
              synchronous: !!r && r.synchronous,
              runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }
        eject(t) {
          this.handlers[t] && (this.handlers[t] = null);
        }
        clear() {
          this.handlers && (this.handlers = []);
        }
        forEach(t) {
          C.forEach(this.handlers, function (e) {
            null !== e && t(e);
          });
        }
      },
      Q = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
      },
      Z = "undefined" != typeof URLSearchParams ? URLSearchParams : V,
      tt = FormData,
      et = (() => {
        let t;
        return (
          ("undefined" == typeof navigator ||
            ("ReactNative" !== (t = navigator.product) &&
              "NativeScript" !== t &&
              "NS" !== t)) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      })(),
      rt =
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope &&
        "function" == typeof self.importScripts,
      nt = {
        isBrowser: !0,
        classes: { URLSearchParams: Z, FormData: tt, Blob },
        isStandardBrowserEnv: et,
        isStandardBrowserWebWorkerEnv: rt,
        protocols: ["http", "https", "file", "blob", "url", "data"],
      },
      ot = function (t) {
        function e(t, r, n, o) {
          let i = t[o++];
          const a = Number.isFinite(+i),
            s = o >= t.length;
          return (
            (i = !i && C.isArray(n) ? n.length : i),
            s
              ? (C.hasOwnProp(n, i) ? (n[i] = [n[i], r]) : (n[i] = r), !a)
              : ((n[i] && C.isObject(n[i])) || (n[i] = []),
                e(t, r, n[i], o) &&
                  C.isArray(n[i]) &&
                  (n[i] = (function (t) {
                    const e = {},
                      r = Object.keys(t);
                    let n;
                    const o = r.length;
                    let i;
                    for (n = 0; n < o; n++) (i = r[n]), (e[i] = t[i]);
                    return e;
                  })(n[i])),
                !a)
          );
        }
        if (C.isFormData(t) && C.isFunction(t.entries)) {
          const r = {};
          return (
            C.forEachEntry(t, (t, n) => {
              e(
                (function (t) {
                  return C.matchAll(/\w+|\[(\w*)]/g, t).map((t) =>
                    "[]" === t[0] ? "" : t[1] || t[0]
                  );
                })(t),
                n,
                r,
                0
              );
            }),
            r
          );
        }
        return null;
      },
      it = { "Content-Type": void 0 },
      at = {
        transitional: Q,
        adapter: ["xhr", "http"],
        transformRequest: [
          function (t, e) {
            const r = e.getContentType() || "",
              n = r.indexOf("application/json") > -1,
              o = C.isObject(t);
            if (
              (o && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t))
            )
              return n && n ? JSON.stringify(ot(t)) : t;
            if (
              C.isArrayBuffer(t) ||
              C.isBuffer(t) ||
              C.isStream(t) ||
              C.isFile(t) ||
              C.isBlob(t)
            )
              return t;
            if (C.isArrayBufferView(t)) return t.buffer;
            if (C.isURLSearchParams(t))
              return (
                e.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                t.toString()
              );
            let i;
            if (o) {
              if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (t, e) {
                  return H(
                    t,
                    new nt.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (t, e, r, n) {
                          return nt.isNode && C.isBuffer(t)
                            ? (this.append(e, t.toString("base64")), !1)
                            : n.defaultVisitor.apply(this, arguments);
                        },
                      },
                      e
                    )
                  );
                })(t, this.formSerializer).toString();
              if (
                (i = C.isFileList(t)) ||
                r.indexOf("multipart/form-data") > -1
              ) {
                const e = this.env && this.env.FormData;
                return H(
                  i ? { "files[]": t } : t,
                  e && new e(),
                  this.formSerializer
                );
              }
            }
            return o || n
              ? (e.setContentType("application/json", !1),
                (function (t, e, r) {
                  if (C.isString(t))
                    try {
                      return (0, JSON.parse)(t), C.trim(t);
                    } catch (t) {
                      if ("SyntaxError" !== t.name) throw t;
                    }
                  return (0, JSON.stringify)(t);
                })(t))
              : t;
          },
        ],
        transformResponse: [
          function (t) {
            const e = this.transitional || at.transitional,
              r = e && e.forcedJSONParsing,
              n = "json" === this.responseType;
            if (t && C.isString(t) && ((r && !this.responseType) || n)) {
              const r = !(e && e.silentJSONParsing) && n;
              try {
                return JSON.parse(t);
              } catch (t) {
                if (r) {
                  if ("SyntaxError" === t.name)
                    throw D.from(
                      t,
                      D.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    );
                  throw t;
                }
              }
            }
            return t;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: nt.classes.FormData, Blob: nt.classes.Blob },
        validateStatus: function (t) {
          return t >= 200 && t < 300;
        },
        headers: { common: { Accept: "application/json, text/plain, */*" } },
      };
    C.forEach(["delete", "get", "head"], function (t) {
      at.headers[t] = {};
    }),
      C.forEach(["post", "put", "patch"], function (t) {
        at.headers[t] = C.merge(it);
      });
    const st = at,
      ct = C.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ]),
      ut = Symbol("internals");
    function lt(t) {
      return t && String(t).trim().toLowerCase();
    }
    function ft(t) {
      return !1 === t || null == t ? t : C.isArray(t) ? t.map(ft) : String(t);
    }
    function dt(t, e, r, n) {
      return C.isFunction(n)
        ? n.call(this, e, r)
        : C.isString(e)
        ? C.isString(n)
          ? -1 !== e.indexOf(n)
          : C.isRegExp(n)
          ? n.test(e)
          : void 0
        : void 0;
    }
    class ht {
      constructor(t) {
        t && this.set(t);
      }
      set(t, e, r) {
        const n = this;
        function o(t, e, r) {
          const o = lt(e);
          if (!o) throw new Error("header name must be a non-empty string");
          const i = C.findKey(n, o);
          (!i ||
            void 0 === n[i] ||
            !0 === r ||
            (void 0 === r && !1 !== n[i])) &&
            (n[i || e] = ft(t));
        }
        const i = (t, e) => C.forEach(t, (t, r) => o(t, r, e));
        return (
          C.isPlainObject(t) || t instanceof this.constructor
            ? i(t, e)
            : C.isString(t) && (t = t.trim()) && !/^[-_a-zA-Z]+$/.test(t.trim())
            ? i(
                ((t) => {
                  const e = {};
                  let r, n, o;
                  return (
                    t &&
                      t.split("\n").forEach(function (t) {
                        (o = t.indexOf(":")),
                          (r = t.substring(0, o).trim().toLowerCase()),
                          (n = t.substring(o + 1).trim()),
                          !r ||
                            (e[r] && ct[r]) ||
                            ("set-cookie" === r
                              ? e[r]
                                ? e[r].push(n)
                                : (e[r] = [n])
                              : (e[r] = e[r] ? e[r] + ", " + n : n));
                      }),
                    e
                  );
                })(t),
                e
              )
            : null != t && o(e, t, r),
          this
        );
      }
      get(t, e) {
        if ((t = lt(t))) {
          const r = C.findKey(this, t);
          if (r) {
            const t = this[r];
            if (!e) return t;
            if (!0 === e)
              return (function (t) {
                const e = Object.create(null),
                  r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                let n;
                for (; (n = r.exec(t)); ) e[n[1]] = n[2];
                return e;
              })(t);
            if (C.isFunction(e)) return e.call(this, t, r);
            if (C.isRegExp(e)) return e.exec(t);
            throw new TypeError("parser must be boolean|regexp|function");
          }
        }
      }
      has(t, e) {
        if ((t = lt(t))) {
          const r = C.findKey(this, t);
          return !(!r || (e && !dt(0, this[r], r, e)));
        }
        return !1;
      }
      delete(t, e) {
        const r = this;
        let n = !1;
        function o(t) {
          if ((t = lt(t))) {
            const o = C.findKey(r, t);
            !o || (e && !dt(0, r[o], o, e)) || (delete r[o], (n = !0));
          }
        }
        return C.isArray(t) ? t.forEach(o) : o(t), n;
      }
      clear() {
        return Object.keys(this).forEach(this.delete.bind(this));
      }
      normalize(t) {
        const e = this,
          r = {};
        return (
          C.forEach(this, (n, o) => {
            const i = C.findKey(r, o);
            if (i) return (e[i] = ft(n)), void delete e[o];
            const a = t
              ? (function (t) {
                  return t
                    .trim()
                    .toLowerCase()
                    .replace(
                      /([a-z\d])(\w*)/g,
                      (t, e, r) => e.toUpperCase() + r
                    );
                })(o)
              : String(o).trim();
            a !== o && delete e[o], (e[a] = ft(n)), (r[a] = !0);
          }),
          this
        );
      }
      concat(...t) {
        return this.constructor.concat(this, ...t);
      }
      toJSON(t) {
        const e = Object.create(null);
        return (
          C.forEach(this, (r, n) => {
            null != r &&
              !1 !== r &&
              (e[n] = t && C.isArray(r) ? r.join(", ") : r);
          }),
          e
        );
      }
      [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
      }
      toString() {
        return Object.entries(this.toJSON())
          .map(([t, e]) => t + ": " + e)
          .join("\n");
      }
      get [Symbol.toStringTag]() {
        return "AxiosHeaders";
      }
      static from(t) {
        return t instanceof this ? t : new this(t);
      }
      static concat(t, ...e) {
        const r = new this(t);
        return e.forEach((t) => r.set(t)), r;
      }
      static accessor(t) {
        const e = (this[ut] = this[ut] = { accessors: {} }).accessors,
          r = this.prototype;
        function n(t) {
          const n = lt(t);
          e[n] ||
            ((function (t, e) {
              const r = C.toCamelCase(" " + e);
              ["get", "set", "has"].forEach((n) => {
                Object.defineProperty(t, n + r, {
                  value: function (t, r, o) {
                    return this[n].call(this, e, t, r, o);
                  },
                  configurable: !0,
                });
              });
            })(r, t),
            (e[n] = !0));
        }
        return C.isArray(t) ? t.forEach(n) : n(t), this;
      }
    }
    ht.accessor([
      "Content-Type",
      "Content-Length",
      "Accept",
      "Accept-Encoding",
      "User-Agent",
    ]),
      C.freezeMethods(ht.prototype),
      C.freezeMethods(ht);
    const pt = ht;
    function mt(t, e) {
      const r = this || st,
        n = e || r,
        o = pt.from(n.headers);
      let i = n.data;
      return (
        C.forEach(t, function (t) {
          i = t.call(r, i, o.normalize(), e ? e.status : void 0);
        }),
        o.normalize(),
        i
      );
    }
    function yt(t) {
      return !(!t || !t.__CANCEL__);
    }
    function vt(t, e, r) {
      D.call(this, null == t ? "canceled" : t, D.ERR_CANCELED, e, r),
        (this.name = "CanceledError");
    }
    C.inherits(vt, D, { __CANCEL__: !0 });
    const gt = vt,
      bt = nt.isStandardBrowserEnv
        ? {
            write: function (t, e, r, n, o, i) {
              const a = [];
              a.push(t + "=" + encodeURIComponent(e)),
                C.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()),
                C.isString(n) && a.push("path=" + n),
                C.isString(o) && a.push("domain=" + o),
                !0 === i && a.push("secure"),
                (document.cookie = a.join("; "));
            },
            read: function (t) {
              const e = document.cookie.match(
                new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
              );
              return e ? decodeURIComponent(e[3]) : null;
            },
            remove: function (t) {
              this.write(t, "", Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
    function wt(t, e) {
      return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
        ? (function (t, e) {
            return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
          })(t, e)
        : e;
    }
    const Et = nt.isStandardBrowserEnv
      ? (function () {
          const t = /(msie|trident)/i.test(navigator.userAgent),
            e = document.createElement("a");
          let r;
          function n(r) {
            let n = r;
            return (
              t && (e.setAttribute("href", n), (n = e.href)),
              e.setAttribute("href", n),
              {
                href: e.href,
                protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
                host: e.host,
                search: e.search ? e.search.replace(/^\?/, "") : "",
                hash: e.hash ? e.hash.replace(/^#/, "") : "",
                hostname: e.hostname,
                port: e.port,
                pathname:
                  "/" === e.pathname.charAt(0) ? e.pathname : "/" + e.pathname,
              }
            );
          }
          return (
            (r = n(window.location.href)),
            function (t) {
              const e = C.isString(t) ? n(t) : t;
              return e.protocol === r.protocol && e.host === r.host;
            }
          );
        })()
      : function () {
          return !0;
        };
    function St(t, e) {
      let r = 0;
      const n = (function (t, e) {
        t = t || 10;
        const r = new Array(t),
          n = new Array(t);
        let o,
          i = 0,
          a = 0;
        return (
          (e = void 0 !== e ? e : 1e3),
          function (s) {
            const c = Date.now(),
              u = n[a];
            o || (o = c), (r[i] = s), (n[i] = c);
            let l = a,
              f = 0;
            for (; l !== i; ) (f += r[l++]), (l %= t);
            if (((i = (i + 1) % t), i === a && (a = (a + 1) % t), c - o < e))
              return;
            const d = u && c - u;
            return d ? Math.round((1e3 * f) / d) : void 0;
          }
        );
      })(50, 250);
      return (o) => {
        const i = o.loaded,
          a = o.lengthComputable ? o.total : void 0,
          s = i - r,
          c = n(s);
        r = i;
        const u = {
          loaded: i,
          total: a,
          progress: a ? i / a : void 0,
          bytes: s,
          rate: c || void 0,
          estimated: c && a && i <= a ? (a - i) / c : void 0,
          event: o,
        };
        (u[e ? "download" : "upload"] = !0), t(u);
      };
    }
    const Ot = {
      http: null,
      xhr:
        "undefined" != typeof XMLHttpRequest &&
        function (t) {
          return new Promise(function (e, r) {
            let n = t.data;
            const o = pt.from(t.headers).normalize(),
              i = t.responseType;
            let a;
            function s() {
              t.cancelToken && t.cancelToken.unsubscribe(a),
                t.signal && t.signal.removeEventListener("abort", a);
            }
            C.isFormData(n) &&
              (nt.isStandardBrowserEnv || nt.isStandardBrowserWebWorkerEnv) &&
              o.setContentType(!1);
            let c = new XMLHttpRequest();
            if (t.auth) {
              const e = t.auth.username || "",
                r = t.auth.password
                  ? unescape(encodeURIComponent(t.auth.password))
                  : "";
              o.set("Authorization", "Basic " + btoa(e + ":" + r));
            }
            const u = wt(t.baseURL, t.url);
            function l() {
              if (!c) return;
              const n = pt.from(
                "getAllResponseHeaders" in c && c.getAllResponseHeaders()
              );
              !(function (t, e, r) {
                const n = r.config.validateStatus;
                r.status && n && !n(r.status)
                  ? e(
                      new D(
                        "Request failed with status code " + r.status,
                        [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][
                          Math.floor(r.status / 100) - 4
                        ],
                        r.config,
                        r.request,
                        r
                      )
                    )
                  : t(r);
              })(
                function (t) {
                  e(t), s();
                },
                function (t) {
                  r(t), s();
                },
                {
                  data:
                    i && "text" !== i && "json" !== i
                      ? c.response
                      : c.responseText,
                  status: c.status,
                  statusText: c.statusText,
                  headers: n,
                  config: t,
                  request: c,
                }
              ),
                (c = null);
            }
            if (
              (c.open(
                t.method.toUpperCase(),
                Y(u, t.params, t.paramsSerializer),
                !0
              ),
              (c.timeout = t.timeout),
              "onloadend" in c
                ? (c.onloadend = l)
                : (c.onreadystatechange = function () {
                    c &&
                      4 === c.readyState &&
                      (0 !== c.status ||
                        (c.responseURL &&
                          0 === c.responseURL.indexOf("file:"))) &&
                      setTimeout(l);
                  }),
              (c.onabort = function () {
                c &&
                  (r(new D("Request aborted", D.ECONNABORTED, t, c)),
                  (c = null));
              }),
              (c.onerror = function () {
                r(new D("Network Error", D.ERR_NETWORK, t, c)), (c = null);
              }),
              (c.ontimeout = function () {
                let e = t.timeout
                  ? "timeout of " + t.timeout + "ms exceeded"
                  : "timeout exceeded";
                const n = t.transitional || Q;
                t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
                  r(
                    new D(
                      e,
                      n.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,
                      t,
                      c
                    )
                  ),
                  (c = null);
              }),
              nt.isStandardBrowserEnv)
            ) {
              const e =
                (t.withCredentials || Et(u)) &&
                t.xsrfCookieName &&
                bt.read(t.xsrfCookieName);
              e && o.set(t.xsrfHeaderName, e);
            }
            void 0 === n && o.setContentType(null),
              "setRequestHeader" in c &&
                C.forEach(o.toJSON(), function (t, e) {
                  c.setRequestHeader(e, t);
                }),
              C.isUndefined(t.withCredentials) ||
                (c.withCredentials = !!t.withCredentials),
              i && "json" !== i && (c.responseType = t.responseType),
              "function" == typeof t.onDownloadProgress &&
                c.addEventListener("progress", St(t.onDownloadProgress, !0)),
              "function" == typeof t.onUploadProgress &&
                c.upload &&
                c.upload.addEventListener("progress", St(t.onUploadProgress)),
              (t.cancelToken || t.signal) &&
                ((a = (e) => {
                  c &&
                    (r(!e || e.type ? new gt(null, t, c) : e),
                    c.abort(),
                    (c = null));
                }),
                t.cancelToken && t.cancelToken.subscribe(a),
                t.signal &&
                  (t.signal.aborted
                    ? a()
                    : t.signal.addEventListener("abort", a)));
            const f = (function (t) {
              const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
              return (e && e[1]) || "";
            })(u);
            f && -1 === nt.protocols.indexOf(f)
              ? r(
                  new D("Unsupported protocol " + f + ":", D.ERR_BAD_REQUEST, t)
                )
              : c.send(n || null);
          });
        },
    };
    C.forEach(Ot, (t, e) => {
      if (t) {
        try {
          Object.defineProperty(t, "name", { value: e });
        } catch (t) {}
        Object.defineProperty(t, "adapterName", { value: e });
      }
    });
    function xt(t) {
      if (
        (t.cancelToken && t.cancelToken.throwIfRequested(),
        t.signal && t.signal.aborted)
      )
        throw new gt(null, t);
    }
    function _t(t) {
      return (
        xt(t),
        (t.headers = pt.from(t.headers)),
        (t.data = mt.call(t, t.transformRequest)),
        -1 !== ["post", "put", "patch"].indexOf(t.method) &&
          t.headers.setContentType("application/x-www-form-urlencoded", !1),
        ((t) => {
          t = C.isArray(t) ? t : [t];
          const { length: e } = t;
          let r, n;
          for (
            let o = 0;
            o < e &&
            ((r = t[o]), !(n = C.isString(r) ? Ot[r.toLowerCase()] : r));
            o++
          );
          if (!n) {
            if (!1 === n)
              throw new D(
                `Adapter ${r} is not supported by the environment`,
                "ERR_NOT_SUPPORT"
              );
            throw new Error(
              C.hasOwnProp(Ot, r)
                ? `Adapter '${r}' is not available in the build`
                : `Unknown adapter '${r}'`
            );
          }
          if (!C.isFunction(n))
            throw new TypeError("adapter is not a function");
          return n;
        })(t.adapter || st.adapter)(t).then(
          function (e) {
            return (
              xt(t),
              (e.data = mt.call(t, t.transformResponse, e)),
              (e.headers = pt.from(e.headers)),
              e
            );
          },
          function (e) {
            return (
              yt(e) ||
                (xt(t),
                e &&
                  e.response &&
                  ((e.response.data = mt.call(
                    t,
                    t.transformResponse,
                    e.response
                  )),
                  (e.response.headers = pt.from(e.response.headers)))),
              Promise.reject(e)
            );
          }
        )
      );
    }
    const Lt = (t) => (t instanceof pt ? t.toJSON() : t);
    function jt(t, e) {
      e = e || {};
      const r = {};
      function n(t, e, r) {
        return C.isPlainObject(t) && C.isPlainObject(e)
          ? C.merge.call({ caseless: r }, t, e)
          : C.isPlainObject(e)
          ? C.merge({}, e)
          : C.isArray(e)
          ? e.slice()
          : e;
      }
      function o(t, e, r) {
        return C.isUndefined(e)
          ? C.isUndefined(t)
            ? void 0
            : n(void 0, t, r)
          : n(t, e, r);
      }
      function i(t, e) {
        if (!C.isUndefined(e)) return n(void 0, e);
      }
      function a(t, e) {
        return C.isUndefined(e)
          ? C.isUndefined(t)
            ? void 0
            : n(void 0, t)
          : n(void 0, e);
      }
      function s(r, o, i) {
        return i in e ? n(r, o) : i in t ? n(void 0, r) : void 0;
      }
      const c = {
        url: i,
        method: i,
        data: i,
        baseURL: a,
        transformRequest: a,
        transformResponse: a,
        paramsSerializer: a,
        timeout: a,
        timeoutMessage: a,
        withCredentials: a,
        adapter: a,
        responseType: a,
        xsrfCookieName: a,
        xsrfHeaderName: a,
        onUploadProgress: a,
        onDownloadProgress: a,
        decompress: a,
        maxContentLength: a,
        maxBodyLength: a,
        beforeRedirect: a,
        transport: a,
        httpAgent: a,
        httpsAgent: a,
        cancelToken: a,
        socketPath: a,
        responseEncoding: a,
        validateStatus: s,
        headers: (t, e) => o(Lt(t), Lt(e), !0),
      };
      return (
        C.forEach(Object.keys(t).concat(Object.keys(e)), function (n) {
          const i = c[n] || o,
            a = i(t[n], e[n], n);
          (C.isUndefined(a) && i !== s) || (r[n] = a);
        }),
        r
      );
    }
    const Tt = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(
      (t, e) => {
        Tt[t] = function (r) {
          return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
        };
      }
    );
    const Rt = {};
    Tt.transitional = function (t, e, r) {
      function n(t, e) {
        return (
          "[Axios v1.2.5] Transitional option '" +
          t +
          "'" +
          e +
          (r ? ". " + r : "")
        );
      }
      return (r, o, i) => {
        if (!1 === t)
          throw new D(
            n(o, " has been removed" + (e ? " in " + e : "")),
            D.ERR_DEPRECATED
          );
        return (
          e &&
            !Rt[o] &&
            ((Rt[o] = !0),
            console.warn(
              n(
                o,
                " has been deprecated since v" +
                  e +
                  " and will be removed in the near future"
              )
            )),
          !t || t(r, o, i)
        );
      };
    };
    const Pt = {
        assertOptions: function (t, e, r) {
          if ("object" != typeof t)
            throw new D("options must be an object", D.ERR_BAD_OPTION_VALUE);
          const n = Object.keys(t);
          let o = n.length;
          for (; o-- > 0; ) {
            const i = n[o],
              a = e[i];
            if (a) {
              const e = t[i],
                r = void 0 === e || a(e, i, t);
              if (!0 !== r)
                throw new D(
                  "option " + i + " must be " + r,
                  D.ERR_BAD_OPTION_VALUE
                );
            } else if (!0 !== r)
              throw new D("Unknown option " + i, D.ERR_BAD_OPTION);
          }
        },
        validators: Tt,
      },
      At = Pt.validators;
    class Nt {
      constructor(t) {
        (this.defaults = t),
          (this.interceptors = { request: new X(), response: new X() });
      }
      request(t, e) {
        "string" == typeof t ? ((e = e || {}).url = t) : (e = t || {}),
          (e = jt(this.defaults, e));
        const { transitional: r, paramsSerializer: n, headers: o } = e;
        let i;
        void 0 !== r &&
          Pt.assertOptions(
            r,
            {
              silentJSONParsing: At.transitional(At.boolean),
              forcedJSONParsing: At.transitional(At.boolean),
              clarifyTimeoutError: At.transitional(At.boolean),
            },
            !1
          ),
          void 0 !== n &&
            Pt.assertOptions(
              n,
              { encode: At.function, serialize: At.function },
              !0
            ),
          (e.method = (
            e.method ||
            this.defaults.method ||
            "get"
          ).toLowerCase()),
          (i = o && C.merge(o.common, o[e.method])),
          i &&
            C.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (t) => {
                delete o[t];
              }
            ),
          (e.headers = pt.concat(i, o));
        const a = [];
        let s = !0;
        this.interceptors.request.forEach(function (t) {
          ("function" == typeof t.runWhen && !1 === t.runWhen(e)) ||
            ((s = s && t.synchronous), a.unshift(t.fulfilled, t.rejected));
        });
        const c = [];
        let u;
        this.interceptors.response.forEach(function (t) {
          c.push(t.fulfilled, t.rejected);
        });
        let l,
          f = 0;
        if (!s) {
          const t = [_t.bind(this), void 0];
          for (
            t.unshift.apply(t, a),
              t.push.apply(t, c),
              l = t.length,
              u = Promise.resolve(e);
            f < l;

          )
            u = u.then(t[f++], t[f++]);
          return u;
        }
        l = a.length;
        let d = e;
        for (f = 0; f < l; ) {
          const t = a[f++],
            e = a[f++];
          try {
            d = t(d);
          } catch (t) {
            e.call(this, t);
            break;
          }
        }
        try {
          u = _t.call(this, d);
        } catch (t) {
          return Promise.reject(t);
        }
        for (f = 0, l = c.length; f < l; ) u = u.then(c[f++], c[f++]);
        return u;
      }
      getUri(t) {
        return Y(
          wt((t = jt(this.defaults, t)).baseURL, t.url),
          t.params,
          t.paramsSerializer
        );
      }
    }
    C.forEach(["delete", "get", "head", "options"], function (t) {
      Nt.prototype[t] = function (e, r) {
        return this.request(
          jt(r || {}, { method: t, url: e, data: (r || {}).data })
        );
      };
    }),
      C.forEach(["post", "put", "patch"], function (t) {
        function e(e) {
          return function (r, n, o) {
            return this.request(
              jt(o || {}, {
                method: t,
                headers: e ? { "Content-Type": "multipart/form-data" } : {},
                url: r,
                data: n,
              })
            );
          };
        }
        (Nt.prototype[t] = e()), (Nt.prototype[t + "Form"] = e(!0));
      });
    const kt = Nt;
    class Ct {
      constructor(t) {
        if ("function" != typeof t)
          throw new TypeError("executor must be a function.");
        let e;
        this.promise = new Promise(function (t) {
          e = t;
        });
        const r = this;
        this.promise.then((t) => {
          if (!r._listeners) return;
          let e = r._listeners.length;
          for (; e-- > 0; ) r._listeners[e](t);
          r._listeners = null;
        }),
          (this.promise.then = (t) => {
            let e;
            const n = new Promise((t) => {
              r.subscribe(t), (e = t);
            }).then(t);
            return (
              (n.cancel = function () {
                r.unsubscribe(e);
              }),
              n
            );
          }),
          t(function (t, n, o) {
            r.reason || ((r.reason = new gt(t, n, o)), e(r.reason));
          });
      }
      throwIfRequested() {
        if (this.reason) throw this.reason;
      }
      subscribe(t) {
        this.reason
          ? t(this.reason)
          : this._listeners
          ? this._listeners.push(t)
          : (this._listeners = [t]);
      }
      unsubscribe(t) {
        if (!this._listeners) return;
        const e = this._listeners.indexOf(t);
        -1 !== e && this._listeners.splice(e, 1);
      }
      static source() {
        let t;
        return {
          token: new Ct(function (e) {
            t = e;
          }),
          cancel: t,
        };
      }
    }
    const Ft = Ct,
      Ut = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
    Object.entries(Ut).forEach(([t, e]) => {
      Ut[e] = t;
    });
    const Bt = Ut,
      Dt = (function t(e) {
        const r = new kt(e),
          n = o(kt.prototype.request, r);
        return (
          C.extend(n, kt.prototype, r, { allOwnKeys: !0 }),
          C.extend(n, r, null, { allOwnKeys: !0 }),
          (n.create = function (r) {
            return t(jt(e, r));
          }),
          n
        );
      })(st);
    (Dt.Axios = kt),
      (Dt.CanceledError = gt),
      (Dt.CancelToken = Ft),
      (Dt.isCancel = yt),
      (Dt.VERSION = "1.2.5"),
      (Dt.toFormData = H),
      (Dt.AxiosError = D),
      (Dt.Cancel = Dt.CanceledError),
      (Dt.all = function (t) {
        return Promise.all(t);
      }),
      (Dt.spread = function (t) {
        return function (e) {
          return t.apply(null, e);
        };
      }),
      (Dt.isAxiosError = function (t) {
        return C.isObject(t) && !0 === t.isAxiosError;
      }),
      (Dt.mergeConfig = jt),
      (Dt.AxiosHeaders = pt),
      (Dt.formToJSON = (t) => ot(C.isHTMLForm(t) ? new FormData(t) : t)),
      (Dt.HttpStatusCode = Bt),
      (Dt.default = Dt);
    const It = Dt;
    function qt(t) {
      return (
        (qt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        qt(t)
      );
    }
    function Mt(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(
            t,
            (void 0,
            (o = (function (t, e) {
              if ("object" !== qt(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" !== qt(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(n.key)),
            "symbol" === qt(o) ? o : String(o)),
            n
          );
      }
      var o;
    }
    const zt = new ((function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this._apiUrl = "/api/ideas"),
          console.log("production");
      }
      var e, r;
      return (
        (e = t),
        (r = [
          {
            key: "getIdeas",
            value: function () {
              return It.get(this._apiUrl);
            },
          },
          {
            key: "createIdea",
            value: function (t) {
              return It.post(this._apiUrl, t);
            },
          },
          {
            key: "updateIdea",
            value: function (t, e) {
              return It.put("".concat(this._apiUrl, "/").concat(t), e);
            },
          },
          {
            key: "deleteIdea",
            value: function (t) {
              var e = localStorage.getItem("username")
                ? localStorage.getItem("username")
                : "";
              return It.delete("".concat(this._apiUrl, "/").concat(t), {
                data: { username: e },
              });
            },
          },
        ]) && Mt(e.prototype, r),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })())();
    function Gt(t) {
      return (
        (Gt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        Gt(t)
      );
    }
    function Ht() {
      Ht = function () {
        return t;
      };
      var t = {},
        e = Object.prototype,
        r = e.hasOwnProperty,
        n =
          Object.defineProperty ||
          function (t, e, r) {
            t[e] = r.value;
          },
        o = "function" == typeof Symbol ? Symbol : {},
        i = o.iterator || "@@iterator",
        a = o.asyncIterator || "@@asyncIterator",
        s = o.toStringTag || "@@toStringTag";
      function c(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        c({}, "");
      } catch (t) {
        c = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function u(t, e, r, o) {
        var i = e && e.prototype instanceof d ? e : d,
          a = Object.create(i.prototype),
          s = new _(o || []);
        return n(a, "_invoke", { value: E(t, r, s) }), a;
      }
      function l(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = u;
      var f = {};
      function d() {}
      function h() {}
      function p() {}
      var m = {};
      c(m, i, function () {
        return this;
      });
      var y = Object.getPrototypeOf,
        v = y && y(y(L([])));
      v && v !== e && r.call(v, i) && (m = v);
      var g = (p.prototype = d.prototype = Object.create(m));
      function b(t) {
        ["next", "throw", "return"].forEach(function (e) {
          c(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function w(t, e) {
        function o(n, i, a, s) {
          var c = l(t[n], t, i);
          if ("throw" !== c.type) {
            var u = c.arg,
              f = u.value;
            return f && "object" == Gt(f) && r.call(f, "__await")
              ? e.resolve(f.__await).then(
                  function (t) {
                    o("next", t, a, s);
                  },
                  function (t) {
                    o("throw", t, a, s);
                  }
                )
              : e.resolve(f).then(
                  function (t) {
                    (u.value = t), a(u);
                  },
                  function (t) {
                    return o("throw", t, a, s);
                  }
                );
          }
          s(c.arg);
        }
        var i;
        n(this, "_invoke", {
          value: function (t, r) {
            function n() {
              return new e(function (e, n) {
                o(t, r, e, n);
              });
            }
            return (i = i ? i.then(n, n) : n());
          },
        });
      }
      function E(t, e, r) {
        var n = "suspendedStart";
        return function (o, i) {
          if ("executing" === n)
            throw new Error("Generator is already running");
          if ("completed" === n) {
            if ("throw" === o) throw i;
            return { value: void 0, done: !0 };
          }
          for (r.method = o, r.arg = i; ; ) {
            var a = r.delegate;
            if (a) {
              var s = S(a, r);
              if (s) {
                if (s === f) continue;
                return s;
              }
            }
            if ("next" === r.method) r.sent = r._sent = r.arg;
            else if ("throw" === r.method) {
              if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
              r.dispatchException(r.arg);
            } else "return" === r.method && r.abrupt("return", r.arg);
            n = "executing";
            var c = l(t, e, r);
            if ("normal" === c.type) {
              if (((n = r.done ? "completed" : "suspendedYield"), c.arg === f))
                continue;
              return { value: c.arg, done: r.done };
            }
            "throw" === c.type &&
              ((n = "completed"), (r.method = "throw"), (r.arg = c.arg));
          }
        };
      }
      function S(t, e) {
        var r = e.method,
          n = t.iterator[r];
        if (void 0 === n)
          return (
            (e.delegate = null),
            ("throw" === r &&
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              S(t, e),
              "throw" === e.method)) ||
              ("return" !== r &&
                ((e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a '" + r + "' method"
                )))),
            f
          );
        var o = l(n, t.iterator, e.arg);
        if ("throw" === o.type)
          return (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), f;
        var i = o.arg;
        return i
          ? i.done
            ? ((e[t.resultName] = i.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              f)
            : i
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            f);
      }
      function O(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function x(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function _(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(O, this),
          this.reset(!0);
      }
      function L(t) {
        if (t) {
          var e = t[i];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var n = -1,
              o = function e() {
                for (; ++n < t.length; )
                  if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (o.next = o);
          }
        }
        return { next: j };
      }
      function j() {
        return { value: void 0, done: !0 };
      }
      return (
        (h.prototype = p),
        n(g, "constructor", { value: p, configurable: !0 }),
        n(p, "constructor", { value: h, configurable: !0 }),
        (h.displayName = c(p, s, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === h || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, p)
              : ((t.__proto__ = p), c(t, s, "GeneratorFunction")),
            (t.prototype = Object.create(g)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        b(w.prototype),
        c(w.prototype, a, function () {
          return this;
        }),
        (t.AsyncIterator = w),
        (t.async = function (e, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new w(u(e, r, n, o), i);
          return t.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        b(g),
        c(g, s, "Generator"),
        c(g, i, function () {
          return this;
        }),
        c(g, "toString", function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e = Object(t),
            r = [];
          for (var n in e) r.push(n);
          return (
            r.reverse(),
            function t() {
              for (; r.length; ) {
                var n = r.pop();
                if (n in e) return (t.value = n), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (t.values = L),
        (_.prototype = {
          constructor: _,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(x),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  r.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function n(r, n) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (e.next = r),
                n && ((e.method = "next"), (e.arg = void 0)),
                !!n
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return n("end");
              if (i.tryLoc <= this.prev) {
                var s = r.call(i, "catchLoc"),
                  c = r.call(i, "finallyLoc");
                if (s && c) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                } else if (s) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                } else {
                  if (!c)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (
                o.tryLoc <= this.prev &&
                r.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ("break" === t || "continue" === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), f)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              f
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), x(r), f;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  x(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: L(t), resultName: e, nextLoc: r }),
              "next" === this.method && (this.arg = void 0),
              f
            );
          },
        }),
        t
      );
    }
    function Jt(t, e, r, n, o, i, a) {
      try {
        var s = t[i](a),
          c = s.value;
      } catch (t) {
        return void r(t);
      }
      s.done ? e(c) : Promise.resolve(c).then(n, o);
    }
    function Wt(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (n, o) {
          var i = t.apply(e, r);
          function a(t) {
            Jt(i, n, o, a, s, "next", t);
          }
          function s(t) {
            Jt(i, n, o, a, s, "throw", t);
          }
          a(void 0);
        });
      };
    }
    function Kt(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(
            t,
            (void 0,
            (o = (function (t, e) {
              if ("object" !== Gt(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" !== Gt(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(n.key)),
            "symbol" === Gt(o) ? o : String(o)),
            n
          );
      }
      var o;
    }
    const Vt = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this._ideaListEl = document.querySelector("#idea-list")),
          (this._ideas = []),
          this.getIdeas(),
          (this._validTags = new Set()),
          this._validTags.add("technology"),
          this._validTags.add("software"),
          this._validTags.add("business"),
          this._validTags.add("education"),
          this._validTags.add("health"),
          this._validTags.add("inventions");
      }
      var e, r, n, o;
      return (
        (e = t),
        (r = [
          {
            key: "addEventListeners",
            value: function () {
              var t = this;
              this._ideaListEl.addEventListener("click", function (e) {
                if (e.target.classList.contains("fa-times")) {
                  e.stopImmediatePropagation();
                  var r = e.target.parentElement.parentElement.dataset.id;
                  t.deleteIdea(r);
                }
              });
            },
          },
          {
            key: "getIdeas",
            value:
              ((o = Wt(
                Ht().mark(function t() {
                  var e;
                  return Ht().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.prev = 0), (t.next = 3), zt.getIdeas();
                          case 3:
                            (e = t.sent),
                              (this._ideas = e.data.data),
                              this.render(),
                              (t.next = 11);
                            break;
                          case 8:
                            (t.prev = 8),
                              (t.t0 = t.catch(0)),
                              console.log(t.t0);
                          case 11:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [[0, 8]]
                  );
                })
              )),
              function () {
                return o.apply(this, arguments);
              }),
          },
          {
            key: "deleteIdea",
            value:
              ((n = Wt(
                Ht().mark(function t(e) {
                  return Ht().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.prev = 0), (t.next = 3), zt.deleteIdea(e);
                          case 3:
                            t.sent,
                              this._ideas.filter(function (t) {
                                return t._id !== e;
                              }),
                              this.getIdeas(),
                              (t.next = 11);
                            break;
                          case 8:
                            (t.prev = 8),
                              (t.t0 = t.catch(0)),
                              alert("You can not delete this resource");
                          case 11:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [[0, 8]]
                  );
                })
              )),
              function (t) {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "addIdeaToList",
            value: function (t) {
              this._ideas.push(t), this.render();
            },
          },
          {
            key: "getTagClass",
            value: function (t) {
              return (
                (t = t.toLowerCase()),
                this._validTags.has(t) ? "tag-".concat(t) : ""
              );
            },
          },
          {
            key: "render",
            value: function () {
              var t = this;
              (this._ideaListEl.innerHTML = this._ideas
                .map(function (e) {
                  var r = t.getTagClass(e.tag),
                    n =
                      e.username === localStorage.getItem("username")
                        ? '<button class="delete"><i class="fas fa-times"></i></button>'
                        : "";
                  return '\n      <div class="card" data-id="'
                    .concat(e._id, '">\n     ')
                    .concat(n, "\n      <h3>\n        ")
                    .concat(e.text, '\n      </h3>\n      <p class="tag ')
                    .concat(r, '">')
                    .concat(
                      e.tag.toUpperCase(),
                      '</p>\n      <p>\n        Posted on <span class="date">'
                    )
                    .concat(e.date, '</span> by\n        <span class="author">')
                    .concat(
                      e.username,
                      "</span>\n      </p>\n    </div>\n      "
                    );
                })
                .join("")),
                this.addEventListeners();
            },
          },
        ]),
        r && Kt(e.prototype, r),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    function $t(t) {
      return (
        ($t =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        $t(t)
      );
    }
    function Yt() {
      Yt = function () {
        return t;
      };
      var t = {},
        e = Object.prototype,
        r = e.hasOwnProperty,
        n =
          Object.defineProperty ||
          function (t, e, r) {
            t[e] = r.value;
          },
        o = "function" == typeof Symbol ? Symbol : {},
        i = o.iterator || "@@iterator",
        a = o.asyncIterator || "@@asyncIterator",
        s = o.toStringTag || "@@toStringTag";
      function c(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        c({}, "");
      } catch (t) {
        c = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function u(t, e, r, o) {
        var i = e && e.prototype instanceof d ? e : d,
          a = Object.create(i.prototype),
          s = new _(o || []);
        return n(a, "_invoke", { value: E(t, r, s) }), a;
      }
      function l(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = u;
      var f = {};
      function d() {}
      function h() {}
      function p() {}
      var m = {};
      c(m, i, function () {
        return this;
      });
      var y = Object.getPrototypeOf,
        v = y && y(y(L([])));
      v && v !== e && r.call(v, i) && (m = v);
      var g = (p.prototype = d.prototype = Object.create(m));
      function b(t) {
        ["next", "throw", "return"].forEach(function (e) {
          c(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function w(t, e) {
        function o(n, i, a, s) {
          var c = l(t[n], t, i);
          if ("throw" !== c.type) {
            var u = c.arg,
              f = u.value;
            return f && "object" == $t(f) && r.call(f, "__await")
              ? e.resolve(f.__await).then(
                  function (t) {
                    o("next", t, a, s);
                  },
                  function (t) {
                    o("throw", t, a, s);
                  }
                )
              : e.resolve(f).then(
                  function (t) {
                    (u.value = t), a(u);
                  },
                  function (t) {
                    return o("throw", t, a, s);
                  }
                );
          }
          s(c.arg);
        }
        var i;
        n(this, "_invoke", {
          value: function (t, r) {
            function n() {
              return new e(function (e, n) {
                o(t, r, e, n);
              });
            }
            return (i = i ? i.then(n, n) : n());
          },
        });
      }
      function E(t, e, r) {
        var n = "suspendedStart";
        return function (o, i) {
          if ("executing" === n)
            throw new Error("Generator is already running");
          if ("completed" === n) {
            if ("throw" === o) throw i;
            return { value: void 0, done: !0 };
          }
          for (r.method = o, r.arg = i; ; ) {
            var a = r.delegate;
            if (a) {
              var s = S(a, r);
              if (s) {
                if (s === f) continue;
                return s;
              }
            }
            if ("next" === r.method) r.sent = r._sent = r.arg;
            else if ("throw" === r.method) {
              if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
              r.dispatchException(r.arg);
            } else "return" === r.method && r.abrupt("return", r.arg);
            n = "executing";
            var c = l(t, e, r);
            if ("normal" === c.type) {
              if (((n = r.done ? "completed" : "suspendedYield"), c.arg === f))
                continue;
              return { value: c.arg, done: r.done };
            }
            "throw" === c.type &&
              ((n = "completed"), (r.method = "throw"), (r.arg = c.arg));
          }
        };
      }
      function S(t, e) {
        var r = e.method,
          n = t.iterator[r];
        if (void 0 === n)
          return (
            (e.delegate = null),
            ("throw" === r &&
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              S(t, e),
              "throw" === e.method)) ||
              ("return" !== r &&
                ((e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a '" + r + "' method"
                )))),
            f
          );
        var o = l(n, t.iterator, e.arg);
        if ("throw" === o.type)
          return (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), f;
        var i = o.arg;
        return i
          ? i.done
            ? ((e[t.resultName] = i.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              f)
            : i
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            f);
      }
      function O(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function x(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function _(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(O, this),
          this.reset(!0);
      }
      function L(t) {
        if (t) {
          var e = t[i];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var n = -1,
              o = function e() {
                for (; ++n < t.length; )
                  if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (o.next = o);
          }
        }
        return { next: j };
      }
      function j() {
        return { value: void 0, done: !0 };
      }
      return (
        (h.prototype = p),
        n(g, "constructor", { value: p, configurable: !0 }),
        n(p, "constructor", { value: h, configurable: !0 }),
        (h.displayName = c(p, s, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === h || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, p)
              : ((t.__proto__ = p), c(t, s, "GeneratorFunction")),
            (t.prototype = Object.create(g)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        b(w.prototype),
        c(w.prototype, a, function () {
          return this;
        }),
        (t.AsyncIterator = w),
        (t.async = function (e, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new w(u(e, r, n, o), i);
          return t.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        b(g),
        c(g, s, "Generator"),
        c(g, i, function () {
          return this;
        }),
        c(g, "toString", function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e = Object(t),
            r = [];
          for (var n in e) r.push(n);
          return (
            r.reverse(),
            function t() {
              for (; r.length; ) {
                var n = r.pop();
                if (n in e) return (t.value = n), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (t.values = L),
        (_.prototype = {
          constructor: _,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(x),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  r.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function n(r, n) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (e.next = r),
                n && ((e.method = "next"), (e.arg = void 0)),
                !!n
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return n("end");
              if (i.tryLoc <= this.prev) {
                var s = r.call(i, "catchLoc"),
                  c = r.call(i, "finallyLoc");
                if (s && c) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                } else if (s) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                } else {
                  if (!c)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (
                o.tryLoc <= this.prev &&
                r.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ("break" === t || "continue" === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), f)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              f
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), x(r), f;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  x(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: L(t), resultName: e, nextLoc: r }),
              "next" === this.method && (this.arg = void 0),
              f
            );
          },
        }),
        t
      );
    }
    function Xt(t, e, r, n, o, i, a) {
      try {
        var s = t[i](a),
          c = s.value;
      } catch (t) {
        return void r(t);
      }
      s.done ? e(c) : Promise.resolve(c).then(n, o);
    }
    function Qt(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(
            t,
            (void 0,
            (o = (function (t, e) {
              if ("object" !== $t(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" !== $t(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(n.key)),
            "symbol" === $t(o) ? o : String(o)),
            n
          );
      }
      var o;
    }
    const Zt = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this._formModal = document.querySelector("#form-modal")),
          (this._ideaList = new Vt());
      }
      var e, r, n, o;
      return (
        (e = t),
        (r = [
          {
            key: "addEventListeners",
            value: function () {
              this._form.addEventListener(
                "submit",
                this.handleSubmit.bind(this)
              );
            },
          },
          {
            key: "handleSubmit",
            value:
              ((n = Yt().mark(function t(e) {
                var r, n;
                return Yt().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (e.preventDefault(),
                            this._form.elements.text.value &&
                              this._form.elements.tag.value &&
                              this._form.elements.username.value)
                          ) {
                            t.next = 4;
                            break;
                          }
                          return (
                            alert("Please enter all fields"), t.abrupt("return")
                          );
                        case 4:
                          return (
                            localStorage.setItem(
                              "username",
                              this._form.elements.username.value
                            ),
                            (r = {
                              text: this._form.elements.text.value,
                              tag: this._form.elements.tag.value,
                              username: this._form.elements.username.value,
                            }),
                            (t.next = 8),
                            zt.createIdea(r)
                          );
                        case 8:
                          (n = t.sent),
                            this._ideaList.addIdeaToList(n.data.data),
                            (this._form.elements.text.value = ""),
                            (this._form.elements.tag.value = ""),
                            (this._form.elements.username.value = ""),
                            this.render(),
                            document.dispatchEvent(new Event("closemodal"));
                        case 15:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })),
              (o = function () {
                var t = this,
                  e = arguments;
                return new Promise(function (r, o) {
                  var i = n.apply(t, e);
                  function a(t) {
                    Xt(i, r, o, a, s, "next", t);
                  }
                  function s(t) {
                    Xt(i, r, o, a, s, "throw", t);
                  }
                  a(void 0);
                });
              }),
              function (t) {
                return o.apply(this, arguments);
              }),
          },
          {
            key: "render",
            value: function () {
              (this._formModal.innerHTML =
                '\n    <form id="idea-form">\n    <div class="form-control">\n      <label for="idea-text">Enter a Username</label>\n      <input type="text" name="username" id="username" value="'.concat(
                  localStorage.getItem("username")
                    ? localStorage.getItem("username")
                    : "",
                  '" />\n    </div>\n    <div class="form-control">\n      <label for="idea-text">What\'s Your Idea?</label>\n      <textarea name="text" id="idea-text"></textarea>\n    </div>\n    <div class="form-control">\n      <label for="tag">Tag</label>\n      <select name="tag" id="tag">\n        <option value="technology">Technology</option>\n        <option value="software">Software</option>\n        <option value="business">Business</option>\n        <option value="education">Education</option>\n        <option value="health">Health</option>\n        <option value="invention">Invention</option>\n        <option value="general">General</option>\n      </select>\n    </div>\n    <button class="btn" type="submit" id="submit">Post</button>\n  </form>\n    '
                )),
                (this._form = document.querySelector("#idea-form")),
                this.addEventListeners();
            },
          },
        ]),
        r && Qt(e.prototype, r),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    new n(), new Zt().render(), new Vt();
  })();
})();