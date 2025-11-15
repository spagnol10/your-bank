import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-100 dark:bg-black px-4">
      <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
        Not Found
      </h2>

      <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-center">
        Could not find the requested resource.
      </p>

      <Link
        href="/"
        className="
          px-6 py-3 rounded-full 
          bg-zinc-900 text-zinc-50
          dark:bg-zinc-50 dark:text-zinc-900
          hover:bg-zinc-800 dark:hover:bg-zinc-200
          transition-colors font-medium
        "
      >
        Return Home
      </Link>
    </div>
  );
}
