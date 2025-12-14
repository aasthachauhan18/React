import React from "react";
import { Link } from "react-router";

function jsxCompo() {
  return (
    <>
      <h2>Jsx Components</h2>
      <div>
        <ol>
          <li><Link className="text-center text-dark text-decoration-none">Theory</Link></li>
          <li><Link className="text-center text-dark text-decoration-none">JSX Syntax</Link></li>
          <li><Link className="text-center text-dark text-decoration-none">JSX Rules and Best Practices</Link></li>
          <li><Link className="text-center text-dark text-decoration-none">Expressions must be inside </Link></li>
          <li><Link className="text-center text-dark text-decoration-none"> Avoid injecting raw HTML</Link></li>
          <li><Link className="text-center text-dark text-decoration-none">meaningful key when rendering lists</Link></li>
        </ol>
      </div>
    </>
  );
}

export default jsxCompo;
