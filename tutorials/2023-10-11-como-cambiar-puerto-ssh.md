---
slug: como-cambiar-puerto-ssh
title: Cambio del Puerto SSH Predeterminado
authors: [mizael_s]
tags: [SSH, Ubuntu, Debian, CentOS, Seguridad]
image: https://cdn.teramont.net/u/oC3myP.png
description: "Aprende a cambiar el puerto SSH predeterminado en sistemas Ubuntu, Debian y CentOS para mejorar la seguridad de tu servidor."
---

# Cambio del Puerto SSH Predeterminado en Ubuntu/Debian/CentOS

Cambiar el puerto SSH predeterminado es una medida de seguridad común para reducir los intentos de acceso no autorizado a tu servidor. A continuación, te mostramos cómo hacerlo paso a paso.

## 1. Abre una Terminal

Primero, necesitarás abrir una terminal en tu servidor.

## 2. Edita el Archivo de Configuración SSH

Para editar el archivo de configuración SSH, utiliza el siguiente comando:

```bash
sudo nano /etc/ssh/sshd_config
```

## 3. Cambia el Puerto

Dentro del archivo, busca la línea que dice:

```bash
#Port 22
```

Descomenta la línea (elimina el `#` al inicio) y cambia el número `22` al puerto que desees usar para SSH.

Por ejemplo, si deseas cambiarlo al puerto `2222`, la línea debería verse así:

```bash
Port 2222
```

## 4. Guarda y Cierra el Archivo

Después de hacer los cambios, guarda y cierra el archivo. Si estás usando `nano`, puedes hacerlo presionando `CTRL + X`, luego `Y` y finalmente `Enter`.

## 5. Reinicia el Servicio SSH

Para que los cambios surtan efecto, necesitas reiniciar el servicio SSH. Ejecuta el siguiente comando:

```bash
sudo systemctl restart ssh
```

¡Listo! Ahora tu servidor SSH estará escuchando en el nuevo puerto que especificaste.

**Nota:** Asegúrate de recordar el nuevo puerto, ya que necesitarás especificarlo la próxima vez que te conectes a tu servidor a través de SSH.