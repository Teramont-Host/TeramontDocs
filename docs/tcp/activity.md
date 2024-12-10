---
title: Teramont Control Panel (TCP)
sidebar_label: Actividad
---

## Registro de Actividad

La pestaña **Actividad** permite a los usuarios monitorear todas las acciones realizadas tanto por ellos como por los subusuarios que tienen acceso al servidor. Este registro es útil para mantener un control detallado de los eventos ocurridos en el servidor y para auditorías de seguridad.

---

### **Acciones Registradas**

A continuación, se describen las principales acciones que serán registradas en esta sección:

#### **Gestión del Servidor**
- Arrancar el servidor.
- Reiniciar el servidor.
- Detener el servidor.
- Forzar el cierre del servidor (Kill).

#### **Uso de la Consola**
- Ejecución de comandos desde la consola.

#### **Gestión de Usuarios**
- Creación de subusuarios.
- Eliminación de subusuarios.
- Edición de permisos de subusuarios.

#### **Gestión de Archivos**
- Visualización de archivos.
- Edición de archivos.
- Eliminación de archivos.
- Creación de archivos.
- Descarga de archivos.
- Subida de archivos al contenedor.

#### **Gestión de Bases de Datos**
- Creación de bases de datos.
- Eliminación de bases de datos.
- Importación de bases de datos.
- Exportación de bases de datos.
- Acceso a herramientas como phpMyAdmin.
- Rotación de contraseñas de las bases de datos.

#### **Gestión de Respaldos**
- Creación de respaldos.
- Eliminación de respaldos.
- Descarga de respaldos.

#### **Gestión de Puertos**
- Apertura de puertos.
- Eliminación de puertos.
- Renombramiento de puertos.

#### **Gestión de Subdominios**
- Creación de subdominios.
- Eliminación de subdominios.

#### **Gestión de Proxys**
- Creación de proxys.

#### **Gestión de Tareas**
- Creación de tareas programadas.
- Edición de tareas programadas.
- Eliminación de tareas programadas.

#### **Gestión de Splits (Distribución de Recursos)**
- Creación de splits.
- Modificación de recursos de los servidores en splits.
- Eliminación de splits.
- Sincronización de usuarios en los splits.

#### **Gestión del Servidor**
- Cambio de tipo de servidor (Eggs).
- Creación de reglas de firewall.
- Eliminación de reglas de firewall.
- Edición del comando de inicio (Startup Command).
- Modificación de la RAM inicial.
- Cambios en el nombre del archivo JAR del servidor.
- Reinstalación del servidor.
- Cambios en el nombre y descripción del servidor.
- Cambio de imagen del Docker.
- Actualización de la versión del servidor.

#### **Otras Acciones**
- Uso de herramientas como el Importer.

---

### **Vista del Registro**

El registro muestra un listado cronológico de las acciones realizadas. Cada entrada incluye:
- **Usuario:** La persona o subusuario que realizó la acción.
- **Acción:** Una descripción breve de lo que ocurrió.
- **Hora:** El tiempo exacto en que ocurrió la acción.
- **Ubicación:** (Si aplica) Información geográfica de donde se realizó la acción.

![Registro de Actividad](../../static/tcp_assets/imgs/logs.png)

---

### **Importancia del Registro de Actividad**

Esta herramienta permite:
- Realizar auditorías detalladas del uso del servidor.
- Identificar posibles problemas o usos indebidos.
- Garantizar la seguridad y trazabilidad de las acciones realizadas.

---