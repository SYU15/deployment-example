module.exports = function(sequelize, DataTypes) {
  var List = sequelize.define("List", {
    
    listItem: DataTypes.STRING

  });

  return List;
};
