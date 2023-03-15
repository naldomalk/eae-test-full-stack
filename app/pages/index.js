import { useState, useEffect } from "react";
import { Head, Loading, JobsFilter, JobsSort, JobsList } from "@/components";
import { api } from "@/services";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [params, setParams] = useState({});
  const [sort, setSort] = useState(null);

  const handles = {
    setLoading,

    setParams,

    setSort,

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
      <main className="px-4 py-32 bg-no-repeat bg-[url('/images/bg-header-mobile.svg')] md:bg-[url('/images/bg-header-desktop.svg')]">
        <Loading {...{ loading }} />
        <JobsFilter {...{ data, handles, params }} />
        <JobsSort {...{ data, handles, sort }} />
        <JobsList {...{ data, handles, sort }} />
      </main>
    </>
  );
}
