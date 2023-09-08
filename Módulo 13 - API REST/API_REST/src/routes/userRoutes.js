import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();
router.post('/', userController.create);
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);
router.put('/', userController.update);
router.delete('/', userController.delete);
export default router;

/*
index -> famoso get, lista todos os usuários
store/create -> famoso post, cria um usuário
delete -> delete é delete, deleta um usuário
show -> get by id... busca(lista) um usuário especifico
update -> update é atualizar, atualiza um usuário
*/
