import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  // For other use this service. If we export the module then other can imports this module.
  exports: [PrismaService],
})
export class PrismaModule {}
