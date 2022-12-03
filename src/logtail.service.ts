import { Injectable } from '@nestjs/common';
import { Logtail } from "@logtail/browser";

@Injectable()
export class LogtailService {
  public client;

  constructor(){
   this.client = new Logtail(process.env.LOGTAIL_TOKEN);
  }

  async log(message: string, data: object){
    await this.client.warn(message, data);    
  }
}
