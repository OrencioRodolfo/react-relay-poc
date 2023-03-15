// App.js
import React from "react";
import environment from "./relay-env-config";
import { graphql } from "babel-plugin-relay/macro";
import { QueryRenderer } from "react-relay";
import Repository from "./components/Repository/Repository";
import { AppCenasQuery } from "./__generated__/AppCenasQuery.graphql";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div id="App">
        <QueryRenderer<AppCenasQuery>
          environment={environment}
          query={graphql`
            query AppCenasQuery($username: String!) {
              repositoryOwner(login: $username) {
                login
                repositories(last: 10) {
                  edges {
                    node {
                      id
                      ...Repository_repository
                    }
                  }
                }
              }
            }
          `}
          variables={{
            username: "OrencioRodolfo",
          }}
          render={({ error, props }) => {
            if (error) {
              return <div>Error!</div>;
            }
            if (!props) {
              return <div>Loading...</div>;
            }
            return (
              <ul>
                {props.repositoryOwner?.repositories.edges?.map(
                  (repository) => (
                    <li key={repository?.node?.id}>
                      <b>Repository</b>
                      {repository?.node && (
                        <Repository repository={repository.node} />
                      )}
                    </li>
                  )
                )}
              </ul>
            );
          }}
        />
      </div>
    );
  }
}
