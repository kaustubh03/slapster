---
to: src/containers/<%= name %>/index.js
---
<% const comp = h.inflection.undasherize(name) -%>
// @flow
import <%= comp %> from './<%= comp %>.enhanced.js';
import <%= comp %> as <%= comp %>View  from './<%= comp %>.view.js';
export {<%= comp %>View};
export default <%= comp %>;


