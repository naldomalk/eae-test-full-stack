import { useState, useEffect } from "react";
import { Head, Loading, JobsFilter, JobsList } from "@/components";
import { api } from "@/services";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [params, setParams] = useState({ filters: null, _sort: 1 });

  const handles = {
    setLoading,
    get: () =>
      api({
        method: "get",
        route: `/api/jobs/get?${""}`,
        setLoading,
        success: (res) => setData((data) => ({ ...res.data })),
      }),
  };

  useEffect(() => {
    handles.get();
  }, []);

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
