const axios = require("axios");
const fs = require("fs");
const { url, headers, query } = require("./constants");

const fetchAndCacheProducts = async () => {
  try {
    const response = await axios({
      url,
      method: "POST",
      headers,
      data: { query },
    });
    fs.writeFile(
      "db/products.json",
      JSON.stringify(response.data.data),
      (error) => {
        if (error) throw error;
        console.log("Кэширование данных завершено");
      },
    );
  } catch (error) {
    fs.writeFile("db/products.json", "{}", (error) => {
      if (error) throw error;
    });
    console.error("Ошибка при выполнении GraphQL запроса\n" + error);
  }
};

module.exports = { fetchAndCacheProducts };
