/**
 * Local media paths (downloaded from WordPress uploads into public/media).
 * Falls back to remote WP URL only if LOCAL_MEDIA is false.
 */
const LOCAL_MEDIA = true
const REMOTE_MEDIA = "https://sntolo.com/wp-content/uploads"
const LOCAL_BASE = "/media"

export const MEDIA = LOCAL_MEDIA ? LOCAL_BASE : REMOTE_MEDIA

export const media = (path: string) => `${MEDIA}/${path}`
