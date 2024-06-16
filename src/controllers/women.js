/* Required external modules */
const Woman = require('../models/woman');

/* Async function to get all women */
async function getWomen(request, response) {
  try {
    const allWomens = await Woman.find();

    response.status(200).json({
      status: 'success',
      data: allWomens
    });
  } catch(error) {
    response.status(500).json({
      status: 'error',
      message: 'Erro ao buscar mulheres.',
      error: error.message
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
        status: 'error',
        message: 'Mulher não encontrada.',
        error: error.message
      });
    }

    response.status(200).json({
      status: 'success',
      data: woman
    });
  } catch(error) {
    response.status(500).json({
      status: 'error',
      message: 'Erro ao buscar mulher.',
      error: error.message
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
      status: 'success',
      message: `A mulher ${womanCreated.name} foi criada com sucesso.`, data: womanCreated
    });
  } catch(error) {
    response.status(500).json({
      status: 'error',
      message: `Erro ao criar a mulher ${womanCreated.name}.`,
      error: error.message
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
        status: 'error',
        message: 'Mulher não encontrada',
        error: error.message
      });
    }
    response.status(200).json({
      status: 'success',
      message: `A mulher ${woman.name} foi atualizada com sucesso!`,
      data: woman
    });
  } catch(error) {
    response.status(500).json({
      status: 'error',
      message: `Erro ao atualizar a mulher ${name}`,
      error: error.message
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
        status: 'error',
        message: 'Mulher não encontrada',
        error: error.message
      });
    }

    response.status(201).json({
      status: 'success',
      message: `A mulher ${woman.name} foi deletada com sucesso!`
    });
  } catch(error) {
    response.status(500).json({
      status: 'error',
      message: `Erro ao deletar a mulher ${name}`,
      error: error.message
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