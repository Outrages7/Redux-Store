import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <Spinner
        animation="border"
        role="status"
      />
      <span className="ms-2">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
