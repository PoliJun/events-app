# Notes

## Router

- file based
- `index` is the default root path for a path
  > `localhost:3000/events` will load `events/index.js` component, but `localhost:3000/events/index` would be 404

## Dynamic Files

- `[id].js`
  events/123, events/abc, events/123abc all will be handled by this file.
- [cat] directory
