# Instrucciones para Conectar la Aplicación con Supabase

## Paso 1: Obtener las Credenciales de Supabase

1. Ve a tu proyecto en [Supabase Dashboard](https://supabase.com)
2. Navega a **Settings** (⚙️) > **API**
3. Copia:
   - **Project URL** (ejemplo: `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon public key** (una clave larga)

## Paso 2: Crear el archivo .env

Crea un archivo llamado `.env` en la raíz del proyecto con este contenido:

```bash
VITE_SUPABASE_URL=https://tu-proyecto-aqui.supabase.co
VITE_SUPABASE_ANON_KEY=tu-anon-key-aqui
```

**Ejemplo:**
```bash
VITE_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY0NTU2Nzg5MCwiZXhwIjoxOTYxMTQzODkwfQ.AbcDefGhiJklMnoPqRsTuVwXyZ
```

## Paso 3: Reiniciar el Servidor de Desarrollo

```bash
# Detén el servidor si está corriendo (Ctrl+C)
# Luego reinicia
npm run dev
```

## Verificación

Si todo está configurado correctamente, deberías ver los datos de la base de datos en lugar de datos mock.

## Notas Importantes

- El archivo `.env` está en `.gitignore` por seguridad
- No compartas tu `anon key` públicamente
- La aplicación usará los datos reales de Supabase una vez configuradas las variables de entorno
