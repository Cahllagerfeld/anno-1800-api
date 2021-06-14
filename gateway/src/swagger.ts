import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Anno 1800 Api')
  .setDescription('The cats API description')
  .setVersion(process.env.npm_package_version)
  .build();
