interface PageHeroProps {
  title: string;
  description?: string;
}

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="mesh-bg relative overflow-hidden px-4 pb-12 pt-28 md:px-6 md:pb-16 md:pt-36">
      <div className="orb -left-20 top-12 h-64 w-64 bg-secondary/20" />
      <div className="orb right-0 top-24 h-56 w-56 bg-accent/20" />
      <div className="relative mx-auto max-w-4xl">
        <span className="section-kicker">Centrum wiedzy</span>
        <h1 className="mb-5 max-w-3xl text-text-primary">{title}</h1>
        {description && (
          <p className="max-w-2xl text-lg leading-8 text-text-secondary">{description}</p>
        )}
      </div>
    </section>
  );
}
