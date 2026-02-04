const Stats = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {/* Databricks Stat */}
          <div className="bg-card border border-border rounded-2xl p-6 flex items-center gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                <path d="M16 2L2 10v12l14 8 14-8V10L16 2z" fill="#FF3621"/>
                <path d="M16 2v28M2 10l14 8 14-8" stroke="white" strokeWidth="1"/>
              </svg>
              <span className="text-sm font-medium text-muted-foreground">Databricks</span>
            </div>
            <div className="border-l border-border pl-6">
              <div className="text-3xl font-bold text-foreground">150+</div>
              <div className="text-sm text-muted-foreground">Certified AI Associates</div>
            </div>
          </div>

          {/* Agents Stat */}
          <div className="bg-card border border-border rounded-2xl p-6 flex items-center gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="8" cy="8" r="3"/>
                  <circle cx="16" cy="8" r="3"/>
                  <circle cx="8" cy="16" r="3"/>
                  <circle cx="16" cy="16" r="3"/>
                </svg>
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">1500+</div>
              <div className="text-sm text-muted-foreground">
                Foundational Agents,<br/>
                Industry Specific Agents &<br/>
                Solutions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
