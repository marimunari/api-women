/* Models */
const Woman = require('../models/woman');

/* Async function to get all women */
async function getWomen(request, response) {
  try {
    const allWomens = await Woman.find();

    response.status(200).json({
      code: 200,
      status: 'success',
      data: allWomens
    });
  } catch(error) {
    response.status(500).json({
      code: 500,
      status: 'error',
      message: 'Erro ao buscar mulheres.',
    });
  }
}

/* Async function to get a woman by ID */
async function getWomanById(request, response) {
  const { id } = request.params;

  try {
    const woman = await Woman.findById(id);

    if (!woman) {
      return response.status(404).json({
        code: 400,
        status: 'error',
        message: 'Mulher não encontrada.',
      });
    }

    response.status(200).json({
      code: 200,
      status: 'success',
      data: woman
    });
  } catch(error) {
    response.status(500).json({
      code: 500,
      status: 'error',
      message: 'Erro ao buscar mulher.',
    });
  }
}

/* Async function to create a new woman */
async function createWoman(request, response) {
  const { name, image, quote, minibio } = request.body;

  try {
    const newWoman = new Woman({ name, image, quote, minibio });
    const womanCreated = await newWoman.save();

    response.status(201).json({
      code: 201,
      status: 'success',
      message: `A mulher ${womanCreated.name} foi criada com sucesso.`, data: womanCreated
    });
  } catch(error) {
    response.status(500).json({
      code: 500,
      status: 'error',
      message: `Erro ao criar a mulher ${womanCreated.name}.`,
    });
  }
}

/* Async function to edit an existing woman */
async function editWoman(request, response) {
  const { id } = request.params;
  const { name, image, quote, minibio } = request.body;

  try {
    const woman = await Woman.findByIdAndUpdate(
      id,
      { name, image, quote, minibio },
      { new: true }
    );

    if (!woman) {
      return response.status(404).json({
        code: 404,
        status: 'error',
        message: 'Mulher não encontrada.',
      });
    }
    response.status(200).json({
      code: 200,
      status: 'success',
      message: `A mulher ${woman.name} foi atualizada com sucesso!`,
      data: woman
    });
  } catch(error) {
    response.status(500).json({
      code: 500,
      status: 'error',
      message: `Erro ao atualizar a mulher ${name}.`,
    });
  }
}

/* Async function to delete a woman */
async function deleteWoman(request, response) {
  const { id } = request.params;
  const { name } = request.body;

  try {
    const woman = await Woman.findByIdAndDelete(id);

    if (!woman) {
      return response.status(404).json({
        code: 404,
        status: 'error',
        message: 'Mulher não encontrada.',
      });
    }

    response.status(201).json({
      code: 201,
      status: 'success',
      message: `A mulher ${woman.name} foi deletada com sucesso!`
    });
  } catch(error) {
    response.status(500).json({
      code: 500,
      status: 'error',
      message: `Erro ao deletar a mulher ${name}.`,
    });
  }
}

/* Export created module */
module.exports = {
  getWomen,
  getWomanById,
  createWoman,
  editWoman,
  deleteWoman,
};