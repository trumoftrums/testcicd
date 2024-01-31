import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log("test ci 0255")
    return 'Hello World!';
  }
}
