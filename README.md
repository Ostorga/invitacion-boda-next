# Invitación de boda

Invitación creada con Next.js, React, TypeScript y Tailwind CSS.

## Desarrollo local

```bash
npm install
npm run dev
```

## Estructura

- `app/`: página principal, metadata, estilos y Route Handlers.
- `components/`: secciones reutilizables de la invitación.
- `public/`: imágenes, audio y demás archivos estáticos.

## Confirmaciones de asistencia

El formulario envía las confirmaciones mediante `/api/confirmacion` y Resend.
Copia `.env.example` como `.env.local` y configura:

- `RESEND_API_KEY`: API key de Resend; nunca debe llevar `NEXT_PUBLIC_`.
- `RSVP_TO_EMAIL`: correo que recibirá las confirmaciones.
- `RESEND_FROM_EMAIL`: remitente perteneciente a un dominio verificado.

Para una prueba limitada puede usarse `Resend <onboarding@resend.dev>`. Este
remitente no es apropiado para producción y normalmente solo permite enviar al
correo asociado con la cuenta de Resend.

En Vercel agrega las tres variables desde **Project Settings > Environment
Variables** para Production, Preview y Development según corresponda. Después
vuelve a desplegar para aplicar cambios. La aplicación necesita ejecución del
servidor y no debe configurarse con `output: "export"`.

Como mejora futura, si aparece abuso, puede añadirse rate limiting persistente
mediante un servicio externo. Un contador en memoria no es fiable en funciones
sin estado de Vercel.
