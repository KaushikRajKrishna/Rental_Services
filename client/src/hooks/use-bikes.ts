import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

export function useBikes() {
  return useQuery({
    queryKey: [api.bikes.list.path],
    queryFn: async () => {
      const res = await fetch(api.bikes.list.path);
      if (!res.ok) throw new Error("Failed to fetch fleet");
      return api.bikes.list.responses[200].parse(await res.json());
    },
  });
}

export function useBike(id: number) {
  return useQuery({
    queryKey: [api.bikes.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.bikes.get.path, { id });
      const res = await fetch(url);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch bike details");
      return api.bikes.get.responses[200].parse(await res.json());
    },
    enabled: !!id,
  });
}
