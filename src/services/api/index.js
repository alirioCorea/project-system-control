const API = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
  auth: {
    login: `${API}/api/auth/login`,
    me: `${API}/api/auth/me`,
  },
  proyectos: {
    getProyecto: (id) => `${API}/api/proyecto/lista/id/${id}`,
    getProyectos: `${API}/api/proyecto/lista/1`,
    createProyecto: `${API}/api/proyecto/agregar`,
    updateProyecto: (id) => `${API}/api/proyecto/editar/${id}`,
    deleteProyecto: (id) => `${API}/api/proyecto/borrar/${id}`,
    softDeleteProyecto: (id) => `${API}/api/proyecto/soft/${id}`,
  },
  proEstatus: {
    getEstatus: `${API}/api/pro_estatus/lista`,
    createEstatus: `${API}/api/pro_estatus/agregar`,
    deleteEstatus: (id) => `${API}/api/pro_estatus/borrar/${id}`,
  },
  tecnologias: {
    getTecnologia: (id) => `${API}/api/tec/lista/id/${id}`,
    getTecnologias: `${API}/api/tec/lista/1`,
    createTecnologia: `${API}/api/tec/agregar`,
    updateTecnologia: (id) => `${API}/api/tec/editar/${id}`,
    deleteTecnologia: (id) => `${API}/api/tec/borrar/${id}`,
  },
  tecNombre: {
    getNombres: `${API}/api/tec/nombre/lista`,
    createNombre: `${API}/api/tec/nombre/agregar`,
    deleteNombre: (id) => `${API}/api/tec/nombre/borrar/${id}`,
  },
  tecTipo: {
    getTipos: `${API}/api/tec/tipo/lista`,
    createTipo: `${API}/api/tec/tipo/agregar`,
    deleteTipo: (id) => `${API}/api/tec/tipo/borrar/${id}`,
  },
};

export default endPoints;
