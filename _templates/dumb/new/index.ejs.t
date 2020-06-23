---
to: src/components/<%= name %>/index.js
---
<% const comp = h.inflection.undasherize(name) -%>
// @flow
import React from 'react'
import styles from './index.css'
type Props = {};
const <%= comp %> = (props: Props) => (
 <div>{`Hi ${name}`}</div>
);

export default <%= comp %>


