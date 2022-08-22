import { useState } from "react";

interface UseMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}

type UseMutationResult = [(data: any) => void, UseMutationState];

/* V1 [ (data: any) => void, { loading: boolean; data: undefined | any; error: undefined | any } ] */
/* V2 UseMutationResult */
export default function useMutation(url: string): UseMutationResult {
  /* V1
        const [loading, setLoading] = useState(false);
        const [data, setData] = useState<undefined | any>(undefined);
        const [error, setError] = useState<undefined | any>(undefined);
    */

  /* V2 */
  const [state, setState] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });

  function mutation(data: any) {
    // setLoading(true);

    /* V1 내가한것. setState({loading: true, data: undefined, error: undefined}) */
    /* V2 쌤이 한것 크... 맞네 spread operator 로 해결 */
    setState((prev) => ({ ...prev, loading: true }));
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json().catch(() => {}))
      /* V1
        .then(setData)
        .catch(setError)
        .finally(() => setLoading(false)); 
      */
      /* V2 */
      .then((data) => setState((prev) => ({ ...prev, data })))
      .catch((error) => setState((prev) => ({ ...prev, error })))
      .finally(() => setState((prev) => ({ ...prev, loading: false })));
  }

  return [mutation, { ...state }];
}
