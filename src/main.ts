import 'dotenv/config'
import './infrastructure/config/module-alias'

import { MySQLConnector } from '@/infrastructure/database/mysql'

MySQLConnector.getInstance().connect().then(async () => {
  const { app } = await import('@/infrastructure/config/app')
  app.listen(process.env.APP_PORT, () => console.log(`Server running at http://localhost:${process.env.APP_PORT}`))
}).catch((err: any) => console.log(`error mongodb: ${err}`))
