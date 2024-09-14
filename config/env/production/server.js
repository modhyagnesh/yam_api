module.exports = ({ env }) => ({
  url: env("MY_URL"),
  jwt: {
    secret: env("JWT_SECRET"),
  },
});
