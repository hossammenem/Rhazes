import LoadingSpinner from "./components/LoadingSpinner";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#0d0d0d] text-3xl">
      <LoadingSpinner />
    </div>
  );
}
