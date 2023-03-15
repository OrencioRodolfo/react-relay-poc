import { Environment, Network, RecordSource, Store } from "relay-runtime";

function fetchQuery(operation: any, variables: any) {
  return fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer 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",
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
