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

### El archivo `.pteroignore`

El archivo `.pteroignore` es utilizado por TCP para determinar qué archivos o directorios deben ser excluidos de las copias de seguridad. Funciona de manera similar a cómo `.gitignore` funciona en Git. Cada línea del archivo especifica un patrón que se compara con los nombres de archivo en tu servidor.

:::info
#### Ejemplo de un archivo `.pteroignore`:

```
# Comentarios comienzan con un '#'
logs/           # Ignora todo el directorio de logs
*.temp          # Ignora todos los archivos con extensión .temp
!important.temp # Pero no ignores archivos llamados important.temp
backups/        # Ignora el directorio de backups
*.bak           # Ignora todos los archivos con extensión .bak
```

:::

- Las líneas que comienzan con `#` son comentarios y no se tienen en cuenta.
- Los patrones que terminan con una barra `/` se usan para excluir directorios.
- El prefijo `!` se utiliza para negar un patrón; cualquier archivo o directorio que coincida con este patrón será incluido en la copia de seguridad, incluso si coincide con uno de los patrones de exclusión anteriores.

:::tip
Es recomendable revisar y actualizar regularmente el archivo `.pteroignore` para asegurarte de que las copias de seguridad contengan todos los archivos esenciales y excluyan aquellos que no son necesarios.
:::   

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