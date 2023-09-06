interface JobBannerProps {
  isLookingForJob: boolean;
}

export function JobBanner(props: JobBannerProps) {
  const { isLookingForJob } = props;

  return (
    <div
      className={"p-2 rounded-xl inline-flex items-center justify-center gap-x-2 bg-background-10 dark:bg-background-10-dark"}
    >
      <div
        className={`w-4 h-4 rounded-full ${
          isLookingForJob ? "bg-emerald-400" : "bg-red-500"
        } inline-block`}
      />
      <span>
        {isLookingForJob
          ? "Currently looking for work"
          : "Not looking for work"}
      </span>
    </div>
  );
}
