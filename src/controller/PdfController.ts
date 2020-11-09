import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';
import puppeteer from 'puppeteer';

import Budget from '../model/budget';

export default class PdfController {
  public async create(request: Request, response: Response): Promise<void> {
    const variables = <Budget>request.body;

    const templatePath = path.resolve(__dirname, '..', 'template', 'pdf.hbs');

    const templateFile = await fs.promises.readFile(templatePath, {
      encoding: 'utf-8',
    });

    const parseTemplate = handlebars.compile(templateFile);

    const parsedHTML = parseTemplate(variables);

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.setContent(parsedHTML);

    await page.emulateMediaType('screen');

    const pdfBuffer = await page.pdf({ format: 'A4' });

    await browser.close();

    response.setHeader('Content-type', 'application/pdf');

    response.end(Buffer.from(pdfBuffer));
  }
}
