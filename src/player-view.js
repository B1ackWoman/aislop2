// Network player IDs remain authoritative. Only presentation is local-first.
export const viewDirection = self => self === 1 ? -1 : 1;
export const hudPlayer = (slot, self) => slot === 0 ? self : 1 - self;
export function screenMovement(input, self) {
  const direction = viewDirection(self);
  return { ...input, x: input.x * direction, z: input.z * direction };
}
