module.exports = {
    query: `
      blogsCount(where: JSON): Int!
    `,
    resolver: {
      Query: {
        blogsCount: {
          description: 'Return the count of blogs',
          resolverOf: 'application::blogs.blogs.count',
          resolver: async (obj, options, ctx) => {
            return await strapi.api.blogs.services.blogs.count(options.where || {});
          },
        },
      },
    },
  };