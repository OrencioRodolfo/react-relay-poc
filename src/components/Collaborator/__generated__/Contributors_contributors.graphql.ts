/**
 * @generated SignedSource<<a9a3c8cf9db2c184c8a11c33f6b1ec14>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Contributors_contributors$data = {
  readonly description: string | null;
  readonly name: string;
  readonly " $fragmentType": "Contributors_contributors";
};
export type Contributors_contributors$key = {
  readonly " $data"?: Contributors_contributors$data;
  readonly " $fragmentSpreads": FragmentRefs<"Contributors_contributors">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Contributors_contributors",
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
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};

(node as any).hash = "5f60a2cf7402be4d3101c0c4b05ba0ef";

export default node;
