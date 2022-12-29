export default {
  title: 'Organisms/Header',
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export const Header = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
    <nav className="navbar">
      <a className="navbar-title" href="">
        conduit
      </a>
      <ul className="navbar-links">
        <li className="nav-item">
          <a className="rl-link" href="">
            Log in
          </a>
        </li>
        <li className="nav-item">
          <a className="rl-btn-primary" href="">
            Create account
          </a>
        </li>
      </ul>
    </nav>

    <nav className="navbar">
      <a className="navbar-title" href="">
        conduit
      </a>
      <ul className="navbar-links">
        <li className="nav-item">
          <a className="rl-btn-primary" href="">
            Create article
          </a>
        </li>
        <li className="nav-item">
          <a className="rl-link" href="">
            Settings
          </a>
        </li>
        <li className="nav-item">
          <a className="rl-link" href="">
            Gerome
          </a>
        </li>
      </ul>
    </nav>

    <nav className="navbar">
      <a className="navbar-title" href="">
        conduit
      </a>

      <ul className="navbar-links">
        <li className="nav-item">
          <input className="rl-form-control" type="text" placeholder="Search" />
        </li>
        <li className="nav-item">
          <a className="rl-btn-primary" href="">
            Create article
          </a>
        </li>
        <li className="nav-item">
          <a className="rl-link" href="">
            Settings
          </a>
        </li>
        <li className="nav-item">
          <a className="rl-link" href="">
            Gerome
          </a>
        </li>
      </ul>
    </nav>

    <nav className="navbar">
      <a className="navbar-title" href="">
        conduit
      </a>

      <ul className="navbar-links">
        <li className="nav-item">
          <input className="rl-form-control" type="text" placeholder="Search" />
        </li>
        <li className="nav-item">
          <a className="rl-btn-primary" href="">
            Create article
          </a>
        </li>
        <li className="nav-item">
          <a className="rl-link" href="">
            <img className="rl-avatar" src="avatar.png" alt="user avatar image" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
);