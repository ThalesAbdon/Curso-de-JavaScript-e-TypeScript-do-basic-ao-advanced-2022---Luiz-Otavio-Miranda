import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Thales',
      sobrenome: 'Abdon',
      email: 'thales@gmail.com',
      idade: 27,
      peso: 90,
      altura: 1.76,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
