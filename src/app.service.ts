import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log("test ci 02")
    return 'Hello World!';
  }
}
