exports.seed = async function (knex) {
  // deletes all existing entries
  await knex("recipe_ingredients").truncate();
  await knex("ingredients").truncate();
  await knex("instructions").truncate();
  await knex("recipes").truncate();
};
