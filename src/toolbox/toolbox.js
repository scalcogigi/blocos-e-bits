export const toolbox = {
  'kind': 'categoryToolbox',
  'contents': [
    {
      'kind': 'category',
      'name': 'Operandos',
      'colour': '#8E44AD',
      'contents': [
        { 'kind': 'block', 'type': 'reg' },
        { 'kind': 'block', 'type': 'mem' },
        { 'kind': 'block', 'type': 'im' }
      ]
    },
    {
      'kind': 'category',
      'name': 'Instruções',
      'colour': '#2980B9',
      'contents': [
        { 'kind': 'block', 'type': 'movw' },
        { 'kind': 'block', 'type': 'addw' },
        { 'kind': 'block', 'type': 'subw' },
        { 'kind': 'block', 'type': 'incw' }
      ]
    },
    {
      'kind': 'category',
      'name': 'Controle de Fluxo',
      'colour': '#27AE60',
      'contents': [
        { 'kind': 'block', 'type': 'label' },
        { 'kind': 'block', 'type': 'jump' }
      ]
    },
    {
      'kind': 'category',
      'name': 'JSON',
      'colour': '#B03A2E',
      'contents': [
        { 'kind': 'block', 'type': 'object' },
        { 'kind': 'block', 'type': 'member' },
        { 'kind': 'block', 'type': 'math_number' },
        { 'kind': 'block', 'type': 'text' },
        { 'kind': 'block', 'type': 'logic_boolean' },
        { 'kind': 'block', 'type': 'logic_null' }
      ]
    }
  ]
};
