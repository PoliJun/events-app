# Mistakes

## Forgot `return` statement

- When using arrow functions, forgot to return the JSX.
- Notice curly braces and no return statement.
- Or use parentheses instead of curly braces.

```jsx
export const EventsCard = ({ data }) => {
  <div>
    <Image
      src={data.image}
      width={1000}
      height={500}
      alt={data.title}
      priority={true}
    />
    <h1>{data.title}</h1>
    <p>{data.description}</p>
    <input type="email" /> <button>Submit</button>
  </div>;
};
```

**fix**:

```jsx
export const EventsCard = ({ data }) => (
  <div>
    <Image
      src={data.image}
      width={1000}
      height={300}
      alt={data.title}
      priority={true}
    />
    <h1>{data.title}</h1>
    <p>{data.description}</p>
    <input type="email" /> <button>Submit</button>
  </div>
);
```
