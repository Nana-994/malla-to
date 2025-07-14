const estados = ["pendiente", "en-curso", "aprobado"];

const ramos = [
  // Semestre 1
  { nombre: "Precálculo", sigla: "MAT1000", semestre: 1, prerrequisitos: [] },
  { nombre: "Biología de la célula", sigla: "BIO141C", semestre: 1, prerrequisitos: [] },
  { nombre: "Farmacología básica", sigla: "MET101A", semestre: 1, prerrequisitos: [] },
  { nombre: "Fund. Psicológicos para TO", sigla: "PSI101A", semestre: 1, prerrequisitos: [] },
  { nombre: "Desarrollo creativo y DT", sigla: "OCU101A", semestre: 1, prerrequisitos: [] },
  { nombre: "TO: Profesión y disciplina", sigla: "OCU102A", semestre: 1, prerrequisitos: [] },

  // Semestre 2
  { nombre: "Física", sigla: "FIS109A", semestre: 2, prerrequisitos: [] },
  { nombre: "Fisiología", sigla: "BIO135T", semestre: 2, prerrequisitos: ["BIO141C"] },
  { nombre: "Morfología gral. y sistemas", sigla: "MET201A", semestre: 2, prerrequisitos: [] },
  { nombre: "Ciclo vital y desarrollo", sigla: "MET202A", semestre: 2, prerrequisitos: ["PSI101A"] },
  { nombre: "Desarrollo lúdico y DT I", sigla: "OCU201A", semestre: 2, prerrequisitos: ["OCU101A"] },
  { nombre: "Formación Teológica", sigla: "TTF", semestre: 2, prerrequisitos: [] }
];

function crearMalla() {
  const cont = document.getElementById("malla");
  cont.innerHTML = ""; // limpiar antes
  ramos.forEach((r, i) => {
    const div = document.createElement("div");
    div.className = `ramo pendiente`;
    div.dataset.index = i;
    div.innerHTML = `<strong>${r.sigla}</strong><br>${r.nombre}`;
    div.onclick = () => {
      const s = estados.indexOf(div.classList[1]);
      div.classList.replace(estados[s], estados[(s + 1) % 3]);
    };
    cont.appendChild(div);
  });
}

function aprobarSemestre(n) {
  document.querySelectorAll(".ramo").forEach((d, i) => {
    if (ramos[i].semestre === n) d.className = "ramo aprobado";
  });
}

crearMalla();
