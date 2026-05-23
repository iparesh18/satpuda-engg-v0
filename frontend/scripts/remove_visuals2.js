const fs = require('fs');
const path = require('path');

const files = [
  'cse-section.jsx',
  'civil-section.jsx',
  'electrical-section.jsx',
  'mechanical-section.jsx',
  'mining-section.jsx'
].map(f => path.join('c:\\Users\\dahar\\Desktop\\satpuda-engg-v0\\frontend\\components\\sections\\academics', f));

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    
    // First, let's remove any comments that might precede it (optional, but good for cleanup)
    // Actually just removing the section itself is enough.
    const regex = /(?:\s*\{\/\*.*?\*\/\})?\s*<section className="py-24 relative overflow-hidden bg-card\/10">[\s\S]*?<\/section>/;
    
    if (regex.test(content)) {
      content = content.replace(regex, '');
      fs.writeFileSync(file, content);
      console.log(`Updated ${file}`);
    } else {
      console.log(`Section not found in ${file}`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});
