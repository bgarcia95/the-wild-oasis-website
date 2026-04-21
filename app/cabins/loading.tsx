import Spinner from "../_components/Spinner";

// This will work for all loading states in cabins, but you can customize it to be more specific if you want.
export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-200">Loading cabin data...</p>
    </div>
  );
}
