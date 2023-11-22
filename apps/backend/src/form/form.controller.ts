import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
// import { Form } from '@prisma/client';
// import { json2xml } from 'xml-js';
import { FormService } from './form.service';

@Controller('api/v1/forms')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Get()
  async getAllForms(): Promise<any> {
    try {
      return await this.formService.findAll();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
