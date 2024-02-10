---
slug: guia-de-optimizacion
title: Guía de optimización para servidores de Minecraft Java
authors: [mizael_s]
tags: [Minecraft Java, Paper, Purpur, Optimizacion, TPS]
image: https://cdn.teramont.net/u/oC3myP.png
description: "Esta guía de optimización para servidores de Minecraft Java te proporcionará valiosos consejos y conocimientos para optimizar al máximo el rendimiento de tu servidor. Ten en cuenta que aunque estas recomendaciones son poderosas, ninguna optimización es mágica, y siempre deberás adaptarlas a tus necesidades específicas para lograr los mejores resultados."
---

:::info
Esta guía está basada en la [guía de optimización de YouHaveTrouble](https://github.com/YouHaveTrouble/minecraft-optimization/tree/1.20), diseñada para la versión actual de Minecraft. El propósito de esta traducción es facilitar la comprensión a aquellos que no están familiarizados con el inglés.
:::

# Introducción
Nunca habrá una guía que te brinde resultados perfectos. Cada servidor tiene sus propias necesidades y límites en cuanto a cuánto puedes o estás dispuesto a sacrificar. Experimentar con las opciones para ajustarlas a las necesidades de tu servidor es de lo que se trata. Esta guía tiene como único objetivo ayudarte a comprender qué opciones tienen un impacto en el rendimiento y qué cambian exactamente. Si crees que encontraste información incorrecta en esta guía, eres libre de abrir un problema o configurar una solicitud de extracción para corregirla.

Para los usuarios que utilizan vanilla, Fabric o Spigot (o cualquier versión inferior a Paper), vayan a su archivo server.properties y cambien `sync-chunk-writes` a `false`. Esta opción se establece automáticamente en falso en Paper y sus bifurcaciones, pero en otras implementaciones de servidores, debes cambiarla manualmente. Esto permite que el servidor guarde los fragmentos fuera del hilo principal, reduciendo la carga en el bucle principal de ticks.

Guía para la versión 1.20. Algunas cosas aún pueden aplicarse a las versiones 1.15 - 1.19.

Basado en [esta guía](https://www.spigotmc.org/threads/guide-server-optimization%E2%9A%A1.283181/) y otras fuentes (todas ellas están vinculadas a lo largo de la guía cuando son relevantes).

# Preparativos

:::info
La elección del software del servidor puede marcar una gran diferencia en el rendimiento y las posibilidades de API. Actualmente existen múltiples JARs de servidor populares y viables, pero también hay algunos de los que debes mantenerte alejado por diversas razones.
:::

Selecciones recomendadas principales:
* [Paper](https://github.com/PaperMC/Paper) - El software de servidor más popular que busca mejorar el rendimiento mientras corrige inconsistencias en el juego y la mecánica.
* [Pufferfish](https://github.com/pufferfish-gg/Pufferfish) - Un fork de Paper que busca mejorar aún más el rendimiento del servidor.
* [Purpur](https://github.com/PurpurMC/Purpur) - Un fork de Pufferfish centrado en características y la libertad de personalización.

Deberías mantenerte alejado de:
* Cualquier JAR de servidor de pago que afirme ser asincrónico en algo - 99.99% de probabilidad de ser una estafa.
* Bukkit/CraftBukkit/Spigot - Extremadamente desactualizado en términos de rendimiento en comparación con otros software de servidor a los que tienes acceso.
* Cualquier complemento/software que habilite/deshabilite/recargue complementos en tiempo de ejecución. Consulta [esta sección](#plugins-enablingdisabling-other-plugins) para comprender por qué.
* Muchos forks que provienen de Pufferfish o Purpur más adelante pueden encontrarse con inestabilidad y otros problemas. Si buscas obtener más mejoras de rendimiento, optimiza tu servidor o invierte en un fork privado personal.

## Generación previa de mapas
La pregeneración de mapas, gracias a varias optimizaciones en la generación de fragmentos añadidas a lo largo de los años, ahora solo es útil en servidores con CPU terribles, de un solo hilo o limitados. Sin embargo, la pregeneración se usa comúnmente para generar fragmentos para complementos de mapas mundiales como Pl3xMap o Dynmap.

Si aún deseas pregenerar el mundo, puedes utilizar un complemento como [Chunky](https://github.com/pop4959/Chunky) para hacerlo. ¡Asegúrate de establecer un límite de mundo para que tus jugadores no generen nuevos fragmentos! Ten en cuenta que la pregeneración a veces puede llevar horas según el radio que establezcas en el complemento de pregeneración. Ten en cuenta que con Paper y superior, tus TPS no se verán afectados por la carga de fragmentos, pero la velocidad de carga de fragmentos puede disminuir significativamente cuando la CPU de tu servidor está sobrecargada.

Es importante recordar que el mundo normal, el Nether y el End tienen límites de mundo separados que deben configurarse para cada mundo. La dimensión del Nether es 8 veces más pequeña que el mundo normal (si no se modifica con un datapack), por lo que si configuras el tamaño incorrectamente, tus jugadores podrían quedar fuera del límite del mundo.

**Asegúrate de establecer un límite de mundo normal (`/worldborder set [diámetro]`), ya que limita ciertas funcionalidades como el rango de búsqueda para mapas de tesoros que pueden causar picos de lag.**

# Configuraciones

## Networking

### [server.properties]

#### network-compression-threshold

`Valor de inicio recomendado: 256`

Esto te permite establecer el límite para el tamaño de un paquete antes de que el servidor intente comprimirlo. Establecerlo en un valor más alto puede ahorrar algunos recursos de la CPU a costa del ancho de banda, y configurarlo en -1 lo desactiva. Configurarlo en un valor más alto también puede perjudicar a los clientes con conexiones de red más lentas. Si tu servidor está en una red con un proxy o en la misma máquina (con un ping de menos de 2 ms), desactivar esto (-1) será beneficioso, ya que las velocidades de red internas generalmente pueden manejar el tráfico no comprimido adicional.

### [purpur.yml]

#### use-alternate-keepalive

`Valor de inicio recomendado: true`

Puedes habilitar el sistema alternativo de keepalive de Purpur para que los jugadores con mala conexión no sean desconectados tan a menudo. Tiene incompatibilidad conocida con TCPShield.

> Habilitar esto envía un paquete de keepalive una vez por segundo a un jugador, y solo lo desconecta por inactividad si ninguno de ellos recibe respuesta en 30 segundos. Responder a cualquiera de ellos en cualquier orden mantendrá al jugador conectado. Es decir, no desconectará a tus jugadores porque se pierde un paquete en algún lugar de la línea.  
~ https://purpurmc.org/docs/Configuration/#use-alternate-keepalive

---

## Chunks

### [server.properties]

#### simulation-distance

`Valor de inicio recomendado: 4`

La distancia de simulación es la distancia en fragmentos alrededor del jugador que el servidor procesará. Básicamente, es la distancia desde el jugador donde ocurrirán las cosas. Esto incluye la fundición de hornos, el crecimiento de cultivos y plántulas, etc. Esta es una opción que debes establecer de manera deliberada en un valor bajo, alrededor de `3` o `4`, debido a la existencia de `view-distance`. Esto permite cargar más fragmentos sin procesarlos. Esto permite a los jugadores ver más lejos sin el mismo impacto en el rendimiento.

#### view-distance

`Valor de inicio recomendado: 7`

Esta es la distancia en fragmentos que se enviará a los jugadores, similar a la distancia de no-tick-view de Paper.

La distancia total de visualización será igual al valor más grande entre `simulation-distance` y `view-distance`. Por ejemplo, si la distancia de simulación está configurada en 4 y la distancia de visualización es 12, la distancia total enviada al cliente será de 12 fragmentos.

### [spigot.yml]

#### view-distance

`Valor de inicio recomendado: predeterminado`

Este valor sobrescribe el de server.properties si no se establece en `predeterminado`. Deberías mantenerlo en predeterminado para tener tanto la distancia de simulación como la de visualización en un solo lugar para una gestión más sencilla.

### [Configuración de paper-world]

#### delay-chunk-unloads-by

`Valor de inicio recomendado: 10s`

Esta opción te permite configurar cuánto tiempo permanecerán cargados los fragmentos después de que un jugador se vaya. Esto ayuda a no cargar y descargar constantemente los mismos fragmentos cuando un jugador se mueve de un lado a otro. Valores demasiado altos pueden resultar en la carga de demasiados fragmentos a la vez. En áreas que se teleportan y cargan con frecuencia, considera mantener la zona cargada permanentemente. Esto será más ligero para tu servidor que cargar y descargar constantemente fragmentos.

#### max-auto-save-chunks-per-tick

`Valor de inicio recomendado: 8`

Te permite ralentizar el guardado incremental del mundo distribuyendo la tarea a lo largo del tiempo para un mejor rendimiento promedio. Es posible que desees establecer esto en un valor superior a `8` con más de 20-30 jugadores. Si el guardado incremental no puede completarse a tiempo, Bukkit guardará automáticamente los fragmentos restantes de una vez y comenzará el proceso nuevamente.

#### prevent-moving-into-unloaded-chunks

`Valor de inicio recomendado: true`

Cuando está habilitado, evita que los jugadores se muevan hacia fragmentos no cargados y causen cargas síncronas que ralentizan el hilo principal y provocan lag. La probabilidad de que un jugador se tropiece con un fragmento no cargado es mayor cuanto menor sea tu distancia de visualización.

#### entity-per-chunk-save-limit

```
Valores de inicio recomendados:

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

Con esta entrada, puedes establecer límites para la cantidad de entidades de un tipo específico que se pueden guardar. Debes proporcionar un límite para cada proyectil al menos para evitar problemas con la cantidad masiva de proyectiles guardados y que tu servidor se bloquee al cargarlos. Puedes poner cualquier ID de entidad aquí, consulta la wiki de Minecraft para encontrar las IDs de las entidades. Ajusta el límite según tu preferencia. El valor sugerido para todos los proyectiles es alrededor de `10`. También puedes agregar otras entidades por sus nombres de tipo a esa lista. Esta opción de configuración no está diseñada para evitar que los jugadores creen granjas de monstruos grandes.

### [pufferfish.yml]

#### max-loads-per-projectile

`Valor de inicio recomendado: 8`

Especifica la cantidad máxima de fragmentos que un proyectil puede cargar en su vida útil. Reducirlo reducirá las cargas de fragmentos causadas por proyectiles de entidad, pero podría causar problemas con tridents, enderpearls, etc.

---

## Mobs

### [bukkit.yml]

#### spawn-limits

```
Valores de inicio recomendados:

    monsters: 20
    animals: 5
    water-animals: 2
    water-ambient: 2
    water-underground-creature: 3
    axolotls: 3
    ambient: 1
```

La matemática para limitar los mobs es `[cantidad de jugadores] * [límite]`, donde "cantidad de jugadores" es la cantidad actual de jugadores en el servidor. Lógicamente, cuanto menores sean los números, menos mobs verás. `per-player-mob-spawn` aplica un límite adicional a esto, asegurando que los mobs se distribuyan equitativamente entre los jugadores. Reducir esto es un arma de doble filo; sí, tu servidor tiene menos trabajo que hacer, pero en algunos modos de juego, los mobs que aparecen naturalmente son una parte importante de la jugabilidad. Puedes reducirlo hasta 20 o menos si ajustas adecuadamente `mob-spawn-range`. Establecer `mob-spawn-range` más bajo hará que parezca que hay más mobs alrededor de cada jugador. Si estás utilizando Paper, puedes establecer límites de mobs por mundo en [configuración de paper-world].

#### ticks-per

```
Valores de inicio recomendados:

    monster-spawns: 10
    animal-spawns: 400
    water-spawns: 400
    water-ambient-spawns: 400
    water-underground-creature-spawns: 400
    axolotl-spawns: 400
    ambient-spawns: 400
```

Esta opción establece con qué frecuencia (en ticks) el servidor intenta aparecer ciertas entidades vivas. Los mobs de agua/ambiente no necesitan aparecer en cada tick, ya que generalmente no son asesinados tan rápidamente. En cuanto a los monstruos: aumentar ligeramente el tiempo entre apariciones no debería afectar las tasas de aparición, incluso en granjas de mobs. En la mayoría de los casos, todos los valores bajo esta opción deben ser mayores que `1`. Establecer esto en un valor más alto también permite a tu servidor lidiar mejor con áreas donde la generación de mobs está desactivada.

### [spigot.yml]

#### mob-spawn-range

`Valor de inicio recomendado: 3`

Permite reducir el rango (en fragmentos) donde los mobs aparecerán alrededor del jugador. Dependiendo del modo de juego de tu servidor y la cantidad de jugadores, es posible que desees reducir este valor junto con los "spawn-limits" de [bukkit.yml]. Configurarlo en un valor más bajo hará que sientas que hay más mobs a tu alrededor. Debe ser menor o igual que tu distancia de simulación y nunca mayor que tu rango de despawn duro / 16.

#### entity-activation-range

```
Valores de inicio recomendados:

      animals: 16
      monsters: 24
      raiders: 48
      misc: 8
      water: 8
      villagers: 16
      flying-monsters: 48
```

Puedes establecer a qué distancia del jugador una entidad debe estar para que se active (realice acciones). Reducir estos valores mejora el rendimiento, pero puede hacer que los mobs no respondan hasta que el jugador esté realmente cerca de ellos. Reducir esto demasiado puede afectar ciertas granjas de mobs; las granjas de hierro son la víctima más común.

#### entity-tracking-range

```
Valores de inicio recomendados:

      players: 48
      animals: 48
      monsters: 48
      misc: 32
      other: 64
```

Esta es la distancia en bloques desde la cual las entidades serán visibles. Simplemente no se enviarán a los jugadores. Si se configura demasiado bajo, esto puede hacer que los mobs parezcan aparecer de la nada cerca de un jugador. En la mayoría de los casos, esto debe ser mayor que tu "entity-activation-range".

#### tick-inactive-villagers

`Valor de inicio recomendado: false`

Esto te permite controlar si los aldeanos deben tener actividad fuera del rango de activación. Esto hará que los aldeanos continúen como de costumbre e ignoren el rango de activación. Deshabilitar esto mejorará el rendimiento, pero puede ser confuso para los jugadores en ciertas situaciones. Esto puede causar problemas con las granjas de hierro y la reposición de comercio.

#### nerf-spawner-mobs

`Valor de inicio recomendado: true`

Puedes hacer que los mobs generados por un generador de mobs no tengan IA. Los mobs debilitados no harán nada. Puedes hacer que salten mientras están en el agua cambiando `spawner-nerfed-mobs-should-jump` a `true` en la [configuración de paper-world].

### [Configuración de paper-world]

#### despawn-ranges

```
Valores de inicio recomendados:

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

Te permite ajustar los rangos de despawn de entidades (en bloques). Reduce estos valores para eliminar más rápido los mobs que están lejos del jugador. Debes mantener el rango suave alrededor de `30` y ajustar el rango duro un poco más que tu distancia de simulación real, para que los mobs no se despawnen inmediatamente cuando el jugador va más allá del punto de carga de un fragmento (esto funciona bien debido a "delay-chunk-unloads-by" en la [configuración de paper-world]). Cuando un mob está fuera del rango duro, se despawnará instantáneamente. Cuando está entre el rango suave y el rango duro, tendrá una probabilidad aleatoria de despawnear. Tu rango duro debe ser más grande que tu rango suave. Debes ajustar esto según tu distancia de visualización usando `(simulation-distance * 16) + 8`. Esto tiene en cuenta parcialmente los fragmentos que aún no se han descargado después de que el jugador los visitó.

#### per-player-mob-spawns

`Valor de inicio recomendado: true`

Esta opción decide si las apariciones de mobs deben tener en cuenta cuántos mobs ya hay alrededor del jugador objetivo. Puedes evitar muchos problemas con las apariciones de mobs inconsistentes debido a que los jugadores crean granjas que ocupan todo el límite de mobs. Esto permitirá una experiencia de aparición más parecida a la de un jugador individual, lo que te permite establecer límites de aparición más bajos. Habilitar esto tiene un impacto en el rendimiento muy ligero, pero su impacto se ve superado por las mejoras en los "spawn-limits" que permite.

#### max-entity-collisions

`Valor de inicio recomendado: 2`

Sobrescribe la opción con el mismo nombre en [spigot.yml]. Te permite decidir cuántas colisiones puede procesar una entidad a la vez. Un valor de `0` causará la incapacidad de empujar a otras entidades, incluidos los jugadores. Un valor de `2` debería ser suficiente en la mayoría de los casos. Vale la pena señalar que esto anulará la utilidad de la regla de juego "maxEntityCramming" si su valor es mayor que el valor de esta opción de configuración.

#### update-pathfinding-on-block-update

`Valor de inicio recomendado: false`

Desactivar esto resultará en menos cálculos de ruta, lo que aumentará el rendimiento. En algunos casos, esto hará que los mobs parezcan más lentos; simplemente actualizarán su ruta de forma pasiva cada 5 ticks (0.25 segundos).

#### fix-climbing-bypassing-cramming-rule

`Valor de inicio recomendado: true`

Habilitar esto solucionará el problema de que las entidades no se ven afectadas por el hacinamiento mientras escalan. Esto evitará que se apilen cantidades absurdas de mobs en espacios pequeños, incluso si están escalando (arañas).

#### armor-stands.tick

`Valor de inicio recomendado: false`

En la mayoría de los casos, puedes configurarlo como "false". Si estás usando soportes de armaduras o cualquier complemento que modifique su comportamiento y experimentas problemas, vuelve a habilitarlo. Esto evitará que los soportes de arm

aduras sean empujados por el agua o se vean afectados por la gravedad.

#### armor-stands.do-collision-entity-lookups

`Valor de inicio recomendado: false`

Aquí puedes desactivar las colisiones de soportes de armaduras. Esto ayudará si tienes muchos soportes de armaduras y no quieres que colisionen con nada.

#### tick-rates

```
Valores de inicio recomendados:

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

> No se recomienda cambiar estos valores desde sus valores predeterminados mientras [DAB de Pufferfish](#dabenabled) esté habilitado.

Esto decide con qué frecuencia se activan los comportamientos y sensores especificados en ticks. `acquirepoi` para los aldeanos parece ser el comportamiento más pesado, por lo que se ha aumentado considerablemente. Redúcelo en caso de problemas con los aldeanos que encuentran su camino.

### [pufferfish.yml]

#### dab.enabled

`Valor de inicio recomendado: true`

El DAB (activación dinámica del cerebro) reduce la cantidad de veces que se ejecuta una entidad cuanto más lejos esté de los jugadores. El DAB funciona en un gradiente en lugar de un corte abrupto como EAR. En lugar de ejecutar completamente las entidades cercanas y apenas ejecutar las entidades lejanas, el DAB reducirá la cantidad de veces que se ejecuta una entidad en función del resultado de un cálculo influenciado por [dab.activation-dist-mod](#dabactivation-dist-mod).

#### dab.max-tick-freq

`Valor de inicio recomendado: 20`

Define la frecuencia más lenta con la que las entidades más alejadas de los jugadores se ejecutarán. Aumentar este valor puede mejorar el rendimiento de las entidades lejos de la vista, pero puede romper granjas o limitar en gran medida el comportamiento de los mobs. Si habilitar el DAB rompe las granjas de mobs, prueba a disminuir este valor.

#### dab.activation-dist-mod

`Valor de inicio recomendado: 7`

Controla el gradiente en el que se ejecutan las entidades. Reducir esto activará el DAB más cerca de los jugadores, mejorando las ganancias de rendimiento del DAB, pero afectará cómo interactúan las entidades con su entorno y puede romper las granjas de mobs. Si habilitar el DAB rompe las granjas de mobs, prueba a aumentar este valor.

#### enable-async-mob-spawning

`Valor de inicio recomendado: true`

Indica si debe habilitarse la generación asíncrona de mobs. Para que esto funcione, debe estar habilitada la configuración "per-player-mob-spawns" de Paper. Esta opción no genera realmente mobs de forma asíncrona, pero descarga gran parte del esfuerzo computacional involucrado en la generación de nuevos mobs en un hilo diferente. Habilitar esta opción no debería ser perceptible en el juego vanilla.

#### enable-suffocation-optimization

`Valor de inicio recomendado: true`

Esta opción optimiza una comprobación de sofocación (la comprobación para ver si un mob está dentro de un bloque y si debe recibir daño por sofocación), limitando la comprobación al tiempo de espera del daño. Esta optimización debería ser imposible de notar a menos que seas un jugador extremadamente técnico que utiliza una sincronización precisa de ticks para matar a una entidad en el momento justo por sofocación.

#### inactive-goal-selector-throttle

`Valor de inicio recomendado: true`

Limita el selector de objetivos de la IA en ticks de entidades inactivas, lo que hace que las entidades inactivas actualicen su selector de objetivos cada 20 ticks en lugar de cada tick. Puede mejorar el rendimiento en unos pocos puntos porcentuales y tiene implicaciones menores en la jugabilidad.

### [purpur.yml]

#### zombie.aggressive-towards-villager-when-lagging

`Valor de inicio recomendado: false`

Si se habilita esto, los zombies dejarán de atacar a los aldeanos si el servidor está por debajo del umbral de TPS establecido con `lagging-threshold` en [purpur.yml].

#### entities-can-use-portals

`Valor de inicio recomendado: false`

Esta opción puede desactivar el uso de portales para todas las entidades excepto el jugador. Esto evita que las entidades carguen fragmentos al cambiar de mundos, lo cual se maneja en el hilo principal. Esto tiene el efecto secundario de que las entidades no pueden atravesar portales.

#### villager.lobotomize.enabled

`Valor de inicio recomendado: true`

> ¡Esto solo debe habilitarse si los aldeanos están causando lag! De lo contrario, las comprobaciones de navegación pueden disminuir el rendimiento.

Los aldeanos lobotomizados se despojan de su IA y solo reponen sus ofertas de vez en cuando. Habilitar esto lobotomizará a los aldeanos que no pueden encontrar su camino a su destino. Liberarlos debería deslobotomizarlos.

## Misc

### [spigot.yml]

#### merge-radius

```
Valores iniciales recomendados:

      item: 3.5
      exp: 4.0
```

Esto determina la distancia entre los objetos y orbes de experiencia que se fusionarán, reduciendo la cantidad de objetos que aparecen en el suelo. Establecer esto muy alto dará la ilusión de que los objetos u orbes de experiencia desaparecen al fusionarse. Establecer esto demasiado alto romperá algunas granjas y permitirá que los objetos atraviesen bloques. No se realizan comprobaciones para evitar que los objetos se fusionen a través de paredes. La experiencia solo se fusiona al crearse.

#### hopper-transfer

`Valor de inicio recomendado: 8`

El tiempo en tics que los tolvas esperarán para mover un objeto. Aumentar esto ayudará a mejorar el rendimiento si hay muchas tolvas en tu servidor, pero romperá relojes basados en tolvas y posiblemente sistemas de clasificación de objetos si se establece demasiado alto.

#### hopper-check

`Valor de inicio recomendado: 8`

El tiempo en tics entre las comprobaciones de tolvas para un objeto encima de ellas o en el inventario encima de ellas. Aumentar esto mejorará el rendimiento si hay muchas tolvas en tu servidor, pero romperá relojes basados en tolvas y sistemas de clasificación de objetos que dependen de flujos de agua.

### [paper-world configuration]

#### alt-item-despawn-rate

```
Valores iniciales recomendados:

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

Esta lista te permite establecer un tiempo alternativo (en tics) para que ciertos tipos de objetos caídos se despejen más rápido o más lento que el valor predeterminado. Esta opción se puede utilizar en lugar de complementos que eliminan objetos junto con `merge-radius` para mejorar el rendimiento.

#### redstone-implementation

`Valor de inicio recomendado: ALTERNATE_CURRENT`

Reemplaza el sistema de redstone por versiones más rápidas y alternativas que reducen las actualizaciones de bloques redundantes, disminuyendo la cantidad de lógica que tu servidor debe calcular. El uso de una implementación no vanilla puede introducir inconsistencias menores con redstone muy técnica, pero las ganancias de rendimiento superan con creces los posibles problemas de nicho. Una opción de implementación no vanilla puede solucionar también otras inconsistencias de redstone causadas por CraftBukkit.

La implementación `ALTERNATE_CURRENT` se basa en el mod [Alternate Current](https://modrinth.com/mod/alternate-current). Puedes encontrar más información sobre este algoritmo en su página de recursos.

#### hopper.disable-move-event

`Valor de inicio recomendado: false`

El evento `InventoryMoveItemEvent` no se activa a menos que haya un complemento escuchando activamente ese evento. Esto significa que solo debes establecer esto en verdadero si tienes dicho/os complemento/s y no te importa que no puedan actuar en este evento. **No lo establezcas en verdadero si deseas utilizar complementos que escuchan este evento, como complementos de protección, por ejemplo.**

#### hopper.ignore-occluding-blocks

`Valor de inicio recomendado: true`

Determina si las tolvas ignorarán los contenedores dentro de bloques completos, por ejemplo, una tolva de vagoneta dentro de un bloque de arena o grava. Mantener esto habilitado romperá algunas máquinas dependientes de ese comportamiento.

#### tick-rates.mob-spawner

`Valor de inicio recomendado: 2`

Esta opción te permite configurar la frecuencia con la que deben activarse las spawners. Valores más altos significan menos lag si tienes muchas spawners, aunque si se establece demasiado alto

 (en relación con el retraso de tus spawners) las tasas de aparición de mobs disminuirán.

#### optimize-explosions

`Valor de inicio recomendado: true`

Establecer esto en `true` reemplaza el algoritmo de explosión vanilla por uno más rápido, a costa de una ligera inexactitud al calcular el daño por explosión. Esto generalmente no es perceptible.

#### treasure-maps.enabled

`Valor de inicio recomendado: false`

La generación de mapas de tesoros es extremadamente costosa y puede hacer que el servidor se cuelgue si la estructura que está tratando de localizar se encuentra en un fragmento no generado. Solo es seguro habilitar esto si generaste previamente tu mundo y estableciste un borde de mundo vanilla.

#### treasure-maps.find-already-discovered

```
Valores iniciales recomendados:
      loot-tables: true
      villager-trade: true
```

El valor predeterminado de esta opción hace que los mapas recién generados busquen estructuras no exploradas, que generalmente se encuentran en fragmentos que aún no se han generado. Establecer esto en verdadero hace que los mapas puedan llevar a las estructuras que se descubrieron anteriormente. Si no cambias esto a `true`, es posible que el servidor se cuelgue o se bloquee al generar nuevos mapas de tesoros. `villager-trade` es para mapas intercambiados por aldeanos y loot-tables se refiere a cualquier cosa que genere botín dinámicamente, como cofres de tesoros, cofres de mazmorras, etc.

#### tick-rates.grass-spread

`Valor de inicio recomendado: 4`

Tiempo en tics entre los intentos del servidor de propagar la hierba o la micelio. Esto hará que grandes áreas de tierra tarden un poco más en convertirse en hierba o micelio. Establecer esto en alrededor de `4` debería funcionar bien si deseas reducirlo sin que la tasa de propagación disminuya de manera notable.

#### tick-rates.container-update

`Valor de inicio recomendado: 1`

Tiempo en tics entre las actualizaciones de contenedores. Aumentar esto podría ayudar si las actualizaciones de contenedores te causan problemas (rara vez sucede), pero facilita que los jugadores experimenten desincronización al interactuar con inventarios (objetos fantasma).

#### non-player-arrow-despawn-rate

`Valor de inicio recomendado: 20`

Tiempo en tics después del cual las flechas disparadas por mobs deben desaparecer después de golpear algo. Los jugadores de todos modos no pueden recoger estas flechas, así que puedes establecer esto en algo como `20` (1 segundo).

#### creative-arrow-despawn-rate

`Valor de inicio recomendado: 20`

Tiempo en tics después del cual las flechas disparadas por jugadores en modo creativo deben desaparecer después de golpear algo. Los jugadores de todos modos no pueden recoger estas flechas, así que puedes establecer esto en algo como `20` (1 segundo).

### [pufferfish.yml]

#### disable-method-profiler

`Valor de inicio recomendado: true`

Esta opción desactivará algunos perfiles adicionales realizados por el juego. Este perfilado no es necesario para ejecutar en producción y puede causar retrasos adicionales.

### [purpur.yml]

#### dolphin.disable-treasure-searching

`Valor de inicio recomendado: true`

Evita que los delfines realicen búsquedas de estructuras similares a los mapas de tesoros.

#### teleport-if-outside-border

`Valor de inicio recomendado: true`

Te permite teletransportar al jugador al punto de inicio del mundo si están fuera del borde del mundo. Esto es útil ya que el borde del mundo vanilla se puede sobrepasar y el daño que causa al jugador se puede mitigar.

## Helpers

### [paper-world configuration]

#### anti-xray.enabled

`Valor de inicio recomendado: true`

Habilita esto para ocultar los minerales de los jugadores que usan rayos X para ver a través de las rocas. Para obtener una configuración detallada de esta función, consulta [Configurando Anti-Xray](https://docs.papermc.io/paper/anti-xray). Habilitar esto en realidad disminuirá el rendimiento, sin embargo, es mucho más eficiente que cualquier complemento anti-xray. En la mayoría de los casos, el impacto en el rendimiento será insignificante.

#### nether-ceiling-void-damage-height

`Valor de inicio recomendado: 127`

Si esta opción es mayor que `0`, los jugadores por encima del nivel Y establecido recibirán daño como si estuvieran en el vacío. Esto evitará que los jugadores utilicen el techo del Nether. El Nether vanilla tiene 128 bloques de altura, por lo que probablemente debas establecerlo en `127`. Si modificas la altura del Nether de alguna manera, debes configurarlo como `[tu_altura_del_nether] - 1`.

## Java Startup Flags

[Vanilla Minecraft y el software de servidor de Minecraft en la versión 1.19 requieren Java 17 o superior](https://docs.papermc.io/java-install-update). Oracle ha cambiado su licencia y ya no hay una razón convincente para obtener Java de ellos. Los proveedores recomendados son [Adoptium](https://adoptium.net/) y [Amazon Corretto](https://aws.amazon.com/corretto/). Si bien las implementaciones JVM alternativas como OpenJ9 o GraalVM pueden funcionar, no son compatibles con Paper y se sabe que causan problemas, por lo que actualmente no se recomiendan.

Tu recolector de basura se puede configurar para reducir los picos de lag causados por tareas grandes del recolector de basura. Puedes encontrar las banderas de inicio optimizadas para servidores de Minecraft [aquí](https://docs.papermc.io/paper/aikars-flags) [`SOG`]. Ten en cuenta que esta recomendación no funcionará en implementaciones alternativas de JVM.

Se recomienda usar el generador de banderas de inicio [flags.sh](https://flags.sh) para obtener las banderas de inicio correctas para tu servidor.

Además, agregar la bandera beta `--add-modules=jdk.incubator.vector` antes de `-jar` en tus banderas de inicio puede mejorar el rendimiento. Esta bandera permite que Pufferfish use instrucciones SIMD en tu CPU, lo que hace que algunos cálculos sean más rápidos. Actualmente, solo se utiliza para acelerar el renderizado en plugins de mapas en el juego (como imageonmaps) hasta 8 veces.

## Plugins "Demasiado Buenos para Ser Ciertos"

### Plugins que Eliminan los Ítems en el Suelo

Absolutamente innecesarios ya que los ítems en el suelo pueden manejarse con `merge-radius` y `alt-item-despawn-rate`, y francamente, son menos configurables que las configuraciones básicas del servidor. Suelen utilizar más recursos escaneando y eliminando ítems que no eliminar los ítems en absoluto.

### Plugins Apiladores de Mobs

Es difícil justificar su uso ya que apilar entidades generadas naturalmente causa más lag que no apilarlas en absoluto debido a que el servidor intenta constantemente generar más mobs. El único caso de uso "aceptable" es para generadores en servidores con una gran cantidad de generadores.

### Plugins que Habilitan/Deshabilitan Otros Plugins

Cualquier cosa que habilite o deshabilite plugins en tiempo de ejecución es extremadamente peligrosa. Cargar un plugin de ese tipo puede causar errores fatales con datos de seguimiento y deshabilitar un plugin puede llevar a errores debido a la eliminación de dependencias. El comando `/reload` sufre de los mismos problemas.

## ¿Qué Causa Lag? - Medición del Rendimiento

### MSPT (Milisegundos por Ticks)

Paper ofrece un comando `/mspt` que te dirá cuánto tiempo tardó el servidor en calcular los ticks recientes. Si los primeros dos valores son inferiores a 50, ¡tu servidor no tiene lag! Si el tercer valor está por encima de 50, significa que hubo al menos un tick que llevó más tiempo. Esto es completamente normal y ocurre de vez en cuando, así que no te preocupes.

### Spark

[Spark](https://spark.lucko.me/) es un plugin que te permite perfilar el uso de CPU y memoria del servidor. Puedes leer cómo usarlo [en su wiki](https://spark.lucko.me/docs/). También hay una guía sobre cómo encontrar la causa de los picos de lag [aquí](https://spark.lucko.me/docs/guides/Finding-lag-spikes).

### Timings

Timings es una herramienta que te permite ver qué tareas están tomando más tiempo. Ejecuta el comando `/timings paste` para obtener Timings y comparte el enlace con otros para obtener ayuda. Ten en cuenta que Timings tiene un impacto en el rendimiento, considera usar Spark en su lugar. Hay un [tutorial en video de Aikar](https://www.youtube.com/watch?v=T4J0A9l7bfQ) detallado sobre cómo leerlos.

