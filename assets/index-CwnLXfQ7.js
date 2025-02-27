const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-DN8hOEWo.js",
      "assets/index-NBfXeSsy.js",
      "assets/index-gwoAPrtJ.css",
    ])
) => i.map((i) => d[i]);
import { _ as pe } from "./index-NBfXeSsy.js";
const me = Symbol(),
  ee = Object.getPrototypeOf,
  G = new WeakMap(),
  he = (e) =>
    e &&
    (G.has(e)
      ? G.get(e)
      : ee(e) === Object.prototype || ee(e) === Array.prototype),
  ge = (e) => (he(e) && e[me]) || null,
  te = (e, t = !0) => {
    G.set(e, t);
  },
  z = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1,
    VITE_CONTRACT_ADDRESS: "0xD6f789bDE96E9c20Be2360127BD4542A5B5e2216",
    VITE_POOL_ID: "0",
    VITE_STAKING_API_BASE_URL: "https://staking-backend.shieldeum.net",
    VITE_TOKEN_ADDRESS: "0x516f8a1fB458EBdcFd0F544fF85c69C1c0Ebc31d",
    VITE_USER_NODE_ENV: "production",
  },
  q = (e) => typeof e == "object" && e !== null,
  L = new WeakMap(),
  x = new WeakSet(),
  ye = (
    e = Object.is,
    t = (o, g) => new Proxy(o, g),
    s = (o) =>
      q(o) &&
      !x.has(o) &&
      (Array.isArray(o) || !(Symbol.iterator in o)) &&
      !(o instanceof WeakMap) &&
      !(o instanceof WeakSet) &&
      !(o instanceof Error) &&
      !(o instanceof Number) &&
      !(o instanceof Date) &&
      !(o instanceof String) &&
      !(o instanceof RegExp) &&
      !(o instanceof ArrayBuffer),
    n = (o) => {
      switch (o.status) {
        case "fulfilled":
          return o.value;
        case "rejected":
          throw o.reason;
        default:
          throw o;
      }
    },
    l = new WeakMap(),
    c = (o, g, _ = n) => {
      const v = l.get(o);
      if ((v == null ? void 0 : v[0]) === g) return v[1];
      const b = Array.isArray(o) ? [] : Object.create(Object.getPrototypeOf(o));
      return (
        te(b, !0),
        l.set(o, [g, b]),
        Reflect.ownKeys(o).forEach((j) => {
          if (Object.getOwnPropertyDescriptor(b, j)) return;
          const O = Reflect.get(o, j),
            P = { value: O, enumerable: !0, configurable: !0 };
          if (x.has(O)) te(O, !1);
          else if (O instanceof Promise) delete P.value, (P.get = () => _(O));
          else if (L.has(O)) {
            const [y, F] = L.get(O);
            P.value = c(y, F(), _);
          }
          Object.defineProperty(b, j, P);
        }),
        Object.preventExtensions(b)
      );
    },
    d = new WeakMap(),
    f = [1, 1],
    W = (o) => {
      if (!q(o)) throw new Error("object required");
      const g = d.get(o);
      if (g) return g;
      let _ = f[0];
      const v = new Set(),
        b = (i, a = ++f[0]) => {
          _ !== a && ((_ = a), v.forEach((r) => r(i, a)));
        };
      let j = f[1];
      const O = (i = ++f[1]) => (
          j !== i &&
            !v.size &&
            ((j = i),
            y.forEach(([a]) => {
              const r = a[1](i);
              r > _ && (_ = r);
            })),
          _
        ),
        P = (i) => (a, r) => {
          const h = [...a];
          (h[1] = [i, ...h[1]]), b(h, r);
        },
        y = new Map(),
        F = (i, a) => {
          if ((z ? "production" : void 0) !== "production" && y.has(i))
            throw new Error("prop listener already exists");
          if (v.size) {
            const r = a[3](P(i));
            y.set(i, [a, r]);
          } else y.set(i, [a]);
        },
        Z = (i) => {
          var a;
          const r = y.get(i);
          r && (y.delete(i), (a = r[1]) == null || a.call(r));
        },
        ue = (i) => (
          v.add(i),
          v.size === 1 &&
            y.forEach(([r, h], T) => {
              if ((z ? "production" : void 0) !== "production" && h)
                throw new Error("remove already exists");
              const $ = r[3](P(T));
              y.set(T, [r, $]);
            }),
          () => {
            v.delete(i),
              v.size === 0 &&
                y.forEach(([r, h], T) => {
                  h && (h(), y.set(T, [r]));
                });
          }
        ),
        H = Array.isArray(o) ? [] : Object.create(Object.getPrototypeOf(o)),
        k = t(H, {
          deleteProperty(i, a) {
            const r = Reflect.get(i, a);
            Z(a);
            const h = Reflect.deleteProperty(i, a);
            return h && b(["delete", [a], r]), h;
          },
          set(i, a, r, h) {
            const T = Reflect.has(i, a),
              $ = Reflect.get(i, a, h);
            if (T && (e($, r) || (d.has(r) && e($, d.get(r))))) return !0;
            Z(a), q(r) && (r = ge(r) || r);
            let V = r;
            if (r instanceof Promise)
              r.then((C) => {
                (r.status = "fulfilled"), (r.value = C), b(["resolve", [a], C]);
              }).catch((C) => {
                (r.status = "rejected"), (r.reason = C), b(["reject", [a], C]);
              });
            else {
              !L.has(r) && s(r) && (V = W(r));
              const C = !x.has(V) && L.get(V);
              C && F(a, C);
            }
            return Reflect.set(i, a, V, h), b(["set", [a], r, $]), !0;
          },
        });
      d.set(o, k);
      const fe = [H, O, c, ue];
      return (
        L.set(k, fe),
        Reflect.ownKeys(o).forEach((i) => {
          const a = Object.getOwnPropertyDescriptor(o, i);
          "value" in a && ((k[i] = o[i]), delete a.value, delete a.writable),
            Object.defineProperty(H, i, a);
        }),
        k
      );
    }
  ) => [W, L, x, e, t, s, n, l, c, d, f],
  [ve] = ye();
function A(e = {}) {
  return ve(e);
}
function M(e, t, s) {
  const n = L.get(e);
  (z ? "production" : void 0) !== "production" &&
    !n &&
    console.warn("Please use proxy object");
  let l;
  const c = [],
    d = n[3];
  let f = !1;
  const o = d((g) => {
    c.push(g),
      l ||
        (l = Promise.resolve().then(() => {
          (l = void 0), f && t(c.splice(0));
        }));
  });
  return (
    (f = !0),
    () => {
      (f = !1), o();
    }
  );
}
function be(e, t) {
  const s = L.get(e);
  (z ? "production" : void 0) !== "production" &&
    !s &&
    console.warn("Please use proxy object");
  const [n, l, c] = s;
  return c(n, l(), t);
}
const u = A({
    history: ["ConnectWallet"],
    view: "ConnectWallet",
    data: void 0,
  }),
  de = {
    state: u,
    subscribe(e) {
      return M(u, () => e(u));
    },
    push(e, t) {
      e !== u.view && ((u.view = e), t && (u.data = t), u.history.push(e));
    },
    reset(e) {
      (u.view = e), (u.history = [e]);
    },
    replace(e) {
      u.history.length > 1 &&
        ((u.history[u.history.length - 1] = e), (u.view = e));
    },
    goBack() {
      if (u.history.length > 1) {
        u.history.pop();
        const [e] = u.history.slice(-1);
        u.view = e;
      }
    },
    setData(e) {
      u.data = e;
    },
  },
  m = {
    WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
    WCM_VERSION: "WCM_VERSION",
    RECOMMENDED_WALLET_AMOUNT: 9,
    isMobile() {
      return typeof window < "u"
        ? !!(
            window.matchMedia("(pointer:coarse)").matches ||
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(
              navigator.userAgent
            )
          )
        : !1;
    },
    isAndroid() {
      return (
        m.isMobile() && navigator.userAgent.toLowerCase().includes("android")
      );
    },
    isIos() {
      const e = navigator.userAgent.toLowerCase();
      return m.isMobile() && (e.includes("iphone") || e.includes("ipad"));
    },
    isHttpUrl(e) {
      return e.startsWith("http://") || e.startsWith("https://");
    },
    isArray(e) {
      return Array.isArray(e) && e.length > 0;
    },
    isTelegram() {
      return (
        typeof window < "u" &&
        (!!window.TelegramWebviewProxy ||
          !!window.Telegram ||
          !!window.TelegramWebviewProxyProto)
      );
    },
    formatNativeUrl(e, t, s) {
      if (m.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
      let n = e;
      n.includes("://") ||
        ((n = e.replaceAll("/", "").replaceAll(":", "")), (n = `${n}://`)),
        n.endsWith("/") || (n = `${n}/`),
        this.setWalletConnectDeepLink(n, s);
      const l = encodeURIComponent(t);
      return `${n}wc?uri=${l}`;
    },
    formatUniversalUrl(e, t, s) {
      if (!m.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
      let n = e;
      if (n.startsWith("https://t.me")) {
        const c = Buffer.from(t).toString("base64").replace(/[=]/g, "");
        n.endsWith("/") && (n = n.slice(0, -1)),
          this.setWalletConnectDeepLink(n, s);
        const d = new URL(n);
        return d.searchParams.set("startapp", c), d.toString();
      }
      n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, s);
      const l = encodeURIComponent(t);
      return `${n}wc?uri=${l}`;
    },
    async wait(e) {
      return new Promise((t) => {
        setTimeout(t, e);
      });
    },
    openHref(e, t) {
      const s = this.isTelegram() ? "_blank" : t;
      window.open(e, s, "noreferrer noopener");
    },
    setWalletConnectDeepLink(e, t) {
      try {
        localStorage.setItem(
          m.WALLETCONNECT_DEEPLINK_CHOICE,
          JSON.stringify({ href: e, name: t })
        );
      } catch {
        console.info("Unable to set WalletConnect deep link");
      }
    },
    setWalletConnectAndroidDeepLink(e) {
      try {
        const [t] = e.split("?");
        localStorage.setItem(
          m.WALLETCONNECT_DEEPLINK_CHOICE,
          JSON.stringify({ href: t, name: "Android" })
        );
      } catch {
        console.info("Unable to set WalletConnect android deep link");
      }
    },
    removeWalletConnectDeepLink() {
      try {
        localStorage.removeItem(m.WALLETCONNECT_DEEPLINK_CHOICE);
      } catch {
        console.info("Unable to remove WalletConnect deep link");
      }
    },
    setModalVersionInStorage() {
      try {
        typeof localStorage < "u" &&
          localStorage.setItem(m.WCM_VERSION, "2.7.0");
      } catch {
        console.info("Unable to set Web3Modal version in storage");
      }
    },
    getWalletRouterData() {
      var e;
      const t = (e = de.state.data) == null ? void 0 : e.Wallet;
      if (!t) throw new Error('Missing "Wallet" view data');
      return t;
    },
  },
  Ie =
    typeof location < "u" &&
    (location.hostname.includes("localhost") ||
      location.protocol.includes("https")),
  p = A({
    enabled: Ie,
    userSessionId: "",
    events: [],
    connectedWalletId: void 0,
  }),
  _e = {
    state: p,
    subscribe(e) {
      return M(p.events, () => e(be(p.events[p.events.length - 1])));
    },
    initialize() {
      p.enabled &&
        typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" &&
        (p.userSessionId = crypto.randomUUID());
    },
    setConnectedWalletId(e) {
      p.connectedWalletId = e;
    },
    click(e) {
      if (p.enabled) {
        const t = {
          type: "CLICK",
          name: e.name,
          userSessionId: p.userSessionId,
          timestamp: Date.now(),
          data: e,
        };
        p.events.push(t);
      }
    },
    track(e) {
      if (p.enabled) {
        const t = {
          type: "TRACK",
          name: e.name,
          userSessionId: p.userSessionId,
          timestamp: Date.now(),
          data: e,
        };
        p.events.push(t);
      }
    },
    view(e) {
      if (p.enabled) {
        const t = {
          type: "VIEW",
          name: e.name,
          userSessionId: p.userSessionId,
          timestamp: Date.now(),
          data: e,
        };
        p.events.push(t);
      }
    },
  },
  w = A({
    chains: void 0,
    walletConnectUri: void 0,
    isAuth: !1,
    isCustomDesktop: !1,
    isCustomMobile: !1,
    isDataLoaded: !1,
    isUiLoaded: !1,
  }),
  I = {
    state: w,
    subscribe(e) {
      return M(w, () => e(w));
    },
    setChains(e) {
      w.chains = e;
    },
    setWalletConnectUri(e) {
      w.walletConnectUri = e;
    },
    setIsCustomDesktop(e) {
      w.isCustomDesktop = e;
    },
    setIsCustomMobile(e) {
      w.isCustomMobile = e;
    },
    setIsDataLoaded(e) {
      w.isDataLoaded = e;
    },
    setIsUiLoaded(e) {
      w.isUiLoaded = e;
    },
    setIsAuth(e) {
      w.isAuth = e;
    },
  },
  B = A({
    projectId: "",
    mobileWallets: void 0,
    desktopWallets: void 0,
    walletImages: void 0,
    chains: void 0,
    enableAuthMode: !1,
    enableExplorer: !0,
    explorerExcludedWalletIds: void 0,
    explorerRecommendedWalletIds: void 0,
    termsOfServiceUrl: void 0,
    privacyPolicyUrl: void 0,
  }),
  N = {
    state: B,
    subscribe(e) {
      return M(B, () => e(B));
    },
    setConfig(e) {
      var t, s;
      _e.initialize(),
        I.setChains(e.chains),
        I.setIsAuth(!!e.enableAuthMode),
        I.setIsCustomMobile(!!((t = e.mobileWallets) != null && t.length)),
        I.setIsCustomDesktop(!!((s = e.desktopWallets) != null && s.length)),
        m.setModalVersionInStorage(),
        Object.assign(B, e);
    },
  };
var we = Object.defineProperty,
  se = Object.getOwnPropertySymbols,
  Ee = Object.prototype.hasOwnProperty,
  Oe = Object.prototype.propertyIsEnumerable,
  ne = (e, t, s) =>
    t in e
      ? we(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  We = (e, t) => {
    for (var s in t || (t = {})) Ee.call(t, s) && ne(e, s, t[s]);
    if (se) for (var s of se(t)) Oe.call(t, s) && ne(e, s, t[s]);
    return e;
  };
const Y = "https://explorer-api.walletconnect.com",
  Q = "wcm",
  X = "js-2.7.0";
async function K(e, t) {
  const s = We({ sdkType: Q, sdkVersion: X }, t),
    n = new URL(e, Y);
  return (
    n.searchParams.append("projectId", N.state.projectId),
    Object.entries(s).forEach(([c, d]) => {
      d && n.searchParams.append(c, String(d));
    }),
    (await fetch(n)).json()
  );
}
const S = {
  async getDesktopListings(e) {
    return K("/w3m/v1/getDesktopListings", e);
  },
  async getMobileListings(e) {
    return K("/w3m/v1/getMobileListings", e);
  },
  async getInjectedListings(e) {
    return K("/w3m/v1/getInjectedListings", e);
  },
  async getAllListings(e) {
    return K("/w3m/v1/getAllListings", e);
  },
  getWalletImageUrl(e) {
    return `${Y}/w3m/v1/getWalletImage/${e}?projectId=${N.state.projectId}&sdkType=${Q}&sdkVersion=${X}`;
  },
  getAssetImageUrl(e) {
    return `${Y}/w3m/v1/getAssetImage/${e}?projectId=${N.state.projectId}&sdkType=${Q}&sdkVersion=${X}`;
  },
};
var Ce = Object.defineProperty,
  oe = Object.getOwnPropertySymbols,
  Le = Object.prototype.hasOwnProperty,
  Ae = Object.prototype.propertyIsEnumerable,
  re = (e, t, s) =>
    t in e
      ? Ce(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  Pe = (e, t) => {
    for (var s in t || (t = {})) Le.call(t, s) && re(e, s, t[s]);
    if (oe) for (var s of oe(t)) Ae.call(t, s) && re(e, s, t[s]);
    return e;
  };
const ae = m.isMobile(),
  E = A({
    wallets: { listings: [], total: 0, page: 1 },
    search: { listings: [], total: 0, page: 1 },
    recomendedWallets: [],
  }),
  Re = {
    state: E,
    async getRecomendedWallets() {
      const { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } =
        N.state;
      if (e === "NONE" || (t === "ALL" && !e)) return E.recomendedWallets;
      if (m.isArray(e)) {
        const n = { recommendedIds: e.join(",") },
          { listings: l } = await S.getAllListings(n),
          c = Object.values(l);
        c.sort((d, f) => {
          const W = e.indexOf(d.id),
            o = e.indexOf(f.id);
          return W - o;
        }),
          (E.recomendedWallets = c);
      } else {
        const { chains: s, isAuth: n } = I.state,
          l = s == null ? void 0 : s.join(","),
          c = m.isArray(t),
          d = {
            page: 1,
            sdks: n ? "auth_v1" : void 0,
            entries: m.RECOMMENDED_WALLET_AMOUNT,
            chains: l,
            version: 2,
            excludedIds: c ? t.join(",") : void 0,
          },
          { listings: f } = ae
            ? await S.getMobileListings(d)
            : await S.getDesktopListings(d);
        E.recomendedWallets = Object.values(f);
      }
      return E.recomendedWallets;
    },
    async getWallets(e) {
      const t = Pe({}, e),
        { explorerRecommendedWalletIds: s, explorerExcludedWalletIds: n } =
          N.state,
        { recomendedWallets: l } = E;
      if (n === "ALL") return E.wallets;
      l.length
        ? (t.excludedIds = l.map((_) => _.id).join(","))
        : m.isArray(s) && (t.excludedIds = s.join(",")),
        m.isArray(n) &&
          (t.excludedIds = [t.excludedIds, n].filter(Boolean).join(",")),
        I.state.isAuth && (t.sdks = "auth_v1");
      const { page: c, search: d } = e,
        { listings: f, total: W } = ae
          ? await S.getMobileListings(t)
          : await S.getDesktopListings(t),
        o = Object.values(f),
        g = d ? "search" : "wallets";
      return (
        (E[g] = { listings: [...E[g].listings, ...o], total: W, page: c ?? 1 }),
        { listings: o, total: W }
      );
    },
    getWalletImageUrl(e) {
      return S.getWalletImageUrl(e);
    },
    getAssetImageUrl(e) {
      return S.getAssetImageUrl(e);
    },
    resetSearch() {
      E.search = { listings: [], total: 0, page: 1 };
    },
  },
  U = A({ open: !1 }),
  J = {
    state: U,
    subscribe(e) {
      return M(U, () => e(U));
    },
    async open(e) {
      return new Promise((t) => {
        const { isUiLoaded: s, isDataLoaded: n } = I.state;
        if (
          (m.removeWalletConnectDeepLink(),
          I.setWalletConnectUri(e == null ? void 0 : e.uri),
          I.setChains(e == null ? void 0 : e.chains),
          de.reset("ConnectWallet"),
          s && n)
        )
          (U.open = !0), t();
        else {
          const l = setInterval(() => {
            const c = I.state;
            c.isUiLoaded &&
              c.isDataLoaded &&
              (clearInterval(l), (U.open = !0), t());
          }, 200);
        }
      });
    },
    close() {
      U.open = !1;
    },
  };
var Se = Object.defineProperty,
  ie = Object.getOwnPropertySymbols,
  De = Object.prototype.hasOwnProperty,
  Me = Object.prototype.propertyIsEnumerable,
  le = (e, t, s) =>
    t in e
      ? Se(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  je = (e, t) => {
    for (var s in t || (t = {})) De.call(t, s) && le(e, s, t[s]);
    if (ie) for (var s of ie(t)) Me.call(t, s) && le(e, s, t[s]);
    return e;
  };
function Te() {
  return (
    typeof matchMedia < "u" &&
    matchMedia("(prefers-color-scheme: dark)").matches
  );
}
const R = A({ themeMode: Te() ? "dark" : "light" }),
  ce = {
    state: R,
    subscribe(e) {
      return M(R, () => e(R));
    },
    setThemeConfig(e) {
      const { themeMode: t, themeVariables: s } = e;
      t && (R.themeMode = t), s && (R.themeVariables = je({}, s));
    },
  },
  D = A({ open: !1, message: "", variant: "success" }),
  ke = {
    state: D,
    subscribe(e) {
      return M(D, () => e(D));
    },
    openToast(e, t) {
      (D.open = !0), (D.message = e), (D.variant = t);
    },
    closeToast() {
      D.open = !1;
    },
  };
class Ue {
  constructor(t) {
    (this.openModal = J.open),
      (this.closeModal = J.close),
      (this.subscribeModal = J.subscribe),
      (this.setTheme = ce.setThemeConfig),
      ce.setThemeConfig(t),
      N.setConfig(t),
      this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await pe(() => import("./index-DN8hOEWo.js"), __vite__mapDeps([0, 1, 2]));
      const t = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", t), I.setIsUiLoaded(!0);
    }
  }
}
const Ve = Object.freeze(
  Object.defineProperty(
    { __proto__: null, WalletConnectModal: Ue },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export {
  m as C,
  Re as E,
  J as M,
  I as O,
  de as R,
  ce as T,
  ke as a,
  _e as b,
  N as c,
  Ve as i,
};
