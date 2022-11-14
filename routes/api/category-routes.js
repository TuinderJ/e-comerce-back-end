const router = require('express').Router();
const { Category, Product } = require('../../models');

//: The `/api/categories` endpoint

router.get('/', async (req, res) => {
  //: find all categories
  //: be sure to include its associated Products
  try {
    const data = await Category.findAll({ include: [{ model: Product }] });
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

router.get('/:id', async (req, res) => {
  //: find one category by its `id` value
  //: be sure to include its associated Products
  try {
    const { id } = req.params;

    const data = await Category.findByPk(id, { include: [{ model: Product }] });
    data ? res.json(data) : res.status(404).json({ message: `This category was not found.` });
  } catch (error) {
    res.json(error);
  }
});

router.post('/', async (req, res) => {
  //: create a new category
  try {
    const data = await Category.create({ category_name: req.body.category_name });
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

router.put('/:id', async (req, res) => {
  //: update a category by its `id` value
  try {
    const { category_name } = req.body;
    const { id } = req.params;

    if (!category_name) return res.status(400).json({ error: `category_name needs to be included in the body` });
    const data = await Category.update({ category_name }, { where: { id } });
    data ? res.json(data) : res.status(404).json({ message: `This category was not found.` });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  //: delete a category by its `id` value
  try {
    const { id } = req.params;

    const data = await Category.destroy({ where: { id } });
    data ? res.json(data) : res.status(404).json({ message: `This category was not found.` });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
