import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
	constructor() {}

	async onModuleInit() {
		// Initialization logic here
	}

	async onModuleDestroy() {
		// Cleanup logic here
	}
}
