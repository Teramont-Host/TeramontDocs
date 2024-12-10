---
slug: instalacion-nginx
title: Instalación y Configuración de Nginx en Ubuntu/Debian y CentOS
authors: [mizael_s]
tags: [Nginx, Ubuntu, Debian, CentOS, Servidor Web]
image: https://cdn.teramont.net/u/oC3myP.png
description: "Guía paso a paso para instalar y configurar Nginx en sistemas Ubuntu, Debian y CentOS. Aprende a configurar múltiples dominios y rutas en tu servidor."
---

# Instalación y Configuración de Nginx en Ubuntu/Debian

## 1. Abre una Terminal

Primero, necesitarás abrir una terminal en tu servidor.

## 2. Actualiza la Lista de Paquetes

```bash
sudo apt-get update
```

## 3. Instala Nginx

```bash
sudo apt-get install nginx
```

Tras la instalación, Nginx debería iniciar automáticamente. Puedes comprobarlo ingresando a la dirección IP de tu servidor en un navegador. Deberías ver la página predeterminada de Nginx.

## 4. Configuración de Múltiples Dominios

Para cada dominio, crea un bloque de servidor (server block) en la configuración de Nginx:

```bash
sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/mydomain.com
sudo nano /etc/nginx/sites-available/mydomain.com
```

Ajusta la configuración según tus necesidades. Aquí tienes un ejemplo:

```nginx
server {
    listen 80;
    root /var/www/mydomain.com;
    index index.html;
    server_name mydomain.com www.mydomain.com;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Guarda y cierra el archivo. Luego, habilita el bloque de servidor:

```bash
sudo ln -s /etc/nginx/sites-available/mydomain.com /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

Repite este proceso para cada dominio adicional.

# Instalación y Configuración de Nginx en CentOS

## 1. Abre una Terminal

## 2. Instala el Repositorio EPEL

```bash
sudo yum install epel-release
```

## 3. Actualiza la Lista de Paquetes

```bash
sudo yum update
```

## 4. Instala Nginx

```bash
sudo yum install nginx
```

Inicia Nginx y configura el inicio automático:

```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

## 5. Configuración de Múltiples Dominios

Para cada dominio, crea un archivo de configuración en `/etc/nginx/conf.d/`:

```bash
sudo nano /etc/nginx/conf.d/mydomain.com.conf
```

Añade un bloque de servidor similar al siguiente:

```nginx
server {
    listen 80;
    server_name mydomain.com www.mydomain.com;
    location / {
        root /var/www/mydomain.com;
        index index.html;
        try_files $uri $uri/ =404;
    }
}
```

Guarda y cierra el archivo. Luego, reinicia Nginx:

```bash
sudo systemctl restart nginx
```

Repite este proceso para cada dominio adicional.