import { config } from '@keystone-6/core';
import { lists } from './schema';
import { withAuth, session } from './auth';

export default withAuth(
  config({
    db: {
      provider: 'sqlite',
      url: 'file:./dev.db',
    },
    lists,
    session,
    server: {
      cors: {
        origin: ['http://localhost:3001'],
        credentials: true,
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization'],
      },
      port: 3000,
      extendExpressApp: (app) => {
        app.use('/image', require('express').static('image'));
      },
    },
  })
);
