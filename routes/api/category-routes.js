const router = require('express').Router();
const { Category, Product } = require('../../models');

//: The `/api/categories` endpoint

router.get('/', async (req, res) => {
  //: find all categories
  //: be sure to include its associated Products
  try {
    const data = await Category.findAll({ include: [{ model: Product }] });
    res.json({ data });
  } catch (error) {
    res.json({ error });
  }
});

router.get('/:id', async (req, res) => {
  //: find one category by its `id` value
  //: be sure to include its associated Products
  try {
    const data = await Category.findByPk(req.params.id, { include: [{ model: Product }] });
    res.json({ data });
  } catch (error) {
    res.json({ error });
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const data = await Category.create();
  } catch (error) {
    res.json({ error });
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const data = await Category.update({}, { where: { id: req.params.id } });
  } catch (error) {
    res.json({ error });
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
