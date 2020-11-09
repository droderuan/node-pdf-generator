import { Router } from 'express';
import PdfController from '../controller/PdfController';

const router = Router();

const pdfController = new PdfController();

router.post('/', pdfController.create);

router.get('/', pdfController.create);

export default router;
