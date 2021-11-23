module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '39bbc4c8c4c07cab2e3c32d8db3c7bd9'),
    },
  },
});
