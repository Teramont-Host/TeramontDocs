---
title: Copias de seguridad
sidebar_label: Copias de seguridad
---

### Copias de Seguridad en TCP

:::info
Las copias de seguridad son esenciales para garantizar la integridad y seguridad de tus datos en el TCP. Permiten restaurar tu servidor a un estado anterior, lo cual es especialmente útil en caso de errores, pérdidas de datos o simplemente para revertir cambios. Es altamente recomendable realizar copias de seguridad antes de hacer cambios significativos en tu servidor.
:::

#### Acceso al Apartado de Copias de Seguridad

1. **Navegación**: Dirígete al apartado "Backups" en el TCP.
   ![Backups Section](https://cdn.teramont.net/u/eJuPZN.png)

2. **Crear una Nueva Copia de Seguridad**: Haz clic en el botón "CREAR COPIA DE SEGURIDAD".
   ![Crear Copia](https://cdn.teramont.net/u/Vcx22w.png)

3. **Rellenar Campos**:
   - **BACKUP NAME**: Si lo deseas, proporciona un nombre para referenciar esta copia de seguridad.
   - **IGNORED FILES & DIRECTORIES**: Ingresa los archivos o carpetas que deseas ignorar durante la generación de esta copia de seguridad. Si dejas este campo en blanco, se utilizarán los contenidos del archivo `.pteroignore` en la raíz del directorio del servidor (si está presente). Se admite la coincidencia de comodines de archivos y carpetas, además de negar una regla prefijando la ruta con un signo de exclamación.
   - **LOCKED**: Si activas esta opción, la copia de seguridad no podrá ser eliminada hasta que se desbloquee explícitamente.
   
   ![Interfaz de Copia](https://cdn.teramont.net/u/ScloKB.png)

4. **Confirmar**: Una vez completados los campos, haz clic en "START BACKUP" para iniciar el proceso de creación de la copia de seguridad.

5. **Visualización**: Tras crear la copia, podrás visualizarla en el apartado "Backups".
   ![Lista de Copias](https://cdn.teramont.net/u/lQKAb7.png)

#### Acciones Rápidas

:::note
Al hacer clic en el ícono de acciones rápidas ![Actions Icon](https://cdn.teramont.net/u/MDCQAa.png), se desplegarán las siguientes opciones:

- **Download**: Descarga la copia de seguridad a tu dispositivo.
- **Restore**: Restaura el servidor a la versión de esta copia de seguridad.
- **Lock**: Bloquea la copia de seguridad para evitar su eliminación.
- **Delete**: Elimina la copia de seguridad del TCP.

![Acciones Rápidas](https://cdn.teramont.net/u/DAsuDJ.png)
:::

:::tip
Recuerda que las copias de seguridad son una herramienta valiosa para proteger tu servidor y tu información. Asegúrate de realizarlas regularmente y especialmente antes de realizar cambios importantes.
:::