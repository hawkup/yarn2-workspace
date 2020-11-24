import { h } from 'preact'
import register from 'preact-custom-element'
import { stringCollapse } from '@internal/shared'

const WCInput = ({ name = '', value = '' }) => (
  <div>
    <label>{stringCollapse(name)}</label>
    <input value={value} />
  </div>
)

register(WCInput, 'wc-input', ['text'])