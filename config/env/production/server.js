module.exports = ({ env }) => ({
  url: env("MY_URL"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "example-token"),
    },
  },
});
