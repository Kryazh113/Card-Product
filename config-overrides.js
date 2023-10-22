//решение ошибки путей внутри директории.(настройка так чтобы чать URL /src в import превращалась в "Путь до директории проекта + src")

const {
  //override переопределяет часть дефолтной конфигурации на основе переданного в него значения
  override,
  //addWebpackAlias позволяет сгенерировать значение, которое нужно передать в override, чтобы изменить секцию resolve в настройках webpack
  addWebpackAlias
} = require("customize-cra");

const path = require("path");

module.exports = override(
  addWebpackAlias({
    "/src": path.resolve(__dirname, "src")
  })
);
