import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-dark text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <p className="text-gray-400 mb-8">
          The project you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link
          href="/#projects"
          className="inline-flex items-center px-6 py-3 bg-primary text-white font-bold rounded hover:bg-primary/90 transition-colors"
        >
          <i className="fas fa-arrow-left mr-2"></i>
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
