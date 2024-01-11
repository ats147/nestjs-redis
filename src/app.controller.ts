import {
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { CacheInterceptor  } from '@nestjs/cache-manager';
import { AppService } from './app.service';

@UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    return this.appService.getHello();
  }
}