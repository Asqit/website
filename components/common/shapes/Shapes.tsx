/** animated svg image for hero section */
export function Shapes() {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="512"
      height="512"
      className="animate-fade-in-up"
    >
      <title>shapes</title>
      <style>
        {`
          .shape {
            opacity: 0.7;
          }
          .shape1 {
            animation: float 3s ease-in-out infinite;
          }
          .shape2 {
            animation: float 3s ease-in-out infinite;
            animation-delay: 1.5s;
          }
          .shape3 {
            animation: float 3s ease-in-out infinite;
            animation-delay: 2s;
          }
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
      <rect
        className="shape shape1 fill-current text-primary"
        x="0"
        y="20"
        width="250"
        height="250"
      />
      <circle
        className="shape shape2 fill-current text-primary"
        cx="250"
        cy="250"
        r="120"
      />
      <polygon
        className="shape shape3 fill-current text-primary"
        points="
          0,400
          250,400
          125,183
        "
      />
    </svg>
  );
}
