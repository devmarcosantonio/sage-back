import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
	constructor(private readonly prisma: PrismaService) {}

	async listUsers() {
		return this.prisma.users.findMany({
			take: 5,
			orderBy: { createdAt: 'desc' },
		});
	}

	async createExampleUser() {
		return this.prisma.users.create({
			data: {
				email: `demo+${Date.now()}@example.com`,
				name: 'Demo User',
				password: '123456',
			},
		});
	}
}
