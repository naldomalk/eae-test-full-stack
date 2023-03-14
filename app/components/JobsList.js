export function JobsList({ data, handles }) {
  handles = {
    ...handles,

    onClick: () => alert("Hello world!"),
  };

  return data.jobs?.map((job) => (
    <div
      key={`job-${job.id}`}
      onClick={() => handles.onClick(job)}
      className="grid grid-cols-2 hover:cursor-pointer my-2 bg-white"
    >
      <div
        className="py-4"
        style={{
          borderLeft: `4px solid var(${job.new ? "--primary" : "--white"})`,
        }}
      >
        <div
          className="h-24 pl-28 ml-4 bg-no-repeat"
          style={{ backgroundImage: `url(${job.logo})` }}
        >
          <div className="flex text-xs">
            <div className="mr-2">{job.company}</div>
            {job.new && (
              <div className="rounded text-white mx-1 px-4 bg-primary">
                NEW!
              </div>
            )}
            {job.featured && (
              <div className="rounded text-white mx-1 px-4 bg-black">
                FEATURED
              </div>
            )}
          </div>

          <div className="font-bold text-base py-1 hover:text-primary">
            {job.position}
          </div>

          <div className="grid grid-cols-3 text-grey gap-4 w-60">
            <div>{job.postedAt}</div>
            <div>{job.contract}</div>
            <div>{job.location}</div>
          </div>
        </div>
      </div>
      <div className="py-4 text-sm text-primary">
        <div className="flex">
          {[job.role, ...(job.tools || [])].map((tool) => (
            <div
              key={`${job.id}-${tool}`}
              className="rounded bg-grey-50 hover:bg-primary hover:text-white py-1 px-4 mx-1"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>
  ));
}
