import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { AxiomService } from './axiom.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly axiomService : AxiomService
   ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  async getUsers(@Res() response){
    await this.axiomService.log('error', "Success Message");
    return response.status(HttpStatus.OK).json({
      type: 'success',
      message: 'Users has been fetched successfully',
      data: null,
    });
  }

}
