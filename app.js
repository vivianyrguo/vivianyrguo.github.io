// data for various sections
const experiencesData = [
  {
    roleTitle: "Python Web Developer",
    roleCompany: "OANDA",
    roleCompanyLink: "https://www.linkedin.com/company/oanda/",
    roleDuration: "Sep - Dec 2023",
    roleTechnologies: [
      { tech: "Python", class: "tag-1" },
      { tech: "JavaScript", class: "tag-2" },
      { tech: "Bash", class: "tag-3" },
    ],
    roleSummary:
      "OANDA is an online trading group offering services such as forex trading platform and currency data. I interned as a web developer on the Funding backend team, taking on various tickets for improving OANDA’s internal client management platforms, and contributing to OANDA's Funding API.",
  },
  {
    roleTitle: "Research Intern",
    roleCompany: "DarwinAI",
    roleCompanyLink: "https://www.linkedin.com/company/darwinai/",
    roleDuration: "Jan - Apr 2023",
    roleTechnologies: [
      { tech: "Python", class: "tag-1" },
      { tech: "Bash", class: "tag-3" },
    ],
    roleSummary:
      "DarwinAI provides end-to-end visual quality inspection for printed circuit boards with cutting edge AI. A dominant part of my work as a research intern involved developing scripts to improve efficiency for image processing and ensuring the quality of training data.",
  },
  {
    roleTitle: "Tax Intern",
    roleCompany: "Hazelview Investments",
    roleCompanyLink: "https://www.linkedin.com/company/hazelviewinvestments/",
    roleDuration: "May - Aug 2023",
    roleTechnologies: [
      { tech: "Python", class: "tag-1" },
      { tech: "Microsoft VBA", class: "tag-4" },
    ],
    roleSummary:
      "Hazelview Investments is a real estate investment company generating value for people and properties. As a tax intern on the Finance & Operations team, my work involved assisting the tax partner with tax filings and automating existing processes with Microsoft VBA and Python scripts.",
  },
];

const projectsData = [
  {
    title: "Improvements to Waterloo Business Review's Website",
    link: "https://github.com/waterloobr/waterloobr.github.io",
    tags: [{ tech: "HTML, CSS, JavaScript", class: "tag-4" }],
    date: "Nov - Dec 2023",
    affliated: "Waterloo Business Review",
    blurb: "",
  },
  {
    title: "The Digital Recession",
    link: "https://waterloobusinessreview.com/articles/fall-2022/dr.html",
    tags: [{ tech: "Research & Writing", class: "tag-3" }],
    date: "Sep - Dec 2022",
    affliated: "Waterloo Business Review",
    blurb: "",
  },
  {
    title: "Computer Science Class Profile 2022",
    link: "https://csclub.uwaterloo.ca/classprofile/2022/",
    tags: [{ tech: "Design", class: "tag-2" }],
    date: "Jan - Apr 2022",
    affliated: "University of Waterloo Computer Science Club",
    blurb: "",
  },
  {
    title:
      "Machine Learning May Destroy Objective Truth on the Internet Forever",
    link: "https://waterloobusinessreview.com/articles/fall-2021/machine_learning.html",
    tags: [{ tech: "Research & Writing", class: "tag-3" }],
    date: "Sep - Dec 2021",
    affliated: "Waterloo Business Review",
    blurb: "",
  },
  // {
  //   title: "Portfolio Optimizer",
  //   link: "https://github.com/vivianvg/cfm101/blob/main/CFM_FinalGroupAssignment.pdf",
  //   tags: [{ tech: "Python", class: "tag-1" }],
  //   date: "Dec 2021",
  //   affliated: "CFM101",
  //   blurb: "",
  // },
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
    const company_link = vnode.attrs.company_link;
    const tech = vnode.attrs.tech;
    const duration = vnode.attrs.duration;
    const summary = vnode.attrs.summary;

    return m("div", { class: "role" }, [
      //   m("hr"),
      m("div", { class: "role-details" }, [
        m("b", [title + " | ", m("a", { href: company_link, target: "_blank" }, company)]),
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
          company_link: role.roleCompanyLink,
          tech: role.roleTechnologies,
          duration: role.roleDuration,
          summary: role.roleSummary,
        });
      }),
    ];
  },
};
m.mount(document.getElementById("experiences-content"), Experience);

// Projects
var Projects = {
  view: function () {
    return [
      projectsData.map(function (project) {
        return m("div", { class: "role" }, [
          m("a", { href: project.link, target: "_blank" }, project.title),
          m(Tags, { tags: project.tags }),
          m(
            "div",
            { class: "secondary-text" },
            project.date + " | " + project.affliated
          ),
        ]);
      }),
    ];
  },
};
m.mount(document.getElementById("projects-content"), Projects);

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
