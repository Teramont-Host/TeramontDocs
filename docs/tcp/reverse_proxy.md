---
title: Proxy Inverso
sidebar_label: Proxy Inverso
---

### Proxy Inverso

La sección de Proxy en el panel TCP ofrece una funcionalidad avanzada permitiendo la creación de proxies inversos utilizando Nginx. Un proxy inverso actúa como un intermediario para las solicitudes enviadas a un servidor. En lugar de que el tráfico llegue directamente a tu servidor, primero pasa por el proxy inverso, que luego decide a dónde enviar la solicitud en tu red interna.

Esta característica es particularmente útil si estás alojando una página web en tu servidor o utilizando plugins que requieren acceso web, como DynMap en Minecraft. Por ejemplo, puedes convertir una dirección complicada como "http://125.236.25:25569" en un acceso más sencillo y elegante como "https://mapa.miservidor.com".

![Sección de Proxy](https://cdn.teramont.net/u/CNHmeV.png)

Para configurar un proxy inverso, sigue estos pasos:

1. Haz clic en el botón "Create Proxy". 
   ![Botón Create Proxy](https://cdn.teramont.net/u/96Jr9v.png)

2. Completa los campos necesarios para tu nuevo proxy:
   - **PROXY DOMAIN**: El dominio o subdominio que deseas usar para tu proxy.
   - **ALLOCATION**: Selecciona el puerto de tu servidor al que deseas aplicar el proxy. Aquí se listarán todos los puertos disponibles de tu servidor.

3. **SSL (Opcional)**: Si deseas que tu proxy tenga una conexión segura, puedes habilitar SSL. Si activas esta opción, deberás proporcionar lo siguiente:
   - **SSL CERTIFICATE**: Tu certificado SSL.
   - **SSL KEY**: La clave de tu certificado SSL.

:::tip
Se recomienda usar CloudFlare para generar certificados SSL de origen, ya que proporciona una capa adicional de seguridad y es fácil de configurar.
:::

4. Una vez que hayas completado todos los campos necesarios, tu proxy se creará y aparecerá en la lista de proxies. Ahora podrás acceder a tu servidor usando el dominio o subdominio que especificaste, como se muestra en la siguiente imagen.
   ![Proxy Creado](https://cdn.teramont.net/u/xOtExG.png)

La sección de Proxy simplifica la gestión de tu tráfico entrante, mejorando la seguridad y la eficiencia mientras proporciona una forma más profesional y accesible para que los usuarios accedan a tus servicios.