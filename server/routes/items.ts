import { Router } from 'express';
import ItemsController from '../controllers/items-controller';

const router = Router();

router.get('/:id', ItemsController.getById);
router.get('/', ItemsController.search);

export default router;
