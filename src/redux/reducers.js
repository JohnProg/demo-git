const initialData = {
  contador: 0
};

function reducer(state = initialData, action) {
  switch (action.type) {
    case "INCREMENTAR":
      //logica
      const contador = state.contador;
      return {
        contador: contador + 1
      };
    default:
      return state;
  }
}

export default reducer;