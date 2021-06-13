import { ClientsModuleOptions, Transport } from '@nestjs/microservices';

export const clients: ClientsModuleOptions = [
  {
    name: 'NEEDS_SERVICE',
    transport: Transport.REDIS,
    options: {
      url: 'redis://localhost:6379',
    },
  },
];
