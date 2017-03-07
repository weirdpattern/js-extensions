export default function flatten(...sources) {
  const target = sources.length > 0 ? sources.shift() : [];
  return sources.reduce(
    (reduced, current) => reduced.concat(Array.isArray(current)
      ? flatten(...current)
      : current),
    Array.isArray(target) ? flatten(...target) : [target]
  );
}

Object.assign(Array.prototype, {
  clear() {
    return this.splice(0, this.length);
  },

  flatten(...sources) {
    this.push(...flatten(this.clear(), ...sources));
    return this;
  }
});

Object.assign(Array, {
  flatten
});
