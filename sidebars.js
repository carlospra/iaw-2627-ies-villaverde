// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  curso: [
    'intro',
    {
      type: 'category',
      label: 'UT1 · Servidores de aplicaciones web',
      link: { type: 'doc', id: 'ut1/indice' },
      items: ['ut1/tu-servidor', 'ut1/que-hay-detras', 'ut1/cliente-servidor-http', 'ut1/ejercicios-dia1'],
    },
    'ut2', 'ut3', 'ut4', 'ut5', 'ut6', 'ut7',
  ],
};

export default sidebars;
