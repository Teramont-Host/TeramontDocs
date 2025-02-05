---
slug: crear-registro-srv-minecraft
title: Crear un Registro SRV para tu Servidor de Minecraft
authors: [mizael_s]
tags: [Minecraft, DNS, Cloudflare, SRV, Hosting]
image: https://cdn.teramont.net/u/qAIWHF.png
description: "Esta guía te ayudará a crear un registro SRV para tu servidor de Minecraft, permitiendo a los jugadores conectarse sin necesidad de ingresar el puerto. Usaremos Cloudflare como proveedor de DNS."
---

:::info
Esta guía es ideal para quienes no tienen el puerto 25565 abierto en su servidor de Minecraft y desean configurar un acceso fácil mediante un dominio personalizado.
:::

# Introducción
En Minecraft, el puerto por defecto es `25565`. Sin embargo, si tu servidor tiene asignado un puerto diferente, necesitarás un registro SRV para que los jugadores puedan conectarse usando solo el nombre del dominio sin especificar el puerto manualmente.

En esta guía, configuraremos un registro SRV usando Cloudflare.

# Paso 1: Crear un Registro A
Antes de crear el registro SRV, primero debemos establecer un registro A que apunte a la dirección IP del servidor.

1. Accede a tu panel de Cloudflare y selecciona tu dominio.
2. Ve a la pestaña **DNS**.
3. Crea un nuevo registro **A** con los siguientes valores:
   - **Nombre:** Un subdominio genérico (no debe ser el mismo que usarás en el SRV). En este caso, lo llamaremos `servidor`.
   - **IPv4:** La dirección IP de tu servidor.
   - **Proxy:** Desactivado ("DNS Only").
4. Guarda los cambios.

:::info
**¿Por qué el nombre no debe ser el mismo que el del registro SRV?**
Si el nombre del registro A y el del registro SRV son iguales, podrías generar conflictos en la resolución de DNS. El registro A se usa para resolver la dirección IP del servidor, mientras que el SRV redirige el tráfico correctamente al puerto especificado. Usar el mismo nombre puede hacer que las consultas DNS no funcionen como se espera y los jugadores no puedan conectarse.
:::

Tu registro A quedará así:

**Ejemplo:** `servidor.mexacraft.net` apuntando a `123.456.789.101`

![Imagen de referencia](https://cdn.teramont.net/u/qAIWHF.png)

# Paso 2: Crear un Registro SRV
Ahora crearemos el registro SRV que permitirá a los jugadores conectarse sin necesidad de escribir el puerto.

1. En la misma pestaña **DNS** de Cloudflare, agrega un nuevo registro **SRV**.
2. Completa los campos con la siguiente información:
   - **Tipo:** SRV
   - **Nombre:** `_minecraft._tcp.nombrequedesees`
     - Si deseas que los jugadores se conecten a `play.miservidor.com`, entonces el nombre será `_minecraft._tcp.play`.
   - **Prioridad:** `1`
   - **Peso:** `1`
   - **Puerto:** El puerto que tiene asignado tu servidor (ej. `25578`).
   - **Destino:** El subdominio que creaste en el registro A (ej. `servidor.mexacraft.net`).
   - **TTL:** 2 minutos (120 segundos).
3. Guarda los cambios.

Tu registro SRV deberá verse similar a la siguiente imagen:

![Imagen de referencia](https://cdn.teramont.net/u/KmbR44.png)

# Soporte

Si tienes problemas con esta configuración abre un ticket en nuestro discord de soporte y nuestro equipo te ayudará a configurarlo.
