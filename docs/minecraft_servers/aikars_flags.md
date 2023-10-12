---
title: Aikar's Flags
sidebar_label: Aikar's Flags
---

## ¿Qué son las Aikar's Flags?

Las Aikar's Flags son una serie de argumentos y configuraciones para la Máquina Virtual de Java (JVM) diseñadas específicamente para optimizar el rendimiento de los servidores de Minecraft. Estas flags ajustan cómo la JVM maneja la memoria y la recolección de basura, lo que puede tener un impacto significativo en el rendimiento del servidor.

:::info
Las Aikar's Flags son ampliamente reconocidas en la comunidad de Minecraft por su capacidad para mejorar el rendimiento del servidor, especialmente en servidores con un alto número de jugadores o con muchos mods y plugins.
:::

## ¿Para qué sirven?

Estas flags están diseñadas para:

1. **Optimizar la recolección de basura (Garbage Collection)**: La JVM utiliza un proceso llamado recolección de basura para liberar memoria que ya no se necesita. Las Aikar's Flags ajustan este proceso para que sea más eficiente y cause menos pausas en el servidor.
2. **Mejorar el uso de la memoria**: Las flags ajustan cómo la JVM asigna y utiliza la memoria, lo que puede reducir el lag y mejorar el rendimiento general.
3. **Reducir las pausas del servidor**: Al optimizar la recolección de basura y el uso de la memoria, las flags pueden reducir las pausas y el lag en el servidor, lo que resulta en una experiencia de juego más fluida para los jugadores.

:::tip
Si estás experimentando problemas de rendimiento en tu servidor de Minecraft, considera revisar y ajustar las Aikar's Flags. Estas configuraciones pueden marcar la diferencia entre un servidor lento y uno que funcione sin problemas.
:::

## ¿Por qué son útiles?

Las Aikar's Flags son útiles porque abordan algunos de los problemas de rendimiento más comunes que enfrentan los servidores de Minecraft. Minecraft, especialmente con mods y plugins, puede ser muy intensivo en cuanto a recursos y puede generar una gran cantidad de "basura" en la memoria. Al ajustar cómo la JVM maneja estos problemas, las flags pueden mejorar significativamente el rendimiento del servidor.

## ¿Cómo utiliza Teramont Host las Aikar's Flags?

En Teramont Host, utilizamos las Aikar's Flags por defecto en todos nuestros servidores de Minecraft. Las flags que usamos son:

```
-XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Dterminal.jline=false -Dterminal.ansi=true -Daikars.new.flags=true
```

Estas flags se aplican automáticamente a todos los servidores para garantizar el mejor rendimiento posible. Hemos elegido estas flags específicas porque, después de extensas pruebas y ajustes, hemos encontrado que ofrecen la mejor combinación de rendimiento y estabilidad para la mayoría de los servidores de Minecraft.

:::note
Para aquellos usuarios avanzados que deseen personalizar las Aikar's Flags de su servidor, ofrecemos la opción de editarlas directamente desde nuestro Panel de Control (TCP). A continuación, te mostramos dónde puedes encontrar esta opción:
![Panel de Control - Aikar's Flags](https://cdn.teramont.net/u/3jwOoc.png)
:::

## Uso de memoria y Aikar's Flags

Al usar las Aikar's Flags, el servidor inicia con toda la memoria RAM preasignada, tomando el valor del porcentaje de RAM configurado que mencionamos en nuestra [guía de SWAP](https://docs.teramont.net/docs/extras/swap#qu%C3%A9-es-el-porcentaje-de-ram-en-inicio). Esto significa que si, por ejemplo, tienes un servidor de 10GB y configuras el porcentaje de RAM al 80%, el servidor usará 8GB desde el inicio. El uso de estas flags garantiza que la memoria esté disponible y optimizada desde el momento en que el servidor se inicia.

Además, en Teramont Host, cubrimos con swap ese techo al usar las Aikar's Flags para garantizar que el servidor tenga suficiente memoria disponible en todo momento. Puedes leer más sobre cómo manejamos el swap en el [artículo mencionado](https://docs.teramont.net/docs/extras/swap).

## Conclusión

Las Aikar's Flags son una herramienta esencial para cualquier administrador de servidores de Minecraft que busque optimizar el rendimiento. En Teramont Host, nos enorgullece ofrecer estas optimizaciones por defecto a todos nuestros clientes, garantizando que obtengan la mejor experiencia posible con sus servidores.

:::caution
Recuerda siempre hacer una copia de seguridad de tu servidor antes de realizar cualquier cambio en las configuraciones. Si no estás seguro de cómo ajustar las Aikar's Flags, te recomendamos que te pongas en contacto con nuestro equipo de soporte.
:::