module.exports = ({ env }) => ({
  url: env("MY_URL"),
  admin: {
    auth: {
      secret: env("JWT_SECRET"),
    },
  },
});
