---
title: Administrador de archivos en TCP
sidebar_label: Administrador de archivos
---

## Introducción al Administrador de archivos

El Administrador de archivos en el Teramont Control Panel (TCP) es una herramienta esencial que te permite gestionar, visualizar y modificar los archivos de tu servidor de manera eficiente y sencilla.

![Administrador de archivos](https://cdn.teramont.net/u/sn75Hx.png)

## Resumen de controles

### Navegación y gestión básica

- **Ruta actual**: En la esquina superior izquierda, se muestra la carpeta o directorio en el que te encuentras actualmente.
- **Navegación entre carpetas**: Haz clic en cualquier carpeta para explorar su contenido.
- **Papelera de reciclaje**: Recupera archivos que hayas eliminado en las últimas 24 horas.
- **Descarga desde enlace**: Inserta un enlace directo a un archivo para descargarlo directamente al servidor.
- **Creación de directorios y archivos**: Añade nuevos directorios o archivos según tus necesidades.
- **Subida de archivos**: Carga archivos desde tu computadora (hasta 100MB). Para archivos más grandes, utiliza SFTP.
- **Selección de archivos**: Utiliza la casilla de verificación en la esquina superior izquierda para seleccionar todos los archivos o selecciona archivos individuales.
- **Lanzar SFTP**: Accede a la opción SFTP para una gestión avanzada de archivos.
- **Búsqueda de archivos**: Utiliza la función de búsqueda para localizar archivos o directorios específicos.
- **Ordenar archivos**: Ordena tus archivos por tamaño, orden alfabético o fecha de modificación.

### Acciones con archivos seleccionados

- **Copiar o mover**: Desplaza archivos o carpetas dentro de tu servidor. Especifica el directorio de destino y decide si deseas sobrescribir archivos o carpetas con el mismo nombre.
- **Archivar**: Crea un archivo comprimido con los archivos o carpetas seleccionados. El archivo resultante se llamará `archive-yyyy-mm-dd.tar.gz`.
- **Eliminar**: Envía los archivos seleccionados a la Papelera de reciclaje, donde permanecerán durante 24 horas.

### Opciones individuales por archivo

Al hacer clic junto a un archivo o carpeta, se desplegarán opciones adicionales:

- **Renombrar**: Cambia el nombre de un archivo o carpeta.
- **Duplicar**: Crea una copia del archivo o carpeta seleccionada.
- **Descargar**: Guarda el archivo seleccionado en tu dispositivo.
- **Mover**: Desplaza el archivo o carpeta a un directorio diferente dentro de tu servidor.
- **Archivar**: Crea un archivo comprimido con el archivo o carpeta seleccionada.
- **Modificar permisos (CHMOD)**: Ajusta los permisos de un archivo o carpeta. CHMOD es una operación que permite establecer o cambiar los permisos de acceso a un archivo o directorio en sistemas Unix y Linux. Estos permisos determinan quién puede leer, escribir o ejecutar un archivo.

### Permisos en sistemas Unix y Linux

Los permisos en sistemas Unix y Linux se representan mediante tres números. Cada número puede variar entre 0 y 7 y corresponde a los permisos de una categoría específica:

1. **Propietario (Owner)**
2. **Grupo (Group)**
3. **Otros (Others)**

Cada número se calcula sumando los valores de los permisos que se desean otorgar:

- **Lectura (Read)**: 4
- **Escritura (Write)**: 2
- **Ejecución (Execute)**: 1

Por ejemplo, el permiso "644" se desglosa de la siguiente manera:

- **6 (Lectura + Escritura = 4 + 2) para el Propietario**
- **4 (Lectura) para el Grupo**
- **4 (Lectura) para Otros**

Esto significa que el propietario tiene permisos de lectura y escritura, mientras que el grupo y otros solo tienen permisos de lectura.

:::info
En el contexto de TCP y servidores de juegos, es común ver permisos como "755" para directorios y "644" para archivos. El "755" permite al propietario leer, escribir y ejecutar, mientras que el grupo y otros solo pueden leer y ejecutar. El "644" permite al propietario leer y escribir, mientras que el grupo y otros solo pueden leer.
:::

Para modificar los permisos en el Teramont Control Panel (TCP), puedes utilizar la opción "Permisos al seleccionar un archivo/directorio" y especificar el número de permiso deseado.

## Papelera de reciclaje

La papelera de reciclaje es una característica de seguridad en el Teramont Control Panel (TCP) que te permite recuperar archivos que hayas eliminado accidentalmente.

![Papelera de reciclaje](https://cdn.teramont.net/u/IPiUIM.png)

Cuando eliminas un archivo o carpeta en tu servidor, no se borra de inmediato. En su lugar, se mueve a la papelera de reciclaje. Estos archivos permanecerán en la papelera durante 24 horas, dándote la oportunidad de recuperarlos si es necesario. Sin embargo, después de este período de 24 horas, los archivos se eliminarán de forma permanente y no podrán ser recuperados.

:::caution
Es esencial revisar regularmente la papelera de reciclaje y asegurarse de que no contenga archivos que desees conservar. Una vez que un archivo ha sido eliminado definitivamente de la papelera, no puede ser recuperado.
:::