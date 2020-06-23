---
to: src/containers/<%= name %>/<%= name %>.enhanced.js
---
<% const comp = h.inflection.undasherize(name) -%>

import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import <%= comp %> from './<%= name %>.view.js'

const mapStateToProps = ({ state }) => ({ state });

// connect redux to the container
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // someFunction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= comp %>);



