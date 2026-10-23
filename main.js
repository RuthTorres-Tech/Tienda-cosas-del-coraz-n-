import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAp6Rx2CsVKJX8E4rURrTjNzsWhl53IXPQ",
  authDomain: "club-lectura-cosasdelcorazon.firebaseapp.com",
  projectId: "club-lectura-cosasdelcorazon",
  storageBucket: "club-lectura-cosasdelcorazon.firebasestorage.app",
  messagingSenderId: "875662492881",
  appId: "1:875662492881:web:c25b0ef91e57395309f1f0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-imagen");
  const imagenAmpliada = document.getElementById("imagen-ampliada");
  const btnCerrar = document.getElementById("cerrar-modal");

  document.querySelectorAll(".producto-media").forEach((img) => {
    img.addEventListener("click", () => {
      imagenAmpliada.src = img.src;
      imagenAmpliada.alt = img.alt;
      modal.showModal();
    });
  });

  if (btnCerrar) {
    btnCerrar.addEventListener("click", () => {
      modal.close();
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.close();
      }
    });
  }
});

const formClub = document.getElementById("form-club");

if (formClub) {
  formClub.addEventListener("submit", async function (event) {
    event.preventDefault();

    const nombre = document.getElementById("club-nombre").value;
    const email = document.getElementById("club-email").value;
    const cumpleanos = document.getElementById("club-cumple").value;
    const btnEnviarClub = document.getElementById("btn-enviar-club");

    try {
      if (btnEnviarClub) btnEnviarClub.textContent = "Inscribiendo...";

      await addDoc(collection(db, "club_lectura"), {
        nombre: nombre,
        email: email,
        cumpleanos: cumpleanos,
        fechaRegistro: new Date(),
      });

      alert(
        "¡Bienvenida a La Sociedad del Romance y la Fantasía! 💖 Inscripción guardada en Firebase.",
      );
      formClub.reset();
    } catch (error) {
      console.error("Error al registrar en el club: ", error);
      alert("Hubo un error al guardar tu inscripción. Inténtalo de nuevo.");
    } finally {
      if (btnEnviarClub) btnEnviarClub.textContent = "¡Inscribirme ahora!";
    }
  });
}

const btnAbrirRegistro = document.getElementById("btn-abrir-registro");
const modalRegistro = document.getElementById("modal-registro");
const btnCerrarRegistro = document.getElementById("cerrar-modal-registro");
const formRegistroUsuario = document.getElementById("form-registro-usuario");

if (btnAbrirRegistro && modalRegistro) {
  btnAbrirRegistro.addEventListener("click", (e) => {
    e.preventDefault();
    if (!modalRegistro.open) {
      modalRegistro.showModal();
    }
  });
}

if (btnCerrarRegistro && modalRegistro) {
  btnCerrarRegistro.addEventListener("click", () => {
    modalRegistro.close();
  });
}

if (modalRegistro) {
  modalRegistro.addEventListener("click", (e) => {
    if (e.target === modalRegistro) {
      modalRegistro.close();
    }
  });
}

if (formRegistroUsuario) {
  formRegistroUsuario.addEventListener("submit", async (e) => {
    e.preventDefault();
    const emailUser = document.getElementById("usuario-email").value;
    const btnEnviarUsuario = document.getElementById("btn-enviar-usuario");

    try {
      if (btnEnviarUsuario) btnEnviarUsuario.textContent = "Registrando...";

      await addDoc(collection(db, "usuarios"), {
        email: emailUser,
        fechaRegistro: new Date(),
      });

      alert(
        `¡Bienvenida/o, ${emailUser}! 💖 Cuenta registrada y guardada en Firebase.`,
      );
      formRegistroUsuario.reset();
      modalRegistro.close();
    } catch (error) {
      console.error("Error al registrar usuario: ", error);
      alert("Hubo un error al guardar tu registro. Inténtalo de nuevo.");
    } finally {
      if (btnEnviarUsuario)
        btnEnviarUsuario.textContent = "Ingresar / Registrarse";
    }
  });
}

const btnAbrirCarrito = document.getElementById("btn-abrir-carrito");
const modalCarrito = document.getElementById("modal-carrito");
const btnCerrarCarrito = document.getElementById("cerrar-modal-carrito");
const btnEntendidoCarrito = document.getElementById("btn-entendido-carrito");

if (btnAbrirCarrito && modalCarrito) {
  btnAbrirCarrito.addEventListener("click", (e) => {
    e.preventDefault();
    if (!modalCarrito.open) {
      modalCarrito.showModal();
    }
  });
}

if (btnCerrarCarrito && modalCarrito) {
  btnCerrarCarrito.addEventListener("click", () => {
    modalCarrito.close();
  });
}

if (btnEntendidoCarrito && modalCarrito) {
  btnEntendidoCarrito.addEventListener("click", () => {
    modalCarrito.close();
  });
}

if (modalCarrito) {
  modalCarrito.addEventListener("click", (e) => {
    if (e.target === modalCarrito) {
      modalCarrito.close();
    }
  });
}
