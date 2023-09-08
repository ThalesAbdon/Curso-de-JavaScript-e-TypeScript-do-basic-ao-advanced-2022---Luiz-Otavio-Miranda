import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria exister em um sistema real!
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);

router.post('/', userController.create);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);
export default router;

/*
index -> famoso get, lista todos os usuários
store/create -> famoso post, cria um usuário
delete -> delete é delete, deleta um usuário
show -> get by id... busca(lista) um usuário especifico
update -> update é atualizar, atualiza um usuário
*/
