import {Theme} from './type';

export const initThemeFetch = async (): Promise<Theme[]> => {
  const res = await fetch('/api/theme');
  const data = await res.json();
  return data;
};

export const poinTotalUser = async (obj: {
  points: number;
  id: number;
}): Promise<{score: number}> => {
  const res = await fetch(`/api/score/${obj.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const data = await res.json();
  return data;
};
