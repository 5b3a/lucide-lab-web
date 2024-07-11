function instrucData(iconId) {
  const tableData = {
    react: `import { ${iconId}} from '@lucide/lab';
import { Icon } from 'lucide-react';

function App() {
  return (
    <div>
      <Icon iconNode={${iconId}} />
    </div>
  );
}`,
    vue: `<script setup>
import { ${iconId} } from '@lucide/lab';
import {  } from 'lucide-vue-next';
</script>

<template>
  <div>
    <Icon :iconNode="${iconId}" />
  </div>
</template>`,
    "p-reaact": `
    import { ${iconId} } from '@lucide/lab';
import { Icon } from 'lucide-preact';

function App() {
  return (
    <div>
      <Icon iconNode={${iconId}} />
    </div>
  );
}`,
    svelte: `<script>
import { Icon } from 'lucide-svelte';
import { ${iconId} from '@lucide/lab';
</script>

<Icon iconNode={${iconId}} />
`,
    solid: `import { ${iconId} } from '@lucide/lab';
import { Icon } from 'lucide-solid';

function App() {
  return (
    <div>
      <Icon iconNode={${iconId}} />
    </div>
  );
}`,
  };
  return tableData
}
export default instrucData