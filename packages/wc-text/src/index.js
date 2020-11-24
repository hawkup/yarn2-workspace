import { h } from 'preact'
import register from 'preact-custom-element'

const WCText = ({ text = '' }) => (
  <p>{text}</p>
)

register(WCText, 'wc-text', ['text'])