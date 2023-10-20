---
title: Nucleos e Hilos
sidebar_label: SWAP
---

## Explorando la Diferencia: Núcleos Físicos, Núcleos Lógicos y Hilos

### Núcleos Físicos (Physical Cores)

:::tip
Los núcleos físicos son las unidades de procesamiento independientes dentro de un procesador. Cada núcleo es capaz de ejecutar instrucciones y operaciones de manera independiente, y más núcleos físicos generalmente resultan en un mayor rendimiento, especialmente en tareas que pueden ser paralelizadas.
:::

### Núcleos Lógicos (Logical Cores)

:::info
Los núcleos lógicos son representaciones virtuales de núcleos físicos creadas a través de tecnologías de multihilo como Hyper-Threading (Intel) o Simultaneous Multi-Threading (SMT) (AMD). Un núcleo lógico permite que un núcleo físico maneje múltiples hilos de ejecución al mismo tiempo, optimizando la eficiencia y el rendimiento del procesador. El sistema operativo ve y puede direccionar estos núcleos lógicos como si fueran núcleos físicos, aunque no lo sean.
:::

### Hilos (Threads)

:::caution
Un hilo es una secuencia de instrucciones que puede ser procesada por un núcleo (físico o lógico). Los hilos permiten a los núcleos ejecutar múltiples tareas de manera concurrente, alternando entre diferentes hilos rápidamente. En procesadores con tecnologías de multihilo, cada núcleo físico puede ejecutar dos o más hilos simultáneamente, lo que efectivamente duplica la cantidad de núcleos lógicos disponibles.
:::

## Ofertas de Teramont en Núcleos Lógicos y Acceso a Cores

### Performance

:::warning
Teramont ofrece **Núcleos Lógicos Dedicados** en su plan Performance. Esto significa que los núcleos lógicos asignados no se comparten con otros usuarios, proporcionando una mayor estabilidad y rendimiento para tus aplicaciones y procesos. Al no compartir estos núcleos lógicos con otros, se garantiza una mejor eficiencia y un rendimiento predecible.
:::

### Advanced

:::info
En el plan Advanced, Teramont ofrece **Núcleos Lógicos Compartidos**. Aunque este plan aún proporciona un buen rendimiento, los núcleos lógicos se comparten entre diferentes usuarios, lo que podría llevar a una variabilidad en el rendimiento si otros usuarios están ejecutando tareas intensivas en el mismo momento.
:::

### Extreme

:::danger
El plan Extreme proporciona **acceso compartido a todos los cores del procesador**. Esto significa que todos los usuarios tienen acceso a los cores del procesador, lo que permite una alta concurrencia y la capacidad de manejar múltiples tareas simultáneamente. Sin embargo, dado que todos los cores se comparten entre todos los usuarios, podría haber una variabilidad en el rendimiento, especialmente durante los períodos de alta demanda.
:::
