export const StockSkeleton = () => {
  return (
    <div className="rounded-xl border bg-card p-4 text-primary">
      <div className="float-right inline-block w-fit rounded-full bg-muted px-2 py-1 text-xs text-transparent">
        xxxxxxx
      </div>
      <div className="mb-1 w-fit rounded-md bg-muted text-lg text-transparent">
        xxxx
      </div>
      <div className="w-fit rounded-md bg-muted text-3xl font-bold text-transparent">
        xxxx
      </div>
      <div className="text mt-1 w-fit rounded-md bg-muted text-xs text-transparent">
        xxxxxx xxx xx xxxx xx xxx
      </div>

      <div className="relative -mx-4 cursor-col-resize">
        <div style={{ height: 146 }}></div>
      </div>
    </div>
  );
};
