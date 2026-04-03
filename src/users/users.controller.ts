import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	listUsers() {
		return this.usersService.listUsers();
	}

	@Post('demo')
	createDemoUser() {
		return this.usersService.createExampleUser();
	}
}
