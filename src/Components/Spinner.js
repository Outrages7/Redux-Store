import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-12 bg-neutral-50">
      <Spinner
        animation="border"
        role="status"
        className="opacity-70"
      />
      <span className="ms-2 text-stone-500 text-sm tracking-wide">
        Loading...
      </span>
    </div>
  );
};

export default LoadingSpinner;
