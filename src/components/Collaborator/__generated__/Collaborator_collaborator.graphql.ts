/**
 * @generated SignedSource<<aafbc647eb775f00e27eca3da60b6aa0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Collaborator_collaborator$data = {
  readonly avatarUrl: any;
  readonly login: string;
  readonly name: string | null;
  readonly " $fragmentType": "Collaborator_collaborator";
};
export type Collaborator_collaborator$key = {
  readonly " $data"?: Collaborator_collaborator$data;
  readonly " $fragmentSpreads": FragmentRefs<"Collaborator_collaborator">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Collaborator_collaborator",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "login",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatarUrl",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "17a44226d9e08e6cdd17d19b413d3042";

export default node;
