import { Injectable } from '@nestjs/common';
import Client from '@axiomhq/axiom-node';

@Injectable()
export class AxiomService {
  public client;

  constructor(){
     this.client = new  Client ({
        token: process.env.AXIOM_TOKEN,
        orgId: process.env.AXIOM_ORG_ID,
     });
  }

  async log(type: string, message: string){
    const events = [
        {
            foo: 'bar',
        },
        {
            x: 'y',
        },
    ];
    const res = await this.client.ingestEvents('test', events);
  }
}
