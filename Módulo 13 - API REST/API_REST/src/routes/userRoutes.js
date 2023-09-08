import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();
router.post('/', userController.create);
export default router;

/*
index -> famoso get, lista todos os usuários
store/create -> famoso post, cria um usuário
delete -> delete é delete, deleta um usuário
show -> get by id... busca(lista) um usuário especifico
update -> update é atualizar, atualiza um usuário
*/
