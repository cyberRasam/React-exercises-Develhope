const Jsx2 = (name) => {
  return <h1>Hello, {name}</h1>;
};

//Or we can do as

function greet(name) {
  return `<h1>Hello, ${name}</h1>`;
}

export default Jsx2;
