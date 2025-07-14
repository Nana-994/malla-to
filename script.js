const ramos = [
  { nombre:"Precálculo", sigla:"MAT1000", semestre:1 },
  { nombre:"Biología de la célula", sigla:"BIO141C", semestre:1 },
  // ... agrega todos tus ramos
];

const estados = ["pendiente","en-curso","aprobado"];
function crearMalla() {
  const cont = document.getElementById("malla");
  ramos.forEach(r => {
    const div = document.createElement("div");
    div.className = `ramo pendiente`;
    div.textContent = r.sigla;
    div.onclick = () => {
      const s = estados.indexOf(div.classList[1]);
      div.classList.replace(estados[s], estados[(s+1)%3]);
    };
    cont.append(div);
  });
}

function aprobarSemestre(n) {
  document.querySelectorAll(".ramo").forEach((d,i) => {
    if (ramos[i].semestre === n) d.className="ramo aprobado";
  });
}

crearMalla();
