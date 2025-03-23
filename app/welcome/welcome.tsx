import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome({ message }: { message: string }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex flex-col items-center gap-9 pt-16">
        <div className="w-[300px] max-w-[100vw] p-4">
          <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SOMIS AI
          </h1>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center gap-8">
          <section className="text-center max-w-2xl px-4">
            <h2 className="text-4xl font-bold mb-4">Intelligent Solutions for Tomorrow</h2>
            
          </section>

          <div className="max-w-[300px] w-full space-y-6 px-4">
            <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
              <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                Explore Our Solutions
              </p>
              <ul>
                {resources.map(({ href, text, icon }) => (
                  <li key={href}>
                    <a
                      className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {icon}
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </main>

      <footer className="text-center py-6">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} SOMIS-AI. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

const resources = [
  {
    href: "https://somis-ai.com/solutions",
    text: "Our Expertise",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
  },
  {
    href: "https://somis-ai.com/contact",
    text: "Contact Us",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];
