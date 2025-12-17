function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./core', true, /\.js$/));
importAll(require.context('./assembly', true, /\.js$/));
importAll(require.context('./control', true, /\.js$/));
importAll(require.context('./structure', true, /\.js$/));

// percorre os arquivos das subpastas de forma recursiva