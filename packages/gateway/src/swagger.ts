import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Anno 1800 Api')
  .setDescription('API Documentation for Anno 1800 API')
  .setVersion(process.env.npm_package_version)
  .build();
