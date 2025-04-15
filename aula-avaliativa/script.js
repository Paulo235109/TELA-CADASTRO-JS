const form = document.getElementById('form');
const tabela = document.getElementById('tabela');
const listaLateral = document.getElementById('lista-lateral');
let ultimosNomes = [];
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const idade = parseInt(document.getElementById('idade').value.trim());
    if (nome === '' || email === '' || isNaN(idade) || idade < 10 || idade > 120) {
      alert('Preencha todos os campos corretamente!');
      return;
    }
    const linha = document.createElement('tr');
    linha.innerHTML = `<td>${nome}</td><td>${email}</td><td>${idade}</td>
      <td class="actions">
        <i class="fa-solid fa-pen" title="Editar"></i>
        <i class="fa-solid fa-trash" title="Excluir"></i>
      </td>`;
    tabela.appendChild(linha);
    ultimosNomes.unshift(nome);
    if (ultimosNomes.length > 5) ultimosNomes.pop();
    atualizarLista();
    form.reset();
   });
   function atualizarLista() {
    listaLateral.innerHTML = '';
    ultimosNomes.forEach((nome) => {
      const li = document.createElement('li');
      li.textContent = nome;
      listaLateral.appendChild(li);
    });
   }
   tabela.addEventListener('click', function (e) {
    if (e.target.classList.contains('fa-trash')) {
      const linha = e.target.closest('tr');
      const nomeRemovido = linha.querySelector('td').textContent;
      ultimosNomes = ultimosNomes.filter(n => n !== nomeRemovido);
      linha.remove();
      atualizarLista();
    }
   });