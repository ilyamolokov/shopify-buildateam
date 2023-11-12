require("dotenv").config();

const token = process.env.ACCESS_TOKEN;
const url = 'https://cpb-new-developer.myshopify.com/admin/api/2023-10/graphql.json'

const headers = {
  "content-type": "application/json",
  "X-Shopify-Access-Token": token,
};

const query = `
  query GetProducts($first: Int = 10) {
    products(first: $first) {
      edges {
        node {
          id
          title
          bodyHtml
          images(first: 1) {
            edges {
              node {
                src
              }
            }
          }
        }
      }
    }
  }
`;

module.exports = { url, headers, query };
