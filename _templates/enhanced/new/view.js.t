---
to: src/containers/<%= name %>/<%= name %>.view.js
---
<% const comp = h.inflection.undasherize(name) -%>
// @flow
import React, { Component } from 'react';
import styles from './index.css';
type Props = {};
type State = {};
class <%= comp %> extends Component<Props, State> {
  render() {
    return <div>edit me: at src/containers/<%= name %>/index.js</div>
  }
}
export default <%= comp %>


