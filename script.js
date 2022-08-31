function notificarOnFormSubmit(e) {
  var marca = e.values[0];
  var nombre = e.values[1];
  var email = e.values[2];
  var fecha = e.values[6];

  var linkWhatsapp = 'https://api.whatsapp.com/send?phone=54911123456&text=%C2%A1Hola!,%20mi%20nombre%20es%20'
  var asunto = `Felicitaciones ${nombre}! ya estás inscripto en la Certificación de Bimtrazer`;

  // email_plano es para cuando el correo del receptor no soporta HTML
  var email_plano = `
    Hola ${nombre}, te damos la bienvenida.\n\n
    Mi nombre es Juan Antonio, soy BIM consultant en EMPRESA y voy a estar a cargo de la Certificación en línea.\n\n
    La certificación en nuestra metodología ha sido diseñada como una experiencia de aprendizaje donde te contaremos con detalle sobre el funcionamiento de EMPRESA y de su velocidad de adopción a nivel global. Te capacitaremos para que puedas utilizar nuestro sistema con el apoyo de guías, recursos audiovisuales y asistencia personalizada de forma que puedas captar potenciales clientes, ampliar la propuesta de valor de tu empresa o estudio, obtener proyectos derivados de nuestra parte e incluirnos en tu oferta de servicios.\n\n
    Detalle de la Certificación\n
    Fecha y hora:\n
    \t ${fecha}\n
    Días antes del primer encuentro, te llegará el link para acceder al encuentro online.\n
    Recuerda que, en caso de no poder presenciar el encuentro online, tendrás posibilidad de acceder en forma asincrónica durante la vigencia de la certificación\n
  Por dudas o consultas, puedes escribirnos a nuestro whatsapp\n
    \t ${linkWhatsapp}\n\n
    ¡Te esperamos!
  `;

  var email_html = `
    <p>Hola ${nombre}, te damos la bienvenida.</p>
    <p>Mi nombre es Juan Antonio, soy BIM Consultant en EMPRESA y voy a estar a cargo de la Certificaci&oacute;n en l&iacute;nea.</p>
    <p>La certificaci&oacute;n en nuestra metodolog&iacute;a ha sido dise&ntilde;ada como una experiencia de aprendizaje donde te contaremos con detalle sobre el funcionamiento de EMPRESA y de su velocidad de adopci&oacute;n a nivel global. Te capacitaremos para que puedas utilizar nuestro sistema con el apoyo de gu&iacute;as, recursos audiovisuales y asistencia personalizada de forma que puedas captar potenciales clientes, ampliar la propuesta de valor de tu empresa o estudio, obtener proyectos derivados de nuestra parte e incluirnos en tu oferta de servicios.</p>
    <p><strong>Detalle de la Certificaci&oacute;n</strong><br />Fecha y hora:</p>
    <ul>${fecha}</ul>
    <p>D&iacute;as antes del primer encuentro, te llegar&aacute; el link para acceder al encuentro online.</p>
    <p>Recuerda que, en caso de no poder presenciar el encuentro online, tendr&aacute;s posibilidad de acceder en forma asincr&oacute;nica durante la vigencia de la certificaci&oacute;n</p>
    <p>Por dudas o consultas, puedes escribirnos a nuestro <a href=${linkWhatsapp}>whatsapp</a> o nuestro email hi@empresa.com </p>
    <div id="simple-translate">&nbsp;</div>
    <p>&iexcl;Te esperamos!</p>
  `;

  var optsAvanzadas = {
    name: "EMPRESA", 
    htmlBody: email_html, 
    bcc: 'antonio@empresa.com, jose@empresa.com, julieta@empresa.com'
  };
  MailApp.sendEmail(email, asunto, email_plano, optsAvanzadas);
}
