
export default function Loading() {
  return (
    <div className="loading-page">
      <div className="loader"></div>
      <h2>Loading Student Directory...</h2>
      <p>Please wait while we prepare your page.</p>

      <style jsx>{`
        .loading-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          color: #192846;
          font-family: Arial, sans-serif;
        }

        .loader {
          width: 45px;
          height: 45px;
          border: 4px solid #e2e8f0;
          border-top-color: #c0006d;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin-bottom: 20px;
        }

        h2 {
          font-size: 22px;
          margin-bottom: 8px;
        }

        p {
          color: #64748b;
          font-size: 14px;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
