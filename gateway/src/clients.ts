import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export const Anno1800Client: ClientProviderOptions = {
  name: 'ANNO1800_SERVICE',
  transport: Transport.REDIS,
  options: {
    url: 'redis://localhost:6379',
  },
};
