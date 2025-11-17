import type { Negocio } from '../types/negocio';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000';

export async function getNegocios(signal?: AbortSignal): Promise<Negocio[]> {
  const response = await fetch(`${API_BASE_URL}/api/negocios`, { signal });

  if (!response.ok) {
    throw new Error('No se pudieron cargar los negocios');
  }

  const data: Negocio[] = await response.json();
  return data;
}
