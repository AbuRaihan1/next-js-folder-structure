export default function Home() {
  return (
    <main className="bg-white text-center">
      <h2>Exploring Folder structure in next js</h2>

      <div className="bg-black underline text-red-50">
        <p>
          <strong>.next:</strong> This folder is generated when we build the
          project. It contains the compiled output, server code, and other
          build-related files.
        </p>

        <p>
          <strong>node_modules:</strong> This folder contains all the project's
          dependencies, installed using npm.
        </p>

        <p>
          <strong>public:</strong> Static assets like images, fonts, etc., go
          here. They are publicly accessible and can be linked in our
          components.
        </p>

        <p>
          <strong>src:</strong> This is where most of our code will reside.
        </p>

        <ul>
          <li>
            <strong>pages:</strong> This is a special folder in Next.js. Each
            file in this folder becomes a route. For example,{" "}
            <code>src/pages/index.js</code> corresponds to the root URL.
          </li>
          <li>
            <strong>components:</strong> This folder holds our React components.
            These can be reused across different pages.
          </li>
          <li>
            <strong>styles:</strong> CSS files or styling-related assets are
            kept here.
          </li>
          <li>
            <strong>utils:</strong> Utility functions or helper files can be
            placed here.
          </li>
        </ul>

        <p>
          <strong>package.json:</strong> This file contains project metadata and
          lists dependencies. It also includes scripts that we can use for
          various tasks.
        </p>

        <p>
          <strong>package-lock.json:</strong> This file is generated by npm and
          keeps track of the exact version of each installed package.
        </p>

        <p>
          <strong>README.md:</strong> This is where we can provide documentation
          or information about our project.
        </p>

        <p>
          <strong>.gitignore:</strong> This file specifies which files and
          folders should not be tracked by version control (Git).
        </p>

        <p>
          <strong>next.config.js:</strong> This file allows us to customize
          Next.js configuration.
        </p>
      </div>
    </main>
  );
}
