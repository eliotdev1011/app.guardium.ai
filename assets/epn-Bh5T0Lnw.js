import {
  j as e,
  w as k,
  d as g,
  r as j,
  c as C,
  a as P,
  x as y,
  S,
  B as u,
  Q as L,
  F as h,
  I as p,
  b as _,
  u as V,
  h as E,
} from "./index-NBfXeSsy.js";
import { V as A } from "./vpnService.http-e0Cr0eu7.js";
import M from "./vpnConfig-TjGAnDIo.js";
function f() {
  return e.jsx("div", {
    className: "downloadLinks_wrapper",
    children: e.jsxs("div", {
      className: "downloadLinks",
      children: [
        e.jsx("a", {
          href: "https://apps.apple.com/app/id1506797696",
          target: "_blank",
          children: e.jsx("img", { src: "../App Store Black.svg" }),
        }),
        e.jsx("a", {
          href: "https://play.google.com/store/apps/details?id=com.shieldeum.epn",
          target: "_blank",
          children: e.jsx("img", { src: "../Google Play Black.svg" }),
        }),
        e.jsx("a", {
          href: "https://dl.shieldeum.net/shieldeum-epn.exe",
          target: "_blank",
          children: e.jsx("img", { src: "../Microsoft Black.svg" }),
        }),
        e.jsx("a", {
          href: "https://dl.shieldeum.net/shieldeum-epn.dmg",
          target: "_blank",
          children: e.jsx("img", { src: "../Mac App Stor.svg" }),
        }),
        e.jsx("a", {
          href: "https://dl.shieldeum.net/shieldeum-epn.apk",
          target: "_blank",
          children: e.jsx("img", { src: "../Group 6.svg" }),
        }),
      ],
    }),
  });
}
const q = () => {
  const { connectWallet: s, signInSequence: n } = k(),
    { t: a } = g();
  return (
    j.useEffect(() => {
      const r = setTimeout(() => {
        n();
      }, 300);
      return () => {
        clearTimeout(r);
      };
    }, [n]),
    e.jsx(e.Fragment, {
      children: e.jsxs("div", {
        className: "epmPage_connect_container ",
        children: [
          e.jsxs("div", {
            className:
              "epmPage_connect d-flex  flex-column align-items-center justify-content-center",
            children: [
              e.jsx("div", {
                className: "text-center epmPage_connect_title",
                children: a("ConnecToWallet"),
              }),
              e.jsx("img", { src: "/png/logos_metamask-icon.png", alt: "fox" }),
              e.jsxs(C, {
                onClick: s,
                className: "btn btn-green btn-textWight mt-4",
                children: [
                  e.jsxs("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      e.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4.5 7.5C3.67157 7.5 3 8.17157 3 9V18C3 18.8284 3.67157 19.5 4.5 19.5H19.5C20.3284 19.5 21 18.8284 21 18V9C21 8.17157 20.3284 7.5 19.5 7.5H4.5ZM1.5 9C1.5 7.34315 2.84315 6 4.5 6H19.5C21.1569 6 22.5 7.34315 22.5 9V18C22.5 19.6569 21.1569 21 19.5 21H4.5C2.84315 21 1.5 19.6569 1.5 18V9Z",
                        fill: "white",
                      }),
                      e.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16.3672 2.30423C16.812 2.22061 17.2698 2.23561 17.7083 2.34822C18.1493 2.46146 18.5598 2.67064 18.9106 2.96082C19.2614 3.25099 19.5439 3.61502 19.7378 4.02693C19.9317 4.43883 20.0324 4.88846 20.0325 5.34373V6.75022H18.5325V5.34421C18.5325 5.34413 18.5325 5.34405 18.5325 5.34397C18.5324 5.10952 18.4806 4.87798 18.3807 4.66586C18.2808 4.45367 18.1353 4.26614 17.9546 4.11665C17.7738 3.96717 17.5624 3.85941 17.3352 3.80107C17.108 3.74273 16.8708 3.73525 16.6404 3.77915C16.6357 3.78005 16.6309 3.78091 16.6262 3.78172L4.289 5.88742C3.927 5.95794 3.60059 6.15184 3.36549 6.43617C3.12901 6.72217 2.99975 7.08173 3 7.45284L3 9.75022H1.5V7.45357C1.5 7.4535 1.5 7.45342 1.5 7.45335C1.49963 6.73314 1.75054 6.03537 2.20949 5.48032C2.66854 4.92514 3.30695 4.54756 4.0146 4.4127C4.01933 4.4118 4.02407 4.41094 4.02882 4.41013L16.3672 2.30423Z",
                        fill: "white",
                      }),
                      e.jsx("path", {
                        d: "M17.25 15C16.9533 15 16.6633 14.912 16.4166 14.7472C16.17 14.5824 15.9777 14.3481 15.8642 14.074C15.7506 13.7999 15.7209 13.4983 15.7788 13.2074C15.8367 12.9164 15.9796 12.6491 16.1893 12.4393C16.3991 12.2296 16.6664 12.0867 16.9574 12.0288C17.2483 11.9709 17.5499 12.0006 17.824 12.1142C18.0981 12.2277 18.3324 12.42 18.4972 12.6666C18.662 12.9133 18.75 13.2033 18.75 13.5C18.75 13.8978 18.592 14.2794 18.3107 14.5607C18.0294 14.842 17.6478 15 17.25 15Z",
                        fill: "white",
                      }),
                    ],
                  }),
                  e.jsx("span", { children: a("connectWallet") }),
                ],
              }),
            ],
          }),
          e.jsx(f, {}),
        ],
      }),
    })
  );
};
function F() {
  var m, w, v, N;
  const [s, n] = j.useState(!1),
    { t: a } = g(),
    {
      register: r,
      handleSubmit: d,
      clearErrors: l,
      formState: { errors: t },
    } = P(),
    c = y(),
    o = d(async (b) => {
      n(!0);
      try {
        const i = await A.register({
          ...b,
          token: localStorage.getItem("token"),
        });
        c(
          S({
            user: {
              ...i.data,
              meta: {
                ...i.data.meta,
                vpn: {
                  ...i.data.meta.vpn,
                  data: { ...i.data.meta.vpn.data, password: b.password },
                },
              },
            },
          })
        ),
          u.success("user created!");
      } catch (i) {
        i.data.message
          ? u.error(i.data.message)
          : u.error("something gets wrong");
      } finally {
        n(!1);
      }
    });
  return e.jsxs("div", {
    className: "createEpmAcc",
    children: [
      e.jsxs("div", {
        className: "ntfc",
        children: [
          e.jsxs("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              e.jsx("g", {
                "clip-path": "url(#clip0_2158_700)",
                children: e.jsx("path", {
                  d: "M4.79961 9.0001L8.39961 12.0001L13.1996 6.0001M8.99961 17.4001C7.89651 17.4001 6.8042 17.1828 5.78507 16.7607C4.76593 16.3385 3.83992 15.7198 3.05991 14.9398C2.2799 14.1598 1.66116 13.2338 1.23902 12.2146C0.816882 11.1955 0.599609 10.1032 0.599609 9.0001C0.599609 7.89699 0.816882 6.80469 1.23902 5.78556C1.66116 4.76642 2.2799 3.84041 3.05991 3.0604C3.83992 2.28039 4.76593 1.66165 5.78507 1.23951C6.8042 0.81737 7.89651 0.600098 8.99961 0.600098C11.2274 0.600098 13.364 1.4851 14.9393 3.0604C16.5146 4.63571 17.3996 6.77228 17.3996 9.0001C17.3996 11.2279 16.5146 13.3645 14.9393 14.9398C13.364 16.5151 11.2274 17.4001 8.99961 17.4001Z",
                  stroke: "#39FFB5",
                }),
              }),
              e.jsx("defs", {
                children: e.jsx("clipPath", {
                  id: "clip0_2158_700",
                  children: e.jsx("rect", {
                    width: "18",
                    height: "18",
                    fill: "white",
                  }),
                }),
              }),
            ],
          }),
          e.jsx("span", { children: "Wallet connected successfuly" }),
        ],
      }),
      e.jsx(L, {}),
      e.jsx("div", {
        className: "createEpmAcc_wrapper",
        children: e.jsxs("div", {
          className: "createEpmAcc_form",
          children: [
            e.jsx("div", { className: "lbl", children: "Free access" }),
            e.jsxs("div", {
              className: "createEpmAcc_title",
              children: ["Free Shieldeum ", a("EncryptedNetwork")],
            }),
            e.jsx("p", {
              className: "createEpmAcc_p",
              children: "Get free access while waiting for the token launch.",
            }),
            e.jsxs("form", {
              autoComplete: "off",
              className: "",
              onSubmit: o,
              children: [
                e.jsx("label", { children: a("Username") }),
                e.jsx(h, {
                  errorMessage:
                    ((m = t.username) == null ? void 0 : m.type) === "required"
                      ? "Username is required"
                      : ((w = t.username) == null ? void 0 : w.type) ===
                        "minLength"
                      ? "Username must be at least 6 characters"
                      : "",
                  children: e.jsx(p, {
                    onChange: () => {
                      l("username");
                    },
                    useRef: r("username", {
                      required: "Username is required",
                      minLength: {
                        value: 6,
                        message: "Username must be at least 6 characters",
                      },
                    }),
                    hasError: !!t.username,
                    name: "username",
                    placeholder: a("Username"),
                  }),
                }),
                e.jsxs("div", {
                  className: "my-3",
                  children: [
                    e.jsx("label", { children: a("password") }),
                    e.jsx(h, {
                      errorMessage:
                        ((v = t.password) == null ? void 0 : v.type) ===
                        "required"
                          ? "Password is required"
                          : ((N = t.password) == null ? void 0 : N.type) ===
                            "minLength"
                          ? "Password must be at least 6 characters"
                          : "",
                      children: e.jsx(p, {
                        useRef: r("password", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                          },
                        }),
                        onChange: () => {
                          l("password");
                        },
                        name: "password",
                        type: "password",
                        placeholder: a("password"),
                        hasError: !!t.password,
                      }),
                    }),
                  ],
                }),
                e.jsx(C, {
                  loading: s,
                  className:
                    "btn btn-lg btn-green btn-textWight w-100 justify-content-center",
                  children: "Create an account",
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(f, {}),
    ],
  });
}
const x = ({ title: s, children: n }) =>
    e.jsxs("div", {
      className: "contentContainer",
      children: [s && e.jsx("h3", { children: s }), n],
    }),
  U = () => {
    var l, t, c;
    const s = _((o) => o.auth),
      n = V(),
      { t: a, i18n: r } = g(),
      d = r.language.split("-")[0] || "en";
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx("div", {
          className: "mb-5",
          children: e.jsx(x, {
            title: a("ShieldeumEPNCredentials"),
            children: e.jsxs("div", {
              className: "epmDetails d-flex align-items-end",
              children: [
                e.jsxs("form", {
                  autoComplete: "off",
                  className: " d-flex  w-100",
                  children: [
                    e.jsxs("div", {
                      className: "",
                      children: [
                        e.jsx("label", { children: a("Username") }),
                        e.jsx(h, {
                          children: e.jsx(p, {
                            value:
                              (c =
                                (t = (l = s.user) == null ? void 0 : l.meta) ==
                                null
                                  ? void 0
                                  : t.vpn.data) == null
                                ? void 0
                                : c.username,
                            readonly: !0,
                            name: "username",
                            placeholder: a("Username"),
                          }),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "",
                      children: [
                        e.jsx("label", { children: a("Password") }),
                        e.jsx(h, {
                          children: e.jsx(p, {
                            readonly: !0,
                            name: "password",
                            type: "password",
                            placeholder: a("Password"),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx(C, {
                  onClick: () => {
                    n(`/${d}/EPN/changePassword`);
                  },
                  className: "btn  btn-green btn-lg",
                  children: "Change password",
                }),
              ],
            }),
          }),
        }),
        e.jsx("div", {
          className: "epmDetails_downloadLinks mb-5",
          children: e.jsx(x, {
            title: a("ShieldeumEPNApps"),
            children: e.jsx(f, {}),
          }),
        }),
        e.jsx("div", {
          className: "epmConfig mb-5",
          children: e.jsx(x, {
            title: a("VPNConfigs"),
            children: e.jsx(M, {}),
          }),
        }),
      ],
    });
  },
  B = () => {
    var n, a, r, d, l, t, c, o;
    E();
    const s = _((m) => m.auth);
    if ((console.log(s, "store"), s != null && s.loading))
      return e.jsx(e.Fragment, {});
    if (s.token) {
      if (
        s.token &&
        !(
          (d =
            (r =
              (a = (n = s.user) == null ? void 0 : n.meta) == null
                ? void 0
                : a.vpn) == null
              ? void 0
              : r.data) != null && d.username
        )
      )
        return e.jsx(F, {});
      if (
        s.token &&
        (o =
          (c =
            (t = (l = s.user) == null ? void 0 : l.meta) == null
              ? void 0
              : t.vpn) == null
            ? void 0
            : c.data) != null &&
        o.username
      )
        return e.jsx(U, {});
    } else return e.jsx(q, {});
    return e.jsx("div", {
      className: "text-center",
      children: "Page not found",
    });
  },
  T = () => {
    E(!1);
    const { signInSequence: s } = k();
    return (
      j.useEffect(() => {
        const n = setTimeout(() => {
          s();
        }, 300);
        return () => {
          clearTimeout(n);
        };
      }, [s]),
      e.jsx("div", {
        className: "epmPage",
        children: e.jsx("div", {
          className: " epmPage_main",
          children: e.jsx(B, {}),
        }),
      })
    );
  };
export { T as default };
