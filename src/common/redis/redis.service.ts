import { Injectable, OnModuleInit } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit {
  private client: Redis;

  onModuleInit() {
    this.client = new Redis(); // default: redis://127.0.0.1:6379
  }

  async set(key: string, value: string, seconds: number): Promise<void> {
    await this.client.set(key, value, 'EX', seconds);
  }

  async get(key: string): Promise<string | null> {
    return this.client.get(key);
  }

  async del(key: string): Promise<void> {
    await this.client.del(key);
  }
}
