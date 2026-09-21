// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const USUARIO = 'carlospra';
const REPO = 'iaw-2627-ies-villaverde';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IAW',
  tagline: 'Implantación de aplicaciones web · 2º ASIR · IES Villaverde',
  favicon: 'img/favicon.ico',

  url: `https://${USUARIO}.github.io`,
  baseUrl: `/${REPO}/`,
  organizationName: USUARIO,
  projectName: REPO,
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: { format: 'detect' },

  i18n: { defaultLocale: 'es', locales: ['es'] },

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Ubuntu+Sans:wght@300..700&family=Ubuntu+Sans+Mono&display=swap',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: { routeBasePath: '/', sidebarPath: './sidebars.js' },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'IAW',
        style: 'dark',
        items: [
          { to: '/', label: 'Inicio', position: 'left', activeBaseRegex: `^/${REPO}/?$` },
          { to: '/ut1', label: 'UT1', position: 'left' },
          { href: 'https://aulavirtual32.educa.madrid.org/ies.villaverde.madrid/', label: 'Aula virtual', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        copyright: 'Curso 2026-2027 · IES Villaverde · Carlos Fernández Pradales.',
      },
      prism: {
        theme: prismThemes.vsDark,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ['bash', 'php', 'sql', 'apacheconf'],
      },
    }),
};

export default config;
