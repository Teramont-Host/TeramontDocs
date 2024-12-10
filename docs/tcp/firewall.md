---
title: Cortafuegos
sidebar_label: Cortafuegos
---

### Configuración del Cortafuegos

El cortafuegos te permite controlar el tráfico entrante y saliente de tu servidor. Puedes establecer reglas para permitir o bloquear conexiones basadas en direcciones IP, puertos, prioridad y tipo de conexión.

![Cortafuegos](../../static/tcp_assets/imgs/ufw1.png)

:::info
Para bloquear todas las conexiones entrantes y salientes, utiliza la dirección IP `0.0.0.0/0` con prioridad `100` y el tipo de bloqueo.  
Para permitir conexiones de direcciones IP específicas, utiliza la dirección IP `x.x.x.x/32` (reemplaza las `x` por la dirección IP deseada), establece una prioridad entre `1` y `99`, y selecciona el tipo de conexión como "Permitir".
:::

:::tip
Añadir `/32` a la IP significa que estás especificando una sola dirección IP en lugar de un rango de direcciones.
:::

#### Campos del Cortafuegos

1. **IP Remota**: Ingresa la dirección IP remota para la cual deseas establecer la regla de cortafuegos.
2. **Puerto**: Especifica el puerto al que se aplicará la regla de cortafuegos.
3. **Prioridad**: Define la prioridad de la regla de cortafuegos. Un valor más bajo indica una prioridad más alta.
4. **Tipo**: Selecciona el tipo de conexión: "Permitir" o "Bloquear".

:::warning
Asegúrate de configurar las reglas de cortafuegos de manera cuidadosa para evitar bloqueos no deseados o permitir accesos no autorizados.
:::

:::tip
Utiliza reglas de cortafuegos para mejorar la seguridad de tu servidor y controlar el tráfico de red según tus necesidades específicas.
:::

---

### Ejemplo de Uso (IP Dedicada o Misma IP)

Si tienes una network y usas el plugin Bungeeguard para evitar que ingresen a tus modalidades sin antes pasar por el proxy, la función del firewall es una opción extra de seguridad. Supongamos que tienes el plan **Performance 20GB** con la siguiente distribución:

- Proxy: 2GB
- Lobby: 2GB
- Modalidad 1: 8GB
- Modalidad 2: 8GB

En los servidores Lobby, Modalidad 1 y Modalidad 2, deberás establecer lo siguiente:

![Configuración Mismo IP](../../static/tcp_assets/imgs/ufw2.png)

Esto hará que no se pueda ingresar de ninguna forma a tu modalidad backend sin antes pasar por tu proxy. Debes repetir esta configuración en todas las modalidades backend y debe quedar de la siguiente manera:

![Configuración Backend](../../static/tcp_assets/imgs/ufw3.png)

:::warning
Asegúrate de que el servidor proxy no tenga reglas de firewall activas.
:::

---

### Ejemplo de Uso 2 (No Comparte IP)

En caso de que tus servidores backend no tengan la misma dirección IP que tu proxy, deberás hacer lo siguiente. Supongamos que tienes 3 servidores:

- Proxy: `104.243.46.86`
- Lobby: `127.345.45.67`
- Modalidad 1: `127.456.456.67`
- Modalidad 2: `234.567.34.67`

La configuración es similar. En todos tus servidores backend deberás configurar la siguiente regla:

![Configuración No Comparte IP](../../static/tcp_assets/imgs/ufw4.png)

Adicionalmente, deberás crear otra regla. Identifica la dirección IP de tu proxy (en este caso, `104.243.46.86`) y añádele `/32`. Esto nos debe quedar como `104.243.46.86/32`. Añade esta regla al Firewall como se muestra:

![Configuración Adicional](../../static/tcp_assets/imgs/ufw5.png)

Finalmente, la configuración de tus servidores backend debe quedar de la siguiente manera:

![Configuración Final](../../static/tcp_assets/imgs/ufw5.png)

:::warning
Asegúrate de que el servidor proxy no tenga reglas de firewall activas.
:::