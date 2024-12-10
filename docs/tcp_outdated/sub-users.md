---
title: Administrador de Usuarios (Subusuarios)
sidebar_label: Administrador de usuarios
---

# Administrador de Usuarios (Subusuarios) en TCP

Teramont Control Panel (TCP) ofrece una funcionalidad poderosa para administrar subusuarios. Estos subusuarios son cuentas adicionales a las que puedes dar acceso a tu servidor en el panel, permitiéndote compartir responsabilidades y tareas con otros sin comprometer la seguridad o la integridad de tu servidor.

## ¿Qué son los Subusuarios?

Los subusuarios son esencialmente cuentas de usuario adicionales que tienen acceso a tu servidor en el panel. Puedes asignarles permisos específicos, lo que significa que puedes controlar exactamente lo que pueden y no pueden hacer. Esto es ideal si tienes un equipo o amigos que te ayudan a administrar tu servidor y quieres asegurarte de que solo tengan acceso a las funciones que necesitan.

![Panel de Subusuarios](https://cdn.teramont.net/u/lvdI55.png)

## Añadir un Subusuario

Para añadir un nuevo subusuario, sigue estos pasos:

1. Navega al apartado de "Usuarios" en el TCP.
2. Haz clic en el botón "Usuario Nuevo".
3. Introduce la dirección de correo electrónico del usuario que deseas invitar.
4. Selecciona los permisos que deseas otorgar a este usuario. Puedes seleccionar todos los permisos con el botón "SELECT ALL PERMISSIONS" o elegir permisos individuales según lo que necesites.

![Panel para añadir un usuario nuevo](https://cdn.teramont.net/u/yk2NNV.png)

### Descripción detallada de los permisos disponibles:

#### CONTROL
- **Consola**: Permite al usuario enviar comandos al servidor a través de la consola.
- **Iniciar**: Permite al usuario iniciar el servidor si está detenido.
- **Detener**: Permite al usuario detener el servidor si está en funcionamiento.
- **Reiniciar**: Permite al usuario realizar un reinicio del servidor.

#### JUGADORES
- **Ver**: Permite al usuario ver a todos los jugadores del servidor.
- **Expulsar**: Permite al usuario expulsar jugadores del servidor.
- **Prohibir**: Permite al usuario prohibir el acceso a jugadores del servidor.
- **Desprohibir**: Permite al usuario eliminar la prohibición a jugadores.
- **Otorgar privilegios**: Permite al usuario otorgar privilegios a jugadores en el servidor.
- **Revocar privilegios**: Permite al usuario revocar privilegios a jugadores en el servidor.

#### USUARIO
- **Crear**: Permite al usuario crear nuevos subusuarios para el servidor.
- **Leer**: Permite al usuario ver subusuarios y sus permisos para el servidor.
- **Actualizar**: Permite al usuario modificar otros subusuarios.
- **Eliminar**: Permite al usuario eliminar un subusuario del servidor.

#### ARCHIVO
- **Crear**: Permite al usuario crear archivos y carpetas adicionales.
- **Leer**: Permite al usuario ver el contenido de un directorio.
- **Leer contenido**: Permite al usuario ver el contenido de un archivo específico y descargarlo.
- **Actualizar**: Permite al usuario actualizar el contenido de un archivo o directorio existente.
- **Eliminar**: Permite al usuario eliminar archivos o directorios.
- **Archivar**: Permite al usuario archivar el contenido de un directorio.
- **SFTP**: Permite al usuario conectarse a SFTP y gestionar archivos del servidor.
- **Descargar**: Permite al usuario descargar archivos desde una URL.

#### RESPALDO
- **Crear**: Permite al usuario crear nuevos respaldos para el servidor.
- **Leer**: Permite al usuario ver todos los respaldos existentes para el servidor.
- **Eliminar**: Permite al usuario eliminar respaldos del sistema.
- **Descargar**: Permite al usuario descargar un respaldo del servidor.
- **Restaurar**: Permite al usuario restaurar un respaldo en el servidor.

#### ASIGNACIÓN
- **Leer**: Permite al usuario ver todas las asignaciones actuales del servidor.
- **Crear**: Permite al usuario asignar asignaciones adicionales al servidor.
- **Actualizar**: Permite al usuario cambiar la asignación principal del servidor.
- **Eliminar**: Permite al usuario eliminar una asignación del servidor.

#### INICIO
- **Leer**: Permite al usuario ver las variables de inicio del servidor.
- **Actualizar**: Permite al usuario modificar las variables de inicio del servidor.
- **Imagen Docker**: Permite al usuario modificar la imagen Docker utilizada para ejecutar el servidor.

#### BASE DE DATOS
- **Crear**: Permite al usuario crear una nueva base de datos para el servidor.
- **Leer**: Permite al usuario ver la base de datos asociada con el servidor.
- **Actualizar**: Permite al usuario rotar la contraseña de una instancia de base de datos.
- **Eliminar**: Permite al usuario eliminar una instancia de base de datos del servidor.
- **Ver contraseña**: Permite al usuario ver la contraseña asociada con una instancia de base de datos.

#### TAREAS
- **Crear**: Permite al usuario crear nuevas programaciones para el servidor.
- **Leer**: Permite al usuario ver programaciones y las tareas asociadas con ellas para el servidor.
- **Actualizar**: Permite al usuario actualizar programaciones y tareas programadas para el servidor.
- **Eliminar**: Permite al usuario eliminar programaciones del servidor.

#### CONFIGURACIÓN
- **Renombrar**: Permite al usuario cambiar el nombre del servidor.
- **Reinstalar**: Permite al usuario desencadenar una reinstalación del servidor.

#### PLUGINS
- **Versión**: Permite al usuario instalar plugins a través de la pestaña de plugins.

#### DIVISOR DE SERVIDOR
- **Gestionar**: Permite al usuario crear o eliminar subservidores.

#### PROXY
- **Crear**: Permite al usuario crear un nuevo proxy para el servidor.
- **Eliminar**: Permite al usuario eliminar un proxy del servidor.

#### ACTIVIDAD
- **Leer**: Permite al usuario ver los registros de actividad del servidor.

Una vez que hayas seleccionado los permisos, haz clic en el botón "INVITE USER". El usuario recibirá un correo electrónico con una invitación para configurar su cuenta. Una vez que hayan configurado su cuenta, tendrán acceso al servidor con los permisos que les hayas otorgado.

## Configurando la Cuenta de un Subusuario

Si es la primera vez que se registra el correo del subusuario, este recibirá dos correos electrónicos. El primero es para la configuración de la cuenta y el segundo es una notificación de que ha sido añadido al servidor.

![Bandeja de entrada de correo](https://cdn.teramont.net/u/z3KCZP.png)

Al abrir el correo electrónico para la configuración de la cuenta, deberás hacer clic en el botón "Setup Your Account".

![Correo electrónico para configurar cuenta](https://cdn.teramont.net/u/bQff5d.png)

Esto te llevará al panel en el apartado de configuración de cuenta.

![Panel de configuración de cuenta](https://cdn.teramont.net/u/abPZOA.png)

Aquí, simplemente tendrás que ingresar tu contraseña dos veces para establecer tu cuenta. Una vez completados estos pasos, podrás iniciar sesión en el panel como subusuario y acceder al servidor con los permisos que se te hayan otorgado.

:::tip
Es importante revisar y entender cada permiso antes de asignarlo a un subusuario. Asegúrate de otorgar solo los permisos necesarios para evitar problemas o conflictos en el futuro.
:::

### Gestión de Subusuarios

Una vez que has agregado un subusuario, no esstás limitado a los permisos que inicialmente le otorgaste. Puedes ajustar y adaptar los permisos según las necesidades cambiantes de tu servidor o del rol del subusuario.

#### Editar Permisos de un Subusuario

1. **Acceder a la lista de subusuarios**: Desde el panel principal, dirígete al apartado de subusuarios. Aquí verás una lista de todos los subusuarios que has agregado a tu servidor.
2. **Seleccionar un subusuario**: Haz clic en el nombre o correo electrónico del subusuario cuyos permisos deseas editar.
3. **Modificar permisos**: Se te presentará una lista similar a la que viste cuando añadiste al subusuario. Simplemente marca o desmarca las casillas de los permisos que deseas otorgar o revocar.
4. **Guardar cambios**: Una vez que hayas realizado los ajustes deseados, haz clic en el botón de guardar o confirmar para aplicar los cambios.

#### Eliminar un Subusuario

Si en algún momento decides que un subusuario ya no debería tener acceso a tu servidor, puedes eliminarlo fácilmente:

1. **Acceder a la lista de subusuarios**: Desde el panel principal, dirígete al apartado de subusuarios.
2. **Seleccionar un subusuario**: Junto al nombre o correo electrónico del subusuario que deseas eliminar, busca el icono o botón de eliminar.
3. **Confirmar eliminación**: Se te pedirá que confirmes tu decisión, ya que eliminar un subusuario es una acción irreversible. Una vez confirmado, el subusuario ya no tendrá acceso a tu servidor ni a ninguna de las funciones que previamente habías otorgado.

Recuerda que la gestión adecuada de los subusuarios y sus permisos es esencial para mantener la seguridad y la operatividad de tu servidor. Otorga permisos solo a aquellos en quienes confíes y revisa regularmente la lista de subusuarios para asegurarte de que todos los que tienen acceso deberían tenerlo.

### Conclusión

La administración de subusuarios en el TCP es una herramienta esencial para aquellos que buscan colaborar con otros en la gestión de su servidor. Con una amplia gama de permisos disponibles, puedes personalizar el acceso de cada subusuario para adaptarse a tus necesidades específicas, garantizando al mismo tiempo la seguridad y la integridad de tu servidor.