var nombre = prompt("Ingrese Nombre de Estudiante", "Nombre");
var carrera = prompt("Ingrese Nombre de su Carrera", "Carrera")



// ------ramo1
var ramo1 = prompt("Ingrese Nombre de su Ramo", "Ramo1")
var nota1_1 = prompt("Hola, Ingrese nota 1" + ramo1,"0");
var nota2_1 = prompt("Hola, Ingrese nota 2"+ ramo1, "0");
var nota3_1 = prompt("Hola, Ingrese nota 3"+ ramo1, "0");
var p1 = (parseFloat(nota1_1)+parseFloat(nota2_1)+parseFloat(nota3_1))/3;
var p_final1 = p1.toFixed(2)

// ramo2
var ramo2 = prompt("Ingrese Nombre de su Ramo", "Ramo2");
var nota1_2 = prompt("Hola, Ingrese nota 1" + ramo2, "0");
var nota2_2 = prompt("Hola, Ingrese nota 2" + ramo2, "0");
var nota3_2 = prompt("Hola, Ingrese nota 3" + ramo2, "0");
var p2 = (parseFloat(nota1_2)+parseFloat(nota2_2)+parseFloat(nota3_2))/3;
var p_final2 = p2.toFixed(2)

// ramo3
var ramo3 = prompt("Ingrese Nombre de su Ramo", "Ramo3");
var nota1_3 = prompt("Hola, Ingrese nota 1" + ramo3, "0");
var nota2_3 = prompt("Hola, Ingrese nota 2" + ramo3, "0");
var p3 = prompt("Ingrese promedio esperado" + ramo3, "0"); 
var nota_aprobacion = ((parseFloat(p3) * 3) - (parseFloat(nota1_3) + parseFloat(nota2_3)));




// ---header-----

document.write("<header>");
document.write("<div class='container py-2'>");
document.write("<div class='row'>");
document.write("<div class='col-md-10'>");
document.write("<h1>Notas Finales</h1>");
document.write("</div>");
document.write("<div>");
document.write("<img src='assets/img/logo-desafio.png' alt='img-fluid' class='logo-dl' width='170px'>");
document.write("</div>");
document.write("</div>");
document.write("</div>");
document.write("</header>");

// <!-- -----encabezado--- -->

document.write("<div class='container'>");
document.write("<div class='row'>")
document.write("<div class=' col-md-2'>"); 
document.write("<h4 class='font-weight-bold'>Nombre:</h4>");
document.write("</div>");
document.write("<div class='inline-block font-weight-light'>");
document.write("<h4>" + nombre + "</h4>")
document.write("</div>");
document.write("</div>");
document.write("<div class='row'>");
document.write("<div class='col-md-2'>");
document.write("<h4 class='font-weight-bold'>Carrera:</h4>");
document.write("</div>");
document.write("<div class='inline-block font-weight-light'>");
document.write("<h4>" + carrera + "</h4>");
document.write("</div>");
document.write("</div>");   
document.write("</div>");


// ----tabla header

document.write("<section class='container'>");
document.write("<table class='table mt-3'>");
document.write("<thead class='thead-dark'>");
document.write("<tr>");
document.write("<div class='col-md-4'>");
document.write("<th scope='col'>Ramo</th>");
document.write("</div>");
document.write("<div class='col-md-2'>");
document.write("<th scope='col'>Nota 1</th>");
document.write("</div>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'> Promedio Final</th>");
document.write("</tr>");
document.write("</thead>");

// ----tabla body--

document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>" + ramo1 + "</th>");
document.write("<td>" + nota1_1 + "</td>");
document.write("<td>" + nota2_1 + "</td>");
document.write("<td>" + nota3_1 + "</td>")
document.write("<td>" + p1 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<th scope='row'>" + ramo2 + "</th>");
document.write("<td>" + nota1_2 + "</td>");
document.write("<td>" + nota2_2 + "</td>");
document.write("<td>" + nota3_2 + "</td>");
document.write("<td>" + p2 + "</td>");
document.write("</tr>");


document.write("<tr>");
document.write("<th scope='row'>" + ramo3 + "</th>");
document.write("<td>" + nota1_3 + "</td>");
document.write("<td>" + nota2_3 + "</td>");
document.write("<td> - </td>");
document.write("<td>" + p3 + "</td>");
document.write("</tr>");


document.write("</tbody>");
document.write("</table>");
document.write("</section>");

////mensaje

document.write("<div class='container mt-4'>");
document.write("<div class='col-md-10'>");
document.write("<p> Para aprobar el ramo" + ramo3 + "con nota" + p3 + ", necesitas obtener un " + nota_aprobacion + " en la Nota 3.</p>");
document.write("</div>");
document.write("</div>");
document.write("</div>");


