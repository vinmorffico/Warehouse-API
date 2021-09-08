import { Router } from 'express';
import categoryController from '../../container/Category';

const router = Router();

router.get('/', categoryController.getAllCategory);

router.get('/:id', categoryController.getCategoryById);

router.post('/', categoryController.createNewCategory);

router.put('/:id', categoryController.updateCategory);

router.delete('/:id', categoryController.deleteCategory);

export default router;
