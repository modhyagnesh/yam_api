module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1338),
  jwt: {
    secret: env("JWT_SECRET"),
  },
});
