import React from 'react'
import renderer from 'react-test-renderer'
import Wrapper from '.'

it('Wrapper: default', () => {
  const component = renderer.create(<Wrapper />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})