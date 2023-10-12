---
slug: autenticacion-ssh
title: Configuración de Autenticación con Clave SSH en tu Servidor
authors: [mizael_s]
tags: [SSH, Seguridad, Servidor, Autenticación]
image: https://cdn.teramont.net/u/oC3myP.png
description: "Aprende a configurar la autenticación con clave SSH en tu servidor para mejorar la seguridad de tus conexiones."
---

# Configuración de Autenticación con Clave SSH en tu Servidor

La autenticación con clave SSH es una forma segura de acceder a tu servidor sin necesidad de ingresar una contraseña. En este tutorial, aprenderás cómo configurarla paso a paso.

## Paso 1: Crear tu Par de Claves SSH

1. Abre una terminal en tu máquina local.
2. Genera un nuevo par de claves SSH con el siguiente comando:

```bash
ssh-keygen -t rsa -b 4096 -C "tu_email@ejemplo.com"
```

:::tip
Cambia "tu_email@ejemplo.com" por tu dirección de correo electrónico real.
:::

3. Elige la ubicación para guardar las claves o presiona Enter para la ubicación predeterminada.
4. Ingresa una contraseña segura para tu clave privada.

## Paso 2: Copiar la Clave Pública al Servidor

Utiliza el siguiente comando para copiar tu clave pública al servidor:

```bash
ssh-copy-id tu_usuario@tu_servidor
```

:::tip
Reemplaza "tu_usuario" y "tu_servidor" con tus datos correspondientes.
:::

## Paso 3: Configurar el Servidor para Aceptar Autenticación SSH

1. Inicia sesión en tu servidor usando SSH.
2. Edita el archivo de configuración SSH:

```bash
sudo nano /etc/ssh/sshd_config
```

3. Modifica las siguientes líneas:

   - Cambia `#PasswordAuthentication yes` a `PasswordAuthentication no`.
   - Asegúrate de que `PubkeyAuthentication yes` esté descomentado.

4. Reinicia el servicio SSH:

```bash
sudo service ssh restart
```

:::warning
Mantén tu clave privada en un lugar seguro y no la compartas. Si pierdes tu clave o te olvidas de la contraseña, necesitarás otros medios para acceder al servidor y reconfigurar la autenticación SSH.
:::