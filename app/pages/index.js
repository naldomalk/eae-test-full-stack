import { useState, useEffect } from "react";
import { Head, Loading, JobsFilter, JobsList } from "@/components";
import { api } from "@/services";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [params, setParams] = useState({ _sort: 1 });

  const handles = {
    setLoading,

    setParams,

    get: () =>
      api({
        method: "get",
        route: `/api/jobs/get?${new URLSearchParams(params).toString()}`,
        setLoading,
        success: (res) => setData((data) => ({ ...res.data })),
      }),
  };

  useEffect(() => {
    handles.get();
  }, [params]);

  return (
    <>
      <Head />
      <main className="container px-4">
        <Loading {...{ loading }} />
        <JobsFilter {...{ data, handles, params }} />
        <JobsList {...{ data, handles }} />
      </main>
    </>
  );
}
