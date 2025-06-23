import { build } from 'vite';
import fs from 'fs-extra';
import path from 'path';

async function buildStatic() {
  console.log('Building static version for GitHub Pages...');
  
  // Build with static config
  await build({
    configFile: 'vite.config.static.ts',
    build: {
      rollupOptions: {
        input: {
          main: path.resolve('client/index-static.html')
        }
      }
    }
  });
  
  // Copy resume to dist folder
  const resumeSource = path.resolve('attached_assets/Ashutosh Yesekar Latest.pdf');
  const resumeDest = path.resolve('dist/Ashutosh_Yesekar_Latest.pdf');
  
  if (fs.existsSync(resumeSource)) {
    await fs.copy(resumeSource, resumeDest);
    console.log('Resume copied to dist folder');
  }
  
  // Create CNAME file if you have a custom domain (optional)
  // await fs.writeFile('dist/CNAME', 'your-domain.com');
  
  console.log('Static build completed!');
  console.log('Files are ready in the dist/ folder for GitHub Pages deployment');
}

buildStatic().catch(console.error);