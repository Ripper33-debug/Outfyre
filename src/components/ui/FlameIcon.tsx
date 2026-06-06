"use client";

function FlameIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M12 2C12 2 8 8 8 13C8 16.31 9.79 19 12 19C14.21 19 16 16.31 16 13C16 8 12 2 12 2Z"
        fill="url(#flame-gradient)"
      />
      <path
        d="M12 10C12 10 10 12.5 10 14.5C10 15.88 10.9 17 12 17C13.1 17 14 15.88 14 14.5C14 12.5 12 10 12 10Z"
        fill="#FFD700"
        opacity="0.8"
      />
      <defs>
        <linearGradient id="flame-gradient" x1="12" y1="2" x2="12" y2="19">
          <stop stopColor="#FF4500" />
          <stop offset="1" stopColor="#C41E3A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export { FlameIcon };
