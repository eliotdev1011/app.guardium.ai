import { d, r as a, j as e, e as n } from "./index-NBfXeSsy.js";
const h = () => {
  const { t: s } = d(),
    [t, r] = a.useState(0);
  return (
    a.useEffect(() => {
      const i = document.createElement("script");
      return (
        (i.charset = "utf-8"),
        (i.type = "text/javascript"),
        (i.src = "//js.hsforms.net/forms/embed/v2.js"),
        document.body.appendChild(i),
        (i.onload = () => {
          var c;
          window != null &&
            window.hbspt &&
            ((c = window == null ? void 0 : window.hbspt) == null ||
              c.forms.create({
                region: "na1",
                portalId: "532220",
                formId: "62407760-c2c0-4570-b7df-f9d82345e983",
                target: "#hubspot-form-container",
              }));
        }),
        () => {
          document.body.removeChild(i);
        }
      );
    }, []),
    e.jsxs("div", {
      className: "threatProtection",
      children: [
        e.jsxs("div", {
          className:
            "threatProtection_banner d-flex justify-content-between  align-items-center ",
          children: [
            e.jsx("div", {
              className: " d-none d-md-block ",
              children: e.jsx("img", {
                src: "/png/robot-eevee0069 1.png",
                alt: "",
              }),
            }),
            e.jsx("div", {
              className: "threatProtection_banner_textContainer",
              children: e.jsxs("div", {
                children: [
                  e.jsx("h2", { children: "Guardium Threat Protection" }),
                  e.jsx("span", {
                    children: s(
                      "Protect_Your_Brand_with_Cutting_Edge_AI_Technology"
                    ),
                  }),
                  e.jsx("p", { children: s("In_the_rapidly_evolving") }),
                ],
              }),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "threatProtection_features",
          children: [
            e.jsxs("div", {
              className: "text-center threatProtection_features_head  ",
              children: [
                e.jsx("h2", {
                  className: " d-none d-md-block",
                  children: s("Features"),
                }),
                e.jsx("h2", {
                  className: " d-block d-md-none",
                  children: "How it works",
                }),
                e.jsx("p", {
                  className: " d-none d-md-block",
                  children: s("Shieldeum_Threat_Protection"),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "threatProtection_features_cardsWrapper",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("img", { src: "/icons/Group 236.svg", alt: "" }),
                        e.jsx("h3", {
                          children: s("Brand_Specific_Monitoring"),
                        }),
                      ],
                    }),
                    e.jsx("p", { children: s("Our_AI_is_fed_with") }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("img", { src: "/icons/Group 237.svg", alt: "" }),
                        e.jsx("h3", { children: s("Threat_Detection") }),
                      ],
                    }),
                    e.jsx("p", { children: s("The_system_scours_the") }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("img", { src: "/icons/Group 238.svg", alt: "" }),
                        e.jsx("h3", { children: s("Immediate_Action") }),
                      ],
                    }),
                    e.jsx("p", { children: s("Upon_detecting_these_threats") }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "threatProtection_steps",
          children: [
            e.jsx("div", {
              className:
                " flex-column d-flex align-items-center justify-content-center ",
              children: e.jsx("h3", { children: s("Why_Choose_Shieldeum") }),
            }),
            e.jsxs("div", {
              children: [
                e.jsxs("div", {
                  className: n("threatProtection_steps_item pointer", {
                    "threatProtection_steps_item-active": t === 0,
                  }),
                  onClick: () => r(0),
                  children: [
                    e.jsxs("h4", {
                      className: "  d-flex align-items-center  p-0",
                      children: [
                        e.jsx("span", { children: "01" }),
                        " ",
                        s("Comprehensive_Coverage"),
                      ],
                    }),
                    t === 0 &&
                      e.jsx("p", { children: s("We_protect_against_a_wide") }),
                  ],
                }),
                e.jsxs("div", {
                  className: n("threatProtection_steps_item pointer", {
                    "threatProtection_steps_item-active": t === 1,
                  }),
                  onClick: () => r(1),
                  children: [
                    e.jsxs("h4", {
                      className: "  d-flex align-items-center pb-0 ",
                      children: [
                        e.jsx("span", { children: "02" }),
                        " ",
                        s("Real_Time_Monitoring"),
                      ],
                    }),
                    t === 1 &&
                      e.jsx("p", { children: s("Our_AI_continuously_scans") }),
                  ],
                }),
                e.jsxs("div", {
                  className: n("threatProtection_steps_item pointer", {
                    "threatProtection_steps_item-active": t === 2,
                  }),
                  onClick: () => r(2),
                  children: [
                    e.jsxs("h4", {
                      className: "  d-flex align-items-center pb-0 ",
                      children: [
                        e.jsx("span", { children: "03" }),
                        " ",
                        s("Trusted_Reporting"),
                      ],
                    }),
                    t === 2 &&
                      e.jsx("p", {
                        children: s("We_collaborate_with_top_cybersecurity"),
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "threatProtection_cardsWrapper",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("h3", { children: s("The_Need_for_Enhanced_Security") }),
                e.jsx("p", { children: s("The_rise_of_cryptocurrency_has") }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx("h3", { children: s("Stay_Ahead_of_Scammers") }),
                e.jsx("p", { children: s("With_Shieldeum_Threat_Protection") }),
              ],
            }),
          ],
        })        
      ],
    })
  );
};
export { h as default };
