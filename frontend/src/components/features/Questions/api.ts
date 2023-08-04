import {Theme} from './type';

export const initThemeFetch = async (): Promise<Theme[]> => {
  const res = await fetch('/api/theme');
  const data = await res.json();
  return data;
};
