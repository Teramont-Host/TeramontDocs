---
slug: guia-de-optimizacion2
title: Guía de optimización para servidores de Minecraft Java [2025]
authors: [ricardo_s]
tags: [Minecraft Java, Paper, Purpur, Optimizacion, TPS]
image: https://cdn.teramont.net/u/oC3myP.png
description: >
  Esta guía de optimización para servidores de Minecraft Java te proporcionará
  valiosos consejos y conocimientos para optimizar al máximo el rendimiento de
  tu servidor. Recuerda que, aunque estas recomendaciones son poderosas, ninguna
  optimización es mágica y siempre deberás adaptarlas a tus necesidades específicas.
---

:::info
Esta guía se basa en la [guía de optimización de YouHaveTrouble](https://github.com/YouHaveTrouble/minecraft-optimization/tree/1.20), adaptada para la versión actual de Minecraft. Su objetivo es facilitar la comprensión para quienes no dominan el inglés.
:::

# Introducción

Nunca habrá una guía que te brinde resultados perfectos; cada servidor tiene sus propias necesidades y límites en cuanto a cuánto se puede sacrificar. La idea es experimentar y ajustar cada opción según las características de tu servidor. Si encuentras algún error o información desactualizada, ¡no dudes en abrir un issue o enviar un pull request!

:::tip
**Nota:** Si utilizas Vanilla, Fabric o Spigot (o versiones inferiores a Paper), recuerda modificar `sync-chunk-writes` en tu archivo `server.properties` a `false`. En Paper y sus forks esto se configura automáticamente.
:::

Esta guía está orientada a la versión **1.20** (con algunas configuraciones aplicables de la 1.15 a la 1.19) y se basa en diversas fuentes, entre ellas [esta guía de Spigot](https://www.spigotmc.org/threads/guide-server-optimization%E2%9A%A1.283181/).

# Preparativos

:::info
La elección del software de servidor es crucial para el rendimiento y la disponibilidad de APIs. Existen múltiples JARs populares, pero también algunos de los que es mejor mantenerse alejado.
:::

## Software Recomendado

- **Paper** – [PaperMC](https://github.com/PaperMC/Paper): Enfocado en mejorar el rendimiento y corregir inconsistencias del juego.
- **Pufferfish** – [Pufferfish](https://github.com/pufferfish-gg/Pufferfish): Fork de Paper con mejoras adicionales de rendimiento.
- **Purpur** – [Purpur](https://github.com/PurpurMC/Purpur): Fork de Pufferfish con más opciones de personalización.

:::danger
**Advertencia:** Evita:
- JARs de pago que prometan características asincrónicas (la mayoría son estafas).
- Bukkit/CraftBukkit/Spigot, pues están desactualizados en rendimiento.
- Complementos o software que habiliten/deshabiliten plugins en tiempo real.
- Forks derivados de Pufferfish o Purpur sin pruebas de estabilidad.
  :::

## Generación Previa de Mapas

La pregeneración de mapas es especialmente útil en servidores con CPU de un solo hilo o limitados. Es común para complementos de mapas como Pl3xMap o Dynmap.

Si decides pregenerar el mundo, utiliza un complemento como [Chunky](https://github.com/pop4959/Chunky) y **asegúrate de establecer un límite de mundo** para evitar la generación incontrolada de nuevos fragmentos.

:::caution
Recuerda que cada dimensión (mundo normal, Nether y End) tiene su propio límite. El Nether, por defecto, es 8 veces más pequeño que el mundo normal.
:::

> **Tip:** Configura el mundo normal con `/worldborder set [diámetro]` para prevenir picos de lag causados por la generación de fragmentos adicionales.

# Configuraciones

A continuación se detalla cada sección de configuración junto con los valores recomendados.

---

## 1. Networking

### [server.properties]

#### network-compression-threshold
- **Valor recomendado:** `256`  
  Establece el tamaño mínimo de un paquete para comprimirlo.
> **Consejo:** En redes internas o con proxy, desactivarlo (usando `-1`) puede ahorrar recursos de CPU.

### [purpur.yml]

#### use-alternate-keepalive
- **Valor recomendado:** `true`  
  Habilita un sistema alternativo de keepalive para evitar desconexiones innecesarias en jugadores con mala conexión.
> *Este sistema envía un paquete de keepalive cada segundo y solo desconecta al jugador si no responde en 30 segundos.*

---

## 2. Chunks

### [server.properties]

#### simulation-distance
- **Valor recomendado:** `4`  
  Define la cantidad de fragmentos en los que se procesan actividades (como fundición de hornos o crecimiento de cultivos).
> **Nota:** Mantener este valor bajo reduce la carga en el servidor.

#### view-distance
- **Valor recomendado:** `7`  
  Es la cantidad de fragmentos que se envían al jugador.
> **Importante:** El valor total enviado es el mayor entre `simulation-distance` y `view-distance`.

### [spigot.yml]

#### view-distance
- **Valor recomendado:** `predeterminado`  
  Usa el valor predeterminado para mantener la gestión centralizada en `server.properties`.

### [Configuración de paper-world]

#### delay-chunk-unloads-by
- **Valor recomendado:** `10s`  
  Tiempo que los fragmentos permanecen cargados tras que un jugador se desconecta.
> **Tip:** Evita cargas y descargas constantes de fragmentos.

#### max-auto-save-chunks-per-tick
- **Valor recomendado:** `8`  
  Distribuye el guardado incremental de fragmentos para mejorar el rendimiento.
> En servidores con muchos jugadores, podrías incrementar este valor.

#### prevent-moving-into-unloaded-chunks
- **Valor recomendado:** `true`  
  Previene que los jugadores se muevan hacia fragmentos no cargados, evitando cargas sincrónicas que generan lag.

#### entity-per-chunk-save-limit
Establece límites para la cantidad de entidades de cada tipo que se guardan en un fragmento.  
Ejemplo de valores recomendados:
```yaml
area_effect_cloud: 8
arrow: 16
dragon_fireball: 3
egg: 8
ender_pearl: 8
experience_bottle: 3
experience_orb: 16
eye_of_ender: 8
fireball: 8
firework_rocket: 8
llama_spit: 3
potion: 8
shulker_bullet: 8
small_fireball: 8
snowball: 8
spectral_arrow: 16
trident: 16
wither_skull: 4
```
> **Cuidado:** Ajusta estos límites para evitar que el servidor se bloquee por exceso de entidades.

### [pufferfish.yml]

#### max-loads-per-projectile
- **Valor recomendado:** `8`  
  Limita la cantidad de fragmentos que puede cargar un proyectil durante su existencia.
> **Aviso:** Reducirlo demasiado puede afectar el comportamiento de tridents y enderpearls.

---

## 3. Mobs

### [bukkit.yml]

#### spawn-limits
Valores sugeridos:
```yaml
monsters: 20
animals: 5
water-animals: 2
water-ambient: 2
water-underground-creature: 3
axolotls: 3
ambient: 1
```
La fórmula es:  
**[cantidad de jugadores] * [límite]**

#### ticks-per
Valores sugeridos:
```yaml
monster-spawns: 10
animal-spawns: 400
water-spawns: 400
water-ambient-spawns: 400
water-underground-creature-spawns: 400
axolotl-spawns: 400
ambient-spawns: 400
```
> **Tip:** Incrementar estos valores reduce la frecuencia de aparición, aliviando la carga del servidor.

### [spigot.yml]

#### mob-spawn-range
- **Valor recomendado:** `3`  
  Determina el rango (en fragmentos) donde pueden aparecer mobs.
> Un valor menor puede dar la sensación de mayor densidad de mobs alrededor del jugador.

#### entity-activation-range
Valores sugeridos:
```yaml
animals: 16
monsters: 24
raiders: 48
misc: 8
water: 8
villagers: 16
flying-monsters: 48
```
> **Advertencia:** Reducir demasiado estos valores puede hacer que los mobs no se activen hasta que el jugador esté muy cerca.

#### entity-tracking-range
Valores sugeridos:
```yaml
players: 48
animals: 48
monsters: 48
misc: 32
other: 64
```
> **Consejo:** Estos valores deben ser mayores que los de activación para evitar que los mobs aparezcan de la nada.

#### tick-inactive-villagers
- **Valor recomendado:** `false`  
  Evita que los aldeanos se actualicen fuera del rango de activación, mejorando el rendimiento.
> **Precaución:** Esto puede afectar granjas de aldeanos o el comercio.

#### nerf-spawner-mobs
- **Valor recomendado:** `true`  
  Desactiva la IA en mobs generados por spawners para reducir el consumo de recursos.

### [Configuración de paper-world]

#### despawn-ranges
Valores sugeridos:
```yaml
ambient:
  hard: 72
  soft: 30
axolotls:
  hard: 72
  soft: 30
creature:
  hard: 72
  soft: 30
misc:
  hard: 72
  soft: 30
monster:
  hard: 72
  soft: 30
underground_water_creature:
  hard: 72
  soft: 30
water_ambient:
  hard: 72
  soft: 30
water_creature:
  hard: 72
  soft: 30
```
> **Nota:** Ajusta estos rangos para que los mobs se despawneen de manera controlada sin afectar la experiencia de juego.

#### per-player-mob-spawns
- **Valor recomendado:** `true`  
  Permite que el cálculo de aparición de mobs se base en la cantidad de jugadores presentes.

#### max-entity-collisions
- **Valor recomendado:** `2`  
  Controla la cantidad de colisiones procesadas por entidad a la vez.

#### update-pathfinding-on-block-update
- **Valor recomendado:** `false`  
  Reducir actualizaciones de ruta puede mejorar el rendimiento a costa de una leve latencia en la respuesta de los mobs.

#### fix-climbing-bypassing-cramming-rule
- **Valor recomendado:** `true`  
  Previene que las entidades se acumulen al escalar (como las arañas).

#### armor-stands.tick
- **Valor recomendado:** `false`  
  Configura la física de los soportes de armaduras para evitar movimientos innecesarios.

#### armor-stands.do-collision-entity-lookups
- **Valor recomendado:** `false`  
  Desactiva las colisiones en soportes de armaduras, aligerando el procesamiento.

#### tick-rates
Valores sugeridos para comportamientos y sensores:
```yaml
behavior:
  villager:
    validatenearbypoi: 60
    acquirepoi: 120
sensor:
  villager:
    secondarypoisensor: 80
    nearestbedsensor: 80
    villagerbabiessensor: 40
    playersensor: 40
    nearestlivingentitysensor: 40
```
:::info
Si tienes habilitado el DAB (Dynamic Activation of Brains) en Pufferfish, se recomienda no modificar estos valores.
:::

### [pufferfish.yml]

#### dab.enabled
- **Valor recomendado:** `true`  
  Activa el DAB, que reduce la frecuencia de actualización de entidades que están lejos del jugador.

#### dab.max-tick-freq
- **Valor recomendado:** `20`  
  Define la frecuencia mínima de actualización para las entidades lejanas.

#### dab.activation-dist-mod
- **Valor recomendado:** `7`  
  Controla el gradiente de activación. Ajustarlo puede afectar el comportamiento de las granjas de mobs.

#### enable-async-mob-spawning
- **Valor recomendado:** `true`  
  Permite que la generación de mobs se ejecute en un hilo secundario.
> **Importante:** Requiere que `per-player-mob-spawns` esté habilitado en Paper.

#### enable-suffocation-optimization
- **Valor recomendado:** `true`  
  Optimiza la comprobación de sofocación, reduciendo la carga sin afectar la experiencia de juego.

#### inactive-goal-selector-throttle
- **Valor recomendado:** `true`  
  Reduce la frecuencia de actualización del selector de objetivos en entidades inactivas a cada 20 ticks.

### [purpur.yml]

#### zombie.aggressive-towards-villager-when-lagging
- **Valor recomendado:** `false`  
  Evita que los zombies ataquen a aldeanos cuando el servidor presenta lag.

#### entities-can-use-portals
- **Valor recomendado:** `false`  
  Deshabilita el uso de portales para entidades (excepto jugadores) para evitar cargas innecesarias de fragmentos.

#### villager.lobotomize.enabled
- **Valor recomendado:** `true`  
  Lobotomiza a los aldeanos problemáticos que generan lag por sus comprobaciones de navegación.
> **Advertencia:** Actívalo solo si los aldeanos están causando problemas de rendimiento.

---

## 4. Misc

### [spigot.yml]

#### merge-radius
Valores sugeridos:
```yaml
item: 3.5
exp: 4.0
```
Determina la distancia a la que se fusionan objetos y orbes de experiencia, reduciendo la cantidad de entidades en el suelo.

#### hopper-transfer
- **Valor recomendado:** `8`  
  Intervalo (en ticks) que las tolvas esperan para transferir objetos.
> **Consejo:** Aumentarlo puede mejorar el rendimiento en servidores con muchas tolvas, pero afectará mecanismos basados en ellas.

#### hopper-check
- **Valor recomendado:** `8`  
  Intervalo (en ticks) entre comprobaciones en tolvas para objetos en su inventario o encima de ellas.

### [paper-world configuration]

#### alt-item-despawn-rate
Valores sugeridos:
```yaml
enabled: true
items:
  cobblestone: 300
  netherrack: 300
  sand: 300
  red_sand: 300
  gravel: 300
  dirt: 300
  grass: 300
  pumpkin: 300
  melon_slice: 300
  kelp: 300
  bamboo: 300
  sugar_cane: 300
  twisting_vines: 300
  weeping_vines: 300
  oak_leaves: 300
  spruce_leaves: 300
  birch_leaves: 300
  jungle_leaves: 300
  acacia_leaves: 300
  dark_oak_leaves: 300
  mangrove_leaves: 300
  cactus: 300
  diorite: 300
  granite: 300
  andesite: 300
  scaffolding: 600
```
Permite ajustar el tiempo (en ticks) de desaparición de ciertos ítems en el suelo.

#### redstone-implementation
- **Valor recomendado:** `ALTERNATE_CURRENT`  
  Reemplaza el sistema de redstone vanilla por uno optimizado basado en [Alternate Current](https://modrinth.com/mod/alternate-current).
> **Advertencia:** Esto puede introducir ligeras inconsistencias en redstone muy técnica, pero mejora el rendimiento general.

#### hopper.disable-move-event
- **Valor recomendado:** `false`  
  Desactiva el evento `InventoryMoveItemEvent` si no es necesario para tus plugins, pero **no** lo actives si dependes de él.

#### hopper.ignore-occluding-blocks
- **Valor recomendado:** `true`  
  Permite que las tolvas ignoren contenedores dentro de bloques sólidos, aunque podría afectar algunas máquinas.

#### tick-rates.mob-spawner
- **Valor recomendado:** `2`  
  Controla la frecuencia de activación de los spawners. Valores muy altos reducirán la aparición de mobs.

#### optimize-explosions
- **Valor recomendado:** `true`  
  Reemplaza el algoritmo de explosión vanilla por uno más rápido, con ligeras imprecisiones en el cálculo del daño.

#### treasure-maps.enabled
- **Valor recomendado:** `false`  
  La generación de mapas de tesoros es muy costosa; habilítalo solo si tu mundo ya está pregenerado y cuentas con un borde establecido.

#### treasure-maps.find-already-discovered
Valores sugeridos:
```yaml
loot-tables: true
villager-trade: true
```
Permite que los mapas muestren estructuras ya descubiertas, evitando cargas de fragmentos no generados.

#### tick-rates.grass-spread
- **Valor recomendado:** `4`  
  Intervalo (en ticks) entre intentos de propagación de hierba o micelio, reduciendo el ritmo sin afectar la apariencia del mundo.

#### tick-rates.container-update
- **Valor recomendado:** `1`  
  Intervalo (en ticks) entre actualizaciones de contenedores. Un valor mayor podría provocar desincronizaciones en la interfaz.

#### non-player-arrow-despawn-rate
- **Valor recomendado:** `20`  
  Tiempo (en ticks) tras el cual las flechas disparadas por mobs desaparecen.

#### creative-arrow-despawn-rate
- **Valor recomendado:** `20`  
  Similar al anterior, pero para flechas en modo creativo.

### [pufferfish.yml]

#### disable-method-profiler
- **Valor recomendado:** `true`  
  Desactiva perfiles adicionales en producción para reducir overhead.

### [purpur.yml]

#### dolphin.disable-treasure-searching
- **Valor recomendado:** `true`  
  Evita que los delfines realicen búsquedas de estructuras tipo mapas de tesoros.

#### teleport-if-outside-border
- **Valor recomendado:** `true`  
  Teletransporta a los jugadores fuera del borde del mundo para evitar daños inesperados.

---

## 5. Helpers

### [paper-world configuration]

#### anti-xray.enabled
- **Valor recomendado:** `true`  
  Habilita una solución anti-xray que oculta minerales a jugadores que usan rayos X, resultando más eficiente que muchos plugins externos.

#### nether-ceiling-void-damage-height
- **Valor recomendado:** `127`  
  Define el nivel (en Y) sobre el cual los jugadores recibirán daño en el Nether, impidiendo el uso del techo.
> **Importante:** Ajusta este valor si modificas la altura del Nether.

---

## 6. Java Startup Flags

A partir de **Minecraft 1.19+** se requiere **Java 17** o superior. Se recomiendan los siguientes proveedores:
- [Adoptium](https://adoptium.net/)
- [Amazon Corretto](https://aws.amazon.com/corretto/)

Optimiza el recolector de basura con las [flags de Aikar](https://docs.papermc.io/paper/aikars-flags). Para obtener la configuración ideal, utiliza el generador [flags.sh](https://flags.sh).

:::info
**Consejo:** Agrega la bandera beta `--add-modules=jdk.incubator.vector` antes de `-jar` en tus flags de inicio para mejorar el rendimiento en operaciones SIMD, especialmente útil en plugins de renderizado de mapas.
:::

---

## 7. Plugins "Demasiado Buenos para Ser Ciertos"

### Plugins que Eliminan los Ítems en el Suelo
Son innecesarios ya que `merge-radius` y `alt-item-despawn-rate` gestionan la eliminación de ítems de forma más precisa y eficiente.

### Plugins Apiladores de Mobs
Apilar mobs generados de forma natural puede causar más lag, ya que el servidor intenta generar más entidades de lo permitido.
> **Advertencia:** Solo se recomienda en casos específicos donde se justifique la generación masiva controlada.

### Plugins que Habilitan/Deshabilitan Otros Plugins
Estos pueden ocasionar errores fatales y problemas de dependencia. El comando `/reload` es un claro ejemplo de lo que se debe evitar.

---

## 8. ¿Qué Causa Lag? - Medición del Rendimiento

### MSPT (Milisegundos por Tick)
Utiliza el comando `/mspt` en Paper para medir el tiempo de procesamiento de ticks.
> **Consejo:** Si los dos primeros valores son menores a 50 ms, tu servidor está funcionando correctamente. Un tercer valor superior a 50 ms indica un tick con retraso, lo cual es normal ocasionalmente.

### Spark
[Spark](https://spark.lucko.me/) es un plugin que permite perfilar el uso de CPU y memoria. Revisa su [wiki](https://spark.lucko.me/docs/) para aprender a identificar picos de lag y optimizar el rendimiento.

### Timings
Timings te permite ver qué tareas consumen más tiempo. Ejecuta `/timings paste` y comparte el enlace para analizarlo.
> **Advertencia:** Timings puede impactar el rendimiento; en muchos casos es preferible utilizar Spark.

:::tip
**Sugerencia:** Combina el uso de Spark y Timings para obtener un análisis completo del rendimiento de tu servidor.
:::

---

# Conclusión

Esta guía ofrece un marco completo para optimizar el rendimiento de servidores de Minecraft Java. Recuerda que cada servidor es único, por lo que la clave está en experimentar, medir y ajustar las configuraciones a tus necesidades específicas. ¡Échale ganas y a darle con todo a la optimización!

---