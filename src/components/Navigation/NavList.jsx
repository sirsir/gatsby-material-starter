import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";
// import { useStaticQuery, Link, graphql } from "gatsby"

// const data = useStaticQuery(
//   graphql`
//   query TopMenuQuery {
//     allMarkdownRemark(
//       limit: 2000
//       sort: { fields: [fields___date], order: DESC }
//       filter: {fileAbsolutePath: {regex: "/menus/"}}
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//             date
//           }
//           excerpt
//           timeToRead
//           frontmatter {
//             title
//             tags
//             cover
//             date
//             href
//           }
//         }
//       }
//     }
//   }
// `
// )

// const data = useStaticQuery(
//   graphql`
//     query {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `
// )

function GetNavList(config, menus) {
  

  const NavList = [
    {
      primaryText: "Home",
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: "/"
    },
    // {
    //   primaryText: "Home2",
    //   leftIcon: <FontIcon>home</FontIcon>,
    //   component: Link,
    //   to: "/"
    // },
    {
      divider: true
    },
    // {
    //   primaryText: "menu.node.frontmatter.title",
    //   leftIcon: <FontIcon>home</FontIcon>,
    //   component: "a",
    //   href: "menu.node.frontmatter.href"
    // }
  ];

  // const NavList = data.data.allMarkdownRemark.edges.map(edge=>{
  //   return {
  //     primaryText: "Home",
  //     leftIcon: <FontIcon>home</FontIcon>,
  //     component: Link,
  //     to: "/"
  //   }
  // })
  // console.log("xxxx")
  // console.log(menus)
  
  // NavList.push({
  //   primaryText: "menu.node.frontmatter.title",
  //   leftIcon: <FontIcon>home</FontIcon>,
  //   component: "a",
  //   href: "menu.node.frontmatter.href"
  // });

  if (menus) {
    menus.forEach(menu => {
      NavList.push({
        primaryText: menu.node.frontmatter.title,
        // leftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        // component: "a",
        component: Link,
        // href: menu.node.frontmatter.href
        to: menu.node.frontmatter.href,
      });
    });
  }

  NavList.push({
    divider: true
  })
  

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
  }

  NavList.push({ divider: true });

  NavList.push({
    primaryText: "About",
    leftIcon: <FontIcon>person</FontIcon>,
    component: Link,
    to: "/about/"
  });
  return NavList;
}
export default GetNavList;
