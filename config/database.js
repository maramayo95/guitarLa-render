module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ce36rupgp3jgrcq3m7a0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_kf3w'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'TCJCu9zC8ZEdTuJSSxSEDWWs0c2Sy2Wb'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
