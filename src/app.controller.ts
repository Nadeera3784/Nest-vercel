import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { LogtailService } from './logtail.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logtailService : LogtailService
   ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  async getUsers(@Res() response){
    await this.logtailService.log('sucess', {'data' : "Users has been fetched successfully"});
    return response.status(HttpStatus.OK).json({
      type: 'success',
      message: 'Users has been fetched successfully',
      data: null,
    });
  }

}
