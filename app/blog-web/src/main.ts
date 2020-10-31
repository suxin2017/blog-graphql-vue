import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
createApp(App)
  .use(router)
  .mount("#app");
import ApolloClient, { gql } from "apollo-boost";

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: "http://localhost:4000/graphql"
});

apolloClient
  .query({
    query: gql`
      query TestQuery {
        books {
          title
          author
          test
        }
      }
    `
  })
  .then(result => console.log(result));
console.log(apolloClient);
