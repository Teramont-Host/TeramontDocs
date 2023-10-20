---
title: Comparativa de Planes 
sidebar_label: Comparativa de Planes 
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

## Comparación de Planes Según el Tipo de Procesador y Recursos

En Teramont Host, cada plan se configura con un tipo diferente de procesador y recursos para satisfacer las necesidades específicas de rendimiento y eficiencia. A continuación, se presenta una comparación de los planes Advanced, Extreme y Performance basada en los procesadores y recursos que utilizan:

### Advanced: Intel® Core™ i9 9900K

:::info
- **Procesador:** Intel® Core™ i9 9900K (8 núcleos físicos, 16 núcleos lógicos)
- **RAM:** DDR4 (2133 Mhz)
- **Almacenamiento:** SSD NVMe 3.6hz
- **CPU Benchmark:** 18,493

El plan Advanced proporciona un balance entre rendimiento y eficiencia, ideal para aplicaciones que requieren una buena cantidad de recursos pero no el máximo rendimiento posible. En este plan, los núcleos lógicos son compartidos entre los usuarios, lo que puede llevar a una variabilidad en el rendimiento dependiendo de la demanda del sistema en un momento dado.
:::

### Extreme: AMD Ryzen™ 9 5900X

:::danger
- **Procesador:** AMD Ryzen™ 9 5900X (12 núcleos físicos, 24 núcleos lógicos)
- **RAM:** DDR4 (2666 Mhz)
- **Almacenamiento:** SSD NVMe 3.7hz
- **CPU Benchmark:** 39,506

El plan Extreme está diseñado para tareas más exigentes y aplicaciones intensivas en recursos, ofreciendo un rendimiento superior gracias al procesador AMD Ryzen™ 9 5900X. Sin embargo, todos los cores en este plan son compartidos entre todos los usuarios, lo que podría llevar a una variabilidad en el rendimiento durante los períodos de alta demanda.
:::

### Performance: AMD Ryzen™ 9 5950X

:::warning
- **Procesador:** AMD Ryzen™ 9 5950X (16 núcleos físicos, 32 núcleos lógicos)
- **RAM:** DDR4 (2666 Mhz)
- **Almacenamiento:** SSD NVMe 3.4hz
- **CPU Benchmark:** 45,948

El plan Performance está diseñado para ofrecer el máximo rendimiento, con núcleos lógicos dedicados que garantizan una mayor estabilidad y un rendimiento predecible. Es especialmente beneficioso para aplicaciones críticas y tareas que requieren una gran cantidad de recursos computacionales. Además, los usuarios tienen la flexibilidad de dividir su servidor en sub-servidores, permitiendo una gestión eficiente y personalizada de los recursos.
:::


## Cómo Teramont Host Administra los Núcleos y el Acceso a Cores

### Performance

:::warning
Teramont ofrece **Núcleos Lógicos Dedicados** en su plan Performance. Esto significa que los núcleos lógicos asignados no se comparten con otros usuarios, proporcionando una mayor estabilidad y rendimiento para tus aplicaciones y procesos. Al no compartir estos núcleos lógicos con otros, se garantiza una mejor eficiencia y un rendimiento predecible.

Además, en este plan, los usuarios tienen la flexibilidad de dividir su servidor en sub-servidores. Por ejemplo, si tienes 8GB de RAM, puedes dividirlo en servidores de 2GB cada uno. Esta división se realiza bajo los recursos dedicados del usuario, por lo que no afecta a otros usuarios en el sistema. Esta característica permite una gestión eficiente y personalizada de los recursos, asegurando que cada sub-servidor funcione de manera óptima sin interferir con los recursos de otros usuarios.
:::

### Advanced

:::info
En el plan Advanced, Teramont ofrece **Núcleos Lógicos Compartidos**. Aunque este plan aún proporciona un buen rendimiento, los núcleos lógicos se comparten entre diferentes usuarios, lo que podría llevar a una variabilidad en el rendimiento si otros usuarios están ejecutando tareas intensivas en el mismo momento. En este plan, la opción de dividir servidores no se ofrece ya que los recursos son compartidos. Dividir servidores en un entorno de recursos compartidos podría ocasionar problemas de estabilidad ya que los recursos de un usuario podrían ser afectados por las actividades de otros usuarios en el sistema.
:::

### Extreme

:::danger
El plan Extreme proporciona **acceso compartido a todos los cores del procesador**. Esto significa que todos los usuarios tienen acceso a los cores del procesador, lo que permite una alta concurrencia y la capacidad de manejar múltiples tareas simultáneamente. Sin embargo, dado que todos los cores se comparten entre todos los usuarios, podría haber una variabilidad en el rendimiento, especialmente durante los períodos de alta demanda. Similar al plan Advanced, la división de servidores no se ofrece en este plan debido a la naturaleza compartida de los recursos, lo cual podría comprometer la estabilidad del sistema.
:::
