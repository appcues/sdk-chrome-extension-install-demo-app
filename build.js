import { build, context } from 'esbuild';
import { readFileSync } from 'fs';

// Read .env
const env = {};
readFileSync('.env', 'utf-8').split('\n').forEach(line => {
  const [key, ...rest] = line.split('=');
  const value = rest.join('=');
  if (key && value) env[key.trim()] = value.trim();
});

const define = {
  'process.env.APPCUES_ACCOUNT_ID': JSON.stringify(env.APPCUES_ACCOUNT_ID || ''),
};

const commonOpts = {
  bundle: true,
  format: 'iife',
  target: 'chrome100',
  define,
};

const isWatch = process.argv.includes('--watch');

if (isWatch) {
  const ctx1 = await context({ ...commonOpts, entryPoints: ['src/content-script.js'], outfile: 'dist/content-script.js' });
  const ctx2 = await context({ ...commonOpts, entryPoints: ['src/sidebar.js'], outfile: 'dist/sidebar.js' });
  await ctx1.watch();
  await ctx2.watch();
  console.log('Watching for changes...');
} else {
  await build({ ...commonOpts, entryPoints: ['src/content-script.js'], outfile: 'dist/content-script.js' });
  await build({ ...commonOpts, entryPoints: ['src/sidebar.js'], outfile: 'dist/sidebar.js' });
  console.log('Build complete.');
}
