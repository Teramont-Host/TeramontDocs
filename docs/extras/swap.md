---
title: SWAP
sidebar_label: SWAP
---

## Introducción

Bienvenido a nuestra guía sobre SWAP. Aquí te explicaremos qué es, cómo funciona y cómo puedes desactivarlo si así lo deseas.

:::note
Antes de continuar, queremos enfatizar que la mayoría de nuestros usuarios NO NECESITAN modificar esta configuración. Si decides experimentar con ella, te recomendamos leer esta guía completa.
:::

**Queremos ser claros: si estás satisfecho con el rendimiento actual de tu servidor, NO HAY NECESIDAD de desactivar SWAP. Solo estarías agregando trabajo adicional.**

---

### ¿Qué es SWAP?

SWAP es una memoria virtual almacenada en un disco, en lugar de en la memoria física (RAM). Actúa como memoria, pero no es tan rápida como la RAM.

### ¿Cómo utiliza Teramont el SWAP?

Por defecto, todos nuestros servidores tienen permitido usar SWAP. Esta configuración cubre el overhead de Aikar con SWAP, lo que resulta en una mínima degradación del rendimiento. Sin embargo, hay escenarios específicos en los que es posible que desees desactivar el SWAP, y por eso te ofrecemos la opción.

### ¿Por qué Teramont ofrece la opción de desactivar SWAP?

La principal razón son los modpacks que utilizan Forge. Estos modpacks consumen mucha memoria durante el inicio, y con las Flags de Aikar, los usuarios experimentaban un rendimiento deficiente debido al SWAP. Sin embargo, también ofrecemos esta opción para aquellos que buscan un pequeño impulso en el rendimiento, como poder alojar a más jugadores o mejorar el MSPT.

Por defecto, desplegamos Forge sin las Flags de Aikar y solo con las flags predeterminadas de Vanilla. Esto evita el uso excesivo de SWAP y mantiene un rendimiento óptimo. Sin embargo, la recolección de basura (Garbage Collection) no es tan eficiente, lo que puede llevar a que la RAM se llene más rápidamente y sea necesario reiniciar con más frecuencia.

En resumen, para Forge, lo ideal es usar las Flags de Aikar con el SWAP desactivado, a menos que el desarrollador del modpack indique lo contrario.

---

### ¿Qué es el porcentaje de RAM en inicio?

El porcentaje de RAM en inicio se refiere a la cantidad de memoria que se asigna al proceso JVM cuando tu servidor inicia. Es esencialmente una reserva de memoria que garantiza que el servidor tenga suficiente RAM disponible para operar de manera eficiente.

Para la mayoría de los casos, recomendamos un porcentaje del 70%. Sin embargo, cada servidor es diferente y es posible que necesites ajustar este valor. Por ejemplo, si tienes un servidor de 10GB (10240MB) y estableces el porcentaje en 80%, tu servidor tendrá disponibles 8GB (8192MB) para el proceso JVM. El 20% restante se utiliza como overhead para otros procesos y operaciones del sistema, como la gestión de conexiones, operaciones de E/S y otros servicios del sistema.

En algunos casos, es recomendable establecer este valor al 100%, especialmente si estás seguro de que el overhead del sistema es mínimo. Sin embargo, en la mayoría de los casos, dejar un margen de overhead es beneficioso para el rendimiento general del servidor. Esto garantiza que el servidor tenga suficiente memoria para manejar picos inesperados de carga o procesos adicionales sin afectar el rendimiento.

![Configurar el porcentaje de RAM de inicio en Teramont](https://cdn.teramont.net/u/f9KmXZ.png)

---

### Conclusión

En Teramont, buscamos ofrecer a nuestros clientes el máximo control sobre sus servidores. La opción de desactivar el SWAP es solo una de las muchas características que ofrecemos para garantizar que tengas la mejor experiencia posible.

:::info
Si tienes más preguntas o inquietudes sobre SWAP o cualquier otra característica, no dudes en ponerte en contacto con nuestro equipo de soporte.
:::
