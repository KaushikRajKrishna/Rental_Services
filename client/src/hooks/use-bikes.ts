import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

// The app can run without a backend by using a static JSON file placed in
// `client/public/bikes.json`. Production deployments without a server should
// set no VITE_API_BASE so the client will load the static file. If you do
// deploy a backend later, set `VITE_API_BASE` to the API origin.
const API_BASE = (import.meta.env.VITE_API_BASE as string | undefined) ?? "";

export function useBikes() {
  return useQuery({
    queryKey: ["bikes", API_BASE],
    queryFn: async () => {
      const url = API_BASE ? `${API_BASE}${api.bikes.list.path}` : "/bikes.json";
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch fleet");
      const data = await res.json();
      // If using the backend, parse with the route schema. If using the static file
      // it should already match the expected shape.
      if (API_BASE) return api.bikes.list.responses[200].parse(data);
      return data;
    },
  });
}

export function useBike(id: number) {
  return useQuery({
    queryKey: ["bike", id, API_BASE],
    queryFn: async () => {
      if (!id) return null;
      if (API_BASE) {
        const url = buildUrl(api.bikes.get.path, { id });
        const res = await fetch(`${API_BASE}${url}`);
        if (res.status === 404) return null;
        if (!res.ok) throw new Error("Failed to fetch bike details");
        return api.bikes.get.responses[200].parse(await res.json());
      }

      // Static fallback: fetch the whole bikes.json and find the item by id
      const res = await fetch("/bikes.json");
      if (!res.ok) throw new Error("Failed to fetch fleet");
      const list = await res.json();
      const found = list.find((b: any) => Number(b.id) === Number(id));
      return found ?? null;
    },
    enabled: !!id,
  });
}
