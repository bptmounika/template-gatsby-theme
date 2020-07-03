const path = require(`path`);

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const homepageTemplate = path.resolve(
    `${__dirname}/src/templates/homepage.js`,
  );

  // Create a single page.

  createPage({
    // Path for this page — required
    path: `/`,
    component: homepageTemplate,
    context: {
      // Add optional context data to be inserted
      // as props into the page component..
      //
      // The context data can also be used as
      // arguments to the page GraphQL query.
      //
      // The page "path" is always available as a GraphQL
      // argument.
    },
  });
};
