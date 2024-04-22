---
slug: autenticacion-ssh
title: Configuración de Autenticación con Clave SSH en tu Servidor
authors: [mizael_s]
tags: [SSH, Seguridad, Servidor, Autenticación]
image: https://cdn.teramont.net/u/oC3myP.png
description: "Aprende a configurar la autenticación con clave SSH en tu servidor para mejorar la seguridad de tus conexiones."
---

# Configuración de Autenticación con Clave SSH en tu Servidor

La autenticación con clave SSH ofrece un método seguro para acceder a tu servidor sin utilizar contraseñas. Este tutorial te guía en la configuración, tanto para usuarios de sistemas Unix-like como para usuarios de Windows.

## Paso 1: Crear tu Par de Claves SSH

1. **Inicio:** Abre una terminal (Linux/macOS) o PowerShell (Windows).
2. **Generación de Claves:** Ejecuta el siguiente comando:

```bash
ssh-keygen -t rsa -b 4096 -C "tu_email@ejemplo.com"
```
- **Nota:** Reemplaza "tu_email@ejemplo.com" por tu dirección de correo electrónico.

3. **Almacenamiento de Claves:** Sigue las instrucciones para guardar tus claves en una ubicación segura.
4. **Contraseña Segura:** Establece una contraseña segura para tu clave privada.

## Paso 2: Copiar la Clave Pública al Servidor

### Para Usuarios de Unix-like (Linux/macOS)

1. **Utiliza `ssh-copy-id`:** Ejecuta el siguiente comando:

```bash
ssh-copy-id tu_usuario@tu_servidor
```
- **Personaliza:** Cambia "tu_usuario" y "tu_servidor" por tu información correspondiente.

### Para Usuarios de Windows

1. **Abre PowerShell** y lee tu clave pública con:

```powershell
Get-Content ~/.ssh/id_rsa.pub
```

2. **Copia la Clave Pública:** Selecciona y copia el contenido mostrado.

3. **Inicia Sesión en tu Servidor:** Usa:

```powershell
ssh tu_usuario@tu_servidor
```

4. **Añade la Clave al Servidor:**

- Crea el directorio `.ssh` y ajusta los permisos:
```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```

- Añade tu clave al archivo `authorized_keys`:
```bash
echo 'tu_clave_publica' >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```
- **Nota:** Reemplaza `'tu_clave_publica'` con el contenido de tu clave pública.

## Paso 3: Configurar el Servidor para Aceptar Autenticación SSH

1. **Inicia Sesión en tu Servidor:** Usa SSH para acceder.
2. **Edita el Archivo de Configuración SSH:**

```bash
sudo nano /etc/ssh/sshd_config
```

3. **Realiza los Ajustes Necesarios:**
   - Desactiva el acceso por contraseña: `PasswordAuthentication no`
   - Asegura que la autenticación por clave pública esté habilitada: `PubkeyAuthentication yes`

4. **Reinicia el Servicio SSH:**

```bash
sudo systemctl restart ssh
```

## Paso 4: Verificación de la Clave en las Llaves Conocidas del Host

- **Verificación:** Es recomendable verificar que tu clave pública se ha añadido correctamente al archivo `~/.ssh/authorized_keys` en tu servidor.

:::warning
Mantén tu clave privada segura y nunca la compartas. Si pierdes tu clave privada o olvidas la contraseña, necesitarás otro método de acceso para reconfigurar la autenticación SSH.
:::