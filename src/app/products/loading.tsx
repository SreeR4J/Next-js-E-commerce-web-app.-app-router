export default function loading() {
  return (
    // Outer container: Centers the window on the screen
    <div 
      className="flex min-h-screen items-center justify-center bg-gray-100/50 p-4 dark:bg-gray-950/50"
      role="status"
      aria-live="polite"
    >
      {/* The Loading Window */}
      <div className="flex w-full max-w-sm flex-col items-center rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-900">
        
        {/* CSS Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600 dark:border-gray-700 dark:border-t-blue-500" />
        
        {/* Text */}
        <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-100">
          Loading...
        </h3>
        <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
          Please wait while we prepare your content.
        </p>

        <span className="sr-only">Loading, please wait.</span>
      </div>
    </div>
  );
}