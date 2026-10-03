export type ImagePreparer = (url: string) => Promise<void>;

export async function withinDeadline<T>(task: Promise<T>, timeoutMs: number): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      task,
      new Promise<never>((_, reject) => {
        timer = setTimeout(() => reject(new Error('Tempo de preparação da imagem excedido')), timeoutMs);
      }),
    ]);
  } finally {
    clearTimeout(timer);
  }
}

export function createImagePreparer(decode: ImagePreparer, timeoutMs = 15000): ImagePreparer {
  const readyImages = new Map<string, Promise<void>>();
  return (url: string): Promise<void> => {
    const existing = readyImages.get(url);
    if (existing) return existing;
    const ready = withinDeadline(decode(url), timeoutMs).catch((error: unknown) => {
      if (readyImages.get(url) === ready) readyImages.delete(url);
      throw error;
    });
    readyImages.set(url, ready);
    return ready;
  };
}
