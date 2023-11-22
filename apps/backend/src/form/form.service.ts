import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { OBJtoXML } from 'utils/jsonToXMLParser';

@Injectable()
export class FormService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<any> {
    const forms = await this.prisma.form.findMany();

    const XMLForms = forms.map((form) => {
      const XMLForm = OBJtoXML(form);
      return XMLForm;
    });

    return XMLForms;
  }
}
