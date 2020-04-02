import server from './config/server';
import db from './models'
db.sequelize.sync().then(() => {
  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
  });
})
