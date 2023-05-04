import { Injectable } from '@nestjs/common';
import { authPostRequest, solDev,  } from './omnia';

@Injectable()
export class AppService {
  async getHello(): Promise<any> {
    const url = await solDev();
    return {url :url.http};
  }
}
