// 1. Área de un rectángulo
const calcularAreaRectangulo = (base, altura) => base * altura;

// 2. Volumen de un cubo
const calcularVolumenCubo = (lado) => lado ** 3;

// 3. Saludo personalizado
const saludar = (nombre) => `Hola ${nombre}`;

// 4. Números de 1 a n
const imprimirNumeros = (n) => {
  for (let i = 1; i <= n; i++) console.log(i);
};

// 5. Factorial de un número
const factorial = (n) => {
  let resultado = 1;
  for (let i = 1; i <= n; i++) resultado *= i;
  return resultado;
};

// 6. Verificar si es vocal
const esVocal = (caracter) => 'aeiouAEIOU'.includes(caracter);

// 7. Convertir cadena a mayúsculas
const convertirAMayusculas = (cadena) => cadena.toUpperCase();

// 8. Obtener la primera letra
const obtenerPrimeraLetra = (nombre) => nombre[0];

// 9. Contar vocales en una cadena
const contarVocales = (cadena) => {
  let contador = 0;
  for (let letra of cadena.toLowerCase()) {
    if ('aeiou'.includes(letra)) contador++;
  }
  return contador;
};

// 10. Eliminar vocales de una cadena
const eliminarVocales = (cadena) => {
  let resultado = '';
  for (let letra of cadena) {
    if (!'aeiouAEIOU'.includes(letra)) resultado += letra;
  }
  return resultado;
};

// 11. Número aleatorio entre 1 y 20
const numeroAleatorio = () => Math.floor(Math.random() * 20) + 1;

// 12. Aprobar o no materia según promedio
const verificarAprobacion = (nota1, nota2, nota3, nota4, nota5) => {
  const promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
  return promedio >= 3 ? "Aprobado" : "Reprobado";
};

// 13. Determinar si un número es positivo o negativo
const esPositivoONegativo = (numero) => (numero >= 0 ? "Positivo" : "Negativo");

// 14. Entrada a parque de atracciones
const permitirEntrada = (edad, estatura, permisoParental) => {
  if (edad >= 18 && estatura > 150) return "Acceso permitido";
  if (edad < 18 && permisoParental) return "Acceso permitido con permiso parental";
  return "Acceso denegado";
};

// 15. Generar contraseña aleatoria
const generarContraseña = (n) => {
  let contraseña = '';
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  for (let i = 0; i < n; i++) {
    contraseña += caracteres[Math.floor(Math.random() * caracteres.length)];
  }
  return contraseña;
};

// 16. Facturación con descuentos
const facturacion = (monto, medioPago) => {
  if (monto > 400) return monto * 0.6;
  if (monto >= 200 && monto <= 400) {
    if (medioPago === 'E') return monto * 0.7;
    if (medioPago === 'D') return monto * 0.8;
    if (medioPago === 'C') return monto * 0.9;
  }
  return monto;
};

// 17. Operar dos números según la operación
const realizarOperacion = (num1, num2, operacion) => {
  if (operacion === 'suma') return num1 + num2;
  if (operacion === 'resta') return num1 - num2;
  if (operacion === 'multiplicacion') return num1 * num2;
  if (operacion === 'division') return num2 !== 0 ? num1 / num2 : "No se puede dividir entre 0";
};

// 18. Contar bases en una cadena de ADN
const contarBasesADN = (cadena) => {
  let A = 0, C = 0, G = 0, T = 0;
  for (let base of cadena) {
    if (base === 'A') A++;
    if (base === 'C') C++;
    if (base === 'G') G++;
    if (base === 'T') T++;
  }
  return `Cantidad de A: ${A}, Cantidad de C: ${C}, Cantidad de G: ${G}, Cantidad de T: ${T}`;
};

// 19. Conversión Celsius y Fahrenheit
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

// 20. Área y perímetro de un rectángulo
const calcularArea = (largo, ancho) => largo * ancho;
const calcularPerimetro = (largo, ancho) => 2 * (largo + ancho);

// 21. Verificar si un número es primo
const esPrimo = (numero) => {
  if (numero < 2) return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return true;
};

const imprimirResultado = (numero) => console.log(esPrimo(numero) ? "Es primo" : "No es primo");

// 22. Aprobar o reprueba estudiante
const calcularPromedio = (notas) => notas.reduce((a, b) => a + b, 0) / notas.length;
const esAprobado = (promedio) => promedio >= 6;
const mostrarResultado = (aprobado) => console.log(aprobado ? "Aprobado" : "Reprobado");

// 23. Generar contraseña segura
const generarContraseñaSegura = (palabraBase) => palabraBase + Math.random().toString(36).slice(-4) + "!@#";
const imprimirContraseña = (contraseña) => console.log(contraseña);
