import React from "react";
import { createFragmentContainer, useFragment } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { Repository_repository$key } from "./__generated__/Repository_repository.graphql";
const Collaborator = React.lazy(() => import("../Collaborator/Collaborator"));

type Props = {
  repository: Repository_repository$key;
};

const Repository: React.FunctionComponent<Props> = ({ repository }) => {
  const { name, description, collaborators } = useFragment(
    graphql`
      fragment Repository_repository on Repository {
        name
        description
        collaborators {
          edges {
            node {
              id
              ...Collaborator_collaborator
            }
          }
        }
      }
    `,
    repository
  );

  const Collaborators = true ? (
    <ul>
      {collaborators?.edges?.map((collaborator) => (
        <li key={collaborator?.node?.id}>
          {collaborator && (
            <React.Suspense fallback={<></>}>
              <Collaborator collaborator={collaborator?.node} />
            </React.Suspense>
          )}
        </li>
      ))}
    </ul>
  ) : (
    <></>
  );

  return (
    <div>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Collaborators:</p>

      {Collaborators}

      <br />
    </div>
  );
};

export default Repository;
