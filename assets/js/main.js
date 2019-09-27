(function() {
  const cepInput = document.querySelector("#cepInput");
  const ruaInput = document.querySelector("#ruaInput");
  const bairroInput = document.querySelector("#bairroInput");
  const ufInput = document.querySelector("#ufInput");

  cepInput.oninput = async () => {
    if (cepInput.value.length != 8) return;

    const response = await fetch(
      `https://viacep.com.br/ws/${cepInput.value}/json/`
    );
    const data = await response.json();
    const { logradouro, bairro, uf, cep } = data;

    ruaInput.value = logradouro;
    bairroInput.value = bairro;
    ufInput.value = uf;
    cepInput.value = cep;
  };
})();
