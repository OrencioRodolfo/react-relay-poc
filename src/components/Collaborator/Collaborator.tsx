import React from "react";
import { useFragment } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { Collaborator_collaborator$key } from "./__generated__/Collaborator_collaborator.graphql";

type Props = {
  collaborator: Collaborator_collaborator$key;
};

const Collaborator: React.FunctionComponent<Props> = ({ collaborator }) => {
  const { name, login, avatarUrl } = useFragment(
    graphql`
      fragment Collaborator_collaborator on User {
        name
        login
        avatarUrl
      }
    `,
    collaborator
  );

  return (
    <div style={{ padding: "5px", display: "flex", alignItems: "center" }}>
      <img style={{ marginRight: "5px" }} src={avatarUrl} width={45} alt="" />
      <span>{name || login}</span>
    </div>
  );
};

export default Collaborator;
