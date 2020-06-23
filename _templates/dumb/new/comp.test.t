---
to: src/components/<%= name %>/<%= name %>.test.js
---
<% const comp = h.inflection.undasherize(name) %>import React from 'react'
import renderer from 'react-test-renderer'
import <%= comp %> from './index.js'

it('<%= comp %>: default', () => {
  const component = renderer.create(<<%= comp %> />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})