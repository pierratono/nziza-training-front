/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// exports.onCreateWebpackConfig = ({
//     actions,
// }) => {
//     const { setWebpackConfig } = actions;
//     setWebpackConfig({
//         externals: {
//             jquery: 'jQuery', // important: 'Q' capitalized
//         }
//     })
// }

const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
        graphql(request).then(result => {
            if (result.errors) {
                reject(result.errors)
            }

            return result;
        })
    )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const getCourses = makeRequest(graphql, `
     {
    allStrapiCourses {
      edges {
        node{
            id
        }
      }
    }
  }
`).then(result => {
        // Create pages for each courses.
    result.data.allStrapiCourses.edges.forEach(({ node }) => {
            createPage({
                path: `/${node.id}`,
                component: path.resolve(`src/templates/courses.js`),
                context: {
                    id: node.id,
                },
            })
        })
    });

    // Query for articles nodes to use in creating pages.
    return getCourses;
};