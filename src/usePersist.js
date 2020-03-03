import { useEffect } from "react";

export function usePersistedContext(context, key) {
  const persistedContext = localStorage.getItem(key);
  return persistedContext ? JSON.parse(persistedContext) : context;
}
// export function usePersistedContext(context, key = "productionHouse") {
//   const persistedContext = localStorage.getItem(key);
//   return persistedContext ? JSON.parse(persistedContext) : context;
// }

export function usePersistedReducer([state, dispatch], key) {
  console.log("usePersistedReducer");
  console.log("key", key);
  console.log("state", state);
  console.log("dispatch", dispatch);

  useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [state]);
  return [state, dispatch];
}
