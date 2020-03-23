import React from 'react'
import { withKnobs, text } from "@storybook/addon-knobs";
import Button from './button.jsx'

export const primary = () => <Button>{text('label', 'Button')}</Button>
export const secondary = () => <Button variant="secondary">Button</Button>

export default {
    component: Button,
    decorators: [withKnobs],
    title: "Atoms|Button"
}