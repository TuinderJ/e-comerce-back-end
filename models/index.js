//: import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//: Products belongsTo Category
Product.belongsTo(Category);

//: Categories have many Products
Category.hasMany(Product);

//: Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag, as: `test1` });

//: Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Tag, { through: ProductTag, as: `test2` });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
