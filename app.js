const HeaderData = {
  darkmode: "",
};

const experiencesData = [
  {
    roleTitle: "Python Web Developer",
    roleCompany: "OANDA",
    roleDuration: "Sep - Dec 2023",
    roleTechnologies: [
      { tech: "Python", class: "tag-1" },
      { tech: "JavaScript", class: "tag-2" },
      { tech: "Bash", class: "tag-3" },
    ],
    roleSummary:
      "OANDA is an online trading group offering services such as forex trading platform and currency data. I interned as a web developer on the Funding backend team, taking on various tickets for improving OANDA’s internal client management platforms, and contributing to OANDA's funding API.",
  },
  {
    roleTitle: "Research Intern",
    roleCompany: "DarwinAI",
    roleDuration: "Jan - Apr 2023",
    roleTechnologies: [
      { tech: "Python", class: "tag-1" },
      { tech: "Bash", class: "tag-3" },
    ],
    roleSummary:
      "DarwinAI provides end-to-end visual quality inspection for printed circuit boards with cutting edge AI. A dominant part of my work as a research intern invovled developing scripts to improve efficiency for image processing and ensuring the quality of training data.",
  },
  {
    roleTitle: "Tax Intern",
    roleCompany: "Hazelview Investments",
    roleDuration: "May - Aug 2023",
    roleTechnologies: [
      { tech: "Python", class: "tag-1" },
      { tech: "Microsoft VBA", class: "tag-4" },
    ],
    roleSummary:
      "Hazelview Investments is a real estate investment company generating value for people and properties. As a tax intern on the Finance & Operations team, my work involved assisting the tax partner with tax filings and automating existing processes with Microsoft VBA and Python scripts.",
  },
];

const socialsData = [
  {
    platform: "LinkedIn",
    link: "https://www.linkedin.com/in/vivianvg/ ",
  },
  {
    platform: "Github",
    link: "https://github.com/vivianvg",
  },
  {
    platform: "Devpost",
    link: "https://devpost.com/vivianguo?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
  },
];

// Experiences
var Tags = {
  view: function (vnode) {
    const tags = vnode.attrs.tags;
    return m("div", { class: "tech-tags-container" }, [
      tags.map(function (tag) {
        return m("span", { class: "tech-tag " + tag.class }, tag.tech);
      }),
    ]);
  },
};

var Role = {
  view: function (vnode) {
    const title = vnode.attrs.title;
    const company = vnode.attrs.company;
    const tech = vnode.attrs.tech;
    const duration = vnode.attrs.duration;
    const summary = vnode.attrs.summary;

    return m("div", { class: "role" }, [
      //   m("hr"),
      m("div", { class: "role-details" }, [
        m("b", title + " | " + company),
        m(Tags, { tags: tech }),
        m("div", { class: "secondary-text" }, duration),
      ]),
      m("div", { class: "role-summary" }, summary),
    ]);
  },
};

var Experience = {
  view: function (vnode) {
    return [
      experiencesData.map(function (role) {
        return m(Role, {
          title: role.roleTitle,
          company: role.roleCompany,
          tech: role.roleTechnologies,
          duration: role.roleDuration,
          summary: role.roleSummary,
        });
      }),
    ];
  },
};
m.mount(document.getElementById("experiences-content"), Experience);

// Connect
var Connect = {
  view: function () {
    return [
      socialsData.map(function (social) {
        return m(
          "div",
          m("a", { href: social.link, target: "_blank" }, social.platform)
        );
      }),
    ];
  },
};
m.mount(document.getElementById("connect-content"), Connect);

// Header
var Header = {
  view: function () {
    return m("div", { class: "row" }, "");
  },
};
m.mount(document.getElementsByTagName("header")[0], Header);
