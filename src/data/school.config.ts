const currentYear = new Date().getFullYear();
// A partir de septiembre los colegios ya promocionan la admisión del año siguiente
export const ADMISSION_YEAR = new Date().getMonth() >= 8 ? currentYear + 1 : currentYear;

export const SCHOOL_DATA = {
  nombre: "María Reina del Cielo School",
  lema: "Líderes en educación de calidad al más alto nivel",
  ugel: "UGEL 05",
  telefono: "(01) 456-7890",
  whatsapp: "51987654321",
  email: "admision@mariareinadelcielo.edu.pe",
  direccion: "JR. PIEDRA DEL SOL NRO. 1778 URB. INCA MANCO CAPAC - SAN JUAN DE LURIGANCHO - LIMA",
  horario: "Lunes a Viernes: 7:30 am - 3:30 pm",
  libroReclamacionesUrl: "https://reclamos.tu-dominio.com/mariareinadelcielo",
  redes: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
  },
  slides: [
    {
      titulo: `Admisión ${ADMISSION_YEAR} Abierta`,
      subtitulo: "Educación integral con exigencia preuniversitaria desde los primeros grados.",
      bgImage: "/images/campus-1.jpg",
      studentPng: "/images/estudiante-hero.png", // PNG sin fondo que sobresale
    },
    {
      titulo: "Primeros Puestos en Cómputo General",
      subtitulo: "Más de 85 ingresantes directos a San Marcos, UNI y PUCP en el último año.",
      bgImage: "/images/laboratorio.jpg",
      studentPng: "/images/estudiante-trofeo.png",
    }
  ],
  nosotros: {
    historia: "Con más de 20 años de trayectoria educativa, combinamos disciplina, inglés intensivo y preparación de alto rendimiento.",
    pilares: ["Exigencia Académica", "Formación en Valores", "Inglés y Tecnología", "Acompañamiento Psicológico"],
    stats: [
      { numero: "+20", label: "Años de experiencia" },
      { numero: "94%", label: "Ingresantes a universidades" },
      { numero: "100%", label: "Docentes titulados" }
    ]
  },
  cachimbos: [
    {
      nombre: "Mateo Quispe Rojas",
      universidad: "UNMSM",
      carrera: "Medicina Humana",
      puesto: "2do Puesto Cómputo",
      foto: "/images/cachimbo-1.png", // Ideal PNG sin fondo o foto retrato
      promocion: "2025"
    },
    {
      nombre: "Valeria Mendoza",
      universidad: "UNI",
      carrera: "Ing. de Sistemas",
      puesto: "Ingreso Directo",
      foto: "/images/cachimbo-2.png",
      promocion: "2025"
    },
    {
      nombre: "Sebastián Torres",
      universidad: "PUCP",
      carrera: "Derecho",
      puesto: "Beca Integral",
      foto: "/images/cachimbo-3.png",
      promocion: "2025"
    }
  ],
  costosAdmision: [
    { nivel: "Inicial (3 a 5 años)", matricula: 450, pension: 450, cuotaIngreso: "Exonerado" },
    { nivel: "Primaria", matricula: 520, pension: 520, cuotaIngreso: "S/ 300" },
    { nivel: "Secundaria", matricula: 580, pension: 580, cuotaIngreso: "S/ 300" },
  ]
};