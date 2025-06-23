import { build } from 'vite';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function buildStatic() {
  console.log('Building static version for GitHub Pages...');
  
  try {
    // Build with static config
    await build({
      configFile: path.resolve(__dirname, 'vite.config.static.ts'),
      build: {
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'client/index-static.html')
          }
        }
      }
    });
    
    // Copy resume to dist folder
    const resumeSource = path.resolve(__dirname, 'attached_assets/Ashutosh Yesekar Latest.pdf');
    const resumeDest = path.resolve(__dirname, 'dist/Ashutosh_Yesekar_Latest.pdf');
    
    if (fs.existsSync(resumeSource)) {
      await fs.copy(resumeSource, resumeDest);
      console.log('✅ Resume copied to dist folder');
    } else {
      console.warn('⚠️  Resume file not found, skipping copy');
    }
    
    // Create a simple index redirect for root access
    const indexContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <meta http-equiv="refresh" content="0; url=./index.html">
</head>
<body>
  <p>If you are not redirected automatically, <a href="./index.html">click here</a>.</p>
</body>
</html>`;
    
    await fs.writeFile(path.resolve(__dirname, 'dist/404.html'), indexContent);
    console.log('✅ 404.html created for GitHub Pages routing');
    
    console.log('🎉 Static build completed successfully!');
    console.log('📁 Files are ready in the dist/ folder for GitHub Pages deployment');
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

buildStatic();