type SlFocusEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'sl-focus': SlFocusEvent;
  }
}

export default SlFocusEvent;
