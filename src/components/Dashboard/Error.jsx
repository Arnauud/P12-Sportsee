import React from "react";

function ErrorMessage({ userId, message }) {
  return (
    <section className="dashboard-error-container">
        <div className="dashboard-error-message">
      <h2>UserID or Data Not Found</h2>
      <p>
        {message || (
          <>
            The user data for the specified <span>user ID {userId}</span> does not exist or could not be retrieved.
          </>
        )}
      </p>
      </div>
    </section>
  );
}

export default ErrorMessage;
