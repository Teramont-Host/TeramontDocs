---
title: Administrador de bases de datos
sidebar_label: Administrador MySQL
---

### Apartado MySQL en TCP (Teramont Control Panel)

:::info
Teramont Host ofrece a sus usuarios bases de datos MySQL/MariaDB para facilitar la gestión y almacenamiento de datos en el TCP.
:::

#### Creación de una Nueva Base de Datos

1. **Acceso a MySQL**: Dirígete a la sección MySQL en el TCP.

   ![MySQL Section](https://cdn.teramont.net/u/VQBv1w.png)

2. **Nuevo**: Haz clic en el botón "NEW DATABASE" para comenzar el proceso de creación.

   ![New Database](https://cdn.teramont.net/u/HnLhhA.png)

3. **Rellenar Campos**:
   - **DATABASE NAME**: Ingresa un nombre descriptivo para tu base de datos.
   - **CONNECTIONS FROM**: Indica desde dónde se permitirán las conexiones. Si dejas este campo en blanco, se permitirán conexiones desde cualquier lugar. 
   
:::danger
Una vez establecido, el campo "CONNECTIONS FROM" no puede ser editado posteriormente.
:::

4. **Confirmar**: Una vez que hayas completado los campos, haz clic en "CREAR BASE DE DATOS". 

   ![Filled Fields](https://cdn.teramont.net/u/gYY4t5.png)

5. **Visualización**: Después de crear la base de datos, podrás verla en la interfaz principal del TCP.

   ![Database List](https://cdn.teramont.net/u/ExIoP5.png)

#### Detalles de la Base de Datos

:::tip
Para acceder a los detalles completos de tu base de datos, haz clic en el ícono de detalles.

![Details Icon](https://cdn.teramont.net/u/kGLHOX.png)
:::

Esto te llevará a una pantalla con la siguiente información:

- **ENDPOINT**: Es la dirección y puerto para conectar a tu base de datos.
- **CONNECTIONS FROM**: Indica desde dónde se permiten las conexiones.
- **USERNAME**: El nombre de usuario para acceder a la base de datos.
- **PASSWORD**: La contraseña asociada al nombre de usuario.
- **JDBC CONNECTION STRING**: Una cadena de conexión específica para aplicaciones Java.

![Database Details](https://cdn.teramont.net/u/wkPe5Y.png)

#### Acciones Rápidas

:::note
Al hacer clic en el ícono de acciones rápidas ![Actions Icon](https://cdn.teramont.net/u/1Dfy37.png) se desplegarán las siguientes opciones:

- **Export**: Guarda una copia de tu base de datos.
- **Import**: Restaura tu base de datos desde una copia.
- **Import from file**: Sube y restaura una base de datos desde un archivo.
- **Clear**: Elimina todos los datos de la base de datos.
- **Delete**: Borra la base de datos completamente.
:::

#### Copias de Seguridad de Bases de Datos

:::caution
Para garantizar la integridad y seguridad de tus datos, puedes hacer copias de seguridad de tus bases de datos:

1. Haz clic en el botón create backup.
  ![Backup Icon](https://cdn.teramont.net/u/0V8pYs.png)
2. Ingresa un nombre para tu copia de seguridad en **BACKUP NAME** y selecciona la base de datos en **DATABASE**.
3. Haz clic en "start backup".
4. Una vez completada la copia de seguridad, podrás verla en el panel del TCP, donde tendrás opciones para descargar, restaurar o eliminar la copia de seguridad.
   ![Backup List](https://cdn.teramont.net/u/mINPnU.png)
:::

Con estos pasos, podrás gestionar y asegurar tus bases de datos de manera eficiente y segura en TCP de Teramont Host.