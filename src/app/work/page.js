import { projects } from "@/lib/site";

export const metadata = {
  title: "Work",
  description: "A selection of projects from Atiij Studio.",
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-border py-20">
        <div className="shell">
          <span className="eyebrow">Our work</span>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            A few things we&apos;ve built.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Placeholder case studies below — swap these for real projects as they ship.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="shell grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <div key={project.title} className="card overflow-hidden p-0">
              <div
                className="h-40 w-full"
                style={{
                  background:
                    i % 2 === 0
                      ? "linear-gradient(135deg, var(--accent), var(--accent-2))"
                      : "linear-gradient(135deg, var(--accent-2), var(--accent))",
                }}
              />
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mt-3 font-display text-lg font-semibold">{project.title}</h2>
                <p className="mt-1.5 text-sm text-muted">{project.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
