# Media assets

Archivos locales en `public/media/` (misma estructura año/mes que WordPress uploads).  
El sitio usa rutas `/media/...` vía `utils/media.ts`.

## Estado actual

| Grupo | Local | Notas |
|-------|-------|-------|
| Home (logos, símbolos, covers, UI, collage parcial) | ~29 archivos | Recuperados de Wayback (mayo 2024) |
| Audio MP3 (tracks 2–6) | Faltan 5 | Solo está `1.Pit-V3.mp3` |
| GIFs hover demonios | Faltan 6 | Covers estáticos sí están |
| Collage `#fotos` | Faltan 2 | `personaje4`, `personaje5` |
| Galerías de personajes | Faltan 57 | No hay captura binaria en Archive.org |

`sntolo.com` no resuelve DNS. Archive.org tiene el HTML y parte de los assets de 2023, pero **no** los JPG/PNG/GIF/MP3 de 2024/05–07.

## Cómo completar lo faltante

1. Conseguí un backup de `wp-content/uploads/` (hosting, Time Machine, disco local).
2. Copiá los paths listados en `_download-report.json` → `absent` dentro de `public/media/`.
3. Opcional: reintentá Archive.org con `pnpm media:download`.

Ejemplo:

```bash
cp ~/backup/uploads/2024/05/lilith01.png public/media/2024/05/
cp ~/backup/uploads/2023/08/*.mp3 public/media/2023/08/
cp ~/backup/uploads/2023/08/*.gif public/media/2023/08/
```
