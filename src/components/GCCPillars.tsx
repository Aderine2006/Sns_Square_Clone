const GCCPillars = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <svg viewBox="0 0 400 300" className="w-full h-auto">
        {/* Base Platform */}
        <defs>
          <linearGradient id="baseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
          <linearGradient id="yellowPillar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="redPillar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
          <linearGradient id="tealPillar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#0D9488" />
          </linearGradient>
          <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>

        {/* Base Steps */}
        <rect x="40" y="270" width="320" height="12" rx="2" fill="url(#baseGradient)" />
        <rect x="60" y="258" width="280" height="12" rx="2" fill="url(#baseGradient)" opacity="0.9" />
        <rect x="80" y="246" width="240" height="12" rx="2" fill="url(#baseGradient)" opacity="0.8" />

        {/* Yellow Pillar - Build */}
        <g>
          <rect x="95" y="130" width="35" height="116" fill="url(#yellowPillar)" />
          <ellipse cx="112.5" cy="130" rx="17.5" ry="6" fill="#FBBF24" />
          {/* Capital */}
          <rect x="88" y="115" width="49" height="15" fill="#FDE68A" />
          <rect x="85" y="108" width="55" height="10" fill="#FCD34D" />
          {/* Fluting lines */}
          <line x1="100" y1="130" x2="100" y2="246" stroke="#D97706" strokeWidth="1" opacity="0.3" />
          <line x1="112" y1="130" x2="112" y2="246" stroke="#D97706" strokeWidth="1" opacity="0.3" />
          <line x1="124" y1="130" x2="124" y2="246" stroke="#D97706" strokeWidth="1" opacity="0.3" />
          {/* Label */}
          <text x="112" y="195" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" transform="rotate(-90, 112, 195)">Build</text>
        </g>

        {/* Red Pillar - Operate */}
        <g>
          <rect x="182" y="130" width="35" height="116" fill="url(#redPillar)" />
          <ellipse cx="199.5" cy="130" rx="17.5" ry="6" fill="#F87171" />
          {/* Capital */}
          <rect x="175" y="115" width="49" height="15" fill="#FCA5A5" />
          <rect x="172" y="108" width="55" height="10" fill="#F87171" />
          {/* Fluting lines */}
          <line x1="187" y1="130" x2="187" y2="246" stroke="#DC2626" strokeWidth="1" opacity="0.3" />
          <line x1="199" y1="130" x2="199" y2="246" stroke="#DC2626" strokeWidth="1" opacity="0.3" />
          <line x1="211" y1="130" x2="211" y2="246" stroke="#DC2626" strokeWidth="1" opacity="0.3" />
          {/* Label */}
          <text x="199" y="200" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" transform="rotate(-90, 199, 195)">Operate</text>
        </g>

        {/* Teal Pillar - Transfer */}
        <g>
          <rect x="270" y="130" width="35" height="116" fill="url(#tealPillar)" />
          <ellipse cx="287.5" cy="130" rx="17.5" ry="6" fill="#2DD4BF" />
          {/* Capital */}
          <rect x="263" y="115" width="49" height="15" fill="#5EEAD4" />
          <rect x="260" y="108" width="55" height="10" fill="#2DD4BF" />
          {/* Fluting lines */}
          <line x1="275" y1="130" x2="275" y2="246" stroke="#0D9488" strokeWidth="1" opacity="0.3" />
          <line x1="287" y1="130" x2="287" y2="246" stroke="#0D9488" strokeWidth="1" opacity="0.3" />
          <line x1="299" y1="130" x2="299" y2="246" stroke="#0D9488" strokeWidth="1" opacity="0.3" />
          {/* Label */}
          <text x="287" y="200" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" transform="rotate(-90, 287, 195)">Transfer</text>
        </g>

        {/* Roof Structure */}
        <polygon points="200,30 70,95 330,95" fill="url(#roofGradient)" />
        <rect x="70" y="95" width="260" height="15" fill="#3B82F6" />

        {/* Roof Text Bar */}
        <rect x="90" y="78" width="220" height="20" rx="3" fill="#1E40AF" />
        <text x="200" y="92" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">DATA + AGENTIC AI - HUB</text>

        {/* GCC Text on roof */}
        <text x="200" y="65" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">GCC</text>
      </svg>
    </div>
  );
};

export default GCCPillars;
