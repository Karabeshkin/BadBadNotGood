"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme }) {
      this.belongsTo(Theme, { foreignKey: "themeId" });
    }
  }
  Question.init(
    {
      themeId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          key: "id",
          model: "Themes",
        },
        onDelete: "CASCADE",
      },
      question: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      answer: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      score_points: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
