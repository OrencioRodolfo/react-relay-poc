/**
 * @generated SignedSource<<48ae37a85d3e3e252e7832b202fe5251>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Collaborators_collaborators$data = {
  readonly name: string | null;
  readonly " $fragmentType": "Collaborators_collaborators";
};
export type Collaborators_collaborators$key = {
  readonly " $data"?: Collaborators_collaborators$data;
  readonly " $fragmentSpreads": FragmentRefs<"Collaborators_collaborators">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Collaborators_collaborators",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "0bee0f8916115521d5326d8bbb21f504";

export default node;
