import './App.css';

function Stack({ children, style = {} }) {
  return (
    <section
      style={{
        backgroundColor: 'pink',
        display: 'flex',
        justifyContent: 'space-between',
        ...style,
      }}
    >
      {children}
    </section>
  );
}

function Spacer({ grow = false }) {
  return <div style={{ display: 'flex', flexGrow: grow ? 1 : 0 }} />;
}

function App() {
  return (
    <>
      <blockquote>
        Can I have a simpler API than <code>justify-content</code> by using just
        a <code>{'<Stack>'}</code> and a <code>{'<Spacer grow?>'}</code>?
      </blockquote>
      <h1>space-between</h1>
      <h2>CSS</h2>
      <Stack style={{ justifyContent: 'space-between' }}>
        <button>1</button> <button>2</button> <button>3</button> <button>4</button> <button>5</button>
      </Stack>
      <h2>Spacers</h2>
      <Stack>
        <button>1</button> <button>2</button> <button>3</button> <button>4</button> <button>5</button>
      </Stack>

      <h1>space-around</h1>
      <h2>CSS</h2>
      <Stack style={{ justifyContent: 'space-around' }}>
        <button>1</button> <button>2</button> <button>3</button> <button>4</button> <button>5</button>
      </Stack>
      <h2>Spacers</h2>
      <Stack>
        <Spacer />
        <button>1</button>
        <Spacer />
        <button>2</button>
        <Spacer />
        <button>3</button>
        <Spacer />
        <button>4</button>
        <Spacer />
        <button>5</button>
        <Spacer />
      </Stack>

      <h1>space-evenly</h1>
      <h2>CSS</h2>
      <Stack style={{ justifyContent: 'space-evenly' }}>
        <button>1</button> <button>2</button> <button>3</button> <button>4</button> <button>5</button>
      </Stack>
      <h2>Spacers</h2>
      <Stack>
        <Spacer />
        <button>1</button> <button>2</button> <button>3</button> <button>4</button> <button>5</button>
        <Spacer />
      </Stack>

      <h1>start</h1>
      <h2>CSS</h2>
      <Stack style={{ justifyContent: 'start' }}>
        <button>1</button> <button>2</button> <button>3</button> <button>4</button> <button>5</button>
      </Stack>
      <h2>Spacers</h2>
      <Stack>
        <button>1</button> <button>2</button> <button>3</button> <button>4</button> <button>5</button>
        <Spacer grow />
      </Stack>

      <h1>center</h1>
      <h2>CSS</h2>
      <Stack style={{ justifyContent: 'center' }}>
        <button>1</button> <button>2</button> <button>3</button> <button>4</button> <button>5</button>
      </Stack>
      <h2>Spacers</h2>
      <Stack>
        <Spacer grow />
        <button>1</button> <button>2</button> <button>3</button> <button>4</button> <button>5</button>
        <Spacer grow />
      </Stack>

      <h1>end</h1>
      <h2>CSS</h2>
      <Stack style={{ justifyContent: 'end' }}>
        <button>1</button> <button>2</button> <button>3</button> <button>4</button> <button>5</button>
      </Stack>
      <h2>Spacers</h2>
      <Stack>
        <Spacer grow />
        <button>1</button> <button>2</button> <button>3</button> <button>4</button> <button>5</button>
      </Stack>
    </>
  );
}

export default App;
