export const ReactTypes = {
  Node: 'ReactNode',
  Child: 'ReactChild',
  Children: 'ReactChildren',
  Text: 'ReactText',
  Fragment: 'ReactFragment',
  FragmentType: 'ComponentType',
  Portal: 'ReactPortal',
  NodeArray: 'ReactNodeArray',
  ElementProps: 'ComponentProps',
  StatelessFunctionalComponent: `FC`,
} as const;

export const SyntheticEvents = {
  SyntheticEvent: 'React.SyntheticEvent',
  SyntheticAnimationEvent: 'React.AnimationEvent',
  SyntheticCompositionEvent: 'React.CompositionEvent',
  SyntheticClipboardEvent: 'React.ClipboardEvent',
  SyntheticUIEvent: 'React.UIEvent',
  SyntheticFocusEvent: 'React.FocusEvent',
  SyntheticKeyboardEvent: 'React.KeyboardEvent',
  SyntheticMouseEvent: 'React.MouseEvent',
  SyntheticDragEvent: 'React.DragEvent',
  SyntheticWheelEvent: 'React.WheelEvent',
  SyntheticPointerEvent: 'React.PointerEvent',
  SyntheticTouchEvent: 'React.TouchEvent',
  SyntheticTransitionEvent: 'React.TransitionEvent',
} as const;

export const MomentTypes = {
  MomentDuration: 'Duration',
} as const;

export const VtkTypes = {
  vec2: 'Vector2',
  vec3: 'Vector3',
  vec4: 'Vector4',
  //mat3: "Matrix3x3", TODO: matrices come from gl-matrix
} as const;
